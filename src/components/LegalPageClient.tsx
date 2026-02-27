'use client'

import Link from 'next/link'
import { ArrowLeft, Shield, FileText, Cookie } from 'lucide-react'
import { useLocale } from '@/contexts/LocaleContext'
import { legal, type LegalPage } from '@/data/legal'

const icons = {
  privacy: Shield,
  terms: FileText,
  cookies: Cookie,
}

export default function LegalPageClient({ type }: { type: 'privacy' | 'terms' | 'cookies' }) {
  const { locale } = useLocale()

  const data: LegalPage = legal[locale]?.[type] ?? legal.en[type]
  const Icon = icons[type]

  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-semibold text-gray-600">NikiB</span><span className="font-light">Studio</span>
        </Link>

        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-text">{data.title}</h1>
            <p className="text-gray-500 text-sm mt-1">{data.lastUpdated}</p>
          </div>
        </div>

        <div className="prose prose-gray max-w-none space-y-8">
          {data.sections.map((section, i) => {
            const isLast = i === data.sections.length - 1
            return (
              <section key={i} className={isLast ? 'border-t border-gray-200 pt-6' : ''}>
                <h2 className="text-xl font-semibold text-text mb-3">{section.heading}</h2>
                <div
                  className="text-gray-600 space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-gray-700 [&_p]:leading-relaxed [&_a]:text-primary [&_a]:hover:underline"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
