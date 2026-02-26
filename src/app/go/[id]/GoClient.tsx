'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { apps } from '@/data/apps'
import { useLocale } from '@/contexts/LocaleContext'

export default function GoClient({ id }: { id: string }) {
  const { t } = useLocale()
  const app = apps.find((a) => a.id === id)
  const [redirecting, setRedirecting] = useState(false)
  const [countdown, setCountdown] = useState(2)

  useEffect(() => {
    if (!app?.appStoreUrl) return

    // Detect iOS / iPadOS
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

    if (isIOS) {
      setRedirecting(true)
      const interval = setInterval(() => {
        setCountdown((c) => c - 1)
      }, 1000)
      const timer = setTimeout(() => {
        clearInterval(interval)
        window.location.href = app.appStoreUrl!
      }, 2000)
      return () => {
        clearTimeout(timer)
        clearInterval(interval)
      }
    }
  }, [app])

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">App not found.</p>
      </div>
    )
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br ${app.gradient} relative overflow-hidden`}>
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-sm">
        {/* App Icon */}
        <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl border border-white/30">
          <span className="text-white text-6xl font-bold">{app.title.charAt(0)}</span>
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">{app.title}</h1>
        <p className="text-white/80 mb-10">{app.tagline}</p>

        {app.appStoreUrl ? (
          <>
            {redirecting ? (
              <div className="space-y-4">
                {/* Animated ring */}
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-4 border-white/30" />
                  <div
                    className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"
                    style={{ animationDuration: '1s' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                    {countdown}
                  </div>
                </div>
                <p className="text-white/90 text-lg font-medium">{t('redirect.opening')}</p>
                <a
                  href={app.appStoreUrl}
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm underline-offset-2 hover:underline mt-4 transition-colors"
                >
                  {t('redirect.manual')}
                </a>
              </div>
            ) : (
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-text px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/90 transition-colors shadow-xl"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                {t('redirect.openBtn')}
              </a>
            )}
          </>
        ) : (
          <div className="space-y-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30">
              <p className="text-white font-semibold text-lg">{t('redirect.comingSoon')}</p>
              <p className="text-white/80 text-sm mt-1">{t('redirect.comingSoonDesc')}</p>
            </div>
          </div>
        )}

        {/* Back link */}
        <Link
          href={`/apps/${app.id}`}
          className="block mt-10 text-white/60 hover:text-white/90 text-sm transition-colors"
        >
          {t('app.back')}
        </Link>
      </div>
    </div>
  )
}
