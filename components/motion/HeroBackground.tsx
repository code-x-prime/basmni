'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

/**
 * Cross-fading hero background slideshow. Cycles through `images` on an interval,
 * each frame gently scaling as it shows (Ken Burns). Falls back to a single
 * static image under prefers-reduced-motion.
 */
export function HeroBackground({
  images,
  interval = 5000,
}: {
  images: { src: string; alt: string }[]
  interval?: number
}) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduce || images.length < 2) return
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval)
    return () => clearInterval(id)
  }, [reduce, images.length, interval])

  if (reduce) {
    return (
      <div className="absolute inset-0">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: 'easeInOut' },
            scale: { duration: interval / 1000 + 1.2, ease: 'linear' },
          }}
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
