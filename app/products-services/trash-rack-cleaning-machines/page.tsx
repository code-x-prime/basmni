import type { Metadata } from 'next'
import { media } from '@/content/site'
import { trcmHero } from '@/content/pages'
import {
  trcmHomeIntro,
  trcmHowItWorks,
  trcmFeatures,
  trcmConfigurations,
  trcmProcess,
  trcmHeadlineMetrics,
  trcmComponents,
  trcmRoi,
  trcmFaq,
} from '@/content/trcm'
import { PageHero } from '@/components/shared/PageHero'
import { PageTransition } from '@/components/shared/PageTransition'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal, RevealStagger, RevealItem } from '@/components/shared/Reveal'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { FAQ } from '@/components/shared/FAQ'
import { MetricGrid } from '@/components/shared/blocks'
import { sectionPad, sectionLabel } from '@/components/shared/ui'

export const metadata: Metadata = {
  title: 'Trash Rack Cleaning Machines (TRCM) | Basmni Technologies Pvt. Ltd.',
  description:
    'Trash rack cleaning machines from Basmni Technologies — automated hydraulic and wire-rope debris removal for hydropower intakes, barrages, canals and pumping stations, plus log boom barriers. Head-loss protection, machine types, components, ROI, applications and installation.',
}

export default function TrcmPage() {
  return (
    <PageTransition>
      <PageHero {...trcmHero} />

      {/* Overview */}
      <section className={sectionPad}>
        <SectionHeading label="Overview" title="Keeping the intake bay clear" />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-[6vw]">
          {trcmHomeIntro.map((p) => (
            <Reveal key={p.slice(0, 24)}>
              <p className="leading-[1.7] text-muted">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 sm:mt-10">
          <MetricGrid items={trcmHeadlineMetrics} columns="sm:grid-cols-4" />
        </div>
      </section>

      {/* How it works */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <p className={`${sectionLabel} text-blue`}>How it works</p>
        <div className="mt-4 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
          {['Detect', 'Rake', 'Discharge'].map((word) => (
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
        <div className="mt-9 grid grid-cols-1 gap-8 sm:mt-11 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[6vw]">
          <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-1">
            {trcmHowItWorks.map((s) => (
              <Reveal key={s.number} className="bg-white p-6 sm:p-8">
                <h3 className="text-[clamp(1.15rem,2.2vw,1.6rem)] uppercase leading-[1.15] tracking-tightest [overflow-wrap:anywhere]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.6] text-muted">{s.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal direction="left">
            <ImageBlock
              src={media.trcmBlueMachineCloseup}
              alt="Blue trash rack cleaning machine on rails at a dam intake, with the grab raised"
              reveal
              className="aspect-square w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* Key features */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading
          dark
          label="Key features"
          title="Automated and matched to the intake"
          deck="The mechanism is chosen for the depth, channel and debris — not one machine for every site."
        />
        <RevealStagger className="mt-9 grid grid-cols-1 gap-px border border-border bg-border sm:mt-11 sm:grid-cols-2 lg:grid-cols-3">
          {trcmFeatures.map((f) => (
            <RevealItem key={f.number} className="bg-white p-6">
              <h3 className="text-[1.05rem] uppercase leading-[1.18] tracking-tightest text-blue">
                {f.title}
              </h3>
              <p className="mt-2.5 text-[1rem] leading-[1.55] text-muted">{f.text}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Configurations */}
      <section className={`${sectionPad} bg-white`}>
        <SectionHeading label="Configurations" title="Three ways to keep a rack clean" />
        <RevealStagger
          className="mt-9 grid grid-cols-1 gap-4 sm:mt-11 sm:grid-cols-3"
          stagger={0.08}
        >
          {trcmConfigurations.map((c) => (
            <RevealItem key={c.title}>
              <ImageBlock
                src={media[c.image]}
                alt={c.title}
                objectFit="contain"
                className="min-h-[240px] bg-background sm:min-h-[280px]"
              />
              <div className="pt-4">
                <h3 className="text-[1.05rem] uppercase leading-[1.15] tracking-tightest text-navy">
                  {c.title}
                </h3>
                <p className="mt-2 text-[1rem] leading-[1.55] text-muted">{c.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Key components */}
      <section className={sectionPad}>
        <SectionHeading
          label="Key components"
          title="What a cleaning machine is made of"
          deck="Five sub-assemblies work together to rake the screen, move along the intake and carry the debris off site."
        />
        <RevealStagger className="mt-9 grid grid-cols-1 gap-px border border-border bg-border sm:mt-11 sm:grid-cols-2 lg:grid-cols-3">
          {trcmComponents.map((c) => (
            <RevealItem key={c.title} className="bg-background p-6 sm:p-7">
              <h3 className="text-[1.05rem] uppercase leading-[1.15] tracking-tightest text-navy">
                {c.title}
              </h3>
              <p className="mt-2.5 text-[1rem] leading-[1.55] text-muted">{c.text}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>


      {/* ROI comparison */}
      <section className={sectionPad}>
        <SectionHeading
          label="Direct ROI"
          title="Operating with and without a machine"
          deck="The return shows up as recovered capacity, lower maintenance, safer work and flood-season uptime."
        />
        {/* Mobile: stacked comparison cards */}
        <div className="mt-9 space-y-4 sm:hidden">
          {trcmRoi.map((r) => (
            <div key={r.benefit} className="border border-border p-4">
              <h3 className="text-[0.8rem] font-bold uppercase tracking-tightest text-navy">
                {r.benefit}
              </h3>
              <div className="mt-3 space-y-3">
                <div>
                  <span className="block text-[0.6rem] font-bold uppercase tracking-[0.12em] text-muted">
                    Without a TRCM
                  </span>
                  <p className="mt-1 text-[0.95rem] leading-[1.5] text-muted">{r.without}</p>
                </div>
                <div className="rounded bg-blue/10 p-3">
                  <span className="block text-[0.6rem] font-bold uppercase tracking-[0.12em] text-blue">
                    With a TRCM
                  </span>
                  <p className="mt-1 text-[0.95rem] font-semibold leading-[1.5] text-navy">{r.with}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: comparison table */}
        <div className="mt-9 hidden overflow-x-auto sm:mt-11 sm:block">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="w-[26%] py-3.5 pr-4 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-muted">
                  Operational benefit
                </th>
                <th className="w-[37%] px-4 py-3.5 text-center text-[0.78rem] font-bold uppercase tracking-[0.12em] text-muted">
                  Without a TRCM
                </th>
                <th className="w-[37%] px-4 py-3.5 text-center text-[0.78rem] font-bold uppercase tracking-[0.12em] text-blue">
                  <span className="rounded bg-blue px-3 py-1.5 text-white">With a TRCM</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {trcmRoi.map((r) => (
                <tr key={r.benefit} className="border-b border-border align-top">
                  <td className="py-4 pr-4 text-[0.8rem] font-bold uppercase tracking-tightest text-navy">
                    {r.benefit}
                  </td>
                  <td className="px-4 py-4 text-center text-[1rem] leading-[1.55] text-muted">
                    {r.without}
                  </td>
                  <td className="bg-blue/10 px-4 py-4 text-center text-[1rem] font-semibold leading-[1.55] text-navy">
                    {r.with}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Engineering & delivery */}
      <section className={`${sectionPad} bg-white`}>
        <SectionHeading
          label="Engineering & delivery"
          title="Survey to commissioning"
          deck={trcmProcess.intro}
        />
        <Reveal className="mx-auto mt-9 max-w-7xl sm:mt-11">
          <ImageBlock
            src={media.trcmTeamSiteVisit}
            alt="Basmni engineering team on-site at a hydropower reservoir installation"
            reveal
            className="aspect-[16/9] w-full"
          />
        </Reveal>
        <div className="mt-9 sm:mt-11">
          <RevealStagger className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-5">
            {trcmProcess.steps.map((step) => (
              <RevealItem
                key={step}
                className="flex items-center justify-center bg-white px-6 py-10 text-center sm:py-14"
              >
                <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] uppercase leading-[1.1] tracking-tightest text-navy">
                  {step}
                </h3>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
        <div className="mt-10 flex flex-wrap gap-2.5">
          {trcmProcess.contexts.map((c) => (
            <span
              key={c}
              className="border border-border px-3 py-2 text-[0.68rem] uppercase tracking-[0.08em] text-muted"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={sectionPad}>
        <SectionHeading label="FAQ" title="Common questions" />
        <div className="mt-9 sm:mt-11">
          <FAQ items={trcmFaq} />
        </div>
      </section>
    </PageTransition>
  )
}
