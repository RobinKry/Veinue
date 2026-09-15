import { useState } from 'react';

const CTASection = () => {
  const [legal, setLegal] = useState<'datenschutz' | 'impressum' | null>(null);

  return (
    <>
      <section id="contact" className="min-h-[100svh] flex flex-col justify-center px-5 py-28 md:px-12 border-t rule">
        <div className="max-w-[980px]">
          <h2 className="font-display font-semibold tracking-[-0.045em] leading-[0.9] text-[clamp(3rem,8vw,7rem)] text-ink m-0 mb-16">
            Find
            <br />
            your
            <br />
            people.
          </h2>
          <a
            href="mailto:team@veinue.com"
            className="font-display text-[18px] font-medium text-ink no-underline border-b border-ink pb-0.5"
          >
            team@veinue.com
          </a>
          <div className="mt-10 flex flex-wrap gap-8">
            <button
              type="button"
              onClick={() => setLegal('datenschutz')}
              className="font-display text-[14px] font-medium text-mute bg-transparent border-0 p-0 min-h-11 cursor-pointer hover:text-ink"
            >
              Datenschutz
            </button>
            <button
              type="button"
              onClick={() => setLegal('impressum')}
              className="font-display text-[14px] font-medium text-mute bg-transparent border-0 p-0 min-h-11 cursor-pointer hover:text-ink"
            >
              Impressum
            </button>
          </div>
        </div>
      </section>

      {legal === 'datenschutz' && (
        <section className="px-5 py-20 md:px-12 border-t rule" id="datenschutz">
          <div className="max-w-[720px] font-body text-[16px] leading-[1.55] text-mute space-y-4">
            <h2 className="font-display text-[32px] font-semibold tracking-[-0.03em] text-ink m-0 mb-8">Datenschutz</h2>
            <h3 className="font-display text-[18px] font-semibold text-ink mt-6">1. Datenschutz auf einen Blick</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten finden Sie im Impressum.</p>
            <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
            <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
            <h3 className="font-display text-[18px] font-semibold text-ink mt-6">2. Verantwortliche Stelle</h3>
            <p>Robin Milason Kryszak<br />Friedrichstraße 155<br />10117 Berlin<br />Deutschland</p>
            <p>Telefon: +4915785460393<br />E-Mail: team@veinue.com</p>
            <h3 className="font-display text-[18px] font-semibold text-ink mt-6">3. Server-Log-Dateien</h3>
            <ul className="list-disc ml-5">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Quelle:{' '}
              <a href="https://www.e-recht24.de" target="_blank" rel="noreferrer" className="text-ink">
                e-recht24.de
              </a>
            </p>
          </div>
        </section>
      )}

      {legal === 'impressum' && (
        <section className="px-5 py-20 md:px-12 border-t rule" id="impressum">
          <div className="max-w-[720px] font-body text-[16px] leading-[1.55] text-mute space-y-4">
            <h2 className="font-display text-[32px] font-semibold tracking-[-0.03em] text-ink m-0 mb-8">Impressum</h2>
            <p>Robin Milason Kryszak<br />Friedrichstraße 155<br />10117 Berlin<br />Deutschland</p>
            <p>E-Mail: team@veinue.com<br />Telefon: +4915785460393</p>
          </div>
        </section>
      )}
    </>
  );
};

export default CTASection;
