'use client'

import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'
import LanguageSwitch from './LanguageSwitch'

export default function Header() {
  const { t } = useLocale()
  return (
    <header className="page">
      <div className="flex items-baseline justify-between gap-6 border-b border-ink pb-5 pt-7">
        <Link href="/" className="font-serif text-[20px] font-semibold tracking-[-0.01em] sm:text-[21px]">
          {t('site.name')}
        </Link>
        <nav className="label flex items-baseline gap-5 text-muted sm:gap-7">
          <Link href="/#apps" className="hidden hover:text-ink sm:inline">{t('nav.apps')}</Link>
          <Link href="/contacts" className="hover:text-ink">{t('nav.contact')}</Link>
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  )
}
