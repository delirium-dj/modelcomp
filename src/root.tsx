import { component$, isDev } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head";
import "./global.css";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        
        {/* Anti-flash script: runs before first paint */}
        <script
          dangerouslySetInnerHTML={`
            (function() {
              try {
                var storedTheme = localStorage.getItem('theme');
                var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (storedTheme === 'dark' || (!storedTheme && systemTheme)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `}
        />

        {/**
         * PWA Support:
         * The manifest.json file tells mobile devices how to "install" your site
         * as an app (icon, theme color, etc.). We only include it in production.
         */}
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}

        <RouterHead />
      </head>
      <body lang="en" class="bg-white text-slate-900 antialiased transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
