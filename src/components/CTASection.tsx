import { Link } from 'react-router-dom';

const CTASection = () => (
  <section
    id="contact"
    className="min-h-[100svh] flex flex-col justify-center px-5 py-28 md:px-12 border-t rule"
  >
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
        <Link
          to="/datenschutz"
          className="font-display text-[14px] font-medium text-mute no-underline min-h-11 hover:text-ink"
        >
          Datenschutz
        </Link>
        <Link
          to="/agb"
          className="font-display text-[14px] font-medium text-mute no-underline min-h-11 hover:text-ink"
        >
          AGB
        </Link>
        <Link
          to="/impressum"
          className="font-display text-[14px] font-medium text-mute no-underline min-h-11 hover:text-ink"
        >
          Impressum
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;
