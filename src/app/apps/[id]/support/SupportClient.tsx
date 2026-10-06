'use client'

import Link from 'next/link'
import { apps } from '@/data/apps'
import { useLocale } from '@/contexts/LocaleContext'
import DocHeader from '@/components/site/DocHeader'
import ContactRows from '@/components/site/ContactRows'

export default function SupportClient({ id }: { id: string }) {
  const { t } = useLocale()
  const app = apps.find((a) => a.id === id)
  if (!app) return null
  const back = app.listed ? { href: `/apps/${app.id}`, label: app.title } : { href: '/', label: t('site.name') }

  return (
    <div className="page">
      <div className="max-w-prose">
        <DocHeader back={back} app={app} title={t('support.title')} note={app.title} />
        <p className="pb-10 pt-8 text-pretty text-[19px] text-ink-soft">{t('support.desc')}</p>
        <ContactRows email={app.supportEmail} />
        {app.telegramUrl && (
          <p className="pt-6 text-pretty text-[16px] text-ink-soft">
            {t('support.paysupport')}{' '}
            <a href={app.telegramUrl} target="_blank" rel="noopener noreferrer" dir="ltr" className="link-rule whitespace-nowrap font-mono text-[15px] text-ink">
              /paysupport ↗
            </a>
          </p>
        )}
        <p className="label pt-6 text-muted">
          <Link href={`/apps/${app.id}/privacy`} className="link-rule">{t('link.privacy')}</Link>
        </p>
      </div>
    </div>
  )
}
