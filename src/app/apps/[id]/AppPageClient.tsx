'use client'

import Link from 'next/link'
import {
  ArrowLeft, Shield, Mail, Check, ExternalLink, Send,
  ChevronRight, Info
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { App } from '@/data/apps'
import { useLocale } from '@/contexts/LocaleContext'
import { ldreamMarketing, type AppMarketing } from '@/data/ldream-marketing'
import { tarotaperMarketing } from '@/data/tarotaper-marketing'
import { colorbrainMarketing } from '@/data/colorbrain-marketing'

const marketingData: Record<string, Record<string, AppMarketing>> = {
  ldream: ldreamMarketing,
  tarotaper: tarotaperMarketing,
  colorbrain: colorbrainMarketing,
}

interface Props { app: App }

// ─── App Store Button ────────────────────────────────────────────────────────
function AppStoreButton({ app, label, comingSoon }: { app: App; label: string; comingSoon: string }) {
  if (!app.appStoreUrl) {
    return (
      <div className="inline-flex items-center gap-3 bg-gray-100 text-gray-500 px-6 py-3 rounded-xl cursor-not-allowed">
        <svg className="w-7 h-7 opacity-50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="text-left">
          <div className="text-xs opacity-70">{comingSoon}</div>
          <div className="text-base font-semibold -mt-0.5">App Store</div>
        </div>
      </div>
    )
  }

  return (
    <a
      href={app.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div className="text-left">
        <div className="text-xs opacity-80">{label}</div>
        <div className="text-base font-semibold -mt-0.5">App Store</div>
      </div>
    </a>
  )
}

// ─── Section Anchor Nav ───────────────────────────────────────────────────────
function SectionNav({ sections }: { sections: { id: string; label: string }[] }) {
  return (
    <nav className="flex items-center gap-1 overflow-x-auto pb-1 mb-8 scrollbar-hide">
      {sections.map((s, i) => (
        <span key={s.id} className="flex items-center gap-1 flex-shrink-0">
          <a
            href={`#${s.id}`}
            className="text-sm text-gray-500 hover:text-primary transition-colors px-2 py-1 rounded-lg hover:bg-secondary/50"
          >
            {s.label}
          </a>
          {i < sections.length - 1 && <ChevronRight className="w-3 h-3 text-gray-300 flex-shrink-0" />}
        </span>
      ))}
    </nav>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AppPageClient({ app }: Props) {
  const { t, locale } = useLocale()
  const appMarketing = marketingData[app.id]
  const marketing = appMarketing ? (appMarketing[locale] ?? appMarketing.en) : null

  const sections = [
    { id: 'marketing', label: t('section.marketing') },
    { id: 'privacy', label: t('section.privacy') },
    { id: 'support', label: t('section.support') },
  ]

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Back */}
        <AnimatedSection>
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('app.back')}
          </Link>
        </AnimatedSection>

        {/* Section navigation */}
        <SectionNav sections={sections} />

        {/* ── SECTION 1: Marketing ─────────────────────────────────── */}
        <section id="marketing" className="mb-20 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              {/* App Icon */}
              <img
                src={app.iconPath}
                alt={app.title}
                className="w-24 h-24 rounded-3xl shadow-xl mb-6 object-cover"
              />

              <span className="inline-block px-4 py-1 bg-secondary text-primary text-sm rounded-full mb-4">
                {app.category}
              </span>
              <span className="inline-block ml-2 px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full mb-4 font-medium">
                {t('common.iosOnly')}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-text mb-3">
                {app.title}
              </h1>
              <p className="text-xl text-primary font-medium mb-4">{marketing?.tagline ?? app.tagline}</p>
              <p className="text-lg text-gray-600 mb-8">
                {marketing?.description ?? app.fullDescription}
              </p>

              <AppStoreButton
                app={app}
                label={t('app.downloadAppStore')}
                comingSoon={t('app.comingSoon')}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              {/* Features */}
              <div className="bg-secondary/30 rounded-3xl p-8">
                <h2 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  {t('app.features')}
                </h2>
                <div className="space-y-3">
                  {(marketing?.features ?? app.features).map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-6 h-6 bg-gradient-to-br ${app.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-text text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── SECTION 2: Privacy ───────────────────────────────────── */}
        <section id="privacy" className="mb-20 scroll-mt-24">
          <AnimatedSection>
            <div className="bg-secondary/20 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text">
                    {t('privacy.title')}
                  </h2>
                  <p className="text-sm text-gray-500 mt-0.5">{app.title}</p>
                </div>
              </div>

              <div className="max-w-3xl space-y-6 text-gray-600">
                <p>{t('privacy.intro')}</p>

                <div>
                  <h3 className="font-semibold text-text mb-2">{t('privacy.section1.title')}</h3>
                  <p>{t('privacy.section1.text')}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-text mb-2">{t('privacy.section2.title')}</h3>
                  <p>{t('privacy.section2.text')}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-text mb-2">{t('privacy.section3.title')}</h3>
                  <p>{t('privacy.section3.text')}</p>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <p className="text-sm">{t('privacy.contact')}</p>
                  <a
                    href={`mailto:${app.supportEmail}`}
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    {app.supportEmail}
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link
                  href={`/apps/${app.id}/privacy`}
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {t('link.privacyUrl')} ↗
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* ── SECTION 3: Support ───────────────────────────────────── */}
        <section id="support" className="mb-20 scroll-mt-24">
          <AnimatedSection>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-2">
                {t('support.title')}
              </h2>
              <p className="text-gray-500">{t('support.desc')}</p>
            </div>
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
          </AnimatedSection>
        </section>

      </div>
    </div>
  )
}
