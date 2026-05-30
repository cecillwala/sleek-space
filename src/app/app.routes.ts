import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: '',
    data: {
      description:
        'Professional property management and real estate consulting focused on residential and commercial properties, tenant relations, maintenance, inspections, and operational excellence.',
    },
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: 'About',
    data: {
      description:
        'Meet SleekSpace Management and founder Sheila Wanjiku — a hands-on property management firm built on professionalism, reliability, transparency, and integrity.',
    },
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'services',
    title: 'Services',
    data: {
      description:
        'Property management, facilities management, service charge administration, maintenance coordination, tenant relations, inspections, vendor coordination, and leasing support.',
    },
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
  },
  {
    path: 'contact',
    title: 'Contact',
    data: {
      description:
        'Request a consultation with SleekSpace Management for dependable, professional property management of your residential or commercial property.',
    },
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  // Future-ready routes (testimonials, team, portfolio, blog) are intentionally
  // omitted from navigation until real content is available. See
  // shared/future/ for the placeholder components ready to be wired up.
  {
    path: '**',
    redirectTo: '',
  },
];
