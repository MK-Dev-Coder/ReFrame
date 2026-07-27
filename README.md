# ReFrame — painting reconstruction site

A three-page site presenting three digital reconstructions of a painting: a homepage, an about page, and a reconstructions page with draggable before/after comparison sliders.

The real artwork is now wired in: `src/assets/original.jpg` is the surviving state, and the three reconstructions (ChatGPT, Nano Banana/Gemini, Stable Diffusion) are compared against it. The `.jpg` files imported by the site are web-optimized copies; the original uploads (`reconstruced_by_ChatGPT.png`, `reconstructed_by_nano.png`, `reconstructed_by_stable_dif.png`) are kept in `src/assets/` untouched.

## Quick start

Requires Node 18+.

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build locally
```

## One-file demo for sharing

```bash
npm run build:standalone
```

This produces `dist-standalone/index.html` — a single self-contained file containing the entire site. Send it to anyone: they double-click it and it opens in their browser, no Node or install needed. It uses hash-based URLs (`#/about`) so routing works when opened straight from disk. Fonts load from the internet; offline it falls back to system fonts.

## GitHub Pages

This repo is set up to publish the site from GitHub Pages. The hosted build uses relative asset paths and hash-based routing so it works from a project page like `https://<user>.github.io/ReFrame/`.

To publish it:

1. Push these changes to your GitHub repository.
2. In GitHub, open **Settings > Pages**.
3. Set **Build and deployment** to **GitHub Actions**.
4. Push to the default branch again, or run the workflow manually if you prefer.

If you want clean URLs on GitHub Pages instead of hash URLs, I can add a `404.html` fallback and switch the router strategy too.

## Project structure

```
index.html                        fonts, favicon, meta
src/
  main.jsx                        entry: mounts <App/> inside BrowserRouter
  App.jsx                         routes, scroll restoration, page fade
  styles/global.css               design tokens (:root) + all styles
  data/recons.js                  ALL copy for the three reconstructions
  pages/
    Home.jsx                      hero + three teaser cards
    About.jsx                     object label + project prose
    Reconstructions.jsx           three comparison sections (#recon-1..3)
  components/
    NavBar.jsx  Footer.jsx        shell
    Eyebrow.jsx  DataRow.jsx      small shared pieces
    CompareSlider.jsx             the before/after slider (pointer + keyboard)
  assets/                         the four images the site uses
```

## Artwork

The images live in `src/assets/` and are imported in `src/data/recons.js` (`SURVIVING` + one `image` per reconstruction). To replace one, drop the new file in `src/assets/` and update the corresponding import there. Aim for ~1600–2400px wide, under ~500KB each.

The original full-size PNG uploads are kept one level up in `archive/source-images/`; the old procedural SVG placeholder (`src/components/painting/`) has been deleted.

For very high-resolution files, consider adding OpenSeadragon later for museum-style deep zoom.

## Editing content

- Reconstruction titles, copy, and method data: `src/data/recons.js`
- About-page text and object label: `src/pages/About.jsx`
- Hero copy: `src/pages/Home.jsx`
- Colours and typography: the `:root` block in `src/styles/global.css`

## Deploying

Push to GitHub and import the repo into Vercel or Netlify — a Vite project deploys with zero configuration. Note for hosting with client-side routing: on Netlify add a `_redirects` file containing `/* /index.html 200` (Vercel handles this automatically for Vite).
