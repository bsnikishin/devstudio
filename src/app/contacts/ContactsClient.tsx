'use client'

import Link from 'next/link'
import { Mail, Send, Globe, FileText } from 'lucide-react'
import { useLocale } from '@/contexts/LocaleContext'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'

export default function ContactsClient() {
  const { t } = useLocale()

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'B.S.NikishinG@gmail.com',
      href: 'mailto:B.S.NikishinG@gmail.com',
      descKey: 'contacts.email.desc' as const,
    },
    {
      icon: Send,
      title: 'Telegram',
      value: '@nikibstudio',
      href: 'https://t.me/nikibstudio',
      descKey: 'contacts.telegram.desc' as const,
    },
  ]

  const countries = [
    { flag: '🇰🇿', nameKey: 'contacts.country.kz' as const },
    { flag: '🇦🇪', nameKey: 'contacts.country.ae' as const },
    { flag: '🇷🇺', nameKey: 'contacts.country.ru' as const },
  ]

  const documents = [
    { href: '/privacy', labelKey: 'footer.privacy' as const },
    { href: '/terms', labelKey: 'footer.terms' as const },
    { href: '/cookies', labelKey: 'footer.cookies' as const },
  ]

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            {t('nav.contacts')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('contacts.subtitle')}
          </p>
        </AnimatedSection>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <AnimatedSection key={method.title} delay={index * 0.1}>
              <a href={method.href} target="_blank" rel="noopener noreferrer">
                <Card className="h-full text-center group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {method.value}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {t(method.descKey)}
                  </p>
                </Card>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Studio info: countries + documents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="bg-secondary/30 rounded-3xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-text">
                  {t('contacts.countriesTitle')}
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {countries.map((c) => (
                  <div key={c.nameKey} className="flex items-center gap-2.5 text-gray-600">
                    <span className="text-lg">{c.flag}</span>
                    {t(c.nameKey)}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white border border-gray-100 rounded-3xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-text">
                  {t('contacts.documentsTitle')}
                </h2>
              </div>
              <ul className="space-y-3">
                {documents.map((doc) => (
                  <li key={doc.href}>
                    <Link href={doc.href} className="text-primary hover:underline text-sm">
                      {t(doc.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  © {new Date().getFullYear()} NikiBStudio. {t('footer.rights')} {t('contacts.offer')}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
