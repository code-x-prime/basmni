'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, MoveRight } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { media } from '@/content/site'
import { company } from '@/content/company'
import { services } from '@/content/services'
import { projects, projectCategories, type ProjectFilterValue } from '@/content/projects'
import { home } from '@/content/home'
import { contact } from '@/content/contact'
import { Reveal, RevealStagger, RevealItem } from '@/components/shared/Reveal'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { ImageRotator } from '@/components/shared/ImageRotator'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTASection } from '@/components/shared/CTASection'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { MagneticButton } from '@/components/motion/MagneticButton'
import {
  sectionPad,
  eyebrowDark,
  sectionLabel,
  displayHeading,
  buttonLight,
  buttonGhost,
  textLink,
} from '@/components/shared/ui'
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

/**
 * Full-bleed hero photograph: a slow ~6s zoom-out on mount plus a subtle
 * scroll-linked drift on desktop. Both are disabled under prefers-reduced-motion.
 */
function HomeHeroImage() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '12%'])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-[-8%]"
        style={{ y }}
        initial={{ opacity: 0, scale: reduce ? 1 : 1.09 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          opacity: { duration: 1.1, ease: 'easeOut' },
          scale: { duration: 6, ease: [0.16, 1, 0.3, 1] },
        }}
      >
        <Image
          src={media.homeHero}
          alt="Hydroelectric dam intake towers rising from a reservoir"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: 'center 32%' }}
        />
      </motion.div>
    </div>
  )
}

/** Homepage process steps — copy from company.capabilitySteps, each linked to
 * the page where that stage is evidenced. */
const stepHrefs = [
  '/products-services',
  '/products-services',
  '/products-services',
  '/references',
  '/references',
  '/references',
]
const processSteps = company.capabilitySteps.map((s, i) => ({
  label: s.label,
  blurb: s.blurb,
  href: stepHrefs[i] ?? '/about-us#process',
}))

export function BasmniSite() {
  const reduce = useReducedMotion()
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
      {/* Hero */}
      <section className="relative flex min-h-[620px] items-end overflow-hidden bg-graphite text-white sm:min-h-[clamp(680px,88vh,880px)]">
        <HomeHeroImage />

        {/* Cinematic wash — dark toward the text (left/bottom), image stays visible on the right. */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(96deg,#061a25f2_0%,#061a25cc_36%,#061a2559_66%,#061a251a_100%),linear-gradient(0deg,#061a25f0_0%,#061a2559_34%,transparent_62%),linear-gradient(180deg,#061a25a6_0%,transparent_20%)]" />
        {/* Very faint engineering grid on the image side. */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:72px_72px] lg:block" />

        <RevealStagger
          className="relative z-[1] w-full px-5 pb-20 pt-32 sm:px-[clamp(1.5rem,7vw,7rem)] sm:pb-24 sm:pt-36"
          stagger={0.09}
        >
          <div className="max-w-[760px] border-l-2 border-orange/70 pl-5 sm:pl-8">
            <RevealItem>
              <p className={eyebrowDark}>{home.hero.eyebrow}</p>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-4 text-[clamp(2.3rem,6.4vw,5.2rem)] font-bold uppercase leading-[1] tracking-tightest text-ice [overflow-wrap:anywhere]">
                {home.hero.title}
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-5 max-w-[520px] leading-[1.65] text-[#d6e3e6]">
                {home.hero.description}
              </p>
            </RevealItem>
            <RevealItem>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <MagneticButton>
                  <Link className={`${buttonLight} max-sm:w-full`} href="/products-services">
                    Explore Products &amp; Services <ArrowUpRight />
                  </Link>
                </MagneticButton>
                <Link className={`${buttonGhost} max-sm:w-full`} href="/references">
                  View Project References <ArrowUpRight />
                </Link>
              </div>
            </RevealItem>
          </div>
        </RevealStagger>

        {/* Technical footer strip */}
        <div className="pointer-events-none absolute inset-x-5 bottom-6 z-[1] flex flex-col gap-1 border-t border-white/15 pt-3 text-[0.58rem] uppercase tracking-[0.16em] text-white/55 sm:inset-x-[clamp(1.5rem,7vw,7rem)] sm:bottom-7 sm:flex-row sm:items-center sm:gap-x-5">
          <span className="text-white/75">Est. 2016 — Delhi / India</span>
          <span aria-hidden className="hidden opacity-30 sm:inline">
            /
          </span>
          <span>Hydropower · Water resources · Infrastructure</span>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          aria-label="Scroll to introduction"
          className="group absolute bottom-14 right-5 z-[1] hidden items-center gap-3 text-[0.56rem] uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-white sm:bottom-16 sm:right-[clamp(1.5rem,7vw,7rem)] sm:flex"
        >
          Scroll
          <span className="relative block h-10 w-px overflow-hidden bg-white/20">
            <motion.span
              className="absolute inset-x-0 top-0 block h-4 bg-ice"
              animate={reduce ? undefined : { y: ['-16px', '40px'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
        </a>
      </section>

      {/* Intro */}
      <section id="about" className={sectionPad}>
        <SectionHeading label="01 — Who we are" title={home.intro.title} />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-[4.5rem] sm:grid-cols-[1.15fr_0.85fr] sm:gap-[8vw]">
          <div>
            <p className="max-w-[640px] text-[clamp(1.8rem,3.3vw,3.5rem)] leading-[1.04]">
              Engineering that performs where conditions are at their most demanding.
            </p>
            <Link className={`${textLink} mt-8`} href="/about-us">
              Read more about Basmni <ArrowUpRight />
            </Link>
          </div>
          <div className="leading-[1.7] text-muted">
            <p>{company.intro}</p>
            <div className="my-6 w-12 border-t-2 border-orange" />
            <p>
              Our teams bring design intelligence and field discipline together, from first drawing
              to final commissioning.
            </p>
          </div>
        </div>
        <Reveal direction="up" className="mt-12 sm:mt-16">
          <figure className="relative overflow-hidden border-l-2 border-orange">
            <ImageBlock
              src={media.homeIntro}
              alt="Aerial view of a barrage spillway discharging water — critical water infrastructure"
              parallax
              sizes="(max-width: 1024px) 100vw, 86vw"
              className="aspect-[4/3] sm:aspect-[16/8]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,#081b25cc,transparent_46%)]" />
            <figcaption className="absolute inset-x-5 bottom-4 flex flex-wrap items-end justify-between gap-x-4 gap-y-1 sm:inset-x-7 sm:bottom-6">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-white">
                Critical water &amp; power infrastructure
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.14em] text-ice/70">
                Design · Manufacture · Install · Commission
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Stats */}
      <section className={`${sectionPad} bg-navy text-white`}>
        <SectionHeading dark label="02 — Experience" title={home.statsTitle} />
        <div className="mt-12 grid grid-cols-2 items-start gap-4 border-t border-[#385463] sm:mt-[4.5rem] sm:grid-cols-4">
          {company.stats.map((stat) => (
            <Reveal key={stat.label}>
              <div className="border-r border-[#385463] py-4 pr-4">
                <AnimatedCounter
                  value={stat.value}
                  className="block text-[clamp(2rem,7vw,3rem)] leading-[1.05] tracking-[-0.06em] text-ice sm:text-[clamp(2.4rem,4vw,4rem)]"
                />
                <span className="mt-2 block text-[0.62rem] uppercase tracking-[0.1em] text-[#a9bec5]">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className={`${sectionPad} bg-[#dceaf0]`}>
        <SectionHeading label="03 — What we do" title={home.solutionTitle} />
        <p className="ml-auto mt-6 max-w-[380px] leading-[1.6] text-muted">{home.solutionIntro}</p>
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
                className="relative min-h-[430px] overflow-hidden bg-navy text-left text-white sm:min-h-[460px]"
              >
                <ImageBlock
                  src={media[service.image]}
                  alt={service.title}
                  className="absolute inset-0 h-full"
                />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,#081b25f5,#081b2508_70%)]" />
                <div className="absolute inset-x-7 bottom-6 [&_svg]:w-4">
                  <span className="text-[0.65rem] tracking-[0.12em] text-ice">
                    {service.number} / {service.category}
                  </span>
                  <h3 className="my-2.5 max-w-[430px] text-[clamp(1.7rem,3vw,3.1rem)] uppercase tracking-tightest">
                    {service.title}
                  </h3>
                  <p className="max-w-[390px] text-[0.9rem] leading-[1.55] text-[#d4e1e5]">
                    {service.description}
                  </p>
                  <Link
                    href={`/products-services#${service.id}`}
                    className="mt-4 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.1em] text-ice"
                  >
                    Explore solution <MoveRight />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Feature: dredging */}
      <section
        className={`${sectionPad} grid grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_0.85fr] sm:gap-[6vw]`}
      >
        <Reveal direction="right">
          <p className={`${sectionLabel} text-blue`}>04 — Deep dam dredging</p>
          <h2 className={displayHeading}>{home.dredgingTitle}</h2>
          <p className="mt-5 max-w-[480px] leading-[1.65] text-muted">
            Deep dam and reservoir dredging under extreme operating conditions requires specialized
            heavy-duty mechanical configurations.
          </p>
          <div className="mt-11 flex flex-wrap items-end gap-x-4 gap-y-1 border-t border-border pt-3">
            <strong className="text-[clamp(3rem,10vw,5.5rem)] leading-none tracking-[-0.08em] text-blue">
              100m<span className="text-[0.4em]">+</span>
            </strong>
            <span className="pb-2 text-[0.65rem] uppercase text-muted">Maximum dredging depth</span>
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

      {/* PAC */}
      <section
        className={`${sectionPad} grid grid-cols-1 items-center gap-10 bg-graphite text-white sm:grid-cols-[1.05fr_0.95fr] sm:gap-[6vw]`}
      >
        <Reveal direction="right">
          <div className="border-l-2 border-orange/70 pl-3 sm:pl-4">
            <ImageRotator
              className="aspect-[4/3] sm:aspect-[4/5]"
              sizes="(max-width: 768px) 100vw, 48vw"
              caption="High-voltage transmission infrastructure"
              slides={[
                {
                  src: media.pacInfra,
                  alt: 'High-voltage substation switchyard with busbars and disconnect switches',
                },
                {
                  src: media.pacAerial,
                  alt: 'Aerial view of an electrical power substation compound',
                },
                {
                  src: media.pacGantry,
                  alt: 'High-voltage substation gantries and insulator strings against a clear sky',
                },
              ]}
            />
          </div>
        </Reveal>
        <Reveal direction="left">
          <p className={`${sectionLabel} text-blue`}>05 — Power transmission</p>
          <h2 className={displayHeading}>{home.pacTitle}</h2>
          <p className="mt-5 max-w-[480px] leading-[1.65] text-[#c4d3d9]">
            PAC replaces SF6- and fluid-dependent insulation with clean compressed technical air —
            engineered for high-voltage substations, dense grid corridors and modern transmission
            infrastructure.
          </p>
          <RevealStagger className="mt-10 border-t border-[#2d4653]" stagger={0.06}>
            {[
              'Clean technical air',
              'Low transmission losses',
              'High current capacity',
              'Compact infrastructure integration',
              'Condition monitoring',
              '40+ year projected lifecycle',
            ].map((item, i) => (
              <RevealItem
                key={item}
                className="flex items-center gap-6 border-b border-[#2d4653] py-3.5 transition-colors hover:border-ice/40"
              >
                <span className="text-[0.63rem] text-ice">0{i + 1}</span>
                <b className="text-[0.86rem] font-medium uppercase">{item}</b>
              </RevealItem>
            ))}
          </RevealStagger>
          <Link href="/products-services#pac" className={`${textLink} mt-9 border-ice text-ice`}>
            Explore PAC systems <ArrowUpRight />
          </Link>
        </Reveal>
      </section>

      {/* Debris */}
      <section className={sectionPad}>
        <SectionHeading label="06 — Debris management" title={home.debrisTitle} />
        <RevealStagger
          className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3"
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
                <p className="mt-2 max-w-[270px] text-[0.9rem] leading-[1.55] text-muted">
                  {item.text}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Process */}
      <section className={`${sectionPad} bg-navy text-white`}>
        <SectionHeading dark label="07 — Our process" title={home.processTitle} />
        <div className="relative mt-12 sm:mt-16">
          <motion.div
            className="absolute left-0 top-0 h-px w-full origin-left bg-[#385463]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <RevealStagger stagger={0.1}>
            {processSteps.map((step, i) => (
              <RevealItem key={step.label}>
                <Link
                  href={step.href}
                  className="group grid grid-cols-[35px_1fr_auto] items-center gap-4 border-b border-[#385463] py-4 transition-colors duration-300 hover:border-ice sm:grid-cols-[55px_1fr_auto] sm:py-5"
                >
                  <span className="text-[0.65rem] text-ice transition-transform duration-300 group-hover:translate-x-0.5">
                    0{i + 1}
                  </span>
                  <span>
                    <span className="block text-[clamp(1.3rem,2.5vw,2.8rem)] uppercase leading-[1.05] text-white transition-colors duration-300 group-hover:text-ice">
                      {step.label}
                    </span>
                    <span className="mt-1 hidden text-[0.8rem] leading-[1.5] text-[#a9bec5] sm:block">
                      {step.blurb}
                    </span>
                  </span>
                  <ArrowUpRight className="w-5 -translate-x-1 text-[#a9bec5] opacity-40 transition-all duration-300 group-hover:translate-x-0 group-hover:text-ice group-hover:opacity-100" />
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
          <Link className={`${textLink} mt-10 border-ice text-ice`} href="/about-us#process">
            See the full engineering process <ArrowUpRight />
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={sectionPad}>
        <SectionHeading
          label="08 — Selected references"
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
      <section className={`${sectionPad} bg-navy text-white`}>
        <SectionHeading dark label="09 — Field archive" title={home.galleryTitle} />
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
                className="relative block w-full overflow-hidden border-0 bg-graphite p-0 text-left text-white"
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

      {/* Why */}
      <section className={sectionPad}>
        <SectionHeading label="10 — The Basmni standard" title={home.whyTitle} />
        <RevealStagger
          className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-5"
          stagger={0.06}
        >
          {company.capabilities.map((capability, i) => (
            <RevealItem
              key={capability}
              className="min-h-[130px] border-t border-border pt-3 sm:min-h-[160px]"
            >
              <span className="text-[0.63rem] text-blue">0{i + 1}</span>
              <h3 className="mt-6 text-[0.95rem] uppercase sm:mt-8 sm:text-[1.1rem]">
                {capability}
              </h3>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="11 — Start a conversation"
        title={home.ctaTitle}
        emphasis="Let's engineer the solution."
        description="Discuss your hydropower, dredging, hydro-mechanical or water infrastructure requirement with Basmni Technologies."
        image={media.spillway}
        imageAlt="Misty water infrastructure landscape"
        primary={{
          label: 'Call Our Engineers',
          href: `tel:${contact.phone.replaceAll(' ', '')}`,
          tel: true,
        }}
        secondary={{ label: 'Send an Enquiry', href: '/contact' }}
      />

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
