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

import vsLogo from '../assets/wrk/123victoria/logo.jpg';
import vsLanes from '../assets/wrk/123victoria/lanes.jpg';
import vsHalftone from '../assets/wrk/123victoria/halftone.jpg';
import vsHorses from '../assets/wrk/123victoria/campaign-horses.jpg';
import vsCommute from '../assets/wrk/123victoria/campaign-commute.jpg';
import vsHandover from '../assets/wrk/123victoria/campaign-handover.jpg';
import vsDesk from '../assets/wrk/123victoria/campaign-desk.jpg';
import vsRelay from '../assets/wrk/123victoria/poster-relay.jpg';
import vsBasketball from '../assets/wrk/123victoria/campaign-basketball.jpg';
import vsCoffee from '../assets/wrk/123victoria/campaign-coffee.jpg';
import vsMerchandise from '../assets/wrk/123victoria/merchandise.jpg';
import vsExploreBrochure from '../assets/wrk/123victoria/explore-brochure.jpg';
import vsExploreSights from '../assets/wrk/123victoria/explore-set-your-sights.jpg';
import vsExploreKnow from '../assets/wrk/123victoria/explore-know-your-place.jpg';
import vsExploreVictorious from '../assets/wrk/123victoria/explore-victorious.jpg';
import vsExploreStand from '../assets/wrk/123victoria/explore-take-your-stand.jpg';
import vsExplore123Vic from '../assets/wrk/123victoria/explore-123vic.jpg';

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
  {
    slug: '123victoria',
    title: '123 Victoria Street',
    description:
      'Find Your Place: a pitch route for the relaunch of 123 Victoria Street in London, built on the podium, the track and the race to the line.',
    background: '#f8f2cf',
    brief:
      'Creative options for relaunching 123 Victoria Street, a London office building, after its third major refurbishment. This is route three of the pitch.',
    idea:
      '123 Victoria Street is more than an address. Its number reflects the podium positions of first, second and third, while Victoria suggests victory and success. Following its third major refurbishment, the building is sharper, more agile and ready for its next chapter. Like lanes one, two and three on a track, it offers occupiers the inside line by design. “Find Your Place” captures this sense of position, progress and belonging.',
    work: [
      {
        images: [
          {
            src: vsHorses,
            alt: 'Office workers in shirts and ties racing horses past a red-brick building, with the yellow stepped Find Your Place podium lockup.',
          },
        ],
        columns: 1,
      },
      {
        label: 'Identity',
        images: [
          { src: vsLogo, alt: 'The 123 mark: the numbers 1, 2 and 3 stepped down like a podium, each underlined.' },
          { src: vsLanes, alt: 'The 123 mark in green running down three white track lanes on a lime background.' },
        ],
        caption:
          'The mark steps 1, 2 and 3 down like a podium. Track lanes and a stepped yellow lockup carry the same idea across the campaign.',
        columns: 2,
      },
      {
        images: [
          {
            src: vsHalftone,
            alt: 'Two black and white line-screen treatments: a man in a suit against a crowd, and a jockey at speed.',
          },
        ],
        columns: 1,
      },
      {
        label: 'Campaign',
        images: [
          { src: vsCommute, alt: 'Commuters in suits sprinting along a blue running track laid through an Underground station.' },
          { src: vsHandover, alt: 'A man in a suit takes a stack of papers like a relay baton, with the Find Your Place lockup.' },
          { src: vsDesk, alt: 'A man in a suit launches from his office chair like a sprinter, with a race clock in the corner.' },
          { src: vsRelay, alt: 'Poster of hands passing tablets, pens and papers down a line like relay batons.' },
          { src: vsBasketball, alt: 'Duotone illustration of an office worker dunking a basketball against a cyan sky.' },
          { src: vsCoffee, alt: 'A smiling office junior balancing a tower of coffee cups on a tray.' },
        ],
        columns: 2,
      },
      {
        label: 'Exploration',
        images: [
          {
            src: vsExploreBrochure,
            alt: 'Brochure spread: the 123 mark in green track lanes beside a line-screened sprinter and the word Victoria.',
          },
          {
            src: vsExploreSights,
            alt: 'Set Your Sights: a line-screened figure in lime and black with the 123 Victoria wordmark.',
          },
        ],
        columns: 2,
      },
      {
        images: [
          { src: vsExploreKnow, alt: 'Know Your Place poster: three line-screened figures in yellow on yellow.' },
          { src: vsExploreVictorious, alt: 'For the Victorious poster: a line-screened figure in bright green.' },
          {
            src: vsExploreStand,
            alt: 'Take Your Stand poster: two cyclists on a podium, with the first place figure in yellow line-screen.',
          },
          { src: vsExplore123Vic, alt: '123 VIC poster: yellow panel beside an orange line-screened crowd.' },
        ],
        caption: 'Early posters testing the line-screen treatment and the podium idea in brighter, single-colour palettes.',
        columns: 4,
      },
      {
        label: 'Merchandise',
        images: [
          {
            src: vsMerchandise,
            alt: 'Merchandise: a blue tracksuit with the 123 mark, a framed 10K finisher medal and route map, and padel bats numbered 1, 2 and 3.',
          },
        ],
        columns: 1,
      },
    ],
  },
];

export const findCaseStudy = (slug?: string) => caseStudies.find((c) => c.slug === slug);
