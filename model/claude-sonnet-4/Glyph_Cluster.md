# Claude 4 Sonnet — findings by Glyph Cluster

- Source: Anthropic (`claude-sonnet-4-20250514`, Claude Sonnet 4)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's Claude 4-generation Sonnet model (May 2025) balancing strong coding, reasoning, and agentic performance with practical efficiency. This report targets the exact `claude-sonnet-4` / Claude Sonnet 4 model.
- **Provider / access:** Proprietary model via Anthropic Claude API/platform, Amazon Bedrock, and Google Cloud Vertex AI (per Anthropic announcement). API ID commonly `claude-sonnet-4-20250514`; availability may vary as newer models supersede it.
- **Release / knowledge:** Released May 22, 2025 (Anthropic). Knowledge cutoff March 2025 (per Artificial Analysis).
- **IDs:** `claude-sonnet-4-20250514` (Anthropic API), `claude-sonnet-4` (queue slug)
- **Context window:** 1M tokens (per Artificial Analysis).
- **Modalities:** Text and image input, text output (per Artificial Analysis). Hybrid reasoning/extended thinking modes available.
- **Pricing (as of release):** $3.00/M input tokens and $15.00/M output tokens (per Anthropic announcement; cache discounts may apply by platform).
- **Architecture:** Proprietary (parameter count not disclosed).

### Raw benchmarks found

> Numbers below are taken from Anthropic's announcement where extractable. Not all requested benchmark rows have verified public scores.

Agent / tool use:

- TAU-bench: reported as improved/strong in announcement context (exact numeric value not extractable from fetched text)
- Terminal-bench: mentioned in benchmark context; exact Sonnet 4 numeric value not extractable from fetched text (Opus 4 cited as 43.2%)
- SWE-bench Verified: **72.7%** (Anthropic announcement states "state-of-the-art 72.7% on SWE-bench")
- Other agentic benchmarks (GDPval-AA, BFCL, Claw-Eval, MCP-Atlas): no verified public score found

Reasoning / knowledge:

- GPQA Diamond / AIME / HLE: no verified public numeric scores extractable from fetched Anthropic announcement text for Sonnet 4 specifically
- Artificial Analysis Intelligence Index: no verified public score found (AA snapshot reported N/A)

Coding:

- SWE-bench Verified: **72.7%** (Anthropic announcement)
- LiveCodeBench / SciCode / Terminal-Bench 2.1: no verified public score found

Long context:

- Context window: **1M tokens** (Artificial Analysis)
- No verified long-context retrieval benchmark score found in accessible fetched sources

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Scores are normalized interpretations, not official vendor scores.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency**.

- **Tool use: 82/100.** Strong agentic positioning and reported improvements in instruction following, parallel tool use, and sustained task performance, supported by high SWE-bench Verified (72.7%); capped by limited extractable standardized non-coding agent benchmark numbers in fetched sources.
- **Reasoning: 80/100.** Hybrid reasoning model with reported improvements in reasoning and complex task handling over Sonnet 3.7; capped by lack of extractable standalone GPQA/HLE/AIME numeric scores for this exact model in accessible fetched sources.
- **Context window: 100/100.** 1M-token context window is top-tier for context capacity per `model-comparison.md`.
- **Multimodal: 45/100.** Supports image input and text output (vision understanding) but not broad multimodal generation or audio/video-native I/O in this configuration.
- **Coding: 86/100.** Excellent reported coding performance with SWE-bench Verified 72.7% and strong real-world coding feedback cited by Anthropic; capped by limited additional public coding benchmark numbers in fetched sources.
- **Cost efficiency: 62/100.** Pricing ($3/$15 per 1M tokens) is standard for capable proprietary models; value is reasonable for performance but not low-cost.
- **Overall Score: 79/100.** Mean of the five non-cost dims (82, 80, 100, 45, 86) = 78.6 → 79 (half-up). Best fit for coding, agentic workflows, and long-context text/image understanding tasks where strong software-engineering performance matters.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Anthropic announcement, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude 4](https://www.anthropic.com/news/claude-4)
  - [Artificial Analysis — Claude 4 Sonnet (Non-reasoning)](https://artificialanalysis.ai/models/claude-4-sonnet)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
