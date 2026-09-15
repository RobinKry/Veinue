const steps = [
  { title: 'Walk in', desc: 'You are a presence. Not a pin. Not a post.' },
  { title: 'Friends', desc: 'See who you already know in the room.' },
  { title: 'Community', desc: 'See who else from Veinue is here.' },
  { title: 'Connect', desc: 'No text on the request. They choose.' },
  { title: 'Find', desc: 'Lost a friend? Pulse toward them. Friends only.' },
  { title: 'Ghost', desc: 'Everyone, friends only, or nobody. From home.' },
];

const HowItWorksSection = () => (
  <section id="how" className="px-5 py-28 md:px-12 md:py-36 border-t rule">
    <div className="max-w-[980px]">
      <h2 className="font-display font-semibold tracking-[-0.03em] leading-[1.05] text-[clamp(2.2rem,5vw,4.25rem)] text-ink m-0 mb-16">
        You show up.
      </h2>
      <ol className="list-none m-0 p-0">
        {steps.map((step, i) => (
          <li key={step.title} className="grid grid-cols-[48px_1fr] md:grid-cols-[80px_200px_1fr] gap-4 md:gap-10 py-6 border-t rule">
            <span className="font-display text-[13px] text-mute pt-1">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display text-[20px] font-semibold tracking-[-0.02em] m-0 text-ink">
              {step.title}
            </h3>
            <p className="font-body text-[18px] leading-[1.5] text-mute m-0 col-span-2 md:col-span-1">
              {step.desc}
            </p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorksSection;
