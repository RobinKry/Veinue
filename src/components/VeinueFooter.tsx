const VeinueFooter = () => (
  <footer className="px-6 py-12 md:px-12 md:py-16 border-t border-foreground/[0.06] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
    <div>
      <div className="font-display text-[1.1rem] font-extrabold tracking-[0.1em] uppercase">
        Ve<span className="text-primary">i</span>nue
      </div>
      <div className="mt-1.5 text-[0.8rem] text-dim tracking-[0.05em]">Find your people. · Berlin 2026</div>
    </div>
    <nav className="flex gap-6">
      <a href="#product" className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-dim no-underline hover:text-foreground transition-colors">
        Case
      </a>
      <a href="#how" className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-dim no-underline hover:text-foreground transition-colors">
        How
      </a>
      <a href="#contact" className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-dim no-underline hover:text-foreground transition-colors">
        Contact
      </a>
    </nav>
  </footer>
);

export default VeinueFooter;
