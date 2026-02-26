import { Metadata } from 'next'
import { apps } from '@/data/apps'
import SupportClient from './SupportClient'

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
    title: `Support — ${app?.title ?? 'NikiBStudio'}`,
  }
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <SupportClient id={id} />
}
