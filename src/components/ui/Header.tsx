'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale } from '@/contexts/LocaleContext'
import { LOCALES } from '@/lib/translations'
import Button from './Button'

export default function Header() {
  const { t, locale, setLocale } = useLocale()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { labelKey: 'nav.apps' as const, href: '/apps' },
    { labelKey: 'nav.blog' as const, href: '/blog' },
    { labelKey: 'nav.merch' as const, href: '/merch' },
    { labelKey: 'nav.development' as const, href: '/development' },
    { labelKey: 'nav.contacts' as const, href: '/contacts' },
  ]

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLocale = LOCALES.find((l) => l.code === locale)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">NikiB Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text hover:text-primary transition-colors font-medium text-sm"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </div>

          {/* Right: lang switcher + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-600 hover:text-primary hover:bg-secondary/50 transition-colors text-sm font-medium"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLocale?.nativeName ?? locale.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg py-1 min-w-[160px] max-h-72 overflow-y-auto"
                  >
                    {LOCALES.map((loc) => (
                      <button
                        key={loc.code}
                        onClick={() => { setLocale(loc.code); setIsLangOpen(false) }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-secondary/50 hover:text-primary flex items-center justify-between ${
                          locale === loc.code ? 'text-primary font-medium bg-secondary/30' : 'text-text'
                        }`}
                        dir={loc.rtl ? 'rtl' : 'ltr'}
                      >
                        <span>{loc.nativeName}</span>
                        {locale === loc.code && (
                          <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/development#contact-form">
              <Button variant="primary" size="sm">{t('nav.orderProject')}</Button>
            </Link>
          </div>

          {/* Mobile: lang + burger */}
          <div className="md:hidden flex items-center gap-1">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 p-2 rounded-lg text-gray-600 hover:text-primary transition-colors text-xs font-medium"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{locale}</span>
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg py-1 min-w-[140px] max-h-64 overflow-y-auto z-50"
                  >
                    {LOCALES.map((loc) => (
                      <button
                        key={loc.code}
                        onClick={() => { setLocale(loc.code); setIsLangOpen(false) }}
                        className={`w-full text-left px-3 py-2 text-sm transition-colors hover:bg-secondary/50 ${
                          locale === loc.code ? 'text-primary font-medium' : 'text-text'
                        }`}
                        dir={loc.rtl ? 'rtl' : 'ltr'}
                      >
                        {loc.nativeName}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              className="p-2 text-text hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-gray-100">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-text hover:text-primary transition-colors font-medium py-2.5 px-2 rounded-lg hover:bg-secondary/30"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.labelKey)}
                  </Link>
                ))}
                <Link href="/development#contact-form" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" className="w-full mt-4">
                    {t('nav.orderProject')}
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
