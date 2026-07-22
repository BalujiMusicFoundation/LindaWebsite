# lindashanson.com

Source for Linda Shanson's website — a plain static HTML/CSS site (no build step), designed to be easy to edit by hand and hosted on GitHub Pages.

The design is **painterly and full-bleed**: edge-to-edge painting backgrounds, colours drawn from Linda's own paintings, with a floating navigation over the hero. The colour palette lives as CSS variables at the top of `assets/css/style.css` — change those values to re-theme the whole site.

## Structure

```
index.html                   Home
bio.html                      Bio
music.html                    Music (Jazz Orient/Re-Orient, Once Upon a Night, Baluji Music Foundation)
stories.html                  Stories & Poetry hub
raaja-ajaar.html
journey-with-the-gods.html
frankenstein-in-india.html
contact.html
assets/css/style.css          All styling — colours & fonts as CSS variables at the top
assets/js/nav.js              Mobile menu + dropdown behaviour
assets/images/                Photos
```

## Editing

Every page is plain HTML — open any `.html` file, find the text, edit it, save. There's no templating, so the header/footer are repeated at the top/bottom of each file; if you change the navigation, update it in every page.

Colours and fonts live as CSS custom properties at the top of `assets/css/style.css` (e.g. `--teal-deep`, `--teal-mid`, `--aqua-soft`) — change them there to re-theme the whole site at once.

## Running locally

No build tools needed. Just open any `.html` file directly in a browser, or serve the folder with any static server, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository (e.g. `lindashanson-website`).
2. In the repo settings, go to **Pages** and set the source to the `main` branch, root folder.
3. GitHub will publish it at `https://<username>.github.io/<repo>/`.
4. To use the custom domain `lindashanson.com`, add a `CNAME` file to the repo root containing just `lindashanson.com`, and point the domain's DNS to GitHub Pages (see GitHub's custom domain docs).

## Notes

- A few external links point to existing hosted assets (the Bandcamp release, the Raaja Ajaar script PDF, the Elmbridge competition page) rather than being migrated in.
- Images in `assets/images` come from the previous Wix site and from Linda's Google Drive (the "Linda Website 2026" and "paintings 2018" folders). Several paintings are large (1–6MB) and should be compressed before the site goes fully live, for faster loading.
- Scroll-in animations are a **progressive enhancement**: a one-line inline script in each page's `<head>` adds a `js` class to `<html>`, and the CSS only hides `.reveal` elements when that class is present. If JavaScript ever fails to load, all content still shows — nothing is hidden behind a broken script.
- `art-spring-sister.jpg` and `art-spirit-of-spring.jpg` are faint line sketches; they sit at the end of the Art gallery. Swap in stronger scans if available.
