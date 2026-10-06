// TaroTaper privacy policy (the Telegram bot @TaroTaper_bot and its Mini App), 13 languages.
// Data flows verified against bot-worker (D1 tarotaper-tg-db) and tarot-api (DeepSeek) in October 2026.
// PrivacySection and PrivacyPolicy are shared by every app's policy.

export interface PrivacySection {
  heading: string
  content: string
}

export interface PrivacyPolicy {
  title: string
  effectiveDate: string
  intro: string
  sections: PrivacySection[]
}

export const tarotaperPrivacy: Record<string, PrivacyPolicy> = {
  en: {
    title: `Privacy Policy`,
    effectiveDate: `Effective Date: October 7, 2026`,
    intro: `Bogdan Nikishin, an independent developer ("we", "our", or "us"), runs <strong>TaroTaper</strong>, a tarot bot in Telegram (<a href="https://t.me/TaroTaper_bot" target="_blank" rel="noopener noreferrer">@TaroTaper_bot</a>) with its Mini App. This Privacy Policy explains what information TaroTaper handles, where it is stored and sent, and why.`,
    sections: [
      {
        heading: `Overview`,
        content: `<p>TaroTaper works inside Telegram: you do not create an account with us, and Telegram tells the bot who you are by your Telegram user ID. We keep your journal of readings and your settings on our server, so they are there whenever you open TaroTaper. Readings are written by DeepSeek's language model from your cards and your question. TaroTaper has no advertising and no analytics or tracking.</p>`,
      },
      {
        heading: `Information from Telegram`,
        content: `<p>When you use the bot or open the Mini App, Telegram passes us your Telegram user ID, your first name, your username (if you have one) and the language of your Telegram app. Requests from the Mini App carry Telegram's signature, which we check to make sure they really come from you.</p>
<p>We store your user ID and your language. Your first name is used only to greet you in the Mini App and is not stored; your username is not used.</p>`,
      },
      {
        heading: `What We Store`,
        content: `<p>In our database, linked to your Telegram user ID, we store:</p>
<ul><li><strong>Settings</strong> — your language, your time zone offset (so that your day starts at your midnight and reminders come at your hour), whether reminders are on and at what hour, and whether you have finished the introduction.</li><li><strong>Your journal</strong> — every reading: its type and date, the question you wrote (if any), the cards drawn, the reading text and the rating you gave it. Cards of the day from the earlier version of TaroTaper are kept in your journal as well.</li><li><strong>Progress and access</strong> — your streak and best streak, whether your free Three cards reading has been used, how many prepaid readings you have left and when TaroTaper+ ends.</li><li><strong>Payments</strong> — for each payment: the Telegram payment ID, what was bought, the amount in Stars, whether it was a subscription renewal, the date and, if it was refunded, the date of the refund.</li></ul>`,
      },
      {
        heading: `Readings and DeepSeek`,
        content: `<p>When you ask for a reading, our server sends DeepSeek the cards drawn (their names, positions and whether they are reversed), the language of the reading and the question you wrote, if any. DeepSeek's model writes the text of the reading, which we show you and save in your journal.</p>
<p>We do not send DeepSeek your Telegram user ID, your name, your username or any other identifier. DeepSeek processes these requests on servers in the People's Republic of China. Please do not put in a question anything you would not want to share, such as health details or other people's names and contacts.</p>`,
      },
      {
        heading: `Payments`,
        content: `<p>Readings and TaroTaper+ are paid with Telegram Stars. Payments are processed by Telegram; Stars themselves are bought from Telegram or through Apple or Google. We never receive your card number or other payment details, only the payment information listed above. A TaroTaper+ subscription is managed in Telegram, where you can cancel it at any time.</p>`,
      },
      {
        heading: `Reminders`,
        content: `<p>Reminders are off unless you turn them on. If you do, Telegram asks you to allow the bot to message you, and the bot then sends one message a day at the hour you chose, only if you have not drawn your card yet. You can turn reminders off with the /reminders command or in the Mini App's settings. If you block the bot, reminders are turned off automatically.</p>`,
      },
      {
        heading: `The Mini App on Your Device`,
        content: `<p>The Mini App sets no cookies and stores nothing for tracking or advertising. It loads Telegram's official Mini App script from telegram.org; its fonts and card images come from our own server.</p>`,
      },
      {
        heading: `Third-Party Services`,
        content: `<h3>Telegram</h3>
<p>TaroTaper runs on Telegram, which also processes payments in Stars. Telegram's handling of your data is governed by its Privacy Policy (<a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">telegram.org/privacy</a>).</p>
<h3>Cloudflare</h3>
<p>The bot, our reading service, the database and the Mini App run on Cloudflare (Workers, D1 and Pages). Data is encrypted in transit and processed on Cloudflare's global network, which may include data centers outside your country. Cloudflare's handling of data is governed by its Privacy Policy (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek</h3>
<p>DeepSeek receives the cards, the language and your question to write a reading, and processes them on servers in the People's Republic of China. DeepSeek's handling of data is governed by its Privacy Policy (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>No Analytics or Advertising</h3>
<p>TaroTaper uses no analytics, advertising or tracking services.</p>`,
      },
      {
        heading: `Why We Process Your Data`,
        content: `<ul><li>To give you the readings you ask for, keep your journal and provide what you bought — this is necessary to provide TaroTaper to you.</li><li>To send reminders — only with your consent, which you give by turning them on and can withdraw at any time.</li><li>To keep payment records, handle refunds and prevent abuse — on the basis of our legitimate interests and our legal obligations.</li></ul>`,
      },
      {
        heading: `How Long We Keep Data`,
        content: `<p>We keep your settings, progress and journal for as long as you use TaroTaper. If you ask us to delete them, we do so within 30 days. Payment records are kept for as long as needed to handle refunds and disputes and to meet accounting obligations. Our server does not keep logs of your requests, and its error messages contain no questions or readings.</p>`,
      },
      {
        heading: `Children's Privacy`,
        content: `<p>TaroTaper is not directed at children under the age of 16, and we do not knowingly collect their data. If you believe a child has used TaroTaper, please contact us and we will delete their data.</p>`,
      },
      {
        heading: `Data Sharing`,
        content: `<p>We share data only with the services described above and only to run TaroTaper. We do not sell, rent or trade your data, and we do not share it for advertising. Because DeepSeek's servers are in the People's Republic of China and Cloudflare operates worldwide, your data may be processed in countries whose data protection laws differ from those of your country.</p>`,
      },
      {
        heading: `Data Security`,
        content: `<p>All connections — between Telegram, the Mini App, our server, our database and DeepSeek — are encrypted with HTTPS/TLS. Every request from the Mini App is checked against Telegram's signature, and our reading service accepts requests only from our own bot, not from the internet. Only the developer has access to the database.</p>`,
      },
      {
        heading: `Your Rights`,
        content: `<p>You can ask us to show you the data we keep about you, to correct it, to send you a copy, or to delete your journal and the rest of your data. Write to us from the Telegram account you use with TaroTaper, or by email; we may ask you to confirm the request from that account. Questions about payments go to the /paysupport command in the bot. Blocking the bot stops reminders but does not delete your journal — to delete it, write to us. You also have the right to complain to the data protection authority in your country.</p>`,
      },
      {
        heading: `Changes to This Policy`,
        content: `<p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date. We encourage you to review this policy periodically.</p>`,
      },
      {
        heading: `Contact Us`,
        content: `<p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio" target="_blank" rel="noopener noreferrer">@nikibstudio</a></p>`,
      },
    ],
  },
  ru: {
    title: `Политика конфиденциальности`,
    effectiveDate: `Дата вступления в силу: 7 октября 2026 г.`,
    intro: `Богдан Никишин, независимый разработчик («мы», «наш» или «нас»), ведёт <strong>TaroTaper</strong> — бота Таро в Telegram (<a href="https://t.me/TaroTaper_bot" target="_blank" rel="noopener noreferrer">@TaroTaper_bot</a>) с мини-приложением. Настоящая Политика конфиденциальности объясняет, с какой информацией работает TaroTaper, где она хранится, куда и зачем отправляется.`,
    sections: [
      {
        heading: `Обзор`,
        content: `<p>TaroTaper работает внутри Telegram: вы не создаёте у нас аккаунт, а Telegram сообщает боту, кто вы, через ваш идентификатор пользователя Telegram. Дневник раскладов и настройки хранятся на нашем сервере, поэтому они на месте, когда бы вы ни открыли TaroTaper. Толкования пишет языковая модель DeepSeek по вашим картам и вашему вопросу. В TaroTaper нет рекламы, аналитики и отслеживания.</p>`,
      },
      {
        heading: `Информация от Telegram`,
        content: `<p>Когда вы пользуетесь ботом или открываете мини-приложение, Telegram передаёт нам ваш идентификатор пользователя Telegram, имя, имя пользователя (если оно есть) и язык вашего приложения Telegram. Запросы из мини-приложения подписаны Telegram, и мы проверяем подпись, чтобы убедиться, что они действительно от вас.</p>
<p>Мы храним ваш идентификатор и язык. Имя используется только для приветствия в мини-приложении и не сохраняется; имя пользователя не используется.</p>`,
      },
      {
        heading: `Что мы храним`,
        content: `<p>В нашей базе данных, в привязке к вашему идентификатору Telegram, хранятся:</p>
<ul><li><strong>Настройки</strong> — язык, смещение часового пояса (чтобы ваш день начинался в вашу полночь, а напоминания приходили в ваш час), включены ли напоминания и в какой час, пройдено ли знакомство с приложением.</li><li><strong>Дневник</strong> — каждый расклад: его вид и дата, вопрос, который вы написали (если он был), выпавшие карты, текст толкования и ваша оценка. Карты дня из прежней версии TaroTaper тоже сохранены в дневнике.</li><li><strong>Прогресс и доступ</strong> — серия дней и лучшая серия, использован ли бесплатный расклад «Три карты», сколько оплаченных раскладов осталось и до какого числа действует TaroTaper+.</li><li><strong>Платежи</strong> — по каждому платежу: идентификатор платежа Telegram, что куплено, сумма в звёздах, было ли это продление подписки, дата и, если платёж возвращён, дата возврата.</li></ul>`,
      },
      {
        heading: `Толкования и DeepSeek`,
        content: `<p>Когда вы просите расклад, наш сервер отправляет DeepSeek выпавшие карты (названия, позиции и то, перевёрнута ли карта), язык толкования и ваш вопрос, если вы его написали. Модель DeepSeek пишет текст толкования, который мы показываем вам и сохраняем в дневнике.</p>
<p>Мы не передаём DeepSeek ваш идентификатор Telegram, имя, имя пользователя или другие идентификаторы. DeepSeek обрабатывает эти запросы на серверах в Китайской Народной Республике. Пожалуйста, не пишите в вопросе того, чем не хотели бы делиться, например сведений о здоровье или имён и контактов других людей.</p>`,
      },
      {
        heading: `Платежи`,
        content: `<p>Расклады и TaroTaper+ оплачиваются звёздами Telegram (Telegram Stars). Платежи обрабатывает Telegram; сами звёзды покупаются у Telegram или через Apple или Google. Мы никогда не получаем номер вашей карты или другие платёжные данные — только сведения о платеже, перечисленные выше. Подписка TaroTaper+ управляется в Telegram, где её можно отменить в любой момент.</p>`,
      },
      {
        heading: `Напоминания`,
        content: `<p>Напоминания выключены, пока вы сами их не включите. Тогда Telegram попросит разрешить боту писать вам, и бот будет присылать одно сообщение в день в выбранный час — только если вы ещё не вытянули карту дня. Выключить напоминания можно командой /reminders или в настройках мини-приложения. Если вы заблокируете бота, напоминания выключатся автоматически.</p>`,
      },
      {
        heading: `Мини-приложение на вашем устройстве`,
        content: `<p>Мини-приложение не использует cookie и ничего не сохраняет для отслеживания или рекламы. Оно загружает официальный скрипт мини-приложений Telegram с telegram.org; шрифты и изображения карт загружаются с нашего собственного сервера.</p>`,
      },
      {
        heading: `Сторонние сервисы`,
        content: `<h3>Telegram</h3>
<p>TaroTaper работает в Telegram, который также обрабатывает платежи звёздами. Обработка ваших данных в Telegram регулируется его Политикой конфиденциальности (<a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">telegram.org/privacy</a>).</p>
<h3>Cloudflare</h3>
<p>Бот, наш сервис толкований, база данных и мини-приложение работают на Cloudflare (Workers, D1 и Pages). Данные шифруются при передаче и обрабатываются в глобальной сети Cloudflare, в том числе, возможно, в центрах обработки данных за пределами вашей страны. Обработка данных в Cloudflare регулируется его Политикой конфиденциальности (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek</h3>
<p>DeepSeek получает карты, язык и ваш вопрос, чтобы написать толкование, и обрабатывает их на серверах в Китайской Народной Республике. Обработка данных в DeepSeek регулируется его Политикой конфиденциальности (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>Без аналитики и рекламы</h3>
<p>TaroTaper не использует сервисы аналитики, рекламы или отслеживания.</p>`,
      },
      {
        heading: `Зачем мы обрабатываем данные`,
        content: `<ul><li>Чтобы делать расклады, которые вы просите, вести ваш дневник и предоставлять купленное, — это необходимо, чтобы TaroTaper работал для вас.</li><li>Чтобы присылать напоминания, — только с вашего согласия: вы даёте его, включая напоминания, и можете отозвать в любой момент.</li><li>Чтобы хранить сведения о платежах, оформлять возвраты и предотвращать злоупотребления, — это наши законные интересы и обязанности по закону.</li></ul>`,
      },
      {
        heading: `Сколько мы храним данные`,
        content: `<p>Настройки, прогресс и дневник хранятся, пока вы пользуетесь TaroTaper. Если вы попросите их удалить, мы сделаем это в течение 30 дней. Сведения о платежах хранятся столько, сколько нужно для возвратов, разрешения споров и бухгалтерского учёта. Наш сервер не ведёт журналы ваших запросов, а его сообщения об ошибках не содержат вопросов и толкований.</p>`,
      },
      {
        heading: `Конфиденциальность детей`,
        content: `<p>TaroTaper не предназначен для детей младше 16 лет, и мы сознательно не собираем их данные. Если вы считаете, что TaroTaper пользовался ребёнок, свяжитесь с нами, и мы удалим его данные.</p>`,
      },
      {
        heading: `Передача данных`,
        content: `<p>Мы передаём данные только сервисам, описанным выше, и только для работы TaroTaper. Мы не продаём, не сдаём в аренду и не обмениваем ваши данные и не передаём их для рекламы. Поскольку серверы DeepSeek находятся в Китайской Народной Республике, а Cloudflare работает по всему миру, ваши данные могут обрабатываться в странах, где законы о защите данных отличаются от законов вашей страны.</p>`,
      },
      {
        heading: `Безопасность данных`,
        content: `<p>Все соединения — между Telegram, мини-приложением, нашим сервером, базой данных и DeepSeek — шифруются по HTTPS/TLS. Каждый запрос из мини-приложения проверяется по подписи Telegram, а наш сервис толкований принимает запросы только от нашего бота, а не из интернета. Доступ к базе данных есть только у разработчика.</p>`,
      },
      {
        heading: `Ваши права`,
        content: `<p>Вы можете попросить нас показать данные, которые мы о вас храним, исправить их, прислать их копию или удалить ваш дневник и остальные данные. Напишите нам из аккаунта Telegram, которым вы пользуетесь в TaroTaper, или по электронной почте; мы можем попросить подтвердить запрос из этого аккаунта. Вопросы об оплате — через команду /paysupport в боте. Блокировка бота останавливает напоминания, но не удаляет дневник — чтобы удалить его, напишите нам. Вы также вправе подать жалобу в орган по защите данных вашей страны.</p>`,
      },
      {
        heading: `Изменения в настоящей Политике`,
        content: `<p>Мы можем время от времени обновлять настоящую Политику конфиденциальности. Любые изменения будут отражены на этой странице с обновлённой датой вступления в силу. Мы рекомендуем периодически просматривать эту политику.</p>`,
      },
      {
        heading: `Свяжитесь с нами`,
        content: `<p>Если у вас есть вопросы или замечания по поводу настоящей Политики конфиденциальности, свяжитесь с нами:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio" target="_blank" rel="noopener noreferrer">@nikibstudio</a></p>`,
      },
    ],
  },
  zh: {
    title: `隐私政策`,
    effectiveDate: `生效日期：2026年10月7日`,
    intro: `独立开发者波格丹·尼基申（"我们"）运营 Telegram 塔罗机器人 <strong>TaroTaper</strong>（<a href="https://t.me/TaroTaper_bot" target="_blank" rel="noopener noreferrer">@TaroTaper_bot</a>）及其小程序。本隐私政策说明 TaroTaper 处理哪些信息、这些信息存储在哪里、发送到哪里，以及原因。`,
    sections: [
      {
        heading: `概述`,
        content: `<p>TaroTaper 在 Telegram 内运行：您无需在我们这里创建账户，Telegram 会通过您的 Telegram 用户 ID 告诉机器人您是谁。我们将您的占卜日记和设置保存在我们的服务器上，因此您无论何时打开 TaroTaper 都能看到。解读由 DeepSeek 的语言模型根据您的牌和问题撰写。TaroTaper 没有广告，也不使用任何分析或跟踪工具。</p>`,
      },
      {
        heading: `来自 Telegram 的信息`,
        content: `<p>当您使用机器人或打开小程序时，Telegram 会向我们传递您的 Telegram 用户 ID、名字、用户名（如有）以及您 Telegram 应用的语言。来自小程序的请求带有 Telegram 的签名，我们会验证签名，以确认请求确实来自您。</p>
<p>我们只保存您的用户 ID 和语言。您的名字仅用于在小程序中向您问候，不会被保存；您的用户名不会被使用。</p>`,
      },
      {
        heading: `我们存储的内容`,
        content: `<p>在我们的数据库中，与您的 Telegram 用户 ID 关联存储以下内容：</p>
<ul><li><strong>设置</strong> — 您的语言、时区偏移（让您的一天从您的午夜开始，提醒在您的时间送达）、提醒是否开启及时间，以及您是否已完成介绍。</li><li><strong>您的日记</strong> — 每一次占卜：类型和日期、您写下的问题（如有）、抽到的牌、解读文本以及您给出的评分。TaroTaper 旧版本中的每日一牌也保留在您的日记中。</li><li><strong>进度与权限</strong> — 您的连续天数和最佳纪录、是否已使用免费的“三张牌”、剩余的预付占卜次数，以及 TaroTaper+ 的到期日。</li><li><strong>付款</strong> — 每笔付款的 Telegram 付款 ID、购买内容、Stars 金额、是否为订阅续费、日期，以及如有退款的退款日期。</li></ul>`,
      },
      {
        heading: `解读与 DeepSeek`,
        content: `<p>当您请求一次占卜时，我们的服务器会将抽到的牌（名称、位置以及是否逆位）、解读语言以及您写下的问题（如有）发送给 DeepSeek。DeepSeek 的模型撰写解读文本，我们将其展示给您并保存到您的日记中。</p>
<p>我们不会向 DeepSeek 发送您的 Telegram 用户 ID、名字、用户名或任何其他标识符。DeepSeek 在位于中华人民共和国的服务器上处理这些请求。请不要在问题中写入您不想分享的内容，例如健康信息或他人的姓名和联系方式。</p>`,
      },
      {
        heading: `付款`,
        content: `<p>占卜和 TaroTaper+ 使用 Telegram Stars 付款。付款由 Telegram 处理；Stars 本身可从 Telegram 购买，或通过 Apple、Google 购买。我们绝不会收到您的卡号或其他付款信息，只会收到上文列出的付款信息。TaroTaper+ 订阅在 Telegram 中管理，您可以随时取消。</p>`,
      },
      {
        heading: `提醒`,
        content: `<p>提醒默认关闭，除非您主动开启。开启后，Telegram 会请您允许机器人给您发消息，之后机器人仅在您当天还没抽牌时，在您选择的时间每天发送一条消息。您可以通过 /reminders 命令或在小程序设置中关闭提醒。如果您屏蔽机器人，提醒会自动关闭。</p>`,
      },
      {
        heading: `您设备上的小程序`,
        content: `<p>小程序不使用 Cookie，也不会为跟踪或广告保存任何内容。它从 telegram.org 加载 Telegram 官方小程序脚本；字体和卡牌图片由我们自己的服务器提供。</p>`,
      },
      {
        heading: `第三方服务`,
        content: `<h3>Telegram</h3>
<p>TaroTaper 运行在 Telegram 上，Stars 付款也由 Telegram 处理。Telegram 对您数据的处理受其隐私政策（<a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">telegram.org/privacy</a>）约束。</p>
<h3>Cloudflare</h3>
<p>机器人、我们的解读服务、数据库和小程序运行在 Cloudflare（Workers、D1 和 Pages）上。数据在传输中加密，并在 Cloudflare 的全球网络中处理，可能包括您所在国家以外的数据中心。Cloudflare 对数据的处理受其隐私政策（<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>）约束。</p>
<h3>DeepSeek</h3>
<p>DeepSeek 接收牌、语言和您的问题以撰写解读，并在中华人民共和国的服务器上处理。DeepSeek 对数据的处理受其隐私政策（<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>）约束。</p>
<h3>无分析，无广告</h3>
<p>TaroTaper 不使用任何分析、广告或跟踪服务。</p>`,
      },
      {
        heading: `我们为何处理您的数据`,
        content: `<ul><li>为了完成您请求的占卜、保存您的日记并提供您购买的内容——这是向您提供 TaroTaper 所必需的。</li><li>为了发送提醒——仅在您同意的情况下：您开启提醒即表示同意，并可随时撤回。</li><li>为了保存付款记录、处理退款和防止滥用——基于我们的合法利益和法律义务。</li></ul>`,
      },
      {
        heading: `数据保存期限`,
        content: `<p>只要您在使用 TaroTaper，我们就会保存您的设置、进度和日记。如果您要求删除，我们会在 30 天内删除。付款记录会在处理退款和争议、履行会计义务所需的期限内保存。我们的服务器不保存您的请求日志，其错误信息中也不包含问题或解读。</p>`,
      },
      {
        heading: `儿童隐私`,
        content: `<p>TaroTaper 不面向 16 岁以下的儿童，我们不会故意收集他们的数据。如果您认为有儿童使用了 TaroTaper，请联系我们，我们会删除其数据。</p>`,
      },
      {
        heading: `数据共享`,
        content: `<p>我们只与上述服务共享数据，且仅用于运行 TaroTaper。我们不会出售、出租或交换您的数据，也不会为广告目的共享。由于 DeepSeek 的服务器位于中华人民共和国，而 Cloudflare 在全球运营，您的数据可能在数据保护法律与您所在国家不同的国家被处理。</p>`,
      },
      {
        heading: `数据安全`,
        content: `<p>Telegram、小程序、我们的服务器、数据库与 DeepSeek 之间的所有连接均使用 HTTPS/TLS 加密。来自小程序的每个请求都会通过 Telegram 的签名进行验证，我们的解读服务只接受来自我们自己机器人的请求，不接受来自互联网的请求。只有开发者可以访问数据库。</p>`,
      },
      {
        heading: `您的权利`,
        content: `<p>您可以要求我们向您展示我们保存的关于您的数据、更正这些数据、向您发送一份副本，或删除您的日记和其他数据。请通过您在 TaroTaper 中使用的 Telegram 账户或电子邮件联系我们；我们可能会请您从该账户确认请求。关于付款的问题，请在机器人中使用 /paysupport 命令。屏蔽机器人会停止提醒，但不会删除您的日记——如需删除，请联系我们。您也有权向您所在国家的数据保护机构投诉。</p>`,
      },
      {
        heading: `本政策的变更`,
        content: `<p>我们可能会不时更新本隐私政策。任何变更将在本页面上反映，并附有更新的生效日期。我们建议您定期查看本政策。</p>`,
      },
      {
        heading: `联系我们`,
        content: `<p>如果您对本隐私政策有任何疑问或关注，请通过以下方式联系我们：</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio" target="_blank" rel="noopener noreferrer">@nikibstudio</a></p>`,
      },
    ],
  },
  es: {
    title: `Política de privacidad`,
    effectiveDate: `Fecha de vigencia: 7 de octubre de 2026`,
    intro: `Bogdan Nikishin, desarrollador independiente ("nosotros", "nuestro" o "nos"), gestiona <strong>TaroTaper</strong>, un bot de tarot en Telegram (<a href="https://t.me/TaroTaper_bot" target="_blank" rel="noopener noreferrer">@TaroTaper_bot</a>) con su miniaplicación. Esta Política de privacidad explica qué información trata TaroTaper, dónde se almacena y a dónde se envía, y por qué.`,
    sections: [
      {
        heading: `Descripción general`,
        content: `<p>TaroTaper funciona dentro de Telegram: usted no crea una cuenta con nosotros, y Telegram le indica al bot quién es usted mediante su identificador de usuario de Telegram. Guardamos su diario de lecturas y sus ajustes en nuestro servidor para que estén disponibles siempre que abra TaroTaper. Las lecturas las escribe el modelo de lenguaje de DeepSeek a partir de sus cartas y su pregunta. TaroTaper no tiene publicidad ni herramientas de análisis o seguimiento.</p>`,
      },
      {
        heading: `Información que recibimos de Telegram`,
        content: `<p>Cuando usa el bot o abre la miniaplicación, Telegram nos transmite su identificador de usuario de Telegram, su nombre, su nombre de usuario (si lo tiene) y el idioma de su aplicación de Telegram. Las solicitudes de la miniaplicación llevan una firma de Telegram, que comprobamos para asegurarnos de que realmente provienen de usted.</p>
<p>Guardamos su identificador de usuario y su idioma. Su nombre se usa solo para saludarle en la miniaplicación y no se guarda; su nombre de usuario no se utiliza.</p>`,
      },
      {
        heading: `Qué almacenamos`,
        content: `<p>En nuestra base de datos, vinculados a su identificador de usuario de Telegram, almacenamos:</p>
<ul><li><strong>Ajustes</strong> — su idioma, la diferencia horaria de su zona (para que su día empiece a su medianoche y los recordatorios lleguen a su hora), si los recordatorios están activados y a qué hora, y si ha completado la introducción.</li><li><strong>Su diario</strong> — cada lectura: su tipo y fecha, la pregunta que escribió (si la hubo), las cartas que salieron, el texto de la lectura y la valoración que le dio. Las cartas del día de la versión anterior de TaroTaper también se conservan en su diario.</li><li><strong>Progreso y acceso</strong> — su racha y su mejor racha, si ya usó su tirada gratuita de Tres cartas, cuántas lecturas prepagadas le quedan y cuándo termina TaroTaper+.</li><li><strong>Pagos</strong> — de cada pago: el identificador de pago de Telegram, qué se compró, el importe en Stars, si fue una renovación de la suscripción, la fecha y, si se reembolsó, la fecha del reembolso.</li></ul>`,
      },
      {
        heading: `Lecturas y DeepSeek`,
        content: `<p>Cuando pide una lectura, nuestro servidor envía a DeepSeek las cartas que salieron (sus nombres, posiciones y si están invertidas), el idioma de la lectura y su pregunta, si la escribió. El modelo de DeepSeek redacta el texto de la lectura, que le mostramos y guardamos en su diario.</p>
<p>No enviamos a DeepSeek su identificador de Telegram, su nombre, su nombre de usuario ni ningún otro identificador. DeepSeek procesa estas solicitudes en servidores ubicados en la República Popular China. Le pedimos que no escriba en una pregunta nada que no quiera compartir, como datos de salud o nombres y contactos de otras personas.</p>`,
      },
      {
        heading: `Pagos`,
        content: `<p>Las lecturas y TaroTaper+ se pagan con Telegram Stars. Los pagos los procesa Telegram; las Stars se compran a Telegram o a través de Apple o Google. Nunca recibimos el número de su tarjeta ni otros datos de pago, solo la información de pago indicada arriba. La suscripción a TaroTaper+ se gestiona en Telegram, donde puede cancelarla en cualquier momento.</p>`,
      },
      {
        heading: `Recordatorios`,
        content: `<p>Los recordatorios están desactivados hasta que usted los active. Si lo hace, Telegram le pide que permita al bot escribirle, y el bot envía un mensaje al día a la hora que eligió, solo si aún no ha sacado su carta. Puede desactivarlos con el comando /reminders o en los ajustes de la miniaplicación. Si bloquea el bot, los recordatorios se desactivan automáticamente.</p>`,
      },
      {
        heading: `La miniaplicación en su dispositivo`,
        content: `<p>La miniaplicación no usa cookies ni guarda nada con fines de seguimiento o publicidad. Carga el script oficial de miniaplicaciones de Telegram desde telegram.org; sus fuentes y las imágenes de las cartas se sirven desde nuestro propio servidor.</p>`,
      },
      {
        heading: `Servicios de terceros`,
        content: `<h3>Telegram</h3>
<p>TaroTaper funciona en Telegram, que también procesa los pagos en Stars. El tratamiento de sus datos por parte de Telegram se rige por su Política de privacidad (<a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">telegram.org/privacy</a>).</p>
<h3>Cloudflare</h3>
<p>El bot, nuestro servicio de lecturas, la base de datos y la miniaplicación funcionan en Cloudflare (Workers, D1 y Pages). Los datos se cifran en tránsito y se procesan en la red global de Cloudflare, que puede incluir centros de datos fuera de su país. El tratamiento de datos por parte de Cloudflare se rige por su Política de privacidad (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek</h3>
<p>DeepSeek recibe las cartas, el idioma y su pregunta para redactar una lectura, y los procesa en servidores de la República Popular China. El tratamiento de datos por parte de DeepSeek se rige por su Política de privacidad (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>Sin análisis ni publicidad</h3>
<p>TaroTaper no utiliza servicios de análisis, publicidad ni seguimiento.</p>`,
      },
      {
        heading: `Por qué tratamos sus datos`,
        content: `<ul><li>Para hacer las lecturas que pide, llevar su diario y proporcionarle lo que compró: es necesario para ofrecerle TaroTaper.</li><li>Para enviar recordatorios: solo con su consentimiento, que da al activarlos y puede retirar en cualquier momento.</li><li>Para conservar los registros de pago, tramitar reembolsos y prevenir abusos: con base en nuestros intereses legítimos y nuestras obligaciones legales.</li></ul>`,
      },
      {
        heading: `Cuánto tiempo conservamos los datos`,
        content: `<p>Conservamos sus ajustes, su progreso y su diario mientras use TaroTaper. Si nos pide eliminarlos, lo hacemos en un plazo de 30 días. Los registros de pago se conservan el tiempo necesario para tramitar reembolsos y disputas y cumplir con las obligaciones contables. Nuestro servidor no guarda registros de sus solicitudes, y sus mensajes de error no contienen preguntas ni lecturas.</p>`,
      },
      {
        heading: `Privacidad infantil`,
        content: `<p>TaroTaper no está dirigido a menores de 16 años, y no recopilamos sus datos de forma consciente. Si cree que un menor ha usado TaroTaper, contáctenos y eliminaremos sus datos.</p>`,
      },
      {
        heading: `Compartición de datos`,
        content: `<p>Solo compartimos datos con los servicios descritos arriba y solo para hacer funcionar TaroTaper. No vendemos, alquilamos ni intercambiamos sus datos, y no los compartimos con fines publicitarios. Como los servidores de DeepSeek están en la República Popular China y Cloudflare opera en todo el mundo, sus datos pueden tratarse en países cuyas leyes de protección de datos difieren de las de su país.</p>`,
      },
      {
        heading: `Seguridad de datos`,
        content: `<p>Todas las conexiones —entre Telegram, la miniaplicación, nuestro servidor, nuestra base de datos y DeepSeek— se cifran con HTTPS/TLS. Cada solicitud de la miniaplicación se verifica con la firma de Telegram, y nuestro servicio de lecturas solo acepta solicitudes de nuestro propio bot, no de internet. Solo el desarrollador tiene acceso a la base de datos.</p>`,
      },
      {
        heading: `Sus derechos`,
        content: `<p>Puede pedirnos que le mostremos los datos que guardamos sobre usted, que los corrijamos, que le enviemos una copia o que eliminemos su diario y el resto de sus datos. Escríbanos desde la cuenta de Telegram que usa con TaroTaper o por correo electrónico; podemos pedirle que confirme la solicitud desde esa cuenta. Las consultas sobre pagos se hacen con el comando /paysupport en el bot. Bloquear el bot detiene los recordatorios, pero no elimina su diario: para eliminarlo, escríbanos. También tiene derecho a presentar una reclamación ante la autoridad de protección de datos de su país.</p>`,
      },
      {
        heading: `Cambios en esta política`,
        content: `<p>Podemos actualizar esta Política de privacidad de vez en cuando. Cualquier cambio se reflejará en esta página con una fecha de vigencia actualizada. Le recomendamos revisar esta política periódicamente.</p>`,
      },
      {
        heading: `Contáctenos`,
        content: `<p>Si tiene preguntas o inquietudes sobre esta Política de privacidad, contáctenos en:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio" target="_blank" rel="noopener noreferrer">@nikibstudio</a></p>`,
      },
    ],
  },
  fr: {
    title: `Politique de confidentialité`,
    effectiveDate: `Date d'entrée en vigueur : 7 octobre 2026`,
    intro: `Bogdan Nikishin, développeur indépendant (« nous », « notre » ou « nos »), exploite <strong>TaroTaper</strong>, un bot de tarot sur Telegram (<a href="https://t.me/TaroTaper_bot" target="_blank" rel="noopener noreferrer">@TaroTaper_bot</a>) avec sa mini-application. La présente Politique de confidentialité explique quelles informations TaroTaper traite, où elles sont stockées et envoyées, et pourquoi.`,
    sections: [
      {
        heading: `Aperçu`,
        content: `<p>TaroTaper fonctionne dans Telegram : vous ne créez pas de compte chez nous, et Telegram indique au bot qui vous êtes grâce à votre identifiant d'utilisateur Telegram. Nous conservons votre journal de tirages et vos réglages sur notre serveur, afin qu'ils soient là chaque fois que vous ouvrez TaroTaper. Les lectures sont rédigées par le modèle de langage de DeepSeek à partir de vos cartes et de votre question. TaroTaper ne contient ni publicité, ni outil d'analyse ou de suivi.</p>`,
      },
      {
        heading: `Informations transmises par Telegram`,
        content: `<p>Lorsque vous utilisez le bot ou ouvrez la mini-application, Telegram nous transmet votre identifiant d'utilisateur Telegram, votre prénom, votre nom d'utilisateur (si vous en avez un) et la langue de votre application Telegram. Les requêtes de la mini-application portent une signature de Telegram, que nous vérifions pour nous assurer qu'elles viennent bien de vous.</p>
<p>Nous conservons votre identifiant et votre langue. Votre prénom sert uniquement à vous saluer dans la mini-application et n'est pas conservé ; votre nom d'utilisateur n'est pas utilisé.</p>`,
      },
      {
        heading: `Ce que nous conservons`,
        content: `<p>Dans notre base de données, associés à votre identifiant Telegram, nous conservons :</p>
<ul><li><strong>Réglages</strong> — votre langue, votre décalage horaire (pour que votre journée commence à votre minuit et que les rappels arrivent à votre heure), l'activation des rappels et leur heure, et si vous avez terminé la présentation.</li><li><strong>Votre journal</strong> — chaque tirage : son type et sa date, la question que vous avez écrite (le cas échéant), les cartes tirées, le texte de la lecture et la note que vous lui avez donnée. Les cartes du jour de l'ancienne version de TaroTaper sont également conservées dans votre journal.</li><li><strong>Progression et accès</strong> — votre série de jours et votre meilleure série, si votre tirage Trois cartes gratuit a été utilisé, le nombre de tirages prépayés restants et la date de fin de TaroTaper+.</li><li><strong>Paiements</strong> — pour chaque paiement : l'identifiant de paiement Telegram, ce qui a été acheté, le montant en Stars, s'il s'agissait d'un renouvellement d'abonnement, la date et, en cas de remboursement, la date du remboursement.</li></ul>`,
      },
      {
        heading: `Lectures et DeepSeek`,
        content: `<p>Lorsque vous demandez un tirage, notre serveur envoie à DeepSeek les cartes tirées (leurs noms, leurs positions et si elles sont renversées), la langue de la lecture et votre question, si vous en avez écrit une. Le modèle de DeepSeek rédige le texte de la lecture, que nous vous affichons et enregistrons dans votre journal.</p>
<p>Nous n'envoyons à DeepSeek ni votre identifiant Telegram, ni votre nom, ni votre nom d'utilisateur, ni aucun autre identifiant. DeepSeek traite ces requêtes sur des serveurs situés en République populaire de Chine. Merci de ne rien écrire dans une question que vous ne voudriez pas partager, comme des informations de santé ou les noms et coordonnées d'autres personnes.</p>`,
      },
      {
        heading: `Paiements`,
        content: `<p>Les tirages et TaroTaper+ se paient en Telegram Stars. Les paiements sont traités par Telegram ; les Stars elles-mêmes s'achètent auprès de Telegram ou via Apple ou Google. Nous ne recevons jamais votre numéro de carte ni d'autres données de paiement, seulement les informations de paiement indiquées ci-dessus. L'abonnement TaroTaper+ se gère dans Telegram, où vous pouvez le résilier à tout moment.</p>`,
      },
      {
        heading: `Rappels`,
        content: `<p>Les rappels sont désactivés tant que vous ne les activez pas. Si vous les activez, Telegram vous demande d'autoriser le bot à vous écrire, puis le bot envoie un message par jour à l'heure choisie, uniquement si vous n'avez pas encore tiré votre carte. Vous pouvez désactiver les rappels avec la commande /reminders ou dans les réglages de la mini-application. Si vous bloquez le bot, les rappels sont désactivés automatiquement.</p>`,
      },
      {
        heading: `La mini-application sur votre appareil`,
        content: `<p>La mini-application ne dépose aucun cookie et n'enregistre rien à des fins de suivi ou de publicité. Elle charge le script officiel des mini-applications Telegram depuis telegram.org ; ses polices et les images des cartes proviennent de notre propre serveur.</p>`,
      },
      {
        heading: `Services tiers`,
        content: `<h3>Telegram</h3>
<p>TaroTaper fonctionne sur Telegram, qui traite aussi les paiements en Stars. Le traitement de vos données par Telegram est régi par sa politique de confidentialité (<a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">telegram.org/privacy</a>).</p>
<h3>Cloudflare</h3>
<p>Le bot, notre service de lecture, la base de données et la mini-application fonctionnent sur Cloudflare (Workers, D1 et Pages). Les données sont chiffrées en transit et traitées sur le réseau mondial de Cloudflare, y compris éventuellement dans des centres de données situés hors de votre pays. Le traitement des données par Cloudflare est régi par sa politique de confidentialité (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek</h3>
<p>DeepSeek reçoit les cartes, la langue et votre question pour rédiger une lecture, et les traite sur des serveurs situés en République populaire de Chine. Le traitement des données par DeepSeek est régi par sa politique de confidentialité (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>Ni analyse ni publicité</h3>
<p>TaroTaper n'utilise aucun service d'analyse, de publicité ou de suivi.</p>`,
      },
      {
        heading: `Pourquoi nous traitons vos données`,
        content: `<ul><li>Pour réaliser les tirages que vous demandez, tenir votre journal et fournir ce que vous avez acheté — c'est nécessaire pour vous fournir TaroTaper.</li><li>Pour envoyer des rappels — uniquement avec votre consentement, que vous donnez en les activant et pouvez retirer à tout moment.</li><li>Pour conserver les traces de paiement, traiter les remboursements et prévenir les abus — sur la base de nos intérêts légitimes et de nos obligations légales.</li></ul>`,
      },
      {
        heading: `Durée de conservation`,
        content: `<p>Nous conservons vos réglages, votre progression et votre journal tant que vous utilisez TaroTaper. Si vous nous demandez de les supprimer, nous le faisons dans un délai de 30 jours. Les traces de paiement sont conservées le temps nécessaire pour traiter les remboursements et les litiges et pour respecter nos obligations comptables. Notre serveur ne tient pas de journaux de vos requêtes, et ses messages d'erreur ne contiennent ni questions ni lectures.</p>`,
      },
      {
        heading: `Confidentialité des enfants`,
        content: `<p>TaroTaper ne s'adresse pas aux enfants de moins de 16 ans, et nous ne collectons pas sciemment leurs données. Si vous pensez qu'un enfant a utilisé TaroTaper, contactez-nous et nous supprimerons ses données.</p>`,
      },
      {
        heading: `Partage de données`,
        content: `<p>Nous ne partageons des données qu'avec les services décrits ci-dessus, et uniquement pour faire fonctionner TaroTaper. Nous ne vendons, ne louons ni n'échangeons vos données, et nous ne les partageons pas à des fins publicitaires. Les serveurs de DeepSeek étant situés en République populaire de Chine et Cloudflare opérant dans le monde entier, vos données peuvent être traitées dans des pays dont les lois sur la protection des données diffèrent de celles de votre pays.</p>`,
      },
      {
        heading: `Sécurité des données`,
        content: `<p>Toutes les connexions — entre Telegram, la mini-application, notre serveur, notre base de données et DeepSeek — sont chiffrées en HTTPS/TLS. Chaque requête de la mini-application est vérifiée grâce à la signature de Telegram, et notre service de lecture n'accepte que les requêtes de notre propre bot, pas celles venant d'Internet. Seul le développeur a accès à la base de données.</p>`,
      },
      {
        heading: `Vos droits`,
        content: `<p>Vous pouvez nous demander de vous montrer les données que nous conservons sur vous, de les corriger, de vous en envoyer une copie ou de supprimer votre journal et vos autres données. Écrivez-nous depuis le compte Telegram que vous utilisez avec TaroTaper, ou par e-mail ; nous pourrons vous demander de confirmer la demande depuis ce compte. Pour les questions de paiement, utilisez la commande /paysupport dans le bot. Bloquer le bot arrête les rappels mais ne supprime pas votre journal — pour le supprimer, écrivez-nous. Vous avez également le droit d'introduire une réclamation auprès de l'autorité de protection des données de votre pays.</p>`,
      },
      {
        heading: `Modifications de cette politique`,
        content: `<p>Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre. Toute modification sera reflétée sur cette page avec une date d'entrée en vigueur mise à jour. Nous vous encourageons à consulter cette politique régulièrement.</p>`,
      },
      {
        heading: `Nous contacter`,
        content: `<p>Si vous avez des questions ou des préoccupations concernant cette Politique de confidentialité, veuillez nous contacter à :</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio" target="_blank" rel="noopener noreferrer">@nikibstudio</a></p>`,
      },
    ],
  },
  de: {
    title: `Datenschutzrichtlinie`,
    effectiveDate: `Gültig ab: 7. Oktober 2026`,
    intro: `Bogdan Nikishin, ein unabhängiger Entwickler („wir“, „unser“ oder „uns“), betreibt <strong>TaroTaper</strong>, einen Tarot-Bot in Telegram (<a href="https://t.me/TaroTaper_bot" target="_blank" rel="noopener noreferrer">@TaroTaper_bot</a>) mit seiner Mini-App. Diese Datenschutzrichtlinie erklärt, welche Informationen TaroTaper verarbeitet, wo sie gespeichert und wohin sie gesendet werden und warum.`,
    sections: [
      {
        heading: `Überblick`,
        content: `<p>TaroTaper funktioniert innerhalb von Telegram: Sie legen bei uns kein Konto an, und Telegram teilt dem Bot über Ihre Telegram-Nutzer-ID mit, wer Sie sind. Ihr Tagebuch mit Legungen und Ihre Einstellungen speichern wir auf unserem Server, damit sie da sind, wann immer Sie TaroTaper öffnen. Die Deutungen schreibt das Sprachmodell von DeepSeek anhand Ihrer Karten und Ihrer Frage. TaroTaper enthält keine Werbung und keine Analyse- oder Tracking-Dienste.</p>`,
      },
      {
        heading: `Informationen von Telegram`,
        content: `<p>Wenn Sie den Bot nutzen oder die Mini-App öffnen, übermittelt uns Telegram Ihre Telegram-Nutzer-ID, Ihren Vornamen, Ihren Benutzernamen (falls vorhanden) und die Sprache Ihrer Telegram-App. Anfragen aus der Mini-App tragen eine Signatur von Telegram, die wir prüfen, um sicherzugehen, dass sie wirklich von Ihnen stammen.</p>
<p>Wir speichern Ihre Nutzer-ID und Ihre Sprache. Ihr Vorname wird nur zur Begrüßung in der Mini-App verwendet und nicht gespeichert; Ihr Benutzername wird nicht verwendet.</p>`,
      },
      {
        heading: `Was wir speichern`,
        content: `<p>In unserer Datenbank speichern wir, verknüpft mit Ihrer Telegram-Nutzer-ID:</p>
<ul><li><strong>Einstellungen</strong> — Ihre Sprache, Ihre Zeitzonenverschiebung (damit Ihr Tag um Ihre Mitternacht beginnt und Erinnerungen zu Ihrer Stunde kommen), ob Erinnerungen eingeschaltet sind und zu welcher Stunde, und ob Sie die Einführung abgeschlossen haben.</li><li><strong>Ihr Tagebuch</strong> — jede Legung: Art und Datum, die Frage, die Sie geschrieben haben (falls vorhanden), die gezogenen Karten, den Text der Deutung und Ihre Bewertung. Tageskarten aus der früheren Version von TaroTaper sind ebenfalls in Ihrem Tagebuch erhalten.</li><li><strong>Fortschritt und Zugang</strong> — Ihre Serie und Ihre beste Serie, ob Ihre kostenlose Legung „Drei Karten“ genutzt wurde, wie viele bezahlte Legungen Ihnen noch bleiben und wann TaroTaper+ endet.</li><li><strong>Zahlungen</strong> — zu jeder Zahlung: die Zahlungs-ID von Telegram, was gekauft wurde, der Betrag in Stars, ob es eine Verlängerung des Abos war, das Datum und, falls erstattet, das Datum der Erstattung.</li></ul>`,
      },
      {
        heading: `Deutungen und DeepSeek`,
        content: `<p>Wenn Sie eine Legung anfordern, sendet unser Server an DeepSeek die gezogenen Karten (Namen, Positionen und ob sie umgekehrt liegen), die Sprache der Deutung und Ihre Frage, falls Sie eine geschrieben haben. Das Modell von DeepSeek schreibt den Text der Deutung, den wir Ihnen anzeigen und in Ihrem Tagebuch speichern.</p>
<p>Wir senden DeepSeek weder Ihre Telegram-Nutzer-ID noch Ihren Namen, Ihren Benutzernamen oder eine andere Kennung. DeepSeek verarbeitet diese Anfragen auf Servern in der Volksrepublik China. Bitte schreiben Sie in eine Frage nichts, was Sie nicht teilen möchten, etwa Gesundheitsangaben oder Namen und Kontaktdaten anderer Personen.</p>`,
      },
      {
        heading: `Zahlungen`,
        content: `<p>Legungen und TaroTaper+ werden mit Telegram Stars bezahlt. Die Zahlungen wickelt Telegram ab; Stars selbst werden bei Telegram oder über Apple oder Google gekauft. Wir erhalten nie Ihre Kartennummer oder andere Zahlungsdaten, sondern nur die oben genannten Angaben zur Zahlung. Ein TaroTaper+-Abo wird in Telegram verwaltet, wo Sie es jederzeit kündigen können.</p>`,
      },
      {
        heading: `Erinnerungen`,
        content: `<p>Erinnerungen sind ausgeschaltet, bis Sie sie selbst einschalten. Dann bittet Telegram Sie, dem Bot das Schreiben zu erlauben, und der Bot sendet eine Nachricht am Tag zur gewählten Stunde – nur, wenn Sie Ihre Karte noch nicht gezogen haben. Sie können Erinnerungen mit dem Befehl /reminders oder in den Einstellungen der Mini-App ausschalten. Wenn Sie den Bot blockieren, werden Erinnerungen automatisch ausgeschaltet.</p>`,
      },
      {
        heading: `Die Mini-App auf Ihrem Gerät`,
        content: `<p>Die Mini-App setzt keine Cookies und speichert nichts zu Tracking- oder Werbezwecken. Sie lädt das offizielle Mini-App-Skript von Telegram von telegram.org; Schriften und Kartenbilder kommen von unserem eigenen Server.</p>`,
      },
      {
        heading: `Drittanbieterdienste`,
        content: `<h3>Telegram</h3>
<p>TaroTaper läuft auf Telegram, das auch die Zahlungen in Stars abwickelt. Für den Umgang von Telegram mit Ihren Daten gilt dessen Datenschutzrichtlinie (<a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">telegram.org/privacy</a>).</p>
<h3>Cloudflare</h3>
<p>Der Bot, unser Deutungsdienst, die Datenbank und die Mini-App laufen auf Cloudflare (Workers, D1 und Pages). Die Daten werden bei der Übertragung verschlüsselt und im weltweiten Netz von Cloudflare verarbeitet, möglicherweise auch in Rechenzentren außerhalb Ihres Landes. Für den Umgang von Cloudflare mit Daten gilt dessen Datenschutzrichtlinie (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek</h3>
<p>DeepSeek erhält die Karten, die Sprache und Ihre Frage, um eine Deutung zu schreiben, und verarbeitet sie auf Servern in der Volksrepublik China. Für den Umgang von DeepSeek mit Daten gilt dessen Datenschutzrichtlinie (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>Keine Analyse und keine Werbung</h3>
<p>TaroTaper nutzt keine Analyse-, Werbe- oder Tracking-Dienste.</p>`,
      },
      {
        heading: `Warum wir Ihre Daten verarbeiten`,
        content: `<ul><li>Um die Legungen zu erstellen, die Sie anfordern, Ihr Tagebuch zu führen und Gekauftes bereitzustellen – das ist erforderlich, um Ihnen TaroTaper anzubieten.</li><li>Um Erinnerungen zu senden – nur mit Ihrer Einwilligung, die Sie durch das Einschalten erteilen und jederzeit widerrufen können.</li><li>Um Zahlungsbelege aufzubewahren, Erstattungen zu bearbeiten und Missbrauch zu verhindern – auf Grundlage unserer berechtigten Interessen und gesetzlichen Pflichten.</li></ul>`,
      },
      {
        heading: `Wie lange wir Daten speichern`,
        content: `<p>Einstellungen, Fortschritt und Tagebuch speichern wir, solange Sie TaroTaper nutzen. Wenn Sie uns um Löschung bitten, löschen wir sie innerhalb von 30 Tagen. Zahlungsbelege bewahren wir so lange auf, wie es für Erstattungen, Streitfälle und die Buchhaltung nötig ist. Unser Server führt keine Protokolle Ihrer Anfragen, und seine Fehlermeldungen enthalten weder Fragen noch Deutungen.</p>`,
      },
      {
        heading: `Datenschutz für Kinder`,
        content: `<p>TaroTaper richtet sich nicht an Kinder unter 16 Jahren, und wir erheben wissentlich keine Daten von ihnen. Wenn Sie glauben, dass ein Kind TaroTaper genutzt hat, kontaktieren Sie uns bitte, und wir löschen seine Daten.</p>`,
      },
      {
        heading: `Datenweitergabe`,
        content: `<p>Wir geben Daten nur an die oben beschriebenen Dienste weiter und nur, um TaroTaper zu betreiben. Wir verkaufen, vermieten oder tauschen Ihre Daten nicht und geben sie nicht für Werbung weiter. Da die Server von DeepSeek in der Volksrepublik China stehen und Cloudflare weltweit tätig ist, können Ihre Daten in Ländern verarbeitet werden, deren Datenschutzgesetze von denen Ihres Landes abweichen.</p>`,
      },
      {
        heading: `Datensicherheit`,
        content: `<p>Alle Verbindungen – zwischen Telegram, der Mini-App, unserem Server, unserer Datenbank und DeepSeek – sind per HTTPS/TLS verschlüsselt. Jede Anfrage aus der Mini-App wird anhand der Signatur von Telegram geprüft, und unser Deutungsdienst nimmt Anfragen nur von unserem eigenen Bot an, nicht aus dem Internet. Zugriff auf die Datenbank hat nur der Entwickler.</p>`,
      },
      {
        heading: `Ihre Rechte`,
        content: `<p>Sie können uns bitten, Ihnen die über Sie gespeicherten Daten zu zeigen, sie zu berichtigen, Ihnen eine Kopie zu senden oder Ihr Tagebuch und Ihre übrigen Daten zu löschen. Schreiben Sie uns aus dem Telegram-Konto, mit dem Sie TaroTaper nutzen, oder per E-Mail; wir bitten Sie unter Umständen, die Anfrage aus diesem Konto zu bestätigen. Fragen zu Zahlungen stellen Sie über den Befehl /paysupport im Bot. Das Blockieren des Bots beendet die Erinnerungen, löscht aber Ihr Tagebuch nicht – schreiben Sie uns, um es zu löschen. Sie haben außerdem das Recht, sich bei der Datenschutzbehörde Ihres Landes zu beschweren.</p>`,
      },
      {
        heading: `Änderungen dieser Richtlinie`,
        content: `<p>Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit einem aktualisierten Gültigkeitsdatum angezeigt. Wir empfehlen Ihnen, diese Richtlinie regelmäßig zu überprüfen.</p>`,
      },
      {
        heading: `Kontaktieren Sie uns`,
        content: `<p>Wenn Sie Fragen oder Bedenken zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns unter:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio" target="_blank" rel="noopener noreferrer">@nikibstudio</a></p>`,
      },
    ],
  },
  ja: {
    title: `プライバシーポリシー`,
    effectiveDate: `発効日：2026年10月7日`,
    intro: `個人開発者のボグダン・ニキシン（「当方」）は、Telegramのタロットボット<strong>TaroTaper</strong>（<a href="https://t.me/TaroTaper_bot" target="_blank" rel="noopener noreferrer">@TaroTaper_bot</a>）とそのミニアプリを運営しています。本プライバシーポリシーでは、TaroTaperが扱う情報と、その保存先・送信先、およびその理由を説明します。`,
    sections: [
      {
        heading: `概要`,
        content: `<p>TaroTaperはTelegramの中で動作します。当方でアカウントを作成する必要はなく、TelegramがTelegramユーザーIDによって、あなたが誰かをボットに伝えます。リーディングの日記と設定は当方のサーバーに保存されるため、いつTaroTaperを開いても利用できます。リーディングは、あなたのカードと質問をもとにDeepSeekの言語モデルが書きます。TaroTaperには広告も、分析やトラッキングのツールもありません。</p>`,
      },
      {
        heading: `Telegramから受け取る情報`,
        content: `<p>ボットを使ったりミニアプリを開いたりすると、TelegramからあなたのTelegramユーザーID、名前、ユーザー名（設定している場合）、Telegramアプリの言語が当方に送られます。ミニアプリからのリクエストにはTelegramの署名が付いており、当方はそれを確認して、本当にあなたからのリクエストであることを確かめます。</p>
<p>当方が保存するのはユーザーIDと言語です。名前はミニアプリであいさつするためだけに使い、保存しません。ユーザー名は使用しません。</p>`,
      },
      {
        heading: `当方が保存する情報`,
        content: `<p>当方のデータベースには、あなたのTelegramユーザーIDにひも付けて次の情報を保存します。</p>
<ul><li><strong>設定</strong> — 言語、タイムゾーンの時差（あなたの1日があなたの午前0時に始まり、リマインダーがあなたの時刻に届くように）、リマインダーのオン／オフと時刻、紹介画面を終えたかどうか。</li><li><strong>日記</strong> — すべてのリーディング：種類と日付、書いた質問（ある場合）、引いたカード、リーディングの本文、あなたがつけた評価。以前のバージョンのTaroTaperの今日のカードも日記に残っています。</li><li><strong>進捗とアクセス</strong> — 連続記録と最高記録、無料のスリーカードを使ったかどうか、前払いのリーディングの残り回数、TaroTaper+の終了日。</li><li><strong>支払い</strong> — 各支払いについて：Telegramの支払いID、購入内容、Starsでの金額、サブスクリプションの更新だったかどうか、日付、返金された場合はその日付。</li></ul>`,
      },
      {
        heading: `リーディングとDeepSeek`,
        content: `<p>リーディングを頼むと、当方のサーバーは引いたカード（名前、位置、逆位置かどうか）、リーディングの言語、そして質問を書いた場合はその質問をDeepSeekに送ります。DeepSeekのモデルがリーディングの本文を書き、当方はそれをあなたに表示して日記に保存します。</p>
<p>あなたのTelegramユーザーID、名前、ユーザー名、その他の識別子をDeepSeekに送ることはありません。DeepSeekはこれらのリクエストを中華人民共和国にあるサーバーで処理します。健康に関する情報や他人の名前・連絡先など、共有したくない内容は質問に書かないでください。</p>`,
      },
      {
        heading: `支払い`,
        content: `<p>リーディングとTaroTaper+の支払いにはTelegram Starsを使います。支払いはTelegramが処理し、Stars自体はTelegramから、またはAppleやGoogleを通じて購入します。当方がカード番号などの支払い情報を受け取ることはなく、受け取るのは上記の支払い情報だけです。TaroTaper+のサブスクリプションはTelegramで管理され、いつでも解約できます。</p>`,
      },
      {
        heading: `リマインダー`,
        content: `<p>リマインダーは、あなたがオンにするまでオフのままです。オンにすると、Telegramがボットからのメッセージを許可するよう求め、その後ボットは、まだカードを引いていない日に限り、選んだ時刻に1日1通メッセージを送ります。リマインダーは /reminders コマンドまたはミニアプリの設定でオフにできます。ボットをブロックすると、リマインダーは自動的にオフになります。</p>`,
      },
      {
        heading: `お使いのデバイスでのミニアプリ`,
        content: `<p>ミニアプリはCookieを使わず、トラッキングや広告のためのデータを保存しません。Telegram公式のミニアプリ用スクリプトをtelegram.orgから読み込み、フォントとカードの画像は当方のサーバーから配信されます。</p>`,
      },
      {
        heading: `サードパーティサービス`,
        content: `<h3>Telegram</h3>
<p>TaroTaperはTelegram上で動作し、Starsでの支払いもTelegramが処理します。Telegramによるデータの取り扱いは、同社のプライバシーポリシー（<a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">telegram.org/privacy</a>）に従います。</p>
<h3>Cloudflare</h3>
<p>ボット、リーディングサービス、データベース、ミニアプリはCloudflare（Workers、D1、Pages）上で動作します。データは通信時に暗号化され、お住まいの国以外のデータセンターを含む可能性のあるCloudflareのグローバルネットワークで処理されます。Cloudflareによるデータの取り扱いは、同社のプライバシーポリシー（<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>）に従います。</p>
<h3>DeepSeek</h3>
<p>DeepSeekはリーディングを書くためにカード、言語、質問を受け取り、中華人民共和国のサーバーで処理します。DeepSeekによるデータの取り扱いは、同社のプライバシーポリシー（<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>）に従います。</p>
<h3>分析・広告なし</h3>
<p>TaroTaperは分析、広告、トラッキングのサービスを一切使用しません。</p>`,
      },
      {
        heading: `データを処理する理由`,
        content: `<ul><li>あなたが頼んだリーディングを行い、日記を管理し、購入したものを提供するため。これはTaroTaperを提供するうえで必要です。</li><li>リマインダーを送るため。あなたがオンにすることで与える同意に基づき、同意はいつでも撤回できます。</li><li>支払いの記録を保管し、返金に対応し、不正利用を防ぐため。当方の正当な利益と法的義務に基づきます。</li></ul>`,
      },
      {
        heading: `データの保存期間`,
        content: `<p>設定、進捗、日記は、あなたがTaroTaperを使っている間保存します。削除を依頼された場合は、30日以内に削除します。支払いの記録は、返金や紛争への対応、会計上の義務を果たすために必要な期間保存します。当方のサーバーはあなたのリクエストのログを残さず、エラーメッセージに質問やリーディングは含まれません。</p>`,
      },
      {
        heading: `お子様のプライバシー`,
        content: `<p>TaroTaperは16歳未満のお子様を対象としておらず、当方がお子様のデータを故意に収集することはありません。お子様がTaroTaperを使ったと思われる場合はご連絡ください。そのデータを削除します。</p>`,
      },
      {
        heading: `データの共有`,
        content: `<p>当方がデータを共有するのは上記のサービスだけで、それもTaroTaperを動かすためだけです。データを販売、貸与、交換することはなく、広告のために共有することもありません。DeepSeekのサーバーは中華人民共和国にあり、Cloudflareは世界中で運用されているため、あなたのデータは、お住まいの国とはデータ保護法が異なる国で処理される場合があります。</p>`,
      },
      {
        heading: `データセキュリティ`,
        content: `<p>Telegram、ミニアプリ、当方のサーバー、データベース、DeepSeekの間の通信はすべてHTTPS/TLSで暗号化されています。ミニアプリからのリクエストはすべてTelegramの署名で確認され、当方のリーディングサービスはインターネットからではなく、当方のボットからのリクエストだけを受け付けます。データベースにアクセスできるのは開発者だけです。</p>`,
      },
      {
        heading: `お客様の権利`,
        content: `<p>当方が保存しているあなたのデータの開示、訂正、コピーの送付、日記やその他のデータの削除を依頼できます。TaroTaperで使っているTelegramアカウントから、またはメールでご連絡ください。そのアカウントから依頼を確認していただく場合があります。支払いに関するお問い合わせは、ボットの /paysupport コマンドからどうぞ。ボットをブロックするとリマインダーは止まりますが、日記は削除されません。削除するには当方にご連絡ください。また、お住まいの国のデータ保護当局に苦情を申し立てる権利もあります。</p>`,
      },
      {
        heading: `本ポリシーの変更`,
        content: `<p>当方は本プライバシーポリシーを随時更新する場合があります。変更は、更新された発効日とともにこのページに反映されます。定期的に本ポリシーをご確認いただくことをお勧めします。</p>`,
      },
      {
        heading: `お問い合わせ`,
        content: `<p>本プライバシーポリシーに関するご質問やご懸念がある場合は、以下までお問い合わせください：</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio" target="_blank" rel="noopener noreferrer">@nikibstudio</a></p>`,
      },
    ],
  },
  ko: {
    title: `개인정보 처리방침`,
    effectiveDate: `시행일: 2026년 10월 7일`,
    intro: `독립 개발자 보그단 니키신("개발자")은 Telegram 타로 봇 <strong>TaroTaper</strong>(<a href="https://t.me/TaroTaper_bot" target="_blank" rel="noopener noreferrer">@TaroTaper_bot</a>)와 그 미니 앱을 운영합니다. 본 개인정보 처리방침은 TaroTaper가 어떤 정보를 다루는지, 그 정보가 어디에 저장되고 어디로 전송되는지, 그리고 그 이유를 설명합니다.`,
    sections: [
      {
        heading: `개요`,
        content: `<p>TaroTaper는 Telegram 안에서 작동합니다. 개발자에게 계정을 만들 필요가 없으며, Telegram이 Telegram 사용자 ID로 봇에 귀하가 누구인지 알려 줍니다. 리딩 일기와 설정은 개발자의 서버에 저장되므로 언제 TaroTaper를 열어도 그대로 있습니다. 리딩은 귀하의 카드와 질문을 바탕으로 DeepSeek의 언어 모델이 작성합니다. TaroTaper에는 광고가 없으며 분석·추적 도구도 사용하지 않습니다.</p>`,
      },
      {
        heading: `Telegram에서 받는 정보`,
        content: `<p>귀하가 봇을 사용하거나 미니 앱을 열면, Telegram은 귀하의 Telegram 사용자 ID, 이름, 사용자명(있는 경우), Telegram 앱의 언어를 개발자에게 전달합니다. 미니 앱의 요청에는 Telegram의 서명이 포함되어 있으며, 개발자는 이 서명을 확인해 요청이 실제로 귀하에게서 온 것인지 확인합니다.</p>
<p>개발자는 사용자 ID와 언어를 저장합니다. 이름은 미니 앱에서 인사할 때만 사용하며 저장하지 않습니다. 사용자명은 사용하지 않습니다.</p>`,
      },
      {
        heading: `저장하는 정보`,
        content: `<p>개발자의 데이터베이스에는 귀하의 Telegram 사용자 ID와 연결된 다음 정보가 저장됩니다.</p>
<ul><li><strong>설정</strong> — 언어, 시간대 차이(귀하의 하루가 귀하의 자정에 시작되고 알림이 귀하의 시간에 오도록), 알림 사용 여부와 시간, 소개 화면을 마쳤는지 여부.</li><li><strong>일기</strong> — 모든 리딩: 종류와 날짜, 작성한 질문(있는 경우), 뽑힌 카드, 리딩 본문, 귀하가 남긴 평가. 이전 버전 TaroTaper의 오늘의 카드도 일기에 그대로 남아 있습니다.</li><li><strong>진행 상황과 이용 권한</strong> — 연속 기록과 최고 기록, 무료 세 장 스프레드 사용 여부, 남은 선결제 리딩 수, TaroTaper+ 종료일.</li><li><strong>결제</strong> — 각 결제의 Telegram 결제 ID, 구매 항목, Stars 금액, 구독 갱신 여부, 날짜, 환불된 경우 환불 날짜.</li></ul>`,
      },
      {
        heading: `리딩과 DeepSeek`,
        content: `<p>귀하가 리딩을 요청하면 개발자의 서버는 뽑힌 카드(이름, 위치, 역방향 여부), 리딩 언어, 그리고 질문을 작성한 경우 그 질문을 DeepSeek에 보냅니다. DeepSeek의 모델이 리딩 본문을 작성하고, 개발자는 이를 귀하에게 보여 주고 일기에 저장합니다.</p>
<p>귀하의 Telegram 사용자 ID, 이름, 사용자명 또는 기타 식별자는 DeepSeek에 보내지 않습니다. DeepSeek은 이러한 요청을 중화인민공화국에 있는 서버에서 처리합니다. 건강 정보나 다른 사람의 이름·연락처처럼 공유하고 싶지 않은 내용은 질문에 쓰지 마세요.</p>`,
      },
      {
        heading: `결제`,
        content: `<p>리딩과 TaroTaper+는 Telegram Stars로 결제합니다. 결제는 Telegram이 처리하며, Stars는 Telegram에서 또는 Apple이나 Google을 통해 구매합니다. 개발자는 카드 번호나 기타 결제 정보를 받지 않으며, 위에 나열된 결제 정보만 받습니다. TaroTaper+ 구독은 Telegram에서 관리되며, 언제든지 해지할 수 있습니다.</p>`,
      },
      {
        heading: `알림`,
        content: `<p>알림은 귀하가 켜기 전까지 꺼져 있습니다. 알림을 켜면 Telegram이 봇의 메시지 전송을 허용할지 묻고, 이후 봇은 아직 카드를 뽑지 않은 날에만 선택한 시간에 하루 한 번 메시지를 보냅니다. /reminders 명령어나 미니 앱 설정에서 알림을 끌 수 있습니다. 봇을 차단하면 알림은 자동으로 꺼집니다.</p>`,
      },
      {
        heading: `기기에서의 미니 앱`,
        content: `<p>미니 앱은 쿠키를 사용하지 않으며, 추적이나 광고를 위한 정보를 저장하지 않습니다. Telegram 공식 미니 앱 스크립트를 telegram.org에서 불러오며, 글꼴과 카드 이미지는 개발자의 서버에서 제공됩니다.</p>`,
      },
      {
        heading: `타사 서비스`,
        content: `<h3>Telegram</h3>
<p>TaroTaper는 Telegram에서 작동하며, Stars 결제도 Telegram이 처리합니다. Telegram의 데이터 처리는 Telegram의 개인정보 처리방침(<a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">telegram.org/privacy</a>)을 따릅니다.</p>
<h3>Cloudflare</h3>
<p>봇, 리딩 서비스, 데이터베이스, 미니 앱은 Cloudflare(Workers, D1, Pages)에서 작동합니다. 데이터는 전송 중에 암호화되며, 귀하의 국가 밖에 있는 데이터 센터를 포함할 수 있는 Cloudflare의 글로벌 네트워크에서 처리됩니다. Cloudflare의 데이터 처리는 Cloudflare의 개인정보 처리방침(<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>)을 따릅니다.</p>
<h3>DeepSeek</h3>
<p>DeepSeek은 리딩을 작성하기 위해 카드, 언어, 질문을 받아 중화인민공화국의 서버에서 처리합니다. DeepSeek의 데이터 처리는 DeepSeek의 개인정보 처리방침(<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>)을 따릅니다.</p>
<h3>분석·광고 없음</h3>
<p>TaroTaper는 분석, 광고, 추적 서비스를 사용하지 않습니다.</p>`,
      },
      {
        heading: `데이터를 처리하는 이유`,
        content: `<ul><li>귀하가 요청한 리딩을 제공하고, 일기를 관리하고, 구매한 항목을 제공하기 위해 — TaroTaper를 제공하는 데 필요합니다.</li><li>알림을 보내기 위해 — 귀하가 알림을 켜서 주는 동의에 근거하며, 동의는 언제든지 철회할 수 있습니다.</li><li>결제 기록을 보관하고, 환불을 처리하고, 악용을 막기 위해 — 개발자의 정당한 이익과 법적 의무에 근거합니다.</li></ul>`,
      },
      {
        heading: `보관 기간`,
        content: `<p>설정, 진행 상황, 일기는 귀하가 TaroTaper를 사용하는 동안 보관합니다. 삭제를 요청하시면 30일 이내에 삭제합니다. 결제 기록은 환불과 분쟁 처리, 회계 의무 이행에 필요한 기간 동안 보관합니다. 개발자의 서버는 귀하의 요청 로그를 남기지 않으며, 오류 메시지에는 질문이나 리딩이 포함되지 않습니다.</p>`,
      },
      {
        heading: `아동 개인정보 보호`,
        content: `<p>TaroTaper는 16세 미만 아동을 대상으로 하지 않으며, 개발자는 아동의 데이터를 고의로 수집하지 않습니다. 아동이 TaroTaper를 사용했다고 생각되면 연락해 주세요. 해당 데이터를 삭제하겠습니다.</p>`,
      },
      {
        heading: `데이터 공유`,
        content: `<p>개발자는 위에 설명한 서비스와만, TaroTaper를 운영하기 위해서만 데이터를 공유합니다. 데이터를 판매, 대여, 교환하지 않으며 광고를 위해 공유하지 않습니다. DeepSeek의 서버는 중화인민공화국에 있고 Cloudflare는 전 세계에서 운영되므로, 귀하의 데이터는 귀하의 국가와 데이터 보호법이 다른 국가에서 처리될 수 있습니다.</p>`,
      },
      {
        heading: `데이터 보안`,
        content: `<p>Telegram, 미니 앱, 개발자의 서버, 데이터베이스, DeepSeek 사이의 모든 연결은 HTTPS/TLS로 암호화됩니다. 미니 앱의 모든 요청은 Telegram의 서명으로 확인되며, 리딩 서비스는 인터넷이 아닌 개발자의 봇에서 오는 요청만 받습니다. 데이터베이스에는 개발자만 접근할 수 있습니다.</p>`,
      },
      {
        heading: `귀하의 권리`,
        content: `<p>개발자가 보관하는 귀하의 데이터를 열람하거나, 정정하거나, 사본을 받거나, 일기와 나머지 데이터를 삭제해 달라고 요청할 수 있습니다. TaroTaper에서 사용하는 Telegram 계정이나 이메일로 연락해 주세요. 해당 계정에서 요청을 확인해 달라고 부탁드릴 수 있습니다. 결제 관련 문의는 봇에서 /paysupport 명령어를 이용해 주세요. 봇을 차단하면 알림은 멈추지만 일기는 삭제되지 않습니다. 삭제하려면 개발자에게 연락해 주세요. 또한 귀하의 국가의 개인정보 보호 기관에 민원을 제기할 권리가 있습니다.</p>`,
      },
      {
        heading: `본 방침의 변경`,
        content: `<p>개발자는 수시로 본 개인정보 처리방침을 업데이트할 수 있습니다. 변경 사항은 업데이트된 시행일과 함께 이 페이지에 반영됩니다. 정기적으로 본 방침을 확인하시기 바랍니다.</p>`,
      },
      {
        heading: `문의하기`,
        content: `<p>본 개인정보 처리방침에 대한 질문이나 우려 사항이 있으시면 다음으로 문의해 주십시오:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio" target="_blank" rel="noopener noreferrer">@nikibstudio</a></p>`,
      },
    ],
  },
  pt: {
    title: `Política de Privacidade`,
    effectiveDate: `Data de vigência: 7 de outubro de 2026`,
    intro: `Bogdan Nikishin, desenvolvedor independente ("nós", "nosso" ou "nos"), mantém o <strong>TaroTaper</strong>, um bot de tarô no Telegram (<a href="https://t.me/TaroTaper_bot" target="_blank" rel="noopener noreferrer">@TaroTaper_bot</a>) com seu miniaplicativo. Esta Política de Privacidade explica quais informações o TaroTaper trata, onde elas são armazenadas e para onde são enviadas, e por quê.`,
    sections: [
      {
        heading: `Visão geral`,
        content: `<p>O TaroTaper funciona dentro do Telegram: você não cria uma conta conosco, e o Telegram informa ao bot quem você é pelo seu ID de usuário do Telegram. Guardamos o seu diário de leituras e as suas configurações em nosso servidor, para que estejam lá sempre que você abrir o TaroTaper. As leituras são escritas pelo modelo de linguagem da DeepSeek a partir das suas cartas e da sua pergunta. O TaroTaper não tem anúncios nem ferramentas de análise ou rastreamento.</p>`,
      },
      {
        heading: `Informações recebidas do Telegram`,
        content: `<p>Quando você usa o bot ou abre o miniaplicativo, o Telegram nos envia o seu ID de usuário do Telegram, o seu nome, o seu nome de usuário (se você tiver um) e o idioma do seu aplicativo do Telegram. As solicitações do miniaplicativo têm uma assinatura do Telegram, que verificamos para garantir que vêm mesmo de você.</p>
<p>Guardamos o seu ID de usuário e o seu idioma. O seu nome é usado apenas para cumprimentar você no miniaplicativo e não é guardado; o seu nome de usuário não é usado.</p>`,
      },
      {
        heading: `O que armazenamos`,
        content: `<p>Em nosso banco de dados, vinculados ao seu ID de usuário do Telegram, armazenamos:</p>
<ul><li><strong>Configurações</strong> — o seu idioma, a diferença do seu fuso horário (para que o seu dia comece à sua meia-noite e os lembretes cheguem no seu horário), se os lembretes estão ativados e em que horário, e se você concluiu a apresentação.</li><li><strong>Seu diário</strong> — cada leitura: o tipo e a data, a pergunta que você escreveu (se houver), as cartas tiradas, o texto da leitura e a nota que você deu. As cartas do dia da versão anterior do TaroTaper também continuam no seu diário.</li><li><strong>Progresso e acesso</strong> — a sua sequência de dias e a melhor sequência, se a sua tiragem gratuita de Três cartas já foi usada, quantas leituras pré-pagas restam e quando o TaroTaper+ termina.</li><li><strong>Pagamentos</strong> — de cada pagamento: o ID de pagamento do Telegram, o que foi comprado, o valor em Stars, se foi uma renovação da assinatura, a data e, se houve reembolso, a data do reembolso.</li></ul>`,
      },
      {
        heading: `Leituras e DeepSeek`,
        content: `<p>Quando você pede uma leitura, nosso servidor envia à DeepSeek as cartas tiradas (nomes, posições e se estão invertidas), o idioma da leitura e a sua pergunta, se você escreveu uma. O modelo da DeepSeek escreve o texto da leitura, que mostramos a você e guardamos no seu diário.</p>
<p>Não enviamos à DeepSeek o seu ID do Telegram, o seu nome, o seu nome de usuário nem qualquer outro identificador. A DeepSeek processa essas solicitações em servidores na República Popular da China. Por favor, não escreva em uma pergunta nada que você não queira compartilhar, como informações de saúde ou nomes e contatos de outras pessoas.</p>`,
      },
      {
        heading: `Pagamentos`,
        content: `<p>As leituras e o TaroTaper+ são pagos com Telegram Stars. Os pagamentos são processados pelo Telegram; as Stars são compradas do Telegram ou por meio da Apple ou do Google. Nunca recebemos o número do seu cartão nem outros dados de pagamento, apenas as informações de pagamento listadas acima. A assinatura do TaroTaper+ é gerenciada no Telegram, onde você pode cancelá-la a qualquer momento.</p>`,
      },
      {
        heading: `Lembretes`,
        content: `<p>Os lembretes ficam desativados até você ativá-los. Se você ativar, o Telegram pede que você permita que o bot envie mensagens, e o bot envia uma mensagem por dia no horário escolhido, só se você ainda não tirou a sua carta. Você pode desativá-los com o comando /reminders ou nas configurações do miniaplicativo. Se você bloquear o bot, os lembretes são desativados automaticamente.</p>`,
      },
      {
        heading: `O miniaplicativo no seu dispositivo`,
        content: `<p>O miniaplicativo não usa cookies e não guarda nada para rastreamento ou publicidade. Ele carrega o script oficial de miniaplicativos do Telegram a partir de telegram.org; as fontes e as imagens das cartas vêm do nosso próprio servidor.</p>`,
      },
      {
        heading: `Serviços de terceiros`,
        content: `<h3>Telegram</h3>
<p>O TaroTaper funciona no Telegram, que também processa os pagamentos em Stars. O tratamento dos seus dados pelo Telegram é regido pela Política de Privacidade dele (<a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">telegram.org/privacy</a>).</p>
<h3>Cloudflare</h3>
<p>O bot, nosso serviço de leituras, o banco de dados e o miniaplicativo funcionam na Cloudflare (Workers, D1 e Pages). Os dados são criptografados em trânsito e processados na rede global da Cloudflare, que pode incluir data centers fora do seu país. O tratamento de dados pela Cloudflare é regido pela Política de Privacidade dela (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek</h3>
<p>A DeepSeek recebe as cartas, o idioma e a sua pergunta para escrever uma leitura, e os processa em servidores na República Popular da China. O tratamento de dados pela DeepSeek é regido pela Política de Privacidade dela (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>Sem análise nem publicidade</h3>
<p>O TaroTaper não usa serviços de análise, publicidade ou rastreamento.</p>`,
      },
      {
        heading: `Por que tratamos os seus dados`,
        content: `<ul><li>Para fazer as leituras que você pede, manter o seu diário e fornecer o que você comprou — isso é necessário para oferecer o TaroTaper a você.</li><li>Para enviar lembretes — apenas com o seu consentimento, que você dá ao ativá-los e pode retirar a qualquer momento.</li><li>Para manter registros de pagamento, processar reembolsos e evitar abusos — com base em nossos interesses legítimos e obrigações legais.</li></ul>`,
      },
      {
        heading: `Por quanto tempo guardamos os dados`,
        content: `<p>Guardamos as suas configurações, o seu progresso e o seu diário enquanto você usar o TaroTaper. Se você pedir para excluí-los, faremos isso em até 30 dias. Os registros de pagamento são guardados pelo tempo necessário para processar reembolsos e disputas e cumprir obrigações contábeis. Nosso servidor não mantém registros das suas solicitações, e as mensagens de erro dele não contêm perguntas nem leituras.</p>`,
      },
      {
        heading: `Privacidade infantil`,
        content: `<p>O TaroTaper não se destina a menores de 16 anos, e não coletamos dados deles de forma consciente. Se você acredita que uma criança usou o TaroTaper, entre em contato e excluiremos os dados dela.</p>`,
      },
      {
        heading: `Compartilhamento de dados`,
        content: `<p>Compartilhamos dados apenas com os serviços descritos acima e apenas para fazer o TaroTaper funcionar. Não vendemos, alugamos nem trocamos os seus dados, e não os compartilhamos para publicidade. Como os servidores da DeepSeek ficam na República Popular da China e a Cloudflare opera no mundo todo, os seus dados podem ser tratados em países cujas leis de proteção de dados são diferentes das do seu país.</p>`,
      },
      {
        heading: `Segurança dos dados`,
        content: `<p>Todas as conexões — entre o Telegram, o miniaplicativo, nosso servidor, nosso banco de dados e a DeepSeek — são criptografadas com HTTPS/TLS. Cada solicitação do miniaplicativo é verificada pela assinatura do Telegram, e nosso serviço de leituras só aceita solicitações do nosso próprio bot, não da internet. Só o desenvolvedor tem acesso ao banco de dados.</p>`,
      },
      {
        heading: `Seus direitos`,
        content: `<p>Você pode nos pedir para mostrar os dados que guardamos sobre você, corrigi-los, enviar uma cópia ou excluir o seu diário e os demais dados. Escreva para nós a partir da conta do Telegram que você usa com o TaroTaper, ou por e-mail; podemos pedir que você confirme o pedido a partir dessa conta. Dúvidas sobre pagamentos vão pelo comando /paysupport no bot. Bloquear o bot interrompe os lembretes, mas não exclui o seu diário — para excluí-lo, escreva para nós. Você também tem o direito de apresentar uma reclamação à autoridade de proteção de dados do seu país.</p>`,
      },
      {
        heading: `Alterações nesta política`,
        content: `<p>Podemos atualizar esta Política de Privacidade de tempos em tempos. Quaisquer alterações serão refletidas nesta página com uma data de vigência atualizada. Encorajamos você a revisar esta política periodicamente.</p>`,
      },
      {
        heading: `Fale conosco`,
        content: `<p>Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco em:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio" target="_blank" rel="noopener noreferrer">@nikibstudio</a></p>`,
      },
    ],
  },
  ar: {
    title: `سياسة الخصوصية`,
    effectiveDate: `تاريخ السريان: 7 أكتوبر 2026`,
    intro: `يدير المطوّر المستقل بوغدان نيكيشين ("نحن" أو "لنا") <strong>TaroTaper</strong>، وهو بوت تاروت على Telegram (<a href="https://t.me/TaroTaper_bot" target="_blank" rel="noopener noreferrer">@TaroTaper_bot</a>) مع تطبيقه المصغّر. توضح سياسة الخصوصية هذه المعلومات التي يتعامل معها TaroTaper، وأين تُخزَّن وإلى أين تُرسَل، ولماذا.`,
    sections: [
      {
        heading: `نظرة عامة`,
        content: `<p>يعمل TaroTaper داخل Telegram: لا تنشئ حسابًا لدينا، ويُعرِّف Telegram البوت بك من خلال معرّف المستخدم الخاص بك في Telegram. نحفظ يوميات قراءاتك وإعداداتك على خادمنا، لتجدها كلما فتحت TaroTaper. يكتب التفسيرات نموذج اللغة من DeepSeek بناءً على بطاقاتك وسؤالك. لا يحتوي TaroTaper على إعلانات ولا على أدوات تحليل أو تتبّع.</p>`,
      },
      {
        heading: `المعلومات التي نتلقاها من Telegram`,
        content: `<p>عندما تستخدم البوت أو تفتح التطبيق المصغّر، يرسل إلينا Telegram معرّف المستخدم الخاص بك، واسمك الأول، واسم المستخدم (إن وُجد)، ولغة تطبيق Telegram لديك. تحمل الطلبات القادمة من التطبيق المصغّر توقيعًا من Telegram نتحقق منه للتأكد من أنها صادرة عنك فعلًا.</p>
<p>نحفظ معرّف المستخدم ولغتك. يُستخدم اسمك الأول فقط لتحيتك في التطبيق المصغّر ولا يُحفظ، ولا يُستخدم اسم المستخدم.</p>`,
      },
      {
        heading: `ما نخزّنه`,
        content: `<p>نخزّن في قاعدة بياناتنا، مرتبطةً بمعرّف المستخدم الخاص بك في Telegram:</p>
<ul><li><strong>الإعدادات</strong> — لغتك، وفرق منطقتك الزمنية (ليبدأ يومك عند منتصف ليلك وتصلك التذكيرات في ساعتك)، وما إذا كانت التذكيرات مفعّلة وفي أي ساعة، وما إذا أنهيت التعريف بالتطبيق.</li><li><strong>يومياتك</strong> — كل قراءة: نوعها وتاريخها، والسؤال الذي كتبته (إن وُجد)، والبطاقات التي ظهرت، ونص التفسير، والتقييم الذي منحته. وتبقى بطاقات اليوم من الإصدار السابق من TaroTaper في يومياتك أيضًا.</li><li><strong>التقدّم وصلاحيات الوصول</strong> — سلسلة أيامك وأفضل سلسلة، وما إذا استُخدمت قراءة «ثلاث بطاقات» المجانية، وعدد القراءات المدفوعة مسبقًا المتبقية، وموعد انتهاء TaroTaper+.</li><li><strong>المدفوعات</strong> — لكل دفعة: معرّف الدفع في Telegram، وما تم شراؤه، والمبلغ بالنجوم، وما إذا كانت تجديدًا للاشتراك، والتاريخ، وتاريخ الاسترداد إن تم استردادها.</li></ul>`,
      },
      {
        heading: `التفسيرات وDeepSeek`,
        content: `<p>عندما تطلب قراءة، يرسل خادمنا إلى DeepSeek البطاقات التي ظهرت (أسماءها ومواضعها وما إذا كانت مقلوبة)، ولغة التفسير، وسؤالك إن كتبته. يكتب نموذج DeepSeek نص التفسير، فنعرضه عليك ونحفظه في يومياتك.</p>
<p>لا نرسل إلى DeepSeek معرّفك في Telegram ولا اسمك ولا اسم المستخدم ولا أي معرّف آخر. تعالج DeepSeek هذه الطلبات على خوادم في جمهورية الصين الشعبية. يُرجى ألا تكتب في سؤالك ما لا ترغب في مشاركته، مثل المعلومات الصحية أو أسماء الآخرين وبيانات الاتصال بهم.</p>`,
      },
      {
        heading: `المدفوعات`,
        content: `<p>تُدفع القراءات وTaroTaper+ بنجوم Telegram. يعالج Telegram المدفوعات، وتُشترى النجوم نفسها من Telegram أو عبر Apple أو Google. لا نتلقى أبدًا رقم بطاقتك أو أي بيانات دفع أخرى، بل فقط معلومات الدفع المذكورة أعلاه. يُدار اشتراك TaroTaper+ في Telegram، ويمكنك إلغاؤه في أي وقت.</p>`,
      },
      {
        heading: `التذكيرات`,
        content: `<p>تبقى التذكيرات متوقفة حتى تفعّلها بنفسك. عندها يطلب منك Telegram السماح للبوت بمراسلتك، ثم يرسل البوت رسالة واحدة يوميًا في الساعة التي اخترتها، فقط إذا لم تسحب بطاقتك بعد. يمكنك إيقاف التذكيرات بالأمر ‎/reminders أو من إعدادات التطبيق المصغّر. وإذا حظرت البوت، تتوقف التذكيرات تلقائيًا.</p>`,
      },
      {
        heading: `التطبيق المصغّر على جهازك`,
        content: `<p>لا يستخدم التطبيق المصغّر ملفات تعريف الارتباط (Cookies) ولا يحفظ أي شيء لأغراض التتبّع أو الإعلان. يحمّل البرنامج النصي الرسمي للتطبيقات المصغّرة من telegram.org، أما الخطوط وصور البطاقات فتأتي من خادمنا.</p>`,
      },
      {
        heading: `خدمات الطرف الثالث`,
        content: `<h3>Telegram</h3>
<p>يعمل TaroTaper على Telegram، الذي يعالج أيضًا المدفوعات بالنجوم. تخضع معالجة Telegram لبياناتك لسياسة الخصوصية الخاصة به (<a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">telegram.org/privacy</a>).</p>
<h3>Cloudflare</h3>
<p>يعمل البوت وخدمة التفسير وقاعدة البيانات والتطبيق المصغّر على Cloudflare (Workers وD1 وPages). تُشفَّر البيانات أثناء النقل وتُعالَج على شبكة Cloudflare العالمية، التي قد تشمل مراكز بيانات خارج بلدك. تخضع معالجة Cloudflare للبيانات لسياسة الخصوصية الخاصة بها (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek</h3>
<p>تتلقى DeepSeek البطاقات واللغة وسؤالك لكتابة التفسير، وتعالجها على خوادم في جمهورية الصين الشعبية. تخضع معالجة DeepSeek للبيانات لسياسة الخصوصية الخاصة بها (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>لا تحليلات ولا إعلانات</h3>
<p>لا يستخدم TaroTaper أي خدمات تحليل أو إعلان أو تتبّع.</p>`,
      },
      {
        heading: `لماذا نعالج بياناتك`,
        content: `<ul><li>لإعداد القراءات التي تطلبها، والاحتفاظ بيومياتك، وتقديم ما اشتريته — وهذا ضروري لتقديم TaroTaper لك.</li><li>لإرسال التذكيرات — بموافقتك فقط، التي تمنحها بتفعيلها ويمكنك سحبها في أي وقت.</li><li>للاحتفاظ بسجلات المدفوعات ومعالجة طلبات الاسترداد ومنع إساءة الاستخدام — استنادًا إلى مصالحنا المشروعة والتزاماتنا القانونية.</li></ul>`,
      },
      {
        heading: `مدة الاحتفاظ بالبيانات`,
        content: `<p>نحتفظ بإعداداتك وتقدّمك ويومياتك ما دمت تستخدم TaroTaper. وإذا طلبت حذفها، نحذفها خلال 30 يومًا. ونحتفظ بسجلات المدفوعات طوال المدة اللازمة لمعالجة طلبات الاسترداد والنزاعات والوفاء بالالتزامات المحاسبية. لا يحتفظ خادمنا بسجلات لطلباتك، ولا تحتوي رسائل الخطأ لديه على أسئلة أو تفسيرات.</p>`,
      },
      {
        heading: `خصوصية الأطفال`,
        content: `<p>TaroTaper غير موجّه للأطفال دون سن 16 عامًا، ولا نجمع بياناتهم عن علم. إذا كنت تعتقد أن طفلًا استخدم TaroTaper، فتواصل معنا وسنحذف بياناته.</p>`,
      },
      {
        heading: `مشاركة البيانات`,
        content: `<p>لا نشارك البيانات إلا مع الخدمات الموضحة أعلاه، وفقط لتشغيل TaroTaper. لا نبيع بياناتك ولا نؤجرها ولا نتبادلها، ولا نشاركها لأغراض الإعلان. ولأن خوادم DeepSeek تقع في جمهورية الصين الشعبية وتعمل Cloudflare حول العالم، فقد تُعالَج بياناتك في دول تختلف قوانين حماية البيانات فيها عن قوانين بلدك.</p>`,
      },
      {
        heading: `أمان البيانات`,
        content: `<p>جميع الاتصالات — بين Telegram والتطبيق المصغّر وخادمنا وقاعدة بياناتنا وDeepSeek — مشفّرة عبر HTTPS/TLS. يُتحقَّق من كل طلب من التطبيق المصغّر بواسطة توقيع Telegram، ولا تقبل خدمة التفسير لدينا إلا الطلبات الواردة من البوت الخاص بنا، لا من الإنترنت. ولا يملك صلاحية الوصول إلى قاعدة البيانات إلا المطوّر.</p>`,
      },
      {
        heading: `حقوقك`,
        content: `<p>يمكنك أن تطلب منا عرض البيانات التي نحتفظ بها عنك، أو تصحيحها، أو إرسال نسخة منها، أو حذف يومياتك وبقية بياناتك. راسلنا من حساب Telegram الذي تستخدمه مع TaroTaper أو عبر البريد الإلكتروني، وقد نطلب منك تأكيد الطلب من ذلك الحساب. أما الأسئلة المتعلقة بالمدفوعات فعبر الأمر ‎/paysupport في البوت. يؤدي حظر البوت إلى إيقاف التذكيرات، لكنه لا يحذف يومياتك — لحذفها، راسلنا. ويحق لك أيضًا تقديم شكوى إلى هيئة حماية البيانات في بلدك.</p>`,
      },
      {
        heading: `التغييرات على هذه السياسة`,
        content: `<p>قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم عكس أي تغييرات على هذه الصفحة مع تاريخ سريان محدث. نشجعك على مراجعة هذه السياسة بشكل دوري.</p>`,
      },
      {
        heading: `اتصل بنا`,
        content: `<p>إذا كانت لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه، يرجى الاتصال بنا على:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio" target="_blank" rel="noopener noreferrer">@nikibstudio</a></p>`,
      },
    ],
  },
  it: {
    title: `Informativa sulla privacy`,
    effectiveDate: `Data di entrata in vigore: 7 ottobre 2026`,
    intro: `Bogdan Nikishin, sviluppatore indipendente ("noi", "nostro" o "ci"), gestisce <strong>TaroTaper</strong>, un bot di tarocchi su Telegram (<a href="https://t.me/TaroTaper_bot" target="_blank" rel="noopener noreferrer">@TaroTaper_bot</a>) con la sua mini app. La presente Informativa sulla privacy spiega quali informazioni tratta TaroTaper, dove vengono conservate e inviate, e perché.`,
    sections: [
      {
        heading: `Panoramica`,
        content: `<p>TaroTaper funziona all'interno di Telegram: non crei un account presso di noi, e Telegram comunica al bot chi sei tramite il tuo ID utente Telegram. Conserviamo il tuo diario delle letture e le tue impostazioni sul nostro server, così li ritrovi ogni volta che apri TaroTaper. Le letture sono scritte dal modello linguistico di DeepSeek a partire dalle tue carte e dalla tua domanda. TaroTaper non contiene pubblicità né strumenti di analisi o tracciamento.</p>`,
      },
      {
        heading: `Informazioni da Telegram`,
        content: `<p>Quando usi il bot o apri la mini app, Telegram ci trasmette il tuo ID utente Telegram, il tuo nome, il tuo nome utente (se ne hai uno) e la lingua della tua app Telegram. Le richieste della mini app portano una firma di Telegram, che verifichiamo per assicurarci che provengano davvero da te.</p>
<p>Conserviamo il tuo ID utente e la tua lingua. Il tuo nome serve solo a salutarti nella mini app e non viene conservato; il nome utente non viene usato.</p>`,
      },
      {
        heading: `Cosa conserviamo`,
        content: `<p>Nel nostro database, collegati al tuo ID utente Telegram, conserviamo:</p>
<ul><li><strong>Impostazioni</strong> — la tua lingua, la differenza di fuso orario (perché la tua giornata inizi alla tua mezzanotte e i promemoria arrivino alla tua ora), se i promemoria sono attivi e a che ora, e se hai completato l'introduzione.</li><li><strong>Il tuo diario</strong> — ogni lettura: tipo e data, la domanda che hai scritto (se c'era), le carte uscite, il testo della lettura e il voto che le hai dato. Anche le carte del giorno della versione precedente di TaroTaper restano nel tuo diario.</li><li><strong>Progressi e accesso</strong> — la tua serie di giorni e la serie migliore, se hai già usato la stesa Tre carte gratuita, quante letture prepagate ti restano e quando scade TaroTaper+.</li><li><strong>Pagamenti</strong> — per ogni pagamento: l'ID di pagamento Telegram, cosa è stato acquistato, l'importo in Stars, se si trattava di un rinnovo dell'abbonamento, la data e, in caso di rimborso, la data del rimborso.</li></ul>`,
      },
      {
        heading: `Letture e DeepSeek`,
        content: `<p>Quando chiedi una lettura, il nostro server invia a DeepSeek le carte uscite (nomi, posizioni e se sono rovesciate), la lingua della lettura e la tua domanda, se l'hai scritta. Il modello di DeepSeek scrive il testo della lettura, che ti mostriamo e salviamo nel tuo diario.</p>
<p>Non inviamo a DeepSeek il tuo ID Telegram, il tuo nome, il tuo nome utente né alcun altro identificativo. DeepSeek elabora queste richieste su server situati nella Repubblica Popolare Cinese. Ti chiediamo di non scrivere in una domanda nulla che non vorresti condividere, come informazioni sulla salute o nomi e contatti di altre persone.</p>`,
      },
      {
        heading: `Pagamenti`,
        content: `<p>Le letture e TaroTaper+ si pagano con le Telegram Stars. I pagamenti sono gestiti da Telegram; le Stars si acquistano da Telegram o tramite Apple o Google. Non riceviamo mai il numero della tua carta né altri dati di pagamento, ma solo le informazioni di pagamento indicate sopra. L'abbonamento TaroTaper+ si gestisce in Telegram, dove puoi disdirlo in qualsiasi momento.</p>`,
      },
      {
        heading: `Promemoria`,
        content: `<p>I promemoria sono disattivati finché non li attivi tu. Se lo fai, Telegram ti chiede di permettere al bot di scriverti, e il bot invia un messaggio al giorno all'ora che hai scelto, solo se non hai ancora pescato la tua carta. Puoi disattivarli con il comando /reminders o nelle impostazioni della mini app. Se blocchi il bot, i promemoria si disattivano automaticamente.</p>`,
      },
      {
        heading: `La mini app sul tuo dispositivo`,
        content: `<p>La mini app non usa cookie e non salva nulla a fini di tracciamento o pubblicità. Carica lo script ufficiale delle mini app di Telegram da telegram.org; i caratteri e le immagini delle carte arrivano dal nostro server.</p>`,
      },
      {
        heading: `Servizi di terze parti`,
        content: `<h3>Telegram</h3>
<p>TaroTaper funziona su Telegram, che gestisce anche i pagamenti in Stars. Il trattamento dei tuoi dati da parte di Telegram è regolato dalla sua informativa sulla privacy (<a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">telegram.org/privacy</a>).</p>
<h3>Cloudflare</h3>
<p>Il bot, il nostro servizio di letture, il database e la mini app funzionano su Cloudflare (Workers, D1 e Pages). I dati sono cifrati in transito ed elaborati sulla rete globale di Cloudflare, che può includere data center al di fuori del tuo Paese. Il trattamento dei dati da parte di Cloudflare è regolato dalla sua informativa sulla privacy (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek</h3>
<p>DeepSeek riceve le carte, la lingua e la tua domanda per scrivere una lettura, e li elabora su server nella Repubblica Popolare Cinese. Il trattamento dei dati da parte di DeepSeek è regolato dalla sua informativa sulla privacy (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>Niente analisi né pubblicità</h3>
<p>TaroTaper non usa servizi di analisi, pubblicità o tracciamento.</p>`,
      },
      {
        heading: `Perché trattiamo i tuoi dati`,
        content: `<ul><li>Per fare le letture che chiedi, tenere il tuo diario e fornirti ciò che hai acquistato: è necessario per offrirti TaroTaper.</li><li>Per inviare promemoria: solo con il tuo consenso, che dai attivandoli e puoi revocare in qualsiasi momento.</li><li>Per conservare le registrazioni dei pagamenti, gestire i rimborsi e prevenire abusi: sulla base dei nostri legittimi interessi e degli obblighi di legge.</li></ul>`,
      },
      {
        heading: `Per quanto tempo conserviamo i dati`,
        content: `<p>Conserviamo impostazioni, progressi e diario finché usi TaroTaper. Se ci chiedi di cancellarli, lo facciamo entro 30 giorni. Le registrazioni dei pagamenti sono conservate per il tempo necessario a gestire rimborsi e contestazioni e a rispettare gli obblighi contabili. Il nostro server non tiene log delle tue richieste, e i suoi messaggi di errore non contengono domande né letture.</p>`,
      },
      {
        heading: `Privacy dei bambini`,
        content: `<p>TaroTaper non è rivolto ai minori di 16 anni, e non raccogliamo consapevolmente i loro dati. Se ritieni che un minore abbia usato TaroTaper, contattaci e cancelleremo i suoi dati.</p>`,
      },
      {
        heading: `Condivisione dei dati`,
        content: `<p>Condividiamo dati solo con i servizi descritti sopra e solo per far funzionare TaroTaper. Non vendiamo, affittiamo né scambiamo i tuoi dati, e non li condividiamo per pubblicità. Poiché i server di DeepSeek si trovano nella Repubblica Popolare Cinese e Cloudflare opera in tutto il mondo, i tuoi dati possono essere trattati in Paesi le cui leggi sulla protezione dei dati sono diverse da quelle del tuo Paese.</p>`,
      },
      {
        heading: `Sicurezza dei dati`,
        content: `<p>Tutte le connessioni — tra Telegram, la mini app, il nostro server, il nostro database e DeepSeek — sono cifrate con HTTPS/TLS. Ogni richiesta della mini app viene verificata tramite la firma di Telegram, e il nostro servizio di letture accetta richieste solo dal nostro bot, non da Internet. Solo lo sviluppatore ha accesso al database.</p>`,
      },
      {
        heading: `I tuoi diritti`,
        content: `<p>Puoi chiederci di mostrarti i dati che conserviamo su di te, di correggerli, di inviartene una copia o di cancellare il tuo diario e gli altri tuoi dati. Scrivici dall'account Telegram che usi con TaroTaper, oppure via e-mail; potremmo chiederti di confermare la richiesta da quell'account. Per le domande sui pagamenti usa il comando /paysupport nel bot. Bloccare il bot ferma i promemoria ma non cancella il tuo diario: per cancellarlo, scrivici. Hai anche il diritto di presentare un reclamo all'autorità per la protezione dei dati del tuo Paese.</p>`,
      },
      {
        heading: `Modifiche a questa informativa`,
        content: `<p>Potremmo aggiornare questa Informativa sulla privacy di tanto in tanto. Eventuali modifiche saranno riflesse su questa pagina con una data di entrata in vigore aggiornata. Ti incoraggiamo a consultare periodicamente questa informativa.</p>`,
      },
      {
        heading: `Contattaci`,
        content: `<p>Per domande o dubbi su questa Informativa sulla privacy, contattaci a:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio" target="_blank" rel="noopener noreferrer">@nikibstudio</a></p>`,
      },
    ],
  },
  hi: {
    title: `गोपनीयता नीति`,
    effectiveDate: `प्रभावी तिथि: 7 अक्टूबर 2026`,
    intro: `स्वतंत्र डेवलपर बोगदान निकिशिन ("हम", "हमारा" या "हमें") <strong>TaroTaper</strong> चलाते हैं — Telegram में एक टैरो बॉट (<a href="https://t.me/TaroTaper_bot" target="_blank" rel="noopener noreferrer">@TaroTaper_bot</a>), उसके मिनी ऐप के साथ। यह गोपनीयता नीति बताती है कि TaroTaper कौन-सी जानकारी संभालता है, वह कहाँ संग्रहीत होती है, कहाँ भेजी जाती है और क्यों।`,
    sections: [
      {
        heading: `अवलोकन`,
        content: `<p>TaroTaper, Telegram के अंदर काम करता है: आपको हमारे पास कोई खाता नहीं बनाना पड़ता, और Telegram आपके Telegram यूज़र ID के ज़रिए बॉट को बताता है कि आप कौन हैं। आपकी रीडिंग की डायरी और सेटिंग्स हम अपने सर्वर पर रखते हैं, ताकि जब भी आप TaroTaper खोलें, वे मौजूद रहें। व्याख्याएँ आपके कार्डों और सवाल के आधार पर DeepSeek का लैंग्वेज मॉडल लिखता है। TaroTaper में कोई विज्ञापन नहीं है और कोई एनालिटिक्स या ट्रैकिंग टूल नहीं है।</p>`,
      },
      {
        heading: `Telegram से मिलने वाली जानकारी`,
        content: `<p>जब आप बॉट का इस्तेमाल करते हैं या मिनी ऐप खोलते हैं, तो Telegram हमें आपका Telegram यूज़र ID, आपका पहला नाम, आपका यूज़रनेम (अगर है) और आपके Telegram ऐप की भाषा भेजता है। मिनी ऐप से आने वाले अनुरोधों पर Telegram का हस्ताक्षर होता है, जिसे हम जाँचते हैं ताकि पक्का हो सके कि अनुरोध सचमुच आपसे आया है।</p>
<p>हम आपका यूज़र ID और भाषा सहेजते हैं। आपका पहला नाम सिर्फ़ मिनी ऐप में आपका अभिवादन करने के लिए इस्तेमाल होता है और सहेजा नहीं जाता; आपका यूज़रनेम इस्तेमाल नहीं होता।</p>`,
      },
      {
        heading: `हम क्या संग्रहीत करते हैं`,
        content: `<p>हमारे डेटाबेस में, आपके Telegram यूज़र ID से जुड़ा हुआ, यह संग्रहीत रहता है:</p>
<ul><li><strong>सेटिंग्स</strong> — आपकी भाषा, आपके टाइम ज़ोन का अंतर (ताकि आपका दिन आपकी आधी रात से शुरू हो और रिमाइंडर आपके समय पर आएँ), रिमाइंडर चालू हैं या नहीं और किस समय, और क्या आपने परिचय पूरा कर लिया है।</li><li><strong>आपकी डायरी</strong> — हर रीडिंग: उसका प्रकार और तारीख, आपका लिखा सवाल (अगर हो), निकले कार्ड, व्याख्या का टेक्स्ट और आपकी दी गई रेटिंग। TaroTaper के पिछले संस्करण के “आज का कार्ड” भी आपकी डायरी में रखे गए हैं।</li><li><strong>प्रगति और ऐक्सेस</strong> — लगातार दिनों का आपका सिलसिला और सबसे अच्छा सिलसिला, क्या आपकी मुफ़्त “तीन कार्ड” रीडिंग इस्तेमाल हो चुकी है, कितनी प्रीपेड रीडिंग बची हैं और TaroTaper+ कब ख़त्म होता है।</li><li><strong>भुगतान</strong> — हर भुगतान के लिए: Telegram भुगतान ID, क्या ख़रीदा गया, Stars में राशि, क्या यह सदस्यता का नवीनीकरण था, तारीख, और रिफ़ंड होने पर रिफ़ंड की तारीख।</li></ul>`,
      },
      {
        heading: `व्याख्याएँ और DeepSeek`,
        content: `<p>जब आप कोई रीडिंग माँगते हैं, तो हमारा सर्वर DeepSeek को निकले कार्ड (उनके नाम, स्थान और क्या वे उलटे हैं), व्याख्या की भाषा और आपका सवाल (अगर आपने लिखा है) भेजता है। DeepSeek का मॉडल व्याख्या का टेक्स्ट लिखता है, जिसे हम आपको दिखाते हैं और आपकी डायरी में सहेजते हैं।</p>
<p>हम DeepSeek को आपका Telegram यूज़र ID, नाम, यूज़रनेम या कोई और पहचानकर्ता नहीं भेजते। DeepSeek इन अनुरोधों को पीपल्स रिपब्लिक ऑफ़ चाइना में स्थित सर्वरों पर प्रोसेस करता है। कृपया सवाल में ऐसा कुछ न लिखें जो आप साझा नहीं करना चाहते, जैसे स्वास्थ्य की जानकारी या दूसरे लोगों के नाम और संपर्क।</p>`,
      },
      {
        heading: `भुगतान`,
        content: `<p>रीडिंग और TaroTaper+ का भुगतान Telegram Stars से होता है। भुगतान Telegram प्रोसेस करता है; Stars ख़ुद Telegram से या Apple या Google के ज़रिए ख़रीदे जाते हैं। हमें कभी आपका कार्ड नंबर या कोई और भुगतान जानकारी नहीं मिलती, सिर्फ़ ऊपर बताई गई भुगतान जानकारी मिलती है। TaroTaper+ की सदस्यता Telegram में प्रबंधित होती है, जहाँ आप उसे कभी भी रद्द कर सकते हैं।</p>`,
      },
      {
        heading: `रिमाइंडर`,
        content: `<p>रिमाइंडर तब तक बंद रहते हैं, जब तक आप उन्हें ख़ुद चालू न करें। चालू करने पर Telegram आपसे बॉट को संदेश भेजने की अनुमति माँगता है, और फिर बॉट आपके चुने हुए समय पर दिन में एक संदेश भेजता है — सिर्फ़ तब, जब आपने अभी तक कार्ड नहीं खींचा हो। आप /reminders कमांड से या मिनी ऐप की सेटिंग्स में रिमाइंडर बंद कर सकते हैं। अगर आप बॉट को ब्लॉक करते हैं, तो रिमाइंडर अपने-आप बंद हो जाते हैं।</p>`,
      },
      {
        heading: `आपके डिवाइस पर मिनी ऐप`,
        content: `<p>मिनी ऐप कुकीज़ का इस्तेमाल नहीं करता और ट्रैकिंग या विज्ञापन के लिए कुछ भी सहेजता नहीं। यह telegram.org से Telegram की आधिकारिक मिनी ऐप स्क्रिप्ट लोड करता है; फ़ॉन्ट और कार्डों की तस्वीरें हमारे अपने सर्वर से आती हैं।</p>`,
      },
      {
        heading: `तृतीय-पक्ष सेवाएँ`,
        content: `<h3>Telegram</h3>
<p>TaroTaper, Telegram पर चलता है, जो Stars में भुगतान भी प्रोसेस करता है। Telegram आपके डेटा को कैसे संभालता है, यह उसकी गोपनीयता नीति (<a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">telegram.org/privacy</a>) से तय होता है।</p>
<h3>Cloudflare</h3>
<p>बॉट, हमारी व्याख्या सेवा, डेटाबेस और मिनी ऐप Cloudflare (Workers, D1 और Pages) पर चलते हैं। डेटा ट्रांसफ़र के दौरान एन्क्रिप्ट रहता है और Cloudflare के वैश्विक नेटवर्क पर प्रोसेस होता है, जिसमें आपके देश के बाहर के डेटा सेंटर भी हो सकते हैं। Cloudflare डेटा को कैसे संभालता है, यह उसकी गोपनीयता नीति (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>) से तय होता है।</p>
<h3>DeepSeek</h3>
<p>DeepSeek व्याख्या लिखने के लिए कार्ड, भाषा और आपका सवाल पाता है, और उन्हें पीपल्स रिपब्लिक ऑफ़ चाइना के सर्वरों पर प्रोसेस करता है। DeepSeek डेटा को कैसे संभालता है, यह उसकी गोपनीयता नीति (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>) से तय होता है।</p>
<h3>न एनालिटिक्स, न विज्ञापन</h3>
<p>TaroTaper किसी भी एनालिटिक्स, विज्ञापन या ट्रैकिंग सेवा का इस्तेमाल नहीं करता।</p>`,
      },
      {
        heading: `हम आपका डेटा क्यों प्रोसेस करते हैं`,
        content: `<ul><li>आपकी माँगी गई रीडिंग करने, आपकी डायरी रखने और आपकी ख़रीदी हुई चीज़ें देने के लिए — यह आपको TaroTaper देने के लिए ज़रूरी है।</li><li>रिमाइंडर भेजने के लिए — सिर्फ़ आपकी सहमति से, जो आप उन्हें चालू करके देते हैं और कभी भी वापस ले सकते हैं।</li><li>भुगतान के रिकॉर्ड रखने, रिफ़ंड संभालने और दुरुपयोग रोकने के लिए — हमारे वैध हितों और क़ानूनी दायित्वों के आधार पर।</li></ul>`,
      },
      {
        heading: `हम डेटा कितने समय तक रखते हैं`,
        content: `<p>जब तक आप TaroTaper इस्तेमाल करते हैं, हम आपकी सेटिंग्स, प्रगति और डायरी रखते हैं। अगर आप उन्हें मिटाने के लिए कहें, तो हम 30 दिनों के भीतर मिटा देते हैं। भुगतान के रिकॉर्ड उतने समय तक रखे जाते हैं, जितना रिफ़ंड और विवाद संभालने और लेखा-संबंधी दायित्व पूरे करने के लिए ज़रूरी हो। हमारा सर्वर आपके अनुरोधों के लॉग नहीं रखता, और उसके त्रुटि संदेशों में सवाल या व्याख्याएँ नहीं होतीं।</p>`,
      },
      {
        heading: `बच्चों की गोपनीयता`,
        content: `<p>TaroTaper, 16 वर्ष से कम उम्र के बच्चों के लिए नहीं है, और हम जानबूझकर उनका डेटा एकत्र नहीं करते। अगर आपको लगता है कि किसी बच्चे ने TaroTaper का इस्तेमाल किया है, तो हमसे संपर्क करें, हम उसका डेटा मिटा देंगे।</p>`,
      },
      {
        heading: `डेटा साझाकरण`,
        content: `<p>हम डेटा सिर्फ़ ऊपर बताई गई सेवाओं के साथ साझा करते हैं, और सिर्फ़ TaroTaper चलाने के लिए। हम आपका डेटा न बेचते हैं, न किराए पर देते हैं, न उसका लेन-देन करते हैं, और न ही विज्ञापन के लिए साझा करते हैं। क्योंकि DeepSeek के सर्वर पीपल्स रिपब्लिक ऑफ़ चाइना में हैं और Cloudflare पूरी दुनिया में काम करता है, आपका डेटा ऐसे देशों में प्रोसेस हो सकता है, जहाँ डेटा सुरक्षा क़ानून आपके देश से अलग हैं।</p>`,
      },
      {
        heading: `डेटा सुरक्षा`,
        content: `<p>सभी कनेक्शन — Telegram, मिनी ऐप, हमारे सर्वर, हमारे डेटाबेस और DeepSeek के बीच — HTTPS/TLS से एन्क्रिप्ट होते हैं। मिनी ऐप से आने वाला हर अनुरोध Telegram के हस्ताक्षर से जाँचा जाता है, और हमारी व्याख्या सेवा सिर्फ़ हमारे अपने बॉट से आने वाले अनुरोध स्वीकार करती है, इंटरनेट से नहीं। डेटाबेस तक सिर्फ़ डेवलपर की पहुँच है।</p>`,
      },
      {
        heading: `आपके अधिकार`,
        content: `<p>आप हमसे कह सकते हैं कि हम आपके बारे में रखा गया डेटा आपको दिखाएँ, उसे सुधारें, उसकी कॉपी भेजें, या आपकी डायरी और बाक़ी डेटा मिटा दें। जिस Telegram खाते से आप TaroTaper इस्तेमाल करते हैं, उससे या ईमेल से हमें लिखें; हम आपसे उस खाते से अनुरोध की पुष्टि करने को कह सकते हैं। भुगतान से जुड़े सवालों के लिए बॉट में /paysupport कमांड का इस्तेमाल करें। बॉट को ब्लॉक करने से रिमाइंडर रुक जाते हैं, लेकिन आपकी डायरी नहीं मिटती — उसे मिटाने के लिए हमें लिखें। आपको अपने देश के डेटा सुरक्षा प्राधिकरण से शिकायत करने का अधिकार भी है।</p>`,
      },
      {
        heading: `इस नीति में परिवर्तन`,
        content: `<p>हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। कोई भी परिवर्तन इस पृष्ठ पर अपडेट की गई प्रभावी तिथि के साथ दर्शाया जाएगा। हम आपको समय-समय पर इस नीति की समीक्षा करने के लिए प्रोत्साहित करते हैं।</p>`,
      },
      {
        heading: `हमसे संपर्क करें`,
        content: `<p>यदि आपके पास इस गोपनीयता नीति के बारे में कोई प्रश्न या चिंताएँ हैं, तो कृपया हमसे संपर्क करें:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio" target="_blank" rel="noopener noreferrer">@nikibstudio</a></p>`,
      },
    ],
  },
  he: {
    title: `מדיניות פרטיות`,
    effectiveDate: `תאריך תחילה: 7 באוקטובר 2026`,
    intro: `בוגדן ניקישין, מפתח עצמאי ("אנחנו", "שלנו"), מפעיל את <strong>TaroTaper</strong>, בוט טארוט ב־Telegram (<a href="https://t.me/TaroTaper_bot" target="_blank" rel="noopener noreferrer">@TaroTaper_bot</a>) עם המיני־אפליקציה שלו. מדיניות פרטיות זו מסבירה באיזה מידע TaroTaper מטפל, היכן הוא נשמר, לאן הוא נשלח ולמה.`,
    sections: [
      {
        heading: `סקירה כללית`,
        content: `<p>TaroTaper פועל בתוך Telegram: אינכם יוצרים אצלנו חשבון, ו־Telegram מודיע לבוט מי אתם באמצעות מזהה המשתמש שלכם ב־Telegram. את יומן הקריאות ואת ההגדרות שלכם אנחנו שומרים בשרת שלנו, כך שהם זמינים בכל פעם שאתם פותחים את TaroTaper. את הפירושים כותב מודל השפה של DeepSeek על סמך הקלפים והשאלה שלכם. ב־TaroTaper אין פרסומות ואין כלי ניתוח או מעקב.</p>`,
      },
      {
        heading: `מידע שמגיע מ־Telegram`,
        content: `<p>כשאתם משתמשים בבוט או פותחים את המיני־אפליקציה, Telegram מעביר לנו את מזהה המשתמש שלכם ב־Telegram, את השם הפרטי שלכם, את שם המשתמש (אם יש לכם) ואת השפה של אפליקציית Telegram שלכם. בקשות מהמיני־אפליקציה נושאות חתימה של Telegram, ואנחנו בודקים אותה כדי לוודא שהן באמת מגיעות מכם.</p>
<p>אנחנו שומרים את מזהה המשתמש ואת השפה. השם הפרטי משמש רק לברך אתכם במיני־אפליקציה ואינו נשמר; שם המשתמש אינו בשימוש.</p>`,
      },
      {
        heading: `מה אנחנו שומרים`,
        content: `<p>במסד הנתונים שלנו, בקישור למזהה המשתמש שלכם ב־Telegram, נשמרים:</p>
<ul><li><strong>הגדרות</strong> — השפה, הפרש אזור הזמן (כדי שהיום שלכם יתחיל בחצות שלכם והתזכורות יגיעו בשעה שלכם), האם התזכורות פעילות ובאיזו שעה, והאם סיימתם את ההיכרות עם האפליקציה.</li><li><strong>היומן שלכם</strong> — כל קריאה: סוגה ותאריכה, השאלה שכתבתם (אם הייתה), הקלפים שנמשכו, טקסט הפירוש והדירוג שנתתם. גם קלפי היום מהגרסה הקודמת של TaroTaper נשמרים ביומן.</li><li><strong>התקדמות וגישה</strong> — רצף הימים והרצף הטוב ביותר, האם נוצלה הקריאה החינמית של ״שלושה קלפים״, כמה קריאות ששולמו מראש נותרו ומתי מסתיים TaroTaper+.</li><li><strong>תשלומים</strong> — לכל תשלום: מזהה התשלום ב־Telegram, מה נרכש, הסכום בכוכבים, האם זה היה חידוש מנוי, התאריך, ואם התשלום הוחזר — תאריך ההחזר.</li></ul>`,
      },
      {
        heading: `פירושים ו־DeepSeek`,
        content: `<p>כשאתם מבקשים קריאה, השרת שלנו שולח ל־DeepSeek את הקלפים שנמשכו (שמותיהם, מיקומם והאם הם הפוכים), את שפת הפירוש ואת השאלה שלכם, אם כתבתם אחת. המודל של DeepSeek כותב את טקסט הפירוש, ואנחנו מציגים אותו לכם ושומרים אותו ביומן.</p>
<p>איננו שולחים ל־DeepSeek את מזהה ה־Telegram שלכם, את שמכם, את שם המשתמש או כל מזהה אחר. DeepSeek מעבדת את הבקשות האלה בשרתים ברפובליקה העממית של סין. אנא אל תכתבו בשאלה דבר שלא הייתם רוצים לשתף, כמו מידע רפואי או שמות ופרטי קשר של אנשים אחרים.</p>`,
      },
      {
        heading: `תשלומים`,
        content: `<p>קריאות ו־TaroTaper+ משולמים ב־Telegram Stars. את התשלומים מעבד Telegram; את הכוכבים עצמם קונים מ־Telegram או דרך Apple או Google. איננו מקבלים לעולם את מספר הכרטיס שלכם או פרטי תשלום אחרים — רק את פרטי התשלום שפורטו למעלה. מנוי TaroTaper+ מנוהל ב־Telegram, ושם אפשר לבטל אותו בכל עת.</p>`,
      },
      {
        heading: `תזכורות`,
        content: `<p>התזכורות כבויות עד שתפעילו אותן בעצמכם. אז Telegram יבקש מכם לאשר לבוט לשלוח לכם הודעות, והבוט ישלח הודעה אחת ביום בשעה שבחרתם — רק אם עוד לא משכתם את הקלף. אפשר לכבות את התזכורות בפקודה ‎/reminders או בהגדרות המיני־אפליקציה. אם תחסמו את הבוט, התזכורות ייכבו אוטומטית.</p>`,
      },
      {
        heading: `המיני־אפליקציה במכשיר שלכם`,
        content: `<p>המיני־אפליקציה אינה משתמשת בעוגיות (Cookies) ואינה שומרת דבר לצורכי מעקב או פרסום. היא טוענת את הסקריפט הרשמי של מיני־אפליקציות Telegram מ־telegram.org; הגופנים ותמונות הקלפים מגיעים מהשרת שלנו.</p>`,
      },
      {
        heading: `שירותי צד שלישי`,
        content: `<h3>Telegram</h3>
<p>TaroTaper פועל ב־Telegram, שמעבד גם את התשלומים בכוכבים. הטיפול של Telegram בנתונים שלכם כפוף למדיניות הפרטיות שלו (<a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">telegram.org/privacy</a>).</p>
<h3>Cloudflare</h3>
<p>הבוט, שירות הפירושים שלנו, מסד הנתונים והמיני־אפליקציה פועלים על Cloudflare. הנתונים מוצפנים בזמן ההעברה ומעובדים ברשת הגלובלית של Cloudflare, שעשויה לכלול מרכזי נתונים מחוץ למדינה שלכם. הטיפול של Cloudflare בנתונים כפוף למדיניות הפרטיות שלה (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">www.cloudflare.com/privacypolicy</a>).</p>
<h3>DeepSeek</h3>
<p>DeepSeek מקבלת את הקלפים, את השפה ואת השאלה שלכם כדי לכתוב פירוש, ומעבדת אותם בשרתים ברפובליקה העממית של סין. הטיפול של DeepSeek בנתונים כפוף למדיניות הפרטיות שלה (<a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank" rel="noopener noreferrer">cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html</a>).</p>
<h3>בלי ניתוח ובלי פרסומות</h3>
<p>TaroTaper אינו משתמש בשירותי ניתוח, פרסום או מעקב.</p>`,
      },
      {
        heading: `למה אנחנו מעבדים את הנתונים שלכם`,
        content: `<ul><li>כדי להכין את הקריאות שאתם מבקשים, לנהל את היומן שלכם ולספק את מה שרכשתם — זה נחוץ כדי לספק לכם את TaroTaper.</li><li>כדי לשלוח תזכורות — רק בהסכמתכם, שאתם נותנים כשאתם מפעילים אותן ויכולים לבטל בכל עת.</li><li>כדי לשמור רישומי תשלומים, לטפל בהחזרים ולמנוע ניצול לרעה — על בסיס האינטרסים הלגיטימיים שלנו והחובות שלנו לפי החוק.</li></ul>`,
      },
      {
        heading: `כמה זמן אנחנו שומרים נתונים`,
        content: `<p>אנחנו שומרים את ההגדרות, ההתקדמות והיומן שלכם כל עוד אתם משתמשים ב־TaroTaper. אם תבקשו למחוק אותם, נמחק אותם תוך 30 יום. רישומי תשלומים נשמרים כל עוד הדבר נחוץ לטיפול בהחזרים ובמחלוקות ולעמידה בחובות חשבונאיות. השרת שלנו אינו שומר יומני בקשות, והודעות השגיאה שלו אינן מכילות שאלות או פירושים.</p>`,
      },
      {
        heading: `פרטיות ילדים`,
        content: `<p>TaroTaper אינו מיועד לילדים מתחת לגיל 16, ואיננו אוספים ביודעין את הנתונים שלהם. אם אתם סבורים שילד השתמש ב־TaroTaper, צרו איתנו קשר ונמחק את הנתונים שלו.</p>`,
      },
      {
        heading: `שיתוף נתונים`,
        content: `<p>אנחנו משתפים נתונים רק עם השירותים שתוארו למעלה, ורק כדי להפעיל את TaroTaper. איננו מוכרים, משכירים או סוחרים בנתונים שלכם, ואיננו משתפים אותם לצורכי פרסום. מכיוון שהשרתים של DeepSeek נמצאים ברפובליקה העממית של סין ו־Cloudflare פועלת ברחבי העולם, הנתונים שלכם עשויים להיות מעובדים במדינות שחוקי הגנת הנתונים בהן שונים מאלה שבמדינה שלכם.</p>`,
      },
      {
        heading: `אבטחת נתונים`,
        content: `<p>כל החיבורים — בין Telegram, המיני־אפליקציה, השרת שלנו, מסד הנתונים שלנו ו־DeepSeek — מוצפנים ב־HTTPS/TLS. כל בקשה מהמיני־אפליקציה נבדקת לפי החתימה של Telegram, ושירות הפירושים שלנו מקבל בקשות רק מהבוט שלנו, לא מהאינטרנט. רק למפתח יש גישה למסד הנתונים.</p>`,
      },
      {
        heading: `הזכויות שלכם`,
        content: `<p>אתם יכולים לבקש מאיתנו להציג לכם את הנתונים שאנחנו שומרים עליכם, לתקן אותם, לשלוח לכם עותק שלהם או למחוק את היומן ואת שאר הנתונים שלכם. כתבו לנו מחשבון ה־Telegram שבו אתם משתמשים ב־TaroTaper, או בדוא״ל; ייתכן שנבקש מכם לאשר את הבקשה מהחשבון הזה. שאלות על תשלומים — דרך הפקודה ‎/paysupport בבוט. חסימת הבוט עוצרת את התזכורות אך אינה מוחקת את היומן — כדי למחוק אותו, כתבו לנו. יש לכם גם זכות להגיש תלונה לרשות להגנת הפרטיות במדינה שלכם.</p>`,
      },
      {
        heading: `שינויים במדיניות זו`,
        content: `<p>אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. כל שינוי יופיע בדף זה עם תאריך תחילה מעודכן. מומלץ לעיין במדיניות זו מדי פעם.</p>`,
      },
      {
        heading: `צרו קשר`,
        content: `<p>אם יש לכם שאלות או חששות בנוגע למדיניות פרטיות זו, צרו איתנו קשר בכתובת:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a> · Telegram <a href="https://t.me/nikibstudio" target="_blank" rel="noopener noreferrer">@nikibstudio</a></p>`,
      },
    ],
  },
}
