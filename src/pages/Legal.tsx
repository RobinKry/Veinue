import { Link } from 'react-router-dom';

type Page = 'datenschutz' | 'agb' | 'impressum';

const titles: Record<Page, string> = {
  datenschutz: 'Datenschutzerklärung',
  agb: 'Nutzungsbedingungen',
  impressum: 'Impressum',
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
        </nav>
      </div>
    </main>
  );
}

function Impressum() {
  return (
    <>
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
        Telefon: +4915785460393
      </p>
    </>
  );
}

function Datenschutz() {
  return (
    <>
      <p>Stand: 19. September 2026</p>
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
        <li>Konto: E-Mail oder Sign in with Apple (ggf. Hide-My-Email), Anzeigename, Nutzername, optionales Profilfoto, Bio, Instagram-Handle, Interessen.</li>
        <li>Connects, private Chats und die Nachricht, dass jemand dich mit Find sucht.</li>
        <li>Bluetooth-Präsenz: die App sendet und empfängt kurze Bluetooth-Signale in der Nähe, um anzuzeigen, wer im selben Raum ist. Es wird kein GPS und keine Karte genutzt. Signalstärke erscheint in Find nur als Nähe-Skala (Zone / 0–10), nicht als dBm.</li>
        <li>Nutzungsstatistik: App-Öffnen, Bluetooth an/aus, Sichtbarkeit, leere Nearby-Zähler, Connect-/Find-/Chat-Taps. Kein Chattext, keine Namen, kein GPS, keine Werbe-ID. Ereignisse 90 Tage, danach Summen. Identifikation über einen serverseitigen Hash der Konto-ID, nicht über die Geräte-ID.</li>
      </ul>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">4. Zweck und Rechtsgrundlage</h2>
      <p>
        Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO): Konto, Nearby, Chat, Find.
        Berechtigtes Interesse (lit. f): Betrieb, Sicherheit, Produktstatistik.
        Einwilligung, soweit das Betriebssystem sie für Bluetooth, Kamera, Fotos oder Mitteilungen verlangt.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">5. Auftragsverarbeiter</h2>
      <p>
        Hosting und Auth: Supabase (EU). Optional Auswertung über PostHog EU mit demselben Hash, ohne Tracking-SDK in der App.
        Push über Apple/Firebase, nur um Find- und Chat-Hinweise zuzustellen.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">6. Speicherdauer und Löschung</h2>
      <p>
        Kontodaten, solange das Konto besteht. Chats und Connects mit dem Konto.
        Statistik-Ereignisse 90 Tage. In der App unter Profil → Konto löschen werden Konto,
        Profil, Chats, Connects und zugehörige Statistik unwiderruflich entfernt.
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
      <p>Veinue richtet sich nicht an Kinder unter 16 Jahren.</p>
    </>
  );
}

function Agb() {
  return (
    <>
      <p>Stand: 19. September 2026</p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">1. Anbieter</h2>
      <p>Robin Milason Kryszak, Friedrichstraße 155, 10117 Berlin — App „Veinue“, Bundle com.veinue.social.</p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">2. Vertrag</h2>
      <p>
        Mit der Anmeldung kommt ein Nutzungsvertrag über Nearby (wer in Bluetooth-Reichweite ist),
        Connects, Chat und Find zustande. Die App ist kostenlos. Es gibt keine In-App-Käufe.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">3. Konto</h2>
      <p>
        Anmeldung per E-Mail-Code oder Sign in with Apple. Du bist für dein Gerät und deine Inhalte verantwortlich.
        Ein Konto, kein Weiterverkauf.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">4. Inhalte und Verhalten</h2>
      <p>
        Keine Belästigung, keine illegalen Inhalte, kein Missbrauch von Nearby oder Find.
        Du kannst Personen blockieren und melden. Wir können Konten bei Verstößen sperren oder löschen.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">5. Bluetooth</h2>
      <p>
        Nearby und Find brauchen Bluetooth und die App im Vordergrund bzw. die vom System erlaubten Hintergrundmodi.
        Reichweite ist ungefähr und hängt vom Gerät ab. Ghostmodus blendet dich aus.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">6. Verfügbarkeit</h2>
      <p>
        Die App wird „wie besehen“ angeboten. Funk, Batterie und fremde Geräte liegen außerhalb unserer Kontrolle.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">7. Kündigung</h2>
      <p>
        Du kannst das Konto jederzeit in der App unter Profil → Konto löschen löschen.
        Wir können den Dienst einstellen oder Konten bei Pflichtverstößen beenden.
      </p>
      <h2 className="font-display text-[18px] font-semibold text-ink mt-8">8. Recht</h2>
      <p>Es gilt deutsches Recht. Verbraucherschutz am Wohnsitz bleibt unberührt.</p>
    </>
  );
}
