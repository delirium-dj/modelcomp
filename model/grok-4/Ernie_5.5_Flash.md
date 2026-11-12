# Grok 4 — findings by Ernie 5.5 Flash

- Source: xAI/Grok 4 (`grok-4`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's original Grok 4 (released 2025-07-09) for agentic tool use, reasoning, coding and live assistance — the model that opened the Grok 4 line, now four point releases old.
- **Provider / access:** xAI API (`grok-4`), LLM Gateway, Abacus (`grok-4-0709`), Poe, Helicone, FastRouter, plus ~5 routes.
- **Release / knowledge:** 2025-07-09; knowledge cutoff 2025-07 (models.dev).
- **IDs:** `grok-4`, `x-ai/grok-4`, `grok-4-0709`.
- **Context window:** 256,000 tokens; max output 64,000.
- **Modalities:** text in / text out only (models.dev); reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $3.00 / $15.00 per 1M input/output; cache read $0.75.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> BenchLM exposes only 5 displayable rows for this checkpoint.

Agent / tool use:

- OTelBench (OpenTelemetry instrumentation): **4.3%** (near-floor)
- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Gert Labs composite game benchmark: **42.34**
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for this checkpoint
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- CompileBench (building real projects from source, pass@1): **71.1%**
- React Native Evals: **72.6**; BinaryAudit (backdoor detection): **8.8%**
- SWE-bench Verified / LiveCodeBench / DeepSWE: no verified public rows published

Long context:

- 256K context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 50/100.** OTelBench 4.3% is the only verified agentic row and it is near-floor; the score is a floor, not a measurement.
- **Reasoning: 60/100.** Gert Labs 42.34 is the only verified reasoning-adjacent row and it is weak; no GPQA/HLE/ARC row was published.
- **Context window: 70/100.** 256,000 tokens with 64,000 max output.
- **Multimodal: 15/100.** Text-only (models.dev: text in / text out) — no image input at all.
- **Coding: 65/100.** CompileBench 71.1% and React Native Evals 72.6 are mid, BinaryAudit 8.8% weak; no SWE-bench row was published.
- **Cost efficiency: 65/100.** $3/$15 per 1M is mid-premium for a 2025 checkpoint.
- **Overall Score: 52.0/100.** Best fit for legacy Grok 4 integrations; every Grok 4.x successor is better at a lower price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (xAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Grok 4 — xAI](https://x.ai/news/grok-4)
  - [Grok 4 benchmarks & sources — BenchLM](https://benchlm.ai/models/grok-4)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Grok_4_v2.md`, using the same headings.