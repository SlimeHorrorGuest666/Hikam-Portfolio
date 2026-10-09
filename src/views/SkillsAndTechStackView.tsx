import React, { useState } from 'react';
import { TabId } from '../types.ts';

interface SkillsAndTechStackViewProps {
  onNavigate: (tab: TabId) => void;
}

export const SkillsAndTechStackView: React.FC<SkillsAndTechStackViewProps> = ({ onNavigate }) => {
  const [copiedJson, setCopiedJson] = useState(false);

  const rawJson = `{
  "developer": {
    "name": "Hikam",
    "education": "XI PPLG - SMK Negeri 6 Surakarta",
    "specialization": "Gameplay Mechanics, 2D Physics & Architecture",
    "pkl_status": "READY_FOR_PLACEMENT_2025_2026"
  },
  "handles": {
    "github": "https://github.com/SlimeHorrorGuest666",
    "itch_io": "https://hikam-gamedev.itch.io",
    "instagram": "https://www.instagram.com/hikamhoror5/"
  },
  "active_engines": [
    { "engine": "Godot 4.3", "role": "Primary Jam Engine", "scripting": "GDScript / C#" },
    { "engine": "Unity 2022 LTS", "role": "Enterprise Capstone", "scripting": "C# (.NET)" }
  ],
  "gameplay_algorithms": [
    "A* Pathfinding on 2D Grid",
    "Spatial Partitioning / Quadtree",
    "Fixed Time Step Accumulators",
    "Euler Verlet Physics"
  ],
  "smkn6_competencies": [
    "Pemrograman Berorientasi Objek (PBO)",
    "Pemrograman Web & Perangkat Bergerak (PWPB)",
    "Pemodelan Perangkat Lunak (PPL)",
    "Basis Data Relasional (MySQL/SQLite)"
  ]
}`;

  const handleCopyJson = () => {
    navigator.clipboard.writeText(rawJson);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Ambient Glow Effects */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-96 right-10 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-gutter py-space-xl flex flex-col gap-space-xl relative z-10">
          {/* SECTION 1: HUD Diagnostics Hero */}
          <section className="flex flex-col gap-space-md">
            {/* Telemetry Pill Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low px-space-md py-space-sm rounded-xl">
              <div className="flex items-center gap-space-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
                <span className="font-label-mono-sm text-label-mono-sm text-primary-fixed uppercase tracking-wider">
                  SYS_DIAGNOSTICS // CAPABILITY_MATRIX_v2.4
                </span>
              </div>
              <div className="flex items-center gap-space-md">
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-secondary">memory</span>
                  ARCH: x86_64_NODE_TREE
                </span>
                <span className="font-label-mono-sm text-label-mono-sm text-primary-container bg-surface-container px-space-sm py-0.5 rounded">
                  PKL READY (2025/2026)
                </span>
              </div>
            </div>

            {/* Title & Subtitle Asymmetric Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-sm">
              <div className="lg:col-span-8 flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs text-secondary font-label-mono-sm text-label-mono-sm uppercase tracking-widest">
                  <span className="material-symbols-outlined text-[16px]">terminal</span>
                  SMKN 6 SURAKARTA // XI PPLG
                </div>
                <h1 className="font-display-hero text-display-hero text-primary tracking-tight uppercase">
                  SKILLS &amp; TECH STACK
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                  Technical ecosystem, game engines, low-latency math, and vocational software engineering proficiencies mastered during XI PPLG at SMK Negeri 6 Surakarta.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-end">
                <a
                  className="flex items-center justify-between px-space-md py-space-sm bg-primary-container text-on-primary-container font-headline-sm text-headline-sm rounded-lg hover:shadow-[0_0_20px_rgba(0,255,157,0.45)] transition-all group"
                  href="https://hikam-gamedev.itch.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[20px]">sports_esports</span>
                    Playable Demos (itch.io)
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[20px]">
                    arrow_forward
                  </span>
                </a>
                <a
                  className="flex items-center justify-between px-space-md py-space-sm bg-surface-container hover:bg-surface-container-high text-secondary font-headline-sm text-headline-sm rounded-lg transition-all group"
                  href="https://github.com/SlimeHorrorGuest666"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[20px]">code</span>
                    Inspect Source (GitHub)
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[20px]">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>

            {/* Metric Counter Chips */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-xs">
              <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase">Runtime Rigs</span>
                <span className="font-headline-xl text-headline-xl text-primary font-bold">06</span>
                <span className="font-body-sm text-body-sm text-secondary">Game Engines &amp; Frameworks</span>
              </div>
              <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase">Core Dialects</span>
                <span className="font-headline-xl text-headline-xl text-primary font-bold">04+</span>
                <span className="font-body-sm text-body-sm text-primary-fixed">Strict OOP &amp; Scripting</span>
              </div>
              <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase">Architecture</span>
                <span className="font-headline-xl text-headline-xl text-primary font-bold">100%</span>
                <span className="font-body-sm text-body-sm text-tertiary-fixed">Decoupled Node/Signal Patterns</span>
              </div>
              <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant uppercase">Vocational Rank</span>
                <span className="font-headline-xl text-headline-xl text-primary font-bold">XI</span>
                <span className="font-body-sm text-body-sm text-primary-container">PPLG SMK Negeri 6 Surakarta</span>
              </div>
            </div>
          </section>

          {/* SECTION 2: Primary Game Engine Rigs (Bento Matrix) */}
          <section className="flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="px-space-sm py-space-xs bg-surface-container text-primary font-label-mono-sm text-label-mono-sm rounded">
                  01 // ENGINES
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary uppercase">Game Engine Arsenal</h2>
              </div>
              <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant hidden sm:inline">
                CYCLE: 60 FPS DETERMINISTIC STEP
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
              {/* Godot Engine Primary Card (Col 7) */}
              <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between gap-space-lg relative overflow-hidden group">
                <div className="flex flex-col gap-space-md relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary-container shadow-md">
                        <span className="material-symbols-outlined text-[28px]">sports_esports</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-headline-md text-headline-md text-primary leading-tight">Godot Engine 4.x</span>
                        <span className="font-label-mono-sm text-label-mono-sm text-primary-fixed uppercase">
                          Primary Weapon // Jam Fast-Prototyper
                        </span>
                      </div>
                    </div>
                    <span className="px-space-sm py-space-xs bg-primary-container/10 text-primary-container font-label-mono-sm text-label-mono-sm rounded-lg">
                      ADVANCED (LVL 04)
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Deep specialization in Godot 4.x node-tree structures, GDScript 2.0 static typing, custom Signal buses, KinematicBody2D precise vector math, tilemap layers, particle compute shaders, and custom UI scene graphs.
                  </p>
                  {/* Feature Breakdown Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs font-label-mono-sm text-label-mono-sm">
                    <div className="bg-surface-container p-space-sm rounded flex items-center gap-2 text-on-surface">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                      Finite State Machine (FSM)
                    </div>
                    <div className="bg-surface-container p-space-sm rounded flex items-center gap-2 text-on-surface">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                      RayCast2D Slope Mechanics
                    </div>
                    <div className="bg-surface-container p-space-sm rounded flex items-center gap-2 text-on-surface">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                      Custom CanvasItem Shaders
                    </div>
                    <div className="bg-surface-container p-space-sm rounded flex items-center gap-2 text-on-surface">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                      HTML5 / WebGL Export Tuning
                    </div>
                  </div>
                </div>

                {/* Segmented Mastery Meter */}
                <div className="flex flex-col gap-space-xs pt-space-xs relative z-10">
                  <div className="flex justify-between font-label-mono-sm text-label-mono-sm">
                    <span className="text-on-surface-variant">NODE_COMPLIANCE_RATIO</span>
                    <span className="text-primary-container">94% PROFICIENCY</span>
                  </div>
                  <div className="grid grid-cols-10 gap-1 h-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="bg-primary-container rounded-sm"></div>
                    ))}
                    <div className="bg-surface-container-highest rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Unity Engine Card (Col 5) */}
              <div className="lg:col-span-5 bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between gap-space-lg">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary shadow-md">
                        <span className="material-symbols-outlined text-[28px]">token</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-headline-md text-headline-md text-primary leading-tight">Unity 2022 LTS</span>
                        <span className="font-label-mono-sm text-label-mono-sm text-secondary uppercase">
                          Enterprise &amp; Capstone Ready
                        </span>
                      </div>
                    </div>
                    <span className="px-space-sm py-space-xs bg-secondary-container/10 text-secondary font-label-mono-sm text-label-mono-sm rounded-lg">
                      PROFICIENT
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Clean C# ScriptableObject architecture, Cinemachine virtual camera dampening, Layer Collision Matrix optimization, AudioMixer sidechain snapshots, and robust 2D/3D component lifecycles.
                  </p>
                  <div className="flex flex-wrap gap-space-xs font-label-mono-sm text-label-mono-sm">
                    <span className="px-space-sm py-1 bg-surface-container text-on-surface rounded">C# MonoBehaviours</span>
                    <span className="px-space-sm py-1 bg-surface-container text-on-surface rounded">ScriptableObjects</span>
                    <span className="px-space-sm py-1 bg-surface-container text-on-surface rounded">Cinemachine 2D</span>
                    <span className="px-space-sm py-1 bg-surface-container text-on-surface rounded">Input System V2</span>
                  </div>
                </div>

                {/* Segmented Mastery Meter */}
                <div className="flex flex-col gap-space-xs pt-space-xs">
                  <div className="flex justify-between font-label-mono-sm text-label-mono-sm">
                    <span className="text-on-surface-variant">ENGINE_INTEROP_RATING</span>
                    <span className="text-secondary">86% PROFICIENCY</span>
                  </div>
                  <div className="grid grid-cols-10 gap-1 h-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="bg-secondary rounded-sm"></div>
                    ))}
                    <div className="bg-surface-container-highest rounded-sm"></div>
                    <div className="bg-surface-container-highest rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Bottom Full Width Strip: Low-Level Frameworks */}
              <div className="lg:col-span-12 bg-surface-container-high rounded-xl p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-fixed shrink-0">
                    <span className="material-symbols-outlined text-[22px]">terminal</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-primary">
                      MonoGame / Raylib / Low-Level Prototypes
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Writing explicit while(running) loops, fixed timestep accumulators (delta-time), and non-engine math.
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs shrink-0 font-label-mono-sm text-label-mono-sm flex-wrap">
                  <span className="px-space-sm py-space-xs bg-surface-container-lowest text-secondary rounded">Euler Integration</span>
                  <span className="px-space-sm py-space-xs bg-surface-container-lowest text-secondary rounded">Frame Independent</span>
                  <span className="px-space-sm py-space-xs bg-primary-container text-on-primary-container rounded">Math-First</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: Visual Proof Showcase & Studio Imagery */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-stretch">
            <div className="lg:col-span-8 bg-surface-container-low rounded-xl overflow-hidden flex flex-col">
              <div className="p-space-md bg-surface-container flex items-center justify-between">
                <span className="font-label-mono-sm text-label-mono-sm text-primary-fixed uppercase flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
                  VISUAL RIG // WORKBENCH_CAPTURE
                </span>
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">SURAKARTA WORKSTATION</span>
              </div>
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Dark aesthetic dual-monitor developer desk workstation showcasing Godot 4"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAGlo1Zckg5oxmwqGwYTla5LxV2OAxj6x3a5JoWgcWetzXYYg9ZZ7mQBkSJNeuMwNEYhsTBtt1etjlZawURiN27OQzNzvkc9q_Qw0r8XIUq4HQQMAfWCK_qf4n8QA-hRKusmjqthcysDgfpDLvZkh7mIHbHxW9c917JDC0CDLqxxJBsWyXfLTdpsBVb6HBDxO3SVsJl-IWvQwNrgp49qWo_2P2ZbiR-uvZFvYeGwTQLB8TUIlOq7e2XA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="font-label-mono-sm text-label-mono-sm text-secondary">ACTIVE HARDWARE RIG</span>
                    <span className="font-headline-md text-headline-md text-primary">Godot 4.3 Scene Tree &amp; C# Shaders</span>
                  </div>
                  <span className="px-space-sm py-1 bg-surface-container-lowest/80 backdrop-blur font-label-mono-sm text-label-mono-sm text-on-surface rounded">
                    LIVE COMPILATION
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-mono-sm text-label-mono-sm text-primary-container uppercase">PIXEL ART PIPELINE</span>
                <span className="font-headline-md text-headline-md text-primary">Aseprite &amp; Sprite Rigging</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Precision 16x16 and 32x32 spritesheet generation, run cycles, custom VFX slices, and automated Tiled .tmx export pipelines into Godot tilemaps.
                </p>
              </div>
              <div className="relative h-40 w-full rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="High contrast pixel art animation workflow in Aseprite"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-RUn2CsDoUHhQqj5R12w0uWytVrgtuxARIGCZVfynxPKnCx7OxmGin1gxcL5h6Q2-mvm1oGBTrF-8jhYcuyd2r7g6PADzSYrGBPc0kaqYuipi7prY_jznpQt4NAGz3ImTRRKCXRcJ9hG3FMSpj6wVUIoWhOXhrx7WnEccpqDF89gg2KkTMTG-nkhnKla85dAG725S91Tq62L3Q9w7vsnX5psyprpidSIWfB8szuTEeAQ6ha0pD0KpSQ"
                />
              </div>
              <div className="flex items-center justify-between text-on-surface-variant font-label-mono-sm text-label-mono-sm">
                <span>TOOL: ASEPRITE v1.3</span>
                <span className="text-primary-container">60 FPS KEYFRAMING</span>
              </div>
            </div>
          </section>

          {/* SECTION 4: Programming Languages & Paradigms */}
          <section className="flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="px-space-sm py-space-xs bg-surface-container text-secondary font-label-mono-sm text-label-mono-sm rounded">
                  02 // CODEBASES
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary uppercase">Core Dialects &amp; Data Layers</h2>
              </div>
              <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant hidden sm:inline">
                STRICT TYPE DISCIPLINE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
              {/* C# Card */}
              <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between gap-space-md hover:bg-surface-container transition-all">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-md text-headline-md text-primary">C# (.NET)</span>
                    <span className="px-space-sm py-0.5 bg-primary-container/15 text-primary-container font-label-mono-sm text-label-mono-sm rounded">
                      92% PROFICIENT
                    </span>
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                    Object Oriented Programming &amp; Architecture
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    Encapsulation, interfaces, decoupled event buses, generic pools for performance, Unity engine API integration, LINQ data querying.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded font-code-snippet text-code-snippet text-primary-fixed">
                  <code>public event Action&lt;DamagePayload&gt; OnHit;</code>
                </div>
              </div>

              {/* GDScript Card */}
              <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between gap-space-md hover:bg-surface-container transition-all">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-md text-headline-md text-primary">GDScript 2.0</span>
                    <span className="px-space-sm py-0.5 bg-primary-container/15 text-primary-container font-label-mono-sm text-label-mono-sm rounded">
                      96% EXPERT
                    </span>
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                    Deterministic Node Scripting
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    Statically typed GDScript, coroutine awaits, resource management, custom signals, physics interpolation, custom export variables.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded font-code-snippet text-code-snippet text-secondary">
                  <code>signal player_parried(frame_idx: int)</code>
                </div>
              </div>

              {/* Python Card */}
              <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between gap-space-md hover:bg-surface-container transition-all">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-md text-headline-md text-primary">Python &amp; Logic</span>
                    <span className="px-space-sm py-0.5 bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-label-mono-sm rounded">
                      85% SOLID
                    </span>
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                    Algorithmic Scripting &amp; PCG
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    A* pathfinding graphs, procedural dungeon cellular automata, fast math prototypes, automation scripts for asset batching.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded font-code-snippet text-code-snippet text-tertiary-fixed">
                  <code>heapq.heappush(open_set, (f_score, node))</code>
                </div>
              </div>

              {/* JS / TS & Web Card */}
              <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between gap-space-md hover:bg-surface-container transition-all">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-md text-headline-md text-primary">JS / Web Stack</span>
                    <span className="px-space-sm py-0.5 bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-label-mono-sm rounded">
                      88% SOLID
                    </span>
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                    PWPB Curriculum &amp; Game Shells
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    HTML5 Canvas runners, responsive DOM interfaces, Tailwind CSS styling, asynchronous REST fetch calls, and itch.io iframe wrapping.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded font-code-snippet text-code-snippet text-secondary-fixed">
                  <code>ctx.drawImage(spritesheet, sx, sy, 32, 32);</code>
                </div>
              </div>

              {/* SQL & Storage Card */}
              <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between gap-space-md hover:bg-surface-container transition-all">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-md text-headline-md text-primary">SQL &amp; Storage</span>
                    <span className="px-space-sm py-0.5 bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-label-mono-sm rounded">
                      87% SOLID
                    </span>
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                    Relational &amp; Save State Systems
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    MySQL database architecture, SQLite offline client storage for save games, JSON payload serialization, cryptographic hash verification.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded font-code-snippet text-code-snippet text-primary-fixed">
                  <code>SELECT score, quest_id FROM saves ORDER BY ts;</code>
                </div>
              </div>

              {/* Version Control & Devops Card */}
              <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between gap-space-md hover:bg-surface-container transition-all">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-md text-headline-md text-primary">Git &amp; Git LFS</span>
                    <span className="px-space-sm py-0.5 bg-primary-container/15 text-primary-container font-label-mono-sm text-label-mono-sm rounded">
                      90% PROFICIENT
                    </span>
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                    Binary Asset Versioning
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                    Git feature branching, merge conflict resolution in scene files, Git LFS tracking for audio and large PSD/Aseprite assets.
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded font-code-snippet text-code-snippet text-on-surface">
                  <code>git lfs track &quot;*.wav&quot; &quot;*.png&quot; &quot;*.blend&quot;</code>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: PPLG Vocational Curriculum Mastery (SMK Negeri 6 Surakarta) */}
          <section className="flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="px-space-sm py-space-xs bg-surface-container text-tertiary-fixed font-label-mono-sm text-label-mono-sm rounded">
                  03 // CURRICULUM
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary uppercase">
                  SMK Negeri 6 Surakarta Vocational Mastery
                </h2>
              </div>
              <span className="font-label-mono-sm text-label-mono-sm text-primary-fixed hidden sm:inline">
                PROGRAM: XI PPLG • KELAS INDUSTRI
              </span>
            </div>

            <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm">
                <div>
                  <span className="font-headline-md text-headline-md text-primary">
                    Kurikulum Merdeka // PPLG Competency Standards
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Bridging formal high school software engineering coursework directly into high-octane indie game deliverables.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-space-sm py-space-xs bg-surface-container text-primary font-label-mono-sm text-label-mono-sm rounded">
                    TERAKREDITASI A
                  </span>
                  <span className="px-space-sm py-space-xs bg-surface-container text-secondary font-label-mono-sm text-label-mono-sm rounded">
                    SMK RUJUKAN NASIONAL
                  </span>
                </div>
              </div>

              {/* Subject Matrix Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
                {/* PBO */}
                <div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-primary">PBO (Pemrograman Berorientasi Objek)</span>
                    <span className="material-symbols-outlined text-primary-container text-[20px]">account_tree</span>
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-secondary">DESIGN PATTERNS IN PRODUCTION</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Mastery of Singleton audio managers, State pattern for player combat stances, Observer pattern for decoupled health bars, and Factory patterns for mob spawning.
                  </p>
                </div>

                {/* Game Dev & Mechanics */}
                <div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-primary">Pengembangan Gim &amp; Mekanika</span>
                    <span className="material-symbols-outlined text-primary-container text-[20px]">videogame_asset</span>
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-secondary">SUB-PIXEL COLLISION &amp; JUICE</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Implementation of frame-accurate hurtboxes, variable jump curves with gravity scaling, screen shake algorithms, and particle bursts on impact.
                  </p>
                </div>

                {/* PWPB */}
                <div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-primary">PWPB (Web &amp; Bergerak)</span>
                    <span className="material-symbols-outlined text-primary-container text-[20px]">devices</span>
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-secondary">RESPONSIVE &amp; API INTERFACES</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Building accessible web portfolios, backend REST endpoints for game telemetry, full responsive CSS layouts, and mobile viewport optimization.
                  </p>
                </div>

                {/* Basis Data */}
                <div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-primary">Basis Data &amp; Storage</span>
                    <span className="material-symbols-outlined text-primary-container text-[20px]">database</span>
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-secondary">SCHEMAS &amp; SERIALIZATION</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    3rd Normal Form schema definitions, automated SQL foreign keys, and binary/JSON game save serialization with checksum tampering checks.
                  </p>
                </div>

                {/* Pemodelan PL */}
                <div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-primary">Pemodelan PL (UML &amp; Agile)</span>
                    <span className="material-symbols-outlined text-primary-container text-[20px]">architecture</span>
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-secondary">SPECIFICATION &amp; SPRINTS</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    UML 2.0 Class &amp; Sequence diagrams for gameplay engines, sprint burndown planning, Trello/Jira backlog task estimation, and feature scoping.
                  </p>
                </div>

                {/* Algoritma & Struktur Data */}
                <div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-primary">Algoritma &amp; Struktur Data</span>
                    <span className="material-symbols-outlined text-primary-container text-[20px]">alt_route</span>
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-secondary">SPATIAL INDEXING &amp; OPTIMIZATION</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Spatial hashing for bullet hell density, Quadtree partitioning for 2D broadphase collision queries, and optimized Breadth-First-Search routing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: Specialized Kinetic Mechanics & Game Feel */}
          <section className="flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="px-space-sm py-space-xs bg-surface-container text-primary-container font-label-mono-sm text-label-mono-sm rounded">
                  04 // KINETICS
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary uppercase">
                  Game Feel &amp; Low-Latency Physics
                </h2>
              </div>
              <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant hidden sm:inline">
                MARTIAL ARTS HITSTUN INSPIRATION
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {/* Combat Frame Data */}
              <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs text-primary-container">
                  <span className="material-symbols-outlined text-[20px]">timer</span>
                  <span className="font-label-mono-sm text-label-mono-sm uppercase">FRAME DATA TUNING</span>
                </div>
                <span className="font-headline-sm text-headline-sm text-primary">Active Hitbox Windows</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Tuning startup frames, active damage frames, and recovery lag. Implementation of hit-stop freeze frames to deliver visceral impact crunch.
                </p>
                <div className="mt-auto pt-space-xs flex items-center gap-1 font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                  <span className="px-1.5 py-0.5 bg-surface-container rounded text-primary">STARTUP: 4F</span>
                  <span className="px-1.5 py-0.5 bg-surface-container rounded text-primary-container">ACTIVE: 3F</span>
                  <span className="px-1.5 py-0.5 bg-surface-container rounded text-secondary">REC: 8F</span>
                </div>
              </div>

              {/* Platformer Kinematics */}
              <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs text-secondary">
                  <span className="material-symbols-outlined text-[20px]">altitude</span>
                  <span className="font-label-mono-sm text-label-mono-sm uppercase">PLATFORMER MATH</span>
                </div>
                <span className="font-headline-sm text-headline-sm text-primary">Coyote Time &amp; Jump Buffers</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Adding 6-frame coyote jump leniency, 5-frame input jump buffering, variable jump height upon key release, and apex gravity dampening.
                </p>
                <div className="mt-auto pt-space-xs flex items-center gap-1 font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                  <span className="px-1.5 py-0.5 bg-surface-container rounded text-secondary">COYOTE: 100ms</span>
                  <span className="px-1.5 py-0.5 bg-surface-container rounded text-secondary">BUFFER: 80ms</span>
                </div>
              </div>

              {/* Audio Routing */}
              <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs text-tertiary-fixed">
                  <span className="material-symbols-outlined text-[20px]">volume_up</span>
                  <span className="font-label-mono-sm text-label-mono-sm uppercase">AUDIO ARCHITECTURE</span>
                </div>
                <span className="font-headline-sm text-headline-sm text-primary">Dynamic SFX Pitching</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Procedural pitch variance (&plusmn;0.12 semi-tones) on repetitive footsteps and hits to avoid auditory fatigue. Master/BGM/SFX sub-bus ducking.
                </p>
                <div className="mt-auto pt-space-xs flex items-center gap-1 font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                  <span className="px-1.5 py-0.5 bg-surface-container rounded text-tertiary-fixed">AUDIOSTREAMPLAYER</span>
                  <span className="px-1.5 py-0.5 bg-surface-container rounded text-tertiary-fixed">FMOD API</span>
                </div>
              </div>

              {/* Gamepad & Polish */}
              <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
                <div className="flex items-center gap-space-xs text-primary-fixed">
                  <span className="material-symbols-outlined text-[20px]">joystick</span>
                  <span className="font-label-mono-sm text-label-mono-sm uppercase">HAPTICS &amp; FEEL</span>
                </div>
                <span className="font-headline-sm text-headline-sm text-primary">Rumble &amp; Camera Shake</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Perlin noise-based directional camera trauma decay (Trauma^2 formula) and dual-motor controller rumble triggers on explosive impacts.
                </p>
                <div className="mt-auto pt-space-xs flex items-center gap-1 font-label-mono-sm text-label-mono-sm text-on-surface-variant">
                  <span className="px-1.5 py-0.5 bg-surface-container rounded text-primary-fixed">PERLIN NOISE</span>
                  <span className="px-1.5 py-0.5 bg-surface-container rounded text-primary-fixed">VIBRATION API</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: Interactive Terminal Tech Stack Inspector */}
          <section className="flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="px-space-sm py-space-xs bg-surface-container text-on-surface font-label-mono-sm text-label-mono-sm rounded">
                  05 // CLI TELEMETRY
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary uppercase">Virtual Environment Inspector</h2>
              </div>
              <span className="font-label-mono-sm text-label-mono-sm text-primary-container">SHELL: BASH_v5.2</span>
            </div>

            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl border border-surface-variant/40">
              {/* Terminal Titlebar */}
              <div className="bg-surface-container-low px-space-md py-space-sm flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="w-3 h-3 rounded-full bg-error-container"></span>
                  <span className="w-3 h-3 rounded-full bg-surface-variant"></span>
                  <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant ml-space-sm">
                    hikam@smkn6-solo-devstation:~
                  </span>
                </div>
                <div className="flex items-center gap-space-sm font-label-mono-sm text-label-mono-sm text-outline">
                  <span>UTF-8</span>
                  <span>JSON</span>
                  <button
                    onClick={handleCopyJson}
                    className="hover:text-primary-container transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {copiedJson ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedJson ? 'Copied Raw!' : 'Copy Raw'}</span>
                  </button>
                </div>
              </div>

              {/* Terminal Content Body */}
              <div className="p-space-md md:p-space-lg font-code-snippet text-code-snippet overflow-x-auto leading-relaxed">
                <div className="flex items-center gap-2 text-primary-container pb-space-sm">
                  <span className="text-secondary">hikam@smkn6-solo:~$</span>
                  <span className="text-primary font-semibold">cat /etc/viska-tech-stack.json</span>
                  <span className="w-2 h-4 bg-primary-container animate-pulse inline-block"></span>
                </div>

                <pre className="text-on-surface font-code-snippet leading-relaxed">
                  <span className="text-outline">&#123;</span>
                  {'\n  '}<span className="text-secondary">&quot;developer&quot;</span>: <span className="text-outline">&#123;</span>
                  {'\n    '}<span className="text-primary-fixed">&quot;name&quot;</span>: <span className="text-primary-container">&quot;Hikam&quot;</span>,
                  {'\n    '}<span className="text-primary-fixed">&quot;education&quot;</span>: <span className="text-primary-container">&quot;XI PPLG - SMK Negeri 6 Surakarta&quot;</span>,
                  {'\n    '}<span className="text-primary-fixed">&quot;specialization&quot;</span>: <span className="text-primary-container">&quot;Gameplay Mechanics, 2D Physics &amp; Architecture&quot;</span>,
                  {'\n    '}<span className="text-primary-fixed">&quot;pkl_status&quot;</span>: <span className="text-secondary">&quot;READY_FOR_PLACEMENT_2025_2026&quot;</span>
                  {'\n  '}<span className="text-outline">&#125;</span>,
                  {'\n  '}<span className="text-secondary">&quot;handles&quot;</span>: <span className="text-outline">&#123;</span>
                  {'\n    '}<span className="text-primary-fixed">&quot;github&quot;</span>: <span className="text-primary-container">&quot;https://github.com/SlimeHorrorGuest666&quot;</span>,
                  {'\n    '}<span className="text-primary-fixed">&quot;itch_io&quot;</span>: <span className="text-primary-container">&quot;https://hikam-gamedev.itch.io&quot;</span>,
                  {'\n    '}<span className="text-primary-fixed">&quot;instagram&quot;</span>: <span className="text-primary-container">&quot;https://www.instagram.com/hikamhoror5/&quot;</span>
                  {'\n  '}<span className="text-outline">&#125;</span>,
                  {'\n  '}<span className="text-secondary">&quot;active_engines&quot;</span>: <span className="text-outline">[</span>
                  {'\n    '}<span className="text-outline">&#123;</span> <span className="text-primary-fixed">&quot;engine&quot;</span>: <span className="text-primary-container">&quot;Godot 4.3&quot;</span>, <span className="text-primary-fixed">&quot;role&quot;</span>: <span className="text-primary-container">&quot;Primary Jam Engine&quot;</span>, <span className="text-primary-fixed">&quot;scripting&quot;</span>: <span className="text-secondary">&quot;GDScript / C#&quot;</span> <span className="text-outline">&#125;</span>,
                  {'\n    '}<span className="text-outline">&#123;</span> <span className="text-primary-fixed">&quot;engine&quot;</span>: <span className="text-primary-container">&quot;Unity 2022 LTS&quot;</span>, <span className="text-primary-fixed">&quot;role&quot;</span>: <span className="text-primary-container">&quot;Enterprise Capstone&quot;</span>, <span className="text-primary-fixed">&quot;scripting&quot;</span>: <span className="text-secondary">&quot;C# (.NET)&quot;</span> <span className="text-outline">&#125;</span>
                  {'\n  '}<span className="text-outline">]</span>,
                  {'\n  '}<span className="text-secondary">&quot;gameplay_algorithms&quot;</span>: <span className="text-outline">[</span>
                  {'\n    '}<span className="text-primary-container">&quot;A* Pathfinding on 2D Grid&quot;</span>,
                  {'\n    '}<span className="text-primary-container">&quot;Spatial Partitioning / Quadtree&quot;</span>,
                  {'\n    '}<span className="text-primary-container">&quot;Fixed Time Step Accumulators&quot;</span>,
                  {'\n    '}<span className="text-primary-container">&quot;Euler Verlet Physics&quot;</span>
                  {'\n  '}<span className="text-outline">]</span>,
                  {'\n  '}<span className="text-secondary">&quot;smkn6_competencies&quot;</span>: <span className="text-outline">[</span>
                  {'\n    '}<span className="text-primary-container">&quot;Pemrograman Berorientasi Objek (PBO)&quot;</span>,
                  {'\n    '}<span className="text-primary-container">&quot;Pemrograman Web &amp; Perangkat Bergerak (PWPB)&quot;</span>,
                  {'\n    '}<span className="text-primary-container">&quot;Pemodelan Perangkat Lunak (PPL)&quot;</span>,
                  {'\n    '}<span className="text-primary-container">&quot;Basis Data Relasional (MySQL/SQLite)&quot;</span>
                  {'\n  '}<span className="text-outline">]</span>
                  {'\n'}<span className="text-outline">&#125;</span>
                </pre>
              </div>
            </div>
          </section>

          {/* SECTION 8: Call to Action Strip (PKL / Collab) */}
          <section className="bg-surface-container-low rounded-xl p-space-lg md:p-space-xl flex flex-col lg:flex-row items-center justify-between gap-space-lg relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex flex-col gap-space-xs text-center lg:text-left max-w-xl z-10">
              <div className="flex items-center justify-center lg:justify-start gap-space-xs text-primary-container font-label-mono-sm text-label-mono-sm uppercase">
                <span className="material-symbols-outlined text-[16px]">handshake</span>
                OPEN COLLABORATION &amp; PKL
              </div>
              <h2 className="font-headline-xl text-headline-xl text-primary leading-tight">
                Ready to collaborate on a Game Jam or Software Project?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Available for remote game jams, indie prototypes, and vocational industrial work placement (Praktik Kerja Lapangan / PKL 2025/2026).
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full lg:w-auto shrink-0 z-10">
              <a
                className="w-full sm:w-auto flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-primary-container text-on-primary-container font-headline-sm text-headline-sm rounded-lg hover:shadow-[0_0_24px_rgba(0,255,157,0.5)] transition-all cursor-pointer"
                href="https://hikam-gamedev.itch.io"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">sports_esports</span>
                View Playable Games
              </a>
              <a
                className="w-full sm:w-auto flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-surface-container hover:bg-surface-container-high text-secondary font-headline-sm text-headline-sm rounded-lg transition-all cursor-pointer"
                href="https://github.com/SlimeHorrorGuest666"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">terminal</span>
                Check GitHub Repos
              </a>
              <button
                onClick={() => onNavigate('itch-io-and-contact')}
                className="w-full sm:w-auto flex items-center justify-center gap-space-xs px-space-md py-space-md bg-surface-container-high hover:bg-surface-bright text-on-surface font-headline-sm text-headline-sm rounded-lg transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">contact_mail</span>
                Contact for PKL
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
