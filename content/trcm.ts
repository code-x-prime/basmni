import type { MediaKey } from './site'

/**
 * Deep content for the Trash Rack Cleaning Machines dedicated page.
 * Grounded in the existing Basmni source in `content/services.ts` (the `trcm`
 * service `description` and `groups`) and the log-boom / debris material.
 * No specifications are invented.
 */

export type TrcmStep = { number: string; title: string; text: string }
export type TrcmFeature = { number: string; title: string; text: string }
export type TrcmConfig = { title: string; text: string; image: MediaKey }
export type TrcmApplication = { title: string; text: string; image: MediaKey }

export const trcmHomeIntro: string[] = [
  'A trash rack cleaning machine keeps the debris load off the intake screen so the plant runs at design head. Logs, branches, leaves, aquatic weed and plastics collect on the bars, build a differential water level across the rack, and starve the turbines or pumps downstream — a head loss of a few centimetres is lost megawatts.',
  'Basmni designs, manufactures, installs and commissions automated TRCMs — hydraulic arm, wire-rope, chain-rake and traversing-gantry types — matched to the intake depth, channel width, debris profile and structure on each site, with PLC or SCADA control for manual, semi-automatic and fully automatic cleaning cycles.',
]

export const trcmHeadlineMetrics = [
  { value: '4', label: 'Machine types' },
  { value: 'Up to ~20m', label: 'Hydraulic-arm reach' },
  { value: '>20m', label: 'Wire-rope depth' },
  { value: '24/7', label: 'Automated cleaning' },
]

/** The five sub-assemblies of a trash rack cleaning machine. */
export const trcmComponents: { title: string; text: string }[] = [
  {
    title: 'Grab / rake bucket',
    text: 'The primary clearing tool. Tines or blades interlock with the trash-rack bars and comb debris off the screen from the bottom up.',
  },
  {
    title: 'Hoisting & raking mechanism',
    text: 'Hydraulic cylinders or a wire-rope winch that lowers, opens, closes and lifts the grab along the face of the rack.',
  },
  {
    title: 'Travelling carriage / gantry',
    text: 'A rail-mounted frame that moves the machine laterally so one unit serves every bay across a wide intake.',
  },
  {
    title: 'Debris disposal system',
    text: 'Hoppers, conveyor belts or collection bins that carry the raked material clear of the water and out to a truck or skip.',
  },
  {
    title: 'Control system (PLC / SCADA)',
    text: 'Runs manual, semi-automatic or fully automatic cleaning cycles, typically triggered by a differential water-level sensor or a timer.',
  },
]

/** ROI comparison — operating a plant with and without an automated TRCM. */
export const trcmRoi: { benefit: string; without: string; with: string }[] = [
  {
    benefit: 'Plant capacity',
    without: 'Reduced by head loss across a blocked rack',
    with: 'Runs at design hydraulic efficiency',
  },
  {
    benefit: 'Maintenance cost',
    without: 'High — repeated turbine and pump repairs from debris strikes',
    with: 'Minimal — routine machine servicing',
  },
  {
    benefit: 'Labour risk',
    without: 'Manual raking, crane-slinging and diving in live intake currents',
    with: 'Unmanned, automated cleaning cycles',
  },
  {
    benefit: 'Flood readiness',
    without: 'Intake chokes as debris inflow spikes; risk of shutdown',
    with: 'Continuous real-time extraction through the flood peak',
  },
]

export const trcmHowItWorks: TrcmStep[] = [
  {
    number: '01',
    title: 'Detect the load',
    text: 'A differential water-level sensor watches the head across the rack, or the machine runs a timed cycle, so a cleaning pass starts before the blockage costs generation.',
  },
  {
    number: '02',
    title: 'Rake the screen',
    text: 'The grab is driven down the face of the trash rack — by rigid hydraulic arms or a wire-rope hoist — and combs debris off the bars from the bottom up with positive force.',
  },
  {
    number: '03',
    title: 'Discharge the debris',
    text: 'The raked material is lifted clear of the water and released into a hopper, conveyor or skip, then carried off site — no manual handling in the intake current.',
  },
]

export const trcmFeatures: TrcmFeature[] = [
  {
    number: '01',
    title: 'Maintains operating head',
    text: 'Continuous or head-triggered cleaning holds the differential across the rack near zero, so the plant keeps its design flow and full generation or pumping yield year-round.',
  },
  {
    number: '02',
    title: 'Protects downstream equipment',
    text: 'Clearing the load before it chokes penstocks and intake channels keeps logs, timber and boulders off runner blades, impellers and seals — and prevents cavitation and vibration.',
  },
  {
    number: '03',
    title: 'Relieves structural load',
    text: 'A heavily clogged rack carries immense hydrostatic pressure that bends bars or collapses the screen. Regular raking keeps that differential pressure down.',
  },
  {
    number: '04',
    title: 'Removes the manual hazard',
    text: 'Automating trash removal ends the safety risk of hand raking, crane-slinging and sending divers into turbulent intake currents.',
  },
  {
    number: '05',
    title: 'Unmanned automated cycles',
    text: 'Semi-automatic and fully automatic machines run on level-differential sensors or timers, cutting the on-site crew to routine servicing.',
  },
  {
    number: '06',
    title: 'Flood-season capacity',
    text: 'Debris inflow rises sharply through the monsoon. The machine handles the peak continuously, with no extra labour shifts, and log booms hold heavy timber and ice off the rack.',
  },
]

export const trcmConfigurations: TrcmConfig[] = [
  {
    title: 'Hydraulic jib / arm type',
    text: 'For shallow-to-medium intake depths (up to about 15–20 m). Rigid single, double or telescopic hydraulic arms exert positive raking force into a deep, compacted debris layer that a gravity rake cannot penetrate.',
    image: 'trcm',
  },
  {
    title: 'Rope / wire-cable operated',
    text: 'For deep intake channels beyond 20 m. Wire-rope hoists lower heavy grab buckets or multi-blade grapples under gravity — cost-effective and adaptable where a rigid arm cannot reach.',
    image: 'spillway',
  },
  {
    title: 'Chain-driven continuous rake',
    text: 'For shallow channels, pump houses and high volumes of fine debris. Continuous rotating chains pull a series of rake blades along the screen panel for uninterrupted cleaning.',
    image: 'trashRack',
  },
  {
    title: 'Traversing / mobile gantry',
    text: 'For multi-bay dam intakes and wide barrages. A self-propelled carriage on rail tracks above the deck moves along the structure so one machine services every bay.',
    image: 'trcmDamIntakeMachine',
  },
  {
    title: 'Log boom barriers',
    text: 'A floating first line of defence: impact-resistant buoyancy modules on steel tension cables that rise and fall with the water level, intercepting logs, uprooted trees and seasonal ice floes before they reach the rack.',
    image: 'logBoom',
  },
]

export const trcmApplications: TrcmApplication[] = [
  {
    title: 'Dams & hydropower plants',
    text: 'Protecting penstocks, turbines and intake gates from timber and submerged debris that would otherwise cause mechanical failures.',
    image: 'trcm',
  },
  {
    title: 'Barrages & river weirs',
    text: 'Managing seasonal debris, agricultural runoff and urban trash during floods to hold water-level control and prevent gate jamming.',
    image: 'civil',
  },
  {
    title: 'Canal-based projects',
    text: 'Fine-screen cleaners and wire-rope machines remove aquatic weeds, algae and plastics for continuous agricultural or industrial supply.',
    image: 'debrisPanorama',
  },
  {
    title: 'Pumping & cooling-water intakes',
    text: 'Fine screening ahead of sensitive pumps and cooling-water systems where small debris would foul or damage equipment.',
    image: 'trashRack',
  },
  {
    title: 'Reservoir surfaces',
    text: 'Log booms across the reservoir keep floating timber and ice away from the intake approach in the first place.',
    image: 'logBoom',
  },
]

export const trcmProcess = {
  intro:
    'Basmni surveys the intake, engineers the machine to the rack and channel, builds it, then installs and commissions it on the structure as one accountable scope.',
  steps: ['Survey', 'Design', 'Manufacture', 'Install', 'Commission'],
  contexts: [
    'Existing intake structures',
    'Deep and steep channels',
    'Live-plant installation',
    'Seasonal debris peaks',
    'Retrofit onto old racks',
  ],
}

export const trcmFaq: { q: string; a: string }[] = [
  {
    q: 'What is a Trash Rack Cleaning Machine?',
    a: 'An automated machine that removes debris, vegetation and trash accumulating on intake grates so water flow to turbines and gates is not blocked. Basmni offers hydraulic-type, wire-rope-type and fine-screen configurations depending on intake depth and debris volume.',
  },
  {
    q: 'Where are TRCM systems used?',
    a: 'At dams and hydropower plants to protect penstocks and turbines, at barrages and river weirs to manage seasonal debris and prevent gate jamming, and on canal-based projects to remove aquatic weeds, algae and plastics from irrigation and cooling-water intakes.',
  },
  {
    q: 'Which machine type suits my intake?',
    a: 'The hydraulic jib/arm type suits heavy debris and compacted mats at shallow-to-medium depths (up to about 15–20 m). The wire-rope type suits deep channels beyond 20 m, where the grab is lowered well below the deck. A chain-driven continuous rake suits shallow channels and pump houses with high volumes of fine debris. A traversing gantry suits multi-bay dam intakes and wide barrages where one machine has to serve every bay.',
  },
  {
    q: 'What are the main parts of a TRCM?',
    a: 'A grab or rake bucket that interlocks with the rack bars; a hydraulic or wire-rope hoisting and raking mechanism; a travelling carriage or gantry on rails for lateral movement across bays; a debris disposal system of hoppers, conveyors or bins; and a PLC/SCADA control system that runs manual, semi-automatic or fully automatic cleaning cycles.',
  },
  {
    q: 'How does a TRCM pay for itself?',
    a: 'It keeps the plant at design hydraulic efficiency instead of losing capacity to head loss, cuts turbine and pump repair costs from debris strikes, removes the safety exposure of manual raking, and keeps the intake clear through flood season when debris inflow spikes — so there is no forced shutdown.',
  },
  {
    q: 'What are log boom barriers for?',
    a: 'They are a floating first line of defence that intercepts heavy debris — logs, uprooted trees and seasonal ice floes — before it reaches the intake, reducing wear on downstream trash racks and cleaning machines. They use impact-resistant buoyancy modules and steel tension cables that rise and fall with the water level.',
  },
  {
    q: 'Can a machine be retrofitted to an existing rack?',
    a: 'Yes. Basmni surveys the existing intake and channel and engineers the machine and its runway to the structure, so an automated cleaner can be added to a rack that is currently cleaned manually or with a mobile grab.',
  },
]

export const trcmCta = {
  title: 'Debris throttling your intake?',
  emphasis: "Let's engineer the cleaning machine.",
  description:
    'Tell us the intake depth, channel layout and the debris you face through the year. Basmni will advise on the right configuration and installation approach.',
}
