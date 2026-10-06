import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { apps, listedApps } from '@/data/apps'
import AppPageClient from './AppPageClient'

// Only listed apps get a page; an unlisted app (LoanSolver) keeps just its privacy and support pages.
export async function generateStaticParams() {
  return listedApps.map((app) => ({ id: app.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const app = apps.find((a) => a.id === id)
  if (!app) return { title: 'Bogdan Nikishin' }
  const title = `${app.title} — ${app.tagline}`
  return {
    title,
    description: app.description,
    openGraph: { title, description: app.description, type: 'website', images: [app.iconPath] },
  }
}

export default async function AppPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const app = listedApps.find((a) => a.id === id)
  if (!app) notFound()
  return <AppPageClient app={app} />
}
