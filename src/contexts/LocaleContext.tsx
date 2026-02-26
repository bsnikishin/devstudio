'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { Locale, LOCALES, getTranslation, TranslationKeys } from '@/lib/translations'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: keyof TranslationKeys) => string
  isRTL: boolean
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

const STORAGE_KEY = 'nikibstudio_locale'

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
  if (stored && LOCALES.find((l) => l.code === stored)) return stored

  const browserLang = navigator.language.split('-')[0].toLowerCase()
  const match = LOCALES.find((l) => l.code === browserLang)
  return match ? match.code : 'en'
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocaleState(detectLocale())
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const localeInfo = LOCALES.find((l) => l.code === locale)
    document.documentElement.lang = locale
    document.documentElement.dir = localeInfo?.rtl ? 'rtl' : 'ltr'
  }, [locale, mounted])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(STORAGE_KEY, newLocale)
  }, [])

  const t = useCallback(
    (key: keyof TranslationKeys) => getTranslation(locale, key),
    [locale]
  )

  const isRTL = LOCALES.find((l) => l.code === locale)?.rtl ?? false

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, isRTL }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
