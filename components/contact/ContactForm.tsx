'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Loader2 } from 'lucide-react'
import { contact } from '@/content/contact'
import {
  emptyContactValues,
  validateContact,
  type ContactValues,
  type ContactErrors,
  type ContactField,
} from '@/lib/contact-schema'

const inputBase =
  'w-full border bg-white px-3 py-2.5 text-[1rem] text-foreground outline-none transition-colors focus:border-blue disabled:opacity-60'
const labelClass = 'text-[0.62rem] font-bold uppercase tracking-[0.14em] text-muted'
const errClass = 'mt-1 block text-[0.9rem] text-[#c0392b]'

type Status = 'idle' | 'loading' | 'success' | 'error'

/**
 * Contact enquiry form. Validates client-side (shared rules with the API), then
 * POSTs to `/api/contact`, which sends the enquiry over SMTP. While submitting,
 * the button is disabled and shows a spinner; success swaps in a confirmation
 * panel, failures surface an inline error and let the visitor retry or email
 * directly.
 */
export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyContactValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState('')

  const loading = status === 'loading'

  const set =
    (key: ContactField) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }))
      setErrors((p) => ({ ...p, [key]: undefined }))
    }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError('')
    const { ok, errors: clientErrors } = validateContact(values)
    if (!ok) {
      setErrors(clientErrors)
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, hp: '' }),
      })
      const json = await res.json().catch(() => ({}))

      if (res.ok && json.ok) {
        setStatus('success')
        setValues(emptyContactValues)
        return
      }
      if (res.status === 422 && json.errors) {
        setErrors(json.errors)
        setStatus('idle')
        return
      }
      setStatus('error')
      setServerError(json.error || 'Something went wrong. Please try again.')
    } catch {
      setStatus('error')
      setServerError('Network error. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div
        id="enquiry-form"
        className="flex scroll-mt-[128px] flex-col items-start gap-4 border border-border bg-white p-7"
      >
        <span className="grid h-11 w-11 place-items-center bg-white text-navy [&_svg]:w-5">
          <Check />
        </span>
        <h3 className="text-[1.15rem] uppercase leading-[1.2] tracking-tightest [overflow-wrap:anywhere]">
          Enquiry sent.
        </h3>
        <p className="max-w-[42ch] text-[1rem] leading-[1.6] text-muted">
          Thank you — our engineering team has received your details and will respond directly,
          usually within one working day.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-1 inline-flex items-center gap-1.5 border-b border-blue pb-0.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-blue"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form id="enquiry-form" onSubmit={onSubmit} noValidate className="scroll-mt-[128px]">
      <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-blue">
        Send an enquiry
      </p>

      {/* Honeypot — hidden from people, catches bots. */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" name="hp" defaultValue="" />
        </label>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Name *</span>
          <input
            className={`mt-1.5 ${inputBase} ${errors.name ? 'border-[#c0392b]' : 'border-border'}`}
            value={values.name}
            onChange={set('name')}
            disabled={loading}
            aria-invalid={!!errors.name}
            autoComplete="name"
          />
          {errors.name && <span className={errClass}>{errors.name}</span>}
        </label>

        <label className="block">
          <span className={labelClass}>Company</span>
          <input
            className={`mt-1.5 ${inputBase} ${errors.company ? 'border-[#c0392b]' : 'border-border'}`}
            value={values.company}
            onChange={set('company')}
            disabled={loading}
            aria-invalid={!!errors.company}
            autoComplete="organization"
          />
          {errors.company && <span className={errClass}>{errors.company}</span>}
        </label>

        <label className="block">
          <span className={labelClass}>Email *</span>
          <input
            className={`mt-1.5 ${inputBase} ${errors.email ? 'border-[#c0392b]' : 'border-border'}`}
            type="email"
            value={values.email}
            onChange={set('email')}
            disabled={loading}
            aria-invalid={!!errors.email}
            autoComplete="email"
          />
          {errors.email && <span className={errClass}>{errors.email}</span>}
        </label>

        <label className="block">
          <span className={labelClass}>Phone</span>
          <input
            className={`mt-1.5 ${inputBase} ${errors.phone ? 'border-[#c0392b]' : 'border-border'}`}
            type="tel"
            value={values.phone}
            onChange={set('phone')}
            disabled={loading}
            aria-invalid={!!errors.phone}
            autoComplete="tel"
          />
          {errors.phone && <span className={errClass}>{errors.phone}</span>}
        </label>

        <label className="block sm:col-span-2">
          <span className={labelClass}>Product &amp; service</span>
          <select
            className={`mt-1.5 ${inputBase} border-border`}
            value={values.projectType}
            onChange={set('projectType')}
            disabled={loading}
          >
            <option value="">Select a product or service</option>
            {contact.projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className={labelClass}>Message *</span>
          <textarea
            className={`mt-1.5 min-h-[140px] resize-y ${inputBase} ${errors.message ? 'border-[#c0392b]' : 'border-border'}`}
            value={values.message}
            onChange={set('message')}
            disabled={loading}
            aria-invalid={!!errors.message}
          />
          {errors.message && <span className={errClass}>{errors.message}</span>}
        </label>
      </div>

      {status === 'error' && serverError && (
        <p
          role="alert"
          className="mt-5 border-l-2 border-[#c0392b] bg-[#c0392b]/5 px-3 py-2 text-[1rem] leading-[1.5] text-[#c0392b]"
        >
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 bg-white px-5 py-3 text-[0.67rem] font-bold uppercase tracking-[0.1em] text-navy transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 [&_svg]:w-4"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send Enquiry <ArrowUpRight />
          </>
        )}
      </button>

      <p className="mt-3 text-[0.95rem] leading-[1.5] text-muted">
        Prefer to write directly?{' '}
        <a href={`mailto:${contact.email}`} className="text-blue underline">
          {contact.email}
        </a>
      </p>
    </form>
  )
}
