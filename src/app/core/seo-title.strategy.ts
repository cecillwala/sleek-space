import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { SeoService } from './seo.service';

const SUFFIX = 'SleekSpace Management';

/**
 * Applies the per-route `title` (and optional `data.description`) to the
 * document head. Routes set `title` + `data.description` and everything else
 * (meta + Open Graph) flows through {@link SeoService}.
 */
@Injectable({ providedIn: 'root' })
export class SeoTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly seo = inject(SeoService);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const routeTitle = this.buildTitle(snapshot);
    const fullTitle = routeTitle ? `${routeTitle} | ${SUFFIX}` : SUFFIX;
    this.title.setTitle(fullTitle);

    const description = this.deepestData(snapshot)?.['description'] as string | undefined;
    this.seo.update({ title: fullTitle, description });
  }

  private deepestData(snapshot: RouterStateSnapshot) {
    let route = snapshot.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.data;
  }
}
