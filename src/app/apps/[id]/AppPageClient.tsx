'use client'

import Link from 'next/link'
import { ArrowLeft, Smartphone, Shield, Mail, Check } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { App } from '@/data/apps'

interface AppPageClientProps {
  app: App
}

// Apple App Store Button SVG
function AppStoreButton() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
    >
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div className="text-left">
        <div className="text-xs opacity-80">Download on the</div>
        <div className="text-lg font-semibold -mt-1">App Store</div>
      </div>
    </a>
  )
}

// Google Play Button SVG
function GooglePlayButton() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
      </svg>
      <div className="text-left">
        <div className="text-xs opacity-80">GET IT ON</div>
        <div className="text-lg font-semibold -mt-1">Google Play</div>
      </div>
    </a>
  )
}

export default function AppPageClient({ app }: AppPageClientProps) {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Back Button */}
        <AnimatedSection>
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Назад к приложениям
          </Link>
        </AnimatedSection>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <AnimatedSection>
            {/* App Icon */}
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-3xl flex items-center justify-center mb-6">
              <Smartphone className="w-12 h-12 text-white" />
            </div>

            <span className="inline-block px-4 py-1 bg-secondary text-primary text-sm rounded-full mb-4">
              {app.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
              {app.title}
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              {app.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {/* Screenshot Placeholder */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-[9/16] bg-gradient-to-br from-secondary to-purple-100 rounded-2xl flex items-center justify-center"
                  >
                    <span className="text-gray-400 text-sm">Скриншот {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Features Section */}
        <AnimatedSection className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-8">
            Возможности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {app.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl"
              >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-text">{feature}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Privacy Policy Section */}
        <AnimatedSection className="mb-16">
          <div className="bg-secondary/30 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                Правовая информация
              </h2>
            </div>

            <div className="prose prose-gray max-w-none">
              <h3 className="text-xl font-semibold text-text mb-4">Политика конфиденциальности</h3>
              <p className="text-gray-600 mb-4">
                Настоящая Политика конфиденциальности описывает, как {app.title} (&quot;мы&quot;, &quot;нас&quot; или &quot;наше приложение&quot;) 
                собирает, использует и раскрывает информацию пользователей.
              </p>
              
              <h4 className="text-lg font-semibold text-text mb-2">Сбор информации</h4>
              <p className="text-gray-600 mb-4">
                Мы можем собирать информацию, которую вы предоставляете нам напрямую, включая имя, 
                адрес электронной почты и другие данные, необходимые для использования функций приложения.
              </p>

              <h4 className="text-lg font-semibold text-text mb-2">Использование информации</h4>
              <p className="text-gray-600 mb-4">
                Собранная информация используется для предоставления и улучшения наших услуг, 
                коммуникации с пользователями и обеспечения безопасности приложения.
              </p>

              <h4 className="text-lg font-semibold text-text mb-2">Защита данных</h4>
              <p className="text-gray-600">
                Мы применяем соответствующие технические и организационные меры для защиты 
                вашей персональной информации от несанкционированного доступа и раскрытия.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Support Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-br from-primary to-purple-800 rounded-3xl p-8 md:p-12 text-center">
            <Mail className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Нужна помощь?
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Если у вас есть вопросы или проблемы с приложением, свяжитесь с нашей службой поддержки.
            </p>
            <a
              href={`mailto:support@${app.id}.devstudio.com`}
              className="inline-flex items-center gap-2 text-white font-medium hover:underline"
            >
              support@{app.id}.devstudio.com
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
