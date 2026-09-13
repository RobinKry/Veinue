import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import ImageBackground from './ImageBackground';
import bgCta from '@/assets/bg-cta.jpg';

const CTASection = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <>
      {/* CTA */}
      <section className="relative py-16 md:py-24 px-6 md:px-12 text-center overflow-hidden bg-background" id="contact">
        <ImageBackground src={bgCta} alt="" opacity={0.15} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(245,166,35,0.08) 0%, transparent 70%)',
        }} />
        <div className="relative z-10">
          <RevealOnScroll>
            <div className="font-display text-[0.65rem] font-bold tracking-[0.3em] uppercase text-primary mb-5">
              Contact
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-tighter leading-none mb-6">
              Launch<br />
              <span className="text-primary" style={{ textShadow: '0 0 40px rgba(245,166,35,0.4)' }}>2026.</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <div className="flex justify-center gap-3.5 flex-wrap mt-2.5">
              <a href="mailto:team@veinue.com" className="font-display text-[0.78rem] font-bold tracking-[0.16em] uppercase text-primary-foreground bg-primary px-8 py-4 rounded-sm no-underline relative overflow-hidden group">
                <span className="relative z-10">team@veinue.com</span>
                <div className="absolute inset-0 bg-foreground translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
              </a>
              <button onClick={() => toggleSection('datenschutz')} className="font-display text-[0.78rem] font-bold tracking-[0.16em] uppercase text-foreground bg-foreground/[0.06] border border-foreground/[0.14] px-7 py-4 rounded-sm hover:bg-foreground/10 hover:border-foreground/[0.24] transition-colors cursor-pointer">
                Datenschutz
              </button>
              <button onClick={() => toggleSection('impressum')} className="font-display text-[0.78rem] font-bold tracking-[0.16em] uppercase text-foreground bg-foreground/[0.06] border border-foreground/[0.14] px-7 py-4 rounded-sm hover:bg-foreground/10 hover:border-foreground/[0.24] transition-colors cursor-pointer">
                Impressum
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Datenschutz */}
      {openSections['datenschutz'] && (
        <section className="py-20 md:py-28 px-6 md:px-12 bg-deep" id="datenschutz">
          <div className="max-w-[1100px] mx-auto">
            <div className="font-display text-[0.65rem] font-bold tracking-[0.3em] uppercase text-primary mb-5">Rechtliches</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.1] mb-14">Datenschutz</h2>
            <details open className="bg-background p-8 border border-foreground/[0.06]">
              <summary className="font-display font-extrabold text-[1.1rem] cursor-pointer list-none flex items-center justify-between gap-3">
                Datenschutzerklärung
              </summary>
              <div className="mt-4 text-muted-custom leading-[1.85] text-[0.92rem] space-y-4">
                <h1 className="text-foreground/90 font-display tracking-tight text-lg mt-4">Datenschutzerklärung</h1>
                <h2 className="text-foreground/90 font-display tracking-tight text-base mt-6">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-foreground/80 font-display tracking-tight text-sm mt-4">Allgemeine Hinweise</h3>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
                <h3 className="text-foreground/80 font-display tracking-tight text-sm mt-4">Datenerfassung auf dieser Website</h3>
                <h4 className="text-foreground/75 font-display tracking-tight text-sm mt-3">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>
                <h4 className="text-foreground/75 font-display tracking-tight text-sm mt-3">Wie erfassen wir Ihre Daten?</h4>
                <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
                <h4 className="text-foreground/75 font-display tracking-tight text-sm mt-3">Wofür nutzen wir Ihre Daten?</h4>
                <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.</p>
                <h4 className="text-foreground/75 font-display tracking-tight text-sm mt-3">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
                <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
                <h3 className="text-foreground/80 font-display tracking-tight text-sm mt-4">Analyse-Tools und Tools von Drittanbietern</h3>
                <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.</p>
                <h2 className="text-foreground/90 font-display tracking-tight text-base mt-6">2. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3 className="text-foreground/80 font-display tracking-tight text-sm mt-4">Datenschutz</h3>
                <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                <p>Wir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
                <h3 className="text-foreground/80 font-display tracking-tight text-sm mt-4">Hinweis zur verantwortlichen Stelle</h3>
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <p>Robin Milason Kryszak<br/>Friedrichstraße 155<br/>10117 Berlin<br/>Deutschland</p>
                <p>Telefon: +4915785460393<br/>E-Mail: team@veinue.com</p>
                <p>Website: veinue.com</p>
                <h3 className="text-foreground/80 font-display tracking-tight text-sm mt-4">Speicherdauer</h3>
                <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.</p>
                <h3 className="text-foreground/80 font-display tracking-tight text-sm mt-4">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
                <p><strong className="text-foreground/70">WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN…</strong></p>
                <h3 className="text-foreground/80 font-display tracking-tight text-sm mt-4">Recht auf Auskunft, Berichtigung und Löschung</h3>
                <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung.</p>
                <h2 className="text-foreground/90 font-display tracking-tight text-base mt-6">3. Datenerfassung auf dieser Website</h2>
                <h3 className="text-foreground/80 font-display tracking-tight text-sm mt-4">Server-Log-Dateien</h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p>Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noreferrer" className="text-foreground/75 no-underline border-b border-foreground/[0.18]">e-recht24.de</a></p>
              </div>
            </details>
          </div>
        </section>
      )}

      {/* Impressum */}
      {openSections['impressum'] && (
        <section className="py-20 md:py-28 px-6 md:px-12 bg-deep" id="impressum">
          <div className="max-w-[1100px] mx-auto">
            <div className="font-display text-[0.65rem] font-bold tracking-[0.3em] uppercase text-primary mb-5">Rechtliches</div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-[1.1] mb-14">Impressum</h2>
            <details open className="bg-background p-8 border border-foreground/[0.06]">
              <summary className="font-display font-extrabold text-[1.1rem] cursor-pointer list-none flex items-center justify-between gap-3">
                Impressum
              </summary>
              <div className="mt-4 text-muted-custom leading-[1.85] text-[0.92rem] space-y-4">
                <p>Robin Milason Kryszak<br/>Friedrichstraße 155<br/>10117 Berlin<br/>Deutschland</p>
                <p>E-Mail: team@veinue.com<br/>Telefon: +4915785460393</p>
              </div>
            </details>
          </div>
        </section>
      )}
    </>
  );
};

export default CTASection;
