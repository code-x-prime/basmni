import type { MediaKey } from './site'

export type ProjectCategory = 'Dredging' | 'PAC' | 'TRCM' | 'Civil' | 'Hydropower'

export type Project = {
  id: string
  name: string
  client: string
  category: ProjectCategory
  year: string
  awardDate?: string
  scope: string
  contractNo?: string
  image: MediaKey
  featured?: boolean
}

/**
 * Reference projects. Drawn from the "Our Core Products & Services" contract
 * table in the Basmni source material. Images reuse the local project photo set.
 * Contract / reference numbers and award dates are retained where available.
 */
export const projects: Project[] = [
  {
    id: 'bhaledh-baira-siul',
    name: 'Bhaledh Trench Weir — Baira Siul Power Station',
    client: 'Baira Siul Power Station (NHPC)',
    category: 'Civil',
    year: '2024',
    awardDate: '08.06.2024',
    scope:
      'Design, manufacturing, supply and erection of a modified trash rack with civil work at the Bhaledh trench weir apron to increase water carrying capacity and prevent wash-out of the trash rack.',
    contractNo: 'NH/BSPS/CC/CW/69/2024-25/LOA-09',
    image: 'civilTrenchWeirIntake',
    featured: true,
  },
  {
    id: 'bhutan-hydropower',
    name: 'Bhutan Hydropower Services Limited — TRCM & FSCM',
    client: 'Bhutan Hydropower Services Limited',
    category: 'TRCM',
    year: '2024',
    awardDate: '15.06.2024',
    scope:
      'Design, manufacturing, supply, installation, testing and commissioning of Trash Rack Cleaning Machine (TRCM) and Fine Screen Cleaning Machines (FSCM).',
    contractNo: 'BHSL/SCMD/PO-06/2024/1045',
    image: 'trcm',
    featured: true,
  },
  {
    id: 'teesta-ldiii-desilting',
    name: 'Teesta Low Dam-III Power Station, Rambi — Desilting',
    client: 'Teesta Low Dam-III Power Station (NHPC)',
    category: 'Dredging',
    year: '2024',
    awardDate: '21.08.2024',
    scope:
      'Desilting / silt removal in front of the intake service gate, TRC area and upstream / downstream of the radial gates of the power house and barrage area.',
    contractNo: 'NH/TLD-IIIPS/HM/2024/932',
    image: 'dredgePumpPontoon',
  },
  {
    id: 'kutehr-floating-boom',
    name: 'Kutehr HEP — Floating Boom',
    client: 'Kutehr Hydro Electric Project',
    category: 'TRCM',
    year: '2025',
    awardDate: '22.03.2025',
    scope:
      'Design, supply, erection, testing and commissioning of a complete floating boom system, including spares, as per project technical specifications.',
    contractNo: '4500090730',
    image: 'logBoom',
  },

  {
    id: 'nimoo-bazgo-desilting',
    name: 'Nimoo Bazgo Power Station — Draft Tube Gate Desilting',
    client: 'Nimoo Bazgo Power Station (NHPC)',
    category: 'Dredging',
    year: '2025',
    awardDate: '21.06.2025',
    scope:
      'Desilting / silt removal in front of all six draft tube gates in submerged condition at the tail pool of Nimoo Bazgo Power Station.',
    contractNo: 'NH/NBPS/C&P/WO-42/2025-26/85',
    image: 'dredgeSubmersibleHead',
    featured: true,
  },
  {
    id: 'tld-iii-hm-gates',
    name: 'TLD-III PS, Rambi — Hydro-Mechanical Gate Desilting',
    client: 'Teesta Low Dam-III Power Station (NHPC)',
    category: 'Dredging',
    year: '2025',
    awardDate: '23.08.2025',
    scope:
      'Desilting / silt removal work in front of the hydro-mechanical gates at TLD-III PS, Rambi.',
    contractNo: 'NH/TLD-IIIPS/HM/2025/1031',
    image: 'dredgeSlurryDischarge',
  },
  {
    id: 'bhaledh-apron-restoration',
    name: 'Bhaledh — Baira Siul Power Station — Apron & Tunnel Restoration',
    client: 'Baira Siul Power Station (NHPC)',
    category: 'Civil',
    year: '2026',
    awardDate: '16.01.2026',
    scope:
      'Restoration of the damaged apron, Bhaledh Feeder Tunnel, desilting chamber and silt flushing tunnel at Bhaledh, Baira Siul Power Station.',
    contractNo: 'NH/BSPS/CC/CW/42/2025-26/LOA-36',
    image: 'refBhaledhAfter',
  },
  {
    id: 'dikrong-tail-pool-dredging',
    name: 'Dikrong Power House, PLHPS — Tail Pool Dredging',
    client: 'NEEPCO Ltd, Arunachal Pradesh',
    category: 'Dredging',
    year: '2026',
    awardDate: '13.07.2026',
    scope: 'Dredging of sediments from the tail pool for Dikrong Power House, PLHPS, NEEPCO Ltd.',
    contractNo: 'PLHPS/C&P/CIVIL-PH/T-46/2026-27/545',
    image: 'dredgeReservoirValley',
    featured: true,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export const projectCategories = ['All', 'Dredging', 'TRCM', 'PAC', 'Civil', 'Hydropower'] as const
export type ProjectFilterValue = (typeof projectCategories)[number]

/** Portfolio summary stats — counts derived from the project list above. */
export const projectStats: { value: string; label: string }[] = [
  { value: String(projects.length), label: 'Reference contracts' },
  { value: '8', label: 'Power stations served' },
  { value: '2022', label: 'First award' },
  { value: 'PAN INDIA', label: 'Project locations' },
]
