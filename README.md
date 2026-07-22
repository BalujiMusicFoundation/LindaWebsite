# lindashanson.com

Source for Linda Shanson's website — a plain static HTML/CSS site (no build step), designed to be easy to edit by hand and hosted on GitHub Pages.

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
- Photos in `assets/images` were sourced from the previous Wix site and the Google Drive archive; several are large (1MB+) and could be compressed further for faster load times.
- The "Art" section from the original site's navigation had no distinct content behind it at time of writing, so a sample artwork was folded into the Home page instead — expand into its own page if there's a body of work to show.
