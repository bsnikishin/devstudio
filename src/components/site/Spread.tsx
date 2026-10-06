'use client'

import Link from 'next/link'
import type { App } from '@/data/apps'
import { getMarketing, splitFeature } from '@/data/marketing'
import { useLocale } from '@/contexts/LocaleContext'
import { catalogueNumber } from './Catalogue'
import { useShots, ShotImage } from './Shots'

/** One app laid out like a catalogue spread: its screens and four short notes. */
export default function Spread({ app }: { app: App }) {
  const { t, locale } = useLocale()
  const m = getMarketing(app.id, locale)
  const shots = useShots(app)
  if (!m || !shots.length) return null
  const landscape = !!app.shots?.landscape
  const notes = m.features.slice(0, 4).map((f) => splitFeature(f).title)
  const store = app.telegramUrl
    ? { href: app.telegramUrl, label: t('link.telegram') }
    : app.appStoreUrl
      ? { href: app.appStoreUrl, label: t('link.appStore') }
      : null

  return (
    <section id={app.id} className="scroll-mt-6 border-t border-ink py-14 sm:py-20">
      <div className="grid items-baseline gap-x-6 gap-y-3 sm:grid-cols-[36px_1fr_auto]">
        <span className="label hidden text-accent sm:block">{catalogueNumber(app)}</span>
        <h3 className="font-serif text-[30px] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[42px]">
          <Link href={`/apps/${app.id}`} className="hover:text-accent">{app.title}</Link>
          {m.headline && <span className="mt-1 block text-balance text-[22px] font-normal italic leading-[1.2] text-muted sm:text-[30px]">{m.headline}</span>}
        </h3>
        {store && (
          <a href={store.href} target="_blank" rel="noopener noreferrer" className="label link-rule justify-self-start text-ink sm:justify-self-end">
            {store.label} ↗
          </a>
        )}
      </div>

      <div className={`mt-8 grid gap-6 sm:mt-10 lg:gap-7 ${landscape ? 'lg:grid-cols-[1fr_1fr_280px]' : 'lg:grid-cols-[1fr_1fr_1fr_280px]'}`}>
        <div className="no-scrollbar -mx-[18px] flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-[18px] sm:mx-0 sm:px-0 lg:contents">
          {shots.slice(0, landscape ? 2 : 3).map((s) => (
            <div key={s.src} className={`shrink-0 snap-start ${landscape ? 'w-[86%] sm:w-[60%]' : 'w-[62%] sm:w-[38%]'} lg:w-auto`}>
              <ShotImage src={s.src} alt={s.alt} landscape={landscape} />
            </div>
          ))}
        </div>
        <div className="self-start border-t border-ink">
          {notes.map((n) => (
            <p key={n} className="border-b border-rule py-3 text-[15px] text-ink-soft">{n}</p>
          ))}
          <div className="label flex flex-wrap gap-x-5 gap-y-2 pt-4 text-muted">
            <Link href={`/apps/${app.id}`} className="link-rule text-ink">{t('link.more')}</Link>
            <Link href={`/apps/${app.id}/support`} className="link-rule">{t('link.support')}</Link>
            <Link href={`/apps/${app.id}/privacy`} className="link-rule">{t('link.privacy')}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
