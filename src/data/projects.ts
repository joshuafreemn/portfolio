// Cards for the Design and Web folders. Leave a field out rather than filling
// it with placeholder copy: empty fields are not shown.
import type { ImageMetadata } from 'astro';
import rlamHero from '../assets/wrk/rlamls/hero.png';
import spManaged from '../assets/cards/spmanaged.png';
import storeHouseMark from '../assets/cards/storehouse.jpg';
import storePropertyMap from '../assets/wrk/storeproperty/design-map.jpg';
import victoriaHorses from '../assets/wrk/123victoria/campaign-horses.jpg';
import { findCaseStudy } from './caseStudies';

export interface ProjectImage {
  src: ImageMetadata;
  alt: string;
}

export interface Project {
  title: string;
  type?: string;
  client?: string;
  agency?: string;
  role?: string;
  tools?: string;
  image?: ProjectImage;
  /** Case study slug under /wrk/. Only linked once the case study is in caseStudies.ts. */
  caseStudy?: string;
  /** External site, opened in a new tab. */
  url?: string;
}

export interface ProjectLink {
  href: string;
  label: string;
  external: boolean;
}

// Where a card goes when clicked: its case study once that's ready, otherwise
// its live site, otherwise nowhere yet.
export function projectLink(project: Project): ProjectLink | null {
  const caseStudy = findCaseStudy(project.caseStudy);
  if (caseStudy) return { href: `/wrk/${caseStudy.slug}.html`, label: 'View case study', external: false };
  if (project.url) {
    return { href: project.url, label: `Visit ${new URL(project.url).hostname.replace(/^www\./, '')}`, external: true };
  }
  return null;
}

// Design folder, in the order from the site brief.
export const designProjects: Project[] = [
  {
    title: 'Store House',
    type: 'Branding · Web · Motion · Brochure · Print',
    client: 'Store Property',
    agency: 'Smart Soho',
    url: 'https://storehousese1.com/',
    image: {
      src: storeHouseMark,
      alt: 'The Store House logo: an orange building with arched windows under the stacked wordmark, on navy.',
    },
    caseStudy: 'storehouse',
  },
  {
    title: 'RLAM Life Science',
    type: 'Brand Identity & Kinetic System',
    client: 'Royal London Asset Management: Life Science',
    agency: 'Smart Soho',
    role: 'Designer',
    tools: 'Adobe CC Suite',
    image: {
      src: rlamHero,
      alt: 'Laboratory culture tray photography overlaid with the RLAM Life Sciences wordmark.',
    },
    caseStudy: 'rlamls',
  },
  {
    title: '123 Victoria',
    type: 'Branding & Campaign Pitch',
    client: '123 Victoria Street, London',
    agency: 'Smart Soho',
    role: 'Sole designer (pitch route)',
    image: {
      src: victoriaHorses,
      alt: 'Office workers racing horses past a red-brick building, from the Find Your Place campaign.',
    },
    caseStudy: '123victoria',
  },
  {
    title: 'Lee Valley Lions',
    type: 'Social Media',
    caseStudy: 'leevalleylions',
  },
  {
    title: 'SP Managed',
    type: 'Brand Identity & Motion Collateral',
    client: 'SP. Property',
    agency: 'Smart Soho',
    role: 'Designer',
    tools: 'Adobe CC Suite',
    image: {
      src: spManaged,
      alt: 'SP Managed brand collateral with bold colour coding.',
    },
    caseStudy: 'spmanaged',
  },
];

// Web folder: client sites first, in the Figma order.
export const webProjects: Project[] = [
  {
    title: 'Store Property',
    type: 'Website Redesign',
    client: 'Store Property',
    agency: 'Smart Soho',
    role: 'Designer',
    image: {
      src: storePropertyMap,
      alt: 'London Offices page hero: a dark street map of central London with Store Property buildings drawn as icons.',
    },
    caseStudy: 'storeproperty',
    url: 'https://www.storeproperty.co.uk/',
  },
  { title: 'The Curve' },
  { title: 'Pall Mall Liverpool', url: 'https://pallmallliverpool.com/' },
  { title: 'Smart QR', url: 'https://smartqr.uk/' },
];

export interface Experiment {
  title: string;
  url: string;
  description?: string;
}

export const experiments: Experiment[] = [
  {
    title: 'Cinesnap',
    url: 'https://cinesnap-eight.vercel.app/',
    description: 'Film frame grabber: finds the cuts in a video and saves stills.',
  },
  { title: 'Heatmapper', url: 'https://heatmapper-mu.vercel.app/' },
  {
    title: 'Sudoku Race',
    url: 'https://soduku-race.vercel.app/',
    description: 'Timed Sudoku matches, solo or live against friends.',
  },
];
