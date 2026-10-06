import type { Locale } from '@/lib/translations'
import { tarotaperPrivacy, type PrivacyPolicy } from './tarotaper-privacy'
import { ldreamPrivacy } from './ldream-privacy'
import { colorbrainPrivacy } from './colorbrain-privacy'
import { alinePrivacy } from './aline-privacy'
import { cozyballPrivacy } from './cozyball-privacy'
import { swirlballPrivacy } from './swirlball-privacy'
import { loansolverPrivacy } from './loansolver-privacy'
import { wakeleaguePrivacy } from './wakeleague-privacy'
import { bookpatherPrivacy } from './bookpather-privacy'

const policies: Record<string, Record<string, PrivacyPolicy>> = {
  tarotaper: tarotaperPrivacy,
  ldream: ldreamPrivacy,
  colorbrain: colorbrainPrivacy,
  aline: alinePrivacy,
  cozyball: cozyballPrivacy,
  swirlball: swirlballPrivacy,
  loansolver: loansolverPrivacy,
  wakeleague: wakeleaguePrivacy,
  bookpather: bookpatherPrivacy,
}

export function getPrivacy(id: string, locale: Locale): PrivacyPolicy | null {
  const all = policies[id]
  return all ? (all[locale] ?? all.en) : null
}
