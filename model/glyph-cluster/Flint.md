# Glyph Cluster — findings by Flint

- Source: Stealth Models / Vercel (`stealth/glyph-cluster`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glyph Cluster (anonymous stealth reasoning model; attributed to Microsoft AI / MAI research telemetry)
- **Short description:** Anonymous stealth reasoning model for coding and long-context analysis; text-only, 256K context, reasoning xhigh; free during stealth preview via Vercel AI Gateway / OpenRouter; attributed maker Microsoft AI / MAI.
- **Provider / access:** Vercel AI Gateway / OpenRouter (`stealth/glyph-cluster`); free preview tier ($0/$0/$0); OpenAI-compatible API; text input only; prompts/responses may be retained for training; no zero data retention.
- **Release / knowledge:** Stealth catalog listing 2026-10-07; early access; stealth model since 2026-10-07; knowledge cutoff not established.
- **IDs:** `stealth/glyph-cluster`.
- **Context window:** 256,000 total; 256,000 max output.
- **Modalities:** Text in; text out.
- **Pricing (as of 2026-11-11):** Free preview tier ($0/$0/$0 via Vercel AI Gateway & OpenRouter).

### Raw benchmarks found

- Reasoning / knowledge: StealthMark GPQA Diamond: **56.4%** (31/55 correct; this-model run 56.0% / 28 of 50; published across 198 questions; comparisons: Space Bunny Alpha 82.0%, Fledge Alpha 72.0%, GPT-6 Sol 95.45%, GPT-5.5 93.6%, MiniMax M3 92.9%, Qwen3.8-Flash 91.7%, Qwen3.8-27B 89.2%, gpt-oss-120b 80.1%, gpt-oss-20b 71.5%); StealthMark Score: **18.9** (rank 52 of 56).
- Coding: SVG benchmarks (Beach, Raccoon, Selfie, Mona Lisa, Newton’s Mirror, Ground Truth, Pelican) — qualitative; Terminal-Bench 2.1: no verified public score found.

### Cross-source comparison

- Stealth Models measured Glyph Cluster vs field on GPQA; verdict: "slight improvement over MAI Thinking 1" (shared failure patterns, distinctive Beach figures).

### Normalized scores (1–100)

> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 20/100.** No verified public score found (Terminal-Bench 2.1 absent for this stealth ID); capped by no verified rows.
- **Reasoning: 45/100.** GPQA Diamond **56.4%** (StealthMark; leaders 71.5–95.45%) → mid-low; StealthMark composite 18.9.
- **Context window: 55/100.** 256K total / 256K max output; no long-context retrieval measured.
- **Multimodal: 15/100.** Text-only.
- **Coding: 30/100.** Qualitative SVG/coding agent runs; no verified standardized coding score (TB2.1 absent).
- **Cost efficiency: 100/100.** Free preview tier ($0/$0/$0 via Vercel AI Gateway & OpenRouter).

- **Overall Score: 33/100.** Mean of the five quality dims (20 + 45 + 55 + 15 + 30) / 5 = 33; Cost efficiency excluded.

---

## Signature

- Provided by: **Flint** — 2026-11-11
- Method: fresh public web research on the Glyph Cluster stealth listing, StealthMark measurements, Vercel changelog and access routes; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Stealth Models — Glyph Cluster](https://stealthmodels.com/glyph-cluster)
  - [StealthMark — Glyph Cluster](https://stealthmodels.com/benchmarks/models/glyph-cluster)
  - [Vercel changelog: Glyph Cluster is now available in stealth for free on AI Gateway](https://vercel.com/changelog/glyph-cluster-is-now-available-in-stealth-for-free-on-ai-gateway)
  - [AI Tracker: stealth/glyph-cluster](https://live.aitracker.bot/glyph-cluster)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash.md`, using the same headings.
