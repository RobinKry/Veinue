import { useEffect, useState } from 'react';

const links = [
  { href: '#room', label: 'Room' },
  { href: '#product', label: 'Case' },
  { href: '#how', label: 'How' },
  { href: '#contact', label: 'Mail' },
];

const VeinueNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-5 py-5 md:px-12">
        <a
          href="#"
          className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink no-underline"
        >
          Veinue
        </a>
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display text-[14px] font-medium text-mute no-underline hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden min-h-11 min-w-11 font-display text-[14px] font-medium text-ink bg-transparent border-0 cursor-pointer"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>
      {open && (
        <div
          id="site-menu"
          className="md:hidden fixed inset-0 bg-page flex flex-col justify-end px-5 pb-10 pt-24"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-[40px] font-semibold leading-[1.15] tracking-[-0.03em] text-ink no-underline py-3"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default VeinueNav;
