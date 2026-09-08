import { media } from '@/content/site'
import type { DredgingEquipment } from '@/content/services'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { Reveal } from '@/components/shared/Reveal'
import { sectionPad } from '@/components/shared/ui'

/**
 * Alternating large image / content block for one dredging equipment family.
 * Not a small card — full-width, matches the homepage feature rhythm.
 */
export function DredgingEquipmentBlock({
  item,
  index,
}: {
  item: DredgingEquipment
  index: number
}) {
  const flip = index % 2 === 1
  return (
    <div
      id={item.id}
      className={`${sectionPad} grid scroll-mt-52 grid-cols-1 items-center gap-8 border-t border-border sm:grid-cols-[1fr_0.9fr] sm:gap-[6vw]`}
    >
      <Reveal className={flip ? 'sm:order-2' : ''} direction={flip ? 'left' : 'right'}>
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-blue">
          Equipment {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="mt-2 text-[clamp(1.6rem,3.4vw,2.8rem)] uppercase leading-[1.1] tracking-tightest">
          {item.title}
        </h3>
        <p className="mt-4 max-w-[520px] leading-[1.65] text-muted">{item.body}</p>
        <dl className="mt-7 grid grid-cols-1 gap-4 border-t border-border pt-4 sm:grid-cols-2">
          <div>
            <dt className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-blue">
              Application
            </dt>
            <dd className="mt-1 text-[1rem] leading-[1.5] text-muted">{item.application}</dd>
          </div>
          <div>
            <dt className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-blue">
              Engineering benefit
            </dt>
            <dd className="mt-1 text-[1rem] leading-[1.5] text-muted">{item.benefit}</dd>
          </div>
        </dl>
      </Reveal>
      <Reveal className={flip ? 'sm:order-1' : ''} direction={flip ? 'right' : 'left'}>
        <ImageBlock
          src={media[item.image]}
          alt={item.title}
          reveal
          className="min-h-[280px] sm:min-h-[440px]"
        />
      </Reveal>
    </div>
  )
}
