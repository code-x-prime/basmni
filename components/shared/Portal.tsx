'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { ReactNode } from 'react'

/**
 * Renders children into <body>, escaping any ancestor that would otherwise trap
 * a `position: fixed` overlay — a transform/filter/will-change on a parent
 * (framer-motion reveal wrappers set these) creates a containing block, which
 * makes a fixed modal position relative to that parent instead of the viewport.
 * Portalling to <body> guarantees the overlay is measured against the viewport.
 */
export function Portal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])
  if (!mounted) return null
  return createPortal(children, document.body)
}
