'use client'

import { useLocale } from '@/contexts/LocaleContext'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

export default function CTASection() {
  const { t } = useLocale()

  return (
    <section className="section-padding bg-gradient-to-br from-primary to-purple-800">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          {/* Badge indicating secondary activity */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white/90 mb-8">
            {t('dev.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t('cta.title')}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            {t('cta.desc')}
          </p>
          <div className="mt-10">
            <Button
              variant="secondary"
              size="lg"
              href="/development#contact-form"
            >
              {t('cta.btn')}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
