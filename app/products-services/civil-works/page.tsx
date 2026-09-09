import type { Metadata } from 'next'
import { media } from '@/content/site'
import { civilHero } from '@/content/pages'
import {
  civilHomeIntro,
  civilHowItWorks,
  civilFeatures,
  civilStructures,
  civilApplications,
  civilProcess,
  civilHeadlineMetrics,
  civilFaq,
} from '@/content/civil'
import { PageHero } from '@/components/shared/PageHero'
import { PageTransition } from '@/components/shared/PageTransition'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal, RevealStagger, RevealItem } from '@/components/shared/Reveal'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { FAQ } from '@/components/shared/FAQ'
import { MetricGrid } from '@/components/shared/blocks'
import { sectionPad } from '@/components/shared/ui'

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
        <SectionHeading label="Overview" title="Engineered for the site, not the drawing." />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-[6vw]">
          {civilHomeIntro.map((p) => (
            <Reveal key={p.slice(0, 24)}>
              <p className="leading-[1.7] text-muted">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 sm:mt-10">
          <MetricGrid items={civilHeadlineMetrics} columns="sm:grid-cols-3" />
        </div>
      </section>

      {/* How it works */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading
          dark
          label="How it works"
          title="Read the site. Treat the foundation. Pass water."
        />
        <div className="mt-9 grid grid-cols-1 gap-px border border-border bg-border sm:mt-11 sm:grid-cols-3">
          {civilHowItWorks.map((s) => (
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
        src={media.civilTrashRackPanels}
        alt="Long embedded steel screen panels set into a dewatered concrete intake structure"
        parallax
        sizes="100vw"
        className="h-[42vh] min-h-[280px] sm:h-[56vh]"
      />

      {/* Key features */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading
          dark
          label="Key features"
          title="Foundation, seepage, flood and fit."
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

      {/* Structure types */}
      <section className={`${sectionPad} bg-white`}>
        <SectionHeading label="Structure types" title="Three settings, three structures." />
        <RevealStagger
          className="mt-9 grid grid-cols-1 gap-4 sm:mt-11 sm:grid-cols-3"
          stagger={0.08}
        >
          {civilStructures.map((c) => (
            <RevealItem key={c.title}>
              <ImageBlock
                src={media[c.image]}
                alt={c.title}
                className="min-h-[220px] sm:min-h-[260px]"
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

      {/* Applications */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading dark label="Applications" title="Where civil works are delivered." />
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
        <SectionHeading label="Engineering & delivery" title="Investigation to commissioning." />
        <p className="ml-auto mt-6 max-w-[420px] leading-[1.6] text-muted">{civilProcess.intro}</p>
        <div className="mt-9 sm:mt-11">
          <RevealStagger className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-5">
            {civilProcess.steps.map((step) => (
              <RevealItem key={step} className="bg-white p-6 text-center sm:p-7">
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
        <SectionHeading label="FAQ" title="Common questions." />
        <div className="mt-9 sm:mt-11">
          <FAQ items={civilFaq} />
        </div>
      </section>
    </PageTransition>
  )
}
