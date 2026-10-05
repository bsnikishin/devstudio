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
    id: 'bookpather',
    title: 'Bookpather',
    tagline: 'Your reading planner',
    description: 'Scan your bookshelf, get concise AI insights, and turn your books into a clear reading path.',
    fullDescription:
      'Bookpather turns the books you already own into a reading plan you can actually follow. Scan covers and barcodes, organize your personal library, save concise AI insights about each book, and let AI arrange your shelf into step-by-step reading chains around the skills you want to grow. No account required — your library stays on your device and in your personal iCloud.',
    category: 'Books',
    platform: 'iOS',
    appStoreId: '6790094219',
    appStoreUrl: 'https://apps.apple.com/app/id6790094219',
    supportEmail: 'B.S.NikishinG@gmail.com',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    color: '#0d9488',
    iconPath: '/icons/bookpather.png',
    features: [
      'Scan books by cover, barcode, or shelf photo',
      'Digital bookshelf with statuses, topics, and notes',
      'Concise AI book insights: central idea, takeaways, difficulty',
      'AI reading chains built around your goals',
      'Private by design — no account, on-device library, iCloud sync',
      'Export your books, notes, and chains as JSON',
    ],
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
    gradient: 'from-purple-900 via-purple-700 to-amber-400',
    color: '#3b1e4f',
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
    gradient: 'from-emerald-400 via-green-600 to-green-800',
    color: '#1f7a4a',
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
    gradient: 'from-[#FF8A47] via-[#FF6A1A] to-[#E5530B]',
    color: '#FF6A1A',
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
  },
  {
    id: 'cozyball',
    title: 'Cozy Ball',
    tagline: 'A cozy arcade ball run',
    description: 'Roll across a calm sunset ocean, dodge obstacles, and unwind. No ads, ever.',
    fullDescription:
      'Cozy Ball is a relaxing arcade runner. Guide a ball rolling across a serene ocean boardwalk: hold the left or right side of the screen to steer, both sides to jump. Travel through sunset, lagoon, bioluminescent night, and dawn, collect pearls, unlock ball skins, and chase your best distance on Game Center leaderboards. No ads — just a calm, focused run.',
    category: 'Games',
    platform: 'iOS',
    appStoreId: '6479428845',
    appStoreUrl: 'https://apps.apple.com/app/id6479428845',
    supportEmail: 'B.S.NikishinG@gmail.com',
    gradient: 'from-amber-300 via-orange-400 to-teal-500',
    color: '#fb923c',
    iconPath: '/icons/cozyball.png',
    features: [
      'One-touch cozy controls — steer with screen halves, jump with both',
      'Real ball physics with forgiving, smooth jumps',
      'Four scenic biomes — sunset, lagoon, night, and dawn',
      '10 collectible ball skins',
      'Daily missions with pearl rewards',
      'Game Center leaderboards',
      'No ads — ever',
    ],
  },
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
    tagline: 'Tarot in Telegram',
    description: 'Daily tarot readings, spreads, and AI interpretations — right in Telegram.',
    fullDescription:
      'Tarotaper brings the ancient wisdom of tarot to Telegram. Draw daily cards, explore spreads, and dive deep into the meaning of each card with beautiful artwork and AI-powered interpretations. Whether you\'re a beginner or an experienced reader, Tarotaper grows with you — no installation needed, just open the bot.',
    category: 'Entertainment',
    platform: 'Telegram',
    appStoreId: null,
    appStoreUrl: null,
    telegramUrl: 'https://t.me/TaroTaper_bot',
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
    appStoreId: '6779657332',
    appStoreUrl: 'https://apps.apple.com/app/id6779657332',
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
