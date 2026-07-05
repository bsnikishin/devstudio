export interface App {
  id: string
  title: string
  tagline: string
  description: string
  fullDescription: string
  category: string
  platform: 'iOS'
  appStoreId: string | null
  appStoreUrl: string | null
  supportEmail: string
  gradient: string
  features: string[]
  color: string
  iconPath: string
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
    id: 'ldream',
    title: 'Ldream',
    tagline: 'Your dream journal',
    description: 'Record, explore, and understand your dreams with AI-powered analysis.',
    fullDescription:
      'Ldream is your personal dream companion. Capture your dreams the moment you wake up, explore recurring symbols, and uncover patterns in your subconscious. With AI-powered analysis, Ldream helps you understand what your mind is telling you at night.',
    category: 'Lifestyle',
    platform: 'iOS',
    appStoreId: '6758800942',
    appStoreUrl: 'https://apps.apple.com/kz/app/dream-journal-ai-ldream/id6758800942',
    supportEmail: 'B.S.NikishinG@gmail.com',
    gradient: 'from-indigo-500 to-purple-700',
    color: '#6366f1',
    iconPath: '/icons/ldream.png',
    features: [
      'Voice and text dream journaling',
      'AI symbol analysis and interpretation',
      'Dream pattern recognition',
      'Mood and sleep tracking',
      'Beautiful dream visualization',
      'Reminder to record on wake up',
    ],
  },
  {
    id: 'tarotaper',
    title: 'Tarotaper',
    tagline: 'Tarot in your pocket',
    description: 'Daily tarot readings, spreads, and an interactive card library.',
    fullDescription:
      'Tarotaper brings the ancient wisdom of tarot to your iPhone. Draw daily cards, explore custom spreads, and dive deep into the meaning of each card with beautiful artwork and detailed interpretations. Whether you\'re a beginner or an experienced reader, Tarotaper grows with you.',
    category: 'Entertainment',
    platform: 'iOS',
    appStoreId: null,
    appStoreUrl: null,
    supportEmail: 'B.S.NikishinG@gmail.com',
    gradient: 'from-purple-600 to-pink-600',
    color: '#9333ea',
    iconPath: '/icons/tarotaper.png',
    features: [
      'Daily card draw with interpretation',
      'Classic and custom spreads',
      'Full 78-card library with artwork',
      'Guided reading sessions',
      'Reading history and journal',
      'Intuitive, beautiful interface',
    ],
  },
  {
    id: 'colorbrain',
    title: 'Colorbrain',
    tagline: 'Train your color sense',
    description: 'Sharpen your color perception with daily puzzles and brain challenges.',
    fullDescription:
      'Colorbrain is a color training game that sharpens your visual perception and creative thinking. Complete daily color puzzles, master gradient challenges, and track how your color sense improves over time. Designed for artists, designers, and anyone who wants a beautifully different brain workout.',
    category: 'Games',
    platform: 'iOS',
    appStoreId: '6758952446',
    appStoreUrl: 'https://apps.apple.com/us/app/brain-training-colorbrain/id6758952446',
    supportEmail: 'B.S.NikishinG@gmail.com',
    gradient: 'from-pink-500 via-orange-400 to-yellow-400',
    color: '#f97316',
    iconPath: '/icons/colorbrain.png',
    features: [
      'Daily color challenges',
      'Gradient and hue perception puzzles',
      'Progress tracking and statistics',
      'Multiple difficulty levels',
      'Colorblind-friendly mode',
      'Leaderboards and achievements',
    ],
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
    appStoreId: null,
    appStoreUrl: null,
    supportEmail: 'B.S.NikishinG@gmail.com',
    gradient: 'from-rose-300 to-rose-500',
    color: '#B5837A',
    iconPath: '/icons/aline.png',
    features: [
      'Tray-out timer with daily wear progress ring',
      'Aligner calendar: tray changes, appointments, tonal wear map',
      'Photo diary with before/after compare and timelapse export',
      'Notes with tags and an auto-list for your next appointment',
      'AI pre-appointment summary, widgets, Watch and Siri (Aliner+)',
      'SOS flow for a lost aligner',
    ],
  },
]
