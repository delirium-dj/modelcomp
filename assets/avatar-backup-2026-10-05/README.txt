Avatar backup — 2026-10-05
============================
Reason: preview Vercel-hosted avatar as favicon + PWA icon.

Backed up from:
- public/favicon.svg  (brand hex SVG derived from src/components/HeroArt.tsx)
- public/manifest.json (SVG-only icons entry)
- src/components/router-head.tsx (favicon.svg link wiring)

Vercel source (max served size is 256px despite ?s=640):
- https://vercel.com/api/www/avatar/80e7ae032df71361b614147a40853d569a09c294?s=640
- Served: 256x256 paletted PNG, 1587 bytes, transparent background,
  flat blue hexagon ring + green core (NOT a raster of favicon.svg:
  no gradient, no inner hexagon, no vertex dots, no spokes, no white core dot).
- Vendored byte-identical as public/avatar.png; PWA sizes derived from it:
  public/icon-192.png (downscale), public/icon-512.png (2x upscale),
  public/apple-touch-icon.png (180x180). Purpose "any" only (no maskable:
  transparent background would crop badly).

Rollback: copy favicon.svg, manifest.json, router-head.tsx back over the
live files, delete public/avatar.png, public/icon-192.png,
public/icon-512.png, public/apple-touch-icon.png, then rebuild.
