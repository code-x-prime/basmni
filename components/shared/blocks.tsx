import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { RevealStagger, RevealItem } from './Reveal'
import { AnimatedCounter } from './AnimatedCounter'

/**
 * Technical metric blocks — value + label, border-topped. Used for spec callouts
 * (PAC, dredging technology) and portfolio stats.
 */
export function MetricGrid({
  items,
  dark = false,
  columns = 'sm:grid-cols-3',
}: {
  items: { value: string; label: string }[]
  dark?: boolean
  columns?: string
}) {
  return (
    <RevealStagger className={`grid grid-cols-2 gap-px ${columns}`}>
      {items.map((m) => (
        <RevealItem
          key={m.label}
          className={`border-t-2 pt-3 ${dark ? 'border-orange' : 'border-orange'}`}
        >
          <AnimatedCounter
            value={m.value}
            className={`block text-[clamp(1.4rem,3vw,2.4rem)] font-bold tracking-[-0.06em] ${dark ? 'text-blue' : 'text-blue'}`}
          />
          <span
            className={`mt-1 block text-[0.6rem] uppercase tracking-[0.1em] ${dark ? 'text-muted' : 'text-muted'}`}
          >
            {m.label}
          </span>
        </RevealItem>
      ))}
    </RevealStagger>
  )
}

/**
 * Numbered feature rows with a hover interaction: number nudges, border lifts to
 * blue, arrow slides in. Optional per-row link.
 */
export function FeatureRows({
  items,
  dark = false,
}: {
  items: { number?: string; title: string; text: string; href?: string }[]
  dark?: boolean
}) {
  const base = dark ? 'border-border' : 'border-border'
  return (
    <RevealStagger className={`border-t ${base}`}>
      {items.map((item) => {
        const inner = (
          <div
            className={`group grid grid-cols-[1ch_1fr_auto] items-start gap-4 border-b py-5 transition-colors ${base} ${
              item.href ? 'hover:border-blue' : ''
            }`}
          >
            <span
              aria-hidden
              className={`mt-[0.55rem] h-1.5 w-1.5 shrink-0 transition-transform duration-300 ${dark ? 'bg-white' : 'bg-blue'} ${
                item.href ? 'group-hover:translate-x-0.5' : ''
              }`}
            />
            <span>
              <span
                className={`block text-[clamp(1rem,2vw,1.35rem)] uppercase leading-[1.15] tracking-tightest ${dark ? 'text-navy' : 'text-foreground'} ${
                  item.href ? 'transition-colors group-hover:text-blue' : ''
                }`}
              >
                {item.title}
              </span>
              <span
                className={`mt-2 block text-[1rem] leading-[1.55] ${dark ? 'text-muted' : 'text-muted'}`}
              >
                {item.text}
              </span>
            </span>
            <ArrowUpRight
              className={`w-5 transition-all duration-300 ${
                item.href
                  ? 'translate-x-[-4px] text-muted opacity-0 group-hover:translate-x-0 group-hover:text-blue group-hover:opacity-100'
                  : 'opacity-0'
              }`}
            />
          </div>
        )
        return item.href ? (
          <RevealItem key={item.title}>
            <Link href={item.href}>{inner}</Link>
          </RevealItem>
        ) : (
          <RevealItem key={item.title}>{inner}</RevealItem>
        )
      })}
    </RevealStagger>
  )
}
