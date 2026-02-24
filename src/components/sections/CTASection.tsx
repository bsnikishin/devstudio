'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-purple-800">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Готовы начать свой проект?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Свяжитесь с нами для бесплатной консультации и обсудим вашу идею
          </p>
          <div className="mt-10">
            <Button 
              variant="secondary" 
              size="lg"
              href="/development#contact-form"
            >
              Обсудить проект
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
