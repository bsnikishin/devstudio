export type Locale =
  | 'en' | 'ru' | 'zh' | 'es' | 'fr' | 'de'
  | 'ja' | 'ko' | 'pt' | 'ar' | 'it' | 'hi' | 'he'

export const LOCALES: { code: Locale; label: string; nativeName: string; rtl?: boolean }[] = [
  { code: 'en', label: 'English', nativeName: 'English' },
  { code: 'ru', label: 'Russian', nativeName: 'Русский' },
  { code: 'zh', label: 'Chinese', nativeName: '中文' },
  { code: 'es', label: 'Spanish', nativeName: 'Español' },
  { code: 'fr', label: 'French', nativeName: 'Français' },
  { code: 'de', label: 'German', nativeName: 'Deutsch' },
  { code: 'ja', label: 'Japanese', nativeName: '日本語' },
  { code: 'ko', label: 'Korean', nativeName: '한국어' },
  { code: 'pt', label: 'Portuguese', nativeName: 'Português' },
  { code: 'ar', label: 'Arabic', nativeName: 'العربية', rtl: true },
  { code: 'it', label: 'Italian', nativeName: 'Italiano' },
  { code: 'hi', label: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'he', label: 'Hebrew', nativeName: 'עברית', rtl: true },
]

// Interface strings. English is complete and is the fallback for a key a locale has not translated yet.
export type TranslationKeys = {
  'site.name': string
  'nav.apps': string
  'nav.contact': string
  'lang.label': string
  'home.title': string
  'home.lead': string
  'facts.appStore': string
  'facts.ads': string
  'facts.adsValue': string
  'facts.accounts': string
  'facts.accountsValue': string
  'facts.data': string
  'facts.dataValue': string
  'facts.updated': string
  'group.apps': string
  'group.games': string
  'group.telegram': string
  'group.soon': string
  'meta.free': string
  'meta.soon': string
  'meta.bot': string
  'link.appStore': string
  'link.telegram': string
  'link.more': string
  'link.privacy': string
  'link.support': string
  'app.allApps': string
  'app.otherApps': string
  'app.features': string
  'app.downloadAppStore': string
  'app.comingSoon': string
  'app.openTelegram': string
  'support.title': string
  'support.desc': string
  'support.email': string
  'support.telegram': string
  'contacts.title': string
  'contacts.desc': string
  'footer.colophon': string
  'footer.privacy': string
  'footer.terms': string
  'footer.notOffer': string
  'redirect.opening': string
  'redirect.openingTelegram': string
  'redirect.manual': string
  'redirect.comingSoon': string
  'redirect.comingSoonDesc': string
  'redirect.openBtn': string
  'common.backToHome': string
  'notFound.title': string
}

const t: { en: TranslationKeys } & Record<Exclude<Locale, 'en'>, Partial<TranslationKeys>> = {
  en: {
    'site.name': "Bogdan Nikishin",
    'nav.apps': "Apps",
    'nav.contact': "Contact",
    'lang.label': "Language",
    'home.title': "Small iPhone apps that I make *myself*.",
    'home.lead': "Trackers for books, dreams and aligners, attention training and two calm games. No ads and no accounts: your notes are stored on your phone and in your iCloud.",
    'facts.appStore': "In the App Store",
    'facts.ads': "Ads",
    'facts.adsValue': "none",
    'facts.accounts': "Accounts",
    'facts.accountsValue': "not needed",
    'facts.data': "Your data",
    'facts.dataValue': "on device + iCloud",
    'facts.updated': "Updated",
    'group.apps': "Apps",
    'group.games': "Games",
    'group.telegram': "In Telegram",
    'group.soon': "Coming soon",
    'meta.free': "Free",
    'meta.soon': "Coming soon",
    'meta.bot': "Telegram bot",
    'link.appStore': "App Store",
    'link.telegram': "Telegram",
    'link.more': "More",
    'link.privacy': "Privacy",
    'link.support': "Support",
    'app.allApps': "All apps",
    'app.otherApps': "Other apps",
    'app.features': "Features",
    'app.downloadAppStore': "Download on the App Store",
    'app.comingSoon': "Coming to App Store Soon",
    'app.openTelegram': "Open in Telegram",
    'support.title': "Support",
    'support.desc': "Write to me about a bug, a question or an idea. I read every message and answer it myself.",
    'support.email': "Send Email",
    'support.telegram': "Telegram",
    'contacts.title': "Contact",
    'contacts.desc': "Telegram is the quickest. For anything longer, use email.",
    'footer.colophon': "I'm *Bogdan Nikishin*, an iOS developer. I come up with, design, build and support every app on this page myself. Found a bug or have an idea? Write to me.",
    'footer.privacy': "Privacy Policy",
    'footer.terms': "Terms of Use",
    'footer.notOffer': "Information on this website does not constitute a public offer.",
    'redirect.opening': "Opening App Store…",
    'redirect.openingTelegram': "Opening Telegram…",
    'redirect.manual': "Open manually",
    'redirect.comingSoon': "Coming Soon",
    'redirect.comingSoonDesc': "This app will be available on the App Store soon. Stay tuned!",
    'redirect.openBtn': "Open in App Store",
    'common.backToHome': "Back to Home",
    'notFound.title': "There is no such page",
  },
  ru: {
    'site.name': "Богдан Никишин",
    'nav.apps': "Приложения",
    'nav.contact': "Связаться",
    'lang.label': "Язык",
    'home.title': "Небольшие приложения для iPhone, которые я делаю *сам*.",
    'home.lead': "Трекеры для книг, снов и элайнеров, тренировка внимания и две спокойные игры. Без рекламы и без аккаунтов: ваши записи хранятся на телефоне и в вашем iCloud.",
    'facts.appStore': "В App Store",
    'facts.ads': "Реклама",
    'facts.adsValue': "нет",
    'facts.accounts': "Аккаунты",
    'facts.accountsValue': "не нужны",
    'facts.data': "Данные",
    'facts.dataValue': "на устройстве и в iCloud",
    'facts.updated': "Обновлено",
    'group.apps': "Приложения",
    'group.games': "Игры",
    'group.telegram': "В Telegram",
    'group.soon': "Скоро",
    'meta.free': "Бесплатно",
    'meta.soon': "Скоро",
    'meta.bot': "Бот в Telegram",
    'link.appStore': "App Store",
    'link.telegram': "Telegram",
    'link.more': "Подробнее",
    'link.privacy': "Конфиденциальность",
    'link.support': "Поддержка",
    'app.allApps': "Все приложения",
    'app.otherApps': "Другие приложения",
    'app.features': "Возможности",
    'app.downloadAppStore': "Загрузить в App Store",
    'app.comingSoon': "Скоро в App Store",
    'app.openTelegram': "Открыть в Telegram",
    'support.title': "Поддержка",
    'support.desc': "Напишите мне об ошибке, вопросе или идее. Я читаю каждое сообщение и отвечаю сам.",
    'support.email': "Написать email",
    'support.telegram': "Telegram",
    'contacts.title': "Связаться",
    'contacts.desc': "Быстрее всего — в Telegram. Если письмо длинное — на почту.",
    'footer.colophon': "Я *Богдан Никишин*, iOS-разработчик. Все приложения на этой странице я придумываю, рисую, пишу и поддерживаю сам. Нашли ошибку или есть идея — напишите.",
    'footer.privacy': "Конфиденциальность",
    'footer.terms': "Условия использования",
    'footer.notOffer': "Информация на сайте не является публичной офертой.",
    'redirect.opening': "Открытие App Store…",
    'redirect.openingTelegram': "Открытие Telegram…",
    'redirect.manual': "Открыть вручную",
    'redirect.comingSoon': "Скоро",
    'redirect.comingSoonDesc': "Приложение появится в App Store в ближайшее время. Следите за обновлениями!",
    'redirect.openBtn': "Открыть в App Store",
    'common.backToHome': "На главную",
    'notFound.title': "Такой страницы нет",
  },
  zh: {
    'nav.apps': "应用",
    'link.privacy': "隐私政策",
    'link.support': "支持",
    'app.features': "功能特性",
    'app.downloadAppStore': "在 App Store 下载",
    'app.comingSoon': "即将登陆 App Store",
    'app.openTelegram': "在 Telegram 中打开",
    'support.email': "发送邮件",
    'footer.privacy': "隐私政策",
    'footer.terms': "使用条款",
    'footer.notOffer': "本网站信息不构成公开要约。",
    'redirect.opening': "正在打开 App Store…",
    'redirect.openingTelegram': "正在打开 Telegram…",
    'redirect.manual': "手动打开",
    'redirect.comingSoon': "即将推出",
    'redirect.comingSoonDesc': "此应用即将登陆 App Store，敬请期待！",
    'redirect.openBtn': "在 App Store 中打开",
    'common.backToHome': "返回首页",
  },
  es: {
    'nav.apps': "Apps",
    'link.privacy': "Privacidad",
    'link.support': "Soporte",
    'app.features': "Características",
    'app.downloadAppStore': "Descargar en el App Store",
    'app.comingSoon': "Próximamente en el App Store",
    'app.openTelegram': "Abrir en Telegram",
    'support.email': "Enviar email",
    'footer.privacy': "Privacidad",
    'footer.terms': "Términos de uso",
    'footer.notOffer': "La información de este sitio no constituye una oferta pública.",
    'redirect.opening': "Abriendo App Store…",
    'redirect.openingTelegram': "Abriendo Telegram…",
    'redirect.manual': "Abrir manualmente",
    'redirect.comingSoon': "Próximamente",
    'redirect.comingSoonDesc': "Esta app estará disponible en el App Store pronto. ¡Mantente al tanto!",
    'redirect.openBtn': "Abrir en App Store",
    'common.backToHome': "Volver al inicio",
  },
  fr: {
    'nav.apps': "Apps",
    'link.privacy': "Confidentialité",
    'link.support': "Support",
    'app.features': "Fonctionnalités",
    'app.downloadAppStore': "Télécharger sur l'App Store",
    'app.comingSoon': "Bientôt sur l'App Store",
    'app.openTelegram': "Ouvrir dans Telegram",
    'support.email': "Envoyer un email",
    'footer.privacy': "Confidentialité",
    'footer.terms': "Conditions d'utilisation",
    'footer.notOffer': "Les informations de ce site ne constituent pas une offre publique.",
    'redirect.opening': "Ouverture de l'App Store…",
    'redirect.openingTelegram': "Ouverture de Telegram…",
    'redirect.manual': "Ouvrir manuellement",
    'redirect.comingSoon': "Bientôt disponible",
    'redirect.comingSoonDesc': "Cette app sera bientôt disponible sur l'App Store. Restez connectés !",
    'redirect.openBtn': "Ouvrir dans l'App Store",
    'common.backToHome': "Retour à l'accueil",
  },
  de: {
    'nav.apps': "Apps",
    'link.privacy': "Datenschutz",
    'link.support': "Support",
    'app.features': "Funktionen",
    'app.downloadAppStore': "Im App Store laden",
    'app.comingSoon': "Demnächst im App Store",
    'app.openTelegram': "In Telegram öffnen",
    'support.email': "E-Mail senden",
    'footer.privacy': "Datenschutz",
    'footer.terms': "Nutzungsbedingungen",
    'footer.notOffer': "Die Informationen auf dieser Website stellen kein öffentliches Angebot dar.",
    'redirect.opening': "App Store wird geöffnet…",
    'redirect.openingTelegram': "Telegram wird geöffnet…",
    'redirect.manual': "Manuell öffnen",
    'redirect.comingSoon': "Demnächst",
    'redirect.comingSoonDesc': "Diese App wird bald im App Store verfügbar sein. Bleiben Sie dran!",
    'redirect.openBtn': "Im App Store öffnen",
    'common.backToHome': "Zurück zur Startseite",
  },
  ja: {
    'nav.apps': "アプリ",
    'link.privacy': "プライバシー",
    'link.support': "サポート",
    'app.features': "機能",
    'app.downloadAppStore': "App Storeでダウンロード",
    'app.comingSoon': "もうすぐApp Storeに登場",
    'app.openTelegram': "Telegramで開く",
    'support.email': "メールを送る",
    'footer.privacy': "プライバシー",
    'footer.terms': "利用規約",
    'footer.notOffer': "当サイトの情報は公開オファーを構成するものではありません。",
    'redirect.opening': "App Storeを開いています…",
    'redirect.openingTelegram': "Telegramを開いています…",
    'redirect.manual': "手動で開く",
    'redirect.comingSoon': "もうすぐ",
    'redirect.comingSoonDesc': "このアプリはまもなくApp Storeで公開されます。お楽しみに！",
    'redirect.openBtn': "App Storeで開く",
    'common.backToHome': "ホームに戻る",
  },
  ko: {
    'nav.apps': "앱",
    'link.privacy': "개인정보",
    'link.support': "지원",
    'app.features': "기능",
    'app.downloadAppStore': "App Store에서 다운로드",
    'app.comingSoon': "App Store 출시 예정",
    'app.openTelegram': "Telegram에서 열기",
    'support.email': "이메일 보내기",
    'footer.privacy': "개인정보",
    'footer.terms': "이용 약관",
    'footer.notOffer': "본 사이트의 정보는 공개 청약이 아닙니다.",
    'redirect.opening': "App Store 열기…",
    'redirect.openingTelegram': "Telegram 여는 중…",
    'redirect.manual': "수동으로 열기",
    'redirect.comingSoon': "출시 예정",
    'redirect.comingSoonDesc': "이 앱은 곧 App Store에서 출시됩니다. 기대해 주세요!",
    'redirect.openBtn': "App Store에서 열기",
    'common.backToHome': "홈으로",
  },
  pt: {
    'nav.apps': "Apps",
    'link.privacy': "Privacidade",
    'link.support': "Suporte",
    'app.features': "Funcionalidades",
    'app.downloadAppStore': "Baixar na App Store",
    'app.comingSoon': "Em breve na App Store",
    'app.openTelegram': "Abrir no Telegram",
    'support.email': "Enviar email",
    'footer.privacy': "Privacidade",
    'footer.terms': "Termos de uso",
    'footer.notOffer': "As informações deste site não constituem oferta pública.",
    'redirect.opening': "Abrindo App Store…",
    'redirect.openingTelegram': "Abrindo o Telegram…",
    'redirect.manual': "Abrir manualmente",
    'redirect.comingSoon': "Em breve",
    'redirect.comingSoonDesc': "Este app estará disponível na App Store em breve. Fique atento!",
    'redirect.openBtn': "Abrir na App Store",
    'common.backToHome': "Voltar ao início",
  },
  ar: {
    'nav.apps': "التطبيقات",
    'link.privacy': "الخصوصية",
    'link.support': "الدعم",
    'app.features': "المميزات",
    'app.downloadAppStore': "تنزيل من App Store",
    'app.comingSoon': "قريباً في App Store",
    'app.openTelegram': "افتح في تيليجرام",
    'support.email': "إرسال بريد إلكتروني",
    'footer.privacy': "الخصوصية",
    'footer.terms': "شروط الاستخدام",
    'footer.notOffer': "المعلومات الواردة في هذا الموقع لا تُعد عرضاً عاماً.",
    'redirect.opening': "فتح App Store…",
    'redirect.openingTelegram': "جارٍ فتح تيليجرام…",
    'redirect.manual': "فتح يدوياً",
    'redirect.comingSoon': "قريباً",
    'redirect.comingSoonDesc': "سيكون هذا التطبيق متاحاً في App Store قريباً. ترقبوا!",
    'redirect.openBtn': "فتح في App Store",
    'common.backToHome': "العودة للرئيسية",
  },
  it: {
    'nav.apps': "App",
    'link.privacy': "Privacy",
    'link.support': "Supporto",
    'app.features': "Funzionalità",
    'app.downloadAppStore': "Scarica dall'App Store",
    'app.comingSoon': "Prossimamente su App Store",
    'app.openTelegram': "Apri in Telegram",
    'support.email': "Invia email",
    'footer.privacy': "Privacy",
    'footer.terms': "Termini di utilizzo",
    'footer.notOffer': "Le informazioni su questo sito non costituiscono offerta pubblica.",
    'redirect.opening': "Apertura App Store…",
    'redirect.openingTelegram': "Apertura di Telegram…",
    'redirect.manual': "Apri manualmente",
    'redirect.comingSoon': "Prossimamente",
    'redirect.comingSoonDesc': "Questa app sarà disponibile sull'App Store presto. Resta sintonizzato!",
    'redirect.openBtn': "Apri nell'App Store",
    'common.backToHome': "Torna alla home",
  },
  hi: {
    'nav.apps': "ऐप्स",
    'link.privacy': "गोपनीयता",
    'link.support': "सपोर्ट",
    'app.features': "विशेषताएं",
    'app.downloadAppStore': "App Store से डाउनलोड करें",
    'app.comingSoon': "जल्द ही App Store पर",
    'app.openTelegram': "Telegram में खोलें",
    'support.email': "ईमेल भेजें",
    'footer.privacy': "गोपनीयता",
    'footer.terms': "उपयोग की शर्तें",
    'footer.notOffer': "इस वेबसाइट की जानकारी सार्वजनिक प्रस्ताव नहीं है।",
    'redirect.opening': "App Store खुल रहा है…",
    'redirect.openingTelegram': "Telegram खोला जा रहा है…",
    'redirect.manual': "मैन्युअल खोलें",
    'redirect.comingSoon': "जल्द आ रहा है",
    'redirect.comingSoonDesc': "यह ऐप जल्द ही App Store पर उपलब्ध होगा। बने रहें!",
    'redirect.openBtn': "App Store में खोलें",
    'common.backToHome': "होम पर वापस",
  },
  he: {
    'nav.apps': "אפליקציות",
    'link.privacy': "פרטיות",
    'link.support': "תמיכה",
    'app.features': "תכונות",
    'app.downloadAppStore': "הורד מה-App Store",
    'app.comingSoon': "בקרוב ב-App Store",
    'app.openTelegram': "פתיחה בטלגרם",
    'support.email': "שלח אימייל",
    'footer.privacy': "פרטיות",
    'footer.terms': "תנאי שימוש",
    'footer.notOffer': "המידע באתר זה אינו מהווה הצעה פומבית.",
    'redirect.opening': "פותח App Store…",
    'redirect.openingTelegram': "פותח את טלגרם…",
    'redirect.manual': "פתח ידנית",
    'redirect.comingSoon': "בקרוב",
    'redirect.comingSoonDesc': "האפליקציה הזו תהיה זמינה ב-App Store בקרוב. הישארו מעודכנים!",
    'redirect.openBtn': "פתח ב-App Store",
    'common.backToHome': "חזרה לדף הבית",
  },
}

export function getTranslation(locale: Locale, key: keyof TranslationKeys): string {
  return t[locale]?.[key] ?? t.en[key] ?? key
}

export default t
