// LDream privacy policy, 13 languages.
// Data flows verified against the ldream-api worker (interpret, generate-image, patterns).

import type { PrivacySection, PrivacyPolicy } from './tarotaper-privacy'

export type { PrivacySection, PrivacyPolicy }

export const ldreamPrivacy: Record<string, PrivacyPolicy> = {
  en: {
    title: `Privacy Policy`,
    effectiveDate: `Effective Date: October 5, 2026`,
    intro: `Bogdan Nikishin, an independent developer ("we", "our", or "us"), built <strong>LDream</strong> ("the App") as a commercial application. This Privacy Policy explains what information the App handles, what stays on your device, and what is sent, where, and why when you use its optional AI features.`,
    sections: [
      {
        heading: `Overview`,
        content: `<p>LDream is a private dream journal for self-reflection. The App requires no account, login, or registration, contains no advertising, and includes no analytics or tracking SDKs. Your journal is stored on your device and, if you turn on sync, in your private iCloud account. Interpretations, illustrations, and Patterns are optional: they work only after you give your explicit consent in the App, and they send only the data described in this policy.</p>`,
      },
      {
        heading: `Information We Do Not Collect`,
        content: `<p>We do not collect any of the following:</p>
<ul><li>Names, email addresses, or contact information (unless you write to us)</li><li>Accounts or passwords — the App has no accounts</li><li>Location data</li><li>The advertising identifier (IDFA) or any identifier used to track you across apps and websites</li><li>Contacts, photos, or other personal files</li><li>Voice recordings</li><li>Usage analytics or behavioral tracking data</li></ul>`,
      },
      {
        heading: `Data Stored on Your Device`,
        content: `<p>The App stores the following data locally on your device:</p>
<ul><li><strong>Dream journal entries</strong> — the text of your dreams, their titles and dates, and the interpretations, symbols, and emotions saved with them.</li><li><strong>Illustrations and Patterns summaries</strong> that you have created.</li><li><strong>App preferences</strong> — such as reminders, the Face ID lock, and iCloud sync.</li><li><strong>Subscription status</strong> — a cached indicator of your Premium access.</li></ul>
<p><strong>Voice input</strong> is transcribed into text by Apple's speech recognition: on your device where your device and language support it, otherwise by Apple's speech service. The audio is never sent to us or to our AI providers, and the App does not store recordings.</p>
<p>This data is not transmitted to us, except as described in the next section. You can delete entries in the App at any time; deleting the App removes all data stored on the device.</p>`,
      },
      {
        heading: `AI Interpretations, Illustrations, and Patterns`,
        content: `<p><strong>Consent first.</strong> Before the first interpretation, illustration, or Patterns summary, LDream explains what will be sent and where, and asks for your explicit consent. Without it, nothing is sent. We process the data described below on the basis of that consent.</p>
<p><strong>What the App sends to our server.</strong> Our server is a small service we operate on Cloudflare (Cloudflare Workers). Depending on the feature you use, the App sends:</p>
<ul><li><strong>Interpretation</strong> — the text of the dream and your interface language (and, if the App detects it, the language the dream is written in), so the answer comes in your language.</li><li><strong>Illustration</strong> — the text of the dream.</li><li><strong>Patterns</strong> (Premium) — for the dreams of the selected week or month: their dates, titles, key symbols, and emotions. The full text of your dreams is not sent for Patterns.</li><li><strong>With every request</strong> — a device identifier (Apple's identifier for vendor, IDFV, which is the same for all our apps on your device and is not the advertising identifier), the App version, and your local date. We use them only to apply usage limits and to prevent abuse. If you have Premium, the App also sends the signed App Store transaction so that our server can verify your purchase.</li></ul>
<p><strong>What our server forwards.</strong></p>
<ul><li><strong>DeepSeek</strong> — the dream text, to write the interpretation. For an illustration, DeepSeek turns the dream text into a short scene description (and, if the image service rejects that description, a softened version). For Patterns, DeepSeek receives the titles, symbols, and emotions listed above. DeepSeek processes these requests on servers located in the People's Republic of China.</li><li><strong>fal.ai</strong> — only the short scene description, to draw the optional illustration. fal.ai is based in the United States. The finished image is downloaded to your device and saved in your journal.</li></ul>
<p>Your device identifier, IP address, and purchase details are never passed to DeepSeek or fal.ai.</p>
<p><strong>What our server keeps.</strong> We do not keep your dreams, interpretations, or illustrations. The server stores only pseudonymous usage counters linked to the device identifier: how many free interpretations the device has used and whether its free illustration has been used (kept without a time limit, so the free allowance cannot be reset by reinstalling the App), and Premium daily usage, which is deleted automatically after about three days. So that a retry after a dropped connection does not count twice, the result of a request may be cached for up to 10 minutes and is then deleted automatically. Your IP address is used only momentarily to limit the number of requests per minute and is not stored by us.</p>`,
      },
      {
        heading: `iCloud Sync`,
        content: `<p>If you turn on iCloud sync, your journal is stored in your private iCloud account using Apple's CloudKit. This data is protected by your Apple Account and is not accessible to us. You can delete your journal from iCloud in the App's iCloud settings, or by managing your iCloud storage in iOS Settings. Apple's handling of iCloud data is governed by Apple's Privacy Policy (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Third-Party Services`,
        content: `<h3>Apple (App Store, StoreKit, iCloud, and speech recognition)</h3>
<p>Purchases and subscriptions are processed entirely by Apple through the App Store. We do not receive your payment information, Apple Account details, or billing information. When you use voice input on a device or in a language without on-device speech recognition, Apple's speech service transcribes the audio; we never receive it. Apple's handling of your data is governed by Apple's Privacy Policy (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>
<h3>Cloudflare (our server)</h3>
<p>Our server runs on Cloudflare Workers. Requests are encrypted in transit and processed on Cloudflare's global network, which may include data centers outside your country. Cloudflare's handling of data is governed by its Privacy Policy (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek (interpretations, scene descriptions, and Patterns)</h3>
<p>DeepSeek processes the data described above on servers in the People's Republic of China. DeepSeek's handling of data is governed by its Privacy Policy (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>fal.ai (illustrations)</h3>
<p>fal.ai, based in the United States, receives only the short scene description to generate the illustration. fal.ai's handling of data is governed by its Privacy Policy (<a href="https://fal.ai/legal/privacy-policy" target="_blank" rel="noopener noreferrer">fal.ai/legal/privacy-policy</a>).</p>
<h3>No Analytics or Advertising</h3>
<p>The App does not integrate any third-party analytics, advertising, crash-reporting, or social media SDKs. We do not use Firebase, Google Analytics, Facebook SDK, or similar services, and we do not track you across apps or websites.</p>`,
      },
      {
        heading: `Photo Library Access`,
        content: `<p>The App may ask for permission to save illustrations to your photo library. This happens only when you choose to save an image; the App only adds images and does not read or access your existing photos.</p>`,
      },
      {
        heading: `Notifications`,
        content: `<p>The App may ask for permission to send local notifications, such as reminders to record your dreams. They are scheduled on your device and do not use any external push notification service. You can manage or turn them off at any time in your device's Settings.</p>`,
      },
      {
        heading: `Children's Privacy`,
        content: `<p>The App is not directed at children under the age of 13, and we do not knowingly collect personal information from children. AI features work only after explicit consent in the App. If you have concerns about a child's use of the App, please contact us.</p>`,
      },
      {
        heading: `Data Sharing`,
        content: `<p>We share data only with the service providers described above, and only to provide the App's features:</p>
<ul><li><strong>Cloudflare</strong> — hosts our server and processes requests to it.</li><li><strong>DeepSeek</strong> — receives the dream text (or, for Patterns, titles, symbols, and emotions) to create interpretations, scene descriptions, and Patterns summaries.</li><li><strong>fal.ai</strong> — receives a short scene description to create illustrations.</li><li><strong>Apple</strong> — processes purchases, transcribes voice input with its speech service when on-device recognition is not available, and, if you turn on sync, stores your journal in your private iCloud.</li></ul>
<p>We do not sell, rent, or trade your data, and we do not share it for advertising or marketing. Because DeepSeek's servers are in the People's Republic of China and fal.ai is based in the United States, your data may be processed in countries whose data protection laws differ from those of your country. You agree to this transfer when you give your consent in the App.</p>`,
      },
      {
        heading: `Data Security`,
        content: `<p>All communication between the App and our server, and between our server and DeepSeek and fal.ai, is encrypted with HTTPS/TLS. Because we do not keep your dreams on our server and have no user accounts, there is no database of your journal on our side that could be breached. Your journal stays on your device and, if you turn on sync, in your private iCloud. If you turn on the Face ID lock, authentication is handled by iOS; the App never receives your biometric data.</p>`,
      },
      {
        heading: `Your Rights`,
        content: `<p>You stay in control of your data:</p>
<ul><li><strong>Withdraw your consent</strong> at any time in the App's settings. After that, nothing more is sent; you can keep recording and reading your journal.</li><li><strong>Delete your journal</strong> — delete entries in the App, delete the iCloud copy in the App's iCloud settings, and delete the App to remove everything stored on the device.</li><li><strong>Counters on our server</strong> contain no dream content and are not linked to your name or Apple Account; daily counters expire automatically. Because they are not linked to you, we usually cannot tell which counters are yours, but you can contact us with any request.</li><li>Data already sent to DeepSeek or fal.ai is handled under their privacy policies.</li></ul>
<p>If you have questions about your data or want to exercise your rights under the laws of your country, please contact us.</p>`,
      },
      {
        heading: `Changes to This Policy`,
        content: `<p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date. We encourage you to review this policy periodically.</p>`,
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
    effectiveDate: `Дата вступления в силу: 5 октября 2026 г.`,
    intro: `Богдан Никишин, независимый разработчик («мы», «наш» или «нас»), разработал приложение <strong>LDream</strong> («Приложение») как коммерческий продукт. Настоящая Политика конфиденциальности объясняет, с какой информацией работает Приложение, что остаётся на вашем устройстве и что, куда и зачем отправляется, когда вы пользуетесь его необязательными функциями ИИ.`,
    sections: [
      {
        heading: `Обзор`,
        content: `<p>LDream — личный дневник снов для саморефлексии. Приложение не требует аккаунта, входа или регистрации, не содержит рекламы и не использует SDK аналитики или отслеживания. Ваш дневник хранится на устройстве и, если вы включите синхронизацию, в вашем личном аккаунте iCloud. Толкования, иллюстрации и «Паттерны» — необязательные функции: они работают только после вашего явного согласия в Приложении и отправляют только данные, описанные в этой политике.</p>`,
      },
      {
        heading: `Информация, которую мы не собираем`,
        content: `<p>Мы не собираем следующие данные:</p>
<ul><li>Имена, адреса электронной почты и контактные данные (если только вы сами нам не напишете)</li><li>Аккаунты и пароли — в Приложении нет аккаунтов</li><li>Данные о местоположении</li><li>Рекламный идентификатор (IDFA) и любые идентификаторы для отслеживания между приложениями и сайтами</li><li>Контакты, фотографии и другие личные файлы</li><li>Записи голоса</li><li>Аналитику использования и данные поведенческого отслеживания</li></ul>`,
      },
      {
        heading: `Данные, хранящиеся на вашем устройстве`,
        content: `<p>Приложение хранит на вашем устройстве следующие данные:</p>
<ul><li><strong>Записи дневника снов</strong> — тексты снов, их названия и даты, а также сохранённые вместе с ними толкования, символы и эмоции.</li><li><strong>Иллюстрации и сводки «Паттернов»</strong>, которые вы создали.</li><li><strong>Настройки приложения</strong> — например, напоминания, блокировка Face ID и синхронизация iCloud.</li><li><strong>Статус подписки</strong> — кешированный признак доступа к Премиуму.</li></ul>
<p><strong>Голосовой ввод</strong> превращается в текст с помощью распознавания речи Apple: на вашем устройстве, если устройство и язык это поддерживают, а иначе — речевым сервисом Apple. Аудио никогда не отправляется ни нам, ни нашим поставщикам ИИ, и Приложение не хранит записи.</p>
<p>Эти данные не передаются нам, за исключением случаев, описанных в следующем разделе. Вы можете удалять записи в Приложении в любой момент; удаление Приложения стирает все данные на устройстве.</p>`,
      },
      {
        heading: `Толкования, иллюстрации и «Паттерны» с помощью ИИ`,
        content: `<p><strong>Сначала согласие.</strong> Перед первым толкованием, иллюстрацией или сводкой «Паттернов» LDream объясняет, что и куда будет отправлено, и просит вашего явного согласия. Без него ничего не отправляется. Описанные ниже данные мы обрабатываем на основании этого согласия.</p>
<p><strong>Что Приложение отправляет на наш сервер.</strong> Наш сервер — небольшой сервис, который мы размещаем в Cloudflare (Cloudflare Workers). В зависимости от функции Приложение отправляет:</p>
<ul><li><strong>Толкование</strong> — текст сна и язык интерфейса (а также язык, на котором написан сон, если Приложение его определило), чтобы ответ пришёл на вашем языке.</li><li><strong>Иллюстрация</strong> — текст сна.</li><li><strong>«Паттерны»</strong> (Премиум) — по снам выбранной недели или месяца: даты, названия, ключевые символы и эмоции. Полные тексты снов для «Паттернов» не отправляются.</li><li><strong>С каждым запросом</strong> — идентификатор устройства (идентификатор поставщика Apple, IDFV: он одинаков для всех наших приложений на вашем устройстве и не является рекламным идентификатором), версию Приложения и вашу локальную дату. Мы используем их только для соблюдения лимитов и защиты от злоупотреблений. Если у вас Премиум, Приложение также отправляет подписанную транзакцию App Store, чтобы сервер мог проверить покупку.</li></ul>
<p><strong>Что наш сервер передаёт дальше.</strong></p>
<ul><li><strong>DeepSeek</strong> — текст сна, чтобы написать толкование. Для иллюстрации DeepSeek превращает текст сна в короткое описание сцены (а если сервис изображений его отклонит — в смягчённый вариант). Для «Паттернов» DeepSeek получает перечисленные выше названия, символы и эмоции. DeepSeek обрабатывает эти запросы на серверах, расположенных в Китайской Народной Республике.</li><li><strong>fal.ai</strong> — только короткое описание сцены, чтобы нарисовать необязательную иллюстрацию. Компания fal.ai находится в США. Готовое изображение загружается на ваше устройство и сохраняется в дневнике.</li></ul>
<p>Идентификатор устройства, IP-адрес и данные о покупках никогда не передаются ни DeepSeek, ни fal.ai.</p>
<p><strong>Что хранит наш сервер.</strong> Мы не храним ваши сны, толкования и иллюстрации. Сервер хранит только псевдонимные счётчики использования, привязанные к идентификатору устройства: сколько бесплатных толкований использовано на устройстве и использована ли бесплатная иллюстрация (хранятся бессрочно, чтобы бесплатный лимит нельзя было сбросить переустановкой Приложения), а также дневное использование Премиума, которое удаляется автоматически примерно через три дня. Чтобы повтор запроса после обрыва связи не засчитывался дважды, результат запроса может кешироваться до 10 минут, после чего автоматически удаляется. IP-адрес используется лишь мгновенно — для ограничения числа запросов в минуту — и нами не сохраняется.</p>`,
      },
      {
        heading: `Синхронизация iCloud`,
        content: `<p>Если вы включите синхронизацию iCloud, дневник хранится в вашем личном аккаунте iCloud с помощью Apple CloudKit. Эти данные защищены вашим Аккаунтом Apple и недоступны нам. Удалить дневник из iCloud можно в настройках iCloud в Приложении или через управление хранилищем iCloud в Настройках iOS. Обработка данных iCloud компанией Apple регулируется Политикой конфиденциальности Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Сторонние сервисы`,
        content: `<h3>Apple (App Store, StoreKit, iCloud и распознавание речи)</h3>
<p>Покупки и подписки полностью обрабатываются Apple через App Store. Мы не получаем ваши платёжные данные, сведения об Аккаунте Apple и платёжные реквизиты. Если вы пользуетесь голосовым вводом на устройстве или на языке без распознавания речи на устройстве, аудио расшифровывает речевой сервис Apple; мы его никогда не получаем. Обработка ваших данных компанией Apple регулируется Политикой конфиденциальности Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>
<h3>Cloudflare (наш сервер)</h3>
<p>Наш сервер работает на Cloudflare Workers. Запросы передаются в зашифрованном виде и обрабатываются в глобальной сети Cloudflare, в том числе в дата-центрах за пределами вашей страны. Обработка данных компанией Cloudflare регулируется её Политикой конфиденциальности (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek (толкования, описания сцен и «Паттерны»)</h3>
<p>DeepSeek обрабатывает описанные выше данные на серверах в Китайской Народной Республике. Обработка данных компанией DeepSeek регулируется её Политикой конфиденциальности (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>fal.ai (иллюстрации)</h3>
<p>fal.ai (США) получает только короткое описание сцены, чтобы создать иллюстрацию. Обработка данных компанией fal.ai регулируется её Политикой конфиденциальности (<a href="https://fal.ai/legal/privacy-policy" target="_blank" rel="noopener noreferrer">fal.ai/legal/privacy-policy</a>).</p>
<h3>Без аналитики и рекламы</h3>
<p>Приложение не использует сторонние SDK аналитики, рекламы, отчётов о сбоях или социальных сетей. Мы не используем Firebase, Google Analytics, Facebook SDK и подобные сервисы и не отслеживаем вас в других приложениях и на сайтах.</p>`,
      },
      {
        heading: `Доступ к фотобиблиотеке`,
        content: `<p>Приложение может запросить разрешение на сохранение иллюстраций в вашу фотобиблиотеку. Это происходит, только когда вы сами решаете сохранить изображение; Приложение только добавляет изображения и не читает и не просматривает ваши существующие фотографии.</p>`,
      },
      {
        heading: `Уведомления`,
        content: `<p>Приложение может запросить разрешение на локальные уведомления, например напоминания записать сон. Они планируются на вашем устройстве и не используют внешние сервисы push-уведомлений. Управлять уведомлениями или отключить их можно в любой момент в Настройках устройства.</p>`,
      },
      {
        heading: `Конфиденциальность детей`,
        content: `<p>Приложение не предназначено для детей младше 13 лет, и мы сознательно не собираем персональные данные детей. Функции ИИ работают только после явного согласия в Приложении. Если у вас есть опасения по поводу использования Приложения ребёнком, свяжитесь с нами.</p>`,
      },
      {
        heading: `Передача данных`,
        content: `<p>Мы передаём данные только описанным выше поставщикам услуг и только для работы функций Приложения:</p>
<ul><li><strong>Cloudflare</strong> — размещает наш сервер и обрабатывает запросы к нему.</li><li><strong>DeepSeek</strong> — получает текст сна (а для «Паттернов» — названия, символы и эмоции), чтобы создавать толкования, описания сцен и сводки «Паттернов».</li><li><strong>fal.ai</strong> — получает короткое описание сцены, чтобы создавать иллюстрации.</li><li><strong>Apple</strong> — обрабатывает покупки, расшифровывает голосовой ввод своим речевым сервисом, если распознавание на устройстве недоступно, и, если вы включите синхронизацию, хранит дневник в вашем личном iCloud.</li></ul>
<p>Мы не продаём, не сдаём в аренду и не обмениваем ваши данные и не передаём их в рекламных или маркетинговых целях. Поскольку серверы DeepSeek находятся в Китайской Народной Республике, а fal.ai — в США, ваши данные могут обрабатываться в странах, законы о защите данных которых отличаются от законов вашей страны. Вы соглашаетесь на такую передачу, давая согласие в Приложении.</p>`,
      },
      {
        heading: `Безопасность данных`,
        content: `<p>Вся связь между Приложением и нашим сервером, а также между нашим сервером, DeepSeek и fal.ai шифруется по HTTPS/TLS. Поскольку мы не храним ваши сны на сервере и у нас нет аккаунтов пользователей, у нас нет базы данных вашего дневника, которая могла бы утечь. Дневник остаётся на вашем устройстве и, если вы включите синхронизацию, в вашем личном iCloud. Если вы включите блокировку Face ID, проверку выполняет iOS; Приложение никогда не получает ваши биометрические данные.</p>`,
      },
      {
        heading: `Ваши права`,
        content: `<p>Вы сохраняете контроль над своими данными:</p>
<ul><li><strong>Отзовите согласие</strong> в любой момент в настройках Приложения. После этого ничего больше не отправляется; вести и читать дневник можно и дальше.</li><li><strong>Удалите дневник</strong> — удаляйте записи в Приложении, удалите копию в iCloud в настройках iCloud в Приложении, а удаление Приложения сотрёт всё, что хранится на устройстве.</li><li><strong>Счётчики на нашем сервере</strong> не содержат содержания снов и не связаны с вашим именем или Аккаунтом Apple; дневные счётчики удаляются автоматически. Поскольку они не связаны с вами, обычно мы не можем определить, какие счётчики ваши, но вы можете обратиться к нам с любым запросом.</li><li>Данные, уже отправленные в DeepSeek или fal.ai, обрабатываются согласно их политикам конфиденциальности.</li></ul>
<p>Если у вас есть вопросы о ваших данных или вы хотите воспользоваться правами, предусмотренными законами вашей страны, свяжитесь с нами.</p>`,
      },
      {
        heading: `Изменения в настоящей Политике`,
        content: `<p>Мы можем время от времени обновлять настоящую Политику конфиденциальности. Любые изменения будут отражены на этой странице с обновлённой датой вступления в силу. Мы рекомендуем периодически просматривать эту политику.</p>`,
      },
      {
        heading: `Свяжитесь с нами`,
        content: `<p>Если у вас есть вопросы или замечания по поводу настоящей Политики конфиденциальности, свяжитесь с нами:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  de: {
    title: `Datenschutzrichtlinie`,
    effectiveDate: `Gültig ab: 5. Oktober 2026`,
    intro: `Bogdan Nikishin, ein unabhängiger Entwickler („wir“, „unser“ oder „uns“), hat <strong>LDream</strong> („die App“) als kommerzielle Anwendung entwickelt. Diese Datenschutzrichtlinie erklärt, welche Informationen die App verarbeitet, was auf Ihrem Gerät bleibt und was wohin und wozu gesendet wird, wenn Sie ihre optionalen KI-Funktionen nutzen.`,
    sections: [
      {
        heading: `Überblick`,
        content: `<p>LDream ist ein privates Traumtagebuch zur Selbstreflexion. Die App erfordert kein Konto, keine Anmeldung und keine Registrierung, enthält keine Werbung und keine Analyse- oder Tracking-SDKs. Ihr Tagebuch wird auf Ihrem Gerät gespeichert und, wenn Sie die Synchronisierung aktivieren, in Ihrem privaten iCloud-Konto. Deutungen, Illustrationen und Muster sind optional: Sie funktionieren erst, nachdem Sie in der App ausdrücklich zugestimmt haben, und senden nur die in dieser Richtlinie beschriebenen Daten.</p>`,
      },
      {
        heading: `Informationen, die wir nicht erfassen`,
        content: `<p>Wir erfassen keine der folgenden Daten:</p>
<ul><li>Namen, E-Mail-Adressen oder Kontaktdaten (es sei denn, Sie schreiben uns)</li><li>Konten oder Passwörter – die App hat keine Konten</li><li>Standortdaten</li><li>Die Werbe-ID (IDFA) oder andere Kennungen, mit denen Sie über Apps und Websites hinweg verfolgt werden könnten</li><li>Kontakte, Fotos oder andere persönliche Dateien</li><li>Sprachaufnahmen</li><li>Nutzungsanalysen oder Daten zur Verhaltensverfolgung</li></ul>`,
      },
      {
        heading: `Auf Ihrem Gerät gespeicherte Daten`,
        content: `<p>Die App speichert folgende Daten lokal auf Ihrem Gerät:</p>
<ul><li><strong>Traumtagebuch-Einträge</strong> – die Texte Ihrer Träume, ihre Titel und Daten sowie die damit gespeicherten Deutungen, Symbole und Gefühle.</li><li><strong>Illustrationen und Muster-Übersichten</strong>, die Sie erstellt haben.</li><li><strong>App-Einstellungen</strong> – etwa Erinnerungen, die Face-ID-Sperre und die iCloud-Synchronisierung.</li><li><strong>Abo-Status</strong> – ein zwischengespeicherter Hinweis auf Ihren Premium-Zugang.</li></ul>
<p><strong>Spracheingaben</strong> werden von der Spracherkennung von Apple in Text umgewandelt: auf Ihrem Gerät, wenn Gerät und Sprache dies unterstützen, andernfalls durch den Sprachdienst von Apple. Die Audiodaten werden niemals an uns oder an unsere KI-Anbieter gesendet, und die App speichert keine Aufnahmen.</p>
<p>Diese Daten werden nicht an uns übertragen, außer wie im nächsten Abschnitt beschrieben. Sie können Einträge jederzeit in der App löschen; beim Löschen der App werden alle auf dem Gerät gespeicherten Daten entfernt.</p>`,
      },
      {
        heading: `KI-Deutungen, Illustrationen und Muster`,
        content: `<p><strong>Zuerst Ihre Zustimmung.</strong> Vor der ersten Deutung, Illustration oder Muster-Übersicht erklärt LDream, was wohin gesendet wird, und bittet um Ihre ausdrückliche Zustimmung. Ohne sie wird nichts gesendet. Die unten beschriebenen Daten verarbeiten wir auf Grundlage dieser Einwilligung.</p>
<p><strong>Was die App an unseren Server sendet.</strong> Unser Server ist ein kleiner Dienst, den wir bei Cloudflare (Cloudflare Workers) betreiben. Je nach Funktion sendet die App:</p>
<ul><li><strong>Deutung</strong> – den Text des Traums und Ihre Oberflächensprache (sowie, falls die App sie erkennt, die Sprache, in der der Traum geschrieben ist), damit die Antwort in Ihrer Sprache kommt.</li><li><strong>Illustration</strong> – den Text des Traums.</li><li><strong>Muster</strong> (Premium) – für die Träume der gewählten Woche oder des gewählten Monats: Datum, Titel, wichtigste Symbole und Gefühle. Die vollständigen Traumtexte werden für Muster nicht gesendet.</li><li><strong>Mit jeder Anfrage</strong> – eine Gerätekennung (Apples Identifier for Vendor, IDFV; sie ist für alle unsere Apps auf Ihrem Gerät gleich und nicht die Werbe-ID), die App-Version und Ihr lokales Datum. Wir nutzen sie ausschließlich für Nutzungslimits und zum Schutz vor Missbrauch. Wenn Sie Premium haben, sendet die App zusätzlich die signierte App-Store-Transaktion, damit unser Server Ihren Kauf prüfen kann.</li></ul>
<p><strong>Was unser Server weiterleitet.</strong></p>
<ul><li><strong>DeepSeek</strong> – den Traumtext, um die Deutung zu schreiben. Für eine Illustration macht DeepSeek aus dem Traumtext eine kurze Szenenbeschreibung (und, falls der Bilddienst sie ablehnt, eine abgeschwächte Fassung). Für Muster erhält DeepSeek die oben genannten Titel, Symbole und Gefühle. DeepSeek verarbeitet diese Anfragen auf Servern in der Volksrepublik China.</li><li><strong>fal.ai</strong> – nur die kurze Szenenbeschreibung, um die optionale Illustration zu zeichnen. fal.ai hat seinen Sitz in den USA. Das fertige Bild wird auf Ihr Gerät geladen und in Ihrem Tagebuch gespeichert.</li></ul>
<p>Ihre Gerätekennung, Ihre IP-Adresse und Ihre Kaufdaten werden niemals an DeepSeek oder fal.ai weitergegeben.</p>
<p><strong>Was unser Server speichert.</strong> Wir speichern weder Ihre Träume noch Deutungen oder Illustrationen. Der Server speichert nur pseudonyme Nutzungszähler, die mit der Gerätekennung verknüpft sind: wie viele kostenlose Deutungen das Gerät genutzt hat und ob seine kostenlose Illustration verbraucht ist (unbefristet, damit sich das Gratiskontingent nicht durch Neuinstallation zurücksetzen lässt), sowie die tägliche Premium-Nutzung, die nach etwa drei Tagen automatisch gelöscht wird. Damit eine Wiederholung nach einem Verbindungsabbruch nicht doppelt zählt, kann das Ergebnis einer Anfrage bis zu 10 Minuten zwischengespeichert werden und wird danach automatisch gelöscht. Ihre IP-Adresse wird nur kurzzeitig verwendet, um die Zahl der Anfragen pro Minute zu begrenzen, und von uns nicht gespeichert.</p>`,
      },
      {
        heading: `iCloud-Synchronisierung`,
        content: `<p>Wenn Sie die iCloud-Synchronisierung aktivieren, wird Ihr Tagebuch mit Apples CloudKit in Ihrem privaten iCloud-Konto gespeichert. Diese Daten sind durch Ihren Apple Account geschützt und für uns nicht zugänglich. Sie können Ihr Tagebuch in den iCloud-Einstellungen der App oder über die Verwaltung Ihres iCloud-Speichers in den iOS-Einstellungen aus iCloud löschen. Apples Umgang mit iCloud-Daten unterliegt der Datenschutzrichtlinie von Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Drittanbieterdienste`,
        content: `<h3>Apple (App Store, StoreKit, iCloud und Spracherkennung)</h3>
<p>Käufe und Abonnements werden vollständig von Apple über den App Store abgewickelt. Wir erhalten weder Ihre Zahlungsdaten noch Angaben zu Ihrem Apple Account oder Rechnungsdaten. Wenn Sie die Spracheingabe auf einem Gerät oder in einer Sprache ohne Spracherkennung auf dem Gerät nutzen, wandelt der Sprachdienst von Apple die Audiodaten in Text um; wir erhalten sie nie. Apples Umgang mit Ihren Daten unterliegt der Datenschutzrichtlinie von Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>
<h3>Cloudflare (unser Server)</h3>
<p>Unser Server läuft auf Cloudflare Workers. Anfragen werden verschlüsselt übertragen und im weltweiten Netzwerk von Cloudflare verarbeitet, auch in Rechenzentren außerhalb Ihres Landes. Cloudflares Umgang mit Daten unterliegt seiner Datenschutzrichtlinie (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek (Deutungen, Szenenbeschreibungen und Muster)</h3>
<p>DeepSeek verarbeitet die oben beschriebenen Daten auf Servern in der Volksrepublik China. DeepSeeks Umgang mit Daten unterliegt seiner Datenschutzrichtlinie (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>fal.ai (Illustrationen)</h3>
<p>fal.ai mit Sitz in den USA erhält nur die kurze Szenenbeschreibung, um die Illustration zu erzeugen. Der Umgang von fal.ai mit Daten unterliegt seiner Datenschutzrichtlinie (<a href="https://fal.ai/legal/privacy-policy" target="_blank" rel="noopener noreferrer">fal.ai/legal/privacy-policy</a>).</p>
<h3>Keine Analyse, keine Werbung</h3>
<p>Die App enthält keine Analyse-, Werbe-, Absturzbericht- oder Social-Media-SDKs von Drittanbietern. Wir verwenden weder Firebase noch Google Analytics, Facebook SDK oder ähnliche Dienste und verfolgen Sie nicht über Apps oder Websites hinweg.</p>`,
      },
      {
        heading: `Zugriff auf die Fotobibliothek`,
        content: `<p>Die App kann um Erlaubnis bitten, Illustrationen in Ihrer Fotobibliothek zu speichern. Das geschieht nur, wenn Sie ein Bild speichern möchten; die App fügt nur Bilder hinzu und liest oder öffnet Ihre vorhandenen Fotos nicht.</p>`,
      },
      {
        heading: `Benachrichtigungen`,
        content: `<p>Die App kann um Erlaubnis für lokale Benachrichtigungen bitten, etwa Erinnerungen, einen Traum festzuhalten. Sie werden auf Ihrem Gerät geplant und nutzen keinen externen Push-Dienst. Sie können sie jederzeit in den Einstellungen Ihres Geräts verwalten oder deaktivieren.</p>`,
      },
      {
        heading: `Datenschutz für Kinder`,
        content: `<p>Die App richtet sich nicht an Kinder unter 13 Jahren, und wir erheben wissentlich keine personenbezogenen Daten von Kindern. KI-Funktionen arbeiten erst nach ausdrücklicher Zustimmung in der App. Wenn Sie Bedenken bezüglich der Nutzung der App durch ein Kind haben, kontaktieren Sie uns bitte.</p>`,
      },
      {
        heading: `Datenweitergabe`,
        content: `<p>Wir geben Daten nur an die oben beschriebenen Dienstleister weiter und nur, um die Funktionen der App bereitzustellen:</p>
<ul><li><strong>Cloudflare</strong> – betreibt unseren Server und verarbeitet die Anfragen an ihn.</li><li><strong>DeepSeek</strong> – erhält den Traumtext (bei Mustern: Titel, Symbole und Gefühle), um Deutungen, Szenenbeschreibungen und Muster-Übersichten zu erstellen.</li><li><strong>fal.ai</strong> – erhält eine kurze Szenenbeschreibung, um Illustrationen zu erstellen.</li><li><strong>Apple</strong> – wickelt Käufe ab, wandelt Spracheingaben mit seinem Sprachdienst in Text um, wenn keine Spracherkennung auf dem Gerät verfügbar ist, und speichert, wenn Sie die Synchronisierung aktivieren, Ihr Tagebuch in Ihrer privaten iCloud.</li></ul>
<p>Wir verkaufen, vermieten oder tauschen Ihre Daten nicht und geben sie nicht für Werbung oder Marketing weiter. Da sich die Server von DeepSeek in der Volksrepublik China befinden und fal.ai in den USA ansässig ist, können Ihre Daten in Ländern verarbeitet werden, deren Datenschutzrecht sich von dem Ihres Landes unterscheidet. Dieser Übermittlung stimmen Sie mit Ihrer Einwilligung in der App zu.</p>`,
      },
      {
        heading: `Datensicherheit`,
        content: `<p>Die gesamte Kommunikation zwischen der App und unserem Server sowie zwischen unserem Server und DeepSeek und fal.ai ist per HTTPS/TLS verschlüsselt. Da wir Ihre Träume nicht auf unserem Server speichern und keine Benutzerkonten führen, gibt es bei uns keine Datenbank Ihres Tagebuchs, die kompromittiert werden könnte. Ihr Tagebuch bleibt auf Ihrem Gerät und, wenn Sie die Synchronisierung aktivieren, in Ihrer privaten iCloud. Wenn Sie die Face-ID-Sperre aktivieren, übernimmt iOS die Authentifizierung; die App erhält niemals Ihre biometrischen Daten.</p>`,
      },
      {
        heading: `Ihre Rechte`,
        content: `<p>Sie behalten die Kontrolle über Ihre Daten:</p>
<ul><li><strong>Widerrufen Sie Ihre Einwilligung</strong> jederzeit in den Einstellungen der App. Danach wird nichts mehr gesendet; Sie können Ihr Tagebuch weiter führen und lesen.</li><li><strong>Löschen Sie Ihr Tagebuch</strong> – löschen Sie Einträge in der App und die iCloud-Kopie in den iCloud-Einstellungen der App; wenn Sie die App löschen, wird alles auf dem Gerät entfernt.</li><li><strong>Zähler auf unserem Server</strong> enthalten keine Trauminhalte und sind nicht mit Ihrem Namen oder Apple Account verknüpft; Tageszähler verfallen automatisch. Da sie nicht mit Ihnen verknüpft sind, können wir in der Regel nicht feststellen, welche Zähler Ihnen gehören; Sie können sich aber mit jedem Anliegen an uns wenden.</li><li>Bereits an DeepSeek oder fal.ai gesendete Daten unterliegen deren Datenschutzrichtlinien.</li></ul>
<p>Wenn Sie Fragen zu Ihren Daten haben oder Ihre Rechte nach dem Recht Ihres Landes ausüben möchten, kontaktieren Sie uns bitte.</p>`,
      },
      {
        heading: `Änderungen dieser Richtlinie`,
        content: `<p>Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit einem aktualisierten Gültigkeitsdatum angezeigt. Wir empfehlen Ihnen, diese Richtlinie regelmäßig zu überprüfen.</p>`,
      },
      {
        heading: `Kontaktieren Sie uns`,
        content: `<p>Wenn Sie Fragen oder Bedenken zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns unter:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  fr: {
    title: `Politique de confidentialité`,
    effectiveDate: `Date d'entrée en vigueur : 5 octobre 2026`,
    intro: `Bogdan Nikishin, développeur indépendant (« nous », « notre » ou « nos »), a développé <strong>LDream</strong> (« l'Application ») en tant qu'application commerciale. La présente Politique de confidentialité explique quelles informations l'Application traite, ce qui reste sur votre appareil, et ce qui est envoyé, où et pourquoi lorsque vous utilisez ses fonctions d'IA facultatives.`,
    sections: [
      {
        heading: `Aperçu`,
        content: `<p>LDream est un journal de rêves privé, pensé pour l'introspection. L'Application ne nécessite ni compte, ni connexion, ni inscription ; elle ne contient aucune publicité et n'intègre aucun SDK d'analyse ou de pistage. Votre journal est stocké sur votre appareil et, si vous activez la synchronisation, dans votre compte iCloud privé. Les interprétations, les illustrations et les Motifs sont facultatifs : ils ne fonctionnent qu'après votre consentement explicite dans l'Application et n'envoient que les données décrites dans cette politique.</p>`,
      },
      {
        heading: `Informations que nous ne collectons pas`,
        content: `<p>Nous ne collectons aucune des données suivantes :</p>
<ul><li>Noms, adresses e-mail ou coordonnées (sauf si vous nous écrivez)</li><li>Comptes ou mots de passe — l'Application n'a pas de comptes</li><li>Données de localisation</li><li>L'identifiant publicitaire (IDFA) ou tout identifiant servant à vous suivre d'une app ou d'un site à l'autre</li><li>Contacts, photos ou autres fichiers personnels</li><li>Enregistrements vocaux</li><li>Données d'analyse d'utilisation ou de suivi comportemental</li></ul>`,
      },
      {
        heading: `Données stockées sur votre appareil`,
        content: `<p>L'Application stocke localement sur votre appareil les données suivantes :</p>
<ul><li><strong>Entrées du journal</strong> — le texte de vos rêves, leurs titres et dates, ainsi que les interprétations, symboles et émotions enregistrés avec eux.</li><li><strong>Illustrations et bilans des Motifs</strong> que vous avez créés.</li><li><strong>Préférences</strong> — par exemple les rappels, le verrouillage Face ID et la synchronisation iCloud.</li><li><strong>Statut d'abonnement</strong> — un indicateur en cache de votre accès Premium.</li></ul>
<p>La <strong>saisie vocale</strong> est transcrite en texte par la reconnaissance vocale d'Apple : sur votre appareil lorsque l'appareil et la langue le permettent, sinon par le service vocal d'Apple. L'audio n'est jamais envoyé, ni à nous ni à nos fournisseurs d'IA, et l'Application ne conserve pas les enregistrements.</p>
<p>Ces données ne nous sont pas transmises, sauf dans les cas décrits dans la section suivante. Vous pouvez supprimer des entrées dans l'Application à tout moment ; supprimer l'Application efface toutes les données stockées sur l'appareil.</p>`,
      },
      {
        heading: `Interprétations, illustrations et Motifs par IA`,
        content: `<p><strong>D'abord votre consentement.</strong> Avant la première interprétation, la première illustration ou le premier bilan des Motifs, LDream explique ce qui sera envoyé et où, et vous demande votre consentement explicite. Sans lui, rien n'est envoyé. Nous traitons les données décrites ci-dessous sur la base de ce consentement.</p>
<p><strong>Ce que l'Application envoie à notre serveur.</strong> Notre serveur est un petit service que nous exploitons chez Cloudflare (Cloudflare Workers). Selon la fonction utilisée, l'Application envoie :</p>
<ul><li><strong>Interprétation</strong> — le texte du rêve et la langue de l'interface (ainsi que la langue dans laquelle le rêve est écrit, si l'Application la détecte), afin que la réponse soit dans votre langue.</li><li><strong>Illustration</strong> — le texte du rêve.</li><li><strong>Motifs</strong> (Premium) — pour les rêves de la semaine ou du mois choisi : leurs dates, titres, symboles clés et émotions. Le texte complet de vos rêves n'est pas envoyé pour les Motifs.</li><li><strong>Avec chaque requête</strong> — un identifiant de l'appareil (l'identifiant pour les fournisseurs d'Apple, IDFV ; il est identique pour toutes nos apps sur votre appareil et n'est pas l'identifiant publicitaire), la version de l'Application et votre date locale. Nous les utilisons uniquement pour appliquer les limites d'utilisation et prévenir les abus. Si vous avez Premium, l'Application envoie aussi la transaction App Store signée afin que notre serveur puisse vérifier votre achat.</li></ul>
<p><strong>Ce que notre serveur transmet.</strong></p>
<ul><li><strong>DeepSeek</strong> — le texte du rêve, pour rédiger l'interprétation. Pour une illustration, DeepSeek transforme le texte du rêve en une courte description de scène (et, si le service d'images la refuse, en une version adoucie). Pour les Motifs, DeepSeek reçoit les titres, symboles et émotions mentionnés ci-dessus. DeepSeek traite ces requêtes sur des serveurs situés en République populaire de Chine.</li><li><strong>fal.ai</strong> — uniquement la courte description de scène, pour dessiner l'illustration facultative. fal.ai est établie aux États-Unis. L'image terminée est téléchargée sur votre appareil et enregistrée dans votre journal.</li></ul>
<p>Votre identifiant d'appareil, votre adresse IP et les détails de vos achats ne sont jamais transmis à DeepSeek ni à fal.ai.</p>
<p><strong>Ce que notre serveur conserve.</strong> Nous ne conservons ni vos rêves, ni les interprétations, ni les illustrations. Le serveur ne stocke que des compteurs d'utilisation pseudonymes liés à l'identifiant de l'appareil : le nombre d'interprétations gratuites utilisées sur l'appareil et l'utilisation ou non de son illustration gratuite (conservés sans limite de durée, afin que le quota gratuit ne puisse pas être réinitialisé en réinstallant l'Application), ainsi que l'utilisation quotidienne de Premium, supprimée automatiquement après environ trois jours. Pour qu'une nouvelle tentative après une coupure de connexion ne compte pas deux fois, le résultat d'une requête peut être mis en cache jusqu'à 10 minutes, puis il est supprimé automatiquement. Votre adresse IP n'est utilisée que brièvement pour limiter le nombre de requêtes par minute et n'est pas conservée par nous.</p>`,
      },
      {
        heading: `Synchronisation iCloud`,
        content: `<p>Si vous activez la synchronisation iCloud, votre journal est stocké dans votre compte iCloud privé grâce à CloudKit d'Apple. Ces données sont protégées par votre compte Apple et ne nous sont pas accessibles. Vous pouvez supprimer votre journal d'iCloud dans les réglages iCloud de l'Application, ou en gérant votre stockage iCloud dans les Réglages d'iOS. Le traitement des données iCloud par Apple est régi par la politique de confidentialité d'Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Services tiers`,
        content: `<h3>Apple (App Store, StoreKit, iCloud et reconnaissance vocale)</h3>
<p>Les achats et abonnements sont traités entièrement par Apple via l'App Store. Nous ne recevons ni vos informations de paiement, ni les détails de votre compte Apple, ni vos données de facturation. Si vous utilisez la saisie vocale sur un appareil ou dans une langue sans reconnaissance vocale sur l'appareil, le service vocal d'Apple transcrit l'audio ; nous ne le recevons jamais. Le traitement de vos données par Apple est régi par la politique de confidentialité d'Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>
<h3>Cloudflare (notre serveur)</h3>
<p>Notre serveur fonctionne sur Cloudflare Workers. Les requêtes sont chiffrées pendant leur transfert et traitées sur le réseau mondial de Cloudflare, y compris dans des centres de données situés hors de votre pays. Le traitement des données par Cloudflare est régi par sa politique de confidentialité (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek (interprétations, descriptions de scène et Motifs)</h3>
<p>DeepSeek traite les données décrites ci-dessus sur des serveurs situés en République populaire de Chine. Le traitement des données par DeepSeek est régi par sa politique de confidentialité (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>fal.ai (illustrations)</h3>
<p>fal.ai, établie aux États-Unis, ne reçoit que la courte description de scène pour générer l'illustration. Le traitement des données par fal.ai est régi par sa politique de confidentialité (<a href="https://fal.ai/legal/privacy-policy" target="_blank" rel="noopener noreferrer">fal.ai/legal/privacy-policy</a>).</p>
<h3>Ni analyse, ni publicité</h3>
<p>L'Application n'intègre aucun SDK tiers d'analyse, de publicité, de rapport de plantage ou de réseaux sociaux. Nous n'utilisons ni Firebase, ni Google Analytics, ni le SDK Facebook, ni aucun service similaire, et nous ne vous suivons pas d'une app ou d'un site à l'autre.</p>`,
      },
      {
        heading: `Accès à la photothèque`,
        content: `<p>L'Application peut demander l'autorisation d'enregistrer des illustrations dans votre photothèque. Cela n'arrive que lorsque vous choisissez d'enregistrer une image ; l'Application ne fait qu'ajouter des images et ne lit ni n'accède à vos photos existantes.</p>`,
      },
      {
        heading: `Notifications`,
        content: `<p>L'Application peut demander l'autorisation d'envoyer des notifications locales, par exemple des rappels pour noter vos rêves. Elles sont programmées sur votre appareil et n'utilisent aucun service de notifications push externe. Vous pouvez les gérer ou les désactiver à tout moment dans les Réglages de votre appareil.</p>`,
      },
      {
        heading: `Confidentialité des enfants`,
        content: `<p>L'Application ne s'adresse pas aux enfants de moins de 13 ans, et nous ne collectons pas sciemment de données personnelles d'enfants. Les fonctions d'IA ne fonctionnent qu'après un consentement explicite dans l'Application. Si l'utilisation de l'Application par un enfant vous préoccupe, contactez-nous.</p>`,
      },
      {
        heading: `Partage de données`,
        content: `<p>Nous ne partageons des données qu'avec les prestataires décrits ci-dessus, et uniquement pour fournir les fonctions de l'Application :</p>
<ul><li><strong>Cloudflare</strong> — héberge notre serveur et traite les requêtes qui lui sont adressées.</li><li><strong>DeepSeek</strong> — reçoit le texte du rêve (ou, pour les Motifs, les titres, symboles et émotions) pour créer les interprétations, les descriptions de scène et les bilans des Motifs.</li><li><strong>fal.ai</strong> — reçoit une courte description de scène pour créer les illustrations.</li><li><strong>Apple</strong> — traite les achats, transcrit la saisie vocale avec son service vocal lorsque la reconnaissance sur l'appareil n'est pas disponible et, si vous activez la synchronisation, stocke votre journal dans votre iCloud privé.</li></ul>
<p>Nous ne vendons, ne louons ni n'échangeons vos données, et nous ne les partageons pas à des fins publicitaires ou marketing. Comme les serveurs de DeepSeek se trouvent en République populaire de Chine et que fal.ai est établie aux États-Unis, vos données peuvent être traitées dans des pays dont les lois sur la protection des données diffèrent de celles de votre pays. Vous acceptez ce transfert en donnant votre consentement dans l'Application.</p>`,
      },
      {
        heading: `Sécurité des données`,
        content: `<p>Toutes les communications entre l'Application et notre serveur, ainsi qu'entre notre serveur, DeepSeek et fal.ai, sont chiffrées en HTTPS/TLS. Comme nous ne conservons pas vos rêves sur notre serveur et n'avons pas de comptes utilisateurs, il n'existe de notre côté aucune base de données de votre journal susceptible d'être compromise. Votre journal reste sur votre appareil et, si vous activez la synchronisation, dans votre iCloud privé. Si vous activez le verrouillage Face ID, l'authentification est gérée par iOS ; l'Application ne reçoit jamais vos données biométriques.</p>`,
      },
      {
        heading: `Vos droits`,
        content: `<p>Vous gardez le contrôle de vos données :</p>
<ul><li><strong>Retirez votre consentement</strong> à tout moment dans les réglages de l'Application. Ensuite, plus rien n'est envoyé ; vous pouvez continuer à écrire et à lire votre journal.</li><li><strong>Supprimez votre journal</strong> — supprimez des entrées dans l'Application, supprimez la copie iCloud dans les réglages iCloud de l'Application, et supprimez l'Application pour effacer tout ce qui est stocké sur l'appareil.</li><li><strong>Les compteurs sur notre serveur</strong> ne contiennent aucun contenu de rêve et ne sont liés ni à votre nom ni à votre compte Apple ; les compteurs quotidiens expirent automatiquement. Comme ils ne sont pas liés à vous, nous ne pouvons généralement pas savoir lesquels sont les vôtres, mais vous pouvez nous adresser toute demande.</li><li>Les données déjà envoyées à DeepSeek ou à fal.ai sont traitées selon leurs politiques de confidentialité.</li></ul>
<p>Si vous avez des questions sur vos données ou souhaitez exercer les droits que vous confère la loi de votre pays, contactez-nous.</p>`,
      },
      {
        heading: `Modifications de cette politique`,
        content: `<p>Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre. Toute modification sera reflétée sur cette page avec une date d'entrée en vigueur mise à jour. Nous vous encourageons à consulter cette politique régulièrement.</p>`,
      },
      {
        heading: `Nous contacter`,
        content: `<p>Si vous avez des questions ou des préoccupations concernant cette Politique de confidentialité, veuillez nous contacter à :</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  es: {
    title: `Política de privacidad`,
    effectiveDate: `Fecha de vigencia: 5 de octubre de 2026`,
    intro: `Bogdan Nikishin, desarrollador independiente ("nosotros", "nuestro" o "nos"), ha desarrollado <strong>LDream</strong> ("la Aplicación") como una aplicación comercial. Esta Política de privacidad explica qué información trata la Aplicación, qué permanece en su dispositivo y qué se envía, adónde y por qué cuando utiliza sus funciones opcionales de IA.`,
    sections: [
      {
        heading: `Descripción general`,
        content: `<p>LDream es un diario de sueños privado para la reflexión personal. La Aplicación no requiere cuenta, inicio de sesión ni registro, no contiene publicidad y no incluye SDK de analítica ni de rastreo. Su diario se guarda en su dispositivo y, si activa la sincronización, en su cuenta privada de iCloud. Las interpretaciones, las ilustraciones y Patrones son opcionales: solo funcionan después de que usted dé su consentimiento explícito en la Aplicación y solo envían los datos descritos en esta política.</p>`,
      },
      {
        heading: `Información que no recopilamos`,
        content: `<p>No recopilamos ninguno de los siguientes datos:</p>
<ul><li>Nombres, direcciones de correo electrónico o datos de contacto (salvo que usted nos escriba)</li><li>Cuentas o contraseñas: la Aplicación no tiene cuentas</li><li>Datos de ubicación</li><li>El identificador publicitario (IDFA) ni ningún identificador para rastrearle entre apps y sitios web</li><li>Contactos, fotos u otros archivos personales</li><li>Grabaciones de voz</li><li>Analíticas de uso o datos de seguimiento del comportamiento</li></ul>`,
      },
      {
        heading: `Datos almacenados en su dispositivo`,
        content: `<p>La Aplicación guarda localmente en su dispositivo los siguientes datos:</p>
<ul><li><strong>Entradas del diario</strong> — el texto de sus sueños, sus títulos y fechas, y las interpretaciones, símbolos y emociones guardados con ellos.</li><li><strong>Ilustraciones y resúmenes de Patrones</strong> que haya creado.</li><li><strong>Preferencias</strong> — por ejemplo, recordatorios, el bloqueo con Face ID y la sincronización con iCloud.</li><li><strong>Estado de la suscripción</strong> — un indicador en caché de su acceso Premium.</li></ul>
<p>La <strong>entrada por voz</strong> se transcribe a texto mediante el reconocimiento de voz de Apple: en su dispositivo cuando el dispositivo y el idioma lo admiten y, si no, mediante el servicio de voz de Apple. El audio nunca se envía a nosotros ni a nuestros proveedores de IA, y la Aplicación no guarda las grabaciones.</p>
<p>Estos datos no se nos transmiten, salvo en los casos descritos en la sección siguiente. Puede eliminar entradas en la Aplicación en cualquier momento; al eliminar la Aplicación se borran todos los datos guardados en el dispositivo.</p>`,
      },
      {
        heading: `Interpretaciones, ilustraciones y Patrones con IA`,
        content: `<p><strong>Primero, su consentimiento.</strong> Antes de la primera interpretación, ilustración o resumen de Patrones, LDream le explica qué se enviará y adónde, y le pide su consentimiento explícito. Sin él, no se envía nada. Tratamos los datos descritos a continuación sobre la base de ese consentimiento.</p>
<p><strong>Qué envía la Aplicación a nuestro servidor.</strong> Nuestro servidor es un pequeño servicio que operamos en Cloudflare (Cloudflare Workers). Según la función que utilice, la Aplicación envía:</p>
<ul><li><strong>Interpretación</strong> — el texto del sueño y el idioma de la interfaz (y, si la Aplicación lo detecta, el idioma en que está escrito el sueño), para que la respuesta llegue en su idioma.</li><li><strong>Ilustración</strong> — el texto del sueño.</li><li><strong>Patrones</strong> (Premium) — de los sueños de la semana o el mes elegidos: sus fechas, títulos, símbolos clave y emociones. Para Patrones no se envía el texto completo de sus sueños.</li><li><strong>Con cada solicitud</strong> — un identificador del dispositivo (el identificador para proveedores de Apple, IDFV, que es el mismo para todas nuestras apps en su dispositivo y no es el identificador publicitario), la versión de la Aplicación y su fecha local. Los usamos únicamente para aplicar los límites de uso y prevenir abusos. Si tiene Premium, la Aplicación también envía la transacción firmada del App Store para que nuestro servidor pueda verificar su compra.</li></ul>
<p><strong>Qué reenvía nuestro servidor.</strong></p>
<ul><li><strong>DeepSeek</strong> — el texto del sueño, para redactar la interpretación. Para una ilustración, DeepSeek convierte el texto del sueño en una breve descripción de la escena (y, si el servicio de imágenes la rechaza, en una versión suavizada). Para Patrones, DeepSeek recibe los títulos, símbolos y emociones indicados arriba. DeepSeek procesa estas solicitudes en servidores ubicados en la República Popular China.</li><li><strong>fal.ai</strong> — solo la breve descripción de la escena, para dibujar la ilustración opcional. fal.ai tiene su sede en Estados Unidos. La imagen terminada se descarga en su dispositivo y se guarda en su diario.</li></ul>
<p>Su identificador de dispositivo, su dirección IP y los datos de sus compras nunca se transmiten a DeepSeek ni a fal.ai.</p>
<p><strong>Qué conserva nuestro servidor.</strong> No conservamos sus sueños, interpretaciones ni ilustraciones. El servidor solo guarda contadores de uso seudónimos vinculados al identificador del dispositivo: cuántas interpretaciones gratuitas ha usado el dispositivo y si ya usó su ilustración gratuita (se conservan sin límite de tiempo para que la cuota gratuita no pueda restablecerse reinstalando la Aplicación), y el uso diario de Premium, que se elimina automáticamente al cabo de unos tres días. Para que un reintento tras una conexión perdida no cuente dos veces, el resultado de una solicitud puede almacenarse en caché hasta 10 minutos y después se elimina automáticamente. Su dirección IP solo se usa momentáneamente para limitar el número de solicitudes por minuto y no la conservamos.</p>`,
      },
      {
        heading: `Sincronización de iCloud`,
        content: `<p>Si activa la sincronización con iCloud, su diario se guarda en su cuenta privada de iCloud mediante CloudKit de Apple. Estos datos están protegidos por su cuenta de Apple y no son accesibles para nosotros. Puede eliminar su diario de iCloud en los ajustes de iCloud de la Aplicación o gestionando el almacenamiento de iCloud en los Ajustes de iOS. El tratamiento de los datos de iCloud por parte de Apple se rige por la Política de privacidad de Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Servicios de terceros`,
        content: `<h3>Apple (App Store, StoreKit, iCloud y reconocimiento de voz)</h3>
<p>Las compras y suscripciones las procesa íntegramente Apple a través del App Store. No recibimos su información de pago, los datos de su cuenta de Apple ni sus datos de facturación. Si usa la entrada por voz en un dispositivo o en un idioma sin reconocimiento de voz en el dispositivo, el servicio de voz de Apple transcribe el audio; nosotros nunca lo recibimos. El tratamiento de sus datos por parte de Apple se rige por la Política de privacidad de Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>
<h3>Cloudflare (nuestro servidor)</h3>
<p>Nuestro servidor funciona en Cloudflare Workers. Las solicitudes viajan cifradas y se procesan en la red global de Cloudflare, incluidos centros de datos fuera de su país. El tratamiento de datos por parte de Cloudflare se rige por su política de privacidad (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek (interpretaciones, descripciones de escena y Patrones)</h3>
<p>DeepSeek procesa los datos descritos arriba en servidores ubicados en la República Popular China. El tratamiento de datos por parte de DeepSeek se rige por su política de privacidad (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>fal.ai (ilustraciones)</h3>
<p>fal.ai, con sede en Estados Unidos, solo recibe la breve descripción de la escena para generar la ilustración. El tratamiento de datos por parte de fal.ai se rige por su política de privacidad (<a href="https://fal.ai/legal/privacy-policy" target="_blank" rel="noopener noreferrer">fal.ai/legal/privacy-policy</a>).</p>
<h3>Sin analítica ni publicidad</h3>
<p>La Aplicación no integra SDK de terceros de analítica, publicidad, informes de fallos ni redes sociales. No utilizamos Firebase, Google Analytics, Facebook SDK ni servicios similares, y no le rastreamos entre apps o sitios web.</p>`,
      },
      {
        heading: `Acceso a la fototeca`,
        content: `<p>La Aplicación puede pedir permiso para guardar ilustraciones en su fototeca. Solo ocurre cuando usted decide guardar una imagen; la Aplicación solo añade imágenes y no lee ni accede a sus fotos existentes.</p>`,
      },
      {
        heading: `Notificaciones`,
        content: `<p>La Aplicación puede pedir permiso para enviar notificaciones locales, por ejemplo recordatorios para anotar sus sueños. Se programan en su dispositivo y no utilizan ningún servicio externo de notificaciones push. Puede gestionarlas o desactivarlas en cualquier momento en los Ajustes de su dispositivo.</p>`,
      },
      {
        heading: `Privacidad infantil`,
        content: `<p>La Aplicación no está dirigida a menores de 13 años y no recopilamos a sabiendas datos personales de menores. Las funciones de IA solo funcionan tras un consentimiento explícito en la Aplicación. Si le preocupa el uso de la Aplicación por parte de un menor, contáctenos.</p>`,
      },
      {
        heading: `Compartición de datos`,
        content: `<p>Solo compartimos datos con los proveedores descritos arriba y únicamente para ofrecer las funciones de la Aplicación:</p>
<ul><li><strong>Cloudflare</strong> — aloja nuestro servidor y procesa las solicitudes que recibe.</li><li><strong>DeepSeek</strong> — recibe el texto del sueño (o, para Patrones, títulos, símbolos y emociones) para crear interpretaciones, descripciones de escena y resúmenes de Patrones.</li><li><strong>fal.ai</strong> — recibe una breve descripción de la escena para crear ilustraciones.</li><li><strong>Apple</strong> — procesa las compras, transcribe la entrada por voz con su servicio de voz cuando el reconocimiento en el dispositivo no está disponible y, si activa la sincronización, guarda su diario en su iCloud privado.</li></ul>
<p>No vendemos, alquilamos ni intercambiamos sus datos, ni los compartimos con fines publicitarios o de marketing. Como los servidores de DeepSeek están en la República Popular China y fal.ai tiene su sede en Estados Unidos, sus datos pueden tratarse en países cuyas leyes de protección de datos difieren de las de su país. Usted acepta esta transferencia al dar su consentimiento en la Aplicación.</p>`,
      },
      {
        heading: `Seguridad de datos`,
        content: `<p>Todas las comunicaciones entre la Aplicación y nuestro servidor, y entre nuestro servidor y DeepSeek y fal.ai, se cifran con HTTPS/TLS. Como no guardamos sus sueños en nuestro servidor ni tenemos cuentas de usuario, no existe por nuestra parte ninguna base de datos de su diario que pueda verse comprometida. Su diario permanece en su dispositivo y, si activa la sincronización, en su iCloud privado. Si activa el bloqueo con Face ID, la autenticación la gestiona iOS; la Aplicación nunca recibe sus datos biométricos.</p>`,
      },
      {
        heading: `Sus derechos`,
        content: `<p>Usted mantiene el control de sus datos:</p>
<ul><li><strong>Retire su consentimiento</strong> en cualquier momento en los ajustes de la Aplicación. A partir de entonces no se envía nada más; puede seguir escribiendo y leyendo su diario.</li><li><strong>Elimine su diario</strong> — elimine entradas en la Aplicación, borre la copia de iCloud en los ajustes de iCloud de la Aplicación y elimine la Aplicación para borrar todo lo guardado en el dispositivo.</li><li><strong>Los contadores de nuestro servidor</strong> no contienen el contenido de ningún sueño y no están vinculados a su nombre ni a su cuenta de Apple; los contadores diarios caducan automáticamente. Como no están vinculados a usted, normalmente no podemos saber cuáles son suyos, pero puede dirigirnos cualquier solicitud.</li><li>Los datos ya enviados a DeepSeek o a fal.ai se tratan según sus políticas de privacidad.</li></ul>
<p>Si tiene preguntas sobre sus datos o desea ejercer los derechos que le reconoce la legislación de su país, contáctenos.</p>`,
      },
      {
        heading: `Cambios en esta política`,
        content: `<p>Podemos actualizar esta Política de privacidad de vez en cuando. Cualquier cambio se reflejará en esta página con una fecha de vigencia actualizada. Le recomendamos revisar esta política periódicamente.</p>`,
      },
      {
        heading: `Contáctenos`,
        content: `<p>Si tiene preguntas o inquietudes sobre esta Política de privacidad, contáctenos en:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  it: {
    title: `Informativa sulla privacy`,
    effectiveDate: `Data di entrata in vigore: 5 ottobre 2026`,
    intro: `Bogdan Nikishin, sviluppatore indipendente ("noi", "nostro" o "ci"), ha sviluppato <strong>LDream</strong> ("l'App") come applicazione commerciale. La presente Informativa sulla privacy spiega quali informazioni tratta l'App, cosa resta sul tuo dispositivo e cosa viene inviato, dove e perché quando usi le sue funzioni di IA facoltative.`,
    sections: [
      {
        heading: `Panoramica`,
        content: `<p>LDream è un diario dei sogni privato per la riflessione personale. L'App non richiede account, accesso o registrazione, non contiene pubblicità e non include SDK di analisi o tracciamento. Il tuo diario è memorizzato sul dispositivo e, se attivi la sincronizzazione, nel tuo account iCloud privato. Interpretazioni, illustrazioni e Temi ricorrenti sono facoltativi: funzionano solo dopo il tuo consenso esplicito nell'App e inviano solo i dati descritti in questa informativa.</p>`,
      },
      {
        heading: `Informazioni che non raccogliamo`,
        content: `<p>Non raccogliamo nessuno dei seguenti dati:</p>
<ul><li>Nomi, indirizzi email o dati di contatto (a meno che tu non ci scriva)</li><li>Account o password: l'App non ha account</li><li>Dati sulla posizione</li><li>L'identificativo pubblicitario (IDFA) o qualsiasi identificativo per tracciarti tra app e siti web</li><li>Contatti, foto o altri file personali</li><li>Registrazioni vocali</li><li>Analisi di utilizzo o dati di tracciamento comportamentale</li></ul>`,
      },
      {
        heading: `Dati memorizzati sul tuo dispositivo`,
        content: `<p>L'App memorizza localmente sul tuo dispositivo i seguenti dati:</p>
<ul><li><strong>Voci del diario</strong> — il testo dei tuoi sogni, i titoli e le date, e le interpretazioni, i simboli e le emozioni salvati con essi.</li><li><strong>Illustrazioni e riepiloghi dei Temi ricorrenti</strong> che hai creato.</li><li><strong>Preferenze</strong> — ad esempio promemoria, blocco con Face ID e sincronizzazione iCloud.</li><li><strong>Stato dell'abbonamento</strong> — un indicatore in cache del tuo accesso Premium.</li></ul>
<p>L'<strong>input vocale</strong> viene trascritto in testo dal riconoscimento vocale di Apple: sul tuo dispositivo quando il dispositivo e la lingua lo supportano, altrimenti dal servizio vocale di Apple. L'audio non viene mai inviato né a noi né ai nostri fornitori di IA, e l'App non conserva le registrazioni.</p>
<p>Questi dati non ci vengono trasmessi, salvo quanto descritto nella sezione successiva. Puoi eliminare le voci nell'App in qualsiasi momento; eliminando l'App vengono cancellati tutti i dati memorizzati sul dispositivo.</p>`,
      },
      {
        heading: `Interpretazioni, illustrazioni e Temi ricorrenti con l'IA`,
        content: `<p><strong>Prima il consenso.</strong> Prima della prima interpretazione, illustrazione o riepilogo dei Temi ricorrenti, LDream spiega cosa verrà inviato e dove e ti chiede il consenso esplicito. Senza di esso non viene inviato nulla. Trattiamo i dati descritti di seguito sulla base di tale consenso.</p>
<p><strong>Cosa invia l'App al nostro server.</strong> Il nostro server è un piccolo servizio che gestiamo su Cloudflare (Cloudflare Workers). A seconda della funzione, l'App invia:</p>
<ul><li><strong>Interpretazione</strong> — il testo del sogno e la lingua dell'interfaccia (e, se l'App la rileva, la lingua in cui è scritto il sogno), così la risposta arriva nella tua lingua.</li><li><strong>Illustrazione</strong> — il testo del sogno.</li><li><strong>Temi ricorrenti</strong> (Premium) — per i sogni della settimana o del mese scelti: date, titoli, simboli chiave ed emozioni. Il testo completo dei sogni non viene inviato per i Temi ricorrenti.</li><li><strong>Con ogni richiesta</strong> — un identificativo del dispositivo (l'identificativo per fornitore di Apple, IDFV, uguale per tutte le nostre app sul tuo dispositivo e diverso dall'identificativo pubblicitario), la versione dell'App e la tua data locale. Li usiamo solo per applicare i limiti di utilizzo e prevenire abusi. Se hai Premium, l'App invia anche la transazione firmata dell'App Store, così il nostro server può verificare l'acquisto.</li></ul>
<p><strong>Cosa inoltra il nostro server.</strong></p>
<ul><li><strong>DeepSeek</strong> — il testo del sogno, per scrivere l'interpretazione. Per un'illustrazione, DeepSeek trasforma il testo del sogno in una breve descrizione della scena (e, se il servizio di immagini la rifiuta, in una versione attenuata). Per i Temi ricorrenti, DeepSeek riceve i titoli, i simboli e le emozioni indicati sopra. DeepSeek elabora queste richieste su server situati nella Repubblica Popolare Cinese.</li><li><strong>fal.ai</strong> — solo la breve descrizione della scena, per disegnare l'illustrazione facoltativa. fal.ai ha sede negli Stati Uniti. L'immagine finita viene scaricata sul tuo dispositivo e salvata nel diario.</li></ul>
<p>L'identificativo del dispositivo, l'indirizzo IP e i dettagli degli acquisti non vengono mai trasmessi a DeepSeek o a fal.ai.</p>
<p><strong>Cosa conserva il nostro server.</strong> Non conserviamo i tuoi sogni, le interpretazioni o le illustrazioni. Il server memorizza solo contatori di utilizzo pseudonimi collegati all'identificativo del dispositivo: quante interpretazioni gratuite ha usato il dispositivo e se ha già usato la sua illustrazione gratuita (conservati senza limiti di tempo, così la quota gratuita non si azzera reinstallando l'App), e l'utilizzo giornaliero di Premium, cancellato automaticamente dopo circa tre giorni. Perché un nuovo tentativo dopo un'interruzione della connessione non venga contato due volte, il risultato di una richiesta può essere conservato in cache fino a 10 minuti e poi viene cancellato automaticamente. L'indirizzo IP viene usato solo per un istante per limitare il numero di richieste al minuto e non viene conservato da noi.</p>`,
      },
      {
        heading: `Sincronizzazione iCloud`,
        content: `<p>Se attivi la sincronizzazione iCloud, il diario viene memorizzato nel tuo account iCloud privato tramite CloudKit di Apple. Questi dati sono protetti dal tuo account Apple e non sono accessibili a noi. Puoi eliminare il diario da iCloud nelle impostazioni iCloud dell'App oppure gestendo lo spazio iCloud nelle Impostazioni di iOS. Il trattamento dei dati iCloud da parte di Apple è regolato dall'Informativa sulla privacy di Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Servizi di terze parti`,
        content: `<h3>Apple (App Store, StoreKit, iCloud e riconoscimento vocale)</h3>
<p>Acquisti e abbonamenti sono elaborati interamente da Apple tramite l'App Store. Non riceviamo i tuoi dati di pagamento, i dettagli del tuo account Apple né i dati di fatturazione. Se usi l'input vocale su un dispositivo o in una lingua senza riconoscimento vocale sul dispositivo, il servizio vocale di Apple trascrive l'audio; noi non lo riceviamo mai. Il trattamento dei tuoi dati da parte di Apple è regolato dall'Informativa sulla privacy di Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>
<h3>Cloudflare (il nostro server)</h3>
<p>Il nostro server funziona su Cloudflare Workers. Le richieste viaggiano cifrate e vengono elaborate sulla rete globale di Cloudflare, anche in data center fuori dal tuo Paese. Il trattamento dei dati da parte di Cloudflare è regolato dalla sua informativa sulla privacy (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek (interpretazioni, descrizioni delle scene e Temi ricorrenti)</h3>
<p>DeepSeek elabora i dati descritti sopra su server situati nella Repubblica Popolare Cinese. Il trattamento dei dati da parte di DeepSeek è regolato dalla sua informativa sulla privacy (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>fal.ai (illustrazioni)</h3>
<p>fal.ai, con sede negli Stati Uniti, riceve solo la breve descrizione della scena per generare l'illustrazione. Il trattamento dei dati da parte di fal.ai è regolato dalla sua informativa sulla privacy (<a href="https://fal.ai/legal/privacy-policy" target="_blank" rel="noopener noreferrer">fal.ai/legal/privacy-policy</a>).</p>
<h3>Niente analisi né pubblicità</h3>
<p>L'App non integra SDK di terze parti per analisi, pubblicità, segnalazione di arresti anomali o social media. Non usiamo Firebase, Google Analytics, Facebook SDK o servizi simili e non ti tracciamo tra app o siti web.</p>`,
      },
      {
        heading: `Accesso alla libreria foto`,
        content: `<p>L'App può chiederti il permesso di salvare illustrazioni nella tua libreria foto. Succede solo quando scegli di salvare un'immagine; l'App aggiunge soltanto immagini e non legge né accede alle tue foto esistenti.</p>`,
      },
      {
        heading: `Notifiche`,
        content: `<p>L'App può chiederti il permesso di inviare notifiche locali, ad esempio promemoria per annotare i sogni. Vengono programmate sul tuo dispositivo e non usano servizi di notifiche push esterni. Puoi gestirle o disattivarle in qualsiasi momento nelle Impostazioni del dispositivo.</p>`,
      },
      {
        heading: `Privacy dei bambini`,
        content: `<p>L'App non è destinata a bambini di età inferiore a 13 anni e non raccogliamo consapevolmente dati personali di bambini. Le funzioni di IA funzionano solo dopo un consenso esplicito nell'App. Se hai dubbi sull'uso dell'App da parte di un bambino, contattaci.</p>`,
      },
      {
        heading: `Condivisione dei dati`,
        content: `<p>Condividiamo dati solo con i fornitori descritti sopra e solo per offrire le funzioni dell'App:</p>
<ul><li><strong>Cloudflare</strong> — ospita il nostro server ed elabora le richieste che riceve.</li><li><strong>DeepSeek</strong> — riceve il testo del sogno (o, per i Temi ricorrenti, titoli, simboli ed emozioni) per creare interpretazioni, descrizioni delle scene e riepiloghi.</li><li><strong>fal.ai</strong> — riceve una breve descrizione della scena per creare le illustrazioni.</li><li><strong>Apple</strong> — elabora gli acquisti, trascrive l'input vocale con il suo servizio vocale quando il riconoscimento sul dispositivo non è disponibile e, se attivi la sincronizzazione, memorizza il diario nel tuo iCloud privato.</li></ul>
<p>Non vendiamo, affittiamo né scambiamo i tuoi dati e non li condividiamo per pubblicità o marketing. Poiché i server di DeepSeek si trovano nella Repubblica Popolare Cinese e fal.ai ha sede negli Stati Uniti, i tuoi dati possono essere trattati in Paesi le cui leggi sulla protezione dei dati sono diverse da quelle del tuo Paese. Accetti questo trasferimento quando dai il consenso nell'App.</p>`,
      },
      {
        heading: `Sicurezza dei dati`,
        content: `<p>Tutte le comunicazioni tra l'App e il nostro server, e tra il nostro server e DeepSeek e fal.ai, sono cifrate con HTTPS/TLS. Poiché non conserviamo i tuoi sogni sul nostro server e non abbiamo account utente, da parte nostra non esiste alcun database del tuo diario che possa essere violato. Il diario resta sul tuo dispositivo e, se attivi la sincronizzazione, nel tuo iCloud privato. Se attivi il blocco con Face ID, l'autenticazione è gestita da iOS; l'App non riceve mai i tuoi dati biometrici.</p>`,
      },
      {
        heading: `I tuoi diritti`,
        content: `<p>Mantieni il controllo dei tuoi dati:</p>
<ul><li><strong>Revoca il consenso</strong> in qualsiasi momento nelle impostazioni dell'App. Da quel momento non viene inviato più nulla; puoi continuare a scrivere e leggere il diario.</li><li><strong>Elimina il diario</strong> — elimina le voci nell'App, cancella la copia su iCloud nelle impostazioni iCloud dell'App ed elimina l'App per rimuovere tutto ciò che è memorizzato sul dispositivo.</li><li><strong>I contatori sul nostro server</strong> non contengono il contenuto dei sogni e non sono collegati al tuo nome o al tuo account Apple; i contatori giornalieri scadono automaticamente. Poiché non sono collegati a te, di solito non possiamo sapere quali siano i tuoi, ma puoi rivolgerci qualsiasi richiesta.</li><li>I dati già inviati a DeepSeek o a fal.ai sono trattati secondo le loro informative sulla privacy.</li></ul>
<p>Se hai domande sui tuoi dati o vuoi esercitare i diritti previsti dalla legge del tuo Paese, contattaci.</p>`,
      },
      {
        heading: `Modifiche a questa informativa`,
        content: `<p>Potremmo aggiornare questa Informativa sulla privacy di tanto in tanto. Eventuali modifiche saranno riflesse su questa pagina con una data di entrata in vigore aggiornata. Ti incoraggiamo a consultare periodicamente questa informativa.</p>`,
      },
      {
        heading: `Contattaci`,
        content: `<p>Per domande o dubbi su questa Informativa sulla privacy, contattaci a:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  pt: {
    title: `Política de Privacidade`,
    effectiveDate: `Data de vigência: 5 de outubro de 2026`,
    intro: `Bogdan Nikishin, desenvolvedor independente ("nós", "nosso" ou "nos"), desenvolveu o <strong>LDream</strong> ("o Aplicativo") como um aplicativo comercial. Esta Política de Privacidade explica quais informações o Aplicativo trata, o que fica no seu dispositivo e o que é enviado, para onde e por quê, quando você usa os recursos opcionais de IA.`,
    sections: [
      {
        heading: `Visão geral`,
        content: `<p>O LDream é um diário de sonhos privado para autorreflexão. O Aplicativo não exige conta, login ou cadastro, não contém anúncios e não inclui SDKs de análise ou rastreamento. Seu diário fica armazenado no seu dispositivo e, se você ativar a sincronização, na sua conta privada do iCloud. Interpretações, ilustrações e Padrões são opcionais: só funcionam depois do seu consentimento explícito no Aplicativo e enviam apenas os dados descritos nesta política.</p>`,
      },
      {
        heading: `Informações que não coletamos`,
        content: `<p>Não coletamos nenhum dos seguintes dados:</p>
<ul><li>Nomes, endereços de e-mail ou informações de contato (a menos que você nos escreva)</li><li>Contas ou senhas — o Aplicativo não tem contas</li><li>Dados de localização</li><li>O identificador de publicidade (IDFA) ou qualquer identificador usado para rastrear você entre apps e sites</li><li>Contatos, fotos ou outros arquivos pessoais</li><li>Gravações de voz</li><li>Análises de uso ou dados de rastreamento comportamental</li></ul>`,
      },
      {
        heading: `Dados armazenados em seu dispositivo`,
        content: `<p>O Aplicativo armazena localmente no seu dispositivo os seguintes dados:</p>
<ul><li><strong>Registros do diário</strong> — o texto dos seus sonhos, títulos e datas, além das interpretações, símbolos e emoções salvos com eles.</li><li><strong>Ilustrações e resumos de Padrões</strong> que você criou.</li><li><strong>Preferências</strong> — por exemplo, lembretes, bloqueio com Face ID e sincronização com o iCloud.</li><li><strong>Status da assinatura</strong> — um indicador em cache do seu acesso Premium.</li></ul>
<p>A <strong>entrada por voz</strong> é transcrita em texto pelo reconhecimento de fala da Apple: no seu dispositivo, quando o dispositivo e o idioma permitem; caso contrário, pelo serviço de fala da Apple. O áudio nunca é enviado para nós nem para nossos provedores de IA, e o Aplicativo não guarda as gravações.</p>
<p>Esses dados não são transmitidos a nós, exceto conforme descrito na próxima seção. Você pode excluir registros no Aplicativo a qualquer momento; excluir o Aplicativo apaga todos os dados armazenados no dispositivo.</p>`,
      },
      {
        heading: `Interpretações, ilustrações e Padrões com IA`,
        content: `<p><strong>Primeiro, o seu consentimento.</strong> Antes da primeira interpretação, ilustração ou resumo de Padrões, o LDream explica o que será enviado e para onde, e pede o seu consentimento explícito. Sem ele, nada é enviado. Tratamos os dados descritos abaixo com base nesse consentimento.</p>
<p><strong>O que o Aplicativo envia ao nosso servidor.</strong> Nosso servidor é um pequeno serviço que operamos na Cloudflare (Cloudflare Workers). Conforme o recurso usado, o Aplicativo envia:</p>
<ul><li><strong>Interpretação</strong> — o texto do sonho e o idioma da interface (e, se o Aplicativo o detectar, o idioma em que o sonho foi escrito), para que a resposta chegue no seu idioma.</li><li><strong>Ilustração</strong> — o texto do sonho.</li><li><strong>Padrões</strong> (Premium) — dos sonhos da semana ou do mês escolhido: datas, títulos, símbolos principais e emoções. O texto completo dos seus sonhos não é enviado para Padrões.</li><li><strong>Em cada solicitação</strong> — um identificador do dispositivo (o identificador para fornecedores da Apple, IDFV, que é o mesmo para todos os nossos apps no seu dispositivo e não é o identificador de publicidade), a versão do Aplicativo e a sua data local. Usamos esses dados apenas para aplicar limites de uso e evitar abusos. Se você tiver o Premium, o Aplicativo também envia a transação assinada da App Store para que nosso servidor possa verificar a compra.</li></ul>
<p><strong>O que nosso servidor repassa.</strong></p>
<ul><li><strong>DeepSeek</strong> — o texto do sonho, para escrever a interpretação. Para uma ilustração, a DeepSeek transforma o texto do sonho em uma breve descrição da cena (e, se o serviço de imagens a recusar, em uma versão suavizada). Para Padrões, a DeepSeek recebe os títulos, símbolos e emoções indicados acima. A DeepSeek processa essas solicitações em servidores localizados na República Popular da China.</li><li><strong>fal.ai</strong> — apenas a breve descrição da cena, para desenhar a ilustração opcional. A fal.ai tem sede nos Estados Unidos. A imagem pronta é baixada para o seu dispositivo e salva no seu diário.</li></ul>
<p>Seu identificador de dispositivo, seu endereço IP e os dados das suas compras nunca são repassados à DeepSeek nem à fal.ai.</p>
<p><strong>O que nosso servidor guarda.</strong> Não guardamos seus sonhos, interpretações nem ilustrações. O servidor armazena apenas contadores de uso pseudônimos vinculados ao identificador do dispositivo: quantas interpretações gratuitas o dispositivo já usou e se a ilustração gratuita já foi usada (guardados sem prazo, para que a cota gratuita não possa ser zerada reinstalando o Aplicativo), e o uso diário do Premium, que é excluído automaticamente depois de cerca de três dias. Para que uma nova tentativa após uma queda de conexão não conte duas vezes, o resultado de uma solicitação pode ficar em cache por até 10 minutos e depois é excluído automaticamente. Seu endereço IP é usado apenas momentaneamente para limitar o número de solicitações por minuto e não é armazenado por nós.</p>`,
      },
      {
        heading: `Sincronização do iCloud`,
        content: `<p>Se você ativar a sincronização com o iCloud, seu diário é armazenado na sua conta privada do iCloud por meio do CloudKit da Apple. Esses dados são protegidos pela sua Conta Apple e não são acessíveis para nós. Você pode excluir o diário do iCloud nos ajustes de iCloud do Aplicativo ou gerenciando o armazenamento do iCloud nos Ajustes do iOS. O tratamento dos dados do iCloud pela Apple é regido pela Política de Privacidade da Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Serviços de terceiros`,
        content: `<h3>Apple (App Store, StoreKit, iCloud e reconhecimento de fala)</h3>
<p>Compras e assinaturas são processadas integralmente pela Apple via App Store. Não recebemos suas informações de pagamento, os dados da sua Conta Apple nem seus dados de cobrança. Se você usar a entrada por voz em um dispositivo ou idioma sem reconhecimento de fala no dispositivo, o serviço de fala da Apple transcreve o áudio; nós nunca o recebemos. O tratamento dos seus dados pela Apple é regido pela Política de Privacidade da Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>
<h3>Cloudflare (nosso servidor)</h3>
<p>Nosso servidor roda no Cloudflare Workers. As solicitações trafegam criptografadas e são processadas na rede global da Cloudflare, inclusive em data centers fora do seu país. O tratamento de dados pela Cloudflare é regido pela política de privacidade dela (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek (interpretações, descrições de cena e Padrões)</h3>
<p>A DeepSeek processa os dados descritos acima em servidores localizados na República Popular da China. O tratamento de dados pela DeepSeek é regido pela política de privacidade dela (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>fal.ai (ilustrações)</h3>
<p>A fal.ai, com sede nos Estados Unidos, recebe apenas a breve descrição da cena para gerar a ilustração. O tratamento de dados pela fal.ai é regido pela política de privacidade dela (<a href="https://fal.ai/legal/privacy-policy" target="_blank" rel="noopener noreferrer">fal.ai/legal/privacy-policy</a>).</p>
<h3>Sem análise e sem anúncios</h3>
<p>O Aplicativo não integra SDKs de terceiros de análise, publicidade, relatórios de falhas ou redes sociais. Não usamos Firebase, Google Analytics, Facebook SDK nem serviços semelhantes, e não rastreamos você entre apps ou sites.</p>`,
      },
      {
        heading: `Acesso à biblioteca de fotos`,
        content: `<p>O Aplicativo pode pedir permissão para salvar ilustrações na sua biblioteca de fotos. Isso só acontece quando você decide salvar uma imagem; o Aplicativo apenas adiciona imagens e não lê nem acessa suas fotos existentes.</p>`,
      },
      {
        heading: `Notificações`,
        content: `<p>O Aplicativo pode pedir permissão para enviar notificações locais, como lembretes para registrar seus sonhos. Elas são agendadas no seu dispositivo e não usam nenhum serviço externo de notificações push. Você pode gerenciá-las ou desativá-las a qualquer momento nos Ajustes do dispositivo.</p>`,
      },
      {
        heading: `Privacidade infantil`,
        content: `<p>O Aplicativo não se destina a crianças menores de 13 anos, e não coletamos intencionalmente dados pessoais de crianças. Os recursos de IA só funcionam após um consentimento explícito no Aplicativo. Se você tiver preocupações sobre o uso do Aplicativo por uma criança, fale conosco.</p>`,
      },
      {
        heading: `Compartilhamento de dados`,
        content: `<p>Compartilhamos dados apenas com os provedores descritos acima e somente para oferecer os recursos do Aplicativo:</p>
<ul><li><strong>Cloudflare</strong> — hospeda nosso servidor e processa as solicitações enviadas a ele.</li><li><strong>DeepSeek</strong> — recebe o texto do sonho (ou, para Padrões, títulos, símbolos e emoções) para criar interpretações, descrições de cena e resumos de Padrões.</li><li><strong>fal.ai</strong> — recebe uma breve descrição da cena para criar ilustrações.</li><li><strong>Apple</strong> — processa as compras, transcreve a entrada por voz com o serviço de fala dela quando o reconhecimento no dispositivo não está disponível e, se você ativar a sincronização, armazena seu diário no seu iCloud privado.</li></ul>
<p>Não vendemos, alugamos nem trocamos seus dados, e não os compartilhamos para publicidade ou marketing. Como os servidores da DeepSeek ficam na República Popular da China e a fal.ai tem sede nos Estados Unidos, seus dados podem ser tratados em países cujas leis de proteção de dados diferem das do seu país. Você concorda com essa transferência ao dar seu consentimento no Aplicativo.</p>`,
      },
      {
        heading: `Segurança dos dados`,
        content: `<p>Toda a comunicação entre o Aplicativo e nosso servidor, e entre nosso servidor e a DeepSeek e a fal.ai, é criptografada com HTTPS/TLS. Como não guardamos seus sonhos no nosso servidor e não temos contas de usuário, não existe do nosso lado um banco de dados do seu diário que possa ser vazado. Seu diário fica no seu dispositivo e, se você ativar a sincronização, no seu iCloud privado. Se você ativar o bloqueio com Face ID, a autenticação é feita pelo iOS; o Aplicativo nunca recebe seus dados biométricos.</p>`,
      },
      {
        heading: `Seus direitos`,
        content: `<p>Você mantém o controle dos seus dados:</p>
<ul><li><strong>Retire seu consentimento</strong> a qualquer momento nos ajustes do Aplicativo. Depois disso, nada mais é enviado; você pode continuar escrevendo e lendo seu diário.</li><li><strong>Exclua seu diário</strong> — exclua registros no Aplicativo, apague a cópia do iCloud nos ajustes de iCloud do Aplicativo e exclua o Aplicativo para remover tudo o que está armazenado no dispositivo.</li><li><strong>Os contadores no nosso servidor</strong> não contêm o conteúdo dos sonhos e não estão vinculados ao seu nome nem à sua Conta Apple; os contadores diários expiram automaticamente. Como não estão vinculados a você, normalmente não conseguimos saber quais são os seus, mas você pode nos enviar qualquer solicitação.</li><li>Os dados já enviados à DeepSeek ou à fal.ai são tratados conforme as políticas de privacidade dessas empresas.</li></ul>
<p>Se você tiver dúvidas sobre seus dados ou quiser exercer os direitos previstos na legislação do seu país, fale conosco.</p>`,
      },
      {
        heading: `Alterações nesta política`,
        content: `<p>Podemos atualizar esta Política de Privacidade de tempos em tempos. Quaisquer alterações serão refletidas nesta página com uma data de vigência atualizada. Encorajamos você a revisar esta política periodicamente.</p>`,
      },
      {
        heading: `Fale conosco`,
        content: `<p>Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco em:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  ja: {
    title: `プライバシーポリシー`,
    effectiveDate: `発効日：2026年10月5日`,
    intro: `個人開発者のボグダン・ニキシン（「当方」、「私たち」）は、商用アプリケーションとして<strong>LDream</strong>（「本アプリ」）を開発しました。本プライバシーポリシーでは、本アプリが扱う情報、お客様のデバイスに残るもの、そして任意のAI機能をご利用の際に何がどこへ、なぜ送信されるのかを説明します。`,
    sections: [
      {
        heading: `概要`,
        content: `<p>LDreamは、自分を見つめるためのプライベートな夢日記です。本アプリはアカウント作成、ログイン、登録を必要とせず、広告や分析・トラッキング用のSDKも含みません。日記はお客様のデバイスに保存され、同期をオンにした場合はお客様のプライベートなiCloudアカウントにも保存されます。解釈、イラスト、パターンは任意の機能で、本アプリ内でお客様が明示的に同意した後にのみ動作し、本ポリシーに記載したデータのみを送信します。</p>`,
      },
      {
        heading: `当方が収集しない情報`,
        content: `<p>当方は以下の情報を一切収集しません：</p>
<ul><li>氏名、メールアドレス、連絡先情報（お客様から当方に連絡された場合を除く）</li><li>アカウントやパスワード（本アプリにアカウントはありません）</li><li>位置情報</li><li>広告識別子（IDFA）や、アプリやウェブサイトをまたいでお客様を追跡するための識別子</li><li>連絡先、写真、その他の個人ファイル</li><li>音声の録音</li><li>利用状況の分析データや行動追跡データ</li></ul>`,
      },
      {
        heading: `デバイスに保存されるデータ`,
        content: `<p>本アプリは以下のデータをお客様のデバイスにローカル保存します：</p>
<ul><li><strong>夢日記の記録</strong> — 夢のテキスト、タイトル、日付、およびそれとともに保存された解釈、シンボル、感情。</li><li><strong>作成したイラストとパターンのまとめ</strong>。</li><li><strong>アプリの設定</strong> — リマインダー、Face IDロック、iCloud同期など。</li><li><strong>サブスクリプションの状態</strong> — プレミアムの利用状況のキャッシュ。</li></ul>
<p><strong>音声入力</strong>は、Appleの音声認識によってテキストに変換されます。デバイスと言語が対応している場合はお客様のデバイス上で、それ以外の場合はAppleの音声認識サービスで処理されます。音声が当方や当方のAIプロバイダーに送信されることはなく、本アプリが録音を保存することもありません。</p>
<p>これらのデータは、次のセクションに記載する場合を除き、当方に送信されることはありません。記録は本アプリ内でいつでも削除でき、本アプリを削除するとデバイス上のすべてのデータが消去されます。</p>`,
      },
      {
        heading: `AIによる解釈、イラスト、パターン`,
        content: `<p><strong>まず同意を確認します。</strong>最初の解釈、イラスト、パターンのまとめの前に、LDreamは何がどこへ送信されるかを説明し、お客様の明示的な同意を求めます。同意がなければ何も送信されません。以下のデータは、この同意に基づいて処理します。</p>
<p><strong>本アプリが当方のサーバーに送信するもの。</strong>当方のサーバーは、Cloudflare（Cloudflare Workers）上で当方が運用する小規模なサービスです。ご利用の機能に応じて、本アプリは以下を送信します：</p>
<ul><li><strong>解釈</strong> — 夢のテキストとインターフェースの言語（本アプリが検出した場合は、夢が書かれた言語も）。回答をお客様の言語でお届けするためです。</li><li><strong>イラスト</strong> — 夢のテキスト。</li><li><strong>パターン</strong>（プレミアム） — 選択した週または月の夢の日付、タイトル、主なシンボル、感情。パターンのために夢の全文が送信されることはありません。</li><li><strong>すべてのリクエストに付随して</strong> — デバイス識別子（AppleのベンダーID「IDFV」。お客様のデバイス上の当方アプリすべてで共通で、広告識別子ではありません）、本アプリのバージョン、お客様の現地の日付。これらは利用制限の適用と不正利用の防止のためだけに使用します。プレミアムをご利用の場合は、当方のサーバーが購入を確認できるよう、署名済みのApp Store取引情報も送信します。</li></ul>
<p><strong>当方のサーバーが転送するもの。</strong></p>
<ul><li><strong>DeepSeek</strong> — 解釈を作成するための夢のテキスト。イラストの場合、DeepSeekは夢のテキストを短い場面の説明に変換します（画像サービスがその説明を受け付けない場合は、表現を和らげた版も作成します）。パターンの場合、DeepSeekは上記のタイトル、シンボル、感情を受け取ります。DeepSeekはこれらのリクエストを中華人民共和国内のサーバーで処理します。</li><li><strong>fal.ai</strong> — 任意のイラストを描くための短い場面の説明のみ。fal.aiは米国を拠点としています。完成した画像はお客様のデバイスにダウンロードされ、日記に保存されます。</li></ul>
<p>デバイス識別子、IPアドレス、購入情報がDeepSeekやfal.aiに渡されることはありません。</p>
<p><strong>当方のサーバーが保持するもの。</strong>当方は夢、解釈、イラストを保持しません。サーバーが保存するのは、デバイス識別子にひも付いた仮名の利用回数カウンターのみです：そのデバイスで使用した無料解釈の回数と、無料イラストを使用済みかどうか（アプリの再インストールで無料枠がリセットされないよう、期限なく保持）、そしてプレミアムの1日あたりの利用回数（約3日後に自動削除）です。接続が途切れた後の再試行が二重にカウントされないよう、リクエストの結果を最大10分間キャッシュする場合があり、その後は自動的に削除されます。IPアドレスは1分あたりのリクエスト数を制限するために一時的に使用するだけで、当方が保存することはありません。</p>`,
      },
      {
        heading: `iCloud同期`,
        content: `<p>iCloud同期をオンにすると、日記はAppleのCloudKitを使ってお客様のプライベートなiCloudアカウントに保存されます。このデータはお客様のAppleアカウントで保護されており、当方はアクセスできません。日記は、本アプリのiCloud設定から、またはiOSの設定でiCloudストレージを管理することでiCloudから削除できます。AppleによるiCloudデータの取り扱いは、Appleのプライバシーポリシー（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）に従います。</p>`,
      },
      {
        heading: `サードパーティサービス`,
        content: `<h3>Apple（App Store、StoreKit、iCloud、音声認識）</h3>
<p>購入とサブスクリプションは、App Storeを通じてAppleがすべて処理します。当方がお支払い情報、Appleアカウントの詳細、請求情報を受け取ることはありません。デバイス上の音声認識に対応していないデバイスや言語で音声入力を使う場合は、Appleの音声認識サービスが音声をテキストに変換します。当方がその音声を受け取ることはありません。Appleによるデータの取り扱いは、Appleのプライバシーポリシー（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）に従います。</p>
<h3>Cloudflare（当方のサーバー）</h3>
<p>当方のサーバーはCloudflare Workers上で稼働しています。リクエストは暗号化されて送信され、お客様の国外のデータセンターを含むCloudflareのグローバルネットワークで処理されます。Cloudflareによるデータの取り扱いは、同社のプライバシーポリシー（<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>）に従います。</p>
<h3>DeepSeek（解釈、場面の説明、パターン）</h3>
<p>DeepSeekは、上記のデータを中華人民共和国内のサーバーで処理します。DeepSeekによるデータの取り扱いは、同社のプライバシーポリシー（<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>）に従います。</p>
<h3>fal.ai（イラスト）</h3>
<p>米国を拠点とするfal.aiは、イラストを生成するための短い場面の説明のみを受け取ります。fal.aiによるデータの取り扱いは、同社のプライバシーポリシー（<a href="https://fal.ai/legal/privacy-policy" target="_blank" rel="noopener noreferrer">fal.ai/legal/privacy-policy</a>）に従います。</p>
<h3>分析・広告なし</h3>
<p>本アプリは、第三者の分析、広告、クラッシュレポート、SNSのSDKを一切組み込んでいません。Firebase、Google Analytics、Facebook SDKなどの類似サービスは使用しておらず、アプリやウェブサイトをまたいでお客様を追跡することもありません。</p>`,
      },
      {
        heading: `フォトライブラリへのアクセス`,
        content: `<p>本アプリは、イラストをフォトライブラリに保存する許可を求める場合があります。これはお客様が画像の保存を選んだときにのみ行われ、本アプリは画像を追加するだけで、既存の写真を読み取ったりアクセスしたりすることはありません。</p>`,
      },
      {
        heading: `通知`,
        content: `<p>本アプリは、夢の記録を促すリマインダーなどのローカル通知を送信する許可を求める場合があります。通知はお客様のデバイス上でスケジュールされ、外部のプッシュ通知サービスは使用しません。デバイスの設定からいつでも管理またはオフにできます。</p>`,
      },
      {
        heading: `お子様のプライバシー`,
        content: `<p>本アプリは13歳未満のお子様を対象としておらず、当方がお子様の個人情報を故意に収集することはありません。AI機能は、本アプリ内での明示的な同意の後にのみ動作します。お子様による本アプリの利用についてご心配な点がある場合は、お問い合わせください。</p>`,
      },
      {
        heading: `データの共有`,
        content: `<p>当方は、本アプリの機能を提供する目的に限り、上記のサービス提供者とのみデータを共有します：</p>
<ul><li><strong>Cloudflare</strong> — 当方のサーバーをホストし、サーバーへのリクエストを処理します。</li><li><strong>DeepSeek</strong> — 解釈、場面の説明、パターンのまとめを作成するため、夢のテキスト（パターンの場合はタイトル、シンボル、感情）を受け取ります。</li><li><strong>fal.ai</strong> — イラストを作成するため、短い場面の説明を受け取ります。</li><li><strong>Apple</strong> — 購入を処理し、デバイス上の音声認識が使えない場合は音声認識サービスで音声入力をテキストに変換し、同期をオンにした場合は日記をお客様のプライベートなiCloudに保存します。</li></ul>
<p>当方はお客様のデータを販売、貸与、交換せず、広告やマーケティングのために共有することもありません。DeepSeekのサーバーは中華人民共和国にあり、fal.aiは米国を拠点としているため、お客様のデータは、お住まいの国とはデータ保護法が異なる国で処理される場合があります。本アプリ内で同意することにより、お客様はこの移転に同意したことになります。</p>`,
      },
      {
        heading: `データセキュリティ`,
        content: `<p>本アプリと当方のサーバー間、および当方のサーバーとDeepSeek・fal.ai間の通信は、すべてHTTPS/TLSで暗号化されます。当方は夢をサーバーに保持せず、ユーザーアカウントも持たないため、当方側に漏えいし得る日記のデータベースは存在しません。日記はお客様のデバイスと、同期をオンにした場合はプライベートなiCloudに保存されます。Face IDロックをオンにした場合、認証はiOSが行い、本アプリが生体情報を受け取ることはありません。</p>`,
      },
      {
        heading: `お客様の権利`,
        content: `<p>お客様はご自身のデータを管理できます：</p>
<ul><li><strong>同意の撤回</strong> — 本アプリの設定からいつでも同意を撤回できます。撤回後は何も送信されず、日記の記録と閲覧はそのまま続けられます。</li><li><strong>日記の削除</strong> — 本アプリ内で記録を削除し、本アプリのiCloud設定からiCloud上のコピーを削除し、本アプリを削除すればデバイス上のすべてのデータが消去されます。</li><li><strong>当方のサーバー上のカウンター</strong>には夢の内容は含まれず、お客様の氏名やAppleアカウントとひも付いていません。1日単位のカウンターは自動的に失効します。お客様とひも付いていないため、通常どのカウンターがお客様のものかを当方が特定することはできませんが、ご要望があればいつでもお問い合わせください。</li><li>すでにDeepSeekやfal.aiに送信されたデータは、各社のプライバシーポリシーに従って取り扱われます。</li></ul>
<p>データに関するご質問や、お住まいの国の法律に基づく権利の行使をご希望の場合は、お問い合わせください。</p>`,
      },
      {
        heading: `本ポリシーの変更`,
        content: `<p>当方は本プライバシーポリシーを随時更新する場合があります。変更は、更新された発効日とともにこのページに反映されます。定期的に本ポリシーをご確認いただくことをお勧めします。</p>`,
      },
      {
        heading: `お問い合わせ`,
        content: `<p>本プライバシーポリシーに関するご質問やご懸念がある場合は、以下までお問い合わせください：</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  ko: {
    title: `개인정보 처리방침`,
    effectiveDate: `시행일: 2026년 10월 5일`,
    intro: `독립 개발자 보그단 니키신("개발자", "우리" 또는 "저희")은 상용 애플리케이션으로 <strong>LDream</strong>("본 앱")을 개발했습니다. 본 개인정보 처리방침은 본 앱이 어떤 정보를 다루는지, 무엇이 귀하의 기기에 남는지, 그리고 선택 사항인 AI 기능을 사용할 때 무엇이 어디로, 왜 전송되는지 설명합니다.`,
    sections: [
      {
        heading: `개요`,
        content: `<p>LDream은 자기 성찰을 위한 프라이빗 꿈 일기입니다. 본 앱은 계정, 로그인, 회원가입이 필요 없으며, 광고와 분석·추적 SDK를 포함하지 않습니다. 일기는 귀하의 기기에 저장되며, 동기화를 켜면 귀하의 개인 iCloud 계정에도 저장됩니다. 해석, 일러스트, 패턴은 선택 기능으로, 본 앱에서 귀하가 명시적으로 동의한 후에만 작동하며 본 방침에 설명된 데이터만 전송합니다.</p>`,
      },
      {
        heading: `개발자가 수집하지 않는 정보`,
        content: `<p>개발자는 다음 정보를 수집하지 않습니다:</p>
<ul><li>이름, 이메일 주소 또는 연락처 정보(귀하가 개발자에게 연락하는 경우 제외)</li><li>계정 또는 비밀번호 — 본 앱에는 계정이 없습니다</li><li>위치 데이터</li><li>광고 식별자(IDFA) 또는 앱과 웹사이트 전반에서 귀하를 추적하는 데 쓰이는 식별자</li><li>연락처, 사진 또는 기타 개인 파일</li><li>음성 녹음</li><li>사용 분석 또는 행동 추적 데이터</li></ul>`,
      },
      {
        heading: `기기에 저장되는 데이터`,
        content: `<p>본 앱은 다음 데이터를 귀하의 기기에 로컬로 저장합니다:</p>
<ul><li><strong>꿈 일기 기록</strong> — 꿈의 텍스트, 제목과 날짜, 그리고 함께 저장된 해석, 상징, 감정.</li><li><strong>귀하가 만든 일러스트와 패턴 요약</strong>.</li><li><strong>앱 설정</strong> — 알림, Face ID 잠금, iCloud 동기화 등.</li><li><strong>구독 상태</strong> — 프리미엄 이용 여부의 캐시.</li></ul>
<p><strong>음성 입력</strong>은 Apple의 음성 인식을 통해 텍스트로 변환됩니다. 기기와 언어가 지원하는 경우 귀하의 기기에서, 그렇지 않은 경우 Apple의 음성 인식 서비스에서 처리됩니다. 오디오는 개발자나 개발자의 AI 제공업체로 절대 전송되지 않으며, 본 앱은 녹음을 저장하지 않습니다.</p>
<p>이 데이터는 다음 섹션에 설명된 경우를 제외하고 개발자에게 전송되지 않습니다. 기록은 본 앱에서 언제든지 삭제할 수 있으며, 본 앱을 삭제하면 기기에 저장된 모든 데이터가 삭제됩니다.</p>`,
      },
      {
        heading: `AI 해석, 일러스트 및 패턴`,
        content: `<p><strong>먼저 동의를 구합니다.</strong> 첫 해석, 일러스트 또는 패턴 요약 전에 LDream은 무엇이 어디로 전송되는지 설명하고 귀하의 명시적 동의를 구합니다. 동의가 없으면 아무것도 전송되지 않습니다. 아래 데이터는 이 동의를 근거로 처리됩니다.</p>
<p><strong>본 앱이 개발자 서버로 보내는 것.</strong> 개발자 서버는 Cloudflare(Cloudflare Workers)에서 개발자가 운영하는 소규모 서비스입니다. 사용하는 기능에 따라 본 앱은 다음을 전송합니다:</p>
<ul><li><strong>해석</strong> — 꿈의 텍스트와 인터페이스 언어(본 앱이 감지한 경우 꿈이 작성된 언어 포함). 답변을 귀하의 언어로 제공하기 위함입니다.</li><li><strong>일러스트</strong> — 꿈의 텍스트.</li><li><strong>패턴</strong>(프리미엄) — 선택한 주 또는 월의 꿈에 대한 날짜, 제목, 주요 상징, 감정. 패턴을 위해 꿈의 전체 텍스트가 전송되지는 않습니다.</li><li><strong>모든 요청에 함께</strong> — 기기 식별자(Apple의 공급업체 식별자 IDFV. 귀하의 기기에 있는 개발자의 모든 앱에서 동일하며 광고 식별자가 아닙니다), 앱 버전, 귀하의 현지 날짜. 이 정보는 사용 한도 적용과 남용 방지에만 사용합니다. 프리미엄을 이용하는 경우, 개발자 서버가 구매를 확인할 수 있도록 서명된 App Store 거래 정보도 전송됩니다.</li></ul>
<p><strong>개발자 서버가 전달하는 것.</strong></p>
<ul><li><strong>DeepSeek</strong> — 해석을 작성하기 위한 꿈의 텍스트. 일러스트의 경우 DeepSeek가 꿈의 텍스트를 짧은 장면 설명으로 바꿉니다(이미지 서비스가 그 설명을 거부하면 순화된 버전도 만듭니다). 패턴의 경우 DeepSeek는 위의 제목, 상징, 감정을 받습니다. DeepSeek는 이러한 요청을 중화인민공화국에 위치한 서버에서 처리합니다.</li><li><strong>fal.ai</strong> — 선택 사항인 일러스트를 그리기 위한 짧은 장면 설명만. fal.ai는 미국에 기반을 두고 있습니다. 완성된 이미지는 귀하의 기기로 다운로드되어 일기에 저장됩니다.</li></ul>
<p>기기 식별자, IP 주소, 구매 정보는 DeepSeek나 fal.ai로 절대 전달되지 않습니다.</p>
<p><strong>개발자 서버가 보관하는 것.</strong> 개발자는 꿈, 해석, 일러스트를 보관하지 않습니다. 서버는 기기 식별자에 연결된 가명 사용 횟수 카운터만 저장합니다: 해당 기기에서 사용한 무료 해석 횟수와 무료 일러스트 사용 여부(앱을 재설치해도 무료 한도가 초기화되지 않도록 기한 없이 보관), 그리고 약 3일 후 자동 삭제되는 프리미엄 일일 사용량입니다. 연결이 끊긴 뒤의 재시도가 두 번 집계되지 않도록 요청 결과를 최대 10분간 캐시할 수 있으며, 이후 자동으로 삭제됩니다. IP 주소는 분당 요청 수를 제한하기 위해 잠시 사용될 뿐 개발자가 저장하지 않습니다.</p>`,
      },
      {
        heading: `iCloud 동기화`,
        content: `<p>iCloud 동기화를 켜면 일기는 Apple의 CloudKit을 사용해 귀하의 개인 iCloud 계정에 저장됩니다. 이 데이터는 귀하의 Apple 계정으로 보호되며 개발자는 접근할 수 없습니다. 일기는 본 앱의 iCloud 설정에서, 또는 iOS 설정에서 iCloud 저장 공간을 관리하여 iCloud에서 삭제할 수 있습니다. Apple의 iCloud 데이터 처리는 Apple 개인정보 처리방침(<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>)의 적용을 받습니다.</p>`,
      },
      {
        heading: `타사 서비스`,
        content: `<h3>Apple(App Store, StoreKit, iCloud, 음성 인식)</h3>
<p>구매와 구독은 App Store를 통해 Apple이 전적으로 처리합니다. 개발자는 귀하의 결제 정보, Apple 계정 세부 정보, 청구 정보를 받지 않습니다. 기기 내 음성 인식을 지원하지 않는 기기나 언어에서 음성 입력을 사용하면 Apple의 음성 인식 서비스가 오디오를 텍스트로 변환하며, 개발자는 그 오디오를 절대 받지 않습니다. Apple의 데이터 처리는 Apple 개인정보 처리방침(<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>)의 적용을 받습니다.</p>
<h3>Cloudflare(개발자 서버)</h3>
<p>개발자 서버는 Cloudflare Workers에서 실행됩니다. 요청은 암호화되어 전송되며, 귀하의 국가 밖에 있는 데이터 센터를 포함한 Cloudflare의 글로벌 네트워크에서 처리됩니다. Cloudflare의 데이터 처리는 Cloudflare 개인정보 처리방침(<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>)의 적용을 받습니다.</p>
<h3>DeepSeek(해석, 장면 설명, 패턴)</h3>
<p>DeepSeek는 위에 설명된 데이터를 중화인민공화국에 위치한 서버에서 처리합니다. DeepSeek의 데이터 처리는 DeepSeek 개인정보 처리방침(<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>)의 적용을 받습니다.</p>
<h3>fal.ai(일러스트)</h3>
<p>미국에 기반을 둔 fal.ai는 일러스트 생성을 위한 짧은 장면 설명만 받습니다. fal.ai의 데이터 처리는 fal.ai 개인정보 처리방침(<a href="https://fal.ai/legal/privacy-policy" target="_blank" rel="noopener noreferrer">fal.ai/legal/privacy-policy</a>)의 적용을 받습니다.</p>
<h3>분석 및 광고 없음</h3>
<p>본 앱은 타사 분석, 광고, 충돌 보고, 소셜 미디어 SDK를 통합하지 않습니다. Firebase, Google Analytics, Facebook SDK 등 유사한 서비스를 사용하지 않으며, 앱이나 웹사이트 전반에서 귀하를 추적하지 않습니다.</p>`,
      },
      {
        heading: `사진 라이브러리 접근`,
        content: `<p>본 앱은 일러스트를 사진 라이브러리에 저장할 권한을 요청할 수 있습니다. 이는 귀하가 이미지 저장을 선택할 때만 이루어지며, 본 앱은 이미지를 추가하기만 할 뿐 기존 사진을 읽거나 접근하지 않습니다.</p>`,
      },
      {
        heading: `알림`,
        content: `<p>본 앱은 꿈 기록 리마인더와 같은 로컬 알림을 보낼 권한을 요청할 수 있습니다. 알림은 귀하의 기기에서 예약되며 외부 푸시 알림 서비스를 사용하지 않습니다. 기기 설정에서 언제든지 관리하거나 끌 수 있습니다.</p>`,
      },
      {
        heading: `아동 개인정보 보호`,
        content: `<p>본 앱은 13세 미만 아동을 대상으로 하지 않으며, 개발자는 아동의 개인정보를 고의로 수집하지 않습니다. AI 기능은 본 앱에서 명시적으로 동의한 후에만 작동합니다. 아동의 본 앱 사용과 관련해 우려 사항이 있으면 개발자에게 문의해 주십시오.</p>`,
      },
      {
        heading: `데이터 공유`,
        content: `<p>개발자는 본 앱의 기능을 제공하기 위해서만, 위에 설명된 서비스 제공업체와만 데이터를 공유합니다:</p>
<ul><li><strong>Cloudflare</strong> — 개발자 서버를 호스팅하고 서버로 오는 요청을 처리합니다.</li><li><strong>DeepSeek</strong> — 해석, 장면 설명, 패턴 요약을 만들기 위해 꿈의 텍스트(패턴의 경우 제목, 상징, 감정)를 받습니다.</li><li><strong>fal.ai</strong> — 일러스트를 만들기 위해 짧은 장면 설명을 받습니다.</li><li><strong>Apple</strong> — 구매를 처리하고, 기기 내 음성 인식을 사용할 수 없을 때 음성 인식 서비스로 음성 입력을 텍스트로 변환하며, 동기화를 켠 경우 일기를 귀하의 개인 iCloud에 저장합니다.</li></ul>
<p>개발자는 귀하의 데이터를 판매, 대여, 교환하지 않으며 광고나 마케팅 목적으로 공유하지 않습니다. DeepSeek의 서버는 중화인민공화국에 있고 fal.ai는 미국에 기반을 두고 있으므로, 귀하의 데이터는 귀하의 국가와 데이터 보호법이 다른 국가에서 처리될 수 있습니다. 귀하는 본 앱에서 동의함으로써 이러한 이전에 동의하게 됩니다.</p>`,
      },
      {
        heading: `데이터 보안`,
        content: `<p>본 앱과 개발자 서버 간, 그리고 개발자 서버와 DeepSeek 및 fal.ai 간의 모든 통신은 HTTPS/TLS로 암호화됩니다. 개발자는 꿈을 서버에 보관하지 않고 사용자 계정도 없으므로, 개발자 측에는 유출될 수 있는 일기 데이터베이스가 없습니다. 일기는 귀하의 기기와, 동기화를 켠 경우 개인 iCloud에 남습니다. Face ID 잠금을 켜면 인증은 iOS가 처리하며, 본 앱은 귀하의 생체 정보를 받지 않습니다.</p>`,
      },
      {
        heading: `귀하의 권리`,
        content: `<p>귀하는 자신의 데이터를 직접 관리할 수 있습니다:</p>
<ul><li><strong>동의 철회</strong> — 본 앱 설정에서 언제든지 동의를 철회할 수 있습니다. 철회 후에는 아무것도 전송되지 않으며, 일기 작성과 열람은 계속할 수 있습니다.</li><li><strong>일기 삭제</strong> — 본 앱에서 기록을 삭제하고, 본 앱의 iCloud 설정에서 iCloud 사본을 삭제하고, 본 앱을 삭제하면 기기에 저장된 모든 것이 제거됩니다.</li><li><strong>개발자 서버의 카운터</strong>에는 꿈의 내용이 없으며 귀하의 이름이나 Apple 계정과 연결되어 있지 않습니다. 일일 카운터는 자동으로 만료됩니다. 귀하와 연결되어 있지 않기 때문에 개발자는 보통 어떤 카운터가 귀하의 것인지 알 수 없지만, 어떤 요청이든 개발자에게 문의하실 수 있습니다.</li><li>이미 DeepSeek나 fal.ai로 전송된 데이터는 해당 업체의 개인정보 처리방침에 따라 처리됩니다.</li></ul>
<p>데이터에 관해 궁금한 점이 있거나 귀하의 국가 법률에 따른 권리를 행사하려면 개발자에게 문의해 주십시오.</p>`,
      },
      {
        heading: `본 방침의 변경`,
        content: `<p>개발자는 수시로 본 개인정보 처리방침을 업데이트할 수 있습니다. 변경 사항은 업데이트된 시행일과 함께 이 페이지에 반영됩니다. 정기적으로 본 방침을 확인하시기 바랍니다.</p>`,
      },
      {
        heading: `문의하기`,
        content: `<p>본 개인정보 처리방침에 대한 질문이나 우려 사항이 있으시면 다음으로 문의해 주십시오:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  zh: {
    title: `隐私政策`,
    effectiveDate: `生效日期：2026年10月5日`,
    intro: `独立开发者波格丹·尼基申（"我们"或"我方"）开发了 <strong>LDream</strong>（"本应用"）作为商业应用程序。本隐私政策说明本应用处理哪些信息、哪些内容留在您的设备上，以及您使用可选的 AI 功能时，哪些内容会被发送、发送到哪里以及原因。`,
    sections: [
      {
        heading: `概述`,
        content: `<p>LDream 是一本用于自我反思的私密梦日记。本应用无需创建帐户、登录或注册，不含广告，也不包含任何分析或跟踪 SDK。您的日记保存在您的设备上；如果您开启同步，也会保存在您的私人 iCloud 帐户中。解读、插画和"规律"均为可选功能：只有在您于本应用中明确同意后才会运行，并且只发送本政策所述的数据。</p>`,
      },
      {
        heading: `我们不收集的信息`,
        content: `<p>我们不收集以下任何信息：</p>
<ul><li>姓名、电子邮件地址或联系信息（除非您主动联系我们）</li><li>帐户或密码——本应用没有帐户</li><li>位置数据</li><li>广告标识符（IDFA）或任何用于跨应用和网站跟踪您的标识符</li><li>联系人、照片或其他个人文件</li><li>语音录音</li><li>使用分析或行为跟踪数据</li></ul>`,
      },
      {
        heading: `存储在您设备上的数据`,
        content: `<p>本应用在您的设备上本地存储以下数据：</p>
<ul><li><strong>梦日记记录</strong> — 梦境文本、标题和日期，以及随之保存的解读、象征和情绪。</li><li><strong>您创建的插画和"规律"汇总</strong>。</li><li><strong>应用偏好设置</strong> — 例如提醒、Face ID 锁和 iCloud 同步。</li><li><strong>订阅状态</strong> — 高级版使用权限的缓存标记。</li></ul>
<p><strong>语音输入</strong>由 Apple 的语音识别转换为文字：在设备和语言支持的情况下在您的设备上完成，否则由 Apple 的语音服务完成。音频绝不会发送给我们或我们的 AI 服务商，本应用也不会保存录音。</p>
<p>除下一节所述情况外，这些数据不会传输给我们。您可以随时在本应用中删除记录；删除本应用会清除设备上存储的所有数据。</p>`,
      },
      {
        heading: `AI 解读、插画与"规律"`,
        content: `<p><strong>先征得同意。</strong>在第一次生成解读、插画或"规律"汇总之前，LDream 会说明将发送哪些内容、发送到哪里，并请求您的明确同意。未经同意，不会发送任何内容。我们基于该同意处理以下数据。</p>
<p><strong>本应用发送到我们服务器的内容。</strong>我们的服务器是我们在 Cloudflare（Cloudflare Workers）上运营的一项小型服务。根据您使用的功能，本应用会发送：</p>
<ul><li><strong>解读</strong> — 梦境文本和界面语言（如果本应用识别出梦境文本所用的语言，也会一并发送），以便用您的语言作答。</li><li><strong>插画</strong> — 梦境文本。</li><li><strong>"规律"</strong>（高级版） — 所选周或月内各个梦的日期、标题、主要象征和情绪。生成"规律"时不会发送梦境全文。</li><li><strong>每次请求都会附带</strong> — 设备标识符（Apple 的供应商标识符 IDFV，在您设备上我们的所有应用中相同，且不是广告标识符）、应用版本和您的本地日期。我们仅将其用于执行使用限额和防止滥用。如果您订阅了高级版，本应用还会发送经签名的 App Store 交易信息，以便我们的服务器验证您的购买。</li></ul>
<p><strong>我们的服务器转发的内容。</strong></p>
<ul><li><strong>DeepSeek</strong> — 梦境文本，用于撰写解读。生成插画时，DeepSeek 会将梦境文本转换为一段简短的场景描述（如果图像服务拒绝该描述，还会生成一个更温和的版本）。生成"规律"时，DeepSeek 会收到上述标题、象征和情绪。DeepSeek 在位于中华人民共和国境内的服务器上处理这些请求。</li><li><strong>fal.ai</strong> — 仅接收简短的场景描述，用于绘制可选的插画。fal.ai 位于美国。生成的图像会下载到您的设备并保存在日记中。</li></ul>
<p>您的设备标识符、IP 地址和购买信息绝不会传给 DeepSeek 或 fal.ai。</p>
<p><strong>我们的服务器保存的内容。</strong>我们不保存您的梦境、解读或插画。服务器只保存与设备标识符关联的假名化使用次数计数器：该设备已使用的免费解读次数，以及其免费插画是否已使用（无期限保存，以免重新安装应用就能重置免费额度），以及高级版的每日使用次数（约三天后自动删除）。为避免连接中断后的重试被重复计数，请求结果可能会被缓存最多 10 分钟，之后自动删除。您的 IP 地址仅被短暂用于限制每分钟的请求次数，我们不会保存。</p>`,
      },
      {
        heading: `iCloud 同步`,
        content: `<p>如果您开启 iCloud 同步，您的日记将通过 Apple 的 CloudKit 保存在您的私人 iCloud 帐户中。这些数据受您的 Apple 帐户保护，我们无法访问。您可以在本应用的 iCloud 设置中，或在 iOS"设置"中管理 iCloud 储存空间，从 iCloud 删除您的日记。Apple 对 iCloud 数据的处理受 Apple 隐私政策约束（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）。</p>`,
      },
      {
        heading: `第三方服务`,
        content: `<h3>Apple（App Store、StoreKit、iCloud 和语音识别）</h3>
<p>购买和订阅完全由 Apple 通过 App Store 处理。我们不会收到您的付款信息、Apple 帐户详情或账单信息。如果您在不支持设备端语音识别的设备或语言上使用语音输入，将由 Apple 的语音服务转写音频；我们绝不会收到这些音频。Apple 对您数据的处理受 Apple 隐私政策约束（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）。</p>
<h3>Cloudflare（我们的服务器）</h3>
<p>我们的服务器运行在 Cloudflare Workers 上。请求以加密方式传输，并在 Cloudflare 的全球网络中处理，其中包括您所在国家/地区以外的数据中心。Cloudflare 对数据的处理受其隐私政策约束（<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>）。</p>
<h3>DeepSeek（解读、场景描述与"规律"）</h3>
<p>DeepSeek 在位于中华人民共和国境内的服务器上处理上述数据。DeepSeek 对数据的处理受其隐私政策约束（<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>）。</p>
<h3>fal.ai（插画）</h3>
<p>位于美国的 fal.ai 仅接收用于生成插画的简短场景描述。fal.ai 对数据的处理受其隐私政策约束（<a href="https://fal.ai/legal/privacy-policy" target="_blank" rel="noopener noreferrer">fal.ai/legal/privacy-policy</a>）。</p>
<h3>无分析、无广告</h3>
<p>本应用不集成任何第三方分析、广告、崩溃报告或社交媒体 SDK。我们不使用 Firebase、Google Analytics、Facebook SDK 或任何类似服务，也不会跨应用或网站跟踪您。</p>`,
      },
      {
        heading: `照片图库访问`,
        content: `<p>本应用可能会请求将插画保存到您的照片图库的权限。只有在您选择保存图像时才会这样做；本应用只会添加图像，不会读取或访问您现有的照片。</p>`,
      },
      {
        heading: `通知`,
        content: `<p>本应用可能会请求发送本地通知的权限，例如提醒您记录梦境。这些通知在您的设备上安排，不使用任何外部推送通知服务。您可以随时在设备"设置"中管理或关闭通知。</p>`,
      },
      {
        heading: `儿童隐私`,
        content: `<p>本应用不面向 13 岁以下的儿童，我们也不会故意收集儿童的个人信息。AI 功能只有在您于本应用中明确同意后才会运行。如果您对儿童使用本应用有任何顾虑，请联系我们。</p>`,
      },
      {
        heading: `数据共享`,
        content: `<p>我们仅为提供本应用的功能，与上述服务提供商共享数据：</p>
<ul><li><strong>Cloudflare</strong> — 托管我们的服务器并处理发往服务器的请求。</li><li><strong>DeepSeek</strong> — 接收梦境文本（生成"规律"时为标题、象征和情绪），用于生成解读、场景描述和"规律"汇总。</li><li><strong>fal.ai</strong> — 接收简短的场景描述，用于生成插画。</li><li><strong>Apple</strong> — 处理购买；在设备端语音识别不可用时，用其语音服务转写语音输入；如果您开启同步，还会将日记保存在您的私人 iCloud 中。</li></ul>
<p>我们不会出售、出租或交换您的数据，也不会为广告或营销目的共享这些数据。由于 DeepSeek 的服务器位于中华人民共和国、fal.ai 位于美国，您的数据可能会在数据保护法律与您所在国家/地区不同的国家/地区处理。您在本应用中表示同意，即表示同意此类传输。</p>`,
      },
      {
        heading: `数据安全`,
        content: `<p>本应用与我们服务器之间、以及我们的服务器与 DeepSeek 和 fal.ai 之间的所有通信均使用 HTTPS/TLS 加密。由于我们不在服务器上保存您的梦境，也没有用户帐户，因此我们这边不存在可能被泄露的日记数据库。您的日记保存在您的设备上；如果开启同步，也保存在您的私人 iCloud 中。如果您开启 Face ID 锁，身份验证由 iOS 处理，本应用绝不会获取您的生物识别数据。</p>`,
      },
      {
        heading: `您的权利`,
        content: `<p>您始终掌控自己的数据：</p>
<ul><li><strong>撤回同意</strong> — 您可以随时在本应用的设置中撤回同意。撤回后不会再发送任何内容；您仍可继续记录和阅读日记。</li><li><strong>删除日记</strong> — 在本应用中删除记录，在本应用的 iCloud 设置中删除 iCloud 中的副本，删除本应用即可清除设备上存储的所有内容。</li><li><strong>我们服务器上的计数器</strong>不包含任何梦境内容，也不与您的姓名或 Apple 帐户关联；每日计数器会自动过期。由于它们不与您关联，我们通常无法判断哪些计数器属于您，但您可以随时向我们提出任何请求。</li><li>已发送给 DeepSeek 或 fal.ai 的数据，按照其各自的隐私政策处理。</li></ul>
<p>如果您对自己的数据有任何疑问，或希望行使您所在国家/地区法律赋予的权利，请联系我们。</p>`,
      },
      {
        heading: `本政策的变更`,
        content: `<p>我们可能会不时更新本隐私政策。任何变更将在本页面上反映，并附有更新的生效日期。我们建议您定期查看本政策。</p>`,
      },
      {
        heading: `联系我们`,
        content: `<p>如果您对本隐私政策有任何疑问或关注，请通过以下方式联系我们：</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  ar: {
    title: `سياسة الخصوصية`,
    effectiveDate: `تاريخ السريان: 5 أكتوبر 2026`,
    intro: `قام المطوّر المستقل بوغدان نيكيشين ("نحن" أو "لنا" أو "خاصتنا") بتطوير <strong>LDream</strong> ("التطبيق") كتطبيق تجاري. توضح سياسة الخصوصية هذه المعلومات التي يتعامل معها التطبيق، وما يبقى على جهازك، وما يُرسل وإلى أين ولماذا عند استخدامك لميزات الذكاء الاصطناعي الاختيارية.`,
    sections: [
      {
        heading: `نظرة عامة`,
        content: `<p>LDream يوميات أحلام خاصة للتأمل في الذات. لا يتطلب التطبيق حسابًا أو تسجيل دخول أو تسجيلًا، ولا يحتوي على إعلانات، ولا يتضمن أي حزم تطوير للتحليلات أو التتبع. تُحفظ يومياتك على جهازك، وفي حسابك الخاص على iCloud إذا فعّلت المزامنة. التفسيرات والرسوم التوضيحية و«الأنماط» ميزات اختيارية: لا تعمل إلا بعد موافقتك الصريحة داخل التطبيق، ولا ترسل إلا البيانات الموضحة في هذه السياسة.</p>`,
      },
      {
        heading: `المعلومات التي لا نجمعها`,
        content: `<p>لا نجمع أيًا مما يلي:</p>
<ul><li>الأسماء أو عناوين البريد الإلكتروني أو معلومات الاتصال (ما لم تراسلنا بنفسك)</li><li>الحسابات أو كلمات المرور — لا توجد حسابات في التطبيق</li><li>بيانات الموقع</li><li>معرّف الإعلانات (IDFA) أو أي معرّف يُستخدم لتتبعك عبر التطبيقات والمواقع</li><li>جهات الاتصال أو الصور أو الملفات الشخصية الأخرى</li><li>التسجيلات الصوتية</li><li>تحليلات الاستخدام أو بيانات تتبع السلوك</li></ul>`,
      },
      {
        heading: `البيانات المخزنة على جهازك`,
        content: `<p>يخزن التطبيق البيانات التالية محليًا على جهازك:</p>
<ul><li><strong>مدوّنات يوميات الأحلام</strong> — نصوص أحلامك وعناوينها وتواريخها، والتفسيرات والرموز والمشاعر المحفوظة معها.</li><li><strong>الرسوم التوضيحية وملخصات «الأنماط»</strong> التي أنشأتها.</li><li><strong>تفضيلات التطبيق</strong> — مثل التذكيرات وقفل Face ID ومزامنة iCloud.</li><li><strong>حالة الاشتراك</strong> — مؤشر مخزّن مؤقتًا لوصولك إلى بريميوم.</li></ul>
<p>يُحوَّل <strong>الإدخال الصوتي</strong> إلى نص بواسطة ميزة التعرف على الكلام من Apple: على جهازك إذا كان جهازك ولغتك يدعمان ذلك، وإلا فبواسطة خدمة الكلام من Apple. لا يُرسل الصوت أبدًا إلينا أو إلى مزوّدي الذكاء الاصطناعي لدينا، ولا يحتفظ التطبيق بالتسجيلات.</p>
<p>لا تُنقل هذه البيانات إلينا إلا كما هو موضح في القسم التالي. يمكنك حذف المدوّنات من التطبيق في أي وقت، ويؤدي حذف التطبيق إلى إزالة جميع البيانات المخزنة على الجهاز.</p>`,
      },
      {
        heading: `التفسيرات والرسوم التوضيحية و«الأنماط» بالذكاء الاصطناعي`,
        content: `<p><strong>الموافقة أولًا.</strong> قبل أول تفسير أو رسم توضيحي أو ملخص «أنماط»، يشرح LDream ما سيُرسل وإلى أين، ويطلب موافقتك الصريحة. ومن دونها لا يُرسل أي شيء. نعالج البيانات الموضحة أدناه استنادًا إلى هذه الموافقة.</p>
<p><strong>ما يرسله التطبيق إلى خادمنا.</strong> خادمنا خدمة صغيرة نشغّلها على Cloudflare (Cloudflare Workers). بحسب الميزة التي تستخدمها، يرسل التطبيق:</p>
<ul><li><strong>التفسير</strong> — نص الحلم ولغة الواجهة (ولغة كتابة الحلم إن تعرّف عليها التطبيق)، لتصلك الإجابة بلغتك.</li><li><strong>الرسم التوضيحي</strong> — نص الحلم.</li><li><strong>«الأنماط»</strong> (بريميوم) — لأحلام الأسبوع أو الشهر المختار: تواريخها وعناوينها ورموزها الرئيسية ومشاعرها. لا يُرسل النص الكامل لأحلامك من أجل «الأنماط».</li><li><strong>مع كل طلب</strong> — معرّف الجهاز (معرّف المورّد من Apple، IDFV، وهو واحد لجميع تطبيقاتنا على جهازك وليس معرّف الإعلانات)، وإصدار التطبيق، وتاريخك المحلي. نستخدمها فقط لتطبيق حدود الاستخدام ومنع إساءة الاستخدام. وإذا كان لديك بريميوم، يرسل التطبيق أيضًا معاملة App Store الموقّعة ليتحقق خادمنا من عملية الشراء.</li></ul>
<p><strong>ما يمرره خادمنا.</strong></p>
<ul><li><strong>DeepSeek</strong> — نص الحلم، لكتابة التفسير. ولإنشاء رسم توضيحي، تحوّل DeepSeek نص الحلم إلى وصف قصير للمشهد (وإلى صيغة مخففة إذا رفضته خدمة الصور). ولـ«الأنماط»، تتلقى DeepSeek العناوين والرموز والمشاعر المذكورة أعلاه. تعالج DeepSeek هذه الطلبات على خوادم موجودة في جمهورية الصين الشعبية.</li><li><strong>fal.ai</strong> — وصف المشهد القصير فقط، لرسم الرسم التوضيحي الاختياري. يقع مقر fal.ai في الولايات المتحدة. تُنزَّل الصورة الجاهزة إلى جهازك وتُحفظ في يومياتك.</li></ul>
<p>لا يُمرَّر معرّف جهازك ولا عنوان IP ولا تفاصيل مشترياتك أبدًا إلى DeepSeek أو fal.ai.</p>
<p><strong>ما يحتفظ به خادمنا.</strong> لا نحتفظ بأحلامك ولا بالتفسيرات ولا بالرسوم التوضيحية. يخزن الخادم فقط عدادات استخدام مستعارة مرتبطة بمعرّف الجهاز: عدد التفسيرات المجانية التي استخدمها الجهاز، وما إذا كان قد استخدم رسمه التوضيحي المجاني (تُحفظ دون حد زمني حتى لا يمكن إعادة ضبط الحصة المجانية بإعادة تثبيت التطبيق)، والاستخدام اليومي لبريميوم الذي يُحذف تلقائيًا بعد نحو ثلاثة أيام. وحتى لا تُحتسب إعادة المحاولة بعد انقطاع الاتصال مرتين، قد تُخزَّن نتيجة الطلب مؤقتًا لمدة تصل إلى 10 دقائق ثم تُحذف تلقائيًا. يُستخدم عنوان IP لحظيًا فقط للحد من عدد الطلبات في الدقيقة، ولا نخزنه.</p>`,
      },
      {
        heading: `مزامنة iCloud`,
        content: `<p>إذا فعّلت مزامنة iCloud، تُحفظ يومياتك في حسابك الخاص على iCloud باستخدام CloudKit من Apple. هذه البيانات محمية بحساب Apple الخاص بك ولا يمكننا الوصول إليها. يمكنك حذف يومياتك من iCloud من إعدادات iCloud داخل التطبيق، أو بإدارة مساحة تخزين iCloud في إعدادات iOS. يخضع تعامل Apple مع بيانات iCloud لسياسة خصوصية Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `خدمات الطرف الثالث`,
        content: `<h3>Apple (App Store وStoreKit وiCloud والتعرف على الكلام)</h3>
<p>تُعالج المشتريات والاشتراكات بالكامل بواسطة Apple عبر App Store. لا نتلقى معلومات الدفع أو تفاصيل حساب Apple أو بيانات الفوترة الخاصة بك. وإذا استخدمت الإدخال الصوتي على جهاز أو بلغة لا يدعمان التعرف على الكلام على الجهاز، فإن خدمة الكلام من Apple تحوّل الصوت إلى نص؛ ولا نتلقى نحن هذا الصوت أبدًا. يخضع تعامل Apple مع بياناتك لسياسة خصوصية Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>
<h3>Cloudflare (خادمنا)</h3>
<p>يعمل خادمنا على Cloudflare Workers. تُنقل الطلبات مشفّرة وتُعالج على شبكة Cloudflare العالمية، بما في ذلك مراكز بيانات خارج بلدك. يخضع تعامل Cloudflare مع البيانات لسياسة الخصوصية الخاصة بها (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek (التفسيرات وأوصاف المشاهد و«الأنماط»)</h3>
<p>تعالج DeepSeek البيانات الموضحة أعلاه على خوادم في جمهورية الصين الشعبية. يخضع تعامل DeepSeek مع البيانات لسياسة الخصوصية الخاصة بها (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>fal.ai (الرسوم التوضيحية)</h3>
<p>تتلقى fal.ai، ومقرها الولايات المتحدة، وصف المشهد القصير فقط لإنشاء الرسم التوضيحي. يخضع تعامل fal.ai مع البيانات لسياسة الخصوصية الخاصة بها (<a href="https://fal.ai/legal/privacy-policy" target="_blank" rel="noopener noreferrer">fal.ai/legal/privacy-policy</a>).</p>
<h3>لا تحليلات ولا إعلانات</h3>
<p>لا يدمج التطبيق أي حزم تطوير خارجية للتحليلات أو الإعلانات أو تقارير الأعطال أو وسائل التواصل الاجتماعي. لا نستخدم Firebase أو Google Analytics أو Facebook SDK أو أي خدمات مشابهة، ولا نتتبعك عبر التطبيقات أو المواقع.</p>`,
      },
      {
        heading: `الوصول إلى مكتبة الصور`,
        content: `<p>قد يطلب التطبيق إذنًا لحفظ الرسوم التوضيحية في مكتبة الصور الخاصة بك. لا يحدث ذلك إلا عندما تختار حفظ صورة؛ فالتطبيق يضيف الصور فقط ولا يقرأ صورك الحالية أو يصل إليها.</p>`,
      },
      {
        heading: `الإشعارات`,
        content: `<p>قد يطلب التطبيق إذنًا لإرسال إشعارات محلية، مثل تذكيرات بتدوين أحلامك. تُجدول هذه الإشعارات على جهازك ولا تستخدم أي خدمة إشعارات دفع خارجية. يمكنك إدارتها أو إيقافها في أي وقت من إعدادات جهازك.</p>`,
      },
      {
        heading: `خصوصية الأطفال`,
        content: `<p>التطبيق غير موجّه للأطفال دون سن 13 عامًا، ولا نجمع عن علم أي معلومات شخصية من الأطفال. لا تعمل ميزات الذكاء الاصطناعي إلا بعد موافقة صريحة داخل التطبيق. إذا كانت لديك مخاوف بشأن استخدام طفل للتطبيق، فيرجى التواصل معنا.</p>`,
      },
      {
        heading: `مشاركة البيانات`,
        content: `<p>لا نشارك البيانات إلا مع مزوّدي الخدمات الموضحين أعلاه، ولغرض تقديم ميزات التطبيق فقط:</p>
<ul><li><strong>Cloudflare</strong> — تستضيف خادمنا وتعالج الطلبات الواردة إليه.</li><li><strong>DeepSeek</strong> — تتلقى نص الحلم (أو العناوين والرموز والمشاعر في حالة «الأنماط») لإنشاء التفسيرات وأوصاف المشاهد وملخصات «الأنماط».</li><li><strong>fal.ai</strong> — تتلقى وصفًا قصيرًا للمشهد لإنشاء الرسوم التوضيحية.</li><li><strong>Apple</strong> — تعالج المشتريات، وتحوّل الإدخال الصوتي إلى نص عبر خدمة الكلام الخاصة بها عندما لا يتوفر التعرف على الكلام على الجهاز، وتحفظ يومياتك في iCloud الخاص بك إذا فعّلت المزامنة.</li></ul>
<p>لا نبيع بياناتك ولا نؤجرها ولا نتاجر بها، ولا نشاركها لأغراض الإعلان أو التسويق. ولأن خوادم DeepSeek موجودة في جمهورية الصين الشعبية ومقر fal.ai في الولايات المتحدة، فقد تُعالج بياناتك في بلدان تختلف قوانين حماية البيانات فيها عن قوانين بلدك. وأنت توافق على هذا النقل عندما تمنح موافقتك داخل التطبيق.</p>`,
      },
      {
        heading: `أمان البيانات`,
        content: `<p>جميع الاتصالات بين التطبيق وخادمنا، وبين خادمنا وDeepSeek وfal.ai، مشفّرة باستخدام HTTPS/TLS. ولأننا لا نحتفظ بأحلامك على خادمنا ولا توجد لدينا حسابات مستخدمين، فلا توجد لدينا قاعدة بيانات ليومياتك يمكن اختراقها. تبقى يومياتك على جهازك، وفي iCloud الخاص بك إذا فعّلت المزامنة. وإذا فعّلت قفل Face ID، يتولى iOS عملية المصادقة، ولا يتلقى التطبيق بياناتك البيومترية أبدًا.</p>`,
      },
      {
        heading: `حقوقك`,
        content: `<p>تبقى بياناتك تحت سيطرتك:</p>
<ul><li><strong>سحب الموافقة</strong> — يمكنك سحب موافقتك في أي وقت من إعدادات التطبيق. بعد ذلك لا يُرسل أي شيء، ويمكنك متابعة كتابة يومياتك وقراءتها.</li><li><strong>حذف يومياتك</strong> — احذف المدوّنات من التطبيق، واحذف نسخة iCloud من إعدادات iCloud داخل التطبيق، واحذف التطبيق لإزالة كل ما هو مخزن على الجهاز.</li><li><strong>العدادات على خادمنا</strong> لا تحتوي على أي محتوى من أحلامك ولا ترتبط باسمك أو بحساب Apple الخاص بك، وتنتهي صلاحية العدادات اليومية تلقائيًا. ولأنها غير مرتبطة بك، فلا يمكننا عادةً معرفة أي العدادات تخصك، لكن يمكنك التواصل معنا بأي طلب.</li><li>البيانات التي أُرسلت بالفعل إلى DeepSeek أو fal.ai تُعالج وفق سياسات الخصوصية الخاصة بهما.</li></ul>
<p>إذا كانت لديك أسئلة حول بياناتك أو أردت ممارسة حقوقك بموجب قوانين بلدك، فيرجى التواصل معنا.</p>`,
      },
      {
        heading: `التغييرات على هذه السياسة`,
        content: `<p>قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم عكس أي تغييرات على هذه الصفحة مع تاريخ سريان محدث. نشجعك على مراجعة هذه السياسة بشكل دوري.</p>`,
      },
      {
        heading: `اتصل بنا`,
        content: `<p>إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه، يرجى الاتصال بنا على:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  hi: {
    title: `गोपनीयता नीति`,
    effectiveDate: `प्रभावी तिथि: 5 अक्टूबर 2026`,
    intro: `स्वतंत्र डेवलपर बोगदान निकिशिन ("हम", "हमारा" या "हमें") ने <strong>LDream</strong> ("ऐप") को एक वाणिज्यिक एप्लिकेशन के रूप में विकसित किया है। यह गोपनीयता नीति बताती है कि ऐप कौन-सी जानकारी संभालता है, क्या आपके डिवाइस पर रहता है, और जब आप इसकी वैकल्पिक AI सुविधाओं का उपयोग करते हैं तो क्या, कहाँ और क्यों भेजा जाता है।`,
    sections: [
      {
        heading: `अवलोकन`,
        content: `<p>LDream आत्म-चिंतन के लिए एक निजी ड्रीम डायरी है। ऐप के लिए किसी खाते, लॉगिन या पंजीकरण की ज़रूरत नहीं है, इसमें कोई विज्ञापन नहीं है और कोई एनालिटिक्स या ट्रैकिंग SDK शामिल नहीं है। आपकी डायरी आपके डिवाइस पर और, यदि आप सिंक चालू करते हैं, तो आपके निजी iCloud खाते में संग्रहीत होती है। व्याख्याएँ, चित्र और पैटर्न वैकल्पिक हैं: ये केवल ऐप में आपकी स्पष्ट सहमति के बाद काम करते हैं और केवल वही डेटा भेजते हैं जो इस नीति में बताया गया है।</p>`,
      },
      {
        heading: `जानकारी जो हम एकत्र नहीं करते`,
        content: `<p>हम निम्नलिखित में से कुछ भी एकत्र नहीं करते:</p>
<ul><li>नाम, ईमेल पते या संपर्क जानकारी (जब तक आप स्वयं हमें न लिखें)</li><li>खाते या पासवर्ड — ऐप में कोई खाता नहीं होता</li><li>स्थान डेटा</li><li>विज्ञापन पहचानकर्ता (IDFA) या ऐप्स और वेबसाइटों में आपको ट्रैक करने वाला कोई भी पहचानकर्ता</li><li>संपर्क, फ़ोटो या अन्य व्यक्तिगत फ़ाइलें</li><li>आवाज़ की रिकॉर्डिंग</li><li>उपयोग विश्लेषण या व्यवहार ट्रैकिंग डेटा</li></ul>`,
      },
      {
        heading: `आपके डिवाइस पर संग्रहीत डेटा`,
        content: `<p>ऐप निम्नलिखित डेटा आपके डिवाइस पर स्थानीय रूप से संग्रहीत करता है:</p>
<ul><li><strong>ड्रीम डायरी की प्रविष्टियाँ</strong> — आपके सपनों का टेक्स्ट, उनके शीर्षक और तारीखें, और उनके साथ सहेजी गई व्याख्याएँ, प्रतीक और भावनाएँ।</li><li><strong>आपके बनाए चित्र और पैटर्न सारांश</strong>।</li><li><strong>ऐप प्राथमिकताएँ</strong> — जैसे रिमाइंडर, Face ID लॉक और iCloud सिंक।</li><li><strong>सदस्यता स्थिति</strong> — आपकी प्रीमियम पहुँच का कैश्ड संकेतक।</li></ul>
<p><strong>वॉइस इनपुट</strong> को Apple की वाक् पहचान टेक्स्ट में बदलती है: यदि आपका डिवाइस और भाषा इसका समर्थन करते हैं तो आपके डिवाइस पर, अन्यथा Apple की वाक् सेवा द्वारा। ऑडियो कभी भी हमें या हमारे AI प्रदाताओं को नहीं भेजा जाता, और ऐप रिकॉर्डिंग संग्रहीत नहीं करता।</p>
<p>अगले अनुभाग में बताई गई स्थितियों को छोड़कर यह डेटा हमें नहीं भेजा जाता। आप कभी भी ऐप में प्रविष्टियाँ हटा सकते हैं; ऐप हटाने से डिवाइस पर संग्रहीत सारा डेटा मिट जाता है।</p>`,
      },
      {
        heading: `AI व्याख्याएँ, चित्र और पैटर्न`,
        content: `<p><strong>पहले सहमति।</strong> पहली व्याख्या, चित्र या पैटर्न सारांश से पहले LDream बताता है कि क्या और कहाँ भेजा जाएगा, और आपकी स्पष्ट सहमति माँगता है। सहमति के बिना कुछ भी नहीं भेजा जाता। नीचे बताए गए डेटा को हम इसी सहमति के आधार पर संसाधित करते हैं।</p>
<p><strong>ऐप हमारे सर्वर को क्या भेजता है।</strong> हमारा सर्वर एक छोटी सेवा है जिसे हम Cloudflare (Cloudflare Workers) पर चलाते हैं। आप जिस सुविधा का उपयोग करते हैं, उसके अनुसार ऐप भेजता है:</p>
<ul><li><strong>व्याख्या</strong> — सपने का टेक्स्ट और इंटरफ़ेस की भाषा (और, यदि ऐप पहचान ले, तो वह भाषा जिसमें सपना लिखा गया है), ताकि उत्तर आपकी भाषा में आए।</li><li><strong>चित्र</strong> — सपने का टेक्स्ट।</li><li><strong>पैटर्न</strong> (प्रीमियम) — चुने गए सप्ताह या महीने के सपनों की तारीखें, शीर्षक, मुख्य प्रतीक और भावनाएँ। पैटर्न के लिए आपके सपनों का पूरा टेक्स्ट नहीं भेजा जाता।</li><li><strong>हर अनुरोध के साथ</strong> — एक डिवाइस पहचानकर्ता (Apple का आइडेंटिफ़ायर फ़ॉर वेंडर, IDFV, जो आपके डिवाइस पर हमारे सभी ऐप्स के लिए एक ही होता है और विज्ञापन पहचानकर्ता नहीं है), ऐप का संस्करण और आपकी स्थानीय तारीख। हम इनका उपयोग केवल उपयोग सीमाएँ लागू करने और दुरुपयोग रोकने के लिए करते हैं। यदि आपके पास प्रीमियम है, तो ऐप हस्ताक्षरित App Store लेन-देन भी भेजता है ताकि हमारा सर्वर आपकी खरीद की पुष्टि कर सके।</li></ul>
<p><strong>हमारा सर्वर आगे क्या भेजता है।</strong></p>
<ul><li><strong>DeepSeek</strong> — व्याख्या लिखने के लिए सपने का टेक्स्ट। चित्र के लिए DeepSeek सपने के टेक्स्ट को दृश्य के एक छोटे विवरण में बदलता है (और यदि छवि सेवा उसे अस्वीकार कर दे, तो एक नरम संस्करण में)। पैटर्न के लिए DeepSeek को ऊपर बताए गए शीर्षक, प्रतीक और भावनाएँ मिलती हैं। DeepSeek इन अनुरोधों को चीनी जनवादी गणराज्य में स्थित सर्वरों पर संसाधित करता है।</li><li><strong>fal.ai</strong> — वैकल्पिक चित्र बनाने के लिए केवल दृश्य का छोटा विवरण। fal.ai संयुक्त राज्य अमेरिका में स्थित है। तैयार छवि आपके डिवाइस पर डाउनलोड होकर आपकी डायरी में सहेजी जाती है।</li></ul>
<p>आपका डिवाइस पहचानकर्ता, IP पता और खरीद विवरण कभी भी DeepSeek या fal.ai को नहीं भेजे जाते।</p>
<p><strong>हमारा सर्वर क्या रखता है।</strong> हम आपके सपने, व्याख्याएँ या चित्र नहीं रखते। सर्वर केवल डिवाइस पहचानकर्ता से जुड़े छद्मनामी उपयोग काउंटर संग्रहीत करता है: डिवाइस ने कितनी मुफ़्त व्याख्याएँ इस्तेमाल कीं और क्या उसका मुफ़्त चित्र इस्तेमाल हो चुका है (बिना समय-सीमा के रखे जाते हैं, ताकि ऐप दोबारा इंस्टॉल करके मुफ़्त कोटा रीसेट न किया जा सके), और प्रीमियम का दैनिक उपयोग, जो लगभग तीन दिन बाद अपने आप हट जाता है। कनेक्शन टूटने के बाद दोबारा भेजा गया अनुरोध दो बार न गिना जाए, इसके लिए किसी अनुरोध का परिणाम अधिकतम 10 मिनट तक कैश किया जा सकता है, जिसके बाद वह अपने आप हट जाता है। आपका IP पता केवल प्रति मिनट अनुरोधों की संख्या सीमित करने के लिए क्षणभर इस्तेमाल होता है और हम उसे संग्रहीत नहीं करते।</p>`,
      },
      {
        heading: `iCloud सिंक`,
        content: `<p>यदि आप iCloud सिंक चालू करते हैं, तो आपकी डायरी Apple के CloudKit के माध्यम से आपके निजी iCloud खाते में संग्रहीत होती है। यह डेटा आपके Apple खाते द्वारा सुरक्षित है और हम इस तक नहीं पहुँच सकते। आप ऐप की iCloud सेटिंग्स से, या iOS सेटिंग्स में अपना iCloud संग्रहण प्रबंधित करके, अपनी डायरी को iCloud से हटा सकते हैं। Apple द्वारा iCloud डेटा का प्रबंधन Apple की गोपनीयता नीति (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>) के अधीन है।</p>`,
      },
      {
        heading: `तृतीय-पक्ष सेवाएँ`,
        content: `<h3>Apple (App Store, StoreKit, iCloud और वाक् पहचान)</h3>
<p>खरीदारी और सदस्यताएँ पूरी तरह Apple द्वारा App Store के माध्यम से संसाधित की जाती हैं। हमें आपकी भुगतान जानकारी, Apple खाते का विवरण या बिलिंग जानकारी नहीं मिलती। यदि आप ऐसे डिवाइस या भाषा में वॉइस इनपुट का उपयोग करते हैं जो डिवाइस पर वाक् पहचान का समर्थन नहीं करती, तो Apple की वाक् सेवा ऑडियो को टेक्स्ट में बदलती है; वह ऑडियो हमें कभी नहीं मिलता। Apple द्वारा आपके डेटा का प्रबंधन Apple की गोपनीयता नीति (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>) के अधीन है।</p>
<h3>Cloudflare (हमारा सर्वर)</h3>
<p>हमारा सर्वर Cloudflare Workers पर चलता है। अनुरोध एन्क्रिप्टेड रूप में भेजे जाते हैं और Cloudflare के वैश्विक नेटवर्क पर संसाधित होते हैं, जिसमें आपके देश के बाहर के डेटा सेंटर भी शामिल हो सकते हैं। Cloudflare द्वारा डेटा का प्रबंधन उसकी गोपनीयता नीति (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>) के अधीन है।</p>
<h3>DeepSeek (व्याख्याएँ, दृश्य विवरण और पैटर्न)</h3>
<p>DeepSeek ऊपर बताए गए डेटा को चीनी जनवादी गणराज्य में स्थित सर्वरों पर संसाधित करता है। DeepSeek द्वारा डेटा का प्रबंधन उसकी गोपनीयता नीति (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>) के अधीन है।</p>
<h3>fal.ai (चित्र)</h3>
<p>संयुक्त राज्य अमेरिका में स्थित fal.ai को चित्र बनाने के लिए केवल दृश्य का छोटा विवरण मिलता है। fal.ai द्वारा डेटा का प्रबंधन उसकी गोपनीयता नीति (<a href="https://fal.ai/legal/privacy-policy" target="_blank" rel="noopener noreferrer">fal.ai/legal/privacy-policy</a>) के अधीन है।</p>
<h3>कोई एनालिटिक्स या विज्ञापन नहीं</h3>
<p>ऐप में कोई तृतीय-पक्ष एनालिटिक्स, विज्ञापन, क्रैश रिपोर्टिंग या सोशल मीडिया SDK शामिल नहीं है। हम Firebase, Google Analytics, Facebook SDK या ऐसी किसी सेवा का उपयोग नहीं करते, और ऐप्स या वेबसाइटों में आपको ट्रैक नहीं करते।</p>`,
      },
      {
        heading: `फ़ोटो लाइब्रेरी पहुँच`,
        content: `<p>ऐप चित्रों को आपकी फ़ोटो लाइब्रेरी में सहेजने की अनुमति माँग सकता है। ऐसा केवल तब होता है जब आप कोई छवि सहेजना चुनते हैं; ऐप केवल छवियाँ जोड़ता है और आपकी मौजूदा फ़ोटो को न पढ़ता है, न एक्सेस करता है।</p>`,
      },
      {
        heading: `अधिसूचनाएँ`,
        content: `<p>ऐप स्थानीय अधिसूचनाएँ भेजने की अनुमति माँग सकता है, जैसे सपने दर्ज करने के रिमाइंडर। ये आपके डिवाइस पर शेड्यूल होती हैं और किसी बाहरी पुश नोटिफ़िकेशन सेवा का उपयोग नहीं करतीं। आप इन्हें कभी भी अपने डिवाइस की सेटिंग्स में प्रबंधित या बंद कर सकते हैं।</p>`,
      },
      {
        heading: `बच्चों की गोपनीयता`,
        content: `<p>ऐप 13 वर्ष से कम उम्र के बच्चों के लिए नहीं है, और हम जानबूझकर बच्चों से कोई व्यक्तिगत जानकारी एकत्र नहीं करते। AI सुविधाएँ केवल ऐप में स्पष्ट सहमति के बाद काम करती हैं। यदि किसी बच्चे द्वारा ऐप के उपयोग को लेकर आपको कोई चिंता है, तो कृपया हमसे संपर्क करें।</p>`,
      },
      {
        heading: `डेटा साझाकरण`,
        content: `<p>हम डेटा केवल ऊपर बताए गए सेवा प्रदाताओं के साथ और केवल ऐप की सुविधाएँ देने के लिए साझा करते हैं:</p>
<ul><li><strong>Cloudflare</strong> — हमारे सर्वर को होस्ट करता है और उस तक आने वाले अनुरोधों को संसाधित करता है।</li><li><strong>DeepSeek</strong> — व्याख्याएँ, दृश्य विवरण और पैटर्न सारांश बनाने के लिए सपने का टेक्स्ट (पैटर्न के लिए शीर्षक, प्रतीक और भावनाएँ) प्राप्त करता है।</li><li><strong>fal.ai</strong> — चित्र बनाने के लिए दृश्य का छोटा विवरण प्राप्त करता है।</li><li><strong>Apple</strong> — खरीदारी संसाधित करता है, डिवाइस पर वाक् पहचान उपलब्ध न होने पर अपनी वाक् सेवा से वॉइस इनपुट को टेक्स्ट में बदलता है, और यदि आप सिंक चालू करते हैं, तो आपकी डायरी आपके निजी iCloud में संग्रहीत करता है।</li></ul>
<p>हम आपका डेटा न बेचते हैं, न किराए पर देते हैं, न उसका आदान-प्रदान करते हैं, और न ही उसे विज्ञापन या मार्केटिंग के लिए साझा करते हैं। चूँकि DeepSeek के सर्वर चीनी जनवादी गणराज्य में हैं और fal.ai संयुक्त राज्य अमेरिका में स्थित है, इसलिए आपका डेटा ऐसे देशों में संसाधित हो सकता है जिनके डेटा संरक्षण कानून आपके देश से भिन्न हैं। ऐप में सहमति देकर आप इस हस्तांतरण के लिए सहमति देते हैं।</p>`,
      },
      {
        heading: `डेटा सुरक्षा`,
        content: `<p>ऐप और हमारे सर्वर के बीच, और हमारे सर्वर तथा DeepSeek और fal.ai के बीच सारा संचार HTTPS/TLS से एन्क्रिप्ट किया जाता है। चूँकि हम आपके सपने अपने सर्वर पर नहीं रखते और हमारे पास उपयोगकर्ता खाते नहीं हैं, इसलिए हमारी ओर आपकी डायरी का कोई डेटाबेस नहीं है जिसमें सेंध लग सके। आपकी डायरी आपके डिवाइस पर और, यदि आप सिंक चालू करते हैं, तो आपके निजी iCloud में रहती है। यदि आप Face ID लॉक चालू करते हैं, तो प्रमाणीकरण iOS करता है; ऐप को आपका बायोमेट्रिक डेटा कभी नहीं मिलता।</p>`,
      },
      {
        heading: `आपके अधिकार`,
        content: `<p>आपका डेटा आपके नियंत्रण में रहता है:</p>
<ul><li><strong>सहमति वापस लें</strong> — आप कभी भी ऐप की सेटिंग्स में अपनी सहमति वापस ले सकते हैं। इसके बाद कुछ भी नहीं भेजा जाता; आप अपनी डायरी लिखना और पढ़ना जारी रख सकते हैं।</li><li><strong>अपनी डायरी हटाएँ</strong> — ऐप में प्रविष्टियाँ हटाएँ, ऐप की iCloud सेटिंग्स में iCloud की प्रति हटाएँ, और डिवाइस पर संग्रहीत सब कुछ मिटाने के लिए ऐप हटा दें।</li><li><strong>हमारे सर्वर के काउंटर</strong> में सपनों की कोई सामग्री नहीं होती और वे आपके नाम या Apple खाते से जुड़े नहीं होते; दैनिक काउंटर अपने आप समाप्त हो जाते हैं। चूँकि वे आपसे जुड़े नहीं हैं, इसलिए आम तौर पर हम यह नहीं जान सकते कि कौन-से काउंटर आपके हैं, लेकिन आप किसी भी अनुरोध के लिए हमसे संपर्क कर सकते हैं।</li><li>DeepSeek या fal.ai को पहले ही भेजा जा चुका डेटा उनकी गोपनीयता नीतियों के अनुसार संभाला जाता है।</li></ul>
<p>यदि आपके डेटा के बारे में कोई प्रश्न है या आप अपने देश के कानूनों के तहत अपने अधिकारों का उपयोग करना चाहते हैं, तो कृपया हमसे संपर्क करें।</p>`,
      },
      {
        heading: `इस नीति में परिवर्तन`,
        content: `<p>हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। कोई भी परिवर्तन इस पृष्ठ पर अपडेट की गई प्रभावी तिथि के साथ दर्शाया जाएगा। हम आपको समय-समय पर इस नीति की समीक्षा करने के लिए प्रोत्साहित करते हैं।</p>`,
      },
      {
        heading: `हमसे संपर्क करें`,
        content: `<p>यदि आपके पास इस गोपनीयता नीति के बारे में कोई प्रश्न या चिंताएँ हैं, तो कृपया हमसे संपर्क करें:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  he: {
    title: `מדיניות פרטיות`,
    effectiveDate: `תאריך תחילה: 5 באוקטובר 2026`,
    intro: `בוגדן ניקישין, מפתח עצמאי ("אנחנו", "שלנו" או "אותנו"), פיתח את <strong>LDream</strong> ("האפליקציה") כאפליקציה מסחרית. מדיניות פרטיות זו מסבירה באיזה מידע האפליקציה מטפלת, מה נשאר במכשיר שלכם, ומה נשלח, לאן ולמה כשאתם משתמשים בתכונות הבינה המלאכותית האופציונליות שלה.`,
    sections: [
      {
        heading: `סקירה כללית`,
        content: `<p>LDream הוא יומן חלומות פרטי להתבוננות עצמית. האפליקציה אינה דורשת חשבון, התחברות או הרשמה, אין בה פרסומות והיא אינה כוללת SDK לאנליטיקה או למעקב. היומן נשמר במכשיר שלכם, ואם תפעילו סנכרון — גם בחשבון ה-iCloud הפרטי שלכם. פירושים, איורים ו"דפוסים" הם תכונות אופציונליות: הם פועלים רק לאחר הסכמתכם המפורשת באפליקציה, ושולחים רק את הנתונים המתוארים במדיניות זו.</p>`,
      },
      {
        heading: `מידע שאנחנו לא אוספים`,
        content: `<p>איננו אוספים אף אחד מהבאים:</p>
<ul><li>שמות, כתובות דוא"ל או פרטי קשר (אלא אם תכתבו לנו)</li><li>חשבונות או סיסמאות — באפליקציה אין חשבונות</li><li>נתוני מיקום</li><li>מזהה הפרסום (IDFA) או כל מזהה המשמש למעקב אחריכם בין אפליקציות ואתרים</li><li>אנשי קשר, תמונות או קבצים אישיים אחרים</li><li>הקלטות קול</li><li>ניתוח שימוש או נתוני מעקב התנהגותי</li></ul>`,
      },
      {
        heading: `נתונים המאוחסנים במכשיר שלכם`,
        content: `<p>האפליקציה שומרת את הנתונים הבאים באופן מקומי במכשיר שלכם:</p>
<ul><li><strong>רשומות יומן החלומות</strong> — טקסט החלומות, הכותרות והתאריכים שלהם, והפירושים, הסמלים והרגשות שנשמרו איתם.</li><li><strong>איורים וסיכומי "דפוסים"</strong> שיצרתם.</li><li><strong>העדפות האפליקציה</strong> — כגון תזכורות, נעילת Face ID וסנכרון iCloud.</li><li><strong>מצב המנוי</strong> — מחוון שמור של הגישה שלכם לפרימיום.</li></ul>
<p><strong>קלט קולי</strong> מומר לטקסט באמצעות זיהוי הדיבור של Apple: במכשיר שלכם כשהמכשיר והשפה תומכים בכך, ואחרת באמצעות שירות הדיבור של Apple. השמע לעולם אינו נשלח אלינו או לספקי הבינה המלאכותית שלנו, והאפליקציה אינה שומרת הקלטות.</p>
<p>נתונים אלה אינם מועברים אלינו, למעט כמתואר בסעיף הבא. אפשר למחוק רשומות באפליקציה בכל עת; מחיקת האפליקציה מוחקת את כל הנתונים השמורים במכשיר.</p>`,
      },
      {
        heading: `פירושים, איורים ו"דפוסים" בעזרת בינה מלאכותית`,
        content: `<p><strong>קודם כול הסכמה.</strong> לפני הפירוש, האיור או סיכום ה"דפוסים" הראשון, LDream מסביר מה יישלח ולאן, ומבקש את הסכמתכם המפורשת. בלעדיה לא נשלח דבר. אנו מעבדים את הנתונים המתוארים להלן על בסיס הסכמה זו.</p>
<p><strong>מה האפליקציה שולחת לשרת שלנו.</strong> השרת שלנו הוא שירות קטן שאנו מפעילים ב-Cloudflare (Cloudflare Workers). בהתאם לתכונה שבה אתם משתמשים, האפליקציה שולחת:</p>
<ul><li><strong>פירוש</strong> — טקסט החלום ושפת הממשק (וגם השפה שבה החלום נכתב, אם האפליקציה מזהה אותה), כדי שהתשובה תגיע בשפה שלכם.</li><li><strong>איור</strong> — טקסט החלום.</li><li><strong>"דפוסים"</strong> (פרימיום) — עבור החלומות של השבוע או החודש שנבחרו: התאריכים, הכותרות, הסמלים העיקריים והרגשות. הטקסט המלא של החלומות אינו נשלח עבור "דפוסים".</li><li><strong>עם כל בקשה</strong> — מזהה מכשיר (מזהה הספק של Apple, IDFV, שהוא זהה לכל האפליקציות שלנו במכשיר שלכם ואינו מזהה הפרסום), גרסת האפליקציה והתאריך המקומי שלכם. אנו משתמשים בהם רק כדי להחיל מגבלות שימוש ולמנוע שימוש לרעה. אם יש לכם פרימיום, האפליקציה שולחת גם את עסקת ה-App Store החתומה, כדי שהשרת שלנו יוכל לאמת את הרכישה.</li></ul>
<p><strong>מה השרת שלנו מעביר הלאה.</strong></p>
<ul><li><strong>DeepSeek</strong> — את טקסט החלום, כדי לכתוב את הפירוש. עבור איור, DeepSeek הופכת את טקסט החלום לתיאור קצר של הסצנה (ואם שירות התמונות דוחה אותו — לגרסה מרוככת). עבור "דפוסים", DeepSeek מקבלת את הכותרות, הסמלים והרגשות שצוינו לעיל. DeepSeek מעבדת בקשות אלה בשרתים הממוקמים ברפובליקה העממית של סין.</li><li><strong>fal.ai</strong> — רק את תיאור הסצנה הקצר, כדי לצייר את האיור האופציונלי. fal.ai ממוקמת בארצות הברית. התמונה המוכנה יורדת למכשיר שלכם ונשמרת ביומן.</li></ul>
<p>מזהה המכשיר, כתובת ה-IP ופרטי הרכישות שלכם לעולם אינם מועברים ל-DeepSeek או ל-fal.ai.</p>
<p><strong>מה השרת שלנו שומר.</strong> איננו שומרים את החלומות, הפירושים או האיורים שלכם. השרת שומר רק מוני שימוש פסאודונימיים המקושרים למזהה המכשיר: כמה פירושים חינמיים נוצלו במכשיר והאם האיור החינמי שלו כבר נוצל (נשמרים ללא הגבלת זמן, כדי שלא ניתן יהיה לאפס את המכסה החינמית בהתקנה מחדש של האפליקציה), ושימוש יומי בפרימיום, שנמחק אוטומטית לאחר כשלושה ימים. כדי שניסיון חוזר אחרי ניתוק לא ייספר פעמיים, תוצאת בקשה עשויה להישמר במטמון עד 10 דקות, ולאחר מכן היא נמחקת אוטומטית. כתובת ה-IP משמשת רק לרגע כדי להגביל את מספר הבקשות לדקה, ואיננו שומרים אותה.</p>`,
      },
      {
        heading: `סנכרון iCloud`,
        content: `<p>אם תפעילו סנכרון iCloud, היומן נשמר בחשבון ה-iCloud הפרטי שלכם באמצעות CloudKit של Apple. נתונים אלה מוגנים על ידי חשבון Apple שלכם ואינם נגישים לנו. אפשר למחוק את היומן מ-iCloud בהגדרות ה-iCloud של האפליקציה, או דרך ניהול האחסון ב-iCloud בהגדרות iOS. הטיפול של Apple בנתוני iCloud כפוף למדיניות הפרטיות של Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `שירותי צד שלישי`,
        content: `<h3>Apple (App Store, StoreKit, iCloud וזיהוי דיבור)</h3>
<p>רכישות ומנויים מעובדים במלואם על ידי Apple דרך ה-App Store. איננו מקבלים את פרטי התשלום, פרטי חשבון Apple או נתוני החיוב שלכם. אם אתם משתמשים בקלט קולי במכשיר או בשפה שאין בהם זיהוי דיבור במכשיר, שירות הדיבור של Apple ממיר את השמע לטקסט; אנחנו לעולם לא מקבלים אותו. הטיפול של Apple בנתונים שלכם כפוף למדיניות הפרטיות של Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>
<h3>Cloudflare (השרת שלנו)</h3>
<p>השרת שלנו פועל על Cloudflare Workers. הבקשות מועברות בהצפנה ומעובדות ברשת הגלובלית של Cloudflare, כולל במרכזי נתונים מחוץ למדינה שלכם. הטיפול של Cloudflare בנתונים כפוף למדיניות הפרטיות שלה (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek (פירושים, תיאורי סצנות ו"דפוסים")</h3>
<p>DeepSeek מעבדת את הנתונים המתוארים לעיל בשרתים ברפובליקה העממית של סין. הטיפול של DeepSeek בנתונים כפוף למדיניות הפרטיות שלה (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>fal.ai (איורים)</h3>
<p>fal.ai, הממוקמת בארצות הברית, מקבלת רק את תיאור הסצנה הקצר כדי ליצור את האיור. הטיפול של fal.ai בנתונים כפוף למדיניות הפרטיות שלה (<a href="https://fal.ai/legal/privacy-policy" target="_blank" rel="noopener noreferrer">fal.ai/legal/privacy-policy</a>).</p>
<h3>ללא אנליטיקה וללא פרסום</h3>
<p>האפליקציה אינה משלבת SDK של צד שלישי לאנליטיקה, פרסום, דיווח קריסות או רשתות חברתיות. איננו משתמשים ב-Firebase, ב-Google Analytics, ב-Facebook SDK או בשירותים דומים, ואיננו עוקבים אחריכם בין אפליקציות ואתרים.</p>`,
      },
      {
        heading: `גישה לספריית התמונות`,
        content: `<p>האפליקציה עשויה לבקש הרשאה לשמור איורים בספריית התמונות שלכם. זה קורה רק כשאתם בוחרים לשמור תמונה; האפליקציה רק מוסיפה תמונות ואינה קוראת או ניגשת לתמונות הקיימות שלכם.</p>`,
      },
      {
        heading: `התראות`,
        content: `<p>האפליקציה עשויה לבקש הרשאה לשלוח התראות מקומיות, כגון תזכורות לתעד חלומות. הן מתוזמנות במכשיר שלכם ואינן משתמשות בשירות התראות דחיפה חיצוני. אפשר לנהל או לכבות אותן בכל עת בהגדרות המכשיר.</p>`,
      },
      {
        heading: `פרטיות ילדים`,
        content: `<p>האפליקציה אינה מיועדת לילדים מתחת לגיל 13, ואיננו אוספים ביודעין מידע אישי מילדים. תכונות הבינה המלאכותית פועלות רק לאחר הסכמה מפורשת באפליקציה. אם יש לכם חשש בנוגע לשימוש של ילד באפליקציה, צרו איתנו קשר.</p>`,
      },
      {
        heading: `שיתוף נתונים`,
        content: `<p>אנו משתפים נתונים רק עם נותני השירות המתוארים לעיל, ורק כדי לספק את תכונות האפליקציה:</p>
<ul><li><strong>Cloudflare</strong> — מארחת את השרת שלנו ומעבדת את הבקשות אליו.</li><li><strong>DeepSeek</strong> — מקבלת את טקסט החלום (או, עבור "דפוסים", כותרות, סמלים ורגשות) כדי ליצור פירושים, תיאורי סצנות וסיכומי "דפוסים".</li><li><strong>fal.ai</strong> — מקבלת תיאור קצר של הסצנה כדי ליצור איורים.</li><li><strong>Apple</strong> — מעבדת רכישות, ממירה קלט קולי לטקסט בשירות הדיבור שלה כשזיהוי דיבור במכשיר אינו זמין, ואם תפעילו סנכרון — שומרת את היומן ב-iCloud הפרטי שלכם.</li></ul>
<p>איננו מוכרים, משכירים או סוחרים בנתונים שלכם, ואיננו משתפים אותם לצורכי פרסום או שיווק. מאחר שהשרתים של DeepSeek נמצאים ברפובליקה העממית של סין ו-fal.ai ממוקמת בארצות הברית, הנתונים שלכם עשויים להיות מעובדים במדינות שדיני הגנת המידע בהן שונים מאלה שבמדינה שלכם. אתם מסכימים להעברה זו כשאתם נותנים את הסכמתכם באפליקציה.</p>`,
      },
      {
        heading: `אבטחת נתונים`,
        content: `<p>כל התקשורת בין האפליקציה לשרת שלנו, ובין השרת שלנו לבין DeepSeek ו-fal.ai, מוצפנת ב-HTTPS/TLS. מאחר שאיננו שומרים את החלומות שלכם בשרת ואין לנו חשבונות משתמשים, אין אצלנו מסד נתונים של היומן שלכם שעלול לדלוף. היומן נשאר במכשיר שלכם, ואם תפעילו סנכרון — ב-iCloud הפרטי שלכם. אם תפעילו את נעילת Face ID, האימות מתבצע על ידי iOS; האפליקציה לעולם אינה מקבלת את הנתונים הביומטריים שלכם.</p>`,
      },
      {
        heading: `הזכויות שלכם`,
        content: `<p>הנתונים שלכם נשארים בשליטתכם:</p>
<ul><li><strong>ביטול הסכמה</strong> — אפשר לבטל את ההסכמה בכל עת בהגדרות האפליקציה. לאחר מכן לא נשלח דבר נוסף; אפשר להמשיך לכתוב ולקרוא ביומן.</li><li><strong>מחיקת היומן</strong> — מחקו רשומות באפליקציה, מחקו את העותק ב-iCloud בהגדרות ה-iCloud של האפליקציה, ומחקו את האפליקציה כדי להסיר את כל מה שנשמר במכשיר.</li><li><strong>המונים בשרת שלנו</strong> אינם מכילים תוכן של חלומות ואינם מקושרים לשמכם או לחשבון Apple שלכם; המונים היומיים פגים אוטומטית. מאחר שהם אינם מקושרים אליכם, בדרך כלל איננו יכולים לדעת אילו מונים שייכים לכם, אך אפשר לפנות אלינו בכל בקשה.</li><li>נתונים שכבר נשלחו ל-DeepSeek או ל-fal.ai מטופלים לפי מדיניות הפרטיות שלהן.</li></ul>
<p>אם יש לכם שאלות על הנתונים שלכם או שאתם רוצים לממש את זכויותיכם לפי חוקי המדינה שלכם, צרו איתנו קשר.</p>`,
      },
      {
        heading: `שינויים במדיניות זו`,
        content: `<p>אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. כל שינוי יופיע בדף זה עם תאריך תחילה מעודכן. מומלץ לעיין במדיניות זו מדי פעם.</p>`,
      },
      {
        heading: `צרו קשר`,
        content: `<p>אם יש לכם שאלות או חששות בנוגע למדיניות פרטיות זו, צרו איתנו קשר בכתובת:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
}
