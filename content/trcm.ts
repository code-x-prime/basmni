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
  'Submerged debris, timber, vegetation and trash build up against intake grates and throttle the flow to turbines and gates. Left unmanaged, the head loss cuts generation and the mechanical load can jam gates or damage racks.',
  'Basmni designs, manufactures, installs and commissions automated trash rack cleaning machines — hydraulic, wire-rope and fine-screen types — matched to the intake depth, debris volume and structure on each site.',
]

export const trcmHeadlineMetrics = [
  { value: '3', label: 'Machine types' },
  { value: 'Up to ~20m', label: 'Hydraulic reach' },
  { value: '24/7', label: 'Automated cleaning' },
]

export const trcmHowItWorks: TrcmStep[] = [
  {
    number: '01',
    title: 'Detect the load',
    text: 'The machine tracks differential head across the rack, or runs on a set cleaning cycle, so debris is cleared before head loss reaches the turbines.',
  },
  {
    number: '02',
    title: 'Rake the screen',
    text: 'A rake is driven down the face of the trash rack — by rigid hydraulic cylinders or a wire-rope hoist — combing debris off the bars from bottom to top.',
  },
  {
    number: '03',
    title: 'Discharge the debris',
    text: 'The raked material is lifted clear of the water and dropped into a skip, conveyor or spillway channel for removal from site.',
  },
]

export const trcmFeatures: TrcmFeature[] = [
  {
    number: '01',
    title: 'Automated operation',
    text: 'Continuous or head-triggered cleaning keeps the intake clear without a permanent manual crew on the deck.',
  },
  {
    number: '02',
    title: 'Configured to the intake',
    text: 'Hydraulic, wire-rope or fine-screen mechanisms are selected for the depth, channel geometry and debris on site.',
  },
  {
    number: '03',
    title: 'Positive raking force',
    text: 'Hydraulic cylinders drive the rake into highly compacted debris mats that a gravity rake cannot penetrate.',
  },
  {
    number: '04',
    title: 'Deep-water reach',
    text: 'Wire-rope machines lower the rake far below the deck for deep intakes and steep channels at large hydropower plants.',
  },
  {
    number: '05',
    title: 'Fine screening',
    text: 'Tightly spaced teeth remove leaves, plastics and aquatic weeds that slip through coarse racks and reach sensitive equipment.',
  },
  {
    number: '06',
    title: 'Upstream protection',
    text: 'Floating log booms intercept heavy timber and ice before it reaches the rack, cutting the load on everything downstream.',
  },
]

export const trcmConfigurations: TrcmConfig[] = [
  {
    title: 'Hydraulic type',
    text: 'Best for heavy debris, logs and thick trash mats at shallow to medium depths (up to ~20 m). Rigid hydraulic cylinders give positive downward raking force so the rake pierces and combs highly compacted debris.',
    image: 'trcm',
  },
  {
    title: 'Wire rope type',
    text: 'Best for deep-water intakes, steep channels and large hydropower plants. The rake is lowered on a wire rope and hoisting mechanism — highly cost-effective and adaptable where hydraulic arms cannot reach.',
    image: 'spillway',
  },
  {
    title: 'Fine screen cleaners',
    text: 'Best for secondary screening, sensitive pumping stations and delicate turbine protection. Tightly spaced teeth remove small debris — leaves, plastic waste and aquatic weeds — that slips through coarse racks.',
    image: 'trashRack',
  },
  {
    title: 'Log boom barriers',
    text: 'A floating first line of defence: impact-resistant buoyancy modules on steel tension cables that rise and fall with the water level, intercepting logs, uprooted trees and seasonal ice floes.',
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
    q: 'How do I choose between the hydraulic and wire-rope type?',
    a: 'The hydraulic type suits heavy debris and compacted mats at shallow to medium depths (up to about 20 m), where positive downward force is needed. The wire-rope type suits deep-water intakes and steep channels at large plants, where the rake has to be lowered well below the deck.',
  },
  {
    q: 'What do fine screen cleaners add?',
    a: 'They provide secondary screening downstream of the coarse rack, using tightly spaced teeth to catch leaves, plastics and aquatic weeds that would otherwise pass through and reach sensitive pumping stations and turbines.',
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
