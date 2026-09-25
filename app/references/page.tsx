import type { Metadata } from 'next'
import { media } from '@/content/site'
import { referencesHero, referencesSections } from '@/content/pages'
import { PageHero } from '@/components/shared/PageHero'
import { PageTransition } from '@/components/shared/PageTransition'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal } from '@/components/shared/Reveal'
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

      {/* Before / after */}
      <section className={`${sectionPad} bg-white`}>
        <SectionHeading
          label="Before / after"
          title="Bhaledh trench weir — Baira Siul"
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

      {/* Before / after — Indira Sagar */}
      <section className={`${sectionPad} bg-white`}>
        <SectionHeading
          label="Before / after"
          title="Indira Sagar civil works"
          deck="Foundation excavation through rock, rebar cage tied in place and the poured, cured intake shaft — a single civil structure from bare pit to finished pour."
        />
        <div className="mt-9 grid grid-cols-1 gap-4 sm:mt-11 sm:grid-cols-2 sm:gap-6">
          <Reveal direction="right">
            <figure className="relative overflow-hidden">
              <ImageBlock
                src={media.refIndirasagarBefore}
                alt="Rebar cage being tied inside the excavated intake shaft pit at Indira Sagar"
                reveal
                className="aspect-[4/3]"
              />
              <figcaption className="absolute left-4 top-4 bg-white/95 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-blue">
                Before &mdash; excavation &amp; rebar
              </figcaption>
            </figure>
          </Reveal>
          <Reveal direction="left">
            <figure className="relative overflow-hidden">
              <ImageBlock
                src={media.refIndirasagarAfter}
                alt="Completed circular concrete intake shaft cast in place at Indira Sagar"
                reveal
                className="aspect-[4/3]"
              />
              <figcaption className="absolute left-4 top-4 bg-white/95 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-blue">
                After &mdash; shaft cast &amp; cured
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Browse — full filterable project list */}
      <ReferencesGrid label="Browse" title="All reference projects" />

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
              src: media.spillwayTrashRackExcavator,
              title: 'Trash rack panel installation',
              caption: 'Excavator placing rack panels at a spillway intake',
            },
            {
              src: media.riverWeirExcavatorWork,
              title: 'River weir construction',
              caption: 'Excavator work at a live weir crossing',
            },
            {
              src: media.circularShaftRebarPour,
              title: 'Circular intake shaft',
              caption: 'Rebar cage and formwork on a cast concrete shaft',
            },
            {
              src: media.shaftRebarCageTeam,
              title: 'Rebar cage assembly',
              caption: 'Team tying rebar inside an excavated foundation shaft',
            },
            {
              src: media.shaftDesiltingWorkers,
              title: 'Foundation shaft desilting',
              caption: 'Manual desilting inside a deep excavated shaft',
            },
            {
              src: media.excavatorRockCutting,
              title: 'Rock excavation',
              caption: 'Excavator cutting through rock at a foundation site',
            },
            {
              src: media.intakeGateExcavatorInstall,
              title: 'Intake gate installation',
              caption: 'Excavator lowering a trash rack gate into a dam intake channel',
            },
            {
              src: media.tunnelDesiltingCrew,
              title: 'Tunnel desilting',
              caption: 'Crew clearing sediment inside a diversion tunnel',
            },
            {
              src: media.sandDeliveryTruckSite,
              title: 'Material delivery',
              caption: 'Sand delivery to a civil works site',
            },
            {
              src: media.pipeCraneInstallation,
              title: 'Trench-weir intake structure',
              caption: 'Embedded screens in a diversion channel',
            },
            {
              src: media.civilPipesCraneRiverside,
              title: 'Pipeline installation',
              caption: 'Crane-lifted flanged pipe at a riverside site',
            },
            {
              src: media.civilPipesCraneHillside,
              title: 'Pipeline installation',
              caption: 'Flanged pipe delivery on a hillside access road',
            },
            {
              src: media.civilPipeStackRiverside,
              title: 'Fabricated pipe stockyard',
              caption: 'Flanged steel pipe staged for installation',
            },
            {
              src: media.civilPipeDeliveryTruck,
              title: 'Fabricated pipe to site',
              caption: 'Flanged pipe sections on a mountain delivery route',
            },
            {
              src: media.civilFlangedPipesTruck,
              title: 'Flanged pipe delivery',
              caption: 'Slung and secured for transport to site',
            },
            {
              src: media.civilTruckBuoysMountainRoad,
              title: 'Log boom buoys to site',
              caption: 'Floating boom sections staged for delivery',
            },
            {
              src: media.civilBuoysTruckLoading,
              title: 'Log boom buoys loading',
              caption: 'Crane loading floating boom sections for transport',
            },
            {
              src: media.nimooDredging,
              title: 'Nimoo dredging',
              caption: 'Intake structure desilting in high-flow water',
            },
            {
              src: media.dikrongDredging,
              title: 'Dikrong dredging',
              caption: 'Cable-deployed dredge pump on a reservoir pontoon',
            },
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
