# Corsaryn founders

A founder-focused editorial website for Andrei Bautista, Rajaram Gairaboni, and Manit Gupta. It is a static site hosted by GitHub Pages from `main`.

## Local preview

Run `python3 -m http.server 8877` in this directory, then open `http://localhost:8877/`. There is no package install or build step.

## Files

- `index.html` contains the content and page structure.
- `styles.css` contains the responsive design and motion rules.
- `main.js` handles the mobile navigation, scroll reveals and progress, and the interactive background constellations. Motion pauses outside the viewport and respects reduced-motion settings.
- `assets/portraits/*.webp` are optimized versions of the three supplied founder PNGs. Their identities and appearance were not altered.
- `assets/corsaryn-mark.svg` and `assets/favicon.svg` reproduce the official double-C vector paths from [`AndreiBautista/Corsaryn/src/components/brand/Logo.tsx`](https://github.com/AndreiBautista/Corsaryn/blob/main/src/components/brand/Logo.tsx). Colors follow that repository's `src/index.css` brand tokens.
- `assets/og-image.png` is copied from [`AndreiBautista/Corsaryn/public/og-image.png`](https://github.com/AndreiBautista/Corsaryn/blob/main/public/og-image.png).

## Content sources

Founder claims were checked against the supplied Andrei Bautista CV, Manit Gupta resume, and Rajaram Gairaboni resume. The original founders repository and the separate Corsaryn company repository provided existing role and product context. Public links point to the team's published research, Mango Care, Corsaryn, and Manit's GitHub/LinkedIn. The site describes Corsaryn as an engineering demonstration and does not claim clinical outcomes.

## Checks

Check JavaScript syntax with `node --check main.js`. Validate the static HTML, asset paths, and links, then inspect the page at desktop, tablet, and phone widths before publishing.
