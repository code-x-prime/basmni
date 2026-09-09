import type { PacComparisonRow } from '@/content/pac'
import { Reveal } from '@/components/shared/Reveal'

/**
 * PAC vs an established alternative. A bordered table on `sm+` (wrapped in
 * `overflow-x-auto` so it can never push the page wider), and a stack of
 * per-criteria cards below `sm`. `conventionalLabel` names the second column
 * (default: XLPE / traditional cable).
 */
export function PacComparison({
  rows,
  conventionalLabel = 'Conventional XLPE / traditional',
}: {
  rows: PacComparisonRow[]
  conventionalLabel?: string
}) {
  return (
    <Reveal>
      {/* Mobile: stacked cards */}
      <div className="flex flex-col gap-4 sm:hidden">
        {rows.map((r) => (
          <div key={r.criteria} className="border border-border">
            <p className="border-b border-border bg-white px-4 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-navy">
              {r.criteria}
            </p>
            <div className="px-4 py-3">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-blue">
                Pressurized Air Cable
              </p>
              <p className="mt-1 text-[1rem] leading-[1.5] text-foreground">{r.pac}</p>
            </div>
            <div className="border-t border-border px-4 py-3">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-muted">
                {conventionalLabel}
              </p>
              <p className="mt-1 text-[1rem] leading-[1.5] text-muted">{r.conventional}</p>
            </div>
          </div>
        ))}
      </div>

      {/* sm+: table, horizontally scrollable inside its own container */}
      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-navy">
              <th className="w-[24%] py-3 pr-4 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-muted">
                Criteria
              </th>
              <th className="w-[40%] px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-blue">
                Pressurized Air Cable
              </th>
              <th className="w-[36%] px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-muted">
                {conventionalLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.criteria} className="border-b border-border align-top">
                <td className="py-4 pr-4 text-[0.8rem] font-bold uppercase tracking-tightest text-navy">
                  {r.criteria}
                </td>
                <td className="px-4 py-4 text-[1rem] leading-[1.55] text-foreground">{r.pac}</td>
                <td className="px-4 py-4 text-[1rem] leading-[1.55] text-muted">
                  {r.conventional}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  )
}
