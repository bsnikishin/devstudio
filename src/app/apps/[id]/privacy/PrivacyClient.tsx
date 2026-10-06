'use client'

import { apps } from '@/data/apps'
import { getPrivacy } from '@/data/privacy'
import { useLocale } from '@/contexts/LocaleContext'
import DocHeader from '@/components/site/DocHeader'

export default function PrivacyClient({ id }: { id: string }) {
  const { t, locale } = useLocale()
  const app = apps.find((a) => a.id === id)
  const policy = getPrivacy(id, locale)
  if (!app || !policy) return null
  const back = app.listed ? { href: `/apps/${app.id}`, label: app.title } : { href: '/', label: t('site.name') }

  return (
    <div className="page">
      <div className="max-w-prose">
        <DocHeader back={back} app={app} title={policy.title} note={`${app.title} · ${policy.effectiveDate}`} />
        <div className="prose-catalogue pt-8 text-[17px]">
          <p className="text-[19px] text-ink" dangerouslySetInnerHTML={{ __html: policy.intro }} />
          {policy.sections.map((s) => (
            <section key={s.heading} className="mt-10">
              <h2 className="mb-3 font-serif text-[24px] font-semibold leading-snug text-ink">{s.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: s.content }} />
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
