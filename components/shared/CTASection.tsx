import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Phone } from 'lucide-react'
import { eyebrowDark, buttonLight, buttonGhost, overlayGradient } from './ui'
import { RevealStagger, RevealItem } from './Reveal'
import { MagneticButton } from '@/components/motion/MagneticButton'

type Action = { label: string; href: string }

/**
 * Full-bleed closing call-to-action band. Extracted from the homepage's final
 * section so every page ends on the same note.
 */
export function CTASection({
  eyebrow,
  title,
  emphasis,
  description,
  image,
  imageAlt = 'Water infrastructure landscape',
  primary,
  secondary = { label: 'Send an Enquiry', href: '/contact' },
}: {
  eyebrow: string
  title: string
  emphasis?: string
  description: string
  image: string
  imageAlt?: string
  primary: Action & { tel?: boolean }
  secondary?: Action
}) {
  return (
    <section className="relative flex min-h-[590px] items-center bg-navy text-white sm:min-h-[620px]">
      <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover" />
      <div className={`absolute inset-0 ${overlayGradient}`} />
      <RevealStagger
        className="relative z-[1] max-w-[800px] px-5 pb-24 pt-28 sm:px-[clamp(1.25rem,8vw,7rem)]"
        stagger={0.1}
      >
        <RevealItem>
          <p className={eyebrowDark}>{eyebrow}</p>
        </RevealItem>
        <RevealItem>
          <h2 className="my-4 text-[clamp(2.7rem,12vw,4rem)] uppercase tracking-tightest sm:text-[clamp(2.8rem,5vw,5.5rem)]">
            {title}
            {emphasis && (
              <>
                <br />
                <em className="not-italic text-ice">{emphasis}</em>
              </>
            )}
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="max-w-[480px] leading-[1.65] text-[#d6e8fb]">{description}</p>
        </RevealItem>
        <RevealItem>
          <div className="mt-7 flex flex-wrap gap-3">
            <MagneticButton>
              {primary.tel ? (
                <a className={`${buttonLight} max-sm:w-full`} href={primary.href}>
                  <Phone /> {primary.label}
                </a>
              ) : (
                <Link className={`${buttonLight} max-sm:w-full`} href={primary.href}>
                  {primary.label} <ArrowUpRight />
                </Link>
              )}
            </MagneticButton>
            <Link className={`${buttonGhost} max-sm:w-full`} href={secondary.href}>
              {secondary.label} <ArrowUpRight />
            </Link>
          </div>
        </RevealItem>
      </RevealStagger>
    </section>
  )
}
