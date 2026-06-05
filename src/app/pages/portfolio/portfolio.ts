import { Component } from '@angular/core';
import { PortfolioCard } from '../../shared/portfolio-card/portfolio-card';
import { BrandWall } from '../../shared/brand-wall/brand-wall';
import { CtaBanner } from '../../shared/cta-banner/cta-banner';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { RevealDirective } from '../../shared/reveal.directive';
import { PORTFOLIO, TENANT_BRANDS } from '../../shared/site-data';

@Component({
  selector: 'app-portfolio',
  imports: [PortfolioCard, BrandWall, CtaBanner, SectionHeading, RevealDirective],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  protected readonly brands = TENANT_BRANDS;
  protected readonly commercial = PORTFOLIO.filter((p) => p.category === 'Commercial');
  protected readonly residential = PORTFOLIO.filter((p) => p.category === 'Residential');
}
