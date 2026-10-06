'use client'

import { listedApps } from '@/data/apps'
import { useLocale } from '@/contexts/LocaleContext'
import Catalogue from '@/components/site/Catalogue'
import Spread from '@/components/site/Spread'
import Rich from '@/components/site/Rich'

const UPDATED = new Date(2026, 9, 7)

export default function HomeClient() {
  const { t, locale } = useLocale()
  const inStore = listedApps.filter((a) => a.appStoreUrl && !a.soon).length
  const updated = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(UPDATED)
  const facts: [string, string][] = [
    [t('facts.appStore'), String(inStore)],
    [t('facts.ads'), t('facts.adsValue')],
    [t('facts.accounts'), t('facts.accountsValue')],
    [t('facts.data'), t('facts.dataValue')],
    [t('facts.updated'), updated],
  ]

  return (
    <div className="page">
      <section className="grid gap-10 border-b border-rule pb-14 pt-12 sm:pb-16 sm:pt-16 lg:grid-cols-[1fr_330px] lg:gap-20 lg:pt-20">
        <div>
          <h1 className="max-w-[13em] text-balance font-serif text-[38px] font-medium leading-[1.06] tracking-[-0.02em] sm:text-[52px] lg:text-[58px]">
            <Rich text={t('home.title')} emClassName="font-normal italic" />
          </h1>
          <p className="mt-7 max-w-[34em] text-pretty text-[17px] text-ink-soft sm:text-[19px]">{t('home.lead')}</p>
        </div>
        <dl className="label self-end border-t border-ink">
          {facts.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-6 border-b border-rule py-[11px]">
              <dt className="text-muted">{k}</dt>
              <dd className="text-end text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="apps" className="scroll-mt-6 pb-10 pt-4">
        <Catalogue />
      </section>

      {listedApps.filter((a) => !a.soon && a.shots).map((app) => (
        <Spread key={app.id} app={app} />
      ))}
    </div>
  )
}
