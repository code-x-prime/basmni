import type { MediaKey } from './site'

/**
 * Deep content for the Specialized Civil Works dedicated page.
 * Grounded in the existing Basmni source in `content/services.ts` (the
 * `civil-works` service `description` and `groups`). No specifications are
 * invented.
 */

export type CivilStep = { number: string; title: string; text: string }
export type CivilFeature = { number: string; title: string; text: string }
export type CivilStructure = { title: string; text: string; image: MediaKey }
export type CivilApplication = { title: string; text: string; image: MediaKey }

export const civilHomeIntro: string[] = [
  'Every dam, barrage and river weir sits in a different hydrodynamic and geological setting — a mountain valley, a broad alluvial river, a steep boulder-strewn bed. The civil structure is engineered for that site, from the foundation up, not adapted from a standard drawing.',
  'Basmni delivers the allied civil scope for water-retaining and diversion structures — foundation and bedrock treatment, mass concrete and RCC works, spillways and energy dissipators, seepage cut-offs, trench-weir troughs and desilting chambers — and builds it in step with the trash racks, gates and embedded parts so the two packages fit together on site.',
]

export const civilHeadlineMetrics = [
  { value: '3', label: 'Structure types' },
  { value: 'Site-specific', label: 'Every design' },
  { value: 'Design–build', label: 'Single scope' },
]

export const civilHowItWorks: CivilStep[] = [
  {
    number: '01',
    title: 'Read the site',
    text: 'The structure type follows the setting — storage in a mountain valley, diversion across a flat river, a trench intake in a steep rocky bed — so foundation, geometry and hydraulics are set by the site.',
  },
  {
    number: '02',
    title: 'Treat the foundation',
    text: 'Deep bedrock grouting, sheet-pile cut-offs and prepared rafts control seepage and settlement before any water-retaining concrete is placed.',
  },
  {
    number: '03',
    title: 'Build and pass water',
    text: 'Mass concrete, rockfill or gated RCC piers are placed with spillways, desilting chambers and embedded steel to move flood water safely while the structure does its job.',
  },
]

export const civilFeatures: CivilFeature[] = [
  {
    number: '01',
    title: 'Site-specific engineering',
    text: 'Each structure is designed for its own hydrodynamic and geological conditions rather than adapted from a standard type.',
  },
  {
    number: '02',
    title: 'Foundation treatment',
    text: 'Deep bedrock grouting and prepared rafts give storage dams the bearing and watertightness for high reservoir pressure.',
  },
  {
    number: '03',
    title: 'Seepage control',
    text: 'Underground sheet piles and cut-offs block seepage paths under barrages built across permeable alluvial rivers.',
  },
  {
    number: '04',
    title: 'Flood-passing works',
    text: 'Spillways and gated RCC piers are sized to route design floods without overtopping or scour damage.',
  },
  {
    number: '05',
    title: 'Boulder-resistant intakes',
    text: 'Trench weirs use boulder-resistant concrete troughs with embedded racks and desilting chambers in steep riverbeds.',
  },
  {
    number: '06',
    title: 'Integrated with hydro-mechanical',
    text: 'Civil works are coordinated with the trash racks, gates and embedded parts so the two scopes fit together on site.',
  },
]

export const civilStructures: CivilStructure[] = [
  {
    title: 'Dams (storage)',
    text: 'Built in mountain valleys. Deep bedrock grouting, mass concrete / rockfill placement and spillways to withstand high water pressure and store large volumes.',
    image: 'civilFoundationExcavation',
  },
  {
    title: 'Barrages (diversion)',
    text: 'Built across broad, flat rivers. Wide concrete raft slabs, underground sheet piles to block seepage, and gated RCC piers to divert water without large reservoirs.',
    image: 'civilDewateredIntakeBay',
  },
  {
    title: 'Trench weirs (intake)',
    text: 'Built flush inside steep rocky riverbeds. Boulder-resistant concrete troughs, embedded steel trash racks and desilting chambers to capture stream water while shedding debris.',
    image: 'civilTrenchWeirIntake',
  },
]

export const civilApplications: CivilApplication[] = [
  {
    title: 'Storage dams',
    text: 'New and modified concrete or rockfill dams in mountain valleys, with foundation grouting, spillways and outlet works.',
    image: 'civilFoundationExcavation',
  },
  {
    title: 'Diversion barrages',
    text: 'Gated barrages on wide rivers, with raft foundations and seepage cut-offs to divert flow into canals or intakes.',
    image: 'civilDewateredIntakeBay',
  },
  {
    title: 'Trench-weir intakes',
    text: 'Stream intakes flush in steep rocky beds, capturing water while passing boulders and debris downstream.',
    image: 'civilTrenchWeirIntake',
  },
  {
    title: 'Intake screens & channels',
    text: 'Embedded rack panels and lined approach channels that screen the diverted flow before it reaches the conveyance system.',
    image: 'civilIntakeScreensCanal',
  },
  {
    title: 'Desilting & intake chambers',
    text: 'Sediment-excluding chambers and approach structures tied into the intake and trash-rack arrangement.',
    image: 'civilTrashRackPanels',
  },
  {
    title: 'Embedded steel & site logistics',
    text: 'Fabricated racks, liners, gate frames and embedded parts hauled to remote sites and set into the structure.',
    image: 'civilSteelDeliverySite',
  },
]

export const civilProcess = {
  intro:
    'Basmni takes the civil scope from site investigation and hydraulic design through construction, coordinated with the hydro-mechanical package so the structure and its gates are delivered together.',
  steps: ['Investigate', 'Design', 'Foundation', 'Construct', 'Commission'],
  contexts: [
    'Mountain-valley dam sites',
    'Alluvial river crossings',
    'Steep rocky riverbeds',
    'Modification of existing structures',
    'Coordination with gates & racks',
  ],
}

export const civilFaq: { q: string; a: string }[] = [
  {
    q: 'What civil structures does Basmni build?',
    a: 'Allied civil engineering for major dams, barrages and river weirs — storage dams in mountain valleys, diversion barrages across broad rivers, and trench-weir intakes in steep rocky beds — along with spillways, desilting chambers and embedded steelwork, each tailored to the site.',
  },
  {
    q: 'How is a storage dam different from a barrage?',
    a: 'A storage dam is built in a mountain valley to hold a large reservoir, using deep bedrock grouting, mass concrete or rockfill and spillways for high water pressure. A barrage is built across a broad, flat river to divert water without a large reservoir, using wide raft slabs, underground sheet piles against seepage and gated RCC piers.',
  },
  {
    q: 'What is a trench weir?',
    a: 'An intake structure built flush inside a steep rocky riverbed. Boulder-resistant concrete troughs with embedded steel trash racks and desilting chambers capture stream water for diversion while letting boulders and debris pass downstream.',
  },
  {
    q: 'Does Basmni handle both the civil and the hydro-mechanical scope?',
    a: 'Yes. The civil works are engineered and built in coordination with the trash racks, gates, hoists and embedded parts, so the structure and its mechanical equipment are delivered as one package that fits together on site.',
  },
  {
    q: 'Can Basmni modify an existing structure?',
    a: 'Yes. Trench-weir modification, spillway and desilting-chamber work and foundation treatment on existing dams and barrages are part of the scope, informed by a site investigation of the structure as built.',
  },
]

export const civilCta = {
  title: 'Planning a dam, barrage or weir?',
  emphasis: "Let's engineer it for the site.",
  description:
    'Tell us the river, the setting and the function of the structure. Basmni will advise on the structure type, foundation treatment and how the civil and hydro-mechanical scopes tie together.',
}
