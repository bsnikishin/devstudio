import { Metadata } from 'next'
import LegalPageClient from '@/components/LegalPageClient'

export const metadata: Metadata = {
  title: 'Privacy Policy — Bogdan Nikishin',
  description: 'Privacy policy of the nikibstudio.site website.',
}

export default function PrivacyPage() {
  return <LegalPageClient type="privacy" />
}
