'use client'

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

/**
 * Very subtle top-of-page scroll progress bar. 2px, Basmni blue, spring-smoothed.
 * Inert (not rendered moving) under prefers-reduced-motion.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 280, damping: 30, restDelta: 0.001 })
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-40 h-[2px] origin-left bg-blue"
      style={{ scaleX: reduce ? scrollYProgress : scaleX }}
    />
  )
}
