import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
import { BlogStore } from '../blog-store';

export interface Crumb {
  label: string;
  path: string | null; // null = current page (not a link)
}

/**
 * Derives breadcrumb crumbs from the live URL — no per-route config needed.
 * Placed in the app shell so it renders on every page automatically.
 * Hidden on the home page (only one level, no crumbs needed).
 */
@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  template: `
    @if (crumbs().length > 1) {
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <div class="container breadcrumb__inner">
          <ol>
            @for (crumb of crumbs(); track crumb.path; let last = $last) {
              <li>
                @if (crumb.path && !last) {
                  <a [routerLink]="crumb.path">{{ crumb.label }}</a>
                } @else {
                  <span aria-current="page">{{ crumb.label }}</span>
                }
                @if (!last) {
                  <span class="breadcrumb__sep" aria-hidden="true">›</span>
                }
              </li>
            }
          </ol>
        </div>
      </nav>
    }
  `,
  styles: `
    .breadcrumb {
      background: var(--bg-secondary);
      border-bottom: 1px solid var(--color-border);
    }
    .breadcrumb__inner {
      padding-block: 0.6rem;
    }
    ol {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.25rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.82rem;
    }
    a {
      color: var(--color-primary);
      font-weight: 500;
      transition: color 0.2s;
    }
    a:hover {
      color: var(--color-primary-hover);
      text-decoration: underline;
    }
    span[aria-current] {
      color: var(--color-text-muted);
    }
    .breadcrumb__sep {
      color: var(--color-border);
      font-size: 1rem;
      line-height: 1;
    }
  `,
})
export class Breadcrumb {
  private readonly router = inject(Router);
  private readonly blog = inject(BlogStore);

  // Re-run whenever navigation completes.
  private readonly url = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map((e) => (e as NavigationEnd).urlAfterRedirects),
      startWith(this.router.url),
    ),
    { initialValue: this.router.url },
  );

  protected readonly crumbs = computed<Crumb[]>(() => {
    const url = this.url().split('?')[0];
    const segments = url.split('/').filter(Boolean);

    if (segments.length === 0) return []; // home — no breadcrumb needed

    const crumbs: Crumb[] = [{ label: 'Home', path: '/' }];

    // Map each URL segment to a human-readable label and cumulative path.
    let cumulative = '';
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      cumulative += `/${seg}`;
      const isLast = i === segments.length - 1;

      crumbs.push({
        label: this.labelFor(seg, cumulative, segments, i),
        path: isLast ? null : cumulative,
      });
    }

    return crumbs;
  });

  private labelFor(
    seg: string,
    cumulative: string,
    segments: string[],
    i: number,
  ): string {
    // Known static segments
    const map: Record<string, string> = {
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      blog: 'Insights',
      admin: 'Manage Articles',
      contact: 'Contact',
      new: 'New Article',
      edit: 'Edit Article',
    };
    if (map[seg]) return map[seg];

    // blog/:slug — look up the article title
    if (segments[0] === 'blog' && i === 1 && seg !== 'admin') {
      const post = this.blog.get(seg);
      return post?.title ?? seg;
    }

    // blog/admin/edit/:slug — just show "Edit Article" (already handled above via 'edit')
    // Any unrecognised slug: capitalise it
    return seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  }
}
