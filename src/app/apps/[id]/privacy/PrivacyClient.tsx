'use client'

import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'
import { apps } from '@/data/apps'
import { useLocale } from '@/contexts/LocaleContext'

export default function PrivacyClient({ id }: { id: string }) {
  const { t } = useLocale()
  const app = apps.find((a) => a.id === id)

  if (!app) {
    return <div className="section-padding container-custom"><p className="text-gray-500">App not found.</p></div>
  }

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <Link
          href={`/apps/${app.id}`}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          {app.title}
        </Link>

        <div className="flex items-center gap-4 mb-10">
          <img
            src={app.iconPath}
            alt={app.title}
            className="w-16 h-16 rounded-2xl shadow-lg object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-text">{t('privacy.title')}</h1>
            <p className="text-gray-500 text-sm mt-1">{app.title} · <span className="font-semibold text-gray-600">NikiB</span><span className="font-light">Studio</span></p>
          </div>
        </div>

        <div className="prose prose-gray max-w-none space-y-8">
          <div className="bg-secondary/30 rounded-2xl p-6 flex gap-3">
            <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-gray-700 text-sm m-0">{t('privacy.intro')}</p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-text mb-3">{t('privacy.section1.title')}</h2>
            <p className="text-gray-600">{t('privacy.section1.text')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text mb-3">{t('privacy.section2.title')}</h2>
            <p className="text-gray-600">{t('privacy.section2.text')}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text mb-3">{t('privacy.section3.title')}</h2>
            <p className="text-gray-600">{t('privacy.section3.text')}</p>
          </section>

          <section className="border-t border-gray-200 pt-6">
            <p className="text-gray-600 text-sm">{t('privacy.contact')}</p>
            <a
              href={`mailto:${app.supportEmail}`}
              className="text-primary hover:underline font-medium"
            >
              {app.supportEmail}
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}
