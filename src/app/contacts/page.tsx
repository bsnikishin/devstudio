import { Metadata } from 'next'
import ContactsClient from './ContactsClient'

export const metadata: Metadata = {
  title: 'Contacts — NikiBStudio',
  description: 'Get in touch with NikiBStudio via email or Telegram.',
}

export default function ContactsPage() {
  return <ContactsClient />
}
