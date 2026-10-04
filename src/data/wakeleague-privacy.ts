import type { PrivacySection, PrivacyPolicy } from './tarotaper-privacy'

export type { PrivacySection, PrivacyPolicy }

export const wakeleaguePrivacy: Record<string, PrivacyPolicy> = {
  en: {
    title: `Privacy Policy`,
    effectiveDate: `Effective Date: October 5, 2026`,
    intro: `NikiBStudio ("we", "our", or "us") built <strong>Wake League</strong> ("the App") as a commercial application. This Privacy Policy explains how we handle information when you use our App.`,
    sections: [
      {
        heading: `Overview`,
        content: `<p>Wake League is an alarm clock that keeps ringing until you finish short missions, with a daily challenge you can compare in Game Center. It is designed with your privacy in mind: we do not collect, store, or share any personal information. The App does not require an account or any registration, contains no advertising and no analytics, and is a one-time purchase with no in-app purchases or subscriptions. Your alarms, mornings, results, and settings stay on your device.</p>`,
      },
      {
        heading: `Information We Do Not Collect`,
        content: `<p>We do not collect any of the following:</p>
<ul><li>Names, email addresses, or contact information</li><li>Location data</li><li>Device identifiers or advertising IDs</li><li>Contacts, your photo library, or other personal files</li><li>Camera frames, voice recordings, or transcripts — they are processed on your iPhone and discarded</li><li>Your alarms, wake-up times, and mission results — they never leave your device, except the scores you choose to post to Game Center</li><li>Usage analytics or behavioral tracking data</li></ul>`,
      },
      {
        heading: `Data Stored on Your Device`,
        content: `<p>The App stores the following on your device to provide its core functionality:</p>
<ul><li><strong>Alarms</strong> — time, repeat days, label, wake-up difficulty, missions, and alarm sound.</li><li><strong>Mornings</strong> — when each alarm rang and how the morning went: missions finished, time taken, mistakes, snoozes, points, and XP.</li><li><strong>Trophies</strong> — the dates on which achievements were earned.</li><li><strong>Your spot photo</strong> — if you turn on the "Snap the spot" photo finish, the reference photo you take and a numeric description of it (a Vision feature print) are kept with that alarm on your device, used only to recognize the same place in the morning, and deleted when you retake it or delete the alarm.</li><li><strong>App preferences</strong> — for example, whether onboarding was completed and whether haptics are on.</li></ul>
<p>This data is not synced to iCloud or any server. You can delete it at any time by deleting alarms in the App or uninstalling the App.</p>`,
      },
      {
        heading: `Camera, Microphone, Speech Recognition, and Motion`,
        content: `<p>The App asks for these permissions only for the missions that need them; every mission works without them by switching to another mission:</p>
<ul><li><strong>Camera</strong> — for "Find it" (point the camera at an object) and "Snap the spot". Frames are analyzed on your iPhone with Apple's Vision framework and are never saved or transmitted. The only image kept is the reference photo of your spot described above.</li><li><strong>Microphone and Speech Recognition</strong> — for "Say it". The App uses on-device speech recognition only; audio and text never leave your iPhone and are not stored.</li><li><strong>Motion &amp; Fitness</strong> — for "Shake" and "Steps". Movement is counted on your iPhone during the mission; only the number of shakes or steps is saved with the morning.</li></ul>
<p>You can change these permissions at any time in your device Settings.</p>`,
      },
      {
        heading: `Alarms, Live Activities, and Widgets`,
        content: `<p>Alarms are scheduled on your device with Apple's AlarmKit and shown on the Lock Screen and in the Dynamic Island by iOS. The App's widgets read a small summary — upcoming alarm times, your streak, and your level — that the App writes to a storage area shared only with its own widgets on your device. No external push service is used.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>Game Center is optional. If you are signed in to Game Center, the App submits your Daily Challenge score, best streak, and total XP to Game Center leaderboards and reports the trophies you earn, and it shows today's leaderboard with the Game Center names and scores of other players. Game Center is operated by Apple; your nickname, scores, and achievements are visible to other players according to your Game Center settings, and Apple's handling of this data is governed by Apple's Privacy Policy (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>). We receive no personal data from Game Center. Levels, trophies, and stats work without Game Center.</p>`,
      },
      {
        heading: `Sharing Your Results`,
        content: `<p>When you tap Share, the App creates a picture and a short text with your result and hands them to the iOS share sheet. You decide where they go; we do not receive them.</p>`,
      },
      {
        heading: `Purchase`,
        content: `<p>Wake League is a one-time purchase with no in-app purchases and no subscriptions. The purchase is processed entirely by Apple through the App Store. We do not have access to your payment information, Apple ID, or billing details.</p>`,
      },
      {
        heading: `No Third-Party Services`,
        content: `<p>The App does not integrate any third-party analytics, advertising, crash reporting, or social media SDKs. We do not use Firebase, Google Analytics, Facebook SDK, ad networks, or any similar services. The App makes no network requests of its own — the only network communication is with Apple's Game Center, and only if you use it.</p>`,
      },
      {
        heading: `Children's Privacy`,
        content: `<p>The App does not knowingly collect any personal information from anyone, including children. Since the App does not collect personal information from any user, no special provisions are necessary.</p>`,
      },
      {
        heading: `Data Security`,
        content: `<p>Your data remains on your device, protected by iOS data protection. Since we do not collect or store any personal data on servers, there is no risk of a data breach affecting your personal information on our side.</p>`,
      },
      {
        heading: `Your Rights`,
        content: `<p>You have the following rights regarding your data:</p>
<ul><li>You can view your alarms, mornings, trophies, and stats directly in the App.</li><li>Deleting an alarm removes its settings and spot photo; uninstalling the App removes all local data.</li><li>You can stop sharing scores by signing out of Game Center, and manage your Game Center data with Apple.</li><li>Since we do not collect or store personal data on our servers, there is no personal data for us to provide, modify, or delete.</li></ul>
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
    effectiveDate: `Дата вступления в силу: 5 октября 2026 г.`,
    intro: `NikiBStudio («мы», «наш» или «нас») разработала приложение <strong>Wake League</strong> («Приложение») как коммерческий продукт. Настоящая Политика конфиденциальности описывает, как мы обращаемся с информацией при использовании вами нашего Приложения.`,
    sections: [
      {
        heading: `Обзор`,
        content: `<p>Wake League — будильник, который звенит, пока вы не пройдёте короткие миссии, с челленджем дня, результат которого можно сравнить в Game Center. Приложение разработано с заботой о вашей конфиденциальности: мы не собираем, не храним и не передаём никакие персональные данные. Приложение не требует аккаунта или какой-либо регистрации, не содержит рекламы и аналитики и продаётся разовой покупкой без встроенных покупок и подписок. Ваши будильники, утра, результаты и настройки остаются на вашем устройстве.</p>`,
      },
      {
        heading: `Информация, которую мы не собираем`,
        content: `<p>Мы не собираем следующие данные:</p>
<ul><li>Имена, адреса электронной почты или контактную информацию</li><li>Данные о местоположении</li><li>Идентификаторы устройств или рекламные идентификаторы</li><li>Контакты, вашу медиатеку или другие личные файлы</li><li>Кадры с камеры, записи голоса или распознанный текст — они обрабатываются на вашем iPhone и сразу отбрасываются</li><li>Ваши будильники, время подъёма и результаты миссий — они не покидают устройство, кроме очков, которые вы сами отправляете в Game Center</li><li>Аналитику использования или данные отслеживания поведения</li></ul>`,
      },
      {
        heading: `Данные на вашем устройстве`,
        content: `<p>Для работы основных функций Приложение хранит на устройстве:</p>
<ul><li><strong>Будильники</strong> — время, дни повтора, подпись, сложность пробуждения, миссии и звук.</li><li><strong>Утра</strong> — когда звонил будильник и как прошло утро: пройденные миссии, затраченное время, ошибки, отсрочки, очки и опыт.</li><li><strong>Трофеи</strong> — даты получения достижений.</li><li><strong>Фото вашего места</strong> — если вы включили фотофиниш «Сфоткай место», сделанный вами эталонный снимок и его числовое описание (отпечаток Vision) хранятся вместе с будильником на устройстве, используются только чтобы узнать то же место утром и удаляются, когда вы переснимаете место или удаляете будильник.</li><li><strong>Настройки Приложения</strong> — например, пройдено ли знакомство с Приложением и включены ли вибрации.</li></ul>
<p>Эти данные не синхронизируются с iCloud или каким-либо сервером. Вы можете удалить их в любой момент, удалив будильники в Приложении или само Приложение.</p>`,
      },
      {
        heading: `Камера, микрофон, распознавание речи и движение`,
        content: `<p>Приложение запрашивает эти разрешения только для миссий, которым они нужны; без разрешения любая такая миссия заменяется другой:</p>
<ul><li><strong>Камера</strong> — для миссий «Найди» (наведите камеру на предмет) и «Сфоткай место». Кадры анализируются на вашем iPhone с помощью фреймворка Apple Vision и никогда не сохраняются и не передаются. Единственное сохраняемое изображение — эталонный снимок вашего места, описанный выше.</li><li><strong>Микрофон и распознавание речи</strong> — для миссии «Скажи». Приложение использует только распознавание речи на устройстве; звук и текст не покидают ваш iPhone и не сохраняются.</li><li><strong>Движение и фитнес</strong> — для миссий «Встряхни» и «Шаги». Движение считается на вашем iPhone во время миссии; вместе с утром сохраняется только число встряхиваний или шагов.</li></ul>
<p>Вы можете изменить эти разрешения в любой момент в Настройках устройства.</p>`,
      },
      {
        heading: `Будильники, Live Activities и виджеты`,
        content: `<p>Будильники ставятся на вашем устройстве через Apple AlarmKit и показываются системой iOS на экране блокировки и в Dynamic Island. Виджеты Приложения читают небольшую сводку — время ближайших будильников, вашу серию и уровень, — которую Приложение записывает в хранилище, доступное на устройстве только его собственным виджетам. Внешние сервисы push-уведомлений не используются.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>Game Center — по желанию. Если вы вошли в Game Center, Приложение отправляет в таблицы лидеров Game Center ваш результат в челлендже дня, лучшую серию и общий опыт, сообщает о полученных трофеях и показывает таблицу дня с именами и очками других игроков в Game Center. Game Center работает под управлением Apple; ваш никнейм, очки и достижения видны другим игрокам в соответствии с вашими настройками Game Center, а обработка этих данных Apple регулируется Политикой конфиденциальности Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>). Мы не получаем от Game Center никаких персональных данных. Уровни, трофеи и статистика работают и без Game Center.</p>`,
      },
      {
        heading: `Как вы делитесь результатом`,
        content: `<p>Когда вы нажимаете «Поделиться», Приложение создаёт картинку и короткий текст с вашим результатом и передаёт их в стандартное меню iOS «Поделиться». Куда их отправить, решаете вы; мы их не получаем.</p>`,
      },
      {
        heading: `Покупка`,
        content: `<p>Wake League — разовая покупка без встроенных покупок и подписок. Покупка полностью обрабатывается Apple через App Store. У нас нет доступа к вашей платёжной информации, Apple ID или платёжным реквизитам.</p>`,
      },
      {
        heading: `Без сторонних сервисов`,
        content: `<p>Приложение не использует сторонние SDK аналитики, рекламы, отчётов о сбоях или социальных сетей. Мы не используем Firebase, Google Analytics, Facebook SDK, рекламные сети и подобные сервисы. Приложение не выполняет собственных сетевых запросов — единственное сетевое взаимодействие происходит с Game Center от Apple, и только если вы им пользуетесь.</p>`,
      },
      {
        heading: `Конфиденциальность детей`,
        content: `<p>Приложение сознательно не собирает персональные данные ни у кого, включая детей. Поскольку Приложение не собирает персональные данные ни у одного пользователя, специальные положения не требуются.</p>`,
      },
      {
        heading: `Безопасность данных`,
        content: `<p>Ваши данные остаются на устройстве под защитой механизмов iOS. Поскольку мы не собираем и не храним персональные данные на серверах, на нашей стороне нет риска утечки ваших персональных данных.</p>`,
      },
      {
        heading: `Ваши права`,
        content: `<p>В отношении своих данных вы имеете следующие права:</p>
<ul><li>Будильники, утра, трофеи и статистику можно просмотреть прямо в Приложении.</li><li>Удаление будильника удаляет его настройки и фото места; удаление Приложения удаляет все локальные данные.</li><li>Вы можете перестать делиться очками, выйдя из Game Center, и управлять своими данными Game Center через Apple.</li><li>Поскольку мы не собираем и не храним персональные данные на наших серверах, у нас нет персональных данных, которые можно было бы предоставить, изменить или удалить.</li></ul>
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
    effectiveDate: `Gültig ab: 5. Oktober 2026`,
    intro: `NikiBStudio („wir", „unser" oder „uns") hat <strong>Wake League</strong> („die App") als kommerzielle Anwendung entwickelt. Diese Datenschutzerklärung erläutert, wie wir mit Informationen umgehen, wenn Sie unsere App nutzen.`,
    sections: [
      {
        heading: `Überblick`,
        content: `<p>Wake League ist ein Wecker, der so lange klingelt, bis Sie kurze Missionen erledigt haben, und bietet eine Tages-Challenge, deren Ergebnisse Sie in Game Center vergleichen können. Die App wurde mit Blick auf Ihre Privatsphäre entwickelt: Wir erheben, speichern und teilen keinerlei personenbezogene Daten. Die App erfordert kein Konto und keinerlei Registrierung, enthält weder Werbung noch Analysen und ist ein einmaliger Kauf ohne In-App-Käufe oder Abonnements. Ihre Wecker, Morgen, Ergebnisse und Einstellungen bleiben auf Ihrem Gerät.</p>`,
      },
      {
        heading: `Daten, die wir nicht erheben`,
        content: `<p>Wir erheben keine der folgenden Daten:</p>
<ul><li>Namen, E-Mail-Adressen oder Kontaktdaten</li><li>Standortdaten</li><li>Gerätekennungen oder Werbe-IDs</li><li>Kontakte, Ihre Fotomediathek oder andere persönliche Dateien</li><li>Kamerabilder, Sprachaufnahmen oder Transkripte — sie werden auf Ihrem iPhone verarbeitet und verworfen</li><li>Ihre Wecker, Aufwachzeiten und Missionsergebnisse — sie verlassen Ihr Gerät nie, mit Ausnahme der Ergebnisse, die Sie freiwillig an Game Center senden</li><li>Nutzungsanalysen oder Tracking-Daten</li></ul>`,
      },
      {
        heading: `Daten auf Ihrem Gerät`,
        content: `<p>Die App speichert Folgendes auf Ihrem Gerät, um ihre Kernfunktionen bereitzustellen:</p>
<ul><li><strong>Wecker</strong> — Uhrzeit, Wiederholungstage, Bezeichnung, Schwierigkeit beim Aufwachen, Missionen und Weckton.</li><li><strong>Morgen</strong> — wann jeder Wecker geklingelt hat und wie der Morgen verlaufen ist: abgeschlossene Missionen, benötigte Zeit, Fehler, Schlummern, Punkte und XP.</li><li><strong>Trophäen</strong> — die Daten, an denen Erfolge erzielt wurden.</li><li><strong>Foto Ihres Ortes</strong> — wenn Sie das Fotofinish „Foto vom Ort" einschalten, werden das von Ihnen aufgenommene Referenzfoto und eine numerische Beschreibung davon (ein Feature Print von Vision) mit diesem Wecker auf Ihrem Gerät gespeichert, nur dazu verwendet, morgens denselben Ort wiederzuerkennen, und gelöscht, wenn Sie das Foto neu aufnehmen oder den Wecker löschen.</li><li><strong>App-Einstellungen</strong> — zum Beispiel, ob die Einführung abgeschlossen wurde und ob die Haptik eingeschaltet ist.</li></ul>
<p>Diese Daten werden weder mit iCloud noch mit einem Server synchronisiert. Sie können sie jederzeit löschen, indem Sie Wecker in der App löschen oder die App deinstallieren.</p>`,
      },
      {
        heading: `Kamera, Mikrofon, Spracherkennung und Bewegung`,
        content: `<p>Die App fragt nach diesen Berechtigungen nur für Missionen, die sie benötigen; jede Mission funktioniert auch ohne sie, da die App dann zu einer anderen Mission wechselt:</p>
<ul><li><strong>Kamera</strong> — für „Finden" (die Kamera auf einen Gegenstand richten) und „Foto vom Ort". Die Bilder werden auf Ihrem iPhone mit Apples Vision-Framework analysiert und niemals gespeichert oder übertragen. Das einzige gespeicherte Bild ist das oben beschriebene Referenzfoto Ihres Ortes.</li><li><strong>Mikrofon und Spracherkennung</strong> — für „Sprechen". Die App nutzt ausschließlich Spracherkennung auf dem Gerät; Audio und Text verlassen Ihr iPhone nie und werden nicht gespeichert.</li><li><strong>Bewegung &amp; Fitness</strong> — für „Schütteln" und „Schritte". Die Bewegung wird während der Mission auf Ihrem iPhone gezählt; nur die Anzahl der Schüttelbewegungen bzw. Schritte wird mit dem Morgen gespeichert.</li></ul>
<p>Sie können diese Berechtigungen jederzeit in den Geräteeinstellungen ändern.</p>`,
      },
      {
        heading: `Wecker, Live-Aktivitäten und Widgets`,
        content: `<p>Wecker werden auf Ihrem Gerät mit Apples AlarmKit geplant und von iOS auf dem Sperrbildschirm und in der Dynamic Island angezeigt. Die Widgets der App lesen eine kleine Zusammenfassung — die nächsten Weckzeiten, Ihre Serie und Ihr Level —, die die App in einen Speicherbereich schreibt, den sie auf Ihrem Gerät nur mit ihren eigenen Widgets teilt. Es wird kein externer Push-Dienst verwendet.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>Game Center ist optional. Wenn Sie bei Game Center angemeldet sind, übermittelt die App Ihr Ergebnis der Tages-Challenge, Ihre beste Serie und Ihre Gesamt-XP an Bestenlisten in Game Center, meldet die Trophäen, die Sie erhalten, und zeigt die heutige Bestenliste mit den Game-Center-Namen und Ergebnissen anderer Spieler an. Game Center wird von Apple betrieben; Ihr Spitzname, Ihre Ergebnisse und Erfolge sind gemäß Ihren Game-Center-Einstellungen für andere Spieler sichtbar, und Apples Umgang mit diesen Daten unterliegt der Datenschutzrichtlinie von Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>). Wir erhalten keine personenbezogenen Daten von Game Center. Level, Trophäen und Statistiken funktionieren auch ohne Game Center.</p>`,
      },
      {
        heading: `Teilen Ihrer Ergebnisse`,
        content: `<p>Wenn Sie auf „Teilen" tippen, erstellt die App ein Bild und einen kurzen Text mit Ihrem Ergebnis und übergibt sie an das Teilen-Menü von iOS. Sie entscheiden, wohin sie gehen; wir erhalten sie nicht.</p>`,
      },
      {
        heading: `Kauf`,
        content: `<p>Wake League ist ein einmaliger Kauf ohne In-App-Käufe und ohne Abonnements. Der Kauf wird vollständig von Apple über den App Store abgewickelt. Wir haben keinen Zugriff auf Ihre Zahlungsinformationen, Ihre Apple-ID oder Abrechnungsdaten.</p>`,
      },
      {
        heading: `Keine Drittanbieterdienste`,
        content: `<p>Die App integriert keine Analyse-, Werbe-, Crash-Reporting- oder Social-Media-SDKs von Drittanbietern. Wir verwenden weder Firebase noch Google Analytics, Facebook SDK, Werbenetzwerke oder ähnliche Dienste. Die App stellt keine eigenen Netzwerkanfragen — die einzige Netzwerkkommunikation ist die mit Apples Game Center, und nur wenn Sie es nutzen.</p>`,
      },
      {
        heading: `Datenschutz von Kindern`,
        content: `<p>Die App erhebt wissentlich von niemandem personenbezogene Daten, auch nicht von Kindern. Da die App von keinem Nutzer personenbezogene Daten erhebt, sind keine besonderen Bestimmungen erforderlich.</p>`,
      },
      {
        heading: `Datensicherheit`,
        content: `<p>Ihre Daten verbleiben auf Ihrem Gerät, geschützt durch den iOS-Datenschutz. Da wir keine personenbezogenen Daten auf Servern erheben oder speichern, besteht unsererseits kein Risiko einer Datenpanne.</p>`,
      },
      {
        heading: `Ihre Rechte`,
        content: `<p>Sie haben folgende Rechte bezüglich Ihrer Daten:</p>
<ul><li>Ihre Wecker, Morgen, Trophäen und Statistiken können Sie direkt in der App einsehen.</li><li>Das Löschen eines Weckers entfernt seine Einstellungen und das Foto seines Ortes; die Deinstallation der App entfernt alle lokalen Daten.</li><li>Sie können das Teilen von Ergebnissen beenden, indem Sie sich von Game Center abmelden, und Ihre Game-Center-Daten bei Apple verwalten.</li><li>Da wir keine personenbezogenen Daten auf unseren Servern speichern, gibt es keine Daten, die wir bereitstellen, ändern oder löschen könnten.</li></ul>
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
    effectiveDate: `Date d'entrée en vigueur : 5 octobre 2026`,
    intro: `NikiBStudio (« nous », « notre » ou « nos ») a développé <strong>Wake League</strong> (« l'Application ») en tant qu'application commerciale. Cette politique de confidentialité explique comment nous traitons les informations lorsque vous utilisez notre Application.`,
    sections: [
      {
        heading: `Aperçu`,
        content: `<p>Wake League est un réveil qui continue de sonner jusqu'à ce que vous ayez terminé de courtes missions, avec un défi du jour dont vous pouvez comparer les résultats dans Game Center. L'Application est conçue dans le respect de votre vie privée : nous ne collectons, ne stockons et ne partageons aucune information personnelle. Elle ne nécessite ni compte ni aucune forme d'inscription, ne contient ni publicité ni outils d'analyse, et il s'agit d'un achat unique sans achats intégrés ni abonnements. Vos alarmes, vos matins, vos résultats et vos réglages restent sur votre appareil.</p>`,
      },
      {
        heading: `Informations que nous ne collectons pas`,
        content: `<p>Nous ne collectons aucune des données suivantes :</p>
<ul><li>Noms, adresses e-mail ou coordonnées</li><li>Données de localisation</li><li>Identifiants d'appareil ou identifiants publicitaires</li><li>Contacts, votre photothèque ou autres fichiers personnels</li><li>Images captées par l'appareil photo, enregistrements vocaux ou transcriptions — ils sont traités sur votre iPhone puis supprimés</li><li>Vos alarmes, temps de réveil et résultats de missions — ils ne quittent jamais votre appareil, à l'exception des scores que vous choisissez de publier dans Game Center</li><li>Analyses d'utilisation ou données de suivi comportemental</li></ul>`,
      },
      {
        heading: `Données sur votre appareil`,
        content: `<p>L'Application stocke les données suivantes sur votre appareil pour assurer ses fonctionnalités principales :</p>
<ul><li><strong>Alarmes</strong> — heure, jours de répétition, libellé, difficulté du réveil, missions et son de l'alarme.</li><li><strong>Matins</strong> — quand chaque alarme a sonné et comment s'est déroulé le matin : missions terminées, temps nécessaire, erreurs, rappels, points et XP.</li><li><strong>Trophées</strong> — les dates auxquelles des succès ont été obtenus.</li><li><strong>Photo de votre lieu</strong> — si vous activez le photo-finish « Photo du lieu », la photo de référence que vous prenez et une description numérique de celle-ci (un « feature print » de Vision) sont conservées avec cette alarme sur votre appareil, utilisées uniquement pour reconnaître le même endroit le matin, et supprimées lorsque vous la reprenez ou supprimez l'alarme.</li><li><strong>Préférences</strong> — par exemple, si l'introduction a été terminée et si les retours haptiques sont activés.</li></ul>
<p>Ces données ne sont synchronisées ni avec iCloud ni avec aucun serveur. Vous pouvez les supprimer à tout moment en supprimant des alarmes dans l'Application ou en désinstallant l'Application.</p>`,
      },
      {
        heading: `Appareil photo, micro, reconnaissance vocale et mouvements`,
        content: `<p>L'Application ne demande ces autorisations que pour les missions qui en ont besoin ; chaque mission fonctionne aussi sans elles, l'Application passant alors à une autre mission :</p>
<ul><li><strong>Appareil photo</strong> — pour « Trouve-le » (pointer l'appareil photo vers un objet) et « Photo du lieu ». Les images sont analysées sur votre iPhone avec le framework Vision d'Apple et ne sont jamais enregistrées ni transmises. La seule image conservée est la photo de référence de votre lieu décrite ci-dessus.</li><li><strong>Micro et reconnaissance vocale</strong> — pour « Dis-le ». L'Application utilise uniquement la reconnaissance vocale sur l'appareil ; l'audio et le texte ne quittent jamais votre iPhone et ne sont pas enregistrés.</li><li><strong>Mouvements et forme</strong> — pour « Secoue » et « Pas ». Les mouvements sont comptés sur votre iPhone pendant la mission ; seul le nombre de secousses ou de pas est enregistré avec le matin.</li></ul>
<p>Vous pouvez modifier ces autorisations à tout moment dans les Réglages de votre appareil.</p>`,
      },
      {
        heading: `Alarmes, Activités en direct et widgets`,
        content: `<p>Les alarmes sont programmées sur votre appareil avec AlarmKit d'Apple et affichées par iOS sur l'écran verrouillé et dans la Dynamic Island. Les widgets de l'Application lisent un petit résumé — heures des prochaines alarmes, votre série et votre niveau — que l'Application écrit dans un espace de stockage partagé uniquement avec ses propres widgets sur votre appareil. Aucun service push externe n'est utilisé.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>Game Center est facultatif. Si vous êtes connecté à Game Center, l'Application envoie votre score du Défi du jour, votre meilleure série et votre XP totale aux classements Game Center, signale les trophées que vous obtenez et affiche le classement du jour avec les noms Game Center et les scores des autres joueurs. Game Center est exploité par Apple ; votre pseudo, vos scores et vos succès sont visibles par les autres joueurs selon vos réglages Game Center, et le traitement de ces données par Apple est régi par la politique de confidentialité d'Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>). Nous ne recevons aucune donnée personnelle de Game Center. Les niveaux, trophées et statistiques fonctionnent sans Game Center.</p>`,
      },
      {
        heading: `Partage de vos résultats`,
        content: `<p>Lorsque vous touchez « Partager », l'Application crée une image et un court texte avec votre résultat et les transmet à la feuille de partage d'iOS. Vous décidez où ils vont ; nous ne les recevons pas.</p>`,
      },
      {
        heading: `Achat`,
        content: `<p>Wake League est un achat unique, sans achats intégrés ni abonnements. L'achat est traité entièrement par Apple via l'App Store. Nous n'avons pas accès à vos informations de paiement, à votre identifiant Apple ni à vos données de facturation.</p>`,
      },
      {
        heading: `Aucun service tiers`,
        content: `<p>L'Application n'intègre aucun SDK tiers d'analyse, de publicité, de rapport de plantage ou de réseaux sociaux. Nous n'utilisons ni Firebase, ni Google Analytics, ni le SDK Facebook, ni des régies publicitaires, ni aucun service similaire. L'Application n'émet aucune requête réseau propre — la seule communication réseau est celle avec Game Center d'Apple, et uniquement si vous l'utilisez.</p>`,
      },
      {
        heading: `Confidentialité des enfants`,
        content: `<p>L'Application ne collecte sciemment aucune information personnelle auprès de quiconque, y compris les enfants. Puisqu'elle ne collecte de données personnelles d'aucun utilisateur, aucune disposition particulière n'est nécessaire.</p>`,
      },
      {
        heading: `Sécurité des données`,
        content: `<p>Vos données restent sur votre appareil, protégées par la protection des données d'iOS. Comme nous ne collectons ni ne stockons aucune donnée personnelle sur des serveurs, aucune fuite de données ne peut affecter vos informations personnelles de notre côté.</p>`,
      },
      {
        heading: `Vos droits`,
        content: `<p>Vous disposez des droits suivants concernant vos données :</p>
<ul><li>Vous pouvez consulter vos alarmes, matins, trophées et statistiques directement dans l'Application.</li><li>Supprimer une alarme efface ses réglages et la photo de son lieu ; désinstaller l'Application supprime toutes les données locales.</li><li>Vous pouvez cesser de partager vos scores en vous déconnectant de Game Center, et gérer vos données Game Center auprès d'Apple.</li><li>Comme nous ne stockons aucune donnée personnelle sur nos serveurs, il n'existe aucune donnée à fournir, modifier ou supprimer.</li></ul>
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
    effectiveDate: `Fecha de entrada en vigor: 5 de octubre de 2026`,
    intro: `NikiBStudio («nosotros» o «nuestro») desarrolló <strong>Wake League</strong> («la App») como aplicación comercial. Esta Política de privacidad explica cómo tratamos la información cuando usas nuestra App.`,
    sections: [
      {
        heading: `Resumen`,
        content: `<p>Wake League es un despertador que sigue sonando hasta que completas misiones cortas, con un reto del día cuyos resultados puedes comparar en Game Center. La App está diseñada pensando en tu privacidad: no recopilamos, almacenamos ni compartimos información personal. No requiere una cuenta ni ningún tipo de registro, no contiene publicidad ni analíticas, y es una compra única sin compras dentro de la app ni suscripciones. Tus alarmas, mañanas, resultados y ajustes permanecen en tu dispositivo.</p>`,
      },
      {
        heading: `Información que no recopilamos`,
        content: `<p>No recopilamos nada de lo siguiente:</p>
<ul><li>Nombres, correos electrónicos o datos de contacto</li><li>Datos de ubicación</li><li>Identificadores del dispositivo o publicitarios</li><li>Contactos, tu fototeca u otros archivos personales</li><li>Imágenes de la cámara, grabaciones de voz o transcripciones — se procesan en tu iPhone y se descartan</li><li>Tus alarmas, tiempos de despertar y resultados de misiones — nunca salen de tu dispositivo, salvo las puntuaciones que decidas publicar en Game Center</li><li>Analíticas de uso o datos de seguimiento</li></ul>`,
      },
      {
        heading: `Datos en tu dispositivo`,
        content: `<p>La App guarda lo siguiente en tu dispositivo para ofrecer sus funciones principales:</p>
<ul><li><strong>Alarmas</strong> — hora, días de repetición, etiqueta, dificultad para despertar, misiones y sonido de la alarma.</li><li><strong>Mañanas</strong> — cuándo sonó cada alarma y cómo fue la mañana: misiones completadas, tiempo empleado, errores, aplazamientos, puntos y XP.</li><li><strong>Trofeos</strong> — las fechas en que se consiguieron los logros.</li><li><strong>Foto de tu sitio</strong> — si activas la foto final «Foto del sitio», la foto de referencia que haces y una descripción numérica de ella (un «feature print» de Vision) se guardan con esa alarma en tu dispositivo, se usan solo para reconocer el mismo lugar por la mañana y se eliminan cuando la repites o eliminas la alarma.</li><li><strong>Preferencias</strong> — por ejemplo, si se completó la introducción y si la respuesta háptica está activada.</li></ul>
<p>Estos datos no se sincronizan con iCloud ni con ningún servidor. Puedes borrarlos en cualquier momento eliminando alarmas en la App o desinstalando la App.</p>`,
      },
      {
        heading: `Cámara, micrófono, reconocimiento de voz y movimiento`,
        content: `<p>La App solo pide estos permisos para las misiones que los necesitan; cualquier misión funciona sin ellos, porque la App cambia a otra misión:</p>
<ul><li><strong>Cámara</strong> — para «Encuéntralo» (apuntar la cámara a un objeto) y «Foto del sitio». Las imágenes se analizan en tu iPhone con el framework Vision de Apple y nunca se guardan ni se transmiten. La única imagen que se conserva es la foto de referencia de tu sitio descrita arriba.</li><li><strong>Micrófono y reconocimiento de voz</strong> — para «Dilo». La App usa solo el reconocimiento de voz en el dispositivo; el audio y el texto nunca salen de tu iPhone y no se guardan.</li><li><strong>Movimiento y forma física</strong> — para «Agita» y «Pasos». El movimiento se cuenta en tu iPhone durante la misión; con la mañana solo se guarda el número de sacudidas o de pasos.</li></ul>
<p>Puedes cambiar estos permisos en cualquier momento en los Ajustes de tu dispositivo.</p>`,
      },
      {
        heading: `Alarmas, Actividades en vivo y widgets`,
        content: `<p>Las alarmas se programan en tu dispositivo con AlarmKit de Apple, e iOS las muestra en la pantalla bloqueada y en la Dynamic Island. Los widgets de la App leen un pequeño resumen — las próximas horas de alarma, tu racha y tu nivel — que la App escribe en un espacio de almacenamiento compartido solo con sus propios widgets en tu dispositivo. No se usa ningún servicio push externo.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>Game Center es opcional. Si has iniciado sesión en Game Center, la App envía tu puntuación del Reto del día, tu mejor racha y tu XP total a las clasificaciones de Game Center, comunica los trofeos que consigues y muestra la clasificación de hoy con los nombres de Game Center y las puntuaciones de otros jugadores. Game Center lo gestiona Apple; tu apodo, tus puntuaciones y tus logros son visibles para otros jugadores según tus ajustes de Game Center, y el tratamiento de estos datos por parte de Apple se rige por la política de privacidad de Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>). No recibimos datos personales de Game Center. Los niveles, trofeos y estadísticas funcionan sin Game Center.</p>`,
      },
      {
        heading: `Compartir tus resultados`,
        content: `<p>Cuando tocas «Compartir», la App crea una imagen y un texto breve con tu resultado y los pasa a la hoja para compartir de iOS. Tú decides adónde van; nosotros no los recibimos.</p>`,
      },
      {
        heading: `Compra`,
        content: `<p>Wake League es una compra única, sin compras dentro de la app ni suscripciones. La compra la procesa íntegramente Apple a través del App Store. No tenemos acceso a tu información de pago, Apple ID ni datos de facturación.</p>`,
      },
      {
        heading: `Sin servicios de terceros`,
        content: `<p>La App no integra SDK de analítica, publicidad, informes de fallos ni redes sociales de terceros. No usamos Firebase, Google Analytics, Facebook SDK, redes publicitarias ni servicios similares. La App no realiza solicitudes de red propias: la única comunicación de red es con Game Center de Apple, y solo si lo usas.</p>`,
      },
      {
        heading: `Privacidad de los menores`,
        content: `<p>La App no recopila deliberadamente información personal de nadie, incluidos los menores. Dado que la App no recopila información personal de ningún usuario, no se requieren disposiciones especiales.</p>`,
      },
      {
        heading: `Seguridad de los datos`,
        content: `<p>Tus datos permanecen en tu dispositivo, protegidos por la protección de datos de iOS. Como no recopilamos ni almacenamos datos personales en servidores, no existe riesgo de que una filtración por nuestra parte afecte tu información personal.</p>`,
      },
      {
        heading: `Tus derechos`,
        content: `<p>Tienes los siguientes derechos sobre tus datos:</p>
<ul><li>Puedes ver tus alarmas, mañanas, trofeos y estadísticas directamente en la App.</li><li>Eliminar una alarma borra sus ajustes y la foto de su sitio; desinstalar la App elimina todos los datos locales.</li><li>Puedes dejar de compartir puntuaciones cerrando sesión en Game Center y gestionar tus datos de Game Center con Apple.</li><li>Como no almacenamos datos personales en nuestros servidores, no hay datos que proporcionar, modificar o eliminar.</li></ul>
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
    effectiveDate: `Data di entrata in vigore: 5 ottobre 2026`,
    intro: `NikiBStudio («noi» o «nostro») ha sviluppato <strong>Wake League</strong> («l'App») come applicazione commerciale. Questa informativa spiega come trattiamo le informazioni quando usi la nostra App.`,
    sections: [
      {
        heading: `Panoramica`,
        content: `<p>Wake League è una sveglia che continua a suonare finché non completi brevi missioni, con una sfida del giorno di cui puoi confrontare i risultati in Game Center. È progettata nel rispetto della tua privacy: non raccogliamo, memorizziamo né condividiamo alcuna informazione personale. L'App non richiede un account né alcuna registrazione, non contiene pubblicità né strumenti di analisi ed è un acquisto unico senza acquisti in-app né abbonamenti. Le tue sveglie, le mattine, i risultati e le impostazioni restano sul tuo dispositivo.</p>`,
      },
      {
        heading: `Informazioni che non raccogliamo`,
        content: `<p>Non raccogliamo nulla di quanto segue:</p>
<ul><li>Nomi, indirizzi e-mail o recapiti</li><li>Dati di posizione</li><li>Identificatori del dispositivo o pubblicitari</li><li>Contatti, la tua libreria foto o altri file personali</li><li>Immagini della fotocamera, registrazioni vocali o trascrizioni — vengono elaborate sul tuo iPhone e scartate</li><li>Le tue sveglie, i tempi di risveglio e i risultati delle missioni — non lasciano mai il tuo dispositivo, tranne i punteggi che scegli di pubblicare in Game Center</li><li>Analisi d'uso o dati di tracciamento</li></ul>`,
      },
      {
        heading: `Dati sul tuo dispositivo`,
        content: `<p>L'App salva sul tuo dispositivo quanto segue per fornire le funzioni principali:</p>
<ul><li><strong>Sveglie</strong> — ora, giorni di ripetizione, etichetta, difficoltà del risveglio, missioni e suono della sveglia.</li><li><strong>Mattine</strong> — quando ha suonato ogni sveglia e com'è andata la mattina: missioni completate, tempo impiegato, errori, posticipi, punti e XP.</li><li><strong>Trofei</strong> — le date in cui sono stati ottenuti gli obiettivi.</li><li><strong>Foto del tuo posto</strong> — se attivi il fotofinish «Foto del posto», la foto di riferimento che scatti e una sua descrizione numerica (un «feature print» di Vision) vengono conservate con quella sveglia sul tuo dispositivo, usate solo per riconoscere lo stesso luogo al mattino ed eliminate quando la rifai o elimini la sveglia.</li><li><strong>Preferenze</strong> — ad esempio, se l'introduzione è stata completata e se il feedback aptico è attivo.</li></ul>
<p>Questi dati non vengono sincronizzati con iCloud né con alcun server. Puoi eliminarli in qualsiasi momento cancellando le sveglie nell'App o disinstallando l'App.</p>`,
      },
      {
        heading: `Fotocamera, microfono, riconoscimento vocale e movimento`,
        content: `<p>L'App chiede questi permessi solo per le missioni che ne hanno bisogno; ogni missione funziona anche senza, perché l'App passa a un'altra missione:</p>
<ul><li><strong>Fotocamera</strong> — per «Trovalo» (inquadrare un oggetto con la fotocamera) e «Foto del posto». Le immagini vengono analizzate sul tuo iPhone con il framework Vision di Apple e non vengono mai salvate né trasmesse. L'unica immagine conservata è la foto di riferimento del tuo posto descritta sopra.</li><li><strong>Microfono e riconoscimento vocale</strong> — per «Dillo». L'App usa solo il riconoscimento vocale sul dispositivo; audio e testo non lasciano mai il tuo iPhone e non vengono memorizzati.</li><li><strong>Movimento e fitness</strong> — per «Scuoti» e «Passi». Il movimento viene contato sul tuo iPhone durante la missione; con la mattina viene salvato solo il numero di scosse o di passi.</li></ul>
<p>Puoi modificare questi permessi in qualsiasi momento nelle Impostazioni del dispositivo.</p>`,
      },
      {
        heading: `Sveglie, Attività Live e widget`,
        content: `<p>Le sveglie vengono programmate sul tuo dispositivo con AlarmKit di Apple e mostrate da iOS nella schermata di blocco e nella Dynamic Island. I widget dell'App leggono un piccolo riepilogo — gli orari delle prossime sveglie, la tua serie e il tuo livello — che l'App scrive in uno spazio di archiviazione condiviso solo con i suoi widget sul tuo dispositivo. Non viene usato alcun servizio push esterno.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>Game Center è facoltativo. Se hai effettuato l'accesso a Game Center, l'App invia il tuo punteggio della Sfida del giorno, la tua serie migliore e gli XP totali alle classifiche di Game Center, segnala i trofei che ottieni e mostra la classifica di oggi con i nomi Game Center e i punteggi degli altri giocatori. Game Center è gestito da Apple; il tuo nickname, i tuoi punteggi e i tuoi obiettivi sono visibili agli altri giocatori in base alle tue impostazioni di Game Center, e il trattamento di questi dati da parte di Apple è regolato dall'informativa sulla privacy di Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>). Non riceviamo dati personali da Game Center. Livelli, trofei e statistiche funzionano anche senza Game Center.</p>`,
      },
      {
        heading: `Condivisione dei risultati`,
        content: `<p>Quando tocchi «Condividi», l'App crea un'immagine e un breve testo con il tuo risultato e li passa al foglio di condivisione di iOS. Decidi tu dove inviarli; noi non li riceviamo.</p>`,
      },
      {
        heading: `Acquisto`,
        content: `<p>Wake League è un acquisto unico, senza acquisti in-app né abbonamenti. L'acquisto è gestito interamente da Apple tramite l'App Store. Non abbiamo accesso ai tuoi dati di pagamento, all'Apple ID o ai dati di fatturazione.</p>`,
      },
      {
        heading: `Nessun servizio di terze parti`,
        content: `<p>L'App non integra SDK di analisi, pubblicità, crash reporting o social media di terze parti. Non usiamo Firebase, Google Analytics, Facebook SDK, reti pubblicitarie o servizi simili. L'App non effettua richieste di rete proprie: l'unica comunicazione di rete è con Game Center di Apple, e solo se lo usi.</p>`,
      },
      {
        heading: `Privacy dei minori`,
        content: `<p>L'App non raccoglie consapevolmente informazioni personali da nessuno, minori inclusi. Poiché l'App non raccoglie dati personali da alcun utente, non sono necessarie disposizioni particolari.</p>`,
      },
      {
        heading: `Sicurezza dei dati`,
        content: `<p>I tuoi dati restano sul tuo dispositivo, protetti dalla protezione dati di iOS. Non raccogliendo né memorizzando dati personali su server, da parte nostra non esiste rischio di violazione dei tuoi dati.</p>`,
      },
      {
        heading: `I tuoi diritti`,
        content: `<p>Hai i seguenti diritti sui tuoi dati:</p>
<ul><li>Puoi vedere le tue sveglie, mattine, trofei e statistiche direttamente nell'App.</li><li>Eliminare una sveglia rimuove le sue impostazioni e la foto del suo posto; disinstallare l'App rimuove tutti i dati locali.</li><li>Puoi smettere di condividere i punteggi uscendo da Game Center e gestire i tuoi dati di Game Center con Apple.</li><li>Non conservando dati personali sui nostri server, non esistono dati da fornire, modificare o eliminare.</li></ul>
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
    effectiveDate: `Data de vigência: 5 de outubro de 2026`,
    intro: `A NikiBStudio («nós» ou «nosso») desenvolveu o <strong>Wake League</strong> («o App») como aplicativo comercial. Esta Política de Privacidade explica como tratamos informações quando você usa nosso App.`,
    sections: [
      {
        heading: `Visão geral`,
        content: `<p>O Wake League é um despertador que continua tocando até você concluir missões curtas, com um desafio do dia que você pode comparar no Game Center. Ele foi projetado pensando na sua privacidade: não coletamos, armazenamos nem compartilhamos nenhuma informação pessoal. O App não exige conta nem qualquer registro, não contém publicidade nem análises, e é uma compra única, sem compras no app nem assinaturas. Seus alarmes, manhãs, resultados e configurações ficam no seu dispositivo.</p>`,
      },
      {
        heading: `Informações que não coletamos`,
        content: `<p>Não coletamos nada do que segue:</p>
<ul><li>Nomes, e-mails ou informações de contato</li><li>Dados de localização</li><li>Identificadores do dispositivo ou de publicidade</li><li>Contatos, sua fototeca ou outros arquivos pessoais</li><li>Imagens da câmera, gravações de voz ou transcrições — elas são processadas no seu iPhone e descartadas</li><li>Seus alarmes, tempos para acordar e resultados das missões — eles nunca saem do seu dispositivo, exceto as pontuações que você decide publicar no Game Center</li><li>Análises de uso ou dados de rastreamento</li></ul>`,
      },
      {
        heading: `Dados armazenados no seu dispositivo`,
        content: `<p>O App armazena o seguinte no seu dispositivo para oferecer suas funções principais:</p>
<ul><li><strong>Alarmes</strong> — horário, dias de repetição, etiqueta, dificuldade para acordar, missões e som do alarme.</li><li><strong>Manhãs</strong> — quando cada alarme tocou e como foi a manhã: missões concluídas, tempo gasto, erros, sonecas, pontos e XP.</li><li><strong>Troféus</strong> — as datas em que as conquistas foram obtidas.</li><li><strong>A foto do seu lugar</strong> — se você ativar o final com foto «Foto do lugar», a foto de referência que você tira e uma descrição numérica dela (um feature print do Vision) ficam guardadas com esse alarme no seu dispositivo, são usadas apenas para reconhecer o mesmo lugar de manhã e são apagadas quando você tira a foto de novo ou apaga o alarme.</li><li><strong>Preferências do App</strong> — por exemplo, se a introdução foi concluída e se o retorno tátil está ativado.</li></ul>
<p>Esses dados não são sincronizados com o iCloud nem com nenhum servidor. Você pode apagá-los a qualquer momento excluindo alarmes no App ou desinstalando o App.</p>`,
      },
      {
        heading: `Câmera, microfone, reconhecimento de fala e movimento`,
        content: `<p>O App pede essas permissões apenas para as missões que precisam delas; sem elas, tudo continua funcionando, porque essas missões são trocadas por outras:</p>
<ul><li><strong>Câmera</strong> — para «Encontre» (aponte a câmera para um objeto) e «Foto do lugar». As imagens são analisadas no seu iPhone com o framework Vision da Apple e nunca são salvas nem transmitidas. A única imagem guardada é a foto de referência do seu lugar descrita acima.</li><li><strong>Microfone e Reconhecimento de Fala</strong> — para «Fale». O App usa apenas o reconhecimento de fala no dispositivo; o áudio e o texto nunca saem do seu iPhone e não são armazenados.</li><li><strong>Movimento e Preparo Físico</strong> — para «Chacoalhe» e «Passos». O movimento é contado no seu iPhone durante a missão; apenas o número de chacoalhadas ou de passos é salvo com a manhã.</li></ul>
<p>Você pode alterar essas permissões a qualquer momento nos Ajustes do seu dispositivo.</p>`,
      },
      {
        heading: `Alarmes, Atividades ao Vivo e widgets`,
        content: `<p>Os alarmes são agendados no seu dispositivo com o AlarmKit da Apple e exibidos pelo iOS na Tela Bloqueada e na Dynamic Island. Os widgets do App leem um pequeno resumo — horários dos próximos alarmes, sua sequência e seu nível — que o App grava em uma área de armazenamento compartilhada apenas com seus próprios widgets no seu dispositivo. Nenhum serviço push externo é usado.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>O Game Center é opcional. Se você estiver conectado ao Game Center, o App envia sua pontuação do Desafio do dia, sua melhor sequência e seu XP total para os placares do Game Center e informa os troféus que você conquista, além de mostrar o placar de hoje com os nomes no Game Center e as pontuações de outros jogadores. O Game Center é operado pela Apple; seu apelido, suas pontuações e suas conquistas ficam visíveis para outros jogadores de acordo com seus ajustes do Game Center, e o tratamento desses dados pela Apple é regido pela política de privacidade da Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>). Não recebemos nenhum dado pessoal do Game Center. Níveis, troféus e estatísticas funcionam sem o Game Center.</p>`,
      },
      {
        heading: `Compartilhar seus resultados`,
        content: `<p>Quando você toca em Compartilhar, o App cria uma imagem e um texto curto com seu resultado e os entrega ao menu de compartilhamento do iOS. Você decide para onde eles vão; nós não os recebemos.</p>`,
      },
      {
        heading: `Compra`,
        content: `<p>O Wake League é uma compra única, sem compras no app nem assinaturas. A compra é processada integralmente pela Apple via App Store. Não temos acesso às suas informações de pagamento, Apple ID ou dados de cobrança.</p>`,
      },
      {
        heading: `Sem serviços de terceiros`,
        content: `<p>O App não integra SDKs de análise, publicidade, relatórios de falhas ou redes sociais de terceiros. Não usamos Firebase, Google Analytics, Facebook SDK, redes de anúncios ou serviços semelhantes. O App não faz solicitações de rede próprias — a única comunicação de rede é com o Game Center da Apple, e somente se você o usar.</p>`,
      },
      {
        heading: `Privacidade de crianças`,
        content: `<p>O App não coleta intencionalmente informações pessoais de ninguém, incluindo crianças. Como o App não coleta informações pessoais de nenhum usuário, não são necessárias disposições especiais.</p>`,
      },
      {
        heading: `Segurança dos dados`,
        content: `<p>Seus dados permanecem no seu dispositivo, protegidos pela proteção de dados do iOS. Como não coletamos nem armazenamos dados pessoais em servidores, não há risco de vazamento afetar suas informações do nosso lado.</p>`,
      },
      {
        heading: `Seus direitos`,
        content: `<p>Você tem os seguintes direitos sobre seus dados:</p>
<ul><li>Você pode ver seus alarmes, manhãs, troféus e estatísticas diretamente no App.</li><li>Excluir um alarme remove as configurações dele e a foto do lugar; desinstalar o App remove todos os dados locais.</li><li>Você pode parar de compartilhar pontuações saindo do Game Center e gerenciar seus dados do Game Center com a Apple.</li><li>Como não armazenamos dados pessoais em nossos servidores, não há dados a fornecer, alterar ou excluir.</li></ul>
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
    effectiveDate: `発効日：2026年10月5日`,
    intro: `NikiBStudio（以下「当社」）は、商用アプリケーションとして<strong>Wake League</strong>（以下「本アプリ」）を開発しました。本プライバシーポリシーは、本アプリのご利用時に当社が情報をどのように取り扱うかを説明するものです。`,
    sections: [
      {
        heading: `概要`,
        content: `<p>Wake Leagueは、短いミッションをクリアするまで鳴り続ける目覚まし時計で、Game Centerで比べられるデイリーチャレンジを備えています。本アプリはプライバシーに配慮して設計されており、当社は個人情報を一切収集・保存・共有しません。本アプリはアカウントやいかなる登録も不要で、広告も分析ツールも含まず、アプリ内課金やサブスクリプションのない買い切り型です。アラーム、朝の記録、結果、設定はお使いの端末内に留まります。</p>`,
      },
      {
        heading: `収集しない情報`,
        content: `<p>当社は以下のいずれも収集しません：</p>
<ul><li>氏名、メールアドレス、連絡先情報</li><li>位置情報</li><li>デバイス識別子や広告ID</li><li>連絡先、写真ライブラリ、その他の個人ファイル</li><li>カメラの映像、音声の録音、文字起こし — これらはiPhone上で処理され、破棄されます</li><li>アラーム、起床までの時間、ミッションの結果 — Game Centerへの送信を選んだスコアを除き、端末の外に出ることはありません</li><li>利用分析や行動追跡データ</li></ul>`,
      },
      {
        heading: `端末に保存されるデータ`,
        content: `<p>本アプリは主要機能の提供のため、以下を端末に保存します：</p>
<ul><li><strong>アラーム</strong> — 時刻、繰り返しの曜日、ラベル、起床の難易度、ミッション、アラーム音。</li><li><strong>朝の記録</strong> — 各アラームが鳴った時刻とその朝の結果：クリアしたミッション、かかった時間、ミス、スヌーズ、ポイント、XP。</li><li><strong>トロフィー</strong> — 各実績を獲得した日付。</li><li><strong>場所の写真</strong> — 「場所を撮影」のフォトフィニッシュをオンにした場合、撮影した基準写真と、それを数値で表したデータ（VisionのFeature Print）がそのアラームとともに端末に保存されます。これらは朝に同じ場所を認識するためだけに使われ、撮り直したときやアラームを削除したときに削除されます。</li><li><strong>アプリ設定</strong> — たとえば、初回の案内を完了したかどうか、触覚フィードバックがオンかどうか。</li></ul>
<p>このデータはiCloudにもいかなるサーバーにも同期されません。アプリ内でアラームを削除するか、アプリを削除することで、いつでも消去できます。</p>`,
      },
      {
        heading: `カメラ、マイク、音声認識、モーション`,
        content: `<p>本アプリは、これらの許可を必要とするミッションでのみ許可を求めます。許可がなくても、該当するミッションが別のミッションに切り替わるため、問題なく使えます：</p>
<ul><li><strong>カメラ</strong> — 「探索」（カメラを物に向ける）と「場所を撮影」で使用します。映像はAppleのVisionフレームワークによってiPhone上で解析され、保存も送信もされません。保存される唯一の画像は、上記の場所の基準写真です。</li><li><strong>マイクと音声認識</strong> — 「発声」で使用します。本アプリは端末上の音声認識のみを使用し、音声やテキストがiPhoneの外に出ることはなく、保存もされません。</li><li><strong>モーションとフィットネス</strong> — 「シェイク」と「歩数」で使用します。動きはミッション中にiPhone上でカウントされ、朝の記録とともに保存されるのは振った回数または歩数のみです。</li></ul>
<p>これらの許可は、端末の設定でいつでも変更できます。</p>`,
      },
      {
        heading: `アラーム、ライブアクティビティ、ウィジェット`,
        content: `<p>アラームはAppleのAlarmKitによって端末上でスケジュールされ、iOSによってロック画面とDynamic Islandに表示されます。本アプリのウィジェットは、本アプリが端末上で自身のウィジェットとのみ共有するストレージ領域に書き込んだ小さな概要（今後のアラーム時刻、連続記録、レベル）を読み取ります。外部のプッシュサービスは使用しません。</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>Game Centerの利用は任意です。Game Centerにサインインしている場合、本アプリはデイリーチャレンジのスコア、最長連続記録、累計XPをGame Centerのリーダーボードに送信し、獲得したトロフィーを報告するとともに、他のプレイヤーのGame Center上の名前とスコアを含む今日のランキングを表示します。Game CenterはAppleが運営しており、ニックネーム、スコア、達成項目はGame Centerの設定に応じて他のプレイヤーに公開されます。Appleによるこれらのデータの取り扱いはAppleのプライバシーポリシー（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）に従います。当社がGame Centerから個人データを受け取ることはありません。レベル、トロフィー、統計はGame Centerなしでも使えます。</p>`,
      },
      {
        heading: `結果の共有`,
        content: `<p>「共有」をタップすると、本アプリは結果を載せた画像と短いテキストを作成し、iOSの共有シートに渡します。送り先はあなたが決めるもので、当社がそれらを受け取ることはありません。</p>`,
      },
      {
        heading: `購入`,
        content: `<p>Wake Leagueはアプリ内課金もサブスクリプションもない買い切り型です。購入はApp Storeを通じてAppleが完全に処理します。当社はお支払い情報、Apple ID、請求情報にアクセスできません。</p>`,
      },
      {
        heading: `第三者サービスなし`,
        content: `<p>本アプリは、第三者の分析、広告、クラッシュレポート、SNSのSDKを一切組み込んでいません。Firebase、Google Analytics、Facebook SDK、広告ネットワーク等は使用していません。本アプリ自体はネットワーク要求を行わず、唯一の通信はAppleのGame Centerとの通信のみで、それもGame Centerを利用する場合に限られます。</p>`,
      },
      {
        heading: `お子様のプライバシー`,
        content: `<p>本アプリは、お子様を含む誰からも意図的に個人情報を収集しません。いかなるユーザーからも個人情報を収集しないため、特別な規定は不要です。</p>`,
      },
      {
        heading: `データセキュリティ`,
        content: `<p>データはiOSのデータ保護により守られた端末内に留まります。当社はサーバー上に個人データを収集・保存しないため、当社側での情報漏えいのリスクはありません。</p>`,
      },
      {
        heading: `お客様の権利`,
        content: `<p>お客様はご自身のデータについて以下の権利を有します：</p>
<ul><li>アラーム、朝の記録、トロフィー、統計はアプリ内で直接確認できます。</li><li>アラームを削除すると、その設定と場所の写真が削除されます。アプリを削除するとローカルデータはすべて消去されます。</li><li>Game Centerからサインアウトすればスコアの共有を停止でき、Game CenterのデータはAppleを通じて管理できます。</li><li>当社のサーバーに個人データは保存されていないため、提供・修正・削除すべきデータは存在しません。</li></ul>
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
    effectiveDate: `시행일: 2026년 10월 5일`,
    intro: `NikiBStudio(이하 "당사")는 상용 애플리케이션으로 <strong>Wake League</strong>(이하 "앱")를 개발했습니다. 본 개인정보 처리방침은 앱 사용 시 당사가 정보를 어떻게 처리하는지 설명합니다.`,
    sections: [
      {
        heading: `개요`,
        content: `<p>Wake League는 짧은 미션을 완료할 때까지 계속 울리는 알람 시계이며, Game Center에서 비교할 수 있는 데일리 챌린지를 제공합니다. 앱은 개인정보 보호를 염두에 두고 설계되었습니다. 당사는 어떠한 개인정보도 수집, 저장, 공유하지 않습니다. 앱은 계정이나 어떤 형태의 등록도 요구하지 않으며, 광고와 분석 도구가 없고, 인앱 구매나 구독이 없는 1회 구매 앱입니다. 알람, 아침 기록, 결과, 설정은 기기에 남습니다.</p>`,
      },
      {
        heading: `수집하지 않는 정보`,
        content: `<p>당사는 다음 정보를 수집하지 않습니다:</p>
<ul><li>이름, 이메일 주소, 연락처</li><li>위치 데이터</li><li>기기 식별자 또는 광고 ID</li><li>연락처, 사진 보관함 및 기타 개인 파일</li><li>카메라 영상, 음성 녹음, 변환된 텍스트 — iPhone에서 처리된 후 폐기됩니다</li><li>알람, 기상 시간, 미션 결과 — Game Center에 올리기로 선택한 점수를 제외하고는 기기 밖으로 나가지 않습니다</li><li>사용 분석 또는 행동 추적 데이터</li></ul>`,
      },
      {
        heading: `기기에 저장되는 데이터`,
        content: `<p>앱은 핵심 기능 제공을 위해 다음 데이터를 기기에 저장합니다:</p>
<ul><li><strong>알람</strong> — 시간, 반복 요일, 레이블, 기상 난이도, 미션, 알람 사운드.</li><li><strong>아침 기록</strong> — 각 알람이 울린 시각과 그날 아침의 결과: 완료한 미션, 걸린 시간, 실수, 다시 알림, 포인트, XP.</li><li><strong>트로피</strong> — 업적을 달성한 날짜.</li><li><strong>장소 사진</strong> — ‘장소 찍기’ 포토 피니시를 켜면 직접 찍은 기준 사진과 이를 수치로 나타낸 정보(Vision feature print)가 해당 알람과 함께 기기에 보관되며, 아침에 같은 장소를 인식하는 데만 사용되고, 사진을 다시 찍거나 알람을 삭제하면 삭제됩니다.</li><li><strong>앱 설정</strong> — 예를 들어 온보딩 완료 여부와 햅틱 사용 여부.</li></ul>
<p>이 데이터는 iCloud나 어떤 서버와도 동기화되지 않습니다. 앱에서 알람을 삭제하거나 앱을 삭제하면 언제든 데이터를 지울 수 있습니다.</p>`,
      },
      {
        heading: `카메라, 마이크, 음성 인식, 동작`,
        content: `<p>앱은 이 권한이 필요한 미션에서만 권한을 요청하며, 권한이 없으면 해당 미션이 다른 미션으로 바뀌므로 권한 없이도 모든 미션이 작동합니다:</p>
<ul><li><strong>카메라</strong> — ‘찾기’(물건에 카메라를 비추기)와 ‘장소 찍기’에 사용됩니다. 영상은 Apple의 Vision 프레임워크로 iPhone에서 분석되며 저장되거나 전송되지 않습니다. 보관되는 유일한 이미지는 위에서 설명한 장소 기준 사진입니다.</li><li><strong>마이크 및 음성 인식</strong> — ‘말하기’에 사용됩니다. 앱은 기기 내 음성 인식만 사용하며, 오디오와 텍스트는 iPhone 밖으로 나가지 않고 저장되지도 않습니다.</li><li><strong>동작 및 피트니스</strong> — ‘흔들기’와 ‘걸음’에 사용됩니다. 움직임은 미션 중 iPhone에서 측정되며, 아침 기록과 함께 저장되는 것은 흔든 횟수나 걸음 수뿐입니다.</li></ul>
<p>이 권한은 기기 설정에서 언제든지 변경할 수 있습니다.</p>`,
      },
      {
        heading: `알람, 실시간 현황, 위젯`,
        content: `<p>알람은 Apple의 AlarmKit으로 기기에서 예약되며, iOS가 잠금 화면과 Dynamic Island에 표시합니다. 앱의 위젯은 앱이 기기에서 자체 위젯과만 공유하는 저장 공간에 기록한 간단한 요약(예정된 알람 시간, 연속 기록, 레벨)을 읽습니다. 외부 푸시 서비스는 사용하지 않습니다.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>Game Center는 선택 사항입니다. Game Center에 로그인한 경우 앱은 데일리 챌린지 점수, 최고 연속 기록, 누적 XP를 Game Center 순위표에 제출하고 획득한 트로피를 보고하며, 다른 플레이어의 Game Center 이름과 점수가 담긴 오늘의 순위표를 보여 줍니다. Game Center는 Apple이 운영하며, 닉네임, 점수, 성취는 Game Center 설정에 따라 다른 플레이어에게 공개되고, Apple의 이 데이터 처리는 Apple 개인정보 보호정책(<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>)을 따릅니다. 당사는 Game Center로부터 어떠한 개인 데이터도 받지 않습니다. 레벨, 트로피, 통계는 Game Center 없이도 작동합니다.</p>`,
      },
      {
        heading: `결과 공유`,
        content: `<p>‘공유’를 탭하면 앱이 결과가 담긴 이미지와 짧은 텍스트를 만들어 iOS 공유 시트에 전달합니다. 어디로 보낼지는 사용자가 결정하며, 당사는 이를 받지 않습니다.</p>`,
      },
      {
        heading: `구매`,
        content: `<p>Wake League는 인앱 구매와 구독이 없는 1회 구매 앱입니다. 구매는 App Store를 통해 Apple이 전적으로 처리합니다. 당사는 결제 정보, Apple ID, 청구 정보에 접근할 수 없습니다.</p>`,
      },
      {
        heading: `제3자 서비스 없음`,
        content: `<p>앱은 제3자 분석, 광고, 충돌 보고, 소셜 미디어 SDK를 통합하지 않습니다. Firebase, Google Analytics, Facebook SDK, 광고 네트워크 등 유사 서비스를 사용하지 않습니다. 앱 자체는 네트워크 요청을 하지 않으며, 유일한 네트워크 통신은 Apple Game Center와의 통신뿐이고, 그것도 Game Center를 사용할 때만입니다.</p>`,
      },
      {
        heading: `아동의 개인정보`,
        content: `<p>앱은 아동을 포함한 누구로부터도 개인정보를 의도적으로 수집하지 않습니다. 어떤 사용자로부터도 개인정보를 수집하지 않으므로 특별한 조항이 필요하지 않습니다.</p>`,
      },
      {
        heading: `데이터 보안`,
        content: `<p>데이터는 iOS 데이터 보호로 지켜지는 기기에 남습니다. 당사는 서버에 개인 데이터를 수집·저장하지 않으므로 당사 측 유출 위험이 없습니다.</p>`,
      },
      {
        heading: `사용자의 권리`,
        content: `<p>사용자는 자신의 데이터에 대해 다음 권리를 갖습니다:</p>
<ul><li>알람, 아침 기록, 트로피, 통계를 앱 안에서 직접 볼 수 있습니다.</li><li>알람을 삭제하면 해당 알람의 설정과 장소 사진이 삭제되고, 앱을 삭제하면 모든 로컬 데이터가 제거됩니다.</li><li>Game Center에서 로그아웃하면 점수 공유를 중단할 수 있으며, Game Center 데이터는 Apple을 통해 관리할 수 있습니다.</li><li>당사 서버에 개인 데이터를 저장하지 않으므로 제공, 수정, 삭제할 데이터가 없습니다.</li></ul>
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
    effectiveDate: `生效日期：2026年10月5日`,
    intro: `NikiBStudio（"我们"）将<strong>Wake League</strong>（"本应用"）作为商业应用开发。本隐私政策说明您使用本应用时我们如何处理信息。`,
    sections: [
      {
        heading: `概述`,
        content: `<p>Wake League是一款闹钟，在您完成简短任务之前会一直响铃，并提供可在Game Center中比较的每日挑战。本应用在设计时充分考虑了您的隐私：我们不收集、存储或共享任何个人信息。本应用无需账户或任何形式的注册，不含广告和分析工具，并且是一次性买断，没有内购和订阅。您的闹钟、早晨记录、结果和设置都保留在您的设备上。</p>`,
      },
      {
        heading: `我们不收集的信息`,
        content: `<p>我们不收集以下任何信息：</p>
<ul><li>姓名、电子邮件地址或联系方式</li><li>位置数据</li><li>设备标识符或广告ID</li><li>通讯录、您的照片图库或其他个人文件</li><li>相机画面、语音录音或转写文字 — 它们在您的iPhone上处理后即被丢弃</li><li>您的闹钟、起床用时和任务结果 — 除您选择发布到Game Center的分数外，它们从不离开您的设备</li><li>使用分析或行为跟踪数据</li></ul>`,
      },
      {
        heading: `存储在设备上的数据`,
        content: `<p>本应用在您的设备上存储以下内容，以提供核心功能：</p>
<ul><li><strong>闹钟</strong> — 时间、重复日期、标签、起床难度、任务和铃声。</li><li><strong>早晨记录</strong> — 每个闹钟的响铃时间以及当天早晨的情况：完成的任务、用时、失误、稍后提醒、积分和XP。</li><li><strong>奖杯</strong> — 获得各项成就的日期。</li><li><strong>您的地点照片</strong> — 如果您开启“拍下地点”拍照收尾，您拍摄的参考照片及其数值描述（Vision feature print）会随该闹钟保存在您的设备上，仅用于在早上识别同一地点，并会在您重拍或删除该闹钟时被删除。</li><li><strong>应用偏好</strong> — 例如是否已完成新手引导，以及是否开启触感反馈。</li></ul>
<p>这些数据不会同步到iCloud或任何服务器。您随时可以通过在应用中删除闹钟或卸载应用来删除这些数据。</p>`,
      },
      {
        heading: `相机、麦克风、语音识别与运动`,
        content: `<p>本应用仅在需要这些权限的任务中请求相应权限；不授予权限时，相关任务会换成其他任务，因此每项任务都能照常进行：</p>
<ul><li><strong>相机</strong> — 用于“寻物”（将相机对准物品）和“拍下地点”。画面通过Apple的Vision框架在您的iPhone上分析，绝不会被保存或传输。唯一保存的图像是上文所述的地点参考照片。</li><li><strong>麦克风与语音识别</strong> — 用于“朗读”。本应用仅使用设备端语音识别；音频和文字绝不会离开您的iPhone，也不会被存储。</li><li><strong>运动与健身</strong> — 用于“摇一摇”和“步数”。任务期间的动作在您的iPhone上计数；只有摇动次数或步数会随早晨记录一起保存。</li></ul>
<p>您可以随时在设备设置中更改这些权限。</p>`,
      },
      {
        heading: `闹钟、实时活动与小组件`,
        content: `<p>闹钟通过Apple的AlarmKit在您的设备上设定，并由iOS显示在锁定屏幕和Dynamic Island中。本应用的小组件会读取一份简短摘要（即将响起的闹钟时间、您的连胜和等级），该摘要由本应用写入设备上一个仅与其自身小组件共享的存储区域。本应用不使用任何外部推送服务。</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>Game Center为可选功能。如果您已登录Game Center，本应用会将您的每日挑战分数、最长连胜和总XP提交到Game Center排行榜，并报告您获得的奖杯，同时显示包含其他玩家Game Center名称和分数的今日排行榜。Game Center由Apple运营；您的昵称、分数和成就会根据您的Game Center设置对其他玩家可见，Apple对这些数据的处理受Apple隐私政策约束（<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>）。我们不会从Game Center接收任何个人数据。等级、奖杯和统计无需Game Center也能使用。</p>`,
      },
      {
        heading: `分享结果`,
        content: `<p>当您轻点“分享”时，本应用会生成一张包含您成绩的图片和一段简短文字，并将其交给iOS共享表单。发送到哪里由您决定；我们不会收到这些内容。</p>`,
      },
      {
        heading: `购买`,
        content: `<p>Wake League为一次性买断，没有内购，也没有订阅。购买完全由Apple通过App Store处理。我们无法访问您的付款信息、Apple ID或账单资料。</p>`,
      },
      {
        heading: `无第三方服务`,
        content: `<p>本应用不集成任何第三方分析、广告、崩溃报告或社交媒体SDK。我们不使用Firebase、Google Analytics、Facebook SDK、广告网络或任何类似服务。本应用自身不发出网络请求——唯一的网络通信是与Apple Game Center之间的通信，且仅在您使用Game Center时进行。</p>`,
      },
      {
        heading: `儿童隐私`,
        content: `<p>本应用不会有意收集任何人（包括儿童）的个人信息。由于本应用不从任何用户处收集个人信息，因此无需特别条款。</p>`,
      },
      {
        heading: `数据安全`,
        content: `<p>您的数据保留在受iOS数据保护机制保护的设备上。由于我们不在服务器上收集或存储任何个人数据，因此不存在我们这边的数据泄露风险。</p>`,
      },
      {
        heading: `您的权利`,
        content: `<p>关于您的数据，您拥有以下权利：</p>
<ul><li>您可以直接在应用中查看您的闹钟、早晨记录、奖杯和统计。</li><li>删除闹钟会同时删除其设置和地点照片；卸载应用会删除全部本地数据。</li><li>您可以退出Game Center登录来停止分享分数，并通过Apple管理您的Game Center数据。</li><li>由于我们不在服务器上存储个人数据，因此不存在需要我们提供、修改或删除的个人数据。</li></ul>
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
    effectiveDate: `تاريخ السريان: 5 أكتوبر 2026`,
    intro: `طوّرت NikiBStudio («نحن») تطبيق <strong>Wake League</strong> («التطبيق») كتطبيق تجاري. توضح سياسة الخصوصية هذه كيفية تعاملنا مع المعلومات عند استخدامك لتطبيقنا.`,
    sections: [
      {
        heading: `نظرة عامة`,
        content: `<p>تطبيق Wake League منبّه يواصل الرنين حتى تُكمل مهام قصيرة، ومعه تحدي اليوم الذي يمكنك مقارنة نتائجه في Game Center. صُمم التطبيق مع مراعاة خصوصيتك: نحن لا نجمع أو نخزّن أو نشارك أي معلومات شخصية. لا يتطلب التطبيق حسابًا أو أي شكل من أشكال التسجيل، ولا يحتوي على إعلانات أو أدوات تحليل، وهو شراء لمرة واحدة بلا مشتريات داخل التطبيق ولا اشتراكات. تبقى منبّهاتك وصباحاتك ونتائجك وإعداداتك على جهازك.</p>`,
      },
      {
        heading: `المعلومات التي لا نجمعها`,
        content: `<p>لا نجمع أيًا مما يلي:</p>
<ul><li>الأسماء أو عناوين البريد الإلكتروني أو معلومات الاتصال</li><li>بيانات الموقع</li><li>معرّفات الجهاز أو المعرّفات الإعلانية</li><li>جهات الاتصال أو مكتبة الصور لديك أو الملفات الشخصية الأخرى</li><li>إطارات الكاميرا أو التسجيلات الصوتية أو النسخ النصية للكلام — تُعالَج على iPhone الخاص بك ثم يُتخلَّص منها</li><li>منبّهاتك وأوقات استيقاظك ونتائج مهامك — لا تغادر جهازك أبدًا، باستثناء النتائج التي تختار نشرها في Game Center</li><li>تحليلات الاستخدام أو بيانات التتبع السلوكي</li></ul>`,
      },
      {
        heading: `البيانات المخزّنة على جهازك`,
        content: `<p>يخزّن التطبيق ما يلي على جهازك لتوفير وظائفه الأساسية:</p>
<ul><li><strong>المنبّهات</strong> — الوقت وأيام التكرار والتسمية وصعوبة الاستيقاظ والمهام وصوت المنبّه.</li><li><strong>الصباحات</strong> — متى رنّ كل منبّه وكيف مضى الصباح: المهام المكتملة والوقت المستغرق والأخطاء والغفوات والنقاط وXP.</li><li><strong>الكؤوس</strong> — تواريخ الحصول على كل إنجاز.</li><li><strong>صورة مكانك</strong> — إذا فعّلت النهاية بصورة «صوّر المكان»، تُحفظ الصورة المرجعية التي تلتقطها ووصف رقمي لها (بصمة ميزات من Vision) مع ذلك المنبّه على جهازك، ولا تُستخدم إلا للتعرّف على المكان نفسه في الصباح، وتُحذف عند إعادة التصوير أو حذف المنبّه.</li><li><strong>تفضيلات التطبيق</strong> — على سبيل المثال، ما إذا كانت الجولة التعريفية قد اكتملت وما إذا كانت الاستجابة اللمسية مفعّلة.</li></ul>
<p>لا تُزامَن هذه البيانات مع iCloud أو أي خادم. يمكنك حذفها في أي وقت بحذف المنبّهات داخل التطبيق أو بإلغاء تثبيته.</p>`,
      },
      {
        heading: `الكاميرا والميكروفون والتعرّف على الكلام والحركة`,
        content: `<p>يطلب التطبيق هذه الأذونات فقط للمهام التي تحتاج إليها؛ وتعمل كل مهمة بدونها، إذ تُستبدل بمهمة أخرى:</p>
<ul><li><strong>الكاميرا</strong> — لمهمتي «اعثر عليه» (توجيه الكاميرا نحو غرض) و«صوّر المكان». تُحلَّل الإطارات على iPhone الخاص بك بإطار عمل Vision من Apple، ولا تُحفظ أو تُرسَل أبدًا. الصورة الوحيدة التي تُحفظ هي الصورة المرجعية لمكانك الموضّحة أعلاه.</li><li><strong>الميكروفون والتعرّف على الكلام</strong> — لمهمة «قلها». يستخدم التطبيق التعرّف على الكلام على الجهاز فقط؛ ولا يغادر الصوت والنص جهاز iPhone الخاص بك أبدًا ولا يُخزَّنان.</li><li><strong>الحركة واللياقة</strong> — لمهمتي «هزّ» و«الخطوات». تُحتسب الحركة على iPhone الخاص بك أثناء المهمة؛ ولا يُحفظ مع الصباح سوى عدد الهزّات أو الخطوات.</li></ul>
<p>يمكنك تغيير هذه الأذونات في أي وقت من إعدادات جهازك.</p>`,
      },
      {
        heading: `المنبّهات والأنشطة المباشرة والأدوات`,
        content: `<p>تُجدوَل المنبّهات على جهازك عبر AlarmKit من Apple، ويعرضها iOS على شاشة القفل وفي Dynamic Island. تقرأ أدوات التطبيق ملخصًا صغيرًا — أوقات المنبّهات القادمة وسلسلتك ومستواك — يكتبه التطبيق في مساحة تخزين لا يشاركها إلا مع أدواته على جهازك. لا تُستخدم أي خدمة إشعارات فورية خارجية.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>استخدام Game Center اختياري. إذا كنت قد سجّلت الدخول إلى Game Center، يرسل التطبيق نتيجتك في تحدي اليوم وأفضل سلسلة لك ومجموع XP إلى لوحات الصدارة في Game Center، ويُبلغ عن الكؤوس التي تحصل عليها، ويعرض لوحة صدارة اليوم بأسماء اللاعبين الآخرين في Game Center ونتائجهم. تُشغّل Apple خدمة Game Center؛ ويظهر اسمك المستعار ونتائجك وإنجازاتك للاعبين الآخرين وفقًا لإعدادات Game Center لديك، ويخضع تعامل Apple مع هذه البيانات لسياسة خصوصية Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>). لا نتلقى أي بيانات شخصية من Game Center. تعمل المستويات والكؤوس والإحصاءات دون Game Center.</p>`,
      },
      {
        heading: `مشاركة نتائجك`,
        content: `<p>عندما تضغط على «مشاركة»، ينشئ التطبيق صورة ونصًا قصيرًا يتضمنان نتيجتك ويسلّمهما إلى قائمة المشاركة في iOS. أنت من يقرر إلى أين يذهبان؛ ونحن لا نتلقاهما.</p>`,
      },
      {
        heading: `الشراء`,
        content: `<p>Wake League شراء لمرة واحدة بلا مشتريات داخل التطبيق ولا اشتراكات. تُعالج عملية الشراء بالكامل بواسطة Apple عبر App Store. لا يمكننا الوصول إلى معلومات الدفع أو Apple ID أو بيانات الفوترة الخاصة بك.</p>`,
      },
      {
        heading: `لا خدمات من أطراف ثالثة`,
        content: `<p>لا يدمج التطبيق أي حزم تطوير خارجية للتحليلات أو الإعلانات أو تقارير الأعطال أو وسائل التواصل الاجتماعي. لا نستخدم Firebase أو Google Analytics أو Facebook SDK أو شبكات إعلانية أو أي خدمات مشابهة. لا يجري التطبيق أي طلبات شبكة خاصة به — الاتصال الشبكي الوحيد هو مع Game Center من Apple، وفقط إذا كنت تستخدمه.</p>`,
      },
      {
        heading: `خصوصية الأطفال`,
        content: `<p>لا يجمع التطبيق عن قصد أي معلومات شخصية من أي شخص، بما في ذلك الأطفال. وبما أنه لا يجمع معلومات شخصية من أي مستخدم، فلا حاجة لأحكام خاصة.</p>`,
      },
      {
        heading: `أمان البيانات`,
        content: `<p>تبقى بياناتك على جهازك محمية بحماية بيانات iOS. وبما أننا لا نجمع أو نخزّن أي بيانات شخصية على خوادم، فلا يوجد خطر تسريب بيانات يمس معلوماتك من جانبنا.</p>`,
      },
      {
        heading: `حقوقك`,
        content: `<p>لديك الحقوق التالية بخصوص بياناتك:</p>
<ul><li>يمكنك عرض منبّهاتك وصباحاتك وكؤوسك وإحصاءاتك مباشرة داخل التطبيق.</li><li>حذف منبّه يزيل إعداداته وصورة مكانه؛ وإلغاء تثبيت التطبيق يزيل جميع البيانات المحلية.</li><li>يمكنك إيقاف مشاركة النتائج بتسجيل الخروج من Game Center، وإدارة بياناتك في Game Center لدى Apple.</li><li>بما أننا لا نخزّن بيانات شخصية على خوادمنا، فلا توجد بيانات نقدّمها أو نعدّلها أو نحذفها.</li></ul>
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
    effectiveDate: `प्रभावी तिथि: 5 अक्टूबर 2026`,
    intro: `NikiBStudio («हम» या «हमारा») ने <strong>Wake League</strong> («ऐप») को एक व्यावसायिक एप्लिकेशन के रूप में बनाया है। यह गोपनीयता नीति बताती है कि ऐप के उपयोग के दौरान हम जानकारी को कैसे संभालते हैं।`,
    sections: [
      {
        heading: `अवलोकन`,
        content: `<p>Wake League एक अलार्म घड़ी है जो तब तक बजती रहती है जब तक आप छोटे मिशन पूरे नहीं कर लेते, और इसमें एक दैनिक चैलेंज है जिसके नतीजों की तुलना आप Game Center में कर सकते हैं। इसे आपकी गोपनीयता को ध्यान में रखकर बनाया गया है: हम कोई भी व्यक्तिगत जानकारी एकत्र, संग्रहीत या साझा नहीं करते। ऐप में खाते या किसी भी प्रकार के पंजीकरण की आवश्यकता नहीं है; इसमें न विज्ञापन हैं, न विश्लेषण उपकरण, और यह बिना इन-ऐप खरीदारी या सदस्यता के एक बार की खरीद है। आपके अलार्म, सुबहें, नतीजे और सेटिंग्स आपके डिवाइस पर ही रहती हैं।</p>`,
      },
      {
        heading: `जानकारी जो हम एकत्र नहीं करते`,
        content: `<p>हम निम्नलिखित में से कुछ भी एकत्र नहीं करते:</p>
<ul><li>नाम, ईमेल पते या संपर्क जानकारी</li><li>स्थान डेटा</li><li>डिवाइस पहचानकर्ता या विज्ञापन आईडी</li><li>संपर्क, आपकी फ़ोटो लाइब्रेरी या अन्य व्यक्तिगत फ़ाइलें</li><li>कैमरा फ़्रेम, वॉइस रिकॉर्डिंग या ट्रांसक्रिप्ट — इन्हें आपके iPhone पर संसाधित करके हटा दिया जाता है</li><li>आपके अलार्म, जागने के समय और मिशन के नतीजे — ये कभी आपके डिवाइस से बाहर नहीं जाते, सिवाय उन स्कोर के जिन्हें आप Game Center पर पोस्ट करना चुनते हैं</li><li>उपयोग विश्लेषण या व्यवहार ट्रैकिंग डेटा</li></ul>`,
      },
      {
        heading: `आपके डिवाइस पर संग्रहीत डेटा`,
        content: `<p>ऐप अपनी मुख्य कार्यक्षमता के लिए आपके डिवाइस पर निम्नलिखित सहेजता है:</p>
<ul><li><strong>अलार्म</strong> — समय, दोहराने के दिन, लेबल, जागने की कठिनाई, मिशन और अलार्म ध्वनि।</li><li><strong>सुबहें</strong> — हर अलार्म कब बजा और सुबह कैसी रही: पूरे किए गए मिशन, लगा समय, गलतियाँ, स्नूज़, पॉइंट और XP।</li><li><strong>ट्रॉफ़ियाँ</strong> — वे तिथियाँ जब उपलब्धियाँ हासिल हुईं।</li><li><strong>आपकी जगह की फ़ोटो</strong> — यदि आप “जगह की फ़ोटो” वाला फ़ोटो फ़िनिश चालू करते हैं, तो आपके द्वारा ली गई संदर्भ फ़ोटो और उसका एक संख्यात्मक विवरण (Vision फ़ीचर प्रिंट) उसी अलार्म के साथ आपके डिवाइस पर रखे जाते हैं, केवल सुबह उसी जगह को पहचानने के लिए उपयोग किए जाते हैं, और फ़ोटो दोबारा लेने या अलार्म हटाने पर मिटा दिए जाते हैं।</li><li><strong>ऐप प्राथमिकताएँ</strong> — उदाहरण के लिए, ऑनबोर्डिंग पूरी हुई या नहीं और हैप्टिक्स चालू हैं या नहीं।</li></ul>
<p>यह डेटा iCloud या किसी सर्वर से सिंक नहीं होता। आप ऐप में अलार्म हटाकर या ऐप अनइंस्टॉल करके इसे कभी भी मिटा सकते हैं।</p>`,
      },
      {
        heading: `कैमरा, माइक्रोफ़ोन, वाक् पहचान और मोशन`,
        content: `<p>ऐप ये अनुमतियाँ केवल उन्हीं मिशनों के लिए माँगता है जिन्हें इनकी ज़रूरत है; इनके बिना भी हर मिशन काम करता है, क्योंकि उसकी जगह कोई दूसरा मिशन आ जाता है:</p>
<ul><li><strong>कैमरा</strong> — “ढूँढें” (कैमरे को किसी चीज़ की ओर करें) और “जगह की फ़ोटो” के लिए। फ़्रेम का विश्लेषण आपके iPhone पर Apple के Vision फ्रेमवर्क से होता है और उन्हें कभी सहेजा या भेजा नहीं जाता। केवल ऊपर बताई गई आपकी जगह की संदर्भ फ़ोटो ही रखी जाती है।</li><li><strong>माइक्रोफ़ोन और वाक् पहचान</strong> — “बोलें” के लिए। ऐप केवल डिवाइस पर होने वाली वाक् पहचान का उपयोग करता है; ऑडियो और टेक्स्ट कभी आपके iPhone से बाहर नहीं जाते और संग्रहीत नहीं किए जाते।</li><li><strong>मोशन और फ़िटनेस</strong> — “हिलाएँ” और “कदम” के लिए। मिशन के दौरान हलचल आपके iPhone पर गिनी जाती है; सुबह के साथ केवल हिलाने या कदमों की संख्या सहेजी जाती है।</li></ul>
<p>आप इन अनुमतियों को अपने डिवाइस की सेटिंग्स में कभी भी बदल सकते हैं।</p>`,
      },
      {
        heading: `अलार्म, लाइव गतिविधियाँ और विजेट`,
        content: `<p>अलार्म Apple के AlarmKit से आपके डिवाइस पर शेड्यूल किए जाते हैं और iOS उन्हें लॉक स्क्रीन पर और Dynamic Island में दिखाता है। ऐप के विजेट एक छोटा सारांश पढ़ते हैं — आने वाले अलार्म के समय, आपकी स्ट्रीक और आपका लेवल — जिसे ऐप एक ऐसे स्टोरेज क्षेत्र में लिखता है जो आपके डिवाइस पर केवल उसके अपने विजेट के साथ साझा होता है। किसी बाहरी पुश सेवा का उपयोग नहीं किया जाता।</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>Game Center वैकल्पिक है। यदि आप Game Center में साइन इन हैं, तो ऐप आज के चैलेंज का आपका स्कोर, सबसे लंबी स्ट्रीक और कुल XP Game Center लीडरबोर्ड पर भेजता है, आपकी जीती गई ट्रॉफ़ियों की जानकारी देता है, और आज का लीडरबोर्ड दूसरे खिलाड़ियों के Game Center नामों और स्कोर के साथ दिखाता है। Game Center का संचालन Apple करता है; आपका उपनाम, स्कोर और उपलब्धियाँ आपकी Game Center सेटिंग्स के अनुसार दूसरे खिलाड़ियों को दिखाई देती हैं, और Apple द्वारा इस डेटा का प्रबंधन Apple की गोपनीयता नीति (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>) के अधीन है। हमें Game Center से कोई व्यक्तिगत डेटा नहीं मिलता। लेवल, ट्रॉफ़ियाँ और आँकड़े Game Center के बिना भी काम करते हैं।</p>`,
      },
      {
        heading: `अपने नतीजे साझा करना`,
        content: `<p>जब आप “शेयर करें” पर टैप करते हैं, तो ऐप आपके नतीजे के साथ एक तस्वीर और एक छोटा टेक्स्ट बनाता है और उन्हें iOS की शेयर शीट को सौंप देता है। वे कहाँ जाएँ, यह आप तय करते हैं; हमें वे नहीं मिलते।</p>`,
      },
      {
        heading: `खरीद`,
        content: `<p>Wake League बिना इन-ऐप खरीदारी और बिना सदस्यता के एक बार की खरीद है। खरीद को Apple द्वारा App Store के माध्यम से पूर्ण रूप से संसाधित किया जाता है। हमारे पास आपकी भुगतान जानकारी, Apple ID या बिलिंग विवरण तक पहुँच नहीं है।</p>`,
      },
      {
        heading: `कोई तृतीय-पक्ष सेवाएँ नहीं`,
        content: `<p>ऐप में कोई तृतीय-पक्ष विश्लेषण, विज्ञापन, क्रैश रिपोर्टिंग या सोशल मीडिया SDK शामिल नहीं है। हम Firebase, Google Analytics, Facebook SDK, विज्ञापन नेटवर्क या ऐसी कोई सेवा उपयोग नहीं करते। ऐप स्वयं कोई नेटवर्क अनुरोध नहीं करता — एकमात्र नेटवर्क संचार Apple के Game Center के साथ होता है, और वह भी केवल तब जब आप उसका उपयोग करते हैं।</p>`,
      },
      {
        heading: `बच्चों की गोपनीयता`,
        content: `<p>ऐप जानबूझकर किसी से भी, बच्चों सहित, कोई व्यक्तिगत जानकारी एकत्र नहीं करता। चूँकि ऐप किसी भी उपयोगकर्ता से व्यक्तिगत जानकारी एकत्र नहीं करता, विशेष प्रावधानों की आवश्यकता नहीं है।</p>`,
      },
      {
        heading: `डेटा सुरक्षा`,
        content: `<p>आपका डेटा iOS की डेटा सुरक्षा से संरक्षित आपके डिवाइस पर रहता है। चूँकि हम सर्वर पर कोई व्यक्तिगत डेटा एकत्र या संग्रहीत नहीं करते, हमारी ओर से डेटा उल्लंघन का कोई जोखिम नहीं है।</p>`,
      },
      {
        heading: `आपके अधिकार`,
        content: `<p>अपने डेटा के संबंध में आपके निम्नलिखित अधिकार हैं:</p>
<ul><li>आप अपने अलार्म, सुबहें, ट्रॉफ़ियाँ और आँकड़े सीधे ऐप में देख सकते हैं।</li><li>किसी अलार्म को हटाने से उसकी सेटिंग्स और जगह की फ़ोटो हट जाती हैं; ऐप अनइंस्टॉल करने से सारा स्थानीय डेटा हट जाता है।</li><li>आप Game Center से साइन आउट करके स्कोर साझा करना बंद कर सकते हैं, और अपने Game Center डेटा को Apple के ज़रिए प्रबंधित कर सकते हैं।</li><li>चूँकि हम अपने सर्वर पर व्यक्तिगत डेटा संग्रहीत नहीं करते, हमारे पास प्रदान करने, बदलने या हटाने के लिए कोई डेटा नहीं है।</li></ul>
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
    effectiveDate: `תאריך כניסה לתוקף: 5 באוקטובר 2026`,
    intro: `NikiBStudio («אנחנו») פיתחה את <strong>Wake League</strong> («האפליקציה») כאפליקציה מסחרית. מדיניות פרטיות זו מסבירה כיצד אנו מטפלים במידע בעת השימוש באפליקציה.`,
    sections: [
      {
        heading: `סקירה`,
        content: `<p>Wake League הוא שעון מעורר שממשיך לצלצל עד שמסיימים משימות קצרות, עם אתגר יומי שאפשר להשוות בו תוצאות ב-Game Center. האפליקציה תוכננה מתוך מחשבה על הפרטיות שלכם: איננו אוספים, שומרים או משתפים מידע אישי כלשהו. האפליקציה אינה דורשת חשבון או רישום מכל סוג; אין בה פרסומות או כלי אנליטיקה, והיא רכישה חד-פעמית ללא רכישות בתוך האפליקציה וללא מנויים. השעונים המעוררים, הבקרים, התוצאות וההגדרות שלכם נשארים במכשיר שלכם.</p>`,
      },
      {
        heading: `מידע שאיננו אוספים`,
        content: `<p>איננו אוספים דבר מהבאים:</p>
<ul><li>שמות, כתובות דוא"ל או פרטי קשר</li><li>נתוני מיקום</li><li>מזהי מכשיר או מזהי פרסום</li><li>אנשי קשר, ספריית התמונות שלכם או קבצים אישיים אחרים</li><li>פריימים מהמצלמה, הקלטות קול או תמלולים — הם מעובדים ב-iPhone שלכם ונמחקים</li><li>השעונים המעוררים, זמני ההשכמה ותוצאות המשימות שלכם — הם לעולם אינם עוזבים את המכשיר, מלבד הניקוד שתבחרו לפרסם ב-Game Center</li><li>אנליטיקת שימוש או נתוני מעקב התנהגותי</li></ul>`,
      },
      {
        heading: `נתונים השמורים במכשיר שלכם`,
        content: `<p>האפליקציה שומרת במכשיר את הנתונים הבאים כדי לספק את הפונקציונליות המרכזית:</p>
<ul><li><strong>שעונים מעוררים</strong> — שעה, ימי חזרה, תווית, רמת קושי ההשכמה, משימות וצליל השעון המעורר.</li><li><strong>בקרים</strong> — מתי צלצל כל שעון מעורר ואיך עבר הבוקר: משימות שהושלמו, הזמן שנדרש, טעויות, נודניקים, נקודות ו-XP.</li><li><strong>גביעים</strong> — התאריכים שבהם הושגו ההישגים.</li><li><strong>תמונת המקום שלכם</strong> — אם תפעילו את הסיום בצילום ״צלמו את המקום״, תמונת הייחוס שתצלמו ותיאור מספרי שלה (טביעת מאפיינים של Vision) נשמרים יחד עם אותו שעון מעורר במכשיר שלכם, משמשים רק לזיהוי אותו מקום בבוקר, ונמחקים כשתצלמו מחדש או תמחקו את השעון המעורר.</li><li><strong>העדפות האפליקציה</strong> — למשל, האם ההדרכה הראשונית הושלמה והאם משוב הרטט מופעל.</li></ul>
<p>נתונים אלה אינם מסונכרנים ל-iCloud או לשרת כלשהו. ניתן למחוק אותם בכל עת על ידי מחיקת שעונים מעוררים באפליקציה או הסרת האפליקציה.</p>`,
      },
      {
        heading: `מצלמה, מיקרופון, זיהוי דיבור ותנועה`,
        content: `<p>האפליקציה מבקשת את ההרשאות האלה רק עבור המשימות שזקוקות להן; כל משימה עובדת גם בלעדיהן, כי היא מוחלפת במשימה אחרת:</p>
<ul><li><strong>מצלמה</strong> — עבור ״חיפוש״ (מכוונים את המצלמה לחפץ) ו״צלמו את המקום״. הפריימים מנותחים ב-iPhone שלכם באמצעות מסגרת Vision של Apple ולעולם אינם נשמרים או משודרים. התמונה היחידה שנשמרת היא תמונת הייחוס של המקום שלכם, שתוארה לעיל.</li><li><strong>מיקרופון וזיהוי דיבור</strong> — עבור ״דיבור״. האפליקציה משתמשת רק בזיהוי דיבור במכשיר; האודיו והטקסט לעולם אינם יוצאים מה-iPhone שלכם ואינם נשמרים.</li><li><strong>תנועה וכושר</strong> — עבור ״ניעור״ ו״צעדים״. התנועה נספרת ב-iPhone שלכם במהלך המשימה; רק מספר הניעורים או הצעדים נשמר יחד עם הבוקר.</li></ul>
<p>ניתן לשנות את ההרשאות האלה בכל עת בהגדרות המכשיר.</p>`,
      },
      {
        heading: `שעונים מעוררים, פעילויות בזמן אמת ווידג׳טים`,
        content: `<p>השעונים המעוררים מתוזמנים במכשיר שלכם באמצעות AlarmKit של Apple, ו-iOS מציג אותם במסך הנעילה וב-Dynamic Island. הווידג׳טים של האפליקציה קוראים סיכום קטן — מועדי השעונים המעוררים הקרובים, הרצף והשלב שלכם — שהאפליקציה כותבת לאזור אחסון שמשותף רק עם הווידג׳טים שלה במכשיר שלכם. לא נעשה שימוש בשירות push חיצוני.</p>`,
      },
      {
        heading: `Game Center`,
        content: `<p>השימוש ב-Game Center הוא אופציונלי. אם אתם מחוברים ל-Game Center, האפליקציה שולחת את הניקוד שלכם באתגר היומי, את הרצף הטוב ביותר ואת סך ה-XP לטבלאות המובילים של Game Center, מדווחת על הגביעים שאתם משיגים ומציגה את טבלת המובילים של היום עם שמות ה-Game Center והניקוד של שחקנים אחרים. Game Center מופעל על ידי Apple; הכינוי, הניקוד וההישגים שלכם גלויים לשחקנים אחרים בהתאם להגדרות ה-Game Center שלכם, והטיפול של Apple בנתונים אלה כפוף למדיניות הפרטיות של Apple (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">www.apple.com/legal/privacy</a>). איננו מקבלים נתונים אישיים מ-Game Center. שלבים, גביעים וסטטיסטיקה עובדים גם בלי Game Center.</p>`,
      },
      {
        heading: `שיתוף התוצאות שלכם`,
        content: `<p>בהקשה על ״שיתוף״, האפליקציה יוצרת תמונה וטקסט קצר עם התוצאה שלכם ומעבירה אותם לגיליון השיתוף של iOS. אתם מחליטים לאן הם יישלחו; אנחנו לא מקבלים אותם.</p>`,
      },
      {
        heading: `רכישה`,
        content: `<p>Wake League היא רכישה חד-פעמית ללא רכישות בתוך האפליקציה וללא מנויים. הרכישה מעובדת במלואה על ידי Apple דרך ה-App Store. אין לנו גישה לפרטי התשלום, ל-Apple ID או לנתוני החיוב שלכם.</p>`,
      },
      {
        heading: `ללא שירותי צד שלישי`,
        content: `<p>האפליקציה אינה משלבת SDK של צד שלישי לאנליטיקה, פרסום, דיווח קריסות או רשתות חברתיות. איננו משתמשים ב-Firebase, Google Analytics, Facebook SDK, רשתות פרסום או שירותים דומים. האפליקציה אינה מבצעת בקשות רשת משלה — התקשורת היחידה היא עם Game Center של Apple, ורק אם אתם משתמשים בו.</p>`,
      },
      {
        heading: `פרטיות ילדים`,
        content: `<p>האפליקציה אינה אוספת ביודעין מידע אישי מאף אחד, כולל ילדים. מכיוון שהאפליקציה אינה אוספת מידע אישי מאף משתמש, אין צורך בהוראות מיוחדות.</p>`,
      },
      {
        heading: `אבטחת מידע`,
        content: `<p>הנתונים נשארים במכשיר שלכם, מוגנים בהגנת הנתונים של iOS. מכיוון שאיננו אוספים או שומרים מידע אישי בשרתים, אין סיכון לדליפת מידע מצדנו.</p>`,
      },
      {
        heading: `הזכויות שלך`,
        content: `<p>יש לך את הזכויות הבאות לגבי הנתונים שלך:</p>
<ul><li>ניתן לצפות בשעונים המעוררים, בבקרים, בגביעים ובסטטיסטיקה ישירות באפליקציה.</li><li>מחיקת שעון מעורר מסירה את ההגדרות שלו ואת תמונת המקום שלו; הסרת האפליקציה מוחקת את כל הנתונים המקומיים.</li><li>ניתן להפסיק לשתף ניקוד על ידי התנתקות מ-Game Center, ולנהל את נתוני ה-Game Center אצל Apple.</li><li>מכיוון שאיננו שומרים מידע אישי בשרתינו, אין נתונים שעלינו לספק, לשנות או למחוק.</li></ul>
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
