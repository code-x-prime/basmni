import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { media } from '@/content/site'
import {
  services,
  dredgingEquipment,
  dredgingTechnology,
  pacPillars,
  servicesFaq,
} from '@/content/services'
import { servicesHero, servicesSections } from '@/content/pages'
import { PageHero } from '@/components/shared/PageHero'
import { PageTransition } from '@/components/shared/PageTransition'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTASection } from '@/components/shared/CTASection'
import { Reveal } from '@/components/shared/Reveal'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { FAQ } from '@/components/shared/FAQ'
import { MetricGrid } from '@/components/shared/blocks'
import { ServiceNavigation } from '@/components/services/ServiceNavigation'
import { ServiceFeature } from '@/components/services/ServiceFeature'
import { DredgingEquipmentBlock } from '@/components/services/DredgingEquipmentBlock'
import { sectionPad, textLink } from '@/components/shared/ui'

export const metadata: Metadata = {
  title: 'Products & Services | Basmni Technologies Pvt. Ltd.',
  description:
    'Specialized heavy industrial systems from Basmni Technologies: high-pressurized air cable systems, deep dam dredging, trash rack cleaning machines and specialized civil works.',
}

const dredging = services.find((s) => s.id === 'deep-dam-dredging')!
const pac = services.find((s) => s.id === 'pac')!
const rest = services.filter((s) => s.id !== 'deep-dam-dredging' && s.id !== 'pac')

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHero {...servicesHero} />

      {/* Overview + service navigation */}
      <section className={sectionPad}>
        <SectionHeading
          label={servicesSections.intro.label}
          title={servicesSections.intro.title}
          deck={servicesSections.intro.deck}
        />
        <div className="mt-12 sm:mt-16">
          <ServiceNavigation />
        </div>
      </section>

      {/* PAC — flagship: full feature + technical pillars + dedicated page */}
      <ServiceFeature service={pac} flip dark />
      <section className={`${sectionPad} bg-graphite text-white`}>
        <SectionHeading
          dark
          label="PAC — technical pillars"
          title="Engineered for clean, dense power corridors."
        />
        <div className="mt-12 grid grid-cols-1 gap-px border border-[#2d4653] bg-[#2d4653] sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {pacPillars.map((p) => (
            <Reveal key={p.title} className="bg-graphite p-6">
              <h3 className="text-[0.95rem] uppercase leading-[1.15] tracking-tightest text-ice">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[0.82rem] leading-[1.55] text-[#c4d3d9]">{p.text}</p>
            </Reveal>
          ))}
        </div>
        {pac.highlights && (
          <div className="mt-10">
            <MetricGrid items={pac.highlights} dark columns="sm:grid-cols-3" />
          </div>
        )}
        <Link
          href="/products-services/pressurized-air-cables"
          className={`${textLink} mt-10 border-ice text-ice`}
        >
          Explore the full PAC system <ArrowUpRight />
        </Link>
      </section>

      {/* Deep dam dredging — full feature */}
      <ServiceFeature service={dredging} />

      {/* Dredging equipment — alternating blocks */}
      <section className="pt-6">
        <div className={`${sectionPad} pb-0`}>
          <SectionHeading
            label={servicesSections.dredgingEquipment.label}
            title={servicesSections.dredgingEquipment.title}
          />
        </div>
        {dredgingEquipment.map((item, i) => (
          <DredgingEquipmentBlock key={item.id} item={item} index={i} />
        ))}
      </section>

      {/* Dredging technology — technical grid */}
      <section className={`${sectionPad} bg-navy text-white`}>
        <SectionHeading
          dark
          label={servicesSections.dredgingTech.label}
          title={servicesSections.dredgingTech.title}
        />
        <div className="mt-12 grid grid-cols-1 gap-px border border-[#385463] bg-[#385463] sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {dredgingTechnology.map((t, i) => (
            <Reveal key={t.title} className="bg-navy p-6 sm:p-8">
              <span className="text-[0.7rem] font-bold text-ice">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-[clamp(1.1rem,2.2vw,1.5rem)] uppercase leading-[1.15] tracking-tightest">
                {t.title}
              </h3>
              <p className="mt-2.5 text-[0.86rem] leading-[1.55] text-[#c4d3d9]">{t.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRCM, Log boom, Fine screen, Civil works */}
      {rest.map((service, i) => (
        <ServiceFeature key={service.id} service={service} flip={i % 2 === 1} dark={i % 2 === 1} />
      ))}

      {/* Engineering applications */}
      <section className={`${sectionPad} bg-[#dceaf0]`}>
        <SectionHeading
          label={servicesSections.applications.label}
          title={servicesSections.applications.title}
        />
        <div className="mt-12 grid grid-cols-1 items-center gap-8 sm:mt-16 sm:grid-cols-[0.95fr_1.05fr] sm:gap-[6vw]">
          <Reveal direction="right">
            <ImageBlock
              src={media.trashRack}
              alt="Debris accumulated against a dam intake structure"
              reveal
              className="min-h-[280px] sm:min-h-[440px]"
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: 'Dams & hydropower plants',
                text: 'Absolute protection for penstocks and turbines — heavy-duty hydraulic TRCMs and log booms stop timber and submerged debris causing mechanical failures.',
              },
              {
                title: 'Barrages & river weirs',
                text: 'Managing seasonal debris, agricultural runoff and urban trash during floods to maintain water-level control and prevent gate jamming.',
              },
              {
                title: 'Canal-based projects',
                text: 'Fine screen cleaners and wire-rope TRCMs remove aquatic weeds, algae and plastics for continuous agricultural or industrial supply.',
              },
            ].map((a) => (
              <Reveal key={a.title} className="border-t-2 border-orange pt-4">
                <h3 className="text-[1rem] uppercase leading-[1.15] tracking-tightest">
                  {a.title}
                </h3>
                <p className="mt-2.5 text-[0.85rem] leading-[1.55] text-muted">{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={sectionPad}>
        <SectionHeading label={servicesSections.faq.label} title={servicesSections.faq.title} />
        <div className="mt-12 sm:mt-16">
          <FAQ items={servicesFaq} />
        </div>
      </section>

      <CTASection
        eyebrow="Start a conversation"
        title="Have a challenging project?"
        description="Tell us about your operating conditions and delivery requirements. Our engineering team will respond directly."
        image={media.spillway}
        primary={{ label: 'Discuss Your Project', href: '/contact' }}
        secondary={{ label: 'View References', href: '/references' }}
      />
    </PageTransition>
  )
}
