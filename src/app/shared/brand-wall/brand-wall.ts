import { Component, input } from '@angular/core';
import { BrandItem } from '../site-data';

/**
 * Static grid showing all brand logos at once. Logos render in monochrome
 * and reveal full colour on hover. Brands without a logo show their name.
 */
@Component({
  selector: 'app-brand-wall',
  template: `
    @if (brands().length) {
      <ul class="brand-grid" role="list" aria-label="Notable tenants and brands">
        @for (brand of brands(); track brand.name) {
          <li class="brand" [title]="brand.name">
            @if (brand.logo) {
              <img [src]="brand.logo" [alt]="brand.name" loading="lazy" decoding="async" />
            } @else {
              <span class="brand__name">{{ brand.name }}</span>
            }
          </li>
        }
      </ul>
    }
  `,
  styles: `
    .brand-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: clamp(1.5rem, 4vw, 3rem) clamp(2rem, 5vw, 4rem);
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .brand {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
    }
    .brand img {
      max-height: 60px;
      max-width: 120px;
      width: auto;
      object-fit: contain;
      filter: grayscale(100%);
      opacity: 0.6;
      transition:
        filter var(--transition),
        opacity var(--transition);
    }
    .brand:hover img {
      filter: none;
      opacity: 1;
    }
    .brand__name {
      text-align: center;
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--color-text-muted);
      opacity: 0.7;
      transition:
        color var(--transition),
        opacity var(--transition);
    }
    .brand:hover .brand__name {
      color: var(--color-primary);
      opacity: 1;
    }
  `,
})
export class BrandWall {
  readonly brands = input<BrandItem[]>([]);
}
