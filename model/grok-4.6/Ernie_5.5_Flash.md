# Grok 4.6 — findings by Ernie 5.5 Flash

- Source: xAI/Grok 4.6 (`grok-4.6`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's frontier model (released 2026-08-12) for long-running agents, coding, knowledge work and visual projects, with a 524K context — the top of the Grok 4 line.
- **Provider / access:** xAI API (`grok-4.6`), Google Vertex (`google-vertex/xai/grok-4.6`), plus ~30 gateway routes (OpenRouter, LLM Gateway, Vercel, Prime, Kenari, Merge Gateway).
- **Release / knowledge:** 2026-08-12; knowledge cutoff 2026-02-01 (models.dev).
- **IDs:** `grok-4.6`, `xai/grok-4.6`, `google-vertex/xai/grok-4.6`, `opencode/grok-4.6`.
- **Context window:** 524,288 tokens; max output 500,000.
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $2.00 / $6.00 per 1M input/output; cache read $0.50.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals AI): **78.3%**; Terminal-Bench 3.0: **26.5%**; Terminal-Bench 4.1: **19.70%**
- APEX-Agents: **57.5%**; ApprenticeBench: **13%**; CWE-bench v1: **57.0%**; MazeBench: **1%**
- Toolathlon / MCP-Atlas / OSWorld: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **94.7%** — best verified GPQA row in this dataset
- MMLU-Pro (Vals AI): **89.4%**; ARC-AGI-1 (semi-private): **87.00%**; ARC-AGI-2: **67.1%**; ARC-AGI-3: **2.1%**
- Gray Swan indirect prompt injection (15 attempts): **51.8%** attack success — the worst injection resistance measured here
- HLE / FrontierMath / CritPt: no verified public rows published

Coding:

- SWE-bench (Vals AI): **95.6%**; LiveCodeBench (Vals AI): **88.2%**; VulcanBench v3: **87.0%**
- DeepSWE: **65.9%**; CursorBench 3.2: **70.8%**; CursorBench 4.0: **41.4%**; FrontierCode 1.1 Extended: **61.3%**
- FrontierSWE v2: **25.3%**; Bug Hunt Bench: **27.0 fixes**

Long context:

- 524K context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 75/100.** TB2.1 (Vals) 78.3% is mid, TB3.0 26.5% and TB4.1 19.7% are near-floor, ApprenticeBench 13% and MazeBench 1% confirm it is not a modern agent; only APEX-Agents 57.5% is respectable.
- **Reasoning: 85/100.** GPQA Diamond 94.7% and MMLU-Pro 89.4% are elite, but ARC-AGI-2 67.1%, ARC-AGI-3 2.1% and the 51.8% prompt-injection success rate (a safety-relevant failure) cap it.
- **Context window: 92/100.** 524,288 tokens with a 500,000 max output — the smallest window among the 2026 frontier flagships.
- **Multimodal: 70/100.** Text and image in only; no public image-understanding benchmark rows were published.
- **Coding: 85/100.** SWE-bench (Vals) 95.6% and LiveCodeBench 88.2% are excellent, VulcanBench 87.0% strong, but FrontierSWE v2 25.3% and CursorBench 4.0 41.4% trail the leaders.
- **Cost efficiency: 88/100.** $2/$6 per 1M — half of Claude Sonnet 5.5 at comparable coding scores.
- **Overall Score: 81.4/100.** Best fit for knowledge work and supervised coding where cost matters; avoid for unattended agents until injection resistance improves.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (xAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Grok 4.6 — xAI](https://x.ai/news/grok-4-6)
  - [Grok 4.6 benchmarks & sources — BenchLM](https://benchlm.ai/models/grok-4-6)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Grok_4.6_v2.md`, using the same headings.