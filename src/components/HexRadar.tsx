import { component$ } from "@builder.io/qwik";
import { DIMENSIONS } from "../data/models";
import type { AiModel } from "../data/models";

export interface RadarDatum {
  model: AiModel;
  color: string;
}

interface HexRadarProps {
  series: RadarDatum[];
}

const CX = 200;
const CY = 200;
const MAX_R = 130;
const LABEL_R = 168;

function polar(value: number, index: number, radius: number): { x: number; y: number } {
  const clamped = Math.max(0, Math.min(100, value));
  const angle = ((-90 + index * 60) * Math.PI) / 180;
  const r = (clamped / 100) * radius;
  return { x: CX + r * Math.cos(angle), y: CY + r * Math.sin(angle) };
}

function hexPoints(radius: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const p = polar(100, i, radius);
    pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
  }
  return pts.join(" ");
}

type Dimension = (typeof DIMENSIONS)[number];

/** Tooltip text per dot: raw value where one exists, normalized score otherwise. */
function tooltipFor(model: AiModel, d: Dimension): string {
  if (d.key === "cost") {
    return model.name + " — Cost: " + model.meta.pricingNote;
  }
  if (d.key === "context") {
    return model.name + " — Context: " + model.meta.contextWindow;
  }
  if (d.key === "multimodal") {
    return model.name + " — Multimodal: " + model.meta.modalities;
  }
  return model.name + " — " + d.label + ": " + model.scores[d.key];
}

export const HexRadar = component$<HexRadarProps>(({ series }) => {
  const rings = [25, 50, 75, 100];
  const names = series.length > 0 ? series.map((s) => s.model.name).join(", ") : "no models selected";
  return (
    <div>
      <svg viewBox="0 0 400 400" role="img" class="mx-auto w-full max-w-[560px]" aria-labelledby="hex-title hex-desc">
        <title id="hex-title">{"Radar chart comparing " + names}</title>
        <desc id="hex-desc">
          Hexagonal radar with axes Tool use, Reasoning, Context window, Multimodal, Coding and Cost
          efficiency, scaled 0 to 100. Exact values are listed in the data table below the chart.
        </desc>
        {rings.map((r) => (
          <g key={r}>
            <polygon points={hexPoints((r / 100) * MAX_R)} fill="none" stroke="#e2e8f0" stroke-width={r === 100 ? 2 : 1} />
            <text x={CX} y={CY - (r / 100) * MAX_R - 5} text-anchor="middle" font-size="9" fill="#94a3b8">
              {r}
            </text>
          </g>
        ))}
        {DIMENSIONS.map((d, i) => {
          const v = polar(100, i, MAX_R);
          return <line key={d.key} x1={CX} y1={CY} x2={v.x} y2={v.y} stroke="#e2e8f0" stroke-width="1" />;
        })}
        {series.map((s) => {
          const pts = DIMENSIONS.map((d, i) => {
            const p = polar(s.model.scores[d.key], i, MAX_R);
            return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
          }).join(" ");
          return (
            <polygon
              key={s.model.id}
              points={pts}
              fill={s.color}
              fill-opacity={0.35}
              stroke={s.color}
              stroke-width={2}
              stroke-linejoin="round"
            >
              <title>{s.model.name + " (Overall " + s.model.scores.overall + ")"}</title>
            </polygon>
          );
        })}
        {series.map((s) =>
          DIMENSIONS.map((d, i) => {
            const p = polar(s.model.scores[d.key], i, MAX_R);
            return (
              <circle
                key={`${s.model.id}-${d.key}`}
                cx={p.x}
                cy={p.y}
                r={4.5}
                fill={s.color}
                stroke="#ffffff"
                stroke-width={1.5}
              >
                <title>{tooltipFor(s.model, d)}</title>
              </circle>
            );
          })
        )}
        {DIMENSIONS.map((d, i) => {
          const p = polar(100, i, LABEL_R);
          return (
            <text
              key={d.key}
              x={p.x}
              y={p.y}
              text-anchor="middle"
              dominant-baseline="middle"
              font-size="12.5"
              font-weight={600}
              fill="#475569"
            >
              <title>{d.description}</title>
              {d.short}
            </text>
          );
        })}
      </svg>

    </div>
  );
});
