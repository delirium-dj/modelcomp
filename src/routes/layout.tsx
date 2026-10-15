import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default component$(() => {
  // The design studies + v2 experiment are standalone canvases with their own
  // header/footer inside the page — outside the site's v1 chrome.
  const path = useLocation().url.pathname.replace(/^\/+/, "/").replace(/\/+$/, "");
  if (
    path === "/design-6sol" ||
    path === "/design-g38f5" ||
    path === "/design-step52" ||
    path === "/v2"
  ) {
    return <Slot />;
  }
  return (
    <>
      <Header />
      <main id="top">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
