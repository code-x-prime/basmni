import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/content/services'

/**
 * Numbered in-page index of every service. Each row links to the matching
 * `<section id>` further down the page (smooth scroll via `html`).
 */
export function ServiceNavigation() {
  return (
    <nav aria-label="Services" className="border-t border-border">
      {services.map((service) => (
        <Link
          key={service.id}
          href={`#${service.id}`}
          className="group grid grid-cols-[3ch_1fr_auto] items-center gap-4 border-b border-border py-5 transition-colors hover:border-blue sm:gap-6 sm:py-6"
        >
          <span className="text-[0.7rem] font-bold text-blue transition-transform duration-300 group-hover:translate-x-0.5">
            {service.number}
          </span>
          <span className="text-[clamp(1.15rem,2.4vw,2rem)] uppercase leading-[1.1] tracking-tightest transition-colors group-hover:text-blue">
            {service.shortTitle}
          </span>
          <ArrowUpRight className="w-5 -translate-x-1 text-muted opacity-40 transition-all duration-300 group-hover:translate-x-0 group-hover:text-blue group-hover:opacity-100" />
        </Link>
      ))}
    </nav>
  )
}
