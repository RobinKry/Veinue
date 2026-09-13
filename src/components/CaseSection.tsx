import RevealOnScroll from './RevealOnScroll';
import { BorderBeamCard } from './magic/fx';

const cases = [
  {
    k: '01',
    title: 'Friends here',
    body: 'Open Veinue and see which of your people are in the same room. No map. No feed. A list of who is actually here.',
  },
  {
    k: '02',
    title: 'Community here',
    body: 'Then the rest of the room — people from the community nearby. Connect without a message. Chat only if they say yes.',
  },
  {
    k: '03',
    title: 'Find them',
    body: 'Lost someone in the crowd? Find is only for friends. A pulse when they are close — so you meet again, not guess.',
  },
];

const CaseSection = () => (
  <section className="relative py-16 md:py-24 px-6 md:px-12 overflow-hidden bg-background" id="product">
    <div className="relative z-10 max-w-[1100px] mx-auto">
      <RevealOnScroll className="mb-12">
        <div className="font-display text-[0.65rem] font-bold tracking-[0.3em] uppercase text-primary mb-5">
          The case
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-tight leading-[1.05]">
          Know who is near.
          <br />
          <span className="text-primary">Find who you lost.</span>
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {cases.map((c, i) => (
          <RevealOnScroll key={c.k} delay={i * 0.1}>
            <BorderBeamCard className="h-full min-h-[260px] flex flex-col">
              <div className="font-display text-[0.6rem] font-bold tracking-[0.22em] text-dim mb-8">{c.k}</div>
              <h3 className="font-display text-[1.35rem] font-bold mb-4 tracking-tight">{c.title}</h3>
              <p className="text-[0.92rem] leading-[1.8] text-muted-custom">{c.body}</p>
            </BorderBeamCard>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default CaseSection;
