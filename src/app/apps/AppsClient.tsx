'use client'

import { useLocale } from '@/contexts/LocaleContext'
import Catalogue from '@/components/site/Catalogue'

export default function AppsClient() {
  const { t } = useLocale()
  return (
    <div className="page">
      <h1 className="border-b border-rule pb-8 pt-12 font-serif text-[38px] font-medium tracking-[-0.02em] sm:pt-16 sm:text-[52px]">
        {t('app.allApps')}
      </h1>
      <div className="pt-4">
        <Catalogue />
      </div>
    </div>
  )
}
