'use client'

import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'

export default function MerchPage() {
  const { t } = useLocale()

  return (
    <div className="min-h-[80vh] flex items-center justify-center section-padding">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-text mb-4">{t('merch.title')}</h1>
        <div className="inline-block px-4 py-1.5 bg-secondary text-primary text-sm font-medium rounded-full mb-6">
          {t('merch.comingSoon')}
        </div>
        <p className="text-gray-600 mb-10">{t('merch.comingSoonDesc')}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          ← {t('common.backToHome')}
        </Link>
      </div>
    </div>
  )
}
