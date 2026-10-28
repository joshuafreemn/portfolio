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

import lvlGameDay from '../assets/wrk/leevalleylions/game-day.jpg';
import lvlFixtures from '../assets/wrk/leevalleylions/fixtures-october.jpg';
import lvlLineUp from '../assets/wrk/leevalleylions/line-up.jpg';
import lvlWrapUp from '../assets/wrk/leevalleylions/wrap-up.jpg';
import lvlResult from '../assets/wrk/leevalleylions/result.jpg';
import lvlSigning from '../assets/wrk/leevalleylions/signing.jpg';
import lvlStaff from '../assets/wrk/leevalleylions/staff.jpg';
import lvlLeadership from '../assets/wrk/leevalleylions/leadership.jpg';
import lvlJersey from '../assets/wrk/leevalleylions/jersey-reveal.jpg';
import lvlPride from '../assets/wrk/leevalleylions/pride.jpg';
import lvlHuddle from '../assets/wrk/leevalleylions/join-the-huddle.jpg';

import cineCapture from '../assets/wrk/cinesnap/capture.jpg';
import cineStacked from '../assets/wrk/cinesnap/stacked.jpg';
import cineShortcuts from '../assets/wrk/cinesnap/shortcuts.jpg';
import cineReview from '../assets/wrk/cinesnap/review.jpg';

import heatMasked from '../assets/wrk/heatmapper/masked.jpg';
import heatTour from '../assets/wrk/heatmapper/tour.jpg';
import heatPainted from '../assets/wrk/heatmapper/painted.jpg';
import heatExport from '../assets/wrk/heatmapper/export.jpg';

import sudokuMatch from '../assets/wrk/sudokurace/match.jpg';
import sudokuSetup from '../assets/wrk/sudokurace/setup.jpg';
import sudokuThemes from '../assets/wrk/sudokurace/themes.jpg';
import sudokuNight from '../assets/wrk/sudokurace/night.jpg';
import sudokuFinish from '../assets/wrk/sudokurace/finish.jpg';

import pmHero from '../assets/wrk/pallmall/home-hero.jpg';
import pmWireHome from '../assets/wrk/pallmall/wireframe-home.jpg';
import pmWireMasterplan from '../assets/wrk/pallmall/wireframe-masterplan.jpg';
import pmMasterplan from '../assets/wrk/pallmall/masterplan.jpg';
import pmFloorplans from '../assets/wrk/pallmall/floorplans.jpg';
import pmSpecification from '../assets/wrk/pallmall/specification.jpg';
import pmLocalMap from '../assets/wrk/pallmall/local-map.jpg';
import pmLiverpool from '../assets/wrk/pallmall/liverpool-stats.jpg';
import pmConnected from '../assets/wrk/pallmall/connected.jpg';
import pmMobileHome from '../assets/wrk/pallmall/mobile-home.jpg';
import pmMobileBuilding from '../assets/wrk/pallmall/mobile-building.jpg';
import pmMobileFloorplan from '../assets/wrk/pallmall/mobile-floorplan.jpg';

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
  /** A live version to try, linked under the intro. */
  url?: string;
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
  {
    slug: 'cinesnap',
    title: 'Cinesnap',
    description: 'An in-house tool for pulling clean, full-quality stills from films and CGI renders.',
    background: '#efe6dc',
    brief:
      'At work I often get 4K CGI renders, or a finished edit from a client or another company, and need stills from them for a brochure or website. Scrubbing a timeline by hand is slow, and a screen grab rarely gives you the full-quality frame.',
    idea:
      'Let the app find the cuts first. A quick scan splits the film into scenes and shots, so you jump straight to a shot and step frame by frame to the exact still.',
    whatIDid: [
      'Designed and built it on my own, with AI',
      'A three-step flow: import and scan, capture, then review and export',
      'Scene and cut detection with adjustable sensitivity and scan speed',
      'Frame stepping, with a strip of the frames either side of the playhead',
      'Stills saved as full-resolution PNGs, named by timecode, one at a time or as a zip',
    ],
    work: [
      {
        images: [
          {
            src: cineCapture,
            alt: 'Cinesnap capturing frames: a list of detected shots down the left, an ocean shot in the player, playback controls, a Grab Frame button and a strip of the seven frames around the playhead.',
          },
        ],
        columns: 1,
        caption:
          'Capture. The scan lists every shot down the left, and the strip below steps through the frames either side of the playhead. Shown with a test film made for this page.',
      },
      {
        label: 'Layouts',
        images: [
          {
            src: cineStacked,
            alt: 'The stacked layout: the detected shots in a row along the top, with the player and the frame strip below.',
          },
          {
            src: cineShortcuts,
            alt: 'The keyboard shortcuts dialog, listing play, pause and frame stepping keys, each on a button you click to remap.',
          },
        ],
        caption: 'A stacked layout puts the shots in a row above the player. Every shortcut can be remapped.',
      },
      {
        images: [
          {
            src: cineReview,
            alt: 'The Review and Export step: six captured stills, each with its timecode, file name and buttons to jump back, download or delete, and a Download All button.',
          },
        ],
        columns: 1,
        caption: 'Review. Each still is named by its timecode, ready to download on its own or all together as a zip.',
      },
    ],
    result:
      'Used in-house for brochure and website stills. It runs in the browser, so client films never leave the computer.',
    url: 'https://cinesnap-eight.vercel.app/',
  },
  {
    slug: 'heatmapper',
    title: 'Heatmapper',
    description: 'A browser tool for mapping how shoppers move through a store and where they linger, made for a retail design client.',
    background: '#e3efe9',
    brief:
      'A client designing shop floors needed a way to show customer circulation and highlight areas of dwell time while a layout was still at the strategy stage.',
    idea:
      'Paint it like a picture. Hot brushes mark where people linger, cold ones where they pass straight by, and the app blends the rest into a smooth map that stays inside the walls.',
    whatIDid: [
      'Designed and built it on my own, with AI',
      'Hot and cold brushes, an eraser, and exact points for key spots',
      'Floor boundaries, plus cutouts for stockrooms and other no-go areas',
      'Export as a combined PNG or a transparent overlay, at the plan’s own size',
      'Project files you can reopen, and a guided tour on a first visit',
    ],
    work: [
      {
        images: [
          {
            src: heatMasked,
            alt: 'Heatmap Studio with a shop floor plan: red around the feature table, new-in wall, fitting rooms and tills, blue in the quiet corners, a floor boundary around the shop and the stockroom cut out.',
          },
        ],
        columns: 1,
        caption:
          'Dwell time around the feature table, the new-in wall, the fitting rooms and the tills, with quieter corners in blue. A cutout keeps the stockroom clear.',
      },
      {
        label: 'Process',
        images: [
          {
            src: heatTour,
            alt: 'The guided tour on a first visit, highlighting the brush controls over a dimmed shop floor plan.',
          },
          {
            src: heatPainted,
            alt: 'The shop plan after painting, with hot strokes at the busy spots and cold strokes in the quiet corners.',
          },
        ],
        caption: 'A short tour shows the tools on a first visit. Then paint the busiest and quietest areas and the app fills in the rest.',
      },
      {
        images: [
          {
            src: heatExport,
            alt: 'The exported heatmap: the shop plan with warm areas at the fitting rooms, new-in wall and entrance, cool corners, and no editing guides.',
          },
        ],
        columns: 1,
        caption: 'The exported PNG, at the plan’s own size with the editing guides left out. The shop plan is a sample made for this page.',
      },
    ],
    result:
      'Made for a retail design client’s strategy work on shop floors. Plans and projects stay on the computer, and nothing is uploaded.',
    url: 'https://heatmapper-mu.vercel.app/',
  },
  {
    slug: 'sudokurace',
    title: 'Sudoku Race',
    description: 'Head-to-head Sudoku for the studio. Share a room code and race your colleagues to fill the grid.',
    background: '#f3ede0',
    brief:
      'Something to brighten the mornings when we got into work early, or the rainy days when we couldn’t get out to stretch our legs.',
    idea:
      'Treat it like a race. A track above the grid shows how far each player has got, and help such as a solve costs points, so speed and skill both count.',
    whatIDid: [
      'Designed and built it on my own, with AI',
      'Match setup: invite friends with a room code, or practise alone',
      'Four modes: Standardoku, Countdown, Domination and Sabotage',
      'A live race track showing every player’s progress',
      'Pencil notes, and match aids that cost points',
      'Eight colour themes, from Daylight to Nighttime',
    ],
    work: [
      {
        images: [
          {
            src: sudokuMatch,
            alt: 'A Sudoku Race match: a timer and score at the top, a race track with three players, the grid with pencil notes, a number pad and match aids.',
          },
        ],
        columns: 1,
        caption: 'Mid-match. The track shows each racer’s progress, and pencil notes sit in the empty squares.',
      },
      {
        label: 'Setup',
        images: [
          {
            src: sudokuSetup,
            alt: 'The Configure your Speedoku Match screen: play with friends or practise alone, a room code, your name and pencil colour.',
          },
          {
            src: sudokuThemes,
            alt: 'The setup screen with the theme palette open, listing Nighttime, Stormy Sea, Matcha Cafe, Garden Walk, Daylight and more.',
          },
        ],
        caption: 'Set up a match with a room code to share, then pick a mode, a difficulty and a theme.',
      },
      {
        images: [
          {
            src: sudokuNight,
            alt: 'The same match in the dark Nighttime theme.',
          },
          {
            src: sudokuFinish,
            alt: 'The victory screen: Flawless Standardoku, Perfect Score, with points, penalties and first place.',
          },
        ],
        caption: 'The Nighttime theme, and the finish.',
      },
    ],
    result: 'Played in the studio on early mornings and rainy days. Matches run directly between browsers, with no accounts.',
    url: 'https://soduku-race.vercel.app/',
  },
  {
    slug: 'leevalleylions',
    title: 'Lee Valley Lions',
    description: 'Social media for Lee Valley Lions, an ice hockey club at Lee Valley Ice Centre: game days, results, signings and fixtures.',
    background: '#e3edf8',
    brief:
      'The Lions needed a steady run of posts through the season: game day, line-ups, scores and results, monthly fixtures, and news of every signing.',
    idea:
      'One kit of parts for the whole season. The club’s blue, white and green stripes, jersey-mesh textures, heavy type and the lion crest, with a template for each kind of post so the feed looks like one club from week to week.',
    whatIDid: [
      'Templates for game day, line-ups, period scores, full time and the weekend wrap-up',
      'Player and staff signing announcements',
      'Monthly fixture posters and the season fixtures reveal',
      'Motion for the jersey reveal and Pride month',
      'Campaign posts, such as the call for game day volunteers',
    ],
    work: [
      {
        images: [
          {
            src: lvlGameDay,
            alt: 'Game Day poster: a Lions player skating towards the camera in front of huge white GAME DAY type, the Mustangs crest, 5.30pm at Lee Valley Ice Centre.',
          },
          {
            src: lvlFixtures,
            alt: 'October Fixtures poster: a grid of opponent crests with dates above a photo of the team huddled around the net, with a key for home, away, league and cup games.',
          },
        ],
        caption: 'Game day and the monthly fixtures, the two posts the feed is built around.',
      },
      {
        label: 'Matchday',
        images: [
          {
            src: lvlLineUp,
            alt: 'Projected Line Up post listing forwards, defence and netminders on a white card over blue jersey mesh.',
          },
          {
            src: lvlWrapUp,
            alt: 'Weekend Wrap-Up cover for 17–18 October: the Lions crest and big white type on an ice texture, over blue, white and green stripes.',
          },
          {
            src: lvlResult,
            alt: 'Weekend Results slide: the full-time score between the Lions and their opponents, with the man of the match.',
          },
        ],
        columns: 3,
        caption: 'Line-up before the game, then the weekend wrap-up with every result.',
      },
      {
        label: 'Squad news',
        images: [
          {
            src: lvlSigning,
            alt: 'New Signing post for number 51, Bayliffe: an action photo in a tilted frame of blue, white and green stripes.',
          },
          {
            src: lvlStaff,
            alt: 'Off-Ice Official post for D. Warner, using the same tilted frame.',
          },
          {
            src: lvlLeadership,
            alt: 'Leadership post: the captain in the centre of a striped frame, with the assistants and alternates around him.',
          },
        ],
        columns: 3,
        caption: 'One frame for every signing, on and off the ice, and the season’s leadership group.',
      },
      {
        label: 'Motion',
        images: [
          {
            src: lvlJersey,
            video: '/wrk/leevalleylions/jersey-reveal.mp4',
            alt: 'Jersey reveal: the new white Lee Valley number 25 jersey turns on a mannequin, then the green alternate.',
          },
          {
            src: lvlPride,
            video: '/wrk/leevalleylions/pride.mp4',
            alt: 'Pride month post: Roary the lion mascot waves a Pride flag behind animated type reading Loud and Proud, Lions Pride.',
          },
        ],
        caption: 'The new jersey reveal, and Roary the mascot for Pride month.',
      },
      {
        images: [
          {
            src: lvlHuddle,
            alt: 'Join the Huddle poster: the team in a huddle under a blue splash print of Roary, asking for game day volunteers such as goal judge, timekeeper, DJ and physio.',
            width: 640,
          },
        ],
        columns: 1,
        caption: 'Join the Huddle, a call for game day volunteers.',
      },
    ],
    result: 'Posted across the club’s social channels through the 2026–27 season.',
  },
  {
    slug: 'pallmall',
    title: 'Pall Mall Liverpool',
    description:
      'A marketing website for Pall Mall Gardens, four new Grade A office buildings around a public garden in Liverpool’s business district.',
    background: '#e8eff8',
    brief:
      'Pall Mall Gardens needed a website to market its office space to occupiers and their agents. The brochure was already written, so the site had to carry the same story online: the masterplan, the first building, the city and how to get there, with the brochure one click away.',
    idea:
      'Build the site from the brochure. I wireframed every page with each section matched to the brochure page it came from, so the content was settled before any design started. The design then took the brochure’s cream, blue, green and orange into an interactive masterplan, floor-by-floor plans, a local map and a transport diagram.',
    whatIDid: [
      'Site structure and wireframes mapped to the brochure',
      'Desktop and mobile designs for every page',
      'Interactive masterplan and floor plan explorer',
      'Local amenities map and transport diagram',
    ],
    work: [
      {
        images: [
          {
            src: pmHero,
            alt: 'Home page hero: Pall Mall Gardens Liverpool set over a render of people walking through the new garden, under a cream navigation bar.',
          },
        ],
        columns: 1,
      },
      {
        label: 'Wireframes',
        images: [
          {
            src: pmWireHome,
            alt: 'Home page wireframe in grey blocks, with yellow notes beside each section naming its brochure page, from the hero on page 1 to the footer on page 31.',
          },
          {
            src: pmWireMasterplan,
            alt: 'Master Plan wireframe: hero, aerial map, interactive masterplan and public realm, each tagged with its brochure page.',
          },
        ],
        caption: 'Every section was matched to a page of the brochure, noted in yellow beside it.',
        columns: 2,
      },
      {
        label: 'The masterplan and the building',
        images: [
          {
            src: pmMasterplan,
            alt: 'A new business community: the four Pall Mall buildings listed with their storeys and floor areas beside a site plan, offices in green and the hotel in orange.',
          },
          {
            src: pmFloorplans,
            alt: 'Floor plan explorer for 1 Pall Mall: a list of floors from Roof Terrace to Basement beside the roof plan, with amenity icons on dark green.',
          },
        ],
        columns: 2,
      },
      {
        images: [
          {
            src: pmSpecification,
            alt: 'Grade A Specification: orange icons for NABERS 5 stars, BREEAM excellent, EPC A, all electric, cycle spaces, EV charging and more.',
          },
        ],
        columns: 1,
      },
      {
        label: 'Liverpool and connectivity',
        images: [
          {
            src: pmLocalMap,
            alt: 'At the centre of everything: hotels, restaurants, coffee shops and bars listed in cards beside a yellow street map with numbered pins around Pall Mall.',
          },
          {
            src: pmLiverpool,
            alt: 'World class business destination: Liverpool Lime Street beside orange icons for two airports, a population of 1.6 million and a two hour journey to London.',
          },
        ],
        columns: 2,
      },
      {
        images: [
          {
            src: pmConnected,
            alt: 'Connected to everywhere: a UK map with journey times by train and car, an Air, Rail and Merseyrail accordion, and a Merseyrail line diagram.',
          },
        ],
        columns: 1,
      },
      {
        label: 'Mobile',
        images: [
          {
            src: pmMobileHome,
            alt: 'Mobile home page: the Pall Mall Gardens Liverpool title over a render of the building entrance.',
          },
          {
            src: pmMobileBuilding,
            alt: 'Mobile 1 Pall Mall page: the building name over a render of people in the garden beneath the brick facade.',
          },
          {
            src: pmMobileFloorplan,
            alt: 'Mobile floor plan: the Roof Terrace plan on dark green with amenity icons and a scrolling row of floor names.',
          },
        ],
        columns: 3,
      },
    ],
    result: 'Live at pallmallliverpool.com.',
    url: 'https://pallmallliverpool.com/',
  },
];

// A case study only gets a page (and its card a link) once it has images.
export const caseStudies = allCaseStudies.filter((study) => study.work.length > 0);

export const findCaseStudy = (slug?: string) => caseStudies.find((c) => c.slug === slug);
