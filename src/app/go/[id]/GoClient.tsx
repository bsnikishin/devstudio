'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { apps } from '@/data/apps'
import { useLocale } from '@/contexts/LocaleContext'
import AppIcon from '@/components/site/AppIcon'

/** Short link for QR codes and in-app sharing: opens the App Store (on iOS) or Telegram. */
export default function GoClient({ id }: { id: string }) {
  const { t } = useLocale()
  const app = apps.find((a) => a.id === id)
  const targetUrl = app?.telegramUrl ?? (app?.soon ? null : app?.appStoreUrl) ?? null
  const [redirecting, setRedirecting] = useState(false)

  useEffect(() => {
    if (!targetUrl) return
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    if (!app?.telegramUrl && !isIOS) return
    setRedirecting(true)
    const timer = setTimeout(() => { window.location.href = targetUrl }, 1200)
    return () => clearTimeout(timer)
  }, [app, targetUrl])

  if (!app) return null
  const th = app.theme
  return (
    <section style={{ background: th.bg, color: th.ink }} className="flex min-h-[70vh] items-center">
      <div className="page w-full py-16 text-center">
        <AppIcon app={app} size={112} className="mx-auto" />
        <h1 className="mt-7 font-serif text-[36px] font-semibold tracking-[-0.02em]">{app.title}</h1>
        <p className="mt-1 opacity-75">{app.tagline}</p>
        <div className="mt-10">
          {!targetUrl ? (
            <p className="label" style={{ color: th.muted }}>{t('redirect.comingSoonDesc')}</p>
          ) : redirecting ? (
            <>
              <p className="label">{app.telegramUrl ? t('redirect.openingTelegram') : t('redirect.opening')}</p>
              <a href={targetUrl} className="label link-rule mt-4 inline-block" style={{ color: th.muted }}>{t('redirect.manual')}</a>
            </>
          ) : (
            <a href={targetUrl} target="_blank" rel="noopener noreferrer" style={{ background: th.ink, color: th.bg }} className="inline-flex rounded-xl px-6 py-3 text-[16px] font-medium hover:opacity-90">
              {app.telegramUrl ? t('app.openTelegram') : t('redirect.openBtn')}
            </a>
          )}
        </div>
        {app.listed && (
          <Link href={`/apps/${app.id}`} className="label link-rule mt-12 inline-block" style={{ color: th.muted }}>
            {t('link.more')}
          </Link>
        )}
      </div>
    </section>
  )
}
