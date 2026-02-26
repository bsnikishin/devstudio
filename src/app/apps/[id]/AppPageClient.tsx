'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft, Shield, Mail, Check, Copy, ExternalLink, Send,
  ChevronRight, Info, Link2
} from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { App, getAppStoreConnectUrls, DOMAIN } from '@/data/apps'
import { useLocale } from '@/contexts/LocaleContext'

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

// ─── Copy Button ─────────────────────────────────────────────────────────────
function CopyButton({ text, copyLabel, copiedLabel }: { text: string; copyLabel: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
      className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all ${
        copied
          ? 'bg-green-100 text-green-700'
          : 'bg-secondary/60 text-primary hover:bg-secondary'
      }`}
    >
      <Copy className="w-3.5 h-3.5" />
      {copied ? copiedLabel : copyLabel}
    </button>
  )
}

// ─── URL Row ─────────────────────────────────────────────────────────────────
function UrlRow({ label, url, copyLabel, copiedLabel }: {
  label: string; url: string; copyLabel: string; copiedLabel: string
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 bg-white rounded-xl border border-gray-100">
      <span className="text-xs font-semibold text-gray-500 w-36 flex-shrink-0">{label}</span>
      <code className="flex-1 text-xs text-text break-all font-mono">{url}</code>
      <div className="flex items-center gap-2 flex-shrink-0">
        <CopyButton text={url} copyLabel={copyLabel} copiedLabel={copiedLabel} />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 text-gray-400 hover:text-primary transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
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
  const { t } = useLocale()
  const urls = getAppStoreConnectUrls(app)

  const sections = [
    { id: 'marketing', label: t('section.marketing') },
    { id: 'privacy', label: t('section.privacy') },
    { id: 'support', label: t('section.support') },
    { id: 'link', label: t('section.link') },
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
              <div className={`w-24 h-24 bg-gradient-to-br ${app.gradient} rounded-3xl flex items-center justify-center mb-6 shadow-xl`}>
                <span className="text-white text-4xl font-bold">{app.title.charAt(0)}</span>
              </div>

              <span className="inline-block px-4 py-1 bg-secondary text-primary text-sm rounded-full mb-4">
                {app.category}
              </span>
              <span className="inline-block ml-2 px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full mb-4 font-medium">
                {t('common.iosOnly')}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-text mb-3">
                {app.title}
              </h1>
              <p className="text-xl text-primary font-medium mb-4">{app.tagline}</p>
              <p className="text-lg text-gray-600 mb-8">
                {app.fullDescription}
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
                  {app.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
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
            <div className={`bg-gradient-to-br ${app.gradient} rounded-3xl p-8 md:p-12 text-center`}>
              <Mail className="w-12 h-12 text-white mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('support.title')}
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                {t('support.desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${app.supportEmail}`}
                  className="inline-flex items-center gap-2 bg-white text-text font-medium px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {t('support.emailBtn')}
                </a>
                <a
                  href="https://t.me/nikibstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/20 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/30 transition-colors backdrop-blur-sm"
                >
                  <Send className="w-5 h-5" />
                  {t('support.telegramBtn')}
                </a>
              </div>
              <p className="text-white/60 text-sm mt-6">{app.supportEmail}</p>
            </div>
          </AnimatedSection>
        </section>

        {/* ── SECTION 4: App Store Link ─────────────────────────────── */}
        <section id="link" className="scroll-mt-24">
          <AnimatedSection>
            <div className="border border-gray-200 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center">
                  <Link2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text">{t('link.title')}</h2>
                  <p className="text-sm text-gray-500">{app.title}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-8 max-w-2xl">
                {t('link.desc')}
              </p>

              {/* Smart Redirect Link — the main "in-app" link */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="font-semibold text-text">{t('link.redirectUrl')}</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                    Smart
                  </span>
                </div>
                <UrlRow
                  label={t('link.redirectUrl')}
                  url={urls.redirect}
                  copyLabel={t('link.copy')}
                  copiedLabel={t('link.copied')}
                />
                <p className="text-xs text-gray-500 mt-2 ml-1">
                  iOS → App Store redirect · Desktop → landing page
                </p>
              </div>

              {/* App Store Connect URLs */}
              <div>
                <h3 className="font-semibold text-text mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  {t('link.appStoreConnect.title')}
                </h3>
                <div className="space-y-3">
                  <UrlRow label={t('link.marketingUrl')} url={urls.marketing} copyLabel={t('link.copy')} copiedLabel={t('link.copied')} />
                  <UrlRow label={t('link.privacyUrl')} url={urls.privacy} copyLabel={t('link.copy')} copiedLabel={t('link.copied')} />
                  <UrlRow label={t('link.supportUrl')} url={urls.support} copyLabel={t('link.copy')} copiedLabel={t('link.copied')} />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

      </div>
    </div>
  )
}
