'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'left' | 'right' | 'scale'

const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 24 },
  left: { x: 28 },
  right: { x: -28 },
  scale: { scale: 0.96 },
}

/**
 * Fade + subtle transform on scroll into view. Movement stays small (≤28px) so
 * it never causes layout shift or horizontal overflow. Respects
 * `prefers-reduced-motion` (fades only, no transform).
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
}) {
  const reduce = useReducedMotion()
  const from = reduce ? {} : offsets[direction]
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** Parent that staggers its `RevealItem` children as they enter the viewport. */
export function RevealStagger({
  children,
  className = '',
  stagger = 0.08,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className = '',
  direction = 'up',
}: {
  children: ReactNode
  className?: string
  direction?: Direction
}) {
  const reduce = useReducedMotion()
  const from = reduce ? {} : offsets[direction]
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...from },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
