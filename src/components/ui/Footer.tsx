'use client'

import Link from 'next/link'
import { Mail, Send } from 'lucide-react'
import { useLocale } from '@/contexts/LocaleContext'
import { apps } from '@/data/apps'

export default function Footer() {
  const { t } = useLocale()

  return (
    <footer className="bg-secondary/50 border-t border-gray-100">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img src="/favicon.svg" alt="NikiBStudio" className="w-9 h-9 rounded-xl" />
              <span className="text-xl font-bold text-primary">
                NikiB<span className="font-light opacity-70">Studio</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Apps Links */}
          <div>
            <h3 className="font-semibold text-text mb-4">{t('footer.appsTitle')}</h3>
            <ul className="space-y-3">
              {apps.map((app) => (
                <li key={app.id}>
                  <Link
                    href={`/apps/${app.id}`}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {app.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-text mb-4">{t('footer.companyTitle')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link href="/merch" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  {t('nav.merch')}
                </Link>
              </li>
              <li>
                <Link href="/development" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  {t('footer.development')}
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  {t('nav.contacts')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-text mb-4">{t('footer.contactTitle')}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@nikibstudio.site"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  <Mail size={16} />
                  hello@nikibstudio.site
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/nikibstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  <Send size={16} />
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} NikiBStudio. {t('footer.rights')}
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-primary transition-colors text-sm">
                {t('footer.privacy')}
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-primary transition-colors text-sm">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
