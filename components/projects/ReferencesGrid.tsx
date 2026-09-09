'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, projectCategories, type ProjectFilterValue } from '@/content/projects'
import { sectionPad } from '@/components/shared/ui'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ProjectFilter } from './ProjectFilter'

export function ReferencesGrid({ label, title }: { label: string; title: string }) {
  const [active, setActive] = useState<ProjectFilterValue>('All')

  const filtered = useMemo(
    () => projects.filter((p) => active === 'All' || p.category === active),
    [active]
  )

  return (
    <section className={sectionPad}>
      <SectionHeading label={label} title={title} />

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 sm:mt-12">
        <ProjectFilter
          className="border-b border-border pb-1"
          tabs={projectCategories}
          active={active}
          onChange={setActive}
          ariaLabel="Filter projects by category"
        />
        <span className="text-[0.62rem] uppercase tracking-[0.12em] text-muted">
          {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
        </span>
      </div>

      <motion.div layout className="mt-8 border-t border-border">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-2 border-b border-border py-6 sm:grid-cols-[1.4fr_1fr] sm:gap-8"
            >
              <div>
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-blue">
                  {p.category} · {p.year}
                </span>
                <h3 className="mt-1.5 text-[1.05rem] leading-[1.2] tracking-tightest">{p.name}</h3>
                <p className="mt-1 text-[0.75rem] uppercase tracking-[0.06em] text-muted">
                  {p.client}
                </p>
              </div>
              <div className="text-[1rem] leading-[1.55] text-muted">
                <p>{p.scope}</p>
                <p className="mt-2 text-[0.68rem] uppercase tracking-[0.06em] text-muted/80">
                  {p.contractNo ? `Contract ${p.contractNo}` : 'Contract ref. on file'}
                  {p.awardDate ? ` · Awarded ${p.awardDate}` : ''}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-[1rem] text-muted">No projects in this category yet.</p>
      )}
    </section>
  )
}
