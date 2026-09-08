'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Mail, Menu, Phone, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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

  const telHref = `tel:${site.phone.replace(/\s+/g, '')}`

  return (
    <header className="fixed inset-x-0 top-0 z-30 flex flex-col border-b border-white/10 bg-graphite text-white shadow-[0_2px_24px_-12px_rgba(0,0,0,0.6)]">
      {/* Utility bar — phone / email, desktop only */}
      <div className="hidden h-9 items-center justify-end gap-6 border-b border-white/10 bg-black/10 px-[clamp(1rem,5vw,4.5rem)] text-[1rem] tracking-[0.02em] lg:flex">
        <a
          href={telHref}
          className="flex items-center gap-1.5 text-white/75 transition-colors hover:text-ice"
        >
          <Phone className="w-3.5" />
          {site.phone}
        </a>
        <span className="h-3 w-px bg-white/15" aria-hidden />
        <a
          href={`mailto:${site.email}`}
          className="flex items-center gap-1.5 text-white/75 transition-colors hover:text-ice"
        >
          <Mail className="w-3.5" />
          {site.email}
        </a>
      </div>

      {/* Main row */}
      <div className="flex h-[68px] items-center justify-between gap-6 px-4 sm:h-[132px] sm:px-[clamp(1.5rem,5vw,4.5rem)]">
        <Link
          href="/"
          className="shrink-0 [&_img]:object-contain [&_img]:object-left [&_img]:drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]"
          onClick={() => setOpen(false)}
        >
          <Image
            src={site.logoLight}
            alt={site.company}
            width={948}
            height={299}
            priority
            className="h-auto w-[150px] sm:w-[360px]"
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
        <nav className="hidden items-center gap-[clamp(0.7rem,1.5vw,1.6rem)] whitespace-nowrap text-[0.82rem] font-semibold uppercase tracking-[0.1em] [text-shadow:0_1px_4px_rgba(0,0,0,0.5)] md:flex">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href)
            const labelCls = `group relative whitespace-nowrap py-1 transition-colors duration-200 ${
              active ? 'text-ice' : 'text-white hover:text-ice'
            }`
            const indicator = active ? (
              <motion.span
                layoutId="nav-indicator"
                className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full bg-ice"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            ) : (
              <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-0 bg-ice/70 transition-[width] duration-300 group-hover:w-full" />
            )

            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={labelCls}
                >
                  {item.label}
                  {indicator}
                </Link>
              )
            }

            return (
              <div key={item.href} className="group/nav relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className={`${labelCls} cursor-default uppercase tracking-[0.11em]`}
                >
                  {item.label}
                  {indicator}
                </button>
                <div className="invisible absolute left-0 top-full z-10 w-max min-w-[240px] max-w-[320px] translate-y-1 pt-4 opacity-0 transition-[opacity,transform] duration-200 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
                  <ul className="flex flex-col border border-white/15 bg-graphite/95 p-1.5 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.7)] backdrop-blur-lg">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className={`block whitespace-nowrap px-4 py-2.5 text-[0.82rem] font-semibold uppercase tracking-[0.09em] transition-colors hover:bg-white/5 hover:text-ice ${
                            pathname === c.href ? 'text-ice' : 'text-white/75'
                          }`}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
          <MagneticButton>
            <Link
              className="flex items-center gap-1.5 whitespace-nowrap border border-white/50 px-4 py-3 [&_svg]:w-4 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-1"
              href={navigationCta.href}
            >
              {navigationCta.label}
              <ArrowUpRight />
            </Link>
          </MagneticButton>
        </nav>
      </div>

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
                const mobileLabelCls = `block py-1.5 text-[1rem] uppercase tracking-[0.08em] ${
                  active ? 'text-ice opacity-100' : 'opacity-80'
                }`
                return (
                  <motion.div
                    key={item.href}
                    variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                  >
                    {item.children ? (
                      <span className={mobileLabelCls}>{item.label}</span>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        className={mobileLabelCls}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.children && (
                      <div className="mb-1 ml-3 flex flex-col border-l border-white/15 pl-3">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className={`py-1.5 text-[0.72rem] uppercase tracking-[0.08em] ${
                              pathname === c.href ? 'text-ice' : 'opacity-70'
                            }`}
                            onClick={() => setOpen(false)}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
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
    </header>
  )
}
