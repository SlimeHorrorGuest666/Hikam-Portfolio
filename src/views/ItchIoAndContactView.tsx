import React, { useState } from 'react';

export const ItchIoAndContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    callerName: '',
    callerComms: '',
    collabType: 'game-jam',
    messageBody: '',
  });
  const [transmitting, setTransmitting] = useState(false);
  const [transmitted, setTransmitted] = useState(false);
  const [discordCopied, setDiscordCopied] = useState(false);

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTransmitting(true);

    setTimeout(() => {
      setTransmitting(false);
      setTransmitted(true);
      setFormData({
        callerName: '',
        callerComms: '',
        collabType: 'game-jam',
        messageBody: '',
      });

      setTimeout(() => {
        setTransmitted(false);
      }, 5000);
    }, 1200);
  };

  const copyDiscord = () => {
    navigator.clipboard.writeText('hikam.gamedev');
    setDiscordCopied(true);
    setTimeout(() => setDiscordCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Subtle Background Grid/Atmosphere Overlay */}
      <div className="relative w-full overflow-hidden">
        {/* Ambient Cyber Glows */}
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-[45%] right-[-100px] w-[450px] h-[450px] bg-secondary-container/10 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-gutter py-space-xl flex flex-col gap-space-xl">
          {/* Section Header with Technical HUD Metadata */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-md">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-primary-container tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
                SYS_LINK: NET_ONLINE // NODE_PORTAL_04
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">
                ITCH.IO HUB &amp; TRANSMISSION
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Centralized hub for indie releases, game jam alliances, internship (PKL) requests, and direct comms with Hikam — XI PPLG SMKN 6 Surakarta.
              </p>
            </div>

            {/* Live Station Badge */}
            <div className="flex items-center gap-space-sm bg-surface-container-high px-space-md py-space-sm rounded-lg shadow-md shrink-0">
              <span className="material-symbols-outlined text-secondary text-[20px]">radar</span>
              <div className="flex flex-col">
                <span className="font-label-mono-sm text-label-mono-sm text-secondary uppercase">
                  FREQ: 2.4 GHz [STABLE]
                </span>
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                  SURAKARTA (SOLO), ID
                </span>
              </div>
            </div>
          </div>

          {/* SECTION 1: itch.io Developer Headquarters Bento Banner */}
          <section className="relative bg-surface-container-low rounded-xl p-space-lg md:p-space-xl shadow-xl overflow-hidden flex flex-col lg:flex-row gap-space-xl items-stretch">
            {/* Scanline subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/5 via-transparent to-secondary-container/5 pointer-events-none"></div>

            {/* Main Embed Card Showcase */}
            <div className="flex-1 flex flex-col justify-between gap-space-lg relative z-10">
              <div className="flex flex-col gap-space-sm">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <span className="px-space-sm py-space-xs bg-surface-container text-primary-container font-label-mono-sm text-label-mono-sm rounded-lg uppercase tracking-wider flex items-center gap-space-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> LIVE DEPLOYMENT
                  </span>
                  <span className="px-space-sm py-space-xs bg-surface-container-highest text-secondary font-label-mono-sm text-label-mono-sm rounded-lg">
                    itch.io/profile/verified
                  </span>
                  <span className="px-space-sm py-space-xs bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-label-mono-sm rounded-lg">
                    ENGINE: GODOT • UNITY • MONOGAME
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  hikam-gamedev.itch.io
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                  Repository of dynamic prototypes, micro-arcade experiments, 2D platformers, and Indonesian folklore jam submissions engineered during vocational study at SMKN 6 Surakarta.
                </p>
              </div>

              {/* Milestones & Stats Counter Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
                <div className="bg-surface-container p-space-md rounded-lg flex flex-col justify-center">
                  <span className="font-headline-md text-headline-md text-primary-container leading-none">1,420+</span>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant mt-space-xs uppercase">
                    Downloads
                  </span>
                </div>
                <div className="bg-surface-container p-space-md rounded-lg flex flex-col justify-center">
                  <span className="font-headline-md text-headline-md text-secondary leading-none">380+</span>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant mt-space-xs uppercase">
                    Followers
                  </span>
                </div>
                <div className="bg-surface-container p-space-md rounded-lg flex flex-col justify-center">
                  <span className="font-headline-md text-headline-md text-primary leading-none">6 Jams</span>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant mt-space-xs uppercase">
                    Badges Earned
                  </span>
                </div>
                <div className="bg-surface-container p-space-md rounded-lg flex flex-col justify-center">
                  <span className="font-headline-md text-headline-md text-on-surface leading-none">4.9 / 5</span>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant mt-space-xs uppercase">
                    Avg Rating
                  </span>
                </div>
              </div>

              {/* Direct CTA and Profile Launch */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <a
                  className="px-space-lg py-space-sm bg-primary-container text-on-primary-container font-headline-sm text-headline-sm rounded-lg shadow-[0_0_20px_rgba(0,255,157,0.35)] hover:shadow-[0_0_30px_rgba(0,255,157,0.6)] hover:-translate-y-0.5 transition-all flex items-center gap-space-xs uppercase"
                  href="https://hikam-gamedev.itch.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">sports_esports</span>
                  Visit My itch.io Profile
                </a>
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[16px] text-primary-container">verified</span>
                  Fast Mirror • HTML5 Browser Ready
                </span>
              </div>
            </div>

            {/* Interactive / Rich Visual Showcase Preview Column */}
            <div className="w-full lg:w-96 flex flex-col gap-space-md shrink-0 justify-between">
              <div className="relative bg-surface-container rounded-lg overflow-hidden p-space-md flex flex-col gap-space-sm shadow-md group">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span className="font-label-mono-sm text-label-mono-sm uppercase text-secondary">
                    LATEST RELEASE PREVIEW
                  </span>
                  <span className="font-label-mono-sm text-label-mono-sm text-primary-container">PLAYABLE</span>
                </div>
                <div className="relative w-full h-44 rounded-lg overflow-hidden bg-surface-container-high">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Dark retro cyberpunk pixel art indie game action scene"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM46L9ENZXyo4CT1w0YvYAIaB-ah9e1E46P9iVysIOmio6iC83wSqdanEICuXHCfVin1bcDo9oV8pGSDRFmKpgmSttQjR8dcUt4VxIA_FFXiDbltJFwifXce7hPIltnDfikxR0GgrzirzVC4wIYGj0ffheTVpeCOJP3LJDD3OTfNZov5CaireK6s9E0fpo3-hE29OoLK2Cav8wJ-dFBajBxNX5Nly7FAWrOHPpx9IN"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent flex items-end p-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                      <span className="font-label-mono-sm text-label-mono-sm text-primary font-semibold">
                        KERATON RUNNER 2099
                      </span>
                    </div>
                  </div>
                </div>

                {/* Game Jam Badges Award Strip */}
                <div className="flex flex-col gap-space-xs pt-space-xs">
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase">
                    JAM CREDENTIALS
                  </span>
                  <div className="flex flex-wrap gap-space-xs">
                    <span className="px-space-sm py-space-xs bg-surface-container-highest text-secondary font-label-mono-sm text-label-mono-sm rounded-lg flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">military_tech</span> GMTK 2024 Top 15%
                    </span>
                    <span className="px-space-sm py-space-xs bg-surface-container-highest text-on-surface font-label-mono-sm text-label-mono-sm rounded-lg flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">star</span> Ludum Dare 55
                    </span>
                    <span className="px-space-sm py-space-xs bg-surface-container-highest text-primary-container font-label-mono-sm text-label-mono-sm rounded-lg flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">emoji_events</span> SMKN 6 Expo Winner
                    </span>
                  </div>
                </div>
              </div>

              {/* Live Activity Bar Chart Visual SVG */}
              <div className="bg-surface-container rounded-lg p-space-md flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase">
                    WEEKLY PLAY METRICS
                  </span>
                  <span className="font-label-mono-sm text-label-mono-sm text-primary-container">+24.8% AVG</span>
                </div>
                {/* Dynamic Mini SVG Sparkline Bars */}
                <svg className="w-full h-10 text-primary-container" preserveAspectRatio="none" viewBox="0 0 100 24">
                  <rect fill="currentColor" height="10" opacity="0.3" rx="1" width="8" x="2" y="14"></rect>
                  <rect fill="currentColor" height="16" opacity="0.45" rx="1" width="8" x="16" y="8"></rect>
                  <rect fill="currentColor" height="13" opacity="0.4" rx="1" width="8" x="30" y="11"></rect>
                  <rect fill="currentColor" height="19" opacity="0.65" rx="1" width="8" x="44" y="5"></rect>
                  <rect fill="currentColor" height="15" opacity="0.5" rx="1" width="8" x="58" y="9"></rect>
                  <rect fill="currentColor" height="21" opacity="0.85" rx="1" width="8" x="72" y="3"></rect>
                  <rect fill="currentColor" height="23" opacity="1.0" rx="1" width="8" x="86" y="1"></rect>
                </svg>
              </div>
            </div>
          </section>

          {/* SECTION 2: Collaboration & Game Jam Recruitment */}
          <section className="flex flex-col gap-space-lg">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-secondary uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">groups</span> SQUAD RECRUITMENT • MULTIPLAYER PROTOCOL
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary">COLLABORATION ROSTER</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Currently assembling teams for upcoming global game jams, creative vocational initiatives, and tech sprints. Bring your craft to the table.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {/* Card 1: Pixel & 3D Artists */}
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-lg flex flex-col justify-between gap-space-md hover:-translate-y-1 transition-all">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-container">
                    <span className="material-symbols-outlined text-[24px]">palette</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">2D / Pixel &amp; 3D Artists</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Seeking sprite animators, tilemap artists, and low-poly 3D modelers for stylized cyber/retro-futuristic arcade game engines.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-xs">
                  <span className="px-space-sm py-space-xs bg-surface-container text-primary-container font-label-mono-sm text-label-mono-sm rounded-lg">
                    OPEN SLOT
                  </span>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">JAM TIER</span>
                </div>
              </div>

              {/* Card 2: Sound & Chiptune Composers */}
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-lg flex flex-col justify-between gap-space-md hover:-translate-y-1 transition-all">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[24px]">graphic_eq</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Audio &amp; OST Designers</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Looking for chiptune composers, dark synthwave producers, and impact SFX creators using FMOD, Wwise, or procedural trackers.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-xs">
                  <span className="px-space-sm py-space-xs bg-surface-container text-secondary font-label-mono-sm text-label-mono-sm rounded-lg">
                    ACTIVE HUNT
                  </span>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">INDIE OST</span>
                </div>
              </div>

              {/* Card 3: Game Jam Teammates */}
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-lg flex flex-col justify-between gap-space-md hover:-translate-y-1 transition-all">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary-fixed">
                    <span className="material-symbols-outlined text-[24px]">timer</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Game Jam Co-Devs</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Partner programmers for 48h/72h jams (GMTK, Brackeys, Global Game Jam). Mechanics prototyping, level scripting, and QA.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-xs">
                  <span className="px-space-sm py-space-xs bg-surface-container text-primary-fixed font-label-mono-sm text-label-mono-sm rounded-lg">
                    CO-OP READY
                  </span>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">48H CYCLES</span>
                </div>
              </div>

              {/* Card 4: PKL & Vocational Inquiries */}
              <div className="bg-surface-container-low p-space-lg rounded-xl shadow-lg flex flex-col justify-between gap-space-md hover:-translate-y-1 transition-all">
                <div className="flex flex-col gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary-fixed">
                    <span className="material-symbols-outlined text-[24px]">school</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">PKL / Industry Internship</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Official Praktik Kerja Lapangan (PKL) partnerships for XI PPLG SMKN 6 Surakarta. Open to studios and IT game consultancies.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-xs">
                  <span className="px-space-sm py-space-xs bg-surface-container text-secondary-fixed font-label-mono-sm text-label-mono-sm rounded-lg">
                    FORMAL PATH
                  </span>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">2025/2026</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3 & 4: Contact Console & Transmission Links */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            {/* Contact Form Card (7 Cols) */}
            <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-lg md:p-space-xl shadow-xl flex flex-col gap-space-lg relative">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-primary-container uppercase">
                  <span className="material-symbols-outlined text-[16px]">terminal</span> COMMS_BUFFER // TRANSMIT DISPATCH
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary">SEND SECURE MESSAGE</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Submit your inquiry directly to my development workspace. Whether it is a project invite or game feedback, all packets get reviewed.
                </p>
              </div>

              <form className="flex flex-col gap-space-md" onSubmit={handleTransmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  {/* Name Input */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase" htmlFor="callerName">
                      Agent / Alias *
                    </label>
                    <input
                      className="w-full bg-surface-container px-space-md py-space-sm rounded-lg text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary-container transition-all"
                      id="callerName"
                      placeholder="e.g. Renaldi / PixelWizard"
                      required
                      type="text"
                      value={formData.callerName}
                      onChange={(e) => setFormData({ ...formData, callerName: e.target.value })}
                    />
                  </div>

                  {/* Contact Handle */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase" htmlFor="callerComms">
                      Email / Discord Tag *
                    </label>
                    <input
                      className="w-full bg-surface-container px-space-md py-space-sm rounded-lg text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary-container transition-all"
                      id="callerComms"
                      placeholder="user#1337 or handle@domain.com"
                      required
                      type="text"
                      value={formData.callerComms}
                      onChange={(e) => setFormData({ ...formData, callerComms: e.target.value })}
                    />
                  </div>
                </div>

                {/* Collaboration Type Selector */}
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase" htmlFor="collabType">
                    Transmission Purpose *
                  </label>
                  <select
                    className="w-full bg-surface-container px-space-md py-space-sm rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-primary-container transition-all"
                    id="collabType"
                    value={formData.collabType}
                    onChange={(e) => setFormData({ ...formData, collabType: e.target.value })}
                  >
                    <option value="game-jam">Game Jam Recruitment / Co-op</option>
                    <option value="pkl">PKL / Vocational Internship Opportunity</option>
                    <option value="school-collab">SMKN 6 Surakarta School Project Collaboration</option>
                    <option value="itch-feedback">itch.io Game Playtesting &amp; Feedback</option>
                    <option value="general">General Inquiries &amp; Tech Chat</option>
                  </select>
                </div>

                {/* Message Body */}
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase" htmlFor="messageBody">
                    Transmission Data Payload *
                  </label>
                  <textarea
                    className="w-full bg-surface-container px-space-md py-space-sm rounded-lg text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary-container transition-all"
                    id="messageBody"
                    placeholder="Outline game concepts, jam deadlines, role requirements, or general hello..."
                    required
                    rows={4}
                    value={formData.messageBody}
                    onChange={(e) => setFormData({ ...formData, messageBody: e.target.value })}
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                  <div className="flex items-center gap-space-xs text-on-surface-variant font-label-mono-sm text-label-mono-sm">
                    <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                    <span>Latency: ~12ms • SSL/TLS End-to-End</span>
                  </div>
                  <button
                    className="w-full sm:w-auto px-space-xl py-space-sm bg-primary-container text-on-primary-container font-headline-sm text-headline-sm rounded-lg shadow-[0_0_15px_rgba(0,255,157,0.3)] hover:shadow-[0_0_25px_rgba(0,255,157,0.5)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-space-xs uppercase cursor-pointer disabled:opacity-50"
                    disabled={transmitting}
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {transmitting ? 'sync' : 'send'}
                    </span>
                    <span>{transmitting ? 'Encrypting & Transmitting...' : 'Transmit Packet'}</span>
                  </button>
                </div>

                {/* Feedback Notification Banner */}
                {transmitted && (
                  <div className="bg-surface-container px-space-md py-space-sm rounded-lg flex items-center gap-space-sm border border-primary-container/40 animate-in fade-in">
                    <span className="material-symbols-outlined text-primary-container text-[20px]">check_circle</span>
                    <span className="font-label-mono-sm text-label-mono-sm text-primary">
                      TRANSMISSION CONFIRMED: Packet dispatched to Hikam&apos;s queue.
                    </span>
                  </div>
                )}
              </form>
            </div>

            {/* Direct Transmission Links & Social Stack (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              {/* Channels Directory */}
              <div className="bg-surface-container-low rounded-xl p-space-lg shadow-xl flex flex-col gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-secondary uppercase">
                    <span className="material-symbols-outlined text-[16px]">share</span> DIRECT NODES
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary">COMMUNICATION CHANNELS</h3>
                </div>

                <div className="flex flex-col gap-space-sm">
                  {/* itch.io */}
                  <a
                    className="bg-surface-container hover:bg-surface-container-high p-space-md rounded-lg flex items-center justify-between transition-all group"
                    href="https://hikam-gamedev.itch.io"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-space-md">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container">
                        <span className="material-symbols-outlined text-[18px]">sports_esports</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                          itch.io Channel
                        </span>
                        <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                          hikam-gamedev.itch.io
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-container transition-colors">
                      arrow_outward
                    </span>
                  </a>

                  {/* GitHub */}
                  <a
                    className="bg-surface-container hover:bg-surface-container-high p-space-md rounded-lg flex items-center justify-between transition-all group"
                    href="https://github.com/SlimeHorrorGuest666"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-space-md">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined text-[18px]">code</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                          GitHub Repository
                        </span>
                        <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                          @SlimeHorrorGuest666
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors">
                      arrow_outward
                    </span>
                  </a>

                  {/* Discord Handle */}
                  <div className="bg-surface-container p-space-md rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-space-md">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary-fixed-dim">
                        <span className="material-symbols-outlined text-[18px]">forum</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm text-on-surface">Discord Handle</span>
                        <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                          hikam.gamedev (DM Open)
                        </span>
                      </div>
                    </div>
                    <button
                      className="px-space-sm py-space-xs bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-mono-sm text-label-mono-sm rounded-lg transition-colors cursor-pointer"
                      onClick={copyDiscord}
                    >
                      {discordCopied ? 'COPIED!' : 'COPY'}
                    </button>
                  </div>

                  {/* Instagram / Social */}
                  <a
                    className="bg-surface-container hover:bg-surface-container-high p-space-md rounded-lg flex items-center justify-between transition-all group"
                    href="https://www.instagram.com/hikamhoror5/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="flex items-center gap-space-md">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary-fixed">
                        <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                          Instagram Devlogs
                        </span>
                        <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                          @hikamhoror5
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary-fixed transition-colors">
                      arrow_outward
                    </span>
                  </a>

                  {/* Student Academic Email */}
                  <div className="bg-surface-container p-space-md rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-space-md">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-fixed">
                        <span className="material-symbols-outlined text-[18px]">school</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm text-on-surface">SMKN 6 Official Edu</span>
                        <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                          pplg@smkn6surakarta.sch.id
                        </span>
                      </div>
                    </div>
                    <a
                      className="px-space-sm py-space-xs bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-mono-sm text-label-mono-sm rounded-lg transition-colors"
                      href="mailto:pplg@smkn6surakarta.sch.id"
                    >
                      MAIL
                    </a>
                  </div>
                </div>
              </div>

              {/* SECTION 5: Location Info / Surakarta (Solo), Central Java */}
              <div className="bg-surface-container-low rounded-xl p-space-lg shadow-xl flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-primary-container uppercase">
                    <span className="material-symbols-outlined text-[16px]">pin_drop</span> BASE OF OPERATIONS
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">UTC +07:00 (WIB)</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-md text-headline-md text-primary">Surakarta (Solo), Central Java</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    SMK Negeri 6 Surakarta • Jl. Tirtonadi No. 19, Manahan, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57139, Indonesia.
                  </p>
                </div>

                {/* Stylized Google Maps Static Trigger Container */}
                <div
                  className="w-full h-40 bg-cover bg-center rounded-lg shadow-inner relative overflow-hidden flex items-end p-space-sm"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcJMF0xvK9B8rBHIVsCREsevO9ovsHdPW6COzGA08TibK3z3JKbUe1w38arE5HJp-Iqy8NWcnVhSo9J4fEun-MVeTdE1_vs9Q87C3gjJGcTFdK0hSg48I7upcVvopxonc9bExRAzeVzqKJSAOcG3VD9650H0WQJelNrYQBj3wy39DgZutzX89t9P3sO5ZohymhN8Mk_ZZHR0M-gLWoDdm484wsDTA7jK0FVHypfAgK')`,
                  }}
                >
                  <div className="bg-surface-container-lowest/85 backdrop-blur-md px-space-md py-space-xs rounded-lg flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[16px] text-primary-container">location_on</span>
                    <span className="font-label-mono-sm text-label-mono-sm text-on-surface">7°33&apos;18.2&quot;S 110°48&apos;42.1&quot;E</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Terminal Status Log Ticker */}
          <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant border border-surface-variant/30">
            <div className="flex items-center gap-space-sm">
              <span className="font-label-mono-sm text-label-mono-sm text-primary-container bg-surface-container px-space-sm py-space-xs rounded">
                HIKAM-CONSOLE
              </span>
              <span className="font-code-snippet text-code-snippet text-outline truncate">
                &gt; ping itch.io/hikam-gamedev [OK 28ms] • listening on port: 8080
              </span>
            </div>
            <div className="flex items-center gap-space-md shrink-0">
              <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">BUILD: v2.4-RELEASE</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span className="font-label-mono-sm text-label-mono-sm text-primary">ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
