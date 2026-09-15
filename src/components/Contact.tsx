import { useState, type FormEvent } from 'react'
import { profile, socials } from '../data/profile'
import { Aurora } from './ui/Aurora'
import { Button } from './ui/Button'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { Section, SectionHeading } from './ui/Section'

type Fields = { name: string; email: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const EMPTY: Fields = { name: '', email: '', message: '' }

// Deliberately permissive: enough to catch typos, without rejecting valid addresses.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(fields: Fields): Errors {
  const errors: Errors = {}

  if (!fields.name.trim()) errors.name = 'Please enter your name.'
  else if (fields.name.trim().length < 2) errors.name = 'That looks a little short.'

  if (!fields.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(fields.email.trim()))
    errors.email = 'Please enter a valid email address.'

  if (!fields.message.trim()) errors.message = 'Please write a message.'
  else if (fields.message.trim().length < 20)
    errors.message = 'A little more detail helps — at least 20 characters.'

  return errors
}

export function Contact() {
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const update = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [key]: event.target.value }))
    // Clear a field's error as soon as the visitor starts fixing it.
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const found = validate(fields)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      // Move focus to the first field that needs attention.
      const firstInvalid = (['name', 'email', 'message'] as const).find((key) => found[key])
      if (firstInvalid) document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    setStatus('sending')

    // This site is fully static, so the message is handed to the visitor's mail
    // client pre-filled. Swap this block for a fetch() to a form endpoint
    // (Formspree, Resend, an API route…) if you later add a backend.
    const subject = encodeURIComponent(`Portfolio enquiry from ${fields.name.trim()}`)
    const body = encodeURIComponent(
      `${fields.message.trim()}\n\n—\n${fields.name.trim()}\n${fields.email.trim()}`,
    )

    window.setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('sent')
      setFields(EMPTY)
    }, 550)
  }

  return (
    <Section id="contact" className="isolate overflow-hidden">
      <Aurora />

      <SectionHeading
        id="contact"
        index="09"
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s build <span className="text-gradient">something great together.</span>
          </>
        }
        lead="Hiring, collaborating, or just want to compare notes on Spring Boot? My inbox is open."
        align="center"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* ─────────────── Direct channels ─────────────── */}
        <Reveal>
          <div className="surface flex h-full flex-col rounded-2xl p-6 sm:p-7">
            <h3 className="text-sm font-semibold tracking-[0.12em] uppercase">Reach me directly</h3>

            <ul className="mt-5 space-y-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.icon === 'mail' ? undefined : '_blank'}
                    rel={social.icon === 'mail' ? undefined : 'noreferrer noopener'}
                    className="group flex items-center gap-3.5 rounded-xl border border-[rgb(var(--hairline))] p-3.5 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-brand-500/40 hover:bg-brand-500/5"
                  >
                    <span
                      aria-hidden="true"
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500/15 to-violet-accent/15 text-brand-600 transition-transform duration-300 group-hover:scale-105 dark:text-brand-300"
                    >
                      <Icon name={social.icon} size={18} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium">{social.label}</span>
                      <span
                        className="block truncate font-mono text-[0.74rem]"
                        style={{ color: 'var(--fg-subtle)' }}
                      >
                        {social.handle}
                      </span>
                    </span>
                    <Icon
                      name="arrowUpRight"
                      size={15}
                      className="shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="group mt-2.5 flex items-center gap-3.5 rounded-xl border border-[rgb(var(--hairline))] p-3.5 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-brand-500/40 hover:bg-brand-500/5"
            >
              <span
                aria-hidden="true"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-500/15 to-violet-accent/15 text-brand-600 transition-transform duration-300 group-hover:scale-105 dark:text-brand-300"
              >
                <Icon name="phone" size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium">Phone</span>
                <span
                  className="block truncate font-mono text-[0.74rem]"
                  style={{ color: 'var(--fg-subtle)' }}
                >
                  {profile.phone}
                </span>
              </span>
              <Icon
                name="arrowUpRight"
                size={15}
                className="shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </a>

            <div className="mt-2.5 flex items-center gap-3 rounded-xl border border-[rgb(var(--hairline))] bg-[color-mix(in_oklab,var(--fg)_4%,transparent)] p-3.5">
              <span
                aria-hidden="true"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-mint-accent/18 to-brand-500/15 text-mint-accent"
              >
                <Icon name="mapPin" size={18} />
              </span>
              <span>
                <span className="block text-sm font-medium">{profile.location}</span>
                <span className="block text-[0.74rem]" style={{ color: 'var(--fg-subtle)' }}>
                  On-site, hybrid or remote
                </span>
              </span>
            </div>

            <p
              className="mt-auto pt-5 text-[0.78rem] leading-relaxed"
              style={{ color: 'var(--fg-subtle)' }}
            >
              I usually reply within a couple of working days.
            </p>
          </div>
        </Reveal>

        {/* ─────────────── Form ─────────────── */}
        <Reveal delay={120}>
          <div className="surface h-full rounded-2xl p-6 sm:p-8">
            {status === 'sent' ? (
              <div
                role="status"
                className="flex h-full min-h-80 flex-col items-center justify-center text-center"
              >
                <span
                  aria-hidden="true"
                  className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-mint-accent/20 to-brand-500/18 text-mint-accent"
                >
                  <Icon name="check" size={30} strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 text-xl font-semibold">Message ready to send</h3>
                <p
                  className="mt-2 max-w-sm text-sm leading-relaxed"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  Your email client should have opened with the message pre-filled. If it
                  didn&rsquo;t, write to{' '}
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-medium text-brand-600 underline decoration-brand-500/40 underline-offset-4 hover:text-brand-500 dark:text-brand-300"
                  >
                    {profile.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-full border border-[rgb(var(--hairline))] px-5 py-2 text-sm font-medium transition-colors duration-300 hover:border-brand-500/45 hover:text-brand-500"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3 className="text-sm font-semibold tracking-[0.12em] uppercase">
                  Send a message
                </h3>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Field
                    id="contact-name"
                    label="Name"
                    error={errors.name}
                    value={fields.name}
                    onChange={update('name')}
                    autoComplete="name"
                    placeholder="Amina Benali"
                  />
                  <Field
                    id="contact-email"
                    label="Email"
                    type="email"
                    error={errors.email}
                    value={fields.email}
                    onChange={update('email')}
                    autoComplete="email"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="mt-4">
                  <Field
                    id="contact-message"
                    label="Message"
                    as="textarea"
                    error={errors.message}
                    value={fields.message}
                    onChange={update('message')}
                    placeholder="Tell me about the role, the team and the problems you're solving."
                  />
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Button type="submit" size="lg" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                    <Icon
                      name="send"
                      size={16}
                      className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Button>
                  <p className="text-[0.78rem]" style={{ color: 'var(--fg-subtle)' }}>
                    Opens in your mail app — nothing is stored on this site.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

/* ───────────────────────────── Form field ───────────────────────────── */

type FieldProps = {
  id: string
  label: string
  value: string
  error?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: string
  as?: 'input' | 'textarea'
  placeholder?: string
  autoComplete?: string
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = 'text',
  as = 'input',
  placeholder,
  autoComplete,
}: FieldProps) {
  const errorId = `${id}-error`

  const control =
    'w-full rounded-xl border bg-[color-mix(in_oklab,var(--fg)_3%,transparent)] px-4 py-3 text-sm transition-all duration-300 ease-[var(--ease-out-soft)] placeholder:text-[var(--fg-subtle)] focus:outline-none'
  const tone = error
    ? 'border-red-500/60 focus:border-red-500'
    : 'border-[rgb(var(--hairline))] focus:border-brand-500/60 focus:bg-[color-mix(in_oklab,var(--fg)_1%,transparent)]'

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[0.82rem] font-medium">
        {label}
      </label>

      {as === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          rows={6}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`${control} ${tone} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`${control} ${tone}`}
        />
      )}

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1.5 flex items-center gap-1.5 text-[0.78rem] text-red-500"
        >
          <Icon name="alert" size={13} />
          {error}
        </p>
      )}
    </div>
  )
}
