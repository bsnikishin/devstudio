'use client'

import { useEffect, useRef, useState } from 'react'
import { useLocale } from '@/contexts/LocaleContext'
import { LOCALES } from '@/lib/translations'

export default function LanguageSwitch() {
  const { locale, setLocale, t } = useLocale()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === 'Escape' : !ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', close)
    }
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t('lang.label')}
        className="label text-muted hover:text-ink"
      >
        {locale.toUpperCase()} <span aria-hidden>▾</span>
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={t('lang.label')}
          className="absolute end-0 top-full z-20 mt-3 max-h-[70vh] w-48 overflow-y-auto border border-ink bg-paper py-1 shadow-[4px_4px_0_rgba(23,22,20,0.12)]"
        >
          {LOCALES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === locale}
                dir={l.rtl ? 'rtl' : 'ltr'}
                onClick={() => { setLocale(l.code); setOpen(false) }}
                className={`flex w-full items-baseline justify-between gap-3 px-4 py-2 text-start text-[15px] hover:bg-paper-deep ${l.code === locale ? 'text-accent' : 'text-ink'}`}
              >
                <span>{l.nativeName}</span>
                <span className="label text-muted">{l.code}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
