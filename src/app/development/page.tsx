import { Metadata } from 'next'
import DevelopmentClient from './DevelopmentClient'

export const metadata: Metadata = {
  title: 'Разработка на заказ - DevStudio',
  description: 'Закажите разработку мобильного приложения для iOS или Android. UI/UX дизайн, разработка, тестирование и поддержка.',
}

export default function DevelopmentPage() {
  return <DevelopmentClient />
}
