import { Component, OnInit, inject, input, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BlogStore } from '../../shared/blog-store';
import { BlogBlock, BlogPost } from '../../shared/blog-data';
import { fileToResizedDataUrl } from '../../shared/image-util';

type BlockType = BlogBlock['type'];

@Component({
  selector: 'app-blog-editor',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './blog-editor.html',
  styleUrl: './blog-editor.scss',
})
export class BlogEditor implements OnInit {
  /** Present on the edit route (/blog/admin/edit/:slug); empty when writing new. */
  readonly slug = input('');

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  protected readonly store = inject(BlogStore);

  protected readonly isEditing = signal(false);
  protected readonly notFound = signal(false);
  protected readonly statusMsg = signal('');
  /** Preview of the page address (derived from the title for new posts). */
  protected readonly webAddress = signal('');
  private existingSlug: string | null = null;

  protected readonly categories = [
    'Property Management',
    'Tenant Management',
    'Facilities Management',
    'Project & Development Support',
    'Service Charge Administration',
    'Real Estate Consulting',
  ];

  protected readonly form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(4)]],
    category: ['Property Management', Validators.required],
    author: ['Sheila W. Gichangi', Validators.required],
    date: ['', Validators.required],
    readMinutes: [4, [Validators.required, Validators.min(1)]],
    excerpt: ['', [Validators.required, Validators.minLength(10)]],
    heroImage: ['', Validators.required],
    blocks: this.fb.array<FormGroup>([]),
  });

  get blocks(): FormArray<FormGroup> {
    return this.form.controls.blocks;
  }

  ngOnInit(): void {
    const slug = this.slug();
    if (slug) {
      const post = this.store.get(slug);
      if (!post) {
        this.notFound.set(true);
        return;
      }
      this.existingSlug = post.slug;
      this.webAddress.set(post.slug);
      this.isEditing.set(true);
      this.loadPost(post);
    } else {
      this.addBlock('paragraph');
    }
  }

  private loadPost(post: BlogPost): void {
    this.blocks.clear();
    for (const b of post.body) this.blocks.push(this.makeBlock(b.type, b));
    this.form.patchValue({
      title: post.title,
      category: post.category,
      author: post.author,
      date: post.date,
      readMinutes: post.readMinutes,
      excerpt: post.excerpt,
      heroImage: post.heroImage,
    });
  }

  // ---- title / slug ---------------------------------------------------------

  onTitleInput(): void {
    if (this.existingSlug) return; // keep address stable when editing
    this.webAddress.set(this.slugify(this.form.controls.title.value));
  }

  private slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .slice(0, 70);
  }

  // ---- blocks ---------------------------------------------------------------

  private makeBlock(type: BlockType, source?: Partial<BlogBlock>): FormGroup {
    const s = (source ?? {}) as Record<string, string>;
    return this.fb.nonNullable.group({
      type: type as string,
      text: s['text'] ?? '',
      src: s['src'] ?? '',
      alt: s['alt'] ?? '',
      caption: s['caption'] ?? '',
    });
  }

  addBlock(type: BlockType): void {
    this.blocks.push(this.makeBlock(type));
  }

  removeBlock(i: number): void {
    this.blocks.removeAt(i);
  }

  moveBlock(i: number, dir: -1 | 1): void {
    const j = i + dir;
    if (j < 0 || j >= this.blocks.length) return;
    const ctrl = this.blocks.at(i);
    this.blocks.removeAt(i);
    this.blocks.insert(j, ctrl);
  }

  blockType(i: number): BlockType {
    return this.blocks.at(i).controls['type'].value as BlockType;
  }

  // ---- image uploads (client-side, no server) -------------------------------

  async onHeroFile(event: Event): Promise<void> {
    const url = await this.readChosenFile(event, 1280);
    if (url) this.form.controls.heroImage.setValue(url);
  }

  async onBlockFile(event: Event, i: number): Promise<void> {
    const url = await this.readChosenFile(event, 1100);
    if (url) this.blocks.at(i).controls['src'].setValue(url);
  }

  setHero(path: string): void {
    this.form.controls.heroImage.setValue(path);
  }

  private async readChosenFile(event: Event, maxDim: number): Promise<string | null> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return null;
    this.statusMsg.set('Processing image…');
    try {
      const url = await fileToResizedDataUrl(file, maxDim);
      this.statusMsg.set('');
      return url;
    } catch {
      this.statusMsg.set('Sorry, that image could not be read. Try a JPG or PNG.');
      return null;
    }
  }

  // ---- save -----------------------------------------------------------------

  save(): void {
    if (this.form.invalid || this.blocks.length === 0) {
      this.form.markAllAsTouched();
      this.statusMsg.set('Please fill in the highlighted fields and add at least one content block.');
      return;
    }
    const v = this.form.getRawValue();
    const body: BlogBlock[] = this.blocks.controls
      .map((g) => this.toBlock(g))
      .filter((b): b is BlogBlock => b !== null);
    if (body.length === 0) {
      this.statusMsg.set('Please add some content before saving.');
      return;
    }

    const post: BlogPost = {
      slug: this.existingSlug ?? this.slugify(v.title),
      title: v.title,
      excerpt: v.excerpt,
      category: v.category,
      author: v.author,
      date: v.date,
      readMinutes: Number(v.readMinutes),
      heroImage: v.heroImage,
      body,
    };
    this.store.save(post);
    this.router.navigate(['/blog/admin']);
  }

  private toBlock(g: FormGroup): BlogBlock | null {
    const type = g.controls['type'].value as BlockType;
    if (type === 'image') {
      const src = (g.controls['src'].value as string)?.trim();
      if (!src) return null;
      return {
        type: 'image',
        src,
        alt: (g.controls['alt'].value as string)?.trim() || '',
        caption: (g.controls['caption'].value as string)?.trim() || undefined,
      };
    }
    const text = (g.controls['text'].value as string)?.trim();
    if (!text) return null;
    return { type, text } as BlogBlock;
  }

  cancel(): void {
    this.router.navigate(['/blog/admin']);
  }
}
