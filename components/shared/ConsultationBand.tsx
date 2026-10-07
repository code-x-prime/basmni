import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { buttonLight } from './ui'

export function ConsultationBand() {
  return (
    <section className="px-5 py-12 sm:px-[7vw] sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 bg-[#0b3a70] px-6 py-10 text-white sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:py-12">
        <div>
          <h2 className="max-w-[22ch] text-[clamp(1.5rem,3vw,2.4rem)] uppercase leading-[1.15] tracking-tightest [overflow-wrap:anywhere]">
            Planning a hydro, dredging, or heavy fabrication project?
          </h2>
          <p className="mt-3 max-w-[60ch] text-[1rem] leading-[1.6] text-[#cfe0f5]">
            Our engineering team supports tenders, feasibility and turnkey delivery for government
            and utility clients across India.
          </p>
        </div>
        <Link className={`${buttonLight} shrink-0 max-sm:w-full`} href="/contact">
          Request a Consultation <ArrowUpRight />
        </Link>
      </div>
    </section>
  )
}
