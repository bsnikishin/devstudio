'use client'

import type { App } from '@/data/apps'
import { shotLocales } from '@/data/shots'
import { useLocale } from '@/contexts/LocaleContext'

/** Raw app screens in the reader's language when they exist, otherwise in English. */
export function useShots(app: App): { src: string; alt: string }[] {
  const { locale } = useLocale()
  if (!app.shots) return []
  const have = shotLocales[app.id] ?? []
  if (!have.length) return []
  const loc = have.includes(locale) ? locale : have.includes('en') ? 'en' : have[0]
  return app.shots.scenes.map((scene) => ({ src: `/shots/${app.id}/${loc}/${scene}.jpg`, alt: `${app.title} — ${scene}` }))
}

export function ShotImage({ src, alt, landscape, className = '' }: { src: string; alt: string; landscape?: boolean; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      width={landscape ? 1200 : 600}
      height={landscape ? 552 : 1304}
      className={`shot h-auto ${landscape ? '!rounded-[14px] sm:!rounded-[18px]' : ''} ${className}`}
    />
  )
}
