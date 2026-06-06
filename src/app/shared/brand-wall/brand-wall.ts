import { Component, input } from '@angular/core';
import { BrandItem } from '../site-data';

/**
 * Infinite, auto-scrolling logo marquee for notable tenants and brands.
 * Logos have no card/background and run in a calm monochrome, revealing full
 * brand colour on hover (the strip also pauses on hover). The set is rendered
 * twice so the loop is seamless. Brands without a logo show their name.
 * Respects prefers-reduced-motion (becomes a manually-scrollable strip).
 */
@Component({
  selector: 'app-brand-wall',
  template: `
    @if (brands().length) {
      <div class="marquee" role="region" aria-label="Notable tenants and brands">
        <div class="marquee__track">
          <ul class="marquee__group">
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
          <ul class="marquee__group" aria-hidden="true">
            @for (brand of brands(); track brand.name) {
              <li class="brand">
                @if (brand.logo) {
                  <img [src]="brand.logo" [alt]="" loading="lazy" decoding="async" />
                } @else {
                  <span class="brand__name">{{ brand.name }}</span>
                }
              </li>
            }
          </ul>
        </div>
      </div>
    }
  `,
  styles: `
    .marquee {
      overflow: hidden;
      width: 100%;
      /* Soft fade at both edges. */
      -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
      mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent);
    }
    .marquee__track {
      display: flex;
      width: max-content;
      animation: brand-scroll 48s linear infinite;
    }
    .marquee:hover .marquee__track {
      animation-play-state: paused;
    }
    .marquee__group {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      list-style: none;
      flex-shrink: 0;
    }
    .brand {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      height: 120px;
      /* Uniform trailing gap only — keeps spacing identical at the loop seam. */
      margin-right: clamp(2.75rem, 6vw, 5rem);
    }
    .brand img {
      max-width: 100%;
      max-height: 80px;
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
      font-size: 1.25rem;
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

    @keyframes brand-scroll {
      from {
        transform: translateX(0);
      }
      to {
        /* Each group is the full set, so shifting one group width loops seamlessly. */
        transform: translateX(-50%);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .marquee {
        overflow-x: auto;
      }
      .marquee__track {
        animation: none;
      }
      .marquee__group[aria-hidden='true'] {
        display: none;
      }
    }
  `,
})
export class BrandWall {
  readonly brands = input<BrandItem[]>([]);
}
