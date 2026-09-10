'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, MoveRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { media } from '@/content/site'
import { company } from '@/content/company'
import { services } from '@/content/services'
import { projects, projectCategories, type ProjectFilterValue } from '@/content/projects'
import { home } from '@/content/home'
import { pacHomeIntro, pacFeatures, pacHeadlineMetrics, pacHowItWorks } from '@/content/pac'
import { Reveal, RevealStagger, RevealItem } from '@/components/shared/Reveal'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { MetricGrid } from '@/components/shared/blocks'
import { Marquee } from '@/components/shared/Marquee'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { sectionPad, sectionLabel, displayHeading, textLink } from '@/components/shared/ui'
import { ProjectFilter } from '@/components/projects/ProjectFilter'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { ProjectModal } from '@/components/projects/ProjectModal'
import { Lightbox } from '@/components/projects/Lightbox'

const gallery = [
  { src: media.dredging, title: 'Deep dam dredging', category: 'Dredging' },
  { src: media.pacInfra, title: 'High-pressurized air cable', category: 'PAC' },
  { src: media.trcm, title: 'Trash rack cleaning', category: 'TRCM' },
  { src: media.civil, title: 'Civil works', category: 'Civil' },
  { src: media.spillway, title: 'Hydropower infrastructure', category: 'Hydropower' },
  { src: media.logBoom, title: 'Reservoir log boom', category: 'TRCM' },
  { src: media.debrisPanorama, title: 'Debris management', category: 'Dredging' },
]

const solutionTabs = ['All', 'Dredging', 'PAC', 'TRCM', 'Civil'] as const
type SolutionTab = (typeof solutionTabs)[number]

/** Flagship solutions, surfaced as a full section directly below the hero.
 * PAC leads, then trash rack / debris management, dredging and civil works. */
const flagshipSystems = [
  {
    title: 'Pressurized Air Cables (PAC)',
    blurb: 'SF6- and PFAS-free high-voltage power transmission — up to 420 kV and 5,000 A.',
    src: media.pacCableIndustrial,
    href: '/products-services/pressurized-air-cables',
  },
  {
    title: 'Trash Rack Cleaning Machines',
    blurb: 'Automated intake debris removal — hydraulic and wire-rope machines, log booms.',
    src: media.trcm,
    href: '/products-services/trash-rack-cleaning-machines',
  },
  {
    title: 'Dredging Services',
    blurb: 'Deep dam and reservoir dredging engineered to 100 m working depth.',
    src: media.dredgePumpPontoon,
    href: '/products-services/deep-dam-dredging',
  },
  {
    title: 'Civil Works',
    blurb: 'Allied civil engineering for dams, barrages and river weirs.',
    src: media.civilTrenchWeirIntake,
    href: '/products-services/civil-works',
  },
]

export function BasmniSite() {
  const [serviceFilter, setServiceFilter] = useState<SolutionTab>('All')
  const [projectFilter, setProjectFilter] = useState<ProjectFilterValue>('All')
  const [galleryFilter, setGalleryFilter] = useState<SolutionTab | 'Hydropower'>('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [project, setProject] = useState<(typeof projects)[number] | null>(null)

  const filteredServices = services.filter(
    (s) => serviceFilter === 'All' || s.category === serviceFilter
  )
  const homeProjects = projects.slice(0, 4)
  const filteredProjects = homeProjects.filter(
    (p) => projectFilter === 'All' || p.category === projectFilter
  )
  const filteredGallery = gallery.filter(
    (g) => galleryFilter === 'All' || g.category === galleryFilter
  )

  return (
    <>
      {/* Flagship solutions — homepage hero */}
      <section
        className={`${sectionPad} relative overflow-hidden bg-white pt-[92px] text-navy sm:pt-[136px] lg:pt-[136px]`}
      >
        <div className="relative border-t border-border pt-4">
          <h2 className={`${displayHeading} max-w-none`}>Four systems that define our field</h2>
          <p className="mt-5 max-w-[560px] text-[1.05rem] leading-[1.65] text-muted">
            Purpose-built power-transmission, debris-management, dredging and civil engineering
            platforms — engineered, manufactured and commissioned by Basmni.
          </p>
        </div>
        <RevealStagger
          className="relative mt-9 grid grid-cols-1 gap-5 sm:mt-11 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
          stagger={0.09}
        >
          {flagshipSystems.map((s) => (
            <RevealItem key={s.title}>
              <Link
                href={s.href}
                className="group flex h-full flex-col overflow-hidden border border-border bg-white transition-colors duration-300 hover:border-blue"
              >
                <span className="relative block aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.src}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 32vw"
                    className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                  />
                </span>
                <span className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-[clamp(1.15rem,1.6vw,1.5rem)] font-bold uppercase leading-[1.12] tracking-[0.01em] text-navy">
                      {s.title}
                    </span>
                    <ArrowUpRight className="mt-1 w-4 shrink-0 -translate-x-1 text-blue opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                  <span className="text-[1rem] leading-[1.6] text-muted">{s.blurb}</span>
                  <span className="mt-auto pt-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-blue/80">
                    Explore system
                  </span>
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Engineering highlights marquee */}
      <Marquee />

      {/* Intro */}
      <section id="about" className={sectionPad}>
        <SectionHeading label="Who we are" title={home.intro.title} />
        <div className="mt-9 grid grid-cols-1 gap-8 sm:mt-[4.5rem] sm:grid-cols-[1.15fr_0.85fr] sm:gap-[8vw]">
          <div>
            <p className="max-w-[640px] text-[clamp(1.8rem,3.3vw,3.5rem)] leading-[1.1]">
              Engineering that performs where conditions are at their most demanding.
            </p>
            <Link className={`${textLink} mt-8`} href="/about-us">
              Read more about Basmni <ArrowUpRight />
            </Link>
          </div>
          <div className="text-[1.05rem] leading-[1.75] text-muted">
            <p>{company.intro}</p>
            <div className="my-6 w-12 border-t-2 border-orange" />
            <p>
              Our teams bring design intelligence and field discipline together, from first drawing
              to final commissioning.
            </p>
          </div>
        </div>
        <Reveal direction="up" className="mt-9 sm:mt-11">
          <figure className="relative overflow-hidden border-l-2 border-orange">
            <ImageBlock
              src={media.dredgeArchDamAerial}
              alt="Aerial view of an arch dam and reservoir with a Basmni dredge working below the wall"
              reveal
              imagePosition="center 30%"
              sizes="(max-width: 1024px) 100vw, 86vw"
              className="aspect-[4/3] sm:aspect-[21/9]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,#0b3a70cc,transparent_46%)]" />
            <figcaption className="absolute inset-x-5 bottom-4 flex flex-wrap items-end justify-between gap-x-4 gap-y-1 sm:inset-x-7 sm:bottom-6">
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
                Critical water &amp; power infrastructure
              </span>
              <span className="text-[0.64rem] uppercase tracking-[0.14em] text-white/80 [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
                Design · Manufacture · Install · Commission
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Sections parked for now — Experience, What we do, PAC, Dredging, Debris,
          Selected references, Field archive. Restore by removing `{false && (` / `)}`. */}
      {false && (
        <>
          {/* Stats */}
          <section className={`${sectionPad} bg-white text-navy`}>
            <SectionHeading dark label="Experience" title={home.statsTitle} />
            <div className="mt-9 grid grid-cols-2 items-start gap-4 border-t border-border sm:mt-[4.5rem] sm:grid-cols-4">
              {company.stats.map((stat) => (
                <Reveal key={stat.label}>
                  <div className="border-r border-border py-4 pr-4">
                    <AnimatedCounter
                      value={stat.value}
                      className="block text-[clamp(2rem,7vw,3rem)] leading-[1.1] tracking-[-0.06em] text-blue sm:text-[clamp(2.4rem,4vw,4rem)]"
                    />
                    <span className="mt-2 block text-[0.62rem] uppercase tracking-[0.1em] text-muted">
                      {stat.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Solutions */}
          <section id="solutions" className={`${sectionPad} bg-white`}>
            <SectionHeading label="What we do" title={home.solutionTitle} />
            <p className="ml-auto mt-6 max-w-[380px] leading-[1.6] text-muted">
              {home.solutionIntro}
            </p>
            <ProjectFilter
              className="my-6"
              tabs={solutionTabs}
              active={serviceFilter}
              onChange={setServiceFilter}
              groupId="solutions"
            />
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {filteredServices.map((service, i) => (
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    key={service.number}
                    className="relative min-h-[430px] overflow-hidden bg-white text-left text-navy sm:min-h-[460px]"
                  >
                    <ImageBlock
                      src={media[service.image]}
                      alt={service.title}
                      className="absolute inset-0 h-full"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,#0b3a70f5,#0b3a7008_70%)]" />
                    <div className="absolute inset-x-7 bottom-6 [&_svg]:w-4">
                      <span className="text-[0.65rem] tracking-[0.12em] text-blue">
                        {service.number} / {service.category}
                      </span>
                      <h3 className="my-2.5 max-w-[430px] text-[clamp(1.7rem,3vw,3.1rem)] uppercase tracking-tightest">
                        {service.title}
                      </h3>
                      <p className="max-w-[390px] text-[1rem] leading-[1.55] text-muted">
                        {service.description}
                      </p>
                      <Link
                        href={service.href ?? '/contact'}
                        className="mt-4 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.1em] text-blue"
                      >
                        Explore solution <MoveRight />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </section>

          {/* Feature: PAC — flagship */}
          <section className={`${sectionPad} bg-white text-navy`}>
            <Reveal direction="up">
              <p className={`${sectionLabel} text-blue`}>Pressurized Air Cables (PAC)</p>
              <h2 className={`${displayHeading} mt-2 max-w-[20ch]`}>
                {home.pacTitle} <em className="not-italic text-blue">{home.pacEmphasis}</em>
              </h2>
              <p className="mt-5 max-w-[560px] leading-[1.65] text-muted">{pacHomeIntro[0]}</p>
            </Reveal>

            <Reveal direction="up" className="mt-8 sm:mt-10">
              <ImageBlock
                src={media.pacCableTunnel}
                alt="Pressurized-air cable ducts routed through a lined service tunnel"
                reveal
                sizes="(max-width: 1024px) 100vw, 86vw"
                className="aspect-[4/3] sm:aspect-[16/8]"
              />
            </Reveal>

            <RevealStagger
              className="mt-9 grid grid-cols-1 gap-px border border-border bg-border sm:mt-10 sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.07}
            >
              {pacFeatures.slice(0, 6).map((f) => (
                <RevealItem key={f.number} className="bg-white p-6">
                  <span className="text-[0.63rem] font-bold text-blue">{f.number}</span>
                  <h3 className="mt-3 text-[1rem] uppercase leading-[1.18] tracking-tightest text-blue">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[1rem] leading-[1.55] text-muted">{f.text}</p>
                </RevealItem>
              ))}
            </RevealStagger>

            <div className="mt-10">
              <MetricGrid items={pacHeadlineMetrics} dark columns="sm:grid-cols-4" />
            </div>

            <div className="mt-9 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:mt-10 sm:grid-cols-3 sm:gap-8">
              {pacHowItWorks.map((s) => (
                <Reveal key={s.number}>
                  <span className="text-[0.63rem] font-bold text-blue">{s.number}</span>
                  <h3 className="mt-3 text-[1rem] uppercase tracking-tightest">{s.title}</h3>
                  <p className="mt-2 text-[1rem] leading-[1.55] text-muted">{s.text}</p>
                </Reveal>
              ))}
            </div>

            <Link href="/products-services/pressurized-air-cables" className={`${textLink} mt-10`}>
              Explore PAC systems <ArrowUpRight />
            </Link>
          </section>

          {/* Feature: dredging */}
          <section
            className={`${sectionPad} grid grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_0.85fr] sm:gap-[6vw]`}
          >
            <Reveal direction="right">
              <p className={`${sectionLabel} text-blue`}>Deep dam dredging</p>
              <h2 className={displayHeading}>{home.dredgingTitle}</h2>
              <p className="mt-5 max-w-[480px] leading-[1.65] text-muted">
                Deep dam and reservoir dredging under extreme operating conditions requires
                specialized heavy-duty mechanical configurations.
              </p>
              <div className="mt-11 flex flex-wrap items-end gap-x-4 gap-y-1 border-t border-border pt-3">
                <strong className="flex items-end leading-none tracking-[-0.08em] text-blue">
                  <AnimatedCounter
                    value="100m"
                    className="text-[clamp(3rem,10vw,5.5rem)] leading-none"
                  />
                  <span className="text-[clamp(1.2rem,4vw,2.2rem)] leading-none">+</span>
                </strong>
                <span className="pb-2 text-[0.65rem] uppercase text-muted">
                  Maximum dredging depth
                </span>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.55rem] font-bold tracking-[0.08em] text-blue">
                <span>SEDIMENT</span>
                <i className="w-4 border-t border-orange" />
                <span>FLUIDIZATION</span>
                <i className="w-4 border-t border-orange" />
                <span>PUMPING</span>
                <i className="w-4 border-t border-orange" />
                <span>DISCHARGE</span>
              </div>
            </Reveal>
            <Reveal direction="left">
              <ImageBlock
                src={media.dredging}
                alt="Floating dredging system on a mist-covered reservoir"
                reveal
                className="min-h-[360px] sm:min-h-[500px]"
              />
            </Reveal>
          </section>

          {/* Debris */}
          <section className={sectionPad}>
            <SectionHeading label="Debris management" title={home.debrisTitle} />
            <RevealStagger
              className="mt-9 grid grid-cols-1 gap-4 sm:mt-11 sm:grid-cols-3"
              stagger={0.1}
            >
              {[
                {
                  title: 'Hydraulic TRCM',
                  text: 'For heavy debris and logs at shallow to medium depths.',
                  image: media.trcm,
                },
                {
                  title: 'Wire rope TRCM',
                  text: 'For deep water intakes and large-scale hydropower plants.',
                  image: media.spillway,
                },
                {
                  title: 'Fine screen cleaners',
                  text: 'For leaves, plastics and aquatic weeds.',
                  image: media.trashRack,
                },
              ].map((item) => (
                <RevealItem key={item.title}>
                  <ImageBlock src={item.image} alt={item.title} reveal className="min-h-[300px]" />
                  <div className="pt-4">
                    <h3 className="text-[1.25rem] uppercase">{item.title}</h3>
                    <p className="mt-2 max-w-[270px] text-[1rem] leading-[1.55] text-muted">
                      {item.text}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </section>

          {/* Projects */}
          <section id="projects" className={sectionPad}>
            <SectionHeading
              label="Selected references"
              title={home.projectsTitle}
              deck="Hydro-mechanical, dredging and civil contracts delivered for NHPC, NEEPCO and other operators. Select a project for scope, contract and award details."
            />
            <ProjectFilter
              className="my-6"
              tabs={projectCategories}
              active={projectFilter}
              onChange={setProjectFilter}
              groupId="home-projects"
            />
            <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p, i) => (
                  <motion.div
                    layout
                    key={p.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ProjectCard project={p} onClick={() => setProject(p)} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            <Link className={`${textLink} mt-10`} href="/references">
              View all references <ArrowUpRight />
            </Link>
          </section>

          {/* Gallery */}
          <section className={`${sectionPad} bg-white text-navy`}>
            <SectionHeading dark label="Field archive" title={home.galleryTitle} />
            <ProjectFilter
              className="my-6"
              tabs={[...solutionTabs, 'Hydropower']}
              active={galleryFilter}
              onChange={setGalleryFilter}
              groupId="gallery"
            />
            <RevealStagger className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3" stagger={0.06}>
              {filteredGallery.map((item, i) => (
                <RevealItem key={item.title} direction="scale">
                  <button
                    className="relative block w-full overflow-hidden border-0 bg-white p-0 text-left text-navy"
                    onClick={() => setLightboxIndex(i)}
                  >
                    <ImageBlock
                      src={item.src}
                      alt={item.title}
                      className="min-h-[210px] sm:min-h-[280px]"
                    />
                    <span className="absolute bottom-4 left-4 z-[1] text-[0.7rem] font-bold uppercase">
                      {item.title}
                    </span>
                  </button>
                </RevealItem>
              ))}
            </RevealStagger>
          </section>
        </>
      )}

      <ProjectModal project={project} onClose={() => setProject(null)} />

      {lightboxIndex !== null && (
        <Lightbox
          items={filteredGallery}
          index={lightboxIndex}
          close={() => setLightboxIndex(null)}
          setIndex={setLightboxIndex}
        />
      )}
    </>
  )
}
