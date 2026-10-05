import { Metadata } from 'next'
import AppsClient from './AppsClient'

export const metadata: Metadata = {
  title: 'Apps — NikiBStudio',
  description: 'iOS apps built by NikiBStudio. LDream, Tarotaper, Colorbrain and more.',
}

export default function AppsPage() {
  return <AppsClient />
}
