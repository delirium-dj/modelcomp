---
kind: frontend_style
name: Tailwind CSS + CSS Variables Dark Mode Theming
category: frontend_style
scope:
    - '**'
source_files:
    - tailwind.config.js
    - postcss.config.js
    - src/global.css
    - src/components/theme-toggle/theme-toggle.tsx
    - src/components/Header.tsx
    - src/components/Hero.tsx
    - src/components/CompareSection.tsx
    - src/components/Footer.tsx
---

## Approach

The ModelComp site uses **Tailwind CSS** (v4 via `tailwind.config.js`) with PostCSS and Autoprefixer as its styling engine, built on top of QwikCity. There is no component library or design-system package — styles are written directly as Tailwind utility classes in JSX components, with a small set of global CSS variables for theming.

## Key Files

- `tailwind.config.js` — Tailwind configuration; extends theme colors to map to CSS custom properties (`--color-bg`, `--color-surface`, `--color-primary`, `--color-secondary`, `--color-text-main/muted/inverted`, `--color-border`).
- `postcss.config.js` — enables `tailwindcss` and `autoprefixer` plugins.
- `src/global.css` — root stylesheet that imports Tailwind layers (`@tailwind base/components/utilities`), defines light/dark CSS variable sets on `:root` and `html.dark`, and sets body baseline colors with a smooth transition.
- `src/components/theme-toggle/theme-toggle.tsx` — Qwik component that toggles the `.dark` class on `<html>` and persists the choice in `localStorage` under the key `theme`.
- Component files under `src/components/` (`Header.tsx`, `Hero.tsx`, `CompareSection.tsx`, `Footer.tsx`, etc.) — all style themselves inline with Tailwind utilities.

## Architecture and Conventions

1. **Dark mode via class strategy.** `tailwind.config.js` sets `darkMode: "class"` (with an explicit comment: *MUST be "class" for the anti-flash script to work*). The toggle component adds/removes `.dark` on `document.documentElement` (`<html>`). `global.css` declares `:root` defaults for light mode and overrides only on `html.dark`; comments explicitly warn against adding `.dark` to `<body>` because it causes a race condition with the anti-flash script in `<head>`.

2. **Design tokens as CSS custom properties.** Tailwind's extended color palette is aliased to CSS variables (`background`, `surface`, `primary`, `secondary`, `text.main/muted/inverted`, `border`). This lets both Tailwind utilities and any raw CSS referencing `var(--color-*)` flip together when the `.dark` class changes. Only two variables are currently defined in `global.css`: `--color-bg` and `--color-text-main`; the others (`--color-surface`, `--color-primary`, `--color-secondary`, `--color-text-muted`, `--color-text-inverted`, `--color-border`) are declared in the config but not yet assigned values in CSS.

3. **Utility-first styling in JSX.** Components compose appearance entirely from Tailwind classes — no per-component CSS modules or SCSS files. Examples include `bg-white dark:bg-slate-900`, `text-slate-900 dark:text-white`, `border border-slate-200 dark:border-slate-800`, `hover:bg-indigo-700 dark:hover:bg-indigo-600`. Color variants consistently pair a light-mode color with a `dark:` counterpart.

4. **Responsive breakpoints use Tailwind's defaults.** Utilities like `md:text-5xl`, `md:hidden`, `md:text-3xl` indicate mobile-first responsive styling without custom breakpoint definitions.

5. **Transitions for theme switching.** `global.css` applies `transition: background-color 0.2s ease, color 0.2s ease` to `body`, and many components add `transition-colors` to their text/background classes so the theme swap animates smoothly.

6. **No custom Tailwind plugins.** `plugins: []` in `tailwind.config.js` — the project does not extend Tailwind with additional plugins beyond the core ones.

## Conventions and Constraints

- **Dark mode activation target:** The `.dark` class must be placed on `<html>`, never on `<body>`. Enforced by the comment in `global.css` explaining the race condition with the anti-flash inline script and by the toggle component which reads/writes `document.documentElement.classList`.
- **Do not use `!important` on body rules.** `global.css` contains an explicit note: *Do NOT use `!important` here — it blocks Tailwind's `dark:` utilities from winning the cascade.*
- **Use `dark:` prefixed Tailwind utilities alongside base colors.** Every component that references a color pairs the light-mode token with a corresponding `dark:` variant (e.g. `text-slate-900 dark:text-white`, `bg-white dark:bg-slate-900`, `border-slate-200 dark:border-slate-800`).
- **Theme persistence:** The selected theme is stored in `localStorage` under the key `theme` with values `"light"` or `"dark"`, read back on initial load via `useVisibleTask$`.
- **Color tokens should go through CSS variables.** New semantic colors should be added to the `colors` extension in `tailwind.config.js` mapped to `var(--color-*)` rather than hard-coded hex values, following the pattern already established for `background`, `surface`, `primary`, `secondary`, `text`, and `border`.
- **Smooth scrolling is enabled globally** via `scroll-behavior: smooth` on `html`.