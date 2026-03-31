import { motion } from 'framer-motion';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
});

const CitySilhouette = () => (
  <svg className="absolute bottom-0 left-0 right-0 h-[55%]" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="streetGlow">
        <feGaussianBlur stdDeviation="8" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <g fill="#0d0b09" opacity="0.9">
      <rect x="0" y="280" width="45" height="220"/><rect x="48" y="250" width="30" height="250"/>
      <rect x="82" y="270" width="55" height="230"/><rect x="140" y="230" width="35" height="270"/>
      <rect x="178" y="260" width="25" height="240"/>
      <rect x="640" y="80" width="8" height="420"/>
      <circle cx="644" cy="180" r="28" fill="#0d0b09"/>
      <rect x="640" y="200" width="8" height="300"/>
      <rect x="400" y="200" width="50" height="300"/><rect x="455" y="230" width="35" height="270"/>
      <rect x="494" y="190" width="60" height="310"/><rect x="558" y="220" width="40" height="280"/>
      <rect x="600" y="260" width="30" height="240"/>
      <rect x="800" y="210" width="55" height="290"/><rect x="858" y="240" width="40" height="260"/>
      <rect x="900" y="200" width="65" height="300"/><rect x="970" y="230" width="45" height="270"/>
      <rect x="1020" y="250" width="30" height="250"/><rect x="1055" y="220" width="50" height="280"/>
      <rect x="1108" y="260" width="35" height="240"/><rect x="1148" y="240" width="28" height="260"/>
      <rect x="1180" y="200" width="60" height="300"/><rect x="1245" y="230" width="40" height="270"/>
      <rect x="1290" y="270" width="55" height="230"/><rect x="1350" y="250" width="90" height="250"/>
    </g>
    <ellipse cx="720" cy="490" rx="900" ry="80" fill="rgba(245,140,30,0.09)" filter="url(#streetGlow)"/>
    <ellipse cx="720" cy="500" rx="600" ry="50" fill="rgba(245,150,35,0.12)" filter="url(#streetGlow)"/>
    <g fill="#07060a">
      <rect x="0" y="310" width="80" height="190"/><rect x="84" y="340" width="60" height="160"/>
      <rect x="148" y="300" width="90" height="200"/><rect x="242" y="320" width="50" height="180"/>
      <rect x="295" y="290" width="70" height="210"/><rect x="368" y="310" width="45" height="190"/>
      <rect x="1000" y="330" width="70" height="170"/><rect x="1075" y="300" width="55" height="200"/>
      <rect x="1134" y="320" width="80" height="180"/><rect x="1220" y="310" width="60" height="190"/>
      <rect x="1285" y="280" width="75" height="220"/><rect x="1365" y="320" width="75" height="180"/>
    </g>
    <g filter="url(#glow)" opacity="0.8">
      <rect x="92" y="255" width="5" height="4" fill="#f5c060" rx="0.5"/><rect x="102" y="265" width="5" height="4" fill="#e8a040" rx="0.5"/>
      <rect x="155" y="235" width="4" height="5" fill="#f5d080" rx="0.5"/><rect x="165" y="248" width="4" height="5" fill="#f0b850" rx="0.5"/>
      <rect x="410" y="205" width="5" height="4" fill="#f5c060" rx="0.5"/><rect x="420" y="215" width="5" height="4" fill="#e8a040" rx="0.5"/>
      <rect x="432" y="205" width="5" height="4" fill="#f5d080" rx="0.5"/><rect x="460" y="235" width="4" height="5" fill="#f0b850" rx="0.5"/>
      <rect x="810" y="215" width="5" height="4" fill="#f5c060" rx="0.5"/><rect x="825" y="225" width="5" height="4" fill="#e8a040" rx="0.5"/>
      <rect x="910" y="205" width="5" height="4" fill="#f0b850" rx="0.5"/><rect x="922" y="215" width="5" height="4" fill="#f5c060" rx="0.5"/>
      <rect x="1195" y="215" width="5" height="4" fill="#f5d080" rx="0.5"/><rect x="1300" y="195" width="5" height="4" fill="#f5c060" rx="0.5"/>
    </g>
    <g>
      <line x1="200" y1="480" x2="200" y2="400" stroke="#3a3028" strokeWidth="2"/>
      <ellipse cx="200" cy="398" rx="20" ry="8" fill="rgba(255,180,60,0.25)" filter="url(#streetGlow)"/>
      <circle cx="200" cy="400" r="3" fill="#f5c060"/>
      <line x1="480" y1="480" x2="480" y2="390" stroke="#3a3028" strokeWidth="2"/>
      <ellipse cx="480" cy="388" rx="22" ry="9" fill="rgba(255,180,60,0.3)" filter="url(#streetGlow)"/>
      <circle cx="480" cy="390" r="3" fill="#f5c060"/>
      <line x1="760" y1="480" x2="760" y2="395" stroke="#3a3028" strokeWidth="2"/>
      <ellipse cx="760" cy="393" rx="20" ry="8" fill="rgba(255,180,60,0.25)" filter="url(#streetGlow)"/>
      <circle cx="760" cy="395" r="3" fill="#f5c060"/>
      <line x1="1040" y1="480" x2="1040" y2="390" stroke="#3a3028" strokeWidth="2"/>
      <ellipse cx="1040" cy="388" rx="22" ry="9" fill="rgba(255,180,60,0.3)" filter="url(#streetGlow)"/>
      <circle cx="1040" cy="390" r="3" fill="#f5c060"/>
    </g>
    <rect x="0" y="480" width="1440" height="20" fill="#0a0806"/>
    <ellipse cx="480" cy="490" rx="60" ry="6" fill="rgba(245,160,40,0.1)"/>
    <ellipse cx="760" cy="490" rx="50" ry="5" fill="rgba(245,160,40,0.08)"/>
  </svg>
);

const Bokeh = ({ style }: { style: React.CSSProperties }) => (
  <div className="absolute rounded-full" style={{
    ...style,
    filter: `blur(${style['--blur' as keyof typeof style]})`,
    opacity: style['--op' as keyof typeof style] as number,
    animation: `bokehDrift ${style['--dur' as keyof typeof style]} ease-in-out infinite alternate`,
    ['--drift' as string]: style['--drift' as keyof typeof style],
    ['--scale' as string]: style['--scale' as keyof typeof style],
  }} />
);

const HeroSection = () => (
  <section className="relative h-screen min-h-[700px] flex flex-col justify-end items-center px-6 pb-20 md:px-12 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 60% 50% at 30% 80%, rgba(232,135,58,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 70% 90%, rgba(196,92,106,0.12) 0%, transparent 55%),
          radial-gradient(ellipse 80% 60% at 50% 100%, rgba(245,166,35,0.08) 0%, transparent 50%),
          linear-gradient(180deg, #03040a 0%, #0a0810 30%, #12080f 55%, #1a0c08 75%, #0e0806 100%)`,
        animation: 'skyPulse 8s ease-in-out infinite alternate',
      }} />
      <Bokeh style={{ '--blur': '60px', '--op': 0.35, '--dur': '7s', '--drift': '-18px', '--scale': '1.1', width: 180, height: 180, background: 'hsl(36,90%,55%)', top: '55%', left: '15%' } as any} />
      <Bokeh style={{ '--blur': '80px', '--op': 0.2, '--dur': '9s', '--drift': '14px', '--scale': '0.9', width: 220, height: 220, background: 'hsl(25,80%,57%)', top: '65%', left: '55%' } as any} />
      <Bokeh style={{ '--blur': '50px', '--op': 0.25, '--dur': '6s', '--drift': '-10px', '--scale': '1.2', width: 120, height: 120, background: 'hsl(350,40%,46%)', top: '50%', left: '80%' } as any} />
      <Bokeh style={{ '--blur': '90px', '--op': 0.15, '--dur': '11s', '--drift': '20px', '--scale': '0.95', width: 300, height: 300, background: 'hsl(222,60%,52%)', top: '40%', left: '30%' } as any} />
      <Bokeh style={{ '--blur': '40px', '--op': 0.3, '--dur': '5s', '--drift': '-12px', '--scale': '1.05', width: 90, height: 90, background: '#e8c06a', top: '70%', left: '40%' } as any} />
      <Bokeh style={{ '--blur': '70px', '--op': 0.18, '--dur': '8s', '--drift': '8px', '--scale': '1.1', width: 160, height: 160, background: 'hsl(36,90%,55%)', top: '60%', left: '68%' } as any} />
      <CitySilhouette />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-[780px] w-full mx-auto">
      <motion.div {...fadeUp(0.3)} className="font-display text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-primary mb-6">
        Veinue the Urban Pulse · Berlin · 2026
      </motion.div>
      <motion.h1 {...fadeUp(0.5)} className="font-display text-[clamp(3.2rem,7vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight mb-8">
        City is<br />
        <span className="text-primary">y</span>
        <span className="italic font-normal">ours.</span>
      </motion.h1>
      <motion.p {...fadeUp(0.75)} className="text-[clamp(0.95rem,1.6vw,1.1rem)] font-light leading-[1.7] text-muted-custom max-w-[480px] mb-12">
        Veinue is a lifestyle app for friend groups: discover places, decide faster, and stay connected — with safety features quietly in the background.
      </motion.p>
      <motion.div {...fadeUp(0.95)} className="flex items-center gap-8">
        <button
          onClick={() => {
            const el = document.getElementById('how');
            if (!el) return;
            // Scroll to show heading + both rows of cards (so 04.5 is already peeking)
            const targetY = el.getBoundingClientRect().top + window.scrollY - 40;
            const startY = window.scrollY;
            const distance = targetY - startY;
            const duration = 3200;
            let startTime: number | null = null;
            const easeInOutCubic = (t: number) => t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
            const step = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const elapsed = timestamp - startTime;
              const progress = Math.min(elapsed / duration, 1);
              window.scrollTo(0, startY + distance * easeInOutCubic(progress));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }}
          className="font-display text-[0.78rem] font-bold tracking-[0.16em] uppercase text-primary-foreground bg-primary px-9 py-4 rounded-sm relative overflow-hidden group cursor-pointer border-0"
        >
          <span className="relative z-10">How it works</span>
          <div className="absolute inset-0 bg-foreground translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]" />
        </button>
      </motion.div>
      <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3 text-[0.82rem] tracking-[0.06em]" style={{ color: 'hsl(34 33% 92% / 0.45)' }}>
        <span><strong style={{ color: 'hsl(34 33% 92% / 0.72)', fontWeight: 600 }}>Find the next</strong> Ve<span className="text-primary">i</span>nue</span>
        <span style={{ opacity: 0.35 }}>·</span>
        <span><strong style={{ color: 'hsl(34 33% 92% / 0.72)', fontWeight: 600 }}>Safe Nights.</strong> Safe Vibes.</span>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 1 }}
      className="absolute bottom-10 right-6 md:right-12 flex flex-col items-center gap-2.5"
    >
      <div className="w-px h-[60px]" style={{
        background: 'linear-gradient(to bottom, hsl(36,90%,55%), transparent)',
        animation: 'scrollLine 1.8s ease-in-out infinite',
      }} />
      <span className="font-display text-[0.6rem] tracking-[0.22em] uppercase" style={{ writingMode: 'vertical-rl', color: 'hsl(34 33% 25%)' }}>Scroll</span>
    </motion.div>
  </section>
);

export default HeroSection;
