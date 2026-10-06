import { Metadata } from 'next'
import LegalPageClient from '@/components/LegalPageClient'

export const metadata: Metadata = {
  title: 'Terms of Use — Bogdan Nikishin',
  description: 'Terms of use of the nikibstudio.site website.',
}

export default function TermsPage() {
  return <LegalPageClient type="terms" />
}
