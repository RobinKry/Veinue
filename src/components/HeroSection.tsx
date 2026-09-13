import { motion } from 'framer-motion';
import { RetroGrid, ShimmerButton, Spotlight } from './magic/fx';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
});

const PresenceField = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
    viewBox="0 0 1440 900"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMax slice"
  >
    <defs>
      <filter id="dotGlow" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="3" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none" stroke="rgba(245,166,35,0.14)" strokeWidth="1">
      <circle cx="720" cy="640" r="90" style={{ animation: 'ringPulse 7s ease-in-out infinite' }} />
      <circle cx="720" cy="640" r="170" style={{ animation: 'ringPulse 9s ease-in-out infinite 0.4s' }} />
      <circle cx="720" cy="640" r="270" style={{ animation: 'ringPulse 11s ease-in-out infinite 0.8s' }} />
      <circle cx="720" cy="640" r="390" opacity="0.5" />
    </g>
    <g filter="url(#dotGlow)">
      <circle cx="720" cy="640" r="7" fill="#f5a623" />
      <circle cx="668" cy="568" r="5" fill="#f5c060" />
      <circle cx="792" cy="580" r="4.5" fill="#e8a040" />
      <circle cx="640" cy="700" r="4" fill="#f0b850" />
      <circle cx="810" cy="710" r="5" fill="#f5d080" />
      <circle cx="580" cy="620" r="3.5" fill="#e8c06a" />
      <circle cx="860" cy="630" r="3.5" fill="#f5c060" />
    </g>
  </svg>
);

const HeroSection = () => (
  <section className="relative h-screen min-h-[720px] flex flex-col justify-end items-center px-6 pb-20 md:px-12 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
          radial-gradient(ellipse 55% 45% at 50% 78%, rgba(232,135,58,0.22) 0%, transparent 58%),
          linear-gradient(180deg, #03040a 0%, #0a0810 42%, #12080f 72%, #0e0806 100%)`,
          animation: 'skyPulse 8s ease-in-out infinite alternate',
        }}
      />
      <Spotlight />
      <RetroGrid />
      <PresenceField />
    </div>

    <div className="relative z-10 max-w-[860px] w-full mx-auto">
      <motion.div {...fadeUp(0.2)} className="font-display text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-primary mb-6">
        Offline social media
      </motion.div>
      <motion.h1 {...fadeUp(0.4)} className="font-display text-[clamp(3.1rem,7.4vw,6.6rem)] font-extrabold leading-[0.9] tracking-tight mb-8">
        Find your
        <br />
        <span className="italic font-normal text-primary" style={{ textShadow: '0 0 48px rgba(245,166,35,0.35)' }}>
          people.
        </span>
      </motion.h1>
      <motion.p {...fadeUp(0.65)} className="text-[clamp(0.98rem,1.65vw,1.14rem)] font-light leading-[1.75] text-muted-custom max-w-[500px] mb-12">
        Know who of your friends is here. Know who from the community is here. Find them when you lose them in the room.
      </motion.p>
      <motion.div {...fadeUp(0.85)}>
        <ShimmerButton onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}>
          See the case
        </ShimmerButton>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
