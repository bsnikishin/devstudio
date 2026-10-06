import type { Metadata } from 'next'
import AppsClient from './AppsClient'

export const metadata: Metadata = { title: 'Apps — Bogdan Nikishin' }

export default function AppsPage() {
  return <AppsClient />
}
