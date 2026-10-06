'use client'

import Link from 'next/link'
import { listedApps, type App } from '@/data/apps'
import { getMarketing } from '@/data/marketing'
import { useLocale } from '@/contexts/LocaleContext'
import type { TranslationKeys } from '@/lib/translations'
import AppIcon from './AppIcon'
import AppMeta from './AppMeta'

const GROUPS: { key: keyof TranslationKeys; match: (a: App) => boolean }[] = [
  { key: 'group.apps', match: (a) => a.group === 'apps' && !a.soon },
  { key: 'group.games', match: (a) => a.group === 'games' && !a.soon },
  { key: 'group.telegram', match: (a) => a.group === 'telegram' && !a.soon },
  { key: 'group.soon', match: (a) => !!a.soon },
]

/** Catalogue number: position among the listed apps, "01"… */
export function catalogueNumber(app: App) {
  return String(listedApps.indexOf(app) + 1).padStart(2, '0')
}

function Row({ app }: { app: App }) {
  const { locale } = useLocale()
  const m = getMarketing(app.id, locale)
  return (
    <li className="group relative grid grid-cols-[52px_1fr] gap-x-4 gap-y-1.5 border-t border-rule py-5 first:border-t-0 sm:grid-cols-[36px_64px_200px_1fr_150px] sm:gap-x-6 sm:py-6 lg:grid-cols-[36px_64px_230px_1fr_170px]">
      <span className="label hidden pt-1.5 text-accent sm:block">{catalogueNumber(app)}</span>
      <AppIcon app={app} size={64} dim={app.soon} className="max-sm:row-span-3 max-sm:!h-[52px] max-sm:!w-[52px] max-sm:!rounded-[12px]" />
      <div>
        <Link
          href={`/apps/${app.id}`}
          className={`font-serif text-[22px] font-semibold leading-[1.1] tracking-[-0.01em] after:absolute after:inset-0 group-hover:text-accent sm:text-[25px] ${app.soon ? 'text-muted' : ''}`}
        >
          {app.title}
        </Link>
        <div className="mt-1 text-[15px] text-muted">{m?.tagline}</div>
      </div>
      <p className={`col-start-2 text-[15px] sm:col-start-auto sm:text-[16px] ${app.soon ? 'text-muted' : 'text-ink-soft'}`}>{m?.summary}</p>
      <AppMeta app={app} className="col-start-2 sm:col-start-auto sm:text-end" />
    </li>
  )
}

/** The index of all listed apps, grouped like a printed catalogue. */
export default function Catalogue({ exclude }: { exclude?: string }) {
  const { t } = useLocale()
  const apps = listedApps.filter((a) => a.id !== exclude)
  return (
    <div>
      {GROUPS.map((g) => {
        const rows = apps.filter(g.match)
        if (!rows.length) return null
        return (
          <div key={g.key} className="grid gap-x-10 border-t border-rule pt-5 first:border-t-0 sm:grid-cols-[130px_1fr] lg:grid-cols-[150px_1fr]">
            <h2 className="label pb-1 pt-2 text-muted">{t(g.key)}</h2>
            <ol>{rows.map((a) => <Row key={a.id} app={a} />)}</ol>
          </div>
        )
      })}
    </div>
  )
}
