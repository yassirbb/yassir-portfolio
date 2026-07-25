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
```

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


# Lesson 5 — Featured Projects

## What I built

- Migrated the original Featured Projects section to Next.js.
- Preserved the title, section icon, project cards, tags and arrow actions.
- Created a reusable `ProjectCard` component.
- Moved repeated project content into typed data.
- Used `satisfies Project[]` to validate the project data.
- Used Next.js `Link` for internal navigation.
- Used Next.js `Image` for project screenshots.
- Kept the section as a Server Component.
- Used flexbox inside cards to align their footers.
- Added responsive three, two and one-column layouts.
- Added visible keyboard focus and reduced-motion support.

## Problems solved

- Removed duplicated card markup.
- Kept project content separate from presentation.
- Prevented different description lengths from misaligning card footers.
- Added responsive image sizing.
- Preserved the original visual design without copying the static HTML blindly.


### Lesson 5 completion checklist


- [x] Three cards appear on large screens
- [] Two cards appear on medium screens
- [] One card appears on mobile
- [x] Images keep their 16:9 ratio
- [x] Card footers remain aligned
- [] Keyboard focus is visible, still need to be enhanced
- [x] Hover effects work
- [x] Reduced-motion preferences are respected
- [] Hero button scrolls to Featured Projects, issue : stop after one click
- [x] No horizontal page overflow


# Lesson 6 — My Journey Timeline

## What I built

- Migrated the original My Journey section to Next.js.
- Preserved the chronological timeline UX.
- Moved timeline content into typed data.
- Created a reusable JourneyItem component.
- Used an ordered list for semantic chronology.
- Added a typed icon mapping using React Icons.
- Created the vertical timeline line with a CSS pseudo-element.
- Added responsive marker sizes and spacing.
- Kept the section as a Server Component.
- Added accessible heading relationships and decorative icon handling.

## What I learned

- Ordered content should use an `<ol>`.
- Stable IDs are better React keys than array indexes.
- Repeated timeline markup should be generated with `map()`.
- Icon mappings keep presentation logic separate from data.
- A pseudo-element can create a timeline line without extra markup.
- `z-index` allows markers to appear above the timeline line.


### Lesson 6 completion checklist

- [x] The section title and icon appear correctly
- [x] Timeline entries follow chronological order
- [x] The vertical line passes behind the markers
- [x] Markers align with each entry
- [x] Text does not overlap the timeline
- [x] Mobile spacing remains readable
- [x] The Journey navigation link reaches the section
- [x] No horizontal overflow appears
- [] Icons are ignored by screen readers


# Lesson 7 — Certifications

## What I built

- Postponed the Learning Journey section to a future version.
- Built a dedicated Certifications section.
- Created a stronger responsive card design.
- Stored certification content in typed data.
- Created a reusable CertificationCard component.
- Added provider icons using React Icons.
- Added descriptions and skill tags to each credential.
- Used semantic time elements for issue dates.
- Avoided rendering fake links when a credential URL is missing.
- Aligned card footers using flexbox and `margin-top: auto`.
- Added keyboard focus and reduced-motion support.

## What I learned

- Optional links should only render when a valid destination exists.
- Card content can be richer without changing the overall visual identity.
- Flexbox can keep card footers aligned across cards with different content.
- Typed provider IDs make icon mappings safer.
- Postponed features should be removed cleanly from imports and rendering.


- [x] Three cards appear on desktop
- [] Two cards appear on medium screens
- [] One card appears on mobile
- [x] Provider icons display correctly
- [x] Card footers align
- [x] Cards have equal height on desktop
- [x] Missing credential links are not clickable
- [x] No Learning Journey content appears
- [x] No horizontal overflow appears


# Lesson 8 — Contact Footer

## What I built

- Migrated the original contact footer.
- Added real email, location and social links.
- Moved contact data into a typed data file.
- Created reusable ContactInfo and SocialLinks components.
- Used safe external-link attributes.
- Used Next.js Image and Link.
- Generated the current copyright year automatically.
- Added a responsive three-column desktop layout.
- Added keyboard focus and reduced-motion support.

## What I learned

- Shared page elements belong in the root layout.
- External links should use `noopener noreferrer`.
- Contact data should not be duplicated across components.
- Decorative icons should be hidden from screen readers.
- Automatic dates prevent manual maintenance.

- [x] Footer appears on every route
- [x] Email opens the mail application
- [x] GitHub and LinkedIn open in new tabs
- [x] External links include safe rel attributes
- [x] Contact cards align correctly
- [x] Footer stacks correctly on mobile
- [x] Logo links to the homepage
- [x] Back-to-top link works
- [x] Focus states are visible
- [x] No horizontal overflow appears