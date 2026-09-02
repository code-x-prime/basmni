'use client'

import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Wraps a button/link so it scales up slightly on hover, compresses on tap, and
 * nudges a few px toward the cursor (capped, so it stays subtle — not a full
 * magnetic-drag effect). Used sparingly: header CTA and hero primary button.
 */
export function MagneticButton({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const reduce = useReducedMotion()

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    const max = 6
    setOffset({
      x: Math.max(-max, Math.min(max, x * 0.25)),
      y: Math.max(-max, Math.min(max, y * 0.25)),
    })
  }

  const onMouseLeave = () => setOffset({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      className={`inline-block max-sm:w-full ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      whileHover={reduce ? undefined : { scale: 1.02 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
