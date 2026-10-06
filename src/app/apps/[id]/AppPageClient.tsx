'use client'

import Link from 'next/link'
import type { App, AppTheme } from '@/data/apps'
import { getMarketing, splitFeature } from '@/data/marketing'
import { useLocale } from '@/contexts/LocaleContext'
import AppIcon from '@/components/site/AppIcon'
import Catalogue from '@/components/site/Catalogue'
import { useShots, ShotImage } from '@/components/site/Shots'

const DISPLAY: Record<AppTheme['display'], string> = {
  serif: 'font-serif font-semibold',
  'serif-italic': 'font-serif font-normal italic',
  unbounded: 'font-unbounded font-extrabold !tracking-[-0.01em]',
  sans: 'font-sans font-bold',
}

const APPLE = 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'

function StoreButton({ app }: { app: App }) {
  const { t } = useLocale()
  const th = app.theme
  const solid = { background: th.ink, color: th.bg }
  if (app.telegramUrl) {
    return (
      <a href={app.telegramUrl} target="_blank" rel="noopener noreferrer" style={solid} className="inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-[15px] font-medium hover:opacity-90">
        {t('app.openTelegram')} ↗
      </a>
    )
  }
  if (!app.appStoreUrl || app.soon) {
    return (
      <span style={{ borderColor: th.muted, color: th.muted }} className="inline-flex items-center gap-2.5 rounded-xl border px-5 py-3 text-[15px]">
        {t('app.comingSoon')}
      </span>
    )
  }
  return (
    <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" style={solid} className="inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-[15px] font-medium hover:opacity-90">
      <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden><path d={APPLE} /></svg>
      {t('app.downloadAppStore')}
    </a>
  )
}

export default function AppPageClient({ app }: { app: App }) {
  const { t, locale } = useLocale()
  const m = getMarketing(app.id, locale)
  const shots = useShots(app)
  const th = app.theme
  const landscape = !!app.shots?.landscape
  const status = app.soon ? t('meta.soon') : app.telegramUrl ? t('meta.bot') : t('meta.free')

  return (
    <>
      <section style={{ background: th.bg, color: th.ink }}>
        <div className="page pb-16 pt-8 sm:pb-24 sm:pt-10">
          <Link href="/#apps" className="label opacity-70 hover:opacity-100">← {t('app.allApps')}</Link>
          <div className={`mt-10 grid items-center gap-12 lg:gap-16 ${shots.length ? 'lg:grid-cols-[1fr_1.1fr]' : ''}`}>
            <div>
              <div className="flex items-center gap-4">
                <AppIcon app={app} size={68} />
                <div>
                  <div className="text-[19px] font-semibold leading-tight">{app.title}</div>
                  <div className="label mt-1.5" style={{ color: th.muted }}>
                    {app.platform === 'iOS' ? `${app.devices} · ` : ''}{status}
                  </div>
                </div>
              </div>
              <h1 className={`${DISPLAY[th.display]} mt-9 max-w-[14em] text-balance text-[38px] leading-[1.05] tracking-[-0.02em] sm:text-[54px]`}>
                {m?.headline ?? m?.tagline}
              </h1>
              <p className="mt-6 max-w-[34em] text-pretty text-[17px] opacity-90 sm:text-[18px]">{m?.description}</p>
              <div className="mt-9">
                <StoreButton app={app} />
              </div>
              <div className="label mt-6 flex flex-wrap gap-x-6 gap-y-2">
                <Link href={`/apps/${app.id}/support`} className="link-rule">{t('link.support')}</Link>
                <Link href={`/apps/${app.id}/privacy`} className="link-rule">{t('link.privacy')}</Link>
              </div>
            </div>
            {shots.length > 0 && (
              <div className={`no-scrollbar -mx-[18px] flex snap-x gap-4 overflow-x-auto px-[18px] sm:mx-0 sm:px-0 lg:overflow-visible ${landscape ? 'lg:flex-col' : 'lg:justify-end lg:gap-5'}`}>
                {shots.slice(0, landscape ? 2 : 3).map((s, i) => (
                  <div
                    key={s.src}
                    className={`shrink-0 snap-start ${landscape ? 'w-[86%] lg:w-full' : 'w-[58%] sm:w-[36%] lg:w-[31%]'} ${!landscape && i === 1 ? 'lg:mt-12' : ''} ${!landscape && i === 2 ? 'lg:mt-24' : ''} ${landscape && i === 1 ? 'lg:ms-[18%] lg:w-[82%]' : ''}`}
                  >
                    <ShotImage src={s.src} alt={s.alt} landscape={landscape} className="!shadow-[0_1px_0_rgba(0,0,0,0.04),0_22px_44px_-26px_rgba(0,0,0,0.45)]" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {m && m.features.length > 0 && (
        <section className="page">
          <div className="grid gap-x-10 gap-y-6 border-b border-rule py-14 sm:grid-cols-[130px_1fr] sm:py-20 lg:grid-cols-[150px_1fr]">
            <h2 className="label pt-1 text-muted">{t('app.features')}</h2>
            <dl className="grid gap-x-12 gap-y-9 md:grid-cols-2">
              {m.features.map((f) => {
                const { title, text } = splitFeature(f)
                return (
                  <div key={title} className="border-t border-rule pt-4">
                    <dt className="font-serif text-[19px] font-semibold leading-snug">{title}</dt>
                    {text && <dd className="mt-2 text-pretty text-[15px] text-ink-soft">{text}</dd>}
                  </div>
                )
              })}
            </dl>
          </div>
        </section>
      )}

      <section className="page pt-14">
        <h2 className="label pb-4 text-muted">{t('app.otherApps')}</h2>
        <Catalogue exclude={app.id} />
      </section>
    </>
  )
}
