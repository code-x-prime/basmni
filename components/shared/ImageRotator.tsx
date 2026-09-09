'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

type Slide = { src: string; alt: string }

/**
 * Fixed-frame image that crossfades between slides on a timer, with a slow
 * Ken-Burns drift on the active frame. Under prefers-reduced-motion it holds a
 * single static image. `className` sets the frame's size (aspect ratio etc).
 */
export function ImageRotator({
  slides,
  interval = 4200,
  sizes = '(max-width: 768px) 100vw, 50vw',
  className = '',
  caption,
}: {
  slides: Slide[]
  interval?: number
  sizes?: string
  className?: string
  caption?: string
}) {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduce || slides.length < 2) return
    const id = setInterval(() => setI((n) => (n + 1) % slides.length), interval)
    return () => clearInterval(id)
  }, [reduce, slides.length, interval])

  const active = slides[i]

  return (
    <div className={`group relative overflow-hidden bg-white ${className}`}>
      {reduce ? (
        <Image src={active.src} alt={active.alt} fill sizes={sizes} className="object-cover" />
      ) : (
        <AnimatePresence initial={false}>
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.1, ease: 'easeInOut' },
              scale: { duration: interval / 1000 + 1.1, ease: 'linear' },
            }}
          >
            <Image src={active.src} alt={active.alt} fill sizes={sizes} className="object-cover" />
          </motion.div>
        </AnimatePresence>
      )}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,#0b3a70cc,transparent_52%)]" />

      <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 sm:inset-x-5 sm:bottom-5">
        {caption && (
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-navy/90">
            {caption}
          </span>
        )}
        {slides.length > 1 && (
          <span className="flex shrink-0 gap-1.5">
            {slides.map((_, n) => (
              <span
                key={n}
                className={`h-1 w-4 transition-colors duration-500 ${
                  n === i ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </span>
        )}
      </div>
    </div>
  )
}
