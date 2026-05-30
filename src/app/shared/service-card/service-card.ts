import { Component, input } from '@angular/core';
import { ServiceItem } from '../site-data';

/**
 * Service card with inline SVG icon. `expanded` shows the longer detail copy
 * (used on the Services page); the compact form shows the summary.
 */
@Component({
  selector: 'app-service-card',
  template: `
    <article class="service-card">
      <span class="service-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor"
             stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path [attr.d]="service().iconPath" />
        </svg>
      </span>
      <h3>{{ service().title }}</h3>
      <p>{{ expanded() ? service().detail : service().summary }}</p>
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
  `,
})
export class ServiceCard {
  readonly service = input.required<ServiceItem>();
  readonly expanded = input(false);
}
