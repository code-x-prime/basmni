import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
import { contact } from '@/content/contact'

const actions = [
  { label: 'Call us', value: contact.phone, href: contact.phoneHref, Icon: Phone, external: false },
  {
    label: 'Email us',
    value: contact.email,
    href: `mailto:${contact.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: 'View location',
    value: 'New Delhi House, Barakhamba Road',
    href: contact.mapsUrl,
    Icon: MapPin,
    external: true,
  },
]

export function QuickActions() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {actions.map(({ label, value, href, Icon, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="group flex flex-col justify-between gap-6 border border-border bg-white p-5 transition-colors hover:border-blue"
        >
          <Icon className="w-6 text-blue" />
          <div>
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-muted">
              {label}
            </span>
            <span className="mt-1 flex items-center gap-1.5 text-[1rem] text-foreground">
              {value}
              <ArrowUpRight className="w-4 text-muted transition-colors group-hover:text-blue" />
            </span>
          </div>
        </a>
      ))}
    </div>
  )
}
