import type { PrivacySection, PrivacyPolicy } from './tarotaper-privacy'

export type { PrivacySection, PrivacyPolicy }

export const cozyballPrivacy: Record<string, PrivacyPolicy> = {
  en: {
    title: `Privacy Policy`,
    effectiveDate: `Effective Date: July 9, 2026`,
    intro: `NikiBStudio ("we", "our", or "us") built <strong>Cozy Ball</strong> ("the App") as a commercial application. This Privacy Policy explains how we handle information when you use our App.`,
    sections: [
      {
        heading: `Overview`,
        content: `<p>Cozy Ball is designed with your privacy in mind. We do not collect, store, or share any personal information. The App does not require account creation, login, or any form of user registration, and it contains no advertising.</p>`,
      },
      {
        heading: `Information We Do Not Collect`,
        content: `<p>We do not collect any of the following:</p>
<ul><li>Names, email addresses, or contact information</li><li>Location data</li><li>Device identifiers or advertising IDs</li><li>Browsing or search history</li><li>Contacts, photos, or other personal files</li><li>Health, fitness, or financial data</li><li>Usage analytics or behavioral tracking data</li></ul>`,
      },
      {
        heading: `Data Stored on Your Device`,
        content: `<p>The App stores game data locally on your device to provide its core functionality:</p>
<ul><li><strong>Game progress</strong> — your best score, collected pearls, unlocked ball skins, and selected skin.</li><li><strong>Daily missions</strong> — the current day's missions and their progress.</li><li><strong>App preferences</strong> — settings such as sound options.</li><li><strong>Purchase status</strong> — a cached indicator of your in-app purchases for faster app launch.</li></ul>
<p>All of this data is stored exclusively on your device and is not transmitted to us or any third party. You can delete all stored data at any time by uninstalling the App.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>The App offers optional integration with Apple Game Center for leaderboards. If you sign in to Game Center, your run distance is submitted to Apple's leaderboard service under your Game Center player profile. This is handled entirely by Apple; we do not have access to your Game Center account or any associated personal information. You can play the App fully without signing in to Game Center. Apple's handling of Game Center data is governed by Apple's Privacy Policy (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `In-App Purchases`,
        content: `<p>The App offers optional in-app purchases (such as revive and score doubler packs). All transactions are processed entirely by Apple through the App Store using StoreKit. We do not have access to your payment information, Apple ID, or billing details. Purchases can be restored on a new device using the "Restore Purchases" button. Apple's handling of your data is governed by Apple's Privacy Policy (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `No Third-Party Services`,
        content: `<p>The App does not integrate any third-party analytics, advertising, crash reporting, or social media SDKs. We do not use Firebase, Google Analytics, Facebook SDK, ad networks, or any similar services. The App makes no network requests of its own — the only network communication is performed by Apple's own frameworks (Game Center and the App Store) as described above.</p>`,
      },
      {
        heading: `Children's Privacy`,
        content: `<p>The App does not knowingly collect any personal information from anyone, including children. Since the App does not collect personal information from any user, no special provisions are necessary.</p>`,
      },
      {
        heading: `Data Security`,
        content: `<p>All game data remains on your device. Communication with Apple services (Game Center and the App Store) is handled by Apple's frameworks and encrypted by Apple. Since we do not collect or store any personal data on servers, there is no risk of a data breach affecting your personal information on our side.</p>`,
      },
      {
        heading: `Your Rights`,
        content: `<p>You have the following rights regarding your data:</p>
<ul><li>All App data is stored locally on your device and can be removed by uninstalling the App.</li><li>You can choose not to sign in to Game Center, in which case no scores are submitted to Apple's leaderboard service.</li><li>Since we do not collect or store personal data on our servers, there is no personal data for us to provide, modify, or delete.</li></ul>
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
    effectiveDate: `Дата вступления в силу: 9 июля 2026 г.`,
    intro: `NikiBStudio («мы», «наш» или «нас») разработала приложение <strong>Cozy Ball</strong> («Приложение») как коммерческий продукт. Настоящая Политика конфиденциальности описывает, как мы обращаемся с информацией при использовании вами нашего Приложения.`,
    sections: [
      {
        heading: `Обзор`,
        content: `<p>Приложение Cozy Ball разработано с заботой о вашей конфиденциальности. Мы не собираем, не храним и не передаём никакие персональные данные. Приложение не требует создания аккаунта, входа в систему или какой-либо регистрации и не содержит рекламы.</p>`,
      },
      {
        heading: `Информация, которую мы не собираем`,
        content: `<p>Мы не собираем следующие данные:</p>
<ul><li>Имена, адреса электронной почты или контактную информацию</li><li>Данные о местоположении</li><li>Идентификаторы устройств или рекламные идентификаторы</li><li>Историю просмотров или поиска</li><li>Контакты, фотографии или другие личные файлы</li><li>Данные о здоровье, физической активности или финансах</li><li>Аналитику использования или данные поведенческого отслеживания</li></ul>`,
      },
      {
        heading: `Данные, хранящиеся на вашем устройстве`,
        content: `<p>Приложение сохраняет игровые данные локально на вашем устройстве для обеспечения основных функций:</p>
<ul><li><strong>Игровой прогресс</strong> — ваш рекорд, собранные жемчужины, открытые и выбранные скины шара.</li><li><strong>Ежедневные миссии</strong> — задания текущего дня и их прогресс.</li><li><strong>Настройки приложения</strong> — например, параметры звука.</li><li><strong>Статус покупок</strong> — кешированный индикатор ваших встроенных покупок для быстрого запуска приложения.</li></ul>
<p>Все эти данные хранятся исключительно на вашем устройстве и не передаются нам или третьим лицам. Вы можете удалить все сохранённые данные в любое время, удалив Приложение.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>Приложение предлагает необязательную интеграцию с Apple Game Center для таблиц лидеров. Если вы войдёте в Game Center, дистанция вашего забега отправляется в сервис лидербордов Apple под вашим профилем игрока Game Center. Этот процесс полностью обрабатывается Apple; мы не имеем доступа к вашему аккаунту Game Center или связанной с ним личной информации. Вы можете полноценно играть без входа в Game Center. Обработка данных Game Center компанией Apple регулируется Политикой конфиденциальности Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Встроенные покупки`,
        content: `<p>Приложение предлагает необязательные встроенные покупки (например, наборы возрождений и удвоителей очков). Все транзакции полностью обрабатываются Apple через App Store с использованием StoreKit. Мы не имеем доступа к вашей платёжной информации, Apple ID или платёжным реквизитам. Покупки можно восстановить на новом устройстве кнопкой «Восстановить покупки». Обработка ваших данных компанией Apple регулируется Политикой конфиденциальности Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Отсутствие сторонних сервисов`,
        content: `<p>Приложение не интегрирует сторонние сервисы аналитики, рекламы, отчётов о сбоях или SDK социальных сетей. Мы не используем Firebase, Google Analytics, Facebook SDK, рекламные сети или аналогичные сервисы. Приложение не выполняет собственных сетевых запросов — сетевое взаимодействие осуществляется только фреймворками Apple (Game Center и App Store), как описано выше.</p>`,
      },
      {
        heading: `Конфиденциальность детей`,
        content: `<p>Приложение сознательно не собирает персональные данные ни у кого, включая детей. Поскольку Приложение не собирает персональные данные ни одного пользователя, специальные меры не требуются.</p>`,
      },
      {
        heading: `Безопасность данных`,
        content: `<p>Все игровые данные остаются на вашем устройстве. Взаимодействие с сервисами Apple (Game Center и App Store) осуществляется фреймворками Apple и шифруется Apple. Поскольку мы не собираем и не храним персональные данные на серверах, риск утечки данных с нашей стороны отсутствует.</p>`,
      },
      {
        heading: `Ваши права`,
        content: `<p>Вы имеете следующие права в отношении ваших данных:</p>
<ul><li>Все данные Приложения хранятся локально на вашем устройстве и могут быть удалены путём удаления Приложения.</li><li>Вы можете не входить в Game Center — в этом случае результаты не отправляются в сервис лидербордов Apple.</li><li>Поскольку мы не собираем и не храним персональные данные на наших серверах, нет данных, которые мы могли бы предоставить, изменить или удалить.</li></ul>
<p>Если у вас есть вопросы о ваших данных, свяжитесь с нами.</p>`,
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
    effectiveDate: `Gültig ab: 9. Juli 2026`,
    intro: `NikiBStudio („wir", „unser" oder „uns") hat <strong>Cozy Ball</strong> („die App") als kommerzielle Anwendung entwickelt. Diese Datenschutzrichtlinie erklärt, wie wir mit Informationen umgehen, wenn Sie unsere App nutzen.`,
    sections: [
      {
        heading: `Überblick`,
        content: `<p>Cozy Ball wurde mit Blick auf Ihre Privatsphäre entwickelt. Wir erfassen, speichern oder teilen keine persönlichen Daten. Die App erfordert keine Kontoerstellung, Anmeldung oder Registrierung und enthält keine Werbung.</p>`,
      },
      {
        heading: `Informationen, die wir nicht erfassen`,
        content: `<p>Wir erfassen keine der folgenden Daten:</p>
<ul><li>Namen, E-Mail-Adressen oder Kontaktinformationen</li><li>Standortdaten</li><li>Gerätekennungen oder Werbe-IDs</li><li>Browser- oder Suchverlauf</li><li>Kontakte, Fotos oder andere persönliche Dateien</li><li>Gesundheits-, Fitness- oder Finanzdaten</li><li>Nutzungsanalysen oder Verhaltenstracking-Daten</li></ul>`,
      },
      {
        heading: `Auf Ihrem Gerät gespeicherte Daten`,
        content: `<p>Die App speichert Spieldaten lokal auf Ihrem Gerät, um ihre Kernfunktionen bereitzustellen:</p>
<ul><li><strong>Spielfortschritt</strong> — Ihr Rekord, gesammelte Perlen sowie freigeschaltete und ausgewählte Ball-Skins.</li><li><strong>Tägliche Missionen</strong> — die Missionen des aktuellen Tages und ihr Fortschritt.</li><li><strong>App-Einstellungen</strong> — z. B. Soundoptionen.</li><li><strong>Kaufstatus</strong> — ein zwischengespeicherter Indikator Ihrer In-App-Käufe für einen schnelleren App-Start.</li></ul>
<p>All diese Daten werden ausschließlich auf Ihrem Gerät gespeichert und nicht an uns oder Dritte übertragen. Sie können alle gespeicherten Daten jederzeit durch Deinstallation der App löschen.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>Die App bietet eine optionale Integration mit Apple Game Center für Bestenlisten. Wenn Sie sich bei Game Center anmelden, wird Ihre Laufdistanz unter Ihrem Game-Center-Spielerprofil an Apples Bestenlisten-Dienst übermittelt. Dies wird vollständig von Apple abgewickelt; wir haben keinen Zugriff auf Ihr Game-Center-Konto oder damit verbundene persönliche Informationen. Sie können die App auch ohne Game-Center-Anmeldung vollständig nutzen. Apples Umgang mit Game-Center-Daten unterliegt der Datenschutzrichtlinie von Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `In-App-Käufe`,
        content: `<p>Die App bietet optionale In-App-Käufe (z. B. Wiederbelebungs- und Punkteverdoppler-Pakete). Alle Transaktionen werden vollständig von Apple über den App Store mit StoreKit abgewickelt. Wir haben keinen Zugriff auf Ihre Zahlungsinformationen, Ihre Apple-ID oder Rechnungsdetails. Käufe können auf einem neuen Gerät über die Schaltfläche „Käufe wiederherstellen" wiederhergestellt werden. Apples Umgang mit Ihren Daten unterliegt der Datenschutzrichtlinie von Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Keine Drittanbieter-Dienste`,
        content: `<p>Die App integriert keine Analyse-, Werbe-, Absturzbericht- oder Social-Media-SDKs von Drittanbietern. Wir verwenden weder Firebase, Google Analytics, Facebook SDK, Werbenetzwerke noch ähnliche Dienste. Die App stellt keine eigenen Netzwerkanfragen — die einzige Netzwerkkommunikation erfolgt über Apples eigene Frameworks (Game Center und App Store), wie oben beschrieben.</p>`,
      },
      {
        heading: `Datenschutz von Kindern`,
        content: `<p>Die App erfasst wissentlich keine persönlichen Daten von irgendjemandem, einschließlich Kindern. Da die App keine persönlichen Daten von Nutzern erfasst, sind keine besonderen Vorkehrungen erforderlich.</p>`,
      },
      {
        heading: `Datensicherheit`,
        content: `<p>Alle Spieldaten verbleiben auf Ihrem Gerät. Die Kommunikation mit Apple-Diensten (Game Center und App Store) wird von Apples Frameworks abgewickelt und von Apple verschlüsselt. Da wir keine persönlichen Daten auf Servern erfassen oder speichern, besteht auf unserer Seite kein Risiko einer Datenpanne.</p>`,
      },
      {
        heading: `Ihre Rechte`,
        content: `<p>Sie haben folgende Rechte bezüglich Ihrer Daten:</p>
<ul><li>Alle App-Daten werden lokal auf Ihrem Gerät gespeichert und können durch Deinstallation der App entfernt werden.</li><li>Sie können auf die Anmeldung bei Game Center verzichten — in diesem Fall werden keine Ergebnisse an Apples Bestenlisten-Dienst übermittelt.</li><li>Da wir keine persönlichen Daten auf unseren Servern erfassen oder speichern, gibt es keine persönlichen Daten, die wir bereitstellen, ändern oder löschen könnten.</li></ul>
<p>Bei Fragen zu Ihren Daten kontaktieren Sie uns bitte.</p>`,
      },
      {
        heading: `Änderungen dieser Richtlinie`,
        content: `<p>Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit einem aktualisierten Gültigkeitsdatum veröffentlicht. Wir empfehlen, diese Richtlinie regelmäßig zu überprüfen.</p>`,
      },
      {
        heading: `Kontakt`,
        content: `<p>Bei Fragen oder Anliegen zu dieser Datenschutzrichtlinie kontaktieren Sie uns bitte unter:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  fr: {
    title: `Politique de confidentialité`,
    effectiveDate: `Date d'entrée en vigueur : 9 juillet 2026`,
    intro: `NikiBStudio (« nous », « notre » ou « nos ») a développé <strong>Cozy Ball</strong> (« l'Application ») en tant qu'application commerciale. La présente Politique de confidentialité explique comment nous traitons les informations lorsque vous utilisez notre Application.`,
    sections: [
      {
        heading: `Aperçu`,
        content: `<p>Cozy Ball est conçue dans le respect de votre vie privée. Nous ne collectons, ne stockons et ne partageons aucune donnée personnelle. L'Application ne nécessite pas de création de compte, de connexion ou d'inscription, et ne contient aucune publicité.</p>`,
      },
      {
        heading: `Informations que nous ne collectons pas`,
        content: `<p>Nous ne collectons aucune des informations suivantes :</p>
<ul><li>Noms, adresses e-mail ou coordonnées</li><li>Données de localisation</li><li>Identifiants d'appareils ou identifiants publicitaires</li><li>Historique de navigation ou de recherche</li><li>Contacts, photos ou autres fichiers personnels</li><li>Données de santé, de forme physique ou financières</li><li>Analyses d'utilisation ou données de suivi comportemental</li></ul>`,
      },
      {
        heading: `Données stockées sur votre appareil`,
        content: `<p>L'Application stocke des données de jeu localement sur votre appareil pour fournir ses fonctionnalités principales :</p>
<ul><li><strong>Progression du jeu</strong> — votre meilleur score, les perles collectées, les skins de balle débloqués et sélectionnés.</li><li><strong>Missions quotidiennes</strong> — les missions du jour et leur progression.</li><li><strong>Préférences de l'application</strong> — paramètres tels que les options sonores.</li><li><strong>Statut d'achat</strong> — un indicateur en cache de vos achats intégrés pour un lancement plus rapide de l'application.</li></ul>
<p>Toutes ces données sont stockées exclusivement sur votre appareil et ne sont pas transmises à nous ou à des tiers. Vous pouvez supprimer toutes les données stockées à tout moment en désinstallant l'Application.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>L'Application propose une intégration facultative avec Apple Game Center pour les classements. Si vous vous connectez à Game Center, la distance de votre course est transmise au service de classement d'Apple sous votre profil de joueur Game Center. Ce processus est entièrement géré par Apple ; nous n'avons pas accès à votre compte Game Center ni aux informations personnelles associées. Vous pouvez jouer pleinement sans vous connecter à Game Center. Le traitement des données Game Center par Apple est régi par la Politique de confidentialité d'Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Achats intégrés`,
        content: `<p>L'Application propose des achats intégrés facultatifs (comme des packs de résurrection et de doubleur de score). Toutes les transactions sont entièrement traitées par Apple via l'App Store à l'aide de StoreKit. Nous n'avons pas accès à vos informations de paiement, votre identifiant Apple ou vos détails de facturation. Les achats peuvent être restaurés sur un nouvel appareil via le bouton « Restaurer les achats ». Le traitement de vos données par Apple est régi par la Politique de confidentialité d'Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Aucun service tiers`,
        content: `<p>L'Application n'intègre aucun SDK d'analyse, de publicité, de rapport d'erreurs ou de réseaux sociaux tiers. Nous n'utilisons pas Firebase, Google Analytics, Facebook SDK, de régies publicitaires ou tout service similaire. L'Application n'effectue aucune requête réseau propre — la seule communication réseau est effectuée par les frameworks d'Apple (Game Center et App Store), comme décrit ci-dessus.</p>`,
      },
      {
        heading: `Confidentialité des enfants`,
        content: `<p>L'Application ne collecte sciemment aucune donnée personnelle de quiconque, y compris les enfants. Étant donné que l'Application ne collecte pas de données personnelles de ses utilisateurs, aucune disposition spéciale n'est nécessaire.</p>`,
      },
      {
        heading: `Sécurité des données`,
        content: `<p>Toutes les données de jeu restent sur votre appareil. La communication avec les services Apple (Game Center et App Store) est gérée par les frameworks d'Apple et chiffrée par Apple. Étant donné que nous ne collectons ni ne stockons de données personnelles sur des serveurs, il n'existe aucun risque de violation de données de notre côté.</p>`,
      },
      {
        heading: `Vos droits`,
        content: `<p>Vous disposez des droits suivants concernant vos données :</p>
<ul><li>Toutes les données de l'Application sont stockées localement sur votre appareil et peuvent être supprimées en désinstallant l'Application.</li><li>Vous pouvez choisir de ne pas vous connecter à Game Center — dans ce cas, aucun score n'est transmis au service de classement d'Apple.</li><li>Étant donné que nous ne collectons ni ne stockons de données personnelles sur nos serveurs, il n'y a pas de données personnelles que nous pourrions fournir, modifier ou supprimer.</li></ul>
<p>Si vous avez des questions concernant vos données, veuillez nous contacter.</p>`,
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
    effectiveDate: `Fecha de vigencia: 9 de julio de 2026`,
    intro: `NikiBStudio ("nosotros", "nuestro" o "nos") ha desarrollado <strong>Cozy Ball</strong> ("la Aplicación") como una aplicación comercial. Esta Política de privacidad explica cómo manejamos la información cuando utiliza nuestra Aplicación.`,
    sections: [
      {
        heading: `Descripción general`,
        content: `<p>Cozy Ball está diseñada pensando en su privacidad. No recopilamos, almacenamos ni compartimos ninguna información personal. La Aplicación no requiere creación de cuenta, inicio de sesión ni ningún tipo de registro, y no contiene publicidad.</p>`,
      },
      {
        heading: `Información que no recopilamos`,
        content: `<p>No recopilamos ninguno de los siguientes datos:</p>
<ul><li>Nombres, direcciones de correo electrónico o información de contacto</li><li>Datos de ubicación</li><li>Identificadores de dispositivos o IDs publicitarios</li><li>Historial de navegación o búsqueda</li><li>Contactos, fotos u otros archivos personales</li><li>Datos de salud, actividad física o financieros</li><li>Análisis de uso o datos de seguimiento de comportamiento</li></ul>`,
      },
      {
        heading: `Datos almacenados en su dispositivo`,
        content: `<p>La Aplicación almacena datos de juego localmente en su dispositivo para proporcionar sus funciones principales:</p>
<ul><li><strong>Progreso del juego</strong> — su mejor puntuación, perlas recolectadas y skins de bola desbloqueadas y seleccionadas.</li><li><strong>Misiones diarias</strong> — las misiones del día actual y su progreso.</li><li><strong>Preferencias de la aplicación</strong> — ajustes como las opciones de sonido.</li><li><strong>Estado de compras</strong> — un indicador en caché de sus compras dentro de la aplicación para un inicio más rápido.</li></ul>
<p>Todos estos datos se almacenan exclusivamente en su dispositivo y no se transmiten a nosotros ni a terceros. Puede eliminar todos los datos almacenados en cualquier momento desinstalando la Aplicación.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>La Aplicación ofrece integración opcional con Apple Game Center para las clasificaciones. Si inicia sesión en Game Center, la distancia de su carrera se envía al servicio de clasificaciones de Apple bajo su perfil de jugador de Game Center. Esto es gestionado completamente por Apple; no tenemos acceso a su cuenta de Game Center ni a la información personal asociada. Puede jugar plenamente sin iniciar sesión en Game Center. El manejo de los datos de Game Center por parte de Apple se rige por la Política de privacidad de Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Compras dentro de la aplicación`,
        content: `<p>La Aplicación ofrece compras opcionales dentro de la aplicación (como packs de reanimación y duplicadores de puntuación). Todas las transacciones son procesadas completamente por Apple a través del App Store mediante StoreKit. No tenemos acceso a su información de pago, Apple ID ni detalles de facturación. Las compras pueden restaurarse en un nuevo dispositivo con el botón "Restaurar compras". El manejo de sus datos por parte de Apple se rige por la Política de privacidad de Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Sin servicios de terceros`,
        content: `<p>La Aplicación no integra ningún SDK de análisis, publicidad, informes de errores o redes sociales de terceros. No utilizamos Firebase, Google Analytics, Facebook SDK, redes publicitarias ni servicios similares. La Aplicación no realiza solicitudes de red propias — la única comunicación de red la realizan los frameworks de Apple (Game Center y App Store), como se describe arriba.</p>`,
      },
      {
        heading: `Privacidad infantil`,
        content: `<p>La Aplicación no recopila conscientemente información personal de nadie, incluidos los niños. Dado que la Aplicación no recopila información personal de ningún usuario, no se necesitan disposiciones especiales.</p>`,
      },
      {
        heading: `Seguridad de datos`,
        content: `<p>Todos los datos del juego permanecen en su dispositivo. La comunicación con los servicios de Apple (Game Center y App Store) es gestionada por los frameworks de Apple y cifrada por Apple. Dado que no recopilamos ni almacenamos datos personales en servidores, no existe riesgo de violación de datos por nuestra parte.</p>`,
      },
      {
        heading: `Sus derechos`,
        content: `<p>Usted tiene los siguientes derechos con respecto a sus datos:</p>
<ul><li>Todos los datos de la Aplicación se almacenan localmente en su dispositivo y pueden eliminarse desinstalando la Aplicación.</li><li>Puede optar por no iniciar sesión en Game Center, en cuyo caso no se envían puntuaciones al servicio de clasificaciones de Apple.</li><li>Dado que no recopilamos ni almacenamos datos personales en nuestros servidores, no hay datos personales que podamos proporcionar, modificar o eliminar.</li></ul>
<p>Si tiene preguntas sobre sus datos, contáctenos.</p>`,
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
    effectiveDate: `Data di entrata in vigore: 9 luglio 2026`,
    intro: `NikiBStudio ("noi", "nostro" o "ci") ha sviluppato <strong>Cozy Ball</strong> ("l'App") come applicazione commerciale. La presente Informativa sulla privacy spiega come trattiamo le informazioni quando utilizzi la nostra App.`,
    sections: [
      {
        heading: `Panoramica`,
        content: `<p>Cozy Ball è progettata nel rispetto della tua privacy. Non raccogliamo, memorizziamo o condividiamo alcuna informazione personale. L'App non richiede la creazione di un account, l'accesso o alcuna forma di registrazione e non contiene pubblicità.</p>`,
      },
      {
        heading: `Informazioni che non raccogliamo`,
        content: `<p>Non raccogliamo nessuno dei seguenti dati:</p>
<ul><li>Nomi, indirizzi e-mail o informazioni di contatto</li><li>Dati di localizzazione</li><li>Identificatori del dispositivo o ID pubblicitari</li><li>Cronologia di navigazione o ricerca</li><li>Contatti, foto o altri file personali</li><li>Dati sanitari, di fitness o finanziari</li><li>Analisi di utilizzo o dati di tracciamento comportamentale</li></ul>`,
      },
      {
        heading: `Dati memorizzati sul tuo dispositivo`,
        content: `<p>L'App memorizza i dati di gioco localmente sul tuo dispositivo per fornire le sue funzionalità principali:</p>
<ul><li><strong>Progressi di gioco</strong> — il tuo record, le perle raccolte e le skin della palla sbloccate e selezionate.</li><li><strong>Missioni giornaliere</strong> — le missioni del giorno corrente e i loro progressi.</li><li><strong>Preferenze dell'app</strong> — impostazioni come le opzioni audio.</li><li><strong>Stato degli acquisti</strong> — un indicatore memorizzato nella cache dei tuoi acquisti in-app per un avvio più rapido.</li></ul>
<p>Tutti questi dati sono memorizzati esclusivamente sul tuo dispositivo e non vengono trasmessi a noi o a terzi. Puoi eliminare tutti i dati memorizzati in qualsiasi momento disinstallando l'App.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>L'App offre un'integrazione facoltativa con Apple Game Center per le classifiche. Se accedi a Game Center, la distanza della tua corsa viene inviata al servizio classifiche di Apple sotto il tuo profilo giocatore Game Center. Questo processo è gestito interamente da Apple; non abbiamo accesso al tuo account Game Center né alle informazioni personali associate. Puoi giocare pienamente senza accedere a Game Center. Il trattamento dei dati Game Center da parte di Apple è regolato dall'Informativa sulla privacy di Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Acquisti in-app`,
        content: `<p>L'App offre acquisti in-app facoltativi (come pacchetti di resurrezione e raddoppiatori di punteggio). Tutte le transazioni sono elaborate interamente da Apple tramite l'App Store utilizzando StoreKit. Non abbiamo accesso alle tue informazioni di pagamento, al tuo ID Apple o ai dettagli di fatturazione. Gli acquisti possono essere ripristinati su un nuovo dispositivo con il pulsante "Ripristina acquisti". Il trattamento dei tuoi dati da parte di Apple è regolato dall'Informativa sulla privacy di Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Nessun servizio di terze parti`,
        content: `<p>L'App non integra SDK di analisi, pubblicità, segnalazione di errori o social media di terze parti. Non utilizziamo Firebase, Google Analytics, Facebook SDK, reti pubblicitarie o servizi simili. L'App non effettua richieste di rete proprie — l'unica comunicazione di rete è effettuata dai framework di Apple (Game Center e App Store), come descritto sopra.</p>`,
      },
      {
        heading: `Privacy dei minori`,
        content: `<p>L'App non raccoglie consapevolmente informazioni personali da nessuno, inclusi i bambini. Poiché l'App non raccoglie informazioni personali da alcun utente, non sono necessarie disposizioni speciali.</p>`,
      },
      {
        heading: `Sicurezza dei dati`,
        content: `<p>Tutti i dati di gioco rimangono sul tuo dispositivo. La comunicazione con i servizi Apple (Game Center e App Store) è gestita dai framework di Apple e crittografata da Apple. Poiché non raccogliamo né memorizziamo dati personali su server, non esiste alcun rischio di violazione dei dati da parte nostra.</p>`,
      },
      {
        heading: `I tuoi diritti`,
        content: `<p>Hai i seguenti diritti riguardo ai tuoi dati:</p>
<ul><li>Tutti i dati dell'App sono memorizzati localmente sul tuo dispositivo e possono essere rimossi disinstallando l'App.</li><li>Puoi scegliere di non accedere a Game Center — in tal caso nessun punteggio viene inviato al servizio classifiche di Apple.</li><li>Poiché non raccogliamo né memorizziamo dati personali sui nostri server, non ci sono dati personali che possiamo fornire, modificare o eliminare.</li></ul>
<p>Se hai domande sui tuoi dati, contattaci.</p>`,
      },
      {
        heading: `Modifiche a questa informativa`,
        content: `<p>Potremmo aggiornare questa Informativa sulla privacy di tanto in tanto. Eventuali modifiche saranno riportate su questa pagina con una data di entrata in vigore aggiornata. Ti invitiamo a rivedere periodicamente questa informativa.</p>`,
      },
      {
        heading: `Contattaci`,
        content: `<p>Se hai domande o dubbi su questa Informativa sulla privacy, contattaci a:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  pt: {
    title: `Política de privacidade`,
    effectiveDate: `Data de vigência: 9 de julho de 2026`,
    intro: `A NikiBStudio ("nós", "nosso" ou "nos") desenvolveu o <strong>Cozy Ball</strong> ("o App") como um aplicativo comercial. Esta Política de privacidade explica como tratamos as informações quando você usa nosso App.`,
    sections: [
      {
        heading: `Visão geral`,
        content: `<p>O Cozy Ball foi projetado pensando na sua privacidade. Não coletamos, armazenamos ou compartilhamos nenhuma informação pessoal. O App não exige criação de conta, login ou qualquer forma de registro, e não contém publicidade.</p>`,
      },
      {
        heading: `Informações que não coletamos`,
        content: `<p>Não coletamos nenhum dos seguintes dados:</p>
<ul><li>Nomes, endereços de e-mail ou informações de contato</li><li>Dados de localização</li><li>Identificadores de dispositivos ou IDs de publicidade</li><li>Histórico de navegação ou pesquisa</li><li>Contatos, fotos ou outros arquivos pessoais</li><li>Dados de saúde, condicionamento físico ou financeiros</li><li>Análises de uso ou dados de rastreamento comportamental</li></ul>`,
      },
      {
        heading: `Dados armazenados no seu dispositivo`,
        content: `<p>O App armazena dados de jogo localmente no seu dispositivo para fornecer suas funções principais:</p>
<ul><li><strong>Progresso do jogo</strong> — sua melhor pontuação, pérolas coletadas e skins de bola desbloqueadas e selecionadas.</li><li><strong>Missões diárias</strong> — as missões do dia atual e seu progresso.</li><li><strong>Preferências do app</strong> — configurações como opções de som.</li><li><strong>Status de compras</strong> — um indicador em cache das suas compras no app para inicialização mais rápida.</li></ul>
<p>Todos esses dados são armazenados exclusivamente no seu dispositivo e não são transmitidos a nós ou a terceiros. Você pode excluir todos os dados armazenados a qualquer momento desinstalando o App.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>O App oferece integração opcional com o Apple Game Center para rankings. Se você fizer login no Game Center, a distância da sua corrida é enviada ao serviço de rankings da Apple sob o seu perfil de jogador do Game Center. Isso é gerenciado inteiramente pela Apple; não temos acesso à sua conta do Game Center nem às informações pessoais associadas. Você pode jogar plenamente sem fazer login no Game Center. O tratamento dos dados do Game Center pela Apple é regido pela Política de privacidade da Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Compras no aplicativo`,
        content: `<p>O App oferece compras opcionais no aplicativo (como pacotes de reviver e duplicadores de pontuação). Todas as transações são processadas inteiramente pela Apple através da App Store usando o StoreKit. Não temos acesso às suas informações de pagamento, Apple ID ou detalhes de cobrança. As compras podem ser restauradas em um novo dispositivo com o botão "Restaurar compras". O tratamento dos seus dados pela Apple é regido pela Política de privacidade da Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Sem serviços de terceiros`,
        content: `<p>O App não integra SDKs de análise, publicidade, relatórios de falhas ou redes sociais de terceiros. Não usamos Firebase, Google Analytics, Facebook SDK, redes de anúncios ou serviços semelhantes. O App não faz solicitações de rede próprias — a única comunicação de rede é realizada pelos frameworks da Apple (Game Center e App Store), conforme descrito acima.</p>`,
      },
      {
        heading: `Privacidade infantil`,
        content: `<p>O App não coleta conscientemente informações pessoais de ninguém, incluindo crianças. Como o App não coleta informações pessoais de nenhum usuário, não são necessárias disposições especiais.</p>`,
      },
      {
        heading: `Segurança de dados`,
        content: `<p>Todos os dados do jogo permanecem no seu dispositivo. A comunicação com os serviços da Apple (Game Center e App Store) é gerenciada pelos frameworks da Apple e criptografada pela Apple. Como não coletamos nem armazenamos dados pessoais em servidores, não há risco de violação de dados do nosso lado.</p>`,
      },
      {
        heading: `Seus direitos`,
        content: `<p>Você tem os seguintes direitos em relação aos seus dados:</p>
<ul><li>Todos os dados do App são armazenados localmente no seu dispositivo e podem ser removidos desinstalando o App.</li><li>Você pode optar por não fazer login no Game Center — nesse caso, nenhuma pontuação é enviada ao serviço de rankings da Apple.</li><li>Como não coletamos nem armazenamos dados pessoais em nossos servidores, não há dados pessoais que possamos fornecer, modificar ou excluir.</li></ul>
<p>Se você tiver dúvidas sobre seus dados, entre em contato conosco.</p>`,
      },
      {
        heading: `Alterações nesta política`,
        content: `<p>Podemos atualizar esta Política de privacidade de tempos em tempos. Quaisquer alterações serão refletidas nesta página com uma data de vigência atualizada. Recomendamos que você revise esta política periodicamente.</p>`,
      },
      {
        heading: `Fale conosco`,
        content: `<p>Se você tiver dúvidas ou preocupações sobre esta Política de privacidade, entre em contato conosco em:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  ja: {
    title: `プライバシーポリシー`,
    effectiveDate: `発効日：2026年7月9日`,
    intro: `NikiBStudio（「当社」）は、商用アプリケーションとして<strong>Cozy Ball</strong>（「本アプリ」）を開発しました。本プライバシーポリシーは、お客様が本アプリを使用する際の情報の取り扱いについて説明します。`,
    sections: [
      {
        heading: `概要`,
        content: `<p>Cozy Ballはお客様のプライバシーに配慮して設計されています。当社は個人情報を一切収集、保存、共有しません。本アプリはアカウント作成、ログイン、登録を必要とせず、広告も含まれていません。</p>`,
      },
      {
        heading: `当社が収集しない情報`,
        content: `<p>当社は以下の情報を一切収集しません：</p>
<ul><li>氏名、メールアドレス、連絡先情報</li><li>位置情報</li><li>デバイス識別子や広告ID</li><li>閲覧・検索履歴</li><li>連絡先、写真、その他の個人ファイル</li><li>健康、フィットネス、財務データ</li><li>使用状況分析や行動追跡データ</li></ul>`,
      },
      {
        heading: `デバイスに保存されるデータ`,
        content: `<p>本アプリは、主要機能を提供するためにゲームデータをデバイスにローカル保存します：</p>
<ul><li><strong>ゲームの進行状況</strong> — ベストスコア、集めたパール、解放済み・選択中のボールスキン。</li><li><strong>デイリーミッション</strong> — 当日のミッションとその進捗。</li><li><strong>アプリ設定</strong> — サウンドオプションなどの設定。</li><li><strong>購入ステータス</strong> — アプリを高速に起動するためのアプリ内購入のキャッシュ。</li></ul>
<p>これらのデータはすべてお客様のデバイスにのみ保存され、当社や第三者に送信されることはありません。本アプリをアンインストールすることで、保存されたすべてのデータをいつでも削除できます。</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>本アプリは、ランキングのためにApple Game Centerとのオプション統合を提供します。Game Centerにサインインすると、走行距離がGame CenterプレイヤープロフィールのもとでAppleのランキングサービスに送信されます。これは完全にAppleによって処理され、当社はお客様のGame Centerアカウントや関連する個人情報にアクセスできません。Game Centerにサインインしなくても本アプリを完全にプレイできます。AppleによるGame Centerデータの取り扱いは、Appleのプライバシーポリシー（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）に準拠します。</p>`,
      },
      {
        heading: `アプリ内購入`,
        content: `<p>本アプリはオプションのアプリ内購入（リバイブパックやスコア倍増パックなど）を提供します。すべての取引はStoreKitを使用してApp Store経由でAppleにより完全に処理されます。当社はお客様の支払い情報、Apple ID、請求詳細にアクセスできません。購入は「購入を復元」ボタンで新しいデバイスに復元できます。Appleによるデータの取り扱いは、Appleのプライバシーポリシー（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）に準拠します。</p>`,
      },
      {
        heading: `サードパーティサービスなし`,
        content: `<p>本アプリは、サードパーティの分析、広告、クラッシュレポート、ソーシャルメディアSDKを一切統合していません。Firebase、Google Analytics、Facebook SDK、広告ネットワークなどのサービスは使用していません。本アプリ自体はネットワークリクエストを行いません — ネットワーク通信は上記のとおりApple自身のフレームワーク（Game CenterとApp Store）によってのみ行われます。</p>`,
      },
      {
        heading: `子どものプライバシー`,
        content: `<p>本アプリは、子どもを含む誰からも個人情報を意図的に収集しません。本アプリはいかなるユーザーからも個人情報を収集しないため、特別な規定は不要です。</p>`,
      },
      {
        heading: `データセキュリティ`,
        content: `<p>すべてのゲームデータはお客様のデバイスに残ります。Appleサービス（Game CenterとApp Store）との通信はAppleのフレームワークによって処理され、Appleによって暗号化されます。当社はサーバー上で個人データを収集・保存しないため、当社側でのデータ漏洩のリスクはありません。</p>`,
      },
      {
        heading: `お客様の権利`,
        content: `<p>お客様はご自身のデータについて以下の権利を有します：</p>
<ul><li>本アプリのすべてのデータはデバイスにローカル保存されており、本アプリをアンインストールすることで削除できます。</li><li>Game Centerにサインインしないことを選択できます。その場合、スコアはAppleのランキングサービスに送信されません。</li><li>当社はサーバー上で個人データを収集・保存しないため、当社が提供、変更、削除できる個人データは存在しません。</li></ul>
<p>データについてご質問がある場合は、お問い合わせください。</p>`,
      },
      {
        heading: `本ポリシーの変更`,
        content: `<p>当社は本プライバシーポリシーを随時更新することがあります。変更はこのページに更新された発効日とともに反映されます。定期的にこのポリシーをご確認いただくことをお勧めします。</p>`,
      },
      {
        heading: `お問い合わせ`,
        content: `<p>本プライバシーポリシーについてご質問やご不明な点がある場合は、以下までお問い合わせください：</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  ko: {
    title: `개인정보 처리방침`,
    effectiveDate: `시행일: 2026년 7월 9일`,
    intro: `NikiBStudio("당사")는 상업용 애플리케이션으로 <strong>Cozy Ball</strong>("본 앱")을 개발했습니다. 본 개인정보 처리방침은 귀하가 본 앱을 사용할 때 당사가 정보를 처리하는 방식을 설명합니다.`,
    sections: [
      {
        heading: `개요`,
        content: `<p>Cozy Ball은 귀하의 개인정보를 염두에 두고 설계되었습니다. 당사는 어떠한 개인정보도 수집, 저장 또는 공유하지 않습니다. 본 앱은 계정 생성, 로그인 또는 어떤 형태의 등록도 요구하지 않으며 광고를 포함하지 않습니다.</p>`,
      },
      {
        heading: `당사가 수집하지 않는 정보`,
        content: `<p>당사는 다음 정보를 일절 수집하지 않습니다:</p>
<ul><li>이름, 이메일 주소 또는 연락처 정보</li><li>위치 데이터</li><li>기기 식별자 또는 광고 ID</li><li>탐색 또는 검색 기록</li><li>연락처, 사진 또는 기타 개인 파일</li><li>건강, 피트니스 또는 금융 데이터</li><li>사용 분석 또는 행동 추적 데이터</li></ul>`,
      },
      {
        heading: `기기에 저장되는 데이터`,
        content: `<p>본 앱은 핵심 기능을 제공하기 위해 게임 데이터를 기기에 로컬로 저장합니다:</p>
<ul><li><strong>게임 진행 상황</strong> — 최고 점수, 수집한 진주, 잠금 해제 및 선택된 볼 스킨.</li><li><strong>일일 미션</strong> — 당일의 미션과 진행 상황.</li><li><strong>앱 설정</strong> — 사운드 옵션 등의 설정.</li><li><strong>구매 상태</strong> — 빠른 앱 실행을 위한 인앱 구매의 캐시 표시기.</li></ul>
<p>이 모든 데이터는 귀하의 기기에만 저장되며 당사나 제3자에게 전송되지 않습니다. 본 앱을 삭제하면 저장된 모든 데이터를 언제든지 삭제할 수 있습니다.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>본 앱은 리더보드를 위해 Apple Game Center와의 선택적 통합을 제공합니다. Game Center에 로그인하면 주행 거리가 Game Center 플레이어 프로필로 Apple의 리더보드 서비스에 제출됩니다. 이는 전적으로 Apple이 처리하며, 당사는 귀하의 Game Center 계정이나 관련 개인정보에 접근할 수 없습니다. Game Center에 로그인하지 않고도 본 앱을 완전히 플레이할 수 있습니다. Apple의 Game Center 데이터 처리는 Apple 개인정보 처리방침(<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>)의 적용을 받습니다.</p>`,
      },
      {
        heading: `인앱 구매`,
        content: `<p>본 앱은 선택적 인앱 구매(부활 팩, 점수 2배 팩 등)를 제공합니다. 모든 거래는 StoreKit을 사용하여 App Store를 통해 Apple이 전적으로 처리합니다. 당사는 귀하의 결제 정보, Apple ID 또는 청구 세부 정보에 접근할 수 없습니다. 구매는 "구매 복원" 버튼으로 새 기기에서 복원할 수 있습니다. Apple의 데이터 처리는 Apple 개인정보 처리방침(<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>)의 적용을 받습니다.</p>`,
      },
      {
        heading: `제3자 서비스 없음`,
        content: `<p>본 앱은 제3자 분석, 광고, 충돌 보고 또는 소셜 미디어 SDK를 통합하지 않습니다. 당사는 Firebase, Google Analytics, Facebook SDK, 광고 네트워크 또는 유사한 서비스를 사용하지 않습니다. 본 앱은 자체 네트워크 요청을 하지 않으며, 유일한 네트워크 통신은 위에서 설명한 대로 Apple 자체 프레임워크(Game Center 및 App Store)에 의해 수행됩니다.</p>`,
      },
      {
        heading: `아동의 개인정보`,
        content: `<p>본 앱은 아동을 포함한 누구로부터도 의도적으로 개인정보를 수집하지 않습니다. 본 앱은 어떤 사용자로부터도 개인정보를 수집하지 않으므로 특별한 조치가 필요하지 않습니다.</p>`,
      },
      {
        heading: `데이터 보안`,
        content: `<p>모든 게임 데이터는 귀하의 기기에 남아 있습니다. Apple 서비스(Game Center 및 App Store)와의 통신은 Apple의 프레임워크가 처리하며 Apple이 암호화합니다. 당사는 서버에서 개인 데이터를 수집하거나 저장하지 않으므로 당사 측에서 데이터 유출 위험이 없습니다.</p>`,
      },
      {
        heading: `귀하의 권리`,
        content: `<p>귀하는 데이터에 대해 다음과 같은 권리를 가집니다:</p>
<ul><li>본 앱의 모든 데이터는 기기에 로컬로 저장되며 본 앱을 삭제하여 제거할 수 있습니다.</li><li>Game Center에 로그인하지 않기로 선택할 수 있으며, 이 경우 점수가 Apple의 리더보드 서비스에 제출되지 않습니다.</li><li>당사는 서버에서 개인 데이터를 수집하거나 저장하지 않으므로 당사가 제공, 수정 또는 삭제할 개인 데이터가 없습니다.</li></ul>
<p>데이터에 대해 질문이 있으시면 문의해 주세요.</p>`,
      },
      {
        heading: `본 방침의 변경`,
        content: `<p>당사는 본 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 변경 사항은 업데이트된 시행일과 함께 이 페이지에 반영됩니다. 본 방침을 주기적으로 검토하시기 바랍니다.</p>`,
      },
      {
        heading: `문의하기`,
        content: `<p>본 개인정보 처리방침에 대해 질문이나 우려 사항이 있으시면 다음으로 문의해 주세요:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  zh: {
    title: `隐私政策`,
    effectiveDate: `生效日期：2026年7月9日`,
    intro: `NikiBStudio（"我们"）开发了 <strong>Cozy Ball</strong>（"本应用"）作为商业应用程序。本隐私政策说明了您使用本应用时我们如何处理信息。`,
    sections: [
      {
        heading: `概述`,
        content: `<p>Cozy Ball 的设计充分考虑了您的隐私。我们不收集、存储或共享任何个人信息。本应用不要求创建帐户、登录或任何形式的注册，也不包含广告。</p>`,
      },
      {
        heading: `我们不收集的信息`,
        content: `<p>我们不收集以下任何信息：</p>
<ul><li>姓名、电子邮件地址或联系信息</li><li>位置数据</li><li>设备标识符或广告ID</li><li>浏览或搜索历史</li><li>联系人、照片或其他个人文件</li><li>健康、健身或财务数据</li><li>使用分析或行为追踪数据</li></ul>`,
      },
      {
        heading: `存储在您设备上的数据`,
        content: `<p>本应用在您的设备上本地存储游戏数据以提供其核心功能：</p>
<ul><li><strong>游戏进度</strong> — 您的最佳成绩、收集的珍珠、已解锁和已选择的球体皮肤。</li><li><strong>每日任务</strong> — 当天的任务及其进度。</li><li><strong>应用偏好设置</strong> — 例如声音选项。</li><li><strong>购买状态</strong> — 用于更快启动应用的内购状态缓存。</li></ul>
<p>所有这些数据仅存储在您的设备上，不会传输给我们或任何第三方。您可以随时通过卸载本应用删除所有存储的数据。</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>本应用提供与 Apple Game Center 排行榜的可选集成。如果您登录 Game Center，您的跑程距离将以您的 Game Center 玩家资料提交至 Apple 的排行榜服务。这完全由 Apple 处理；我们无法访问您的 Game Center 帐户或任何相关个人信息。您无需登录 Game Center 即可完整游玩本应用。Apple 对 Game Center 数据的处理受 Apple 隐私政策（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）管辖。</p>`,
      },
      {
        heading: `应用内购买`,
        content: `<p>本应用提供可选的应用内购买（如复活包和分数翻倍包）。所有交易均由 Apple 通过 App Store 使用 StoreKit 完全处理。我们无法访问您的付款信息、Apple ID 或账单详情。购买可通过"恢复购买"按钮在新设备上恢复。Apple 对您数据的处理受 Apple 隐私政策（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）管辖。</p>`,
      },
      {
        heading: `无第三方服务`,
        content: `<p>本应用不集成任何第三方分析、广告、崩溃报告或社交媒体SDK。我们不使用 Firebase、Google Analytics、Facebook SDK、广告网络或任何类似服务。本应用本身不发出任何网络请求 — 唯一的网络通信由 Apple 自己的框架（Game Center 和 App Store）执行，如上所述。</p>`,
      },
      {
        heading: `儿童隐私`,
        content: `<p>本应用不会故意收集任何人（包括儿童）的个人信息。由于本应用不收集任何用户的个人信息，因此无需特殊规定。</p>`,
      },
      {
        heading: `数据安全`,
        content: `<p>所有游戏数据均保留在您的设备上。与 Apple 服务（Game Center 和 App Store）的通信由 Apple 的框架处理并由 Apple 加密。由于我们不在服务器上收集或存储个人数据，因此我们这边不存在数据泄露风险。</p>`,
      },
      {
        heading: `您的权利`,
        content: `<p>您对自己的数据拥有以下权利：</p>
<ul><li>本应用的所有数据都本地存储在您的设备上，可以通过卸载本应用来删除。</li><li>您可以选择不登录 Game Center，在这种情况下不会向 Apple 的排行榜服务提交任何成绩。</li><li>由于我们不在服务器上收集或存储个人数据，因此没有我们可以提供、修改或删除的个人数据。</li></ul>
<p>如果您对您的数据有任何疑问，请与我们联系。</p>`,
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
    effectiveDate: `تاريخ السريان: 9 يوليو 2026`,
    intro: `قامت NikiBStudio ("نحن" أو "لنا") بتطوير <strong>Cozy Ball</strong> ("التطبيق") كتطبيق تجاري. توضح سياسة الخصوصية هذه كيفية تعاملنا مع المعلومات عند استخدامك لتطبيقنا.`,
    sections: [
      {
        heading: `نظرة عامة`,
        content: `<p>صُمم Cozy Ball مع مراعاة خصوصيتك. نحن لا نجمع أو نخزن أو نشارك أي معلومات شخصية. لا يتطلب التطبيق إنشاء حساب أو تسجيل دخول أو أي شكل من أشكال التسجيل، ولا يحتوي على أي إعلانات.</p>`,
      },
      {
        heading: `المعلومات التي لا نجمعها`,
        content: `<p>نحن لا نجمع أيًا مما يلي:</p>
<ul><li>الأسماء أو عناوين البريد الإلكتروني أو معلومات الاتصال</li><li>بيانات الموقع</li><li>معرّفات الأجهزة أو معرّفات الإعلانات</li><li>سجل التصفح أو البحث</li><li>جهات الاتصال أو الصور أو الملفات الشخصية الأخرى</li><li>البيانات الصحية أو الرياضية أو المالية</li><li>تحليلات الاستخدام أو بيانات التتبع السلوكي</li></ul>`,
      },
      {
        heading: `البيانات المخزنة على جهازك`,
        content: `<p>يخزن التطبيق بيانات اللعبة محليًا على جهازك لتوفير وظائفه الأساسية:</p>
<ul><li><strong>تقدم اللعبة</strong> — أفضل نتيجة لك، واللآلئ التي جمعتها، وأشكال الكرة المفتوحة والمختارة.</li><li><strong>المهام اليومية</strong> — مهام اليوم الحالي وتقدمها.</li><li><strong>تفضيلات التطبيق</strong> — إعدادات مثل خيارات الصوت.</li><li><strong>حالة الشراء</strong> — مؤشر مخزن مؤقتًا لمشترياتك داخل التطبيق لتشغيل أسرع.</li></ul>
<p>تُخزن كل هذه البيانات حصريًا على جهازك ولا تُنقل إلينا أو إلى أي طرف ثالث. يمكنك حذف جميع البيانات المخزنة في أي وقت عن طريق إلغاء تثبيت التطبيق.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>يوفر التطبيق تكاملًا اختياريًا مع Apple Game Center للوحات الصدارة. إذا سجلت الدخول إلى Game Center، تُرسل مسافة جولتك إلى خدمة لوحات الصدارة من Apple تحت ملف اللاعب الخاص بك في Game Center. تتم إدارة ذلك بالكامل بواسطة Apple؛ ولا يمكننا الوصول إلى حسابك في Game Center أو أي معلومات شخصية مرتبطة به. يمكنك اللعب بشكل كامل دون تسجيل الدخول إلى Game Center. يخضع تعامل Apple مع بيانات Game Center لسياسة خصوصية Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `المشتريات داخل التطبيق`,
        content: `<p>يوفر التطبيق مشتريات اختيارية داخل التطبيق (مثل حزم الإحياء ومضاعفات النقاط). تتم معالجة جميع المعاملات بالكامل بواسطة Apple عبر App Store باستخدام StoreKit. لا يمكننا الوصول إلى معلومات الدفع الخاصة بك أو Apple ID أو تفاصيل الفوترة. يمكن استعادة المشتريات على جهاز جديد باستخدام زر "استعادة المشتريات". يخضع تعامل Apple مع بياناتك لسياسة خصوصية Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `لا خدمات من أطراف ثالثة`,
        content: `<p>لا يدمج التطبيق أي أدوات تحليلات أو إعلانات أو تقارير أعطال أو حزم تطوير وسائل التواصل الاجتماعي من أطراف ثالثة. نحن لا نستخدم Firebase أو Google Analytics أو Facebook SDK أو شبكات إعلانية أو أي خدمات مماثلة. لا يقوم التطبيق بأي طلبات شبكة خاصة به — الاتصال الشبكي الوحيد تقوم به أُطر عمل Apple نفسها (Game Center وApp Store) كما هو موضح أعلاه.</p>`,
      },
      {
        heading: `خصوصية الأطفال`,
        content: `<p>لا يجمع التطبيق عن قصد أي معلومات شخصية من أي شخص، بمن فيهم الأطفال. وبما أن التطبيق لا يجمع معلومات شخصية من أي مستخدم، فلا حاجة لأحكام خاصة.</p>`,
      },
      {
        heading: `أمان البيانات`,
        content: `<p>تبقى جميع بيانات اللعبة على جهازك. يتم التواصل مع خدمات Apple (Game Center وApp Store) بواسطة أُطر عمل Apple ويتم تشفيره بواسطة Apple. وبما أننا لا نجمع أو نخزن أي بيانات شخصية على الخوادم، فلا يوجد خطر لاختراق البيانات من جانبنا.</p>`,
      },
      {
        heading: `حقوقك`,
        content: `<p>لديك الحقوق التالية فيما يتعلق ببياناتك:</p>
<ul><li>تُخزن جميع بيانات التطبيق محليًا على جهازك ويمكن إزالتها عن طريق إلغاء تثبيت التطبيق.</li><li>يمكنك اختيار عدم تسجيل الدخول إلى Game Center — وفي هذه الحالة لا تُرسل أي نتائج إلى خدمة لوحات الصدارة من Apple.</li><li>وبما أننا لا نجمع أو نخزن بيانات شخصية على خوادمنا، فلا توجد بيانات شخصية يمكننا تقديمها أو تعديلها أو حذفها.</li></ul>
<p>إذا كانت لديك أي أسئلة حول بياناتك، يرجى الاتصال بنا.</p>`,
      },
      {
        heading: `التغييرات على هذه السياسة`,
        content: `<p>قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. ستنعكس أي تغييرات على هذه الصفحة مع تاريخ سريان محدث. نشجعك على مراجعة هذه السياسة بشكل دوري.</p>`,
      },
      {
        heading: `اتصل بنا`,
        content: `<p>إذا كانت لديك أي أسئلة أو استفسارات حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  hi: {
    title: `गोपनीयता नीति`,
    effectiveDate: `प्रभावी तिथि: 9 जुलाई 2026`,
    intro: `NikiBStudio ("हम", "हमारा") ने <strong>Cozy Ball</strong> ("ऐप") को एक व्यावसायिक एप्लिकेशन के रूप में विकसित किया है। यह गोपनीयता नीति बताती है कि जब आप हमारे ऐप का उपयोग करते हैं तो हम जानकारी को कैसे संभालते हैं।`,
    sections: [
      {
        heading: `अवलोकन`,
        content: `<p>Cozy Ball को आपकी गोपनीयता को ध्यान में रखकर डिज़ाइन किया गया है। हम कोई व्यक्तिगत जानकारी एकत्र, संग्रहीत या साझा नहीं करते। ऐप को खाता बनाने, लॉगिन या किसी भी प्रकार के पंजीकरण की आवश्यकता नहीं है, और इसमें कोई विज्ञापन नहीं है।</p>`,
      },
      {
        heading: `जानकारी जो हम एकत्र नहीं करते`,
        content: `<p>हम निम्नलिखित में से कुछ भी एकत्र नहीं करते:</p>
<ul><li>नाम, ईमेल पते या संपर्क जानकारी</li><li>स्थान डेटा</li><li>डिवाइस पहचानकर्ता या विज्ञापन ID</li><li>ब्राउज़िंग या खोज इतिहास</li><li>संपर्क, फ़ोटो या अन्य व्यक्तिगत फ़ाइलें</li><li>स्वास्थ्य, फिटनेस या वित्तीय डेटा</li><li>उपयोग विश्लेषण या व्यवहार ट्रैकिंग डेटा</li></ul>`,
      },
      {
        heading: `आपके डिवाइस पर संग्रहीत डेटा`,
        content: `<p>ऐप अपनी मुख्य कार्यक्षमता प्रदान करने के लिए गेम डेटा को आपके डिवाइस पर स्थानीय रूप से संग्रहीत करता है:</p>
<ul><li><strong>गेम प्रगति</strong> — आपका सर्वश्रेष्ठ स्कोर, एकत्रित मोती, अनलॉक और चयनित बॉल स्किन।</li><li><strong>दैनिक मिशन</strong> — वर्तमान दिन के मिशन और उनकी प्रगति।</li><li><strong>ऐप प्राथमिकताएँ</strong> — जैसे ध्वनि विकल्प।</li><li><strong>खरीद स्थिति</strong> — तेज़ ऐप लॉन्च के लिए आपकी इन-ऐप खरीद का कैश्ड संकेतक।</li></ul>
<p>यह सारा डेटा केवल आपके डिवाइस पर संग्रहीत होता है और हमें या किसी तीसरे पक्ष को प्रेषित नहीं किया जाता। आप ऐप को अनइंस्टॉल करके कभी भी सारा संग्रहीत डेटा हटा सकते हैं।</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>ऐप लीडरबोर्ड के लिए Apple Game Center के साथ वैकल्पिक एकीकरण प्रदान करता है। यदि आप Game Center में साइन इन करते हैं, तो आपकी दौड़ की दूरी आपके Game Center खिलाड़ी प्रोफ़ाइल के तहत Apple की लीडरबोर्ड सेवा को भेजी जाती है। यह पूरी तरह Apple द्वारा संभाला जाता है; हमारे पास आपके Game Center खाते या संबंधित व्यक्तिगत जानकारी तक पहुँच नहीं है। आप Game Center में साइन इन किए बिना ऐप को पूरी तरह खेल सकते हैं। Apple द्वारा Game Center डेटा का प्रबंधन Apple की गोपनीयता नीति (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>) द्वारा शासित है।</p>`,
      },
      {
        heading: `इन-ऐप खरीदारी`,
        content: `<p>ऐप वैकल्पिक इन-ऐप खरीदारी प्रदान करता है (जैसे रिवाइव और स्कोर डबलर पैक)। सभी लेनदेन StoreKit का उपयोग करके App Store के माध्यम से पूरी तरह Apple द्वारा संसाधित किए जाते हैं। हमारे पास आपकी भुगतान जानकारी, Apple ID या बिलिंग विवरण तक पहुँच नहीं है। "खरीदारी पुनर्स्थापित करें" बटन से नई डिवाइस पर खरीदारी बहाल की जा सकती है। Apple द्वारा आपके डेटा का प्रबंधन Apple की गोपनीयता नीति (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>) द्वारा शासित है।</p>`,
      },
      {
        heading: `कोई तृतीय-पक्ष सेवाएँ नहीं`,
        content: `<p>ऐप किसी तृतीय-पक्ष विश्लेषण, विज्ञापन, क्रैश रिपोर्टिंग या सोशल मीडिया SDK को एकीकृत नहीं करता। हम Firebase, Google Analytics, Facebook SDK, विज्ञापन नेटवर्क या इसी तरह की सेवाओं का उपयोग नहीं करते। ऐप अपनी ओर से कोई नेटवर्क अनुरोध नहीं करता — एकमात्र नेटवर्क संचार Apple के अपने फ्रेमवर्क (Game Center और App Store) द्वारा किया जाता है, जैसा ऊपर बताया गया है।</p>`,
      },
      {
        heading: `बच्चों की गोपनीयता`,
        content: `<p>ऐप जानबूझकर किसी से भी, बच्चों सहित, कोई व्यक्तिगत जानकारी एकत्र नहीं करता। चूँकि ऐप किसी भी उपयोगकर्ता से व्यक्तिगत जानकारी एकत्र नहीं करता, इसलिए किसी विशेष प्रावधान की आवश्यकता नहीं है।</p>`,
      },
      {
        heading: `डेटा सुरक्षा`,
        content: `<p>सारा गेम डेटा आपके डिवाइस पर रहता है। Apple सेवाओं (Game Center और App Store) के साथ संचार Apple के फ्रेमवर्क द्वारा संभाला जाता है और Apple द्वारा एन्क्रिप्ट किया जाता है। चूँकि हम सर्वर पर कोई व्यक्तिगत डेटा एकत्र या संग्रहीत नहीं करते, हमारी ओर से डेटा उल्लंघन का कोई जोखिम नहीं है।</p>`,
      },
      {
        heading: `आपके अधिकार`,
        content: `<p>आपके डेटा के संबंध में आपके निम्नलिखित अधिकार हैं:</p>
<ul><li>ऐप का सारा डेटा आपके डिवाइस पर स्थानीय रूप से संग्रहीत है और ऐप को अनइंस्टॉल करके हटाया जा सकता है।</li><li>आप Game Center में साइन इन न करने का विकल्प चुन सकते हैं — इस स्थिति में कोई स्कोर Apple की लीडरबोर्ड सेवा को नहीं भेजा जाता।</li><li>चूँकि हम अपने सर्वर पर व्यक्तिगत डेटा एकत्र या संग्रहीत नहीं करते, इसलिए ऐसा कोई व्यक्तिगत डेटा नहीं है जिसे हम प्रदान, संशोधित या हटा सकें।</li></ul>
<p>यदि आपके डेटा के बारे में कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें।</p>`,
      },
      {
        heading: `इस नीति में परिवर्तन`,
        content: `<p>हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। कोई भी परिवर्तन इस पृष्ठ पर अपडेटेड प्रभावी तिथि के साथ दिखाई देगा। हम आपको समय-समय पर इस नीति की समीक्षा करने के लिए प्रोत्साहित करते हैं।</p>`,
      },
      {
        heading: `हमसे संपर्क करें`,
        content: `<p>यदि इस गोपनीयता नीति के बारे में आपके कोई प्रश्न या चिंताएँ हैं, तो कृपया हमसे संपर्क करें:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
  he: {
    title: `מדיניות פרטיות`,
    effectiveDate: `תאריך כניסה לתוקף: 9 ביולי 2026`,
    intro: `NikiBStudio ("אנחנו" או "שלנו") פיתחה את <strong>Cozy Ball</strong> ("האפליקציה") כאפליקציה מסחרית. מדיניות פרטיות זו מסבירה כיצד אנו מטפלים במידע כאשר אתם משתמשים באפליקציה שלנו.`,
    sections: [
      {
        heading: `סקירה כללית`,
        content: `<p>Cozy Ball תוכננה מתוך מחשבה על הפרטיות שלכם. איננו אוספים, שומרים או משתפים מידע אישי כלשהו. האפליקציה אינה דורשת יצירת חשבון, התחברות או כל צורת רישום, ואינה מכילה פרסומות.</p>`,
      },
      {
        heading: `מידע שאיננו אוספים`,
        content: `<p>איננו אוספים אף אחד מהבאים:</p>
<ul><li>שמות, כתובות דוא"ל או פרטי קשר</li><li>נתוני מיקום</li><li>מזהי מכשירים או מזהי פרסום</li><li>היסטוריית גלישה או חיפוש</li><li>אנשי קשר, תמונות או קבצים אישיים אחרים</li><li>נתוני בריאות, כושר או פיננסים</li><li>ניתוחי שימוש או נתוני מעקב התנהגותי</li></ul>`,
      },
      {
        heading: `נתונים המאוחסנים במכשיר שלכם`,
        content: `<p>האפליקציה שומרת נתוני משחק באופן מקומי במכשיר שלכם כדי לספק את הפונקציונליות המרכזית שלה:</p>
<ul><li><strong>התקדמות במשחק</strong> — השיא שלכם, פנינים שנאספו, וסקיני כדור שנפתחו ונבחרו.</li><li><strong>משימות יומיות</strong> — משימות היום הנוכחי וההתקדמות בהן.</li><li><strong>העדפות אפליקציה</strong> — הגדרות כגון אפשרויות סאונד.</li><li><strong>סטטוס רכישות</strong> — אינדיקטור שמור של הרכישות שלכם בתוך האפליקציה להפעלה מהירה יותר.</li></ul>
<p>כל הנתונים הללו נשמרים אך ורק במכשיר שלכם ואינם מועברים אלינו או לצד שלישי כלשהו. תוכלו למחוק את כל הנתונים השמורים בכל עת על ידי הסרת האפליקציה.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>האפליקציה מציעה אינטגרציה אופציונלית עם Apple Game Center עבור טבלאות מובילים. אם תתחברו ל-Game Center, מרחק הריצה שלכם יישלח לשירות טבלאות המובילים של Apple תחת פרופיל השחקן שלכם ב-Game Center. תהליך זה מנוהל כולו על ידי Apple; אין לנו גישה לחשבון ה-Game Center שלכם או למידע אישי הקשור אליו. ניתן לשחק באפליקציה במלואה ללא התחברות ל-Game Center. הטיפול של Apple בנתוני Game Center כפוף למדיניות הפרטיות של Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `רכישות בתוך האפליקציה`,
        content: `<p>האפליקציה מציעה רכישות אופציונליות בתוך האפליקציה (כגון חבילות החייאה ומכפילי ניקוד). כל העסקאות מעובדות במלואן על ידי Apple דרך ה-App Store באמצעות StoreKit. אין לנו גישה לפרטי התשלום שלכם, ל-Apple ID או לפרטי החיוב. ניתן לשחזר רכישות במכשיר חדש באמצעות כפתור "שחזור רכישות". הטיפול של Apple בנתונים שלכם כפוף למדיניות הפרטיות של Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `ללא שירותי צד שלישי`,
        content: `<p>האפליקציה אינה משלבת SDK של אנליטיקה, פרסום, דיווח קריסות או רשתות חברתיות של צד שלישי. איננו משתמשים ב-Firebase, Google Analytics, Facebook SDK, רשתות פרסום או שירותים דומים. האפליקציה אינה מבצעת בקשות רשת משלה — תקשורת הרשת היחידה מתבצעת על ידי המסגרות של Apple עצמה (Game Center ו-App Store), כמתואר לעיל.</p>`,
      },
      {
        heading: `פרטיות ילדים`,
        content: `<p>האפליקציה אינה אוספת ביודעין מידע אישי מאף אחד, כולל ילדים. מכיוון שהאפליקציה אינה אוספת מידע אישי מאף משתמש, אין צורך בהוראות מיוחדות.</p>`,
      },
      {
        heading: `אבטחת נתונים`,
        content: `<p>כל נתוני המשחק נשארים במכשיר שלכם. התקשורת עם שירותי Apple (Game Center ו-App Store) מנוהלת על ידי המסגרות של Apple ומוצפנת על ידי Apple. מכיוון שאיננו אוספים או שומרים נתונים אישיים בשרתים, אין סיכון לדליפת נתונים מצידנו.</p>`,
      },
      {
        heading: `הזכויות שלכם`,
        content: `<p>יש לכם את הזכויות הבאות בנוגע לנתונים שלכם:</p>
<ul><li>כל נתוני האפליקציה נשמרים באופן מקומי במכשיר שלכם וניתן להסירם על ידי הסרת האפליקציה.</li><li>תוכלו לבחור שלא להתחבר ל-Game Center — במקרה זה לא יישלחו תוצאות לשירות טבלאות המובילים של Apple.</li><li>מכיוון שאיננו אוספים או שומרים נתונים אישיים בשרתים שלנו, אין נתונים אישיים שנוכל לספק, לשנות או למחוק.</li></ul>
<p>אם יש לכם שאלות על הנתונים שלכם, אנא צרו איתנו קשר.</p>`,
      },
      {
        heading: `שינויים במדיניות זו`,
        content: `<p>אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. כל שינוי יופיע בעמוד זה עם תאריך כניסה לתוקף מעודכן. אנו ממליצים לעיין במדיניות זו מעת לעת.</p>`,
      },
      {
        heading: `צרו קשר`,
        content: `<p>אם יש לכם שאלות או חששות לגבי מדיניות פרטיות זו, אנא צרו איתנו קשר בכתובת:</p>
<p><a href="mailto:B.S.NikishinG@gmail.com">B.S.NikishinG@gmail.com</a></p>`,
      },
    ],
  },
}
