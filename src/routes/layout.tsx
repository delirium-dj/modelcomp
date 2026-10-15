import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default component$(() => {
  // The design studies are standalone canvases, outside the site's navigation and chrome.
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
