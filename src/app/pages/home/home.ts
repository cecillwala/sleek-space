import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { ServiceCard } from '../../shared/service-card/service-card';
import { CtaBanner } from '../../shared/cta-banner/cta-banner';
import { RevealDirective } from '../../shared/reveal.directive';
import {
  AUDIENCES,
  CONTACT,
  DIRECTOR,
  PROCESS_STEPS,
  SERVICE_CATEGORIES,
  WHY_CHOOSE,
} from '../../shared/site-data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgOptimizedImage, SectionHeading, ServiceCard, CtaBanner, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // All five service categories; full sub-service breakdown lives on /services.
  protected readonly categories = SERVICE_CATEGORIES;
  protected readonly process = PROCESS_STEPS;
  protected readonly whyChoose = WHY_CHOOSE;
  protected readonly audiences = AUDIENCES;
  protected readonly director = DIRECTOR;
  protected readonly contact = CONTACT;
}
