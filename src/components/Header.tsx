import React, { useState } from 'react';
import { TabId } from '../types.ts';

interface HeaderProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabId; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'games-and-projects', label: 'Games & Projects' },
    { id: 'about-and-school', label: 'About & School (SMKN 6)' },
    { id: 'skills-and-tech-stack', label: 'Skills & Tech Stack' },
    { id: 'itch-io-and-contact', label: 'itch.io & Contact' },
  ];

  const handleNavClick = (id: TabId) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.4)]" id="top">
      <div className="h-20 max-w-[1200px] mx-auto px-gutter flex items-center justify-between gap-space-md">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('overview')}
          className="flex items-center gap-space-md shrink-0 text-left cursor-pointer focus:outline-none"
        >
          <img
            alt="Hikam Dev Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1XQP7hCYPeHmgGyqTP9CPtG19OQZrR0BEXy7xcZD6yVthWZYTW4LliwatpA5WEJLkr5-95GbkH6OjSLIrIF_LihU7-0UDOpTkRIMU4_jCfbiUDhOfYt74DBYC4PQsOxefCQuqBO0YAP-etspyg4ntj0uuwDTZNUisJgg3ZmcZKEHNM3aMSCCycF-R1JjIxi32nCtkUA72n-J5oXpiPf00IAZVtWeicCi9Iuwll3BJSCwA"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary leading-none">HIKAM.DEV</span>
            <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase mt-space-xs">
              XI PPLG • SMKN 6 SURAKARTA
            </span>
          </div>
        </button>

        {/* Status Pill */}
        <div className="hidden xl:flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-full shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span className="font-label-mono-sm text-label-mono-sm text-on-surface">Open for Collabs &amp; Game Jams</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-space-xs">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-space-md py-space-xs font-label-mono-lg text-label-mono-lg transition-all cursor-pointer ${
                  isActive
                    ? 'text-on-primary-container bg-primary-container font-semibold rounded-lg shadow-[0_0_12px_rgba(0,255,157,0.35)]'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-space-md shrink-0">
          <div className="hidden sm:flex items-center gap-space-xs">
            <a
              className="px-space-sm py-space-xs bg-surface-container-low hover:bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface-variant hover:text-on-surface rounded-lg transition-all flex items-center gap-1"
              href="https://github.com/SlimeHorrorGuest666"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              @SlimeHorrorGuest666
            </a>
            <a
              className="px-space-sm py-space-xs bg-surface-container-low hover:bg-surface-container font-label-mono-sm text-label-mono-sm text-secondary hover:text-on-surface rounded-lg transition-all flex items-center gap-1"
              href="https://www.instagram.com/hikamhoror5/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              @hikamhoror5
            </a>
          </div>

          <div
            title="Hikam - XI PPLG"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-surface-container text-on-surface hover:text-primary-container transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-low border-t border-surface-variant px-gutter py-space-md flex flex-col gap-space-xs shadow-2xl animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-space-md py-space-sm font-label-mono-lg text-label-mono-lg rounded-lg transition-all ${
                  isActive
                    ? 'text-on-primary-container bg-primary-container font-semibold shadow-[0_0_12px_rgba(0,255,157,0.35)]'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-space-sm mt-space-xs border-t border-surface-variant flex items-center gap-space-xs">
            <a
              className="flex-1 text-center py-space-xs bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface-variant rounded-lg"
              href="https://github.com/SlimeHorrorGuest666"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="flex-1 text-center py-space-xs bg-surface-container font-label-mono-sm text-label-mono-sm text-secondary rounded-lg"
              href="https://hikam-gamedev.itch.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              itch.io
            </a>
            <a
              className="flex-1 text-center py-space-xs bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface-variant rounded-lg"
              href="https://www.instagram.com/hikamhoror5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
