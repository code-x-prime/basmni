'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { site } from '@/content/site'
import { navigation } from '@/content/navigation'

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
    <header className="fixed inset-x-0 top-0 z-30 flex flex-col border-b border-navy/10 bg-white/85 text-navy shadow-[0_4px_24px_-10px_rgba(10,50,100,0.28)] [backdrop-filter:blur(24px)_saturate(160%)] supports-[backdrop-filter]:bg-white/75">
      {/* Main row */}
      <div className="flex h-[76px] items-center justify-between gap-5 pl-0 pr-4 sm:h-[104px] sm:gap-8 sm:pr-[clamp(1rem,3vw,2.5rem)]">
        <Link
          href="/"
          className="shrink-0 [&_img]:object-contain [&_img]:object-left"
          onClick={() => setOpen(false)}
        >
          <Image
            src={site.logoDark}
            alt={site.company}
            width={948}
            height={299}
            priority
            className="h-auto w-[196px] sm:w-[330px] lg:w-[400px]"
          />
        </Link>

        <button
          className="border-0 bg-transparent text-navy md:hidden [&_svg]:w-6"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-[clamp(0.7rem,1.5vw,1.75rem)] whitespace-nowrap text-[0.9rem] font-semibold uppercase tracking-[0.09em] md:flex">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href)
            const labelCls = `group relative whitespace-nowrap py-1 transition-colors duration-200 ${
              active ? 'text-blue' : 'text-navy hover:text-blue'
            }`
            const indicator = active ? (
              <motion.span
                layoutId="nav-indicator"
                className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full bg-blue"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            ) : (
              <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-0 bg-blue/70 transition-[width] duration-300 group-hover:w-full" />
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
                  <ul className="flex flex-col border border-navy/10 bg-white/95 p-1.5 shadow-[0_24px_48px_-16px_rgba(10,50,100,0.25)] backdrop-blur-lg">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className={`block whitespace-nowrap px-4 py-2.5 text-[0.82rem] font-semibold uppercase tracking-[0.09em] transition-colors hover:bg-navy/5 hover:text-blue ${
                            pathname === c.href ? 'text-blue' : 'text-navy/75'
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
          <div className="ml-1 hidden flex-col items-end gap-1.5 border-l border-navy/15 pl-[clamp(0.75rem,1.8vw,1.75rem)] normal-case tracking-normal lg:flex">
            <a
              href={telHref}
              className="flex items-center gap-2 text-[0.92rem] font-medium text-navy/85 transition-colors hover:text-blue"
            >
              <Phone className="w-4 shrink-0" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-[0.92rem] font-medium text-navy/85 transition-colors hover:text-blue"
            >
              <Mail className="w-4 shrink-0" />
              {site.email}
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            className="fixed inset-x-0 bottom-0 top-[76px] bg-navy/30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          >
            <motion.nav
              className="absolute inset-x-4 top-0 flex flex-col items-stretch gap-4 border border-navy/10 bg-white p-6 text-navy shadow-[0_24px_48px_-16px_rgba(10,50,100,0.25)]"
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
                  active ? 'text-blue opacity-100' : 'text-navy opacity-80'
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
                      <div className="mb-1 ml-3 flex flex-col border-l border-navy/15 pl-3">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className={`py-1.5 text-[0.72rem] uppercase tracking-[0.08em] ${
                              pathname === c.href ? 'text-blue' : 'text-navy/70'
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
              <motion.div
                variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
                className="mt-1 flex flex-col gap-2 border-t border-navy/15 pt-4"
              >
                <a
                  href={telHref}
                  className="flex items-center gap-2 text-[0.9rem] text-navy/80 transition-colors hover:text-blue"
                >
                  <Phone className="w-4 shrink-0" />
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 text-[0.9rem] text-navy/80 transition-colors hover:text-blue"
                >
                  <Mail className="w-4 shrink-0" />
                  {site.email}
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
