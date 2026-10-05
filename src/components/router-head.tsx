import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  const description = head.meta.find((m) => m.name === "description")?.content;

  return (
    <>
      <title>{head.title}</title>
      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:site_name" content="ModelComp" />
      <meta property="og:title" content={head.title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={loc.url.href} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={head.title} />
      {description && <meta name="twitter:description" content={description} />}
      <link rel="icon" type="image/png" sizes="256x256" href="/avatar.png" />
      <link rel="apple-touch-icon" href="/favicon.svg" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#4f46e5" />
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
