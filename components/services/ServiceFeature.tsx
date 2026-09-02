import { media } from '@/content/site'
import type { Service } from '@/content/services'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { Reveal } from '@/components/shared/Reveal'
import { sectionPad, sectionLabel, displayHeading } from '@/components/shared/ui'

/**
 * Large alternating feature block for one service — mirrors the homepage
 * dredging / PAC sections. Renders its own `id` anchor (with header offset) so
 * `ServiceNavigation` links land correctly.
 */
export function ServiceFeature({
  service,
  flip = false,
  dark = false,
}: {
  service: Service
  flip?: boolean
  dark?: boolean
}) {
  const copy = (
    <div>
      <p className={`${sectionLabel} ${dark ? 'text-ice' : 'text-blue'}`}>
        {service.number} — {service.shortTitle}
      </p>
      <h2 className={`${displayHeading} mt-2`}>{service.title}</h2>
      <p className={`mt-5 max-w-[520px] leading-[1.65] ${dark ? 'text-[#c4d3d9]' : 'text-muted'}`}>
        {service.description}
      </p>

      {service.highlights && (
        <div
          className={`mt-9 grid grid-cols-3 gap-4 border-t pt-4 ${dark ? 'border-[#2d4653]' : 'border-border'}`}
        >
          {service.highlights.map((h) => (
            <div key={h.label}>
              <strong
                className={`block text-[clamp(1.3rem,3vw,2.1rem)] tracking-[-0.06em] ${dark ? 'text-ice' : 'text-blue'}`}
              >
                {h.value}
              </strong>
              <span
                className={`mt-1 block text-[0.6rem] uppercase tracking-[0.08em] ${dark ? 'text-[#a9bec5]' : 'text-muted'}`}
              >
                {h.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {service.points && (
        <ul className={`mt-8 border-t ${dark ? 'border-[#2d4653]' : 'border-border'}`}>
          {service.points.map((point, i) => (
            <li
              key={point}
              className={`flex gap-4 border-b py-3 text-[0.9rem] leading-[1.55] ${dark ? 'border-[#2d4653] text-[#c4d3d9]' : 'border-border text-muted'}`}
            >
              <span
                className={`shrink-0 text-[0.7rem] font-bold ${dark ? 'text-ice' : 'text-blue'}`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              {point}
            </li>
          ))}
        </ul>
      )}

      {service.groups && (
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {service.groups.map((g) => (
            <div
              key={g.title}
              className={`border-t-2 pt-3 ${dark ? 'border-ice text-[#c4d3d9]' : 'border-orange text-muted'}`}
            >
              <h3
                className={`text-[0.95rem] uppercase tracking-tightest ${dark ? 'text-white' : 'text-foreground'}`}
              >
                {g.title}
              </h3>
              <p className="mt-2 text-[0.85rem] leading-[1.55]">{g.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  const picture = (
    <ImageBlock
      src={media[service.image]}
      alt={service.shortTitle}
      className="min-h-[300px] sm:min-h-[460px]"
    />
  )

  return (
    <section
      id={service.id}
      className={`${sectionPad} grid scroll-mt-24 grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_0.85fr] sm:gap-[6vw] ${
        dark ? 'bg-graphite text-white' : ''
      }`}
    >
      <Reveal className={flip ? 'sm:order-2' : ''}>{copy}</Reveal>
      <Reveal className={flip ? 'sm:order-1' : ''}>{picture}</Reveal>
    </section>
  )
}
