const HeroSection = () => (
  <section className="relative min-h-[100svh] grid md:grid-cols-[minmax(0,1.15fr)_minmax(140px,0.85fr)]">
    <div className="flex flex-col justify-end px-5 pb-10 pt-28 md:px-12 md:pb-16">
      <h1 className="font-display font-semibold tracking-[-0.045em] leading-[0.9] text-[clamp(3.4rem,12vw,9.5rem)] text-ink m-0 max-w-[18ch]">
        Find
        <br />
        your
        <br />
        people.
      </h1>
    </div>
    <div className="bg-pulse min-h-[28vh] md:min-h-[100svh]" aria-hidden="true" />
  </section>
);

export default HeroSection;
