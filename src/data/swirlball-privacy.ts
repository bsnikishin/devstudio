import type { PrivacySection, PrivacyPolicy } from './tarotaper-privacy'

export type { PrivacySection, PrivacyPolicy }

export const swirlballPrivacy: Record<string, PrivacyPolicy> = {
  en: {
    title: `Privacy Policy`,
    effectiveDate: `Effective Date: July 14, 2026`,
    intro: `NikiBStudio ("we", "our", or "us") built <strong>SwirlBall</strong> ("the App") as a commercial application. This Privacy Policy explains how we handle information when you use our App.`,
    sections: [
      {
        heading: `Overview`,
        content: `<p>SwirlBall is designed with your privacy in mind. We do not collect, store, or share any personal information. The App does not require account creation, login, or any form of user registration, and it contains no advertising.</p>`,
      },
      {
        heading: `Information We Do Not Collect`,
        content: `<p>We do not collect any of the following:</p>
<ul><li>Names, email addresses, or contact information</li><li>Location data</li><li>Device identifiers or advertising IDs</li><li>Browsing or search history</li><li>Contacts, photos, or other personal files</li><li>Health, fitness, or financial data</li><li>Usage analytics or behavioral tracking data</li></ul>`,
      },
      {
        heading: `Data Stored on Your Device`,
        content: `<p>The App stores game data locally on your device to provide its core functionality:</p>
<ul><li><strong>Game progress</strong> — completed levels, best scores, and your best Endless Tower depth.</li><li><strong>Sparks and skins</strong> — your soft-currency balance and unlocked ball skins.</li><li><strong>Purchase balances</strong> — remaining revive tokens, reward-doubling activations, and a cached indicator of permanent purchases.</li><li><strong>App preferences</strong> — control mode, sensitivity, calibration, sound, music, haptics, and reduced-effects settings.</li><li><strong>Technical event log</strong> — a small, size-capped log of gameplay events (for example, "level completed") kept only on your device to help with support requests you initiate. It contains no personal data and is never transmitted automatically.</li></ul>
<p>All of this data is stored exclusively on your device and is not transmitted to us or any third party. You can delete all stored data at any time by uninstalling the App.</p>`,
      },
      {
        heading: `In-App Purchases`,
        content: `<p>The App offers optional in-app purchases: revive packs, a permanent revive, reward-doubling packs, a permanent doubler, and a voluntary "Support the Developer" tip that grants no gameplay advantage. All transactions are processed entirely by Apple through the App Store using StoreKit. We do not have access to your payment information, Apple ID, or billing details. Purchases can be restored on a new device using the "Restore Purchases" button. Apple's handling of your data is governed by Apple's Privacy Policy (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `No Third-Party Services`,
        content: `<p>The App does not integrate any third-party analytics, advertising, crash reporting, or social media SDKs. We do not use Firebase, Google Analytics, Facebook SDK, ad networks, or any similar services. The App makes no network requests of its own — the only network communication is performed by Apple's own App Store framework for purchases, as described above.</p>`,
      },
      {
        heading: `Children's Privacy`,
        content: `<p>The App does not knowingly collect any personal information from anyone, including children. Since the App does not collect personal information from any user, no special provisions are necessary.</p>`,
      },
      {
        heading: `Data Security`,
        content: `<p>All game data remains on your device. Communication with the App Store is handled by Apple's frameworks and encrypted by Apple. Since we do not collect or store any personal data on servers, there is no risk of a data breach affecting your personal information on our side.</p>`,
      },
      {
        heading: `Your Rights`,
        content: `<p>You have the following rights regarding your data:</p>
<ul><li>All App data is stored locally on your device and can be removed by uninstalling the App.</li><li>Since we do not collect or store personal data on our servers, there is no personal data for us to provide, modify, or delete.</li></ul>
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
    effectiveDate: `Дата вступления в силу: 14 июля 2026 г.`,
    intro: `NikiBStudio («мы», «наш» или «нас») разработала приложение <strong>SwirlBall</strong> («Приложение») как коммерческий продукт. Настоящая Политика конфиденциальности описывает, как мы обращаемся с информацией при использовании вами нашего Приложения.`,
    sections: [
      {
        heading: `Обзор`,
        content: `<p>Приложение SwirlBall разработано с заботой о вашей конфиденциальности. Мы не собираем, не храним и не передаём никакие персональные данные. Приложение не требует создания аккаунта, входа в систему или какой-либо регистрации и не содержит рекламы.</p>`,
      },
      {
        heading: `Информация, которую мы не собираем`,
        content: `<p>Мы не собираем следующие данные:</p>
<ul><li>Имена, адреса электронной почты или контактную информацию</li><li>Данные о местоположении</li><li>Идентификаторы устройств или рекламные идентификаторы</li><li>Историю просмотров или поиска</li><li>Контакты, фотографии или другие личные файлы</li><li>Данные о здоровье, физической активности или финансах</li><li>Аналитику использования или данные поведенческого отслеживания</li></ul>`,
      },
      {
        heading: `Данные, хранящиеся на вашем устройстве`,
        content: `<p>Приложение сохраняет игровые данные локально на вашем устройстве для обеспечения основных функций:</p>
<ul><li><strong>Игровой прогресс</strong> — пройденные уровни, лучшие результаты и рекордная глубина Бесконечной башни.</li><li><strong>Искры и скины</strong> — баланс игровой валюты и открытые скины шара.</li><li><strong>Остатки покупок</strong> — жетоны воскрешения, активации удвоения награды и кешированный признак постоянных покупок.</li><li><strong>Настройки приложения</strong> — режим управления, чувствительность, калибровка, звук, музыка, вибрация и режим сокращённых эффектов.</li><li><strong>Технический журнал событий</strong> — небольшой журнал игровых событий (например, «уровень пройден») с ограниченным размером, который хранится только на устройстве и помогает разбирать обращения в поддержку, инициированные вами. Он не содержит личных данных и никогда не передаётся автоматически.</li></ul>
<p>Все эти данные хранятся исключительно на вашем устройстве и не передаются ни нам, ни третьим лицам. Вы можете удалить их в любой момент, удалив Приложение.</p>`,
      },
      {
        heading: `Встроенные покупки`,
        content: `<p>Приложение предлагает необязательные встроенные покупки: наборы воскрешений, постоянное воскрешение, наборы удвоения награды, постоянное удвоение и добровольную поддержку «Спасибо разработчику», которая не даёт игровых преимуществ. Все транзакции полностью обрабатываются Apple через App Store с использованием StoreKit. У нас нет доступа к вашей платёжной информации, Apple ID или платёжным реквизитам. Покупки можно восстановить на новом устройстве кнопкой «Восстановить покупки». Обработка данных Apple регулируется политикой конфиденциальности Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Без сторонних сервисов`,
        content: `<p>Приложение не использует сторонние SDK аналитики, рекламы, отчётов о сбоях или социальных сетей. Мы не используем Firebase, Google Analytics, Facebook SDK, рекламные сети и подобные сервисы. Приложение не выполняет собственных сетевых запросов — единственное сетевое взаимодействие осуществляют собственные фреймворки Apple (App Store) для покупок, как описано выше.</p>`,
      },
      {
        heading: `Конфиденциальность детей`,
        content: `<p>Приложение сознательно не собирает персональные данные ни у кого, включая детей. Поскольку Приложение не собирает персональные данные ни у одного пользователя, специальные положения не требуются.</p>`,
      },
      {
        heading: `Безопасность данных`,
        content: `<p>Все игровые данные остаются на вашем устройстве. Связь с App Store осуществляется фреймворками Apple и шифруется Apple. Поскольку мы не собираем и не храним персональные данные на серверах, утечка данных с нашей стороны, затрагивающая вашу личную информацию, невозможна.</p>`,
      },
      {
        heading: `Ваши права`,
        content: `<p>В отношении своих данных вы имеете следующие права:</p>
<ul><li>Все данные Приложения хранятся локально на устройстве и удаляются вместе с Приложением.</li><li>Поскольку мы не собираем и не храним персональные данные на серверах, у нас нет персональных данных, которые нужно предоставлять, изменять или удалять.</li></ul>
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
    effectiveDate: `Gültig ab: 14. Juli 2026`,
    intro: `NikiBStudio („wir", „unser" oder „uns") hat <strong>SwirlBall</strong> („die App") als kommerzielle Anwendung entwickelt. Diese Datenschutzerklärung erläutert, wie wir mit Informationen umgehen, wenn Sie unsere App nutzen.`,
    sections: [
      {
        heading: `Überblick`,
        content: `<p>SwirlBall wurde mit Blick auf Ihre Privatsphäre entwickelt. Wir erheben, speichern und teilen keinerlei personenbezogene Daten. Die App erfordert keine Kontoerstellung, keine Anmeldung und keinerlei Registrierung und enthält keine Werbung.</p>`,
      },
      {
        heading: `Daten, die wir nicht erheben`,
        content: `<p>Wir erheben keine der folgenden Daten:</p>
<ul><li>Namen, E-Mail-Adressen oder Kontaktdaten</li><li>Standortdaten</li><li>Gerätekennungen oder Werbe-IDs</li><li>Browser- oder Suchverlauf</li><li>Kontakte, Fotos oder andere persönliche Dateien</li><li>Gesundheits-, Fitness- oder Finanzdaten</li><li>Nutzungsanalysen oder Tracking-Daten</li></ul>`,
      },
      {
        heading: `Auf Ihrem Gerät gespeicherte Daten`,
        content: `<p>Die App speichert Spieldaten lokal auf Ihrem Gerät, um ihre Kernfunktionen bereitzustellen:</p>
<ul><li><strong>Spielfortschritt</strong> — abgeschlossene Level, Bestwerte und Ihre beste Tiefe im Endlos-Turm.</li><li><strong>Funken und Skins</strong> — Ihr Guthaben an Spielwährung und freigeschaltete Ball-Skins.</li><li><strong>Kaufguthaben</strong> — verbleibende Wiederbelebungs-Token, Verdopplungs-Aktivierungen und ein zwischengespeicherter Status dauerhafter Käufe.</li><li><strong>App-Einstellungen</strong> — Steuerungsmodus, Empfindlichkeit, Kalibrierung, Ton, Musik, Haptik und reduzierte Effekte.</li><li><strong>Technisches Ereignisprotokoll</strong> — ein kleines, größenbegrenztes Protokoll von Spielereignissen (z. B. „Level abgeschlossen"), das nur auf Ihrem Gerät verbleibt und bei von Ihnen initiierten Support-Anfragen hilft. Es enthält keine personenbezogenen Daten und wird niemals automatisch übertragen.</li></ul>
<p>All diese Daten werden ausschließlich auf Ihrem Gerät gespeichert und weder an uns noch an Dritte übertragen. Sie können alle Daten jederzeit durch Deinstallation der App löschen.</p>`,
      },
      {
        heading: `In-App-Käufe`,
        content: `<p>Die App bietet optionale In-App-Käufe: Wiederbelebungs-Pakete, eine dauerhafte Wiederbelebung, Verdopplungs-Pakete, einen dauerhaften Verdoppler sowie ein freiwilliges „Entwickler unterstützen"-Trinkgeld ohne spielerischen Vorteil. Alle Transaktionen werden vollständig von Apple über den App Store mit StoreKit abgewickelt. Wir haben keinen Zugriff auf Ihre Zahlungsinformationen, Ihre Apple-ID oder Abrechnungsdaten. Käufe können auf einem neuen Gerät über „Käufe wiederherstellen" wiederhergestellt werden. Apples Umgang mit Ihren Daten unterliegt der Datenschutzrichtlinie von Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Keine Drittanbieterdienste`,
        content: `<p>Die App integriert keine Analyse-, Werbe-, Crash-Reporting- oder Social-Media-SDKs von Drittanbietern. Wir verwenden weder Firebase noch Google Analytics, Facebook SDK, Werbenetzwerke oder ähnliche Dienste. Die App stellt keine eigenen Netzwerkanfragen — die einzige Netzwerkkommunikation erfolgt durch Apples eigenes App-Store-Framework für Käufe, wie oben beschrieben.</p>`,
      },
      {
        heading: `Datenschutz von Kindern`,
        content: `<p>Die App erhebt wissentlich keine personenbezogenen Daten von niemandem, auch nicht von Kindern. Da die App von keinem Nutzer personenbezogene Daten erhebt, sind keine besonderen Bestimmungen erforderlich.</p>`,
      },
      {
        heading: `Datensicherheit`,
        content: `<p>Alle Spieldaten verbleiben auf Ihrem Gerät. Die Kommunikation mit dem App Store wird von Apples Frameworks abgewickelt und von Apple verschlüsselt. Da wir keine personenbezogenen Daten auf Servern erheben oder speichern, besteht unsererseits kein Risiko einer Datenpanne.</p>`,
      },
      {
        heading: `Ihre Rechte`,
        content: `<p>Sie haben folgende Rechte bezüglich Ihrer Daten:</p>
<ul><li>Alle App-Daten werden lokal auf Ihrem Gerät gespeichert und können durch Deinstallation der App entfernt werden.</li><li>Da wir keine personenbezogenen Daten auf unseren Servern speichern, gibt es keine Daten, die wir bereitstellen, ändern oder löschen könnten.</li></ul>
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
    effectiveDate: `Date d'entrée en vigueur : 14 juillet 2026`,
    intro: `NikiBStudio (« nous », « notre » ou « nos ») a développé <strong>SwirlBall</strong> (« l'Application ») en tant qu'application commerciale. Cette politique de confidentialité explique comment nous traitons les informations lorsque vous utilisez notre Application.`,
    sections: [
      {
        heading: `Aperçu`,
        content: `<p>SwirlBall est conçue dans le respect de votre vie privée. Nous ne collectons, ne stockons et ne partageons aucune information personnelle. L'Application ne nécessite ni création de compte, ni connexion, ni aucune forme d'inscription, et ne contient aucune publicité.</p>`,
      },
      {
        heading: `Informations que nous ne collectons pas`,
        content: `<p>Nous ne collectons aucune des données suivantes :</p>
<ul><li>Noms, adresses e-mail ou coordonnées</li><li>Données de localisation</li><li>Identifiants d'appareil ou identifiants publicitaires</li><li>Historique de navigation ou de recherche</li><li>Contacts, photos ou autres fichiers personnels</li><li>Données de santé, de forme physique ou financières</li><li>Analyses d'utilisation ou données de suivi comportemental</li></ul>`,
      },
      {
        heading: `Données stockées sur votre appareil`,
        content: `<p>L'Application stocke des données de jeu localement sur votre appareil pour assurer ses fonctionnalités principales :</p>
<ul><li><strong>Progression</strong> — niveaux terminés, meilleurs scores et votre meilleure profondeur dans la Tour infinie.</li><li><strong>Étincelles et skins</strong> — votre solde de monnaie de jeu et les skins de balle débloqués.</li><li><strong>Soldes d'achats</strong> — jetons de réanimation restants, activations de doublement et un indicateur en cache des achats permanents.</li><li><strong>Préférences</strong> — mode de contrôle, sensibilité, calibrage, son, musique, haptique et effets réduits.</li><li><strong>Journal technique</strong> — un petit journal d'événements de jeu (par exemple « niveau terminé ») à taille limitée, conservé uniquement sur votre appareil pour faciliter les demandes de support que vous initiez. Il ne contient aucune donnée personnelle et n'est jamais transmis automatiquement.</li></ul>
<p>Toutes ces données sont stockées exclusivement sur votre appareil et ne sont transmises ni à nous ni à des tiers. Vous pouvez les supprimer à tout moment en désinstallant l'Application.</p>`,
      },
      {
        heading: `Achats intégrés`,
        content: `<p>L'Application propose des achats intégrés facultatifs : packs de réanimations, réanimation permanente, packs de doublement de récompenses, doubleur permanent et un pourboire volontaire « Soutenir le développeur » qui n'apporte aucun avantage de jeu. Toutes les transactions sont traitées entièrement par Apple via l'App Store avec StoreKit. Nous n'avons pas accès à vos informations de paiement, à votre identifiant Apple ni à vos données de facturation. Les achats peuvent être restaurés sur un nouvel appareil avec le bouton « Restaurer les achats ». Le traitement de vos données par Apple est régi par la politique de confidentialité d'Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Aucun service tiers`,
        content: `<p>L'Application n'intègre aucun SDK tiers d'analyse, de publicité, de rapport de plantage ou de réseaux sociaux. Nous n'utilisons ni Firebase, ni Google Analytics, ni le SDK Facebook, ni des régies publicitaires, ni aucun service similaire. L'Application n'émet aucune requête réseau propre — la seule communication réseau est effectuée par le framework App Store d'Apple pour les achats, comme décrit ci-dessus.</p>`,
      },
      {
        heading: `Confidentialité des enfants`,
        content: `<p>L'Application ne collecte sciemment aucune information personnelle auprès de quiconque, y compris les enfants. Puisqu'elle ne collecte de données personnelles d'aucun utilisateur, aucune disposition particulière n'est nécessaire.</p>`,
      },
      {
        heading: `Sécurité des données`,
        content: `<p>Toutes les données de jeu restent sur votre appareil. La communication avec l'App Store est gérée par les frameworks d'Apple et chiffrée par Apple. Comme nous ne collectons ni ne stockons aucune donnée personnelle sur des serveurs, aucune fuite de données ne peut affecter vos informations personnelles de notre côté.</p>`,
      },
      {
        heading: `Vos droits`,
        content: `<p>Vous disposez des droits suivants concernant vos données :</p>
<ul><li>Toutes les données de l'Application sont stockées localement et peuvent être supprimées en désinstallant l'Application.</li><li>Comme nous ne stockons aucune donnée personnelle sur nos serveurs, il n'existe aucune donnée à fournir, modifier ou supprimer.</li></ul>
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
    effectiveDate: `Fecha de entrada en vigor: 14 de julio de 2026`,
    intro: `NikiBStudio («nosotros» o «nuestro») desarrolló <strong>SwirlBall</strong> («la App») como aplicación comercial. Esta Política de privacidad explica cómo tratamos la información cuando usas nuestra App.`,
    sections: [
      {
        heading: `Resumen`,
        content: `<p>SwirlBall está diseñada pensando en tu privacidad. No recopilamos, almacenamos ni compartimos información personal. La App no requiere crear una cuenta, iniciar sesión ni ningún tipo de registro, y no contiene publicidad.</p>`,
      },
      {
        heading: `Información que no recopilamos`,
        content: `<p>No recopilamos nada de lo siguiente:</p>
<ul><li>Nombres, correos electrónicos o datos de contacto</li><li>Datos de ubicación</li><li>Identificadores del dispositivo o publicitarios</li><li>Historial de navegación o búsqueda</li><li>Contactos, fotos u otros archivos personales</li><li>Datos de salud, actividad física o finanzas</li><li>Analíticas de uso o datos de seguimiento</li></ul>`,
      },
      {
        heading: `Datos almacenados en tu dispositivo`,
        content: `<p>La App guarda datos de juego localmente en tu dispositivo para ofrecer sus funciones principales:</p>
<ul><li><strong>Progreso</strong> — niveles completados, mejores puntuaciones y tu mejor profundidad en la Torre infinita.</li><li><strong>Chispas y skins</strong> — tu saldo de moneda de juego y las skins de pelota desbloqueadas.</li><li><strong>Saldos de compras</strong> — fichas de reanimación restantes, activaciones de duplicación y un indicador en caché de compras permanentes.</li><li><strong>Preferencias</strong> — modo de control, sensibilidad, calibración, sonido, música, hápticos y efectos reducidos.</li><li><strong>Registro técnico</strong> — un pequeño registro de eventos de juego (por ejemplo, «nivel completado») de tamaño limitado, guardado solo en tu dispositivo para ayudar con solicitudes de soporte que tú inicies. No contiene datos personales y nunca se transmite automáticamente.</li></ul>
<p>Todos estos datos se almacenan exclusivamente en tu dispositivo y no se transmiten a nosotros ni a terceros. Puedes eliminarlos en cualquier momento desinstalando la App.</p>`,
      },
      {
        heading: `Compras dentro de la app`,
        content: `<p>La App ofrece compras opcionales: packs de reanimaciones, reanimación permanente, packs de duplicación de recompensas, duplicador permanente y una propina voluntaria «Apoyar al desarrollador» que no otorga ventajas de juego. Todas las transacciones las procesa íntegramente Apple a través del App Store con StoreKit. No tenemos acceso a tu información de pago, Apple ID ni datos de facturación. Las compras pueden restaurarse en un dispositivo nuevo con el botón «Restaurar compras». El tratamiento de tus datos por parte de Apple se rige por su política de privacidad (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Sin servicios de terceros`,
        content: `<p>La App no integra SDK de analítica, publicidad, informes de fallos ni redes sociales de terceros. No usamos Firebase, Google Analytics, Facebook SDK, redes publicitarias ni servicios similares. La App no realiza solicitudes de red propias: la única comunicación de red la realiza el framework del App Store de Apple para las compras, como se describe arriba.</p>`,
      },
      {
        heading: `Privacidad de los menores`,
        content: `<p>La App no recopila deliberadamente información personal de nadie, incluidos los menores. Dado que la App no recopila información personal de ningún usuario, no se requieren disposiciones especiales.</p>`,
      },
      {
        heading: `Seguridad de los datos`,
        content: `<p>Todos los datos de juego permanecen en tu dispositivo. La comunicación con el App Store la gestionan los frameworks de Apple y la cifra Apple. Como no recopilamos ni almacenamos datos personales en servidores, no existe riesgo de que una filtración por nuestra parte afecte tu información personal.</p>`,
      },
      {
        heading: `Tus derechos`,
        content: `<p>Tienes los siguientes derechos sobre tus datos:</p>
<ul><li>Todos los datos de la App se almacenan localmente y pueden eliminarse desinstalando la App.</li><li>Como no almacenamos datos personales en nuestros servidores, no hay datos que proporcionar, modificar o eliminar.</li></ul>
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
    effectiveDate: `Data di entrata in vigore: 14 luglio 2026`,
    intro: `NikiBStudio («noi» o «nostro») ha sviluppato <strong>SwirlBall</strong> («l'App») come applicazione commerciale. Questa informativa spiega come trattiamo le informazioni quando usi la nostra App.`,
    sections: [
      {
        heading: `Panoramica`,
        content: `<p>SwirlBall è progettata nel rispetto della tua privacy. Non raccogliamo, memorizziamo né condividiamo alcuna informazione personale. L'App non richiede la creazione di un account, l'accesso o alcuna registrazione e non contiene pubblicità.</p>`,
      },
      {
        heading: `Informazioni che non raccogliamo`,
        content: `<p>Non raccogliamo nulla di quanto segue:</p>
<ul><li>Nomi, indirizzi e-mail o recapiti</li><li>Dati di posizione</li><li>Identificatori del dispositivo o pubblicitari</li><li>Cronologia di navigazione o ricerca</li><li>Contatti, foto o altri file personali</li><li>Dati su salute, attività fisica o finanze</li><li>Analisi d'uso o dati di tracciamento</li></ul>`,
      },
      {
        heading: `Dati memorizzati sul tuo dispositivo`,
        content: `<p>L'App salva i dati di gioco localmente sul tuo dispositivo per fornire le funzioni principali:</p>
<ul><li><strong>Progressi</strong> — livelli completati, migliori punteggi e la tua profondità record nella Torre infinita.</li><li><strong>Scintille e skin</strong> — il saldo di valuta di gioco e le skin della palla sbloccate.</li><li><strong>Saldi acquisti</strong> — gettoni di resurrezione rimanenti, attivazioni del raddoppio e un indicatore in cache degli acquisti permanenti.</li><li><strong>Preferenze</strong> — modalità di controllo, sensibilità, calibrazione, suoni, musica, feedback aptico ed effetti ridotti.</li><li><strong>Registro tecnico</strong> — un piccolo registro di eventi di gioco (ad es. «livello completato») a dimensione limitata, conservato solo sul dispositivo per aiutare nelle richieste di supporto da te avviate. Non contiene dati personali e non viene mai trasmesso automaticamente.</li></ul>
<p>Tutti questi dati sono memorizzati esclusivamente sul tuo dispositivo e non vengono trasmessi a noi né a terzi. Puoi eliminarli in qualsiasi momento disinstallando l'App.</p>`,
      },
      {
        heading: `Acquisti in-app`,
        content: `<p>L'App offre acquisti opzionali: pacchetti di resurrezioni, resurrezione permanente, pacchetti di raddoppio ricompense, raddoppio permanente e una mancia volontaria «Sostieni lo sviluppatore» che non dà vantaggi di gioco. Tutte le transazioni sono gestite interamente da Apple tramite l'App Store con StoreKit. Non abbiamo accesso ai tuoi dati di pagamento, all'Apple ID o ai dati di fatturazione. Gli acquisti possono essere ripristinati su un nuovo dispositivo con «Ripristina acquisti». Il trattamento dei dati da parte di Apple è regolato dall'informativa di Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Nessun servizio di terze parti`,
        content: `<p>L'App non integra SDK di analisi, pubblicità, crash reporting o social media di terze parti. Non usiamo Firebase, Google Analytics, Facebook SDK, reti pubblicitarie o servizi simili. L'App non effettua richieste di rete proprie: l'unica comunicazione di rete è svolta dal framework App Store di Apple per gli acquisti, come descritto sopra.</p>`,
      },
      {
        heading: `Privacy dei minori`,
        content: `<p>L'App non raccoglie consapevolmente informazioni personali da nessuno, minori inclusi. Poiché l'App non raccoglie dati personali da alcun utente, non sono necessarie disposizioni particolari.</p>`,
      },
      {
        heading: `Sicurezza dei dati`,
        content: `<p>Tutti i dati di gioco restano sul tuo dispositivo. La comunicazione con l'App Store è gestita dai framework di Apple e cifrata da Apple. Non raccogliendo né memorizzando dati personali su server, da parte nostra non esiste rischio di violazione dei tuoi dati.</p>`,
      },
      {
        heading: `I tuoi diritti`,
        content: `<p>Hai i seguenti diritti sui tuoi dati:</p>
<ul><li>Tutti i dati dell'App sono memorizzati localmente e possono essere rimossi disinstallando l'App.</li><li>Non conservando dati personali sui nostri server, non esistono dati da fornire, modificare o eliminare.</li></ul>
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
    effectiveDate: `Data de vigência: 14 de julho de 2026`,
    intro: `A NikiBStudio («nós» ou «nosso») desenvolveu o <strong>SwirlBall</strong> («o App») como aplicativo comercial. Esta Política de Privacidade explica como tratamos informações quando você usa nosso App.`,
    sections: [
      {
        heading: `Visão geral`,
        content: `<p>O SwirlBall foi projetado pensando na sua privacidade. Não coletamos, armazenamos nem compartilhamos nenhuma informação pessoal. O App não exige criação de conta, login ou qualquer registro, e não contém publicidade.</p>`,
      },
      {
        heading: `Informações que não coletamos`,
        content: `<p>Não coletamos nada do que segue:</p>
<ul><li>Nomes, e-mails ou informações de contato</li><li>Dados de localização</li><li>Identificadores do dispositivo ou de publicidade</li><li>Histórico de navegação ou pesquisa</li><li>Contatos, fotos ou outros arquivos pessoais</li><li>Dados de saúde, atividade física ou financeiros</li><li>Análises de uso ou dados de rastreamento</li></ul>`,
      },
      {
        heading: `Dados armazenados no seu dispositivo`,
        content: `<p>O App armazena dados de jogo localmente no seu dispositivo para oferecer suas funções principais:</p>
<ul><li><strong>Progresso</strong> — níveis concluídos, melhores pontuações e sua melhor profundidade na Torre Infinita.</li><li><strong>Faíscas e skins</strong> — seu saldo de moeda do jogo e as skins de bola desbloqueadas.</li><li><strong>Saldos de compras</strong> — fichas de reviver restantes, ativações de dobro de recompensa e um indicador em cache das compras permanentes.</li><li><strong>Preferências</strong> — modo de controle, sensibilidade, calibração, som, música, vibração e efeitos reduzidos.</li><li><strong>Registro técnico</strong> — um pequeno registro de eventos do jogo (por exemplo, «nível concluído») com tamanho limitado, mantido apenas no seu dispositivo para ajudar em solicitações de suporte iniciadas por você. Não contém dados pessoais e nunca é transmitido automaticamente.</li></ul>
<p>Todos esses dados ficam exclusivamente no seu dispositivo e não são transmitidos a nós nem a terceiros. Você pode apagá-los a qualquer momento desinstalando o App.</p>`,
      },
      {
        heading: `Compras no app`,
        content: `<p>O App oferece compras opcionais: pacotes de reviver, reviver permanente, pacotes de dobro de recompensas, dobrador permanente e uma gorjeta voluntária «Apoiar o desenvolvedor», que não concede vantagem de jogo. Todas as transações são processadas integralmente pela Apple via App Store com StoreKit. Não temos acesso às suas informações de pagamento, Apple ID ou dados de cobrança. As compras podem ser restauradas em um novo aparelho pelo botão «Restaurar compras». O tratamento dos seus dados pela Apple é regido pela política de privacidade da Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `Sem serviços de terceiros`,
        content: `<p>O App não integra SDKs de análise, publicidade, relatórios de falhas ou redes sociais de terceiros. Não usamos Firebase, Google Analytics, Facebook SDK, redes de anúncios ou serviços semelhantes. O App não faz solicitações de rede próprias — a única comunicação de rede é realizada pelo framework da App Store da Apple para compras, como descrito acima.</p>`,
      },
      {
        heading: `Privacidade de crianças`,
        content: `<p>O App não coleta intencionalmente informações pessoais de ninguém, incluindo crianças. Como o App não coleta informações pessoais de nenhum usuário, não são necessárias disposições especiais.</p>`,
      },
      {
        heading: `Segurança dos dados`,
        content: `<p>Todos os dados de jogo permanecem no seu dispositivo. A comunicação com a App Store é feita pelos frameworks da Apple e criptografada pela Apple. Como não coletamos nem armazenamos dados pessoais em servidores, não há risco de vazamento afetar suas informações do nosso lado.</p>`,
      },
      {
        heading: `Seus direitos`,
        content: `<p>Você tem os seguintes direitos sobre seus dados:</p>
<ul><li>Todos os dados do App ficam armazenados localmente e podem ser removidos desinstalando o App.</li><li>Como não armazenamos dados pessoais em nossos servidores, não há dados a fornecer, alterar ou excluir.</li></ul>
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
    effectiveDate: `発効日：2026年7月14日`,
    intro: `NikiBStudio（以下「当社」）は、商用アプリケーションとして<strong>SwirlBall</strong>（以下「本アプリ」）を開発しました。本プライバシーポリシーは、本アプリのご利用時に当社が情報をどのように取り扱うかを説明するものです。`,
    sections: [
      {
        heading: `概要`,
        content: `<p>SwirlBallはプライバシーに配慮して設計されています。当社は個人情報を一切収集・保存・共有しません。本アプリはアカウント作成、ログイン、いかなる登録も不要で、広告も含まれていません。</p>`,
      },
      {
        heading: `収集しない情報`,
        content: `<p>当社は以下のいずれも収集しません：</p>
<ul><li>氏名、メールアドレス、連絡先情報</li><li>位置情報</li><li>デバイス識別子や広告ID</li><li>閲覧・検索履歴</li><li>連絡先、写真、その他の個人ファイル</li><li>健康・フィットネス・金融データ</li><li>利用分析や行動追跡データ</li></ul>`,
      },
      {
        heading: `デバイスに保存されるデータ`,
        content: `<p>本アプリは主要機能の提供のため、ゲームデータをお使いのデバイスにローカル保存します：</p>
<ul><li><strong>ゲーム進行状況</strong> — クリアしたレベル、ベストスコア、無限の塔の最高深度。</li><li><strong>スパークとスキン</strong> — ゲーム内通貨の残高と解放済みのボールスキン。</li><li><strong>購入残高</strong> — 残りのリバイブトークン、報酬2倍の使用回数、恒久購入のキャッシュ状態。</li><li><strong>アプリ設定</strong> — 操作モード、感度、キャリブレーション、サウンド、音楽、触覚、演出軽減の設定。</li><li><strong>技術イベントログ</strong> — 「レベルクリア」などのゲームイベントを記録する容量制限付きの小さなログ。お客様が開始したサポート対応のためにデバイス内にのみ保存されます。個人情報は含まれず、自動送信されることはありません。</li></ul>
<p>これらのデータはすべてお使いのデバイスにのみ保存され、当社や第三者に送信されることはありません。アプリを削除すればいつでもすべて消去できます。</p>`,
      },
      {
        heading: `アプリ内課金`,
        content: `<p>本アプリには任意のアプリ内課金があります：リバイブパック、恒久リバイブ、報酬2倍パック、恒久2倍、そしてゲーム上の優位性を一切与えない任意の「開発者を応援」チップです。すべての取引はStoreKitを通じてAppleがApp Storeで完全に処理します。当社はお支払い情報、Apple ID、請求情報にアクセスできません。購入は「購入を復元」ボタンで新しいデバイスに復元できます。Appleによるデータの取り扱いはAppleのプライバシーポリシー（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）に従います。</p>`,
      },
      {
        heading: `第三者サービスなし`,
        content: `<p>本アプリは、第三者の分析、広告、クラッシュレポート、SNSのSDKを一切組み込んでいません。Firebase、Google Analytics、Facebook SDK、広告ネットワーク等は使用していません。本アプリ自体はネットワーク要求を行わず、唯一の通信は上記の購入処理のためのApple自身のApp Storeフレームワークによるものです。</p>`,
      },
      {
        heading: `お子様のプライバシー`,
        content: `<p>本アプリは、お子様を含む誰からも意図的に個人情報を収集しません。いかなるユーザーからも個人情報を収集しないため、特別な規定は不要です。</p>`,
      },
      {
        heading: `データセキュリティ`,
        content: `<p>すべてのゲームデータはお使いのデバイスに残ります。App Storeとの通信はAppleのフレームワークが処理し、Appleにより暗号化されます。当社はサーバー上に個人データを収集・保存しないため、当社側での情報漏えいのリスクはありません。</p>`,
      },
      {
        heading: `お客様の権利`,
        content: `<p>お客様はご自身のデータについて以下の権利を有します：</p>
<ul><li>本アプリのデータはすべてデバイスにローカル保存されており、アプリの削除で消去できます。</li><li>当社のサーバーに個人データは保存されていないため、提供・修正・削除すべきデータは存在しません。</li></ul>
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
    effectiveDate: `시행일: 2026년 7월 14일`,
    intro: `NikiBStudio(이하 "당사")는 상용 애플리케이션으로 <strong>SwirlBall</strong>(이하 "앱")을 개발했습니다. 본 개인정보 처리방침은 앱 사용 시 당사가 정보를 어떻게 처리하는지 설명합니다.`,
    sections: [
      {
        heading: `개요`,
        content: `<p>SwirlBall은 개인정보 보호를 염두에 두고 설계되었습니다. 당사는 어떠한 개인정보도 수집, 저장, 공유하지 않습니다. 앱은 계정 생성, 로그인, 어떤 형태의 등록도 요구하지 않으며 광고도 없습니다.</p>`,
      },
      {
        heading: `수집하지 않는 정보`,
        content: `<p>당사는 다음 정보를 수집하지 않습니다:</p>
<ul><li>이름, 이메일 주소, 연락처</li><li>위치 데이터</li><li>기기 식별자 또는 광고 ID</li><li>탐색 및 검색 기록</li><li>연락처, 사진 및 기타 개인 파일</li><li>건강, 운동, 금융 데이터</li><li>사용 분석 또는 행동 추적 데이터</li></ul>`,
      },
      {
        heading: `기기에 저장되는 데이터`,
        content: `<p>앱은 핵심 기능 제공을 위해 게임 데이터를 기기에 로컬로 저장합니다:</p>
<ul><li><strong>게임 진행</strong> — 완료한 레벨, 최고 점수, 무한 타워 최고 깊이.</li><li><strong>스파크와 스킨</strong> — 게임 내 화폐 잔액과 해금된 볼 스킨.</li><li><strong>구매 잔액</strong> — 남은 부활 토큰, 보상 2배 사용 횟수, 영구 구매의 캐시 상태.</li><li><strong>앱 설정</strong> — 조작 모드, 감도, 보정, 소리, 음악, 햅틱, 효과 축소 설정.</li><li><strong>기술 이벤트 로그</strong> — "레벨 완료" 같은 게임 이벤트를 기록하는 크기 제한이 있는 작은 로그로, 사용자가 요청한 지원 처리를 돕기 위해 기기에만 보관됩니다. 개인정보를 포함하지 않으며 자동으로 전송되지 않습니다.</li></ul>
<p>이 모든 데이터는 오직 사용자의 기기에만 저장되며 당사나 제3자에게 전송되지 않습니다. 앱을 삭제하면 언제든지 모든 데이터가 삭제됩니다.</p>`,
      },
      {
        heading: `인앱 구매`,
        content: `<p>앱은 선택적 인앱 구매를 제공합니다: 부활 팩, 영구 부활, 보상 2배 팩, 영구 2배, 그리고 게임상 이점을 전혀 제공하지 않는 자발적 "개발자 응원" 팁. 모든 거래는 StoreKit을 통해 Apple이 App Store에서 전적으로 처리합니다. 당사는 결제 정보, Apple ID, 청구 정보에 접근할 수 없습니다. 구매는 "구매 복원" 버튼으로 새 기기에서 복원할 수 있습니다. Apple의 데이터 처리는 Apple 개인정보 보호정책(<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>)을 따릅니다.</p>`,
      },
      {
        heading: `제3자 서비스 없음`,
        content: `<p>앱은 제3자 분석, 광고, 충돌 보고, 소셜 미디어 SDK를 통합하지 않습니다. Firebase, Google Analytics, Facebook SDK, 광고 네트워크 등 유사 서비스를 사용하지 않습니다. 앱 자체는 네트워크 요청을 하지 않으며, 유일한 네트워크 통신은 위에서 설명한 구매를 위한 Apple의 App Store 프레임워크가 수행합니다.</p>`,
      },
      {
        heading: `아동의 개인정보`,
        content: `<p>앱은 아동을 포함한 누구로부터도 개인정보를 의도적으로 수집하지 않습니다. 어떤 사용자로부터도 개인정보를 수집하지 않으므로 특별한 조항이 필요하지 않습니다.</p>`,
      },
      {
        heading: `데이터 보안`,
        content: `<p>모든 게임 데이터는 사용자의 기기에 남아 있습니다. App Store와의 통신은 Apple 프레임워크가 처리하고 Apple이 암호화합니다. 당사는 서버에 개인 데이터를 수집·저장하지 않으므로 당사 측 유출 위험이 없습니다.</p>`,
      },
      {
        heading: `사용자의 권리`,
        content: `<p>사용자는 자신의 데이터에 대해 다음 권리를 갖습니다:</p>
<ul><li>앱의 모든 데이터는 기기에 로컬 저장되며 앱 삭제로 제거할 수 있습니다.</li><li>당사 서버에 개인 데이터를 저장하지 않으므로 제공, 수정, 삭제할 데이터가 없습니다.</li></ul>
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
    effectiveDate: `生效日期：2026年7月14日`,
    intro: `NikiBStudio（"我们"）将<strong>SwirlBall</strong>（"本应用"）作为商业应用开发。本隐私政策说明您使用本应用时我们如何处理信息。`,
    sections: [
      {
        heading: `概述`,
        content: `<p>SwirlBall在设计时充分考虑了您的隐私。我们不收集、存储或共享任何个人信息。本应用无需创建账户、登录或任何形式的注册，也不包含广告。</p>`,
      },
      {
        heading: `我们不收集的信息`,
        content: `<p>我们不收集以下任何信息：</p>
<ul><li>姓名、电子邮件地址或联系方式</li><li>位置数据</li><li>设备标识符或广告ID</li><li>浏览或搜索历史</li><li>通讯录、照片或其他个人文件</li><li>健康、健身或财务数据</li><li>使用分析或行为跟踪数据</li></ul>`,
      },
      {
        heading: `存储在您设备上的数据`,
        content: `<p>本应用在您的设备上本地存储游戏数据，以提供核心功能：</p>
<ul><li><strong>游戏进度</strong> — 已完成的关卡、最高分以及无尽之塔的最佳深度。</li><li><strong>火花与皮肤</strong> — 游戏货币余额和已解锁的小球皮肤。</li><li><strong>购买余额</strong> — 剩余复活代币、奖励翻倍次数以及永久购买的缓存状态。</li><li><strong>应用偏好</strong> — 操控模式、灵敏度、校准、声音、音乐、触感和减弱效果设置。</li><li><strong>技术事件日志</strong> — 记录游戏事件（如"关卡完成"）的小型限量日志，仅保存在您的设备上，用于协助您主动发起的支持请求。它不包含个人数据，也绝不会自动传输。</li></ul>
<p>所有这些数据仅存储在您的设备上，不会传输给我们或任何第三方。您随时可以通过卸载本应用删除全部数据。</p>`,
      },
      {
        heading: `应用内购买`,
        content: `<p>本应用提供可选的内购项目：复活包、永久复活、奖励翻倍包、永久翻倍，以及不提供任何游戏优势的自愿"支持开发者"打赏。所有交易均由Apple通过App Store使用StoreKit完全处理。我们无法访问您的付款信息、Apple ID或账单资料。购买可通过"恢复购买"按钮在新设备上恢复。Apple对您数据的处理受Apple隐私政策约束（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）。</p>`,
      },
      {
        heading: `无第三方服务`,
        content: `<p>本应用不集成任何第三方分析、广告、崩溃报告或社交媒体SDK。我们不使用Firebase、Google Analytics、Facebook SDK、广告网络或任何类似服务。本应用自身不发出网络请求——唯一的网络通信由Apple自己的App Store框架为处理购买而执行，如上所述。</p>`,
      },
      {
        heading: `儿童隐私`,
        content: `<p>本应用不会有意收集任何人（包括儿童）的个人信息。由于本应用不从任何用户处收集个人信息，因此无需特别条款。</p>`,
      },
      {
        heading: `数据安全`,
        content: `<p>所有游戏数据都保留在您的设备上。与App Store的通信由Apple的框架处理并由Apple加密。由于我们不在服务器上收集或存储任何个人数据，因此不存在我们这边的数据泄露风险。</p>`,
      },
      {
        heading: `您的权利`,
        content: `<p>关于您的数据，您拥有以下权利：</p>
<ul><li>本应用的所有数据均本地存储在您的设备上，可通过卸载应用删除。</li><li>由于我们不在服务器上存储个人数据，因此不存在需要我们提供、修改或删除的个人数据。</li></ul>
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
    effectiveDate: `تاريخ السريان: 14 يوليو 2026`,
    intro: `طوّرت NikiBStudio («نحن») تطبيق <strong>SwirlBall</strong> («التطبيق») كتطبيق تجاري. توضح سياسة الخصوصية هذه كيفية تعاملنا مع المعلومات عند استخدامك لتطبيقنا.`,
    sections: [
      {
        heading: `نظرة عامة`,
        content: `<p>صُمم SwirlBall مع مراعاة خصوصيتك. نحن لا نجمع أو نخزّن أو نشارك أي معلومات شخصية. لا يتطلب التطبيق إنشاء حساب أو تسجيل دخول أو أي شكل من أشكال التسجيل، ولا يحتوي على إعلانات.</p>`,
      },
      {
        heading: `المعلومات التي لا نجمعها`,
        content: `<p>لا نجمع أيًا مما يلي:</p>
<ul><li>الأسماء أو عناوين البريد الإلكتروني أو معلومات الاتصال</li><li>بيانات الموقع</li><li>معرّفات الجهاز أو المعرّفات الإعلانية</li><li>سجلّ التصفح أو البحث</li><li>جهات الاتصال أو الصور أو الملفات الشخصية الأخرى</li><li>البيانات الصحية أو الرياضية أو المالية</li><li>تحليلات الاستخدام أو بيانات التتبع السلوكي</li></ul>`,
      },
      {
        heading: `البيانات المخزّنة على جهازك`,
        content: `<p>يخزّن التطبيق بيانات اللعبة محليًا على جهازك لتوفير وظائفه الأساسية:</p>
<ul><li><strong>تقدّم اللعبة</strong> — المستويات المكتملة وأفضل النتائج وأفضل عمق في البرج اللانهائي.</li><li><strong>الشرارات والسكنات</strong> — رصيدك من عملة اللعبة وسكنات الكرة المفتوحة.</li><li><strong>أرصدة المشتريات</strong> — رموز الإحياء المتبقية وتفعيلات مضاعفة المكافآت ومؤشر مخزّن مؤقتًا للمشتريات الدائمة.</li><li><strong>تفضيلات التطبيق</strong> — وضع التحكم والحساسية والمعايرة والصوت والموسيقى والاهتزاز وتقليل المؤثرات.</li><li><strong>سجل الأحداث التقني</strong> — سجل صغير محدود الحجم لأحداث اللعب (مثل «اكتمل المستوى») يُحفظ على جهازك فقط للمساعدة في طلبات الدعم التي تبدأها أنت. لا يحتوي على بيانات شخصية ولا يُرسل تلقائيًا أبدًا.</li></ul>
<p>تُخزَّن كل هذه البيانات حصريًا على جهازك ولا تُنقل إلينا أو إلى أي طرف ثالث. يمكنك حذفها في أي وقت بإلغاء تثبيت التطبيق.</p>`,
      },
      {
        heading: `المشتريات داخل التطبيق`,
        content: `<p>يقدّم التطبيق مشتريات اختيارية: حزم الإحياء، وإحياء دائم، وحزم مضاعفة المكافآت، ومضاعِف دائم، وإكرامية طوعية «ادعم المطوّر» لا تمنح أي ميزة في اللعب. تُعالج جميع المعاملات بالكامل بواسطة Apple عبر App Store باستخدام StoreKit. لا يمكننا الوصول إلى معلومات الدفع أو Apple ID أو بيانات الفوترة الخاصة بك. يمكن استعادة المشتريات على جهاز جديد بزر «استعادة المشتريات». يخضع تعامل Apple مع بياناتك لسياسة خصوصية Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `لا خدمات من أطراف ثالثة`,
        content: `<p>لا يدمج التطبيق أي حزم تطوير خارجية للتحليلات أو الإعلانات أو تقارير الأعطال أو وسائل التواصل الاجتماعي. لا نستخدم Firebase أو Google Analytics أو Facebook SDK أو شبكات إعلانية أو أي خدمات مشابهة. لا يجري التطبيق أي طلبات شبكة خاصة به — الاتصال الشبكي الوحيد تنفذه أُطر Apple الخاصة بـ App Store لمعالجة المشتريات كما هو موضح أعلاه.</p>`,
      },
      {
        heading: `خصوصية الأطفال`,
        content: `<p>لا يجمع التطبيق عن قصد أي معلومات شخصية من أي شخص، بما في ذلك الأطفال. وبما أنه لا يجمع معلومات شخصية من أي مستخدم، فلا حاجة لأحكام خاصة.</p>`,
      },
      {
        heading: `أمان البيانات`,
        content: `<p>تبقى جميع بيانات اللعبة على جهازك. تتولى أُطر Apple الاتصال بـ App Store وتشفّره Apple. وبما أننا لا نجمع أو نخزّن أي بيانات شخصية على خوادم، فلا يوجد خطر تسريب بيانات يمس معلوماتك من جانبنا.</p>`,
      },
      {
        heading: `حقوقك`,
        content: `<p>لديك الحقوق التالية بخصوص بياناتك:</p>
<ul><li>تُخزَّن جميع بيانات التطبيق محليًا على جهازك ويمكن إزالتها بإلغاء تثبيت التطبيق.</li><li>بما أننا لا نخزّن بيانات شخصية على خوادمنا، فلا توجد بيانات نقدّمها أو نعدّلها أو نحذفها.</li></ul>
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
    effectiveDate: `प्रभावी तिथि: 14 जुलाई 2026`,
    intro: `NikiBStudio («हम» या «हमारा») ने <strong>SwirlBall</strong> («ऐप») को एक व्यावसायिक एप्लिकेशन के रूप में बनाया है। यह गोपनीयता नीति बताती है कि ऐप के उपयोग के दौरान हम जानकारी को कैसे संभालते हैं।`,
    sections: [
      {
        heading: `अवलोकन`,
        content: `<p>SwirlBall आपकी गोपनीयता को ध्यान में रखकर बनाया गया है। हम कोई भी व्यक्तिगत जानकारी एकत्र, संग्रहीत या साझा नहीं करते। ऐप में खाता बनाने, लॉगिन या किसी भी प्रकार के पंजीकरण की आवश्यकता नहीं है, और इसमें कोई विज्ञापन नहीं है।</p>`,
      },
      {
        heading: `जानकारी जो हम एकत्र नहीं करते`,
        content: `<p>हम निम्नलिखित में से कुछ भी एकत्र नहीं करते:</p>
<ul><li>नाम, ईमेल पते या संपर्क जानकारी</li><li>स्थान डेटा</li><li>डिवाइस पहचानकर्ता या विज्ञापन आईडी</li><li>ब्राउज़िंग या खोज इतिहास</li><li>संपर्क, फ़ोटो या अन्य व्यक्तिगत फ़ाइलें</li><li>स्वास्थ्य, फ़िटनेस या वित्तीय डेटा</li><li>उपयोग विश्लेषण या व्यवहार ट्रैकिंग डेटा</li></ul>`,
      },
      {
        heading: `आपके डिवाइस पर संग्रहीत डेटा`,
        content: `<p>ऐप अपनी मुख्य कार्यक्षमता के लिए गेम डेटा आपके डिवाइस पर स्थानीय रूप से सहेजता है:</p>
<ul><li><strong>गेम प्रगति</strong> — पूर्ण किए गए स्तर, सर्वश्रेष्ठ स्कोर और अंतहीन टावर की सबसे अच्छी गहराई।</li><li><strong>चिंगारियाँ और स्किनें</strong> — गेम मुद्रा का बैलेंस और खुली हुई बॉल स्किनें।</li><li><strong>खरीद शेष</strong> — बचे हुए रिवाइव टोकन, इनाम दोगुना करने की सक्रियताएँ और स्थायी खरीद का कैश्ड संकेतक।</li><li><strong>ऐप प्राथमिकताएँ</strong> — नियंत्रण मोड, संवेदनशीलता, कैलिब्रेशन, ध्वनि, संगीत, हैप्टिक्स और कम प्रभाव सेटिंग्स।</li><li><strong>तकनीकी इवेंट लॉग</strong> — गेम घटनाओं (जैसे «स्तर पूर्ण») का एक छोटा, सीमित आकार का लॉग, जो केवल आपके डिवाइस पर रहता है और आपके द्वारा शुरू किए गए सहायता अनुरोधों में मदद करता है। इसमें कोई व्यक्तिगत डेटा नहीं होता और यह कभी स्वचालित रूप से प्रेषित नहीं होता।</li></ul>
<p>यह सारा डेटा केवल आपके डिवाइस पर संग्रहीत रहता है और हमें या किसी तीसरे पक्ष को प्रेषित नहीं होता। ऐप को अनइंस्टॉल करके आप इसे कभी भी हटा सकते हैं।</p>`,
      },
      {
        heading: `इन-ऐप खरीदारी`,
        content: `<p>ऐप वैकल्पिक इन-ऐप खरीदारी प्रदान करता है: रिवाइव पैक, स्थायी रिवाइव, इनाम दोगुना पैक, स्थायी डबलर और एक स्वैच्छिक «डेवलपर का समर्थन करें» टिप जो कोई गेम लाभ नहीं देती। सभी लेनदेन StoreKit के माध्यम से Apple द्वारा App Store में पूर्ण रूप से संसाधित होते हैं। हमारे पास आपकी भुगतान जानकारी, Apple ID या बिलिंग विवरण तक पहुँच नहीं है। «खरीदारी पुनर्स्थापित करें» बटन से नई डिवाइस पर खरीदारी बहाल की जा सकती है। Apple द्वारा आपके डेटा का प्रबंधन Apple की गोपनीयता नीति (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>) के अधीन है।</p>`,
      },
      {
        heading: `कोई तृतीय-पक्ष सेवाएँ नहीं`,
        content: `<p>ऐप में कोई तृतीय-पक्ष विश्लेषण, विज्ञापन, क्रैश रिपोर्टिंग या सोशल मीडिया SDK शामिल नहीं है। हम Firebase, Google Analytics, Facebook SDK, विज्ञापन नेटवर्क या ऐसी कोई सेवा उपयोग नहीं करते। ऐप स्वयं कोई नेटवर्क अनुरोध नहीं करता — एकमात्र नेटवर्क संचार ऊपर वर्णित खरीदारी के लिए Apple के अपने App Store फ्रेमवर्क द्वारा किया जाता है।</p>`,
      },
      {
        heading: `बच्चों की गोपनीयता`,
        content: `<p>ऐप जानबूझकर किसी से भी, बच्चों सहित, कोई व्यक्तिगत जानकारी एकत्र नहीं करता। चूँकि ऐप किसी भी उपयोगकर्ता से व्यक्तिगत जानकारी एकत्र नहीं करता, विशेष प्रावधानों की आवश्यकता नहीं है।</p>`,
      },
      {
        heading: `डेटा सुरक्षा`,
        content: `<p>सारा गेम डेटा आपके डिवाइस पर रहता है। App Store के साथ संचार Apple के फ्रेमवर्क संभालते हैं और Apple द्वारा एन्क्रिप्ट किया जाता है। चूँकि हम सर्वर पर कोई व्यक्तिगत डेटा एकत्र या संग्रहीत नहीं करते, हमारी ओर से डेटा उल्लंघन का कोई जोखिम नहीं है।</p>`,
      },
      {
        heading: `आपके अधिकार`,
        content: `<p>अपने डेटा के संबंध में आपके निम्नलिखित अधिकार हैं:</p>
<ul><li>ऐप का सारा डेटा आपके डिवाइस पर स्थानीय रूप से संग्रहीत है और ऐप हटाकर मिटाया जा सकता है।</li><li>चूँकि हम अपने सर्वर पर व्यक्तिगत डेटा संग्रहीत नहीं करते, हमारे पास प्रदान करने, बदलने या हटाने के लिए कोई डेटा नहीं है।</li></ul>
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
    effectiveDate: `תאריך כניסה לתוקף: 14 ביולי 2026`,
    intro: `NikiBStudio («אנחנו») פיתחה את <strong>SwirlBall</strong> («האפליקציה») כאפליקציה מסחרית. מדיניות פרטיות זו מסבירה כיצד אנו מטפלים במידע בעת השימוש באפליקציה.`,
    sections: [
      {
        heading: `סקירה`,
        content: `<p>SwirlBall תוכננה מתוך מחשבה על הפרטיות שלך. איננו אוספים, שומרים או משתפים מידע אישי כלשהו. האפליקציה אינה דורשת יצירת חשבון, התחברות או רישום מכל סוג, ואינה מכילה פרסומות.</p>`,
      },
      {
        heading: `מידע שאיננו אוספים`,
        content: `<p>איננו אוספים דבר מהבאים:</p>
<ul><li>שמות, כתובות דוא"ל או פרטי קשר</li><li>נתוני מיקום</li><li>מזהי מכשיר או מזהי פרסום</li><li>היסטוריית גלישה או חיפוש</li><li>אנשי קשר, תמונות או קבצים אישיים אחרים</li><li>נתוני בריאות, כושר או פיננסים</li><li>אנליטיקת שימוש או נתוני מעקב התנהגותי</li></ul>`,
      },
      {
        heading: `נתונים השמורים במכשיר שלך`,
        content: `<p>האפליקציה שומרת נתוני משחק מקומית במכשיר שלך כדי לספק את הפונקציונליות המרכזית:</p>
<ul><li><strong>התקדמות במשחק</strong> — שלבים שהושלמו, שיאים והעומק הטוב ביותר במגדל האינסופי.</li><li><strong>ניצוצות וסקינים</strong> — יתרת מטבע המשחק וסקיני הכדור שנפתחו.</li><li><strong>יתרות רכישה</strong> — אסימוני החייאה שנותרו, הפעלות הכפלת פרסים ומחוון שמור של רכישות קבועות.</li><li><strong>העדפות</strong> — מצב שליטה, רגישות, כיול, צליל, מוזיקה, רטט ואפקטים מופחתים.</li><li><strong>יומן אירועים טכני</strong> — יומן קטן ומוגבל בגודלו של אירועי משחק (למשל «שלב הושלם»), שנשמר רק במכשיר שלך כדי לסייע בפניות תמיכה שאתה יוזם. הוא אינו מכיל מידע אישי ולעולם אינו משודר אוטומטית.</li></ul>
<p>כל הנתונים הללו נשמרים אך ורק במכשיר שלך ואינם מועברים אלינו או לצד שלישי. ניתן למחוק אותם בכל עת על ידי הסרת האפליקציה.</p>`,
      },
      {
        heading: `רכישות בתוך האפליקציה`,
        content: `<p>האפליקציה מציעה רכישות אופציונליות: חבילות החייאה, החייאה קבועה, חבילות הכפלת פרסים, מכפיל קבוע וטיפ התנדבותי «תמכו במפתח» שאינו מעניק יתרון במשחק. כל העסקאות מעובדות במלואן על ידי Apple דרך ה-App Store באמצעות StoreKit. אין לנו גישה לפרטי התשלום, ל-Apple ID או לנתוני החיוב שלך. ניתן לשחזר רכישות במכשיר חדש בלחצן «שחזור רכישות». הטיפול של Apple בנתוניך כפוף למדיניות הפרטיות של Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>).</p>`,
      },
      {
        heading: `ללא שירותי צד שלישי`,
        content: `<p>האפליקציה אינה משלבת SDK של צד שלישי לאנליטיקה, פרסום, דיווח קריסות או רשתות חברתיות. איננו משתמשים ב-Firebase, Google Analytics, Facebook SDK, רשתות פרסום או שירותים דומים. האפליקציה אינה מבצעת בקשות רשת משלה — התקשורת היחידה מתבצעת על ידי מסגרות ה-App Store של Apple עבור רכישות, כמתואר לעיל.</p>`,
      },
      {
        heading: `פרטיות ילדים`,
        content: `<p>האפליקציה אינה אוספת ביודעין מידע אישי מאף אחד, כולל ילדים. מכיוון שהאפליקציה אינה אוספת מידע אישי מאף משתמש, אין צורך בהוראות מיוחדות.</p>`,
      },
      {
        heading: `אבטחת מידע`,
        content: `<p>כל נתוני המשחק נשארים במכשיר שלך. התקשורת עם ה-App Store מנוהלת על ידי מסגרות Apple ומוצפנת על ידי Apple. מכיוון שאיננו אוספים או שומרים מידע אישי בשרתים, אין סיכון לדליפת מידע מצדנו.</p>`,
      },
      {
        heading: `הזכויות שלך`,
        content: `<p>יש לך את הזכויות הבאות לגבי הנתונים שלך:</p>
<ul><li>כל נתוני האפליקציה נשמרים מקומית במכשיר וניתנים להסרה על ידי הסרת האפליקציה.</li><li>מכיוון שאיננו שומרים מידע אישי בשרתינו, אין נתונים שעלינו לספק, לשנות או למחוק.</li></ul>
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
