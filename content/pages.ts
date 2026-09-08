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

export const pacHero: PageHeroContent = {
  eyebrow: 'Pressurized Air Cables (PAC)',
  titleLines: ['High-pressurized', 'air cable systems.'],
  description:
    'Heavy-duty power transmission insulated with clean compressed technical air — SF6-free, PFAS-free, low-loss and continuously monitored. Basmni engineers, supplies and commissions PAC systems for high-voltage substations, dense grid corridors and hydropower evacuation.',
  image: 'pacCableIndustrial',
  imageAlt: 'Cutaway of a pressurized-air cable beside an industrial power plant',
  imagePosition: 'center',
  breadcrumb: [
    home,
    { label: 'Pressurized Air Cables (PAC)', href: '/products-services/pressurized-air-cables' },
  ],
}

export const dredgingHero: PageHeroContent = {
  eyebrow: 'Deep Dam & Reservoir Dredging',
  titleLines: ['Deep dam', 'dredging.'],
  description:
    'End-to-end dredging for dams and reservoirs under extreme conditions — depths to around 100 m, high solids concentrations, hydrostatic pressure and long discharge pipelines. Basmni engineers, mobilises and operates the dredge, pump and pipeline package.',
  image: 'dredgePumpPontoon',
  imageAlt: 'Cable-deployed dredge pump and hydraulic arm on a pontoon in a reservoir',
  imagePosition: 'center',
  breadcrumb: [home, { label: 'Deep Dam Dredging', href: '/products-services/deep-dam-dredging' }],
}

export const trcmHero: PageHeroContent = {
  eyebrow: 'Trash Rack Cleaning Machines (TRCM)',
  titleLines: ['Trash rack', 'cleaning machines.'],
  description:
    'Automated debris removal that protects downstream infrastructure and holds peak water flow. Debris on the intake screen builds a differential head across the rack, starves turbines and pumps, and loads the bars until they bend. Hydraulic, wire-rope, chain and gantry machines — matched to the intake.',
  image: 'trcmDamIntakeMachine',
  imageAlt:
    'Gantry-mounted trash rack cleaning machine lifting logs off a dam intake screen, spillway behind',
  imagePosition: 'center',
  breadcrumb: [
    home,
    {
      label: 'Trash Rack Cleaning Machines',
      href: '/products-services/trash-rack-cleaning-machines',
    },
  ],
}

export const civilHero: PageHeroContent = {
  eyebrow: 'Specialized Civil Works',
  titleLines: ['Specialized', 'civil works.'],
  description:
    'Allied civil engineering for dams, barrages and river weirs — foundation and bedrock treatment, mass concrete and RCC works, spillways, seepage cut-offs, trench-weir troughs and desilting chambers, built in coordination with the hydro-mechanical scope and tailored to the site.',
  image: 'civilTrenchWeirIntake',
  imageAlt:
    'Trench-weir intake structure with embedded steel screens in a concrete channel on a Basmni project',
  imagePosition: 'center 55%',
  breadcrumb: [home, { label: 'Civil Works', href: '/products-services/civil-works' }],
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
    label: 'About Basmni',
    title: 'About Basmni.',
    deck: 'An engineering and infrastructure solutions provider operating on a Pan-India scale for the hydro-power and water resource sectors since 2016.',
  },
  capabilities: {
    label: 'Capabilities',
    title: 'From engineering to execution.',
    deck: 'One accountable team across every stage — equipment is engineered for the site and stays supported through commissioning.',
  },
  applications: {
    label: 'Applications',
    title: 'Where our engineering works.',
  },
  glance: { label: 'At a glance', title: 'Basmni at a glance.' },
  equipment: {
    label: 'Technology & equipment',
    title: 'The systems behind the work.',
    deck: 'Dredges, pumps, cleaning machines and power-transmission systems — engineered, built and commissioned by Basmni.',
  },
  why: { label: 'Why Basmni', title: 'Built for demanding environments.' },
  process: {
    label: 'Process',
    title: 'A single path from design to site.',
  },
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
