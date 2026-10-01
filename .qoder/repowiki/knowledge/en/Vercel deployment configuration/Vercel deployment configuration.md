---
kind: external_dependency
name: Vercel deployment configuration
slug: vercel
category: external_dependency
category_hints:
    - vendor_identity
scope:
    - '**'
---

The project ships a `vercel.json` declaring HTTP headers for the Vercel platform: all paths get `Cache-Control: public, max-age=0, must-revalidate`, while `/build/*` assets get immutable caching (`max-age=31536000`). This pins Vercel as the intended hosting target for the Qwik City static SSG output.