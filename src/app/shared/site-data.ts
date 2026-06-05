/**
 * Single source of truth for company content.
 * Icons are inline SVG path data (24x24, currentColor) so cards stay
 * dependency-free.
 */

export interface ServiceCategory {
  slug: string;
  title: string;
  summary: string;
  iconPath: string;
  items: string[];
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

export interface PortfolioProperty {
  name: string;
  category: 'Commercial' | 'Residential' | 'Mixed-use';
  /** Optional — real photography to be supplied later. */
  image?: string;
  location?: string;
}

export interface Credential {
  label: string;
  detail: string;
}

// 24x24 Material-style icon paths.
const ICONS = {
  building: 'M3 21V7l8-4v18M21 21V11l-10-4M6 9v.01M6 12v.01M6 15v.01M6 18v.01',
  facility: 'M3 21h18M5 21V7l7-4 7 4v14M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2',
  ledger:
    'M9 7h6m-6 4h6m-6 4h4M5 3h14a1 1 0 0 1 1 1v17l-3-2-2 2-2-2-2 2-2-2-2 2V4a1 1 0 0 1 1-1z',
  people: 'M16 11a3 3 0 1 0-2.99-3M5.5 21a6.5 6.5 0 0 1 13 0M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  clipboard:
    'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9h.01M9 17h.01M13 14h2M13 17h2',
};

/* ---------------------------------------------------------------------------
 * Services — five major categories
 * ------------------------------------------------------------------------- */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: 'property-management',
    title: 'Property Management',
    summary:
      'End-to-end management of residential, commercial, and mixed-use developments — protecting long-term value and keeping every property running smoothly.',
    iconPath: ICONS.building,
    items: [
      'Residential Property Management',
      'Commercial Property Management',
      'Mixed-Use Development Management',
      'Portfolio Management',
      'Estate & HOA Management',
    ],
  },
  {
    slug: 'tenant-management',
    title: 'Tenant Management',
    summary:
      'Sourcing, onboarding, and supporting tenants — building positive relationships that reduce voids and keep properties well-occupied.',
    iconPath: ICONS.people,
    items: [
      'Tenant Sourcing & Marketing',
      'Tenant Vetting & Onboarding',
      'Lease Negotiations',
      'Lease Administration',
      'Move-In / Move-Out Management',
    ],
  },
  {
    slug: 'facilities-management',
    title: 'Facilities Management',
    summary:
      'Keeping buildings safe, functional, and efficient through proactive maintenance and trusted contractor and vendor oversight.',
    iconPath: ICONS.facility,
    items: [
      'Maintenance Coordination',
      'Contractor Management',
      'Vendor Management',
      'Security Oversight',
      'Landscaping Coordination',
      'Waste Management',
      'Utilities Management',
    ],
  },
  {
    slug: 'project-development-support',
    title: 'Project & Development Support',
    summary:
      'Seamless transition from construction to operations — managing handover, fit-out, and occupancy so new developments open and perform well.',
    iconPath: ICONS.clipboard,
    items: [
      'Construction-to-Operations Transition',
      'Snagging & Handover Management',
      'Fit-Out Coordination',
      'Occupancy Planning',
      'Stakeholder Coordination',
    ],
  },
  {
    slug: 'financial-management',
    title: 'Financial Management',
    summary:
      'Transparent service charge and budget administration with clear reporting and cost optimization that protects owners’ returns.',
    iconPath: ICONS.ledger,
    items: [
      'Service Charge Administration',
      'Budget Preparation',
      'Financial Reporting',
      'Contractor Payment Management',
      'Cost Optimization Strategies',
    ],
  },
];

/* ---------------------------------------------------------------------------
 * Company values
 * ------------------------------------------------------------------------- */
export const CORE_VALUES: ValueItem[] = [
  {
    title: 'Professionalism',
    description: 'Upholding the highest standards across every property and engagement.',
    iconPath: 'M12 2l2.5 5L20 8l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1L12 2z',
  },
  {
    title: 'Integrity',
    description: 'Acting ethically and honestly in every decision we make.',
    iconPath: 'M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4zM9 12l2 2 4-4',
  },
  {
    title: 'Accountability',
    description: 'Taking full ownership of outcomes and the commitments we make.',
    iconPath: 'M9 12l2 2 4-4M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z',
  },
  {
    title: 'Client-Centered Service',
    description: 'Putting owners, investors, and tenants at the heart of what we do.',
    iconPath: 'M16 11a3 3 0 1 0-2.99-3M5.5 21a6.5 6.5 0 0 1 13 0M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  },
  {
    title: 'Innovation',
    description: 'Applying smarter systems and ideas to manage properties better.',
    iconPath: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z',
  },
  {
    title: 'Transparency',
    description: 'Open communication and clear reporting at every step.',
    iconPath: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  },
  {
    title: 'Operational Excellence',
    description: 'Running efficient, well-organized operations that perform reliably.',
    iconPath: 'M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  },
  {
    title: 'Sustainability',
    description: 'Caring for resources and the long-term health of every space.',
    iconPath: 'M5 21c0-9 7-16 16-16 0 9-7 16-16 16zM5 21c4-4 8-6 12-7',
  },
  {
    title: 'Continuous Improvement',
    description: 'Always reviewing, refining, and raising the standard of service.',
    iconPath: 'M21 12a9 9 0 1 1-3-6.7M21 4v4h-4',
  },
];

/* ---------------------------------------------------------------------------
 * Management process
 * ------------------------------------------------------------------------- */
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
  'Led by an experienced property & facilities professional',
  'Hands-on, director-level involvement',
  'Residential, commercial & mixed-use expertise',
  'Strong tenant relationship management',
  'Long-term property value optimization',
  'Transparent reporting & communication',
  'Construction-to-operations capability',
  'Operational excellence & efficiency',
];

export const AUDIENCES: AudienceItem[] = [
  {
    title: 'Property Owners & Investors',
    description: 'Maximizing property value while reducing the burden of day-to-day management.',
  },
  {
    title: 'Real Estate Developers',
    description: 'Handover, occupancy, and post-completion management support for new developments.',
  },
  {
    title: 'Residential Communities',
    description: 'Organized, comfortable, well-run living environments and estate management.',
  },
  {
    title: 'Commercial & Mixed-Use Owners',
    description: 'Professional business environments that keep tenants and visitors satisfied.',
  },
];

/* ---------------------------------------------------------------------------
 * Leadership — Director
 * ------------------------------------------------------------------------- */
export const DIRECTOR = {
  name: 'Sheila W. Gichangi',
  initials: 'SG',
  role: 'Director | Property & Facilities Manager',
  /** Studio portrait (About page). */
  photo: 'images/director-portrait.webp',
  /** Contextual seated portrait (home Leadership section). */
  photoHome: 'images/director-home.webp',
  bio: [
    'Sheila Gichangi is a property management and built environment professional with extensive experience in residential, commercial, and mixed-use developments across Kenya.',
    'As Director of SleekSpace Management, she brings a strong background in property operations, tenant relations, facilities management, and construction project coordination.',
    'Over the years, she has successfully managed high-value developments, overseen tenant onboarding and lease negotiations, coordinated property maintenance programs, and implemented operational systems that enhance property value while ensuring exceptional client and tenant satisfaction.',
  ],
  quote:
    'Our goal is to provide property owners with peace of mind through proactive management, transparent communication, and exceptional service delivery.',
};

export const DIRECTOR_EXPERTISE: string[] = [
  'Property Management',
  'Facilities Management',
  'Tenant Relations',
  'Leasing Coordination',
  'Service Charge Administration',
  'Vendor Management',
  'Maintenance Planning',
  'Tenant Sourcing',
  'Commercial Leasing',
  'Property Inspections',
  'Development Handover Management',
  'Property Operations',
  'Asset Value Optimization',
];

export const MEMBERSHIPS: Credential[] = [
  { label: 'Estate Agents Registration Board', detail: 'EARB No. 2396' },
  { label: 'Association of Construction Managers of Kenya', detail: 'ACMK Graduate Member No. C471' },
];

export const QUALIFICATIONS: Credential[] = [
  { label: 'BSc Construction Project Management', detail: 'Kenyatta University' },
  { label: 'MBA Candidate', detail: 'USIU-Africa' },
];

/* ---------------------------------------------------------------------------
 * Portfolio — Selected Projects & Properties
 * ------------------------------------------------------------------------- */
export const PORTFOLIO: PortfolioProperty[] = [
  { name: 'OLA Kilimani', category: 'Commercial', image: 'images/portfolio-ola-kilimani.webp' },
  {
    name: 'Lavington Avenue',
    category: 'Commercial',
    image: 'images/portfolio-lavington-avenue.webp',
  },
  { name: 'Viashla Business Park', category: 'Commercial' },
  { name: 'Bingwa Sacco Society Complex', category: 'Commercial' },
  { name: 'Imarika DT Plaza', category: 'Commercial' },
  { name: 'Eaton Place Gigiri', category: 'Commercial' },
  { name: 'Park Towers', category: 'Residential' },
  {
    name: 'Pyramid Pointe',
    category: 'Residential',
    image: 'images/portfolio-pyramid-pointe.webp',
  },
  { name: 'Pyramid Grove', category: 'Residential', image: 'images/portfolio-pyramid-grove.webp' },
];

/**
 * Notable tenants and brands successfully onboarded or managed within
 * properties under management. Logos to be added later — names render as a
 * text-based logo wall for now.
 */
export const TENANT_BRANDS: string[] = [
  "CJ's",
  'Simbisa Brands Kenya Ltd',
  'Reliant Pharmacy',
  'Pharmaplus',
  'Sunny Forex Bureau Ltd',
  'Cinnabon',
  'Baus Opticals Ltd',
  'Zucchini Greengrocers Ltd',
  'White Rose Dry Cleaners',
  'Chapacopy Ltd',
  'Artcaffe',
  'KFC Kenya',
  'Cleanfax Dry Cleaners',
  'Luxe Kaftan',
  'Kidsydz',
];

/* ---------------------------------------------------------------------------
 * Instagram reels
 * ------------------------------------------------------------------------- */
export interface ReelItem {
  /** Instagram reel/post URL. When set, the card links straight to the reel. */
  url?: string;
  /**
   * Optional cover image (a screenshot/still from the reel). When set, the card
   * shows a rich visual preview; otherwise it falls back to a branded tile.
   */
  thumbnail?: string;
  /** Short label shown on the tile. */
  caption?: string;
}

/**
 * Placeholders for now. To make a tile live, add the reel `url` (and, ideally,
 * a `thumbnail` image in public/images/reels/ for a full preview):
 *   { url: 'https://www.instagram.com/reel/XXXX/', thumbnail: 'images/reels/1.webp', caption: '...' }
 */
export const REELS: ReelItem[] = [
  { caption: 'Property walkthroughs' },
  { caption: 'Maintenance in action' },
  { caption: 'Tenant experience' },
  { caption: 'Behind the scenes' },
];

/* ---------------------------------------------------------------------------
 * Contact
 * ------------------------------------------------------------------------- */
export const CONTACT = {
  email: 'gichangisheila@gmail.com',
  phone: '+254 704 207 860',
  address: 'Nairobi, Kenya',
  linkedIn: 'https://www.linkedin.com/in/sheila-g-723b47189',
  // TODO: replace with the company Instagram profile URL when available.
  instagram: '#',
} as const;
