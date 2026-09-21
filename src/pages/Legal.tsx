import { Link } from 'react-router-dom';

type Page = 'datenschutz' | 'agb' | 'impressum' | 'support';

const titles: Record<Page, string> = {
  datenschutz: 'Datenschutzerklärung',
  agb: 'Nutzungsbedingungen',
  impressum: 'Impressum',
  support: 'Support',
};

export default function Legal({ page }: { page: Page }) {
  return (
    <main className="min-h-[100svh] px-5 py-16 md:px-12">
      <div className="max-w-[720px]">
        <Link
          to="/"
          className="font-display text-[14px] font-medium text-mute no-underline hover:text-ink"
        >
          ← Veinue
        </Link>
        <h1 className="font-display text-[32px] font-semibold tracking-[-0.03em] text-ink mt-8 mb-10">
          {titles[page]}
        </h1>
        <div className="font-body text-[16px] leading-[1.55] text-mute space-y-4">
          {page === 'impressum' && <Impressum />}
          {page === 'datenschutz' && <Datenschutz />}
          {page === 'agb' && <Agb />}
          {page === 'support' && <Support />}
        </div>
        <nav className="mt-16 flex flex-wrap gap-6 font-display text-[14px]">
          <Link to="/datenschutz" className="text-mute no-underline hover:text-ink">
            Datenschutz
          </Link>
          <Link to="/agb" className="text-mute no-underline hover:text-ink">
            AGB
          </Link>
          <Link to="/impressum" className="text-mute no-underline hover:text-ink">
            Impressum
          </Link>
          <Link to="/support" className="text-mute no-underline hover:text-ink">
            Support
          </Link>
        </nav>
      </div>
    </main>
  );
}

function Impressum() {
  return (
    <>
      <p>Angaben gemäß § 5 TMG und § 18 MStV.</p>
      <p>
        Robin Milason Kryszak
        <br />
        Friedrichstraße 155
        <br />
        10117 Berlin
        <br />
        Deutschland
      </p>
      <p>
        E-Mail: <a href="mailto:team@veinue.com" className="text-ink">team@veinue.com</a>
        <br />
        Telefon: <a href="tel:+4915785460393" className="text-ink">+49 157 85460393</a>
      </p>
      <p>
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Robin Milason Kryszak, Anschrift wie oben.
      </p>
      <p>
        App: Veinue (ohne Punkt), Bundle-ID com.veinue.social. Die ältere App „Veinue.“ ist ein anderes Produkt.
      </p>
      <p>
        Streitbeilegung: Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
        <a href="https://ec.europa.eu/consumers/odr" className="text-ink">
          https://ec.europa.eu/consumers/odr
        </a>
        . Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </>
  );
}

function Datenschutz() {
  return (
    <>
      <p>Stand: 21. September 2026</p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">1. Verantwortlicher</h2>
      <p>
        Robin Milason Kryszak, Friedrichstraße 155, 10117 Berlin, Deutschland,
        E-Mail: team@veinue.com.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">2. Diese Erklärung</h2>
      <p>
        Sie gilt für die Website veinue.app und die App Veinue (Bundle-ID com.veinue.social)
        für iOS. Die ältere App „Veinue.“ ist ein anderes Produkt.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">3. App — welche Daten</h2>
      <p>Veinue ist eine Nearby-/Chat-App. Verarbeitet werden:</p>
      <ul className="list-disc ml-5 space-y-1">
        <li>Konto: E-Mail oder Sign in with Apple (ggf. Hide-My-Email) oder Google-Konto, Anzeigename, Nutzername, optionales Profilfoto, Bio, Instagram-Handle, Interessen.</li>
        <li>Freunde, private Chats und die Nachricht, dass jemand dich mit Find sucht.</li>
        <li>Block- und Meldelisten, damit Chat, Connect, Find und Nearby gegenüber der anderen Person ausbleiben.</li>
        <li>
          Bluetooth-Präsenz: kurze Signale, wer mit Veinue im selben Raum ist. Zusätzlich zählt das Gerät lokal,
          wie viele Bluetooth-Radios ohne Veinue in Reichweite sind (eine Zahl, keine Namen). Kein GPS, keine Karte.
          Signalstärke in Find nur als Nähe-Skala (Zone / 0–10), nicht als dBm.
        </li>
        <li>
          Nutzungsstatistik: App-Öffnen, Bluetooth an/aus, Sichtbarkeit, leere Nearby-Zähler, Connect-/Find-/Chat-Taps.
          Kein Chattext, keine Namen, kein GPS, keine Werbe-ID, kein Tracking-SDK. Ereignisse 90 Tage, danach Summen.
          Identifikation über einen serverseitigen Hash der Konto-ID, nicht über die Geräte-ID.
        </li>
      </ul>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">4. Zweck und Rechtsgrundlage</h2>
      <p>
        Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO): Konto, Nearby, Chat, Find.
        Berechtigtes Interesse (lit. f): Betrieb, Sicherheit, Missbrauchsabwehr, Produktstatistik.
        Einwilligung (lit. a), soweit das Betriebssystem sie für Bluetooth, Kamera, Fotos oder Mitteilungen verlangt.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">5. Auftragsverarbeiter</h2>
      <p>
        Hosting, Auth und Datenbank: Supabase (EU). Push: Apple und Firebase Cloud Messaging, nur für Find- und Chat-Hinweise.
        Anmeldung optional über Apple oder Google. Kein Tracking-SDK, kein PostHog, keine Werbe-ID.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">6. Speicherdauer und Löschung</h2>
      <p>
        Kontodaten, solange das Konto besteht. Chats, Freunde und Blöcke mit dem Konto.
        Statistik-Ereignisse 90 Tage. In der App unter Profil → Einstellungen → Konto löschen werden Konto,
        Profil, Chats, Freunde und zugehörige Statistik unwiderruflich entfernt.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">7. Deine Rechte</h2>
      <p>
        Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch.
        Beschwerde bei einer Aufsichtsbehörde, in Berlin: Berliner Beauftragte für Datenschutz und Informationsfreiheit.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">8. Website</h2>
      <p>
        Beim Besuch der Website fallen Server-Logs an (Browsertyp, OS, Referrer, Uhrzeit, IP).
        Kein Tracking-Pixel, keine Werbe-ID.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">9. Kinder</h2>
      <p>Veinue richtet sich nicht an Kinder unter 16 Jahren. Ein Konto setzt voraus, dass du mindestens 16 bist.</p>
    </>
  );
}

function Agb() {
  return (
    <>
      <p>Stand: 21. September 2026</p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">1. Anbieter</h2>
      <p>
        Robin Milason Kryszak, Friedrichstraße 155, 10117 Berlin, Deutschland —
        App „Veinue“, Bundle-ID com.veinue.social. Kontakt: team@veinue.com.
        Die ältere App „Veinue.“ ist ein anderes Produkt.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">2. Vertrag</h2>
      <p>
        Mit der Anmeldung (E-Mail-Code, Sign in with Apple oder Google) kommt ein Nutzungsvertrag
        über Nearby, Freunde, Chat und Find zustande. Die App ist kostenlos. Keine In-App-Käufe.
        Du musst mindestens 16 Jahre alt sein.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">3. Konto</h2>
      <p>
        Du bist für Gerät, Zugang und Inhalte verantwortlich. Ein Konto, kein Weiterverkauf.
        Löschen jederzeit unter Profil → Einstellungen → Konto löschen.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">4. Inhalte und Verhalten</h2>
      <p>
        Keine illegalen, belästigenden oder rechtsverletzenden Inhalte. Kein Missbrauch von Nearby oder Find.
        Du kannst Personen blockieren und melden. Block beendet Freundschaft, Chat, Find und die Anzeige in Nearby.
        Für von dir eingestellte Inhalte räumst du uns das nicht-ausschließliche Recht ein, sie zum Betrieb der App
        zu hosten. Das Urheberrecht bleibt bei dir.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">5. Bluetooth, Nearby und Find</h2>
      <p>
        Nearby und Find brauchen Bluetooth. Die App zählt lokal auch Bluetooth-Geräte ohne Veinue (nur eine Zahl).
        Kein GPS. Ghostmodus blendet dich aus. Find nur mit angenommenen Freunden.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">6. Verfügbarkeit</h2>
      <p>
        Die App wird „wie besehen“ angeboten. Funk, Batterie und fremde Geräte liegen außerhalb unserer Kontrolle.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">7. Haftung</h2>
      <p>
        Unbeschränkt für Vorsatz, grobe Fahrlässigkeit, Produkthaftung und Personenschäden.
        Bei leichter Fahrlässigkeit nur bei Kardinalpflichten, begrenzt auf den vertragstypischen Schaden.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">8. Kündigung</h2>
      <p>
        Du kannst das Konto jederzeit löschen. Wir können den Dienst einstellen oder Konten bei Pflichtverstößen beenden.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">9. Recht</h2>
      <p>Es gilt deutsches Recht. Verbraucherschutz am Wohnsitz bleibt unberührt. Vertragssprache ist Deutsch.</p>
    </>
  );
}

function Support() {
  return (
    <>
      <p>
        Fragen zur App Veinue, zum Konto oder zum Löschen deiner Daten:{' '}
        <a href="mailto:team@veinue.com" className="text-ink">
          team@veinue.com
        </a>
        .
      </p>
      <p>
        In der App: Profil → Einstellungen. Dort findest du Datenschutz, Nutzungsbedingungen, Impressum und Konto löschen.
      </p>
      <p>
        Nearby und Find brauchen Bluetooth. Ohne ein zweites Gerät mit Veinue in Funkreichweite bleibt die
        Nearby-Liste bis auf dein eigenes Profil leer — das ist kein Fehler.
      </p>
    </>
  );
}
