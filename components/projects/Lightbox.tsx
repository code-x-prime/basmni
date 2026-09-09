'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Portal } from '@/components/shared/Portal'

export type LightboxItem = { src: string; title: string; caption?: string }

/**
 * Full-screen image viewer. Column layout (top bar + flexible image stage) so it
 * always fits the viewport with no horizontal overflow; nav arrows are overlaid
 * on the stage rather than sitting in the flow. Escape / arrow-key control and
 * body scroll lock. Fade + scale on enter; respects prefers-reduced-motion.
 */
export function Lightbox({
  items,
  index,
  close,
  setIndex,
}: {
  items: LightboxItem[]
  index: number
  close: () => void
  setIndex: (n: number) => void
}) {
  const item = items[index]
  const reduce = useReducedMotion()
  const many = items.length > 1
  const go = (d: number) => setIndex((index + d + items.length) % items.length)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (many && e.key === 'ArrowRight') go(1)
      if (many && e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', key)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', key)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [close, index, items.length])

  const stop = (e: React.MouseEvent) => e.stopPropagation()

  return (
    <Portal>
      <motion.div
        className="bg-white/92 fixed inset-0 z-[70] flex flex-col overflow-x-hidden backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        onClick={close}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between gap-4 px-4 py-3 text-navy sm:px-6"
          onClick={stop}
        >
          <div className="min-w-0">
            <p className="truncate text-[0.8rem] font-bold uppercase tracking-[0.08em]">
              {item.title}
            </p>
            {item.caption && (
              <p className="truncate text-[0.66rem] uppercase tracking-[0.1em] text-blue/70">
                {item.caption}
              </p>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-3">
            {many && (
              <span className="text-[0.66rem] tabular-nums tracking-[0.1em] text-blue/70">
                {index + 1} / {items.length}
              </span>
            )}
            <button
              onClick={close}
              aria-label="Close"
              className="grid h-9 w-9 place-items-center bg-white text-navy transition-transform hover:-translate-y-0.5"
            >
              <X className="w-4" />
            </button>
          </div>
        </div>

        {/* Image stage */}
        <div
          className="relative flex min-h-0 flex-1 items-center justify-center p-2 pb-4 sm:p-4"
          onClick={stop}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              className="relative h-full w-full max-w-[1100px]"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {many && (
            <>
              <button
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="absolute left-1 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center bg-white/95 text-navy transition-colors hover:bg-white sm:left-4 sm:h-12 sm:w-12"
              >
                <ChevronLeft className="w-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next image"
                className="absolute right-1 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center bg-white/95 text-navy transition-colors hover:bg-white sm:right-4 sm:h-12 sm:w-12"
              >
                <ChevronRight className="w-5" />
              </button>
            </>
          )}
        </div>
      </motion.div>
    </Portal>
  )
}
