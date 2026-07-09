# Ishika Singh — Academic Portfolio

A dependency-free, single-page academic website built with plain HTML, CSS, and a small theme script. It supports a persistent light/dark mode and follows the visitor's system preference on first load.

## File structure

```text
academic-portfolio/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── files/
    │   └── CV_Ishika_Singh_May25.pdf
    ├── images/
    │   ├── affective-text.png
    │   ├── colosseum.png
    │   ├── favicon.svg
    │   ├── fullstack-placeholder.png
    │   ├── ishika-singh.jpg
    │   ├── og-vla.png
    │   ├── progprompt.png
    │   └── text-games.jpg
    └── js/
        └── theme.js
```

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

Copy the contents of this folder to the root of the `ishikasingh.github.io` repository and push. No build command or dependencies are required.

The publication images, profile photo, stylesheet, and CV are included locally. The existing Flag Counter remains an external embed so its historical visitor count is preserved.
