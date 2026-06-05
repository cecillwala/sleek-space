import { Component, input } from '@angular/core';

/**
 * Reusable logo wall for notable tenants and brands. Renders text-based brand
 * chips today; when brand logo assets are available, extend the input to an
 * object with an optional `logo` and render an <img> in place of the name.
 * Easily expanded by adding to the supplied `brands` array.
 */
@Component({
  selector: 'app-brand-wall',
  template: `
    @if (brands().length) {
      <ul class="brand-wall">
        @for (brand of brands(); track brand) {
          <li class="brand-wall__item">{{ brand }}</li>
        }
      </ul>
    }
  `,
  styles: `
    .brand-wall {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 1rem;
    }
    .brand-wall__item {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 84px;
      padding: 1rem 1.25rem;
      background: var(--bg-card);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      font-family: var(--font-display);
      font-size: 1.05rem;
      font-weight: 500;
      color: var(--color-text-main);
      transition: var(--transition);
    }
    .brand-wall__item:hover {
      border-color: var(--color-secondary);
      background: var(--bg-card-hover);
      transform: translateY(-3px);
    }
  `,
})
export class BrandWall {
  readonly brands = input<string[]>([]);
}
