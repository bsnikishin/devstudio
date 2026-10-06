export type AppGroup = 'apps' | 'games' | 'telegram'

/** Colours and display face of the app's own page, taken from the app's design. */
export interface AppTheme {
  bg: string
  ink: string
  muted: string
  accent: string
  display: 'serif' | 'serif-italic' | 'unbounded' | 'oldstandard' | 'sans'
}

export interface App {
  id: string
  title: string
  tagline: string
  description: string
  fullDescription: string
  category: string
  platform: 'iOS' | 'Telegram'
  appStoreId: string | null
  appStoreUrl: string | null
  telegramUrl?: string
  supportEmail: string
  features: string[]
  iconPath: string
  group: AppGroup
  /** false: not shown anywhere; only its privacy and support pages are published (App Store Connect links to them) */
  listed: boolean
  /** not in the App Store yet */
  soon?: boolean
  devices: string
  theme: AppTheme
  /** raw app screens in /public/shots/<id>/<locale>/<scene>.jpg */
  shots?: { scenes: string[]; landscape?: boolean }
}

export const DOMAIN = 'nikibstudio.site'

export function getAppStoreConnectUrls(app: App) {
  return {
    marketing: `https://${DOMAIN}/apps/${app.id}`,
    privacy: `https://${DOMAIN}/apps/${app.id}/privacy`,
    support: `https://${DOMAIN}/apps/${app.id}/support`,
    redirect: `https://${DOMAIN}/go/${app.id}`,
  }
}

export const apps: App[] = [
  {
    id: 'bookpather',
    title: 'Bookpather',
    tagline: 'Book Tracker & TBR',
    description: 'Scan your shelf, decide what to read next with Paths, time your reading and keep the key ideas of every book in one place.',
    fullDescription:
      'Bookpather turns the books you already own into a reading plan you can follow. Scan covers, barcodes or a whole shelf, keep a library of cards with status stamps, and let Paths suggest a reading order from your own shelf toward a skill or goal. Save the Key ideas of every book, time your reading sessions to keep a daily streak, and see your current and next book in a Home Screen widget. No account, no ads, no tracking: your library stays on your device and in your personal iCloud. Free to start; Bookpather Pro offers an annual plan with a free trial, a monthly plan or a one-time Lifetime purchase.',
    category: 'Books',
    platform: 'iOS',
    appStoreId: '6790094219',
    appStoreUrl: 'https://apps.apple.com/app/id6790094219',
    supportEmail: 'B.S.NikishinG@gmail.com',
    iconPath: '/icons/bookpather.png',
    features: [
      'Scan covers, barcodes and whole shelves',
      'Library cards with status stamps and notes',
      'Paths: a reading order from your own shelf',
      'Key ideas saved on every book',
      'Reading sessions, a daily streak and simple stats',
      'Now reading / Up next widget',
      'No account, no ads, no tracking; iCloud sync and JSON export',
      'Pro: annual with a free trial, monthly or Lifetime',
    ],
    group: 'apps',
    listed: true,
    devices: 'iPhone · iPad',
    theme: { bg: '#F3EEE2', ink: '#1E4D3A', muted: '#5C6A5F', accent: '#B8432F', display: 'serif' },
    shots: { scenes: ['library', 'book', 'reading'] },
  },
  {
    id: 'ldream',
    title: 'LDream',
    tagline: 'Dream journal for self-reflection',
    description: 'A private dream journal for self-reflection: record a dream by voice or text, read an interpretation through the lens you choose, and see what keeps coming back with Patterns.',
    fullDescription:
      'LDream is a private dream journal for self-reflection. Record a dream by voice or text the moment you wake up and read a thoughtful interpretation through one of four lenses: psychological, Jungian, Miller’s classic dream book (1901) or the Islamic tradition of Ibn Sirin. Interpretations are meant for reflection, not as forecasts. Patterns summarizes the symbols, people, places and emotions that keep returning in your journal. Your entries stay on your device and in your own iCloud, with an optional Face ID lock, and LDream asks for your consent before anything is sent to create an interpretation or an illustration. No ads.',
    category: 'Lifestyle',
    platform: 'iOS',
    appStoreId: '6758800942',
    appStoreUrl: 'https://apps.apple.com/app/id6758800942',
    supportEmail: 'B.S.NikishinG@gmail.com',
    iconPath: '/icons/ldream.png',
    features: [
      'Record dreams by voice or text',
      'Four lenses: psychological, Jungian, Miller’s classic dream book (1901), the Islamic tradition of Ibn Sirin',
      'Interpretations for reflection, not prediction, in 15 languages',
      'Patterns: recurring symbols, people, places and emotions',
      'Optional illustrations; the interpretation is always saved first',
      'Face ID lock, on-device journal, private iCloud sync; consent before anything is sent',
      'Free: record as many dreams as you like, plus widgets, iCloud sync and 3 interpretations',
      'Premium: an interpretation and an illustration for every dream, all lenses and Patterns',
    ],
    group: 'apps',
    listed: true,
    devices: 'iPhone · iPad',
    theme: { bg: '#1D2440', ink: '#F4EFE6', muted: '#B4B3C4', accent: '#C8462B', display: 'serif-italic' },
    shots: { scenes: ['journal', 'entry', 'patterns'] },
  },
  {
    id: 'aline',
    title: 'Aliner',
    tagline: 'Aligner tracker & timer',
    description: 'Track aligner wear time, keep a photo diary, and come prepared to every appointment.',
    fullDescription:
      'Aliner is a calm, ad-free companion for your aligner journey. Tap the ring when you take your trays out, get a gentle reminder to put them back in, and watch your daily wear progress. Keep a weekly photo diary with before/after compare and timelapse export, jot down notes with tags, and let Aliner organize them into a short brief for your next appointment. Your photos stay on your device and in your personal iCloud — no ads, no tracking.',
    category: 'Health & Fitness',
    platform: 'iOS',
    appStoreId: '6779657332',
    appStoreUrl: 'https://apps.apple.com/app/id6779657332',
    supportEmail: 'B.S.NikishinG@gmail.com',
    iconPath: '/icons/aline.png',
    features: [
      'Tray-out timer with daily wear progress ring',
      'Aligner calendar: tray changes, appointments, tonal wear map',
      'Photo diary with before/after compare and timelapse export',
      'Notes with tags and an auto-list for your next appointment',
      'AI pre-appointment summary, widgets, Watch and Siri (Aliner+)',
      'SOS flow for a lost aligner',
    ],
    group: 'apps',
    listed: true,
    devices: 'iPhone · Apple Watch',
    theme: { bg: '#F7EFEB', ink: '#3E2F2B', muted: '#86716B', accent: '#B5857C', display: 'serif' },
    shots: { scenes: ['timer', 'progress', 'notes'] },
  },
  {
    id: 'colorbrain',
    title: 'ColorBrain',
    tagline: 'Train your color sense',
    description: 'Sharpen your color perception with daily puzzles and brain challenges.',
    fullDescription:
      'Colorbrain is a color training game that sharpens your visual perception and creative thinking. Complete daily color puzzles, master gradient challenges, and track how your color sense improves over time. Designed for artists, designers, and anyone who wants a beautifully different brain workout.',
    category: 'Games',
    platform: 'iOS',
    appStoreId: '6758952446',
    appStoreUrl: 'https://apps.apple.com/us/app/brain-training-colorbrain/id6758952446',
    supportEmail: 'B.S.NikishinG@gmail.com',
    iconPath: '/icons/colorbrain.png',
    features: [
      'Daily color challenges',
      'Gradient and hue perception puzzles',
      'Progress tracking and statistics',
      'Multiple difficulty levels',
      'Colorblind-friendly mode',
      'Leaderboards and achievements',
    ],
    group: 'games',
    listed: true,
    devices: 'iPhone · iPad',
    theme: { bg: '#FFFFFF', ink: '#151515', muted: '#666666', accent: '#2A62D8', display: 'sans' },
    shots: { scenes: ['stroop', 'progress', 'daily'] },
  },
  {
    id: 'swirlball',
    title: 'SwirlBall',
    tagline: 'Spin the tower, drop the ball',
    description: 'Hold to spin the tower and drop a bouncing ball through the gaps. 100 levels, the Endless Tower and a new Daily Tower every day. No ads, no Wi-Fi needed.',
    fullDescription:
      'SwirlBall is a ball-drop arcade game. Hold the left or right side of the screen to spin the tower under a bouncing ball: line up the gaps, land on your color and never touch the sticky resin. Play 100 levels across 20 chapters, chase your deepest run in the Endless Tower, and take on the Daily Tower: a new tower every day, the same for everyone, with a daily Game Center leaderboard and a day streak. Earn Sparks for 18 ball skins. No ads, no energy timers, and no Wi-Fi needed; the Supporter Pack, the Skin Pack and tips are optional.',
    category: 'Games',
    platform: 'iOS',
    appStoreId: '6790787588',
    appStoreUrl: 'https://apps.apple.com/app/id6790787588',
    supportEmail: 'B.S.NikishinG@gmail.com',
    iconPath: '/icons/swirlball.png',
    features: [
      'Hold the left or right side of the screen to spin the tower',
      'Daily Tower: a new tower every day, the same for everyone, with a daily Game Center leaderboard and a day streak',
      '100 levels in 20 chapters',
      'Endless Tower: send your best depth to Game Center',
      'Combos up to ×5 and power-ups',
      '18 ball skins earned with Sparks',
      'No ads, no energy, no wait timers; no Wi-Fi needed',
      'Optional Supporter Pack, Lava Lamp Skin Pack and tips',
    ],
    group: 'games',
    listed: true,
    devices: 'iPhone · iPad',
    theme: { bg: '#FF6A1A', ink: '#1D1B2B', muted: '#4B2414', accent: '#1D1B2B', display: 'unbounded' },
    shots: { scenes: ['combo', 'daily', 'levels'] },
  },
  {
    id: 'cozyball',
    title: 'Cozy Ball',
    tagline: 'A calm ball run above the sea',
    description: 'Roll a beach ball along a pier above the sea, dodge obstacles and collect pearls. New Calm mode with no game over. No ads, ever.',
    fullDescription:
      'Cozy Ball is a calm ball run above the sea. Roll a beach ball along a wooden pier: hold the left or right half of the screen to steer, both halves to jump. Roll from a golden sunset into a bright lagoon, through a lighthouse night and on into the dawn, with dolphins, a whale and seagulls along the way. Collect pearls for ball skins, now cheaper, complete daily missions and compete for the longest classic run on Game Center, or switch to the new Calm mode, where a hit only slows you down. No ads, ever; the optional Cozy Supporter Pack is a single payment.',
    category: 'Games',
    platform: 'iOS',
    appStoreId: '6479428845',
    appStoreUrl: 'https://apps.apple.com/app/id6479428845',
    supportEmail: 'B.S.NikishinG@gmail.com',
    iconPath: '/icons/cozyball.png',
    features: [
      'New Calm mode: no game over, a hit only slows you down',
      'Easy, forgiving controls: steer with screen halves, jump with both',
      'Sunset, lagoon, night and dawn above the sea',
      'Dolphins, a whale and a lighthouse in every run',
      'Ball skins earned with pearls, now cheaper',
      'Three daily missions with pearl rewards',
      'Game Center leaderboard for the classic run',
      'No ads, ever; optional one-time Cozy Supporter Pack',
    ],
    group: 'games',
    listed: true,
    devices: 'iPhone · iPad',
    theme: { bg: '#F6E3D6', ink: '#1F4E4A', muted: '#5A7773', accent: '#E2553B', display: 'serif' },
    shots: { scenes: ['pier', 'calm', 'sea'], landscape: true },
  },
  {
    id: 'tarotaper',
    title: 'TaroTaper',
    tagline: 'Tarot in Telegram',
    description: 'A free card of the day, spreads from three to ten cards and a journal of your readings, right in Telegram. The 1909 Pamela Colman Smith deck in a two-colour print.',
    fullDescription:
      'TaroTaper is a tarot deck inside Telegram, with nothing to install. Draw a free card of the day, ask Yes or no, or lay out three, five or ten cards for a question that matters, and every reading stays in your journal. The cards are Pamela Colman Smith’s drawings from 1909 (public domain) in our own two-colour print, by day and by night. A language model writes each reading for your cards and your question, in 13 languages; tarot here is for reflection and fun, not advice. Pay for single readings with Telegram Stars or get TaroTaper+ for every reading without paying each time.',
    category: 'Entertainment',
    platform: 'Telegram',
    appStoreId: null,
    appStoreUrl: null,
    telegramUrl: 'https://t.me/TaroTaper_bot',
    supportEmail: 'B.S.NikishinG@gmail.com',
    // ?v=2: browsers keep images for hours; bump it when the icon changes
    iconPath: '/icons/tarotaper.png?v=2',
    features: [
      'Card of the day, free every day; seven days in a row earn a Three cards reading',
      'Three cards, Two of us and the Celtic Cross; the first Three cards is free',
      'Yes or no: one card and a straight answer',
      'The 1909 Pamela Colman Smith deck in a two-colour print, by day and by night',
      'Journal with a calendar and a collection of the 78 cards',
      'Readings in 13 languages, for reflection rather than advice',
      'Optional daily reminder at the hour you choose',
      'Telegram Stars: single readings from 15 ★ or TaroTaper+ for 299 ★ per 30 days',
    ],
    group: 'telegram',
    listed: true,
    devices: 'Telegram',
    // the Mini App's day theme, "a printed deck": paper, ink and vermilion
    theme: { bg: '#F3EBDC', ink: '#1C1E34', muted: '#4A4C62', accent: '#D04E2E', display: 'oldstandard' },
    shots: { scenes: ['home', 'daily', 'journal'] },
  },
  {
    id: 'wakeleague',
    title: 'Wake League',
    tagline: 'The alarm you have to beat',
    description: 'An alarm clock that keeps ringing until you finish short missions. One Daily Challenge for everyone, a Game Center league, points, levels and streaks.',
    fullDescription:
      'Wake League is an alarm clock that keeps ringing until you finish short missions: solve math, type or say a phrase, find an object with the camera, shake, walk, or snap the spot you photographed the night before. Every day everyone gets the same Daily Challenge, so your wake-up time lands in a Game Center league. Four wake-up difficulties, points, levels, streaks, 27 trophies, stats and widgets turn getting up into a game. No account, no ads, no tracking: camera, voice and motion are checked on your iPhone. One-time purchase, everything included.',
    category: 'Lifestyle',
    platform: 'iOS',
    appStoreId: null,
    appStoreUrl: null,
    supportEmail: 'B.S.NikishinG@gmail.com',
    iconPath: '/icons/wakeleague.png',
    features: [
      'Missions instead of a snooze button: math, memory, typing, voice, camera, shake, steps',
      'One Daily Challenge for everyone and a Game Center league',
      'Four wake-up difficulties, from Gentle to Hardcore with an awake check',
      'Snap the spot: the alarm rings until you photograph the same place',
      'Points, levels, streaks and 27 trophies; new sounds and icons as you level up',
      'Stats: wake-up times, success by weekday, month calendar',
      'Widgets for the Home Screen, the Lock Screen and StandBy',
      'Private by design: no account, no ads, on-device checks; one-time purchase',
    ],
    group: 'apps',
    listed: true,
    soon: true,
    devices: 'iPhone',
    theme: { bg: '#24183A', ink: '#F6EEDC', muted: '#B8AFC4', accent: '#F2B544', display: 'sans' },
  },
  {
    id: 'loansolver',
    title: 'LoanSolver',
    tagline: 'Pay off loans faster',
    description: 'Track annuity loans, see where every payment goes, and find out how much an extra payment really saves. No account, no ads.',
    fullDescription:
      'LoanSolver is a calm, private tracker for annuity loans: car loans, personal loans, student loans, mortgages. Every loan gets its own ring that closes when you pay it off. See the full payment schedule, the interest still to pay and the payoff date, try any extra payment with a slider to see the interest saved and months cut, and get local reminders before each due date. No account, no tracking, no ads: your data stays on your device and in your private iCloud. One-time purchase, everything included.',
    category: 'Finance',
    platform: 'iOS',
    appStoreId: null,
    appStoreUrl: null,
    supportEmail: 'B.S.NikishinG@gmail.com',
    iconPath: '/icons/loansolver.png',
    features: [
      'Closing rings: one ring per loan, closed ring means closed loan',
      'Full payment schedule: principal, interest and balance for every month',
      'Extra-payment simulator: interest saved and months cut',
      'Enter the rate or the remaining term, LoanSolver calculates the other',
      'Local reminders before the due date, on the day and when overdue',
      'Streaks and achievements for paying on time and paying extra',
      'Private by design: no account, on-device data, private iCloud sync',
      'Optional Face ID / Touch ID lock; one-time purchase, no subscriptions',
    ],
    group: 'apps',
    listed: false,
    devices: 'iPhone',
    theme: { bg: '#F2EEE5', ink: '#171614', muted: '#6E695F', accent: '#1F7A4A', display: 'serif' },
  },
]

/** Apps shown in the catalogue, in catalogue order. */
export const listedApps = apps.filter((a) => a.listed)
