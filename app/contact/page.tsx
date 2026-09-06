import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { media } from '@/content/site'
import { contact } from '@/content/contact'
import { contactHero, contactSections } from '@/content/pages'
import { PageHero } from '@/components/shared/PageHero'
import { PageTransition } from '@/components/shared/PageTransition'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { CTASection } from '@/components/shared/CTASection'
import { Reveal } from '@/components/shared/Reveal'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { ContactForm } from '@/components/contact/ContactForm'
import { QuickActions } from '@/components/contact/QuickActions'
import { sectionPad, sectionLabel, buttonDark } from '@/components/shared/ui'

export const metadata: Metadata = {
  title: 'Contact Basmni Technologies Pvt. Ltd.',
  description:
    'Contact the Basmni Technologies engineering team. Headquartered at 904 New Delhi House, 27 Barakhamba Road, New Delhi - 110001. Phone +91 98101 48456, email info@basmni.com or basmnitech@gmail.com.',
}

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHero {...contactHero} />

      {/* Contact introduction */}
      <section className={sectionPad}>
        <SectionHeading label={contactSections.intro.label} title={contactSections.intro.title} />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-[1fr_0.9fr] sm:items-center sm:gap-[6vw]">
          <Reveal direction="right" className="leading-[1.7] text-muted">
            <p className="max-w-[560px]">{contactSections.intro.body}</p>
            <p className="mt-4 max-w-[560px]">
              Design, manufacturing, supply, installation and commissioning are handled by one
              accountable team — so the earlier we understand your operating conditions, the better
              the system fits the site.
            </p>
          </Reveal>
          <Reveal direction="left">
            <ImageBlock
              src={media.fieldInspection}
              alt="Basmni engineers reviewing drawings on a water infrastructure site"
              reveal
              className="min-h-[280px] sm:min-h-[420px]"
            />
          </Reveal>
        </div>
      </section>

      {/* Info + form */}
      <section className={`${sectionPad} pt-0`}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[6vw]">
          <Reveal direction="right">
            <ContactInfo />
          </Reveal>
          <Reveal direction="left">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Quick actions */}
      <section className={`${sectionPad} bg-[#dbe9fb]`}>
        <SectionHeading label={contactSections.quick.label} title={contactSections.quick.title} />
        <div className="mt-10 sm:mt-12">
          <QuickActions />
        </div>
      </section>

      {/* Location / map / directions */}
      <section className={sectionPad}>
        <SectionHeading
          label={contactSections.location.label}
          title={contactSections.location.title}
        />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 sm:items-center sm:gap-[6vw]">
          <Reveal direction="right">
            <p className={`${sectionLabel} text-blue`}>Head office</p>
            <address className="mt-3 text-[1.15rem] not-italic leading-[1.6] text-foreground">
              {contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonDark} max-sm:w-full`}
              >
                Get Directions <ArrowUpRight />
              </a>
              <a href={contact.phoneHref} className={`${buttonDark} max-sm:w-full`}>
                Call {contact.phone}
              </a>
            </div>
          </Reveal>
          <Reveal direction="left">
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden border border-border"
            >
              <ImageBlock
                src={media.hydropowerDam}
                alt="Hydropower infrastructure — Basmni project environment"
                className="min-h-[240px] sm:min-h-[320px]"
              />
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,#0b3a70e6,transparent_60%)]" />
              <span className="pointer-events-none absolute inset-x-5 bottom-5">
                <span className="block text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ice">
                  Central Delhi · Barakhamba Road
                </span>
                <span className="mt-1 inline-flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-white">
                  Open in Google Maps
                  <ArrowUpRight className="w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Prefer to talk first?"
        title="Let's engineer your next project."
        description="Call our engineers or send an enquiry and we will get back to you directly."
        image={media.hero}
        primary={{ label: 'Call Our Engineers', href: contact.phoneHref, tel: true }}
        secondary={{ label: 'Send an Enquiry', href: '#enquiry-form' }}
      />
    </PageTransition>
  )
}
