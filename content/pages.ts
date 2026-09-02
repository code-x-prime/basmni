import type { MediaKey } from './site'

type Crumb = { label: string; href: string }

export type PageHeroContent = {
  eyebrow: string
  titleLines: string[]
  description: string
  image: MediaKey
  imageAlt: string
  /** CSS object-position for the hero image so the subject stays in frame. */
  imagePosition?: string
  breadcrumb: Crumb[]
}

const home: Crumb = { label: 'Home', href: '/' }

export const aboutHero: PageHeroContent = {
  eyebrow: 'About Basmni',
  titleLines: ['Engineering experience.', 'Built for critical infrastructure.'],
  description:
    'An engineering and infrastructure solutions provider operating on a Pan-India scale for the hydro-power and water resource sectors since 2016.',
  image: 'heroAbout',
  imageAlt: 'Curved concrete hydropower dam spanning a rocky river canyon',
  imagePosition: 'center 60%',
  breadcrumb: [home, { label: 'About Us', href: '/about-us' }],
}

export const servicesHero: PageHeroContent = {
  eyebrow: 'Products & Services',
  titleLines: ['Engineered systems', 'for water & power infrastructure.'],
  description:
    'A comprehensive portfolio of specialized heavy industrial systems and allied civil works designed for extreme operational conditions in water resource management.',
  image: 'trcm',
  imageAlt: 'Hydro-mechanical trash rack cleaning machines installed on a project platform',
  imagePosition: 'center',
  breadcrumb: [home, { label: 'Products & Services', href: '/products-services' }],
}

export const pacHero: PageHeroContent = {
  eyebrow: 'Pressurized Air Cables',
  titleLines: ['High-pressurized', 'air cable systems.'],
  description:
    'Heavy-duty power transmission insulated with clean compressed technical air — SF6-free, PFAS-free, low-loss and continuously monitored. Basmni engineers, supplies and commissions PAC systems for high-voltage substations, dense grid corridors and hydropower evacuation.',
  image: 'pacGis',
  imageAlt: 'Gas-insulated high-voltage switchgear lineup inside a substation hall',
  imagePosition: 'center',
  breadcrumb: [
    home,
    { label: 'Products & Services', href: '/products-services' },
    { label: 'Pressurized Air Cables', href: '/products-services/pressurized-air-cables' },
  ],
}

export const referencesHero: PageHeroContent = {
  eyebrow: 'Project References',
  titleLines: ['Engineering', 'in the field.'],
  description:
    'A selection of Basmni engineering and infrastructure projects delivered across India for NHPC, NEEPCO and other operators.',
  image: 'heroReferences',
  imageAlt: 'Arch dam with a gantry crane and a floating debris boom at a hydropower project',
  imagePosition: 'center',
  breadcrumb: [home, { label: 'References', href: '/references' }],
}

export const contactHero: PageHeroContent = {
  eyebrow: 'Contact Basmni',
  titleLines: ["Let's engineer", 'your next project.'],
  description:
    'Tell us about your project, operating conditions and delivery requirements. Our engineering team will respond directly.',
  image: 'civil',
  imageAlt: 'Concrete arch dam and reservoir in a river canyon',
  imagePosition: 'center 55%',
  breadcrumb: [home, { label: 'Contact', href: '/contact' }],
}

/** Section copy shared across the enriched inner pages. */
export const aboutSections = {
  intro: {
    label: '01 — Company',
    title: 'Engineering and infrastructure solutions, Pan-India.',
  },
  capabilities: {
    label: '02 — Capabilities',
    title: 'From engineering to execution.',
    deck: 'One accountable team across every stage — equipment is engineered for the site and stays supported through commissioning.',
  },
  applications: {
    label: '03 — Applications',
    title: 'Where our engineering works.',
  },
  glance: { label: '04 — At a glance', title: 'Basmni at a glance.' },
  process: {
    label: '05 — Process',
    title: 'A single path from design to site.',
  },
  equipment: {
    label: '06 — Technology & equipment',
    title: 'The systems behind the work.',
    deck: 'Dredges, pumps, cleaning machines and power-transmission systems — engineered, built and commissioned by Basmni.',
  },
  why: { label: '07 — Why Basmni', title: 'Built for demanding environments.' },
}

export const servicesSections = {
  intro: {
    label: 'Overview',
    title: 'Our core products & services.',
    deck: 'A portfolio of specialized heavy industrial systems and allied civil works for extreme operational conditions in water resource management.',
  },
  dredgingEquipment: {
    label: 'Dredging equipment',
    title: 'Equipment for extreme-depth dredging.',
  },
  dredgingTech: {
    label: 'Dredging technology',
    title: 'The technical concept behind the depth.',
  },
  applications: {
    label: 'Engineering applications',
    title: 'Systems matched to the site.',
  },
  faq: { label: 'FAQ', title: 'Common questions.' },
}

export const referencesSections = {
  stats: { label: 'Portfolio', title: 'A record of delivered contracts.' },
  featured: { label: 'Featured', title: 'Selected projects.' },
  archive: { label: 'Archive', title: 'Complete project list.' },
  gallery: { label: 'Field archive', title: 'Engineering in the field.' },
}

export const contactSections = {
  intro: {
    label: 'Contact',
    title: 'Talk to the people who build the systems.',
    body: 'Whether you are scoping a desilting campaign, an intake protection package or a civil modification, our engineering team can advise on configuration, delivery and commissioning.',
  },
  quick: { label: 'Quick actions', title: 'Reach us directly.' },
  location: { label: 'Location', title: 'Where we are.' },
}
