# Mercury Edit 2 — Claude Sonnet 4.6 Research

Mercury Edit 2 (Inception Labs, late March 2026) is a specialised diffusion LLM optimised exclusively for next-edit prediction, code autocomplete via Fill-in-the-Middle (FIM), and multi-line code diff generation. It is not a general-purpose chat or reasoning model. Parallel denoising generates multi-line code diffs simultaneously, enabling suggestions fast enough to match physical typing cadence ("just Tab to accept"). Training used KTO (Kahneman-Tversky Optimization) on human accept/reject feedback to reduce overzealous suggestions. Context: 32K in / 8K out. Text in/out. Served via specialised endpoints: `/v1/edit/completions` and `/v1/fim/completions`. Pricing: $0.25/$0.75 per 1M in/out ($0.025 cached input).

Benchmarks (verified):
- Edit acceptance rate: +48% higher vs prior generation (human developer feedback)
- Selectivity: 27% more selective (reduces unwanted/distracting edit suggestions)
- Evaluation frameworks: FIM (test-case execution), NEP (Next-edit Prediction), Instinct (open-source), internal LLM-as-judge suite
- Use case: IDE Tab-completion and next-edit prediction; not a general reasoning or chat model

## Scores

- **Tool use: 25/100.** Mercury Edit 2 does not expose a standard chat or tool-call interface — it uses specialised edit and FIM API endpoints. Not applicable to multi-step agentic tool chaining workflows. Scored low on the standard tool-use axis because the model is architecturally scoped to a single edit/FIM use case.
- **Reasoning: 25/100.** Not a reasoning model. KTO-aligned for edit prediction, not for general question answering, MMLU, or logical problem-solving. No reasoning benchmarks published or applicable.
- **Context window: 45/100.** 32K in / 8K out. Tier: 32K = 45 points. The 32K window is intentional — codebase context plus recent edit history. Output capped at 8K (sufficient for multi-line diffs; not designed for long-form generation).
- **Multimodal: 15/100.** Text in/out only. No image, audio, or video.
- **Coding: 72/100.** FIM, NEP, and Instinct benchmarks show strong performance on its target use case. +48% acceptance rate and 27% improved selectivity are real-world signals of high coding utility for IDE autocomplete. Deducted from a potential top score because the benchmark set is narrow (edit/FIM only, no HumanEval or SWE-bench parity data).
- **Cost efficiency: 80/100.** $0.25/$0.75 per 1M in/out with $0.025 cached — affordable for a specialised code-edit service layer. Not free, but competitive for IDE-integrated workflows that handle millions of small completions.
- **Overall Score: 36/100.** Mean of Tool use (25) + Reasoning (25) + Context (45) + Multimodal (15) + Coding (72) = 182 / 5 = 36.4, rounded to 36. The low overall score reflects that Mercury Edit 2 is a specialised component, not a general-purpose LLM — it excels in its narrow domain (IDE FIM/edit completions) but scores poorly on the five standard axes that assume general-purpose capability.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
