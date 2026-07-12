'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLocale } from '@/contexts/LocaleContext'
import Button from '@/components/ui/Button'
import { apps } from '@/data/apps'

export default function HeroSection() {
  const { t } = useLocale()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/40 via-white to-white min-h-[90vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-fuchsia-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 right-1/4 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Studio badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-secondary rounded-full text-sm font-medium text-primary mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span><span className="font-bold">NikiB</span><span className="font-light opacity-70">Studio</span></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight"
          >
            {t('hero.title')}{' '}
            <span className="text-gradient">{t('hero.titleHighlight')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/apps">
              <Button variant="primary" size="lg">
                {t('hero.cta.apps')}
              </Button>
            </Link>
            <Link href="/contacts">
              <Button variant="outline" size="lg">
                {t('cta.btn')}
              </Button>
            </Link>
          </motion.div>

          {/* App icons strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-16 flex items-center justify-center gap-3 sm:gap-5 flex-wrap"
          >
            {apps.map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
              >
                <Link
                  href={`/apps/${app.id}`}
                  aria-label={app.title}
                  className="group block"
                >
                  <img
                    src={app.iconPath}
                    alt={app.title}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-lg object-cover ring-1 ring-black/5 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-primary/20"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
