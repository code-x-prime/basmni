import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { media } from '@/content/site'
import { company } from '@/content/company'
import { aboutSections } from '@/content/pages'
import { PageTransition } from '@/components/shared/PageTransition'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal, RevealStagger, RevealItem } from '@/components/shared/Reveal'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { FeatureRows } from '@/components/shared/blocks'
import { sectionPad, sectionLabel, textLink } from '@/components/shared/ui'

export const metadata: Metadata = {
  title: 'About Basmni Technologies Pvt. Ltd. | Engineering & Infrastructure',
  description:
    'Basmni Technologies Pvt. Ltd. — established in 2016 and headquartered in Delhi — designs, manufactures, supplies and executes electro-mechanical equipment and specialized civil works for dams, barrages and hydro-power stations across India.',
}

export default function AboutPage() {
  return (
    <PageTransition>
      {/* About Basmni — page intro */}
      <section className={`${sectionPad} pt-[100px] sm:pt-[136px] lg:pt-[136px]`}>
        <div className="mx-auto max-w-[900px] text-center">
          <h1 className="text-[clamp(2.6rem,7vw,5.5rem)] uppercase leading-[1.04] tracking-tightest">
            About Basmni
          </h1>
          <p className="mx-auto mt-6 max-w-[56ch] text-[1.05rem] leading-[1.7] text-muted">
            {aboutSections.intro.deck}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-[1.1fr_0.9fr] sm:gap-[7vw]">
          <Reveal className="space-y-5 leading-[1.75] text-muted" direction="right">
            {company.story.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            <ul className="flex flex-wrap gap-2 pt-2">
              {company.focusKeywords.map((k) => (
                <li
                  key={k}
                  className="border border-border px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.1em] text-blue"
                >
                  {k}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal direction="left">
            <ImageBlock
              src={media.field}
              alt="Basmni engineering team at a mountain project site"
              reveal
              className="min-h-[320px] sm:min-h-[480px]"
            />
          </Reveal>
        </div>

        {/* small engineering facts */}
        <RevealStagger className="mt-9 grid grid-cols-2 gap-px border-t border-border sm:mt-10 sm:grid-cols-4">
          {[
            { value: '2016', label: 'Established' },
            { value: 'Delhi', label: 'Headquarters' },
            { value: 'PAN INDIA', label: 'Operations' },
            { value: '50+', label: 'Team members' },
          ].map((f) => (
            <RevealItem
              key={f.label}
              className="border-r border-border py-4 text-center last:border-r-0"
            >
              <AnimatedCounter
                value={f.value}
                className="block text-[clamp(1.3rem,3vw,2rem)] font-bold tracking-[-0.06em] text-blue"
              />
              <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.1em] text-muted">
                {f.label}
              </span>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Engineering philosophy */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[0.9fr_1.1fr] sm:gap-[6vw]">
          <Reveal direction="right">
            <ImageBlock
              src={media.dredging}
              alt="Deep dam dredging system in operation"
              parallax
              className="min-h-[300px] sm:min-h-[460px]"
            />
          </Reveal>
          <Reveal direction="left">
            <p className={`${sectionLabel} text-blue`}>{company.philosophy.label}</p>
            <h2 className="mt-3 text-[clamp(1.8rem,4vw,3.4rem)] uppercase leading-[1.1] tracking-tightest">
              {company.philosophy.title}
            </h2>
            <p className="mt-5 max-w-[560px] leading-[1.7] text-muted">{company.philosophy.body}</p>
            <ul className="mt-8 border-t border-border">
              {company.philosophy.points.map((p) => (
                <li
                  key={p}
                  className="flex gap-4 border-b border-border py-3 text-[1rem] text-muted"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-blue" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Core capabilities */}
      <section className={`${sectionPad} bg-white`}>
        <SectionHeading
          label={aboutSections.capabilities.label}
          title={aboutSections.capabilities.title}
          deck={aboutSections.capabilities.deck}
        />
        <Reveal direction="up" className="mt-9 sm:mt-11">
          <ImageBlock
            src={media.civilSiteReview}
            alt="Basmni engineers reviewing drawings at a waterfront construction site"
            reveal
            className="min-h-[260px] sm:min-h-[420px]"
          />
        </Reveal>
        <RevealStagger className="mt-4 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {company.capabilitySteps.map((step) => (
            <RevealItem
              key={step.label}
              className="group flex flex-col bg-white p-6 transition-colors hover:bg-white sm:p-8"
            >
              <div className="flex items-center justify-end">
                <ArrowUpRight className="w-4 -translate-x-1 text-blue opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
              <h3 className="mt-3 text-[clamp(1.15rem,2.2vw,1.7rem)] uppercase leading-[1.1] tracking-tightest">
                {step.label}
              </h3>
              <p className="mt-3 text-[1rem] leading-[1.6] text-muted">{step.blurb}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Industries / applications */}
      <section className={sectionPad}>
        <SectionHeading
          label={aboutSections.applications.label}
          title={aboutSections.applications.title}
        />
        <div className="mt-9 grid grid-cols-1 gap-8 sm:mt-11 sm:grid-cols-[1fr_1fr] sm:gap-[6vw]">
          <Reveal direction="right">
            <ImageBlock
              src={media.spillway}
              alt="Spillway and intake structure at a hydropower station"
              reveal
              className="min-h-[300px] sm:min-h-[520px]"
            />
          </Reveal>
          <Reveal direction="left">
            <FeatureRows items={company.applications} />
          </Reveal>
        </div>
      </section>

      {/* Basmni at a glance */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading
          dark
          label={aboutSections.glance.label}
          title={aboutSections.glance.title}
        />
        <div className="mt-9 grid grid-cols-2 gap-4 border-t border-border sm:mt-11 sm:grid-cols-4">
          {company.stats.map((stat) => (
            <Reveal key={stat.label}>
              <div className="border-r border-border py-4">
                <AnimatedCounter
                  value={stat.value}
                  className="block text-[2.6rem] tracking-[-0.08em] text-blue sm:text-[clamp(2.6rem,5vw,5rem)]"
                />
                <span className="text-[0.65rem] uppercase tracking-[0.1em] text-muted">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Technology & equipment */}
      <section className={`${sectionPad} bg-white`}>
        <SectionHeading
          label={aboutSections.equipment.label}
          title={aboutSections.equipment.title}
          deck={aboutSections.equipment.deck}
        />
        <RevealStagger className="mt-9 grid grid-cols-1 gap-px border border-border bg-border sm:mt-11 sm:grid-cols-2 lg:grid-cols-3">
          {company.equipment.map((eq) => (
            <RevealItem key={eq.title}>
              <Link
                href={eq.href}
                className="group flex h-full flex-col bg-white p-6 transition-colors hover:bg-white sm:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[1.05rem] uppercase leading-[1.15] tracking-tightest transition-colors group-hover:text-blue">
                    {eq.title}
                  </h3>
                  <ArrowUpRight className="w-4 shrink-0 -translate-x-1 text-blue opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
                <p className="mt-2.5 text-[1rem] leading-[1.55] text-muted">{eq.text}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
        <Reveal>
          <Link href="/products-services/pressurized-air-cables" className={`${textLink} mt-10`}>
            Explore our flagship solutions <ArrowUpRight />
          </Link>
        </Reveal>
      </section>

      {/* Why Basmni + field experience */}
      <section className={sectionPad}>
        <SectionHeading label={aboutSections.why.label} title={aboutSections.why.title} />
        <div className="mt-9 grid grid-cols-1 gap-8 sm:mt-11 sm:grid-cols-[1.1fr_0.9fr] sm:gap-[6vw]">
          <Reveal direction="right">
            <RevealStagger className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
              {company.whyBasmni.map((w) => (
                <RevealItem key={w.title} className="bg-background p-6 sm:p-7">
                  <h3 className="text-[1rem] uppercase leading-[1.15] tracking-tightest text-blue">
                    {w.title}
                  </h3>
                  <p className="mt-2.5 text-[1rem] leading-[1.55] text-muted">{w.text}</p>
                </RevealItem>
              ))}
            </RevealStagger>
          </Reveal>
          <Reveal direction="left">
            <ImageBlock
              src={media.debrisPanorama}
              alt="Debris management operations at a reservoir"
              reveal
              className="min-h-[300px] sm:min-h-[460px]"
            />
            <p className="mt-4 text-[1rem] leading-[1.6] text-muted">
              Field execution across dams, barrages and hydro-power stations — delivered for NHPC,
              NEEPCO and other operators.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Engineering-to-execution process */}
      <section id="process" className={`${sectionPad} scroll-mt-[128px]`}>
        <SectionHeading label={aboutSections.process.label} title={aboutSections.process.title} />
        <div className="mt-9 sm:mt-11">
          <FeatureRows
            items={company.capabilitySteps.map((s) => ({
              number: s.number,
              title: s.label,
              text: s.blurb,
            }))}
          />
        </div>
      </section>
    </PageTransition>
  )
}
