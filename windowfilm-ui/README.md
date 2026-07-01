# Window Film Philadelphia — Element Catalog

This repo is the **official catalog of reusable building blocks** for the site. It is not the
production site: it's where the team comes to see each element working and copy its code to
paste into the pages they're building.

**Live URL:** _(paste your Vercel URL here once connected, e.g. https://wfp-elements.vercel.app)_

---

## For the team: how to use an element

1. Open the live catalog URL.
2. Find the element you need (sidebar).
3. See it working in the preview.
4. Copy the **"1. Import"** block and paste it at the top of your `.astro` file (between the `---`).
5. Copy the **"2. Paste where you need it"** block into the body of your page.
6. Adjust the props (text, images) to what that page needs.

That's it. You don't need to install anything to use the catalog — just look and copy.

---

## The golden rule

> **Every new element or animation gets added here first, then used on the pages.**

That way this repo is always the complete inventory and animations don't end up scattered
across the 80 pages. If you invent something new for a page, add it here too.

---

## Structure

```
src/
├── components/
│   ├── HeroVideo.astro           ← main hero: bg video + word-stagger headline
│   ├── HeroSubpage.astro         ← hero for inner pages (image bg)
│   ├── TrustStrip.astro          ← infinite CSS logo carousel
│   ├── WhatWeDoPanels.astro      ← category panels, cinematic hover
│   ├── HowItWorksSlideshow.astro ← auto-play slideshow + FAQ accordion
│   ├── ApplicationsGrid.astro    ← cards with hover zoom
│   ├── BenefitsTabs.astro        ← 8-tab benefits switcher
│   ├── ReviewsCarousel.astro     ← drag-to-scroll reviews
│   ├── VideoBand.astro           ← full-width video band
│   ├── MobileStickyCTA.astro     ← bottom bar on mobile (CSS only)
│   ├── animations/               ← reusable animations
│   │   ├── CountUp.astro         ← count-up on scroll (bug fixed)
│   │   ├── ScrollReveal.astro    ← generic reveal-on-scroll utility
│   │   ├── WordStagger.astro     ← word-by-word headline reveal
│   │   └── FadeInUp.astro        ← simple single-element reveal
│   └── catalog/
│       └── ElementShowcase.astro ← (internal) wrapper for each block
├── layouts/
│   └── CatalogLayout.astro
└── pages/
    └── index.astro               ← the catalog
```

All animations are pure CSS + vanilla JS — no external libraries (no GSAP, AOS,
or Framer). Ported from the WFP homepage (`index.astro` and `Benefits.astro`).

---

## How to add a new element to the catalog

1. Create the component in `src/components/` (or `src/components/animations/` if it's an animation).
2. Open `src/pages/index.astro`.
3. Import it at the top (next to the others).
4. Add an `<ElementShowcase ...>` block with its `title`, `importAs`, `file`, `usage`, and
   `code` (the code the team will copy), and put the live element inside.
5. Add it to the `items` array too (the sidebar).
6. `git push` → Vercel publishes it automatically.

---

## ⚠️ Important: Tailwind must match production

This repo's `tailwind.config.mjs` **must be an exact copy** of your live site's (same colors,
fonts, and breakpoints). If they don't match, a block will look fine here but broken when
pasted into production. Whenever you change the production config, copy it here too.

---

## Run locally

```bash
npm install
npm run dev      # open http://localhost:4321
```

## Publish

Connect the repo to Vercel (framework: **Astro**, auto-detected). Every `git push` to `main`
re-publishes the catalog.
