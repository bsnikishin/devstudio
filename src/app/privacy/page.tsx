import { Metadata } from 'next'
import LegalPageClient from '@/components/LegalPageClient'

export const metadata: Metadata = {
  title: 'Privacy Policy - NikiBStudio',
  description: 'Privacy Policy for NikiBStudio website and mobile applications.',
}

export default function PrivacyPage() {
  return <LegalPageClient type="privacy" />
}
