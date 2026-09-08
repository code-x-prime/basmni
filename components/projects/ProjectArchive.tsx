import { projects } from '@/content/projects'
import { RevealStagger, RevealItem } from '@/components/shared/Reveal'

/**
 * Dense text list of every reference contract — name, scope, contract number,
 * award date. Complements the visual grid.
 */
export function ProjectArchive() {
  return (
    <RevealStagger className="border-t border-border" stagger={0.04}>
      {projects.map((p) => (
        <RevealItem key={p.id}>
          <div className="grid grid-cols-1 gap-2 border-b border-border py-6 sm:grid-cols-[1.4fr_1fr] sm:gap-8">
            <div>
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-blue">
                {p.category} · {p.year}
              </span>
              <h3 className="mt-1.5 text-[1.05rem] leading-[1.2] tracking-tightest">{p.name}</h3>
              <p className="mt-1 text-[0.75rem] uppercase tracking-[0.06em] text-muted">
                {p.client}
              </p>
            </div>
            <div className="text-[1rem] leading-[1.55] text-muted">
              <p>{p.scope}</p>
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.06em] text-muted/80">
                {p.contractNo ? `Contract ${p.contractNo}` : 'Contract ref. on file'}
                {p.awardDate ? ` · Awarded ${p.awardDate}` : ''}
              </p>
            </div>
          </div>
        </RevealItem>
      ))}
    </RevealStagger>
  )
}
