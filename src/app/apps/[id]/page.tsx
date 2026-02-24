import { Metadata } from 'next'
import { apps } from '@/data/apps'
import AppPageClient from './AppPageClient'

export async function generateStaticParams() {
  return apps.map((app) => ({
    id: app.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const app = apps.find((a) => a.id === id)
  
  if (!app) {
    return {
      title: 'Приложение не найдено - DevStudio',
    }
  }

  return {
    title: `${app.title} - DevStudio`,
    description: app.description,
  }
}

export default async function AppPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const app = apps.find((a) => a.id === id)

  if (!app) {
    return <div>Приложение не найдено</div>
  }

  return <AppPageClient app={app} />
}
