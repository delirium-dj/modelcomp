// Shared hexagon geometry for the v2 radar charts (homepage hero, homepage
// compare, model profile). Pure math — no framework, no DOM.
//
// The only per-chart difference is the geometry box (the homepage uses a
// full-height 400×400 box; the profile is vertically offset and smaller), so
// callers pass a `HexGeometry` instead of redeclaring the math three times.

/** Radial emphasis: 0–75 fills the inner half of each axis, 75–100 the outer. */
export const HEX_GAMMA = Math.LN2 / Math.log(100 / 75);

export interface HexGeometry {
  cx: number;
  cy: number;
  /** Radius (px) mapped to a score of 100. */
  maxR: number;
  /** Radius (px) of the axis-label ring drawn at value 100. */
  labelR: number;
}

/** Point at `value` (0–100) on axis `index` (0–5, clockwise from the top). */
export function hexPoint(
  value: number,
  index: number,
  geo: HexGeometry,
  r = geo.maxR,
): { x: number; y: number } {
  const angle = ((-90 + index * 60) * Math.PI) / 180;
  const clamped = Math.max(0, Math.min(100, value));
  const radius = Math.pow(clamped / 100, HEX_GAMMA) * r;
  return { x: geo.cx + radius * Math.cos(angle), y: geo.cy + radius * Math.sin(angle) };
}

/** Closed six-point polygon string for a uniform score (grid rings, outlines). */
export function hexPolygon(value: number, geo: HexGeometry): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const p = hexPoint(value, i, geo);
    pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
  }
  return pts.join(" ");
}

/** Bar-length twin of the hexagon radius: 75 → 50% width, 100 → full width. */
export function barWidth(value: number): string {
  const clamped = Math.max(0, Math.min(100, value));
  return `${(Math.pow(clamped / 100, HEX_GAMMA) * 100).toFixed(1)}%`;
}
