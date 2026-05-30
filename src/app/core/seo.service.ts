import { inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

export interface SeoData {
  title?: string;
  description?: string;
  image?: string;
}

/**
 * Centralises description + Open Graph / Twitter meta tags so each route can
 * declare its own copy. Title itself is owned by {@link SeoTitleStrategy}.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);

  update({ title, description, image }: SeoData): void {
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
    }
    if (title) {
      this.meta.updateTag({ property: 'og:title', content: title });
    }
    if (image) {
      this.meta.updateTag({ property: 'og:image', content: image });
    }
  }
}
