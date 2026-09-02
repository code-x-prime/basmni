/**
 * Named motion primitives, matching the vocabulary of the site's motion spec.
 * These re-export the existing, already-correct implementations in
 * `components/shared/*` rather than forking them — single source of truth.
 */
export {
  Reveal,
  RevealStagger as StaggerContainer,
  RevealItem as StaggerItem,
} from '../shared/Reveal'
export { AnimatedCounter } from '../shared/AnimatedCounter'
export { PageTransition } from '../shared/PageTransition'
export { ImageBlock as ImageReveal } from '../shared/ImageBlock'
export { MagneticButton } from './MagneticButton'
export { ScrollProgress } from './ScrollProgress'

export { FadeIn, SlideUp } from './FadeIn'
