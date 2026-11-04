// Case studies under /wrk/. Every page uses the same template
// (src/pages/wrk/[slug].astro): an At a glance card for skimmers, then The
// problem · The solution · The delivery, the work (with optional story notes
// between groups, so the detail unfolds as you scroll) and The outcome. Leave a
// section out until its copy is real; empty sections are not rendered. A project only gets a page, and a linked card, once its case
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
import shFinalLogo from '../assets/wrk/storehouse/final-logo.jpg';
import shFinalPatterns from '../assets/wrk/storehouse/final-patterns.jpg';
import shFinalPalette from '../assets/wrk/storehouse/final-palette.jpg';
import shFinalType from '../assets/wrk/storehouse/final-type.jpg';
import shBroCover from '../assets/wrk/storehouse/brochure-cover.jpg';
import shBroBuilding from '../assets/wrk/storehouse/brochure-building.jpg';
import shBroSchedule from '../assets/wrk/storehouse/brochure-schedule.jpg';
import shBroFloorplans from '../assets/wrk/storehouse/brochure-floorplans.jpg';
import shBroHighlights from '../assets/wrk/storehouse/brochure-highlights.jpg';
import shBroConnected from '../assets/wrk/storehouse/brochure-connected.jpg';
import shBoardPhoto from '../assets/wrk/storehouse/letting-board-photo.jpg';
import shBoard from '../assets/wrk/storehouse/letting-board.jpg';
import shAd from '../assets/wrk/storehouse/half-page-ad.jpg';
import shTenantBoard from '../assets/wrk/storehouse/tenant-board.jpg';
import shPoster from '../assets/wrk/storehouse/a3-poster.jpg';
import shFlag from '../assets/wrk/storehouse/feather-flag.jpg';
import shNewmanCover from '../assets/wrk/storehouse/newman-cover.jpg';
import shNewmanHighlights from '../assets/wrk/storehouse/newman-highlights.jpg';
import shElyCover from '../assets/wrk/storehouse/ely-cover.jpg';
import shElyHighlights from '../assets/wrk/storehouse/ely-highlights.jpg';
import shNewmanInvite from '../assets/wrk/storehouse/newman-invite.jpg';

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

import tcHero from '../assets/wrk/thecurve/home-hero.jpg';
import tcWireHome from '../assets/wrk/thecurve/wireframe-home.jpg';
import tcDesignHome from '../assets/wrk/thecurve/design-home.jpg';
import tcSchedule from '../assets/wrk/thecurve/schedule.jpg';
import tcFloorplans from '../assets/wrk/thecurve/floorplans.jpg';
import tcFeaturesMotion from '../assets/wrk/thecurve/features-motion.jpg';
import tcMasterplan from '../assets/wrk/thecurve/masterplan.jpg';
import tcNeighbours from '../assets/wrk/thecurve/neighbours.jpg';
import tcBestConnected from '../assets/wrk/thecurve/best-connected.jpg';
import tcJourneys from '../assets/wrk/thecurve/journeys.jpg';
import tcMobileHome from '../assets/wrk/thecurve/mobile-home.jpg';
import tcMobileSchedule from '../assets/wrk/thecurve/mobile-schedule.jpg';
import tcMobileFeatures from '../assets/wrk/thecurve/mobile-features.jpg';

export interface WorkImage {
  src: ImageMetadata;
  alt: string;
  /** Cap the display width (Figma px) for small artwork that would blur if stretched to fill its tile. */
  width?: number;
  /** A looping clip in /public to play in place of the image, which becomes its poster. */
  video?: string;
}

export interface GlanceItem {
  label: string;
  value: string;
}

/** A chapter of the story, told in a note just before its images. */
export interface StoryNote {
  heading: string;
  text: string;
}

export interface WorkSlide {
  images: WorkImage[];
  columns?: 1 | 2 | 3 | 4;
  caption?: string;
}

export interface WorkGroup {
  /** A note introducing this part of the project, shown before its images. */
  story?: StoryNote;
  /** Small label above the group, e.g. "Process". */
  label?: string;
  images: WorkImage[];
  caption?: string;
  /** Grid columns on desktop. */
  columns?: 1 | 2 | 3 | 4;
  /** Show the pictures as one sideways row to click through. */
  gallery?: boolean;
  /** A carousel of pages, each its own grid; replaces `images`. */
  slides?: WorkSlide[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  /** Page background, picked from the project's palette. */
  background: string;
  /** Short facts for people in a rush, shown in a card under the title. */
  glance?: GlanceItem[];
  problem?: string;
  solution?: string;
  /** What I delivered, as a bullet list. */
  delivery?: string[];
  work: WorkGroup[];
  outcome?: string;
  /** A live version to try, linked under the intro. */
  url?: string;
}

const allCaseStudies: CaseStudy[] = [
  {
    slug: 'rlamls',
    title: 'RLAM Life Sciences',
    description:
      'A pitch identity for Royal London Asset Management: Life Science, built on cell division, with a custom display typeface and a symbol system that scales from signage to favicon.',
    background: '#e3fbf7',
    solution:
      'Cell division is how living things grow: one becomes two, then four. That is exactly the offer to a life science tenant at an RLAM park, which is to start small and expand within the portfolio over time. I built the whole identity from that one idea, so the mark, the typeface and the motion rules all tell the same story of structured, organic growth.',
    delivery: [
      'Concept and identity, from the first idea to the lockups',
      'A custom display typeface drawn from the cell-division form',
      'Type pairing and a set of reduced symbols, tested down to micro sizes',
      'A sub-brand system covering four parks in the portfolio',
      'Applications across staff badges, web, signage and merchandise',
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
          'I tested the type pairings and reduced symbols side by side, so the custom forms hold up from full lockups down to the smallest navigation marks.',
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
    problem:
      '123 Victoria Street, a London office building, was relaunching after its third major refurbishment and needed a brand that made it feel new again. Smart Soho pitched three creative routes. I owned route three end to end, from the strategy to the finished campaign.',
    solution:
      '123 Victoria Street is more than an address. Its number reflects the podium positions of first, second and third, while Victoria suggests victory and success. Following its third major refurbishment, the building is sharper, more agile and ready for its next chapter. Like lanes one, two and three on a track, it offers occupiers the inside line by design. “Find Your Place” captures this sense of position, progress and belonging.',
    delivery: [
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
    problem:
      'After Store House, Store Property asked Smart Soho to redesign their company website, which felt rigid and formal. The brand was established and they had invested in merchandise they didn’t want to remake, so the new site had to work within it.',
    solution:
      'Start from how people use the site, not from the old one. I mapped the sitemap and user flows for each audience: tenants, prospective tenants, agents and visitors. The client isn’t technical, so rather than grey boxes I drew the wireframes inside their brand, so they could judge the structure as the real thing. I then took it through final desktop and mobile designs and worked back and forth with the development team through the build.',
    delivery: [
      'Presented to the client at every phase and was their day-to-day contact, supporting the account team',
      'Sitemap and user flows',
      'Wireframes styled in the brand',
      'Final desktop and mobile designs',
      'Worked with the development team through the build',
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
    outcome:
      'Designed from March 2026 and live at storeproperty.co.uk in April 2026, built from my designs. The client came back to the studio for it after Store House.',
  },
  {
    slug: 'storehouse',
    title: 'Store House',
    description:
      'A launch brand for one Bermondsey warehouse that became Store Property’s office brand across London: identity, brochures, websites, motion and print for three buildings.',
    background: '#f3efe8',
    glance: [
      { label: 'Client', value: 'Store Property' },
      { label: 'Agency', value: 'Smart Soho' },
      {
        label: 'My role',
        value: 'Lead designer: merged the pitch routes, presented every stage to the client and led the rollout',
      },
      { label: 'Timeline', value: 'Identity signed off June 2025, still growing in 2026' },
      { label: 'Scale', value: '3 buildings, 3 brochures, building websites and a new master site' },
      { label: 'Delivered', value: 'Identity · Brochures · Websites · Motion · Signage · Print and ads' },
      { label: 'Outcome', value: 'Grew from one building to three and is replacing the SP Managed brand' },
    ],
    problem:
      'Store Property had just bought 75 Bermondsey Street, a former warehouse in SE1, and refurbished it into fully fitted offices from 300 to 8,806 sq ft. To let it they needed a brand that stood out on a busy street, a brochure to send to prospective occupiers, a website, and everything on the building that tells passers-by it’s open.',
    solution:
      'Make the building the logo. Smart Soho pitched two routes, and mine built the brand from the warehouse’s own brick and plywood. I led the merge of the two into the final identity: a simplified façade as the icon, a stacked wordmark, and an orange, navy, brown and cream palette. Because the icon is drawn from the façade, every new building can have its own, which is how a launch brand became a family.',
    delivery: [
      'Led the merge of two pitch routes into one identity, presenting every stage to the client',
      'Identity: building icon, wordmark, palette, type and patterns',
      '16-page digital brochure for prospective occupiers',
      'Website in WordPress and Breakdance, with a Lottie hero animation made in After Effects',
      'Letting boards, a feather flag, a tenant board, a poster and a half-page ad',
      'Rollout to 30 Newman Street, W1 and 10-12 Ely Place, EC1N',
      'A new master site for the Store House brand, built in WordPress and Breakdance with Claude',
    ],
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
        caption:
          'The website hero: a street of buildings slides past until Store House arrives. I animated it in After Effects and exported it as a Lottie file, so it stays sharp and light on the live site. It became the client’s favourite part.',
      },
      {
        story: {
          heading: 'Two routes, one brand',
          text: 'My pitch route began with what the building is made of: brick outside, plywood inside, with a wordmark that repeats like packing tape. The final identity brought both routes together. I led that merge and presented each round to the client until the brand was signed off in June 2025.',
        },
        images: [
          {
            src: shOverview,
            alt: 'Overview of the pitch route: the line Storehouse of Big Ideas on plywood, a cutaway axonometric of the building on orange, Storehouse packing tape, an office interior, OSB board with the repeating wordmark, and the logo on dark brick.',
          },
        ],
        columns: 1,
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
        story: {
          heading: 'The final identity',
          text: 'The signed-off brand is simpler and works harder. The icon is the building’s own façade, the wordmark stacks above it, PP Supply Sans sets the titles and Basic Sans the body copy, and a set of window-grid patterns fills space without needing photography.',
        },
        images: [
          { src: shFinalLogo, alt: 'The final Store House logo: the stacked wordmark in cream above an orange building icon, on navy.' },
          { src: shFinalPatterns, alt: 'Four orange patterns built from window grids: a checkerboard, offset bars, vertical lines and an outlined grid.' },
          { src: shFinalPalette, alt: 'The palette: orange #fd7749, navy #232539, brown #693501 and cream #f2e4d0.' },
          { src: shFinalType, alt: 'Type specimen in brown: PP Supply Sans Regular and Ultralight for titles, Basic Sans Ultralight for body copy.' },
        ],
        columns: 2,
      },
      {
        story: {
          heading: 'A brochure that does the letting',
          text: 'Prospective occupiers get the brochure as a download, so I designed it for a screen: 16 landscape pages that take them from the building to every floor plan, the amenities and the walk to London Bridge.',
        },
        images: [
          { src: shBroCover, alt: 'Brochure cover: the Store House logo in cream and orange on navy, with 300 to 8,806 sq ft of fully fitted office space.' },
          { src: shBroBuilding, alt: 'Brochure page: the orange building icon and an introduction to Store House, Bermondsey, beside a photo of the brick warehouse front.' },
          { src: shBroSchedule, alt: 'Brochure page: an axonometric cutaway of the building on orange beside the schedule of areas.' },
          { src: shBroFloorplans, alt: 'Brochure page: colour-coded floor plans for the ground and first floors with desk counts and room keys.' },
          { src: shBroHighlights, alt: 'Brochure page: building highlights as a grid of icons on orange, beside a photo of the bike store.' },
          { src: shBroConnected, alt: 'Brochure page: Connected in minutes, with walking and tube times from London Bridge beside a photo of the station.' },
        ],
        columns: 2,
      },
      {
        story: {
          heading: 'On the street',
          text: 'A refurbished building is easy to walk past. Letting boards, a feather flag and a half-page ad put the brand on Bermondsey Street. Inside, the tenant board sits on plywood, a nod back to the pitch, and a poster in the boardroom tells visitors its hire fees go to a local youth club.',
        },
        images: [
          {
            src: shBoardPhoto,
            alt: 'Photo of the brick warehouse on Bermondsey Street between modern neighbours, with the navy Store House letting board on its front.',
          },
        ],
        columns: 1,
      },
      {
        images: [
          { src: shBoard, alt: 'Letting board artwork: the Store House logo on navy with New fully fitted offices available and storehousese1.com in orange.' },
          { src: shAd, alt: 'Half-page ad: New offices in the heart of bustling Bermondsey Street, in orange, with interior photos and the building icon.' },
          { src: shTenantBoard, alt: 'Tenant board on plywood: the building icon and wordmark above a list of floors and tenants, owned and managed by Store Property.' },
          { src: shPoster, alt: 'A3 poster on cream: Supporting Downside Fisher Youth Club, explaining that boardroom hire fees go to the local charity.' },
          { src: shFlag, alt: 'Orange feather flag with STORE HOUSE running vertically above the building icon.' },
        ],
        gallery: true,
      },
      {
        story: {
          heading: 'One brand, many buildings',
          text: 'In August 2026 the brand moved to 30 Newman Street in the West End, with its own brochure, website and a launch party invite, and then to 10-12 Ely Place in Farringdon. I led both. Each building gets its own icon drawn from its façade and its own colour pairing, while the type, layouts and tone stay the same.',
        },
        images: [],
        slides: [
          {
            images: [
              { src: shNewmanCover, alt: '30 Newman Street brochure cover: the Store House wordmark above an orange icon of the Newman Street building, on pale blue.' },
              { src: shNewmanHighlights, alt: '30 Newman Street brochure page: building highlights as a grid of icons on sage green.' },
              { src: shElyCover, alt: '10-12 Ely Place brochure cover: the wordmark above a wide orange icon of the Ely Place façade, on brown.' },
              { src: shElyHighlights, alt: '10-12 Ely Place brochure page: Connected in minutes, with travel times beside a map of Farringdon.' },
            ],
            columns: 2,
            caption: 'Brochures for 30 Newman Street and 10-12 Ely Place.',
          },
          {
            images: [
              {
                src: shNewmanInvite,
                alt: 'HTML email invite on sage green for the relaunch of 30 Newman Street, with a photo of the building and the Store House W1 lockup.',
                width: 500,
              },
            ],
            columns: 1,
            caption: 'The HTML email invite to the 30 Newman Street launch party.',
          },
        ],
      },
    ],
    outcome:
      'The brand outgrew the building. What began in June 2025 as a launch for one warehouse now covers three buildings across London and is replacing Store Property’s SP Managed brand. I started designing a master site for Store House in September 2026, and it goes live in November 2026. See storehousese1.com and storehousew1.com.',
  },
  {
    slug: 'smartqr',
    title: 'Smart QR',
    description: 'An in-house tool for Smart Soho that makes QR codes you can repoint after they have gone to print.',
    background: '#fbeceb',
    problem:
      'Smart Soho puts QR codes on hoardings, brochures and event material for its clients. Once a code is printed its link is fixed, so a changed page or a new campaign meant new artwork.',
    solution:
      'Print a code that points to a link the studio controls, so the destination can change at any time without touching the artwork. Keep it simple enough for anyone in the studio: create a code, change where it goes, download a PNG.',
    delivery: [
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
    outcome: 'In use at Smart Soho at smartqr.uk, with live codes on campaigns for several clients.',
  },
  {
    slug: 'cinesnap',
    title: 'Cinesnap',
    description: 'An in-house tool for pulling clean, full-quality stills from films and CGI renders.',
    background: '#efe6dc',
    problem:
      'At work I often get 4K CGI renders, or a finished edit from a client or another company, and need stills from them for a brochure or website. Scrubbing a timeline by hand is slow, and a screen grab rarely gives you the full-quality frame.',
    solution:
      'Let the app find the cuts first. A quick scan splits the film into scenes and shots, so you jump straight to a shot and step frame by frame to the exact still.',
    delivery: [
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
    outcome:
      'Used in-house for brochure and website stills. It runs in the browser, so client films never leave the computer.',
    url: 'https://cinesnap-eight.vercel.app/',
  },
  {
    slug: 'heatmapper',
    title: 'Heatmapper',
    description: 'A browser tool for mapping how shoppers move through a store and where they linger, made for a retail design client.',
    background: '#e3efe9',
    problem:
      'A client designing shop floors needed a way to show customer circulation and highlight areas of dwell time while a layout was still at the strategy stage.',
    solution:
      'Paint it like a picture. Hot brushes mark where people linger, cold ones where they pass straight by, and the app blends the rest into a smooth map that stays inside the walls.',
    delivery: [
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
    outcome:
      'Made for a retail design client’s strategy work on shop floors. Plans and projects stay on the computer, and nothing is uploaded.',
    url: 'https://heatmapper-mu.vercel.app/',
  },
  {
    slug: 'sudokurace',
    title: 'Sudoku Race',
    description: 'Head-to-head Sudoku for the studio. Share a room code and race your colleagues to fill the grid.',
    background: '#f3ede0',
    problem:
      'Something to brighten the mornings when we got into work early, or the rainy days when we couldn’t get out to stretch our legs.',
    solution:
      'Treat it like a race. A track above the grid shows how far each player has got, and help such as a solve costs points, so speed and skill both count.',
    delivery: [
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
    outcome: 'Played in the studio on early mornings and rainy days. Matches run directly between browsers, with no accounts.',
    url: 'https://soduku-race.vercel.app/',
  },
  {
    slug: 'leevalleylions',
    title: 'Lee Valley Lions',
    description: 'Social media for Lee Valley Lions, an ice hockey club at Lee Valley Ice Centre: game days, results, signings and fixtures.',
    background: '#e3edf8',
    problem:
      'An ice hockey club lives on its feed. The Lions needed posts for every game day, line-up, score and result, plus monthly fixtures and every signing, all season long.',
    solution:
      'Design a system, not a run of posts. I built one kit of parts for the whole season from the club’s blue, white and green stripes, jersey-mesh textures, heavy type and the lion crest, with a template for each kind of post. That keeps the feed unmistakably the Lions from week to week, however many posts a match day needs.',
    delivery: [
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
    outcome: 'Posted across the club’s social channels through the 2026–27 season.',
  },
  {
    slug: 'pallmall',
    title: 'Pall Mall Liverpool',
    description:
      'A marketing website for Pall Mall Gardens, four new Grade A office buildings around a public garden in Liverpool’s business district.',
    background: '#e8eff8',
    problem:
      'Kier needed a website to market the office space at Pall Mall Gardens to occupiers and their agents. A colleague had created the branding and the brochure already told the story, so the site had to carry it online: the masterplan, the first building, the city and how to get there, with the brochure one click away.',
    solution:
      'Settle the content before the design. I wireframed every page with each section matched to the brochure page it came from, so the story was agreed before any design started and design rounds could focus on the look. I was the sole web designer, taking the brand’s cream, blue, green and orange into an interactive masterplan, floor-by-floor plans, a local map and a transport diagram.',
    delivery: [
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
    outcome: 'Live at pallmallliverpool.com.',
    url: 'https://pallmallliverpool.com/',
  },
  {
    slug: 'thecurve',
    title: 'The Curve',
    description:
      'A marketing website for Curve, a 200,000 sq ft headquarters office building on Centenary Square in Birmingham.',
    background: '#efeaf3',
    problem:
      'Curve is a new headquarters building by Kier at Arena Central, in the middle of Birmingham’s business and cultural district. The website had to market it to occupiers and their agents: the building, the wider masterplan and why Birmingham, with the brochure to download.',
    solution:
      'Turn the brand’s gradient tiles into the site’s system. A colleague created the branding; as the sole web designer, I made those tiles the structure of the whole site. They frame the logo on the home page, stack into the key features and slide behind the photography, so every page feels like Curve. I started from wireframes built on the brochure and led the design through six rounds of design to the desktop and mobile files handed to the developers.',
    delivery: [
      'Wireframes built from the brochure',
      'Six rounds of design, desktop and mobile',
      'Gradient tile system and scroll motion',
      'Floor plans, schedule of areas and maps',
    ],
    work: [
      {
        images: [
          {
            src: tcHero,
            alt: 'Home page hero: the Curve Centenary Sq Birmingham logo among gradient tiles in blue, green, purple and orange, with a 200,000 sq ft headquarters office building tile below.',
          },
        ],
        columns: 1,
      },
      {
        label: 'Wireframe to design',
        images: [
          {
            src: tcWireHome,
            alt: 'Home page wireframe: soft gradient tiles around a logo placeholder, then grey image blocks labelled Architecture CGI, Birmingham Cityscape and Bank Court.',
          },
          {
            src: tcDesignHome,
            alt: 'The final home page: the tile hero, Ahead of the Curve, At the center of Birmingham on deep purple, and cards for the sectors shaping Birmingham’s future.',
          },
        ],
        caption: 'The home page wireframe beside the final design.',
        columns: 2,
      },
      {
        label: 'The building',
        images: [
          {
            src: tcSchedule,
            alt: 'Schedule of Areas: a drawing of the curved building on a blue tile beside a table of floor areas from Level 08 down to Bank Court.',
          },
          {
            src: tcFloorplans,
            alt: 'Floor plans: a list of floors from 08 to Basement with their areas, beside a teal plan of the selected floor.',
          },
        ],
        columns: 2,
      },
      {
        label: 'Motion',
        images: [
          {
            src: tcFeaturesMotion,
            alt: 'Motion preview in a browser window: Key Building Features cards with gradient tops and icons for HVAC, smart lighting, terrace and 182 cycles, staggered as they rise into view.',
          },
        ],
        caption: 'The key feature cards rise in staggered layers as the page scrolls.',
        columns: 1,
      },
      {
        label: 'Masterplan and location',
        images: [
          {
            src: tcMasterplan,
            alt: '1 Million Sq Ft: masterplan figures beside an illustrated aerial view of Arena Central, with Curve picked out in blue among HSBC, HMRC and the University of Birmingham.',
          },
          {
            src: tcNeighbours,
            alt: 'Meet Your Neighbours: a numbered list of nearby companies beside a yellow street map of central Birmingham with Curve marked.',
          },
        ],
        columns: 2,
      },
      {
        images: [
          {
            src: tcBestConnected,
            alt: 'Best Connected City-Region in the UK: text beside a collage of station escalators, the Library of Birmingham and canal-side buildings over a yellow tile.',
          },
          {
            src: tcJourneys,
            alt: 'Get Where You Need to Be: train times from Birmingham New Street shown as stops on an orange line, with tabs for national rail, drive, metro and HS2.',
          },
        ],
        columns: 2,
      },
      {
        label: 'Mobile',
        images: [
          {
            src: tcMobileHome,
            alt: 'Mobile home page: the Arena Central tab, Curve logo and the 200,000 sq ft tile between gradient strips.',
          },
          {
            src: tcMobileSchedule,
            alt: 'Mobile schedule of areas: the building drawing above a table of floors, uses and areas.',
          },
          {
            src: tcMobileFeatures,
            alt: 'Mobile key building features: a carousel with the Reception card in front and the other feature icons in a row beneath.',
          },
        ],
        columns: 3,
      },
    ],
    outcome: 'Handed to developers after six rounds of design, and in development now.',
  },
];

// A case study only gets a page (and its card a link) once it has images.
export const caseStudies = allCaseStudies.filter((study) => study.work.length > 0);

export const findCaseStudy = (slug?: string) => caseStudies.find((c) => c.slug === slug);
