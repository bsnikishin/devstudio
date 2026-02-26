import { Metadata } from 'next'
import { apps } from '@/data/apps'
import GoClient from './GoClient'

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
  return {
    title: app ? `${app.title} on the App Store` : 'App Store — NikiBStudio',
    description: app?.tagline,
  }
}

export default async function GoPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <GoClient id={id} />
}
