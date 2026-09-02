/**
 * Shared contact-form validation — no framework deps so it runs identically in
 * the browser (inline field errors) and in the API route (authoritative check).
 */

export type ContactField = 'name' | 'company' | 'email' | 'phone' | 'projectType' | 'message'

export type ContactValues = Record<ContactField, string>

export const emptyContactValues: ContactValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
}

export type ContactErrors = Partial<Record<ContactField, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+()\-.\s0-9]{7,20}$/

export function validateContact(raw: Partial<ContactValues> | undefined): {
  ok: boolean
  errors: ContactErrors
  data: ContactValues
} {
  const v: ContactValues = { ...emptyContactValues, ...raw }
  // normalise
  ;(Object.keys(v) as ContactField[]).forEach((k) => {
    v[k] = typeof v[k] === 'string' ? v[k].trim() : ''
  })

  const errors: ContactErrors = {}

  if (!v.name) errors.name = 'Please enter your name.'
  else if (v.name.length < 2) errors.name = 'Name looks too short.'
  else if (v.name.length > 120) errors.name = 'Name is too long.'

  if (v.company.length > 160) errors.company = 'Company name is too long.'

  if (!v.email) errors.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(v.email)) errors.email = 'Enter a valid email address.'
  else if (v.email.length > 200) errors.email = 'Email is too long.'

  if (v.phone && !PHONE_RE.test(v.phone)) errors.phone = 'Enter a valid phone number.'

  if (v.projectType.length > 120) errors.projectType = 'Invalid project type.'

  if (!v.message) errors.message = 'Please describe your project.'
  else if (v.message.length < 10) errors.message = 'Please add a little more detail.'
  else if (v.message.length > 5000) errors.message = 'Message is too long (5000 characters max).'

  return { ok: Object.keys(errors).length === 0, errors, data: v }
}
