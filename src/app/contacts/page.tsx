import { Metadata } from 'next'
import ContactsClient from './ContactsClient'

export const metadata: Metadata = {
  title: 'Contact — Bogdan Nikishin',
  description: 'Write to Bogdan Nikishin by email or Telegram.',
}

export default function ContactsPage() {
  return <ContactsClient />
}
