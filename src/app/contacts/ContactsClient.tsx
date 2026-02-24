'use client'

import { Mail, Send, Linkedin, MapPin, Phone, Clock } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@devstudio.com',
    href: 'mailto:hello@devstudio.com',
    description: 'Для общих вопросов и деловых предложений',
  },
  {
    icon: Send,
    title: 'Telegram',
    value: '@devstudio',
    href: 'https://t.me/devstudio',
    description: 'Быстрая связь для срочных вопросов',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'DevStudio',
    href: 'https://linkedin.com/company/devstudio',
    description: 'Следите за нашими новостями',
  },
]

const officeInfo = [
  {
    icon: MapPin,
    title: 'Адрес',
    value: 'Москва, ул. Примерная, 123',
  },
  {
    icon: Phone,
    title: 'Телефон',
    value: '+7 (999) 123-45-67',
  },
  {
    icon: Clock,
    title: 'Часы работы',
    value: 'Пн-Пт: 10:00 - 19:00',
  },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
              <div className="space-y-6">
                {officeInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-text">{info.title}</h3>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400">Карта</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Legal Information */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white border border-gray-100 rounded-3xl p-8 h-full">
              <h2 className="text-2xl font-bold text-text mb-6">
                Юридическая информация
              </h2>
              <div className="prose prose-sm prose-gray max-w-none">
                <div className="space-y-6 text-gray-600">
                  <div>
                    <h3 className="text-base font-semibold text-text mb-2">Реквизиты компании</h3>
                    <p className="text-sm leading-relaxed">
                      ООО &quot;ДевСтудио&quot;<br />
                      ИНН: 1234567890<br />
                      КПП: 123456789<br />
                      ОГРН: 1234567890123<br />
                      Юридический адрес: 123456, г. Москва, ул. Примерная, д. 123, офис 456
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-text mb-2">Банковские реквизиты</h3>
                    <p className="text-sm leading-relaxed">
                      Расчетный счет: 40702810123450123456<br />
                      Банк: ПАО &quot;ПримерБанк&quot;<br />
                      БИК: 044525225<br />
                      Корр. счет: 30101810400000000225
                    </p>
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
                      © {new Date().getFullYear()} ООО &quot;ДевСтудио&quot;. Все права защищены.
                      Информация на сайте не является публичной офертой.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
