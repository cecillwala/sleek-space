import { Injectable, computed, signal } from '@angular/core';
import { BLOG_POSTS, BlogPost } from './blog-data';

const STORAGE_KEY = 'sleekspace.blog.v1';

/**
 * Client-only blog store. Merges the built-in posts shipped in blog-data.ts
 * with posts authored/edited in the browser (persisted to localStorage).
 *
 * Browser-authored posts are visible for preview in THIS browser only. To
 * publish them to all visitors (this is a static, backend-less site), use the
 * editor's Export and commit the result into blog-data.ts.
 */
@Injectable({ providedIn: 'root' })
export class BlogStore {
  /** Posts created or edited in this browser. */
  private readonly local = signal<BlogPost[]>(this.load());

  /** Built-ins overlaid with local edits, plus new local posts. Newest first. */
  readonly posts = computed<BlogPost[]>(() => {
    const bySlug = new Map<string, BlogPost>();
    for (const p of BLOG_POSTS) bySlug.set(p.slug, p);
    for (const p of this.local()) bySlug.set(p.slug, p);
    return [...bySlug.values()].sort((a, b) => b.date.localeCompare(a.date));
  });

  get(slug: string): BlogPost | undefined {
    return this.posts().find((p) => p.slug === slug);
  }

  isBuiltIn(slug: string): boolean {
    return BLOG_POSTS.some((p) => p.slug === slug);
  }

  hasLocal(slug: string): boolean {
    return this.local().some((p) => p.slug === slug);
  }

  save(post: BlogPost): void {
    const others = this.local().filter((p) => p.slug !== post.slug);
    this.local.set([...others, post]);
    this.persist();
  }

  /** Remove a local post/override. A built-in reverts to its shipped version. */
  remove(slug: string): void {
    this.local.set(this.local().filter((p) => p.slug !== slug));
    this.persist();
  }

  /** Pretty-printed JSON of the full merged set — for export / publishing. */
  exportJson(): string {
    return JSON.stringify(this.posts(), null, 2);
  }

  private load(): BlogPost[] {
    if (typeof localStorage === 'undefined') return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as BlogPost[]) : [];
    } catch {
      return [];
    }
  }

  private persist(): void {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.local()));
    } catch {
      /* storage disabled or over quota — preview simply won't persist */
    }
  }
}
