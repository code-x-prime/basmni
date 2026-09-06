import type { MediaKey } from './site'

/**
 * Deep content for the Pressurized Air Cable (PAC) flagship solution.
 *
 * Every technical claim here traces to existing Basmni source material in
 * `content/services.ts` (the `pac` service `points`, `pacPillars` and the PAC
 * entries in `servicesFaq`): SF6-free and PFAS-free insulation using clean dry
 * technical air or nitrogen–oxygen mixtures; large aluminium conductor
 * cross-sections above 2,200 mm²; transmission losses 2×–10× below polymeric
 * cable; up to 420 kV and up to 5,000 A continuous; passive thermal management
 * with no forced cooling; a rigid metallic enclosure acting as a Faraday cage
 * for low external EMF; integrated real-time monitoring of internal pressure,
 * gas density and temperature; hermetically sealed compartments with a projected
 * life beyond 40 years; modular piping routed through microtunnels, service
 * corridors and utility bridges.
 *
 * Figures that appear only on the client's technology reference (hivoduct.com)
 * and NOT in Basmni source — e.g. a 3,600 MW transfer rating or a 12 kV lower
 * bound — are deliberately excluded from the Basmni specification tables and, if
 * mentioned at all, are attributed via `pacReferenceNote`.
 */

export type PacStep = { number: string; title: string; text: string }
export type PacFeature = { number: string; title: string; text: string }
export type PacComponent = { title: string; text: string }
export type PacSolution = { title: string; text: string; tags: string[]; image: MediaKey }
export type PacComparisonRow = { criteria: string; pac: string; conventional: string }
export type PacSpec = { label: string; value: string }

/** Two short paragraphs for the homepage PAC feature. */
export const pacHomeIntro: string[] = [
  'Pressurized Air Cable (PAC) systems move large blocks of power through a sealed metallic pipe insulated with clean, dry technical air instead of SF6 gas or fluorinated polymers. The result is a heavy-duty transmission link with the capacity of a gas-insulated line and none of its greenhouse-gas exposure.',
  'Basmni engineers, supplies and commissions PAC systems for high-voltage substations, dense grid corridors and hydropower evacuation — where large conductor cross-sections, low losses and a compact right-of-way matter more than anything else.',
]

/** "How PAC works" — three functional stages. */
export const pacHowItWorks: PacStep[] = [
  {
    number: '01',
    title: 'Transmit power',
    text: 'Large aluminium conductors — frequently exceeding 2,200 mm² — carry high continuous current with low ohmic resistance, so the system runs cooler and wastes less energy than a comparable polymeric cable.',
  },
  {
    number: '02',
    title: 'Insulate with pressurized air',
    text: 'Clean dry technical air, or a controlled nitrogen–oxygen mixture, is held under pressure inside the enclosure as the dielectric. There is no SF6, no PFAS and no insulating fluid, so the global-warming-potential factor of the insulation is zero.',
  },
  {
    number: '03',
    title: 'Monitor continuously',
    text: 'Integrated sensors track internal pressure, gas density and temperature in real time. Operators see the condition of the link continuously and can plan maintenance around measured data rather than fixed intervals.',
  },
]

/** Eight key features — headline + one supporting sentence each. */
export const pacFeatures: PacFeature[] = [
  {
    number: '01',
    title: 'High transmission capacity',
    text: 'Rated for continuous current up to 5,000 A at voltages up to 420 kV without excessive thermal degradation.',
  },
  {
    number: '02',
    title: 'Lower transmission losses',
    text: 'Large aluminium cross-sections cut resistive heating; losses run 2× to 10× below standard underground polymeric cables.',
  },
  {
    number: '03',
    title: 'PFAS- and SF6-free insulation',
    text: 'Clean dry technical air or nitrogen–oxygen mixtures replace fluorinated polymers and SF6 entirely — zero insulation global-warming potential.',
  },
  {
    number: '04',
    title: 'Integrated condition monitoring',
    text: 'Continuous real-time telemetry of internal pressure, gas density and localised temperature is built into the system, not bolted on.',
  },
  {
    number: '05',
    title: 'Compact system architecture',
    text: 'Modular piping is routed through microtunnels, service corridors and narrow utility bridges — no external forced-cooling plant.',
  },
  {
    number: '06',
    title: 'Reduced external electromagnetic fields',
    text: 'The rigid metallic enclosure behaves as a Faraday cage, holding external magnetic fields to minimal levels along the route.',
  },
  {
    number: '07',
    title: 'Flexible, modular installation',
    text: 'Standardised pipe modules adapt to varied routes — new ducts, reused tunnels, bridges and confined substation approaches.',
  },
  {
    number: '08',
    title: 'Robust metallic enclosure',
    text: 'Hermetically sealed, pressure-monitored compartments give a projected operational life beyond 40 years with minimal maintenance.',
  },
]

/** Five main components of a PAC system. */
export const pacComponents: PacComponent[] = [
  {
    title: 'Aluminium conductor',
    text: 'Large-cross-section aluminium conductors (frequently above 2,200 mm²) sized for high current and low resistive loss.',
  },
  {
    title: 'Pressurized-air dielectric',
    text: 'Clean dry technical air or a nitrogen–oxygen mixture held under pressure as the insulating medium — no SF6, no PFAS, no fluid.',
  },
  {
    title: 'Metallic enclosure',
    text: 'A rigid sealed pipe that contains the pressure, protects the conductor and acts as a Faraday cage against external EMF.',
  },
  {
    title: 'Modular piping system',
    text: 'Standardised pipe sections and joints that let the route follow tunnels, corridors, bridges and compact substation approaches.',
  },
  {
    title: 'Integrated monitoring',
    text: 'Pressure, gas-density and temperature sensors feeding continuous condition data to the operator for planned maintenance.',
  },
]

/** Solutions by grid level — framed as suitability, not as claimed Basmni projects. */
export const pacGridSolutions: PacSolution[] = [
  {
    title: 'High-voltage networks',
    text: 'High-performance links for transmission networks and grid-expansion projects — moving large blocks of power over medium and long distances with low losses and a narrow right-of-way.',
    tags: ['Transmission networks', 'Grid expansion', 'Bulk power transfer'],
    image: 'pacTransmissionGrid',
  },
  {
    title: 'Medium-voltage networks',
    text: 'Compact, efficient feeds for industrial facilities, critical infrastructure and regional distribution networks with demanding power requirements.',
    tags: ['Industrial supply', 'Critical infrastructure', 'Regional distribution'],
    image: 'pacCableIndustrial',
  },
  {
    title: 'Substations & switchgear',
    text: 'One phase per pressurized-air duct — a flexible architecture for connections into and between high-voltage substations up to 420 kV, including gas-insulated switchgear connections and wall bushings.',
    tags: ['GIS connections', 'Wall bushings', 'Up to 420 kV'],
    image: 'pacSubstationSwitchyard',
  },
  {
    title: 'Specialised & high-current applications',
    text: 'Engineered for battery energy storage systems, data centres, hydrogen facilities and other loads that need high current capacity within a limited footprint.',
    tags: ['Battery energy storage', 'Data centres', 'High-current busbars'],
    image: 'pacHvApplications',
  },
]

/** PAC vs overhead lines (OHL) — rendered with the PacComparison table. */
export const pacVsOhl: PacComparisonRow[] = [
  {
    criteria: 'Land use',
    pac: 'Underground route — a narrow permanent corridor with no visible structures.',
    conventional: 'A wide right-of-way with visible towers and conductors along the whole route.',
  },
  {
    criteria: 'Cost & materials',
    pac: 'Higher civil and material content for the enclosure and buried route.',
    conventional: 'Low material requirement and cost per kilometre on open ground.',
  },
  {
    criteria: 'Transmission performance',
    pac: 'High capacity and low losses in a compact, weather-independent cross-section.',
    conventional: 'Proven high capacity, but rating varies with weather and conductor spacing.',
  },
  {
    criteria: 'Environmental & visual impact',
    pac: 'No overhead structures; low external magnetic field from the metallic enclosure.',
    conventional: 'Visual intrusion and a larger electromagnetic footprint at ground level.',
  },
  {
    criteria: 'Grid-expansion acceptance',
    pac: 'Easier to route through built-up and sensitive areas where overhead lines are opposed.',
    conventional: 'Faster to build on open land, but planning can be slow near settlements.',
  },
]

/** Technology maturity — the credibility block. Claims about pilot installations
 * and field trials belong to the wider technology reference, not to Basmni, so
 * only the technology-class maturity is stated here. */
export const pacProven = {
  intro:
    'PAC combines the proven engineering principles of gas-insulated transmission with a pressurized-air architecture, giving a sustainable, high-performance route for modern medium- and high-voltage networks.',
  points: [
    'Voltage levels up to 420 kV',
    'PFAS- and SF6-free insulation',
    'Built on established gas-insulated transmission engineering',
    'Continuous condition monitoring for safe, reliable operation',
    'Suited to transmission, distribution and industrial applications',
  ],
}

/** Engineering support — what Basmni offers around a PAC project. */
export const pacEngineeringSupport = {
  intro:
    'Whether you are a grid operator, an industrial company or an infrastructure developer, Basmni supports you in evaluating and integrating a PAC system.',
  services: [
    {
      title: 'Technical feasibility assessments',
      text: 'A route, voltage, current and site review to confirm PAC is the right fit before design begins.',
    },
    {
      title: 'Application & project consulting',
      text: 'Configuration advice for transmission, distribution and industrial use cases.',
    },
    {
      title: 'Technical documentation & test reports',
      text: 'The drawings, calculations and commissioning records needed to approve and operate the link.',
    },
    {
      title: 'Direct access to the engineering team',
      text: 'A direct line to the engineers who design and commission the system.',
    },
  ],
}

/** PAC vs conventional XLPE / traditional systems — source-supported wording only. */
export const pacComparison: PacComparisonRow[] = [
  {
    criteria: 'Transmission capacity',
    pac: 'High — large aluminium cross-sections, up to 5,000 A at up to 420 kV.',
    conventional: 'Limited by conductor size and thermal rating for a given trench.',
  },
  {
    criteria: 'Transmission losses',
    pac: '2×–10× lower than standard underground polymeric cable.',
    conventional: 'Higher resistive losses for equivalent current.',
  },
  {
    criteria: 'Condition monitoring',
    pac: 'Integrated — continuous pressure, gas-density and temperature telemetry.',
    conventional: 'Typically added separately, if at all.',
  },
  {
    criteria: 'Insulating medium',
    pac: 'Clean dry technical air / nitrogen–oxygen — SF6-free and PFAS-free.',
    conventional: 'Cross-linked polymer insulation (XLPE); SF6 in gas-insulated variants.',
  },
  {
    criteria: 'Cooling',
    pac: 'Passive — large-profile enclosure dissipates heat, no forced-cooling plant.',
    conventional: 'May require forced cooling at high load.',
  },
  {
    criteria: 'External magnetic field',
    pac: 'Low — rigid metallic enclosure acts as a Faraday cage.',
    conventional: 'Field management depends on laying arrangement and screening.',
  },
  {
    criteria: 'Installation flexibility',
    pac: 'Modular piping through new ducts, reused tunnels, bridges and corridors.',
    conventional: 'Continuous trenching or dedicated cable tunnel.',
  },
]

/** Pressure & condition monitoring — conceptual points. */
export const pacMonitoring: string[] = [
  'Continuous measurement of internal pressure across the sealed compartments.',
  'Real-time monitoring of gas density and localised conductor temperature.',
  'Early detection of a change in operating condition before it affects service.',
  'Maintenance planned around measured data rather than fixed time intervals.',
  'A continuous, transparent picture of link health for the operator.',
]

/** Engineering & installation lifecycle. */
export const pacInstallation = {
  steps: ['Engineering', 'Design', 'Installation', 'Commissioning'],
  intro:
    'Basmni takes a PAC link from first study to energised system as one accountable scope — route engineering, system design, pipe installation and commissioning tests.',
  contexts: [
    'New cable ducts and microtunnels',
    'Reused service and utility tunnels',
    'Utility bridges and elevated corridors',
    'Confined substation approaches',
    'Alongside existing power infrastructure',
  ],
}

/** Basmni PAC specifications — source-backed values only. */
export const pacSpecs: PacSpec[] = [
  { label: 'Voltage rating', value: 'Up to 420 kV' },
  { label: 'Continuous current', value: 'Up to 5,000 A' },
  { label: 'Transmission losses', value: '2×–10× below polymeric cable' },
  { label: 'Conductor', value: 'Aluminium, > 2,200 mm²' },
  { label: 'Cooling', value: 'Passive — no forced cooling' },
  { label: 'Projected life', value: '> 40 years' },
]

/** Headline metrics for compact strips (homepage feature, page intro). */
export const pacHeadlineMetrics: PacSpec[] = [
  { value: 'Up to 420 kV', label: 'Voltage rating' },
  { value: 'Up to 5,000 A', label: 'Continuous current' },
  { value: '2×–10×', label: 'Lower losses' },
  { value: '40+ yr', label: 'Projected life' },
]

export const pacReferenceNote =
  'Voltage and current figures above are Basmni system parameters drawn from Basmni technical material. Wider industry references for pressurized-air / gas-insulated transmission sometimes quote different envelopes (for example higher bulk-transfer ratings or a lower voltage bound); those are technology-reference figures, not Basmni specifications, and any project is engineered to its own rated parameters.'

/** PAC-specific FAQ — tone matched to `servicesFaq`. */
export const pacFaq: { q: string; a: string }[] = [
  {
    q: 'What is a Pressurized Air Cable (PAC) system?',
    a: 'A heavy-duty power transmission system in which the conductor runs inside a sealed metallic pipe insulated with clean compressed technical air rather than SF6 gas or fluorinated polymer. It is SF6-free and PFAS-free, handles up to 5,000 A at up to 420 kV, and runs with 2× to 10× lower losses than standard underground polymeric cable.',
  },
  {
    q: 'How does PAC actually work?',
    a: 'Large aluminium conductors carry the current; clean dry technical air (or a nitrogen–oxygen mixture) held under pressure inside the enclosure is the insulating medium; and integrated sensors monitor internal pressure, gas density and temperature continuously so the operator always knows the condition of the link.',
  },
  {
    q: 'Why use pressurized air instead of SF6 or polymer insulation?',
    a: 'Pressurized air gives high electrical strength without any greenhouse gas or fluoropolymer. SF6 has a very high global-warming potential and PFAS chemistry is increasingly restricted; replacing both with technical air removes that exposure while keeping the electrical performance of a gas-insulated line.',
  },
  {
    q: 'How is a PAC link monitored?',
    a: 'Monitoring is built in. Internal pressure, gas density and localised temperature are measured in real time across the sealed compartments, which allows early detection of any change in operating condition and lets maintenance be planned around measured data rather than fixed intervals.',
  },
  {
    q: 'Where can PAC be used?',
    a: 'Transmission networks and grid-expansion corridors, connections into and between high-voltage substations, hydropower evacuation, high-current industrial feeds, and routes through built-up or confined areas — tunnels, service corridors and utility bridges — where overhead lines are not an option.',
  },
  {
    q: 'How does PAC compare with conventional XLPE cable?',
    a: 'For an equivalent current it offers higher capacity and 2×–10× lower losses, integrated condition monitoring, an SF6- and PFAS-free insulating medium, passive cooling and low external magnetic field from the metallic enclosure, with modular piping that can follow tunnels and corridors instead of continuous trenching.',
  },
]
