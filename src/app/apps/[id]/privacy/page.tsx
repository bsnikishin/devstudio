import { Metadata } from 'next'
import { apps } from '@/data/apps'
import PrivacyClient from './PrivacyClient'

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
    title: `Privacy Policy — ${app?.title ?? 'NikiBStudio'}`,
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <PrivacyClient id={id} />
}
