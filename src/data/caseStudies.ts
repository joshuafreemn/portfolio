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
import parkVision from '../assets/wrk/rlamls/park-vision.png';
import rlamLogoAnimation from '../assets/wrk/rlamls/logo-animation.jpg';
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
import vsHandover from '../assets/wrk/123victoria/campaign-handover.jpg';
import vsRelay from '../assets/wrk/123victoria/poster-relay.jpg';
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
import shMasterMap from '../assets/wrk/storehouse/master-map.jpg';
import shMasterHome from '../assets/wrk/storehouse/master-home.jpg';
import shMasterProperties from '../assets/wrk/storehouse/master-properties.jpg';

import qrLanding from '../assets/wrk/smartqr/landing.jpg';
import qrDashboard from '../assets/wrk/smartqr/dashboard.jpg';
import qrSignIn from '../assets/wrk/smartqr/sign-in.jpg';

import lvlGameDay from '../assets/wrk/leevalleylions/game-day.jpg';
import lvlFixtures from '../assets/wrk/leevalleylions/fixtures-october.jpg';
import lvlLineUp from '../assets/wrk/leevalleylions/line-up.jpg';
import lvlGameDayPhantoms from '../assets/wrk/leevalleylions/game-day-phantoms.jpg';
import lvlGameDaySolent from '../assets/wrk/leevalleylions/game-day-solent.jpg';
import lvlGameDayChelmsford from '../assets/wrk/leevalleylions/game-day-chelmsford.jpg';
import lvlGameDayBristol from '../assets/wrk/leevalleylions/game-day-bristol.jpg';
import lvlFixturesSeason from '../assets/wrk/leevalleylions/fixtures-season.jpg';
import lvlPeriod1 from '../assets/wrk/leevalleylions/period-1.jpg';
import lvlPeriod2 from '../assets/wrk/leevalleylions/period-2.jpg';
import lvlPeriod3 from '../assets/wrk/leevalleylions/period-3.jpg';
import lvlOvertime from '../assets/wrk/leevalleylions/overtime.jpg';
import lvlWrapUp1 from '../assets/wrk/leevalleylions/wrap-up-1.jpg';
import lvlWrapUp2 from '../assets/wrk/leevalleylions/wrap-up-2.jpg';
import lvlWrapUp3 from '../assets/wrk/leevalleylions/wrap-up-3.jpg';
import lvlWrapUp4 from '../assets/wrk/leevalleylions/wrap-up-4.jpg';
import lvlJerseySponsors from '../assets/wrk/leevalleylions/jersey-sponsors.jpg';
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

import btsHero from '../assets/wrk/bts/hero.jpg';
import btsCastComputerKid from '../assets/wrk/bts/cast-computer-kid.jpg';
import btsCastLaptopMan from '../assets/wrk/bts/cast-laptop-man.jpg';
import btsCastSchool from '../assets/wrk/bts/cast-school.jpg';
import btsCastBusiness from '../assets/wrk/bts/cast-business.jpg';
import btsKeyboard from '../assets/wrk/bts/keyboard.jpg';
import btsKiosk from '../assets/wrk/bts/kiosk.jpg';
import btsPortalOpens from '../assets/wrk/bts/portal-opens.jpg';
import btsPortal from '../assets/wrk/bts/portal.jpg';
import btsPortalInside from '../assets/wrk/bts/portal-inside.jpg';
import btsPulledThrough from '../assets/wrk/bts/pulled-through.jpg';
import btsTvStatic from '../assets/wrk/bts/tv-static.jpg';
import btsTvChannel from '../assets/wrk/bts/tv-channel.jpg';
import btsTvGlitch from '../assets/wrk/bts/tv-glitch.jpg';
import btsSpecialBulletin from '../assets/wrk/bts/special-bulletin.jpg';
import btsTheBuilding from '../assets/wrk/bts/the-building.jpg';
import btsTypeGrid from '../assets/wrk/bts/type-grid.jpg';
import btsArtOfBuilding from '../assets/wrk/bts/art-of-building.jpg';
import btsGreenScreen from '../assets/wrk/bts/green-screen.jpg';
import btsSwitchOff from '../assets/wrk/bts/switch-off.jpg';

export interface WorkImage {
  src: ImageMetadata;
  alt: string;
  /** Cap the display width (Figma px) for small artwork that would blur if stretched to fill its tile. */
  width?: number;
  /** A looping clip in /public to play in place of the image, which becomes its poster. */
  video?: string;
  /** A small tag pinned to the tile's corner, e.g. "Current". */
  tag?: string;
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
  /** Zoom detailed diagrams in by this much, in frames all the size of the
   *  tallest one, and let people drag them around inside. */
  pan?: number;
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
      'A pitch identity for Royal London Asset Management’s life science parks, grown from a single idea: cell division. One mark, one custom typeface and a symbol system that runs from building signage down to a favicon.',
    background: '#e3fbf7',
    glance: [
      { label: 'Client', value: 'Royal London Asset Management: Life Science' },
      { label: 'Agency', value: 'Smart Soho' },
      { label: 'Project', value: 'Brand identity pitch' },
      { label: 'My role', value: 'Designer: concept, identity, typeface and applications' },
      { label: 'Scale', value: 'A parent brand and five park sub-brands' },
      { label: 'Delivered', value: 'Identity · Custom typeface · Symbol system · Applications · Campaign' },
    ],
    problem:
      'Royal London Asset Management was bringing its science parks, from Abingdon to Cambridge, under one life science brand. It had to feel credible to scientists, sit comfortably beside the Royal London name, and flex for every park, so a growing company could see a future for itself across the whole portfolio.',
    solution:
      'Cell division is how living things grow: one becomes two, then four. That is exactly the offer to a life science tenant at an RLAM park, which is to start small and expand within the portfolio over time. I built the whole identity from that one idea, so the mark, the typeface and the motion rules all tell the same story of structured, organic growth.',
    delivery: [
      'Concept and identity, from the first idea to the lockups',
      'A custom display typeface drawn from the cell-division form',
      'Type pairing and a set of reduced symbols, tested down to micro sizes',
      'A sub-brand system covering five parks in the portfolio',
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
        story: {
          heading: 'One becomes two',
          text: 'I started under the microscope. Drawing cells mid-division gave me a soft, rounded form that splits and multiplies, and I abstracted it into a single shape. That shape became the mark, then a full display alphabet, so every headline the brand sets is made from the same idea.',
        },
        images: [
          {
            src: processCellDivision,
            alt: 'Diagram pairing cell division references with a graphical abstraction of the identity shape.',
          },
          { src: alphabet, alt: 'Custom display alphabet derived from the RLAM identity motif.' },
        ],
        columns: 1,
      },
      {
        story: {
          heading: 'Built to scale',
          text: 'A life science brand lives on lab doors and lanyards as much as on billboards. I paired the custom type with Bai Jamjuree, set lockups that hold their own next to Royal London, and reduced the symbol step by step until it still read at favicon size.',
        },
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
        columns: 2,
      },
      {
        images: [
          {
            src: rlamLogoAnimation,
            video: '/wrk/rlamls/logo-animation.mp4',
            alt: 'Logo animation: the full RLAM Life Sciences wordmark folds down into the square symbol, which then locks up beside the Royal London pelican.',
          },
        ],
        columns: 1,
        caption: 'The mark in motion: the full wordmark folds down into the square symbol, then takes its place beside the Royal London pelican.',
      },
      {
        images: [
          { src: symbolVariants, alt: 'A row of distilled RLAM Life Sciences symbol variants.' },
          { src: iconReduced, alt: 'Reduced icon built from the RLAM Life Sciences mark.' },
          { src: iconMicro, alt: 'Micro icon reduction of the RLAM Life Sciences mark.' },
        ],
        caption: 'From full lockup to the smallest navigation mark, the form holds.',
        columns: 3,
      },
      {
        story: {
          heading: 'Five parks, one family',
          text: 'Each park keeps its own name, but they all share the mark and type. A tenant who outgrows Abingdon can move to Oxford or Cambridge and still feel at home, which is the growth story told in the logos themselves.',
        },
        images: [
          { src: parkAbingdon, alt: 'Abingdon Business Park logo.' },
          { src: parkArcOxford, alt: '2600 ARC Oxford logo.' },
          { src: parkOneTriton, alt: 'One Triton Square logo.' },
          { src: parkCambridge, alt: 'Cambridge Research Park logo.' },
          { src: parkVision, alt: 'Vision Park logo.' },
        ],
        columns: 3,
      },
      {
        story: {
          heading: 'Out in the world',
          text: 'To sell the system I showed it at work: on a staff badge, a website, building signage and a tote bag. Then I turned it into campaign cards that pair lab photography with short lines about growth, ready for social and email.',
        },
        images: [
          { src: appBadge, alt: 'Branded staff badge application.' },
          { src: appWebsite, alt: 'Website mockup on a laptop.' },
          { src: appSignage, alt: 'Building signage carrying the RLAM Life Sciences mark.' },
          { src: appTote, alt: 'Merchandise tote using the identity system.' },
        ],
        columns: 2,
      },
      {
        images: [
          { src: campaignHero, alt: 'Hero campaign card with the RLAM wordmark set against lab photography.' },
          { src: campaignCellularData, alt: 'Cellular Data collage card composed from multiple lifestyle images.' },
          { src: campaignCellCulture, alt: 'Cell Culture editorial card pairing photography with copy.' },
          { src: campaignEvaluate, alt: 'Evaluate Enhance card showing a blue-toned laptop scene.' },
        ],
        caption: 'Campaign cards.',
        gallery: true,
      },
    ],
  },
  {
    slug: '123victoria',
    title: '123 Victoria Street',
    description:
      'Find Your Place: my pitch route to relaunch a 1970s Victoria landmark, built on the podium, the running track and the race to the line.',
    background: '#f8f2cf',
    glance: [
      { label: 'Client', value: '123 Victoria Street, London' },
      { label: 'Agency', value: 'Smart Soho' },
      { label: 'Project', value: 'Rebrand and launch campaign pitch' },
      { label: 'My role', value: 'Sole designer on route three: idea, strategy, positioning and creative' },
      { label: 'Timeline', value: 'Pitched July 2026' },
      { label: 'Delivered', value: 'Identity · Image treatment · Campaign · Posters · Merchandise' },
    ],
    problem:
      '123 Victoria Street, an office and retail landmark built in 1975, was heading into a major refurbishment. Its owner needed a brand that would lift it out of the dated stock and into the Grade A market, give the letting agents strong tools early, and help land a major pre-let. Smart Soho pitched several creative routes. I owned route three end to end, from the strategy to the finished campaign.',
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
        story: {
          heading: 'On your marks',
          text: 'The name already held the idea: one, two, three, Victoria. I stepped the numbers down like a podium and ran them along track lanes, so the mark reads as a place to finish and a race still to run. A line-screen treatment gave the photography the grit of an old sports programme.',
        },
        images: [
          { src: vsLogo, alt: 'The 123 mark: the numbers 1, 2 and 3 stepped down like a podium, each underlined.' },
          { src: vsLanes, alt: 'The 123 mark in green running down three white track lanes on a lime background.' },
        ],
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
        story: {
          heading: 'The office as a sport',
          text: 'Property campaigns are usually polite. This one treats the working day like competition: a stack of papers becomes a relay baton, tablets and pens get passed down the line, and the coffee run turns into a balancing act. It is funny on purpose, because agents need something people remember.',
        },
        images: [],
        slides: [
          {
            images: [{ src: vsHandover, alt: 'A man in a suit takes a stack of papers like a relay baton, with the Find Your Place lockup.' }],
            columns: 1,
          },
          {
            images: [{ src: vsRelay, alt: 'Poster of hands passing tablets, pens and papers down a line like relay batons.' }],
            columns: 1,
          },
          {
            images: [{ src: vsCoffee, alt: 'A smiling office junior balancing a tower of coffee cups on a tray.' }],
            columns: 1,
          },
        ],
      },
      {
        story: {
          heading: 'Finding the voice',
          text: 'Before the campaign settled, I pushed the line-screen look through brighter single-colour posters and a brochure spread, testing headlines like Set Your Sights and Take Your Stand to see how far the podium idea could stretch.',
        },
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
        columns: 4,
      },
      {
        story: {
          heading: 'Kit for the team',
          text: 'A sports brand needs a kit. A tracksuit, a finisher’s medal and numbered padel bats turn the idea into something occupiers and agents can actually hold, and a reason to talk about the building.',
        },
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
      'A warmer website for a family-run London landlord, redesigned around the people who use it and built inside the brand they already loved.',
    background: '#eef0f6',
    glance: [
      { label: 'Client', value: 'Store Property' },
      { label: 'Agency', value: 'Smart Soho' },
      { label: 'My role', value: 'Designer and day-to-day client contact: presented every phase' },
      { label: 'Timeline', value: 'Designed March 2026, live April 2026' },
      { label: 'Team', value: 'Me on design, with a development team on the build' },
      { label: 'Delivered', value: 'Sitemap · User flows · Wireframes · Desktop and mobile design' },
      { label: 'Outcome', value: 'Live at storeproperty.co.uk' },
    ],
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
        story: {
          heading: 'Who is it for?',
          text: 'Four kinds of people land on a landlord’s website: tenants who need help, companies looking for space, agents, and the curious. I mapped a route for each one before drawing a single page, so nobody is more than a couple of clicks from what they came for.',
        },
        images: [
          {
            src: spSitemap,
            alt: 'Sitemap for the Store Property website, branching from the home page into London Offices, About, Contact and Portfolio.',
            tag: 'Current',
          },
          {
            src: spUserFlow,
            alt: 'User flow diagram routing tenants, general visitors, prospective tenants and London office visitors to what they need.',
            tag: 'Proposed',
          },
        ],
        columns: 2,
        pan: 1.8,
      },
      {
        story: {
          heading: 'Wireframes that look finished',
          text: 'Grey boxes mean little to a client who isn’t technical. I drew the wireframes in Store Property’s own navy, pink and type, so the family could react to layout and content as if it were the real site, and sign off structure faster.',
        },
        images: [
          {
            src: spWireframe,
            alt: 'Property page wireframe in the Store Property navy and pink: gallery, property details, enquiry card and description.',
          },
        ],
        columns: 1,
      },
      {
        story: {
          heading: 'Warmer, not louder',
          text: 'The final design keeps the brand but loosens the tone: an illustrated map of their London buildings, a carousel of recent projects and a portfolio you can filter by type. I worked with the developers through the build, and it went live a month after design began.',
        },
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
    url: 'https://www.storeproperty.co.uk/',
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
      {
        story: {
          heading: 'A place to call home',
          text: 'Three buildings meant three separate websites, and nowhere that showed Store House as a whole. In September 2026 I started designing a master site to bring the whole portfolio together: six buildings across central London, each drawn as its own icon from its façade and pinned to an illustrated map. I wireframed every page first, then designed the homepage, the properties page and a template that the existing building sites now sit inside. It is built in WordPress and Breakdance, with Claude speeding up the build, and goes live in November 2026.',
        },
        images: [
          {
            src: shMasterMap,
            alt: 'An illustrated map of central London on navy, with each Store House building drawn as an orange icon in Fitzrovia, Farringdon, Shoreditch and Bermondsey.',
          },
        ],
        columns: 1,
        caption: 'The portfolio map. Every building gets an icon drawn from its own façade.',
      },
      {
        images: [
          {
            src: shMasterHome,
            alt: 'The master site homepage: the line Characterful buildings, run by the people who own them, three key figures, a photo of the communal kitchen at Store House SE1 and a Latest property card for Ely Place.',
          },
          {
            src: shMasterProperties,
            alt: 'The properties page, headed Offices across central London, with photo cards for Ely Place, 30 Newman St, 75 Bermondsey St and 59-61 Bermondsey Street.',
          },
        ],
        caption: 'The homepage and the properties page.',
      },
    ],
    outcome:
      'The brand outgrew the building. What began in June 2025 as a launch for one warehouse now covers three buildings across London and is replacing Store Property’s SP Managed brand. The master site brings them under one roof when it goes live in November 2026. See storehousese1.com and storehousew1.com.',
  },
  {
    slug: 'smartqr',
    title: 'Smart QR',
    description: 'An in-house tool for Smart Soho that makes QR codes you can repoint after they have gone to print.',
    background: '#fbeceb',
    glance: [
      { label: 'Client', value: 'Smart Soho, in-house' },
      { label: 'My role', value: 'Designed and built it, with Claude' },
      { label: 'Stack', value: 'Cloudflare Pages, with sign-in through Cloudflare Access' },
      { label: 'Delivered', value: 'Landing page · Dashboard · Create, edit and download · Hosting' },
      { label: 'Outcome', value: 'In use at smartqr.uk on campaigns for several clients' },
    ],
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
        story: {
          heading: 'Change the link, not the print',
          text: 'Every code lives in one list. Edit repoints it in seconds, and the hoarding outside never has to come down. I kept the dashboard to the few things the studio actually does: find a code, change where it goes, download the PNG.',
        },
        images: [
          {
            src: qrDashboard,
            alt: 'The Your QR codes dashboard: a search box, a Create QR code button and a table of seven codes with their names, blurred destinations, update dates, and Edit and download actions.',
          },
        ],
        columns: 1,
        caption: 'Client links are blurred here.',
      },
      {
        story: {
          heading: 'For the team only',
          text: 'Client campaigns shouldn’t be one guessed password away from being changed. Sign-in sits behind Cloudflare Access, so only the studio can reach the dashboard, and there are no passwords to forget.',
        },
        images: [
          {
            src: qrSignIn,
            alt: 'The Cloudflare Access sign-in screen: Log in to smartqr.uk, an email field and a Send login code button.',
            width: 720,
          },
        ],
        columns: 1,
      },
    ],
    outcome: 'In use at Smart Soho at smartqr.uk, with live codes on campaigns for several clients.',
  },
  {
    slug: 'cinesnap',
    title: 'Cinesnap',
    description: 'An in-house tool for pulling clean, full-quality stills from films and CGI renders.',
    background: '#efe6dc',
    glance: [
      { label: 'Made for', value: 'The studio: stills for brochures and websites' },
      { label: 'My role', value: 'Designed and built it on my own, with AI' },
      { label: 'Runs', value: 'In the browser, so client films never leave the computer' },
      { label: 'Delivered', value: 'Scene detection · Frame stepping · Full-resolution export' },
    ],
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
        caption: 'Shown with a test film made for this page.',
      },
      {
        story: {
          heading: 'Straight to the shot',
          text: 'A scan lists every shot down the side, so a two-minute film becomes a page of thumbnails. Pick one, then step frame by frame with the strip below until the still is exactly right. Prefer the shots along the top? Switch layout, and remap every shortcut to suit your hands.',
        },
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
      },
      {
        story: {
          heading: 'Ready for the brochure',
          text: 'Every still is saved at full resolution and named by its timecode, so you can always find the frame again. Download one, or take the lot as a zip.',
        },
        images: [
          {
            src: cineReview,
            alt: 'The Review and Export step: six captured stills, each with its timecode, file name and buttons to jump back, download or delete, and a Download All button.',
          },
        ],
        columns: 1,
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
    glance: [
      { label: 'Made for', value: 'A retail design client, for shop floor strategy' },
      { label: 'My role', value: 'Designed and built it on my own, with AI' },
      { label: 'Runs', value: 'In the browser, with nothing uploaded' },
      { label: 'Delivered', value: 'Hot and cold brushes · Floor boundaries · PNG and overlay export' },
    ],
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
        caption: 'Dwell time around the feature table, new-in wall, fitting rooms and tills. A cutout keeps the stockroom clear.',
      },
      {
        story: {
          heading: 'Paint, don’t plot',
          text: 'Designers think in sketches, not spreadsheets. A short tour shows the brushes on a first visit, then you paint the busy and quiet spots by hand and the app fills in the gradient between them, kept inside the walls you draw.',
        },
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
      },
      {
        story: {
          heading: 'Straight into the deck',
          text: 'Export the map at the plan’s own size with the guides hidden, or as a transparent overlay to drop over the client’s drawings. The plan here is a sample made for this page.',
        },
        images: [
          {
            src: heatExport,
            alt: 'The exported heatmap: the shop plan with warm areas at the fitting rooms, new-in wall and entrance, cool corners, and no editing guides.',
          },
        ],
        columns: 1,
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
    glance: [
      { label: 'Made for', value: 'The studio, on early mornings and rainy lunchtimes' },
      { label: 'My role', value: 'Designed and built it on my own, with AI' },
      { label: 'Runs', value: 'Browser to browser, with no accounts' },
      { label: 'Delivered', value: 'Four game modes · Live race track · Eight themes' },
    ],
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
        caption: 'Mid-match. The track shows each racer’s progress.',
      },
      {
        story: {
          heading: 'Share a code, start the race',
          text: 'No sign-ups, no installs. One person makes a room, shares the code across the desk, and everyone picks a name, a pencil colour, a mode and a theme. Sabotage mode is the one that starts arguments.',
        },
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
      },
      {
        story: {
          heading: 'Bragging rights',
          text: 'Eight themes let it fit the mood, from Daylight to Nighttime. At the finish, points, penalties and a place on the podium settle who buys the coffee.',
        },
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
      },
    ],
    outcome: 'Played in the studio on early mornings and rainy days. Matches run directly between browsers, with no accounts.',
    url: 'https://soduku-race.vercel.app/',
  },
  {
    slug: 'leevalleylions',
    title: 'Lee Valley Lions',
    description: 'A season-long social system for Lee Valley Lions ice hockey club: game days, results, signings, fixtures and motion.',
    background: '#e3edf8',
    glance: [
      { label: 'Client', value: 'Lee Valley Lions, ice hockey at Lee Valley Ice Centre' },
      { label: 'My role', value: 'Freelance designer' },
      { label: 'Season', value: '2026–27' },
      { label: 'Delivered', value: 'Post templates · Signings · Fixtures · Motion · Campaigns' },
      { label: 'Outcome', value: 'Running across the club’s social channels all season' },
    ],
    problem:
      'An ice hockey club lives on its feed. The Lions needed posts for every game day, line-up, score and result, plus monthly fixtures and every signing, all season long.',
    solution:
      'Design a system, not a run of posts. I built one kit of parts for the whole season from the club’s blue, white and green stripes, jersey-mesh textures, heavy type and the lion crest, with a template for each kind of post. That keeps the feed unmistakably the Lions from week to week, however many posts a match day needs.',
    delivery: [
      'Templates for game day, line-ups, period scores, full time and the weekend wrap-up',
      'Player and staff signing announcements',
      'Monthly fixture posters and the season fixtures reveal',
      'Motion for the season fixtures, jersey sponsorship, the jersey reveal and Pride month',
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
            src: lvlGameDayBristol,
            alt: 'Home Game Day poster against the Bristol Pitbulls 2: number 4 in the white home jersey takes a shot, 5.30pm at Lee Valley Ice Centre, with the Shinny sponsor logo.',
          },
          {
            src: lvlGameDaySolent,
            alt: 'Away Game Day poster against the Solent Devils: number 17 in the green jersey follows through on a slapshot, 5.00pm at Planet Ice Gosport.',
          },
          {
            src: lvlGameDayChelmsford,
            alt: 'Away Game Day poster against Chelmsford: number 55 in green skates past the opponent crest, 6.00pm at Riverside Leisure Centre, Chelmsford.',
          },
          {
            src: lvlGameDayPhantoms,
            alt: 'Halloween Game Day poster against the Peterborough Phantoms: a skater dressed as a Ghostbuster with a proton pack on their back, 7.00pm at Planet Ice, Peterborough.',
          },
          {
            src: lvlLineUp,
            alt: 'Projected Line Up post listing forwards, defence and netminders on a white card over blue jersey mesh.',
          },
        ],
        caption: 'Game day, every week: one template with a new player, opponent and rink each time, then the line-up.',
        gallery: true,
      },
      {
        images: [
          {
            src: lvlFixtures,
            alt: 'October Fixtures poster: a grid of opponent crests with dates above a photo of the team huddled around the net, with a key for home, away, league and cup games.',
          },
          {
            src: lvlFixturesSeason,
            video: '/wrk/leevalleylions/fixtures-season.mp4',
            alt: 'Season fixtures reveal for 2026–27: a column of every date and opponent crest beside tall FIXTURES type, over slow-motion footage of two Lions players celebrating on the ice.',
          },
        ],
        caption: 'The monthly fixtures, and the whole season revealed in motion.',
      },
      {
        story: {
          heading: 'Every match, start to finish',
          text: 'A game day isn’t one post, it’s a run of them: the line-up before puck drop, scores through each period, full time, then the weekend wrap-up. Each has its own template, so the club can post fast from the rink and still look polished.',
        },
        images: [
          { src: lvlPeriod1, alt: 'End of Period 1 story: the Lions and Pitbulls 2 crests pinned to a white score card on blue jersey mesh.' },
          { src: lvlPeriod2, alt: 'End of Period 2 story in the same template.' },
          { src: lvlPeriod3, alt: 'End of Period 3 story in the same template.' },
          { src: lvlOvertime, alt: 'End of OT story in the same template, for games that go to overtime.' },
        ],
        caption: 'Period scores, made as stories to fill in from the rink.',
        columns: 4,
      },
      {
        images: [
          {
            src: lvlWrapUp1,
            alt: 'Weekend Wrap-Up cover for 26–27 September: the Lions crest and big white type on an ice texture, over blue, white and green stripes.',
          },
          {
            src: lvlWrapUp2,
            alt: 'Weekend Results slide: a 5–4 overtime win at the Solent Devils and a 5–4 home win over the Spitfires, each with its man of the match.',
          },
          {
            src: lvlWrapUp3,
            alt: 'Top Statistics slide: games, goals, assists and points for the top four skaters, and the netminder’s saves and save percentage.',
          },
          {
            src: lvlWrapUp4,
            alt: 'Final slide: a quote from head coach S. Jones on the weekend, beside next weekend’s two away games.',
          },
        ],
        caption: 'The weekend wrap-up carousel, kept in order: cover, results, top stats, then the coach’s word and next weekend.',
        columns: 4,
      },
      {
        story: {
          heading: 'Welcome to the pride',
          text: 'Fans want to meet the squad. One tilted, striped frame handles every announcement, from new signings to off-ice officials, so a busy summer of news still reads as one family. The leadership post puts the captain at the centre of it.',
        },
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
      },
      {
        story: {
          heading: 'Moments that move',
          text: 'Some news deserves more than a still. The new jersey turns on a mannequin before the green alternate swaps in, Roary the mascot waves the flag for Pride month, and the jersey sponsorship post cycles through the squad to show which shirts are still up for grabs.',
        },
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
          {
            src: lvlJerseySponsors,
            video: '/wrk/leevalleylions/jersey-sponsors.mp4',
            alt: 'Jersey sponsorship post: the backs of players’ jerseys cycle above the full squad list, showing which home and away shirts are still available to sponsor.',
          },
        ],
        columns: 3,
      },
      {
        story: {
          heading: 'Join the huddle',
          text: 'A community club runs on volunteers. This poster asks fans to step onto the bench as goal judges, timekeepers, DJs and physios, using the same kit as everything else so it feels like part of the team.',
        },
        images: [
          {
            src: lvlHuddle,
            alt: 'Join the Huddle poster: the team in a huddle under a blue splash print of Roary, asking for game day volunteers such as goal judge, timekeeper, DJ and physio.',
            width: 640,
          },
        ],
        columns: 1,
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
    glance: [
      { label: 'Client', value: 'Kier' },
      { label: 'Agency', value: 'Smart Soho' },
      { label: 'My role', value: 'Sole web designer, working from a colleague’s branding' },
      { label: 'Scale', value: 'Four buildings, a hotel and a public garden' },
      { label: 'Delivered', value: 'Wireframes · Desktop and mobile design · Masterplan · Floor plans · Maps' },
      { label: 'Outcome', value: 'Live at pallmallliverpool.com' },
    ],
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
        story: {
          heading: 'Brochure first',
          text: 'The brochure had already been signed off, so I treated it as the script. Every section of every wireframe carries a yellow note naming the brochure page it came from. The client agreed the story once, and every design round after that was about the look.',
        },
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
        columns: 2,
      },
      {
        story: {
          heading: 'Four buildings round a garden',
          text: 'Agents need to see the whole scheme and then drill into a single floor. The masterplan lists each building beside the site plan, and the floor plan explorer steps from the roof terrace down to the basement, with the Grade A credentials set out as icons.',
        },
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
        story: {
          heading: 'Selling Liverpool',
          text: 'A company moving north needs convincing about the city as much as the building. A local map of places to eat and stay, the city’s headline numbers and a journey-time map make the case that Pall Mall is at the centre of everything.',
        },
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
        story: {
          heading: 'In an agent’s pocket',
          text: 'Agents show buildings on their phones, on the street and in meetings. Every page was designed for mobile too, including the floor plans, which scroll floor by floor under your thumb.',
        },
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
    glance: [
      { label: 'Client', value: 'Kier' },
      { label: 'Agency', value: 'Smart Soho' },
      { label: 'My role', value: 'Sole web designer, working from a colleague’s branding' },
      { label: 'Scale', value: '200,000 sq ft headquarters, six rounds of design' },
      { label: 'Delivered', value: 'Wireframes · Desktop and mobile design · Tile system · Scroll motion' },
      { label: 'Status', value: 'With the developers now' },
    ],
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
        story: {
          heading: 'Tiles become the system',
          text: 'The brand came with a set of soft gradient tiles. I made them the bones of the website: they frame the logo, hold the headlines and sit behind the photography. The wireframe already had them in place, so every round of design built on the same idea.',
        },
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
        story: {
          heading: 'Floor by floor',
          text: 'Occupiers want the numbers. A drawing of the curved building sits beside the schedule of areas, and the floor plan explorer lets you pick any level and see it on its own.',
        },
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
        story: {
          heading: 'A page that rises',
          text: 'The tiles move too. As you scroll, the key feature cards rise in staggered layers, like the building going up floor by floor.',
        },
        images: [
          {
            src: tcFeaturesMotion,
            alt: 'Motion preview in a browser window: Key Building Features cards with gradient tops and icons for HVAC, smart lighting, terrace and 182 cycles, staggered as they rise into view.',
          },
        ],
        columns: 1,
      },
      {
        story: {
          heading: 'Why Birmingham',
          text: 'Curve sits inside a million square foot masterplan, next door to HSBC and HMRC. An illustrated aerial view, a neighbours map and journey times from New Street, including HS2, show an occupier what they’d be joining.',
        },
        images: [
          {
            src: tcMasterplan,
            alt: '1 Million Sq Ft: masterplan figures beside an illustrated aerial view of Arena Central, with Curve picked out in blue among HSBC, HMRC and the University of Birmingham.',
          },
          {
            src: tcNeighbours,
            alt: 'Meet Your Neighbours: a numbered list of nearby companies beside a yellow street map of central Birmingham with Curve marked.',
          },
          {
            src: tcBestConnected,
            alt: 'Best Connected City-Region in the UK: text beside a collage of station escalators, the Library of Birmingham and canal-side buildings over a yellow tile.',
          },
          {
            src: tcJourneys,
            alt: 'Get Where You Need to Be: train times from Birmingham New Street shown as stops on an orange line, with tabs for national rail, drive, metro and HS2.',
          },
        ],
        gallery: true,
      },
      {
        story: {
          heading: 'Made for the phone',
          text: 'On mobile the tiles turn into strips and the feature cards become a carousel, so the site keeps its shape at any size.',
        },
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
  {
    slug: 'bts',
    title: 'Behind the Scenes',
    description:
      'How I made the bumper for my showreel: an animated short about a kid, a strange old computer and a TV remote, built so every channel he flicks to can be swapped for fresh work.',
    background: '#efe9f6',
    glance: [
      { label: 'Project', value: 'Personal: a bumper and framing system for my showreel' },
      { label: 'My role', value: 'Everything: idea, characters, illustration, animation and edit' },
      { label: 'Tools', value: 'Illustrator and After Effects' },
      { label: 'Timeline', value: '2025, made in the background over a couple of months' },
      { label: 'On the channels', value: 'My motion work at Smart Soho' },
    ],
    problem:
      'A showreel goes out of date the day you finish it. I wanted a bumper that made mine feel like one piece by one person, and a way to drop in new work without remaking the whole thing every time.',
    solution:
      'Make the reel a TV. A kid types into an old computer, gets pulled through a glowing portal and lands in front of a set with a remote in his hand. Every press changes the channel, and every channel is a project. The animated frame stays the same while the channels change, so fresh work slots straight in.',
    delivery: [
      'The idea and the story',
      'Character designs, illustrated in Illustrator',
      'Scenes from the computer to the portal and the TV',
      'Animation in After Effects, with channel-change transitions',
      'A swappable channel system for new work',
      'The final edit of the reel',
    ],
    work: [
      {
        images: [
          {
            src: btsHero,
            alt: 'A boy in a blue jumper sits at a cream retro computer kiosk on a lilac background, its screen glowing with green numbers.',
          },
        ],
        columns: 1,
      },
      {
        story: {
          heading: 'Meet the cast',
          text: 'Before any animation I drew the characters: the kid at the computer, a man on a laptop, a student with a backpack and a startled businessman. Flat colour, angular shapes and long pink limbs keep them simple enough to move, and odd enough to remember.',
        },
        images: [
          { src: btsCastComputerKid, alt: 'Character design: the kid hunched over a computer keyboard, with long pink arms.' },
          { src: btsCastLaptopMan, alt: 'Character design: a man with wide eyes holding an open laptop.' },
          { src: btsCastSchool, alt: 'Character design: a tall, thin student with a backpack and a green T-shirt.' },
          { src: btsCastBusiness, alt: 'Character design: a businessman in a dark suit and green tie, eyes wide in surprise.' },
        ],
        columns: 4,
      },
      {
        story: {
          heading: 'Through the portal',
          text: 'The film opens on hands at a chunky cream keyboard. The kid types, the kiosk counts down, and a green portal swells out of the screen until it swallows him whole. It is the reel’s way of saying: step inside.',
        },
        images: [
          { src: btsKeyboard, alt: 'Close-up of long pink hands typing on a cream keyboard.' },
          { src: btsKiosk, alt: 'The kid at the kiosk as its screen fills with green readouts.' },
          { src: btsPortalOpens, alt: 'Over the kid’s shoulder, a glowing green portal opens beside the kiosk.' },
          { src: btsPortal, alt: 'The kid at the kiosk in the dark, dwarfed by a huge glowing green ring.' },
          { src: btsPortalInside, alt: 'The portal fills the frame: a ring of green light on black.' },
          { src: btsPulledThrough, alt: 'The kid’s arm and the kiosk are pulled into a pixelated green light.' },
        ],
        gallery: true,
      },
      {
        story: {
          heading: 'Changing the channel',
          text: 'He lands in front of an old TV full of static, a chunky green remote in his hand. Each press glitches the picture and tunes into something new, which gives the reel its rhythm and a reason to cut.',
        },
        images: [
          { src: btsTvStatic, alt: 'A pink hand points a green remote at a TV showing grey static.' },
          { src: btsTvChannel, alt: 'The remote in front of the TV as a green abstract picture tunes in.' },
          { src: btsTvGlitch, alt: 'The remote in front of a pink, glitching picture breaking into stripes.' },
        ],
        columns: 3,
      },
      {
        story: {
          heading: 'Every channel is a project',
          text: 'Then the work takes over. A Special Bulletin breaks in over a spinning globe, an illustrated building curves across a city, a grid of type and photography spells out a brand, and a film opens on The Art of Building. All of it is motion I made at Smart Soho, and each piece sits in its own channel, so swapping in something new is one edit, not a new reel.',
        },
        images: [
          { src: btsSpecialBulletin, alt: 'Special Bulletin in chunky green letters over a globe and a broadcast tower on pink.' },
          { src: btsTheBuilding, alt: 'An illustrated curved office building in a busy city, with The Building in white type across it.' },
          { src: btsTypeGrid, alt: 'A grid of large letters on coloured tiles, alternating with street photography.' },
          { src: btsArtOfBuilding, alt: 'Serif titles reading The Art of Building and Capital Cared for on pale grey.' },
          { src: btsGreenScreen, alt: 'A green frame holding a desktop computer mockup and photos of shopfronts and products.' },
        ],
        gallery: true,
      },
      {
        story: {
          heading: 'Switch off',
          text: 'The reel signs off the way old TV did: the picture collapses to a single line of light, and the set goes dark.',
        },
        images: [
          {
            src: btsSwitchOff,
            alt: 'A black screen with a single bright horizontal line, like an old TV switching off.',
            width: 720,
          },
        ],
        columns: 1,
      },
    ],
  },
];

// A case study only gets a page (and its card a link) once it has images.
export const caseStudies = allCaseStudies.filter((study) => study.work.length > 0);

export const findCaseStudy = (slug?: string) => caseStudies.find((c) => c.slug === slug);
