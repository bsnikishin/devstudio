'use client'

import { useState } from 'react'
import { Smartphone, Palette, Code2, CheckCircle, Clock, Users, FileText, Rocket, Send } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const services = [
  {
    icon: Smartphone,
    title: 'iOS разработка',
    description: 'Создаем нативные приложения для iPhone и iPad с использованием Swift и SwiftUI.',
    features: ['Swift / SwiftUI', 'Native Performance', 'App Store Optimization'],
  },
  {
    icon: Code2,
    title: 'Android разработка',
    description: 'Разрабатываем приложения для всех Android устройств на Kotlin и Jetpack Compose.',
    features: ['Kotlin / Jetpack Compose', 'Material Design', 'Play Store Optimization'],
  },
  {
    icon: Palette,
    title: 'UI/UX дизайн',
    description: 'Проектируем интуитивные интерфейсы, которые пользователи любят использовать.',
    features: ['User Research', 'Prototyping', 'Design Systems'],
  },
]

const timeline = [
  {
    step: 1,
    icon: Users,
    title: 'Анализ и планирование',
    description: 'Изучаем ваши требования, анализируем рынок и конкурентов, формируем техническое задание.',
    duration: '1-2 недели',
  },
  {
    step: 2,
    icon: Palette,
    title: 'UI/UX дизайн',
    description: 'Создаем wireframes, прототипы и финальный дизайн интерфейса с учетом ваших пожеланий.',
    duration: '2-4 недели',
  },
  {
    step: 3,
    icon: Code2,
    title: 'Разработка',
    description: 'Пишем код, реализуем функциональность, проводим code review и оптимизацию.',
    duration: '4-12 недель',
  },
  {
    step: 4,
    icon: FileText,
    title: 'Тестирование',
    description: 'Проводим ручное и автоматическое тестирование, исправляем баги, оптимизируем производительность.',
    duration: '1-2 недели',
  },
  {
    step: 5,
    icon: Rocket,
    title: 'Запуск',
    description: 'Публикуем приложение в App Store и Google Play, настраиваем аналитику и мониторинг.',
    duration: '1 неделя',
  },
]

export default function DevelopmentClient() {
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
            Разработка на заказ
          </h1>
          <p className="text-lg text-gray-600">
            Создадим мобильное приложение, которое поможет вашему бизнесу расти. 
            От идеи до запуска в магазинах приложений.
          </p>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-8 text-center">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
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

        {/* Timeline Section */}
        <AnimatedSection className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 text-center">
            Этапы работы
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Прозрачный процесс разработки с четкими этапами и сроками
          </p>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  {/* Timeline Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-text">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-sm text-primary bg-secondary px-3 py-1 rounded-full w-fit">
                        <Clock className="w-3 h-3" />
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Contact Form Section */}
        <AnimatedSection id="contact-form">
          <div className="max-w-2xl mx-auto">
            <div className="bg-secondary/30 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 text-center">
                Обсудить проект
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Заполните форму, и мы свяжемся с вами в течение 24 часов
              </p>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">
                    Заявка отправлена!
                  </h3>
                  <p className="text-gray-600">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                        Имя *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                        Email *
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
                      Компания
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Название компании"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="platform" className="block text-sm font-medium text-text mb-2">
                        Платформа
                      </label>
                      <select
                        id="platform"
                        name="platform"
                        value={formData.platform}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      >
                        <option value="">Выберите платформу</option>
                        <option value="ios">iOS</option>
                        <option value="android">Android</option>
                        <option value="both">iOS + Android</option>
                        <option value="cross-platform">Кроссплатформа</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-text mb-2">
                        Бюджет
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      >
                        <option value="">Выберите бюджет</option>
                        <option value="small">до 500 000 ₽</option>
                        <option value="medium">500 000 - 1 500 000 ₽</option>
                        <option value="large">1 500 000 - 3 000 000 ₽</option>
                        <option value="enterprise">более 3 000 000 ₽</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                      Описание проекта *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Расскажите о вашем проекте, целях и пожеланиях..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Отправка...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Отправить заявку
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
