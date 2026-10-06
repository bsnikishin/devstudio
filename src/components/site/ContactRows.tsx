'use client'

import { useLocale } from '@/contexts/LocaleContext'
import { CONTACT_EMAIL, TELEGRAM_HANDLE, TELEGRAM_URL } from '@/data/contact'

/** Telegram and email as two catalogue rows. */
export default function ContactRows({ email = CONTACT_EMAIL }: { email?: string }) {
  const { t } = useLocale()
  const rows = [
    { label: t('support.telegram'), value: TELEGRAM_HANDLE, href: TELEGRAM_URL, external: true },
    { label: t('support.email'), value: email, href: `mailto:${email}`, external: false },
  ]
  return (
    <ul className="border-t border-ink">
      {rows.map((r) => (
        <li key={r.href}>
          <a
            href={r.href}
            {...(r.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex items-baseline justify-between gap-6 border-b border-rule py-4"
          >
            <span className="label text-muted">{r.label}</span>
            <span className="font-serif text-[20px] group-hover:text-accent sm:text-[22px]" dir="ltr">{r.value} ↗</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
