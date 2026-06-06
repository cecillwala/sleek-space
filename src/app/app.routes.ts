import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: '',
    data: {
      description:
        'SleekSpace Management is a professional property and facilities management firm focused on residential, commercial, and mixed-use developments focusing on maximizing value, tenant satisfaction, and operational excellence.',
    },
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: 'About',
    data: {
      description:
        'Meet SleekSpace Management and Director Sheila W. Gichangi and experienced property and facilities management professional leading a firm built on professionalism, integrity, and operational excellence.',
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
    path: 'blog',
    title: 'Insights',
    data: {
      description:
        'Insights on property management, facilities operations, and real estate consulting from SleekSpace Management.',
    },
    loadComponent: () => import('./pages/blog/blog-list').then((m) => m.BlogList),
  },
  {
    // Editor pages — must precede 'blog/:slug' so they aren't read as slugs.
    path: 'blog/admin',
    title: 'Blog Manager',
    loadComponent: () => import('./pages/blog/blog-admin').then((m) => m.BlogAdmin),
  },
  {
    path: 'blog/admin/new',
    title: 'Write Article',
    loadComponent: () => import('./pages/blog/blog-editor').then((m) => m.BlogEditor),
  },
  {
    path: 'blog/admin/edit/:slug',
    title: 'Edit Article',
    loadComponent: () => import('./pages/blog/blog-editor').then((m) => m.BlogEditor),
  },
  {
    path: 'blog/:slug',
    // Title + description are set dynamically from the post in BlogPost.
    title: 'Insights',
    loadComponent: () => import('./pages/blog/blog-post').then((m) => m.BlogPost),
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
