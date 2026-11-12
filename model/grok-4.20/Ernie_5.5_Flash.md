# Grok 4.20 — findings by Ernie 5.5 Flash

- Source: xAI/Grok 4.20 (`grok-4.20`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's Grok model (released 2026-03-31) for agentic tool use, reasoning, coding and live assistance, with an unusually large 2M-token context.
- **Provider / access:** xAI API (`grok-4.20`), OpenRouter (`x-ai/grok-4.20`), Venice, NanoGPT, Merge Gateway, plus ~4 routes.
- **Release / knowledge:** 2026-03-31; knowledge cutoff 2025-09-01 (models.dev).
- **IDs:** `grok-4.20`, `x-ai/grok-4.20`, `xai/grok-4.20-0309-reasoning`.
- **Context window:** 2,000,000 tokens (1,000,000 on Merge Gateway); max output 1,800,000.
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.25 / $2.50 per 1M input/output; cache read $0.20.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- DeepSearchQA: **62.8%**; Terminal-Bench 2.0: **47.1%**; Terminal-Bench 2.1 (Vals): **44.2%**
- Gert Labs composite: **38.36**; MazeBench: **0%**
- Toolathlon / MCP-Atlas / OSWorld: no verified public rows published

Reasoning / knowledge:

- ARC-AGI-2: **53.3%**; ARC-AGI-3: **0.1%** (near-floor)
- MMMU-Pro: **75.2%**
- HLE / GPQA Diamond / FrontierMath: no verified public rows published

Coding:

- LiveCodeBench (Vals AI): **84.3%**; LiveCodeBench Pro: **74.2%**; SWE-bench Verified: **76.7%**
- SWE-bench (Vals AI): **72.2%**; SWE-bench Pro: **51.8%**; Vibe Code Bench v1.1: **4.06%** (near-floor)

Long context:

- 2M context declared with a 1.8M max output — the largest window in this dataset; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 60/100.** TB2.0 47.1% and TB2.1 (Vals) 44.2% are below the agent baseline, DeepSearchQA 62.8% mid; MazeBench 0% and no OSWorld/Toolathlon row cap it.
- **Reasoning: 65/100.** ARC-AGI-2 53.3% is mid and ARC-AGI-3 0.1% is a floor; no HLE/GPQA/FrontierMath row was published.
- **Context window: 100/100.** 2,000,000 tokens with a 1,800,000 max output — the largest in this dataset.
- **Multimodal: 78/100.** Text, image and PDF in with MMMU-Pro 75.2% proving document/chart work; no audio/video.
- **Coding: 72/100.** LiveCodeBench (Vals) 84.3% and SWE-bench Verified 76.7% are decent, but Vibe Code Bench 4.06% is near-floor and SWE-bench Pro 51.8% is mid.
- **Cost efficiency: 88/100.** $1.25/$2.50 per 1M for a 2M context is the best window-per-dollar ratio in this dataset.
- **Overall Score: 75.0/100.** Best fit for very-long-document and whole-codebase analysis at a low price; not an agent or a reasoner.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (xAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Grok 4.20 — xAI](https://x.ai/news/grok-4-20)
  - [Grok 4.20 benchmarks & sources — BenchLM](https://benchlm.ai/models/grok-4-20)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Grok_4.20_v2.md`, using the same headings.