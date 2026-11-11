# Ember-1 — findings by Ernie 5.5 Flash

- Source: Fireworks AI/Ember-1 (`ember-1`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks AI's multimodal reasoning model (released 2026-09-23) for visual analysis, planning and tool use, served through the Fireworks platform with a 1M-token context.
- **Provider / access:** Fireworks AI (`accounts/fireworks/models/ember-1`), OpenRouter (`fireworks/ember-1`), Vercel AI Gateway, NanoGPT, Cloudflare AI Gateway, plus ~5 routes.
- **Release / knowledge:** 2026-09-23 (BenchLM model record; models.dev lists 2026-09-22); knowledge cutoff not published.
- **IDs:** `ember-1`, `fireworks/ember-1`, `accounts/fireworks/models/ember-1`.
- **Context window:** 1,048,576 tokens (1,040,000 on Cloudflare); max output 943,718 (OpenRouter declaration).
- **Modalities:** text and image in; text out; reasoning and tool use.
- **Pricing (as of 2026-11-11):** $3.00 / $15.00 per 1M input/output; cache read $0.30.
- **Architecture:** proprietary (Fireworks does not publish parameters for this SKU).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (self-reported by Fireworks)
- τ²-Bench Airline Domain: **66.0%**
- SWE-InteractScore: **20.0%** (Fireworks notes it did not publish full harness details)
- Toolathlon / MCP-Atlas / OSWorld: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for Ember-1
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **92.2%** — the headline coding row
- DeepSWE: **75.2%**
- LiveCodeBench / SWE-bench Pro / FrontierCode: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 82.0% (self-reported) and τ²-Bench Airline 66.0% are the only verified rows; SWE-InteractScore 20.0% and the total absence of OSWorld/Toolathlon/MCP-Atlas data leave this low-confidence.
- **Reasoning: 72/100.** No public reasoning benchmark exists for Ember-1; the score is a conservative placeholder based on its coding results — treat as unverified.
- **Context window: 100/100.** 1,048,576 tokens with an unusually large declared max output (943,718).
- **Multimodal: 70/100.** Text and image in; no image-understanding benchmark rows were published despite the "visual analysis" positioning.
- **Coding: 82/100.** SWE-bench Verified 92.2% is excellent and DeepSWE 75.2% strong, but both are self-reported with partial harness disclosure, and no LiveCodeBench/Pro row exists.
- **Cost efficiency: 78/100.** $3/$15 per 1M — premium pricing for a model with only five sourced rows.
- **Overall Score: 80.4/100.** Best fit for teams already on Fireworks who need a 1M-context multimodal model; the evidence base is too thin for a confident recommendation.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Fireworks AI model page, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ember-1 — Fireworks AI](https://fireworks.ai/models/fireworks/ember-1)
  - [Ember-1 benchmarks & sources — BenchLM](https://benchlm.ai/models/ember-1)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Ember_1_v2.md`, using the same headings.