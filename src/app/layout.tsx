import type { Metadata, Viewport } from 'next'
import { Literata, Golos_Text, IBM_Plex_Mono, Unbounded, Old_Standard_TT } from 'next/font/google'
import './globals.css'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'
import { LocaleProvider } from '@/contexts/LocaleContext'

const serif = Literata({
  subsets: ['latin', 'cyrillic'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-serif',
  display: 'swap',
})
const sans = Golos_Text({ subsets: ['latin', 'cyrillic'], variable: '--font-sans', display: 'swap' })
const mono = IBM_Plex_Mono({ subsets: ['latin', 'cyrillic'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })
// SwirlBall's own display face, used only on its page
const unbounded = Unbounded({ subsets: ['latin', 'cyrillic'], weight: ['800'], variable: '--font-unbounded', display: 'swap', preload: false })
// TaroTaper's own display face, as in its Mini App; used only on its page
const oldStandard = Old_Standard_TT({ subsets: ['latin', 'cyrillic'], weight: ['700'], variable: '--font-oldstandard', display: 'swap', preload: false })

export const metadata: Metadata = {
  metadataBase: new URL('https://nikibstudio.site'),
  title: 'Bogdan Nikishin — iPhone apps',
  description: 'Small iPhone apps and games by Bogdan Nikishin: Bookpather, LDream, Aliner, ColorBrain, SwirlBall and Cozy Ball. No ads, no accounts.',
  // ?v=2: browsers cache favicons hard; bump it when the icon changes
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: '48x48' },
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png?v=2',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Bogdan Nikishin — iPhone apps',
    description: 'Small iPhone apps and games I make myself. No ads, no accounts.',
    url: 'https://nikibstudio.site',
    siteName: 'Bogdan Nikishin',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
}

export const viewport: Viewport = {
  themeColor: '#F2EEE5',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable} ${unbounded.variable} ${oldStandard.variable}`}>
      <body className="flex min-h-screen flex-col">
        <LocaleProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  )
}
