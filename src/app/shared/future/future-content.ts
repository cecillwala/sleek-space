/**
 * Shared interfaces for content types the brief asked us to architect for but
 * NOT populate yet (no fictional data). When real content is available, supply
 * arrays of these to the matching reusable components in this folder, then add
 * the route(s) described in README.md and surface them in navigation.
 */

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  /** Optional avatar/logo asset path. */
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedIn?: string;
}

export interface PortfolioProperty {
  name: string;
  category: 'Residential' | 'Commercial' | 'Mixed-use';
  location?: string;
  summary?: string;
  image?: string;
}
