import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";

export const ThemeToggle = component$(() => {
  const isDark = useSignal(false);

  useVisibleTask$(() => {
    isDark.value = document.documentElement.classList.contains("dark");
  });

  const toggleTheme = $(() => {
    const root = document.documentElement;
    const body = document.body;
    const isDarkNow = root.classList.contains("dark");
    
    if (isDarkNow) {
      root.classList.remove("dark");
      if (body) body.classList.remove("dark");
      isDark.value = false;
      try {
        localStorage.setItem("theme", "light");
      } catch (e) {}
    } else {
      root.classList.add("dark");
      if (body) body.classList.add("dark");
      isDark.value = true;
      try {
        localStorage.setItem("theme", "dark");
      } catch (e) {}
    }
  });

  return (
    <button
      type="button"
      onClick$={toggleTheme}
      class="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-300 dark:hover:bg-slate-800"
      aria-label="Toggle dark mode"
      title={isDark.value ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark.value ? (
        /* Sun Icon — shown when Dark Mode is active */
        <svg
          class="h-5 w-5 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        /* Moon Icon — shown when Light Mode is active */
        <svg
          class="h-5 w-5 text-slate-700 dark:text-slate-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
});
