'use client'

import Link from 'next/link'
import { ArrowRight, Smartphone } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'

const apps = [
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    description: 'Приложение для отслеживания тренировок и питания с персонализированными рекомендациями.',
    category: 'Здоровье',
    platform: 'iOS / Android',
  },
  {
    id: 'task-manager',
    title: 'Task Manager Pro',
    description: 'Мощный инструмент для управления задачами с командной работой и интеграциями.',
    category: 'Продуктивность',
    platform: 'iOS / Android',
  },
  {
    id: 'e-commerce',
    title: 'ShopEasy',
    description: 'Мобильный магазин с удобным каталогом, корзиной и системой оплаты.',
    category: 'E-commerce',
    platform: 'iOS / Android',
  },
]

export default function AppsPreviewSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            Наши приложения
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Познакомьтесь с некоторыми из наших проектов
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <AnimatedSection key={app.id} delay={index * 0.1}>
              <Link href={`/apps/${app.id}`}>
                <Card className="h-full cursor-pointer group">
                  {/* App Icon Placeholder */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>

                  <span className="inline-block px-3 py-1 bg-secondary text-primary text-sm rounded-full mb-3">
                    {app.category}
                  </span>

                  <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                    {app.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {app.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{app.platform}</span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                  </div>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
          >
            Смотреть все приложения
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
