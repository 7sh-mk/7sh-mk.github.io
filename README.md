# Sharifa Alzubaidi · Portfolio

Personal portfolio, live at **https://7sh-mk.github.io/**.

Plain HTML, CSS and JavaScript. No build step, no framework. English by default with an Arabic (RTL) toggle, plus light and dark modes.

## Updating content

Everything on the page comes from [`data/profile.json`](data/profile.json). Edit it, commit, and push; GitHub Pages republishes in a minute or two.

- Text fields are `{ "en": "...", "ar": "..." }`. A plain string is shown as-is in both languages.
- Dates are `"YYYY-MM"`. Use `null` for “present”.
- **CV:** put the PDF at `assets/cv.pdf` and set `"cv": "assets/cv.pdf"` in `basics`. While it is `null`, the download button stays hidden.
- **Projects:** each project can have
  - `demo` – a live URL shown inside the page in a browser frame (`"allow": "camera"` if it needs the camera),
  - `video` – `src` and `poster`,
  - `images` – a gallery with captions (WebP under `assets/projects/<id>/`),
  - `thumb` – the card image, otherwise the first gallery image is used,
  - `tags` – also used by the Skills section: a skill that matches a project tag becomes clickable and filters the projects.
- **Categories** for the project filter are in `projectCategories`.

## Structure

```
index.html          page shell, meta and Open Graph tags
css/style.css       design tokens (colors from the logo and LinkedIn banner) and layout
js/main.js          renders data/profile.json, UI strings for both languages
data/profile.json   all content
assets/brand/       logo, banner, favicon sources, Open Graph image
assets/projects/    project images and video
404.html
```

## Run locally

```bash
python -m http.server 8123
```

Then open http://localhost:8123.
