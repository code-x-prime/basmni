export const home = {
  hero: {
    eyebrow: 'Basmni Technologies Pvt. Ltd.',
    title: 'Engineering the future of water infrastructure.',
    description:
      'Advanced engineering, dredging and hydro-mechanical solutions for dams, reservoirs and hydropower infrastructure.',
  },
  intro: { label: 'Who we are', title: 'Engineering solutions for critical infrastructure.' },
  statsTitle: 'Built on engineering experience.',
  solutionTitle: 'Our core engineering solutions',
  solutionIntro:
    'Specialized systems engineered for demanding water and power infrastructure environments.',
  dredgingTitle: 'Deeper. Heavier. Engineered.',
  pacTitle: 'High-performance power transmission,',
  pacEmphasis: 'built for the next generation of grids.',
  debrisTitle: 'Protecting critical water intakes.',
  projectsTitle: 'Projects that speak for themselves.',
  galleryTitle: 'Engineering in the field.',
  ctaTitle: 'Have a challenging project?',

  featuredNote:
    'Complete, end-to-end dredging and hydro-mechanical solutions using advanced equipment and modern methods.',
}

/**
 * Auto-scrolling marquee strip under the homepage hero. Each item is an
 * engineering highlight from delivered work. `icon` names a lucide-react icon.
 */
export const homeMarquee: { icon: string; text: string }[] = [
  { icon: 'Gauge', text: 'Extreme-depth dredging — down to ~100 m below reservoir level' },
  { icon: 'Waves', text: 'Teesta Low Dam-III — reservoir desilting for NHPC' },
  { icon: 'Zap', text: 'SF6-free power transmission — up to 420 kV and 5,000 A' },
  { icon: 'Factory', text: 'In-house fabrication of trash racks, dredges, booms and gates' },
  { icon: 'Anchor', text: 'Floating log booms — wire-rope suspension for logs and ice' },
  {
    icon: 'Wrench',
    text: 'Bhaledh trench weir — modified trash rack with civil works, Baira Siul',
  },
  { icon: 'Ruler', text: 'Steel liners, spillway gates and embedded parts — designed to site' },
  { icon: 'Mountain', text: 'Himalayan project sites — remote, high-altitude installation' },
]
