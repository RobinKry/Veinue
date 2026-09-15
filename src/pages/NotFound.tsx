import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[100svh] flex flex-col justify-end px-5 pb-10 md:px-12 bg-page">
      <p className="font-display text-[14px] text-mute mb-8">404</p>
      <h1 className="font-display font-semibold tracking-[-0.04em] leading-[0.9] text-[clamp(3rem,10vw,7rem)] text-ink m-0 mb-10">
        Lost.
      </h1>
      <a href="/" className="font-display text-[16px] text-ink no-underline border-b border-ink w-fit">
        Back
      </a>
    </div>
  );
};

export default NotFound;
