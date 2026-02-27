'use client'

import { Mail, Send, MapPin, Globe } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@nikibstudio.site',
    href: 'mailto:hello@nikibstudio.site',
    description: 'Для общих вопросов и деловых предложений',
  },
  {
    icon: Send,
    title: 'Telegram',
    value: '@nikibstudio',
    href: 'https://t.me/nikibstudio',
    description: 'Быстрая связь для срочных вопросов',
  },
]

const countries = [
  { flag: '🇰🇿', name: 'Казахстан' },
  { flag: '🇦🇪', name: 'ОАЭ' },
  { flag: '🇷🇺', name: 'Россия' },
]

export default function ContactsClient() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Контакты
          </h1>
          <p className="text-lg text-gray-600">
            Свяжитесь с нами любым удобным способом. Мы всегда рады обсудить ваш проект.
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
                    {method.description}
                  </p>
                </Card>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Office Info & Legal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Office Information */}
          <AnimatedSection>
            <div className="bg-secondary/30 rounded-3xl p-8 h-full">
              <h2 className="text-2xl font-bold text-text mb-6">
                Информация об офисе
              </h2>

              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-text mb-1">Адрес</h3>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    В работе
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-text mb-3">Страны присутствия</h3>
                  <div className="flex flex-col gap-2">
                    {countries.map((c) => (
                      <div key={c.name} className="flex items-center gap-2 text-gray-600 text-sm">
                        <span className="text-lg">{c.flag}</span>
                        {c.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Legal Information */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white border border-gray-100 rounded-3xl p-8 h-full">
              <h2 className="text-2xl font-bold text-text mb-6">
                Юридическая информация
              </h2>
              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="text-base font-semibold text-text mb-2">Реквизиты компании</h3>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    В проработке
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-text mb-2">Банковские реквизиты</h3>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    В проработке
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-text mb-2">Документы</h3>
                  <ul className="text-sm space-y-2">
                    <li>
                      <a href="/privacy" className="text-primary hover:underline">
                        Политика конфиденциальности
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="text-primary hover:underline">
                        Пользовательское соглашение
                      </a>
                    </li>
                    <li>
                      <a href="/cookies" className="text-primary hover:underline">
                        Политика использования cookies
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} NikiBStudio. Все права защищены.
                    Информация на сайте не является публичной офертой.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
