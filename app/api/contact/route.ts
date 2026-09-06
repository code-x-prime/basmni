import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { validateContact } from '@/lib/contact-schema'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const esc = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
  )

function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) return null
  const port = Number(SMTP_PORT) || 587
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // 587 uses STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  })
}

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot — silently accept without sending if a bot filled the hidden field.
  if (typeof body.hp === 'string' && body.hp.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const { ok, errors, data } = validateContact(body as Record<string, string>)
  if (!ok) {
    return NextResponse.json({ ok: false, errors }, { status: 422 })
  }

  const transport = getTransport()
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL
  if (!transport || !to || !from) {
    console.error('[contact] mail is not configured — set SMTP_* and CONTACT_*_EMAIL')
    return NextResponse.json(
      {
        ok: false,
        error: 'The enquiry service is temporarily unavailable. Please email us directly.',
      },
      { status: 503 }
    )
  }

  const rows: [string, string][] = [
    ['Name', data.name],
    ['Company', data.company || '—'],
    ['Email', data.email],
    ['Phone', data.phone || '—'],
    ['Project type', data.projectType || '—'],
  ]
  const textBody = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\nMessage:\n${data.message}\n`
  const htmlBody = `
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;color:#125096">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 16px 4px 0;color:#4a7ab8;text-transform:uppercase;font-size:11px;letter-spacing:.08em">${esc(
              k
            )}</td><td style="padding:4px 0">${esc(v)}</td></tr>`
        )
        .join('')}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#125096;white-space:pre-wrap;margin-top:16px">${esc(
      data.message
    )}</p>`

  try {
    await transport.sendMail({
      from: `"Basmni website — enquiry" <${from}>`,
      to,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `New enquiry — ${data.projectType || 'General'} — ${data.name}`,
      text: textBody,
      html: htmlBody,
    })
  } catch (err) {
    console.error('[contact] sendMail failed:', err)
    return NextResponse.json(
      { ok: false, error: 'We could not send your enquiry. Please email us directly.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
