import type { MediaKey } from './site'

/**
 * Deep content for the Deep Dam & Reservoir Dredging dedicated page.
 * Every claim traces to the existing Basmni source in `content/services.ts`
 * (the `deep-dam-dredging` service `description`, `highlights` and `points`,
 * plus `dredgingEquipment` and `dredgingTechnology`). No specifications are
 * invented.
 */

export type DredgingStep = { number: string; title: string; text: string }
export type DredgingFeature = { number: string; title: string; text: string }
export type DredgingApplication = { title: string; text: string; image: MediaKey }

export const dredgingHomeIntro: string[] = [
  'Reservoirs and dams lose live storage every year as sediment settles against the dam, chokes intakes and fills the dead-storage zone. Recovering that capacity means working at depths, solids concentrations and pipeline lengths where standard low-head dredgers choke and wear out fast.',
  'Basmni delivers deep dam and reservoir dredging end to end — engineering, equipment, mobilisation and operation — using cable-deployed submersible pumps and sediment fluidisation to work reliably down to around 100 m.',
]

/** Reuses the `deep-dam-dredging` service highlights. */
export const dredgingHeadlineMetrics = [
  { value: 'Up to 100m', label: 'Working depth' },
  { value: '35–60%', label: 'Solids handling' },
  { value: '12 × 8 m', label: 'Compact dredge' },
]

export const dredgingHowItWorks: DredgingStep[] = [
  {
    number: '01',
    title: 'Fluidise the sediment',
    text: 'Jet ring systems and side cutters break up compacted silt, clay and consolidated banks ahead of the suction inlet, turning settled sediment back into a pumpable slurry.',
  },
  {
    number: '02',
    title: 'Pump from depth',
    text: 'A slurry submersible pump sits at the sediment layer on a cable-deployed frame — removing suction-lift limits and cavitation — and lifts solids concentrations in the 35–60% range.',
  },
  {
    number: '03',
    title: 'Convey to discharge',
    text: 'Multi-stage and booster pump configurations hold velocity above the critical deposition limit through long discharge pipelines to the disposal or dewatering area.',
  },
]

export const dredgingFeatures: DredgingFeature[] = [
  {
    number: '01',
    title: 'Extreme working depth',
    text: 'Continuous sediment removal down to around 100 m for dead-storage zones, dam intakes and tail pools.',
  },
  {
    number: '02',
    title: 'High solids concentration',
    text: 'Sediment fluidisation and open impellers sustain slurry in the 35–60% solids range without choking.',
  },
  {
    number: '03',
    title: 'Compact footprint',
    text: 'Around 100 m depth is reached with a pontoon as small as 12 × 8 m — easy to mobilise on constrained reservoirs.',
  },
  {
    number: '04',
    title: 'Matched cutting tools',
    text: 'Side cutters and jet rings are selected for the sediment on site, from soft silt to consolidated banks.',
  },
  {
    number: '05',
    title: 'Long-distance discharge',
    text: 'High-head and booster pump configurations carry slurry over extended pipeline runs to disposal.',
  },
  {
    number: '06',
    title: 'Hazard-aware operation',
    text: 'Remote-controlled platforms keep operators away from intake gates, trash racks and toxic sludge basins.',
  },
]

export const dredgingApplications: DredgingApplication[] = [
  {
    title: 'Dead-storage recovery',
    text: 'Removing accumulated sediment from the dead-storage zone to restore lost live capacity in ageing reservoirs.',
    image: 'hydropowerDam',
  },
  {
    title: 'Dam & powerhouse intakes',
    text: 'Clearing sediment build-up around intake structures and penstock approaches to protect flow to the turbines.',
    image: 'dredging',
  },
  {
    title: 'Tail pools & de-silting basins',
    text: 'Keeping tail-water zones and de-silting chambers working so downstream releases stay within design limits.',
    image: 'spillway',
  },
  {
    title: 'Barrages & river weirs',
    text: 'Seasonal removal of silt and sediment upstream of gated structures to maintain water-level control.',
    image: 'civil',
  },
  {
    title: 'Canal & pond systems',
    text: 'Restoring cross-section and capacity in irrigation and cooling-water canals, forebays and settling ponds.',
    image: 'debrisPanorama',
  },
  {
    title: 'Hazardous & restricted zones',
    text: 'Remote-controlled dredging near live intake gates, trash racks and acidic or toxic sludge basins.',
    image: 'remoteDredge',
  },
]

export const dredgingProcess = {
  intro:
    'Basmni scopes each campaign from a bathymetric and sediment survey, then engineers the dredge, pump and pipeline package to the reservoir before mobilising crews to operate it.',
  steps: ['Survey', 'Engineering', 'Mobilisation', 'Dredging', 'Handover'],
  contexts: [
    'Deep canyon reservoirs',
    'Constrained mobilisation access',
    'Live-plant working conditions',
    'Long discharge pipeline runs',
    'Fluctuating water levels',
  ],
}

export const dredgingFaq: { q: string; a: string }[] = [
  {
    q: 'What is deep dam dredging?',
    a: 'It is the removal of accumulated sediment from dams and reservoirs operating under extreme conditions — depths that can reach 100 m, high solid concentrations, hydrostatic pressure, abrasion and long discharge pipelines. Standard low-head equipment fails rapidly under these parameters, so specialised heavy-duty configurations are used.',
  },
  {
    q: 'How deep can Basmni dredging systems operate?',
    a: 'Up to and beyond 100 m working depth. This is achievable with a compact pontoon — around 100 m depth with a dredge as small as 12 × 8 m — using cable-deployed submersible pumps rather than a conventional ladder dredge.',
  },
  {
    q: 'What types of dredging equipment are available?',
    a: 'Cable dredges for extreme depth, remote-controlled dredges for hazardous or restricted zones, amphibious dredges for shallow near-shore areas, and slurry submersible pumps as the core pumping unit — supported by side cutters, jet ring systems and high-head or booster pump configurations.',
  },
  {
    q: 'How does Basmni handle high solid concentrations?',
    a: 'Through sediment fluidisation and specialised pump dynamics. Jet ring systems and side cutters break up compacted silt, clay and consolidated banks, and open multi-vane or vortex-style impellers pass large solids without choking, supporting solid concentrations in the 35–60% range.',
  },
  {
    q: 'Can dredging run while the plant stays in operation?',
    a: 'Yes. Remote-controlled and cable-deployed platforms are positioned with GPS, sonar and cameras and can work near live intake gates and trash racks, keeping operators clear of the hazard while the plant continues to run.',
  },
  {
    q: 'What happens to the dredged material?',
    a: 'The slurry is conveyed through the discharge pipeline — with booster pumps over long runs — to a disposal, dewatering or beneficial-reuse area agreed for the project. Pipeline routing and velocity are engineered to prevent settlement in the line.',
  },
]

export const dredgingCta = {
  title: 'Losing storage to sediment?',
  emphasis: "Let's plan the dredging campaign.",
  description:
    'Share the reservoir, depth, sediment type and disposal constraints. Basmni will advise on the dredge, pump and pipeline configuration and the operating plan.',
}

/* ------------------------------------------------------------------ *
 *  From the Basmni dam-dredging material (Dragflow s.r.l. partnership,
 *  DRH / DRP / DRSP series, project case studies). No claims invented.
 * ------------------------------------------------------------------ */

/** International partnership + company standing. */
export const dredgingPartnership = {
  title: 'Backed by a world-leading dredge manufacturer.',
  text: 'Basmni Technologies, established in 2016, delivers end-to-end deep dredging for dams and reservoirs. The dredge, pump and cutting technology is built on a technical partnership with Dragflow s.r.l. of Italy — a world-leading manufacturer of submersible dredge pumps and cable dredges.',
  points: [
    'End-to-end scope — engineering, equipment, mobilisation and operation',
    'Technical partnership with Dragflow s.r.l. (Italy) for pumps and dredges',
    'Proven on dam-dredging projects in Italy, Eritrea and India',
  ],
}

/** Dredge platform series — DRH / DRP / DRSP with their general arrangement. */
export type DredgeSeries = {
  code: string
  title: string
  forWhat: string
  components: string[]
  image: MediaKey
}
export const dredgingSeries: DredgeSeries[] = [
  {
    code: 'DRH',
    title: 'Cable dredge series',
    forWhat:
      'Cable-deployed dredging at high depth — easy to transport and assemble, and effective even in the densest sediment mixture.',
    components: [
      'Tripod for the steel deployment cable',
      'Side floaters for stability',
      'Hoist for pump handling',
      'Four winches for moving the dredge',
      'Hydraulic power pack',
      'Operator cabin',
    ],
    image: 'dredgeSubmersibleHead',
  },
  {
    code: 'DRP',
    title: 'Remote-controlled dredge series',
    forWhat:
      'Wireless remote-controlled dredging that can run with the dam in full service. A DRP60 with an EL60 electric submersible pump reaches a total dredging capacity of about 450 m³/h.',
    components: [
      'Control panel',
      'Dredging pump',
      'Electric hoist',
      'Two or four winches (45–110 m)',
      'Jet ring system to break up the material',
      'Wireless remote control',
    ],
    image: 'dredgePumpPontoon',
  },
  {
    code: 'DRSP',
    title: 'Shallow-water dredge series',
    forWhat:
      'Shallow-draft operation where high mobility is needed — independent propulsion on water and on land, dredging depth up to 6.5 m, and a wide working reach from a single position.',
    components: [
      'Independent propulsion — in water and on land',
      'Dredging depth up to 6.5 m',
      'Interchangeable hydraulic tools',
      'Wide coverage without repositioning',
    ],
    image: 'dredgeDamShoreline',
  },
]

/** Advantages of the Basmni dredging solution. */
export const dredgingAdvantages: { title: string; points: string[] }[] = [
  {
    title: 'High depth from small dimensions',
    points: [
      'Around 100 m working depth with a dredge as small as 12 × 8 m',
      'A wide pump range, including high-head models, for long or elevated discharge',
      'Side cutters and jet ring systems that work at any depth — from loose material to compact soil',
      'Limited draught of about 1 m',
      'One operator, low operating cost, delivery in two to four months',
    ],
  },
  {
    title: 'Easy transport and assembly',
    points: [
      'Modular construction — the dredge is built up with pin assembly, no submerged work',
      'Site installation in as little as 6–8 hours',
      'No modification needed to adapt across a wide range of dredging depths',
      'Compact enough for sites with difficult access',
    ],
  },
]

/** Field case studies — from the Basmni dam-dredging project record. */
export type DredgingCase = {
  location: string
  country: string
  depth: string
  summary: string
  image: MediaKey
}
export const dredgingCaseStudies: DredgingCase[] = [
  {
    location: 'Ambiesta Dam',
    country: 'Italy',
    depth: '50+ m working depth',
    summary:
      'Dredged 50,000 m³ of clay and alluvial material with a hydraulic pump and side cutters at up to 1,400 m³ per day, holding solid content in the discharge flow to about 1.5 g/m³. The dam stayed in full service throughout.',
    image: 'dredgeArchDamAerial',
  },
  {
    location: 'Mignano Dam',
    country: 'Italy',
    depth: '15–45 m (with reservoir level)',
    summary:
      'Dredged 150,000 m³ of compact silt, with the dredging depth varying from 15 to 45 m as the reservoir level changed through the campaign.',
    image: 'dredgeReservoirValley',
  },
  {
    location: 'Intake-structure dredging',
    country: 'Eritrea',
    depth: '60+ m working depth',
    summary:
      'Sediment accumulating at the dam intake structures, with variable solid sizes and turbidity limits. A full hydraulic dredge with side cutters pumped the material about 1,100 m clear of the dredging area.',
    image: 'dredgeSlurryDischarge',
  },
]

/** Indian project references named in the Basmni material. */
export const dredgingIndiaProjects = ['Salal Dam pilot dredging', 'Nimoo Bazgo', 'TLDP-III']
