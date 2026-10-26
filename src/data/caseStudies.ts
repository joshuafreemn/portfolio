// Case studies under /wrk/. Every page uses the same template
// (src/pages/wrk/[slug].astro): The brief · The idea · What I did · The work ·
// Where it ran. Leave a section out until its copy is real; empty sections are
// not rendered. A project only gets a page, and a linked card, once its case
// study is listed here.
import type { ImageMetadata } from 'astro';

import hero from '../assets/wrk/rlamls/hero.png';
import processCellDivision from '../assets/wrk/rlamls/process-cell-division.png';
import alphabet from '../assets/wrk/rlamls/alphabet.jpg';
import lockup from '../assets/wrk/rlamls/lockup.jpg';
import partnerLockups from '../assets/wrk/rlamls/partner-lockups.jpg';
import symbolVariants from '../assets/wrk/rlamls/symbol-variants.jpg';
import iconReduced from '../assets/wrk/rlamls/icon-reduced.png';
import iconMicro from '../assets/wrk/rlamls/icon-micro.png';
import parkAbingdon from '../assets/wrk/rlamls/park-abingdon.png';
import parkArcOxford from '../assets/wrk/rlamls/park-arc-oxford.png';
import parkOneTriton from '../assets/wrk/rlamls/park-one-triton.png';
import parkCambridge from '../assets/wrk/rlamls/park-cambridge.png';
import appBadge from '../assets/wrk/rlamls/app-badge.jpg';
import appWebsite from '../assets/wrk/rlamls/app-website.jpg';
import appSignage from '../assets/wrk/rlamls/app-signage.jpg';
import appTote from '../assets/wrk/rlamls/app-tote.jpg';
import campaignHero from '../assets/wrk/rlamls/campaign-hero.png';
import campaignCellCulture from '../assets/wrk/rlamls/campaign-cell-culture.jpg';
import campaignCellularData from '../assets/wrk/rlamls/campaign-cellular-data.jpg';
import campaignEvaluate from '../assets/wrk/rlamls/campaign-evaluate.jpg';

export interface WorkImage {
  src: ImageMetadata;
  alt: string;
  /** Cap the display width (Figma px) for small artwork that would blur if stretched to fill its tile. */
  width?: number;
}

export interface WorkGroup {
  /** Small label above the group, e.g. "Process". */
  label?: string;
  images: WorkImage[];
  caption?: string;
  /** Grid columns on desktop. */
  columns?: 1 | 2 | 3 | 4;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  /** Page background, picked from the project's palette. */
  background: string;
  brief?: string;
  idea?: string;
  whatIDid?: string[];
  work: WorkGroup[];
  result?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'rlamls',
    title: 'RLAM Life Sciences',
    description:
      'Conceptual brand identity for Royal London Asset Management: Life Science, inspired by cell division, with a custom display typeface and kinetic design rules.',
    background: '#e3fbf7',
    idea:
      'The concept is inspired by the process of cell division, a core mechanism through which living organisms grow. This serves as an analogy for how a tenant within RLAM can begin at a small scale and progressively expand over time. The design reflects structured, organic growth, aligning with RLAM’s commitment to supporting long-term development and scalable potential.',
    whatIDid: [
      'Identity concept and logo lockups',
      'Custom display typeface built from the cell-division abstraction',
      'Font pairing and symbol reductions',
      'Logos for four parks in the portfolio',
      'Applications: staff badge, website, signage and merchandise',
      'Campaign cards',
    ],
    work: [
      {
        images: [
          {
            src: hero,
            alt: 'Laboratory culture tray photography overlaid with the RLAM Life Sciences wordmark and the line Cells Created for Growth.',
          },
        ],
        columns: 1,
      },
      {
        label: 'Process',
        images: [
          {
            src: processCellDivision,
            alt: 'Diagram pairing cell division references with a graphical abstraction of the identity shape.',
          },
          { src: alphabet, alt: 'Custom display alphabet derived from the RLAM identity motif.' },
        ],
        columns: 2,
      },
      {
        label: 'Identity',
        images: [
          {
            src: lockup,
            alt: 'Primary RLAM Life Sciences lockup with the full Royal London Asset Management line.',
          },
          {
            src: partnerLockups,
            alt: 'Partner and lockup variants combining the Royal London mark with the RLAM Life Sciences identity.',
          },
        ],
        caption:
          'Font pairings use Bai Jamjuree alongside a custom mark built from the cell division abstraction, giving the identity a precise but expandable system across print, signage and digital surfaces.',
        columns: 2,
      },
      {
        images: [
          { src: symbolVariants, alt: 'A row of distilled RLAM Life Sciences symbol variants.', width: 320 },
          { src: iconReduced, alt: 'Reduced icon built from the RLAM Life Sciences mark.', width: 197 },
          { src: iconMicro, alt: 'Micro icon reduction of the RLAM Life Sciences mark.', width: 71 },
        ],
        caption:
          'Font pairings and reduced symbols were tested in parallel so the custom forms could hold up from full lockups down to the smallest navigation marks.',
        columns: 3,
      },
      {
        label: 'Parks',
        images: [
          { src: parkAbingdon, alt: 'Abingdon Business Park logo.' },
          { src: parkArcOxford, alt: '2600 ARC Oxford logo.' },
          { src: parkOneTriton, alt: 'One Triton Square logo.' },
          { src: parkCambridge, alt: 'Cambridge Research Park logo.' },
        ],
        columns: 4,
      },
      {
        label: 'Applications',
        images: [
          { src: appBadge, alt: 'Branded staff badge application.' },
          { src: appWebsite, alt: 'Website mockup on a laptop.' },
          { src: appSignage, alt: 'Building signage carrying the RLAM Life Sciences mark.' },
          { src: appTote, alt: 'Merchandise tote using the identity system.' },
        ],
        columns: 2,
      },
      {
        label: 'Campaign',
        images: [
          { src: campaignHero, alt: 'Hero campaign card with the RLAM wordmark set against lab photography.' },
          { src: campaignCellularData, alt: 'Cellular Data collage card composed from multiple lifestyle images.' },
          { src: campaignCellCulture, alt: 'Cell Culture editorial card pairing photography with copy.' },
          { src: campaignEvaluate, alt: 'Evaluate Enhance card showing a blue-toned laptop scene.' },
        ],
        columns: 2,
      },
    ],
  },
];

export const findCaseStudy = (slug?: string) => caseStudies.find((c) => c.slug === slug);
