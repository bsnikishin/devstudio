import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import { LocaleProvider } from '@/contexts/LocaleContext'

export const metadata: Metadata = {
  title: 'NikiBStudio — iOS Apps',
  description: 'iOS apps built with care. Ldream, Tarotaper, Colorbrain and more.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <LocaleProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  )
}
