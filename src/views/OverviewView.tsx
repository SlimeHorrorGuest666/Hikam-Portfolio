import React, { useState } from 'react';
import { TabId } from '../types.ts';
import { GitHubCalendar } from '../components/GitHubCalendar.tsx';

interface OverviewViewProps {
  onNavigate: (tab: TabId) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const jsonSnippet = `{
  "name": "Hikam",
  "education": "SMK Negeri 6 Surakarta (Grade XI PPLG)",
  "specialization": ["Gameplay Programming", "Game Mechanics Design", "C# & GDScript Architecture"],
  "martial_arts_discipline": "High Agility, Rapid Reflexes, Ground & Aerial Kinematics",
  "itch_profile": "https://hikam-gamedev.itch.io",
  "github": "https://github.com/SlimeHorrorGuest666",
  "instagram": "https://www.instagram.com/hikamhoror5/",
  "status": "Available for Indie Collaborations, Hackathons & Game Jams"
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Visual Cyber Ambience Strip */}
      <div className="relative w-full overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,255,157,0.12),rgba(16,20,24,0))] pointer-events-none"></div>

        {/* Main Container */}
        <div className="max-w-[1200px] mx-auto px-gutter py-space-xl relative z-10 flex flex-col gap-space-xl">
          {/* HERO GRID SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Left Column: Typographic & Identity Dossier */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              {/* Overline & System Live Status */}
              <div className="flex flex-wrap items-center gap-space-sm">
                <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-high rounded-full shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
                  <span className="font-label-mono-sm text-label-mono-sm text-primary-fixed uppercase tracking-widest">
                    BUILD 2025.1 // STABLE
                  </span>
                </span>
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase tracking-wider">
                  SMK NEGERI 6 SURAKARTA • VISKA CREATIVE
                </span>
              </div>

              {/* Main Hero Headings */}
              <div className="flex flex-col gap-space-xs">
                <h1 className="font-display-hero text-display-hero text-primary tracking-tight">
                  GAME DEVELOPER <br />
                  <span className="text-secondary-fixed bg-clip-text text-transparent bg-gradient-to-r from-secondary-fixed via-primary-container to-secondary">
                    &amp; SOFTWARE ENG.
                  </span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mt-space-xs">
                  Grade <span className="text-primary font-semibold">XI PPLG</span> (Pengembangan Perangkat Lunak &amp; Gim) at SMK Negeri 6 Surakarta. Crafting kinetic indie game mechanics, cybernetic systems, and playable digital universes.
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <a
                  className="group relative px-space-lg py-space-sm bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase rounded-lg shadow-[0_0_24px_rgba(0,255,157,0.35)] hover:shadow-[0_0_36px_rgba(0,255,157,0.6)] transition-all flex items-center gap-space-sm cursor-pointer"
                  href="https://hikam-gamedev.itch.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">sports_esports</span>
                  <span>Play Games on itch.io</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
                <button
                  onClick={() => onNavigate('games-and-projects')}
                  className="px-space-md py-space-sm bg-surface-container text-secondary font-headline-sm text-headline-sm rounded-lg hover:bg-surface-container-high transition-all flex items-center gap-space-xs shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">terminal</span>
                  <span>School Portfolios</span>
                </button>
              </div>

              {/* Key Stats HUD Matrix Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm mt-space-md p-space-sm bg-surface-container-low rounded-xl shadow-md">
                <div className="flex flex-col p-space-sm bg-surface-container rounded-lg">
                  <span className="font-label-mono-sm text-label-mono-sm text-outline-variant uppercase">Academic Track</span>
                  <span className="font-headline-sm text-headline-sm text-primary-fixed mt-space-xs">XI PPLG</span>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">SMKN 6 Surakarta</span>
                </div>
                <div className="flex flex-col p-space-sm bg-surface-container rounded-lg">
                  <span className="font-label-mono-sm text-label-mono-sm text-outline-variant uppercase">Deploy Platform</span>
                  <span className="font-headline-sm text-headline-sm text-secondary-fixed mt-space-xs">itch.io</span>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">hikam-gamedev</span>
                </div>
                <div className="flex flex-col p-space-sm bg-surface-container rounded-lg">
                  <span className="font-label-mono-sm text-label-mono-sm text-outline-variant uppercase">Combat Agility</span>
                  <span className="font-headline-sm text-headline-sm text-primary mt-space-xs">100%</span>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">Stamina &amp; Focus</span>
                </div>
                <div className="flex flex-col p-space-sm bg-surface-container rounded-lg">
                  <span className="font-label-mono-sm text-label-mono-sm text-outline-variant uppercase">Core Engines</span>
                  <span className="font-headline-sm text-headline-sm text-tertiary-container mt-space-xs">Godot &amp; Unity</span>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">C# • GDScript</span>
                </div>
              </div>
            </div>

            {/* Right Column: Kinetic Action Photo & Cyber HUD Target Frame */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Background Ambient Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-container/20 to-secondary-container/20 rounded-full blur-2xl pointer-events-none"></div>

              {/* Main Cybernetic Frame Container */}
              <div className="relative w-full max-w-[460px] bg-surface-container-high rounded-xl p-space-sm shadow-2xl overflow-hidden group">
                {/* Inset HUD Header / Diagnostics Header */}
                <div className="flex items-center justify-between pb-space-xs mb-space-xs px-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-error animate-pulse"></span>
                    <span className="font-label-mono-sm text-label-mono-sm text-on-surface uppercase">KINETIC_TRAJECTORY_FEED</span>
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-primary-fixed">60.00 FPS [NOMINAL]</span>
                </div>

                {/* Visual Media Frame with Scanlines and HUD Crosshairs */}
                <div className="relative w-full aspect-[4/5] bg-surface-container-lowest rounded-lg overflow-hidden">
                  <img
                    alt="Hikam in mid-air martial arts jump kick action pose with dynamic motion blur"
                    className="w-full h-full object-cover object-center filter contrast-110 saturate-110 transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPqQNBsoltlZ7Q1dfuD5hQ6uI7iQLeJ-U9bRHrGzM7tOpMOERzCmZLb9HcQ1WsEL6-ooD2v8upqr4f0j8-rF75BI9-0aX_Bc7XGqp2g85Siv9SMDEEs9rW_beAISYd7r6oHXEJBu9bCtfTC-koUp73CXckCOGG3hfr4oLBD0-KkTWJlbq4krLd6D1Xl61dDrOHFGfs8UUmB6nk2_5yEqQpyaolDpPyyhhV93zmiaqEmI89B8OMvuL41g"
                  />
                  {/* Scanline Glitch / Film Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-container/5 to-surface-container-lowest/80 pointer-events-none"></div>

                  {/* HUD Reticle / Sight Crosshairs Inset */}
                  <div className="absolute top-4 left-4 p-space-xs bg-surface-container-lowest/80 backdrop-blur-md rounded-lg">
                    <span className="font-label-mono-sm text-label-mono-sm text-primary-container flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">my_location</span>
                      LOCK: MID_AIR_AERIAL
                    </span>
                  </div>

                  {/* HUD Speed & Power Metric */}
                  <div className="absolute top-4 right-4 flex flex-col items-end gap-0.5 bg-surface-container-lowest/80 backdrop-blur-md px-space-xs py-0.5 rounded-lg">
                    <span className="font-label-mono-sm text-label-mono-sm text-secondary-fixed">VELOCITY: MAX</span>
                    <span className="font-label-mono-sm text-[10px] text-on-surface-variant">FORCE: 820 N</span>
                  </div>

                  {/* Class Badge Pill Bottom Overlay */}
                  <div className="absolute bottom-4 inset-x-4 flex flex-col gap-space-xs bg-surface-container-lowest/90 backdrop-blur-md p-space-sm rounded-lg shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase font-bold flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[16px]">swords</span>
                        Class: Agile Game Creator
                      </span>
                      <span className="font-label-mono-sm text-[10px] px-1.5 py-0.5 bg-primary-container text-on-primary-container rounded">LVL 11</span>
                    </div>

                    {/* 10-Block Discrete Stamina Bar */}
                    <div className="flex items-center gap-1 w-full pt-1">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-2 flex-1 rounded bg-primary-container shadow-[0_0_8px_rgba(0,255,157,0.8)]"
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-label-mono-sm text-on-surface-variant">
                      <span>STAMINA: 100/100</span>
                      <span>PHYSICAL • CODING DISCIPLINE</span>
                    </div>
                  </div>
                </div>

                {/* Footer Diagnostics Tagline */}
                <div className="pt-space-xs flex items-center justify-between px-space-xs text-on-surface-variant">
                  <span className="font-label-mono-sm text-label-mono-sm">SUBJECT: HIKAM // SURAKARTA</span>
                  <span className="font-label-mono-sm text-label-mono-sm text-primary">STATUS: MISSION READY</span>
                </div>
              </div>
            </div>
          </div>

          {/* BENTO HIGHLIGHT SECTION: VOCATIONAL RIGOR + SKILLS OVERVIEW */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-md">
            {/* Bento 1: Vocational Pride & Curriculum */}
            <div className="flex flex-col justify-between p-space-lg bg-surface-container rounded-xl shadow-md hover:bg-surface-container-high transition-all">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="p-space-xs bg-surface-container-highest rounded-lg text-secondary">
                    <span className="material-symbols-outlined text-[24px]">school</span>
                  </span>
                  <span className="font-label-mono-sm text-label-mono-sm text-outline">SMKN 6 SURAKARTA</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mt-space-sm">PPLG Program Keahlian</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Learning rigorous software lifecycles, object-oriented programming, game development pipelines, database architectures, and UI/UX engineering under SMK Pusat Keunggulan standard.
                </p>
              </div>
              <div className="flex items-center gap-space-xs mt-space-md pt-space-xs text-secondary-fixed">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span className="font-label-mono-sm text-label-mono-sm">VISKA - Vocational Innovation</span>
              </div>
            </div>

            {/* Bento 2: Dynamic Indie Game Creation Philosophy */}
            <div className="flex flex-col justify-between p-space-lg bg-surface-container rounded-xl shadow-md hover:bg-surface-container-high transition-all">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="p-space-xs bg-surface-container-highest rounded-lg text-primary-container">
                    <span className="material-symbols-outlined text-[24px]">stadia_controller</span>
                  </span>
                  <span className="font-label-mono-sm text-label-mono-sm text-outline">GAMEPLAY DYNAMICS</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mt-space-sm">Kinetic Mechanics &amp; Physics</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Translating real-world martial arts reflex, momentum, and impact balance directly into virtual player controllers, state machines, and tight 2D/3D platforming engines.
                </p>
              </div>
              <div className="flex items-center gap-space-xs mt-space-md pt-space-xs text-primary-container">
                <span className="material-symbols-outlined text-[16px]">bolt</span>
                <span className="font-label-mono-sm text-label-mono-sm">Game Jam Tested • Fast Prototyping</span>
              </div>
            </div>

            {/* Bento 3: Multi-Language Tech Stack Matrix */}
            <div className="flex flex-col justify-between p-space-lg bg-surface-container rounded-xl shadow-md hover:bg-surface-container-high transition-all">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="p-space-xs bg-surface-container-highest rounded-lg text-secondary-fixed">
                    <span className="material-symbols-outlined text-[24px]">data_object</span>
                  </span>
                  <span className="font-label-mono-sm text-label-mono-sm text-outline">STACK ECOSYSTEM</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mt-space-sm">Languages &amp; Runtimes</h3>
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  <span className="px-space-sm py-0.5 bg-surface-container-highest text-secondary font-label-mono-sm text-label-mono-sm rounded">C# (Unity/.NET)</span>
                  <span className="px-space-sm py-0.5 bg-surface-container-highest text-primary-container font-label-mono-sm text-label-mono-sm rounded">GDScript</span>
                  <span className="px-space-sm py-0.5 bg-surface-container-highest text-tertiary font-label-mono-sm text-label-mono-sm rounded">Python</span>
                  <span className="px-space-sm py-0.5 bg-surface-container-highest text-secondary-fixed font-label-mono-sm text-label-mono-sm rounded">TypeScript / Tailwind</span>
                  <span className="px-space-sm py-0.5 bg-surface-container-highest text-on-surface font-label-mono-sm text-label-mono-sm rounded">Git &amp; GitHub</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-space-md pt-space-xs">
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">Code Purity</span>
                <span className="font-label-mono-sm text-label-mono-sm text-primary font-bold">100% Modularity</span>
              </div>
            </div>
          </div>

          {/* FEATURED GAMES & PROJECTS SHOWCASE */}
          <div className="flex flex-col gap-space-lg pt-space-xl" id="featured-projects">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-xs">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs text-primary-container">
                  <span className="material-symbols-outlined text-[20px]">joystick</span>
                  <span className="font-label-mono-sm text-label-mono-sm uppercase tracking-widest">DEPLOYED GAME CREATIONS</span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-primary">Featured Playable Quests</h2>
              </div>
              <div className="flex items-center gap-space-md">
                <a
                  className="font-label-mono-lg text-label-mono-lg text-secondary hover:text-primary transition-colors flex items-center gap-space-xs"
                  href="https://hikam-gamedev.itch.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>View All on itch.io</span>
                  <span className="material-symbols-outlined text-[16px]">launch</span>
                </a>
              </div>
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
              {/* Card 1: Striker Protocol: Zero */}
              <div className="flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_24px_rgba(0,255,157,0.15)] transition-all group">
                <div className="relative aspect-video w-full overflow-hidden bg-surface-container-highest">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Cyberpunk high-octane indie combat action video game"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk_HgJAFcTiisw9eqIYWNv4nuLLHL1bmN4zim9tBxmOpi0q6dwdaaPNXHHXN4lB01v1w78hwdSq0F7VmrRCGrhbLPR6aZSZp5ML-Nfhv7nt9ovY767nGL6ZMzPxhv17IA0pkhBa7rdDqyovVSvpT5VTpplMKjAm6bCOQdTmaQXEaQ5f9iQ69fJffjdRLVGyW1jdmQT637pq_78R1iQ42VW9e-GgKayAQNJNSGqzdDs"
                  />
                  <div className="absolute top-3 left-3 px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur rounded font-label-mono-sm text-label-mono-sm text-primary-container">
                    GODOT 4 ENGINE
                  </div>
                  <div className="absolute top-3 right-3 px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur rounded font-label-mono-sm text-label-mono-sm text-secondary">
                    WEB DEMO
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-space-md justify-between gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-label-mono-sm text-label-mono-sm text-outline">ACTION PLATFORMER // 2025</span>
                    <h3 className="font-headline-md text-headline-md text-primary">Striker Protocol: Zero</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      High-speed reflex combat game emphasizing precise mid-air dodge cancels, wall-jump combos, and fluid timing mechanics built with custom physics controllers.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <div className="flex gap-1">
                      <span className="px-space-xs py-0.5 bg-surface-container-high text-on-surface font-label-mono-sm text-[11px] rounded">GDScript</span>
                      <span className="px-space-xs py-0.5 bg-surface-container-high text-on-surface font-label-mono-sm text-[11px] rounded">2D Physics</span>
                    </div>
                    <a
                      className="px-space-md py-space-xs bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase rounded-lg hover:opacity-90 transition-opacity flex items-center gap-1 shadow-sm"
                      href="https://hikam-gamedev.itch.io"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>PLAY</span>
                      <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Viska Chronicles: Lab Quest */}
              <div className="flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_24px_rgba(0,255,157,0.15)] transition-all group">
                <div className="relative aspect-video w-full overflow-hidden bg-surface-container-highest">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Top down pixel art RPG simulation of SMKN 6 Surakarta"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD18Vj9zFIoFpuVeTp-7jrcymiacwEqz7mBLHz-pdWbqlsApsF_-nEIH9esi9h6AsQPrEsZk6eBjNYWjjQw6LGelJNdiP384aAVyhJ7-ek8p2jbofKd2ksxkQfpHM9N9iJakcpA4mEGOkp_-NnKWe-89jjYAwYFD2iqOsX7sOjKUAbrpreExZMxpOmbBjOkoUFidclZiUxcAoGxpCodG0TduceUuuTuNTLmBFIMaueq"
                  />
                  <div className="absolute top-3 left-3 px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur rounded font-label-mono-sm text-label-mono-sm text-secondary-fixed">
                    UNITY 2D // C#
                  </div>
                  <div className="absolute top-3 right-3 px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur rounded font-label-mono-sm text-label-mono-sm text-primary">
                    SCHOOL QUEST
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-space-md justify-between gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-label-mono-sm text-label-mono-sm text-outline">PPLG CLASS ASSIGNMENT // 2024</span>
                    <h3 className="font-headline-md text-headline-md text-primary">Viska Chronicles: Lab Quest</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Narrative adventure game set inside SMKN 6 Surakarta. Solve logic gate puzzles, debug simulated syntax errors, and unlock the school server room.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <div className="flex gap-1">
                      <span className="px-space-xs py-0.5 bg-surface-container-high text-on-surface font-label-mono-sm text-[11px] rounded">C#</span>
                      <span className="px-space-xs py-0.5 bg-surface-container-high text-on-surface font-label-mono-sm text-[11px] rounded">Dialogue Tree</span>
                    </div>
                    <button
                      onClick={() => onNavigate('games-and-projects')}
                      className="px-space-md py-space-xs bg-surface-container-highest text-secondary font-headline-sm text-headline-sm uppercase rounded-lg hover:bg-surface-bright transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>DETAILS</span>
                      <span className="material-symbols-outlined text-[16px]">visibility</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3: Resonance Overload */}
              <div className="flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_24px_rgba(0,255,157,0.15)] transition-all group">
                <div className="relative aspect-video w-full overflow-hidden bg-surface-container-highest">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Minimalist abstract rhythm action indie video game"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuvnvLCd0WEs9pUCAv9ZdmtIEC1yP9t9nZISm-MwV1h81b59Km-vCo6hqdeha3K-XCP-o4wu_mxhhtbnijBwd3nWoNxKfA-PWVYjb5c8xWgQR-EVvHlCYFgJHMvzJtKoJQ58cXjQFtdf30jmQLNH7dSkU7dF_MpZews1Ufvr_0pSlyzNJo0b30e2t7bKgSz8b0gUXzG7PIbevO8Ki9YIiTGeHPbwJYfvSsJPgouXjX"
                  />
                  <div className="absolute top-3 left-3 px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur rounded font-label-mono-sm text-label-mono-sm text-tertiary-fixed-dim">
                    GAME JAM 48H
                  </div>
                  <div className="absolute top-3 right-3 px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur rounded font-label-mono-sm text-label-mono-sm text-primary">
                    PROTOTYPE
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-space-md justify-between gap-space-md">
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-label-mono-sm text-label-mono-sm text-outline">GLOBAL GAME JAM ENTRY // 2024</span>
                    <h3 className="font-headline-md text-headline-md text-primary">Resonance Overload</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Experimental rhythm-synced puzzle bullet hell developed in 48 hours. Dynamic BPM scaling with procedural sound waveform visualization.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <div className="flex gap-1">
                      <span className="px-space-xs py-0.5 bg-surface-container-high text-on-surface font-label-mono-sm text-[11px] rounded">Audio DSP</span>
                      <span className="px-space-xs py-0.5 bg-surface-container-high text-on-surface font-label-mono-sm text-[11px] rounded">Procedural</span>
                    </div>
                    <a
                      className="px-space-md py-space-xs bg-surface-container-highest text-secondary font-headline-sm text-headline-sm uppercase rounded-lg hover:bg-surface-bright transition-all flex items-center gap-1"
                      href="https://hikam-gamedev.itch.io"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>PLAY DEMO</span>
                      <span className="material-symbols-outlined text-[16px]">smart_display</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GITHUB CONTRIBUTION ACTIVITY SECTION (D3.JS) */}
          <div className="flex flex-col gap-space-sm pt-space-lg">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs">
              <div>
                <div className="flex items-center gap-space-xs text-secondary font-label-mono-sm text-label-mono-sm uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[16px]">monitoring</span>
                  CONTINUOUS DEPLOYMENT &amp; COMMITS
                </div>
                <h2 className="font-headline-xl text-headline-xl text-primary">
                  Coding Activity &amp; Git Rhythm
                </h2>
              </div>
              <button
                onClick={() => onNavigate('skills-and-tech-stack')}
                className="font-label-mono-sm text-label-mono-sm text-primary-container hover:underline flex items-center gap-1 cursor-pointer w-fit"
              >
                <span>View Full Tech Stack Rigs</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
            <GitHubCalendar username="SlimeHorrorGuest666" />
          </div>

          {/* INTERACTIVE DEBUG CONSOLE / CONTACT TERMINAL */}
          <div className="mt-space-lg p-space-lg bg-surface-container-lowest rounded-xl shadow-2xl flex flex-col gap-space-md">
            <div className="flex items-center justify-between pb-space-xs">
              <div className="flex items-center gap-space-sm">
                <span className="w-3 h-3 rounded-full bg-error"></span>
                <span className="w-3 h-3 rounded-full bg-secondary-container"></span>
                <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                <span className="font-label-mono-sm text-label-mono-sm text-outline ml-space-xs">bash - hikam@smkn6surakarta:~/dev</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <button
                  onClick={handleCopy}
                  className="px-space-sm py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-secondary hover:text-primary-container transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span>{copied ? 'Copied JSON!' : 'Copy JSON'}</span>
                </button>
                <span className="font-label-mono-sm text-label-mono-sm text-primary-fixed">TCP 8080 • ONLINE</span>
              </div>
            </div>

            <div className="flex flex-col gap-space-xs font-code-snippet text-code-snippet text-on-surface">
              <p className="text-on-surface-variant">
                <span className="text-primary-container font-bold">visitor@hikam-dev:~$</span> cat about_me.json
              </p>
              <pre className="text-secondary-fixed bg-surface-container-low p-space-md rounded-lg overflow-x-auto text-[13px] leading-relaxed font-code-snippet">
                <code>{jsonSnippet}</code>
              </pre>
              <p className="text-on-surface-variant mt-space-xs">
                <span className="text-primary-container font-bold">visitor@hikam-dev:~$</span> ping collaborate --school=&quot;SMKN 6 SURAKARTA&quot;
              </p>
              <p className="text-primary-fixed">64 bytes from hikam.dev: icmp_seq=1 ttl=64 time=0.038 ms (Ready for next game quest!)</p>
            </div>

            {/* Terminal Quick Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
              <div className="flex items-center gap-space-xs text-outline font-label-mono-sm text-label-mono-sm">
                <span className="material-symbols-outlined text-[16px] text-primary-container">terminal</span>
                <span>Execute connection via itch.io or SMK Negeri 6 Surakarta department.</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <button
                  onClick={() => onNavigate('itch-io-and-contact')}
                  className="px-space-md py-space-xs bg-primary-container text-on-primary-container font-headline-sm text-headline-sm rounded-lg hover:shadow-[0_0_15px_rgba(0,255,157,0.4)] transition-all flex items-center gap-space-xs cursor-pointer"
                >
                  <span>Dispatch Message</span>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </button>
                <a
                  className="px-space-md py-space-xs bg-surface-container-high hover:bg-surface-bright text-primary font-headline-sm text-headline-sm rounded-lg transition-colors flex items-center gap-space-xs"
                  href="https://hikam-gamedev.itch.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Visit itch.io Hub</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
