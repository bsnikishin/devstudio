'use client'

import { Clock, Sparkles, Bell, Shirt, Package, BookOpen } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const upcomingProducts = [
  {
    icon: Shirt,
    title: 'Мерч DevStudio',
    description: 'Футболки, худи и аксессуары с логотипом DevStudio. Стильный мерч для разработчиков.',
    status: 'Скоро',
  },
  {
    icon: Package,
    title: 'Dev Kit',
    description: 'Набор стикеров, постеров и других материалов для вашего рабочего пространства.',
    status: 'Скоро',
  },
  {
    icon: BookOpen,
    title: 'Ресурсы и гайды',
    description: 'Полезные материалы по разработке мобильных приложений, UI/UX дизайну и бизнесу.',
    status: 'В разработке',
  },
]

export default function ProductsClient() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Coming Soon</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Продукты
          </h1>
          <p className="text-lg text-gray-600">
            Мы работаем над новыми продуктами. Подпишитесь, чтобы узнать о запуске первым!
          </p>
        </AnimatedSection>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {upcomingProducts.map((product, index) => (
            <AnimatedSection key={product.title} delay={index * 0.1}>
              <Card className="h-full text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-primary text-sm rounded-full mb-4">
                  <Clock className="w-3 h-3" />
                  {product.status}
                </span>

                <h3 className="text-xl font-semibold text-text mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Newsletter Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-br from-primary to-purple-800 rounded-3xl p-8 md:p-12 text-center">
            <Bell className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Узнайте о запуске первым
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Подпишитесь на рассылку, и мы отправим вам уведомление, когда новые продукты станут доступны.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-6 py-3 rounded-xl text-text placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/20"
              />
              <Button variant="secondary" size="lg">
                Подписаться
              </Button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
