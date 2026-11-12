# GPT-5.4 nano — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.4 nano (`gpt-5.4-nano`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** OpenAI's cheapest GPT-5.4 lane (released 2026-03-17) for simple routing, extraction and bulk automation — the smallest GPT-5.4 tier.
- **Provider / access:** OpenAI API/Responses (`gpt-5.4-nano`), Azure OpenAI, plus ~30 gateway routes (FastRouter, LLM Gateway, Vercel, Prime, AI/ML API, LowRouter).
- **Release / knowledge:** 2026-03-17; knowledge cutoff 2025-08-31 (models.dev).
- **IDs:** `gpt-5.4-nano`, `openai/gpt-5.4-nano`, `azure/gpt-5.4-nano`.
- **Context window:** 400,000 total (272,000 input / 128,000 max output).
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.20 / $1.25 per 1M input/output; cache read $0.02.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench (Tool-Agent-User): **92.5%** — best verified tool-agent score in this dataset
- MCP Atlas: **56.1%**; Terminal-Bench 2.0: **46.3%**; Terminal-Bench 2.1 (Vals): **41.6%**
- OSWorld-Verified: **39%**; Toolathlon: **35.5%**

Reasoning / knowledge:

- ARC-AGI-1 (semi-private): **51.50%**; ARC-AGI-2: **5.7%** (near-floor)
- MMMU-Pro: **66.1%**; ParseBench: **42.24%**; ExtractBench: **74.90%**
- HLE / GPQA Diamond / FrontierMath: no verified public rows published for the nano tier

Coding:

- LiveCodeBench (Vals AI): **84.0%**; SWE-bench (Vals AI): **69.8%**
- Vibe Code Bench v1.1: **26.10%** (weak)
- DeepSWE / SWE-bench Pro: no verified public rows published

Long context:

- 400K context (272K input) documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-Bench 92.5% is elite for tool-agent-user loops, but OSWorld-Verified 39%, Toolathlon 35.5% and TB2.1 (Vals) 41.6% are all below the agent baseline.
- **Reasoning: 50/100.** ARC-AGI-1 51.5% is mid and ARC-AGI-2 5.7% is near-floor; no HLE/GPQA/FrontierMath row was published.
- **Context window: 85/100.** 400,000 tokens with 272,000 input.
- **Multimodal: 65/100.** Text and image in (no PDF) with MMMU-Pro 66.1% — the weakest multimodal score in the GPT-5.4 family.
- **Coding: 70/100.** LiveCodeBench (Vals) 84.0% is the best verified row and is good for the price; SWE-bench (Vals) 69.8% mid and Vibe Code Bench 26.1% weak.
- **Cost efficiency: 98/100.** $0.20/$1.25 per 1M with $0.02 cache reads — the cheapest GPT-5.4 lane.
- **Overall Score: 66.4/100.** Best fit for routing, classification and bulk extraction at very low cost; a poor choice for agents, reasoning or repo coding.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.4 nano — OpenAI](https://openai.com/index/gpt-5-4-nano/)
  - [GPT-5.4 nano benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-4-nano)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.4_nano_v2.md`, using the same headings.