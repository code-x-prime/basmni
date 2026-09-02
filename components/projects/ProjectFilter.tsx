'use client'

import { motion } from 'framer-motion'

/**
 * Horizontally scrollable filter tabs with a sliding active indicator
 * (`layoutId`, scoped per instance via `groupId` so multiple filter groups on one
 * page don't animate across each other). The parent owns the active state.
 */
export function ProjectFilter<T extends string>({
  tabs,
  active,
  onChange,
  className = '',
  ariaLabel = 'Filter content',
  groupId = 'filter',
}: {
  tabs: readonly T[]
  active: T
  onChange: (value: T) => void
  className?: string
  ariaLabel?: string
  groupId?: string
}) {
  return (
    <div
      className={`flex gap-6 overflow-x-auto whitespace-nowrap ${className}`}
      role="tablist"
      aria-label={ariaLabel}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={active === tab}
          onClick={() => onChange(tab)}
          className={`relative border-b py-1.5 text-[0.67rem] uppercase tracking-[0.1em] transition-colors ${
            active === tab
              ? 'border-transparent text-blue'
              : 'border-transparent text-muted hover:text-foreground'
          }`}
        >
          {tab}
          {active === tab && (
            <motion.span
              layoutId={`${groupId}-active-tab`}
              className="absolute inset-x-0 -bottom-px h-px bg-blue"
              transition={{ type: 'spring', stiffness: 400, damping: 34 }}
            />
          )}
        </button>
      ))}
    </div>
  )
}
