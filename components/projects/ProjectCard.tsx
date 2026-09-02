'use client'

import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { media } from '@/content/site'
import type { Project } from '@/content/projects'
import { ImageBlock } from '@/components/shared/ImageBlock'

/**
 * Project tile: image scale, overlay, category fade-in, title lift and arrow
 * slide are all driven by one parent `whileHover` state (Framer variants) so
 * every piece animates together. Content stays fully visible without hover —
 * hover only adds motion, nothing is hidden by default.
 */
export function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.99 }}
      animate="rest"
      className="block w-full border-0 bg-transparent p-0 text-left"
      aria-label={`View details for ${project.name}`}
    >
      <div className="relative overflow-hidden">
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ImageBlock
            src={media[project.image]}
            alt={project.name}
            className="min-h-[280px] sm:min-h-[330px] [&:hover_img]:!scale-100 [&_img]:!scale-100"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(0deg,#081b25cc,transparent_55%)]"
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute left-4 top-4 bg-white/95 px-2 py-1 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-navy"
          variants={{ rest: { opacity: 0, y: -6 }, hover: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.25 }}
        >
          {project.category}
        </motion.span>
      </div>
      <motion.div
        className="pt-3"
        variants={{ rest: { y: 0 }, hover: { y: -2 } }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[0.63rem] uppercase tracking-[0.08em] text-muted">
          {project.client} / {project.year}
        </span>
        <span className="my-2 flex items-center gap-2">
          <motion.h3
            className="text-[1.35rem] leading-[1.15] sm:text-[1.45rem]"
            variants={{ rest: { y: 0 }, hover: { y: -2 } }}
            transition={{ duration: 0.3 }}
          >
            {project.name}
          </motion.h3>
          <motion.span
            variants={{ rest: { opacity: 0, x: 0 }, hover: { opacity: 1, x: 6 } }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUpRight className="w-4 text-blue" />
          </motion.span>
        </span>
        <p className="text-[0.63rem] uppercase tracking-[0.08em] text-blue">
          {project.scope.split('.')[0]}
        </p>
      </motion.div>
    </motion.button>
  )
}
