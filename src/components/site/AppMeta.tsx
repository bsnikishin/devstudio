'use client'

import type { App } from '@/data/apps'
import { useLocale } from '@/contexts/LocaleContext'

/** "iPhone · iPad / Free / App Store ↗" — the facts column of a catalogue row. */
export default function AppMeta({ app, className = '' }: { app: App; className?: string }) {
  const { t } = useLocale()
  const status = app.soon ? t('meta.soon') : app.telegramUrl ? t('meta.bot') : t('meta.free')
  const store = app.telegramUrl
    ? { href: app.telegramUrl, label: t('link.telegram') }
    : app.appStoreUrl
      ? { href: app.appStoreUrl, label: t('link.appStore') }
      : null
  return (
    <div className={`label leading-[1.9] text-muted ${className}`}>
      {app.platform === 'iOS' && <div>{app.devices}</div>}
      <div>{status}</div>
      {store && (
        <a href={store.href} target="_blank" rel="noopener noreferrer" className="relative z-10 text-ink link-rule">
          {store.label} ↗
        </a>
      )}
    </div>
  )
}
