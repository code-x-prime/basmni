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
  dredgingCta,
  dredgingPartnership,
  dredgingSeries,
  dredgingAdvantages,
  dredgingCaseStudies,
  dredgingIndiaProjects,
} from '@/content/dredging'
import { PageHero } from '@/components/shared/PageHero'
import { PageTransition } from '@/components/shared/PageTransition'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTASection } from '@/components/shared/CTASection'
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
        <SectionHeading label="01 — Overview" title="Recovering storage lost to sediment." />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-[6vw]">
          {dredgingHomeIntro.map((p) => (
            <Reveal key={p.slice(0, 24)}>
              <p className="leading-[1.7] text-muted">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 sm:mt-14">
          <MetricGrid items={dredgingHeadlineMetrics} columns="sm:grid-cols-3" />
        </div>
      </section>

      {/* 02 — International partnership */}
      <section
        className={`${sectionPad} grid grid-cols-1 items-center gap-8 bg-[#dbe9fb] sm:grid-cols-[1fr_0.85fr] sm:gap-[6vw]`}
      >
        <Reveal direction="right">
          <p className={`${sectionLabel} text-blue`}>02 — International partnership</p>
          <h2 className={`${displayHeading} mt-2`}>{dredgingPartnership.title}</h2>
          <p className="mt-5 max-w-[520px] leading-[1.65] text-muted">{dredgingPartnership.text}</p>
          <ul className="mt-8 border-t border-border">
            {dredgingPartnership.points.map((p, i) => (
              <li
                key={p}
                className="flex gap-4 border-b border-border py-3 text-[0.9rem] leading-[1.55] text-muted"
              >
                <span className="shrink-0 text-[0.7rem] font-bold text-blue">
                  {String(i + 1).padStart(2, '0')}
                </span>
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
      <section className={`${sectionPad} bg-navy text-white`}>
        <SectionHeading dark label="03 — How it works" title="Fluidise. Pump. Convey." />
        <div className="mt-12 grid grid-cols-1 gap-px border border-[#2a5c94] bg-[#2a5c94] sm:mt-16 sm:grid-cols-3">
          {dredgingHowItWorks.map((s) => (
            <Reveal key={s.number} className="bg-navy p-6 sm:p-8">
              <span className="text-[0.7rem] font-bold text-ice">{s.number}</span>
              <h3 className="mt-4 text-[clamp(1.15rem,2.2vw,1.6rem)] uppercase leading-[1.15] tracking-tightest">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.88rem] leading-[1.6] text-[#c9def5]">{s.text}</p>
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
      <section className={`${sectionPad} bg-graphite text-white`}>
        <SectionHeading
          dark
          label="04 — Key features"
          title="Built for extreme conditions."
          deck="Depth, solids concentration, cutting tools and discharge distance — engineered to the reservoir."
        />
        <RevealStagger className="mt-12 grid grid-cols-1 gap-px border border-[#1f4a80] bg-[#1f4a80] sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {dredgingFeatures.map((f) => (
            <RevealItem key={f.number} className="bg-graphite p-6">
              <span className="text-[0.7rem] font-bold text-ice">{f.number}</span>
              <h3 className="mt-4 text-[0.98rem] uppercase leading-[1.18] tracking-tightest text-ice">
                {f.title}
              </h3>
              <p className="mt-2.5 text-[0.83rem] leading-[1.55] text-[#c9def5]">{f.text}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* 05 — Dredging equipment */}
      <section className="pt-6">
        <div className={`${sectionPad} pb-0`}>
          <SectionHeading
            label="05 — Dredging equipment"
            title="Equipment for extreme-depth dredging."
          />
        </div>
        {dredgingEquipment.map((item, i) => (
          <DredgingEquipmentBlock key={item.id} item={item} index={i} />
        ))}
      </section>

      {/* 06 — Dredge series */}
      <section className={`${sectionPad} bg-[#dbe9fb]`}>
        <SectionHeading
          label="06 — Dredge series"
          title="DRH, DRP and DRSP."
          deck="Three platform series — cable, remote-controlled and shallow-water — each with a fixed general arrangement."
        />
        <RevealStagger
          className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3"
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
                <p className="mt-2.5 text-[0.86rem] leading-[1.55] text-muted">{s.forWhat}</p>
                <ul className="mt-4 border-t border-border pt-3">
                  {s.components.map((c) => (
                    <li
                      key={c}
                      className="flex gap-2.5 py-1.5 text-[0.8rem] leading-[1.45] text-muted"
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
      <section className={`${sectionPad} bg-navy text-white`}>
        <SectionHeading
          dark
          label="07 — Dredging technology"
          title="The technical concept behind the depth."
        />
        <div className="mt-12 grid grid-cols-1 gap-px border border-[#2a5c94] bg-[#2a5c94] sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {dredgingTechnology.map((t, i) => (
            <Reveal key={t.title} className="bg-navy p-6 sm:p-8">
              <span className="text-[0.7rem] font-bold text-ice">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-[clamp(1.1rem,2.2vw,1.5rem)] uppercase leading-[1.15] tracking-tightest">
                {t.title}
              </h3>
              <p className="mt-2.5 text-[0.86rem] leading-[1.55] text-[#c9def5]">{t.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 08 — Why Basmni's solution */}
      <section className={sectionPad}>
        <SectionHeading
          label="08 — Why Basmni's solution"
          title="High depth, small dredge, fast on site."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-[6vw]">
          {dredgingAdvantages.map((a) => (
            <Reveal key={a.title}>
              <h3 className="border-t-2 border-orange pt-4 text-[1.15rem] uppercase leading-[1.15] tracking-tightest text-navy">
                {a.title}
              </h3>
              <ul className="mt-4">
                {a.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 border-b border-border py-3 text-[0.88rem] leading-[1.55] text-muted"
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
      <section className={`${sectionPad} bg-graphite text-white`}>
        <SectionHeading
          dark
          label="09 — Case studies"
          title="Proven on dams in service."
          deck="Selected deep-dam-dredging campaigns delivered with the dam kept in full operation."
        />
        <RevealStagger
          className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3"
          stagger={0.08}
        >
          {dredgingCaseStudies.map((c) => (
            <RevealItem key={c.location} className="flex flex-col border border-[#1f4a80]">
              <ImageBlock
                src={media[c.image]}
                alt={`${c.location}, ${c.country}`}
                className="aspect-[16/10]"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-ice">
                  {c.country} · {c.depth}
                </span>
                <h3 className="mt-2 text-[1.05rem] uppercase leading-[1.15] tracking-tightest text-ice">
                  {c.location}
                </h3>
                <p className="mt-2.5 text-[0.84rem] leading-[1.55] text-[#c9def5]">{c.summary}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
        <p className="mt-10 text-[0.86rem] leading-[1.6] text-[#c9def5]">
          Dam-dredging project references in India include {dredgingIndiaProjects.join(', ')}.
        </p>
      </section>

      {/* 10 — Applications */}
      <section className={`${sectionPad} bg-[#dbe9fb]`}>
        <SectionHeading
          label="10 — Applications"
          title="Where dredging is needed."
          deck="From dead-storage recovery to canal systems — matched to the site and disposal constraints."
        />
        <RevealStagger
          className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
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
                <p className="mt-2 text-[0.86rem] leading-[1.55] text-muted">{a.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* 11 — Engineering & delivery */}
      <section className={`${sectionPad} bg-navy text-white`}>
        <SectionHeading dark label="11 — Engineering & delivery" title="Survey to handover." />
        <p className="ml-auto mt-6 max-w-[420px] leading-[1.6] text-[#c9def5]">
          {dredgingProcess.intro}
        </p>
        <div className="mt-12 sm:mt-16">
          <RevealStagger className="grid grid-cols-1 gap-px border border-[#2a5c94] bg-[#2a5c94] sm:grid-cols-5">
            {dredgingProcess.steps.map((step, i) => (
              <RevealItem key={step} className="bg-navy p-6 sm:p-7">
                <span className="text-[0.7rem] font-bold text-ice">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-[clamp(1.1rem,2vw,1.5rem)] uppercase leading-[1.1] tracking-tightest">
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
              className="border border-[#2a5c94] px-3 py-2 text-[0.68rem] uppercase tracking-[0.08em] text-[#c9def5]"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* 12 — FAQ */}
      <section className={sectionPad}>
        <SectionHeading label="12 — FAQ" title="Common questions." />
        <div className="mt-12 sm:mt-16">
          <FAQ items={dredgingFaq} />
        </div>
      </section>

      <CTASection
        eyebrow="Start a conversation"
        title={dredgingCta.title}
        emphasis={dredgingCta.emphasis}
        description={dredgingCta.description}
        image={media.spillway}
        imageAlt="Misty reservoir and spillway infrastructure"
        primary={{ label: 'Discuss Your Project', href: '/contact' }}
        secondary={{ label: 'View References', href: '/references' }}
      />
    </PageTransition>
  )
}
