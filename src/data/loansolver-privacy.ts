import type { PrivacySection, PrivacyPolicy } from './tarotaper-privacy'

export type { PrivacySection, PrivacyPolicy }

export const loansolverPrivacy: Record<string, PrivacyPolicy> = {
  en: {
    title: `Privacy Policy`,
    effectiveDate: `Effective Date: September 9, 2026`,
    intro: `Bogdan Nikishin, an independent developer ("we", "our", or "us"), built <strong>LoanSolver</strong> ("the App") as a commercial application. This Privacy Policy explains how we handle information when you use our App.`,
    sections: [
      {
        heading: `Overview`,
        content: `<p>LoanSolver is designed with your privacy in mind. We do not collect, store, or share any personal information. The App does not require account creation, login, or any form of user registration; it contains no advertising and no analytics, and it is a one-time purchase with no in-app purchases or subscriptions. Everything you enter — loans, payments, and settings — stays on your device and, if iCloud is enabled, in your personal iCloud. LoanSolver does not connect to banks or any other financial institution: it only works with the numbers you type in, and it does not provide financial advice.</p>`,
      },
      {
        heading: `Information We Do Not Collect`,
        content: `<p>We do not collect any of the following:</p>
<ul><li>Names, email addresses, or contact information</li><li>Location data</li><li>Device identifiers or advertising IDs</li><li>Browsing or search history</li><li>Contacts, photos, or other personal files</li><li>Bank account details, card numbers, or credit history — the App never asks for them</li><li>The loan and payment figures you enter — they never leave your device and your personal iCloud</li><li>Usage analytics or behavioral tracking data</li></ul>`,
      },
      {
        heading: `Data Stored on Your Device and in Your iCloud`,
        content: `<p>The App stores the data you enter on your device to provide its core functionality:</p>
<ul><li><strong>Loans</strong> — name, type, currency, balance, monthly payment, interest rate or remaining term, payment day, and start date.</li><li><strong>Payments</strong> — the scheduled and extra payments you record, with their dates and amounts.</li><li><strong>Achievements</strong> — the dates on which milestones were unlocked.</li><li><strong>App preferences</strong> — reminder settings, default currency, tips, and the app-lock switch. These stay on the device and are not synced.</li></ul>
<p>If iCloud is enabled on your device, loans, payments, and achievements sync through your personal iCloud account (Apple CloudKit private database) so they are available on your other iPhones. We do not operate any servers and have no access to your iCloud data: the sync is performed by iOS and protected by your Apple ID. You can delete your data at any time by deleting loans in the App or uninstalling the App, and remove the iCloud copy in iOS Settings → your name → iCloud → Manage Account Storage. Apple's handling of your iCloud data is governed by Apple's Privacy Policy (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Notifications`,
        content: `<p>The App may ask for permission to send local notifications: a reminder a few days before a payment is due, a reminder on the due day, an alert if a payment is overdue, and an optional note when you unlock an achievement. These are scheduled entirely on your device and do not use any external push service. Each type can be turned off in the App's settings, and all of them in your device Settings.</p>`,
      },
      {
        heading: `Face ID and Touch ID`,
        content: `<p>You can optionally lock the App with Face ID or Touch ID; the lock is off by default. Authentication is performed entirely by iOS through Apple's LocalAuthentication framework, with your device passcode as a fallback. The App only receives a "success" or "failure" result and never sees, stores, or transmits any biometric data.</p>`,
      },
      {
        heading: `Purchase`,
        content: `<p>LoanSolver is a one-time purchase with no in-app purchases and no subscriptions. The purchase is processed entirely by Apple through the App Store. We do not have access to your payment information, Apple ID, or billing details.</p>`,
      },
      {
        heading: `No Third-Party Services`,
        content: `<p>The App does not integrate any third-party analytics, advertising, crash reporting, or social media SDKs. We do not use Firebase, Google Analytics, Facebook SDK, ad networks, or any similar services. The App makes no network requests of its own — the only network communication is iCloud sync performed by iOS, and only if iCloud is enabled on your device.</p>`,
      },
      {
        heading: `Children's Privacy`,
        content: `<p>The App does not knowingly collect any personal information from anyone, including children. Since the App does not collect personal information from any user, no special provisions are necessary.</p>`,
      },
      {
        heading: `Data Security`,
        content: `<p>Your data remains on your device, protected by iOS data protection, and in your personal iCloud, where Apple encrypts it in transit and at rest. The optional Face ID / Touch ID lock hides your balances and payments from anyone who picks up your phone. Since we do not collect or store any personal data on servers, there is no risk of a data breach affecting your personal information on our side.</p>`,
      },
      {
        heading: `Your Rights`,
        content: `<p>You have the following rights regarding your data:</p>
<ul><li>You can view and edit everything the App stores directly in the App.</li><li>Deleting a loan removes it together with its payments; uninstalling the App removes all local data.</li><li>You can turn iCloud off for LoanSolver in your device Settings so that data stays only on the device, and delete the iCloud copy from iCloud storage management.</li><li>Since we do not collect or store personal data on our servers, there is no personal data for us to provide, modify, or delete.</li></ul>
<p>If you have any questions about your data, please contact us.</p>`,
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
    effectiveDate: `Дата вступления в силу: 9 сентября 2026 г.`,
    intro: `Богдан Никишин, независимый разработчик («мы», «наш» или «нас»), разработал приложение <strong>LoanSolver</strong> («Приложение») как коммерческий продукт. Настоящая Политика конфиденциальности описывает, как мы обращаемся с информацией при использовании вами нашего Приложения.`,
    sections: [
      {
        heading: `Обзор`,
        content: `<p>Приложение LoanSolver разработано с заботой о вашей конфиденциальности. Мы не собираем, не храним и не передаём никакие персональные данные. Приложение не требует создания аккаунта, входа в систему или какой-либо регистрации, не содержит рекламы и аналитики и продаётся разовой покупкой без встроенных покупок и подписок. Всё, что вы вводите — кредиты, платежи и настройки, — остаётся на вашем устройстве и, если включён iCloud, в вашем личном iCloud. LoanSolver не подключается к банкам и другим финансовым организациям: он работает только с числами, которые вы вводите сами, и не даёт финансовых рекомендаций.</p>`,
      },
      {
        heading: `Информация, которую мы не собираем`,
        content: `<p>Мы не собираем следующие данные:</p>
<ul><li>Имена, адреса электронной почты или контактную информацию</li><li>Данные о местоположении</li><li>Идентификаторы устройств или рекламные идентификаторы</li><li>Историю просмотров или поиска</li><li>Контакты, фотографии или другие личные файлы</li><li>Реквизиты банковских счетов, номера карт или кредитную историю — Приложение никогда их не запрашивает</li><li>Введённые вами суммы кредитов и платежей — они не покидают ваше устройство и ваш личный iCloud</li><li>Аналитику использования или данные поведенческого отслеживания</li></ul>`,
      },
      {
        heading: `Данные на вашем устройстве и в вашем iCloud`,
        content: `<p>Приложение сохраняет введённые вами данные на устройстве для обеспечения основных функций:</p>
<ul><li><strong>Кредиты</strong> — название, тип, валюта, остаток, ежемесячный платёж, ставка или оставшийся срок, день платежа и дата начала.</li><li><strong>Платежи</strong> — плановые и досрочные платежи, которые вы отмечаете, с датами и суммами.</li><li><strong>Достижения</strong> — даты, когда были открыты достижения.</li><li><strong>Настройки приложения</strong> — параметры напоминаний, валюта по умолчанию, подсказки и переключатель блокировки. Они остаются на устройстве и не синхронизируются.</li></ul>
<p>Если на устройстве включён iCloud, кредиты, платежи и достижения синхронизируются через ваш личный аккаунт iCloud (приватная база Apple CloudKit) и появляются на других ваших iPhone. У нас нет собственных серверов и нет доступа к вашим данным в iCloud: синхронизацию выполняет iOS, а данные защищены вашим Apple ID. Вы можете в любой момент удалить данные, удалив кредиты в Приложении или само Приложение, а копию в iCloud — в Настройках iOS → ваше имя → iCloud → Управление хранилищем. Обработка данных iCloud регулируется политикой конфиденциальности Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Уведомления`,
        content: `<p>Приложение может запросить разрешение на локальные уведомления: напоминание за несколько дней до платежа, напоминание в день платежа, оповещение о просрочке и необязательное сообщение об открытом достижении. Они планируются полностью на вашем устройстве и не используют внешние push-сервисы. Каждый тип можно отключить в настройках Приложения, а все сразу — в настройках устройства.</p>`,
      },
      {
        heading: `Face ID и Touch ID`,
        content: `<p>По желанию Приложение можно заблокировать с помощью Face ID или Touch ID; по умолчанию блокировка выключена. Аутентификацию полностью выполняет iOS через фреймворк Apple LocalAuthentication, с код-паролем устройства в качестве запасного варианта. Приложение получает только результат «успешно» или «неуспешно» и никогда не видит, не хранит и не передаёт биометрические данные.</p>`,
      },
      {
        heading: `Покупка`,
        content: `<p>LoanSolver — разовая покупка без встроенных покупок и подписок. Покупка полностью обрабатывается Apple через App Store. У нас нет доступа к вашей платёжной информации, Apple ID или платёжным реквизитам.</p>`,
      },
      {
        heading: `Без сторонних сервисов`,
        content: `<p>Приложение не использует сторонние SDK аналитики, рекламы, отчётов о сбоях или социальных сетей. Мы не используем Firebase, Google Analytics, Facebook SDK, рекламные сети и подобные сервисы. Приложение не выполняет собственных сетевых запросов — единственное сетевое взаимодействие это синхронизация iCloud, которую выполняет iOS, и только если iCloud включён на вашем устройстве.</p>`,
      },
      {
        heading: `Конфиденциальность детей`,
        content: `<p>Приложение сознательно не собирает персональные данные ни у кого, включая детей. Поскольку Приложение не собирает персональные данные ни у одного пользователя, специальные положения не требуются.</p>`,
      },
      {
        heading: `Безопасность данных`,
        content: `<p>Ваши данные остаются на устройстве под защитой механизмов iOS и в вашем личном iCloud, где Apple шифрует их при передаче и хранении. Необязательная блокировка Face ID / Touch ID скрывает остатки и платежи от любого, кто возьмёт ваш телефон. Поскольку мы не собираем и не храним персональные данные на серверах, утечка данных с нашей стороны, затрагивающая вашу личную информацию, невозможна.</p>`,
      },
      {
        heading: `Ваши права`,
        content: `<p>В отношении своих данных вы имеете следующие права:</p>
<ul><li>Всё, что хранит Приложение, можно просмотреть и изменить прямо в нём.</li><li>Удаление кредита удаляет его вместе с платежами; удаление Приложения удаляет все локальные данные.</li><li>Вы можете отключить iCloud для LoanSolver в настройках устройства, чтобы данные оставались только на нём, и удалить копию из iCloud в управлении хранилищем.</li><li>Поскольку мы не собираем и не храним персональные данные на серверах, у нас нет персональных данных, которые нужно предоставлять, изменять или удалять.</li></ul>
<p>Если у вас есть вопросы о ваших данных, свяжитесь с нами.</p>`,
      },
      {
        heading: `Изменения политики`,
        content: `<p>Мы можем время от времени обновлять настоящую Политику конфиденциальности. Изменения будут отражены на этой странице с обновлённой датой вступления в силу. Рекомендуем периодически просматривать эту политику.</p>`,
      },
      {
        heading: `Связаться с нами`,
        content: `<p>Если у вас есть вопросы по настоящей Политике конфиденциальности, свяжитесь с нами:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  de: {
    title: `Datenschutzerklärung`,
    effectiveDate: `Gültig ab: 9. September 2026`,
    intro: `Bogdan Nikishin, ein unabhängiger Entwickler („wir", „unser" oder „uns"), hat <strong>LoanSolver</strong> („die App") als kommerzielle Anwendung entwickelt. Diese Datenschutzerklärung erläutert, wie wir mit Informationen umgehen, wenn Sie unsere App nutzen.`,
    sections: [
      {
        heading: `Überblick`,
        content: `<p>LoanSolver wurde mit Blick auf Ihre Privatsphäre entwickelt. Wir erheben, speichern und teilen keinerlei personenbezogene Daten. Die App erfordert keine Kontoerstellung, keine Anmeldung und keinerlei Registrierung, enthält weder Werbung noch Analysen und ist ein einmaliger Kauf ohne In-App-Käufe oder Abonnements. Alles, was Sie eingeben — Kredite, Zahlungen und Einstellungen — bleibt auf Ihrem Gerät und, falls iCloud aktiviert ist, in Ihrer persönlichen iCloud. LoanSolver verbindet sich nicht mit Banken oder anderen Finanzinstituten: Die App arbeitet nur mit den Zahlen, die Sie selbst eingeben, und gibt keine Finanzberatung.</p>`,
      },
      {
        heading: `Daten, die wir nicht erheben`,
        content: `<p>Wir erheben keine der folgenden Daten:</p>
<ul><li>Namen, E-Mail-Adressen oder Kontaktdaten</li><li>Standortdaten</li><li>Gerätekennungen oder Werbe-IDs</li><li>Browser- oder Suchverlauf</li><li>Kontakte, Fotos oder andere persönliche Dateien</li><li>Bankverbindungen, Kartennummern oder Kredithistorie — die App fragt nie danach</li><li>Die von Ihnen eingegebenen Kredit- und Zahlungsbeträge — sie verlassen Ihr Gerät und Ihre persönliche iCloud nie</li><li>Nutzungsanalysen oder Tracking-Daten</li></ul>`,
      },
      {
        heading: `Daten auf Ihrem Gerät und in Ihrer iCloud`,
        content: `<p>Die App speichert die von Ihnen eingegebenen Daten auf Ihrem Gerät, um ihre Kernfunktionen bereitzustellen:</p>
<ul><li><strong>Kredite</strong> — Name, Art, Währung, Restschuld, Monatsrate, Zinssatz oder Restlaufzeit, Zahltag und Startdatum.</li><li><strong>Zahlungen</strong> — die von Ihnen erfassten planmäßigen Raten und Sondertilgungen mit Datum und Betrag.</li><li><strong>Erfolge</strong> — die Daten, an denen Meilensteine freigeschaltet wurden.</li><li><strong>App-Einstellungen</strong> — Erinnerungen, Standardwährung, Tipps und der Schalter der App-Sperre. Diese bleiben auf dem Gerät und werden nicht synchronisiert.</li></ul>
<p>Wenn iCloud auf Ihrem Gerät aktiviert ist, synchronisieren sich Kredite, Zahlungen und Erfolge über Ihr persönliches iCloud-Konto (private Apple-CloudKit-Datenbank), sodass sie auf Ihren anderen iPhones verfügbar sind. Wir betreiben keine Server und haben keinen Zugriff auf Ihre iCloud-Daten: Die Synchronisierung übernimmt iOS, geschützt durch Ihre Apple-ID. Sie können Ihre Daten jederzeit löschen, indem Sie Kredite in der App löschen oder die App deinstallieren, und die iCloud-Kopie unter iOS-Einstellungen → Ihr Name → iCloud → Accountspeicher verwalten entfernen. Apples Umgang mit Ihren iCloud-Daten unterliegt der Datenschutzrichtlinie von Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Mitteilungen`,
        content: `<p>Die App kann um Erlaubnis für lokale Mitteilungen bitten: eine Erinnerung einige Tage vor der Fälligkeit, eine Erinnerung am Fälligkeitstag, einen Hinweis bei Zahlungsverzug und eine optionale Nachricht, wenn Sie einen Erfolg freischalten. Diese werden vollständig auf Ihrem Gerät geplant und nutzen keinen externen Push-Dienst. Jede Art lässt sich in den App-Einstellungen abschalten, alle zusammen in den Geräteeinstellungen.</p>`,
      },
      {
        heading: `Face ID und Touch ID`,
        content: `<p>Sie können die App optional mit Face ID oder Touch ID sperren; die Sperre ist standardmäßig aus. Die Authentifizierung führt vollständig iOS über Apples LocalAuthentication-Framework durch, mit dem Gerätecode als Fallback. Die App erhält nur das Ergebnis „erfolgreich" oder „fehlgeschlagen" und sieht, speichert oder überträgt niemals biometrische Daten.</p>`,
      },
      {
        heading: `Kauf`,
        content: `<p>LoanSolver ist ein einmaliger Kauf ohne In-App-Käufe und ohne Abonnements. Der Kauf wird vollständig von Apple über den App Store abgewickelt. Wir haben keinen Zugriff auf Ihre Zahlungsinformationen, Ihre Apple-ID oder Abrechnungsdaten.</p>`,
      },
      {
        heading: `Keine Drittanbieterdienste`,
        content: `<p>Die App integriert keine Analyse-, Werbe-, Crash-Reporting- oder Social-Media-SDKs von Drittanbietern. Wir verwenden weder Firebase noch Google Analytics, Facebook SDK, Werbenetzwerke oder ähnliche Dienste. Die App stellt keine eigenen Netzwerkanfragen — die einzige Netzwerkkommunikation ist die von iOS durchgeführte iCloud-Synchronisierung, und nur wenn iCloud auf Ihrem Gerät aktiviert ist.</p>`,
      },
      {
        heading: `Datenschutz von Kindern`,
        content: `<p>Die App erhebt wissentlich keine personenbezogenen Daten von niemandem, auch nicht von Kindern. Da die App von keinem Nutzer personenbezogene Daten erhebt, sind keine besonderen Bestimmungen erforderlich.</p>`,
      },
      {
        heading: `Datensicherheit`,
        content: `<p>Ihre Daten verbleiben auf Ihrem Gerät, geschützt durch den iOS-Datenschutz, und in Ihrer persönlichen iCloud, wo Apple sie bei der Übertragung und Speicherung verschlüsselt. Die optionale Face-ID-/Touch-ID-Sperre verbirgt Ihre Salden und Zahlungen vor jedem, der Ihr Telefon in die Hand nimmt. Da wir keine personenbezogenen Daten auf Servern erheben oder speichern, besteht unsererseits kein Risiko einer Datenpanne.</p>`,
      },
      {
        heading: `Ihre Rechte`,
        content: `<p>Sie haben folgende Rechte bezüglich Ihrer Daten:</p>
<ul><li>Alles, was die App speichert, können Sie direkt in der App einsehen und bearbeiten.</li><li>Das Löschen eines Kredits entfernt ihn samt Zahlungen; die Deinstallation der App entfernt alle lokalen Daten.</li><li>Sie können iCloud für LoanSolver in den Geräteeinstellungen abschalten, damit Daten nur auf dem Gerät bleiben, und die iCloud-Kopie in der Speicherverwaltung löschen.</li><li>Da wir keine personenbezogenen Daten auf unseren Servern speichern, gibt es keine Daten, die wir bereitstellen, ändern oder löschen könnten.</li></ul>
<p>Bei Fragen zu Ihren Daten kontaktieren Sie uns bitte.</p>`,
      },
      {
        heading: `Änderungen dieser Erklärung`,
        content: `<p>Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit aktualisiertem Gültigkeitsdatum veröffentlicht. Wir empfehlen, diese Erklärung regelmäßig zu prüfen.</p>`,
      },
      {
        heading: `Kontakt`,
        content: `<p>Bei Fragen zu dieser Datenschutzerklärung erreichen Sie uns unter:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  fr: {
    title: `Politique de confidentialité`,
    effectiveDate: `Date d'entrée en vigueur : 9 septembre 2026`,
    intro: `Bogdan Nikishin, développeur indépendant (« nous », « notre » ou « nos »), a développé <strong>LoanSolver</strong> (« l'Application ») en tant qu'application commerciale. Cette politique de confidentialité explique comment nous traitons les informations lorsque vous utilisez notre Application.`,
    sections: [
      {
        heading: `Aperçu`,
        content: `<p>LoanSolver est conçue dans le respect de votre vie privée. Nous ne collectons, ne stockons et ne partageons aucune information personnelle. L'Application ne nécessite ni création de compte, ni connexion, ni aucune forme d'inscription ; elle ne contient ni publicité ni outils d'analyse, et il s'agit d'un achat unique sans achats intégrés ni abonnements. Tout ce que vous saisissez — prêts, paiements et réglages — reste sur votre appareil et, si iCloud est activé, dans votre iCloud personnel. LoanSolver ne se connecte à aucune banque ni institution financière : elle ne travaille qu'avec les chiffres que vous saisissez et ne fournit aucun conseil financier.</p>`,
      },
      {
        heading: `Informations que nous ne collectons pas`,
        content: `<p>Nous ne collectons aucune des données suivantes :</p>
<ul><li>Noms, adresses e-mail ou coordonnées</li><li>Données de localisation</li><li>Identifiants d'appareil ou identifiants publicitaires</li><li>Historique de navigation ou de recherche</li><li>Contacts, photos ou autres fichiers personnels</li><li>Coordonnées bancaires, numéros de carte ou historique de crédit — l'Application ne les demande jamais</li><li>Les montants de prêts et de paiements que vous saisissez — ils ne quittent jamais votre appareil ni votre iCloud personnel</li><li>Analyses d'utilisation ou données de suivi comportemental</li></ul>`,
      },
      {
        heading: `Données sur votre appareil et dans votre iCloud`,
        content: `<p>L'Application stocke les données que vous saisissez sur votre appareil pour assurer ses fonctionnalités principales :</p>
<ul><li><strong>Prêts</strong> — nom, type, devise, solde, mensualité, taux d'intérêt ou durée restante, jour de paiement et date de début.</li><li><strong>Paiements</strong> — les mensualités et remboursements anticipés que vous enregistrez, avec leurs dates et montants.</li><li><strong>Succès</strong> — les dates auxquelles des étapes ont été débloquées.</li><li><strong>Préférences</strong> — réglages des rappels, devise par défaut, astuces et interrupteur de verrouillage. Elles restent sur l'appareil et ne sont pas synchronisées.</li></ul>
<p>Si iCloud est activé sur votre appareil, les prêts, paiements et succès se synchronisent via votre compte iCloud personnel (base privée Apple CloudKit) et sont disponibles sur vos autres iPhone. Nous n'exploitons aucun serveur et n'avons pas accès à vos données iCloud : la synchronisation est effectuée par iOS et protégée par votre identifiant Apple. Vous pouvez supprimer vos données à tout moment en supprimant des prêts dans l'Application ou en désinstallant l'Application, et retirer la copie iCloud dans Réglages iOS → votre nom → iCloud → Gérer le stockage du compte. Le traitement de vos données iCloud par Apple est régi par la politique de confidentialité d'Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Notifications`,
        content: `<p>L'Application peut demander l'autorisation d'envoyer des notifications locales : un rappel quelques jours avant l'échéance, un rappel le jour même, une alerte en cas de retard de paiement et un message facultatif lorsque vous débloquez un succès. Elles sont programmées entièrement sur votre appareil et n'utilisent aucun service push externe. Chaque type peut être désactivé dans les réglages de l'Application, et tous dans les Réglages de votre appareil.</p>`,
      },
      {
        heading: `Face ID et Touch ID`,
        content: `<p>Vous pouvez verrouiller l'Application avec Face ID ou Touch ID ; le verrouillage est désactivé par défaut. L'authentification est entièrement effectuée par iOS via le framework LocalAuthentication d'Apple, avec le code de l'appareil en secours. L'Application ne reçoit qu'un résultat « réussite » ou « échec » et ne voit, ne stocke ni ne transmet jamais de données biométriques.</p>`,
      },
      {
        heading: `Achat`,
        content: `<p>LoanSolver est un achat unique, sans achats intégrés ni abonnements. L'achat est traité entièrement par Apple via l'App Store. Nous n'avons pas accès à vos informations de paiement, à votre identifiant Apple ni à vos données de facturation.</p>`,
      },
      {
        heading: `Aucun service tiers`,
        content: `<p>L'Application n'intègre aucun SDK tiers d'analyse, de publicité, de rapport de plantage ou de réseaux sociaux. Nous n'utilisons ni Firebase, ni Google Analytics, ni le SDK Facebook, ni des régies publicitaires, ni aucun service similaire. L'Application n'émet aucune requête réseau propre — la seule communication réseau est la synchronisation iCloud effectuée par iOS, et uniquement si iCloud est activé sur votre appareil.</p>`,
      },
      {
        heading: `Confidentialité des enfants`,
        content: `<p>L'Application ne collecte sciemment aucune information personnelle auprès de quiconque, y compris les enfants. Puisqu'elle ne collecte de données personnelles d'aucun utilisateur, aucune disposition particulière n'est nécessaire.</p>`,
      },
      {
        heading: `Sécurité des données`,
        content: `<p>Vos données restent sur votre appareil, protégées par la protection des données d'iOS, et dans votre iCloud personnel, où Apple les chiffre en transit et au repos. Le verrouillage facultatif Face ID / Touch ID cache vos soldes et paiements à quiconque prend votre téléphone. Comme nous ne collectons ni ne stockons aucune donnée personnelle sur des serveurs, aucune fuite de données ne peut affecter vos informations personnelles de notre côté.</p>`,
      },
      {
        heading: `Vos droits`,
        content: `<p>Vous disposez des droits suivants concernant vos données :</p>
<ul><li>Vous pouvez consulter et modifier tout ce que l'Application stocke, directement dans l'Application.</li><li>Supprimer un prêt le retire avec ses paiements ; désinstaller l'Application supprime toutes les données locales.</li><li>Vous pouvez désactiver iCloud pour LoanSolver dans les Réglages de votre appareil afin que les données restent uniquement sur l'appareil, et supprimer la copie iCloud depuis la gestion du stockage iCloud.</li><li>Comme nous ne stockons aucune donnée personnelle sur nos serveurs, il n'existe aucune donnée à fournir, modifier ou supprimer.</li></ul>
<p>Pour toute question sur vos données, contactez-nous.</p>`,
      },
      {
        heading: `Modifications de cette politique`,
        content: `<p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Les modifications seront publiées sur cette page avec une date d'entrée en vigueur actualisée. Nous vous invitons à la consulter régulièrement.</p>`,
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
    effectiveDate: `Fecha de entrada en vigor: 9 de septiembre de 2026`,
    intro: `Bogdan Nikishin, desarrollador independiente («nosotros» o «nuestro»), desarrolló <strong>LoanSolver</strong> («la App») como aplicación comercial. Esta Política de privacidad explica cómo tratamos la información cuando usas nuestra App.`,
    sections: [
      {
        heading: `Resumen`,
        content: `<p>LoanSolver está diseñada pensando en tu privacidad. No recopilamos, almacenamos ni compartimos información personal. La App no requiere crear una cuenta, iniciar sesión ni ningún tipo de registro; no contiene publicidad ni analíticas, y es una compra única sin compras dentro de la app ni suscripciones. Todo lo que introduces — préstamos, pagos y ajustes — permanece en tu dispositivo y, si iCloud está activado, en tu iCloud personal. LoanSolver no se conecta a bancos ni a ninguna otra entidad financiera: solo trabaja con las cifras que tú escribes y no ofrece asesoramiento financiero.</p>`,
      },
      {
        heading: `Información que no recopilamos`,
        content: `<p>No recopilamos nada de lo siguiente:</p>
<ul><li>Nombres, correos electrónicos o datos de contacto</li><li>Datos de ubicación</li><li>Identificadores del dispositivo o publicitarios</li><li>Historial de navegación o búsqueda</li><li>Contactos, fotos u otros archivos personales</li><li>Datos bancarios, números de tarjeta o historial crediticio — la App nunca los pide</li><li>Las cifras de préstamos y pagos que introduces — nunca salen de tu dispositivo ni de tu iCloud personal</li><li>Analíticas de uso o datos de seguimiento</li></ul>`,
      },
      {
        heading: `Datos en tu dispositivo y en tu iCloud`,
        content: `<p>La App guarda en tu dispositivo los datos que introduces para ofrecer sus funciones principales:</p>
<ul><li><strong>Préstamos</strong> — nombre, tipo, moneda, saldo, cuota mensual, tasa de interés o plazo restante, día de pago y fecha de inicio.</li><li><strong>Pagos</strong> — las cuotas y pagos anticipados que registras, con sus fechas e importes.</li><li><strong>Logros</strong> — las fechas en que se desbloquearon los hitos.</li><li><strong>Preferencias</strong> — ajustes de recordatorios, moneda por defecto, consejos y el interruptor de bloqueo. Se quedan en el dispositivo y no se sincronizan.</li></ul>
<p>Si iCloud está activado en tu dispositivo, los préstamos, pagos y logros se sincronizan mediante tu cuenta personal de iCloud (base de datos privada de Apple CloudKit) para que estén disponibles en tus otros iPhone. No operamos ningún servidor ni tenemos acceso a tus datos de iCloud: la sincronización la realiza iOS y está protegida por tu Apple ID. Puedes borrar tus datos en cualquier momento eliminando préstamos en la App o desinstalando la App, y quitar la copia de iCloud en Ajustes de iOS → tu nombre → iCloud → Gestionar almacenamiento de la cuenta. El tratamiento de tus datos de iCloud por parte de Apple se rige por su política de privacidad (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Notificaciones`,
        content: `<p>La App puede pedir permiso para enviar notificaciones locales: un recordatorio unos días antes del vencimiento, un recordatorio el mismo día, un aviso si un pago se retrasa y una nota opcional cuando desbloqueas un logro. Se programan íntegramente en tu dispositivo y no usan ningún servicio push externo. Cada tipo puede desactivarse en los ajustes de la App, y todos ellos en los Ajustes de tu dispositivo.</p>`,
      },
      {
        heading: `Face ID y Touch ID`,
        content: `<p>Puedes bloquear la App con Face ID o Touch ID de forma opcional; el bloqueo está desactivado por defecto. La autenticación la realiza íntegramente iOS mediante el framework LocalAuthentication de Apple, con el código del dispositivo como alternativa. La App solo recibe un resultado de «éxito» o «fallo» y nunca ve, guarda ni transmite datos biométricos.</p>`,
      },
      {
        heading: `Compra`,
        content: `<p>LoanSolver es una compra única, sin compras dentro de la app ni suscripciones. La compra la procesa íntegramente Apple a través del App Store. No tenemos acceso a tu información de pago, Apple ID ni datos de facturación.</p>`,
      },
      {
        heading: `Sin servicios de terceros`,
        content: `<p>La App no integra SDK de analítica, publicidad, informes de fallos ni redes sociales de terceros. No usamos Firebase, Google Analytics, Facebook SDK, redes publicitarias ni servicios similares. La App no realiza solicitudes de red propias: la única comunicación de red es la sincronización de iCloud que realiza iOS, y solo si iCloud está activado en tu dispositivo.</p>`,
      },
      {
        heading: `Privacidad de los menores`,
        content: `<p>La App no recopila deliberadamente información personal de nadie, incluidos los menores. Dado que la App no recopila información personal de ningún usuario, no se requieren disposiciones especiales.</p>`,
      },
      {
        heading: `Seguridad de los datos`,
        content: `<p>Tus datos permanecen en tu dispositivo, protegidos por la protección de datos de iOS, y en tu iCloud personal, donde Apple los cifra en tránsito y en reposo. El bloqueo opcional con Face ID / Touch ID oculta tus saldos y pagos a cualquiera que coja tu teléfono. Como no recopilamos ni almacenamos datos personales en servidores, no existe riesgo de que una filtración por nuestra parte afecte tu información personal.</p>`,
      },
      {
        heading: `Tus derechos`,
        content: `<p>Tienes los siguientes derechos sobre tus datos:</p>
<ul><li>Puedes ver y editar todo lo que la App guarda directamente en la App.</li><li>Eliminar un préstamo lo borra junto con sus pagos; desinstalar la App elimina todos los datos locales.</li><li>Puedes desactivar iCloud para LoanSolver en los Ajustes de tu dispositivo para que los datos se queden solo en él, y borrar la copia de iCloud desde la gestión del almacenamiento de iCloud.</li><li>Como no almacenamos datos personales en nuestros servidores, no hay datos que proporcionar, modificar o eliminar.</li></ul>
<p>Si tienes preguntas sobre tus datos, contáctanos.</p>`,
      },
      {
        heading: `Cambios en esta política`,
        content: `<p>Podemos actualizar esta Política de privacidad ocasionalmente. Los cambios se reflejarán en esta página con una fecha de entrada en vigor actualizada. Te recomendamos revisarla periódicamente.</p>`,
      },
      {
        heading: `Contacto`,
        content: `<p>Si tienes preguntas sobre esta Política de privacidad, escríbenos a:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  it: {
    title: `Informativa sulla privacy`,
    effectiveDate: `Data di entrata in vigore: 9 settembre 2026`,
    intro: `Bogdan Nikishin, sviluppatore indipendente («noi» o «nostro»), ha sviluppato <strong>LoanSolver</strong> («l'App») come applicazione commerciale. Questa informativa spiega come trattiamo le informazioni quando usi la nostra App.`,
    sections: [
      {
        heading: `Panoramica`,
        content: `<p>LoanSolver è progettata nel rispetto della tua privacy. Non raccogliamo, memorizziamo né condividiamo alcuna informazione personale. L'App non richiede la creazione di un account, l'accesso o alcuna registrazione; non contiene pubblicità né strumenti di analisi ed è un acquisto unico senza acquisti in-app né abbonamenti. Tutto ciò che inserisci — prestiti, pagamenti e impostazioni — resta sul tuo dispositivo e, se iCloud è attivo, nel tuo iCloud personale. LoanSolver non si collega a banche o altri istituti finanziari: lavora solo con i numeri che digiti tu e non fornisce consulenza finanziaria.</p>`,
      },
      {
        heading: `Informazioni che non raccogliamo`,
        content: `<p>Non raccogliamo nulla di quanto segue:</p>
<ul><li>Nomi, indirizzi e-mail o recapiti</li><li>Dati di posizione</li><li>Identificatori del dispositivo o pubblicitari</li><li>Cronologia di navigazione o ricerca</li><li>Contatti, foto o altri file personali</li><li>Coordinate bancarie, numeri di carta o storia creditizia — l'App non li chiede mai</li><li>Gli importi di prestiti e pagamenti che inserisci — non lasciano mai il tuo dispositivo e il tuo iCloud personale</li><li>Analisi d'uso o dati di tracciamento</li></ul>`,
      },
      {
        heading: `Dati sul tuo dispositivo e nel tuo iCloud`,
        content: `<p>L'App salva sul tuo dispositivo i dati che inserisci per fornire le funzioni principali:</p>
<ul><li><strong>Prestiti</strong> — nome, tipo, valuta, debito residuo, rata mensile, tasso d'interesse o durata residua, giorno di pagamento e data di inizio.</li><li><strong>Pagamenti</strong> — le rate e i pagamenti anticipati che registri, con date e importi.</li><li><strong>Traguardi</strong> — le date in cui sono stati sbloccati.</li><li><strong>Preferenze</strong> — impostazioni dei promemoria, valuta predefinita, suggerimenti e interruttore del blocco. Restano sul dispositivo e non vengono sincronizzate.</li></ul>
<p>Se iCloud è attivo sul tuo dispositivo, prestiti, pagamenti e traguardi si sincronizzano tramite il tuo account iCloud personale (database privato Apple CloudKit) e sono disponibili sugli altri tuoi iPhone. Non gestiamo alcun server e non abbiamo accesso ai tuoi dati iCloud: la sincronizzazione è eseguita da iOS e protetta dal tuo Apple ID. Puoi eliminare i tuoi dati in qualsiasi momento cancellando i prestiti nell'App o disinstallando l'App, e rimuovere la copia iCloud in Impostazioni iOS → il tuo nome → iCloud → Gestisci spazio account. Il trattamento dei tuoi dati iCloud da parte di Apple è regolato dall'informativa di Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Notifiche`,
        content: `<p>L'App può chiedere il permesso di inviare notifiche locali: un promemoria qualche giorno prima della scadenza, un promemoria il giorno stesso, un avviso se un pagamento è in ritardo e una nota facoltativa quando sblocchi un traguardo. Sono pianificate interamente sul tuo dispositivo e non usano alcun servizio push esterno. Ogni tipo può essere disattivato nelle impostazioni dell'App, e tutti insieme nelle Impostazioni del dispositivo.</p>`,
      },
      {
        heading: `Face ID e Touch ID`,
        content: `<p>Puoi bloccare l'App con Face ID o Touch ID, se lo desideri; il blocco è disattivato per impostazione predefinita. L'autenticazione è eseguita interamente da iOS tramite il framework LocalAuthentication di Apple, con il codice del dispositivo come alternativa. L'App riceve solo un risultato di «successo» o «fallimento» e non vede, memorizza né trasmette mai dati biometrici.</p>`,
      },
      {
        heading: `Acquisto`,
        content: `<p>LoanSolver è un acquisto unico, senza acquisti in-app né abbonamenti. L'acquisto è gestito interamente da Apple tramite l'App Store. Non abbiamo accesso ai tuoi dati di pagamento, all'Apple ID o ai dati di fatturazione.</p>`,
      },
      {
        heading: `Nessun servizio di terze parti`,
        content: `<p>L'App non integra SDK di analisi, pubblicità, crash reporting o social media di terze parti. Non usiamo Firebase, Google Analytics, Facebook SDK, reti pubblicitarie o servizi simili. L'App non effettua richieste di rete proprie: l'unica comunicazione di rete è la sincronizzazione iCloud eseguita da iOS, e solo se iCloud è attivo sul tuo dispositivo.</p>`,
      },
      {
        heading: `Privacy dei minori`,
        content: `<p>L'App non raccoglie consapevolmente informazioni personali da nessuno, minori inclusi. Poiché l'App non raccoglie dati personali da alcun utente, non sono necessarie disposizioni particolari.</p>`,
      },
      {
        heading: `Sicurezza dei dati`,
        content: `<p>I tuoi dati restano sul tuo dispositivo, protetti dalla protezione dati di iOS, e nel tuo iCloud personale, dove Apple li cifra in transito e a riposo. Il blocco opzionale Face ID / Touch ID nasconde saldi e pagamenti a chiunque prenda in mano il tuo telefono. Non raccogliendo né memorizzando dati personali su server, da parte nostra non esiste rischio di violazione dei tuoi dati.</p>`,
      },
      {
        heading: `I tuoi diritti`,
        content: `<p>Hai i seguenti diritti sui tuoi dati:</p>
<ul><li>Puoi vedere e modificare tutto ciò che l'App memorizza direttamente nell'App.</li><li>Eliminare un prestito lo rimuove insieme ai suoi pagamenti; disinstallare l'App rimuove tutti i dati locali.</li><li>Puoi disattivare iCloud per LoanSolver nelle Impostazioni del dispositivo, così i dati restano solo sul dispositivo, ed eliminare la copia iCloud dalla gestione dello spazio iCloud.</li><li>Non conservando dati personali sui nostri server, non esistono dati da fornire, modificare o eliminare.</li></ul>
<p>Per qualsiasi domanda sui tuoi dati, contattaci.</p>`,
      },
      {
        heading: `Modifiche a questa informativa`,
        content: `<p>Potremmo aggiornare periodicamente questa informativa. Le modifiche saranno pubblicate su questa pagina con la data aggiornata. Ti invitiamo a consultarla regolarmente.</p>`,
      },
      {
        heading: `Contattaci`,
        content: `<p>Per domande su questa informativa sulla privacy, scrivici:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  pt: {
    title: `Política de Privacidade`,
    effectiveDate: `Data de vigência: 9 de setembro de 2026`,
    intro: `Bogdan Nikishin, desenvolvedor independente («nós» ou «nosso»), desenvolveu o <strong>LoanSolver</strong> («o App») como aplicativo comercial. Esta Política de Privacidade explica como tratamos informações quando você usa nosso App.`,
    sections: [
      {
        heading: `Visão geral`,
        content: `<p>O LoanSolver foi projetado pensando na sua privacidade. Não coletamos, armazenamos nem compartilhamos nenhuma informação pessoal. O App não exige criação de conta, login ou qualquer registro; não contém publicidade nem análises, e é uma compra única, sem compras no app nem assinaturas. Tudo o que você insere — empréstimos, pagamentos e configurações — fica no seu dispositivo e, se o iCloud estiver ativado, no seu iCloud pessoal. O LoanSolver não se conecta a bancos nem a outras instituições financeiras: ele trabalha apenas com os números que você digita e não oferece aconselhamento financeiro.</p>`,
      },
      {
        heading: `Informações que não coletamos`,
        content: `<p>Não coletamos nada do que segue:</p>
<ul><li>Nomes, e-mails ou informações de contato</li><li>Dados de localização</li><li>Identificadores do dispositivo ou de publicidade</li><li>Histórico de navegação ou pesquisa</li><li>Contatos, fotos ou outros arquivos pessoais</li><li>Dados bancários, números de cartão ou histórico de crédito — o App nunca os pede</li><li>Os valores de empréstimos e pagamentos que você insere — eles nunca saem do seu dispositivo e do seu iCloud pessoal</li><li>Análises de uso ou dados de rastreamento</li></ul>`,
      },
      {
        heading: `Dados no seu dispositivo e no seu iCloud`,
        content: `<p>O App armazena no seu dispositivo os dados que você insere para oferecer suas funções principais:</p>
<ul><li><strong>Empréstimos</strong> — nome, tipo, moeda, saldo, parcela mensal, taxa de juros ou prazo restante, dia de pagamento e data de início.</li><li><strong>Pagamentos</strong> — as parcelas e os pagamentos extras que você registra, com datas e valores.</li><li><strong>Conquistas</strong> — as datas em que os marcos foram desbloqueados.</li><li><strong>Preferências</strong> — configurações de lembretes, moeda padrão, dicas e o botão de bloqueio. Elas ficam no dispositivo e não são sincronizadas.</li></ul>
<p>Se o iCloud estiver ativado no seu dispositivo, empréstimos, pagamentos e conquistas sincronizam pela sua conta pessoal do iCloud (banco de dados privado do Apple CloudKit) e ficam disponíveis nos seus outros iPhones. Não operamos servidores e não temos acesso aos seus dados do iCloud: a sincronização é feita pelo iOS e protegida pelo seu Apple ID. Você pode apagar seus dados a qualquer momento excluindo empréstimos no App ou desinstalando o App, e remover a cópia do iCloud em Ajustes do iOS → seu nome → iCloud → Gerenciar armazenamento da conta. O tratamento dos seus dados do iCloud pela Apple é regido pela política de privacidade da Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Notificações`,
        content: `<p>O App pode pedir permissão para enviar notificações locais: um lembrete alguns dias antes do vencimento, um lembrete no dia, um alerta se um pagamento estiver atrasado e um aviso opcional quando você desbloqueia uma conquista. Elas são agendadas inteiramente no seu dispositivo e não usam nenhum serviço push externo. Cada tipo pode ser desativado nas configurações do App, e todos eles nos Ajustes do seu dispositivo.</p>`,
      },
      {
        heading: `Face ID e Touch ID`,
        content: `<p>Você pode bloquear o App com Face ID ou Touch ID, se quiser; o bloqueio vem desativado por padrão. A autenticação é realizada inteiramente pelo iOS por meio do framework LocalAuthentication da Apple, com o código do dispositivo como alternativa. O App recebe apenas um resultado de «sucesso» ou «falha» e nunca vê, armazena ou transmite dados biométricos.</p>`,
      },
      {
        heading: `Compra`,
        content: `<p>O LoanSolver é uma compra única, sem compras no app nem assinaturas. A compra é processada integralmente pela Apple via App Store. Não temos acesso às suas informações de pagamento, Apple ID ou dados de cobrança.</p>`,
      },
      {
        heading: `Sem serviços de terceiros`,
        content: `<p>O App não integra SDKs de análise, publicidade, relatórios de falhas ou redes sociais de terceiros. Não usamos Firebase, Google Analytics, Facebook SDK, redes de anúncios ou serviços semelhantes. O App não faz solicitações de rede próprias — a única comunicação de rede é a sincronização do iCloud realizada pelo iOS, e somente se o iCloud estiver ativado no seu dispositivo.</p>`,
      },
      {
        heading: `Privacidade de crianças`,
        content: `<p>O App não coleta intencionalmente informações pessoais de ninguém, incluindo crianças. Como o App não coleta informações pessoais de nenhum usuário, não são necessárias disposições especiais.</p>`,
      },
      {
        heading: `Segurança dos dados`,
        content: `<p>Seus dados permanecem no seu dispositivo, protegidos pela proteção de dados do iOS, e no seu iCloud pessoal, onde a Apple os criptografa em trânsito e em repouso. O bloqueio opcional por Face ID / Touch ID esconde seus saldos e pagamentos de quem pegar seu telefone. Como não coletamos nem armazenamos dados pessoais em servidores, não há risco de vazamento afetar suas informações do nosso lado.</p>`,
      },
      {
        heading: `Seus direitos`,
        content: `<p>Você tem os seguintes direitos sobre seus dados:</p>
<ul><li>Você pode ver e editar tudo o que o App armazena diretamente no App.</li><li>Excluir um empréstimo o remove junto com seus pagamentos; desinstalar o App remove todos os dados locais.</li><li>Você pode desativar o iCloud para o LoanSolver nos Ajustes do dispositivo para que os dados fiquem só nele, e apagar a cópia do iCloud no gerenciamento de armazenamento do iCloud.</li><li>Como não armazenamos dados pessoais em nossos servidores, não há dados a fornecer, alterar ou excluir.</li></ul>
<p>Se tiver dúvidas sobre seus dados, fale conosco.</p>`,
      },
      {
        heading: `Alterações nesta política`,
        content: `<p>Podemos atualizar esta Política de Privacidade periodicamente. Alterações serão refletidas nesta página com a data de vigência atualizada. Recomendamos revisá-la regularmente.</p>`,
      },
      {
        heading: `Fale conosco`,
        content: `<p>Em caso de dúvidas sobre esta Política de Privacidade, entre em contato:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  ja: {
    title: `プライバシーポリシー`,
    effectiveDate: `発効日：2026年9月9日`,
    intro: `個人開発者のボグダン・ニキシン（以下「当社」）は、商用アプリケーションとして<strong>LoanSolver</strong>（以下「本アプリ」）を開発しました。本プライバシーポリシーは、本アプリのご利用時に当社が情報をどのように取り扱うかを説明するものです。`,
    sections: [
      {
        heading: `概要`,
        content: `<p>LoanSolverはプライバシーに配慮して設計されています。当社は個人情報を一切収集・保存・共有しません。本アプリはアカウント作成、ログイン、いかなる登録も不要で、広告も分析ツールも含まず、アプリ内課金やサブスクリプションのない買い切り型です。入力した内容 — ローン、返済、設定 — はすべてお使いの端末と、iCloudが有効な場合はあなた個人のiCloudにのみ保存されます。LoanSolverは銀行やその他の金融機関には接続しません。あなたが入力した数値のみを扱い、金融アドバイスは提供しません。</p>`,
      },
      {
        heading: `収集しない情報`,
        content: `<p>当社は以下のいずれも収集しません：</p>
<ul><li>氏名、メールアドレス、連絡先情報</li><li>位置情報</li><li>デバイス識別子や広告ID</li><li>閲覧・検索履歴</li><li>連絡先、写真、その他の個人ファイル</li><li>銀行口座情報、カード番号、信用履歴 — 本アプリがこれらを求めることはありません</li><li>入力したローンや返済の金額 — 端末とあなた個人のiCloudの外に出ることはありません</li><li>利用分析や行動追跡データ</li></ul>`,
      },
      {
        heading: `端末とiCloudに保存されるデータ`,
        content: `<p>本アプリは主要機能の提供のため、入力されたデータをお使いの端末に保存します：</p>
<ul><li><strong>ローン</strong> — 名称、種類、通貨、残高、毎月の返済額、金利または残りの期間、返済日、開始日。</li><li><strong>返済</strong> — 記録した通常の返済と繰り上げ返済、その日付と金額。</li><li><strong>実績</strong> — 各マイルストーンを達成した日付。</li><li><strong>アプリ設定</strong> — リマインダー設定、既定の通貨、ヒント、アプリロックのスイッチ。これらは端末内に留まり、同期されません。</li></ul>
<p>端末でiCloudが有効な場合、ローン、返済、実績はあなた個人のiCloudアカウント（Apple CloudKitプライベートデータベース）経由で同期され、他のiPhoneでも利用できます。当社はサーバーを運営しておらず、あなたのiCloudデータにアクセスできません。同期はiOSが行い、Apple IDによって保護されます。データはいつでも、アプリ内でローンを削除するかアプリを削除することで消去でき、iCloud上のコピーはiOSの設定 → 自分の名前 → iCloud → アカウントのストレージを管理 から削除できます。AppleによるiCloudデータの取り扱いはAppleのプライバシーポリシー（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）に従います。</p>`,
      },
      {
        heading: `通知`,
        content: `<p>本アプリはローカル通知の許可を求めることがあります：返済日の数日前のリマインダー、返済日当日のリマインダー、延滞時のアラート、実績達成時の任意のお知らせです。これらはすべて端末上でスケジュールされ、外部のプッシュサービスは使用しません。各種類はアプリの設定で個別に、すべてまとめて端末の設定でオフにできます。</p>`,
      },
      {
        heading: `Face IDとTouch ID`,
        content: `<p>任意でFace IDまたはTouch IDによるアプリロックを設定できます。ロックは初期状態ではオフです。認証はAppleのLocalAuthenticationフレームワークを通じてiOSが完全に行い、端末のパスコードが代替手段となります。本アプリは「成功」または「失敗」の結果のみを受け取り、生体情報を見ること、保存すること、送信することは一切ありません。</p>`,
      },
      {
        heading: `購入`,
        content: `<p>LoanSolverはアプリ内課金もサブスクリプションもない買い切り型です。購入はApp Storeを通じてAppleが完全に処理します。当社はお支払い情報、Apple ID、請求情報にアクセスできません。</p>`,
      },
      {
        heading: `第三者サービスなし`,
        content: `<p>本アプリは、第三者の分析、広告、クラッシュレポート、SNSのSDKを一切組み込んでいません。Firebase、Google Analytics、Facebook SDK、広告ネットワーク等は使用していません。本アプリ自体はネットワーク要求を行わず、唯一の通信はiOSが行うiCloud同期のみで、それも端末でiCloudが有効な場合に限られます。</p>`,
      },
      {
        heading: `お子様のプライバシー`,
        content: `<p>本アプリは、お子様を含む誰からも意図的に個人情報を収集しません。いかなるユーザーからも個人情報を収集しないため、特別な規定は不要です。</p>`,
      },
      {
        heading: `データセキュリティ`,
        content: `<p>データはiOSのデータ保護により守られた端末内と、Appleが転送時・保存時に暗号化するあなた個人のiCloudに保存されます。任意のFace ID / Touch IDロックにより、端末を手にした他人から残高や返済情報を隠せます。当社はサーバー上に個人データを収集・保存しないため、当社側での情報漏えいのリスクはありません。</p>`,
      },
      {
        heading: `お客様の権利`,
        content: `<p>お客様はご自身のデータについて以下の権利を有します：</p>
<ul><li>本アプリが保存するすべての内容は、アプリ内で直接確認・編集できます。</li><li>ローンを削除すると、その返済記録も一緒に削除されます。アプリを削除するとローカルデータはすべて消去されます。</li><li>端末の設定でLoanSolverのiCloudをオフにすればデータは端末内にのみ留まり、iCloudのストレージ管理からiCloud上のコピーを削除できます。</li><li>当社のサーバーに個人データは保存されていないため、提供・修正・削除すべきデータは存在しません。</li></ul>
<p>データについてご不明な点があればお問い合わせください。</p>`,
      },
      {
        heading: `本ポリシーの変更`,
        content: `<p>本プライバシーポリシーは随時更新されることがあります。変更は本ページに発効日とともに掲載されます。定期的なご確認をおすすめします。</p>`,
      },
      {
        heading: `お問い合わせ`,
        content: `<p>本プライバシーポリシーについてご質問がある場合は、以下までご連絡ください：</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  ko: {
    title: `개인정보 처리방침`,
    effectiveDate: `시행일: 2026년 9월 9일`,
    intro: `독립 개발자 보그단 니키신(이하 "당사")은 상용 애플리케이션으로 <strong>LoanSolver</strong>(이하 "앱")를 개발했습니다. 본 개인정보 처리방침은 앱 사용 시 당사가 정보를 어떻게 처리하는지 설명합니다.`,
    sections: [
      {
        heading: `개요`,
        content: `<p>LoanSolver는 개인정보 보호를 염두에 두고 설계되었습니다. 당사는 어떠한 개인정보도 수집, 저장, 공유하지 않습니다. 앱은 계정 생성, 로그인, 어떤 형태의 등록도 요구하지 않으며, 광고와 분석 도구가 없고, 인앱 구매나 구독이 없는 1회 구매 앱입니다. 입력한 모든 것 — 대출, 납입, 설정 — 은 기기와, iCloud가 켜져 있다면 개인 iCloud에만 남습니다. LoanSolver는 은행이나 다른 금융기관에 연결되지 않습니다. 직접 입력한 숫자만 다루며 금융 자문을 제공하지 않습니다.</p>`,
      },
      {
        heading: `수집하지 않는 정보`,
        content: `<p>당사는 다음 정보를 수집하지 않습니다:</p>
<ul><li>이름, 이메일 주소, 연락처</li><li>위치 데이터</li><li>기기 식별자 또는 광고 ID</li><li>탐색 및 검색 기록</li><li>연락처, 사진 및 기타 개인 파일</li><li>은행 계좌 정보, 카드 번호, 신용 기록 — 앱은 이를 요구하지 않습니다</li><li>입력한 대출 및 납입 금액 — 기기와 개인 iCloud 밖으로 나가지 않습니다</li><li>사용 분석 또는 행동 추적 데이터</li></ul>`,
      },
      {
        heading: `기기와 iCloud에 저장되는 데이터`,
        content: `<p>앱은 핵심 기능 제공을 위해 입력한 데이터를 기기에 저장합니다:</p>
<ul><li><strong>대출</strong> — 이름, 종류, 통화, 잔액, 월 납입금, 금리 또는 남은 기간, 납부일, 시작일.</li><li><strong>납입</strong> — 기록한 정기 납입과 추가 상환, 날짜와 금액.</li><li><strong>업적</strong> — 달성 시점의 날짜.</li><li><strong>앱 설정</strong> — 알림 설정, 기본 통화, 팁, 앱 잠금 스위치. 이 설정은 기기에만 남고 동기화되지 않습니다.</li></ul>
<p>기기에서 iCloud가 켜져 있으면 대출, 납입, 업적은 개인 iCloud 계정(Apple CloudKit 비공개 데이터베이스)을 통해 동기화되어 다른 iPhone에서도 볼 수 있습니다. 당사는 서버를 운영하지 않으며 귀하의 iCloud 데이터에 접근할 수 없습니다. 동기화는 iOS가 수행하며 Apple ID로 보호됩니다. 앱에서 대출을 삭제하거나 앱을 삭제하면 언제든 데이터를 지울 수 있고, iCloud 사본은 iOS 설정 → 내 이름 → iCloud → 계정 저장 공간 관리에서 삭제할 수 있습니다. Apple의 iCloud 데이터 처리는 Apple 개인정보 보호정책(<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>)을 따릅니다.</p>`,
      },
      {
        heading: `알림`,
        content: `<p>앱은 로컬 알림 권한을 요청할 수 있습니다: 납부일 며칠 전 알림, 납부일 당일 알림, 연체 시 경고, 업적 달성 시 선택적 안내. 이 알림들은 전부 기기에서 예약되며 외부 푸시 서비스를 사용하지 않습니다. 각 유형은 앱 설정에서, 전체는 기기 설정에서 끌 수 있습니다.</p>`,
      },
      {
        heading: `Face ID 및 Touch ID`,
        content: `<p>원하면 Face ID 또는 Touch ID로 앱을 잠글 수 있으며, 잠금은 기본적으로 꺼져 있습니다. 인증은 Apple의 LocalAuthentication 프레임워크를 통해 iOS가 전적으로 수행하고, 기기 암호가 대체 수단입니다. 앱은 "성공" 또는 "실패" 결과만 받으며 생체 정보를 보거나 저장하거나 전송하지 않습니다.</p>`,
      },
      {
        heading: `구매`,
        content: `<p>LoanSolver는 인앱 구매와 구독이 없는 1회 구매 앱입니다. 구매는 App Store를 통해 Apple이 전적으로 처리합니다. 당사는 결제 정보, Apple ID, 청구 정보에 접근할 수 없습니다.</p>`,
      },
      {
        heading: `제3자 서비스 없음`,
        content: `<p>앱은 제3자 분석, 광고, 충돌 보고, 소셜 미디어 SDK를 통합하지 않습니다. Firebase, Google Analytics, Facebook SDK, 광고 네트워크 등 유사 서비스를 사용하지 않습니다. 앱 자체는 네트워크 요청을 하지 않으며, 유일한 네트워크 통신은 iOS가 수행하는 iCloud 동기화뿐이고, 그것도 기기에서 iCloud가 켜져 있을 때만입니다.</p>`,
      },
      {
        heading: `아동의 개인정보`,
        content: `<p>앱은 아동을 포함한 누구로부터도 개인정보를 의도적으로 수집하지 않습니다. 어떤 사용자로부터도 개인정보를 수집하지 않으므로 특별한 조항이 필요하지 않습니다.</p>`,
      },
      {
        heading: `데이터 보안`,
        content: `<p>데이터는 iOS 데이터 보호로 지켜지는 기기와, Apple이 전송 중과 저장 시 암호화하는 개인 iCloud에 남습니다. 선택적 Face ID / Touch ID 잠금은 휴대폰을 집어 든 누구에게도 잔액과 납입 내역을 숨깁니다. 당사는 서버에 개인 데이터를 수집·저장하지 않으므로 당사 측 유출 위험이 없습니다.</p>`,
      },
      {
        heading: `사용자의 권리`,
        content: `<p>사용자는 자신의 데이터에 대해 다음 권리를 갖습니다:</p>
<ul><li>앱이 저장하는 모든 내용을 앱 안에서 직접 보고 수정할 수 있습니다.</li><li>대출을 삭제하면 납입 기록도 함께 삭제되고, 앱을 삭제하면 모든 로컬 데이터가 제거됩니다.</li><li>기기 설정에서 LoanSolver의 iCloud를 끄면 데이터가 기기에만 남으며, iCloud 저장 공간 관리에서 iCloud 사본을 삭제할 수 있습니다.</li><li>당사 서버에 개인 데이터를 저장하지 않으므로 제공, 수정, 삭제할 데이터가 없습니다.</li></ul>
<p>데이터에 관한 문의는 아래로 연락해 주세요.</p>`,
      },
      {
        heading: `방침 변경`,
        content: `<p>본 개인정보 처리방침은 수시로 업데이트될 수 있습니다. 변경 사항은 갱신된 시행일과 함께 이 페이지에 게시됩니다. 주기적으로 확인하시길 권장합니다.</p>`,
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
    effectiveDate: `生效日期：2026年9月9日`,
    intro: `独立开发者波格丹·尼基申（"我们"）将<strong>LoanSolver</strong>（"本应用"）作为商业应用开发。本隐私政策说明您使用本应用时我们如何处理信息。`,
    sections: [
      {
        heading: `概述`,
        content: `<p>LoanSolver在设计时充分考虑了您的隐私。我们不收集、存储或共享任何个人信息。本应用无需创建账户、登录或任何形式的注册，不含广告和分析工具，并且是一次性买断，没有内购和订阅。您输入的一切 — 贷款、还款和设置 — 都保留在您的设备上，若已开启iCloud，则还保存在您的个人iCloud中。LoanSolver不连接银行或任何其他金融机构：它只处理您自己输入的数字，也不提供理财建议。</p>`,
      },
      {
        heading: `我们不收集的信息`,
        content: `<p>我们不收集以下任何信息：</p>
<ul><li>姓名、电子邮件地址或联系方式</li><li>位置数据</li><li>设备标识符或广告ID</li><li>浏览或搜索历史</li><li>通讯录、照片或其他个人文件</li><li>银行账户信息、卡号或信用记录 — 本应用从不索取这些信息</li><li>您输入的贷款和还款金额 — 它们从不离开您的设备和个人iCloud</li><li>使用分析或行为跟踪数据</li></ul>`,
      },
      {
        heading: `存储在设备和iCloud中的数据`,
        content: `<p>本应用将您输入的数据存储在设备上，以提供核心功能：</p>
<ul><li><strong>贷款</strong> — 名称、类型、币种、余额、月供、利率或剩余期限、还款日和起始日期。</li><li><strong>还款</strong> — 您记录的定期还款和提前还款，及其日期和金额。</li><li><strong>成就</strong> — 达成各里程碑的日期。</li><li><strong>应用偏好</strong> — 提醒设置、默认币种、提示以及应用锁开关。这些仅保留在设备上，不会同步。</li></ul>
<p>若设备已开启iCloud，贷款、还款和成就会通过您的个人iCloud账户（Apple CloudKit私有数据库）同步，以便在您的其他iPhone上使用。我们不运营任何服务器，也无法访问您的iCloud数据：同步由iOS执行，并受您的Apple ID保护。您随时可以通过在应用中删除贷款或卸载应用来删除数据，并在iOS设置 → 您的姓名 → iCloud → 管理账户储存空间中移除iCloud副本。Apple对您iCloud数据的处理受Apple隐私政策约束（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）。</p>`,
      },
      {
        heading: `通知`,
        content: `<p>本应用可能请求发送本地通知的权限：还款日前几天的提醒、还款当天的提醒、逾期时的警示，以及解锁成就时的可选提示。这些通知完全在您的设备上安排，不使用任何外部推送服务。每种类型都可在应用设置中关闭，也可在设备设置中全部关闭。</p>`,
      },
      {
        heading: `Face ID与Touch ID`,
        content: `<p>您可以选择使用Face ID或Touch ID锁定本应用，该锁定默认关闭。身份验证完全由iOS通过Apple的LocalAuthentication框架完成，并以设备密码作为备用方式。本应用只会收到"成功"或"失败"的结果，绝不会查看、存储或传输任何生物识别数据。</p>`,
      },
      {
        heading: `购买`,
        content: `<p>LoanSolver为一次性买断，没有内购，也没有订阅。购买完全由Apple通过App Store处理。我们无法访问您的付款信息、Apple ID或账单资料。</p>`,
      },
      {
        heading: `无第三方服务`,
        content: `<p>本应用不集成任何第三方分析、广告、崩溃报告或社交媒体SDK。我们不使用Firebase、Google Analytics、Facebook SDK、广告网络或任何类似服务。本应用自身不发出网络请求——唯一的网络通信是由iOS执行的iCloud同步，且仅在您的设备开启iCloud时进行。</p>`,
      },
      {
        heading: `儿童隐私`,
        content: `<p>本应用不会有意收集任何人（包括儿童）的个人信息。由于本应用不从任何用户处收集个人信息，因此无需特别条款。</p>`,
      },
      {
        heading: `数据安全`,
        content: `<p>您的数据保留在受iOS数据保护机制保护的设备上，以及您的个人iCloud中，Apple会对其进行传输和存储加密。可选的Face ID / Touch ID锁定可防止拿到您手机的任何人看到余额和还款记录。由于我们不在服务器上收集或存储任何个人数据，因此不存在我们这边的数据泄露风险。</p>`,
      },
      {
        heading: `您的权利`,
        content: `<p>关于您的数据，您拥有以下权利：</p>
<ul><li>本应用存储的所有内容都可以直接在应用中查看和编辑。</li><li>删除一笔贷款会连同其还款记录一起删除；卸载应用会删除全部本地数据。</li><li>您可以在设备设置中为LoanSolver关闭iCloud，使数据仅保留在设备上，并在iCloud储存空间管理中删除iCloud副本。</li><li>由于我们不在服务器上存储个人数据，因此不存在需要我们提供、修改或删除的个人数据。</li></ul>
<p>如对您的数据有任何疑问，请联系我们。</p>`,
      },
      {
        heading: `政策变更`,
        content: `<p>我们可能会不时更新本隐私政策。任何变更都会在本页面以更新的生效日期体现。建议您定期查看本政策。</p>`,
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
    effectiveDate: `تاريخ السريان: 9 سبتمبر 2026`,
    intro: `طوّر المطوّر المستقل بوغدان نيكيشين («نحن») تطبيق <strong>LoanSolver</strong> («التطبيق») كتطبيق تجاري. توضح سياسة الخصوصية هذه كيفية تعاملنا مع المعلومات عند استخدامك لتطبيقنا.`,
    sections: [
      {
        heading: `نظرة عامة`,
        content: `<p>صُمم LoanSolver مع مراعاة خصوصيتك. نحن لا نجمع أو نخزّن أو نشارك أي معلومات شخصية. لا يتطلب التطبيق إنشاء حساب أو تسجيل دخول أو أي شكل من أشكال التسجيل، ولا يحتوي على إعلانات أو أدوات تحليل، وهو شراء لمرة واحدة بلا مشتريات داخل التطبيق ولا اشتراكات. كل ما تدخله — القروض والدفعات والإعدادات — يبقى على جهازك، وفي iCloud الخاص بك إذا كان مفعّلًا. لا يتصل LoanSolver بالبنوك أو أي مؤسسة مالية أخرى: فهو يعمل فقط بالأرقام التي تدخلها بنفسك ولا يقدّم أي نصائح مالية.</p>`,
      },
      {
        heading: `المعلومات التي لا نجمعها`,
        content: `<p>لا نجمع أيًا مما يلي:</p>
<ul><li>الأسماء أو عناوين البريد الإلكتروني أو معلومات الاتصال</li><li>بيانات الموقع</li><li>معرّفات الجهاز أو المعرّفات الإعلانية</li><li>سجلّ التصفح أو البحث</li><li>جهات الاتصال أو الصور أو الملفات الشخصية الأخرى</li><li>بيانات الحسابات البنكية أو أرقام البطاقات أو السجل الائتماني — لا يطلبها التطبيق أبدًا</li><li>مبالغ القروض والدفعات التي تدخلها — لا تغادر جهازك وiCloud الخاص بك أبدًا</li><li>تحليلات الاستخدام أو بيانات التتبع السلوكي</li></ul>`,
      },
      {
        heading: `البيانات المخزّنة على جهازك وفي iCloud الخاص بك`,
        content: `<p>يخزّن التطبيق البيانات التي تدخلها على جهازك لتوفير وظائفه الأساسية:</p>
<ul><li><strong>القروض</strong> — الاسم والنوع والعملة والرصيد والقسط الشهري ومعدل الفائدة أو المدة المتبقية ويوم الدفع وتاريخ البدء.</li><li><strong>الدفعات</strong> — الأقساط المجدولة والدفعات الإضافية التي تسجّلها، بتواريخها ومبالغها.</li><li><strong>الإنجازات</strong> — تواريخ فتح كل إنجاز.</li><li><strong>تفضيلات التطبيق</strong> — إعدادات التذكير والعملة الافتراضية والنصائح ومفتاح قفل التطبيق. تبقى هذه على الجهاز ولا تُزامَن.</li></ul>
<p>إذا كان iCloud مفعّلًا على جهازك، تُزامَن القروض والدفعات والإنجازات عبر حساب iCloud الخاص بك (قاعدة بيانات Apple CloudKit الخاصة) لتكون متاحة على أجهزة iPhone الأخرى لديك. لا نشغّل أي خوادم ولا يمكننا الوصول إلى بيانات iCloud الخاصة بك: تتم المزامنة بواسطة iOS وتحميها Apple ID الخاصة بك. يمكنك حذف بياناتك في أي وقت بحذف القروض داخل التطبيق أو بإلغاء تثبيته، وإزالة نسخة iCloud من إعدادات iOS ← اسمك ← iCloud ← إدارة مساحة تخزين الحساب. يخضع تعامل Apple مع بيانات iCloud لسياسة خصوصية Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `الإشعارات`,
        content: `<p>قد يطلب التطبيق الإذن بإرسال إشعارات محلية: تذكير قبل موعد الاستحقاق بأيام، وتذكير في يوم الاستحقاق، وتنبيه عند تأخر الدفع، ورسالة اختيارية عند فتح إنجاز. تُجدوَل هذه الإشعارات بالكامل على جهازك ولا تستخدم أي خدمة دفع خارجية. يمكن إيقاف كل نوع من إعدادات التطبيق، وإيقافها جميعًا من إعدادات الجهاز.</p>`,
      },
      {
        heading: `Face ID وTouch ID`,
        content: `<p>يمكنك اختياريًا قفل التطبيق بـ Face ID أو Touch ID؛ القفل متوقف افتراضيًا. تتم المصادقة بالكامل بواسطة iOS عبر إطار عمل LocalAuthentication من Apple، مع رمز مرور الجهاز كبديل. لا يتلقى التطبيق سوى نتيجة «نجاح» أو «فشل» ولا يرى أي بيانات بيومترية أو يخزّنها أو ينقلها أبدًا.</p>`,
      },
      {
        heading: `الشراء`,
        content: `<p>LoanSolver شراء لمرة واحدة بلا مشتريات داخل التطبيق ولا اشتراكات. تُعالج عملية الشراء بالكامل بواسطة Apple عبر App Store. لا يمكننا الوصول إلى معلومات الدفع أو Apple ID أو بيانات الفوترة الخاصة بك.</p>`,
      },
      {
        heading: `لا خدمات من أطراف ثالثة`,
        content: `<p>لا يدمج التطبيق أي حزم تطوير خارجية للتحليلات أو الإعلانات أو تقارير الأعطال أو وسائل التواصل الاجتماعي. لا نستخدم Firebase أو Google Analytics أو Facebook SDK أو شبكات إعلانية أو أي خدمات مشابهة. لا يجري التطبيق أي طلبات شبكة خاصة به — الاتصال الشبكي الوحيد هو مزامنة iCloud التي ينفذها iOS، وفقط إذا كان iCloud مفعّلًا على جهازك.</p>`,
      },
      {
        heading: `خصوصية الأطفال`,
        content: `<p>لا يجمع التطبيق عن قصد أي معلومات شخصية من أي شخص، بما في ذلك الأطفال. وبما أنه لا يجمع معلومات شخصية من أي مستخدم، فلا حاجة لأحكام خاصة.</p>`,
      },
      {
        heading: `أمان البيانات`,
        content: `<p>تبقى بياناتك على جهازك محمية بحماية بيانات iOS، وفي iCloud الخاص بك حيث تشفّرها Apple أثناء النقل والتخزين. يخفي قفل Face ID / Touch ID الاختياري أرصدتك ودفعاتك عن أي شخص يمسك بهاتفك. وبما أننا لا نجمع أو نخزّن أي بيانات شخصية على خوادم، فلا يوجد خطر تسريب بيانات يمس معلوماتك من جانبنا.</p>`,
      },
      {
        heading: `حقوقك`,
        content: `<p>لديك الحقوق التالية بخصوص بياناتك:</p>
<ul><li>يمكنك عرض وتعديل كل ما يخزّنه التطبيق مباشرة داخل التطبيق.</li><li>حذف قرض يزيله مع دفعاته؛ وإلغاء تثبيت التطبيق يزيل جميع البيانات المحلية.</li><li>يمكنك إيقاف iCloud لتطبيق LoanSolver من إعدادات جهازك لتبقى البيانات على الجهاز فقط، وحذف نسخة iCloud من إدارة مساحة تخزين iCloud.</li><li>بما أننا لا نخزّن بيانات شخصية على خوادمنا، فلا توجد بيانات نقدّمها أو نعدّلها أو نحذفها.</li></ul>
<p>إذا كانت لديك أي أسئلة حول بياناتك، فيرجى التواصل معنا.</p>`,
      },
      {
        heading: `تغييرات هذه السياسة`,
        content: `<p>قد نحدّث سياسة الخصوصية هذه من وقت لآخر. ستظهر أي تغييرات على هذه الصفحة مع تاريخ سريان محدّث. ننصحك بمراجعتها دوريًا.</p>`,
      },
      {
        heading: `تواصل معنا`,
        content: `<p>إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، فيرجى التواصل معنا على:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  hi: {
    title: `गोपनीयता नीति`,
    effectiveDate: `प्रभावी तिथि: 9 सितंबर 2026`,
    intro: `स्वतंत्र डेवलपर बोगदान निकिशिन («हम» या «हमारा») ने <strong>LoanSolver</strong> («ऐप») को एक व्यावसायिक एप्लिकेशन के रूप में बनाया है। यह गोपनीयता नीति बताती है कि ऐप के उपयोग के दौरान हम जानकारी को कैसे संभालते हैं।`,
    sections: [
      {
        heading: `अवलोकन`,
        content: `<p>LoanSolver आपकी गोपनीयता को ध्यान में रखकर बनाया गया है। हम कोई भी व्यक्तिगत जानकारी एकत्र, संग्रहीत या साझा नहीं करते। ऐप में खाता बनाने, लॉगिन या किसी भी प्रकार के पंजीकरण की आवश्यकता नहीं है; इसमें न विज्ञापन हैं, न विश्लेषण उपकरण, और यह बिना इन-ऐप खरीदारी या सदस्यता के एक बार की खरीद है। आप जो भी दर्ज करते हैं — ऋण, भुगतान और सेटिंग्स — वह आपके डिवाइस पर और, यदि iCloud चालू है, आपके निजी iCloud में रहता है। LoanSolver बैंकों या किसी अन्य वित्तीय संस्थान से नहीं जुड़ता: यह केवल आपके द्वारा दर्ज किए गए आँकड़ों पर काम करता है और वित्तीय सलाह नहीं देता।</p>`,
      },
      {
        heading: `जानकारी जो हम एकत्र नहीं करते`,
        content: `<p>हम निम्नलिखित में से कुछ भी एकत्र नहीं करते:</p>
<ul><li>नाम, ईमेल पते या संपर्क जानकारी</li><li>स्थान डेटा</li><li>डिवाइस पहचानकर्ता या विज्ञापन आईडी</li><li>ब्राउज़िंग या खोज इतिहास</li><li>संपर्क, फ़ोटो या अन्य व्यक्तिगत फ़ाइलें</li><li>बैंक खाते का विवरण, कार्ड नंबर या क्रेडिट इतिहास — ऐप इन्हें कभी नहीं माँगता</li><li>आपके द्वारा दर्ज ऋण और भुगतान की राशियाँ — वे कभी आपके डिवाइस और आपके निजी iCloud से बाहर नहीं जातीं</li><li>उपयोग विश्लेषण या व्यवहार ट्रैकिंग डेटा</li></ul>`,
      },
      {
        heading: `आपके डिवाइस और iCloud में संग्रहीत डेटा`,
        content: `<p>ऐप अपनी मुख्य कार्यक्षमता के लिए आपके द्वारा दर्ज डेटा को आपके डिवाइस पर सहेजता है:</p>
<ul><li><strong>ऋण</strong> — नाम, प्रकार, मुद्रा, शेष राशि, मासिक किस्त, ब्याज दर या शेष अवधि, भुगतान दिवस और आरंभ तिथि।</li><li><strong>भुगतान</strong> — आपके द्वारा दर्ज नियमित किस्तें और अतिरिक्त भुगतान, उनकी तिथियों और राशियों सहित।</li><li><strong>उपलब्धियाँ</strong> — वे तिथियाँ जब पड़ाव पूरे हुए।</li><li><strong>ऐप प्राथमिकताएँ</strong> — रिमाइंडर सेटिंग्स, डिफ़ॉल्ट मुद्रा, सुझाव और ऐप-लॉक स्विच। ये डिवाइस पर ही रहती हैं और सिंक नहीं होतीं।</li></ul>
<p>यदि आपके डिवाइस पर iCloud चालू है, तो ऋण, भुगतान और उपलब्धियाँ आपके निजी iCloud खाते (Apple CloudKit निजी डेटाबेस) के माध्यम से सिंक होती हैं ताकि वे आपके अन्य iPhone पर उपलब्ध रहें। हम कोई सर्वर नहीं चलाते और आपके iCloud डेटा तक हमारी पहुँच नहीं है: सिंक iOS करता है और यह आपकी Apple ID से सुरक्षित है। आप ऐप में ऋण हटाकर या ऐप अनइंस्टॉल करके कभी भी अपना डेटा मिटा सकते हैं, और iCloud प्रति को iOS सेटिंग्स → आपका नाम → iCloud → खाता संग्रहण प्रबंधित करें से हटा सकते हैं। Apple द्वारा आपके iCloud डेटा का प्रबंधन Apple की गोपनीयता नीति (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>) के अधीन है।</p>`,
      },
      {
        heading: `सूचनाएँ`,
        content: `<p>ऐप स्थानीय सूचनाएँ भेजने की अनुमति माँग सकता है: देय तिथि से कुछ दिन पहले रिमाइंडर, देय तिथि के दिन रिमाइंडर, भुगतान में देरी होने पर चेतावनी, और उपलब्धि खुलने पर एक वैकल्पिक संदेश। ये पूरी तरह आपके डिवाइस पर निर्धारित होती हैं और किसी बाहरी पुश सेवा का उपयोग नहीं करतीं। हर प्रकार को ऐप की सेटिंग्स में और सभी को डिवाइस की सेटिंग्स में बंद किया जा सकता है।</p>`,
      },
      {
        heading: `Face ID और Touch ID`,
        content: `<p>आप चाहें तो ऐप को Face ID या Touch ID से लॉक कर सकते हैं; लॉक डिफ़ॉल्ट रूप से बंद है। प्रमाणीकरण पूरी तरह iOS द्वारा Apple के LocalAuthentication फ्रेमवर्क के माध्यम से किया जाता है, जिसमें डिवाइस पासकोड विकल्प के रूप में रहता है। ऐप को केवल «सफल» या «असफल» परिणाम मिलता है और वह कभी कोई बायोमेट्रिक डेटा नहीं देखता, संग्रहीत करता या भेजता।</p>`,
      },
      {
        heading: `खरीद`,
        content: `<p>LoanSolver बिना इन-ऐप खरीदारी और बिना सदस्यता के एक बार की खरीद है। खरीद को Apple द्वारा App Store के माध्यम से पूर्ण रूप से संसाधित किया जाता है। हमारे पास आपकी भुगतान जानकारी, Apple ID या बिलिंग विवरण तक पहुँच नहीं है।</p>`,
      },
      {
        heading: `कोई तृतीय-पक्ष सेवाएँ नहीं`,
        content: `<p>ऐप में कोई तृतीय-पक्ष विश्लेषण, विज्ञापन, क्रैश रिपोर्टिंग या सोशल मीडिया SDK शामिल नहीं है। हम Firebase, Google Analytics, Facebook SDK, विज्ञापन नेटवर्क या ऐसी कोई सेवा उपयोग नहीं करते। ऐप स्वयं कोई नेटवर्क अनुरोध नहीं करता — एकमात्र नेटवर्क संचार iOS द्वारा किया जाने वाला iCloud सिंक है, और वह भी केवल तब जब आपके डिवाइस पर iCloud चालू हो।</p>`,
      },
      {
        heading: `बच्चों की गोपनीयता`,
        content: `<p>ऐप जानबूझकर किसी से भी, बच्चों सहित, कोई व्यक्तिगत जानकारी एकत्र नहीं करता। चूँकि ऐप किसी भी उपयोगकर्ता से व्यक्तिगत जानकारी एकत्र नहीं करता, विशेष प्रावधानों की आवश्यकता नहीं है।</p>`,
      },
      {
        heading: `डेटा सुरक्षा`,
        content: `<p>आपका डेटा iOS की डेटा सुरक्षा से संरक्षित आपके डिवाइस पर और आपके निजी iCloud में रहता है, जहाँ Apple इसे ट्रांज़िट और स्टोरेज दोनों में एन्क्रिप्ट करता है। वैकल्पिक Face ID / Touch ID लॉक आपके फ़ोन को उठाने वाले किसी भी व्यक्ति से आपकी शेष राशियाँ और भुगतान छिपाता है। चूँकि हम सर्वर पर कोई व्यक्तिगत डेटा एकत्र या संग्रहीत नहीं करते, हमारी ओर से डेटा उल्लंघन का कोई जोखिम नहीं है।</p>`,
      },
      {
        heading: `आपके अधिकार`,
        content: `<p>अपने डेटा के संबंध में आपके निम्नलिखित अधिकार हैं:</p>
<ul><li>ऐप जो कुछ भी संग्रहीत करता है, उसे आप सीधे ऐप में देख और संपादित कर सकते हैं।</li><li>किसी ऋण को हटाने से वह अपने भुगतानों सहित हट जाता है; ऐप अनइंस्टॉल करने से सारा स्थानीय डेटा हट जाता है।</li><li>आप डिवाइस सेटिंग्स में LoanSolver के लिए iCloud बंद कर सकते हैं ताकि डेटा केवल डिवाइस पर रहे, और iCloud संग्रहण प्रबंधन से iCloud प्रति हटा सकते हैं।</li><li>चूँकि हम अपने सर्वर पर व्यक्तिगत डेटा संग्रहीत नहीं करते, हमारे पास प्रदान करने, बदलने या हटाने के लिए कोई डेटा नहीं है।</li></ul>
<p>यदि आपके डेटा के बारे में कोई प्रश्न है, तो कृपया हमसे संपर्क करें।</p>`,
      },
      {
        heading: `इस नीति में परिवर्तन`,
        content: `<p>हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। कोई भी परिवर्तन अद्यतन प्रभावी तिथि के साथ इस पृष्ठ पर दिखाई देगा। हम इसे नियमित रूप से देखने की सलाह देते हैं।</p>`,
      },
      {
        heading: `संपर्क करें`,
        content: `<p>इस गोपनीयता नीति के बारे में किसी भी प्रश्न के लिए हमसे संपर्क करें:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  he: {
    title: `מדיניות פרטיות`,
    effectiveDate: `תאריך כניסה לתוקף: 9 בספטמבר 2026`,
    intro: `בוגדן ניקישין, מפתח עצמאי («אנחנו»), פיתח את <strong>LoanSolver</strong> («האפליקציה») כאפליקציה מסחרית. מדיניות פרטיות זו מסבירה כיצד אנו מטפלים במידע בעת השימוש באפליקציה.`,
    sections: [
      {
        heading: `סקירה`,
        content: `<p>LoanSolver תוכננה מתוך מחשבה על הפרטיות שלך. איננו אוספים, שומרים או משתפים מידע אישי כלשהו. האפליקציה אינה דורשת יצירת חשבון, התחברות או רישום מכל סוג; אין בה פרסומות או כלי אנליטיקה, והיא רכישה חד-פעמית ללא רכישות בתוך האפליקציה וללא מנויים. כל מה שאתם מזינים — הלוואות, תשלומים והגדרות — נשאר במכשיר שלכם, וב-iCloud הפרטי שלכם אם הוא מופעל. LoanSolver אינה מתחברת לבנקים או לכל מוסד פיננסי אחר: היא עובדת רק עם המספרים שאתם מקלידים ואינה מספקת ייעוץ פיננסי.</p>`,
      },
      {
        heading: `מידע שאיננו אוספים`,
        content: `<p>איננו אוספים דבר מהבאים:</p>
<ul><li>שמות, כתובות דוא"ל או פרטי קשר</li><li>נתוני מיקום</li><li>מזהי מכשיר או מזהי פרסום</li><li>היסטוריית גלישה או חיפוש</li><li>אנשי קשר, תמונות או קבצים אישיים אחרים</li><li>פרטי חשבון בנק, מספרי כרטיס או היסטוריית אשראי — האפליקציה לעולם אינה מבקשת אותם</li><li>סכומי ההלוואות והתשלומים שאתם מזינים — הם לעולם אינם עוזבים את המכשיר ואת ה-iCloud הפרטי שלכם</li><li>אנליטיקת שימוש או נתוני מעקב התנהגותי</li></ul>`,
      },
      {
        heading: `נתונים השמורים במכשיר וב-iCloud שלכם`,
        content: `<p>האפליקציה שומרת במכשיר את הנתונים שאתם מזינים כדי לספק את הפונקציונליות המרכזית:</p>
<ul><li><strong>הלוואות</strong> — שם, סוג, מטבע, יתרה, תשלום חודשי, ריבית או תקופה נותרת, יום תשלום ותאריך התחלה.</li><li><strong>תשלומים</strong> — התשלומים השוטפים והנוספים שאתם רושמים, עם תאריכים וסכומים.</li><li><strong>הישגים</strong> — התאריכים שבהם נפתחו אבני דרך.</li><li><strong>העדפות</strong> — הגדרות תזכורות, מטבע ברירת מחדל, טיפים ומתג נעילת האפליקציה. אלה נשארים במכשיר ואינם מסונכרנים.</li></ul>
<p>אם iCloud מופעל במכשיר, הלוואות, תשלומים והישגים מסתנכרנים דרך חשבון ה-iCloud הפרטי שלכם (מסד נתונים פרטי של Apple CloudKit) וזמינים במכשירי ה-iPhone האחרים שלכם. איננו מפעילים שרתים ואין לנו גישה לנתוני ה-iCloud שלכם: הסנכרון מתבצע על ידי iOS ומוגן ב-Apple ID שלכם. ניתן למחוק את הנתונים בכל עת על ידי מחיקת הלוואות באפליקציה או הסרת האפליקציה, ולהסיר את עותק ה-iCloud בהגדרות iOS ← השם שלכם ← iCloud ← ניהול אחסון החשבון. הטיפול של Apple בנתוני ה-iCloud כפוף למדיניות הפרטיות של Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `התראות`,
        content: `<p>האפליקציה עשויה לבקש הרשאה לשלוח התראות מקומיות: תזכורת כמה ימים לפני מועד התשלום, תזכורת ביום התשלום, התראה על פיגור בתשלום והודעה אופציונלית כשאתם פותחים הישג. הן מתוזמנות כולן במכשיר שלכם ואינן משתמשות בשירות push חיצוני. כל סוג ניתן לכיבוי בהגדרות האפליקציה, וכולם יחד בהגדרות המכשיר.</p>`,
      },
      {
        heading: `Face ID ו-Touch ID`,
        content: `<p>ניתן לנעול את האפליקציה עם Face ID או Touch ID לפי בחירתכם; הנעילה כבויה כברירת מחדל. האימות מתבצע כולו על ידי iOS דרך מסגרת LocalAuthentication של Apple, עם קוד המכשיר כגיבוי. האפליקציה מקבלת רק תוצאה של «הצלחה» או «כישלון» ולעולם אינה רואה, שומרת או משדרת נתונים ביומטריים.</p>`,
      },
      {
        heading: `רכישה`,
        content: `<p>LoanSolver היא רכישה חד-פעמית ללא רכישות בתוך האפליקציה וללא מנויים. הרכישה מעובדת במלואה על ידי Apple דרך ה-App Store. אין לנו גישה לפרטי התשלום, ל-Apple ID או לנתוני החיוב שלכם.</p>`,
      },
      {
        heading: `ללא שירותי צד שלישי`,
        content: `<p>האפליקציה אינה משלבת SDK של צד שלישי לאנליטיקה, פרסום, דיווח קריסות או רשתות חברתיות. איננו משתמשים ב-Firebase, Google Analytics, Facebook SDK, רשתות פרסום או שירותים דומים. האפליקציה אינה מבצעת בקשות רשת משלה — התקשורת היחידה היא סנכרון iCloud שמבצע iOS, ורק אם iCloud מופעל במכשיר.</p>`,
      },
      {
        heading: `פרטיות ילדים`,
        content: `<p>האפליקציה אינה אוספת ביודעין מידע אישי מאף אחד, כולל ילדים. מכיוון שהאפליקציה אינה אוספת מידע אישי מאף משתמש, אין צורך בהוראות מיוחדות.</p>`,
      },
      {
        heading: `אבטחת מידע`,
        content: `<p>הנתונים נשארים במכשיר שלכם, מוגנים בהגנת הנתונים של iOS, וב-iCloud הפרטי שלכם, שם Apple מצפינה אותם בהעברה ובאחסון. נעילת Face ID / Touch ID האופציונלית מסתירה את היתרות והתשלומים מכל מי שמרים את הטלפון שלכם. מכיוון שאיננו אוספים או שומרים מידע אישי בשרתים, אין סיכון לדליפת מידע מצדנו.</p>`,
      },
      {
        heading: `הזכויות שלך`,
        content: `<p>יש לך את הזכויות הבאות לגבי הנתונים שלך:</p>
<ul><li>ניתן לצפות ולערוך את כל מה שהאפליקציה שומרת ישירות באפליקציה.</li><li>מחיקת הלוואה מסירה אותה יחד עם התשלומים שלה; הסרת האפליקציה מוחקת את כל הנתונים המקומיים.</li><li>ניתן לכבות את iCloud עבור LoanSolver בהגדרות המכשיר כך שהנתונים יישארו רק במכשיר, ולמחוק את עותק ה-iCloud מניהול האחסון של iCloud.</li><li>מכיוון שאיננו שומרים מידע אישי בשרתינו, אין נתונים שעלינו לספק, לשנות או למחוק.</li></ul>
<p>לשאלות על הנתונים שלך, אנא צרו קשר.</p>`,
      },
      {
        heading: `שינויים במדיניות זו`,
        content: `<p>אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. שינויים יופיעו בעמוד זה עם תאריך תוקף מעודכן. מומלץ לעיין בה מדי פעם.</p>`,
      },
      {
        heading: `יצירת קשר`,
        content: `<p>לשאלות על מדיניות פרטיות זו, פנו אלינו:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
}
