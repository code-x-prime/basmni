import { contact } from '@/content/contact'
import { sectionLabel } from '@/components/shared/ui'

const rowLabel = 'text-[0.62rem] font-bold uppercase tracking-[0.14em] text-blue'
const rowLink = 'block text-[1.05rem] text-foreground transition-colors hover:text-blue'

export function ContactInfo() {
  return (
    <div>
      <p className={`${sectionLabel} text-blue`}>Contact our engineering team</p>
      <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.8rem)] uppercase leading-[1.1] tracking-tightest">
        Talk to the people who build the systems.
      </h2>

      <dl className="mt-10 space-y-7">
        <div>
          <dt className={rowLabel}>Phone</dt>
          <dd className="mt-1">
            <a href={contact.phoneHref} className={rowLink}>
              {contact.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className={rowLabel}>Email</dt>
          <dd className="mt-1 space-y-1">
            <a href={`mailto:${contact.email}`} className={rowLink}>
              {contact.email}
            </a>
            <a
              href={`mailto:${contact.emailAlt}`}
              className="block text-[1rem] text-muted transition-colors hover:text-blue"
            >
              {contact.emailAlt}
            </a>
          </dd>
        </div>
        <div>
          <dt className={rowLabel}>Address</dt>
          <dd className="mt-1 not-italic leading-[1.6] text-muted">
            {contact.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </div>
  )
}
