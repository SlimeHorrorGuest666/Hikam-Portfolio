import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest py-space-xl shadow-[0_-1px_8px_rgba(0,0,0,0.3)] border-t border-surface-variant/30">
      <div className="max-w-[1200px] mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex flex-col items-center md:items-start gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <span className="font-headline-sm text-headline-sm text-primary">HIKAM.DEV</span>
            <span className="px-space-sm py-space-xs bg-surface-container text-on-surface-variant font-label-mono-sm text-label-mono-sm rounded-lg">
              SMK BISA • HEBAT
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-left">
            SMK Negeri 6 Surakarta • Program Keahlian Pengembangan Perangkat Lunak dan Gim
          </p>
          <span className="font-label-mono-sm text-label-mono-sm text-outline">
            Terakreditasi A • ISO 9001:2015 SMK Rujukan Nasional
          </span>
        </div>

        <div className="flex items-center gap-space-md flex-wrap justify-center">
          <a
            className="px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container font-label-mono-sm text-label-mono-sm text-secondary hover:text-on-surface rounded-lg transition-all flex items-center gap-space-xs"
            href="https://hikam-gamedev.itch.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[16px]">sports_esports</span>
            hikam-gamedev.itch.io
          </a>
          <a
            className="px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container font-label-mono-sm text-label-mono-sm text-on-surface-variant hover:text-on-surface rounded-lg transition-all flex items-center gap-space-xs"
            href="https://github.com/SlimeHorrorGuest666"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[16px]">code</span>
            @SlimeHorrorGuest666
          </a>
          <a
            className="px-space-md py-space-sm bg-surface-container-low hover:bg-surface-container font-label-mono-sm text-label-mono-sm text-secondary-fixed hover:text-on-surface rounded-lg transition-all flex items-center gap-space-xs"
            href="https://www.instagram.com/hikamhoror5/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[16px]">photo_camera</span>
            @hikamhoror5
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-space-xs text-center md:text-right">
          <span className="font-label-mono-sm text-label-mono-sm text-on-surface">
            Engineered by Hikam • XI PPLG
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            © 2025 All Quests &amp; Codebases Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
