import type { ReactNode } from 'react'
import { sectionLabel, displayHeading } from './ui'

/**
 * Section header: a border-topped label + large display heading. Generalises the
 * original homepage `SectionIntro` (same markup for the `label` + `title` case).
 */
export function SectionHeading({
  label,
  title,
  deck,
  dark = false,
}: {
  label: string
  title: ReactNode
  deck?: string
  dark?: boolean
}) {
  return (
    <div className={dark ? 'text-navy' : ''}>
      <div className="flex flex-col items-start gap-5 border-t border-border pt-3 sm:flex-row sm:justify-between sm:gap-8">
        <p className={`${sectionLabel} text-blue sm:min-w-[190px]`}>{label}</p>
        <h2 className={displayHeading}>{title}</h2>
      </div>
      {deck && (
        <p
          className={`mt-6 max-w-[480px] text-[1.05rem] leading-[1.65] sm:ml-auto ${dark ? 'text-muted' : 'text-muted'}`}
        >
          {deck}
        </p>
      )}
    </div>
  )
}
