# Grok 4.5 — findings by Ernie 5.5 Flash

- Source: xAI/Grok 4.5 (`grok-4.5`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's Grok model (released 2026-07-08) for chat, coding, agentic tools and lower hallucination risk, with a 500K context. Superseded by Grok 4.6 in August 2026.
- **Provider / access:** xAI API (`grok-4.5`), Google Vertex, plus ~25 gateway routes (LLM Gateway, Vercel, Prime, Kenari, Merge Gateway).
- **Release / knowledge:** 2026-07-08 (models.dev); knowledge cutoff not published.
- **IDs:** `grok-4.5`, `xai/grok-4.5`, `opencode/grok-4.5`.
- **Context window:** 500,000 tokens; max output 500,000.
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $2.00 / $6.00 per 1M input/output; cache read $0.30.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (Vals AI run **67.8%**); Terminal-Bench 3.0: **15.7%**; Terminal-Bench 4.1: **12.40%**
- SWE-bench Pro: **64.7%**; CursorBench 3.2: **66.7%**; SWE Multilingual: **78%**
- PostTrainBench v1.1: **23.4%**; DeepSWE: **53%**

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **92.9%**; MMLU-Pro (Vals AI): **89.2%**
- FrontierMath v2 Tiers 1–3: **57.193%**; Tier 4: **24.390%**
- ARC-AGI-1 (semi-private): **85.67%**; ARC-AGI-2: **52.6%**; ARC-AGI-3: **0.3%**
- NYT Connections: **79.9%**
- HLE / CritPt: no verified public rows published

Coding:

- LiveCodeBench (Vals AI): **87.4%**; SWE-bench (Vals AI): **86.6%**; VulcanBench v3: **89.9%**
- SWE-bench Pro: **64.7%**; CursorBench 3.2: **66.7%**; DeepSWE: **53%**
- FrontierCode / FrontierSWE: no verified public rows published

Long context:

- 500K context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 70/100.** TB2.1 83.3% is respectable but the Vals run (67.8%) and the modern harnesses (TB3.0 15.7%, TB4.1 12.4%) are near-floor; no OSWorld/MCP-Atlas row was published.
- **Reasoning: 82/100.** GPQA Diamond 92.9% and MMLU-Pro 89.2% are strong, FrontierMath T1–3 57.2% mid, ARC-AGI-2 52.6% and Tier 4 24.4% show the ceiling.
- **Context window: 88/100.** 500,000 tokens — half the frontier flagships, though the max output matches the window.
- **Multimodal: 75/100.** Text, image and PDF in; no public image-understanding benchmark rows.
- **Coding: 80/100.** LiveCodeBench 87.4%, VulcanBench 89.9% and SWE-bench (Vals) 86.6% are good, but SWE-bench Pro 64.7% and DeepSWE 53% are mid-pack.
- **Cost efficiency: 88/100.** $2/$6 per 1M — cheaper than every Claude frontier tier.
- **Overall Score: 79.0/100.** Best fit for cost-sensitive coding and knowledge work; Grok 4.6 is the better model at the same price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (xAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Grok 4.5 — xAI](https://x.ai/news/grok-4-5)
  - [Grok 4.5 benchmarks & sources — BenchLM](https://benchlm.ai/models/grok-4-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Grok_4.5_v2.md`, using the same headings.