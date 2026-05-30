import { Component } from '@angular/core';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { CtaBanner } from '../../shared/cta-banner/cta-banner';
import { RevealDirective } from '../../shared/reveal.directive';
import { CONTACT, CORE_VALUES, FOUNDER_EXPERTISE } from '../../shared/site-data';

@Component({
  selector: 'app-about',
  imports: [SectionHeading, CtaBanner, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly values = CORE_VALUES;
  protected readonly expertise = FOUNDER_EXPERTISE;
  protected readonly contact = CONTACT;
}
