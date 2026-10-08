import type { Metadata } from 'next'
import { media } from '@/content/site'
import { civilHero } from '@/content/pages'
import {
  civilHomeIntro,
  civilHowItWorks,
  civilFeatures,
  civilApplications,
  civilProcess,
  civilFaq,
} from '@/content/civil'
import { PageHero } from '@/components/shared/PageHero'
import { PageTransition } from '@/components/shared/PageTransition'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal, RevealStagger, RevealItem } from '@/components/shared/Reveal'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { FAQ } from '@/components/shared/FAQ'
import { sectionPad, sectionLabel } from '@/components/shared/ui'

export const metadata: Metadata = {
  title: 'Specialized Civil Works | Basmni Technologies Pvt. Ltd.',
  description:
    'Specialized civil works from Basmni Technologies — allied civil engineering for storage dams, diversion barrages and trench-weir intakes: bedrock grouting, mass concrete and RCC works, spillways, seepage cut-offs and desilting chambers, coordinated with the hydro-mechanical scope.',
}

export default function CivilPage() {
  return (
    <PageTransition>
      <PageHero {...civilHero} />

      {/* Overview */}
      <section className={sectionPad}>
        <SectionHeading label="Overview" title="Engineered for the site" />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-[6vw]">
          {civilHomeIntro.map((p) => (
            <Reveal key={p.slice(0, 24)}>
              <p className="leading-[1.7] text-muted">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <p className={`${sectionLabel} text-blue`}>How it works</p>
        <div className="mt-4 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
          {['Study', 'Design', 'Build'].map((word) => (
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
            {civilHowItWorks.map((s) => (
              <Reveal key={s.number} className="bg-white p-6 sm:p-8">
                <h3 className="text-[clamp(1.15rem,2.2vw,1.6rem)] uppercase leading-[1.15] tracking-tightest [overflow-wrap:anywhere]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.6] text-muted">{s.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal direction="left" className="h-full">
            <ImageBlock
              src={media.civilWeirExcavatorRackPanels}
              alt="Excavator placing black trash rack panels on the concrete apron of a river weir, with water flowing over the weir behind"
              reveal
              className="aspect-[4/3] w-full lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </section>

      {/* Key features */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading
          dark
          label="Key works"
          title="Foundation, seepage, flood and works"
          deck="The parts of a water-retaining structure that decide whether it lasts — engineered per site."
        />
        <RevealStagger className="mt-9 grid grid-cols-1 gap-px border border-border bg-border sm:mt-11 sm:grid-cols-2 lg:grid-cols-3">
          {civilFeatures.map((f) => (
            <RevealItem key={f.number} className="bg-white p-6">
              <h3 className="text-[1.05rem] uppercase leading-[1.18] tracking-tightest text-blue">
                {f.title}
              </h3>
              <p className="mt-2.5 text-[1rem] leading-[1.55] text-muted">{f.text}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Applications */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading dark label="Applications" title="Where civil works are delivered" />
        <RevealStagger
          className="mt-9 grid grid-cols-1 gap-4 sm:mt-11 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {civilApplications.map((a) => (
            <RevealItem key={a.title}>
              <ImageBlock
                src={media[a.image]}
                alt={a.title}
                className="min-h-[220px] sm:min-h-[240px]"
              />
              <div className="pt-4">
                <h3 className="text-[1.05rem] uppercase leading-[1.15] tracking-tightest text-blue">
                  {a.title}
                </h3>
                <p className="mt-2 text-[1rem] leading-[1.55] text-muted">{a.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Engineering & delivery */}
      <section className={`${sectionPad} bg-white`}>
        <SectionHeading
          label="Engineering & delivery"
          title="Investigation to commissioning"
          deck={civilProcess.intro}
        />
        <div className="mt-9 sm:mt-11">
          <RevealStagger className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-5">
            {civilProcess.steps.map((step) => (
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
          {civilProcess.contexts.map((c) => (
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
          <FAQ items={civilFaq} />
        </div>
      </section>
    </PageTransition>
  )
}
