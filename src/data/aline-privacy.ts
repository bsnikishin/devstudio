import type { PrivacySection, PrivacyPolicy } from './tarotaper-privacy'

export type { PrivacySection, PrivacyPolicy }

export const alinePrivacy: Record<string, PrivacyPolicy> = {
  en: {
    title: `Privacy Policy`,
    effectiveDate: `Effective Date: June 11, 2026`,
    intro: `NikiBStudio ("we", "our", or "us") built <strong>Aline</strong> ("the App") as a commercial application. This Privacy Policy explains how we handle information when you use our App.`,
    sections: [
      {
        heading: `Overview`,
        content: `<p>Aline is designed with your privacy in mind. The App does not require account creation, login, or any form of user registration, shows no ads, and performs no cross-app tracking. Aline only displays your own data and does not provide medical advice — treatment questions belong to your doctor.</p>`,
      },
      {
        heading: `Information We Do Not Collect`,
        content: `<p>We do not collect any of the following:</p>
<ul><li>Names, email addresses, or contact information</li><li>Location data</li><li>Advertising identifiers or cross-app tracking data</li><li>Browsing or search history</li><li>Your contacts or files</li><li>Financial data (payments are processed entirely by Apple)</li></ul>`,
      },
      {
        heading: `Data Stored on Your Device`,
        content: `<p>The App stores data locally on your device to provide its core functionality:</p>
<ul><li><strong>Treatment plan data you enter</strong> — course start, number of trays, tray change dates, appointment dates.</li><li><strong>Wear sessions</strong> — timestamps of when you take your aligners out and put them back in.</li><li><strong>Notes</strong> — your journal entries with tags.</li><li><strong>Photos</strong> — your photo diary pictures, stored in the App's private container.</li><li><strong>App preferences</strong> — settings such as notification and AI consent preferences.</li><li><strong>Subscription status</strong> — a cached indicator of your subscription state.</li></ul>
<p>All of this data is stored on your device (and optionally in your personal iCloud account if you enable photo sync) and is not transmitted to us. You can delete all stored data at any time by uninstalling the App.</p>`,
      },
      {
        heading: `AI Appointment Summary`,
        content: `<p>Aline can organize your notes into a short pre-appointment summary. When you request a summary <strong>and have given explicit consent</strong> (a consent dialog on first use, and a toggle in the App's settings), the App sends the following to a third-party AI provider:</p>
<ul><li>The text of your notes for the period and their dates</li><li>Tray numbers and dates of photos taken in the period (dates only — never the images themselves)</li></ul>
<p>This data is sent to <strong>DeepSeek</strong> via their API and processed in real time. It is <strong>not stored on our servers</strong> — we do not operate any servers. Data is transmitted only after your explicit request, and no personal identifiers or user accounts are associated with these requests. If you do not give consent, the summary is generated on your device and nothing is sent. DeepSeek's handling of data is governed by their Privacy Policy (<a href="https://www.deepseek.com/privacy" target="_blank" rel="noopener noreferrer">www.deepseek.com/privacy</a>).</p>
<p><strong>The content of your photos is never sent to any AI service or analyzed in any way.</strong></p>`,
      },
      {
        heading: `iCloud Photo Sync (Aline+)`,
        content: `<p>If you enable photo sync, your photo diary is stored in your personal iCloud account using Apple's CloudKit private database. This data is protected by your Apple ID and is not accessible to us. Sync is off by default, and turning it off does not delete your local photos. Apple's handling of your iCloud data is governed by Apple's Privacy Policy (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Third-Party Services`,
        content: `<h3>Apple (App Store & StoreKit)</h3>
<p>If you purchase an Aline+ subscription, the transaction is processed entirely by Apple through the App Store. We do not have access to your payment information, Apple ID, or billing details.</p>
<h3>RevenueCat (Subscription Management)</h3>
<p>The App uses RevenueCat to validate subscription status. RevenueCat receives an anonymous app-generated identifier and purchase receipt information — never your name, email, or payment details. RevenueCat's handling of data is governed by their Privacy Policy (<a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">www.revenuecat.com/privacy</a>).</p>
<h3>PostHog (Anonymous Usage Analytics)</h3>
<p>The App sends anonymous usage events (for example, "timer started" or "paywall viewed") to PostHog, hosted in the EU, to help us improve the App. These events never include the content of your notes, your photos, treatment details, or any identifiers that link to you personally. PostHog's handling of data is governed by their Privacy Policy (<a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">posthog.com/privacy</a>).</p>
<h3>Sentry (Crash Reporting)</h3>
<p>If the App crashes, a technical crash report (device model, OS version, stack trace) is sent to Sentry so we can fix the problem. Crash reports never include your notes, photos, or treatment data. Sentry's handling of data is governed by their Privacy Policy (<a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">sentry.io/privacy</a>).</p>
<h3>No Other Third-Party Services</h3>
<p>The App contains no advertising SDKs and no social media SDKs, and performs no cross-app tracking.</p>`,
      },
      {
        heading: `Camera and Photo Library Access`,
        content: `<p>The App requests camera access only for taking photo diary pictures. Photos you import are chosen by you through the system photo picker — the App cannot browse your photo library. Saving exported images and timelapse videos uses add-only access. The content of your photos is never analyzed and never leaves your device except to your personal iCloud if you enable sync.</p>`,
      },
      {
        heading: `Notifications`,
        content: `<p>The App may request permission to send local notifications (a reminder to put your aligners back in, tray change day, and a weekly photo reminder). These are scheduled entirely on your device and do not involve external push services. You can manage or disable them in your device Settings.</p>`,
      },
      {
        heading: `Children's Privacy`,
        content: `<p>The App is not directed at children under the age of 13. We do not knowingly collect any personal information from children.</p>`,
      },
      {
        heading: `Data Security`,
        content: `<p>All network communication of the App (AI summary requests, subscription validation, anonymous analytics) is encrypted using HTTPS/TLS. We do not operate our own servers and do not store your data anywhere outside your device and your personal iCloud account.</p>`,
      },
      {
        heading: `Your Rights`,
        content: `<p>You have the following rights regarding your data:</p>
<ul><li>You can decline or revoke AI summary consent at any time in the App's settings — no notes will be sent.</li><li>You can keep iCloud photo sync off — photos then never leave your device.</li><li>All App data can be removed by uninstalling the App.</li><li>Since we do not collect or store personal data on our servers, there is no personal data for us to provide, modify, or delete.</li></ul>`,
      },
      {
        heading: `Changes to This Policy`,
        content: `<p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date.</p>`,
      },
      {
        heading: `Contact Us`,
        content: `<p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  ru: {
    title: `Политика конфиденциальности`,
    effectiveDate: `Дата вступления в силу: 11 июня 2026 г.`,
    intro: `NikiBStudio («мы», «наш» или «нас») разработала приложение <strong>Aline</strong> («Приложение») как коммерческий продукт. Настоящая Политика конфиденциальности описывает, как мы обращаемся с информацией при использовании вами нашего Приложения.`,
    sections: [
      {
        heading: `Обзор`,
        content: `<p>Aline разработано с заботой о вашей конфиденциальности. Приложение не требует создания аккаунта или регистрации, не показывает рекламу и не отслеживает вас между приложениями. Aline показывает только ваши собственные данные и не даёт медицинских рекомендаций — вопросы лечения решает ваш врач.</p>`,
      },
      {
        heading: `Какую информацию мы не собираем`,
        content: `<p>Мы не собираем:</p>
<ul><li>Имена, адреса электронной почты и контактные данные</li><li>Данные о местоположении</li><li>Рекламные идентификаторы и данные кросс-трекинга</li><li>Историю браузера и поиска</li><li>Ваши контакты и файлы</li><li>Платёжные данные (платежи полностью обрабатывает Apple)</li></ul>`,
      },
      {
        heading: `Данные, хранящиеся на вашем устройстве`,
        content: `<p>Приложение хранит данные локально на вашем устройстве:</p>
<ul><li><strong>Введённые вами данные плана</strong> — старт курса, количество пар, даты смены, даты приёмов.</li><li><strong>Сессии ношения</strong> — отметки времени, когда вы снимаете и надеваете капы.</li><li><strong>Заметки</strong> — записи дневника с тегами.</li><li><strong>Фото</strong> — снимки фотодневника в закрытом контейнере Приложения.</li><li><strong>Настройки</strong> — уведомления, согласие на облачный ИИ и т.п.</li><li><strong>Статус подписки</strong> — кешированный индикатор.</li></ul>
<p>Все эти данные хранятся на устройстве (и, по желанию, в вашем личном iCloud при включённой синхронизации фото) и нам не передаются. Удалить всё можно, удалив Приложение.</p>`,
      },
      {
        heading: `AI-сводка к приёму`,
        content: `<p>Aline может собрать ваши заметки в короткую сводку к приёму. Когда вы запрашиваете сводку <strong>и дали явное согласие</strong> (диалог при первом использовании и переключатель в настройках), Приложение отправляет стороннему ИИ-провайдеру:</p>
<ul><li>Тексты заметок за период и их даты</li><li>Номера пар и даты снимков за период (только даты — никогда сами изображения)</li></ul>
<p>Данные отправляются в <strong>DeepSeek</strong> через их API и обрабатываются в реальном времени. Они <strong>не сохраняются на наших серверах</strong> — у нас нет серверов. Передача происходит только по вашему явному запросу, без каких-либо персональных идентификаторов. Без согласия сводка собирается на устройстве, и ничего не отправляется. Обработка данных DeepSeek регулируется их Политикой конфиденциальности (<a href="https://www.deepseek.com/privacy" target="_blank" rel="noopener noreferrer">www.deepseek.com/privacy</a>).</p>
<p><strong>Содержимое ваших фото никогда не отправляется ИИ-сервисам и никак не анализируется.</strong></p>`,
      },
      {
        heading: `Синхронизация фото через iCloud (Aline+)`,
        content: `<p>Если вы включите синхронизацию фото, фотодневник хранится в вашем личном iCloud в закрытой базе CloudKit. Эти данные защищены вашим Apple ID и недоступны нам. Синхронизация выключена по умолчанию; её отключение не удаляет локальные фото. Обработка данных iCloud регулируется Политикой конфиденциальности Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Сторонние сервисы`,
        content: `<h3>Apple (App Store и StoreKit)</h3>
<p>Покупка подписки Aline+ полностью обрабатывается Apple через App Store. У нас нет доступа к вашим платёжным данным, Apple ID и реквизитам.</p>
<h3>RevenueCat (управление подпиской)</h3>
<p>Приложение использует RevenueCat для проверки статуса подписки. RevenueCat получает анонимный идентификатор, сгенерированный приложением, и данные чека покупки — никогда ваше имя, почту или платёжные данные. Политика: <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">www.revenuecat.com/privacy</a>.</p>
<h3>PostHog (анонимная аналитика использования)</h3>
<p>Приложение отправляет анонимные события использования (например, «таймер запущен» или «открыт paywall») в PostHog с хостингом в ЕС, чтобы мы могли улучшать Приложение. Эти события никогда не содержат тексты заметок, фото, детали лечения или идентификаторы, связывающие их с вами лично. Политика: <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">posthog.com/privacy</a>.</p>
<h3>Sentry (отчёты о сбоях)</h3>
<p>При сбое Приложения в Sentry отправляется технический отчёт (модель устройства, версия ОС, стек вызовов), чтобы мы могли исправить проблему. Отчёты никогда не содержат заметки, фото или данные лечения. Политика: <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">sentry.io/privacy</a>.</p>
<h3>Никаких других сторонних сервисов</h3>
<p>В Приложении нет рекламных SDK и SDK соцсетей, нет кросс-трекинга.</p>`,
      },
      {
        heading: `Доступ к камере и фотобиблиотеке`,
        content: `<p>Камера используется только для снимков фотодневника. Импортируемые фото вы выбираете сами через системный пикер — Приложение не может просматривать вашу библиотеку. Сохранение экспортированных картинок и таймлапсов использует доступ «только добавление». Содержимое фото не анализируется и не покидает устройство, кроме вашего личного iCloud при включённой синхронизации.</p>`,
      },
      {
        heading: `Уведомления`,
        content: `<p>Приложение может запросить разрешение на локальные уведомления (напоминание вернуть капу, день смены пары, еженедельное фото). Они планируются полностью на устройстве, без внешних push-сервисов. Управлять ими можно в Настройках устройства.</p>`,
      },
      {
        heading: `Конфиденциальность детей`,
        content: `<p>Приложение не предназначено для детей младше 13 лет. Мы сознательно не собираем персональные данные детей.</p>`,
      },
      {
        heading: `Безопасность данных`,
        content: `<p>Весь сетевой обмен Приложения (запросы AI-сводки, проверка подписки, анонимная аналитика) шифруется по HTTPS/TLS. У нас нет собственных серверов, и ваши данные не хранятся нигде, кроме вашего устройства и вашего личного iCloud.</p>`,
      },
      {
        heading: `Ваши права`,
        content: `<p>В отношении ваших данных вы можете:</p>
<ul><li>Не давать или отозвать согласие на облачный ИИ в настройках Приложения — заметки отправляться не будут.</li><li>Не включать синхронизацию фото — тогда фото никогда не покидают устройство.</li><li>Удалить все данные Приложения, удалив само Приложение.</li><li>Поскольку мы не собираем и не храним персональные данные на серверах, у нас нет данных, которые нужно было бы предоставлять, изменять или удалять.</li></ul>`,
      },
      {
        heading: `Изменения политики`,
        content: `<p>Мы можем время от времени обновлять эту Политику. Изменения публикуются на этой странице с новой датой вступления в силу.</p>`,
      },
      {
        heading: `Связаться с нами`,
        content: `<p>Если у вас есть вопросы по этой Политике конфиденциальности, напишите нам:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
}
