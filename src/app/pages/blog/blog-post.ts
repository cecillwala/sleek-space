import { Component, computed, effect, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../core/seo.service';
import { BlogStore } from '../../shared/blog-store';

@Component({
  selector: 'app-blog-post',
  imports: [DatePipe, RouterLink, NgOptimizedImage],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss',
})
export class BlogPost {
  /** Bound from the :slug route parameter via withComponentInputBinding(). */
  readonly slug = input.required<string>();

  private readonly title = inject(Title);
  private readonly seo = inject(SeoService);
  private readonly store = inject(BlogStore);

  protected readonly post = computed(() => this.store.get(this.slug()));

  constructor() {
    // Keep the document title + meta description in sync with the loaded post.
    effect(() => {
      const post = this.post();
      if (!post) return;
      const fullTitle = `${post.title} | SleekSpace Management`;
      this.title.setTitle(fullTitle);
      this.seo.update({ title: fullTitle, description: post.excerpt, image: post.heroImage });
    });
  }
}
