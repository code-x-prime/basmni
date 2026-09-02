'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { site } from '@/content/site'
import { navigation, navigationCta } from '@/content/navigation'
import { MagneticButton } from '@/components/motion/MagneticButton'

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const reduce = useReducedMotion()

  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.85])
  const blurPx = useTransform(scrollY, [0, 80], [0, 12])
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.15])
  const backgroundColor = useTransform(bgOpacity, (v) => `rgba(10,30,41,${v})`)
  const backdropFilter = useTransform(blurPx, (v) => `blur(${v}px)`)
  const borderBottomColor = useTransform(borderOpacity, (v) => `rgba(255,255,255,${v})`)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-30 flex h-[68px] items-center justify-between px-4 text-white sm:h-[78px] sm:px-[clamp(1rem,5vw,4.5rem)] ${
        open ? 'bg-graphite/85 backdrop-blur-lg' : ''
      }`}
      style={
        reduce || open
          ? undefined
          : { backgroundColor, backdropFilter, borderBottomWidth: 1, borderBottomColor }
      }
    >
      <Link
        href="/"
        className="[&_img]:object-contain [&_img]:object-left [&_img]:drop-shadow-[0_2px_5px_rgba(0,0,0,0.45)]"
        onClick={() => setOpen(false)}
      >
        <Image
          src={site.logoLight}
          alt={site.company}
          width={170}
          height={66}
          priority
          className="h-auto w-[140px] sm:w-[170px]"
        />
      </Link>

      <button
        className="border-0 bg-transparent text-white md:hidden [&_svg]:w-6"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-[clamp(1rem,2.5vw,2rem)] text-[0.68rem] uppercase tracking-[0.11em] md:flex">
        {navigation.map((item) => {
          const active = isActive(pathname, item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={`group relative py-1 transition-colors duration-200 ${
                active ? 'text-ice' : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
              {active ? (
                <motion.span
                  layoutId="nav-indicator"
                  className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full bg-ice"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              ) : (
                <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-0 bg-ice/70 transition-[width] duration-300 group-hover:w-full" />
              )}
            </Link>
          )
        })}
        <MagneticButton>
          <Link
            className="flex items-center gap-1.5 border border-white/50 px-3.5 py-3 [&_svg]:w-4 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-1"
            href={navigationCta.href}
          >
            {navigationCta.label}
            <ArrowUpRight />
          </Link>
        </MagneticButton>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            className="fixed inset-x-0 bottom-0 top-[68px] bg-graphite/60 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          >
            <motion.nav
              className="absolute inset-x-4 top-0 flex flex-col items-stretch gap-4 bg-navy p-6 text-white"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: -16, transition: { duration: 0.2 } },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.25, ease: 'easeOut', staggerChildren: 0.05 },
                },
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {navigation.map((item) => {
                const active = isActive(pathname, item.href)
                return (
                  <motion.div
                    key={item.href}
                    variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`block py-1.5 text-[0.9rem] uppercase tracking-[0.08em] ${
                        active ? 'text-ice opacity-100' : 'opacity-80'
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}>
                <Link
                  className="flex items-center justify-center gap-1.5 border border-white/50 px-3.5 py-3 text-[0.75rem] uppercase tracking-[0.1em] [&_svg]:w-4"
                  href={navigationCta.href}
                  onClick={() => setOpen(false)}
                >
                  {navigationCta.label}
                  <ArrowUpRight />
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
