import type { Metadata } from 'next'
import { media } from '@/content/site'
import { dredgingHero } from '@/content/pages'
import { dredgingEquipment, dredgingTechnology } from '@/content/services'
import {
  dredgingHomeIntro,
  dredgingHowItWorks,
  dredgingFeatures,
  dredgingProcess,
  dredgingHeadlineMetrics,
  dredgingFaq,
  dredgingPartnership,
  dredgingAdvantages,
} from '@/content/dredging'
import { PageHero } from '@/components/shared/PageHero'
import { PageTransition } from '@/components/shared/PageTransition'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal, RevealStagger, RevealItem } from '@/components/shared/Reveal'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { FAQ } from '@/components/shared/FAQ'
import { MetricGrid } from '@/components/shared/blocks'
import { DredgingEquipmentBlock } from '@/components/services/DredgingEquipmentBlock'
import { sectionPad, sectionLabel, displayHeading } from '@/components/shared/ui'

export const metadata: Metadata = {
  title: 'Deep Dam & Reservoir Dredging | Basmni Technologies Pvt. Ltd.',
  description:
    'Deep dam and reservoir dredging from Basmni Technologies — end-to-end sediment removal at depths to around 100 m, 35–60% solids handling and long-distance discharge, built on a technical partnership with Dragflow s.r.l. of Italy. DRH, DRP and DRSP dredge series, technology, field case studies, applications and process.',
}

export default function DredgingPage() {
  return (
    <PageTransition>
      <PageHero {...dredgingHero} />

      {/* 01 — Overview */}
      <section className={sectionPad}>
        <SectionHeading label="Overview" title="Recovering storage lost to sediment" />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-[6vw]">
          {dredgingHomeIntro.map((p) => (
            <Reveal key={p.slice(0, 24)}>
              <p className="leading-[1.7] text-muted">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 sm:mt-10">
          <MetricGrid items={dredgingHeadlineMetrics} columns="sm:grid-cols-3" />
        </div>
      </section>

      {/* 02 — International partnership */}
      <section
        className={`${sectionPad} grid grid-cols-1 items-center gap-8 bg-white sm:grid-cols-[1fr_0.85fr] sm:gap-[6vw]`}
      >
        <Reveal direction="right">
          <p className={`${sectionLabel} text-blue`}>International partnership</p>
          <h2 className={`${displayHeading} mt-2`}>{dredgingPartnership.title}</h2>
          <p className="mt-5 max-w-[520px] leading-[1.65] text-muted">{dredgingPartnership.text}</p>
          <ul className="mt-8 border-t border-border">
            {dredgingPartnership.points.map((p) => (
              <li
                key={p}
                className="flex gap-4 border-b border-border py-3 text-[1rem] leading-[1.55] text-muted"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-blue" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal direction="left">
          <ImageBlock
            src={media.dredgeOperatorRemoteReservoir}
            alt="Operator controlling a dredge by remote from the dam wall, with the dredge working in the reservoir"
            reveal
            objectFit="contain"
            className="min-h-[320px] bg-background sm:min-h-[440px]"
          />
        </Reveal>
      </section>

      {/* 03 — How it works */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <p className={`${sectionLabel} text-blue`}>How it works</p>
        <div className="mt-4 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
          {['Fluidise', 'Pump', 'Convey'].map((word) => (
            <Reveal
              key={word}
              className="flex items-center justify-center bg-white px-6 py-8 text-center sm:py-12"
            >
              <h2 className="text-[clamp(1.6rem,3.6vw,2.8rem)] uppercase leading-[1.1] tracking-tightest text-blue">
                {word}
              </h2>
            </Reveal>
          ))}
        </div>
        <div className="mt-9 grid grid-cols-1 gap-px border border-border bg-border sm:mt-11 sm:grid-cols-3">
          {dredgingHowItWorks.map((s) => (
            <Reveal key={s.number} className="bg-white p-6 sm:p-8">
              <h3 className="text-[clamp(1.15rem,2.2vw,1.6rem)] uppercase leading-[1.15] tracking-tightest [overflow-wrap:anywhere]">
                {s.title}
              </h3>
              <p className="mt-3 text-[1rem] leading-[1.6] text-muted">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Image band */}
      <div className={`${sectionPad} bg-white`}>
        <Reveal className="mx-auto max-w-5xl">
          <ImageBlock
            src={media.dredgeCableBargeReal}
            alt="Blue Dragflow cable dredge barge with tripod frame working on a reservoir"
            reveal
            className="aspect-[3/2] w-full"
          />
        </Reveal>
      </div>

      {/* 04 — Key features */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading
          dark
          label="Key features"
          title="Built for extreme conditions"
          deck="Depth, solids concentration, cutting tools and discharge distance — engineered to the reservoir."
        />
        <RevealStagger className="mt-9 grid grid-cols-1 gap-px border border-border bg-border sm:mt-11 sm:grid-cols-2 lg:grid-cols-3">
          {dredgingFeatures.map((f) => (
            <RevealItem key={f.number} className="bg-white p-6">
              <h3 className="text-[1.05rem] uppercase leading-[1.18] tracking-tightest text-blue">
                {f.title}
              </h3>
              <p className="mt-2.5 text-[1rem] leading-[1.55] text-muted">{f.text}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* 05 — Dredging equipment */}
      <section className="pt-6">
        <div className={`${sectionPad} pb-0`}>
          <SectionHeading
            label="Dredging equipment"
            title="Equipment for extreme-depth dredging"
          />
        </div>
        {dredgingEquipment.map((item, i) => (
          <DredgingEquipmentBlock key={item.id} item={item} index={i} />
        ))}
      </section>

      {/* 07 — Dredging technology */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading
          dark
          label="Dredging technology"
          title="The technical concept behind the depth"
        />
        <div className="mt-9 grid grid-cols-1 gap-px border border-border bg-border sm:mt-11 sm:grid-cols-2 lg:grid-cols-3">
          {dredgingTechnology.map((t) => (
            <Reveal key={t.title} className="bg-white p-6 sm:p-8">
              <h3 className="text-[clamp(1.1rem,2.2vw,1.5rem)] uppercase leading-[1.15] tracking-tightest [overflow-wrap:anywhere]">
                {t.title}
              </h3>
              <p className="mt-2.5 text-[1rem] leading-[1.55] text-muted">{t.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 08 — Why Basmni's solution */}
      <section className={sectionPad}>
        <SectionHeading
          label="Why Basmni's solution"
          title="High depth, small dredge, fast on site"
        />
        <div className="mt-9 grid grid-cols-1 gap-8 sm:mt-11 sm:grid-cols-2 sm:gap-[6vw]">
          {dredgingAdvantages.map((a) => (
            <Reveal key={a.title}>
              <h3 className="border-t-2 border-orange pt-4 text-[1.15rem] uppercase leading-[1.15] tracking-tightest text-navy">
                {a.title}
              </h3>
              <ul className="mt-4">
                {a.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 border-b border-border py-3 text-[1rem] leading-[1.55] text-muted"
                  >
                    <span className="mt-0.5 shrink-0 text-blue">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 11 — Engineering & delivery */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading dark label="Engineering & delivery" title="Survey to handover" />
        <p className="ml-auto mt-6 max-w-[420px] leading-[1.6] text-muted">
          {dredgingProcess.intro}
        </p>
        <div className="mt-9 sm:mt-11">
          <RevealStagger className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-5">
            {dredgingProcess.steps.map((step) => (
              <RevealItem
                key={step}
                className="flex items-center justify-center bg-white px-6 py-10 text-center sm:py-14"
              >
                <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] uppercase leading-[1.1] tracking-tightest [overflow-wrap:anywhere]">
                  {step}
                </h3>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
        <div className="mt-10 flex flex-wrap gap-2.5">
          {dredgingProcess.contexts.map((c) => (
            <span
              key={c}
              className="border border-border px-3 py-2 text-[0.68rem] uppercase tracking-[0.08em] text-muted"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* 12 — FAQ */}
      <section className={sectionPad}>
        <SectionHeading label="FAQ" title="Common questions" />
        <div className="mt-9 sm:mt-11">
          <FAQ items={dredgingFaq} />
        </div>
      </section>
    </PageTransition>
  )
}
