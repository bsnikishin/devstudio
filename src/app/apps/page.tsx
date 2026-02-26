import { Metadata } from 'next'
import AppsClient from './AppsClient'

export const metadata: Metadata = {
  title: 'Apps — NikiB Studio',
  description: 'iOS apps built by NikiB Studio. Ldream, Tarotaper, Colorbrain and more.',
}

export default function AppsPage() {
  return <AppsClient />
}
