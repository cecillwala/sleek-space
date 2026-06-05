import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PortfolioProperty } from '../site-data';

/**
 * Reusable property card for the Portfolio page. Shows real photography when a
 * `property.image` is supplied; otherwise a branded placeholder with the
 * property initial. Designed so more properties drop straight into the grid.
 */
@Component({
  selector: 'app-portfolio-card',
  imports: [NgOptimizedImage],
  template: `
    <article class="portfolio-card">
      <div class="portfolio-card__media">
        @if (property().image) {
          <img [ngSrc]="property().image!" fill [alt]="property().name" />
        } @else {
          <span class="portfolio-card__placeholder" aria-hidden="true">
            {{ property().name.charAt(0) }}
          </span>
        }
        <span class="portfolio-card__tag">{{ property().category }}</span>
      </div>
      <div class="portfolio-card__body">
        <h3>{{ property().name }}</h3>
        @if (property().location) {
          <p>{{ property().location }}</p>
        }
      </div>
    </article>
  `,
  styles: `
    .portfolio-card {
      background: var(--bg-card);
      border: 1px solid var(--color-border);
      border-radius: var(--radius);
      overflow: hidden;
      transition: var(--transition);
    }
    .portfolio-card:hover {
      transform: translateY(-6px);
      border-color: var(--color-secondary);
      box-shadow: var(--shadow);
    }
    .portfolio-card__media {
      position: relative;
      aspect-ratio: 3 / 2;
      display: grid;
      place-items: center;
      background:
        radial-gradient(circle at 30% 25%, color-mix(in srgb, var(--color-secondary) 40%, transparent), transparent 60%),
        linear-gradient(160deg, var(--color-primary), var(--color-primary-hover));
      overflow: hidden;
    }
    .portfolio-card__media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .portfolio-card__placeholder {
      font-family: var(--font-display);
      font-size: 3.5rem;
      font-weight: 700;
      color: color-mix(in srgb, var(--bg-secondary) 92%, transparent);
    }
    .portfolio-card__tag {
      position: absolute;
      top: 0.85rem;
      left: 0.85rem;
      padding: 0.3rem 0.8rem;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      background: color-mix(in srgb, var(--bg-secondary) 92%, transparent);
      color: var(--color-primary);
    }
    .portfolio-card__body {
      padding: 1.25rem 1.35rem 1.5rem;
    }
    .portfolio-card__body h3 {
      font-size: 1.2rem;
      margin: 0 0 0.25rem;
    }
    .portfolio-card__body p {
      margin: 0;
      font-size: 0.9rem;
      color: var(--color-text-muted);
    }
  `,
})
export class PortfolioCard {
  readonly property = input.required<PortfolioProperty>();
}
