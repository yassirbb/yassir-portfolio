# Building My Portfolio with Next.js

## Lesson 1 — Project initialization

### My goal

Build and deploy a production-ready bilingual portfolio using
Next.js, TypeScript and my existing custom CSS design.

### Why I chose Next.js

- It builds on React, which I already use professionally.
- It provides file-based routing.
- It supports static rendering and SEO metadata.
- It gives me practical Next.js experience for my career.
- It can be deployed easily on Vercel.

### My initial technical decisions

- Next.js App Router
- TypeScript
- ESLint
- src directory
- Custom CSS instead of Tailwind
- Git for version control

### What I learned

- page.tsx defines a route page.
- layout.tsx wraps shared content.
- public stores static assets.
- npm run dev starts development mode.
- npm run build validates the production build.

### Problems I encountered

connect to github

### How I solved them

following this doc [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=linux)

### First milestone

The application runs locally and has a successful production build.


### Lesson 1 completion checklist

- [x] Node version is at least 20.9
- [x] Next.js project was created
- [x] TypeScript is enabled
- [x] App Router is enabled
- [x] Tailwind is not installed
- [x] `npm run dev` works
- [x] Homepage displays your name and description
- [x] CSS changes appear
- [x] `npm run build` succeeds
- [x] First Git commit exists
- [x] `portfolio-journey.md` exists



## Lesson 2 — Design system foundation

### Goal

Create the global visual foundation before building individual
portfolio pages.

### Design decisions

- Inter is used for body text.
- Manrope is used for headings.
- JetBrains Mono is used for labels and technical metadata.
- Fonts are loaded using next/font.
- Shared colors, sizes, shadows and spacing are stored as CSS variables.
- Global styles are separated from reusable button styles.
- Tailwind is not used because the project already has a custom CSS design.

### CSS structure

- root.css contains design tokens.
- global.css contains reset and shared layout styles.
- buttons.css contains reusable button variants.
- app/globals.css imports these files in the required order.

### What I learned

- next/font optimizes and self-hosts fonts.
- CSS variables make the design system consistent.
- Global CSS should only contain styles shared across the application.
- CSS import order matters in production.
- Metadata can be exported from layout.tsx.
- Responsive behavior should be checked from 320px upward.

### Problems I encountered

Font variables are not available for css to use. 
### How I solved them

I  placed the font-variable classes on `html` rather than `body`. This makes the variables available everywhere in the document.

### Result

The portfolio now has production-ready fonts, colors,
typography, containers and buttons.

### Lesson 1 completion checklist

 - [x] src/styles/root.css exists
 - [x] src/styles/global.css exists
 - [x] src/styles/buttons.css exists
 - [x] Three fonts are configured with next/font
 - [x] Font CSS variables are applied to body
 - [x] Metadata contains title and description
 - [x] app/globals.css imports styles in the correct order
 - [x] Preview page uses the real colors and typography
 - [x] Desktop layout works
 - [x] Mobile layout works at 390px and 320px
 - [x] No horizontal overflow appears
 - [x] npm run build succeeds
 - [x] Notes include Lesson 2
 - [x] Git commit exists