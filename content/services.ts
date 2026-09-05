import type { MediaKey } from './site'

export type ServiceCategory = 'Dredging' | 'PAC' | 'TRCM' | 'Civil'

export type ServiceHighlight = { value: string; label: string }
export type ServiceGroup = { title: string; text: string }

export type Service = {
  number: string
  id: string
  title: string
  shortTitle: string
  description: string
  image: MediaKey
  category: ServiceCategory
  /** Optional dedicated detail page (PAC has one); otherwise the `#id` anchor. */
  href?: string
  /** Metric callouts shown beside the feature copy. */
  highlights?: ServiceHighlight[]
  /** Simple bullet list of capabilities / features. */
  points?: string[]
  /** Sub-configurations shown as a card grid (TRCM types, civil scopes). */
  groups?: ServiceGroup[]
}

/**
 * Core products and services. Copy is drawn from the Basmni source material
 * (basmni.com and the supplied content document); no technical claims are
 * invented.
 */
export const services: Service[] = [
  {
    number: '01',
    id: 'pac',
    title: 'High-pressurized air cable systems',
    shortTitle: 'High-Pressurized Air Cable Systems',
    description:
      'PAC technology replaces fluid- or SF6-dependent insulation with clean, compressed technical air for heavy-duty power transmission — engineered for modern grid infrastructure, high-voltage substations and dense industrial corridors.',
    image: 'pacInfra',
    category: 'PAC',
    href: '/products-services/pressurized-air-cables',
    highlights: [
      { value: 'Up to 420 kV', label: 'Voltage rating' },
      { value: 'Up to 5,000 A', label: 'Continuous current' },
      { value: '2×–10×', label: 'Lower losses' },
    ],
    points: [
      'Completely SF6-free and PFAS-free — clean dry technical air or controlled nitrogen–oxygen mixtures, reducing the global-warming-potential factor to zero.',
      'Large aluminium conductor cross-sections (frequently exceeding 2,200 mm²) that lower ohmic resistance and heat.',
      'Transmission losses 2× to 10× lower than standard underground polymeric cables.',
      'Compact modular piping routed through microtunnels, service corridors and utility bridges — no external forced cooling.',
      'Rigid metallic enclosure acts as a Faraday cage, keeping external magnetic fields to minimal levels.',
      'Integrated real-time condition monitoring of internal pressure, gas density and temperature.',
      'Hermetically sealed compartments give a projected operational life beyond 40 years with minimal maintenance.',
    ],
  },
  {
    number: '02',
    id: 'deep-dam-dredging',
    title: 'Deep dam dredging',
    shortTitle: 'Deep Dam Dredging',
    description:
      'Complete, end-to-end dredging for dams and reservoirs operating under extreme conditions — depths up to 100 m, high solid concentrations, hydrostatic pressure, abrasion and long discharge pipelines, where standard low-head equipment fails through choking and rapid wear.',
    image: 'dredging',
    category: 'Dredging',
    highlights: [
      { value: 'Up to 100m', label: 'Working depth' },
      { value: '35–60%', label: 'Solids handling' },
      { value: '12 × 8 m', label: 'Compact dredge size' },
    ],
    points: [
      'Continuous, high-depth sediment removal for dead-storage zones, dam intakes and tail pools.',
      'High solid concentration handling in the 35–60% range through sediment fluidization.',
      'Side cutters and jet ring systems matched to varied sediment types, from soft silt to consolidated banks.',
      'Pump range including high-head models for extended discharge distances.',
      'High working depth achievable with a compact pontoon — around 100 m depth with a 12 × 8 m dredge.',
      'Multi-stage and booster pump configurations to hold velocity above the critical deposition limit.',
    ],
  },
  {
    number: '03',
    id: 'trcm',
    title: 'Trash rack cleaning machines',
    shortTitle: 'Trash Rack Cleaning Machines',
    description:
      'Automated debris removal that keeps intake bays clear when submerged debris, vegetation and trash accumulate on intake grates and threaten water flow to turbines and gates.',
    image: 'trcm',
    category: 'TRCM',
    groups: [
      {
        title: 'Hydraulic type',
        text: 'Best for heavy debris, logs and thick trash mats at shallow to medium depths (up to ~20 m). Rigid hydraulic cylinders give positive downward raking force so the rake pierces and combs highly compacted debris.',
      },
      {
        title: 'Wire rope type',
        text: 'Best for deep-water intakes, steep channels and large hydropower plants. The rake is lowered on a wire rope and hoisting mechanism — highly cost-effective and adaptable where hydraulic arms cannot reach.',
      },
      {
        title: 'Fine screen cleaners',
        text: 'Best for secondary screening, sensitive pumping stations and delicate turbine protection. Tightly spaced teeth remove small debris — leaves, plastic waste and aquatic weeds — that slips through coarse racks.',
      },
    ],
  },
  {
    number: '04',
    id: 'civil-works',
    title: 'Specialized civil works',
    shortTitle: 'Civil Works',
    description:
      'Allied civil engineering for major dams, barrages and river weirs — tailored to the hydrodynamic and structural challenges of each site.',
    image: 'civil',
    category: 'Civil',
    groups: [
      {
        title: 'Dams (storage)',
        text: 'Built in mountain valleys. Deep bedrock grouting, mass concrete / rockfill placement and spillways to withstand high water pressure and store large volumes.',
      },
      {
        title: 'Barrages (diversion)',
        text: 'Built across broad, flat rivers. Wide concrete raft slabs, underground sheet piles to block seepage, and gated RCC piers to divert water without large reservoirs.',
      },
      {
        title: 'Trench weirs (intake)',
        text: 'Built flush inside steep rocky riverbeds. Boulder-resistant concrete troughs, embedded steel trash racks and desilting chambers to capture stream water while shedding debris.',
      },
    ],
  },
]

/** Dredging equipment families — detailed alternating blocks under the dredging section. */
export type DredgingEquipment = {
  id: string
  title: string
  image: MediaKey
  application: string
  benefit: string
  body: string
}

export const dredgingEquipment: DredgingEquipment[] = [
  {
    id: 'cable-dredges',
    title: 'Cable dredges',
    image: 'cableDredge',
    application:
      'Extreme depths, up to and beyond 100 m — deep canyons, dead-storage zones and dam intakes.',
    benefit:
      'Not limited by ladder length; the pump descends vertically on cables to reach zones no conventional dredge can.',
    body: 'Suspended from a specialized crane, gantry or barge-mounted A-frame via heavy-duty umbilical cables and high-tensile steel wire ropes. Depth is managed with precision electric or hydraulic winches and depth-measuring pulleys, allowing controlled vertical descent directly into the working zone.',
  },
  {
    id: 'remote-controlled-dredges',
    title: 'Remote-controlled dredges',
    image: 'remoteDredge',
    application:
      'Hazardous environments and restricted zones near intake gates, trash racks and toxic or acidic sludge basins.',
    benefit: 'Keeps operators away from the hazard while retaining precise, monitored positioning.',
    body: 'Modular, self-floating or pontoon-supported platforms maneuvered entirely by long-range remote telemetry, integrated with automated GPS positioning, sonar and echo sounders, and monitoring cameras.',
  },
  {
    id: 'amphibious-dredges',
    title: 'Amphibious dredges',
    image: 'amphibiousDredge',
    application:
      'Shallow tail-water zones, marshy reservoir peripheries and littoral areas with fluctuating water levels.',
    benefit:
      'Self-propels on land and floats in shallow water, covering near-shore areas other dredges cannot access.',
    body: 'Equipped with track-mounted pontoons that allow self-propulsion on land and stable flotation in shallow water. It serves a complementary role for near-shore clearing rather than deep zones.',
  },
  {
    id: 'slurry-submersible-pumps',
    title: 'Slurry submersible pumps',
    image: 'slurryPump',
    application:
      'Integrated directly onto cable-deployment frames or remote dredges as the core workhorse.',
    benefit:
      'Submerging the pump at the sediment layer removes suction-lift limits and controls cavitation.',
    body: 'Fitted with high-chrome or specialized alloy wear components and powered by heavy-duty electric motors with robust cooling jackets or high-pressure hydraulic drives. Open multi-vane or vortex-style impellers pass large solids without choking; high-head and booster configurations overcome long discharge lines.',
  },
]

/** Dredging technology highlights — from the basmni.com technology section. */
export const dredgingTechnology: { title: string; text: string }[] = [
  {
    title: 'Agitator concept',
    text: 'High concentration solid handling capability in the 35–60% range.',
  },
  {
    title: 'Cable dredge equipment',
    text: 'Specialized dredging systems designed for deep dam dredging.',
  },
  {
    title: 'High-depth dredging',
    text: 'Continuous sediment removal technology for sustained operation.',
  },
  {
    title: 'Compact configuration',
    text: 'Around 100 m working depth with a dredge as small as 12 × 8 m.',
  },
  {
    title: 'Side cutters',
    text: 'Break up compacted and consolidated sediment ahead of the suction inlet.',
  },
  {
    title: 'Jet ring systems',
    text: 'High-pressure water jets fluidize silt and clay for varied sediment types.',
  },
]

/** PAC technical pillars — from the supplied content document. */
export const pacPillars: { title: string; text: string }[] = [
  {
    title: 'SF6-free & PFAS-free',
    text: 'Clean dry technical air or nitrogen–oxygen mixtures eliminate greenhouse gases and fluoropolymers.',
  },
  {
    title: 'Electrical efficiency',
    text: 'Large aluminium conductor cross-sections lower resistance; losses 2×–10× below polymeric cables.',
  },
  {
    title: 'Thermal performance',
    text: 'Large-profile enclosures dissipate heat passively — no external forced-cooling plant.',
  },
  {
    title: 'Current capacity',
    text: 'Up to 5,000 A continuous at voltage ratings up to 420 kV without excessive thermal degradation.',
  },
  {
    title: 'Compact integration',
    text: 'Modular piping routed through microtunnels, service corridors and narrow utility bridges.',
  },
  {
    title: 'Low EMF',
    text: 'The rigid metallic enclosure acts as a Faraday cage, reducing external magnetic fields to minimal levels.',
  },
  {
    title: 'Condition monitoring',
    text: 'Continuous real-time telemetry of internal pressure, gas density and localized temperatures.',
  },
  {
    title: 'Long lifecycle',
    text: 'Hermetically sealed, pressure-monitored compartments give a projected life beyond 40 years.',
  },
]

/** Products & Services FAQ — answers drawn strictly from the sources. */
export const servicesFaq: { q: string; a: string }[] = [
  {
    q: 'What is deep dam dredging?',
    a: 'It is the removal of accumulated sediment from dams and reservoirs operating under extreme conditions — depths that can reach 100 m, high solid concentrations, hydrostatic pressure, abrasion and long discharge pipelines. Standard low-head equipment fails rapidly under these parameters, so specialized heavy-duty configurations are used.',
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
    a: 'Through sediment fluidization and specialized pump dynamics. Jet ring systems and side cutters break up compacted silt, clay and consolidated banks, and open multi-vane or vortex-style impellers pass large solids without choking, supporting solid concentrations in the 35–60% range.',
  },
  {
    q: 'What is a PAC system?',
    a: 'A High-Pressurized Air Cable system: heavy-duty power transmission that replaces SF6- or fluid-dependent insulation with clean compressed technical air. It is SF6-free and PFAS-free, handles up to 5,000 A at up to 420 kV, and runs with 2×–10× lower losses than standard underground polymeric cables.',
  },
  {
    q: 'What is a Trash Rack Cleaning Machine?',
    a: 'An automated machine that removes debris, vegetation and trash accumulating on intake grates so water flow to turbines and gates is not blocked. Basmni offers hydraulic-type, wire-rope-type and fine-screen configurations depending on intake depth and debris volume.',
  },
  {
    q: 'Where are TRCM systems used?',
    a: 'At dams and hydropower plants to protect penstocks and turbines, at barrages and river weirs to manage seasonal debris and prevent gate jamming, and on canal-based projects to remove aquatic weeds, algae and plastics from irrigation and cooling-water intakes.',
  },
]
