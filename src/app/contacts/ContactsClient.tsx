'use client'

import { useLocale } from '@/contexts/LocaleContext'
import DocHeader from '@/components/site/DocHeader'
import ContactRows from '@/components/site/ContactRows'

export default function ContactsClient() {
  const { t } = useLocale()
  return (
    <div className="page">
      <div className="max-w-prose">
        <DocHeader back={{ href: '/', label: t('site.name') }} title={t('contacts.title')} />
        <p className="pb-10 pt-8 text-pretty text-[19px] text-ink-soft">{t('contacts.desc')}</p>
        <ContactRows />
      </div>
    </div>
  )
}
