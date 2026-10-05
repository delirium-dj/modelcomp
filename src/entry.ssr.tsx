import { renderToString, type RenderToStringOptions } from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";
import Root from "./root";

export default function (opts: RenderToStringOptions) {
  return renderToString(<Root />, {
    manifest,
    ...opts,
    containerTagName: "html",
    // PageSpeed/i18n: the <html> element must carry lang (screen readers,
    // translators). Qwik generates the <html> wrapper itself, so it is set
    // here — NOT on <body> (see src/root.tsx).
    containerAttributes: { lang: "en", ...opts.containerAttributes },
  });
}
