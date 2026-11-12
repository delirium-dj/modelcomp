# GPT-5.4 mini — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.4 mini (`gpt-5.4-mini`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** OpenAI's strong small GPT (released 2026-03-17) for coding subagents, quick tool use and high-volume work — the mini tier of GPT-5.4.
- **Provider / access:** OpenAI API/Responses (`gpt-5.4-mini`), Azure OpenAI, plus ~35 gateway routes (FastRouter, LLM Gateway, Vercel, Prime, AI/ML API, LowRouter).
- **Release / knowledge:** 2026-03-17; knowledge cutoff 2025-08-31 (models.dev).
- **IDs:** `gpt-5.4-mini`, `openai/gpt-5.4-mini`, `azure/gpt-5.4-mini`.
- **Context window:** 400,000 total (272,000 input / 128,000 max output).
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.75 / $4.50 per 1M input/output; cache read $0.075.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench: **93.4%** — the best verified tool-agent-user score in this dataset
- OSWorld-Verified: **72.1%**; Terminal-Bench 2.0: **60.0%**; Terminal-Bench 2.1 (Vals): **54.7%**
- MCP Atlas: **57.7%**; Toolathlon: **42.9%**

Reasoning / knowledge:

- ARC-AGI-1 (semi-private): **63.70%**; ARC-AGI-2: **18.9%** (near-floor)
- HLE / GPQA Diamond / FrontierMath: no verified public rows published for the mini tier

Coding:

- LiveCodeBench (Vals AI): **81.5%**; SWE-bench (Vals AI): **73.0%**; Vibe Code Bench v1.1: **47.97%**
- FrontierCode 1.1 Main: **27.0%** (weak)
- DeepSWE / SWE-bench Pro: no verified public rows published

Long context:

- 400K context (272K input) documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 75/100.** τ²-Bench 93.4% is the strongest verified tool-agent score in this dataset and OSWorld-Verified 72.1% is good; ARC-AGI-2 18.9% is a reasoning cap, and Toolathlon 42.9% is mid.
- **Reasoning: 60/100.** ARC-AGI-1 63.7% is mid for a 2026 model and ARC-AGI-2 18.9% is near-floor; no HLE/GPQA/FrontierMath row was published.
- **Context window: 85/100.** 400,000 tokens with 272,000 input.
- **Multimodal: 72/100.** Text and image in (no PDF) with MMMU-Pro 76.6% proving chart/document work.
- **Coding: 75/100.** LiveCodeBench (Vals) 81.5% and SWE-bench (Vals) 73.0% are decent, Vibe Code Bench 47.97% mid; FrontierCode 1.1 27.0% is weak.
- **Cost efficiency: 88/100.** $0.75/$4.50 per 1M with $0.075 cache reads.
- **Overall Score: 73.4/100.** Best fit as a cheap high-volume subagent for tool-use workflows; not a reasoning model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.4 mini — OpenAI](https://openai.com/index/gpt-5-4-mini/)
  - [GPT-5.4 mini benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-4-mini)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.4_mini_v2.md`, using the same headings.