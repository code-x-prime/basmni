'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

type Props = {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  /** Slow vertical drift as the frame scrolls through the viewport. */
  parallax?: boolean
  /** On first enter: image scales 1.06 → 1 while a cover panel wipes away. */
  reveal?: boolean
}

/**
 * Fixed-frame image with cover fit and a subtle hover zoom. The plain path
 * renders identically to the original homepage `ImageBlock`. `parallax` adds a
 * scroll-linked drift; `reveal` adds a one-time enter animation. Both respect
 * `prefers-reduced-motion`.
 */
export function ImageBlock(props: Props) {
  const reduce = useReducedMotion()
  const {
    src,
    alt,
    className = '',
    priority = false,
    sizes = '(max-width: 768px) 100vw, 50vw',
  } = props
  const parallax = props.parallax && !reduce
  const reveal = props.reveal && !reduce

  if (!parallax && !reveal) {
    return (
      <div
        className={`relative overflow-hidden bg-[#dbe6f2] [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-[600ms] hover:[&_img]:scale-[1.04] ${className}`}
      >
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} />
      </div>
    )
  }

  if (parallax) {
    return (
      <ParallaxImage src={src} alt={alt} className={className} priority={priority} sizes={sizes} />
    )
  }

  return <RevealImage src={src} alt={alt} className={className} priority={priority} sizes={sizes} />
}

function ParallaxImage({
  src,
  alt,
  className,
  priority,
  sizes,
}: Required<Omit<Props, 'parallax' | 'reveal'>>) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  return (
    <div ref={ref} className={`relative overflow-hidden bg-[#dbe6f2] ${className}`}>
      <motion.div className="absolute inset-0" style={{ y, scale: 1.15 }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
    </div>
  )
}

function RevealImage({
  src,
  alt,
  className,
  priority,
  sizes,
}: Required<Omit<Props, 'parallax' | 'reveal'>>) {
  return (
    <div
      className={`group relative overflow-hidden bg-[#dbe6f2] [&_img]:transition-transform [&_img]:duration-[700ms] hover:[&_img]:scale-[1.05] ${className}`}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-navy"
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
        style={{ originY: 1 }}
      />
    </div>
  )
}
