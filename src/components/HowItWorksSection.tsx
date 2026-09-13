import RevealOnScroll from './RevealOnScroll';

const steps = [
  { num: '01', title: 'Walk in', desc: 'You are a presence. Not a pin. Not a post.' },
  { num: '02', title: 'Friends', desc: 'See who you already know in the room.' },
  { num: '03', title: 'Community', desc: 'See who else from Veinue is here.' },
  { num: '04', title: 'Connect', desc: 'No text on the request. They choose.' },
  { num: '05', title: 'Find', desc: 'Lost a friend? Pulse toward them — friends only.' },
  { num: '06', title: 'Ghost', desc: 'Everyone, friends only, or nobody. From the home screen.' },
];

const HowItWorksSection = () => (
  <section className="relative py-16 md:py-24 px-6 md:px-12 overflow-hidden bg-deep" id="how">
    <div className="relative z-10 max-w-[1100px] mx-auto">
      <RevealOnScroll>
        <div className="font-display text-[0.65rem] font-bold tracking-[0.3em] uppercase text-primary mb-5">
          How it works
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.08}>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-12 max-w-[640px] leading-[1.1]">
          You show up.
          <br />
          They are already there.
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-px">
        {steps.map((step) => (
          <RevealOnScroll key={step.num} className="flex">
            <div className="bg-black p-8 md:p-9 relative flex-1">
              <div
                className="font-display text-[3.2rem] font-extrabold leading-none mb-6 tracking-tight"
                style={{ color: 'rgba(245,166,35,0.12)' }}
              >
                {step.num}
              </div>
              <h4 className="font-display text-sm font-bold mb-3">{step.title}</h4>
              <p className="text-[0.85rem] leading-[1.75] text-muted-custom">{step.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
