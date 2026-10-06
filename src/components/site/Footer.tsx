'use client'

import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'
import Rich from './Rich'
import { CONTACT_EMAIL, TELEGRAM_URL, TELEGRAM_HANDLE } from '@/data/contact'

export default function Footer() {
  const { t } = useLocale()
  return (
    <footer className="page mt-24" id="contact">
      <div className="grid gap-8 border-t border-ink pb-8 pt-8 sm:grid-cols-[1fr_auto] sm:gap-16">
        <p className="max-w-[36em] text-[15px] text-muted">
          <Rich text={t('footer.colophon')} emClassName="not-italic font-medium text-ink" />
        </p>
        <div className="label space-y-2 text-muted sm:text-end">
          <a href={`mailto:${CONTACT_EMAIL}`} className="block normal-case tracking-normal hover:text-ink">{CONTACT_EMAIL}</a>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="block hover:text-ink">Telegram {TELEGRAM_HANDLE}</a>
          <div>
            <Link href="/privacy" className="hover:text-ink">{t('footer.privacy')}</Link>
            <span className="mx-2">·</span>
            <Link href="/terms" className="hover:text-ink">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
      <p className="pb-12 text-[12px] text-muted">© 2026 {t('site.name')}. {t('footer.notOffer')}</p>
    </footer>
  )
}
