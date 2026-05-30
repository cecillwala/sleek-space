import { Component, input } from '@angular/core';

/**
 * Reusable eyebrow + title + optional lead block, used to open page sections.
 */
@Component({
  selector: 'app-section-heading',
  template: `
    <div class="section-heading" [class.is-center]="center()">
      @if (eyebrow()) {
        <span class="eyebrow">{{ eyebrow() }}</span>
      }
      <h2>{{ title() }}</h2>
      @if (lead()) {
        <p class="lead">{{ lead() }}</p>
      }
    </div>
  `,
  styles: `
    .section-heading {
      max-width: 64ch;
      margin-bottom: clamp(2rem, 4vw, 3.25rem);
    }
    .section-heading.is-center {
      margin-inline: auto;
      text-align: center;
    }
    .section-heading.is-center .lead {
      margin-inline: auto;
    }
    h2 {
      margin-bottom: 0.6rem;
    }
  `,
})
export class SectionHeading {
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly lead = input('');
  readonly center = input(false);
}
