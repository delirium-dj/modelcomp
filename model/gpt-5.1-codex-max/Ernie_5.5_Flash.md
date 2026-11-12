# GPT-5.1 Codex Max — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.1 Codex Max (`gpt-5.1-codex-max`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** The maximum-effort Codex tier (released 2025-11-13/19) for repository edits, reviews and agentic software work — a long-think variant of GPT-5.1 Codex.
- **Provider / access:** OpenAI API/Responses (`gpt-5.1-codex-max`), Azure OpenAI, OpenRouter, LLM Gateway, Vercel, Kilo, AI/ML API, plus ~13 routes.
- **Release / knowledge:** 2025-11-13 (models.dev; BenchLM record Nov 19, 2025); knowledge cutoff 2024-09-30 (models.dev).
- **IDs:** `gpt-5.1-codex-max`, `openai/gpt-5.1-codex-max`, `azure/gpt-5.1-codex-max`.
- **Context window:** 400,000 total (272,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.25 / $10.00 per 1M input/output; cache read $0.125.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> BenchLM exposes only 3 displayable rows for this tier.

Agent / tool use:

- OTelBench (OpenTelemetry instrumentation): **11.6%** (near-floor)
- Terminal-Bench / OSWorld / Toolathlon / MCP-Atlas: no verified public rows published
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for the Max tier
- BenchLM ranks Instruction Following as its strongest category

Coding:

- LiveCodeBench (Vals AI): **83.6%**
- Vibe Code Bench v1.1: **22.17%** (weak)
- SWE-bench Verified / SWE-bench Pro / DeepSWE: no verified public rows published

Long context:

- 400K context (272K input) documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 50/100.** OTelBench 11.6% is the only verified agentic row and it is near-floor; the score is a floor, not a measurement.
- **Reasoning: 58/100.** No public reasoning benchmark exists for the Max tier; the score is a conservative inference — low confidence.
- **Context window: 85/100.** 400,000 tokens with 272,000 input.
- **Multimodal: 72/100.** Text, image and PDF in; no public multimodal benchmark rows for this tier.
- **Coding: 72/100.** LiveCodeBench (Vals) 83.6% is good, but Vibe Code Bench 22.2% is weak and no SWE-bench row was published for the "max" tier.
- **Cost efficiency: 80/100.** $1.25/$10 per 1M — the same rate as GPT-5.1 Codex despite the "Max" label.
- **Overall Score: 67.4/100.** Best fit for repository edits inside the Codex Max harness; the newer Codex tiers are better measured and cheaper.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.1 Codex Max — OpenAI](https://openai.com/index/gpt-5-1-codex-max/)
  - [GPT-5.1 Codex Max benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-1-codex-max)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.1_Codex_Max_v2.md`, using the same headings.