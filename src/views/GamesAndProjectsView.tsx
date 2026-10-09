import React, { useState } from 'react';
import { Project } from '../types.ts';

const projects: Project[] = [
  {
    id: 'modal-shadow-strike',
    category: 'combat platformer jam',
    badge: 'LVL. 01 HERO',
    badgeBg: 'bg-primary-container text-on-primary-container',
    badgeText: 'text-on-primary-container font-semibold',
    title: 'Shadow Strike: Legacy',
    version: 'BUILD: v1.1.4 STABLE',
    versionColor: 'text-secondary',
    imgUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDQkTDDl0bF-k8-DN1JpgK66c2hw9jB02YrTYbmJWzPitBguY6Nkps16KTmgUo4cVk2pi-uSIDe-XG9U8gUPlih4S1L2xs82O9dUzTm9xJxq3U3vMs_rStCKugA6mTH-pxqsv4YQU1Ye04qAjXO55qoWDQTkmVKydebo2Z_5tT61XQvcZWVWBsdrjY-unJ_hTMBYngyP3BsetQ8akKTPKlkhQfuRO-n0CDx8UNgx6Ul',
    imgAlt: 'A stylized high action cyberpunk 2D platformer gameplay scene',
    platform: 'WebGL • Windows',
    fps: '60 FPS LOCKED',
    tags: ['Godot 4.3', 'Action Combat', 'Game Jam 2024'],
    description:
      'High-speed martial arts 2D action platformer engineered with frame-accurate hitbox systems, aerial juggle mechanics, and hyper-responsive jump-kick cancels.',
    highlights: [
      'Custom state machine with 8-way aerial dash physics and jump-kick rebound momentum.',
      'Kinetic shake matrix and procedural particle sparks on impact buffers.',
      'Scored Top 15 in National Indie Jam mechanical polish category.',
    ],
    controls: [
      { key: '[A][D]', label: 'MOVE' },
      { key: '[SPACE]', label: 'JUMP' },
      { key: '[J]', label: 'STRIKE', color: 'text-primary-container' },
      { key: '[K]', label: 'FLYING KICK', color: 'text-secondary' },
    ],
    devlog: {
      date: '2024-11-20',
      title: 'Flying Kick Physics Overhaul',
      notes: [
        'Implemented horizontal raycast collision prediction during kick animation frame 4 to 8.',
        'Added 120ms freeze-frame impact buffer on direct enemy contact to enhance hit-stop crunch.',
        'Resolved edge-case bug where wall-jumping right after attack canceled gravity scale.',
      ],
      status: 'Performance test: 60 FPS verified across Chrome/Firefox WebGL test suite.',
    },
  },
  {
    id: 'modal-viska-quest',
    category: 'school prototypes',
    badge: 'SMKN 6 EXPO',
    badgeBg: 'bg-secondary-container text-on-secondary-container',
    badgeText: 'text-on-secondary-container font-semibold',
    title: 'Viska Cyber Quest',
    version: 'EXHIBITION VER. 2.0',
    versionColor: 'text-primary-fixed-dim',
    imgUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBB53gvemlwN98wYcfLrl2pD_xGq_F0QDx98kLjdGOnUzYE0Tvp0tjHn8SHxYeRzPMgP8ENzqfkQVsYEyzXNctzE__N-aIPQlMj_IB-hdrjNsW1NaFgq5FtNtIe4CLr5iE7tf8w2AkXZJzk1ZsHWAZhKW69tD5R1sP4WfeYtYG_nqzd-t7vHP7NP5CSPKO6hM0cuvNAb8XoUv8iI1ND4Yhm_928b-TC6TFnb_usF0xY',
    imgAlt: 'A futuristic cyberpunk representation of SMK Negeri 6 Surakarta campus courtyard',
    platform: 'Browser Playable',
    fps: 'EXPO SPECIAL',
    tags: ['Unity 2022 LTS (C#)', 'Isometric Puzzle', 'XI PPLG Showcase'],
    description:
      'Cyberpunk-themed puzzle adventure spotlighting the landmark workshops and software labs of SMK Negeri 6 Surakarta. Built for the annual school technology showcase.',
    highlights: [
      'Node-wiring logic puzzles reflecting vocational IT curriculum algorithms.',
      'Bespoke dialogue narrative tree featuring school mentors and student life.',
      'Optimized WebGL bundle under 38MB for lightning fast lab workstation load times.',
    ],
    controls: [
      { key: '[W][A][S][D]', label: 'WALK' },
      { key: '[E]', label: 'HACK / INTERACT', color: 'text-secondary font-semibold' },
      { key: '[TAB]', label: 'MAP' },
    ],
    devlog: {
      date: '2024-10-12',
      title: 'SMKN 6 Exhibition Build',
      notes: [
        'Built custom isometric grid movement using Unity Tilemap package and custom sorting layers.',
        'Implemented terminal hacking mini-game where players rearrange C# logic blocks to open school gates.',
        'Compressed audio tracks to reduce WebGL initial asset bundle by 42%.',
      ],
      status: 'Feedback: Received 140+ student plays during Vocational Exhibition Day.',
    },
  },
  {
    id: 'modal-acrobat-runner',
    category: 'platformer prototypes',
    badge: 'PHYSICS LAB',
    badgeBg: 'bg-surface-container text-tertiary-fixed-dim',
    badgeText: 'text-tertiary-fixed-dim font-semibold',
    title: 'Acrobat Runner 2D',
    version: 'BUILD: v0.9.1 PROTOTYPE',
    versionColor: 'text-on-surface-variant',
    imgUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAK5lxCUWFp8dEPdYVApW6odbNQUkfrObrqjM9nQGAIi3Ihw0jbivDXu-iemKWFseoHsSRVLDXJwv8e3vAMIG854iEdzHjbOgyra-SJNJDhrsomeo5tFeSPnoHbXUe65JsCvurBcFDFUermpI-I8D4nQsRCB06KEZZrPJR4AWYVpUHyBhQwwEZFwtOddxWcLNVs4cSE-r17DypnSRIpVBeV_ClHLKCB_DGRlDZbXSHC',
    imgAlt: 'A stylized 2D physics platformer screenshot showing momentum lines',
    platform: 'PC & WebGL',
    fps: 'MOMENTUM ENGINE',
    tags: ['Godot Engine (GDScript)', 'Precision Platformer'],
    description:
      'Pure physics momentum sandbox testing inertia, wall-slide rebound angles, and grappling wire swing mathematics for fluid parkour traversal.',
    highlights: [
      'Verlet integration for grappling line tension and swing arc velocity transfer.',
      'Ghost runner replay module parsing inputs via JSON state checkpoints.',
      'Procedural obstacle generation with deterministic seeded randomization.',
    ],
    controls: [
      { key: '[ARROWS]', label: 'RUN' },
      { key: '[Z]', label: 'JUMP / VAULT' },
      { key: '[X]', label: 'HOOKSHOT', color: 'text-primary-container font-semibold' },
    ],
    devlog: {
      date: '2024-09-04',
      title: 'Momentum Vector Simulation',
      notes: [
        'Implemented pendulum swing physics calculations based on rope length and gravitational acceleration.',
        'Added jump buffering (6 frames) and coyote time (4 frames) for crisp, forgiving platforming controls.',
      ],
      status: 'Status: In active prototype stage. Polishing stage hazard shaders.',
    },
  },
  {
    id: 'modal-classroom-sim',
    category: 'school jam',
    badge: 'HUMOR • SIM',
    badgeBg: 'bg-tertiary-container text-on-tertiary-container',
    badgeText: 'text-on-tertiary-container font-semibold',
    title: 'Classroom Simulator PPLG',
    version: 'BUILD: v1.0 COMEDY RELEASE',
    versionColor: 'text-secondary',
    imgUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqjXFSaW2reTgGZt1pJLt42diVNnplc-zeo0y3E93zLUlMcCeSz-CLE1y1Wt360EDqpjsOAfNgDd5bh7oWeZh4H55SWM_ocBfnvF1XbTldHaT3mALx_rWM2fBZ20-8jsKdfp3tvkgGclrN4YZnphBLmenh7uFlBEBzUxqz-1FZyh8gqNAZHaDwovHAZVpgyCB3-cAOtNIMXNo1694sy6fLauAUzocsmPzE9WIxClSE',
    imgAlt: 'A witty retro pixel art simulation game view of a software engineering computer lab',
    platform: 'Itch.io Verified',
    fps: 'DEADLINE MODE: ON',
    tags: ['Unity C#', 'Time Management Sim', 'Student Life'],
    description:
      'Lighthearted, fast-paced student simulator about racing against code deadlines, squashing syntax bugs before inspection, and surviving vocational exam sprints.',
    highlights: [
      'Stress meter balancing system tied to Coffee intake vs. Code review errors.',
      'Authentic easter eggs referencing SMKN 6 Surakarta PPLG teachers and rituals.',
      '16 mini-games including Git merge conflict resolution under 5 seconds.',
    ],
    controls: [
      { key: 'MOUSE CLICK', label: 'SELECT' },
      { key: '[SPACE]', label: 'FIX BUG' },
      { key: '[C]', label: 'DRINK KOPI', color: 'text-secondary font-semibold' },
    ],
    devlog: {
      date: '2024-08-18',
      title: 'Comedy Mechanics & Bug System',
      notes: [
        "Added procedural random event generator: 'Sudden Power Outage in Lab 3', 'Teacher Surprise Inspection'.",
        'Authored 32 custom chiptune sound effects inspired by Indonesian school bell melodies.',
      ],
      status: 'Released on itch.io for XI PPLG classmate beta testing.',
    },
  },
];

export const GamesAndProjectsView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', label: 'All Games (4)' },
    { id: 'platformer', label: '2D Platformer' },
    { id: 'combat', label: 'Action & Combat' },
    { id: 'jam', label: 'Game Jam Entries' },
    { id: 'school', label: 'PPLG School Assignments' },
    { id: 'prototypes', label: 'Prototypes' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category.includes(activeFilter);
  });

  return (
    <div className="relative w-full overflow-hidden pb-space-xl">
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary-container blur-[120px]"></div>
        <div className="absolute top-1/2 -right-32 w-[32rem] h-[32rem] rounded-full bg-primary-container blur-[140px]"></div>
      </div>

      <section className="max-w-[1200px] w-full mx-auto px-gutter pt-space-lg">
        {/* Banner Section */}
        <div className="relative rounded-xl p-space-lg md:p-space-xl bg-surface-container-low shadow-xl overflow-hidden mb-space-xl">
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-primary-container/10 via-transparent to-transparent pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <div className="flex items-center gap-space-sm flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-highest text-secondary font-label-mono-sm text-label-mono-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse"></span>
                  DEPLOYMENT HUB // v2.4.0
                </span>
                <span className="text-outline-variant font-label-mono-sm text-label-mono-sm">
                  XI PPLG • SMKN 6 SURAKARTA
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">ARCADE VAULT &amp; CODEBASES</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                High-octane game engines, kinetic combat platformers, and school software capstones crafted by Hikam. Explore playable WebGL builds, debug logs, and itch.io releases.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-space-sm shrink-0 w-full sm:w-auto">
              <a
                className="px-space-lg py-space-sm bg-primary-container text-on-primary-container font-headline-sm text-headline-sm rounded-lg hover:shadow-[0_0_24px_rgba(0,255,157,0.45)] transition-all flex items-center justify-center gap-space-sm group"
                href="https://hikam-gamedev.itch.io"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px] group-hover:rotate-12 transition-transform">
                  sports_esports
                </span>
                <span>HIKAM-GAMEDEV.ITCH.IO</span>
              </a>
              <div className="flex items-center justify-between gap-space-md px-space-md py-space-xs rounded-lg bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-label-mono-sm">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary-container">check_circle</span>
                  4 Playable Releases
                </span>
                <span className="text-secondary font-semibold">100% INDIE</span>
              </div>
            </div>
          </div>

          <div className="mt-space-lg pt-space-md bg-surface-container-high/50 rounded-lg p-space-md flex flex-wrap items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md flex-wrap">
              <span className="font-label-mono-sm text-label-mono-sm text-outline-variant uppercase">Core Tech:</span>
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-secondary">
                Godot 4.3
              </span>
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-primary-fixed-dim">
                Unity 2022 LTS (C#)
              </span>
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-tertiary-fixed-dim">
                HLSL Shaders
              </span>
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                Aseprite Pixel Flow
              </span>
            </div>
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-mono-sm text-label-mono-sm">
              <span className="material-symbols-outlined text-[16px] text-primary-container">speed</span>
              <span>Target: 60FPS WebGL Native</span>
            </div>
          </div>
        </div>

        {/* Filter Tab Buttons */}
        <div className="flex items-center justify-between gap-space-md flex-wrap mb-space-lg">
          <div className="flex items-center gap-space-xs overflow-x-auto pb-space-xs w-full lg:w-auto">
            {filters.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-space-md py-space-xs rounded-lg font-label-mono-sm text-label-mono-sm transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container font-semibold shadow-[0_0_12px_rgba(0,255,157,0.25)]'
                      : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
          <div className="hidden sm:flex items-center gap-space-sm text-on-surface-variant font-label-mono-sm text-label-mono-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
            <span>
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-xl bg-surface-container-low shadow-lg hover:shadow-2xl hover:bg-surface-container transition-all overflow-hidden group"
            >
              <div className="p-space-md flex items-center justify-between gap-space-sm bg-surface-container-highest/60 text-on-surface-variant font-label-mono-sm text-label-mono-sm">
                <div className="flex items-center gap-space-xs">
                  <span className={`px-space-xs py-0.5 rounded ${project.badgeBg}`}>
                    {project.badge}
                  </span>
                  <span className="text-primary font-semibold">{project.title.toUpperCase()}</span>
                </div>
                <div className={`flex items-center gap-1.5 ${project.versionColor}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse"></span>
                  {project.version}
                </div>
              </div>

              <div className="relative w-full aspect-video bg-surface-container-highest overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={project.imgAlt}
                  src={project.imgUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
                <div className="absolute top-space-sm right-space-sm flex flex-col gap-1 items-end">
                  <span className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-secondary font-label-mono-sm text-label-mono-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">monitor</span>
                    {project.platform}
                  </span>
                  <span className="px-space-sm py-0.5 rounded-full bg-primary-container/90 text-on-primary-container font-label-mono-sm text-label-mono-sm font-semibold">
                    {project.fps}
                  </span>
                </div>
                <div className="absolute bottom-space-sm left-space-sm flex items-center gap-space-xs flex-wrap">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-space-sm py-0.5 rounded bg-surface-container-high/90 backdrop-blur-sm text-on-surface font-label-mono-sm text-label-mono-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                <div className="flex flex-col gap-space-sm">
                  <h2 className="font-headline-lg text-headline-lg text-primary group-hover:text-primary-container transition-colors">
                    {project.title}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {project.description}
                  </p>

                  <div className="rounded-lg bg-surface-container p-space-md mt-space-xs flex flex-col gap-space-xs">
                    <span className="font-label-mono-sm text-label-mono-sm text-secondary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px]">code_blocks</span>
                      ARCHITECTURE HIGHLIGHTS
                    </span>
                    <ul className="font-body-sm text-body-sm text-on-surface flex flex-col gap-1 list-none pl-0">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-space-xs">
                          <span className="text-primary-container font-bold">›</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-space-xs flex-wrap pt-space-xs">
                    <span className="font-label-mono-sm text-label-mono-sm text-outline-variant">CONTROLS:</span>
                    {project.controls.map((ctrl, i) => (
                      <kbd
                        key={i}
                        className={`px-space-xs py-0.5 bg-surface-container-highest rounded text-on-surface font-label-mono-sm text-label-mono-sm ${
                          ctrl.color || ''
                        }`}
                      >
                        {ctrl.key} {ctrl.label}
                      </kbd>
                    ))}
                  </div>
                </div>

                <div className="pt-space-md flex items-center gap-space-sm flex-wrap">
                  <a
                    className="flex-1 min-w-[160px] py-space-sm px-space-md rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-headline-sm text-center hover:shadow-[0_0_18px_rgba(0,255,157,0.4)] transition-all flex items-center justify-center gap-space-xs"
                    href="https://hikam-gamedev.itch.io"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                    Play on itch.io
                  </a>
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-space-md py-space-sm rounded-lg bg-surface-container-highest text-secondary hover:text-on-surface font-label-mono-lg text-label-mono-lg transition-all flex items-center gap-space-xs cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">terminal</span>
                    View Devlog
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* itch.io Portal Box */}
        <section className="mt-space-xl rounded-xl bg-surface-container-lowest p-space-lg md:p-space-xl shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-container/10 blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-space-lg">
            <div className="flex items-center gap-space-lg">
              <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center shrink-0 shadow-inner">
                <span className="material-symbols-outlined text-[36px] text-primary-container">stadia_controller</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-mono-sm text-label-mono-sm text-secondary">OFFICIAL ITCH.IO PORTAL</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-primary">hikam-gamedev.itch.io</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
                  All game releases, hotfixes, community feedback polls, and upcoming game jam prototypes are hosted live on the itch profile. Free browser playables available.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-space-md w-full md:w-auto shrink-0 justify-end">
              <a
                className="w-full md:w-auto px-space-lg py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-secondary hover:text-on-surface font-label-mono-lg text-label-mono-lg transition-all flex items-center justify-center gap-space-xs"
                href="https://hikam-gamedev.itch.io"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Follow Creator</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
              <a
                className="w-full md:w-auto px-space-lg py-space-sm rounded-lg bg-primary-container text-on-primary-container font-headline-sm text-headline-sm hover:shadow-[0_0_20px_rgba(0,255,157,0.4)] transition-all flex items-center justify-center gap-space-xs"
                href="https://hikam-gamedev.itch.io"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">sports_esports</span>
                <span>Open Vault</span>
              </a>
            </div>
          </div>
        </section>

        {/* Triple Foundation Pillars */}
        <section className="mt-space-xl grid grid-cols-1 md:grid-cols-3 gap-space-md">
          <div className="p-space-md rounded-xl bg-surface-container-low shadow-md flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs text-primary-container">
              <span className="material-symbols-outlined text-[20px]">terminal</span>
              <span className="font-label-mono-sm text-label-mono-sm font-semibold uppercase">Clean Code Standard</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Modular architecture adhering to SOLID design principles, decoupled event buses, and zero garbage-collection spikes in core tick loops.
            </p>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-low shadow-md flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs text-secondary">
              <span className="material-symbols-outlined text-[20px]">school</span>
              <span className="font-label-mono-sm text-label-mono-sm font-semibold uppercase">SMKN 6 Surakarta Pride</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Proudly engineered under the Vocational High School Software &amp; Game Engineering (PPLG) curriculum with ISO 9001:2015 standards.
            </p>
          </div>
          <div className="p-space-md rounded-xl bg-surface-container-low shadow-md flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs text-tertiary-fixed-dim">
              <span className="material-symbols-outlined text-[20px]">hub</span>
              <span className="font-label-mono-sm text-label-mono-sm font-semibold uppercase">Community Ready</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Open for game jam team-ups, soundtrack collaborations, and game mechanics design discussion across Solo Raya and online devs.
            </p>
          </div>
        </section>
      </section>

      {/* Devlog Modal Popup */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 bg-[#101418]/85 backdrop-blur-md flex items-center justify-center p-gutter animate-in fade-in"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-surface-container rounded-xl shadow-2xl overflow-hidden p-space-lg flex flex-col gap-space-md border border-surface-variant"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-space-sm bg-surface-container border-b border-surface-variant">
              <div className="flex items-center gap-space-xs font-label-mono-sm text-label-mono-sm text-primary-container">
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                <span>
                  DEVLOG // {activeModalProject.title.toUpperCase()} ({activeModalProject.version})
                </span>
              </div>
              <button
                className="text-on-surface-variant hover:text-on-surface p-1 rounded cursor-pointer"
                onClick={() => setActiveModalProject(null)}
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="font-code-snippet text-code-snippet bg-surface-container-lowest p-space-md rounded-lg text-on-surface overflow-y-auto max-h-80 space-y-2">
              <p className="text-secondary font-semibold">
                [DEVLOG {activeModalProject.devlog.date}] {activeModalProject.devlog.title}
              </p>
              {activeModalProject.devlog.notes.map((note, idx) => (
                <p key={idx} className="text-on-surface-variant">
                  • {note}
                </p>
              ))}
              <p className="text-primary-container pt-2">
                &gt; {activeModalProject.devlog.status}
              </p>
            </div>

            <div className="flex justify-end gap-space-sm pt-space-xs">
              <button
                className="px-space-md py-space-xs rounded-lg bg-surface-container-high text-on-surface font-label-mono-sm text-label-mono-sm hover:bg-surface-container-highest cursor-pointer"
                onClick={() => setActiveModalProject(null)}
              >
                Close Window
              </button>
              <a
                className="px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary-container font-label-mono-sm text-label-mono-sm font-semibold flex items-center gap-1 cursor-pointer"
                href="https://hikam-gamedev.itch.io"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px]">sports_esports</span>
                Open on Itch.io
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
