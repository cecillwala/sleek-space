import { Component, input } from '@angular/core';
import { Testimonial } from '../future-content';

/**
 * Future-ready, reusable testimonials section. Renders nothing until real
 * testimonials are supplied via the `items` input — so it can be dropped onto
 * any page today without showing fabricated content.
 *
 * Usage (once content exists):
 *   <app-testimonials [items]="realTestimonials" />
 */
@Component({
  selector: 'app-testimonials',
  template: `
    @if (items().length) {
      <section class="section">
        <div class="container">
          <span class="eyebrow">{{ eyebrow() }}</span>
          <h2 class="testimonials__title">{{ title() }}</h2>
          <ul class="testimonials__grid">
            @for (item of items(); track item.quote) {
              <li class="testimonial">
                <blockquote>“{{ item.quote }}”</blockquote>
                <div class="testimonial__author">
                  @if (item.image) {
                    <img [src]="item.image" [alt]="item.author" width="48" height="48" />
                  }
                  <div>
                    <strong>{{ item.author }}</strong>
                    @if (item.role) {
                      <span>{{ item.role }}</span>
                    }
                  </div>
                </div>
              </li>
            }
          </ul>
        </div>
      </section>
    }
  `,
  styles: `
    .testimonials__title {
      margin-bottom: 2rem;
    }
    .testimonials__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    .testimonial {
      background: var(--bg-card);
      border: 1px solid var(--color-border);
      border-radius: var(--radius);
      padding: 2rem;
    }
    .testimonial blockquote {
      margin: 0 0 1.25rem;
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-style: italic;
      color: var(--color-text-main);
    }
    .testimonial__author {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .testimonial__author img {
      border-radius: 50%;
    }
    .testimonial__author strong {
      display: block;
    }
    .testimonial__author span {
      font-size: 0.85rem;
      color: var(--color-text-muted);
    }
  `,
})
export class Testimonials {
  readonly items = input<Testimonial[]>([]);
  readonly eyebrow = input('Client Stories');
  readonly title = input('What our clients say');
}
