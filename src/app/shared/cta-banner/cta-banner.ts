import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../reveal.directive';

/**
 * Reusable "Contact CTA" banner used to close pages.
 */
@Component({
  selector: 'app-cta-banner',
  imports: [RouterLink, RevealDirective],
  template: `
    <section class="cta" appReveal>
      <div class="container cta__inner">
        <div>
          <span class="eyebrow">{{ eyebrow() }}</span>
          <h2>{{ title() }}</h2>
          <p class="lead">{{ text() }}</p>
        </div>
        <div class="cta__actions">
          <a routerLink="/contact" class="btn btn--secondary">Request Consultation</a>
          <a routerLink="/services" class="btn btn--light">Explore Services</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .cta {
      background: var(--color-primary);
      color: #fff;
      border-radius: var(--radius-lg);
      margin-block: clamp(3rem, 6vw, 5rem);
      overflow: hidden;
      background-image: radial-gradient(
        circle at 85% -20%,
        color-mix(in srgb, var(--color-secondary) 55%, transparent),
        transparent 55%
      );
    }
    .cta__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2.5rem;
      padding-block: clamp(2.75rem, 6vw, 4rem);
    }
    .cta h2 {
      color: #fff;
      margin-bottom: 0.5rem;
    }
    .cta .eyebrow {
      color: var(--color-secondary-hover);
    }
    .cta .lead {
      color: color-mix(in srgb, #fff 88%, transparent);
      margin: 0;
    }
    .cta__actions {
      display: flex;
      gap: 1rem;
      flex-shrink: 0;
      flex-wrap: wrap;
    }
    @media (max-width: 760px) {
      .cta__inner {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `,
})
export class CtaBanner {
  readonly eyebrow = input('Get Started');
  readonly title = input('Let’s discuss your property');
  readonly text = input(
    'Speak with us about dependable, hands-on management tailored to your property and goals.',
  );
}
