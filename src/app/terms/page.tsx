import { Metadata } from 'next'
import LegalPageClient from '@/components/LegalPageClient'

export const metadata: Metadata = {
  title: 'Terms of Use - NikiBStudio',
  description: 'Terms of Use for NikiBStudio website and mobile applications.',
}

export default function TermsPage() {
  return <LegalPageClient type="terms" />
}
