import Link from 'next/link'
import { Mail, Send } from 'lucide-react'

const footerLinks = {
  apps: [
    { label: 'Все приложения', href: '/apps' },
    { label: 'iOS приложения', href: '/apps?platform=ios' },
    { label: 'Android приложения', href: '/apps?platform=android' },
  ],
  company: [
    { label: 'О нас', href: '/#about' },
    { label: 'Разработка', href: '/development' },
    { label: 'Контакты', href: '/contacts' },
  ],
  legal: [
    { label: 'Политика конфиденциальности', href: '/privacy' },
    { label: 'Условия использования', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-gray-100">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-primary">DevStudio</span>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Создаем мобильные решения для бизнеса. Разработка iOS и Android приложений.
            </p>
          </div>

          {/* Apps Links */}
          <div>
            <h3 className="font-semibold text-text mb-4">Приложения</h3>
            <ul className="space-y-3">
              {footerLinks.apps.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-text mb-4">Компания</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-text mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@devstudio.com"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  <Mail size={16} />
                  hello@devstudio.com
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/devstudio"
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
              © {new Date().getFullYear()} DevStudio. Все права защищены.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-500 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
