// Cards for the Design and Web folders. Leave a field out rather than filling
// it with placeholder copy: empty fields are not shown.
import type { ImageMetadata } from 'astro';
import rlamHero from '../assets/wrk/rlamls/hero.png';
import spManaged from '../assets/cards/spmanaged.png';

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

// Design folder, in the order from the site brief.
export const designProjects: Project[] = [
  {
    title: 'Store House',
    type: 'Branding · Web · Motion · Brochure · Print',
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
    type: 'Branding',
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
  { title: 'Store Property' },
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
