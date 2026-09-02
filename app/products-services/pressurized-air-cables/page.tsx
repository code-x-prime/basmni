import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { media } from '@/content/site'
import { pacHero } from '@/content/pages'
import {
  pacHomeIntro,
  pacHowItWorks,
  pacFeatures,
  pacComponents,
  pacApplications,
  pacComparison,
  pacMonitoring,
  pacInstallation,
  pacSpecs,
  pacHeadlineMetrics,
  pacReferenceNote,
  pacFaq,
} from '@/content/pac'
import { PageHero } from '@/components/shared/PageHero'
import { PageTransition } from '@/components/shared/PageTransition'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTASection } from '@/components/shared/CTASection'
import { Reveal, RevealStagger, RevealItem } from '@/components/shared/Reveal'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { FAQ } from '@/components/shared/FAQ'
import { MetricGrid, FeatureRows } from '@/components/shared/blocks'
import { PacComparison } from '@/components/services/PacComparison'
import { sectionPad, sectionLabel, displayHeading, textLink } from '@/components/shared/ui'

export const metadata: Metadata = {
  title: 'Pressurized Air Cables (PAC) | Basmni Technologies Pvt. Ltd.',
  description:
    'Pressurized Air Cable (PAC) systems from Basmni Technologies: SF6-free, PFAS-free heavy-duty power transmission insulated with clean compressed technical air — up to 420 kV and 5,000 A, 2×–10× lower losses, integrated condition monitoring and a compact metallic enclosure. How PAC works, key features, components, applications, comparison with XLPE, installation and monitoring.',
}

export default function PacPage() {
  return (
    <PageTransition>
      <PageHero {...pacHero} />

      {/* What PAC is */}
      <section className={sectionPad}>
        <SectionHeading
          label="01 — Overview"
          title="Power transmission insulated with pressurized air."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-[6vw]">
          {pacHomeIntro.map((p) => (
            <Reveal key={p.slice(0, 24)}>
              <p className="leading-[1.7] text-muted">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 sm:mt-14">
          <MetricGrid items={pacHeadlineMetrics} columns="sm:grid-cols-4" />
        </div>
      </section>

      {/* How it works */}
      <section className={`${sectionPad} bg-navy text-white`}>
        <SectionHeading dark label="02 — How PAC works" title="Three functions, one sealed pipe." />
        <div className="mt-12 grid grid-cols-1 gap-px border border-[#385463] bg-[#385463] sm:mt-16 sm:grid-cols-3">
          {pacHowItWorks.map((s) => (
            <Reveal key={s.number} className="bg-navy p-6 sm:p-8">
              <span className="text-[0.7rem] font-bold text-ice">{s.number}</span>
              <h3 className="mt-4 text-[clamp(1.15rem,2.2vw,1.6rem)] uppercase leading-[1.15] tracking-tightest">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.88rem] leading-[1.6] text-[#c4d3d9]">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Image band */}
      <ImageBlock
        src={media.pacInspection}
        alt="Engineer inspecting high-voltage switchgear control equipment"
        parallax
        sizes="100vw"
        className="h-[42vh] min-h-[280px] sm:h-[56vh]"
      />

      {/* Key features */}
      <section className={`${sectionPad} bg-graphite text-white`}>
        <SectionHeading
          dark
          label="03 — Key features"
          title="What makes PAC different."
          deck="Capacity, efficiency, a clean insulating medium and built-in monitoring in one metallic system."
        />
        <RevealStagger className="mt-12 grid grid-cols-1 gap-px border border-[#2d4653] bg-[#2d4653] sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {pacFeatures.map((f) => (
            <RevealItem key={f.number} className="bg-graphite p-6">
              <span className="text-[0.7rem] font-bold text-ice">{f.number}</span>
              <h3 className="mt-4 text-[0.98rem] uppercase leading-[1.18] tracking-tightest text-ice">
                {f.title}
              </h3>
              <p className="mt-2.5 text-[0.83rem] leading-[1.55] text-[#c4d3d9]">{f.text}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Why pressurized air / environmental */}
      <section
        className={`${sectionPad} grid grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_0.85fr] sm:gap-[6vw]`}
      >
        <Reveal direction="right">
          <p className={`${sectionLabel} text-blue`}>04 — Why pressurized air</p>
          <h2 className={`${displayHeading} mt-2`}>SF6-free. PFAS-free. Just clean air.</h2>
          <p className="mt-5 max-w-[520px] leading-[1.65] text-muted">
            Conventional gas-insulated transmission relies on SF6 — a gas with a very high
            global-warming potential — while polymeric cable systems depend on fluorinated
            chemistry. PAC uses clean dry technical air, or a controlled nitrogen–oxygen mixture,
            held under pressure as the dielectric.
          </p>
          <p className="mt-4 max-w-[520px] leading-[1.65] text-muted">
            The insulation contributes zero global-warming potential, there is no fluoropolymer to
            manage over the life of the asset, and the electrical strength needed for high-voltage
            operation is retained.
          </p>
        </Reveal>
        <Reveal direction="left">
          <ImageBlock
            src={media.pacGis}
            alt="Gas-insulated switchgear modules with sealed metallic enclosures"
            reveal
            className="min-h-[320px] sm:min-h-[460px]"
          />
        </Reveal>
      </section>

      {/* Key components */}
      <section className={`${sectionPad} bg-[#dceaf0]`}>
        <SectionHeading label="05 — Key components" title="What a PAC system is made of." />
        <div className="mt-10 sm:mt-14">
          <FeatureRows items={pacComponents.map((c) => ({ title: c.title, text: c.text }))} />
        </div>
      </section>

      {/* Technical specifications */}
      <section className={sectionPad}>
        <SectionHeading
          label="06 — Technical specifications"
          title="Basmni PAC system parameters."
        />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-[1fr_0.9fr] sm:gap-[6vw]">
          <Reveal>
            <table className="w-full border-collapse text-left">
              <tbody>
                {pacSpecs.map((s) => (
                  <tr key={s.label} className="border-b border-border align-baseline">
                    <th className="py-3.5 pr-4 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-muted">
                      {s.label}
                    </th>
                    <td className="py-3.5 text-[clamp(1rem,2vw,1.35rem)] tracking-tightest text-navy">
                      {s.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal direction="left">
            <div className="border-l-2 border-orange bg-background p-5 sm:p-6">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-blue">
                Technology reference
              </p>
              <p className="mt-3 text-[0.85rem] leading-[1.65] text-muted">{pacReferenceNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Applications */}
      <section className={`${sectionPad} bg-navy text-white`}>
        <SectionHeading
          dark
          label="07 — Applications"
          title="Where PAC fits."
          deck="Suitability by setting — engineered to the rated parameters of each project."
        />
        <RevealStagger
          className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {pacApplications.map((a) => (
            <RevealItem key={a.title}>
              <ImageBlock
                src={media[a.image]}
                alt={a.title}
                className="min-h-[220px] sm:min-h-[240px]"
              />
              <div className="pt-4">
                <h3 className="text-[1.05rem] uppercase leading-[1.15] tracking-tightest text-ice">
                  {a.title}
                </h3>
                <p className="mt-2 text-[0.86rem] leading-[1.55] text-[#c4d3d9]">{a.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* PAC vs conventional */}
      <section className={sectionPad}>
        <SectionHeading
          label="08 — Comparison"
          title="PAC vs conventional systems."
          deck="Compared with standard XLPE / traditional underground cable for an equivalent current."
        />
        <div className="mt-10 sm:mt-14">
          <PacComparison rows={pacComparison} />
        </div>
      </section>

      {/* Pressure & condition monitoring */}
      <section
        className={`${sectionPad} grid grid-cols-1 items-center gap-8 bg-[#dceaf0] sm:grid-cols-[0.9fr_1fr] sm:gap-[6vw]`}
      >
        <Reveal direction="right">
          <ImageBlock
            src={media.pacControl}
            alt="Pressure and condition monitoring control panel with status indicators"
            reveal
            className="min-h-[300px] sm:min-h-[440px]"
          />
        </Reveal>
        <Reveal direction="left">
          <p className={`${sectionLabel} text-blue`}>09 — Pressure &amp; condition monitoring</p>
          <h2 className={`${displayHeading} mt-2`}>The system tells you how it is doing.</h2>
          <p className="mt-5 max-w-[520px] leading-[1.65] text-muted">
            Monitoring is part of the design, not an add-on. Continuous measurement gives the
            operator a transparent, real-time picture of link health and turns maintenance into a
            planned activity.
          </p>
          <ul className="mt-8 border-t border-border">
            {pacMonitoring.map((m, i) => (
              <li
                key={m}
                className="flex gap-4 border-b border-border py-3 text-[0.9rem] leading-[1.55] text-muted"
              >
                <span className="shrink-0 text-[0.7rem] font-bold text-blue">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {m}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Engineering & installation */}
      <section className={`${sectionPad} bg-navy text-white`}>
        <SectionHeading
          dark
          label="10 — Engineering & installation"
          title="One accountable scope."
        />
        <p className="ml-auto mt-6 max-w-[420px] leading-[1.6] text-[#a9bec5]">
          {pacInstallation.intro}
        </p>
        <div className="mt-12 sm:mt-16">
          <RevealStagger className="grid grid-cols-1 gap-px border border-[#385463] bg-[#385463] sm:grid-cols-4">
            {pacInstallation.steps.map((step, i) => (
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
          {pacInstallation.contexts.map((c) => (
            <span
              key={c}
              className="border border-[#385463] px-3 py-2 text-[0.68rem] uppercase tracking-[0.08em] text-[#c4d3d9]"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={sectionPad}>
        <SectionHeading label="11 — FAQ" title="Common questions." />
        <div className="mt-12 sm:mt-16">
          <FAQ items={pacFaq} />
        </div>
        <Link className={`${textLink} mt-10`} href="/products-services">
          Back to all products &amp; services <ArrowUpRight />
        </Link>
      </section>

      <CTASection
        eyebrow="Start a conversation"
        title="Planning a transmission link?"
        emphasis="Let's engineer the PAC system."
        description="Tell us the voltage, current, route and site constraints. Basmni's engineering team will advise on configuration, installation and commissioning."
        image={media.pacInfra}
        imageAlt="High-voltage substation infrastructure at dusk"
        primary={{ label: 'Discuss Your Project', href: '/contact' }}
        secondary={{ label: 'View References', href: '/references' }}
      />
    </PageTransition>
  )
}
