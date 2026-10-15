import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default component$(() => {
  // The design studies + the whole v2 experiment tree are standalone canvases
  // with their own header/footer inside each page — outside v1 chrome.
  const path = useLocation().url.pathname.replace(/^\/+/, "/").replace(/\/+$/, "");
  if (
    path === "/design-6sol" ||
    path === "/design-g38f5" ||
    path === "/design-step52" ||
    path === "/v2" ||
    path.startsWith("/v2/")
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
