'use client'

import { useState } from 'react'
import { Smartphone, Palette, Code2, CheckCircle, Send } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useLocale } from '@/contexts/LocaleContext'


export default function DevelopmentClient() {
  const { t } = useLocale()

  const services = [
    {
      icon: Smartphone,
      title: t('dev.service1.title'),
      description: t('dev.service1.desc'),
      features: ['Swift / SwiftUI', 'Native Performance', 'App Store Optimization'],
    },
    {
      icon: Code2,
      title: t('dev.service2.title'),
      description: t('dev.service2.desc'),
      features: ['Kotlin / Jetpack Compose', 'Material Design', 'Play Store Optimization'],
    },
    {
      icon: Palette,
      title: t('dev.service3.title'),
      description: t('dev.service3.desc'),
      features: ['User Research', 'Prototyping', 'Design Systems'],
    },
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    platform: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            {t('dev.pageTitle')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('dev.pageSubtitle')}
          </p>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-8 text-center">
            {t('dev.servicesTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Contact Form Section */}
        <AnimatedSection id="contact-form">
          <div className="max-w-2xl mx-auto">
            <div className="bg-secondary/30 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 text-center">
                {t('dev.formTitle')}
              </h2>
              <p className="text-center text-gray-600 mb-8">
                {t('dev.formDesc')}
              </p>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">
                    {t('dev.successTitle')}
                  </h3>
                  <p className="text-gray-600">
                    {t('dev.successDesc')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                        {t('dev.labelName')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder={t('dev.placeholderName')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                        {t('dev.labelEmail')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text mb-2">
                      {t('dev.labelCompany')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder={t('dev.placeholderCompany')}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="platform" className="block text-sm font-medium text-text mb-2">
                        {t('dev.labelPlatform')}
                      </label>
                      <select
                        id="platform"
                        name="platform"
                        value={formData.platform}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      >
                        <option value="">{t('dev.selectPlatform')}</option>
                        <option value="ios">iOS</option>
                        <option value="android">Android</option>
                        <option value="both">{t('dev.platformBoth')}</option>
                        <option value="cross-platform">{t('dev.platformCross')}</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-text mb-2">
                        {t('dev.labelBudget')}
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      >
                        <option value="">{t('dev.selectBudget')}</option>
                        <option value="small">{t('dev.budgetSmall')}</option>
                        <option value="medium">{t('dev.budgetMedium')}</option>
                        <option value="large">{t('dev.budgetLarge')}</option>
                        <option value="enterprise">{t('dev.budgetEnterprise')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                      {t('dev.labelMessage')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder={t('dev.placeholderMessage')}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t('dev.submitting')
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t('dev.submit')}
                      </>
                    )}
                  </Button>
                </form>
              )}

              <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-4">
                <span className="text-gray-400 text-sm">{t('dev.or')}</span>
                <a
                  href="https://t.me/nikibstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 bg-primary hover:opacity-90 rounded-xl transition-opacity group w-full sm:w-auto justify-center"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white text-sm">{t('dev.telegram')}</div>
                    <div className="text-white/60 text-xs">@nikibstudio</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
