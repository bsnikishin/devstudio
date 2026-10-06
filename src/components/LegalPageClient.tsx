'use client'

import { useLocale } from '@/contexts/LocaleContext'
import { getLegal, type LegalKind } from '@/data/legal'
import DocHeader from '@/components/site/DocHeader'

export default function LegalPageClient({ type }: { type: LegalKind }) {
  const { t, locale } = useLocale()
  const data = getLegal(type, locale)
  return (
    <div className="page">
      <div className="max-w-prose">
        <DocHeader back={{ href: '/', label: t('site.name') }} title={data.title} note={data.lastUpdated} />
        <div className="prose-catalogue pt-6 text-[17px]">
          {data.sections.map((s) => (
            <section key={s.heading} className="mt-9">
              <h2 className="mb-3 font-serif text-[24px] font-semibold leading-snug text-ink">{s.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: s.content }} />
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
