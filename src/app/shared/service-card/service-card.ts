import { Component, input } from '@angular/core';
import { ServiceCategory } from '../site-data';

/**
 * Service category card with inline SVG icon. `expanded` lists every
 * sub-service (Services page); the compact form shows the summary only (home).
 */
@Component({
  selector: 'app-service-card',
  template: `
    <article class="service-card" [class.is-expanded]="expanded()">
      <span class="service-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor"
             stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path [attr.d]="category().iconPath" />
        </svg>
      </span>
      <h3>{{ category().title }}</h3>
      <p>{{ category().summary }}</p>

      @if (expanded()) {
        <ul class="service-card__items">
          @for (item of category().items; track item) {
            <li>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
                   stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 13l4 4L19 7" />
              </svg>
              {{ item }}
            </li>
          }
        </ul>
      }
    </article>
  `,
  styles: `
    .service-card {
      height: 100%;
      background: var(--bg-card);
      border: 1px solid var(--color-border);
      border-radius: var(--radius);
      padding: 2rem 1.75rem;
      transition: var(--transition);
    }
    .service-card:hover {
      background: var(--bg-card-hover);
      border-color: var(--color-secondary);
      transform: translateY(-6px);
      box-shadow: var(--shadow);
    }
    .service-card.is-expanded:hover {
      transform: none;
    }
    .service-card__icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      border-radius: 14px;
      background: color-mix(in srgb, var(--color-primary) 10%, transparent);
      color: var(--color-primary);
      margin-bottom: 1.25rem;
      transition: var(--transition);
    }
    .service-card:hover .service-card__icon {
      background: var(--color-primary);
      color: #fff;
    }
    h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
    p {
      color: var(--color-text-muted);
      margin: 0;
    }
    .service-card__items {
      margin-top: 1.25rem;
      padding-top: 1.25rem;
      border-top: 1px solid var(--color-border);
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }
    .service-card__items li {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 0.92rem;
      color: var(--color-text-main);
    }
    .service-card__items svg {
      flex-shrink: 0;
      color: var(--color-secondary);
    }
  `,
})
export class ServiceCard {
  readonly category = input.required<ServiceCategory>();
  readonly expanded = input(false);
}
