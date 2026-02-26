'use client'

import Link from 'next/link'
import { ArrowLeft, Mail, Send, MessageCircle } from 'lucide-react'
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
            <p className="text-gray-500 text-sm mt-1">{app.title} · NikiBStudio</p>
          </div>
        </div>

        <p className="text-gray-600 mb-10 text-lg">{t('support.desc')}</p>

        <div className="space-y-4">
          <a
            href={`mailto:${app.supportEmail}`}
            className={`flex items-center gap-4 p-6 bg-gradient-to-r ${app.gradient} text-white rounded-2xl hover:opacity-90 transition-opacity`}
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-semibold text-lg">{t('support.emailBtn')}</div>
              <div className="text-white/80 text-sm">{app.supportEmail}</div>
            </div>
          </a>

          <a
            href="https://t.me/nikibstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors"
          >
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <Send className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-text text-lg">{t('support.telegramBtn')}</div>
              <div className="text-gray-500 text-sm">@nikibstudio</div>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 bg-secondary/30 rounded-2xl">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-text">nikibstudio.site</div>
              <div className="text-gray-500 text-sm">hello@nikibstudio.site</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
