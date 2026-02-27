'use client'

import Link from 'next/link'
import { ArrowRight, Heart } from 'lucide-react'
import { useLocale } from '@/contexts/LocaleContext'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import { apps } from '@/data/apps'

export default function AppsClient() {
  const { t } = useLocale()

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text">
            {t('apps.title')}
          </h1>
          <Heart className="w-5 h-5 text-primary opacity-40 mx-auto mt-5 mb-3" />
          <p className="text-gray-400 text-sm leading-relaxed italic">
            {t('apps.love')}
          </p>
        </AnimatedSection>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
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
                  <p className="text-sm text-primary/70 mb-3 font-medium">{app.tagline}</p>

                  <p className="text-gray-600 mb-4 text-sm">
                    {app.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                      {t('common.iosOnly')}
                    </span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                  </div>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </div>
  )
}
