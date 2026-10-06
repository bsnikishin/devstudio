'use client'

import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'
import Catalogue from '@/components/site/Catalogue'

export default function NotFoundClient() {
  const { t } = useLocale()
  return (
    <div className="page">
      <div className="border-b border-rule pb-10 pt-12 sm:pt-16">
        <p className="label text-accent">404</p>
        <h1 className="mt-4 font-serif text-[38px] font-medium tracking-[-0.02em] sm:text-[52px]">{t('notFound.title')}</h1>
        <p className="mt-4 text-[17px] text-ink-soft">
          <Link href="/" className="link-rule">{t('common.backToHome')}</Link>
        </p>
      </div>
      <div className="pt-4"><Catalogue /></div>
    </div>
  )
}
