/**
 * Shared design-system class strings used across the homepage and inner pages.
 * Extracted verbatim from the original homepage component so every page renders
 * with the exact same typography, spacing and button treatment.
 */

export const sectionPad = 'px-5 py-9 sm:px-[7vw] sm:py-[clamp(2.25rem,3.5vw,3.5rem)]'

export const eyebrow = 'text-[0.84rem] font-bold uppercase tracking-[0.14em] text-blue'
export const eyebrowDark = 'text-[0.84rem] font-bold uppercase tracking-[0.14em] text-white'

export const sectionLabel = 'text-[0.84rem] font-bold uppercase tracking-[0.14em]'

export const displayHeading =
  'flex-1 text-[clamp(1.7rem,4.5vw,4.4rem)] uppercase tracking-tightest [overflow-wrap:anywhere]'

export const button =
  'group inline-flex min-h-12 items-center justify-center gap-[0.55rem] border border-transparent px-4 py-3 text-[0.67rem] font-bold uppercase tracking-[0.1em] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_-8px_rgba(10,30,41,0.5)] [&_svg]:w-4 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-1'

export const buttonLight = `${button} bg-white text-navy`
export const buttonGhost = `${button} border-white/50 text-white`
export const buttonDark = `${button} bg-navy text-white`
export const buttonOutline = `${button} border-navy/40 text-navy`

export const textLink =
  'inline-flex items-center gap-1.5 border-b border-blue pb-1.5 text-[0.8rem] font-bold uppercase tracking-[0.09em] text-blue [&_svg]:w-4'

/** Homepage hero / CTA overlay gradient. */
export const overlayGradient =
  'bg-[linear-gradient(90deg,#0b3a70f5,#0b3a7090_48%,#0b3a7020),linear-gradient(0deg,#0b3a70cc,transparent_60%)]'
