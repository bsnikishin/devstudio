import Link from 'next/link'
import type { App } from '@/data/apps'
import AppIcon from './AppIcon'

/** Heading of a text page: back link, optional app icon, title and a small line under it. */
export default function DocHeader({ back, app, title, note }: { back: { href: string; label: string }; app?: App; title: string; note?: string }) {
  return (
    <div className="border-b border-rule pb-8 pt-10 sm:pt-14">
      <Link href={back.href} className="label text-muted hover:text-ink">← {back.label}</Link>
      <div className="mt-8 flex items-center gap-5">
        {app && <AppIcon app={app} size={60} />}
        <div>
          <h1 className="text-balance font-serif text-[32px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[44px]">{title}</h1>
          {note && <p className="label mt-2 text-muted">{note}</p>}
        </div>
      </div>
    </div>
  )
}
