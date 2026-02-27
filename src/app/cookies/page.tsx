import { Metadata } from 'next'
import LegalPageClient from '@/components/LegalPageClient'

export const metadata: Metadata = {
  title: 'Cookie Policy - NikiBStudio',
  description: 'Cookie Policy for NikiBStudio website and mobile applications.',
}

export default function CookiesPage() {
  return <LegalPageClient type="cookies" />
}
