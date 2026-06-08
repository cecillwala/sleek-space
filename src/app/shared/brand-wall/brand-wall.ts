import { Component, input } from '@angular/core';
import { BrandItem } from '../site-data';

/**
 * Static grid showing all brand logos at once in their natural colours,
 * each inside a uniform card that matches the site's card style.
 * Brands without a logo show their name in the display typeface.
 */
@Component({
  selector: 'app-brand-wall',
  template: `
    @if (brands().length) {
      <ul class="brand-grid" role="list" aria-label="Notable tenants and brands">
        @for (brand of brands(); track brand.name) {
          <li class="brand">
            @if (brand.logo) {
              <img [src]="brand.logo" [alt]="brand.name" [title]="brand.name" loading="lazy" decoding="async" />
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
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 1rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .brand {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      aspect-ratio: 3 / 2;
      background: var(--bg-card);
      border: 1px solid var(--color-border);
      border-radius: 8px;
      padding: 1rem;
      transition: border-color var(--transition), box-shadow var(--transition);
    }
    .brand:hover {
      border-color: var(--color-secondary);
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    }
    .brand img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .brand__name {
      text-align: center;
      font-family: var(--font-display);
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--color-text-main);
      line-height: 1.3;
    }
  `,
})
export class BrandWall {
  readonly brands = input<BrandItem[]>([]);
}
