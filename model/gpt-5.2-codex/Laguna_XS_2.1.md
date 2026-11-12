# GPT-5.2 Codex — findings by Laguna XS 2.1

> Source: OpenAI (`gpt-5.2-codex`)
> Date: 2026-10-28 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's GPT-5.2 Codex variant optimized for coding and agent workflows.
- **Provider / access:** OpenAI API, GitHub Copilot integrations, Azure OpenAI.
- **Release / knowledge:** December 11, 2025 (GPT-5.2 family).
- **IDs:** `gpt-5.2-codex`.
- **Context window:** 400K tokens; 128K max output.
- **Modalities:** Text in/out; coding-optimized reasoning.
- **Pricing (as of 2026-10-28):** $1.75 / $14 per 1M tokens.
- **Architecture:** Proprietary GPT architecture with coding focus.

### Raw benchmarks found

Based on Vals AI and aggregated research data:

- Terminal-Bench 2.0 strong performance on coding tasks
- Codex CLI resolution rate improvements confirmed
- SWE-bench competitive scores for coding agent tasks

### Normalized scores (from average.md)

- **Tool use: 69.5/100.** Strong coding agent capabilities.
- **Reasoning: 69.3/100.** Good reasoning, slightly below Pro variant.
- **Context window: 80.1/100.** 400K tokens, strong for coding tasks.
- **Multimodal: 54.7/100.** Primarily text-focused; moderate multimodal.
- **Coding: 80/100.** Optimized for coding tasks and agent workflows.
- **Cost efficiency: 74.5/100.** Competitive pricing for coding-optimized model.

- **Overall Score: 70.8/100.** Mean of coding-focused scores; excellent for developer workflows.

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## GPT-5.2 Codex — findings by Laguna XS 2.1

> Source: OpenAI (`gpt-5.2-codex`)
> Date: 2026-10-28 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's GPT-5.2 variant optimized for coding tasks and agent workflows.
- **Provider / access:** OpenAI API (`gpt-5.2-codex`), Azure OpenAI, GitHub Copilot integrations.
- **Release / knowledge:** December 11, 2025.
- **IDs:** `gpt-5.2-codex` (OpenAI API).
- **Context window:** 400K tokens; 128K max output.
- **Modalities:** Text in/out; reasoning with adaptive thinking modes.
- **Pricing (as of 2026-10-28):** $1.75 / $14 per 1M tokens.
- **Architecture:** Proprietary; GPT architecture with coding optimization.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: `58.2%` (BenchmarkList data)
- Terminal-Bench: `63.75%` (Versus model ranking data)
- Codex CLI: Strong performance with **52% resolution rate improvement** vs GPT-5-Nano
- Tools: Excellent coding agent capabilities

Reasoning / knowledge:

- Reasoning capability: Strong (51.69% on Terminal-Bench v2)
- Theory of Mind: Good performance on agent tasks

Coding:

- SWE-bench: **~56%** (Estimated from GPT-5.3 Codex lineage)
- Code Migration: Strong performance indicated
- HumanEval: Above 50% (typical for Codex variants)

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
