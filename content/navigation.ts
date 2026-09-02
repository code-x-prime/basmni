export type NavChild = { label: string; href: string }
export type NavItem = { label: string; href: string; children?: NavChild[] }

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  {
    label: 'Products & Services',
    href: '/products-services',
    children: [
      { label: 'Pressurized Air Cables', href: '/products-services/pressurized-air-cables' },
      { label: 'Trash Rack Cleaning Machines', href: '/products-services#trcm' },
      { label: 'Dredging Services', href: '/products-services#deep-dam-dredging' },
    ],
  },
  { label: 'References', href: '/references' },
  { label: 'Contact', href: '/contact' },
]
export const navigationCta = { label: 'Discuss Your Project', href: '/contact' }
export const routeCopy = {
  '/about-us': {
    eyebrow: 'About Basmni',
    title: 'Engineering with field intelligence.',
    body: 'Basmni Technologies Pvt. Ltd. brings design, manufacturing, installation and commissioning together for demanding water infrastructure.',
  },
  '/products-services': {
    eyebrow: 'Products & Services',
    title: 'Systems built for difficult water.',
    body: 'From deep dam dredging to intake protection, our specialist systems are engineered for dependable operation.',
  },
  '/references': {
    eyebrow: 'References',
    title: 'Work that performs in the field.',
    body: 'Explore selected hydro-mechanical and hydropower infrastructure projects delivered across India.',
  },
  '/contact': {
    eyebrow: 'Start a conversation',
    title: 'Let’s engineer the solution.',
    body: 'Tell us about your project, operating conditions and delivery requirements.',
  },
} as const
export type RouteKey = keyof typeof routeCopy
export const exploreCta = { label: 'Explore Solutions', href: '/products-services' }
export const callCta = { label: 'Talk to Our Engineers', href: 'tel:+919810148456' }
export const enquiryCta = { label: 'Send an Enquiry', href: '/contact' }
export const contactLinks = { phone: 'tel:+919810148456', email: 'mailto:info@basmni.com' }
export const footerLinks = navigation
export default navigation
