export type TabId =
  | 'overview'
  | 'games-and-projects'
  | 'about-and-school'
  | 'skills-and-tech-stack'
  | 'itch-io-and-contact';

export interface Project {
  id: string;
  category: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  title: string;
  version: string;
  versionColor: string;
  imgUrl: string;
  imgAlt: string;
  platform: string;
  fps: string;
  tags: string[];
  description: string;
  highlights: string[];
  controls: { key: string; label: string; color?: string }[];
  devlog: {
    date: string;
    title: string;
    notes: string[];
    status: string;
  };
}
