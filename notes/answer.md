



# Lesson 4 Review Answers — Hero and Tech Stack


### 1. Why no `"use client"`?

The components do not use state, effects, event handlers, or browser APIs. They can therefore be rendered as Server Components.

### 2. Why use a separate typed data file?

It separates content from presentation and improves type safety, maintainability, and reuse.

### 3. Why use a separate icon mapping?

Icons are presentation components, while the technology data file contains simple content and identifiers.

### 4. Why use the `.tsx` extension?

The file contains JSX elements such as `<svg>`. JSX must be written in a `.tsx` file when using TypeScript.

### 5. What is the purpose of `overflow-x: auto`?

It allows horizontal scrolling when the technology cards are wider than their container.

### 6. Why use fixed card widths?

Fixed widths prevent the cards from shrinking until their icons and labels become unreadable.

### 7. What does `flex: 0 0 84px` mean?

It is shorthand for:

```css
flex-grow: 0;
flex-shrink: 0;
flex-basis: 84px;
```

The card does not grow or shrink and keeps a width of `84px`.

### 8. Why use horizontal scrolling?

Wrapping creates several rows and increases the height of the Tech Stack. This could cover or push other Hero content.

### 9. Why add bottom padding on mobile?

The Tech Stack is positioned near the bottom of the Hero. Additional padding reserves enough space for it.

### 10. What is the purpose of scroll snapping?

It helps horizontal scrolling stop close to the start of each technology card.

### 11. Why use `map()`?

The cards share the same structure. Using `map()` avoids duplicated JSX and makes the list easier to maintain.

### 12. Why use a stable key?

React uses the key to identify each item between renders.

### 13. Why use the technology ID instead of the array index?

The ID is stable and unique. Array indexes can change when items are reordered, inserted, or removed.

### 14. Why capitalize `TechnologyIcon`?

React treats capitalized JSX names as components. Lowercase names are interpreted as HTML elements.

### 15. Why use `currentColor`?

It lets the SVG inherit its color from the CSS `color` property.

### 16. Why use `aria-hidden="true"`?

Decorative icons do not add useful information, so screen readers should ignore them.

### 17. Why use a semantic list?

The technologies form a collection of related items. A `<ul>` with `<li>` elements represents that relationship correctly.

### 18. Why import icons individually?

Individual imports avoid importing unused icons and make dependencies clearer.

### 19. Why keep the components as Server Components?

They do not require browser-side interactivity, so Server Components reduce unnecessary client-side JavaScript.

### 20. What checks are required?

- Test desktop, tablet, and mobile layouts.
- Verify horizontal scrolling.
- Check that the Tech Stack does not overlap the Hero.
- Check keyboard navigation.
- Run ESLint.
- Run the production build.
- Test reduced-motion behavior.
