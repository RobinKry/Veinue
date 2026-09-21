import { Link } from 'react-router-dom';

const VeinueFooter = () => (
  <footer className="px-5 py-10 md:px-12 border-t rule flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <p className="font-display text-[14px] m-0 text-mute">Veinue</p>
    <nav className="flex flex-wrap gap-6 font-display text-[14px]">
      <Link to="/datenschutz" className="text-mute no-underline hover:text-ink">
        Datenschutz
      </Link>
      <Link to="/agb" className="text-mute no-underline hover:text-ink">
        AGB
      </Link>
      <Link to="/impressum" className="text-mute no-underline hover:text-ink">
        Impressum
      </Link>
      <Link to="/support" className="text-mute no-underline hover:text-ink">
        Support
      </Link>
    </nav>
    <p className="font-display text-[14px] m-0 text-mute">Berlin</p>
  </footer>
);

export default VeinueFooter;
