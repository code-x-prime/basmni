'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Accordion FAQ. Multiple panels may be open. Smooth height + opacity on toggle.
 */
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<Record<number, boolean>>({})

  return (
    <div className="border-t border-border">
      {items.map((item, i) => {
        const isOpen = !!open[i]
        return (
          <div key={item.q} className="border-b border-border">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen((p) => ({ ...p, [i]: !p[i] }))}
              className="group flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="text-[clamp(1rem,2vw,1.3rem)] leading-[1.3] tracking-tightest">
                {item.q}
              </span>
              <Plus
                className={`w-5 shrink-0 text-blue transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[68ch] pb-6 leading-[1.7] text-muted">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
