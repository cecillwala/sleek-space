/**
 * Single source of truth for company content defined in the brief.
 * Icons are inline SVG path data (24x24, currentColor) so cards stay
 * dependency-free.
 */

export interface ServiceItem {
  slug: string;
  title: string;
  summary: string;
  /** Longer copy shown on the Services page. */
  detail: string;
  iconPath: string;
}

export interface ValueItem {
  title: string;
  description: string;
  iconPath: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface AudienceItem {
  title: string;
  description: string;
}

// 24x24 Material-style icon paths.
const ICONS = {
  building:
    'M3 21V7l8-4v18M21 21V11l-10-4M6 9v.01M6 12v.01M6 15v.01M6 18v.01',
  facility:
    'M3 21h18M5 21V7l7-4 7 4v14M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2',
  ledger:
    'M9 7h6m-6 4h6m-6 4h4M5 3h14a1 1 0 0 1 1 1v17l-3-2-2 2-2-2-2 2-2-2-2 2V4a1 1 0 0 1 1-1z',
  wrench:
    'M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.1-.5-.5-2.1 2.7-2.5z',
  people:
    'M16 11a3 3 0 1 0-2.99-3M5.5 21a6.5 6.5 0 0 1 13 0M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  clipboard:
    'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9h.01M9 17h.01M13 14h2M13 17h2',
  handshake:
    'M8 12l2 2 4-4M3 8l4-3 5 3 5-3 4 3v8l-4 3-5-3-5 3-4-3V8z',
  leaf:
    'M5 21c0-9 7-16 16-16 0 9-7 16-16 16zM5 21c4-4 8-6 12-7',
  key: 'M15 7a4 4 0 1 0-3.9 5L7 16l-2 2 2 2 2-2 2-2 .9-.9A4 4 0 0 0 15 7zm0 0h.01',
};

export const SERVICES: ServiceItem[] = [
  {
    slug: 'property-management',
    title: 'Property Management',
    summary: 'Comprehensive management of residential and commercial properties.',
    detail:
      'End-to-end oversight of residential and commercial properties — covering daily operations, occupancy, compliance, and the coordination needed to keep every property running smoothly and protecting its long-term value.',
    iconPath: ICONS.building,
  },
  {
    slug: 'facilities-management',
    title: 'Facilities Management',
    summary: 'Ensuring facilities remain safe, functional, and efficient.',
    detail:
      'Proactive management of building systems, services, and shared infrastructure so that facilities stay safe, functional, and efficient for the people who rely on them every day.',
    iconPath: ICONS.facility,
  },
  {
    slug: 'service-charge-administration',
    title: 'Service Charge Administration',
    summary: 'Managing collections, reporting, and accountability.',
    detail:
      'Transparent administration of service charges — from budgeting and collection to clear reporting and accountability, giving owners and residents confidence in how shared funds are managed.',
    iconPath: ICONS.ledger,
  },
  {
    slug: 'maintenance-coordination',
    title: 'Maintenance Coordination',
    summary: 'Planning and coordinating repairs and preventive maintenance.',
    detail:
      'Planned and responsive maintenance, coordinated to minimise disruption and cost. We schedule preventive work and manage repairs so issues are resolved quickly and properties stay in excellent condition.',
    iconPath: ICONS.wrench,
  },
  {
    slug: 'tenant-relations',
    title: 'Tenant Relations',
    summary: 'Building positive tenant experiences through effective communication and support.',
    detail:
      'Responsive, respectful communication that builds positive, lasting tenant experiences — supporting retention, smooth move-ins and move-outs, and a well-run community.',
    iconPath: ICONS.people,
  },
  {
    slug: 'property-inspections',
    title: 'Property Inspections',
    summary: 'Routine inspections to maintain standards and identify improvement opportunities.',
    detail:
      'Routine and detailed inspections that uphold standards, document property condition, and surface improvement opportunities before they become costly problems.',
    iconPath: ICONS.clipboard,
  },
  {
    slug: 'vendor-coordination',
    title: 'Vendor Coordination',
    summary: 'Managing service providers and contractors.',
    detail:
      'Sourcing, vetting, and managing reliable service providers and contractors — overseeing quality and value so that every job is delivered to standard.',
    iconPath: ICONS.handshake,
  },
  {
    slug: 'common-area-management',
    title: 'Common Area Management',
    summary: 'Maintaining clean, safe, and professionally managed shared spaces.',
    detail:
      'Care of lobbies, grounds, and shared amenities so common areas remain clean, safe, and professionally presented — protecting the impression every property makes.',
    iconPath: ICONS.leaf,
  },
  {
    slug: 'leasing-tenant-sourcing',
    title: 'Leasing & Tenant Sourcing',
    summary: 'Supporting tenant acquisition and commercial leasing discussions.',
    detail:
      'Support across tenant acquisition and commercial leasing discussions — helping owners reduce voids and secure dependable, well-matched occupants.',
    iconPath: ICONS.key,
  },
];

export const CORE_VALUES: ValueItem[] = [
  {
    title: 'Professionalism',
    description: 'Maintaining high standards in every aspect of property management.',
    iconPath:
      'M12 2l2.5 5L20 8l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1L12 2z',
  },
  {
    title: 'Reliability',
    description: 'Delivering dependable services clients can trust.',
    iconPath: 'M9 12l2 2 4-4M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z',
  },
  {
    title: 'Transparency',
    description: 'Open communication and accountability.',
    iconPath:
      'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  },
  {
    title: 'Responsiveness',
    description: 'Addressing issues quickly and effectively.',
    iconPath: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z',
  },
  {
    title: 'Integrity',
    description: 'Building trust through ethical operations.',
    iconPath:
      'M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4zM9 12l2 2 4-4',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Property Assessment',
    description:
      'We begin by understanding the property, its condition, and your goals — establishing a clear baseline before anything else.',
  },
  {
    step: 2,
    title: 'Management Planning',
    description:
      'A tailored management plan covering operations, maintenance, budgeting, and reporting, aligned to how you want the property run.',
  },
  {
    step: 3,
    title: 'Operations & Service Delivery',
    description:
      'Hands-on, day-to-day management — coordinating maintenance, vendors, tenants, and common areas to a consistent standard.',
  },
  {
    step: 4,
    title: 'Monitoring & Reporting',
    description:
      'Ongoing oversight with clear, transparent reporting so you always know how your property is performing.',
  },
  {
    step: 5,
    title: 'Continuous Improvement',
    description:
      'We review, refine, and recommend improvements — protecting long-term value and keeping spaces well-run over time.',
  },
];

export const WHY_CHOOSE: string[] = [
  'Hands-on management approach',
  'Direct founder involvement',
  'Strong tenant relationship management',
  'Property value preservation',
  'Reliable communication',
  'Professional service delivery',
  'Operational efficiency',
  'Industry expertise',
];

export const AUDIENCES: AudienceItem[] = [
  {
    title: 'Property Owners',
    description: 'Helping maximize property value while reducing management burdens.',
  },
  {
    title: 'Real Estate Developers',
    description: 'Providing post-completion management support.',
  },
  {
    title: 'Residential Communities',
    description: 'Creating organized and comfortable living environments.',
  },
  {
    title: 'Commercial Property Owners',
    description: 'Maintaining professional business environments.',
  },
];

export const FOUNDER_EXPERTISE: string[] = [
  'Tenant relations management',
  'Leasing coordination',
  'Landlord communication',
  'Service charge administration',
  'Vendor coordination',
  'Maintenance planning',
  'Tenant sourcing',
  'Commercial leasing support',
  'Property inspections',
  'Improvement works supervision',
  'Property operations management',
  'Asset value optimization',
];

/** Placeholder contact details — replace with real values when available. */
export const CONTACT = {
  email: 'hello@sleekspace.co.ke',
  phone: '+254 700 000 000',
  address: 'Nairobi, Kenya',
  // TODO: replace with Sheila Wanjiku's real LinkedIn URL when provided.
  founderLinkedIn: '#',
} as const;
