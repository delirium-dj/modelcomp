import { component$, Slot } from "@builder.io/qwik";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default component$(() => {
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
