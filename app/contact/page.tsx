import type { Metadata } from 'next'
import { media } from '@/content/site'
import { contactHero } from '@/content/pages'
import { PageHero } from '@/components/shared/PageHero'
import { PageTransition } from '@/components/shared/PageTransition'
import { Reveal } from '@/components/shared/Reveal'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { ContactForm } from '@/components/contact/ContactForm'
import { sectionPad } from '@/components/shared/ui'

export const metadata: Metadata = {
  title: 'Contact Basmni Technologies Pvt. Ltd.',
  description:
    'Contact the Basmni Technologies engineering team. Headquartered at 904 New Delhi House, 27 Barakhamba Road, New Delhi - 110001. Phone +91 98101 48456, email info@basmni.com or basmnitech@gmail.com.',
}

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHero {...contactHero} />

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

      {/* Closing image */}
      <div className={`${sectionPad} pt-0`}>
        <Reveal className="mx-auto max-w-7xl">
          <ImageBlock
            src={media.trcmTeamSiteVisit}
            alt="Basmni engineering team on-site at a hydropower reservoir installation"
            reveal
            className="aspect-[16/9] w-full"
          />
        </Reveal>
      </div>
    </PageTransition>
  )
}
