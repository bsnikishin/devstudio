import type { PrivacySection, PrivacyPolicy } from './tarotaper-privacy'

export type { PrivacySection, PrivacyPolicy }

export const bookpatherPrivacy: Record<string, PrivacyPolicy> = {
  en: {
    title: `Privacy Policy`,
    effectiveDate: `Effective Date: July 12, 2026`,
    intro: `NikiBStudio ("we", "our", or "us") built <strong>Bookpather</strong> ("the App") as a commercial application. This Privacy Policy explains what information the App handles, where it is stored, and what leaves your device — and what never does.`,
    sections: [
      {
        heading: `Overview`,
        content: `<p>Bookpather is designed to be private by default. The App requires no account, login, or registration, and contains no advertising and no third-party analytics or tracking SDKs. Your library — books, covers, notes, reading statuses, insights, and reading chains — is stored on your device and, if available, in your personal iCloud. Optional AI features send only limited book metadata to our server, and only after your explicit consent.</p>`,
      },
      {
        heading: `Data Stored on Your Device and in Your iCloud`,
        content: `<p>The App stores the following data locally on your device:</p>
<ul><li><strong>Your library</strong> — titles, authors, covers, topics, ISBNs, and reading statuses (Want to Read, Reading, Finished, Dropped).</li><li><strong>Personal notes</strong> you attach to books.</li><li><strong>AI insights and reading chains</strong> you have created and saved.</li><li><strong>App preferences</strong> and a cached indicator of your subscription status.</li></ul>
<p>If iCloud is available on your device, this data syncs through your personal iCloud account (Apple CloudKit private database) so it is available on your other devices. We do not operate our own user database and have no access to your iCloud data. You can export your books, notes, insights, and chains as a JSON file at any time, and delete everything by removing the App and its iCloud data.</p>`,
      },
      {
        heading: `Camera and Photos`,
        content: `<p>The App uses your camera and photo library only to recognize books — from a cover, a barcode, or a photo of a shelf. Recognition happens on your device. Your photos and camera frames are never uploaded to us or to any AI provider, and the App does not store them after recognition is complete.</p>`,
      },
      {
        heading: `AI Features and What They Send`,
        content: `<p>AI book insights and AI reading chains are optional and run only after you explicitly agree to use AI features. When you request them, the App sends the following to our server (an AI proxy we operate on Cloudflare):</p>
<ul><li>Book metadata: title, author, and, where available, a public description of the book.</li><li>Your interface language, so the answer is written in it.</li><li>A random installation identifier and technical request data used for quota management and abuse prevention.</li></ul>
<p>Our server forwards the book metadata to an AI provider (currently DeepSeek) to generate the result. <strong>Your personal notes, your photos, your name, and your contact details are never sent to us or to the AI provider.</strong> AI requests are not used to build a profile of you, and we do not sell or share this data.</p>`,
      },
      {
        heading: `Book Search (Google Books)`,
        content: `<p>When you search for a book by title, author, or ISBN, the App queries the Google Books API to find matching editions, covers, and descriptions. Only the search query itself is sent. Google's processing of these requests is governed by Google's Privacy Policy (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>).</p>`,
      },
      {
        heading: `Subscriptions and Purchases`,
        content: `<p>Bookpather Pro is an optional auto-renewable subscription. All transactions are processed entirely by Apple through the App Store using StoreKit. We do not receive or store your payment information, Apple ID, or billing details. To verify your subscription and enforce fair-use limits, our server may validate an App Store transaction signature; this does not include any personal or payment information beyond what Apple includes in the signed transaction. Apple's handling of your data is governed by Apple's Privacy Policy (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `No Advertising, No Tracking`,
        content: `<p>The App contains no ads and integrates no third-party analytics, advertising, crash-reporting, or social media SDKs. We do not use Firebase, Google Analytics, Facebook SDK, ad networks, or similar services, and we do not track you across apps or websites.</p>`,
      },
      {
        heading: `Children's Privacy`,
        content: `<p>The App is not directed at children and does not knowingly collect personal information from anyone, including children. AI features require explicit consent before any data leaves the device.</p>`,
      },
      {
        heading: `Data Security`,
        content: `<p>Your library remains on your device and in your personal iCloud, protected by Apple's encryption. Communication with our AI proxy and with Apple and Google services uses encrypted HTTPS connections. Because we do not maintain user accounts or store your library on our servers, there is no central database of your personal data that could be breached on our side.</p>`,
      },
      {
        heading: `Your Rights`,
        content: `<p>You are in control of your data:</p>
<ul><li>All library data can be exported as JSON at any time from the App's settings.</li><li>Deleting the App (and its iCloud data via iOS settings) removes your library completely.</li><li>You can decline or revoke AI consent at any time; the App remains fully usable without AI features.</li><li>Since we do not store personal data on our servers, there is no personal profile for us to provide, correct, or delete — quota counters are tied only to a random installation identifier.</li></ul>`,
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
    effectiveDate: `Дата вступления в силу: 12 июля 2026 г.`,
    intro: `NikiBStudio («мы», «наш», «нас») разработала <strong>Bookpather</strong> («Приложение») как коммерческое приложение. Эта Политика конфиденциальности объясняет, какие данные обрабатывает Приложение, где они хранятся, что покидает ваше устройство — а что не покидает его никогда.`,
    sections: [
      {
        heading: `Обзор`,
        content: `<p>Bookpather устроен так, чтобы быть приватным по умолчанию. Приложению не нужны аккаунт, вход или регистрация; в нём нет рекламы, сторонней аналитики и трекинговых SDK. Ваша библиотека — книги, обложки, заметки, статусы чтения, справки и цепочки чтения — хранится на вашем устройстве и, при доступности, в вашем личном iCloud. Необязательные AI-функции отправляют на наш сервер только ограниченные метаданные книг и только после вашего явного согласия.</p>`,
      },
      {
        heading: `Данные на вашем устройстве и в вашем iCloud`,
        content: `<p>Приложение хранит локально на устройстве следующие данные:</p>
<ul><li><strong>Ваша библиотека</strong> — названия, авторы, обложки, темы, ISBN и статусы чтения («Хочу прочитать», «Читаю», «Прочитал», «Бросил»).</li><li><strong>Личные заметки</strong>, прикреплённые к книгам.</li><li><strong>AI-справки и цепочки чтения</strong>, которые вы создали и сохранили.</li><li><strong>Настройки приложения</strong> и кешированный индикатор статуса подписки.</li></ul>
<p>Если на устройстве доступен iCloud, эти данные синхронизируются через ваш личный аккаунт iCloud (приватная база Apple CloudKit) и появляются на других ваших устройствах. У нас нет собственной базы пользователей и нет доступа к вашим данным в iCloud. Вы можете в любой момент экспортировать книги, заметки, справки и цепочки в JSON-файл, а также удалить всё, удалив Приложение и его данные iCloud.</p>`,
      },
      {
        heading: `Камера и фотографии`,
        content: `<p>Приложение использует камеру и фотобиблиотеку только для распознавания книг — по обложке, штрихкоду или фотографии полки. Распознавание выполняется на вашем устройстве. Ваши фотографии и кадры камеры никогда не загружаются к нам или какому-либо AI-провайдеру, и Приложение не хранит их после завершения распознавания.</p>`,
      },
      {
        heading: `AI-функции и что они отправляют`,
        content: `<p>AI-справки о книгах и AI-цепочки чтения — необязательные функции, которые работают только после вашего явного согласия на использование AI. При запросе Приложение отправляет на наш сервер (AI-прокси, размещённый нами в Cloudflare):</p>
<ul><li>Метаданные книги: название, автора и, если доступно, публичное описание книги.</li><li>Язык вашего интерфейса, чтобы ответ был написан на нём.</li><li>Случайный идентификатор установки и технические данные запроса — для учёта квот и защиты от злоупотреблений.</li></ul>
<p>Наш сервер передаёт метаданные книги AI-провайдеру (в настоящее время DeepSeek) для генерации результата. <strong>Ваши личные заметки, фотографии, имя и контактные данные никогда не отправляются ни нам, ни AI-провайдеру.</strong> AI-запросы не используются для составления вашего профиля; мы не продаём и не передаём эти данные.</p>`,
      },
      {
        heading: `Поиск книг (Google Books)`,
        content: `<p>Когда вы ищете книгу по названию, автору или ISBN, Приложение обращается к Google Books API, чтобы найти издания, обложки и описания. Отправляется только сам поисковый запрос. Обработка этих запросов Google регулируется Политикой конфиденциальности Google (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>).</p>`,
      },
      {
        heading: `Подписки и покупки`,
        content: `<p>Bookpather Pro — необязательная автопродлеваемая подписка. Все транзакции полностью обрабатываются Apple через App Store с использованием StoreKit. Мы не получаем и не храним ваши платёжные данные, Apple ID или сведения о счетах. Для проверки подписки и соблюдения лимитов честного использования наш сервер может валидировать подпись транзакции App Store; она не содержит персональных или платёжных данных сверх того, что Apple включает в подписанную транзакцию. Обработка данных Apple регулируется Политикой конфиденциальности Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Без рекламы и трекинга`,
        content: `<p>В Приложении нет рекламы и не интегрированы сторонние SDK аналитики, рекламы, крэш-репортинга или социальных сетей. Мы не используем Firebase, Google Analytics, Facebook SDK, рекламные сети и подобные сервисы и не отслеживаем вас в других приложениях и на сайтах.</p>`,
      },
      {
        heading: `Конфиденциальность детей`,
        content: `<p>Приложение не предназначено для детей и сознательно не собирает персональные данные ни у кого, включая детей. AI-функции требуют явного согласия, прежде чем какие-либо данные покинут устройство.</p>`,
      },
      {
        heading: `Безопасность данных`,
        content: `<p>Ваша библиотека остаётся на вашем устройстве и в вашем личном iCloud под защитой шифрования Apple. Связь с нашим AI-прокси, сервисами Apple и Google идёт по зашифрованным HTTPS-соединениям. Поскольку мы не ведём аккаунты пользователей и не храним вашу библиотеку на своих серверах, на нашей стороне нет центральной базы ваших персональных данных, которая могла бы быть скомпрометирована.</p>`,
      },
      {
        heading: `Ваши права`,
        content: `<p>Вы контролируете свои данные:</p>
<ul><li>Всю библиотеку можно в любой момент экспортировать в JSON из настроек Приложения.</li><li>Удаление Приложения (и его данных iCloud в настройках iOS) полностью удаляет вашу библиотеку.</li><li>Вы можете отказаться от согласия на AI или отозвать его в любой момент — Приложение полностью работает и без AI-функций.</li><li>Поскольку мы не храним персональные данные на серверах, у нас нет вашего профиля, который нужно было бы предоставить, исправить или удалить — счётчики квот привязаны только к случайному идентификатору установки.</li></ul>`,
      },
      {
        heading: `Изменения политики`,
        content: `<p>Мы можем время от времени обновлять эту Политику конфиденциальности. Все изменения будут отражены на этой странице с обновлённой датой вступления в силу. Рекомендуем периодически просматривать эту страницу.</p>`,
      },
      {
        heading: `Связаться с нами`,
        content: `<p>Если у вас есть вопросы по этой Политике конфиденциальности, напишите нам:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  de: {
    title: `Datenschutzerklärung`,
    effectiveDate: `Gültig ab: 12. Juli 2026`,
    intro: `NikiBStudio („wir", „unser" oder „uns") hat <strong>Bookpather</strong> („die App") als kommerzielle Anwendung entwickelt. Diese Datenschutzerklärung erläutert, welche Daten die App verarbeitet, wo sie gespeichert werden und was Ihr Gerät verlässt — und was niemals.`,
    sections: [
      {
        heading: `Überblick`,
        content: `<p>Bookpather ist standardmäßig privat. Die App benötigt kein Konto, keinen Login und keine Registrierung; sie enthält keine Werbung und keine Analyse- oder Tracking-SDKs von Drittanbietern. Ihre Bibliothek — Bücher, Cover, Notizen, Lesestatus, Einblicke und Leseketten — wird auf Ihrem Gerät und, sofern verfügbar, in Ihrer persönlichen iCloud gespeichert. Optionale KI-Funktionen senden nur begrenzte Buchmetadaten an unseren Server, und nur nach Ihrer ausdrücklichen Zustimmung.</p>`,
      },
      {
        heading: `Daten auf Ihrem Gerät und in Ihrer iCloud`,
        content: `<p>Die App speichert lokal auf Ihrem Gerät:</p>
<ul><li><strong>Ihre Bibliothek</strong> — Titel, Autoren, Cover, Themen, ISBNs und Lesestatus.</li><li><strong>Persönliche Notizen</strong>, die Sie Büchern hinzufügen.</li><li><strong>KI-Einblicke und Leseketten</strong>, die Sie erstellt und gespeichert haben.</li><li><strong>App-Einstellungen</strong> und einen zwischengespeicherten Indikator Ihres Abo-Status.</li></ul>
<p>Wenn iCloud verfügbar ist, synchronisieren sich diese Daten über Ihr persönliches iCloud-Konto (private Apple-CloudKit-Datenbank). Wir betreiben keine eigene Nutzerdatenbank und haben keinen Zugriff auf Ihre iCloud-Daten. Sie können Ihre Bücher, Notizen, Einblicke und Ketten jederzeit als JSON exportieren und alles löschen, indem Sie die App und ihre iCloud-Daten entfernen.</p>`,
      },
      {
        heading: `Kamera und Fotos`,
        content: `<p>Die App verwendet Kamera und Fotomediathek nur zur Bucherkennung — über Cover, Barcode oder ein Regalfoto. Die Erkennung erfolgt auf Ihrem Gerät. Ihre Fotos und Kamerabilder werden niemals an uns oder einen KI-Anbieter hochgeladen und nach der Erkennung nicht gespeichert.</p>`,
      },
      {
        heading: `KI-Funktionen und was sie senden`,
        content: `<p>KI-Einblicke und KI-Leseketten sind optional und laufen erst, nachdem Sie der Nutzung von KI-Funktionen ausdrücklich zugestimmt haben. Bei einer Anfrage sendet die App an unseren Server (einen von uns bei Cloudflare betriebenen KI-Proxy):</p>
<ul><li>Buchmetadaten: Titel, Autor und, sofern verfügbar, eine öffentliche Beschreibung des Buches.</li><li>Ihre Oberflächensprache, damit die Antwort darin verfasst wird.</li><li>Eine zufällige Installations-ID und technische Anfragedaten für Kontingentverwaltung und Missbrauchsschutz.</li></ul>
<p>Unser Server leitet die Buchmetadaten an einen KI-Anbieter (derzeit DeepSeek) weiter. <strong>Ihre persönlichen Notizen, Fotos, Ihr Name und Ihre Kontaktdaten werden niemals an uns oder den KI-Anbieter gesendet.</strong> KI-Anfragen werden nicht zur Profilbildung genutzt; wir verkaufen oder teilen diese Daten nicht.</p>`,
      },
      {
        heading: `Buchsuche (Google Books)`,
        content: `<p>Bei der Suche nach Titel, Autor oder ISBN fragt die App die Google Books API ab, um Ausgaben, Cover und Beschreibungen zu finden. Es wird nur die Suchanfrage selbst gesendet. Googles Verarbeitung unterliegt der Datenschutzerklärung von Google (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>).</p>`,
      },
      {
        heading: `Abonnements und Käufe`,
        content: `<p>Bookpather Pro ist ein optionales, automatisch verlängerndes Abonnement. Alle Transaktionen werden vollständig von Apple über den App Store (StoreKit) abgewickelt. Wir erhalten und speichern keine Zahlungsdaten, Apple-ID oder Rechnungsdetails. Zur Abo-Prüfung kann unser Server eine App-Store-Transaktionssignatur validieren; diese enthält keine persönlichen oder Zahlungsdaten über das hinaus, was Apple in die signierte Transaktion aufnimmt. Apples Umgang mit Ihren Daten unterliegt der Datenschutzerklärung von Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Keine Werbung, kein Tracking`,
        content: `<p>Die App enthält keine Werbung und integriert keine Analyse-, Werbe-, Crash-Reporting- oder Social-Media-SDKs von Drittanbietern. Wir verwenden weder Firebase noch Google Analytics, Facebook SDK oder Werbenetzwerke und verfolgen Sie nicht über Apps und Websites hinweg.</p>`,
      },
      {
        heading: `Datenschutz von Kindern`,
        content: `<p>Die App richtet sich nicht an Kinder und sammelt wissentlich keine personenbezogenen Daten — von niemandem, auch nicht von Kindern. KI-Funktionen erfordern eine ausdrückliche Zustimmung, bevor Daten das Gerät verlassen.</p>`,
      },
      {
        heading: `Datensicherheit`,
        content: `<p>Ihre Bibliothek bleibt auf Ihrem Gerät und in Ihrer persönlichen iCloud, geschützt durch Apples Verschlüsselung. Die Kommunikation mit unserem KI-Proxy sowie mit Apple- und Google-Diensten erfolgt über verschlüsselte HTTPS-Verbindungen. Da wir keine Nutzerkonten führen und Ihre Bibliothek nicht auf unseren Servern speichern, existiert bei uns keine zentrale Datenbank Ihrer persönlichen Daten.</p>`,
      },
      {
        heading: `Ihre Rechte`,
        content: `<p>Sie behalten die Kontrolle über Ihre Daten:</p>
<ul><li>Die gesamte Bibliothek kann jederzeit aus den App-Einstellungen als JSON exportiert werden.</li><li>Das Löschen der App (und ihrer iCloud-Daten in den iOS-Einstellungen) entfernt Ihre Bibliothek vollständig.</li><li>Sie können die KI-Zustimmung jederzeit verweigern oder widerrufen; die App bleibt ohne KI-Funktionen voll nutzbar.</li><li>Da wir keine personenbezogenen Daten auf Servern speichern, gibt es kein Profil, das wir herausgeben, korrigieren oder löschen müssten — Kontingente sind nur an eine zufällige Installations-ID gebunden.</li></ul>`,
      },
      {
        heading: `Änderungen dieser Erklärung`,
        content: `<p>Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit aktualisiertem Gültigkeitsdatum veröffentlicht.</p>`,
      },
      {
        heading: `Kontakt`,
        content: `<p>Bei Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns unter:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  fr: {
    title: `Politique de confidentialité`,
    effectiveDate: `Date d'entrée en vigueur : 12 juillet 2026`,
    intro: `NikiBStudio (« nous », « notre ») a développé <strong>Bookpather</strong> (« l'App ») en tant qu'application commerciale. Cette politique explique quelles données l'App traite, où elles sont stockées et ce qui quitte votre appareil — et ce qui ne le quitte jamais.`,
    sections: [
      {
        heading: `Aperçu`,
        content: `<p>Bookpather est privé par défaut. L'App ne nécessite ni compte, ni connexion, ni inscription ; elle ne contient ni publicité ni SDK tiers d'analyse ou de suivi. Votre bibliothèque — livres, couvertures, notes, statuts de lecture, résumés et chaînes de lecture — est stockée sur votre appareil et, si disponible, dans votre iCloud personnel. Les fonctions IA, optionnelles, n'envoient à notre serveur que des métadonnées de livres limitées, et uniquement après votre consentement explicite.</p>`,
      },
      {
        heading: `Données sur votre appareil et dans votre iCloud`,
        content: `<p>L'App stocke localement sur votre appareil :</p>
<ul><li><strong>Votre bibliothèque</strong> — titres, auteurs, couvertures, thèmes, ISBN et statuts de lecture.</li><li><strong>Vos notes personnelles</strong> attachées aux livres.</li><li><strong>Les résumés IA et chaînes de lecture</strong> que vous avez créés et enregistrés.</li><li><strong>Les préférences de l'App</strong> et un indicateur mis en cache de votre statut d'abonnement.</li></ul>
<p>Si iCloud est disponible, ces données se synchronisent via votre compte iCloud personnel (base privée Apple CloudKit). Nous n'exploitons aucune base d'utilisateurs et n'avons pas accès à vos données iCloud. Vous pouvez exporter vos livres, notes, résumés et chaînes en JSON à tout moment, et tout supprimer en retirant l'App et ses données iCloud.</p>`,
      },
      {
        heading: `Caméra et photos`,
        content: `<p>L'App utilise la caméra et la photothèque uniquement pour reconnaître des livres — via une couverture, un code-barres ou une photo d'étagère. La reconnaissance s'effectue sur votre appareil. Vos photos ne sont jamais transmises à nous ni à un fournisseur d'IA, et l'App ne les conserve pas après la reconnaissance.</p>`,
      },
      {
        heading: `Fonctions IA : ce qui est envoyé`,
        content: `<p>Les résumés IA et les chaînes de lecture IA sont optionnels et ne fonctionnent qu'après votre accord explicite. Lors d'une demande, l'App envoie à notre serveur (un proxy IA que nous exploitons chez Cloudflare) :</p>
<ul><li>Les métadonnées du livre : titre, auteur et, si disponible, une description publique du livre.</li><li>Votre langue d'interface, afin que la réponse soit rédigée dans celle-ci.</li><li>Un identifiant d'installation aléatoire et des données techniques servant à la gestion des quotas et à la prévention des abus.</li></ul>
<p>Notre serveur transmet les métadonnées du livre à un fournisseur d'IA (actuellement DeepSeek). <strong>Vos notes personnelles, vos photos, votre nom et vos coordonnées ne sont jamais envoyés, ni à nous ni au fournisseur d'IA.</strong> Les requêtes IA ne servent pas à établir un profil, et nous ne vendons ni ne partageons ces données.</p>`,
      },
      {
        heading: `Recherche de livres (Google Books)`,
        content: `<p>Lorsque vous cherchez un livre par titre, auteur ou ISBN, l'App interroge l'API Google Books pour trouver éditions, couvertures et descriptions. Seule la requête de recherche est envoyée. Le traitement par Google est régi par sa politique de confidentialité (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>).</p>`,
      },
      {
        heading: `Abonnements et achats`,
        content: `<p>Bookpather Pro est un abonnement optionnel à renouvellement automatique. Toutes les transactions sont traitées intégralement par Apple via l'App Store (StoreKit). Nous ne recevons ni ne stockons vos informations de paiement, votre identifiant Apple ou vos données de facturation. Pour vérifier l'abonnement, notre serveur peut valider une signature de transaction App Store ; elle ne contient aucune donnée personnelle ou de paiement au-delà de ce qu'Apple inclut dans la transaction signée. Le traitement de vos données par Apple est régi par sa politique de confidentialité (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Ni publicité, ni suivi`,
        content: `<p>L'App ne contient aucune publicité et n'intègre aucun SDK tiers d'analyse, de publicité, de rapport de plantage ou de réseaux sociaux. Nous n'utilisons ni Firebase, ni Google Analytics, ni Facebook SDK, ni régies publicitaires, et nous ne vous suivons pas à travers les apps et les sites.</p>`,
      },
      {
        heading: `Confidentialité des enfants`,
        content: `<p>L'App ne s'adresse pas aux enfants et ne collecte sciemment de données personnelles auprès de personne, y compris des enfants. Les fonctions IA exigent un consentement explicite avant que la moindre donnée ne quitte l'appareil.</p>`,
      },
      {
        heading: `Sécurité des données`,
        content: `<p>Votre bibliothèque reste sur votre appareil et dans votre iCloud personnel, protégée par le chiffrement d'Apple. Les communications avec notre proxy IA et les services Apple et Google utilisent des connexions HTTPS chiffrées. N'ayant ni comptes utilisateurs ni copie de votre bibliothèque sur nos serveurs, il n'existe chez nous aucune base centrale de vos données personnelles.</p>`,
      },
      {
        heading: `Vos droits`,
        content: `<p>Vous gardez le contrôle de vos données :</p>
<ul><li>Toute la bibliothèque peut être exportée en JSON à tout moment depuis les réglages de l'App.</li><li>Supprimer l'App (et ses données iCloud dans les réglages iOS) efface complètement votre bibliothèque.</li><li>Vous pouvez refuser ou révoquer le consentement IA à tout moment ; l'App reste pleinement utilisable sans les fonctions IA.</li><li>Comme nous ne stockons pas de données personnelles sur nos serveurs, il n'existe aucun profil à fournir, corriger ou supprimer — les quotas ne sont liés qu'à un identifiant d'installation aléatoire.</li></ul>`,
      },
      {
        heading: `Modifications de cette politique`,
        content: `<p>Nous pouvons mettre à jour cette politique de temps à autre. Les changements seront publiés sur cette page avec une date d'entrée en vigueur actualisée.</p>`,
      },
      {
        heading: `Nous contacter`,
        content: `<p>Pour toute question concernant cette politique de confidentialité, contactez-nous :</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  es: {
    title: `Política de privacidad`,
    effectiveDate: `Fecha de entrada en vigor: 12 de julio de 2026`,
    intro: `NikiBStudio («nosotros», «nuestro») desarrolló <strong>Bookpather</strong> («la App») como aplicación comercial. Esta política explica qué datos maneja la App, dónde se almacenan y qué sale de tu dispositivo — y qué no sale nunca.`,
    sections: [
      {
        heading: `Resumen`,
        content: `<p>Bookpather es privado por defecto. La App no requiere cuenta, inicio de sesión ni registro; no contiene publicidad ni SDK de análisis o rastreo de terceros. Tu biblioteca — libros, portadas, notas, estados de lectura, resúmenes y cadenas de lectura — se guarda en tu dispositivo y, si está disponible, en tu iCloud personal. Las funciones de IA, opcionales, envían a nuestro servidor solo metadatos limitados de los libros, y únicamente tras tu consentimiento explícito.</p>`,
      },
      {
        heading: `Datos en tu dispositivo y en tu iCloud`,
        content: `<p>La App almacena localmente en tu dispositivo:</p>
<ul><li><strong>Tu biblioteca</strong> — títulos, autores, portadas, temas, ISBN y estados de lectura.</li><li><strong>Notas personales</strong> vinculadas a los libros.</li><li><strong>Resúmenes de IA y cadenas de lectura</strong> que hayas creado y guardado.</li><li><strong>Preferencias de la App</strong> y un indicador en caché de tu estado de suscripción.</li></ul>
<p>Si iCloud está disponible, estos datos se sincronizan mediante tu cuenta personal de iCloud (base de datos privada de Apple CloudKit). No operamos ninguna base de datos de usuarios ni tenemos acceso a tus datos de iCloud. Puedes exportar tus libros, notas, resúmenes y cadenas como JSON en cualquier momento, y borrarlo todo eliminando la App y sus datos de iCloud.</p>`,
      },
      {
        heading: `Cámara y fotos`,
        content: `<p>La App usa la cámara y la fototeca solo para reconocer libros — por portada, código de barras o una foto de la estantería. El reconocimiento ocurre en tu dispositivo. Tus fotos nunca se suben a nosotros ni a ningún proveedor de IA, y la App no las conserva tras el reconocimiento.</p>`,
      },
      {
        heading: `Funciones de IA y qué envían`,
        content: `<p>Los resúmenes de IA y las cadenas de lectura con IA son opcionales y solo funcionan tras tu acuerdo explícito. Al solicitarlos, la App envía a nuestro servidor (un proxy de IA que operamos en Cloudflare):</p>
<ul><li>Metadatos del libro: título, autor y, si está disponible, una descripción pública del libro.</li><li>Tu idioma de interfaz, para que la respuesta se redacte en él.</li><li>Un identificador de instalación aleatorio y datos técnicos para la gestión de cuotas y la prevención de abusos.</li></ul>
<p>Nuestro servidor reenvía los metadatos del libro a un proveedor de IA (actualmente DeepSeek). <strong>Tus notas personales, tus fotos, tu nombre y tus datos de contacto nunca se envían, ni a nosotros ni al proveedor de IA.</strong> Las solicitudes de IA no se usan para crear un perfil tuyo, y no vendemos ni compartimos estos datos.</p>`,
      },
      {
        heading: `Búsqueda de libros (Google Books)`,
        content: `<p>Cuando buscas un libro por título, autor o ISBN, la App consulta la API de Google Books para encontrar ediciones, portadas y descripciones. Solo se envía la propia consulta de búsqueda. El tratamiento por parte de Google se rige por su política de privacidad (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>).</p>`,
      },
      {
        heading: `Suscripciones y compras`,
        content: `<p>Bookpather Pro es una suscripción opcional con renovación automática. Todas las transacciones las procesa íntegramente Apple a través del App Store (StoreKit). No recibimos ni almacenamos tu información de pago, Apple ID ni datos de facturación. Para verificar la suscripción, nuestro servidor puede validar una firma de transacción del App Store; no incluye datos personales ni de pago más allá de lo que Apple incorpora en la transacción firmada. El tratamiento de Apple se rige por su política de privacidad (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Sin publicidad, sin rastreo`,
        content: `<p>La App no contiene anuncios ni integra SDK de terceros de análisis, publicidad, informes de fallos o redes sociales. No usamos Firebase, Google Analytics, Facebook SDK ni redes publicitarias, y no te rastreamos entre apps ni sitios web.</p>`,
      },
      {
        heading: `Privacidad de los menores`,
        content: `<p>La App no está dirigida a niños y no recopila conscientemente datos personales de nadie, incluidos los menores. Las funciones de IA exigen consentimiento explícito antes de que ningún dato salga del dispositivo.</p>`,
      },
      {
        heading: `Seguridad de los datos`,
        content: `<p>Tu biblioteca permanece en tu dispositivo y en tu iCloud personal, protegida por el cifrado de Apple. Las comunicaciones con nuestro proxy de IA y con los servicios de Apple y Google usan conexiones HTTPS cifradas. Como no mantenemos cuentas de usuario ni guardamos tu biblioteca en nuestros servidores, no existe en nuestro lado una base central con tus datos personales.</p>`,
      },
      {
        heading: `Tus derechos`,
        content: `<p>Tú controlas tus datos:</p>
<ul><li>Toda la biblioteca puede exportarse como JSON en cualquier momento desde los ajustes de la App.</li><li>Eliminar la App (y sus datos de iCloud en los ajustes de iOS) borra tu biblioteca por completo.</li><li>Puedes rechazar o revocar el consentimiento de IA en cualquier momento; la App sigue siendo plenamente utilizable sin las funciones de IA.</li><li>Como no almacenamos datos personales en servidores, no existe ningún perfil que debamos entregar, corregir o borrar — las cuotas solo están ligadas a un identificador de instalación aleatorio.</li></ul>`,
      },
      {
        heading: `Cambios en esta política`,
        content: `<p>Podemos actualizar esta política ocasionalmente. Los cambios se publicarán en esta página con la fecha de entrada en vigor actualizada.</p>`,
      },
      {
        heading: `Contacto`,
        content: `<p>Si tienes preguntas sobre esta política de privacidad, escríbenos a:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  it: {
    title: `Informativa sulla privacy`,
    effectiveDate: `Data di entrata in vigore: 12 luglio 2026`,
    intro: `NikiBStudio («noi», «nostro») ha sviluppato <strong>Bookpather</strong> («l'App») come applicazione commerciale. Questa informativa spiega quali dati l'App gestisce, dove sono conservati e cosa lascia il tuo dispositivo — e cosa non lo lascia mai.`,
    sections: [
      {
        heading: `Panoramica`,
        content: `<p>Bookpather è privato per impostazione predefinita. L'App non richiede account, accesso o registrazione; non contiene pubblicità né SDK di analisi o tracciamento di terze parti. La tua biblioteca — libri, copertine, note, stati di lettura, sintesi e catene di lettura — è salvata sul tuo dispositivo e, se disponibile, nel tuo iCloud personale. Le funzioni IA, facoltative, inviano al nostro server solo metadati limitati dei libri, e solo dopo il tuo consenso esplicito.</p>`,
      },
      {
        heading: `Dati sul tuo dispositivo e nel tuo iCloud`,
        content: `<p>L'App memorizza localmente sul dispositivo:</p>
<ul><li><strong>La tua biblioteca</strong> — titoli, autori, copertine, argomenti, ISBN e stati di lettura.</li><li><strong>Note personali</strong> allegate ai libri.</li><li><strong>Sintesi IA e catene di lettura</strong> che hai creato e salvato.</li><li><strong>Preferenze dell'App</strong> e un indicatore in cache dello stato dell'abbonamento.</li></ul>
<p>Se iCloud è disponibile, questi dati si sincronizzano tramite il tuo account iCloud personale (database privato Apple CloudKit). Non gestiamo alcun database utenti e non abbiamo accesso ai tuoi dati iCloud. Puoi esportare libri, note, sintesi e catene in JSON in qualsiasi momento ed eliminare tutto rimuovendo l'App e i suoi dati iCloud.</p>`,
      },
      {
        heading: `Fotocamera e foto`,
        content: `<p>L'App usa fotocamera e libreria foto solo per riconoscere i libri — tramite copertina, codice a barre o foto di uno scaffale. Il riconoscimento avviene sul tuo dispositivo. Le tue foto non vengono mai caricate da noi né da alcun fornitore di IA, e l'App non le conserva dopo il riconoscimento.</p>`,
      },
      {
        heading: `Funzioni IA e cosa inviano`,
        content: `<p>Le sintesi IA e le catene di lettura IA sono facoltative e funzionano solo dopo il tuo consenso esplicito. Alla richiesta, l'App invia al nostro server (un proxy IA che gestiamo su Cloudflare):</p>
<ul><li>Metadati del libro: titolo, autore e, se disponibile, una descrizione pubblica del libro.</li><li>La lingua della tua interfaccia, così la risposta è scritta in essa.</li><li>Un identificatore di installazione casuale e dati tecnici per la gestione delle quote e la prevenzione degli abusi.</li></ul>
<p>Il nostro server inoltra i metadati del libro a un fornitore di IA (attualmente DeepSeek). <strong>Le tue note personali, le tue foto, il tuo nome e i tuoi contatti non vengono mai inviati, né a noi né al fornitore di IA.</strong> Le richieste IA non servono a profilarti e non vendiamo né condividiamo questi dati.</p>`,
      },
      {
        heading: `Ricerca libri (Google Books)`,
        content: `<p>Quando cerchi un libro per titolo, autore o ISBN, l'App interroga l'API di Google Books per trovare edizioni, copertine e descrizioni. Viene inviata solo la query di ricerca. Il trattamento da parte di Google è regolato dalla sua informativa sulla privacy (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>).</p>`,
      },
      {
        heading: `Abbonamenti e acquisti`,
        content: `<p>Bookpather Pro è un abbonamento facoltativo con rinnovo automatico. Tutte le transazioni sono elaborate interamente da Apple tramite l'App Store (StoreKit). Non riceviamo né conserviamo informazioni di pagamento, Apple ID o dati di fatturazione. Per verificare l'abbonamento, il nostro server può convalidare una firma di transazione dell'App Store; essa non include dati personali o di pagamento oltre a quanto Apple inserisce nella transazione firmata. Il trattamento di Apple è regolato dalla sua informativa sulla privacy (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Niente pubblicità, niente tracciamento`,
        content: `<p>L'App non contiene pubblicità e non integra SDK di terze parti per analisi, pubblicità, crash reporting o social media. Non usiamo Firebase, Google Analytics, Facebook SDK o reti pubblicitarie, e non ti tracciamo tra app e siti web.</p>`,
      },
      {
        heading: `Privacy dei minori`,
        content: `<p>L'App non è rivolta ai bambini e non raccoglie consapevolmente dati personali da nessuno, minori inclusi. Le funzioni IA richiedono un consenso esplicito prima che qualsiasi dato lasci il dispositivo.</p>`,
      },
      {
        heading: `Sicurezza dei dati`,
        content: `<p>La tua biblioteca resta sul tuo dispositivo e nel tuo iCloud personale, protetta dalla crittografia di Apple. Le comunicazioni con il nostro proxy IA e con i servizi Apple e Google avvengono su connessioni HTTPS cifrate. Non gestendo account utente né conservando la tua biblioteca sui nostri server, da noi non esiste alcun database centrale dei tuoi dati personali.</p>`,
      },
      {
        heading: `I tuoi diritti`,
        content: `<p>Hai il controllo dei tuoi dati:</p>
<ul><li>L'intera biblioteca può essere esportata in JSON in qualsiasi momento dalle impostazioni dell'App.</li><li>Eliminare l'App (e i suoi dati iCloud nelle impostazioni iOS) rimuove completamente la tua biblioteca.</li><li>Puoi rifiutare o revocare il consenso IA in qualsiasi momento; l'App resta pienamente utilizzabile senza le funzioni IA.</li><li>Non conservando dati personali sui server, non esiste alcun profilo da fornire, correggere o eliminare — le quote sono legate solo a un identificatore di installazione casuale.</li></ul>`,
      },
      {
        heading: `Modifiche a questa informativa`,
        content: `<p>Potremmo aggiornare questa informativa di tanto in tanto. Le modifiche saranno pubblicate su questa pagina con la data di entrata in vigore aggiornata.</p>`,
      },
      {
        heading: `Contattaci`,
        content: `<p>Per domande su questa informativa sulla privacy, scrivici a:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  pt: {
    title: `Política de Privacidade`,
    effectiveDate: `Data de vigência: 12 de julho de 2026`,
    intro: `A NikiBStudio ("nós", "nosso") desenvolveu o <strong>Bookpather</strong> ("o App") como aplicativo comercial. Esta política explica quais dados o App processa, onde ficam armazenados e o que sai do seu dispositivo — e o que nunca sai.`,
    sections: [
      {
        heading: `Visão geral`,
        content: `<p>O Bookpather é privado por padrão. O App não exige conta, login nem cadastro; não contém publicidade nem SDKs de análise ou rastreamento de terceiros. Sua biblioteca — livros, capas, notas, status de leitura, resumos e sequências de leitura — fica no seu dispositivo e, quando disponível, no seu iCloud pessoal. Os recursos de IA, opcionais, enviam ao nosso servidor apenas metadados limitados dos livros, e somente após o seu consentimento explícito.</p>`,
      },
      {
        heading: `Dados no seu dispositivo e no seu iCloud`,
        content: `<p>O App armazena localmente no seu dispositivo:</p>
<ul><li><strong>Sua biblioteca</strong> — títulos, autores, capas, temas, ISBNs e status de leitura.</li><li><strong>Notas pessoais</strong> anexadas aos livros.</li><li><strong>Resumos de IA e sequências de leitura</strong> que você criou e salvou.</li><li><strong>Preferências do App</strong> e um indicador em cache do status da assinatura.</li></ul>
<p>Se o iCloud estiver disponível, esses dados sincronizam pela sua conta pessoal do iCloud (banco de dados privado do Apple CloudKit). Não operamos banco de dados de usuários e não temos acesso aos seus dados do iCloud. Você pode exportar livros, notas, resumos e sequências como JSON a qualquer momento e apagar tudo removendo o App e seus dados do iCloud.</p>`,
      },
      {
        heading: `Câmera e fotos`,
        content: `<p>O App usa a câmera e a fototeca apenas para reconhecer livros — pela capa, código de barras ou foto de uma estante. O reconhecimento acontece no seu dispositivo. Suas fotos nunca são enviadas para nós nem para qualquer provedor de IA, e o App não as guarda após o reconhecimento.</p>`,
      },
      {
        heading: `Recursos de IA e o que eles enviam`,
        content: `<p>Os resumos de IA e as sequências de leitura com IA são opcionais e só funcionam após sua concordância explícita. Ao solicitá-los, o App envia ao nosso servidor (um proxy de IA que operamos na Cloudflare):</p>
<ul><li>Metadados do livro: título, autor e, quando disponível, uma descrição pública do livro.</li><li>Seu idioma de interface, para que a resposta seja escrita nele.</li><li>Um identificador de instalação aleatório e dados técnicos para gestão de cotas e prevenção de abusos.</li></ul>
<p>Nosso servidor repassa os metadados do livro a um provedor de IA (atualmente DeepSeek). <strong>Suas notas pessoais, fotos, nome e contatos nunca são enviados, nem para nós nem para o provedor de IA.</strong> As solicitações de IA não são usadas para criar um perfil seu, e não vendemos nem compartilhamos esses dados.</p>`,
      },
      {
        heading: `Busca de livros (Google Books)`,
        content: `<p>Ao buscar um livro por título, autor ou ISBN, o App consulta a API do Google Books para encontrar edições, capas e descrições. Apenas a consulta de busca é enviada. O tratamento pelo Google é regido pela política de privacidade do Google (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>).</p>`,
      },
      {
        heading: `Assinaturas e compras`,
        content: `<p>O Bookpather Pro é uma assinatura opcional com renovação automática. Todas as transações são processadas integralmente pela Apple via App Store (StoreKit). Não recebemos nem armazenamos suas informações de pagamento, Apple ID ou dados de cobrança. Para verificar a assinatura, nosso servidor pode validar uma assinatura de transação da App Store; ela não inclui dados pessoais ou de pagamento além do que a Apple incorpora na transação assinada. O tratamento pela Apple é regido pela política de privacidade da Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Sem anúncios, sem rastreamento`,
        content: `<p>O App não contém anúncios e não integra SDKs de terceiros de análise, publicidade, relatórios de falhas ou redes sociais. Não usamos Firebase, Google Analytics, Facebook SDK nem redes de anúncios, e não rastreamos você entre apps e sites.</p>`,
      },
      {
        heading: `Privacidade das crianças`,
        content: `<p>O App não é direcionado a crianças e não coleta conscientemente dados pessoais de ninguém, incluindo crianças. Os recursos de IA exigem consentimento explícito antes que qualquer dado saia do dispositivo.</p>`,
      },
      {
        heading: `Segurança dos dados`,
        content: `<p>Sua biblioteca permanece no seu dispositivo e no seu iCloud pessoal, protegida pela criptografia da Apple. As comunicações com nosso proxy de IA e com os serviços da Apple e do Google usam conexões HTTPS criptografadas. Como não mantemos contas de usuários nem guardamos sua biblioteca em nossos servidores, não existe do nosso lado um banco central com seus dados pessoais.</p>`,
      },
      {
        heading: `Seus direitos`,
        content: `<p>Você controla os seus dados:</p>
<ul><li>Toda a biblioteca pode ser exportada como JSON a qualquer momento nas configurações do App.</li><li>Excluir o App (e seus dados do iCloud nas configurações do iOS) remove sua biblioteca por completo.</li><li>Você pode recusar ou revogar o consentimento de IA a qualquer momento; o App continua totalmente utilizável sem os recursos de IA.</li><li>Como não armazenamos dados pessoais em servidores, não existe perfil a fornecer, corrigir ou excluir — as cotas estão ligadas apenas a um identificador de instalação aleatório.</li></ul>`,
      },
      {
        heading: `Alterações nesta política`,
        content: `<p>Podemos atualizar esta política periodicamente. As alterações serão publicadas nesta página com a data de vigência atualizada.</p>`,
      },
      {
        heading: `Fale conosco`,
        content: `<p>Em caso de dúvidas sobre esta Política de Privacidade, escreva para:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  ja: {
    title: `プライバシーポリシー`,
    effectiveDate: `発効日：2026年7月12日`,
    intro: `NikiBStudio（「当社」）は、商用アプリケーションとして<strong>Bookpather</strong>（「本アプリ」）を開発しました。本ポリシーでは、本アプリが扱うデータ、その保存場所、端末の外に送信されるもの — そして決して送信されないもの — を説明します。`,
    sections: [
      {
        heading: `概要`,
        content: `<p>Bookpatherは、初期状態からプライバシーを重視して設計されています。アカウント、ログイン、登録は不要で、広告やサードパーティの分析・トラッキングSDKも含まれていません。あなたの蔵書 — 書籍、表紙、メモ、読書ステータス、要約、読書チェーン — は端末上と、利用可能な場合はあなた個人のiCloudに保存されます。任意のAI機能は、明示的な同意の後にのみ、限られた書籍メタデータを当社サーバーへ送信します。</p>`,
      },
      {
        heading: `端末とiCloudに保存されるデータ`,
        content: `<p>本アプリは以下のデータを端末にローカル保存します：</p>
<ul><li><strong>蔵書</strong> — タイトル、著者、表紙、テーマ、ISBN、読書ステータス。</li><li><strong>書籍に添付した個人メモ。</strong></li><li><strong>作成・保存したAI要約と読書チェーン。</strong></li><li><strong>アプリ設定</strong>とサブスクリプション状態のキャッシュ。</li></ul>
<p>iCloudが利用可能な場合、これらのデータはあなた個人のiCloudアカウント（Apple CloudKitプライベートデータベース）経由で同期されます。当社は独自のユーザーデータベースを運営しておらず、あなたのiCloudデータにアクセスできません。書籍、メモ、要約、チェーンはいつでもJSONとしてエクスポートでき、アプリとそのiCloudデータを削除すればすべて消去されます。</p>`,
      },
      {
        heading: `カメラと写真`,
        content: `<p>本アプリがカメラと写真ライブラリを使用するのは、表紙・バーコード・本棚の写真から書籍を認識するためだけです。認識は端末上で行われます。写真やカメラ映像が当社やAIプロバイダーにアップロードされることはなく、認識完了後にアプリが保持することもありません。</p>`,
      },
      {
        heading: `AI機能と送信内容`,
        content: `<p>AI書籍要約とAI読書チェーンは任意機能で、AI利用への明示的な同意後にのみ動作します。リクエスト時、本アプリは当社サーバー（Cloudflare上で運用するAIプロキシ）へ以下を送信します：</p>
<ul><li>書籍メタデータ：タイトル、著者、入手可能な場合は書籍の公開説明文。</li><li>回答の言語となるインターフェース言語。</li><li>クォータ管理と不正利用防止のためのランダムなインストールIDと技術的リクエストデータ。</li></ul>
<p>当社サーバーは書籍メタデータをAIプロバイダー（現在はDeepSeek）へ転送して結果を生成します。<strong>個人メモ、写真、氏名、連絡先が当社やAIプロバイダーに送信されることは決してありません。</strong>AIリクエストがプロフィール作成に使われることはなく、これらのデータを販売・共有することもありません。</p>`,
      },
      {
        heading: `書籍検索（Google Books）`,
        content: `<p>タイトル・著者・ISBNで書籍を検索すると、本アプリはGoogle Books APIに問い合わせて版・表紙・説明を取得します。送信されるのは検索クエリのみです。Googleの処理はGoogleのプライバシーポリシー（<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>）に従います。</p>`,
      },
      {
        heading: `サブスクリプションと購入`,
        content: `<p>Bookpather Proは任意の自動更新サブスクリプションです。すべての取引はApp Store（StoreKit）を通じてAppleが完全に処理します。当社が支払い情報、Apple ID、請求情報を受け取ったり保存したりすることはありません。サブスクリプション確認のため、当社サーバーがApp Storeの取引署名を検証する場合がありますが、Appleが署名済み取引に含める以上の個人・支払い情報は含まれません。Appleによるデータの取り扱いはAppleのプライバシーポリシー（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）に従います。</p>`,
      },
      {
        heading: `広告なし・トラッキングなし`,
        content: `<p>本アプリには広告がなく、サードパーティの分析・広告・クラッシュレポート・SNSのSDKも統合されていません。Firebase、Google Analytics、Facebook SDK、広告ネットワークなどは使用せず、アプリやウェブサイトを横断した追跡も行いません。</p>`,
      },
      {
        heading: `子どものプライバシー`,
        content: `<p>本アプリは子ども向けではなく、子どもを含む誰からも個人情報を意図的に収集しません。AI機能は、データが端末の外に出る前に明示的な同意を必要とします。</p>`,
      },
      {
        heading: `データセキュリティ`,
        content: `<p>蔵書はAppleの暗号化により保護され、端末とあなた個人のiCloudに保存されます。当社AIプロキシやApple・Googleのサービスとの通信は暗号化されたHTTPS接続を使用します。ユーザーアカウントを持たず、蔵書を当社サーバーに保存しないため、当社側に漏洩し得る個人データの中央データベースは存在しません。</p>`,
      },
      {
        heading: `お客様の権利`,
        content: `<p>データはあなたの管理下にあります：</p>
<ul><li>蔵書全体はアプリ設定からいつでもJSONでエクスポートできます。</li><li>アプリ（およびiOS設定のiCloudデータ）を削除すれば、蔵書は完全に消去されます。</li><li>AIへの同意はいつでも拒否・撤回できます。AI機能なしでもアプリは完全に利用可能です。</li><li>当社サーバーに個人データを保存していないため、提供・訂正・削除すべきプロフィールは存在しません — クォータはランダムなインストールIDにのみ紐づきます。</li></ul>`,
      },
      {
        heading: `本ポリシーの変更`,
        content: `<p>本ポリシーは随時更新されることがあります。変更は発効日を更新のうえ本ページに掲載されます。</p>`,
      },
      {
        heading: `お問い合わせ`,
        content: `<p>本プライバシーポリシーに関するご質問は、こちらまでご連絡ください：</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  ko: {
    title: `개인정보 처리방침`,
    effectiveDate: `시행일: 2026년 7월 12일`,
    intro: `NikiBStudio("당사")는 상용 애플리케이션으로 <strong>Bookpather</strong>("앱")를 개발했습니다. 본 방침은 앱이 어떤 데이터를 처리하고 어디에 저장하며, 무엇이 기기 밖으로 전송되는지 — 그리고 무엇이 절대 전송되지 않는지 설명합니다.`,
    sections: [
      {
        heading: `개요`,
        content: `<p>Bookpather는 기본적으로 프라이버시를 보호하도록 설계되었습니다. 앱은 계정, 로그인, 가입이 필요 없으며 광고나 서드파티 분석·추적 SDK가 없습니다. 서재 — 책, 표지, 메모, 독서 상태, 인사이트, 독서 체인 — 는 기기와, 가능한 경우 개인 iCloud에 저장됩니다. 선택 사항인 AI 기능은 명시적 동의 후에만 제한된 도서 메타데이터를 당사 서버로 전송합니다.</p>`,
      },
      {
        heading: `기기와 iCloud에 저장되는 데이터`,
        content: `<p>앱은 다음 데이터를 기기에 로컬로 저장합니다:</p>
<ul><li><strong>서재</strong> — 제목, 저자, 표지, 주제, ISBN, 독서 상태.</li><li><strong>책에 첨부한 개인 메모.</strong></li><li><strong>생성하고 저장한 AI 인사이트와 독서 체인.</strong></li><li><strong>앱 설정</strong>과 구독 상태 캐시.</li></ul>
<p>iCloud를 사용할 수 있으면 이 데이터는 개인 iCloud 계정(Apple CloudKit 비공개 데이터베이스)을 통해 동기화됩니다. 당사는 자체 사용자 데이터베이스를 운영하지 않으며 귀하의 iCloud 데이터에 접근할 수 없습니다. 책, 메모, 인사이트, 체인은 언제든 JSON으로 내보낼 수 있고, 앱과 iCloud 데이터를 삭제하면 모두 제거됩니다.</p>`,
      },
      {
        heading: `카메라와 사진`,
        content: `<p>앱은 표지, 바코드, 책장 사진으로 책을 인식할 때만 카메라와 사진 보관함을 사용합니다. 인식은 기기에서 수행됩니다. 사진과 카메라 프레임은 당사나 AI 제공업체로 업로드되지 않으며, 인식 완료 후 앱에 보관되지 않습니다.</p>`,
      },
      {
        heading: `AI 기능과 전송 내용`,
        content: `<p>AI 도서 인사이트와 AI 독서 체인은 선택 기능이며 AI 사용에 명시적으로 동의한 후에만 작동합니다. 요청 시 앱은 당사 서버(Cloudflare에서 운영하는 AI 프록시)로 다음을 전송합니다:</p>
<ul><li>도서 메타데이터: 제목, 저자, 가능한 경우 책의 공개 설명.</li><li>답변 언어가 되는 인터페이스 언어.</li><li>할당량 관리와 남용 방지를 위한 무작위 설치 식별자 및 기술적 요청 데이터.</li></ul>
<p>당사 서버는 도서 메타데이터를 AI 제공업체(현재 DeepSeek)에 전달해 결과를 생성합니다. <strong>개인 메모, 사진, 이름, 연락처는 당사나 AI 제공업체로 절대 전송되지 않습니다.</strong> AI 요청은 프로필 작성에 사용되지 않으며, 당사는 이 데이터를 판매하거나 공유하지 않습니다.</p>`,
      },
      {
        heading: `도서 검색(Google Books)`,
        content: `<p>제목, 저자, ISBN으로 책을 검색하면 앱은 Google Books API에 질의하여 판본, 표지, 설명을 찾습니다. 검색어만 전송됩니다. Google의 처리에는 Google 개인정보처리방침(<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>)이 적용됩니다.</p>`,
      },
      {
        heading: `구독 및 구매`,
        content: `<p>Bookpather Pro는 선택 사항인 자동 갱신 구독입니다. 모든 거래는 App Store(StoreKit)를 통해 Apple이 전적으로 처리합니다. 당사는 결제 정보, Apple ID, 청구 정보를 받거나 저장하지 않습니다. 구독 확인을 위해 당사 서버가 App Store 거래 서명을 검증할 수 있으나, Apple이 서명된 거래에 포함하는 것 이상의 개인·결제 정보는 포함되지 않습니다. Apple의 데이터 처리에는 Apple 개인정보처리방침(<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>)이 적용됩니다.</p>`,
      },
      {
        heading: `광고 없음, 추적 없음`,
        content: `<p>앱에는 광고가 없으며 서드파티 분석, 광고, 충돌 보고, 소셜 미디어 SDK가 통합되어 있지 않습니다. Firebase, Google Analytics, Facebook SDK, 광고 네트워크 등을 사용하지 않으며 앱과 웹사이트를 넘나드는 추적을 하지 않습니다.</p>`,
      },
      {
        heading: `아동의 개인정보`,
        content: `<p>앱은 아동을 대상으로 하지 않으며 아동을 포함한 누구의 개인정보도 고의로 수집하지 않습니다. AI 기능은 데이터가 기기를 떠나기 전 명시적 동의를 요구합니다.</p>`,
      },
      {
        heading: `데이터 보안`,
        content: `<p>서재는 Apple의 암호화로 보호되어 기기와 개인 iCloud에 보관됩니다. 당사 AI 프록시 및 Apple·Google 서비스와의 통신은 암호화된 HTTPS 연결을 사용합니다. 사용자 계정을 운영하지 않고 서재를 당사 서버에 저장하지 않으므로, 당사 측에는 유출될 수 있는 개인 데이터 중앙 데이터베이스가 없습니다.</p>`,
      },
      {
        heading: `이용자의 권리`,
        content: `<p>데이터는 귀하가 통제합니다:</p>
<ul><li>서재 전체를 앱 설정에서 언제든 JSON으로 내보낼 수 있습니다.</li><li>앱(및 iOS 설정의 iCloud 데이터)을 삭제하면 서재가 완전히 제거됩니다.</li><li>AI 동의는 언제든 거부하거나 철회할 수 있으며, AI 기능 없이도 앱을 온전히 사용할 수 있습니다.</li><li>당사 서버에 개인 데이터를 저장하지 않으므로 제공·정정·삭제할 프로필이 존재하지 않습니다 — 할당량은 무작위 설치 식별자에만 연결됩니다.</li></ul>`,
      },
      {
        heading: `방침 변경`,
        content: `<p>본 방침은 수시로 업데이트될 수 있습니다. 변경 사항은 시행일을 갱신하여 본 페이지에 게시됩니다.</p>`,
      },
      {
        heading: `문의하기`,
        content: `<p>본 개인정보 처리방침에 관한 문의는 아래로 연락해 주세요:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  zh: {
    title: `隐私政策`,
    effectiveDate: `生效日期：2026年7月12日`,
    intro: `NikiBStudio（"我们"）开发了商业应用<strong>Bookpather</strong>（"本应用"）。本隐私政策说明应用处理哪些数据、数据存储在哪里、哪些内容会离开您的设备——以及哪些永远不会。`,
    sections: [
      {
        heading: `概述`,
        content: `<p>Bookpather 默认保护隐私。本应用无需账户、登录或注册，不含广告，也不含第三方分析或追踪 SDK。您的书库——图书、封面、笔记、阅读状态、摘要和阅读链——保存在您的设备上，并在可用时同步到您的个人 iCloud。可选的 AI 功能仅在您明确同意后，才向我们的服务器发送有限的图书元数据。</p>`,
      },
      {
        heading: `存储在设备和 iCloud 中的数据`,
        content: `<p>本应用在您的设备上本地存储以下数据：</p>
<ul><li><strong>您的书库</strong>——书名、作者、封面、主题、ISBN 和阅读状态。</li><li><strong>附加在图书上的个人笔记。</strong></li><li><strong>您创建并保存的 AI 摘要和阅读链。</strong></li><li><strong>应用偏好设置</strong>及订阅状态缓存。</li></ul>
<p>若 iCloud 可用，这些数据会通过您的个人 iCloud 账户（Apple CloudKit 私有数据库）同步。我们不运营自己的用户数据库，也无法访问您的 iCloud 数据。您可以随时将图书、笔记、摘要和阅读链导出为 JSON，并通过删除应用及其 iCloud 数据来清除全部内容。</p>`,
      },
      {
        heading: `相机与照片`,
        content: `<p>本应用仅在识别图书时使用相机和照片库——通过封面、条形码或书架照片。识别在您的设备上完成。您的照片和相机画面绝不会上传给我们或任何 AI 服务商，识别完成后应用也不会保留它们。</p>`,
      },
      {
        heading: `AI 功能及其发送的内容`,
        content: `<p>AI 图书摘要和 AI 阅读链是可选功能，仅在您明确同意使用 AI 后运行。请求时，应用会向我们的服务器（我们在 Cloudflare 上运营的 AI 代理）发送：</p>
<ul><li>图书元数据：书名、作者，以及（如有）该书的公开简介。</li><li>您的界面语言，以便用该语言撰写回复。</li><li>用于配额管理和防滥用的随机安装标识符及技术请求数据。</li></ul>
<p>我们的服务器将图书元数据转发给 AI 服务商（目前为 DeepSeek）以生成结果。<strong>您的个人笔记、照片、姓名和联系方式绝不会发送给我们或 AI 服务商。</strong>AI 请求不会用于构建您的画像，我们也不会出售或共享这些数据。</p>`,
      },
      {
        heading: `图书搜索（Google Books）`,
        content: `<p>当您按书名、作者或 ISBN 搜索图书时，应用会查询 Google Books API 以获取版本、封面和简介。仅发送搜索词本身。Google 的处理受其隐私政策约束（<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>）。</p>`,
      },
      {
        heading: `订阅与购买`,
        content: `<p>Bookpather Pro 是可选的自动续订订阅。所有交易完全由 Apple 通过 App Store（StoreKit）处理。我们不会收到或存储您的付款信息、Apple ID 或账单信息。为验证订阅，我们的服务器可能校验 App Store 交易签名；其中不包含 Apple 签名交易之外的任何个人或付款信息。Apple 对数据的处理受 Apple 隐私政策约束（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）。</p>`,
      },
      {
        heading: `无广告、无追踪`,
        content: `<p>本应用不含广告，也未集成任何第三方分析、广告、崩溃报告或社交媒体 SDK。我们不使用 Firebase、Google Analytics、Facebook SDK、广告网络等类似服务，也不会跨应用或网站追踪您。</p>`,
      },
      {
        heading: `儿童隐私`,
        content: `<p>本应用不面向儿童，也不会有意收集任何人（包括儿童）的个人信息。AI 功能在任何数据离开设备前都需要明确同意。</p>`,
      },
      {
        heading: `数据安全`,
        content: `<p>您的书库保存在您的设备和个人 iCloud 中，受 Apple 加密保护。与我们的 AI 代理以及 Apple、Google 服务的通信均使用加密的 HTTPS 连接。由于我们不维护用户账户、不在服务器上存储您的书库，我们这一侧不存在可能泄露的个人数据中央数据库。</p>`,
      },
      {
        heading: `您的权利`,
        content: `<p>您的数据由您掌控：</p>
<ul><li>可随时在应用设置中将整个书库导出为 JSON。</li><li>删除应用（以及 iOS 设置中的 iCloud 数据）即可完全移除您的书库。</li><li>您可以随时拒绝或撤回 AI 同意；没有 AI 功能应用依然完全可用。</li><li>由于我们不在服务器上存储个人数据，因此不存在需要提供、更正或删除的个人档案——配额仅与随机安装标识符关联。</li></ul>`,
      },
      {
        heading: `政策变更`,
        content: `<p>我们可能不时更新本隐私政策。任何变更都会在本页面发布并更新生效日期。</p>`,
      },
      {
        heading: `联系我们`,
        content: `<p>如对本隐私政策有任何疑问，请联系：</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  ar: {
    title: `سياسة الخصوصية`,
    effectiveDate: `تاريخ السريان: 12 يوليو 2026`,
    intro: `طوّرت NikiBStudio («نحن») تطبيق <strong>Bookpather</strong> («التطبيق») كتطبيق تجاري. توضح هذه السياسة البيانات التي يعالجها التطبيق، وأين تُخزَّن، وما الذي يغادر جهازك — وما الذي لا يغادره أبداً.`,
    sections: [
      {
        heading: `نظرة عامة`,
        content: `<p>صُمم Bookpather ليكون خاصاً افتراضياً. لا يتطلب التطبيق حساباً أو تسجيل دخول، ولا يحتوي على إعلانات أو أدوات تحليلات وتتبع من أطراف ثالثة. مكتبتك — الكتب والأغلفة والملاحظات وحالات القراءة والملخصات وسلاسل القراءة — تُخزَّن على جهازك، وعند التوفر في iCloud الشخصي الخاص بك. ميزات الذكاء الاصطناعي اختيارية ولا ترسل إلى خادمنا سوى بيانات وصفية محدودة عن الكتب، وفقط بعد موافقتك الصريحة.</p>`,
      },
      {
        heading: `البيانات على جهازك وفي iCloud الخاص بك`,
        content: `<p>يخزّن التطبيق محلياً على جهازك:</p>
<ul><li><strong>مكتبتك</strong> — العناوين والمؤلفون والأغلفة والمواضيع وأرقام ISBN وحالات القراءة.</li><li><strong>الملاحظات الشخصية</strong> المرفقة بالكتب.</li><li><strong>ملخصات الذكاء الاصطناعي وسلاسل القراءة</strong> التي أنشأتها وحفظتها.</li><li><strong>تفضيلات التطبيق</strong> ومؤشر مخزَّن مؤقتاً لحالة الاشتراك.</li></ul>
<p>عند توفر iCloud، تتزامن هذه البيانات عبر حسابك الشخصي في iCloud (قاعدة بيانات Apple CloudKit الخاصة). لا نُشغّل قاعدة بيانات مستخدمين ولا يمكننا الوصول إلى بيانات iCloud الخاصة بك. يمكنك تصدير الكتب والملاحظات والملخصات والسلاسل بصيغة JSON في أي وقت، وحذف كل شيء بإزالة التطبيق وبياناته في iCloud.</p>`,
      },
      {
        heading: `الكاميرا والصور`,
        content: `<p>يستخدم التطبيق الكاميرا ومكتبة الصور فقط للتعرف على الكتب — من الغلاف أو الباركود أو صورة الرف. يتم التعرف على جهازك. لا تُرفع صورك أبداً إلينا أو إلى أي مزود ذكاء اصطناعي، ولا يحتفظ بها التطبيق بعد اكتمال التعرف.</p>`,
      },
      {
        heading: `ميزات الذكاء الاصطناعي وما ترسله`,
        content: `<p>ملخصات الكتب وسلاسل القراءة بالذكاء الاصطناعي ميزات اختيارية لا تعمل إلا بعد موافقتك الصريحة. عند الطلب، يرسل التطبيق إلى خادمنا (وسيط ذكاء اصطناعي نُشغّله على Cloudflare):</p>
<ul><li>البيانات الوصفية للكتاب: العنوان والمؤلف، وعند التوفر وصفاً عاماً للكتاب.</li><li>لغة الواجهة لديك، لتُكتب الإجابة بها.</li><li>معرّف تثبيت عشوائي وبيانات تقنية لإدارة الحصص ومنع إساءة الاستخدام.</li></ul>
<p>يمرر خادمنا البيانات الوصفية للكتاب إلى مزود ذكاء اصطناعي (حالياً DeepSeek) لتوليد النتيجة. <strong>ملاحظاتك الشخصية وصورك واسمك وبيانات الاتصال بك لا تُرسل أبداً إلينا أو إلى مزود الذكاء الاصطناعي.</strong> لا تُستخدم طلبات الذكاء الاصطناعي لبناء ملف عنك، ولا نبيع هذه البيانات أو نشاركها.</p>`,
      },
      {
        heading: `البحث عن الكتب (Google Books)`,
        content: `<p>عند البحث عن كتاب بالعنوان أو المؤلف أو ISBN، يستعلم التطبيق من واجهة Google Books للعثور على الإصدارات والأغلفة والأوصاف. يُرسل استعلام البحث فقط. تخضع معالجة Google لسياسة خصوصية Google (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>).</p>`,
      },
      {
        heading: `الاشتراكات والمشتريات`,
        content: `<p>Bookpather Pro اشتراك اختياري متجدد تلقائياً. تُعالج جميع المعاملات بالكامل بواسطة Apple عبر App Store باستخدام StoreKit. لا نتلقى أو نخزن معلومات الدفع أو Apple ID أو بيانات الفواتير. للتحقق من الاشتراك، قد يتحقق خادمنا من توقيع معاملة App Store؛ ولا يتضمن ذلك أي معلومات شخصية أو دفع تتجاوز ما تدرجه Apple في المعاملة الموقعة. تخضع معالجة Apple لبياناتك لسياسة خصوصية Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `لا إعلانات ولا تتبع`,
        content: `<p>لا يحتوي التطبيق على إعلانات ولا يدمج أي أدوات تحليلات أو إعلانات أو تقارير أعطال أو شبكات تواصل من أطراف ثالثة. لا نستخدم Firebase أو Google Analytics أو Facebook SDK أو شبكات إعلانية، ولا نتتبعك عبر التطبيقات والمواقع.</p>`,
      },
      {
        heading: `خصوصية الأطفال`,
        content: `<p>التطبيق غير موجه للأطفال ولا يجمع عمداً معلومات شخصية من أي شخص، بمن فيهم الأطفال. تتطلب ميزات الذكاء الاصطناعي موافقة صريحة قبل مغادرة أي بيانات للجهاز.</p>`,
      },
      {
        heading: `أمان البيانات`,
        content: `<p>تبقى مكتبتك على جهازك وفي iCloud الشخصي الخاص بك، محمية بتشفير Apple. تستخدم الاتصالات مع وسيطنا وخدمات Apple وGoogle اتصالات HTTPS مشفرة. ولأننا لا نحتفظ بحسابات مستخدمين ولا نخزن مكتبتك على خوادمنا، لا توجد لدينا قاعدة بيانات مركزية لبياناتك الشخصية يمكن اختراقها.</p>`,
      },
      {
        heading: `حقوقك`,
        content: `<p>أنت تتحكم في بياناتك:</p>
<ul><li>يمكن تصدير المكتبة كاملة بصيغة JSON في أي وقت من إعدادات التطبيق.</li><li>حذف التطبيق (وبياناته في iCloud عبر إعدادات iOS) يزيل مكتبتك بالكامل.</li><li>يمكنك رفض موافقة الذكاء الاصطناعي أو سحبها في أي وقت؛ يبقى التطبيق قابلاً للاستخدام بالكامل بدون هذه الميزات.</li><li>بما أننا لا نخزن بيانات شخصية على خوادمنا، لا يوجد ملف شخصي نقدمه أو نصححه أو نحذفه — ترتبط الحصص بمعرّف تثبيت عشوائي فقط.</li></ul>`,
      },
      {
        heading: `تغييرات هذه السياسة`,
        content: `<p>قد نحدّث هذه السياسة من وقت لآخر. ستُنشر التغييرات على هذه الصفحة مع تاريخ سريان محدَّث.</p>`,
      },
      {
        heading: `اتصل بنا`,
        content: `<p>لأي أسئلة حول سياسة الخصوصية هذه، راسلنا على:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  he: {
    title: `מדיניות פרטיות`,
    effectiveDate: `תאריך כניסה לתוקף: 12 ביולי 2026`,
    intro: `NikiBStudio («אנחנו») פיתחה את <strong>Bookpather</strong> («האפליקציה») כאפליקציה מסחרית. מדיניות זו מסבירה אילו נתונים האפליקציה מעבדת, היכן הם נשמרים ומה יוצא מהמכשיר שלכם — ומה לעולם לא.`,
    sections: [
      {
        heading: `סקירה`,
        content: `<p>Bookpather פרטי כברירת מחדל. האפליקציה אינה דורשת חשבון, התחברות או הרשמה; אין בה פרסומות ואין SDK של אנליטיקה או מעקב מצד שלישי. הספרייה שלכם — ספרים, כריכות, הערות, סטטוסי קריאה, תקצירים ושרשראות קריאה — נשמרת במכשיר ובמידת הזמינות ב-iCloud האישי שלכם. תכונות ה-AI אופציונליות ושולחות לשרת שלנו רק מטא-נתונים מוגבלים של ספרים, ורק לאחר הסכמה מפורשת.</p>`,
      },
      {
        heading: `נתונים במכשיר וב-iCloud שלכם`,
        content: `<p>האפליקציה שומרת מקומית במכשיר:</p>
<ul><li><strong>הספרייה שלכם</strong> — כותרים, מחברים, כריכות, נושאים, ISBN וסטטוסי קריאה.</li><li><strong>הערות אישיות</strong> המצורפות לספרים.</li><li><strong>תקצירי AI ושרשראות קריאה</strong> שיצרתם ושמרתם.</li><li><strong>העדפות האפליקציה</strong> ומחוון מטמון של סטטוס המינוי.</li></ul>
<p>אם iCloud זמין, הנתונים מסתנכרנים דרך חשבון ה-iCloud האישי שלכם (מסד נתונים פרטי של Apple CloudKit). איננו מפעילים מסד נתוני משתמשים ואין לנו גישה לנתוני ה-iCloud שלכם. ניתן לייצא ספרים, הערות, תקצירים ושרשראות כ-JSON בכל עת, ולמחוק הכול על ידי הסרת האפליקציה ונתוני ה-iCloud שלה.</p>`,
      },
      {
        heading: `מצלמה ותמונות`,
        content: `<p>האפליקציה משתמשת במצלמה ובספריית התמונות רק לזיהוי ספרים — מכריכה, ברקוד או תמונת מדף. הזיהוי מתבצע במכשיר. התמונות שלכם לעולם אינן מועלות אלינו או לספק AI כלשהו, והאפליקציה אינה שומרת אותן לאחר הזיהוי.</p>`,
      },
      {
        heading: `תכונות AI ומה הן שולחות`,
        content: `<p>תקצירי AI ושרשראות קריאה עם AI הן תכונות אופציונליות הפועלות רק לאחר הסכמה מפורשת. בעת בקשה, האפליקציה שולחת לשרת שלנו (פרוקסי AI שאנו מפעילים ב-Cloudflare):</p>
<ul><li>מטא-נתונים של הספר: כותר, מחבר, ובמידת הזמינות תיאור פומבי של הספר.</li><li>שפת הממשק שלכם, כדי שהתשובה תיכתב בה.</li><li>מזהה התקנה אקראי ונתוני בקשה טכניים לניהול מכסות ומניעת שימוש לרעה.</li></ul>
<p>השרת שלנו מעביר את מטא-הנתונים לספק AI (כיום DeepSeek) ליצירת התוצאה. <strong>ההערות האישיות, התמונות, השם ופרטי הקשר שלכם לעולם אינם נשלחים אלינו או לספק ה-AI.</strong> בקשות AI אינן משמשות לבניית פרופיל עליכם, ואיננו מוכרים או משתפים נתונים אלה.</p>`,
      },
      {
        heading: `חיפוש ספרים (Google Books)`,
        content: `<p>בחיפוש ספר לפי כותר, מחבר או ISBN, האפליקציה שולחת שאילתה ל-Google Books API למציאת מהדורות, כריכות ותיאורים. נשלחת רק שאילתת החיפוש עצמה. עיבוד הנתונים על ידי Google כפוף למדיניות הפרטיות של Google (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>).</p>`,
      },
      {
        heading: `מינויים ורכישות`,
        content: `<p>Bookpather Pro הוא מינוי אופציונלי בחידוש אוטומטי. כל העסקאות מעובדות במלואן על ידי Apple דרך ה-App Store באמצעות StoreKit. איננו מקבלים או שומרים פרטי תשלום, Apple ID או פרטי חיוב. לאימות המינוי, השרת שלנו עשוי לאמת חתימת עסקה של App Store; היא אינה כוללת מידע אישי או פרטי תשלום מעבר למה ש-Apple כוללת בעסקה החתומה. הטיפול של Apple בנתונים כפוף למדיניות הפרטיות של Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `בלי פרסומות, בלי מעקב`,
        content: `<p>האפליקציה אינה מכילה פרסומות ואינה משלבת SDK של אנליטיקה, פרסום, דיווחי קריסה או רשתות חברתיות מצד שלישי. איננו משתמשים ב-Firebase, Google Analytics, Facebook SDK או רשתות פרסום, ואיננו עוקבים אחריכם בין אפליקציות ואתרים.</p>`,
      },
      {
        heading: `פרטיות ילדים`,
        content: `<p>האפליקציה אינה מיועדת לילדים ואינה אוספת ביודעין מידע אישי מאף אחד, כולל ילדים. תכונות ה-AI דורשות הסכמה מפורשת לפני שנתונים כלשהם עוזבים את המכשיר.</p>`,
      },
      {
        heading: `אבטחת מידע`,
        content: `<p>הספרייה שלכם נשארת במכשיר וב-iCloud האישי שלכם, מוגנת בהצפנה של Apple. התקשורת עם פרוקסי ה-AI שלנו ועם שירותי Apple ו-Google מתבצעת בחיבורי HTTPS מוצפנים. מכיוון שאיננו מנהלים חשבונות משתמשים ואיננו שומרים את הספרייה בשרתים שלנו, לא קיים אצלנו מסד נתונים מרכזי של המידע האישי שלכם.</p>`,
      },
      {
        heading: `הזכויות שלכם`,
        content: `<p>הנתונים בשליטתכם:</p>
<ul><li>ניתן לייצא את כל הספרייה כ-JSON בכל עת מהגדרות האפליקציה.</li><li>מחיקת האפליקציה (ונתוני ה-iCloud שלה בהגדרות iOS) מסירה את הספרייה לחלוטין.</li><li>אפשר לסרב להסכמת ה-AI או לבטלה בכל עת; האפליקציה שמישה במלואה גם בלי תכונות ה-AI.</li><li>מאחר שאיננו שומרים מידע אישי בשרתים, אין פרופיל שעלינו למסור, לתקן או למחוק — המכסות קשורות רק למזהה התקנה אקראי.</li></ul>`,
      },
      {
        heading: `שינויים במדיניות זו`,
        content: `<p>ייתכן שנעדכן מדיניות זו מעת לעת. שינויים יפורסמו בעמוד זה עם תאריך תוקף מעודכן.</p>`,
      },
      {
        heading: `צרו קשר`,
        content: `<p>לשאלות על מדיניות פרטיות זו, כתבו לנו:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  hi: {
    title: `गोपनीयता नीति`,
    effectiveDate: `प्रभावी तिथि: 12 जुलाई 2026`,
    intro: `NikiBStudio («हम») ने <strong>Bookpather</strong> («ऐप») को एक वाणिज्यिक एप्लिकेशन के रूप में विकसित किया है। यह नीति बताती है कि ऐप कौन-सा डेटा संभालता है, वह कहाँ संग्रहीत होता है, आपके डिवाइस से क्या बाहर जाता है — और क्या कभी नहीं जाता।`,
    sections: [
      {
        heading: `अवलोकन`,
        content: `<p>Bookpather डिफ़ॉल्ट रूप से निजी है। ऐप को खाते, लॉगिन या पंजीकरण की आवश्यकता नहीं है; इसमें कोई विज्ञापन नहीं है और न ही तृतीय-पक्ष विश्लेषण या ट्रैकिंग SDK। आपकी लाइब्रेरी — किताबें, कवर, नोट्स, पठन स्थितियाँ, सार और रीडिंग चेन — आपके डिवाइस पर और उपलब्ध होने पर आपके निजी iCloud में संग्रहीत होती है। वैकल्पिक AI सुविधाएँ केवल आपकी स्पष्ट सहमति के बाद, सीमित पुस्तक मेटाडेटा ही हमारे सर्वर को भेजती हैं।</p>`,
      },
      {
        heading: `आपके डिवाइस और iCloud में डेटा`,
        content: `<p>ऐप आपके डिवाइस पर स्थानीय रूप से संग्रहीत करता है:</p>
<ul><li><strong>आपकी लाइब्रेरी</strong> — शीर्षक, लेखक, कवर, विषय, ISBN और पठन स्थितियाँ।</li><li><strong>किताबों से जुड़े व्यक्तिगत नोट्स।</strong></li><li><strong>आपके बनाए और सहेजे गए AI सार और रीडिंग चेन।</strong></li><li><strong>ऐप प्राथमिकताएँ</strong> और सदस्यता स्थिति का कैश संकेतक।</li></ul>
<p>iCloud उपलब्ध होने पर यह डेटा आपके निजी iCloud खाते (Apple CloudKit निजी डेटाबेस) से सिंक होता है। हम कोई उपयोगकर्ता डेटाबेस नहीं चलाते और आपके iCloud डेटा तक हमारी पहुँच नहीं है। आप कभी भी किताबें, नोट्स, सार और चेन JSON के रूप में निर्यात कर सकते हैं, और ऐप तथा उसके iCloud डेटा को हटाकर सब कुछ मिटा सकते हैं।</p>`,
      },
      {
        heading: `कैमरा और फ़ोटो`,
        content: `<p>ऐप कैमरे और फ़ोटो लाइब्रेरी का उपयोग केवल किताबें पहचानने के लिए करता है — कवर, बारकोड या शेल्फ़ की फ़ोटो से। पहचान आपके डिवाइस पर होती है। आपकी फ़ोटो कभी भी हमें या किसी AI प्रदाता को अपलोड नहीं की जातीं, और पहचान पूरी होने के बाद ऐप उन्हें संग्रहीत नहीं करता।</p>`,
      },
      {
        heading: `AI सुविधाएँ और वे क्या भेजती हैं`,
        content: `<p>AI पुस्तक सार और AI रीडिंग चेन वैकल्पिक हैं और केवल आपकी स्पष्ट सहमति के बाद चलती हैं। अनुरोध पर, ऐप हमारे सर्वर (Cloudflare पर हमारा AI प्रॉक्सी) को भेजता है:</p>
<ul><li>पुस्तक मेटाडेटा: शीर्षक, लेखक और उपलब्ध होने पर पुस्तक का सार्वजनिक विवरण।</li><li>आपकी इंटरफ़ेस भाषा, ताकि उत्तर उसी में लिखा जाए।</li><li>कोटा प्रबंधन और दुरुपयोग रोकथाम के लिए एक यादृच्छिक इंस्टॉलेशन पहचानकर्ता और तकनीकी अनुरोध डेटा।</li></ul>
<p>हमारा सर्वर पुस्तक मेटाडेटा को AI प्रदाता (वर्तमान में DeepSeek) को भेजता है। <strong>आपके व्यक्तिगत नोट्स, फ़ोटो, नाम और संपर्क विवरण कभी भी हमें या AI प्रदाता को नहीं भेजे जाते।</strong> AI अनुरोधों का उपयोग आपकी प्रोफ़ाइल बनाने के लिए नहीं होता, और हम यह डेटा न बेचते हैं न साझा करते हैं।</p>`,
      },
      {
        heading: `पुस्तक खोज (Google Books)`,
        content: `<p>जब आप शीर्षक, लेखक या ISBN से कोई किताब खोजते हैं, तो ऐप संस्करण, कवर और विवरण खोजने के लिए Google Books API से पूछताछ करता है। केवल खोज क्वेरी ही भेजी जाती है। Google का प्रसंस्करण Google की गोपनीयता नीति (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>) के अधीन है।</p>`,
      },
      {
        heading: `सदस्यताएँ और खरीदारी`,
        content: `<p>Bookpather Pro एक वैकल्पिक स्वतः-नवीनीकृत सदस्यता है। सभी लेन-देन पूरी तरह Apple द्वारा App Store (StoreKit) के माध्यम से संसाधित होते हैं। हम आपकी भुगतान जानकारी, Apple ID या बिलिंग विवरण प्राप्त या संग्रहीत नहीं करते। सदस्यता सत्यापन के लिए हमारा सर्वर App Store लेन-देन हस्ताक्षर की जाँच कर सकता है; इसमें Apple द्वारा हस्ताक्षरित लेन-देन में शामिल जानकारी से अधिक कोई व्यक्तिगत या भुगतान जानकारी नहीं होती। Apple का डेटा प्रबंधन Apple की गोपनीयता नीति (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>) के अधीन है।</p>`,
      },
      {
        heading: `न विज्ञापन, न ट्रैकिंग`,
        content: `<p>ऐप में कोई विज्ञापन नहीं है और इसमें तृतीय-पक्ष विश्लेषण, विज्ञापन, क्रैश-रिपोर्टिंग या सोशल मीडिया SDK एकीकृत नहीं हैं। हम Firebase, Google Analytics, Facebook SDK या विज्ञापन नेटवर्क का उपयोग नहीं करते, और ऐप्स व वेबसाइटों में आपको ट्रैक नहीं करते।</p>`,
      },
      {
        heading: `बच्चों की गोपनीयता`,
        content: `<p>ऐप बच्चों के लिए नहीं है और जानबूझकर किसी से भी — बच्चों सहित — व्यक्तिगत जानकारी एकत्र नहीं करता। AI सुविधाओं के लिए, कोई भी डेटा डिवाइस से बाहर जाने से पहले स्पष्ट सहमति आवश्यक है।</p>`,
      },
      {
        heading: `डेटा सुरक्षा`,
        content: `<p>आपकी लाइब्रेरी आपके डिवाइस और निजी iCloud में Apple के एन्क्रिप्शन से सुरक्षित रहती है। हमारे AI प्रॉक्सी तथा Apple और Google सेवाओं के साथ संचार एन्क्रिप्टेड HTTPS कनेक्शन से होता है। चूँकि हम उपयोगकर्ता खाते नहीं रखते और आपकी लाइब्रेरी अपने सर्वरों पर संग्रहीत नहीं करते, हमारी ओर आपके व्यक्तिगत डेटा का कोई केंद्रीय डेटाबेस मौजूद नहीं है।</p>`,
      },
      {
        heading: `आपके अधिकार`,
        content: `<p>आपका डेटा आपके नियंत्रण में है:</p>
<ul><li>पूरी लाइब्रेरी ऐप सेटिंग्स से कभी भी JSON के रूप में निर्यात की जा सकती है।</li><li>ऐप (और iOS सेटिंग्स में उसका iCloud डेटा) हटाने से आपकी लाइब्रेरी पूरी तरह मिट जाती है।</li><li>आप AI सहमति कभी भी अस्वीकार या वापस ले सकते हैं; AI सुविधाओं के बिना भी ऐप पूरी तरह उपयोगी है।</li><li>चूँकि हम सर्वरों पर व्यक्तिगत डेटा संग्रहीत नहीं करते, हमारे पास देने, सुधारने या हटाने के लिए कोई प्रोफ़ाइल नहीं है — कोटा केवल एक यादृच्छिक इंस्टॉलेशन पहचानकर्ता से जुड़े हैं।</li></ul>`,
      },
      {
        heading: `इस नीति में परिवर्तन`,
        content: `<p>हम समय-समय पर इस नीति को अद्यतन कर सकते हैं। परिवर्तन इस पृष्ठ पर अद्यतन प्रभावी तिथि के साथ प्रकाशित होंगे।</p>`,
      },
      {
        heading: `संपर्क करें`,
        content: `<p>इस गोपनीयता नीति के बारे में किसी भी प्रश्न के लिए हमें लिखें:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
}
