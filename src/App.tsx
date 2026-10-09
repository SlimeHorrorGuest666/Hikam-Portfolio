import React, { useState, useEffect } from 'react';
import { TabId } from './types.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import { OverviewView } from './views/OverviewView.tsx';
import { GamesAndProjectsView } from './views/GamesAndProjectsView.tsx';
import { AboutAndSchoolView } from './views/AboutAndSchoolView.tsx';
import { SkillsAndTechStackView } from './views/SkillsAndTechStackView.tsx';
import { ItchIoAndContactView } from './views/ItchIoAndContactView.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    const hash = window.location.hash.replace('#', '');
    if (
      hash === 'overview' ||
      hash === 'games-and-projects' ||
      hash === 'about-and-school' ||
      hash === 'skills-and-tech-stack' ||
      hash === 'itch-io-and-contact'
    ) {
      return hash as TabId;
    }
    // Default to 'skills-and-tech-stack' as shown in initial screenshot or 'overview'
    return 'skills-and-tech-stack';
  });

  const handleTabChange = (tab: TabId) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (
        hash === 'overview' ||
        hash === 'games-and-projects' ||
        hash === 'about-and-school' ||
        hash === 'skills-and-tech-stack' ||
        hash === 'itch-io-and-contact'
      ) {
        setActiveTab(hash as TabId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Header */}
      <Header activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main View Port Container */}
      <main className="w-full pt-20 bg-surface flex-1">
        {activeTab === 'overview' && <OverviewView onNavigate={handleTabChange} />}
        {activeTab === 'games-and-projects' && <GamesAndProjectsView />}
        {activeTab === 'about-and-school' && <AboutAndSchoolView onNavigate={handleTabChange} />}
        {activeTab === 'skills-and-tech-stack' && <SkillsAndTechStackView onNavigate={handleTabChange} />}
        {activeTab === 'itch-io-and-contact' && <ItchIoAndContactView />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top helper */}
      <ScrollToTop />
    </div>
  );
}
