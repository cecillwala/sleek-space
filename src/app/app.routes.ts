import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: '',
    data: {
      description:
        'SleekSpace Management is a professional property and facilities management firm focused on residential, commercial, and mixed-use developments — maximizing value, tenant satisfaction, and operational excellence.',
    },
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: 'About',
    data: {
      description:
        'Meet SleekSpace Management and Director Sheila W. Gichangi — an experienced property and facilities management professional leading a firm built on professionalism, integrity, and operational excellence.',
    },
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'services',
    title: 'Services',
    data: {
      description:
        'Property management, tenant management, facilities management, project & development support, and financial management for residential, commercial, and mixed-use properties.',
    },
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
  },
  {
    path: 'portfolio',
    title: 'Portfolio',
    data: {
      description:
        'Selected commercial and residential projects and properties managed and supported by SleekSpace Management, alongside notable tenants and brands within properties under management.',
    },
    loadComponent: () => import('./pages/portfolio/portfolio').then((m) => m.Portfolio),
  },
  {
    path: 'contact',
    title: 'Contact',
    data: {
      description:
        'Request a consultation with SleekSpace Management for dependable, professional property and facilities management of your residential, commercial, or mixed-use property.',
    },
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  // Further future-ready routes (testimonials, team, blog, case studies) remain
  // omitted from navigation until real content is available. See shared/future/.
  {
    path: '**',
    redirectTo: '',
  },
];
