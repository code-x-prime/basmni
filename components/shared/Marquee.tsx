'use client'

import {
  Anchor,
  Factory,
  Gauge,
  Mountain,
  Ruler,
  Waves,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { homeMarquee } from '@/content/home'

const iconMap: Record<string, LucideIcon> = {
  Anchor,
  Factory,
  Gauge,
  Mountain,
  Ruler,
  Waves,
  Wrench,
  Zap,
}

/**
 * Edge-to-edge auto-scrolling highlight strip. The track holds the items twice
 * so the CSS translate loop is seamless; it pauses on hover and freezes for
 * `prefers-reduced-motion`. Fades out at both edges.
 */
export function Marquee() {
  const items = [...homeMarquee, ...homeMarquee]

  return (
    <section
      aria-label="Engineering highlights"
      className="relative overflow-hidden border-y border-[#1f4a80] bg-[#0b3a70] py-3.5 text-white [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
    >
      <div className="marquee-track flex w-max items-center gap-0 motion-reduce:animate-none">
        {items.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Gauge
          return (
            <div
              key={i}
              className="flex shrink-0 items-center gap-3 px-7"
              aria-hidden={i >= homeMarquee.length}
            >
              <Icon className="w-4 shrink-0 text-white" strokeWidth={2} />
              <span className="whitespace-nowrap text-[0.92rem] font-semibold uppercase tracking-[0.06em] text-[#cfe0f5]">
                {item.text}
              </span>
              <span className="ml-1 h-1 w-1 rounded-full bg-white/40" />
            </div>
          )
        })}
      </div>
    </section>
  )
}
