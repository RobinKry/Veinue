import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Aceternity-style cursor spotlight */
export function Spotlight({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 40 });

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const onMove = (e: globalThis.MouseEvent) => {
      const r = el.getBoundingClientRect();
      setPos({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={cn('pointer-events-none absolute inset-0 z-[1]', className)}
      style={{
        background: `radial-gradient(520px circle at ${pos.x}% ${pos.y}%, rgba(245,166,35,0.16), transparent 55%)`,
      }}
    />
  );
}

/** Magic UI-style shimmer CTA */
export function ShimmerButton({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group relative inline-flex items-center justify-center overflow-hidden rounded-sm px-9 py-4 font-display text-[0.78rem] font-bold uppercase tracking-[0.16em] text-primary-foreground',
        className,
      )}
    >
      <span className="absolute inset-0 bg-primary" />
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

/** Perspective floor grid (Magic UI retro-grid vibe) */
export function RetroGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-x-0 bottom-0 h-[55%] overflow-hidden opacity-40 [mask-image:linear-gradient(to_top,black,transparent)]',
        className,
      )}
    >
      <div
        className="absolute inset-0 origin-bottom"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(245,166,35,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,166,35,0.18) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          transform: 'perspective(480px) rotateX(58deg)',
          animation: 'gridDrift 18s linear infinite',
        }}
      />
    </div>
  );
}

export function BorderBeamCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('relative overflow-hidden rounded-sm bg-black p-8 md:p-10', className)}>
      <div
        className="pointer-events-none absolute inset-0 rounded-sm"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(245,166,35,0.45), transparent)',
          backgroundSize: '200% 100%',
          animation: 'beamSlide 4.5s linear infinite',
          mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: 1,
        }}
      />
      {children}
    </div>
  );
}
