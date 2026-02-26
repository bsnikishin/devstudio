import { Metadata } from 'next'
import { apps } from '@/data/apps'
import AppPageClient from './AppPageClient'

export async function generateStaticParams() {
  return apps.map((app) => ({ id: app.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const app = apps.find((a) => a.id === id)

  if (!app) return { title: 'App not found — NikiB Studio' }

  return {
    title: `${app.title} — NikiB Studio`,
    description: app.description,
    openGraph: {
      title: `${app.title} — NikiB Studio`,
      description: app.description,
      type: 'website',
    },
  }
}

export default async function AppPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const app = apps.find((a) => a.id === id)

  if (!app) {
    return (
      <div className="section-padding container-custom text-center">
        <p className="text-gray-500">App not found.</p>
      </div>
    )
  }

  return <AppPageClient app={app} />
}
