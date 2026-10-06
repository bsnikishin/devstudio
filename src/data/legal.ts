import type { Locale } from '@/lib/translations'

export interface LegalPage {
  title: string
  lastUpdated: string
  sections: { heading: string; content: string }[]
}

export type LegalKind = 'privacy' | 'terms'

// /terms is also the Terms of Use that Bookpather and Aliner link to from their subscription screens.
// Locales without their own version fall back to English.
export const legal: Partial<Record<Locale, Record<LegalKind, LegalPage>>> = {
  en: {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: October 7, 2026',
      sections: [
        {
          heading: 'What this policy covers',
          content: '<p>This policy covers the website nikibstudio.site, run by Bogdan Nikishin, an independent iOS developer. Each app has its own privacy policy that explains exactly what the app stores and sends; you will find it on the app’s page and inside the app.</p>',
        },
        {
          heading: 'What the website collects',
          content: '<p>Nothing about you. The site has no accounts, forms, advertising, analytics or tracking, and it sets no cookies. It remembers the language you chose in your browser’s local storage, which stays on your device.</p>',
        },
        {
          heading: 'Hosting',
          content: '<p>The site is served by Cloudflare Pages. To deliver pages and protect the site from abuse, Cloudflare processes technical data such as your IP address, as described in <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare’s privacy policy</a>. The developer does not use these data to identify or track visitors.</p>',
        },
        {
          heading: 'Links to other services',
          content: '<p>Links to the App Store and Telegram lead to services with their own privacy policies.</p>',
        },
        {
          heading: 'If you write to me',
          content: '<p>If you write by email or Telegram, your message and your address are used only to reply to you. They are not shared with anyone.</p>',
        },
        {
          heading: 'Contact',
          content: '<p>Bogdan Nikishin · <a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio">@nikibstudio</a></p>',
        },
      ],
    },
    terms: {
      title: 'Terms of Use',
      lastUpdated: 'Last updated: October 7, 2026',
      sections: [
        {
          heading: 'About these terms',
          content: '<p>These terms apply to the iOS apps by Bogdan Nikishin listed on nikibstudio.site, to the TaroTaper Telegram bot and to this website. In these terms, “the developer” means Bogdan Nikishin. By using the apps, the bot or the site, you agree to these terms.</p>',
        },
        {
          heading: 'Licence',
          content: '<p>The apps are licensed to you, not sold, under Apple’s <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Licensed Application End User License Agreement</a> (the Standard EULA) together with these terms. If the two differ, the Standard EULA prevails.</p>',
        },
        {
          heading: 'Purchases and subscriptions',
          content: '<ul><li>Payments, renewals and refunds are handled by Apple. You can ask Apple for a refund at <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.</li><li>A subscription renews automatically unless auto-renewal is turned off at least 24 hours before the end of the current period. Your Apple Account is charged for the next period within the 24 hours before the current one ends.</li><li>You can manage or cancel a subscription in your iPhone’s Settings → your name → Subscriptions.</li><li>If a subscription starts with a free trial, any unused part of the trial ends when you buy a subscription.</li><li>One-time purchases, such as Lifetime or supporter packs, can be restored on your devices with “Restore Purchases”.</li></ul>',
        },
        {
          heading: 'Acceptable use',
          content: '<p>Use the apps, the bot and the site lawfully. Do not try to break, overload or gain unauthorised access to them, and do not reverse engineer the apps except where the law allows it.</p>',
        },
        {
          heading: 'Your content',
          content: '<p>Your notes, journals, photos and other content remain yours. When an app processes your content to provide a feature you asked for, such as an interpretation or a summary, it is used only for that feature, as described in that app’s privacy policy.</p>',
        },
        {
          heading: 'Not professional advice',
          content: '<p>Interpretations, summaries, statistics and suggestions in the apps and the bot are for information, self-reflection and entertainment. They are not medical, dental, psychological, financial or other professional advice. During orthodontic treatment, follow your orthodontist’s instructions.</p>',
        },
        {
          heading: 'Intellectual property',
          content: '<p>The apps, their design, texts and icons, and this website belong to the developer. Apple, App Store, iPhone, iPad and Apple Watch are trademarks of Apple Inc.</p>',
        },
        {
          heading: 'Warranty and liability',
          content: '<p>The apps, the bot and the site are provided “as is”. To the extent the law allows, the developer is not liable for indirect or consequential damages or for the loss of data you did not back up. Nothing in these terms limits your rights as a consumer under the law of your country.</p>',
        },
        {
          heading: 'Changes',
          content: '<p>These terms may be updated; the date at the top shows the current version. If you keep using the apps after a change, the updated terms apply.</p>',
        },
        {
          heading: 'Contact',
          content: '<p>Bogdan Nikishin · <a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio">@nikibstudio</a>. Information on this website is not a public offer.</p>',
        },
      ],
    },
  },
  ru: {
    privacy: {
      title: 'Политика конфиденциальности',
      lastUpdated: 'Обновлено 7 октября 2026 г.',
      sections: [
        {
          heading: 'О чём эта политика',
          content: '<p>Эта политика относится к сайту nikibstudio.site. Его ведёт Богдан Никишин, независимый iOS-разработчик. У каждого приложения своя политика конфиденциальности: в ней точно написано, что приложение хранит и отправляет. Она есть на странице приложения и в самом приложении.</p>',
        },
        {
          heading: 'Что собирает сайт',
          content: '<p>Ничего о вас. На сайте нет аккаунтов, форм, рекламы, аналитики и отслеживания, и он не ставит cookies. Он запоминает выбранный вами язык в локальном хранилище браузера — эти данные остаются на вашем устройстве.</p>',
        },
        {
          heading: 'Хостинг',
          content: '<p>Сайт работает на Cloudflare Pages. Чтобы отдавать страницы и защищать сайт от злоупотреблений, Cloudflare обрабатывает технические данные, например IP-адрес, как описано в <a href="https://www.cloudflare.com/privacypolicy/">политике конфиденциальности Cloudflare</a>. Разработчик не использует эти данные, чтобы узнавать или отслеживать посетителей.</p>',
        },
        {
          heading: 'Ссылки на другие сервисы',
          content: '<p>Ссылки на App Store и Telegram ведут на сервисы со своими политиками конфиденциальности.</p>',
        },
        {
          heading: 'Если вы мне пишете',
          content: '<p>Если вы пишете на почту или в Telegram, ваше сообщение и адрес используются только для ответа вам и никому не передаются.</p>',
        },
        {
          heading: 'Контакты',
          content: '<p>Богдан Никишин · <a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio">@nikibstudio</a></p>',
        },
      ],
    },
    terms: {
      title: 'Условия использования',
      lastUpdated: 'Обновлено 7 октября 2026 г.',
      sections: [
        {
          heading: 'О чём эти условия',
          content: '<p>Эти условия относятся к iOS-приложениям Богдана Никишина, перечисленным на nikibstudio.site, к Telegram-боту TaroTaper и к этому сайту. «Разработчик» в этих условиях — Богдан Никишин. Пользуясь приложениями, ботом или сайтом, вы соглашаетесь с этими условиями.</p>',
        },
        {
          heading: 'Лицензия',
          content: '<p>Приложения не продаются, а предоставляются вам по лицензии — по <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Лицензионному соглашению с конечным пользователем Apple</a> (Standard EULA) вместе с этими условиями. Если они расходятся, действует Standard EULA.</p>',
        },
        {
          heading: 'Покупки и подписки',
          content: '<ul><li>Оплату, продление и возврат денег проводит Apple. Попросить Apple о возврате можно на <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.</li><li>Подписка продлевается автоматически, если автопродление не отключено как минимум за 24 часа до конца текущего периода. Плата за следующий период списывается с вашего Apple Account в течение 24 часов до окончания текущего.</li><li>Управлять подпиской и отменить её можно в Настройках iPhone → ваше имя → Подписки.</li><li>Если подписка начинается с бесплатного пробного периода, его неиспользованная часть сгорает при покупке подписки.</li><li>Разовые покупки, например «Навсегда» или наборы поддержки, восстанавливаются на ваших устройствах кнопкой «Восстановить покупки».</li></ul>',
        },
        {
          heading: 'Допустимое использование',
          content: '<p>Пользуйтесь приложениями, ботом и сайтом законно. Не пытайтесь их взломать, перегрузить или получить несанкционированный доступ и не декомпилируйте приложения, кроме случаев, когда это разрешает закон.</p>',
        },
        {
          heading: 'Ваш контент',
          content: '<p>Ваши заметки, дневники, фотографии и другой контент остаются вашими. Когда приложение обрабатывает ваш контент для функции, которую вы сами запросили, например толкования или сводки, он используется только для этой функции — так, как описано в политике конфиденциальности приложения.</p>',
        },
        {
          heading: 'Не профессиональный совет',
          content: '<p>Толкования, сводки, статистика и подсказки в приложениях и боте нужны для информации, саморефлексии и развлечения. Это не медицинский, стоматологический, психологический, финансовый или иной профессиональный совет. Во время ортодонтического лечения следуйте указаниям своего ортодонта.</p>',
        },
        {
          heading: 'Интеллектуальная собственность',
          content: '<p>Приложения, их дизайн, тексты и иконки, а также этот сайт принадлежат разработчику. Apple, App Store, iPhone, iPad и Apple Watch — товарные знаки Apple Inc.</p>',
        },
        {
          heading: 'Гарантии и ответственность',
          content: '<p>Приложения, бот и сайт предоставляются «как есть». В пределах, разрешённых законом, разработчик не отвечает за косвенные убытки и за потерю данных, у которых не было резервной копии. Ничто в этих условиях не ограничивает ваши права потребителя по закону вашей страны.</p>',
        },
        {
          heading: 'Изменения',
          content: '<p>Эти условия могут обновляться; дата вверху показывает текущую версию. Если вы продолжаете пользоваться приложениями после изменения, действуют обновлённые условия.</p>',
        },
        {
          heading: 'Контакты',
          content: '<p>Богдан Никишин · <a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio">@nikibstudio</a>. Информация на этом сайте не является публичной офертой.</p>',
        },
      ],
    },
  },
}

export function getLegal(kind: LegalKind, locale: Locale): LegalPage {
  return legal[locale]?.[kind] ?? legal.en![kind]
}
