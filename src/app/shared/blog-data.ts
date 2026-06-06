/**
 * Blog / Insights content. Articles are authored as ordered content blocks so
 * the post template can render headings, paragraphs, italic pull-quotes, and
 * images consistently and safely (no raw HTML).
 *
 * To add a new article: append a BlogPost with a unique `slug`. It appears on
 * the list automatically and is readable at /blog/<slug>.
 */

export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  readMinutes: number;
  heroImage: string;
  body: BlogBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'signs-you-need-a-professional-property-manager',
    title: "5 Signs It's Time to Bring in a Professional Property Manager",
    excerpt:
      'Self-managing a property works well at first. But here are the moments when bringing in professional management stops being a luxury and becomes the smarter financial decision.',
    category: 'Property Management',
    author: 'Sheila W. Gichangi',
    date: '2026-05-12',
    readMinutes: 5,
    heroImage: 'images/blog/property-management.webp',
    body: [
      {
        type: 'paragraph',
        text: 'Owning property can quietly turn into a second job. What begins as a manageable side responsibility, a tenant here and a repair there, slowly grows into a steady stream of calls, paperwork, and decisions. For many owners, the question is not whether they can manage their property, but whether they still should.',
      },
      {
        type: 'paragraph',
        text: 'Professional management is not about handing over control. It is about protecting your asset, your time, and your peace of mind. Here are five clear signs that it may be time to bring in a partner.',
      },
      { type: 'subheading', text: '1. Vacancies are lasting longer than they should' },
      {
        type: 'paragraph',
        text: 'Every empty month is lost income that you never recover. If units are sitting vacant, if marketing feels ad hoc, or if you are accepting tenants simply because you are tired of waiting, the cost of doing it alone has already exceeded the cost of help. Professional sourcing, vetting, and marketing keep quality tenants moving in and staying.',
      },
      { type: 'subheading', text: '2. Maintenance keeps slipping through the cracks' },
      {
        type: 'paragraph',
        text: 'Small issues become expensive ones when they are deferred. A slow leak, a tired generator, a neglected common area: each erodes both value and tenant goodwill. When you no longer have time for planned, preventive maintenance, reactive repairs quietly become your most expensive line item.',
      },
      {
        type: 'image',
        src: 'images/blog/inline-pyramid.webp',
        alt: 'A modern residential development managed by SleekSpace Management',
        caption: 'Pyramid Pointe, a residential development under our management.',
      },
      { type: 'subheading', text: '3. Tenant issues are eating your evenings' },
      {
        type: 'paragraph',
        text: 'Property is a relationship business. When every late-night call and every dispute lands on you personally, both your wellbeing and your judgement suffer. A professional buffer brings consistency, fairness, and clear processes that build the kind of tenant trust that reduces turnover.',
      },
      {
        type: 'quote',
        text: 'The best-run properties are not the ones with the fewest problems. They are the ones where problems are handled quickly, fairly, and the same way every time.',
      },
      { type: 'subheading', text: '4. The numbers no longer tell a clear story' },
      {
        type: 'paragraph',
        text: 'If you cannot say with confidence what your property earned, spent, and netted last quarter, you are managing in the dark. Clear budgeting, transparent service-charge administration, and regular reporting turn a vague feeling that things are fine into decisions you can actually stand behind.',
      },
      { type: 'subheading', text: '5. You are ready to grow' },
      {
        type: 'paragraph',
        text: 'One property can be a hobby. A portfolio is a business. The systems that let you manage two units rarely scale to ten. If you are acquiring or planning to grow, professional management is what lets you expand without multiplying your stress.',
      },
      {
        type: 'paragraph',
        text: 'If two or more of these sound familiar, it is worth a conversation. The right management partner does not add a cost to your property; it protects the value you have already built.',
      },
    ],
  },
  {
    slug: 'service-charges-demystified',
    title: 'Service Charges, Demystified: Where Your Money Actually Goes',
    excerpt:
      'Service charges are one of the most misunderstood parts of shared property, and one of the biggest sources of mistrust. Transparency changes everything.',
    category: 'Service Charge Administration',
    author: 'Sheila W. Gichangi',
    date: '2026-04-18',
    readMinutes: 6,
    heroImage: 'images/blog/service-charges.webp',
    body: [
      {
        type: 'paragraph',
        text: 'Few topics generate as much friction in shared developments as the service charge. Residents often feel they are paying into a black box; owners worry the funds are not stretching far enough. Yet the service charge is simply the shared cost of keeping a property safe, clean, functional, and pleasant to live or work in. When it is administered well, it becomes one of the most powerful tools for protecting value.',
      },
      { type: 'subheading', text: 'What a service charge actually covers' },
      {
        type: 'paragraph',
        text: 'A well-structured service charge typically funds the upkeep of everything shared: security, cleaning, landscaping, waste management, common-area utilities, lift and generator servicing, and the maintenance of shared structures. It also, crucially, builds a reserve. This is a fund set aside for the larger, less frequent costs like repainting, resurfacing, or replacing major equipment.',
      },
      {
        type: 'image',
        src: 'images/blog/inline-lavington.webp',
        alt: 'Well-kept forecourt and common areas at a managed commercial development',
        caption: 'Lavington Avenue, shared spaces kept to a consistent standard.',
      },
      { type: 'subheading', text: 'Why transparency is everything' },
      {
        type: 'paragraph',
        text: 'Mistrust rarely comes from the amount being charged. It comes from not understanding it. When residents can see a clear budget at the start of the year, track spending against it, and review reporting along the way, the service charge stops feeling like a tax and starts feeling like a shared investment in their own environment.',
      },
      {
        type: 'quote',
        text: "A service charge is not the price of a property's problems. It is the price of a property that quietly works, every single day.",
      },
      { type: 'subheading', text: 'What good administration looks like' },
      {
        type: 'paragraph',
        text: 'Sound service-charge management rests on a few disciplines: a realistic annual budget built from actual costs, not guesswork; collections handled consistently and fairly; every shilling reconciled and reported; and a reserve that is funded deliberately rather than raided in a crisis. Vendors are competitively appointed and held to standard, so that money spent translates into work delivered.',
      },
      {
        type: 'paragraph',
        text: 'Done properly, the service charge becomes invisible in the best possible way. Residents simply experience a property that is clean, secure, and well-maintained, while owners see their asset holding its value year after year.',
      },
    ],
  },
  {
    slug: 'from-handover-to-thriving',
    title: "From Handover to Thriving: Managing a Development's First Year",
    excerpt:
      'The handover from contractor to operations is where many promising developments stumble. A structured first year protects value and sets the tone for everything that follows.',
    category: 'Project & Development Support',
    author: 'Sheila W. Gichangi',
    date: '2026-03-22',
    readMinutes: 5,
    heroImage: 'images/blog/handover.webp',
    body: [
      {
        type: 'paragraph',
        text: 'A development is never more vulnerable than in the months immediately after construction ends. The contractors leave, the first occupants arrive, and a building that looked finished on handover day reveals the dozens of small details that determine whether it will thrive or struggle. The first year is where long-term value is either protected or quietly lost.',
      },
      { type: 'subheading', text: 'The transition no one plans for' },
      {
        type: 'paragraph',
        text: 'Construction and operations are two different disciplines. A project can be delivered beautifully and still falter the moment it has to run day to day. Bridging that gap, moving a building from built to running well, is a job in itself, and it begins before the last contractor has left site.',
      },
      { type: 'subheading', text: 'Snagging and handover, done thoroughly' },
      {
        type: 'paragraph',
        text: "A disciplined snagging and handover process captures defects while they are still the contractor's responsibility, documents every system and warranty, and ensures the people who will operate the building actually understand it. Skipping this step is one of the most expensive mistakes an owner can make.",
      },
      {
        type: 'image',
        src: 'images/blog/inline-ola.webp',
        alt: 'A commercial development managed by SleekSpace Management',
        caption: 'OLA Kilimani, a commercial development we manage.',
      },
      { type: 'subheading', text: 'Onboarding the first occupants' },
      {
        type: 'paragraph',
        text: 'First impressions set expectations for years. Smooth tenant onboarding, with clear leases, organised move-ins, and responsive early support, turns new occupants into long-term ones. The standard you set in month one becomes the standard residents expect for the life of the building.',
      },
      {
        type: 'quote',
        text: 'A building does not become a home or a workplace on handover day. It becomes one in the first year, through hundreds of small decisions made well.',
      },
      { type: 'subheading', text: 'The first year sets the standard' },
      {
        type: 'paragraph',
        text: 'Establishing planned maintenance, commissioning building systems properly, setting up transparent financials, and building early relationships with residents are not glamorous tasks. But together they decide whether a development matures into a well-regarded, fully-occupied asset or spends years recovering from a rocky start.',
      },
      {
        type: 'paragraph',
        text: 'Handled with structure and care, the first year does more than keep a new building running. It establishes the reputation that will fill it for the next decade.',
      },
    ],
  },
];
