import React from 'react';
import { TabId } from '../types.ts';

interface AboutAndSchoolViewProps {
  onNavigate: (tab: TabId) => void;
}

export const AboutAndSchoolView: React.FC<AboutAndSchoolViewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO DOSSIER & OPERATOR STATS */}
      <section className="relative max-w-[1200px] w-full mx-auto px-gutter py-space-xl overflow-hidden">
        {/* Ambient phosphor lighting blooms */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-secondary-container/10 rounded-full blur-[110px] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          {/* Media Frame with Cyber Brutalist Accents */}
          <div className="lg:col-span-5 relative group">
            <div className="relative bg-surface-container rounded-xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
              {/* Inset cyber scanline texture & badge */}
              <div className="absolute top-space-sm left-space-sm z-20 flex items-center gap-space-xs bg-surface-container-lowest/90 px-space-sm py-1 rounded-lg backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase">OPERATOR // CLASSIFIED</span>
              </div>
              <div className="absolute top-space-sm right-space-sm z-20 bg-secondary-container/20 text-secondary-fixed px-space-sm py-1 rounded-lg font-label-mono-sm text-label-mono-sm backdrop-blur-md font-bold">
                AGILITY: MAX
              </div>

              {/* Character Action Snapshot */}
              <div className="relative w-full aspect-[4/5] bg-surface-container-highest overflow-hidden">
                <img
                  alt="Hikam in dynamic martial arts jump kick pose above battlestation"
                  className="w-full h-full object-cover object-center filter contrast-125 saturate-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Lw-sNyf6Pz1Wga4POxXE7pUsK1Dt9BgPbTthrwvzpn-hUNrnCNOTpLr1XxySDUIo0at_H2HhrPSgqwyr8zQw72f2PDI1Q_Zg0cWE5rHHyUWbQA4bHX1pM6EQ_7uwBvohi2UGlm66xZBh06vTdMjMD0eIpp_HwUWQreAGF2XJudLbH1Bj0xTboT88TfqLaI9QwdplvWlon24H6VI9p3uUS3mEG385g6CQurS2tDwlKsxSWmm5bj5dPQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Bottom Telemetry HUD overlay */}
              <div className="p-space-md bg-surface-container-low flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">CODEBASE // DISCIPLINE</span>
                  <span className="font-label-mono-sm text-label-mono-sm text-primary-fixed">100% SYNCHRONIZED</span>
                </div>
                {/* Segmented EXP gauge */}
                <div className="grid grid-cols-10 gap-1 h-1.5 w-full">
                  <div className="bg-primary-container rounded-sm"></div>
                  <div className="bg-primary-container rounded-sm"></div>
                  <div className="bg-primary-container rounded-sm"></div>
                  <div className="bg-primary-container rounded-sm"></div>
                  <div className="bg-primary-container rounded-sm"></div>
                  <div className="bg-primary-container rounded-sm"></div>
                  <div className="bg-primary-container rounded-sm"></div>
                  <div className="bg-primary-container rounded-sm"></div>
                  <div className="bg-primary-container rounded-sm"></div>
                  <div className="bg-surface-variant rounded-sm animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between pt-space-xs text-on-surface-variant font-label-mono-sm text-label-mono-sm">
                  <span>SOLO, SURAKARTA</span>
                  <span className="text-secondary">XI PPLG • VISKA</span>
                </div>
              </div>
            </div>

            {/* Floating cyber stat chip */}
            <div className="hidden sm:flex absolute -bottom-4 -right-4 bg-surface-container-highest/95 backdrop-blur-md px-space-md py-space-sm rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] items-center gap-space-sm">
              <div className="w-9 h-9 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[20px]">sports_martial_arts</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant leading-none uppercase">Physical Agility</span>
                <span className="font-headline-sm text-headline-sm text-primary leading-tight">Martial Arts Spirit</span>
              </div>
            </div>
          </div>

          {/* Dossier Intel & Core Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="px-space-sm py-1 bg-primary-container/15 text-primary-container font-label-mono-sm text-label-mono-sm uppercase rounded-lg">
                Student Profile Dossier
              </span>
              <span className="font-label-mono-sm text-label-mono-sm text-outline">SMKN 6 SURAKARTA // VISKA</span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h1 className="font-display-hero text-display-hero text-primary tracking-tight">
                ALGORITHM IN CODE.<br />
                <span className="text-secondary-fixed">MOMENTUM IN MOTION.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Hey, I&apos;m <strong className="text-on-surface font-semibold">Hikam</strong>—a student developer at <strong className="text-primary">SMK Negeri 6 Surakarta</strong>, majoring in <strong className="text-secondary">XI PPLG</strong> (Pengembangan Perangkat Lunak dan Gim). I view game architecture through the lens of martial arts: explosive speed, ruthless discipline, and flawless spatial timing.
              </p>
            </div>

            {/* Dual Attributes Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
              <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs shadow-sm hover:bg-surface-container transition-all">
                <div className="flex items-center gap-space-xs text-primary-container">
                  <span className="material-symbols-outlined text-[20px]">terminal</span>
                  <span className="font-label-mono-lg text-label-mono-lg uppercase font-bold">Rigorous Code Logic</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Deep-diving into C#, Godot engine nodes, state machines, clean architecture, and low-latency game math for fast responsive gameplay.
                </p>
              </div>
              <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-space-xs shadow-sm hover:bg-surface-container transition-all">
                <div className="flex items-center gap-space-xs text-secondary-fixed">
                  <span className="material-symbols-outlined text-[20px]">fitness_center</span>
                  <span className="font-label-mono-lg text-label-mono-lg uppercase font-bold">Martial Kinetic Drive</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Translating real biomechanics, airborne jump kicks, reaction speed, and frame discipline into punchy combat animation curves.
                </p>
              </div>
            </div>

            {/* Quick Callout Details */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary-container text-[18px]">verified</span>
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface">PPLG Cohort 2023 - 2026</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[18px]">location_on</span>
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface">Surakarta (Solo), Jawa Tengah</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">sports_esports</span>
                <span className="font-label-mono-sm text-label-mono-sm text-on-surface">Indie Creator on itch.io</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT SMK NEGERI 6 SURAKARTA (VISKA) */}
      <section className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-[1200px] w-full mx-auto px-gutter flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <div className="flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
                <span className="font-label-mono-sm text-label-mono-sm text-secondary uppercase font-bold">ACADEMIC FOUNDATION</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-primary">SMK NEGERI 6 SURAKARTA (VISKA)</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Known affectionately as <strong>VISKA</strong>, SMKN 6 Surakarta is a prestigious government vocational powerhouse recognized as an official <em>SMK Pusat Keunggulan</em> (Center of Excellence).
              </p>
            </div>
            <div className="flex items-center gap-space-sm shrink-0">
              <span className="px-space-md py-space-xs bg-surface-container font-label-mono-sm text-label-mono-sm text-primary-container rounded-lg">
                ISO 9001:2015
              </span>
              <span className="px-space-md py-space-xs bg-surface-container font-label-mono-sm text-label-mono-sm text-secondary-fixed rounded-lg">
                TERAKREDITASI &apos;A&apos;
              </span>
            </div>
          </div>

          {/* Bento Showcase of VISKA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* Campus Image Card */}
            <div className="md:col-span-2 relative bg-surface-container rounded-xl overflow-hidden shadow-lg group min-h-[300px] flex flex-col justify-end p-space-lg">
              <img
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 opacity-60"
                alt="Modern high school campus of SMK Negeri 6 Surakarta in Solo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwwIzLAQJiBrztvk7Gu8uMUjk4Sfa9puf-MVj4kq1tMk6np1y-v0UM9nhPGNOXkuFjngi7BU9pIdWQnhq-op1sJkIGUyr7aM3K5yjRajY3-YYhm2A9Y5ILFALauS5l6WtA_tfMzpmTnjyc2TUJ_UWNv5N-GHGOBrkug8ZdSUdAVuHzvbWzwKpZjg_s_9NmTrKgisJpGF5LuJJTd-eC6cemkyPwLZL0K0-xc9ot9muU"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/70 to-transparent"></div>
              <div className="relative z-10 flex flex-col gap-space-xs">
                <span className="px-space-sm py-0.5 bg-primary-container/20 text-primary-container font-label-mono-sm text-label-mono-sm w-fit rounded-lg">
                  HEADQUARTERS
                </span>
                <h3 className="font-headline-lg text-headline-lg text-primary">Jl. Tirtonadi No.19, Manahan, Banjarsari, Surakarta</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
                  Equipped with high-spec computer laboratories, active industry partnership incubators, and modern agile collaborative spaces fostering competitive software and digital game builders.
                </p>
              </div>
            </div>

            {/* Vision & Identity Card */}
            <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md shadow-sm">
              <div className="flex flex-col gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-secondary-container/20 text-secondary-fixed flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">school</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary">VISKA Excellence</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  SMK BISA, SMK HEBAT. Producing digital talent certified for industry standards across Central Java and national tech startups.
                </p>
              </div>
              <div className="flex flex-col gap-space-xs bg-surface-container-highest p-space-md rounded-lg">
                <span className="font-label-mono-sm text-label-mono-sm text-primary-fixed uppercase">Core Motto</span>
                <span className="font-body-md text-body-md text-on-surface font-semibold">
                  &quot;Berakhlak Mulia, Unggul, dan Berdaya Saing Global&quot;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PPLG CURRICULUM */}
      <section className="w-full max-w-[1200px] mx-auto px-gutter py-space-xl flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span className="font-label-mono-sm text-label-mono-sm text-primary-container uppercase font-bold">SYLLABUS ARCHITECTURE</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-primary">THE PPLG CURRICULUM (XI PPLG)</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              <em>Pengembangan Perangkat Lunak &amp; Gim</em> blends deep vocational software engineering with dynamic interactive systems, simulation mechanics, and data pipelines.
            </p>
          </div>
          <div className="bg-surface-container-low px-space-md py-space-sm rounded-lg flex items-center gap-space-sm">
            <span className="font-label-mono-sm text-label-mono-sm text-on-surface-variant">CURRENT PHASE:</span>
            <span className="font-label-mono-sm text-label-mono-sm text-secondary-fixed font-bold uppercase">SEMESTER 4 ADVANCED</span>
          </div>
        </div>

        {/* 6 Core Subject Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {/* Item 1: PBO */}
          <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md shadow-sm hover:bg-surface-container transition-all group">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-primary-container/15 text-primary-container flex items-center justify-center font-label-mono-lg font-bold">01</span>
                <span className="font-label-mono-sm text-label-mono-sm text-outline">CORE OBJECT</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">
                Pemrograman Berorientasi Objek (PBO)
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Mastering encapsulation, inheritance, polymorphism, abstraction, and clean class diagrams in C# and Java for game entity logic.
              </p>
            </div>
            <div className="flex flex-wrap gap-1 font-label-mono-sm text-label-mono-sm text-primary-fixed">
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">C#</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">OOP Architecture</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">Design Patterns</span>
            </div>
          </div>

          {/* Item 2: Game Dev & Mechanics */}
          <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md shadow-sm hover:bg-surface-container transition-all group">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-secondary-container/15 text-secondary-fixed flex items-center justify-center font-label-mono-lg font-bold">02</span>
                <span className="font-label-mono-sm text-label-mono-sm text-outline">INTERACTIVE</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary-fixed transition-colors">
                Game Development &amp; Mechanics
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Kinematic physics, state machine character controllers, 2D/3D collision matrices, game audio pipelines, and UI canvas managers.
              </p>
            </div>
            <div className="flex flex-wrap gap-1 font-label-mono-sm text-label-mono-sm text-secondary-fixed">
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">Godot</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">Unity 2D</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">Game Loop</span>
            </div>
          </div>

          {/* Item 3: PWPB */}
          <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md shadow-sm hover:bg-surface-container transition-all group">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-surface-variant text-on-surface flex items-center justify-center font-label-mono-lg font-bold">03</span>
                <span className="font-label-mono-sm text-label-mono-sm text-outline">FULL-STACK</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary transition-colors">
                Pemrograman Web &amp; Bergerak (PWPB)
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Modern front-end engineering, responsive responsive layout engines, RESTful backend APIs, and multi-platform mobile packaging.
              </p>
            </div>
            <div className="flex flex-wrap gap-1 font-label-mono-sm text-label-mono-sm text-on-surface-variant">
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">Tailwind CSS</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">JavaScript</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">Node / React</span>
            </div>
          </div>

          {/* Item 4: Database & SQL */}
          <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md shadow-sm hover:bg-surface-container transition-all group">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-surface-variant text-on-surface flex items-center justify-center font-label-mono-lg font-bold">04</span>
                <span className="font-label-mono-sm text-label-mono-sm text-outline">PERSISTENCE</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary transition-colors">
                Basis Data &amp; Relasional Systems
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Relational schemas (ERD), normalization 1NF-3NF, complex SQL join transactions, save-game JSON persistence, and SQLite integration.
              </p>
            </div>
            <div className="flex flex-wrap gap-1 font-label-mono-sm text-label-mono-sm text-on-surface-variant">
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">MySQL</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">SQLite</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">JSON Schemas</span>
            </div>
          </div>

          {/* Item 5: Pemodelan PL */}
          <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md shadow-sm hover:bg-surface-container transition-all group">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-surface-variant text-on-surface flex items-center justify-center font-label-mono-lg font-bold">05</span>
                <span className="font-label-mono-sm text-label-mono-sm text-outline">SYSTEM DESIGN</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary transition-colors">
                Pemodelan Perangkat Lunak (PPL)
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Use Case diagrams, Activity workflows, Sequence lifecycles, and Agile Scrum sprint mechanics used in industry software studios.
              </p>
            </div>
            <div className="flex flex-wrap gap-1 font-label-mono-sm text-label-mono-sm text-on-surface-variant">
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">UML 2.0</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">User Stories</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">Agile Sprints</span>
            </div>
          </div>

          {/* Item 6: Algoritma & Struktur Data */}
          <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md shadow-sm hover:bg-surface-container transition-all group">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-primary-container/15 text-primary-container flex items-center justify-center font-label-mono-lg font-bold">06</span>
                <span className="font-label-mono-sm text-label-mono-sm text-outline">LOGIC CORE</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-primary-container transition-colors">
                Algoritma &amp; Struktur Data
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Pathfinding (A* &amp; BFS), spatial hash grids, array sorting benchmarks, queues, and tree structures essential for AI behavior logic.
              </p>
            </div>
            <div className="flex flex-wrap gap-1 font-label-mono-sm text-label-mono-sm text-primary-fixed">
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">A* Pathfinding</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">Spatial Arrays</span>
              <span className="px-2 py-0.5 bg-surface-container-highest rounded">Time Complexity</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SCHOOL JOURNEY & MILESTONES TIMELINE */}
      <section className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-[1200px] w-full mx-auto px-gutter flex flex-col gap-space-xl">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span className="font-label-mono-sm text-label-mono-sm text-primary-container uppercase font-bold">CHRONOLOGY // QUEST LOG</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-primary">SCHOOL JOURNEY &amp; MILESTONES</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              From early computational thinking in Class X to launching independent itch.io titles and preparing for upcoming industry apprenticeships (PKL).
            </p>
          </div>

          {/* Chronological Timeline Stream */}
          <div className="relative flex flex-col gap-space-lg">
            {/* Vertical Timeline Spine */}
            <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-surface-variant"></div>

            {/* Node 1: Class X */}
            <div className="relative flex flex-col md:flex-row items-start gap-space-md group">
              <div className="hidden md:flex w-16 h-16 rounded-xl bg-surface-container items-center justify-center shrink-0 z-10 shadow-md">
                <span className="material-symbols-outlined text-on-surface-variant text-[24px]">terminal</span>
              </div>
              <div className="flex-1 bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs">
                <div className="flex flex-wrap items-center justify-between gap-space-xs">
                  <span className="px-space-sm py-0.5 bg-surface-container-highest text-on-surface-variant font-label-mono-sm text-label-mono-sm rounded">
                    LEVEL 01 • KELAS X PPLG (2023 - 2024)
                  </span>
                  <span className="font-label-mono-sm text-label-mono-sm text-outline">FOUNDATIONS COMPLETE</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary">Foundational Logic &amp; Basic Syntax</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Introduced to fundamental algorithms, procedural programming, HTML5/CSS, and basics of computational thinking at SMKN 6 Surakarta. Built first CLI terminal utilities and simple text-based role-playing systems.
                </p>
              </div>
            </div>

            {/* Node 2: Class XI (Current) */}
            <div className="relative flex flex-col md:flex-row items-start gap-space-md group">
              <div className="hidden md:flex w-16 h-16 rounded-xl bg-primary-container text-on-primary-container items-center justify-center shrink-0 z-10 shadow-[0_0_20px_rgba(0,255,157,0.4)]">
                <span className="material-symbols-outlined text-[26px]">sports_esports</span>
              </div>
              <div className="flex-1 bg-surface-container p-space-lg rounded-xl shadow-md flex flex-col gap-space-sm">
                <div className="flex flex-wrap items-center justify-between gap-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                    <span className="px-space-sm py-0.5 bg-primary-container/20 text-primary-container font-label-mono-sm text-label-mono-sm rounded font-bold">
                      LEVEL 02 • KELAS XI PPLG (ACTIVE QUEST)
                    </span>
                  </div>
                  <span className="font-label-mono-sm text-label-mono-sm text-primary-fixed">IN PROGRESS</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary">Engine Mastering &amp; Playable Prototypes</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Ventured deep into game loop execution, Godot C# nodes, kinematic platforms, and game jam prototypes. Launched first public playable web builds on <strong>itch.io</strong> and represented class in internal VISKA code-sprints.
                </p>
                <div className="flex flex-wrap gap-space-xs pt-1">
                  <span className="px-space-sm py-1 bg-surface-container-high rounded font-label-mono-sm text-label-mono-sm text-secondary-fixed">
                    itch.io Playable Builds
                  </span>
                  <span className="px-space-sm py-1 bg-surface-container-high rounded font-label-mono-sm text-label-mono-sm text-primary-fixed">
                    Godot Character State Controllers
                  </span>
                  <span className="px-space-sm py-1 bg-surface-container-high rounded font-label-mono-sm text-label-mono-sm text-on-surface">
                    PBO Object Architecture
                  </span>
                </div>
              </div>
            </div>

            {/* Node 3: Upcoming PKL */}
            <div className="relative flex flex-col md:flex-row items-start gap-space-md group">
              <div className="hidden md:flex w-16 h-16 rounded-xl bg-surface-container-high items-center justify-center shrink-0 z-10 text-secondary-fixed shadow-md">
                <span className="material-symbols-outlined text-[24px]">rocket_launch</span>
              </div>
              <div className="flex-1 bg-surface-container-low p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs">
                <div className="flex flex-wrap items-center justify-between gap-space-xs">
                  <span className="px-space-sm py-0.5 bg-secondary-container/20 text-secondary-fixed font-label-mono-sm text-label-mono-sm rounded">
                    LEVEL 03 • KELAS XII &amp; PKL PREPARATION
                  </span>
                  <span className="font-label-mono-sm text-label-mono-sm text-secondary">IMMERSIVE INDUSTRIAL EXPERIENCE</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary">Praktik Kerja Lapangan (PKL) &amp; Professional Studios</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Currently preparing for upcoming vocational internships (PKL) in regional game studios and software development agencies across Solo, Yogyakarta, and Jakarta. Seeking roles in Junior Game Programming, Gameplay Scripting, or Frontend Systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: EXTRACURRICULARS & PASSIONS */}
      <section className="w-full max-w-[1200px] mx-auto px-gutter py-space-xl flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
            <span className="font-label-mono-sm text-label-mono-sm text-secondary uppercase font-bold">SYNAPSE &amp; REFLEX</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-primary">EXTRACURRICULARS &amp; PASSIONS</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            High school life at SMKN 6 Surakarta extends beyond the glow of the compiler monitor. Discover the physical and collaborative sparks that charge the workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Card 1: Martial Arts */}
          <div className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all group">
            <div className="h-48 w-full bg-surface-container-highest relative overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Martial artist airborne execution in a high kick jump dynamic pose"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYoh8WpFDVGqwtq1xPbFoPCp0i9SGbaExcdWy-bhr6e4Zj44y13Cf9JJNDl4C686r8PqGDLDxJ4hXzy8rsrPHr7kdFpDbh75E56ix5VXfBNiLodXsNX6xosaEuO3newfNJ11AsEXWeD_l6yQG7XYTLF8x1Esx-TjBom-nqwX8ol_eYIVZBuSGLabe2XyoaFv50bS_ACTgvBQDIcqXRNmgibdGtp0uR5BFEs2e8oLiF"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
              <span className="absolute top-space-sm left-space-sm px-space-sm py-1 bg-surface-container-lowest/80 backdrop-blur-md rounded font-label-mono-sm text-label-mono-sm text-primary-fixed">
                PHYSICAL MOTOR
              </span>
            </div>
            <div className="p-space-lg flex flex-col gap-space-xs flex-1 justify-between">
              <div className="flex flex-col gap-space-xs">
                <h3 className="font-headline-md text-headline-md text-primary">Martial Arts Training</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Honing reflexes, bodily equilibrium, and tenacity through martial arts practice. This directly feeds into how hitboxes, recovery frames, and momentum decay feel inside my fighting games.
                </p>
              </div>
              <div className="pt-space-md flex items-center gap-space-xs text-primary-container font-label-mono-sm text-label-mono-sm">
                <span className="material-symbols-outlined text-[16px]">bolt</span>
                <span>Instinctive Precision</span>
              </div>
            </div>
          </div>

          {/* Card 2: Game Jams & Hackathons */}
          <div className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all group">
            <div className="h-48 w-full bg-surface-container-highest relative overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Late night game development hackathon room"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfkwAnalQEq_QQoIDibw_-pxdRVzXlKreQhYGnsZWFEsJ_4hKo3oYcx7Vvj5Nl3bUU__OvgsXFSrBGzt0PDt7CWBUqyuoBWn4srxfJtlVlAhG8VqjYjBK4YGSZq-9rpZL3OG4l1R2L7xH5_2fXtz_nEIJTs2nKOSlBm--FJBsj_PZcygi7fAAb1AR9ZWqVbj0rt6KP9uR7oQ7MLUOE_lzU-xwiTxByw7PIjpxtsTH"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
              <span className="absolute top-space-sm left-space-sm px-space-sm py-1 bg-surface-container-lowest/80 backdrop-blur-md rounded font-label-mono-sm text-label-mono-sm text-secondary-fixed">
                COMMUNITY COLLAB
              </span>
            </div>
            <div className="p-space-lg flex flex-col gap-space-xs flex-1 justify-between">
              <div className="flex flex-col gap-space-xs">
                <h3 className="font-headline-md text-headline-md text-primary">48h Game Jams</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Teaming up with fellow VISKA creators or solo-sprinting over sleepless weekends to deliver tightly themed prototypes under relentless time constraints.
                </p>
              </div>
              <div className="pt-space-md flex items-center gap-space-xs text-secondary-fixed font-label-mono-sm text-label-mono-sm">
                <span className="material-symbols-outlined text-[16px]">timer</span>
                <span>Rapid Prototyping</span>
              </div>
            </div>
          </div>

          {/* Card 3: Solo Tech Community & VISKA Showcases */}
          <div className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all group">
            <div className="h-48 w-full bg-surface-container-highest relative overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="High school tech exhibition booth at SMK Negeri 6 Surakarta"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6yRGlfa1_HP4_CtE_vqXO6CNjUWifLLVNDVfP_7EGZ_0l7tfcYaTOy49e9dNuBgByWLcRLvjMlOhLepcDrQvHhe3t17BKzmjioc3ifZH1Cwm7_aEI1KNEzX-PJ9I0Cud36jfo5OBh_iM_u1hmYvIBFEtF3dnB8am9A7Ih2ztVwr5juivBaoOuIamqwFH8S86oqvHecJyCYM-LqG7-mvegCqvWIDhG5uruGpM_-Icm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
              <span className="absolute top-space-sm left-space-sm px-space-sm py-1 bg-surface-container-lowest/80 backdrop-blur-md rounded font-label-mono-sm text-label-mono-sm text-primary">
                EXPO &amp; NETWORKING
              </span>
            </div>
            <div className="p-space-lg flex flex-col gap-space-xs flex-1 justify-between">
              <div className="flex flex-col gap-space-xs">
                <h3 className="font-headline-md text-headline-md text-primary">Tech Exhibitions &amp; VISKA Demos</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Presenting student builds during school open houses, gathering player feedback from peers and industry mentors to continuously iterate on game feel.
                </p>
              </div>
              <div className="pt-space-md flex items-center gap-space-xs text-on-surface font-label-mono-sm text-label-mono-sm">
                <span className="material-symbols-outlined text-[16px]">groups</span>
                <span>Player Feedback Loops</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: INTERACTIVE TERMINAL GUESTBOOK & TRANSMISSION CTA */}
      <section className="w-full bg-surface-container-lowest py-space-xl">
        <div className="max-w-[1200px] w-full mx-auto px-gutter">
          <div className="bg-surface-container rounded-xl p-space-lg md:p-space-xl flex flex-col lg:flex-row gap-space-lg items-center justify-between shadow-xl relative overflow-hidden">
            {/* Background decorative grid */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-container/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex flex-col gap-space-sm max-w-xl">
              <div className="flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                <span className="font-label-mono-sm text-label-mono-sm text-primary uppercase">READY FOR COLLABORATION // PKL 2025</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-primary">CONNECT WITH HIKAM</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Looking for a motivated game programming intern (PKL) from SMK Negeri 6 Surakarta, or want to build something wild for an upcoming Game Jam? Let&apos;s establish a link.
              </p>
              <div className="flex flex-wrap gap-space-md pt-space-xs">
                <a
                  className="px-space-lg py-space-sm bg-primary-container text-on-primary-container font-headline-sm text-headline-sm uppercase rounded-lg shadow-[0_0_20px_rgba(0,255,157,0.35)] hover:shadow-[0_0_28px_rgba(0,255,157,0.55)] transition-all flex items-center gap-space-xs cursor-pointer"
                  href="https://hikam-gamedev.itch.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">sports_esports</span>
                  Explore itch.io Games
                </a>
                <button
                  onClick={() => onNavigate('itch-io-and-contact')}
                  className="px-space-lg py-space-sm bg-surface-container-low hover:bg-surface-container-highest text-secondary-fixed font-headline-sm text-headline-sm uppercase rounded-lg transition-all flex items-center gap-space-xs cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                  Dispatch Message
                </button>
              </div>
            </div>

            {/* Simulated Visual Shell Debug Box */}
            <div className="w-full lg:w-[420px] bg-surface-container-lowest rounded-xl p-space-md flex flex-col gap-space-xs shadow-inner font-code-snippet text-code-snippet">
              <div className="flex items-center justify-between pb-2 border-b border-surface-variant">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-error-container"></span>
                  <span className="w-3 h-3 rounded-full bg-surface-variant"></span>
                  <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                </div>
                <span className="text-on-surface-variant text-[11px] font-label-mono-sm uppercase">viska_dev_core.sh</span>
              </div>
              <div className="text-on-surface-variant flex flex-col gap-1 text-[13px] pt-1">
                <p>
                  <span className="text-primary-container">hikam@smkn6-solo</span>:<span className="text-secondary-fixed">~/projects</span>$ ping viska-pplg
                </p>
                <p className="text-on-surface">64 bytes from solo.smkn6: icmp_seq=1 ttl=64 time=0.04 ms</p>
                <p>
                  <span className="text-primary-container">hikam@smkn6-solo</span>:<span className="text-secondary-fixed">~/projects</span>$ check-status
                </p>
                <p className="text-primary-fixed">&gt; SCHOOL: SMK Negeri 6 Surakarta</p>
                <p className="text-primary-fixed">&gt; MAJOR: XI PPLG (Software &amp; Game)</p>
                <p className="text-secondary-fixed">&gt; PASSION: Martial Arts &amp; Game Logic</p>
                <p className="text-on-surface-variant">&gt; STATUS: PKL Opportunity Open _</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
