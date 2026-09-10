import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { media } from '@/content/site'
import { contact } from '@/content/contact'
import { contactHero, contactSections } from '@/content/pages'
import { PageHero } from '@/components/shared/PageHero'
import { PageTransition } from '@/components/shared/PageTransition'
import { SectionHeading } from '@/components/shared/SectionHeading'
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
        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-[1fr_0.9fr] sm:items-center sm:gap-[6vw]">
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
              src={media.dredgeReservoirValley}
              alt="Reservoir and dam in a green valley — a Basmni project environment"
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
      <section className={`${sectionPad} bg-white`}>
        <SectionHeading label={contactSections.quick.label} title={contactSections.quick.title} />
        <div className="mt-8 sm:mt-10">
          <QuickActions />
        </div>
      </section>

      {/* Location / map / directions */}
      <section className={sectionPad}>
        <SectionHeading
          label={contactSections.location.label}
          title={contactSections.location.title}
        />
        <div className="mt-8 grid grid-cols-1 gap-8 border-t border-border pt-8 sm:mt-12 sm:grid-cols-[0.8fr_1.2fr] sm:gap-[6vw]">
          <Reveal direction="right">
            <p className={`${sectionLabel} text-blue`}>Head office</p>
            <address className="mt-3 text-[1.15rem] not-italic leading-[1.7] text-foreground">
              {contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="mt-7 flex flex-col gap-3">
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonDark} w-full`}
              >
                Get Directions <ArrowUpRight />
              </a>
              <a href={contact.phoneHref} className={`${buttonDark} w-full`}>
                Call {contact.phone}
              </a>
            </div>
          </Reveal>
          <Reveal direction="left">
            <div className="relative aspect-[16/10] overflow-hidden border border-border sm:aspect-auto sm:h-full sm:min-h-[300px]">
              <iframe
                title="Basmni Technologies head office location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
