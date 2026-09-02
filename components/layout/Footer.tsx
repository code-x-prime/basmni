import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { site } from '@/content/site'
import { contact } from '@/content/contact'

const companyLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Products & Services', href: '/products-services' },
  { label: 'References', href: '/references' },
  { label: 'Contact', href: '/contact' },
]

const solutionLinks = [
  { label: 'Deep Dam Dredging', href: '/products-services#deep-dam-dredging' },
  { label: 'PAC Systems', href: '/products-services#pac' },
  { label: 'Trash Rack Cleaning Machines', href: '/products-services#trcm' },
  { label: 'Log Boom Barriers', href: '/products-services#log-boom' },
  { label: 'Fine Screen Cleaning', href: '/products-services#fine-screen-cleaning' },
  { label: 'Civil Works', href: '/products-services#civil-works' },
]

const linkClass = 'text-[0.82rem] leading-[1.6] text-muted hover:text-foreground'

export function Footer() {
  const tel = `tel:${contact.phone.replaceAll(' ', '')}`
  return (
    <footer className="border-t border-border bg-white px-5 pb-6 pt-16 text-foreground sm:px-[7vw] sm:pt-20">
      <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr_1.4fr] sm:gap-12">
        <div>
          <Image
            src={site.logoDark}
            alt={site.company}
            width={200}
            height={63}
            className="h-auto w-[180px] object-contain"
          />
          <p className="mt-4 max-w-[260px] leading-[1.6] text-muted">{site.tagline}</p>
        </div>

        <div className="flex flex-col gap-2.5">
          <b className="text-[0.67rem] uppercase tracking-[0.12em] text-blue">Company</b>
          {companyLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <b className="text-[0.67rem] uppercase tracking-[0.12em] text-blue">Solutions</b>
          {solutionLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <b className="text-[0.67rem] uppercase tracking-[0.12em] text-blue">Contact</b>
          <a href={tel} className={`inline-flex items-center gap-2 ${linkClass}`}>
            <Phone className="w-4" />
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className={linkClass}>
            {contact.email}
          </a>
          <span className={`max-w-[260px] ${linkClass}`}>{contact.address}</span>
        </div>
      </div>

      <div className="mt-14 flex flex-col justify-between gap-2 border-t border-border pt-5 text-[0.62rem] uppercase tracking-[0.08em] text-muted sm:flex-row sm:items-center">
        <span>© 2026 Basmni Technologies Pvt. Ltd.</span>
        <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>All rights reserved.</span>
          <span aria-hidden className="hidden opacity-40 sm:inline">
            /
          </span>
          <span>
            Design by{' '}
            <a
              href="https://groxmedia.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue transition-colors hover:text-foreground"
            >
              Grox Media
            </a>
          </span>
        </span>
      </div>
    </footer>
  )
}
