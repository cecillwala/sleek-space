# Future-ready content modules

Per the brief, the site is architected to support these content types **without
a redesign**, but none are populated with fictional data and none appear in
navigation until real content exists:

- Testimonials
- Team Members
- Portfolio / Properties Managed
- Case Studies
- Client Success Stories
- Blog / News Updates

## What's here now

- `future-content.ts` — shared interfaces (`Testimonial`, `TeamMember`, `PortfolioProperty`).
- `testimonials/` — reusable `<app-testimonials [items]="…">`. Renders nothing when empty.
- `team/` — reusable `<app-team [members]="…">`. Renders nothing when empty.

These components are intentionally **not imported** by any page yet, so they add
no weight and show no placeholder content.

## How to enable a section later

1. Create the data (e.g. a `testimonials.data.ts` array, or load from an API/CMS).
2. Drop the component onto a page and pass the data:
   ```html
   <app-testimonials [items]="testimonials" />
   <app-team [members]="team" />
   ```
3. For a full page (e.g. Portfolio, Blog), add a lazy route in
   `src/app/app.routes.ts`:
   ```ts
   {
     path: 'portfolio',
     title: 'Portfolio',
     data: { description: '…' },
     loadComponent: () => import('./pages/portfolio/portfolio').then((m) => m.Portfolio),
   }
   ```
4. Add the link to `shared/header/header.ts` (`navItems`) and the footer once
   it should be publicly visible.

## Larger future features

Tenant/Owner portals, maintenance requests, online payments, and property/rental
listings are out of scope for the profile site but the standalone + lazy-loaded
structure supports adding them as new feature routes later.
