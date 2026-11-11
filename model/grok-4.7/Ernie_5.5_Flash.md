# Grok 4.7 — findings by Ernie 5.5 Flash

- Source: xAI/Grok 4.7 (`grok-4.7`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's frontier model (released 2026-09-21) for long-running agents, coding, knowledge work and visual projects — the current top of the Grok 4 line.
- **Provider / access:** xAI API (`grok-4.7`), Google Vertex (`google-vertex/xai/grok-4.7`), OpenCode Go, plus ~25 gateway routes (LLM Gateway, Vercel, Prime, Merge Gateway).
- **Release / knowledge:** 2026-09-21; knowledge cutoff 2026-05 (models.dev).
- **IDs:** `grok-4.7`, `xai/grok-4.7`, `opencode-go/grok-4.7`, `google-vertex/xai/grok-4.7`.
- **Context window:** 524,288 tokens (500,000 on most routes); max output 500,000.
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $2.00 / $6.00 per 1M input/output; cache read $0.50 (Prime lists $1.60/$4.80).
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **38.00%**; Terminal-Bench 4.1: **38.80%**; Terminal-Bench 2.1 (Vals): **73.4%**
- Hermes Bench: **74.4%**; Hermes Index: **39.3%**; CWE-bench v1: **68.0%**; CWE-bench v2: **54.7%**
- EEBench V1 core corpus: **64.0%**; MazeBench: **1%**

Reasoning / knowledge:

- ARC-AGI-1 (semi-private): **89.50%**; ARC-AGI-2: **61.4%**; ARC-AGI-3: **1.8%** (provider-adapter 7.02%)
- FrontierMath v2 Tiers 1–3: **52.982%**; HealthBench Professional: **56.7%**
- HLE / GPQA Diamond / CritPt: no verified public rows published

Coding:

- DeepSWE: **71.0%**; CursorBench 4.0: **46.3%**
- FrontierSWE v2: **29.5%**; FrontierCode 2.0: **28.6%**; Bug Hunt Bench: **29.0 fixes**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 524K context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 72/100.** TB4.0/4.1 at 38% are mid for a 2026 flagship and Hermes 39.3 is weak; CWE-bench 68.0% and EEBench 64.0% are the strongest verified rows.
- **Reasoning: 75/100.** ARC-AGI-1 89.5% is strong, ARC-AGI-2 61.4% mid, FrontierMath T1–3 53.0% and ARC-AGI-3 1.8% are weak; no HLE/GPQA row was published.
- **Context window: 88/100.** 524,288 tokens with a 500,000 max output.
- **Multimodal: 70/100.** Text and image in only; no public image-understanding benchmark rows.
- **Coding: 78/100.** DeepSWE 71.0% is decent, but FrontierCode 2.0 28.6%, FrontierSWE v2 29.5% and CursorBench 4.0 46.3% are mid, and no SWE-bench row exists.
- **Cost efficiency: 88/100.** $2/$6 per 1M — the cheapest frontier-tier xAI rate in this dataset.
- **Overall Score: 76.6/100.** Best fit for cost-sensitive knowledge work and supervised coding; Grok 4.6 remains the better-measured Grok.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (xAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Grok 4.7 — xAI](https://x.ai/news/grok-4-7)
  - [Grok 4.7 benchmarks & sources — BenchLM](https://benchlm.ai/models/grok-4-7)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Grok_4.7_v2.md`, using the same headings.