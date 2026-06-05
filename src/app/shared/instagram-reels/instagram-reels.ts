import { Component, input } from '@angular/core';
import { SectionHeading } from '../section-heading/section-heading';
import { RevealDirective } from '../reveal.directive';
import { ReelItem } from '../site-data';

/**
 * Instagram reels strip. Each tile renders one of three states:
 *  - thumbnail + url  → rich visual preview that links to the reel
 *  - url only         → branded tile that links to the reel ("Watch on Instagram")
 *  - neither          → static "coming soon" placeholder
 *
 * Drop real reels in by populating the `reels` input (see REELS in site-data).
 */
@Component({
  selector: 'app-instagram-reels',
  imports: [SectionHeading, RevealDirective],
  template: `
    <section class="section section--tint reels">
      <div class="container">
        <app-section-heading
          eyebrow="On Instagram"
          title="Follow our work in motion"
          lead="Property walkthroughs, maintenance, and the day-to-day of well-run spaces — straight from our Instagram."
          [center]="true"
        />

        <ul class="reels__grid">
          @for (reel of reels(); track $index) {
            <li class="reel" appReveal>
              @if (reel.url) {
                <a
                  class="reel__inner"
                  [href]="reel.url"
                  target="_blank"
                  rel="noopener"
                  [attr.aria-label]="reel.caption || 'Watch reel on Instagram'"
                >
                  @if (reel.thumbnail) {
                    <img class="reel__media" [src]="reel.thumbnail" [alt]="reel.caption || 'Instagram reel'" loading="lazy" />
                  } @else {
                    <span class="reel__placeholder" aria-hidden="true"></span>
                  }
                  <span class="reel__overlay">
                    <span class="reel__play" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                    @if (reel.caption) {
                      <span class="reel__caption">{{ reel.caption }}</span>
                    }
                  </span>
                </a>
              } @else {
                <div class="reel__inner reel__inner--empty">
                  <span class="reel__placeholder" aria-hidden="true"></span>
                  <span class="reel__overlay">
                    <span class="reel__glyph" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                      </svg>
                    </span>
                    @if (reel.caption) {
                      <span class="reel__caption">{{ reel.caption }}</span>
                    }
                    <span class="reel__soon">Coming soon</span>
                  </span>
                </div>
              }
            </li>
          }
        </ul>

        <div class="reels__cta">
          <a [href]="profileUrl()" class="btn btn--primary" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .reels__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.25rem;
    }
    .reel {
      list-style: none;
    }
    .reel__inner {
      position: relative;
      display: block;
      aspect-ratio: 9 / 16;
      border-radius: var(--radius);
      overflow: hidden;
      border: 1px solid var(--color-border);
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
    }
    a.reel__inner:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow);
      border-color: var(--color-secondary);
    }
    .reel__media {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .reel__placeholder {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--color-secondary) 40%, transparent), transparent 60%),
        linear-gradient(160deg, var(--color-primary), var(--color-primary-hover));
    }
    .reel__overlay {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      padding: 1rem;
      text-align: center;
      color: #fff;
      background: linear-gradient(to top, rgba(47, 36, 31, 0.55), transparent 55%);
    }
    .reel__play {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background: color-mix(in srgb, #fff 88%, transparent);
      color: var(--color-primary);
      box-shadow: var(--shadow);
      transition: var(--transition);
    }
    a.reel__inner:hover .reel__play {
      transform: scale(1.08);
      background: #fff;
    }
    .reel__glyph {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 54px;
      height: 54px;
      border-radius: 16px;
      border: 1px solid color-mix(in srgb, #fff 55%, transparent);
      color: #fff;
    }
    .reel__caption {
      font-weight: 600;
      font-size: 0.9rem;
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    }
    .reel__soon {
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: color-mix(in srgb, #fff 80%, transparent);
    }
    .reels__cta {
      display: flex;
      justify-content: center;
      margin-top: 2.5rem;
    }
    .reels__cta .btn {
      gap: 0.6rem;
    }
    @media (max-width: 760px) {
      .reels__grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `,
})
export class InstagramReels {
  readonly reels = input<ReelItem[]>([]);
  readonly profileUrl = input('#');
}
