# Grok 4.3 — findings by Ernie 5.5 Flash

- Source: xAI/Grok 4.3 (`grok-4.3`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's default Grok (released 2026-04-17) for chat, coding, agentic tools and lower hallucination risk — the mainstream Grok 4 tier with a 200K context.
- **Provider / access:** xAI API (`grok-4.3`), Google Vertex (`google-vertex/xai/grok-4.3`), plus ~30 gateway routes (FastRouter, LLM Gateway, Vercel, Auriko, Merge Gateway).
- **Release / knowledge:** 2026-04-17; knowledge cutoff not published.
- **IDs:** `grok-4.3`, `xai/grok-4.3`, `google-vertex/xai/grok-4.3`, `opencode/grok-4.3`.
- **Context window:** 200,000 tokens on the xAI/Vertex route (1,000,000 on FastRouter/Auriko/LLM Gateway); max output 30,000.
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.25 / $2.50 per 1M input/output; cache read $0.20.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals AI): **41.9%** (weak)
- ResearchClawBench: **12.4%** (near-floor); SkillsBench v1.1 (BenchFlow): **41.7%**
- Gert Labs composite: **43.86**
- Toolathlon / MCP-Atlas / OSWorld: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **91.4%**; MMLU-Pro (Vals AI): **85.8%**
- FrontierMath v2 Tiers 1–3: **42.807%**; Tier 4: **14.634%**
- NYT Connections: **55.2%**; Chess Puzzles: **18.0%**
- HLE / ARC-AGI: no verified public rows published

Coding:

- LiveCodeBench (Vals AI): **84.5%**; SWE-bench (Vals AI): **71.4%**
- DeepSWE / SWE-bench Pro / FrontierCode: no verified public rows published

Long context:

- 200K (xAI) or 1M (gateway) depending on route; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 55/100.** TB2.1 (Vals) 41.9% and ResearchClawBench 12.4% are near-floor — this is not a usable agent model on the current harnesses.
- **Reasoning: 78/100.** GPQA Diamond 91.4% and MMLU-Pro 85.8% are strong, but FrontierMath 42.8%/14.6% and NYT Connections 55.2% show the ceiling.
- **Context window: 60/100.** 200,000 tokens on the xAI route (30,000 max output) — the smallest first-party window in this dataset; gateways claim 1M.
- **Multimodal: 65/100.** Text and image in only; no public image-understanding benchmark rows.
- **Coding: 72/100.** LiveCodeBench 84.5% is decent, SWE-bench (Vals) 71.4% mid; no DeepSWE/FrontierCode row was published.
- **Cost efficiency: 88/100.** $1.25/$2.50 per 1M is cheap for Grok-class quality.
- **Overall Score: 66.0/100.** Best fit for low-cost chat and knowledge Q&A; unsuitable for agentic work, and Grok 4.6/4.7 are better at similar prices.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (xAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Grok 4.3 — xAI](https://x.ai/news/grok-4-3)
  - [Grok 4.3 benchmarks & sources — BenchLM](https://benchlm.ai/models/grok-4-3)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Grok_4.3_v2.md`, using the same headings.