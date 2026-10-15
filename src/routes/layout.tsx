import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeaderV2 } from "../components/v2/HeaderV2";
import { FooterV2 } from "../components/v2/FooterV2";

export default component$(() => {
  // The design studies are standalone canvases, outside the site's navigation and chrome.
  const path = useLocation().url.pathname.replace(/^\/+/, "/").replace(/\/+$/, "");
  if (
    path === "/design-6sol" ||
    path === "/design-g38f5" ||
    path === "/design-step52"
  ) {
    return <Slot />;
  }
  // /v2 gets its own redesigned chrome — v1 Header/Footer untouched.
  if (path === "/v2") {
    return (
      <>
        <HeaderV2 />
        <main id="top">
          <Slot />
        </main>
        <FooterV2 />
      </>
    );
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
