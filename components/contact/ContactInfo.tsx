import { Mail, MapPin, Phone } from 'lucide-react'
import { contact } from '@/content/contact'
import { sectionLabel } from '@/components/shared/ui'

const rowLabel = 'flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-blue [&_svg]:w-3.5'
const rowLink = 'block text-[1.15rem] font-bold text-navy transition-colors hover:text-blue'

export function ContactInfo() {
  return (
    <div>
      <p className={`${sectionLabel} text-blue`}>Contact our engineering team</p>
      <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.8rem)] uppercase leading-[1.1] tracking-tightest [overflow-wrap:anywhere]">
        Talk to the experts
      </h2>

      <dl className="mt-10 space-y-9">
        <div className="border-l-2 border-blue pl-4">
          <dt className={rowLabel}>
            <Phone /> Phone
          </dt>
          <dd className="mt-2">
            <a href={contact.phoneHref} className={rowLink}>
              {contact.phone}
            </a>
          </dd>
        </div>
        <div className="border-l-2 border-blue pl-4">
          <dt className={rowLabel}>
            <Mail /> Email
          </dt>
          <dd className="mt-2 space-y-1">
            <a href={`mailto:${contact.email}`} className={rowLink}>
              {contact.email}
            </a>
            <a href={`mailto:${contact.emailAlt}`} className={rowLink}>
              {contact.emailAlt}
            </a>
          </dd>
        </div>
        <div className="border-l-2 border-blue pl-4">
          <dt className={rowLabel}>
            <MapPin /> Address
          </dt>
          <dd className="mt-2 not-italic font-semibold leading-[1.6] text-navy">
            {contact.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden border border-border sm:mt-10">
        <iframe
          title="Basmni Technologies head office location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  )
}
