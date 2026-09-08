'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  projects,
  projectCategories,
  type ProjectFilterValue,
  type Project,
} from '@/content/projects'
import { sectionPad } from '@/components/shared/ui'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ProjectFilter } from './ProjectFilter'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

export function ReferencesGrid({ label, title }: { label: string; title: string }) {
  const [active, setActive] = useState<ProjectFilterValue>('All')
  const [selected, setSelected] = useState<Project | null>(null)

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

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} onClick={() => setSelected(project)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-[1rem] text-muted">No projects in this category yet.</p>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
