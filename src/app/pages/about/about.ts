import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { CtaBanner } from '../../shared/cta-banner/cta-banner';
import { RevealDirective } from '../../shared/reveal.directive';
import {
  CONTACT,
  CORE_VALUES,
  DIRECTOR,
  DIRECTOR_EXPERTISE,
  MEMBERSHIPS,
  QUALIFICATIONS,
} from '../../shared/site-data';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, SectionHeading, CtaBanner, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly values = CORE_VALUES;
  protected readonly director = DIRECTOR;
  protected readonly expertise = DIRECTOR_EXPERTISE;
  protected readonly memberships = MEMBERSHIPS;
  protected readonly qualifications = QUALIFICATIONS;
  protected readonly contact = CONTACT;
}
