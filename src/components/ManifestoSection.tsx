import RevealOnScroll from './RevealOnScroll';

const ManifestoSection = () => (
  <section className="relative py-16 md:py-24 px-6 md:px-12 overflow-hidden bg-deep" id="about">
    <div className="relative z-10 max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.45fr] gap-10 md:gap-20 items-center">
      <RevealOnScroll>
        <div className="font-display text-[0.65rem] font-bold tracking-[0.3em] uppercase text-primary mb-5">
          The idea
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.8rem)] font-extrabold leading-[1.15] tracking-tight">
          The room
          <br />
          <em className="font-normal italic text-primary">is the feed.</em>
        </h2>
      </RevealOnScroll>
      <RevealOnScroll delay={0.15}>
        <div className="space-y-6">
          <p className="text-[1.05rem] leading-[1.9] text-muted-custom">
            Veinue is not a map of the city. It is who shares the air with you — Bluetooth, in the room, right now.
          </p>
          <p className="text-[1.05rem] leading-[1.9] text-muted-custom">
            Friends first. Then the community. Connect without a pickup line. Chat after they accept. Distance stays hidden until you Find a friend.
          </p>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

export default ManifestoSection;
