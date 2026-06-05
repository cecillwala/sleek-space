import { Component } from '@angular/core';
import { ServiceCard } from '../../shared/service-card/service-card';
import { CtaBanner } from '../../shared/cta-banner/cta-banner';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { RevealDirective } from '../../shared/reveal.directive';
import { AUDIENCES, PROCESS_STEPS, SERVICE_CATEGORIES } from '../../shared/site-data';

@Component({
  selector: 'app-services',
  imports: [ServiceCard, CtaBanner, SectionHeading, RevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly categories = SERVICE_CATEGORIES;
  protected readonly audiences = AUDIENCES;
  protected readonly process = PROCESS_STEPS;
}
