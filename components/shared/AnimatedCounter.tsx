'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/**
 * Counts a leading integer up from zero when scrolled into view, preserving any
 * prefix/suffix (e.g. "100m", "50+"). Values with no leading number
 * (e.g. "PAN INDIA") render statically.
 */
export function AnimatedCounter({
  value,
  className = '',
  duration = 1400,
}: {
  value: string
  className?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduce = useReducedMotion()

  const match = value.match(/^(\D*)(\d[\d,]*)(.*)$/)
  const prefix = match?.[1] ?? ''
  const target = match ? Number(match[2].replace(/,/g, '')) : null
  const suffix = match?.[3] ?? ''

  const [display, setDisplay] = useState(target === null || reduce ? value : `${prefix}0${suffix}`)

  useEffect(() => {
    if (!inView || target === null || reduce) {
      if (reduce && target !== null) setDisplay(value)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(`${prefix}${Math.round(eased * target)}${suffix}`)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, prefix, suffix, duration, reduce, value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
