# GPT-5.6 Luna - findings by Flint

- Source: OpenAI / GPT-5.6 Luna (proprietary; family gpt-luna)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna (cost-efficient GPT-5.6 model for fast, high-volume workloads)
- **Short description:** OpenAI's cost-efficient GPT-5.6 lane for fast, high-volume workloads; part of the GPT-5.6 family (Sol/Terra/Luna).
- **Provider / access:** OpenAI API (https://openai.com/index/gpt-5-6/), OpenAI-compatible endpoints; OpenCode Zen / OpenRouter routes.
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff 2026-02-16 (per models.dev).
- **IDs:** `openai/gpt-5.6-luna`; OpenAI API model id per official docs.
- **Context window:** 1,050,000 total / 922,000 input / 128,000 max output (models.dev, OpenAI official).
- **Modalities:** Text, image (jpg/png/gif/webp), PDF in; text out (models.dev).
- **Pricing (as of 2026-10-25):** GPT-5.6 lineup pricing: Sol $5/$30, Terra $2.5/$15, Luna $1/$6 per 1M input/output (models.dev / Artificial Analysis).

- **Architecture:** Proprietary OpenAI reasoning model; models.dev: open_weights = false.

### Raw benchmarks found

- Coding / agentic:
  - SWE-bench Pro: **62.7** resolve rate (OpenAI, via openai.com/index/gpt-5-6/).
  - Terminal-Bench: **84.7** success rate (v2.1).
  - DeepSWE: **67.2** resolve rate (v1.1).
  - Toolathlon: **53.4** success rate.
- Reasoning / knowledge:
  - GPQA Diamond: **92.3%, FrontierMath: **78.6, BrowseComp: **83.3, Agents Last Exam: **50.3, OSWorld: **45.6, MMMU Pro: **78.4 (no tools), AA Intelligence Index: **51.2 (max, v4.1), AA Coding Agent Index: **74.6 (Codex harness, max, v1.1).

### Cross-source comparison

- OpenAI-reported benchmarks vs Artificial Analysis: AA reports GPT-5.6 Sol (max) at 1 point above Claude Fable 5 (max) in AA Intelligence Index at ~1/3 cost; Terra (max) and Luna (max) at 55 and 51, at ~50% and ~80% lower cost per task than Sol.

### Normalized scores (1-100)

- **Tool use: 70/100.** Terminal-Bench **84.7%, SWE-bench Pro **62.7, DeepSWE **67.2, Toolathlon **53.4 -> strong agentic tool use.
- **Reasoning: 80/100.** GPQA **92.3%, FrontierMath **78.6, BrowseComp **83.3, AA Intelligence Index **51.2 (max) -> reasoning strong; AA index low-ish.
- **Context window: 95/100.** 1,050,000 total / 128,000 out -> top tier.
- **Multimodal: 60/100.** Image + PDF in, text out -> multimodal mid.
- **Coding: 78/100.** AA Coding Agent Index **74.6** (Codex), Terminal-Bench **84.7, DeepSWE **67.2 -> coding strong.
- **Cost efficiency: 85/100.** Luna $1/$6 per 1M, low-cost lane; per AA task cost $0.21 vs Sol $1.04.

- **Overall Score: 76.6/100.** Mean of the five quality dims (70 + 80 + 95 + 60 + 78) / 5 = 80.6 -> 81; Cost efficiency excluded.

## Signature

- Provided by: **Flint (openai/gpt-5.6-luna)** - 2026-10-25
- Method: public web research prioritizing official model card/docs plus independent benchmarks - three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
