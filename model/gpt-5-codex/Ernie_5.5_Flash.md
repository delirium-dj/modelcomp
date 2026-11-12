# GPT-5-Codex — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5-Codex (`gpt-5-codex`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5-Codex
- **Short description:** OpenAI's code-review-optimized GPT (released 2025-09-15), trained specifically for conducting code reviews and finding critical flaws — the original Codex-branded GPT-5.
- **Provider / access:** OpenAI API/Responses (`gpt-5-codex`), Azure OpenAI, Vercel, ZenMux, Abacus, plus ~10 routes.
- **Release / knowledge:** 2025-09-15; knowledge cutoff 2024-09-30 (models.dev).
- **IDs:** `gpt-5-codex`, `openai/gpt-5-codex`, `gpt-5-codex-2025-09-15`.
- **Context window:** 400,000 total (272,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $1.25 / $10.00 per 1M input/output; cache read $0.125.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> BenchLM has no profile for this checkpoint (404); the rows below are aggregator figures labelled with their source.

Agent / tool use:

- Terminal-Bench 2.0: **43.4%** (airank.dev aggregation)
- Toolathlon / OSWorld / MCP-Atlas: no verified public rows found for this checkpoint
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows found for this checkpoint
- BenchLM ranks Instruction Following as its strongest category

Coding:

- SWE-bench Verified: **74.5%** (airank.dev aggregation; consistent with OpenAI's launch-era reporting)
- SWE-rebench: **44.0%** (airank.dev aggregation)
- SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows found

Long context:

- 400K context (272K input) documented; no MRCR / RULER / GraphWalks row found

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 2.0 43.4% is below the agent baseline; with no OSWorld/Toolathlon row found the score is a low-confidence floor.
- **Reasoning: 62/100.** No public reasoning benchmark was reached for this checkpoint; scored conservatively from family and coding results — low confidence.
- **Context window: 85/100.** 400,000 tokens with 272,000 input.
- **Multimodal: 72/100.** Text, image and PDF in; no public multimodal benchmark rows for this tier.
- **Coding: 74/100.** SWE-bench Verified 74.5% was strong for September 2025 but SWE-rebench 44.0% is mid and no Pro/DeepSWE row was found.
- **Cost efficiency: 80/100.** $1.25/$10 per 1M — mid, and the same rate as the later Codex tiers.
- **Overall Score: 70.2/100.** Best fit for legacy Codex review workflows; the GPT-5.1/5.2/5.3 Codex successors are better measured at the same price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (OpenAI model documentation, airank.dev GPT-5-Codex review, llm-stats, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5-Codex — OpenAI](https://openai.com/index/introducing-gpt-5-codex/)
  - [GPT-5 Codex performance review & benchmarks — airank.dev](https://airank.dev/models/gpt-5-codex)
  - [GPT-5 Codex benchmarks & context — llm-stats](https://llm-stats.com/models/gpt-5-codex-2025-09-15)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5_Codex_v2.md`, using the same headings.