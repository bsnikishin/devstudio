'use client'

import { Award, Code, HeadphonesIcon } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'

const features = [
  {
    icon: Award,
    title: 'Опыт и экспертиза',
    description: 'Более 5 лет опыта в разработке мобильных приложений для различных отраслей.',
  },
  {
    icon: Code,
    title: 'Современные технологии',
    description: 'Используем Swift, Kotlin, React Native и Flutter для создания нативных и кроссплатформенных решений.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Поддержка 24/7',
    description: 'Обеспечиваем техническую поддержку и обновления после запуска приложения.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            Почему выбирают нас
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Мы создаем приложения, которые помогают бизнесу расти и достигать поставленных целей
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <Card className="text-center h-full">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
