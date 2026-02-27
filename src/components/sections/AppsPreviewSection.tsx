'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLocale } from '@/contexts/LocaleContext'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import { apps } from '@/data/apps'
import { ldreamMarketing, type AppMarketing } from '@/data/ldream-marketing'
import { tarotaperMarketing } from '@/data/tarotaper-marketing'
import { colorbrainMarketing } from '@/data/colorbrain-marketing'

const marketingData: Record<string, Record<string, AppMarketing>> = {
  ldream: ldreamMarketing,
  tarotaper: tarotaperMarketing,
  colorbrain: colorbrainMarketing,
}

export default function AppsPreviewSection() {
  const { t, locale } = useLocale()
  const previewApps = apps.slice(0, 3)

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            {t('apps.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('apps.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewApps.map((app, index) => {
            const m = marketingData[app.id]
            const marketing = m ? (m[locale] ?? m.en) : null
            return (
            <AnimatedSection key={app.id} delay={index * 0.1}>
              <Link href={`/apps/${app.id}`}>
                <Card className="h-full cursor-pointer group">
                  {/* App Icon */}
                  <img
                    src={app.iconPath}
                    alt={app.title}
                    className="w-20 h-20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg object-cover"
                  />

                  <span className="inline-block px-3 py-1 bg-secondary text-primary text-sm rounded-full mb-3">
                    {app.category}
                  </span>

                  <h3 className="text-xl font-semibold text-text mb-1 group-hover:text-primary transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-sm text-primary/70 mb-3 font-medium">
                    {marketing?.tagline ?? app.tagline}
                  </p>

                  <p className="text-gray-600 mb-4 text-sm">
                    {marketing?.description ?? app.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                      {t('apps.platform')}
                    </span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                  </div>
                </Card>
              </Link>
            </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
          >
            {t('apps.viewAll')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
