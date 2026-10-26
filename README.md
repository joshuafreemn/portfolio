# joshuafreemn.space

Portfolio site, built with [Astro](https://astro.build) from the Figma file "Frosh 2.0" (page V3).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Structure

- `src/pages/index.astro` – home page (Figma frames "V2a - Home" and "iPhone 13 & 14 - 1")
- `src/pages/showreel.astro`, `work.astro`, `web.astro`, `cv.astro` – the Motion, Design, Web and About folders
- `src/pages/wrk/[slug].astro` – the case study template, one page per entry in `src/data/caseStudies.ts`
- `src/layouts/FolderPage.astro` – the open folder (tabs and close button) shared by the four sections; it always runs off the bottom of the page
- `src/components/FolderTabs.astro` – the closed folder tabs on the home page
- `src/components/StackCard.astro`, `ProjectDetails.astro` – the stacked index cards on Design and Web
- `src/styles/tokens.css` – colours and type, mirrored from `public/Assets/tokens.json`
- `public/` – older hand-written pages and assets that haven't been rebuilt yet, served as-is

## Editing content

- **Nav and CV PDF:** `src/data/site.ts`. Drop the web CV into `public/` and set `cvPdf` to show the download button on About.
- **Project cards:** `src/data/projects.ts`. Fields you leave out aren't shown.
- **Case studies:** `src/data/caseStudies.ts`. A project's card only links to its case study once it has an entry here, and empty sections (brief, idea, what I did, result) are skipped, so nothing goes live as placeholder copy. Put images in `src/assets/wrk/<slug>/`; they're exported as WebP at build time.
- **Behind the scenes:** set `btsHref` in `src/pages/showreel.astro` once `wrk/bts.html` has real copy.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
In the repo's Settings → Pages, set **Source** to **GitHub Actions**.
