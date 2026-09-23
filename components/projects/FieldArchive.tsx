'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { ImageBlock } from '@/components/shared/ImageBlock'
import { RevealStagger, RevealItem } from '@/components/shared/Reveal'
import { Lightbox, type LightboxItem } from './Lightbox'

export type FieldArchiveItem = LightboxItem & { caption?: string }

function Frame({
  item,
  onOpen,
  className = '',
}: {
  item: FieldArchiveItem
  onOpen: () => void
  className?: string
}) {
  return (
    <RevealItem className={className} direction="scale">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View ${item.title}`}
        className="group relative block h-full w-full overflow-hidden border-0 bg-white p-0 text-left"
      >
        <ImageBlock
          src={item.src}
          alt={item.title}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          className="h-full min-h-[220px] sm:min-h-[260px]"
        />
        <ArrowUpRight className="pointer-events-none absolute bottom-4 right-4 w-4 shrink-0 -translate-x-1 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      </button>
    </RevealItem>
  )
}

/**
 * Editorial field-photography archive: one large feature frame plus supporting
 * frames in an asymmetric grid. Frames zoom on hover and open a full-screen
 * lightbox on click. Collapses to two columns on tablet and a single column on
 * mobile. Entrance is a staggered scroll reveal.
 */
export function FieldArchive({ items }: { items: FieldArchiveItem[] }) {
  const [index, setIndex] = useState<number | null>(null)
  const [feature, ...rest] = items

  return (
    <>
      <RevealStagger
        className="mt-9 grid grid-cols-1 gap-4 sm:mt-11 sm:grid-cols-2 lg:auto-rows-[minmax(0,1fr)] lg:grid-cols-3"
        stagger={0.07}
      >
        <Frame
          item={feature}
          onOpen={() => setIndex(0)}
          className="sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-[520px]"
        />
        {rest.map((item, r) => (
          <Frame key={item.src} item={item} onOpen={() => setIndex(r + 1)} />
        ))}
      </RevealStagger>

      {index !== null && (
        <Lightbox items={items} index={index} close={() => setIndex(null)} setIndex={setIndex} />
      )}
    </>
  )
}
