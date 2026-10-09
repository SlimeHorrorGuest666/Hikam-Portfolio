import React, { useState, useEffect } from 'react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-xl bg-surface-container-high/90 hover:bg-primary-container text-primary hover:text-on-primary-container shadow-2xl backdrop-blur-md border border-outline-variant/30 flex items-center justify-center transition-all hover:shadow-[0_0_24px_rgba(0,255,157,0.45)] group cursor-pointer"
    >
      <span className="material-symbols-outlined text-[22px] transition-transform group-hover:-translate-y-0.5">
        arrow_upward
      </span>
    </button>
  );
};
