import { Metadata } from 'next'
import ContactsClient from './ContactsClient'

export const metadata: Metadata = {
  title: 'Контакты - DevStudio',
  description: 'Свяжитесь с нами. Email, Telegram, LinkedIn и юридическая информация DevStudio.',
}

export default function ContactsPage() {
  return <ContactsClient />
}
