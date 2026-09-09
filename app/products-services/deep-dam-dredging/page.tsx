import type { Metadata } from 'next'
import { media } from '@/content/site'
import { dredgingHero } from '@/content/pages'
import { dredgingEquipment, dredgingTechnology } from '@/content/services'
import {
  dredgingHomeIntro,
  dredgingHowItWorks,
  dredgingFeatures,
  dredgingApplications,
  dredgingProcess,
  dredgingHeadlineMetrics,
  dredgingFaq,
  dredgingPartnership,
  dredgingSeries,
  dredgingAdvantages,
  dredgingCaseStudies,
  dredgingIndiaProjects,
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
        <SectionHeading label="Overview" title="Recovering storage lost to sediment." />
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
            src={media.dredgeDragflowMachine}
            alt="Dragflow submersible dredge machine on a pontoon in a reservoir"
            reveal
            className="min-h-[320px] sm:min-h-[440px]"
          />
        </Reveal>
      </section>

      {/* 03 — How it works */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading dark label="How it works" title="Fluidise. Pump. Convey." />
        <div className="mt-9 grid grid-cols-1 gap-px border border-border bg-border sm:mt-11 sm:grid-cols-3">
          {dredgingHowItWorks.map((s) => (
            <Reveal key={s.number} className="bg-white p-6 sm:p-8">
              <h3 className="text-[clamp(1.15rem,2.2vw,1.6rem)] uppercase leading-[1.15] tracking-tightest">
                {s.title}
              </h3>
              <p className="mt-3 text-[1rem] leading-[1.6] text-muted">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Image band */}
      <ImageBlock
        src={media.dredgeReservoirValley}
        alt="Reservoir and dam in a green valley during a dredging campaign"
        parallax
        sizes="100vw"
        className="h-[42vh] min-h-[280px] sm:h-[56vh]"
      />

      {/* 04 — Key features */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading
          dark
          label="Key features"
          title="Built for extreme conditions."
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
            title="Equipment for extreme-depth dredging."
          />
        </div>
        {dredgingEquipment.map((item, i) => (
          <DredgingEquipmentBlock key={item.id} item={item} index={i} />
        ))}
      </section>

      {/* 06 — Dredge series */}
      <section className={`${sectionPad} bg-white`}>
        <SectionHeading
          label="Dredge series"
          title="DRH, DRP and DRSP."
          deck="Three platform series — cable, remote-controlled and shallow-water — each with a fixed general arrangement."
        />
        <RevealStagger
          className="mt-9 grid grid-cols-1 gap-4 sm:mt-11 sm:grid-cols-3"
          stagger={0.08}
        >
          {dredgingSeries.map((s) => (
            <RevealItem key={s.code} className="flex flex-col border border-border bg-background">
              <ImageBlock
                src={media[s.image]}
                alt={`${s.code} — ${s.title}`}
                className="aspect-[16/10]"
              />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-[0.7rem] font-bold tracking-[0.14em] text-blue">
                  {s.code}
                </span>
                <h3 className="mt-2 text-[1.05rem] uppercase leading-[1.15] tracking-tightest text-navy">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[1rem] leading-[1.55] text-muted">{s.forWhat}</p>
                <ul className="mt-4 border-t border-border pt-3">
                  {s.components.map((c) => (
                    <li
                      key={c}
                      className="flex gap-2.5 py-1.5 text-[0.95rem] leading-[1.5] text-muted"
                    >
                      <span className="mt-0.5 shrink-0 text-blue">—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* 07 — Dredging technology */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading
          dark
          label="Dredging technology"
          title="The technical concept behind the depth."
        />
        <div className="mt-9 grid grid-cols-1 gap-px border border-border bg-border sm:mt-11 sm:grid-cols-2 lg:grid-cols-3">
          {dredgingTechnology.map((t) => (
            <Reveal key={t.title} className="bg-white p-6 sm:p-8">
              <h3 className="text-[clamp(1.1rem,2.2vw,1.5rem)] uppercase leading-[1.15] tracking-tightest">
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
          title="High depth, small dredge, fast on site."
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

      {/* 09 — Case studies */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading
          dark
          label="Case studies"
          title="Proven on dams in service."
          deck="Selected deep-dam-dredging campaigns delivered with the dam kept in full operation."
        />
        <RevealStagger
          className="mt-9 grid grid-cols-1 gap-4 sm:mt-11 sm:grid-cols-3"
          stagger={0.08}
        >
          {dredgingCaseStudies.map((c) => (
            <RevealItem key={c.location} className="flex flex-col border border-border">
              <ImageBlock
                src={media[c.image]}
                alt={`${c.location}, ${c.country}`}
                className="aspect-[16/10]"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue">
                  {c.country} · {c.depth}
                </span>
                <h3 className="mt-2 text-[1.05rem] uppercase leading-[1.15] tracking-tightest text-blue">
                  {c.location}
                </h3>
                <p className="mt-2.5 text-[1rem] leading-[1.55] text-muted">{c.summary}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
        <p className="mt-10 text-[1rem] leading-[1.6] text-muted">
          Dam-dredging project references in India include {dredgingIndiaProjects.join(', ')}.
        </p>
      </section>

      {/* 10 — Applications */}
      <section className={`${sectionPad} bg-white`}>
        <SectionHeading
          label="Applications"
          title="Where dredging is needed."
          deck="From dead-storage recovery to canal systems — matched to the site and disposal constraints."
        />
        <RevealStagger
          className="mt-9 grid grid-cols-1 gap-4 sm:mt-11 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {dredgingApplications.map((a) => (
            <RevealItem key={a.title}>
              <ImageBlock
                src={media[a.image]}
                alt={a.title}
                className="min-h-[220px] sm:min-h-[240px]"
              />
              <div className="pt-4">
                <h3 className="text-[1.05rem] uppercase leading-[1.15] tracking-tightest text-navy">
                  {a.title}
                </h3>
                <p className="mt-2 text-[1rem] leading-[1.55] text-muted">{a.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* 11 — Engineering & delivery */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading dark label="Engineering & delivery" title="Survey to handover." />
        <p className="ml-auto mt-6 max-w-[420px] leading-[1.6] text-muted">
          {dredgingProcess.intro}
        </p>
        <div className="mt-9 sm:mt-11">
          <RevealStagger className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-5">
            {dredgingProcess.steps.map((step) => (
              <RevealItem key={step} className="bg-white p-6 sm:p-7">
                <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] uppercase leading-[1.1] tracking-tightest">
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
        <SectionHeading label="FAQ" title="Common questions." />
        <div className="mt-9 sm:mt-11">
          <FAQ items={dredgingFaq} />
        </div>
      </section>
    </PageTransition>
  )
}
