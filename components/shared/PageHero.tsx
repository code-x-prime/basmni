'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { media } from '@/content/site'
import type { PageHeroContent } from '@/content/pages'
import { eyebrowDark } from './ui'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

/**
 * Editorial split hero for inner pages: a real engineering photograph on the
 * left (~46%) and the breadcrumb / eyebrow / heading / description on the right
 * (~54%). Not full-screen — ~560px mobile, 600px desktop. On mobile the layout
 * stacks image-first, then content. The image animates in on load; the text
 * reveals in a short stagger.
 */
export function PageHero({
  eyebrow,
  titleLines,
  description,
  image,
  imageAlt,
  imagePosition = 'center',
  breadcrumb,
}: PageHeroContent) {
  const reduce = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden bg-[#071f2b] text-white">
      <div className="grid grid-cols-1 lg:min-h-[600px] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        {/* Image */}
        <motion.div
          className="relative min-h-[248px] sm:min-h-[300px] lg:min-h-0"
          initial={{ opacity: 0, scale: reduce ? 1 : 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={media[image]}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
          {/* Legibility for the header logo on mobile; blend into navy at the
              content edge on desktop. */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,31,43,0.62)_0%,rgba(7,31,43,0.12)_42%,rgba(7,31,43,0)_72%)] lg:bg-[linear-gradient(90deg,rgba(7,31,43,0.42)_0%,rgba(7,31,43,0)_40%,rgba(7,31,43,0)_80%,#071f2b_100%),linear-gradient(180deg,rgba(7,31,43,0.42)_0%,rgba(7,31,43,0)_24%)]" />
        </motion.div>

        {/* Content */}
        <div className="relative flex items-center">
          <motion.div
            className="w-full px-5 pb-14 pt-12 sm:px-8 sm:pb-16 lg:px-[clamp(2.5rem,4.5vw,4.75rem)] lg:py-24"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
          >
            <motion.nav
              aria-label="Breadcrumb"
              variants={fadeUp}
              className="mb-4 flex flex-wrap items-center gap-2 text-[0.62rem] uppercase tracking-[0.14em] text-ice/70"
            >
              {breadcrumb.map((crumb, i) => {
                const last = i === breadcrumb.length - 1
                return (
                  <Fragment key={crumb.href}>
                    {last ? (
                      <span aria-current="page" className="text-ice">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link href={crumb.href} className="transition-colors hover:text-ice">
                        {crumb.label}
                      </Link>
                    )}
                    {!last && <span className="opacity-50">/</span>}
                  </Fragment>
                )
              })}
            </motion.nav>

            <motion.p variants={fadeUp} className={eyebrowDark}>
              {eyebrow}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-3 max-w-[17ch] text-[clamp(2rem,4.6vw,3.5rem)] uppercase leading-[1.05] tracking-tightest [overflow-wrap:anywhere]"
            >
              {titleLines.map((line, i) => (
                <Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </motion.h1>

            {description && (
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-[48ch] leading-[1.65] text-[#d6e3e6]"
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
