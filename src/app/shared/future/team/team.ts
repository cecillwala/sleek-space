import { Component, input } from '@angular/core';
import { TeamMember } from '../future-content';

/**
 * Future-ready, reusable team grid. Renders nothing until real members are
 * supplied via `members` — keeping the site free of fabricated staff.
 *
 * Usage (once content exists):
 *   <app-team [members]="realTeam" />
 */
@Component({
  selector: 'app-team',
  template: `
    @if (members().length) {
      <section class="section section--tint">
        <div class="container">
          <span class="eyebrow">{{ eyebrow() }}</span>
          <h2 class="team__title">{{ title() }}</h2>
          <ul class="team__grid">
            @for (member of members(); track member.name) {
              <li class="team-member">
                <div class="team-member__photo">
                  @if (member.image) {
                    <img [src]="member.image" [alt]="member.name" />
                  } @else {
                    <span aria-hidden="true">{{ member.name.charAt(0) }}</span>
                  }
                </div>
                <strong>{{ member.name }}</strong>
                <span class="team-member__role">{{ member.role }}</span>
                @if (member.bio) {
                  <p>{{ member.bio }}</p>
                }
              </li>
            }
          </ul>
        </div>
      </section>
    }
  `,
  styles: `
    .team__title {
      margin-bottom: 2rem;
    }
    .team__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
    }
    .team-member {
      background: var(--bg-card);
      border: 1px solid var(--color-border);
      border-radius: var(--radius);
      padding: 1.75rem;
      text-align: center;
    }
    .team-member__photo {
      width: 96px;
      height: 96px;
      margin: 0 auto 1rem;
      border-radius: 50%;
      overflow: hidden;
      display: grid;
      place-items: center;
      background: linear-gradient(160deg, var(--color-primary), var(--color-primary-hover));
      color: #fff;
      font-family: var(--font-display);
      font-size: 2rem;
    }
    .team-member__photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .team-member__role {
      color: var(--color-secondary-hover);
      font-size: 0.9rem;
    }
    .team-member p {
      margin-top: 0.75rem;
      font-size: 0.9rem;
      color: var(--color-text-muted);
    }
  `,
})
export class Team {
  readonly members = input<TeamMember[]>([]);
  readonly eyebrow = input('Our People');
  readonly title = input('Meet the team');
}
