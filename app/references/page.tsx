import type { Metadata } from 'next'
import { media } from '@/content/site'
import { featuredProjects, projectStats } from '@/content/projects'
import { referencesHero, referencesSections } from '@/content/pages'
import { PageHero } from '@/components/shared/PageHero'
import { PageTransition } from '@/components/shared/PageTransition'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal } from '@/components/shared/Reveal'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { ReferencesGrid } from '@/components/projects/ReferencesGrid'
import { FieldArchive } from '@/components/projects/FieldArchive'
import { sectionPad } from '@/components/shared/ui'

export const metadata: Metadata = {
  title: 'Project References | Basmni Technologies Pvt. Ltd.',
  description:
    'Selected hydro-mechanical, dredging and civil engineering projects delivered by Basmni Technologies across India for NHPC, NEEPCO and other operators — trash rack systems, trench weir modifications, desilting works and floating boom installations.',
}

export default function ReferencesPage() {
  return (
    <PageTransition>
      <PageHero {...referencesHero} />

      {/* Portfolio stats */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading
          dark
          label={referencesSections.stats.label}
          title={referencesSections.stats.title}
        />
        <div className="mt-9 grid grid-cols-2 gap-4 border-t border-border sm:mt-11 sm:grid-cols-4">
          {projectStats.map((s) => (
            <Reveal key={s.label}>
              <div className="border-r border-border py-4">
                <AnimatedCounter
                  value={s.value}
                  className="block text-[2.4rem] tracking-[-0.08em] text-blue sm:text-[clamp(2.4rem,5vw,4.6rem)]"
                />
                <span className="text-[0.65rem] uppercase tracking-[0.1em] text-muted">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Before / after */}
      <section className={`${sectionPad} bg-white`}>
        <SectionHeading
          label="Before / after"
          title="Bhaledh trench weir — Baira Siul."
          deck="Desilting and civil restoration of the trench weir apron: from a silted, worn intake bay to a rebuilt apron with modified trash-rack screens and restored flow."
        />
        <div className="mt-9 grid grid-cols-1 gap-4 sm:mt-11 sm:grid-cols-2 sm:gap-6">
          <Reveal direction="right">
            <figure className="relative overflow-hidden">
              <ImageBlock
                src={media.refBhaledhBefore}
                alt="Excavator desilting the drained, silt-choked trench weir intake bay at Bhaledh"
                reveal
                className="aspect-[4/3]"
              />
              <figcaption className="absolute left-4 top-4 bg-white/95 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-blue">
                Before &mdash; desilting in progress
              </figcaption>
            </figure>
          </Reveal>
          <Reveal direction="left">
            <figure className="relative overflow-hidden">
              <ImageBlock
                src={media.refBhaledhAfter}
                alt="Rebuilt trench weir apron with new screen panels and restored water flow at Bhaledh"
                reveal
                className="aspect-[4/3]"
              />
              <figcaption className="absolute left-4 top-4 bg-white/95 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-blue">
                After &mdash; apron &amp; screens restored
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Featured projects */}
      <section className={sectionPad}>
        <SectionHeading
          label={referencesSections.featured.label}
          title={referencesSections.featured.title}
        />
        <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-12 sm:mt-11 sm:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.id} direction={i % 2 === 0 ? 'right' : 'left'}>
              <article className="group">
                <ImageBlock
                  src={media[p.image]}
                  alt={p.name}
                  reveal
                  className="min-h-[260px] sm:min-h-[340px]"
                />
                <div className="pt-4">
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-blue">
                    {p.category} · {p.year}
                  </span>
                  <h3 className="mt-1.5 text-[1.25rem] leading-[1.2] tracking-tightest sm:text-[1.4rem]">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[1rem] leading-[1.55] text-muted">{p.scope}</p>
                  {p.contractNo && (
                    <p className="mt-3 text-[0.66rem] uppercase tracking-[0.06em] text-muted/80">
                      Contract {p.contractNo}
                      {p.awardDate ? ` · Awarded ${p.awardDate}` : ''}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Browse — full filterable project list */}
      <ReferencesGrid label="Browse" title="All reference projects." />

      {/* Field photography */}
      <section className={`${sectionPad} bg-white text-navy`}>
        <SectionHeading
          dark
          label={referencesSections.gallery.label}
          title={referencesSections.gallery.title}
          deck="Hydro-mechanical installation, dredging and debris-management work photographed on live project sites across India."
        />
        <FieldArchive
          items={[
            {
              src: media.hero,
              title: 'Hydro-mechanical installation',
              caption: 'Himalayan valley project site',
            },
            {
              src: media.dredging,
              title: 'Reservoir intake dredging',
              caption: 'Sediment removal at the intake',
            },
            {
              src: media.trcm,
              title: 'Trash rack cleaning machines',
              caption: 'Hydraulic TRCM on site',
            },
            {
              src: media.civilTrenchWeirIntake,
              title: 'Trench-weir intake structure',
              caption: 'Embedded screens in a diversion channel',
            },
            {
              src: media.civilFoundationExcavation,
              title: 'Dam foundation excavation',
              caption: 'Dewatered riverbed preparation',
            },
            {
              src: media.civilSteelDeliverySite,
              title: 'Embedded steel to site',
              caption: 'Fabricated sections on the hill road',
            },
          ]}
        />
      </section>
    </PageTransition>
  )
}
