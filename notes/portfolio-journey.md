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

### Lesson 2 completion checklist

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




 ## Lesson 3 — Shared layout and interactive navigation

### Goal

Create reusable site-wide header and footer components,
including responsive navigation and a language switcher.

### Component decisions

- Header is a Client Component because it uses state,
  effects, event handlers, localStorage and browser APIs.
- Footer remains a Server Component because it has no
  interactivity.
- Internal navigation uses the Next.js Link component.
- Header and footer are rendered from the root layout.
- Navigation data is stored in an array to avoid repeating
  markup.

### What I learned

- Components are Server Components by default.
- "use client" creates a client-side interactive boundary.
- useState stores whether the menu is open.
- useEffect manages browser side effects and cleanup.
- useRef gives access to DOM elements for focus management.
- usePathname identifies the active route.
- Next.js Link provides internal client-side navigation.
- aria-expanded communicates menu state to assistive
  technology.
- aria-current="page" identifies the active navigation link.
- Side effects should clean up event listeners and body
  classes.

### Accessibility implemented

- Keyboard-operable menu button
- Escape closes the menu
- Focus moves into the opened navigation
- Focus returns to the menu button after closing
- Overlay has an accessible label
- Active route uses aria-current
- Language buttons use aria-pressed
- Reduced-motion styles are preserved

### Current limitation

The language switcher stores EN or FR, but actual translated
content will be implemented after the main pages exist.

### Problems I encountered and How I solved them

- `setLanguage()` inside `useEffect` caused a lint error.
- Fixed by creating `useLanguage` with `useSyncExternalStore`.
- Language is now stored in `localStorage` and persists after refresh.
---
- `closeMenu()` inside a pathname effect caused another lint error.
- Fixed by creating `useMobileMenu`.
- The menu now stores the pathname where it was opened.
- It closes automatically when the route changes.
---
- The logo used a normal `<img>`.
- Replaced it with Next.js `<Image>` for optimization.
---
- The mobile menu flashed when resizing from desktop to mobile.
- Fixed by disabling transitions before the first menu interaction.
- Drawer animations now run only after clicking the menu button.
---
- After selecting French, the page briefly showed English after refresh.
- This happened because the server rendered the default `en` value before the browser read `fr` from `localStorage`.
- Fixed by also storing the selected language in a cookie.
- The root layout now reads the cookie on the server.
- The correct language is rendered immediately, preventing the English flash during hydration.

<!-- - The build failed with `EPERM` inside `.next`.
- The project was inside a OneDrive folder.
- Fixed by stopping Node processes, deleting `.next`, and moving the project outside OneDrive. -->


### Result

The portfolio now has reusable site-wide navigation,
responsive mobile behavior and a shared footer.


### Lesson 3 completion checklist

 - [x] Header.tsx exists
 - [x] Header starts with "use client"
 - [x] Footer.tsx exists
 - [x] Header and footer styles are imported
 - [x] Header and Footer render from layout.tsx
 - [x] Logo exists in public
 - [x] All five routes work
 - [x] Next.js Link is used for internal navigation
 - [x] Active route styling works
 - [x] Mobile drawer opens and closes
 - [x] Escape closes the drawer
 - [x] Overlay closes the drawer
 - [x] Menu closes after route navigation
 - [x] Background scrolling is blocked while open
 - [x] EN / FR choice persists after refresh
 - [x] 320px layout has no horizontal overflow
 - [x] npx eslint . succeeds
 - [x] npm run build succeeds
 - [x] Notes include Lesson 3
 - [x] Git commit exists


# Lesson 4 — Hero and Tech Stack

## Objective

Build the homepage Hero and Tech Stack while preserving the original portfolio UX and improving the implementation with reusable React components, typed data, accessible markup and responsive behavior.

The original design includes:

- Frontend Engineer label
- Main Hero title
- Description
- Primary and secondary actions
- Personal motivation note
- Tech Stack panel positioned inside the Hero
- Technology cards with icons
- Horizontal Tech Stack scrolling on smaller screens

---

## What I built

### Hero section

Created a reusable `Hero` component containing:

- The original heading:
  - `I build solutions.`
  - `I create impact.`
- A short professional description
- A link to the Projects section
- A link to the Contact page
- A personal motivation message
- The Tech Stack component positioned at the bottom

### Tech Stack section

Created a reusable `TechStack` component containing:

- A title and description
- Technology cards generated from typed data
- Brand icons from `react-icons`
- Custom SVG fallbacks for Jotai and Visx
- Horizontal scrolling on smaller screens

---

## Project structure

```text
src/
├── components/
│   └── Home/
│       ├── Hero/
│       │   ├── Hero.tsx
│       │   └── hero.css
│       └── TechStack/
│           ├── TechStack.tsx
│           ├── technology-icons.tsx
│           └── tech-stack.css
│
├── data/
│   └── technologies.ts
│
└── app/
    └── page.tsx


### Lesson 4 completion checklist

- [x] Hero background appears correctly
- [x] Original Hero wording is preserved
- [x] Header overlays the Hero
- [x] Hero buttons work
- [x] Tech Stack appears inside the Hero
- [x] Technology cards use icons
- [x] Technology content comes from typed data
- [x] Jotai and Visx use custom SVG components
- [x] Tech Stack scrolls horizontally on smaller screens
- [x] Technology cards do not shrink
- [x] Tech Stack does not cover Hero content
- [x] No horizontal page overflow
- [x] Mobile buttons use full width
- [x] Reduced-motion behavior works
- [x] ESLint passes
- [x] Production build passes