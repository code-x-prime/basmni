'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { media } from '@/content/site'
import type { Project } from '@/content/projects'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { Portal } from '@/components/shared/Portal'

/**
 * Project detail modal. Scroll-safe on small screens: the backdrop scrolls and
 * the panel aligns to the top on mobile (centres from `sm`), so the close button
 * is always reachable. Fade + rise on enter/exit; Escape and backdrop dismiss;
 * body scroll lock while open.
 */
export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  const rows: [string, string][] = project
    ? [
        ['Client', project.client],
        ['Category', project.category],
        ['Year', project.year],
        ...(project.awardDate ? ([['Award date', project.awardDate]] as [string, string][]) : []),
        ...(project.contractNo
          ? ([['Contract no.', project.contractNo]] as [string, string][])
          : []),
      ]
    : []

  return (
    <Portal>
      <AnimatePresence>
        {project && (
          <motion.div
            className="fixed inset-0 z-[70] overflow-y-auto overflow-x-hidden bg-graphite/85 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          >
            <div className="flex min-h-full items-start justify-center p-3 sm:items-center sm:p-6">
              <motion.div
                className="relative w-full max-w-[760px] bg-background text-foreground"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute right-3 top-3 z-[2] grid h-9 w-9 place-items-center bg-white text-navy transition-transform hover:-translate-y-0.5"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <X className="w-4" />
                </button>

                <ImageBlock
                  src={media[project.image]}
                  alt={project.name}
                  className="min-h-[200px] sm:min-h-[300px]"
                />

                <div className="p-5 sm:p-7">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-blue">
                    {project.category}
                    {project.featured ? ' · Featured project' : ''}
                  </p>
                  <h2 className="mt-2 text-[1.35rem] leading-[1.15] tracking-tightest sm:text-[1.9rem]">
                    {project.name}
                  </h2>
                  <p className="mt-4 leading-[1.7] text-muted">{project.scope}</p>

                  <dl className="mt-6 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
                    {rows.map(([k, v]) => (
                      <div key={k} className="bg-background p-4">
                        <dt className="text-[0.58rem] font-bold uppercase tracking-[0.12em] text-blue">
                          {k}
                        </dt>
                        <dd className="mt-1 text-[1rem] leading-[1.45] [overflow-wrap:anywhere]">
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="group mt-6 inline-flex min-h-11 items-center gap-2 bg-navy px-4 py-3 text-[0.66rem] font-bold uppercase tracking-[0.1em] text-white transition-transform duration-200 hover:-translate-y-0.5 [&_svg]:w-4"
                  >
                    Discuss a similar project
                    <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  )
}
