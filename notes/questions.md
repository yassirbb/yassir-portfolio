### Lesson 2 review

1. Why do we import root.css before global.css?
2. What does next/font improve compared with a Google Fonts link?
3. Why do we use CSS variables for colors?
4. What is the difference between body text and display text?
5. Why is the container responsive?
6. Why should npm run build be tested after CSS changes?


### Lesson 3 review

1. Why does Header.tsx need "use client"?
2. Why does Footer.tsx not need it?
3. What is the difference between Link and a normal anchor?
4. What does usePathname return?
5. Why do we remove the keydown listener in the effect cleanup?
6. What does aria-expanded communicate?
7. Why is the mobile menu state stored in React instead of changing classes manually with querySelector?
8. Why is the language preference saved in localStorage?


# Lesson 4 Review Questions — Hero and Tech Stack

## Questions

1. Why do the `Hero` and `TechStack` components not need `"use client"`?
2. What is the advantage of storing technologies in a separate typed data file?
3. Why are technology icons stored in a separate `technology-icons.tsx` file?
4. Why must the icon file use the `.tsx` extension instead of `.ts`?
5. What problem does `overflow-x: auto` solve in the Tech Stack?
6. Why do technology cards use a fixed flex width on small screens?
7. What does this CSS rule mean?

```css
.tech-card {
  flex: 0 0 84px;
}
```

8. Why is horizontal scrolling better than wrapping the cards into multiple rows inside the Hero?
9. Why does the Hero need additional bottom padding on mobile?
10. What is the purpose of `scroll-snap-type: x proximity`?
11. Why is the Tech Stack rendered using `map()`?
12. Why should each rendered technology have a stable key?
13. Why is the technology ID a better key than the array index?
14. Why is the icon assigned to a capitalized variable?

```tsx
const TechnologyIcon = technologyIcons[technology.id];
```

15. Why do the SVG icons use `currentColor`?
16. Why are decorative icons marked with `aria-hidden="true"`?
17. Why is a `<ul>` with `<li>` elements suitable for the Tech Stack?
18. Why are React Icons imported individually instead of importing the complete icon library?
19. Why should the Hero and Tech Stack remain Server Components?
20. What checks should be performed before considering the lesson complete?
