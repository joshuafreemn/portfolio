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

import spSitemap from '../assets/wrk/storeproperty/sitemap.jpg';
import spUserFlow from '../assets/wrk/storeproperty/user-flow.jpg';
import spWireframe from '../assets/wrk/storeproperty/wireframe-property.jpg';
import spMap from '../assets/wrk/storeproperty/design-map.jpg';
import spPortfolio from '../assets/wrk/storeproperty/design-portfolio.jpg';
import spHome from '../assets/wrk/storeproperty/design-home.jpg';

import shAnimationPoster from '../assets/wrk/storehouse/hero-animation-poster.jpg';
import shOverview from '../assets/wrk/storehouse/v1-overview.jpg';
import shLogo from '../assets/wrk/storehouse/v1-logo.jpg';
import shBigIdeas from '../assets/wrk/storehouse/v1-big-ideas.jpg';
import shPosters from '../assets/wrk/storehouse/v1-posters.jpg';
import shType from '../assets/wrk/storehouse/v1-type.jpg';
import shPrint from '../assets/wrk/storehouse/v1-print.jpg';
import shSocial from '../assets/wrk/storehouse/v1-social.jpg';

import qrLanding from '../assets/wrk/smartqr/landing.jpg';
import qrDashboard from '../assets/wrk/smartqr/dashboard.jpg';
import qrSignIn from '../assets/wrk/smartqr/sign-in.jpg';

export interface WorkImage {
  src: ImageMetadata;
  alt: string;
  /** Cap the display width (Figma px) for small artwork that would blur if stretched to fill its tile. */
  width?: number;
  /** A looping clip in /public to play in place of the image, which becomes its poster. */
  video?: string;
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

const allCaseStudies: CaseStudy[] = [
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
      'Creative options for relaunching 123 Victoria Street, a London office building, after its third major refurbishment. This is route three of the pitch, which I designed on my own.',
    idea:
      '123 Victoria Street is more than an address. Its number reflects the podium positions of first, second and third, while Victoria suggests victory and success. Following its third major refurbishment, the building is sharper, more agile and ready for its next chapter. Like lanes one, two and three on a track, it offers occupiers the inside line by design. “Find Your Place” captures this sense of position, progress and belonging.',
    whatIDid: [
      'Sole designer on this route',
      'The idea, strategy and positioning',
      'Identity: the 123 podium mark and track-lane system',
      'Line-screen image treatment and campaign art direction',
      'Campaign images, posters and merchandise',
    ],
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
  {
    slug: 'storeproperty',
    title: 'Store Property',
    description:
      'A friendlier website for a family-run property company, redesigned inside the brand they already had.',
    background: '#eef0f6',
    brief:
      'After Store House, Store Property asked Smart Soho to redesign their company website, which felt rigid and formal. The brand was established and they had invested in merchandise they didn’t want to remake, so the new site had to work within it.',
    idea:
      'Start from how people use the site. I mapped the sitemap and the user flows for tenants, prospective tenants, agents and visitors. The client isn’t technical, so I drew the wireframes inside the brand to help them picture the finished site, then took it through to final designs and worked with an external developer to build it.',
    whatIDid: [
      'Sitemap and user flows',
      'Wireframes styled in the brand',
      'Final desktop and mobile designs',
      'Design handover and build with an external developer',
    ],
    work: [
      {
        images: [
          {
            src: spMap,
            alt: 'London Offices page hero: a dark street map of central London with Store Property buildings drawn as orange and pink icons.',
          },
        ],
        columns: 1,
      },
      {
        label: 'Sitemap and user flows',
        images: [
          {
            src: spSitemap,
            alt: 'Sitemap for the Store Property website, branching from the home page into London Offices, About, Contact and Portfolio.',
          },
          {
            src: spUserFlow,
            alt: 'User flow diagram routing tenants, general visitors, prospective tenants and London office visitors to what they need.',
          },
        ],
        columns: 2,
      },
      {
        label: 'Wireframe',
        images: [
          {
            src: spWireframe,
            alt: 'Property page wireframe in the Store Property navy and pink: gallery, property details, enquiry card and description.',
          },
        ],
        caption: 'Wireframes kept the brand’s colours and type so the client could picture the finished pages.',
        columns: 1,
      },
      {
        label: 'Final design',
        images: [
          {
            src: spHome,
            alt: 'Home page sections: the company introduction and a Recent Projects carousel of offices, industrial units and retail.',
          },
          {
            src: spPortfolio,
            alt: 'London Property grid of nine buildings, filterable by All London, Aparthotel and Offices.',
          },
        ],
        columns: 2,
      },
    ],
    result: 'Live at storeproperty.co.uk, built by an external developer from my designs. The client was very pleased with it.',
  },
  {
    slug: 'storehouse',
    title: 'Store House',
    description: 'Branding, a brochure and a one-page website for Store House, a newly acquired building in Bermondsey.',
    background: '#f3efe8',
    brief:
      'Store Property approached Smart Soho to create branding, a brochure and a website for Store House, a building they had just acquired.',
    idea:
      'For the pitch I created a branding route which, as often happens, was combined with a colleague’s route to make the final identity. That identity carried through the brochure and the website. With little time for the one-page site, I designed straight from the brochure and translated it into the live build, including the hero animation the client particularly liked.',
    whatIDid: [
      'Pitch branding route, combined with a colleague’s for the final identity',
      'Brochure',
      'One-page scrolling website, designed from the brochure',
      'Hero animation',
    ],
    // Still to come: the final branding, the brochure and the live site.
    work: [
      {
        images: [
          {
            src: shAnimationPoster,
            video: '/wrk/storehouse/hero-animation.mp4',
            alt: 'The website hero animation: a street of cream building silhouettes slides past on navy, stopping on the orange Store House building with the wordmark above it and 75 Bermondsey St SE1 below.',
          },
        ],
        columns: 1,
        caption: 'The hero animation from the live site, in the final identity.',
      },
      {
        label: 'My pitch route',
        images: [
          {
            src: shOverview,
            alt: 'Overview of the pitch route: the line Storehouse of Big Ideas on plywood, a cutaway axonometric of the building on orange, Storehouse packing tape, an office interior, OSB board with the repeating wordmark, and the logo on dark brick.',
          },
        ],
        columns: 1,
        caption:
          'A building mark cut from the materials of the site, its brick and plywood, with a wordmark that runs like packing tape.',
      },
      {
        images: [
          {
            src: shLogo,
            alt: 'The building mark in bare plywood on orange-stained plywood, beside the wordmark with Seventy Five above and Bermondsey St SE1 below.',
          },
          {
            src: shBigIdeas,
            alt: 'The line The Storehouse of Big Ideas in cream beside the building mark filled with stone, on dark brown brick.',
          },
          {
            src: shPosters,
            alt: 'Two square posters, one on brick and one on orange plywood, each with the building mark crossed by a diagonal band of the repeating wordmark.',
          },
          {
            src: shType,
            alt: 'Type specimen: PP Rader as the master font in orange on cream, and Satoshi as the secondary font on brown.',
          },
        ],
      },
      {
        images: [
          {
            src: shPrint,
            alt: 'A brochure in a pale blue slipcase, its cover splitting the wordmark across a brick page and a plywood page.',
          },
          {
            src: shSocial,
            alt: 'Four phone stories: Available now in SE1 on brick, 11,429 sq ft over an office render, Office space over a reception render, and the logo on plywood.',
          },
        ],
      },
    ],
    result:
      'Live at storehousese1.com. Store Property has since bought more buildings, and the branding has been extended to two of them, including 30 Newman Street (storehousew1.com). The client liked it so much that they are retiring their SP Managed brand and bringing everything under Store House.',
  },
  {
    slug: 'smartqr',
    title: 'Smart QR',
    description: 'An in-house tool for Smart Soho that makes QR codes you can repoint after they have gone to print.',
    background: '#fbeceb',
    brief:
      'Smart Soho puts QR codes on hoardings, brochures and event material for its clients. Once a code is printed its link is fixed, so a changed page or a new campaign meant new artwork.',
    idea:
      'Print a code that points to a link the studio controls, so the destination can change at any time without touching the artwork. Keep it simple enough for anyone in the studio: create a code, change where it goes, download a PNG.',
    whatIDid: [
      'Designed the tool and built it with Claude',
      'Landing page and dashboard in the Smart Soho brand',
      'Create, edit, search and PNG download',
      'Domain, hosting on Cloudflare Pages and the back end',
      'Team-only sign-in through Cloudflare Access',
    ],
    work: [
      {
        images: [
          {
            src: qrLanding,
            alt: 'The Smart QR landing page: the Smart Soho logo, the headline QR links that stay useful, and an Open QR dashboard button.',
          },
        ],
        columns: 1,
      },
      {
        label: 'Dashboard',
        images: [
          {
            src: qrDashboard,
            alt: 'The Your QR codes dashboard: a search box, a Create QR code button and a table of seven codes with their names, blurred destinations, update dates, and Edit and download actions.',
          },
        ],
        columns: 1,
        caption: 'Every code in one list, with Edit to repoint it and a download for the PNG. Client links are blurred here.',
      },
      {
        images: [
          {
            src: qrSignIn,
            alt: 'The Cloudflare Access sign-in screen: Log in to smartqr.uk, an email field and a Send login code button.',
            width: 720,
          },
        ],
        columns: 1,
        caption: 'Sign-in sits behind Cloudflare Access, so only the team can reach the dashboard.',
      },
    ],
    result: 'In use at Smart Soho at smartqr.uk, with live codes on campaigns for several clients.',
  },
];

// A case study only gets a page (and its card a link) once it has images.
export const caseStudies = allCaseStudies.filter((study) => study.work.length > 0);

export const findCaseStudy = (slug?: string) => caseStudies.find((c) => c.slug === slug);
