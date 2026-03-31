import RevealOnScroll from './RevealOnScroll';
import ImageBackground from './ImageBackground';
import bgPillars from '@/assets/bg-pillars.jpg';

const pillars = [
  {
    num: '01',
    title: 'Connect',
    desc: 'Always have your friends nearby even if you split up for a moment. No more need to constantly check the phone.',
    icon: (
      <svg className="w-11 h-11 mb-7" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="20" stroke="rgba(245,166,35,0.25)" strokeWidth="1"/>
        <circle cx="15" cy="17" r="3.5" stroke="#f5a623" strokeWidth="1.5"/>
        <path d="M8 31 C8 26 11.5 23.5 15 23.5 C17 23.5 18.8 24.3 20.1 25.7" stroke="#f5a623" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
        <circle cx="29" cy="17" r="3.5" stroke="#f5a623" strokeWidth="1.5"/>
        <path d="M36 31 C36 26 32.5 23.5 29 23.5 C27 23.5 25.2 24.3 23.9 25.7" stroke="#f5a623" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
        <circle cx="22" cy="16" r="4" stroke="#f5a623" strokeWidth="1.5"/>
        <path d="M13.5 32 C13.5 27 17.5 24.5 22 24.5 C26.5 24.5 30.5 27 30.5 32" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'NextUp',
    desc: 'Know what\'s up. Make picks fast and low-friction. Best Venues & Special Deals.',
    icon: (
      <svg className="w-11 h-11 mb-7" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="20" stroke="rgba(245,166,35,0.25)" strokeWidth="1"/>
        <path d="M25.5 10.5 L15.5 23.5 L21.5 23.5 L18.5 33.5 L28.5 20.5 L22.5 20.5 Z" stroke="#f5a623" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(245,166,35,0.1)"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'BackUp',
    desc: 'Quiet by design. A few smart check-ins and tools — there when you want them, invisible when you don\'t.',
    icon: (
      <svg className="w-11 h-11 mb-7" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="20" stroke="rgba(245,166,35,0.25)" strokeWidth="1"/>
        <path d="M22 11 L32 15.5 L32 23 C32 28.8 27.6 33.5 22 35 C16.4 33.5 12 28.8 12 23 L12 15.5 Z" stroke="#f5a623" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(245,166,35,0.07)"/>
        <path d="M17 22.5 L20.5 26 L27.5 19" stroke="#f5a623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const PillarsSection = () => (
  <section className="relative py-16 md:py-24 px-6 md:px-12 overflow-hidden bg-background">
    <ImageBackground src={bgPillars} alt="" opacity={0.32} />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background pointer-events-none" />

    <div className="relative z-10">
      <RevealOnScroll className="max-w-[1100px] mx-auto mb-12">
        <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-tight leading-[1.05]">
          What <span className="text-primary">Veinue</span><br />does for you
        </h2>
      </RevealOnScroll>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-px">
        {pillars.map((p, i) => (
          <RevealOnScroll key={p.num} delay={i * 0.1}>
            <div className="bg-black p-11 relative overflow-hidden group cursor-default transition-colors hover:bg-[#0a0a0a]">
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-rose scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
              <div className="font-display text-[0.6rem] font-bold tracking-[0.22em] text-dim mb-8">{p.num}</div>
              {p.icon}
              <h3 className="font-display text-[1.3rem] font-bold mb-4 tracking-tight">{p.title}</h3>
              <p className="text-[0.9rem] leading-[1.8] text-muted-custom">{p.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default PillarsSection;
