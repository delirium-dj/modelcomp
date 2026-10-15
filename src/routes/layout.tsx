import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default component$(() => {
  // The v2 homepage and the design studies are standalone canvases with
  // their own header/footer inside each page — outside the v1 chrome
  // (which still serves /contact, /model/*, etc.).
  const path = useLocation().url.pathname.replace(/^\/+/, "/").replace(/\/+$/, "");
  if (
    path === "/" ||
    path === "/design-6sol" ||
    path === "/design-g38f5" ||
    path === "/design-step52"
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
