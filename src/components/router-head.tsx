import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>
      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <script dangerouslySetInnerHTML={`
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').catch(err => {
              console.error('SW registration failed:', err);
            });
          });
        }
      `} />
      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}
      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}
      {head.styles.map((s) => {
        const styleProps = { ...s.props, dangerouslySetInnerHTML: s.style };
        return <style key={s.key} {...styleProps} />;
      })}
      {head.scripts.map((s) => {
        const scriptProps = { ...s.props, dangerouslySetInnerHTML: s.script };
        return <script key={s.key} {...scriptProps} />;
      })}
    </>
  );
});
