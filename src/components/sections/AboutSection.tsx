'use client'

import { Sparkles, Code, HeadphonesIcon } from 'lucide-react'
import { useLocale } from '@/contexts/LocaleContext'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'

export default function AboutSection() {
  const { t } = useLocale()

  const features = [
    {
      icon: Sparkles,
      titleKey: 'about.feature1.title' as const,
      descKey: 'about.feature1.desc' as const,
    },
    {
      icon: Code,
      titleKey: 'about.feature2.title' as const,
      descKey: 'about.feature2.desc' as const,
    },
    {
      icon: HeadphonesIcon,
      titleKey: 'about.feature3.title' as const,
      descKey: 'about.feature3.desc' as const,
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            {t('about.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('about.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.titleKey} delay={index * 0.1}>
              <Card className="text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600">
                  {t(feature.descKey)}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
