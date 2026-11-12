# GPT-5 Nano — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5 Nano (`gpt-5-nano`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Nano
- **Short description:** OpenAI's tiny GPT-5 lane (released 2025-08-07) for routing, extraction, classification and bulk jobs — the cheapest GPT-5 tier.
- **Provider / access:** OpenAI API/Responses (`gpt-5-nano`), Azure OpenAI, plus ~29 gateway routes.
- **Release / knowledge:** 2025-08-07; knowledge cutoff 2024-05-30 (models.dev).
- **IDs:** `gpt-5-nano`, `openai/gpt-5-nano`, `azure/gpt-5-nano`.
- **Context window:** 400,000 total (272,000 input / 128,000 max output).
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.05 / $0.40 per 1M input/output; cache read $0.005.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> BenchLM holds only 6 displayable rows for this model.

Agent / tool use:

- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- AIME 2025: **85.2%** (high for a nano tier); GPQA: **71.2%**
- FrontierMath v2 Tiers 1–3: **20.000%**; Tier 4: **2.439%** (near-floor)
- Chess Puzzles: **22.0%**; Mystery Game Puzzles: **8.0%**

Coding:

- No coding benchmark row published for GPT-5 Nano (no SWE-bench, LiveCodeBench or DeepSWE row)

Long context:

- 400K context (272K input); no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified agentic row exists; the score is a conservative floor for a nano-tier model.
- **Reasoning: 62/100.** AIME 2025 85.2% is surprisingly strong and GPQA 71.2% mid, but FrontierMath 20.0%/2.4% is near-floor.
- **Context window: 85/100.** 400,000 tokens with 272,000 input.
- **Multimodal: 65/100.** Text and image in (no PDF); no public multimodal benchmark row.
- **Coding: 50/100.** No coding benchmark was published; scored conservatively — low confidence.
- **Cost efficiency: 98/100.** $0.05/$0.40 per 1M with $0.005 cache reads.
- **Overall Score: 61.4/100.** Best fit for classification, routing and extraction at massive volume; not an agent or a coder.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (OpenAI model documentation, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5 Nano — OpenAI](https://openai.com/index/gpt-5-nano/)
  - [GPT-5 Nano benchmarks — BenchLM](https://benchlm.ai/models/gpt-5-nano)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `GPT_5_Nano_v2.md` next to this file.