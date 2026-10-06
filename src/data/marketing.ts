import type { Locale } from '@/lib/translations'
import type { AppMarketing } from './ldream-marketing'
import { ldreamMarketing } from './ldream-marketing'
import { tarotaperMarketing } from './tarotaper-marketing'
import { colorbrainMarketing } from './colorbrain-marketing'
import { alineMarketing } from './aline-marketing'
import { cozyballMarketing } from './cozyball-marketing'
import { swirlballMarketing } from './swirlball-marketing'
import { loansolverMarketing } from './loansolver-marketing'
import { wakeleagueMarketing } from './wakeleague-marketing'
import { bookpatherMarketing } from './bookpather-marketing'

export type { AppMarketing }

const marketing: Record<string, Record<string, AppMarketing>> = {
  ldream: ldreamMarketing,
  tarotaper: tarotaperMarketing,
  colorbrain: colorbrainMarketing,
  aline: alineMarketing,
  cozyball: cozyballMarketing,
  swirlball: swirlballMarketing,
  loansolver: loansolverMarketing,
  wakeleague: wakeleagueMarketing,
  bookpather: bookpatherMarketing,
}

/** The app's texts in the locale, field by field falling back to English. */
export function getMarketing(id: string, locale: Locale): AppMarketing | null {
  const all = marketing[id]
  if (!all) return null
  const en = all.en
  const loc = all[locale] ?? en
  return {
    tagline: loc.tagline || en.tagline,
    headline: loc.headline || en.headline,
    summary: loc.summary || en.summary,
    description: loc.description || en.description,
    features: loc.features?.length ? loc.features : en.features,
  }
}

/** "Title — explanation" → { title, text } */
export function splitFeature(feature: string): { title: string; text: string } {
  const i = feature.indexOf(' — ')
  return i < 0 ? { title: feature, text: '' } : { title: feature.slice(0, i), text: feature.slice(i + 3) }
}
