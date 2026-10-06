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
      title: "Privacy Policy",
      lastUpdated: "Last updated: October 7, 2026",
      sections: [
        {
          heading: "What this policy covers",
          content: "<p>This policy covers the website nikibstudio.site, run by Bogdan Nikishin, an independent iOS developer. Each app has its own privacy policy that explains exactly what the app stores and sends; you will find it on the app’s page and inside the app.</p>",
        },
        {
          heading: "What the website collects",
          content: "<p>Nothing about you. The site has no accounts, forms, advertising, analytics or tracking, and it sets no cookies. It remembers the language you chose in your browser’s local storage, which stays on your device.</p>",
        },
        {
          heading: "Hosting",
          content: "<p>The site is served by Cloudflare Pages. To deliver pages and protect the site from abuse, Cloudflare processes technical data such as your IP address, as described in <a href=\"https://www.cloudflare.com/privacypolicy/\">Cloudflare’s privacy policy</a>. The developer does not use these data to identify or track visitors.</p>",
        },
        {
          heading: "Links to other services",
          content: "<p>Links to the App Store and Telegram lead to services with their own privacy policies.</p>",
        },
        {
          heading: "If you write to me",
          content: "<p>If you write by email or Telegram, your message and your address are used only to reply to you. They are not shared with anyone.</p>",
        },
        {
          heading: "Contact",
          content: "<p>Bogdan Nikishin · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a></p>",
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      lastUpdated: "Last updated: October 7, 2026",
      sections: [
        {
          heading: "About these terms",
          content: "<p>These terms apply to the iOS apps by Bogdan Nikishin listed on nikibstudio.site, to the TaroTaper Telegram bot and to this website. In these terms, “the developer” means Bogdan Nikishin. By using the apps, the bot or the site, you agree to these terms.</p>",
        },
        {
          heading: "Licence",
          content: "<p>The apps are licensed to you, not sold, under Apple’s <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">Licensed Application End User License Agreement</a> (the Standard EULA) together with these terms. If the two differ, the Standard EULA prevails.</p>",
        },
        {
          heading: "Purchases in the iOS apps",
          content: "<ul><li>Payments, renewals and refunds are handled by Apple. You can ask Apple for a refund at <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>.</li><li>A subscription renews automatically unless auto-renewal is turned off at least 24 hours before the end of the current period. Your Apple Account is charged for the next period within the 24 hours before the current one ends.</li><li>You can manage or cancel a subscription in your iPhone’s Settings → your name → Subscriptions.</li><li>If a subscription starts with a free trial, any unused part of the trial ends when you buy a subscription.</li><li>One-time purchases, such as Lifetime or supporter packs, can be restored on your devices with “Restore Purchases”.</li></ul>",
        },
        {
          heading: "Purchases in TaroTaper (Telegram)",
          content: "<ul><li>Readings and TaroTaper+ in the TaroTaper bot are paid with Telegram Stars. Payments are processed by Telegram, and <a href=\"https://telegram.org/tos/stars\">Telegram’s terms for Stars</a> apply.</li><li>A one-off purchase gives you one reading of the chosen kind. It is used up only when the reading has been written; if a reading fails, the purchase stays with you.</li><li>TaroTaper+ is a Telegram Stars subscription for 30 days at a time. It renews until you cancel it in your Telegram settings, in the Telegram Stars section; after that, it stays active until the end of the period you have paid for. Fair use: up to 20 readings a day.</li><li>For questions about a payment or a refund, send /paysupport in the bot’s chat. How the bot handles your data is explained in the <a href=\"/apps/tarotaper/privacy\">TaroTaper privacy policy</a>.</li></ul>",
        },
        {
          heading: "Acceptable use",
          content: "<p>Use the apps, the bot and the site lawfully. Do not try to break, overload or gain unauthorised access to them, and do not reverse engineer the apps except where the law allows it.</p>",
        },
        {
          heading: "Your content",
          content: "<p>Your notes, journals, photos and other content remain yours. When an app processes your content to provide a feature you asked for, such as an interpretation or a summary, it is used only for that feature, as described in that app’s privacy policy.</p>",
        },
        {
          heading: "Not professional advice",
          content: "<p>Interpretations, summaries, statistics and suggestions in the apps and the bot are for information, self-reflection and entertainment. They are not medical, dental, psychological, financial or other professional advice. During orthodontic treatment, follow your orthodontist’s instructions.</p>",
        },
        {
          heading: "Intellectual property",
          content: "<p>The apps, their design, texts and icons, and this website belong to the developer. Apple, App Store, iPhone, iPad and Apple Watch are trademarks of Apple Inc.</p>",
        },
        {
          heading: "Warranty and liability",
          content: "<p>The apps, the bot and the site are provided “as is”. To the extent the law allows, the developer is not liable for indirect or consequential damages or for the loss of data you did not back up. Nothing in these terms limits your rights as a consumer under the law of your country.</p>",
        },
        {
          heading: "Changes",
          content: "<p>These terms may be updated; the date at the top shows the current version. If you keep using the apps after a change, the updated terms apply.</p>",
        },
        {
          heading: "Contact",
          content: "<p>Bogdan Nikishin · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a>. Information on this website is not a public offer.</p>",
        },
      ],
    },
  },
  ru: {
    privacy: {
      title: "Политика конфиденциальности",
      lastUpdated: "Обновлено 7 октября 2026 г.",
      sections: [
        {
          heading: "О чём эта политика",
          content: "<p>Эта политика относится к сайту nikibstudio.site. Его ведёт Богдан Никишин, независимый iOS-разработчик. У каждого приложения своя политика конфиденциальности: в ней точно написано, что приложение хранит и отправляет. Она есть на странице приложения и в самом приложении.</p>",
        },
        {
          heading: "Что собирает сайт",
          content: "<p>Ничего о вас. На сайте нет аккаунтов, форм, рекламы, аналитики и отслеживания, и он не ставит cookies. Он запоминает выбранный вами язык в локальном хранилище браузера — эти данные остаются на вашем устройстве.</p>",
        },
        {
          heading: "Хостинг",
          content: "<p>Сайт работает на Cloudflare Pages. Чтобы отдавать страницы и защищать сайт от злоупотреблений, Cloudflare обрабатывает технические данные, например IP-адрес, как описано в <a href=\"https://www.cloudflare.com/privacypolicy/\">политике конфиденциальности Cloudflare</a>. Разработчик не использует эти данные, чтобы узнавать или отслеживать посетителей.</p>",
        },
        {
          heading: "Ссылки на другие сервисы",
          content: "<p>Ссылки на App Store и Telegram ведут на сервисы со своими политиками конфиденциальности.</p>",
        },
        {
          heading: "Если вы мне пишете",
          content: "<p>Если вы пишете на почту или в Telegram, ваше сообщение и адрес используются только для ответа вам и никому не передаются.</p>",
        },
        {
          heading: "Контакты",
          content: "<p>Богдан Никишин · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a></p>",
        },
      ],
    },
    terms: {
      title: "Условия использования",
      lastUpdated: "Обновлено 7 октября 2026 г.",
      sections: [
        {
          heading: "О чём эти условия",
          content: "<p>Эти условия относятся к iOS-приложениям Богдана Никишина, перечисленным на nikibstudio.site, к Telegram-боту TaroTaper и к этому сайту. «Разработчик» в этих условиях — Богдан Никишин. Пользуясь приложениями, ботом или сайтом, вы соглашаетесь с этими условиями.</p>",
        },
        {
          heading: "Лицензия",
          content: "<p>Приложения не продаются, а предоставляются вам по лицензии — по <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">Лицензионному соглашению с конечным пользователем Apple</a> (Standard EULA) вместе с этими условиями. Если они расходятся, действует Standard EULA.</p>",
        },
        {
          heading: "Покупки в приложениях для iOS",
          content: "<ul><li>Оплату, продление и возврат денег проводит Apple. Попросить Apple о возврате можно на <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>.</li><li>Подписка продлевается автоматически, если автопродление не отключено как минимум за 24 часа до конца текущего периода. Плата за следующий период списывается с вашего Apple Account в течение 24 часов до окончания текущего.</li><li>Управлять подпиской и отменить её можно в Настройках iPhone → ваше имя → Подписки.</li><li>Если подписка начинается с бесплатного пробного периода, его неиспользованная часть сгорает при покупке подписки.</li><li>Разовые покупки, например «Навсегда» или наборы поддержки, восстанавливаются на ваших устройствах кнопкой «Восстановить покупки».</li></ul>",
        },
        {
          heading: "Покупки в TaroTaper (Telegram)",
          content: "<ul><li>Расклады и TaroTaper+ в боте TaroTaper оплачиваются звёздами Telegram. Платежи обрабатывает Telegram, и к ним применяются <a href=\"https://telegram.org/tos/stars\">условия Telegram для звёзд</a>.</li><li>Разовая покупка — это один расклад выбранного вида. Он списывается, только когда толкование готово; если толкование не получилось, покупка остаётся за вами.</li><li>TaroTaper+ — подписка за звёзды Telegram на 30 дней. Она продлевается, пока вы не отмените её в настройках Telegram, в разделе звёзд; после отмены TaroTaper+ действует до конца оплаченного периода. Честное использование: до 20 раскладов в день.</li><li>По вопросам оплаты и возврата отправьте /paysupport в чате бота. Как бот обращается с вашими данными, описано в <a href=\"/apps/tarotaper/privacy\">политике конфиденциальности TaroTaper</a>.</li></ul>",
        },
        {
          heading: "Допустимое использование",
          content: "<p>Пользуйтесь приложениями, ботом и сайтом законно. Не пытайтесь их взломать, перегрузить или получить несанкционированный доступ и не декомпилируйте приложения, кроме случаев, когда это разрешает закон.</p>",
        },
        {
          heading: "Ваш контент",
          content: "<p>Ваши заметки, дневники, фотографии и другой контент остаются вашими. Когда приложение обрабатывает ваш контент для функции, которую вы сами запросили, например толкования или сводки, он используется только для этой функции — так, как описано в политике конфиденциальности приложения.</p>",
        },
        {
          heading: "Не профессиональный совет",
          content: "<p>Толкования, сводки, статистика и подсказки в приложениях и боте нужны для информации, саморефлексии и развлечения. Это не медицинский, стоматологический, психологический, финансовый или иной профессиональный совет. Во время ортодонтического лечения следуйте указаниям своего ортодонта.</p>",
        },
        {
          heading: "Интеллектуальная собственность",
          content: "<p>Приложения, их дизайн, тексты и иконки, а также этот сайт принадлежат разработчику. Apple, App Store, iPhone, iPad и Apple Watch — товарные знаки Apple Inc.</p>",
        },
        {
          heading: "Гарантии и ответственность",
          content: "<p>Приложения, бот и сайт предоставляются «как есть». В пределах, разрешённых законом, разработчик не отвечает за косвенные убытки и за потерю данных, у которых не было резервной копии. Ничто в этих условиях не ограничивает ваши права потребителя по закону вашей страны.</p>",
        },
        {
          heading: "Изменения",
          content: "<p>Эти условия могут обновляться; дата вверху показывает текущую версию. Если вы продолжаете пользоваться приложениями после изменения, действуют обновлённые условия.</p>",
        },
        {
          heading: "Контакты",
          content: "<p>Богдан Никишин · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a>. Информация на этом сайте не является публичной офертой.</p>",
        },
      ],
    },
  },
  zh: {
    privacy: {
      title: "隐私政策",
      lastUpdated: "最后更新：2026年10月7日",
      sections: [
        {
          heading: "本政策的适用范围",
          content: "<p>本政策适用于独立 iOS 开发者波格丹·尼基申运营的网站 nikibstudio.site。每款应用都有自己的隐私政策，准确说明该应用存储和发送哪些内容；你可以在应用页面和应用内找到它。</p>",
        },
        {
          heading: "本网站收集的信息",
          content: "<p>不收集任何关于你的信息。本网站没有账户、表单、广告、分析或跟踪，也不设置任何 Cookie。网站会在浏览器的本地存储中记住你选择的语言，这些数据只保留在你的设备上。</p>",
        },
        {
          heading: "托管",
          content: "<p>本网站通过 Cloudflare Pages 提供。为传送页面并防止网站遭到滥用，Cloudflare 会处理 IP 地址等技术数据，详见 <a href=\"https://www.cloudflare.com/privacypolicy/\">Cloudflare 隐私政策</a>。开发者不会使用这些数据来识别或跟踪访问者。</p>",
        },
        {
          heading: "指向其他服务的链接",
          content: "<p>指向 App Store 和 Telegram 的链接会将你带到其他服务，这些服务有各自的隐私政策。</p>",
        },
        {
          heading: "如果你写信给我",
          content: "<p>如果你通过电子邮件或 Telegram 联系我，你的消息和地址只会用于回复你，不会与任何人共享。</p>",
        },
        {
          heading: "联系方式",
          content: "<p>波格丹·尼基申 · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a></p>",
        },
      ],
    },
    terms: {
      title: "使用条款",
      lastUpdated: "最后更新：2026年10月7日",
      sections: [
        {
          heading: "关于本条款",
          content: "<p>本条款适用于 nikibstudio.site 上列出的波格丹·尼基申的 iOS 应用、Telegram 机器人 TaroTaper 以及本网站。在本条款中，“开发者”指波格丹·尼基申。使用这些应用、机器人或网站，即表示你同意本条款。</p>",
        },
        {
          heading: "许可",
          content: "<p>这些应用以许可方式提供给你，而非出售，适用 Apple 的<a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">许可应用程序最终用户许可协议</a>（“标准 EULA”）及本条款。两者不一致时，以标准 EULA 为准。</p>",
        },
        {
          heading: "iOS 应用内购买",
          content: "<ul><li>付款、续订和退款由 Apple 处理。你可以在 <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a> 向 Apple 申请退款。</li><li>除非在当前周期结束前至少 24 小时关闭自动续订，否则订阅将自动续订。下一周期的费用会在当前周期结束前的 24 小时内从你的 Apple 账户中扣除。</li><li>你可以在 iPhone 的“设置”→ 你的姓名 →“订阅”中管理或取消订阅。</li><li>如果订阅以免费试用开始，购买订阅时，试用期中未使用的部分将作废。</li><li>一次性购买（如终身版或支持者礼包）可以通过“恢复购买”在你的设备上恢复。</li></ul>",
        },
        {
          heading: "TaroTaper（Telegram）内购买",
          content: "<ul><li>TaroTaper 机器人中的占卜和 TaroTaper+ 使用 Telegram Stars 付款。付款由 Telegram 处理，并适用 <a href=\"https://telegram.org/tos/stars\">Telegram 的 Stars 条款</a>。</li><li>单次购买可获得一次所选类型的占卜。只有在解读生成后才会扣除；如果解读失败，这次购买仍归您所有。</li><li>TaroTaper+ 是以 30 天为周期的 Telegram Stars 订阅。在您于 Telegram 设置的 Telegram Stars 部分取消之前，它会自动续订；取消后，TaroTaper+ 在已付费周期结束前仍然有效。合理使用：每天最多 20 次占卜。</li><li>关于付款或退款的问题，请在机器人聊天中发送 /paysupport。机器人如何处理您的数据，请参阅 <a href=\"/apps/tarotaper/privacy\">TaroTaper 隐私政策</a>。</li></ul>",
        },
        {
          heading: "合理使用",
          content: "<p>请依法使用这些应用、机器人和网站。不得试图破坏它们、使其过载或未经授权访问它们；除法律允许的情况外，不得对应用进行逆向工程。</p>",
        },
        {
          heading: "你的内容",
          content: "<p>你的笔记、日记、照片和其他内容仍归你所有。当应用为了提供你所请求的功能（如解读或摘要）而处理你的内容时，这些内容仅用于该功能，具体见该应用的隐私政策。</p>",
        },
        {
          heading: "非专业建议",
          content: "<p>应用和机器人中的解读、摘要、统计和建议仅供参考、自我反思和娱乐，不构成医疗、牙科、心理、财务或其他专业建议。正畸治疗期间，请遵循你的正畸医生的指导。</p>",
        },
        {
          heading: "知识产权",
          content: "<p>这些应用及其设计、文字和图标，以及本网站，均归开发者所有。Apple、App Store、iPhone、iPad 和 Apple Watch 是 Apple Inc. 的商标。</p>",
        },
        {
          heading: "担保与责任",
          content: "<p>应用、机器人和网站按“现状”提供。在法律允许的范围内，开发者不对间接或后果性损失负责，也不对你未备份的数据丢失负责。本条款中的任何内容均不限制你根据所在国家法律享有的消费者权利。</p>",
        },
        {
          heading: "条款变更",
          content: "<p>本条款可能会更新；页面顶部的日期为当前版本。如果你在条款变更后继续使用这些应用，即适用更新后的条款。</p>",
        },
        {
          heading: "联系方式",
          content: "<p>波格丹·尼基申 · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a>。本网站信息不构成公开要约。</p>",
        },
      ],
    },
  },
  es: {
    privacy: {
      title: "Política de privacidad",
      lastUpdated: "Última actualización: 7 de octubre de 2026",
      sections: [
        {
          heading: "Qué cubre esta política",
          content: "<p>Esta política se aplica al sitio web nikibstudio.site, gestionado por Bogdan Nikishin, desarrollador independiente de iOS. Cada app tiene su propia política de privacidad, que explica exactamente qué guarda y qué envía la app; la encontrarás en la página de la app y dentro de la propia app.</p>",
        },
        {
          heading: "Qué recoge el sitio web",
          content: "<p>Nada sobre ti. El sitio no tiene cuentas, formularios, publicidad, analítica ni rastreo, y no instala cookies. Recuerda el idioma que has elegido en el almacenamiento local de tu navegador, que se queda en tu dispositivo.</p>",
        },
        {
          heading: "Alojamiento",
          content: "<p>El sitio se sirve a través de Cloudflare Pages. Para entregar las páginas y proteger el sitio de abusos, Cloudflare trata datos técnicos como tu dirección IP, tal como se describe en la <a href=\"https://www.cloudflare.com/privacypolicy/\">política de privacidad de Cloudflare</a>. El desarrollador no utiliza estos datos para identificar ni rastrear a los visitantes.</p>",
        },
        {
          heading: "Enlaces a otros servicios",
          content: "<p>Los enlaces al App Store y a Telegram llevan a servicios que tienen sus propias políticas de privacidad.</p>",
        },
        {
          heading: "Si me escribes",
          content: "<p>Si me escribes por correo electrónico o por Telegram, tu mensaje y tu dirección solo se usan para responderte. No se comparten con nadie.</p>",
        },
        {
          heading: "Contacto",
          content: "<p>Bogdan Nikishin · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a></p>",
        },
      ],
    },
    terms: {
      title: "Términos de uso",
      lastUpdated: "Última actualización: 7 de octubre de 2026",
      sections: [
        {
          heading: "Sobre estos términos",
          content: "<p>Estos términos se aplican a las apps para iOS de Bogdan Nikishin que aparecen en nikibstudio.site, al bot de Telegram TaroTaper y a este sitio web. En estos términos, «el desarrollador» hace referencia a Bogdan Nikishin. Al usar las apps, el bot o el sitio, aceptas estos términos.</p>",
        },
        {
          heading: "Licencia",
          content: "<p>Las apps no se venden, sino que se te conceden bajo licencia conforme al <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">Contrato de licencia de usuario final de aplicaciones con licencia</a> de Apple (el «EULA estándar») junto con estos términos. Si ambos difieren, prevalece el EULA estándar.</p>",
        },
        {
          heading: "Compras en las apps para iOS",
          content: "<ul><li>Apple gestiona los pagos, las renovaciones y los reembolsos. Puedes pedir un reembolso a Apple en <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>.</li><li>La suscripción se renueva automáticamente, salvo que la renovación automática se desactive al menos 24 horas antes del final del periodo actual. El importe del siguiente periodo se cobra en tu cuenta de Apple dentro de las 24 horas anteriores al final del periodo actual.</li><li>Puedes gestionar o cancelar una suscripción en tu iPhone, en Ajustes → tu nombre → Suscripciones.</li><li>Si una suscripción empieza con una prueba gratuita, la parte no utilizada de la prueba se pierde al comprar una suscripción.</li><li>Las compras únicas, como las opciones de por vida o los packs de apoyo, se pueden restaurar en tus dispositivos con «Restaurar compras».</li></ul>",
        },
        {
          heading: "Compras en TaroTaper (Telegram)",
          content: "<ul><li>Las lecturas y TaroTaper+ del bot TaroTaper se pagan con Telegram Stars. Los pagos los procesa Telegram y se aplican los <a href=\"https://telegram.org/tos/stars\">términos de Telegram para las Stars</a>.</li><li>Una compra suelta te da una lectura del tipo elegido. Solo se descuenta cuando la lectura está escrita; si una lectura falla, la compra sigue siendo tuya.</li><li>TaroTaper+ es una suscripción de Telegram Stars por periodos de 30 días. Se renueva hasta que la canceles en los ajustes de Telegram, en la sección de Telegram Stars; después sigue activa hasta el final del periodo pagado. Uso justo: hasta 20 lecturas al día.</li><li>Si tienes dudas sobre un pago o un reembolso, envía /paysupport en el chat del bot. Cómo trata el bot tus datos se explica en la <a href=\"/apps/tarotaper/privacy\">política de privacidad de TaroTaper</a>.</li></ul>",
        },
        {
          heading: "Uso aceptable",
          content: "<p>Usa las apps, el bot y el sitio de forma lícita. No intentes dañarlos, sobrecargarlos ni acceder a ellos sin autorización, y no apliques ingeniería inversa a las apps, salvo en la medida en que la ley lo permita.</p>",
        },
        {
          heading: "Tu contenido",
          content: "<p>Tus notas, diarios, fotos y demás contenido siguen siendo tuyos. Cuando una app procesa tu contenido para ofrecerte una función que has solicitado, como una interpretación o un resumen, solo lo usa para esa función, tal como se describe en la política de privacidad de esa app.</p>",
        },
        {
          heading: "No es asesoramiento profesional",
          content: "<p>Las interpretaciones, resúmenes, estadísticas y sugerencias de las apps y del bot tienen fines informativos, de reflexión personal y de entretenimiento. No son asesoramiento médico, odontológico, psicológico, financiero ni ningún otro tipo de asesoramiento profesional. Durante un tratamiento de ortodoncia, sigue las indicaciones de tu ortodoncista.</p>",
        },
        {
          heading: "Propiedad intelectual",
          content: "<p>Las apps, su diseño, sus textos e iconos, así como este sitio web, pertenecen al desarrollador. Apple, App Store, iPhone, iPad y Apple Watch son marcas comerciales de Apple Inc.</p>",
        },
        {
          heading: "Garantía y responsabilidad",
          content: "<p>Las apps, el bot y el sitio se ofrecen «tal cual». En la medida en que lo permita la ley, el desarrollador no se hace responsable de daños indirectos o consecuentes ni de la pérdida de datos de los que no hayas hecho copia de seguridad. Nada de lo dispuesto en estos términos limita tus derechos como consumidor según la legislación de tu país.</p>",
        },
        {
          heading: "Cambios",
          content: "<p>Estos términos pueden actualizarse; la fecha de arriba indica la versión vigente. Si sigues usando las apps después de un cambio, se aplican los términos actualizados.</p>",
        },
        {
          heading: "Contacto",
          content: "<p>Bogdan Nikishin · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a>. La información de este sitio no constituye una oferta pública.</p>",
        },
      ],
    },
  },
  fr: {
    privacy: {
      title: "Politique de confidentialité",
      lastUpdated: "Dernière mise à jour : 7 octobre 2026",
      sections: [
        {
          heading: "Ce que couvre cette politique",
          content: "<p>Cette politique concerne le site nikibstudio.site, tenu par Bogdan Nikishin, développeur iOS indépendant. Chaque app a sa propre politique de confidentialité, qui explique précisément ce que l’app enregistre et envoie ; vous la trouverez sur la page de l’app et dans l’app elle-même.</p>",
        },
        {
          heading: "Ce que le site collecte",
          content: "<p>Rien sur vous. Le site n’a ni comptes, ni formulaires, ni publicité, ni outils d’analyse ou de suivi, et il ne dépose aucun cookie. Il retient la langue que vous avez choisie dans le stockage local de votre navigateur, qui reste sur votre appareil.</p>",
        },
        {
          heading: "Hébergement",
          content: "<p>Le site est hébergé sur Cloudflare Pages. Pour diffuser les pages et protéger le site contre les abus, Cloudflare traite des données techniques comme votre adresse IP, ainsi que le décrit la <a href=\"https://www.cloudflare.com/privacypolicy/\">politique de confidentialité de Cloudflare</a>. Le développeur n’utilise pas ces données pour identifier ou suivre les visiteurs.</p>",
        },
        {
          heading: "Liens vers d’autres services",
          content: "<p>Les liens vers l’App Store et Telegram mènent à des services qui ont leur propre politique de confidentialité.</p>",
        },
        {
          heading: "Si vous m’écrivez",
          content: "<p>Si vous m’écrivez par e-mail ou sur Telegram, votre message et votre adresse servent uniquement à vous répondre. Ils ne sont transmis à personne.</p>",
        },
        {
          heading: "Contact",
          content: "<p>Bogdan Nikishin · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a></p>",
        },
      ],
    },
    terms: {
      title: "Conditions d’utilisation",
      lastUpdated: "Dernière mise à jour : 7 octobre 2026",
      sections: [
        {
          heading: "À propos de ces conditions",
          content: "<p>Ces conditions s’appliquent aux apps iOS de Bogdan Nikishin présentées sur nikibstudio.site, au bot Telegram TaroTaper et à ce site. Dans ces conditions, « le développeur » désigne Bogdan Nikishin. En utilisant les apps, le bot ou le site, vous acceptez ces conditions.</p>",
        },
        {
          heading: "Licence",
          content: "<p>Les apps vous sont concédées sous licence, et non vendues, conformément au <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">contrat de licence utilisateur final des applications sous licence</a> d’Apple (le « CLUF standard ») ainsi qu’aux présentes conditions. En cas de divergence, le CLUF standard prévaut.</p>",
        },
        {
          heading: "Achats dans les apps iOS",
          content: "<ul><li>Les paiements, renouvellements et remboursements sont gérés par Apple. Vous pouvez demander un remboursement à Apple sur <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>.</li><li>Un abonnement se renouvelle automatiquement, sauf si le renouvellement automatique est désactivé au moins 24 heures avant la fin de la période en cours. Votre compte Apple est débité pour la période suivante dans les 24 heures qui précèdent la fin de la période en cours.</li><li>Vous pouvez gérer ou annuler un abonnement sur votre iPhone dans Réglages → votre nom → Abonnements.</li><li>Si un abonnement commence par un essai gratuit, toute partie inutilisée de l’essai est perdue lorsque vous achetez un abonnement.</li><li>Les achats uniques, comme les offres à vie ou les packs de soutien, peuvent être restaurés sur vos appareils avec « Restaurer les achats ».</li></ul>",
        },
        {
          heading: "Achats dans TaroTaper (Telegram)",
          content: "<ul><li>Les tirages et TaroTaper+ du bot TaroTaper se paient en Telegram Stars. Les paiements sont traités par Telegram, et les <a href=\"https://telegram.org/tos/stars\">conditions de Telegram relatives aux Stars</a> s’appliquent.</li><li>Un achat à l’unité vous donne un tirage du type choisi. Il n’est décompté qu’une fois la lecture rédigée ; si une lecture échoue, l’achat vous reste acquis.</li><li>TaroTaper+ est un abonnement en Telegram Stars par périodes de 30 jours. Il se renouvelle jusqu’à ce que vous le résiliiez dans les réglages de Telegram, dans la section Telegram Stars ; il reste ensuite actif jusqu’à la fin de la période payée. Usage raisonnable : jusqu’à 20 tirages par jour.</li><li>Pour toute question sur un paiement ou un remboursement, envoyez /paysupport dans la conversation avec le bot. La façon dont le bot traite vos données est expliquée dans la <a href=\"/apps/tarotaper/privacy\">politique de confidentialité de TaroTaper</a>.</li></ul>",
        },
        {
          heading: "Utilisation acceptable",
          content: "<p>Utilisez les apps, le bot et le site dans le respect de la loi. N’essayez pas de les endommager, de les surcharger ou d’y accéder sans autorisation, et ne procédez à aucune ingénierie inverse des apps, sauf dans la mesure où la loi le permet.</p>",
        },
        {
          heading: "Votre contenu",
          content: "<p>Vos notes, journaux, photos et autres contenus restent les vôtres. Lorsqu’une app traite votre contenu pour fournir une fonctionnalité que vous avez demandée, comme une interprétation ou un résumé, ce contenu n’est utilisé que pour cette fonctionnalité, comme le décrit la politique de confidentialité de l’app concernée.</p>",
        },
        {
          heading: "Aucun conseil professionnel",
          content: "<p>Les interprétations, résumés, statistiques et suggestions des apps et du bot sont fournis à titre d’information, d’introspection et de divertissement. Ils ne constituent pas un conseil médical, dentaire, psychologique, financier ou autre conseil professionnel. Pendant un traitement orthodontique, suivez les instructions de votre orthodontiste.</p>",
        },
        {
          heading: "Propriété intellectuelle",
          content: "<p>Les apps, leur design, leurs textes et leurs icônes, ainsi que ce site, appartiennent au développeur. Apple, App Store, iPhone, iPad et Apple Watch sont des marques d’Apple Inc.</p>",
        },
        {
          heading: "Garantie et responsabilité",
          content: "<p>Les apps, le bot et le site sont fournis « en l’état ». Dans les limites autorisées par la loi, le développeur n’est pas responsable des dommages indirects ou consécutifs, ni de la perte de données que vous n’avez pas sauvegardées. Rien dans ces conditions ne limite les droits dont vous disposez en tant que consommateur en vertu de la loi de votre pays.</p>",
        },
        {
          heading: "Modifications",
          content: "<p>Ces conditions peuvent être mises à jour ; la date en haut de la page indique la version en vigueur. Si vous continuez à utiliser les apps après une modification, les conditions mises à jour s’appliquent.</p>",
        },
        {
          heading: "Contact",
          content: "<p>Bogdan Nikishin · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a>. Les informations de ce site ne constituent pas une offre publique.</p>",
        },
      ],
    },
  },
  de: {
    privacy: {
      title: "Datenschutzerklärung",
      lastUpdated: "Zuletzt aktualisiert: 7. Oktober 2026",
      sections: [
        {
          heading: "Wofür diese Erklärung gilt",
          content: "<p>Diese Erklärung gilt für die Website nikibstudio.site, die Bogdan Nikishin, ein unabhängiger iOS-Entwickler, betreibt. Jede App hat ihre eigene Datenschutzerklärung, die genau erklärt, was die App speichert und sendet; du findest sie auf der Seite der App und in der App selbst.</p>",
        },
        {
          heading: "Was die Website erfasst",
          content: "<p>Nichts über dich. Die Website hat keine Konten, Formulare, Werbung, Analyse- oder Tracking-Tools und setzt keine Cookies. Sie merkt sich die von dir gewählte Sprache im lokalen Speicher deines Browsers, und diese Angabe bleibt auf deinem Gerät.</p>",
        },
        {
          heading: "Hosting",
          content: "<p>Die Website wird über Cloudflare Pages ausgeliefert. Um die Seiten bereitzustellen und die Website vor Missbrauch zu schützen, verarbeitet Cloudflare technische Daten wie deine IP-Adresse, wie in der <a href=\"https://www.cloudflare.com/privacypolicy/\">Datenschutzerklärung von Cloudflare</a> beschrieben. Der Entwickler nutzt diese Daten nicht, um Besucher zu identifizieren oder zu verfolgen.</p>",
        },
        {
          heading: "Links zu anderen Diensten",
          content: "<p>Links zum App Store und zu Telegram führen zu Diensten mit eigenen Datenschutzerklärungen.</p>",
        },
        {
          heading: "Wenn du mir schreibst",
          content: "<p>Wenn du mir per E-Mail oder über Telegram schreibst, werden deine Nachricht und deine Adresse nur verwendet, um dir zu antworten. Sie werden an niemanden weitergegeben.</p>",
        },
        {
          heading: "Kontakt",
          content: "<p>Bogdan Nikishin · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a></p>",
        },
      ],
    },
    terms: {
      title: "Nutzungsbedingungen",
      lastUpdated: "Zuletzt aktualisiert: 7. Oktober 2026",
      sections: [
        {
          heading: "Über diese Bedingungen",
          content: "<p>Diese Bedingungen gelten für die iOS-Apps von Bogdan Nikishin, die auf nikibstudio.site aufgeführt sind, für den Telegram-Bot TaroTaper und für diese Website. „Der Entwickler“ bezeichnet in diesen Bedingungen Bogdan Nikishin. Indem du die Apps, den Bot oder die Website nutzt, stimmst du diesen Bedingungen zu.</p>",
        },
        {
          heading: "Lizenz",
          content: "<p>Die Apps werden dir nicht verkauft, sondern lizenziert, und zwar gemäß dem <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">Endbenutzer-Lizenzvertrag für lizenzierte Anwendungen</a> von Apple („Standard-EULA“) sowie diesen Bedingungen. Weichen beide voneinander ab, hat die Standard-EULA Vorrang.</p>",
        },
        {
          heading: "Käufe in den iOS-Apps",
          content: "<ul><li>Zahlungen, Verlängerungen und Rückerstattungen wickelt Apple ab. Eine Rückerstattung kannst du bei Apple unter <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a> beantragen.</li><li>Ein Abonnement verlängert sich automatisch, sofern die automatische Verlängerung nicht mindestens 24 Stunden vor Ende des aktuellen Zeitraums deaktiviert wird. Dein Apple Account wird innerhalb der 24 Stunden vor Ende des aktuellen Zeitraums für den nächsten Zeitraum belastet.</li><li>Du kannst ein Abonnement auf deinem iPhone unter Einstellungen → dein Name → Abonnements verwalten oder kündigen.</li><li>Beginnt ein Abonnement mit einer kostenlosen Testphase, verfällt der ungenutzte Teil der Testphase, sobald du ein Abonnement kaufst.</li><li>Einmalkäufe wie Lifetime oder Unterstützer-Pakete stellst du auf deinen Geräten mit „Käufe wiederherstellen“ wieder her.</li></ul>",
        },
        {
          heading: "Käufe in TaroTaper (Telegram)",
          content: "<ul><li>Legungen und TaroTaper+ im Bot TaroTaper werden mit Telegram Stars bezahlt. Die Zahlungen wickelt Telegram ab, und es gelten die <a href=\"https://telegram.org/tos/stars\">Bedingungen von Telegram für Stars</a>.</li><li>Ein Einzelkauf gibt dir eine Legung der gewählten Art. Sie wird erst verbraucht, wenn die Deutung geschrieben ist; klappt eine Deutung nicht, bleibt dir der Kauf erhalten.</li><li>TaroTaper+ ist ein Abo mit Telegram Stars für jeweils 30 Tage. Es verlängert sich, bis du es in den Telegram-Einstellungen im Bereich Telegram Stars kündigst; danach bleibt es bis zum Ende des bezahlten Zeitraums aktiv. Faire Nutzung: bis zu 20 Legungen pro Tag.</li><li>Bei Fragen zu einer Zahlung oder Erstattung schick /paysupport im Chat mit dem Bot. Wie der Bot mit deinen Daten umgeht, steht in der <a href=\"/apps/tarotaper/privacy\">Datenschutzrichtlinie von TaroTaper</a>.</li></ul>",
        },
        {
          heading: "Zulässige Nutzung",
          content: "<p>Nutze die Apps, den Bot und die Website rechtmäßig. Versuche nicht, sie zu beschädigen, zu überlasten oder dir unbefugt Zugriff darauf zu verschaffen, und betreibe kein Reverse Engineering der Apps, es sei denn, das Gesetz erlaubt es.</p>",
        },
        {
          heading: "Deine Inhalte",
          content: "<p>Deine Notizen, Tagebücher, Fotos und anderen Inhalte gehören weiterhin dir. Wenn eine App deine Inhalte verarbeitet, um eine von dir angeforderte Funktion bereitzustellen, etwa eine Deutung oder eine Zusammenfassung, werden sie nur für diese Funktion verwendet, wie in der Datenschutzerklärung dieser App beschrieben.</p>",
        },
        {
          heading: "Keine fachliche Beratung",
          content: "<p>Deutungen, Zusammenfassungen, Statistiken und Vorschläge in den Apps und im Bot dienen der Information, der Selbstreflexion und der Unterhaltung. Sie sind keine medizinische, zahnmedizinische, psychologische, finanzielle oder sonstige fachliche Beratung. Folge während einer kieferorthopädischen Behandlung den Anweisungen deines Kieferorthopäden.</p>",
        },
        {
          heading: "Geistiges Eigentum",
          content: "<p>Die Apps, ihr Design, ihre Texte und Icons sowie diese Website gehören dem Entwickler. Apple, App Store, iPhone, iPad und Apple Watch sind Marken der Apple Inc.</p>",
        },
        {
          heading: "Gewährleistung und Haftung",
          content: "<p>Die Apps, der Bot und die Website werden „wie besehen“ bereitgestellt. Soweit gesetzlich zulässig, haftet der Entwickler nicht für indirekte Schäden oder Folgeschäden und nicht für den Verlust von Daten, die du nicht gesichert hast. Nichts in diesen Bedingungen schränkt deine Rechte als Verbraucher nach dem Recht deines Landes ein.</p>",
        },
        {
          heading: "Änderungen",
          content: "<p>Diese Bedingungen können aktualisiert werden; das Datum oben zeigt die aktuelle Fassung. Wenn du die Apps nach einer Änderung weiter nutzt, gelten die aktualisierten Bedingungen.</p>",
        },
        {
          heading: "Kontakt",
          content: "<p>Bogdan Nikishin · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a>. Die Informationen auf dieser Website stellen kein öffentliches Angebot dar.</p>",
        },
      ],
    },
  },
  ja: {
    privacy: {
      title: "プライバシーポリシー",
      lastUpdated: "最終更新日：2026年10月7日",
      sections: [
        {
          heading: "このポリシーの対象",
          content: "<p>このポリシーは、iOSの個人開発者であるボグダン・ニキシンが運営するウェブサイト nikibstudio.site を対象としています。各アプリには、そのアプリが何を保存し、何を送信するかを具体的に説明した個別のプライバシーポリシーがあり、アプリのページとアプリ内で確認できます。</p>",
        },
        {
          heading: "このサイトが収集する情報",
          content: "<p>あなたに関する情報は何も収集しません。このサイトにはアカウント、フォーム、広告、アクセス解析、トラッキングがなく、Cookieも設定しません。選択した言語はブラウザのローカルストレージに保存されますが、この情報はお使いの端末内にとどまります。</p>",
        },
        {
          heading: "ホスティング",
          content: "<p>このサイトはCloudflare Pagesで配信されています。ページを届け、サイトを不正利用から守るために、CloudflareはIPアドレスなどの技術的なデータを処理します（詳しくは<a href=\"https://www.cloudflare.com/privacypolicy/\">Cloudflareのプライバシーポリシー</a>をご覧ください）。開発者がこれらのデータを使って訪問者を特定したり追跡したりすることはありません。</p>",
        },
        {
          heading: "他のサービスへのリンク",
          content: "<p>App StoreやTelegramへのリンク先は、それぞれ独自のプライバシーポリシーを持つサービスです。</p>",
        },
        {
          heading: "私に連絡する場合",
          content: "<p>メールやTelegramでご連絡いただいた場合、メッセージと連絡先は返信のためだけに使用し、誰とも共有しません。</p>",
        },
        {
          heading: "連絡先",
          content: "<p>ボグダン・ニキシン · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a></p>",
        },
      ],
    },
    terms: {
      title: "利用規約",
      lastUpdated: "最終更新日：2026年10月7日",
      sections: [
        {
          heading: "本規約について",
          content: "<p>本規約は、nikibstudio.site に掲載されているボグダン・ニキシンのiOSアプリ、TelegramボットのTaroTaper、および本ウェブサイトに適用されます。本規約において「開発者」とはボグダン・ニキシンを指します。アプリ、ボット、またはサイトを利用することにより、あなたは本規約に同意したものとみなされます。</p>",
        },
        {
          heading: "ライセンス",
          content: "<p>アプリは販売されるものではなく、Appleの<a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">ライセンス対象アプリケーションのエンドユーザ使用許諾契約</a>（以下「標準EULA」）および本規約に基づいて使用が許諾されます。両者の内容が異なる場合は、標準EULAが優先されます。</p>",
        },
        {
          heading: "iOSアプリでの購入",
          content: "<ul><li>支払い、更新、返金はAppleが取り扱います。返金は <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a> からAppleに申請できます。</li><li>サブスクリプションは、現在の期間が終了する少なくとも24時間前までに自動更新をオフにしない限り、自動的に更新されます。次の期間の料金は、現在の期間が終了する前の24時間以内にAppleアカウントに請求されます。</li><li>サブスクリプションの管理や解約は、iPhoneの「設定」→ 自分の名前 →「サブスクリプション」で行えます。</li><li>サブスクリプションが無料トライアルから始まる場合、サブスクリプションを購入した時点で、トライアルの未使用期間は失効します。</li><li>買い切りプランやサポーターパックなどの1回限りの購入は、「購入を復元」でお使いのデバイスに復元できます。</li></ul>",
        },
        {
          heading: "TaroTaper（Telegram）での購入",
          content: "<ul><li>TaroTaperボットのリーディングとTaroTaper+の支払いにはTelegram Starsを使います。支払いはTelegramが処理し、<a href=\"https://telegram.org/tos/stars\">TelegramのStarsに関する規約</a>が適用されます。</li><li>単発の購入で、選んだ種類のリーディングを1回利用できます。消費されるのはリーディングが書き上がったときだけで、リーディングに失敗した場合、購入した回数はそのまま残ります。</li><li>TaroTaper+は30日ごとのTelegram Starsのサブスクリプションです。Telegramの設定のTelegram Starsの項目で解約するまで自動的に更新され、解約後も支払い済みの期間の終わりまで有効です。フェアユース：1日20回まで。</li><li>支払いや返金に関するお問い合わせは、ボットのチャットで /paysupport を送ってください。ボットによるデータの取り扱いについては、<a href=\"/apps/tarotaper/privacy\">TaroTaperのプライバシーポリシー</a>をご覧ください。</li></ul>",
        },
        {
          heading: "適切な利用",
          content: "<p>アプリ、ボット、サイトは法令に従ってご利用ください。これらを破壊したり、過度な負荷をかけたり、不正にアクセスしたりしようとしないでください。また、法律で認められている場合を除き、アプリをリバースエンジニアリングしないでください。</p>",
        },
        {
          heading: "あなたのコンテンツ",
          content: "<p>メモ、日記、写真などのコンテンツは、引き続きあなたのものです。解釈や要約など、あなたが求めた機能を提供するためにアプリがコンテンツを処理する場合、そのコンテンツは当該アプリのプライバシーポリシーに記載のとおり、その機能のためだけに使用されます。</p>",
        },
        {
          heading: "専門的な助言ではありません",
          content: "<p>アプリとボットが提供する解釈、要約、統計、提案は、情報提供、自己省察、娯楽を目的としたものです。医療、歯科、心理、金融その他の専門的な助言ではありません。矯正治療中は、担当の矯正歯科医の指示に従ってください。</p>",
        },
        {
          heading: "知的財産",
          content: "<p>アプリとそのデザイン、テキスト、アイコン、および本ウェブサイトは、開発者に帰属します。Apple、App Store、iPhone、iPad、Apple Watchは、Apple Inc.の商標です。</p>",
        },
        {
          heading: "保証と責任",
          content: "<p>アプリ、ボット、サイトは「現状のまま」提供されます。法律で認められる範囲において、開発者は間接的損害および結果的損害、ならびにバックアップされていなかったデータの損失について責任を負いません。本規約のいかなる規定も、お住まいの国の法律に基づく消費者としてのあなたの権利を制限するものではありません。</p>",
        },
        {
          heading: "規約の変更",
          content: "<p>本規約は更新されることがあります。ページ上部の日付が現在の版を示しています。変更後もアプリを使い続けた場合は、更新後の規約が適用されます。</p>",
        },
        {
          heading: "連絡先",
          content: "<p>ボグダン・ニキシン · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a>。当サイトの情報は、公開オファーを構成するものではありません。</p>",
        },
      ],
    },
  },
  ko: {
    privacy: {
      title: "개인정보 처리방침",
      lastUpdated: "최종 업데이트: 2026년 10월 7일",
      sections: [
        {
          heading: "이 방침의 적용 범위",
          content: "<p>이 방침은 독립 iOS 개발자 보그단 니키신이 운영하는 웹사이트 nikibstudio.site에 적용됩니다. 각 앱에는 앱이 무엇을 저장하고 전송하는지 정확히 설명하는 별도의 개인정보 처리방침이 있으며, 앱 페이지와 앱 안에서 확인할 수 있습니다.</p>",
        },
        {
          heading: "웹사이트가 수집하는 정보",
          content: "<p>사용자에 관한 정보는 아무것도 수집하지 않습니다. 이 사이트에는 계정, 양식, 광고, 분석, 추적이 없으며 쿠키도 설정하지 않습니다. 선택한 언어는 브라우저의 로컬 저장소에 저장되며, 이 정보는 사용자의 기기에만 남습니다.</p>",
        },
        {
          heading: "호스팅",
          content: "<p>이 사이트는 Cloudflare Pages를 통해 제공됩니다. 페이지를 전달하고 사이트를 악용으로부터 보호하기 위해 Cloudflare는 IP 주소 등의 기술 데이터를 처리합니다. 자세한 내용은 <a href=\"https://www.cloudflare.com/privacypolicy/\">Cloudflare 개인정보 처리방침</a>을 참고하세요. 개발자는 이 데이터를 방문자를 식별하거나 추적하는 데 사용하지 않습니다.</p>",
        },
        {
          heading: "다른 서비스로 연결되는 링크",
          content: "<p>App Store와 Telegram 링크는 자체 개인정보 처리방침을 따르는 서비스로 연결됩니다.</p>",
        },
        {
          heading: "저에게 연락하는 경우",
          content: "<p>이메일이나 Telegram으로 연락하시면 메시지와 주소는 답장하는 데에만 사용되며, 누구와도 공유되지 않습니다.</p>",
        },
        {
          heading: "연락처",
          content: "<p>보그단 니키신 · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a></p>",
        },
      ],
    },
    terms: {
      title: "이용 약관",
      lastUpdated: "최종 업데이트: 2026년 10월 7일",
      sections: [
        {
          heading: "본 약관에 관하여",
          content: "<p>본 약관은 nikibstudio.site에 소개된 보그단 니키신의 iOS 앱, Telegram 봇 TaroTaper, 그리고 이 웹사이트에 적용됩니다. 본 약관에서 ‘개발자’는 보그단 니키신을 말합니다. 앱, 봇 또는 사이트를 이용하면 본 약관에 동의한 것으로 봅니다.</p>",
        },
        {
          heading: "라이선스",
          content: "<p>앱은 판매되는 것이 아니라 Apple의 <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">사용이 허가된 애플리케이션에 대한 최종 사용자 사용권 계약</a>(이하 ‘표준 EULA’)과 본 약관에 따라 사용이 허가됩니다. 둘의 내용이 다를 경우 표준 EULA가 우선합니다.</p>",
        },
        {
          heading: "iOS 앱 구입",
          content: "<ul><li>결제, 갱신, 환불은 Apple이 처리합니다. 환불은 <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>에서 Apple에 요청할 수 있습니다.</li><li>구독은 현재 기간이 끝나기 최소 24시간 전에 자동 갱신을 끄지 않으면 자동으로 갱신됩니다. 다음 기간의 요금은 현재 기간이 끝나기 전 24시간 이내에 Apple 계정으로 청구됩니다.</li><li>구독은 iPhone의 설정 → 내 이름 → 구독에서 관리하거나 취소할 수 있습니다.</li><li>구독이 무료 체험으로 시작되는 경우, 구독을 구입하면 체험 기간 중 사용하지 않은 부분은 소멸됩니다.</li><li>평생 이용권이나 서포터 팩 같은 일회성 구입 항목은 ‘구입 항목 복원’으로 기기에서 복원할 수 있습니다.</li></ul>",
        },
        {
          heading: "TaroTaper(Telegram) 구입",
          content: "<ul><li>TaroTaper 봇의 리딩과 TaroTaper+는 Telegram Stars로 결제합니다. 결제는 Telegram이 처리하며 <a href=\"https://telegram.org/tos/stars\">Telegram의 Stars 약관</a>이 적용됩니다.</li><li>단건 구매로 선택한 종류의 리딩을 한 번 이용할 수 있습니다. 리딩이 작성되었을 때만 차감되며, 리딩에 실패하면 구매한 횟수는 그대로 남습니다.</li><li>TaroTaper+는 30일 단위의 Telegram Stars 구독입니다. Telegram 설정의 Telegram Stars 항목에서 해지할 때까지 갱신되며, 해지한 뒤에도 결제한 기간이 끝날 때까지 이용할 수 있습니다. 공정 사용: 하루 최대 20회.</li><li>결제나 환불에 관한 문의는 봇 채팅에서 /paysupport를 보내 주세요. 봇이 데이터를 처리하는 방식은 <a href=\"/apps/tarotaper/privacy\">TaroTaper 개인정보 처리방침</a>에서 확인할 수 있습니다.</li></ul>",
        },
        {
          heading: "허용되는 이용",
          content: "<p>앱, 봇, 사이트는 법에 맞게 이용해 주세요. 이를 손상시키거나 과부하를 일으키거나 무단으로 접근하려고 해서는 안 되며, 법이 허용하는 경우를 제외하고 앱을 리버스 엔지니어링해서는 안 됩니다.</p>",
        },
        {
          heading: "사용자 콘텐츠",
          content: "<p>메모, 일기, 사진 및 기타 콘텐츠는 계속 사용자의 것입니다. 해석이나 요약처럼 사용자가 요청한 기능을 제공하기 위해 앱이 콘텐츠를 처리하는 경우, 해당 콘텐츠는 그 앱의 개인정보 처리방침에 설명된 대로 그 기능에만 사용됩니다.</p>",
        },
        {
          heading: "전문적인 조언이 아님",
          content: "<p>앱과 봇의 해석, 요약, 통계, 제안은 정보 제공, 자기 성찰, 오락을 위한 것입니다. 의학, 치과, 심리, 재무 또는 기타 전문적인 조언이 아닙니다. 교정 치료 중에는 담당 교정 전문의의 지시를 따르세요.</p>",
        },
        {
          heading: "지식재산권",
          content: "<p>앱과 그 디자인, 텍스트, 아이콘, 그리고 이 웹사이트는 개발자에게 귀속됩니다. Apple, App Store, iPhone, iPad, Apple Watch는 Apple Inc.의 상표입니다.</p>",
        },
        {
          heading: "보증 및 책임",
          content: "<p>앱, 봇, 사이트는 ‘있는 그대로’ 제공됩니다. 법이 허용하는 범위에서 개발자는 간접 손해나 결과적 손해, 그리고 백업하지 않은 데이터의 손실에 대해 책임을 지지 않습니다. 본 약관의 어떤 내용도 거주 국가의 법률에 따른 소비자로서의 권리를 제한하지 않습니다.</p>",
        },
        {
          heading: "변경",
          content: "<p>본 약관은 업데이트될 수 있으며, 상단의 날짜가 현재 버전을 나타냅니다. 변경 후에도 앱을 계속 사용하면 업데이트된 약관이 적용됩니다.</p>",
        },
        {
          heading: "연락처",
          content: "<p>보그단 니키신 · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a>. 본 사이트의 정보는 공개 청약이 아닙니다.</p>",
        },
      ],
    },
  },
  pt: {
    privacy: {
      title: "Política de Privacidade",
      lastUpdated: "Última atualização: 7 de outubro de 2026",
      sections: [
        {
          heading: "O que esta política abrange",
          content: "<p>Esta política abrange o site nikibstudio.site, mantido por Bogdan Nikishin, desenvolvedor iOS independente. Cada app tem sua própria política de privacidade, que explica exatamente o que o app armazena e envia; você a encontra na página do app e dentro do próprio app.</p>",
        },
        {
          heading: "O que o site coleta",
          content: "<p>Nada sobre você. O site não tem contas, formulários, publicidade, ferramentas de análise nem rastreamento, e não instala cookies. Ele guarda o idioma que você escolheu no armazenamento local do seu navegador, que fica no seu dispositivo.</p>",
        },
        {
          heading: "Hospedagem",
          content: "<p>O site é servido pelo Cloudflare Pages. Para entregar as páginas e proteger o site contra abusos, a Cloudflare processa dados técnicos, como o seu endereço IP, conforme descrito na <a href=\"https://www.cloudflare.com/privacypolicy/\">política de privacidade da Cloudflare</a>. O desenvolvedor não usa esses dados para identificar nem rastrear visitantes.</p>",
        },
        {
          heading: "Links para outros serviços",
          content: "<p>Os links para a App Store e para o Telegram levam a serviços com suas próprias políticas de privacidade.</p>",
        },
        {
          heading: "Se você me escrever",
          content: "<p>Se você me escrever por e-mail ou pelo Telegram, sua mensagem e seu endereço serão usados apenas para responder a você. Eles não são compartilhados com ninguém.</p>",
        },
        {
          heading: "Contato",
          content: "<p>Bogdan Nikishin · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a></p>",
        },
      ],
    },
    terms: {
      title: "Termos de Uso",
      lastUpdated: "Última atualização: 7 de outubro de 2026",
      sections: [
        {
          heading: "Sobre estes termos",
          content: "<p>Estes termos se aplicam aos apps para iOS de Bogdan Nikishin listados em nikibstudio.site, ao bot do Telegram TaroTaper e a este site. Nestes termos, “o desenvolvedor” refere-se a Bogdan Nikishin. Ao usar os apps, o bot ou o site, você concorda com estes termos.</p>",
        },
        {
          heading: "Licença",
          content: "<p>Os apps não são vendidos, e sim licenciados para você, nos termos do <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">Contrato de Licença de Usuário Final de Aplicativo Licenciado</a> da Apple (o “EULA Padrão”) e destes termos. Se os dois divergirem, prevalece o EULA Padrão.</p>",
        },
        {
          heading: "Compras nos apps para iOS",
          content: "<ul><li>Pagamentos, renovações e reembolsos são feitos pela Apple. Você pode pedir reembolso à Apple em <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>.</li><li>A assinatura é renovada automaticamente, a menos que a renovação automática seja desativada pelo menos 24 horas antes do fim do período atual. A cobrança do próximo período é feita na sua Conta Apple nas 24 horas anteriores ao fim do período atual.</li><li>Você pode gerenciar ou cancelar uma assinatura no iPhone, em Ajustes → seu nome → Assinaturas.</li><li>Se uma assinatura começar com um teste gratuito, qualquer parte não utilizada do teste será perdida quando você comprar uma assinatura.</li><li>Compras únicas, como o acesso vitalício ou os pacotes de apoiador, podem ser restauradas nos seus dispositivos com “Restaurar Compras”.</li></ul>",
        },
        {
          heading: "Compras no TaroTaper (Telegram)",
          content: "<ul><li>As leituras e o TaroTaper+ no bot TaroTaper são pagos com Telegram Stars. Os pagamentos são processados pelo Telegram, e valem os <a href=\"https://telegram.org/tos/stars\">termos do Telegram para Stars</a>.</li><li>Uma compra avulsa dá direito a uma leitura do tipo escolhido. Ela só é descontada quando a leitura fica pronta; se uma leitura falhar, a compra continua sendo sua.</li><li>O TaroTaper+ é uma assinatura em Telegram Stars por períodos de 30 dias. Ela se renova até você cancelá-la nas configurações do Telegram, na seção Telegram Stars; depois disso, continua ativa até o fim do período pago. Uso justo: até 20 leituras por dia.</li><li>Para dúvidas sobre um pagamento ou reembolso, envie /paysupport no chat do bot. Como o bot trata os seus dados está explicado na <a href=\"/apps/tarotaper/privacy\">Política de Privacidade do TaroTaper</a>.</li></ul>",
        },
        {
          heading: "Uso aceitável",
          content: "<p>Use os apps, o bot e o site de forma legal. Não tente danificá-los, sobrecarregá-los ou obter acesso não autorizado a eles, e não faça engenharia reversa dos apps, exceto quando a lei permitir.</p>",
        },
        {
          heading: "Seu conteúdo",
          content: "<p>Suas anotações, diários, fotos e outros conteúdos continuam sendo seus. Quando um app processa seu conteúdo para oferecer um recurso que você pediu, como uma interpretação ou um resumo, ele é usado apenas para esse recurso, conforme descrito na política de privacidade desse app.</p>",
        },
        {
          heading: "Não é aconselhamento profissional",
          content: "<p>Interpretações, resumos, estatísticas e sugestões nos apps e no bot servem para informação, autorreflexão e entretenimento. Eles não são aconselhamento médico, odontológico, psicológico, financeiro nem qualquer outro tipo de aconselhamento profissional. Durante um tratamento ortodôntico, siga as orientações do seu ortodontista.</p>",
        },
        {
          heading: "Propriedade intelectual",
          content: "<p>Os apps, seu design, textos e ícones, assim como este site, pertencem ao desenvolvedor. Apple, App Store, iPhone, iPad e Apple Watch são marcas comerciais da Apple Inc.</p>",
        },
        {
          heading: "Garantia e responsabilidade",
          content: "<p>Os apps, o bot e o site são fornecidos “no estado em que se encontram”. Na medida permitida por lei, o desenvolvedor não se responsabiliza por danos indiretos ou consequenciais nem pela perda de dados dos quais você não fez backup. Nada nestes termos limita seus direitos como consumidor previstos na lei do seu país.</p>",
        },
        {
          heading: "Alterações",
          content: "<p>Estes termos podem ser atualizados; a data no topo indica a versão atual. Se você continuar usando os apps após uma alteração, valem os termos atualizados.</p>",
        },
        {
          heading: "Contato",
          content: "<p>Bogdan Nikishin · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a>. As informações deste site não constituem oferta pública.</p>",
        },
      ],
    },
  },
  ar: {
    privacy: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: 7 أكتوبر 2026",
      sections: [
        {
          heading: "نطاق هذه السياسة",
          content: "<p>تشمل هذه السياسة الموقع nikibstudio.site الذي يديره بوغدان نيكيشين، وهو مطوّر iOS مستقل. ولكل تطبيق سياسة خصوصية خاصة به توضّح بدقة ما يخزّنه التطبيق وما يرسله، وتجدها في صفحة التطبيق وداخل التطبيق نفسه.</p>",
        },
        {
          heading: "ما يجمعه الموقع",
          content: "<p>لا شيء عنك. لا توجد في الموقع حسابات أو نماذج أو إعلانات أو أدوات تحليل أو تتبّع، ولا يضع أي ملفات تعريف ارتباط. ويحفظ الموقع اللغة التي اخترتها في التخزين المحلي لمتصفحك، الذي يبقى على جهازك.</p>",
        },
        {
          heading: "الاستضافة",
          content: "<p>يُقدَّم الموقع عبر Cloudflare Pages. ولتوصيل الصفحات وحماية الموقع من إساءة الاستخدام، تعالج Cloudflare بيانات تقنية مثل عنوان IP الخاص بك، كما هو موضّح في <a href=\"https://www.cloudflare.com/privacypolicy/\">سياسة خصوصية Cloudflare</a>. ولا يستخدم المطوّر هذه البيانات للتعرّف على الزوار أو تتبّعهم.</p>",
        },
        {
          heading: "روابط إلى خدمات أخرى",
          content: "<p>تقود روابط App Store وTelegram إلى خدمات لها سياسات خصوصية خاصة بها.</p>",
        },
        {
          heading: "إذا راسلتني",
          content: "<p>إذا راسلتني عبر البريد الإلكتروني أو Telegram، فلن تُستخدم رسالتك وعنوانك إلا للرد عليك، ولن تتم مشاركتهما مع أي أحد.</p>",
        },
        {
          heading: "للتواصل",
          content: "<p>بوغدان نيكيشين · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a></p>",
        },
      ],
    },
    terms: {
      title: "شروط الاستخدام",
      lastUpdated: "آخر تحديث: 7 أكتوبر 2026",
      sections: [
        {
          heading: "حول هذه الشروط",
          content: "<p>تسري هذه الشروط على تطبيقات iOS التي طوّرها بوغدان نيكيشين والمدرجة في nikibstudio.site، وعلى بوت TaroTaper في Telegram، وعلى هذا الموقع. ويُقصد بـ«المطوّر» في هذه الشروط بوغدان نيكيشين. وباستخدامك التطبيقات أو البوت أو الموقع، فإنك توافق على هذه الشروط.</p>",
        },
        {
          heading: "الترخيص",
          content: "<p>التطبيقات مرخّصة لك وليست مبيعة، بموجب <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">اتفاقية ترخيص المستخدم النهائي للتطبيقات المرخّصة</a> من Apple («اتفاقية EULA القياسية») إلى جانب هذه الشروط. وإذا اختلفت الاتفاقية عن هذه الشروط، تكون الأولوية لاتفاقية EULA القياسية.</p>",
        },
        {
          heading: "المشتريات في تطبيقات iOS",
          content: "<ul><li>تتولى Apple المدفوعات والتجديدات والمبالغ المستردة. ويمكنك أن تطلب من Apple استرداد المبلغ عبر <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>.</li><li>يتجدد الاشتراك تلقائيًا ما لم يُوقَف التجديد التلقائي قبل 24 ساعة على الأقل من نهاية الفترة الحالية. وتُحصَّل رسوم الفترة التالية من حساب Apple الخاص بك خلال الساعات الـ24 السابقة لنهاية الفترة الحالية.</li><li>يمكنك إدارة الاشتراك أو إلغاؤه على iPhone من الإعدادات ← اسمك ← الاشتراكات.</li><li>إذا بدأ الاشتراك بفترة تجريبية مجانية، فإن أي جزء غير مستخدم من الفترة التجريبية يسقط عند شراء اشتراك.</li><li>يمكن استعادة عمليات الشراء لمرة واحدة، مثل خيار مدى الحياة أو حزم الداعمين، على أجهزتك باستخدام «استعادة المشتريات».</li></ul>",
        },
        {
          heading: "المشتريات في TaroTaper على Telegram",
          content: "<ul><li>تُدفع القراءات وTaroTaper+ في بوت TaroTaper بنجوم Telegram. يعالج Telegram المدفوعات، وتسري عليها <a href=\"https://telegram.org/tos/stars\">شروط Telegram الخاصة بالنجوم</a>.</li><li>تمنحك عملية الشراء الفردية قراءة واحدة من النوع الذي تختاره. لا تُحتسب إلا عند اكتمال التفسير، وإذا تعذّر التفسير تبقى عملية الشراء لك.</li><li>TaroTaper+ اشتراك بنجوم Telegram لمدة 30 يومًا في كل مرة. يتجدد إلى أن تلغيه من إعدادات Telegram في قسم نجوم Telegram، ويبقى بعد الإلغاء فعّالًا حتى نهاية الفترة المدفوعة. الاستخدام العادل: حتى 20 قراءة يوميًا.</li><li>للاستفسار عن دفعة أو استرداد، أرسل ‎/paysupport في محادثة البوت. وتوضح <a href=\"/apps/tarotaper/privacy\">سياسة الخصوصية لـ TaroTaper</a> كيف يتعامل البوت مع بياناتك.</li></ul>",
        },
        {
          heading: "الاستخدام المقبول",
          content: "<p>استخدم التطبيقات والبوت والموقع بطريقة قانونية. لا تحاول تعطيلها أو إثقالها أو الوصول إليها دون تصريح، ولا تُجرِ هندسة عكسية للتطبيقات إلا في الحدود التي يسمح بها القانون.</p>",
        },
        {
          heading: "المحتوى الخاص بك",
          content: "<p>تبقى ملاحظاتك ويومياتك وصورك وغيرها من المحتوى ملكًا لك. وعندما يعالج أحد التطبيقات المحتوى الخاص بك لتقديم ميزة طلبتها، مثل تفسير أو ملخص، فلا يُستخدم هذا المحتوى إلا لتلك الميزة، كما هو موضّح في سياسة الخصوصية الخاصة بذلك التطبيق.</p>",
        },
        {
          heading: "ليست استشارة مهنية",
          content: "<p>التفسيرات والملخصات والإحصاءات والاقتراحات في التطبيقات والبوت مخصّصة للمعلومات والتأمل الذاتي والترفيه، وهي ليست استشارة طبية أو متعلقة بالأسنان أو نفسية أو مالية أو أي استشارة مهنية أخرى. وخلال علاج تقويم الأسنان، اتبع تعليمات طبيب التقويم المعالج لك.</p>",
        },
        {
          heading: "الملكية الفكرية",
          content: "<p>التطبيقات وتصميمها ونصوصها وأيقوناتها، وكذلك هذا الموقع، مملوكة للمطوّر. وتُعد Apple وApp Store وiPhone وiPad وApple Watch علامات تجارية لشركة Apple Inc.</p>",
        },
        {
          heading: "الضمان والمسؤولية",
          content: "<p>تُقدَّم التطبيقات والبوت والموقع «كما هي». وفي الحدود التي يسمح بها القانون، لا يتحمل المطوّر المسؤولية عن الأضرار غير المباشرة أو التبعية، ولا عن فقدان البيانات التي لم تحتفظ بنسخة احتياطية منها. ولا يوجد في هذه الشروط ما يقيّد حقوقك بصفتك مستهلكًا بموجب قانون بلدك.</p>",
        },
        {
          heading: "التغييرات",
          content: "<p>قد تُحدَّث هذه الشروط، ويشير التاريخ في أعلى الصفحة إلى النسخة الحالية. وإذا واصلت استخدام التطبيقات بعد أي تغيير، تسري الشروط المحدَّثة.</p>",
        },
        {
          heading: "للتواصل",
          content: "<p>بوغدان نيكيشين · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a>. المعلومات الواردة في هذا الموقع لا تُعد عرضًا عامًا.</p>",
        },
      ],
    },
  },
  it: {
    privacy: {
      title: "Informativa sulla privacy",
      lastUpdated: "Ultimo aggiornamento: 7 ottobre 2026",
      sections: [
        {
          heading: "A cosa si applica questa informativa",
          content: "<p>Questa informativa riguarda il sito nikibstudio.site, gestito da Bogdan Nikishin, sviluppatore iOS indipendente. Ogni app ha la propria informativa sulla privacy, che spiega con precisione cosa l’app salva e cosa invia; la trovi nella pagina dell’app e all’interno dell’app stessa.</p>",
        },
        {
          heading: "Cosa raccoglie il sito",
          content: "<p>Niente su di te. Il sito non ha account, moduli, pubblicità, strumenti di analisi o di tracciamento e non imposta cookie. Ricorda la lingua che hai scelto nella memoria locale del browser, che resta sul tuo dispositivo.</p>",
        },
        {
          heading: "Hosting",
          content: "<p>Il sito è distribuito tramite Cloudflare Pages. Per fornire le pagine e proteggere il sito dagli abusi, Cloudflare tratta dati tecnici come il tuo indirizzo IP, come descritto nell’<a href=\"https://www.cloudflare.com/privacypolicy/\">informativa sulla privacy di Cloudflare</a>. Lo sviluppatore non usa questi dati per identificare o tracciare i visitatori.</p>",
        },
        {
          heading: "Link ad altri servizi",
          content: "<p>I link all’App Store e a Telegram portano a servizi che hanno le proprie informative sulla privacy.</p>",
        },
        {
          heading: "Se mi scrivi",
          content: "<p>Se mi scrivi via email o su Telegram, il tuo messaggio e il tuo indirizzo vengono usati solo per risponderti. Non vengono condivisi con nessuno.</p>",
        },
        {
          heading: "Contatti",
          content: "<p>Bogdan Nikishin · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a></p>",
        },
      ],
    },
    terms: {
      title: "Termini di utilizzo",
      lastUpdated: "Ultimo aggiornamento: 7 ottobre 2026",
      sections: [
        {
          heading: "Informazioni su questi termini",
          content: "<p>Questi termini si applicano alle app iOS di Bogdan Nikishin elencate su nikibstudio.site, al bot Telegram TaroTaper e a questo sito. In questi termini, «lo sviluppatore» indica Bogdan Nikishin. Usando le app, il bot o il sito, accetti questi termini.</p>",
        },
        {
          heading: "Licenza",
          content: "<p>Le app non ti vengono vendute, ma concesse in licenza in base al <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">Contratto di licenza con l’utente finale delle applicazioni concesse in licenza</a> di Apple (l’«EULA standard») e a questi termini. In caso di differenze, prevale l’EULA standard.</p>",
        },
        {
          heading: "Acquisti nelle app iOS",
          content: "<ul><li>Pagamenti, rinnovi e rimborsi sono gestiti da Apple. Puoi chiedere un rimborso ad Apple su <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>.</li><li>L’abbonamento si rinnova automaticamente, a meno che il rinnovo automatico non venga disattivato almeno 24 ore prima della fine del periodo in corso. L’importo del periodo successivo viene addebitato sul tuo Account Apple nelle 24 ore che precedono la fine del periodo in corso.</li><li>Puoi gestire o annullare un abbonamento sul tuo iPhone in Impostazioni → il tuo nome → Abbonamenti.</li><li>Se un abbonamento inizia con una prova gratuita, l’eventuale parte non utilizzata della prova va persa quando acquisti un abbonamento.</li><li>Gli acquisti una tantum, come le versioni a vita o i pacchetti sostenitore, si possono ripristinare sui tuoi dispositivi con «Ripristina acquisti».</li></ul>",
        },
        {
          heading: "Acquisti in TaroTaper (Telegram)",
          content: "<ul><li>Le letture e TaroTaper+ del bot TaroTaper si pagano con le Telegram Stars. I pagamenti sono gestiti da Telegram e si applicano i <a href=\"https://telegram.org/tos/stars\">termini di Telegram per le Stars</a>.</li><li>Un acquisto singolo ti dà una lettura del tipo scelto. Viene scalato solo quando la lettura è stata scritta; se una lettura non riesce, l’acquisto resta tuo.</li><li>TaroTaper+ è un abbonamento in Telegram Stars per periodi di 30 giorni. Si rinnova finché non lo disdici nelle impostazioni di Telegram, nella sezione Telegram Stars; dopo la disdetta resta attivo fino alla fine del periodo pagato. Uso corretto: fino a 20 letture al giorno.</li><li>Per domande su un pagamento o un rimborso, invia /paysupport nella chat del bot. Come il bot tratta i tuoi dati è spiegato nell’<a href=\"/apps/tarotaper/privacy\">informativa sulla privacy di TaroTaper</a>.</li></ul>",
        },
        {
          heading: "Uso consentito",
          content: "<p>Usa le app, il bot e il sito nel rispetto della legge. Non tentare di danneggiarli, sovraccaricarli o accedervi senza autorizzazione e non effettuare il reverse engineering delle app, salvo nei casi consentiti dalla legge.</p>",
        },
        {
          heading: "I tuoi contenuti",
          content: "<p>Le tue note, i tuoi diari, le tue foto e gli altri contenuti restano tuoi. Quando un’app elabora i tuoi contenuti per offrirti una funzione che hai richiesto, come un’interpretazione o un riepilogo, li usa solo per quella funzione, come descritto nell’informativa sulla privacy di quell’app.</p>",
        },
        {
          heading: "Non è una consulenza professionale",
          content: "<p>Interpretazioni, riepiloghi, statistiche e suggerimenti delle app e del bot hanno scopo informativo, di riflessione personale e di intrattenimento. Non sono consulenza medica, odontoiatrica, psicologica, finanziaria né alcun altro tipo di consulenza professionale. Durante un trattamento ortodontico, segui le indicazioni del tuo ortodontista.</p>",
        },
        {
          heading: "Proprietà intellettuale",
          content: "<p>Le app, il loro design, i testi e le icone, così come questo sito, appartengono allo sviluppatore. Apple, App Store, iPhone, iPad e Apple Watch sono marchi di Apple Inc.</p>",
        },
        {
          heading: "Garanzia e responsabilità",
          content: "<p>Le app, il bot e il sito sono forniti «così come sono». Nei limiti consentiti dalla legge, lo sviluppatore non è responsabile di danni indiretti o consequenziali né della perdita di dati di cui non hai fatto un backup. Nulla in questi termini limita i diritti che ti spettano come consumatore in base alla legge del tuo paese.</p>",
        },
        {
          heading: "Modifiche",
          content: "<p>Questi termini possono essere aggiornati; la data in alto indica la versione in vigore. Se continui a usare le app dopo una modifica, si applicano i termini aggiornati.</p>",
        },
        {
          heading: "Contatti",
          content: "<p>Bogdan Nikishin · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a>. Le informazioni su questo sito non costituiscono offerta al pubblico.</p>",
        },
      ],
    },
  },
  hi: {
    privacy: {
      title: "गोपनीयता नीति",
      lastUpdated: "अंतिम अपडेट: 7 अक्टूबर 2026",
      sections: [
        {
          heading: "यह नीति किस पर लागू होती है",
          content: "<p>यह नीति वेबसाइट nikibstudio.site पर लागू होती है, जिसे स्वतंत्र iOS डेवलपर बोगदान निकिशिन चलाते हैं। हर ऐप की अपनी गोपनीयता नीति है, जो साफ़-साफ़ बताती है कि ऐप क्या सेव करता है और क्या भेजता है; यह आपको ऐप के पेज पर और ऐप के अंदर मिलेगी।</p>",
        },
        {
          heading: "वेबसाइट क्या इकट्ठा करती है",
          content: "<p>आपके बारे में कुछ भी नहीं। साइट पर न अकाउंट हैं, न फ़ॉर्म, न विज्ञापन, न एनालिटिक्स या ट्रैकिंग, और यह कोई कुकी सेट नहीं करती। आपने जो भाषा चुनी है, उसे यह आपके ब्राउज़र के लोकल स्टोरेज में याद रखती है, जो आपके डिवाइस पर ही रहता है।</p>",
        },
        {
          heading: "होस्टिंग",
          content: "<p>साइट Cloudflare Pages के ज़रिए चलती है। पेज पहुँचाने और साइट को दुरुपयोग से बचाने के लिए Cloudflare आपके IP पते जैसा तकनीकी डेटा प्रोसेस करता है, जैसा कि <a href=\"https://www.cloudflare.com/privacypolicy/\">Cloudflare की गोपनीयता नीति</a> में बताया गया है। डेवलपर इस डेटा का इस्तेमाल विज़िटर्स को पहचानने या ट्रैक करने के लिए नहीं करता।</p>",
        },
        {
          heading: "दूसरी सेवाओं के लिंक",
          content: "<p>App Store और Telegram के लिंक ऐसी सेवाओं पर ले जाते हैं, जिनकी अपनी गोपनीयता नीतियाँ हैं।</p>",
        },
        {
          heading: "अगर आप मुझे लिखते हैं",
          content: "<p>अगर आप मुझे ईमेल या Telegram पर लिखते हैं, तो आपका मैसेज और आपका पता सिर्फ़ आपको जवाब देने के लिए इस्तेमाल होते हैं। इन्हें किसी के साथ साझा नहीं किया जाता।</p>",
        },
        {
          heading: "संपर्क",
          content: "<p>बोगदान निकिशिन · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a></p>",
        },
      ],
    },
    terms: {
      title: "उपयोग की शर्तें",
      lastUpdated: "अंतिम अपडेट: 7 अक्टूबर 2026",
      sections: [
        {
          heading: "इन शर्तों के बारे में",
          content: "<p>ये शर्तें nikibstudio.site पर सूचीबद्ध बोगदान निकिशिन के iOS ऐप्स, TaroTaper Telegram बॉट और इस वेबसाइट पर लागू होती हैं। इन शर्तों में “डेवलपर” का अर्थ बोगदान निकिशिन है। ऐप्स, बॉट या साइट का उपयोग करके आप इन शर्तों से सहमत होते हैं।</p>",
        },
        {
          heading: "लाइसेंस",
          content: "<p>ऐप्स आपको बेचे नहीं जाते, बल्कि Apple के <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">लाइसेंस्ड एप्लिकेशन एंड यूज़र लाइसेंस एग्रीमेंट</a> (Standard EULA) और इन शर्तों के तहत लाइसेंस किए जाते हैं। अगर दोनों में कोई अंतर हो, तो Standard EULA को प्राथमिकता दी जाएगी।</p>",
        },
        {
          heading: "iOS ऐप्स में ख़रीदारी",
          content: "<ul><li>भुगतान, रिन्यूअल और रिफ़ंड Apple संभालता है। आप <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a> पर Apple से रिफ़ंड का अनुरोध कर सकते हैं।</li><li>सब्सक्रिप्शन अपने-आप रिन्यू हो जाता है, जब तक कि मौजूदा अवधि ख़त्म होने से कम से कम 24 घंटे पहले ऑटो-रिन्यूअल बंद न किया जाए। अगली अवधि का शुल्क मौजूदा अवधि ख़त्म होने से पहले के 24 घंटों के भीतर आपके Apple अकाउंट से लिया जाता है।</li><li>आप अपने iPhone पर सेटिंग्ज़ → आपका नाम → सब्सक्रिप्शन में जाकर सब्सक्रिप्शन मैनेज या कैंसल कर सकते हैं।</li><li>अगर कोई सब्सक्रिप्शन मुफ़्त ट्रायल से शुरू होता है, तो सब्सक्रिप्शन ख़रीदते ही ट्रायल का बचा हुआ हिस्सा ख़त्म हो जाता है।</li><li>एक बार की ख़रीदारी, जैसे लाइफ़टाइम या सपोर्टर पैक, को आप अपने डिवाइस पर “ख़रीदारी रीस्टोर करें” से रीस्टोर कर सकते हैं।</li></ul>",
        },
        {
          heading: "TaroTaper (Telegram) में ख़रीदारी",
          content: "<ul><li>TaroTaper बॉट में रीडिंग और TaroTaper+ का भुगतान Telegram Stars से होता है। भुगतान Telegram प्रोसेस करता है, और उन पर <a href=\"https://telegram.org/tos/stars\">Stars के लिए Telegram की शर्तें</a> लागू होती हैं।</li><li>एक बार की ख़रीदारी से आपको चुने हुए प्रकार की एक रीडिंग मिलती है। यह तभी कटती है, जब व्याख्या लिखी जा चुकी हो; अगर कोई रीडिंग नहीं बन पाती, तो ख़रीदारी आपके पास बनी रहती है।</li><li>TaroTaper+, 30-30 दिनों की Telegram Stars सदस्यता है। यह तब तक नवीनीकृत होती रहती है, जब तक आप Telegram की सेटिंग्स में Telegram Stars वाले हिस्से में इसे रद्द न करें; रद्द करने के बाद यह भुगतान की गई अवधि के अंत तक चालू रहती है। उचित उपयोग: दिन में 20 रीडिंग तक।</li><li>किसी भुगतान या रिफ़ंड के बारे में सवाल हो, तो बॉट की चैट में /paysupport भेजें। बॉट आपके डेटा को कैसे संभालता है, यह <a href=\"/apps/tarotaper/privacy\">TaroTaper की गोपनीयता नीति</a> में बताया गया है।</li></ul>",
        },
        {
          heading: "स्वीकार्य उपयोग",
          content: "<p>ऐप्स, बॉट और साइट का उपयोग क़ानून के अनुसार करें। उन्हें बिगाड़ने, उन पर ज़रूरत से ज़्यादा लोड डालने या उन तक बिना अनुमति पहुँचने की कोशिश न करें, और ऐप्स की रिवर्स इंजीनियरिंग न करें, सिवाय वहाँ जहाँ क़ानून इसकी अनुमति देता है।</p>",
        },
        {
          heading: "आपका कंटेंट",
          content: "<p>आपके नोट्स, जर्नल, फ़ोटो और दूसरा कंटेंट आपका ही रहता है। जब कोई ऐप आपकी माँगी हुई किसी सुविधा, जैसे व्याख्या या सारांश, के लिए आपके कंटेंट को प्रोसेस करता है, तो उसका इस्तेमाल सिर्फ़ उसी सुविधा के लिए होता है, जैसा कि उस ऐप की गोपनीयता नीति में बताया गया है।</p>",
        },
        {
          heading: "पेशेवर सलाह नहीं",
          content: "<p>ऐप्स और बॉट में दी गई व्याख्याएँ, सारांश, आँकड़े और सुझाव जानकारी, आत्म-चिंतन और मनोरंजन के लिए हैं। ये चिकित्सा, दंत चिकित्सा, मनोवैज्ञानिक, वित्तीय या किसी और तरह की पेशेवर सलाह नहीं हैं। ऑर्थोडॉन्टिक इलाज के दौरान अपने ऑर्थोडॉन्टिस्ट के निर्देशों का पालन करें।</p>",
        },
        {
          heading: "बौद्धिक संपदा",
          content: "<p>ऐप्स, उनका डिज़ाइन, टेक्स्ट और आइकन, और यह वेबसाइट डेवलपर की संपत्ति हैं। Apple, App Store, iPhone, iPad और Apple Watch, Apple Inc. के ट्रेडमार्क हैं।</p>",
        },
        {
          heading: "वारंटी और दायित्व",
          content: "<p>ऐप्स, बॉट और साइट “जैसे हैं” के आधार पर दिए जाते हैं। क़ानून जितनी अनुमति देता है, उस हद तक डेवलपर अप्रत्यक्ष या परिणामी नुकसान के लिए, या ऐसे डेटा के खो जाने के लिए ज़िम्मेदार नहीं है जिसका आपने बैकअप नहीं लिया था। इन शर्तों की कोई भी बात आपके देश के क़ानून के तहत उपभोक्ता के रूप में आपके अधिकारों को सीमित नहीं करती।</p>",
        },
        {
          heading: "बदलाव",
          content: "<p>इन शर्तों को अपडेट किया जा सकता है; ऊपर दी गई तारीख मौजूदा संस्करण दिखाती है। अगर आप किसी बदलाव के बाद भी ऐप्स का उपयोग जारी रखते हैं, तो अपडेट की गई शर्तें लागू होती हैं।</p>",
        },
        {
          heading: "संपर्क",
          content: "<p>बोगदान निकिशिन · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a>। इस वेबसाइट की जानकारी सार्वजनिक प्रस्ताव नहीं है।</p>",
        },
      ],
    },
  },
  he: {
    privacy: {
      title: "מדיניות פרטיות",
      lastUpdated: "עודכן לאחרונה: 7 באוקטובר 2026",
      sections: [
        {
          heading: "על מה חלה המדיניות",
          content: "<p>מדיניות זו חלה על האתר nikibstudio.site, שמנוהל על ידי בוגדן ניקישין, מפתח iOS עצמאי. לכל אפליקציה יש מדיניות פרטיות משלה, שמסבירה בדיוק מה האפליקציה שומרת ומה היא שולחת; תוכלו למצוא אותה בדף האפליקציה ובתוך האפליקציה עצמה.</p>",
        },
        {
          heading: "מה האתר אוסף",
          content: "<p>שום דבר עליכם. באתר אין חשבונות, טפסים, פרסומות, כלי ניתוח או מעקב, והוא לא שומר קובצי Cookie. האתר זוכר את השפה שבחרתם באחסון המקומי של הדפדפן, שנשאר במכשיר שלכם.</p>",
        },
        {
          heading: "אחסון",
          content: "<p>האתר מוגש דרך Cloudflare Pages. כדי להציג את הדפים ולהגן על האתר מפני שימוש לרעה, Cloudflare מעבדת נתונים טכניים כמו כתובת ה-IP שלכם, כמתואר ב<a href=\"https://www.cloudflare.com/privacypolicy/\">מדיניות הפרטיות של Cloudflare</a>. המפתח לא משתמש בנתונים האלה כדי לזהות מבקרים או לעקוב אחריהם.</p>",
        },
        {
          heading: "קישורים לשירותים אחרים",
          content: "<p>קישורים ל-App Store ול-Telegram מובילים לשירותים שיש להם מדיניות פרטיות משלהם.</p>",
        },
        {
          heading: "אם תכתבו לי",
          content: "<p>אם תכתבו לי במייל או ב-Telegram, ההודעה והכתובת שלכם ישמשו רק כדי לענות לכם. הן לא מועברות לאף אחד.</p>",
        },
        {
          heading: "יצירת קשר",
          content: "<p>בוגדן ניקישין · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a></p>",
        },
      ],
    },
    terms: {
      title: "תנאי שימוש",
      lastUpdated: "עודכן לאחרונה: 7 באוקטובר 2026",
      sections: [
        {
          heading: "על התנאים האלה",
          content: "<p>תנאים אלה חלים על אפליקציות ה-iOS של בוגדן ניקישין שמופיעות ב-nikibstudio.site, על הבוט TaroTaper ב-Telegram ועל האתר הזה. בתנאים אלה, \"המפתח\" הוא בוגדן ניקישין. השימוש באפליקציות, בבוט או באתר מהווה הסכמה לתנאים אלה.</p>",
        },
        {
          heading: "רישיון",
          content: "<p>האפליקציות אינן נמכרות לכם אלא ניתנות לכם ברישיון, בהתאם ל<a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\">הסכם רישיון למשתמש קצה של יישומים מורשים</a> של Apple (להלן: \"Standard EULA\") ולתנאים אלה. אם יש סתירה בין השניים, ה-Standard EULA גובר.</p>",
        },
        {
          heading: "רכישות באפליקציות ל־iOS",
          content: "<ul><li>את התשלומים, החידושים וההחזרים מטפלת Apple. אפשר לבקש החזר מ-Apple בכתובת <a href=\"https://reportaproblem.apple.com\">reportaproblem.apple.com</a>.</li><li>מינוי מתחדש אוטומטית, אלא אם החידוש האוטומטי מבוטל לפחות 24 שעות לפני סוף התקופה הנוכחית. החיוב על התקופה הבאה מתבצע בחשבון Apple שלכם במהלך 24 השעות שלפני סוף התקופה הנוכחית.</li><li>אפשר לנהל או לבטל מינוי ב-iPhone, בהגדרות ← השם שלכם ← מינויים.</li><li>אם מינוי מתחיל בתקופת ניסיון בחינם, כל חלק שלא נוצל מתקופת הניסיון פוקע כשרוכשים מינוי.</li><li>רכישות חד-פעמיות, כמו גרסה לכל החיים או חבילות תומכים, אפשר לשחזר במכשירים שלכם באמצעות \"שחזור רכישות\".</li></ul>",
        },
        {
          heading: "רכישות ב־TaroTaper ב־Telegram",
          content: "<ul><li>קריאות ו־TaroTaper+ בבוט TaroTaper משולמים ב־Telegram Stars. את התשלומים מעבד Telegram, וחלים עליהם <a href=\"https://telegram.org/tos/stars\">התנאים של Telegram לכוכבים</a>.</li><li>רכישה בודדת מעניקה קריאה אחת מהסוג שנבחר. היא מנוכה רק כשהפירוש נכתב; אם קריאה לא מצליחה, הרכישה נשארת שלכם.</li><li>TaroTaper+ הוא מנוי ב־Telegram Stars לתקופות של 30 יום. הוא מתחדש עד שתבטלו אותו בהגדרות Telegram, בחלק של Telegram Stars; לאחר הביטול הוא נשאר פעיל עד סוף התקופה ששולמה. שימוש הוגן: עד 20 קריאות ביום.</li><li>לשאלות על תשלום או החזר, שלחו ‎/paysupport בצ׳אט של הבוט. האופן שבו הבוט מטפל בנתונים שלכם מוסבר ב<a href=\"/apps/tarotaper/privacy\">מדיניות הפרטיות של TaroTaper</a>.</li></ul>",
        },
        {
          heading: "שימוש מותר",
          content: "<p>השתמשו באפליקציות, בבוט ובאתר בהתאם לחוק. אל תנסו לשבש אותם, להעמיס עליהם או לקבל אליהם גישה ללא הרשאה, ואל תבצעו הנדסה לאחור של האפליקציות, אלא במידה שהחוק מתיר זאת.</p>",
        },
        {
          heading: "התוכן שלכם",
          content: "<p>ההערות, היומנים, התמונות ושאר התוכן שלכם נשארים שלכם. כשאפליקציה מעבדת את התוכן שלכם כדי לספק תכונה שביקשתם, כמו פירוש או סיכום, הוא משמש רק לתכונה הזו, כמתואר במדיניות הפרטיות של אותה אפליקציה.</p>",
        },
        {
          heading: "לא ייעוץ מקצועי",
          content: "<p>הפירושים, הסיכומים, הנתונים הסטטיסטיים וההצעות באפליקציות ובבוט נועדו למידע, להתבוננות עצמית ולבידור. הם אינם ייעוץ רפואי, דנטלי, פסיכולוגי, פיננסי או ייעוץ מקצועי אחר. במהלך טיפול אורתודונטי, פעלו לפי ההנחיות של האורתודונט שלכם.</p>",
        },
        {
          heading: "קניין רוחני",
          content: "<p>האפליקציות, העיצוב, הטקסטים והאייקונים שלהן, וגם האתר הזה, שייכים למפתח. Apple, App Store, iPhone, iPad ו-Apple Watch הם סימנים מסחריים של Apple Inc.</p>",
        },
        {
          heading: "אחריות וחבות",
          content: "<p>האפליקציות, הבוט והאתר מסופקים \"כמות שהם\". ככל שהחוק מתיר, המפתח אינו אחראי לנזקים עקיפים או תוצאתיים, או לאובדן נתונים שלא גיביתם. אין בתנאים אלה כדי לגרוע מזכויותיכם כצרכנים לפי הדין במדינה שלכם.</p>",
        },
        {
          heading: "שינויים",
          content: "<p>תנאים אלה עשויים להתעדכן; התאריך בראש הדף מציין את הגרסה הנוכחית. אם תמשיכו להשתמש באפליקציות אחרי שינוי, יחולו התנאים המעודכנים.</p>",
        },
        {
          heading: "יצירת קשר",
          content: "<p>בוגדן ניקישין · <a href=\"mailto:B.S.NikishinG@gmail.com\">B.S.NikishinG@gmail.com</a> · Telegram <a href=\"https://t.me/nikibstudio\">@nikibstudio</a>. המידע באתר זה אינו מהווה הצעה פומבית.</p>",
        },
      ],
    },
  },
}

export function getLegal(kind: LegalKind, locale: Locale): LegalPage {
  return legal[locale]?.[kind] ?? legal.en![kind]
}
