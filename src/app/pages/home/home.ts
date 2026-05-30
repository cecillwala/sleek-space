import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { ServiceCard } from '../../shared/service-card/service-card';
import { CtaBanner } from '../../shared/cta-banner/cta-banner';
import { RevealDirective } from '../../shared/reveal.directive';
import {
  AUDIENCES,
  CONTACT,
  FOUNDER_EXPERTISE,
  PROCESS_STEPS,
  SERVICES,
  WHY_CHOOSE,
} from '../../shared/site-data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SectionHeading, ServiceCard, CtaBanner, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // Show the first six services on the homepage; full list lives on /services.
  protected readonly services = SERVICES.slice(0, 6);
  protected readonly process = PROCESS_STEPS;
  protected readonly whyChoose = WHY_CHOOSE;
  protected readonly audiences = AUDIENCES;
  protected readonly expertise = FOUNDER_EXPERTISE.slice(0, 6);
  protected readonly contact = CONTACT;
}
