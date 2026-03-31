import RevealOnScroll from './RevealOnScroll';
import ImageBackground from './ImageBackground';
import bgManifesto from '@/assets/bg-manifesto.jpg';

const ManifestoSection = () => (
  <section className="relative py-16 md:py-24 px-6 md:px-12 overflow-hidden bg-deep" id="about">
    <ImageBackground src={bgManifesto} alt="" opacity={0.35} />
    <div className="absolute inset-0 bg-gradient-to-b from-deep via-deep/90 to-deep pointer-events-none" />

    <div className="relative z-10 max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-20 items-center">
      <RevealOnScroll>
        <div className="font-display text-[0.65rem] font-bold tracking-[0.3em] uppercase text-primary mb-5">
          The project
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.8rem)] font-extrabold leading-[1.15] tracking-tight">
          <span className="text-foreground">One night,</span><br /><em className="font-normal italic text-primary">one app,</em><br /><span className="text-foreground">many stories.</span>
        </h2>
      </RevealOnScroll>
      <RevealOnScroll delay={0.2}>
        <div className="space-y-6">
          <p className="text-[1.05rem] leading-[1.9] text-muted-custom">
            Nights out should feel effortless. But group chats get messy, decisions drag, and someone always ends up doing the organizing.
          </p>
          <p className="text-[1.05rem] leading-[1.9] text-muted-custom">
            Veinue is built for real friend groups — no timeline, no noise. Just the moments that matter: where you are, what's next, and how to move together.
          </p>
          <p className="text-[1.05rem] leading-[1.9] text-muted-custom">
            Think <strong className="text-foreground font-medium">urban vibe</strong>, <strong className="text-foreground font-medium">venues</strong>, <strong className="text-foreground font-medium">special deals</strong> &amp; <strong className="text-foreground font-medium">frictionless coordination</strong> — with a few backup features when you need them.
          </p>
          <p className="text-[1.05rem] leading-[1.9] text-muted-custom">
            Safe nights, safe vibes — without turning the whole night into "safety mode".
          </p>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

export default ManifestoSection;
