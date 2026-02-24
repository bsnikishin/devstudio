import { Metadata } from 'next'
import AppsClient from './AppsClient'

export const metadata: Metadata = {
  title: 'Приложения - DevStudio',
  description: 'Наши мобильные приложения для iOS и Android. Просмотрите портфолио наших проектов.',
}

export default function AppsPage() {
  return <AppsClient />
}
