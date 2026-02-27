'use client'

import Link from 'next/link'
import { ArrowLeft, Mail, Send } from 'lucide-react'
import { apps } from '@/data/apps'
import { useLocale } from '@/contexts/LocaleContext'

export default function SupportClient({ id }: { id: string }) {
  const { t } = useLocale()
  const app = apps.find((a) => a.id === id)

  if (!app) {
    return <div className="section-padding container-custom"><p className="text-gray-500">App not found.</p></div>
  }

  return (
    <div className="section-padding">
      <div className="container-custom max-w-2xl">
        <Link
          href={`/apps/${app.id}`}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-10 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          {app.title}
        </Link>

        <div className="flex items-center gap-4 mb-10">
          <img
            src={app.iconPath}
            alt={app.title}
            className="w-16 h-16 rounded-2xl shadow-lg object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-text">{t('support.title')}</h1>
            <p className="text-gray-500 text-sm mt-1">{app.title} · <span className="font-semibold text-gray-600">NikiB</span><span className="font-light">Studio</span></p>
          </div>
        </div>

        <p className="text-gray-600 mb-10 text-lg">{t('support.desc')}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://t.me/nikibstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-primary rounded-2xl hover:opacity-90 transition-opacity group"
          >
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
              <Send className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-white">{t('support.telegramBtn')}</div>
              <div className="text-white/70 text-xs mt-0.5">@nikibstudio</div>
            </div>
          </a>

          <a
            href={`mailto:${app.supportEmail}`}
            className="flex items-center gap-4 p-5 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors group"
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow transition-shadow">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-text">{t('support.emailBtn')}</div>
              <div className="text-gray-400 text-xs mt-0.5">{app.supportEmail}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
