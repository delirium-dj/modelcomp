import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head";
import "./global.css";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        
        {/*
          Anti-flash script: runs synchronously in <head> BEFORE the first paint.
          WHY only html.dark? document.body does NOT exist yet at this point,
          so any body.classList call silently does nothing. We only need to add
          .dark to <html> — Tailwind's `dark:` utilities cascade down from there.
        */}
        <script
          dangerouslySetInnerHTML={`
            (function() {
              try {
                var stored = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                // Apply .dark to <html> only — body inherits via CSS cascade
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `}
        />

        {/**
         * PWA manifest lives in RouterHead (src/components/router-head.tsx),
         * which owns all head links — kept here would emit it twice (B3).
         */}

        <RouterHead />
      </head>
      {/* 
        WHY no bg-white / dark:bg-slate-950 here?
        Body colors are controlled by CSS variables in global.css:
          :root          → --color-bg: #ffffff  (light)
          html.dark      → --color-bg: #020617  (dark)
          body           → background-color: var(--color-bg)
        When html.dark toggles, the variable flips and the body inherits
        the update automatically — no competing class selectors to fight.
        Having bg-white here caused a specificity tie with dark:bg-slate-950,
        and bg-white was winning (appearing earlier = lower priority in CSS).
      */}
      {/* lang lives on <html> via containerAttributes in entry.ssr.tsx — that is
        what screen readers and the PageSpeed i18n audit check, and <body>
        inherits it automatically. */}
      <body class="antialiased transition-colors duration-200">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
