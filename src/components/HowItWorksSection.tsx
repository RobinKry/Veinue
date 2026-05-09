import RevealOnScroll from './RevealOnScroll';

const steps = [
  { num: '01', title: 'Group up', desc: 'Via Link or Quick Add' },
  { num: '02', title: 'Decide easily', desc: 'Find the best Venues and Deals' },
  { num: '03', title: 'Stay connected', desc: 'No constant texting — communicate easier and better' },
  { num: '04', title: 'Thrive', desc: 'With your friends — and our safety features as your backup' },
  { num: '05', title: 'Change Location?', desc: 'Top recommendations with a Nearby filter' },
  { num: '06', title: 'Safe way home', desc: 'Let your friends walk you home digitally' },
];

const HowItWorksSection = () => (
  <section className="relative py-16 md:py-24 px-6 md:px-12 overflow-hidden bg-deep" id="how">
    
    <div className="absolute inset-0 bg-gradient-to-b from-deep via-deep/90 to-deep pointer-events-none" />

    <div className="relative z-10 max-w-[1100px] mx-auto">
      <RevealOnScroll>
        <div className="font-display text-[0.65rem] font-bold tracking-[0.3em] uppercase text-primary mb-5">
          How it works
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-12 max-w-[600px] leading-[1.1]">
          Day 'N' Nite together
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: '1px' }}>
        {steps.map((step, i) => (
          <RevealOnScroll key={step.num} delay={i * 0.1} className="flex">
            <div className="bg-black p-8 md:p-9 relative flex-1">
              <div className="font-display text-[3.5rem] font-extrabold leading-none mb-6 tracking-tight" style={{ color: 'rgba(245,166,35,0.12)' }}>
                {step.num}
              </div>
              <h4 className="font-display text-sm font-bold mb-3 tracking-[0.01em]">{step.title}</h4>
              <p className="text-[0.85rem] leading-[1.75] text-muted-custom">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="absolute top-[60px] right-[-1px] w-0.5 h-0.5 bg-primary hidden md:block" style={{ boxShadow: '0 0 8px hsl(36,90%,55%)' }} />
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
