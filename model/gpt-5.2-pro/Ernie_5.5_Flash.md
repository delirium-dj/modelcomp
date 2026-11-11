# GPT-5.2 Pro — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.2 Pro (`gpt-5.2-pro`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** The higher-accuracy GPT-5.2 variant (released 2025-12-11) for tougher reasoning and review workflows — the long-think Pro tier at 12× the base price.
- **Provider / access:** OpenAI API/Responses (`gpt-5.2-pro`), Azure OpenAI, OpenRouter, LLM Gateway, ZenMux, AI/ML API, plus ~10 routes.
- **Release / knowledge:** 2025-12-11; knowledge cutoff 2025-08-31 (models.dev).
- **IDs:** `gpt-5.2-pro`, `openai/gpt-5.2-pro`, `azure/gpt-5.2-pro`.
- **Context window:** 400,000 total (272,000 input / 128,000 max output).
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $21.00 / $168.00 per 1M input/output — the most expensive per-token route in this dataset (no cache-read rate published).
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> BenchLM exposes only 4 displayable rows for the Pro tier.

Agent / tool use:

- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published for the Pro tier
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- ARC-AGI-1 (semi-private): **90.50%**; ARC-AGI-2: **54.2%**
- NYT Connections: **79.3%**; Chess Puzzles (Epoch AI): **60.0%**
- HLE / GPQA Diamond / FrontierMath: no verified public rows published

Coding:

- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published for the Pro tier
- No coding benchmark at all was found for this model

Long context:

- 400K context (272K input) documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 55/100.** No public terminal/OSWorld/Toolathlon row exists for the Pro tier; the score is a conservative floor, not a measurement.
- **Reasoning: 80/100.** ARC-AGI-1 90.50% is strong and Chess Puzzles 60.0% respectable, but ARC-AGI-2 54.2% is mid for a "tougher reasoning" tier and no HLE/GPQA row was published.
- **Context window: 85/100.** 400,000 tokens with 272,000 input.
- **Multimodal: 60/100.** Text and image in only; no multimodal benchmark rows for this tier.
- **Coding: 60/100.** No coding benchmark was published for the Pro tier at all — scored at the conservative midpoint.
- **Cost efficiency: 5/100.** $21/$168 per 1M is 12× GPT-5.2 and 2× GPT-5.5 Pro for a model with four sourced rows.
- **Overall Score: 68.0/100.** Best fit for a single high-stakes review where a correct answer justifies the price; otherwise indefensible value.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.2 Pro — OpenAI](https://openai.com/index/gpt-5-2-pro/)
  - [GPT-5.2 Pro benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-2-pro)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.2_Pro_v2.md`, using the same headings.