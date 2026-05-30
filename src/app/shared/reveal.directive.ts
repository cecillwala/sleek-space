import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  OnDestroy,
  input,
} from '@angular/core';

/**
 * Adds `is-visible` to a `.reveal` element when it scrolls into view, driving
 * the fade/translate animation defined in styles.scss. Falls back to visible
 * when IntersectionObserver is unavailable (e.g. SSR / older browsers).
 */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  /** Optional stagger delay in ms. */
  readonly appReveal = input<number | ''>('');

  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    const delay = this.appReveal();
    if (typeof delay === 'number' && delay > 0) {
      node.style.transitionDelay = `${delay}ms`;
    }

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            this.observer?.unobserve(node);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
