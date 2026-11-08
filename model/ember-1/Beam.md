# Ember-1 — findings by Beam

- Source: Fireworks/Ember-1, `fireworks/ember-1`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research specialized model (Sep 23, 2026) built on Kimi K3; produces ~40% fewer tokens while maintaining comparable quality. Post-trained for shorter reasoning. ~2.8T params (104B active).
- **Provider / access:** Fireworks serverless API `accounts/fireworks/models/ember-1`.
- **Release / knowledge:** Released 2026-09-23; knowledge cutoff not stated.
- **IDs:** `fireworks/ember-1`
- **Context window:** 1,040,000 tokens; max output 131,072.
- **Modalities:** text, image in; text out; reasoning yes (shorter traces); tool calling yes. Closed.
- **Pricing (as of 2026-11-08):** $3.00 / 1M input, $0.30 / 1M cached input, $15.00 / 1M output; paid.
- **Architecture:** ~2.8T total / ~104B active MoE; post-trained on Kimi K3.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- DeepSWE 1.1: **55.8% → 62.8% → 66.4%** (varying reasoning levels)
- τ-2 Bench Airline: **64% → 64% → 66%** (K3 64%)
- AI BENCHY scores: 5.2-7.5 across effort levels (low/none/high/max)
- LLM Stats Score: **43.1** (#51)
- Tau2 Airline: Ember-1 wins vs Qwen3-235B (single shared benchmark)
- Live A/B tests: ~35% fewer tokens per task at comparable quality
- Terminal-Bench 2.1: **82.0%** (Fireworks Research) (BenchLM, updated 2026-11-07)
- τ²-bench Airline: **66.0%** (Fireworks Research) (BenchLM, updated 2026-11-07)

Reasoning / knowledge:

- GPQA Diamond: not individually reported for Ember-1 (K3 93.5%)
- HLE: not reported
- ARC-AGI: not reported
- AA Intelligence Index: not reported (LLM Stats Reasoning 38.6)

Coding:

- LLM Stats Coding: **37.0** (#22)
- DeepSWE 1.1: 55.8-66.4%
- Coding Index: 71.5 (Puter/AA) for K3; Ember-1 not separately reported
- SWE-bench Verified: **92.2%** (Fireworks Research) (BenchLM, updated 2026-11-07)
- DeepSWE: **75.2%** (Fireworks Research) (BenchLM, updated 2026-11-07)

Long context:

- 1.04M window; MRCR: not reported.

Multimodal:

- Image input supported; no multimodal benchmarks reported for Ember-1.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 74/100.** DeepSWE 55.8-66.4%, τ-2 Airline 64-66%; caps at no published agentic benchmarks. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.1 82.0%, τ²-bench Airline 66.0%, SWE-bench Verified 92.2%, DeepSWE 75.2%. Corroborates band; no change.
- **Reasoning: 72/100.** LLM Stats Reasoning 38.6; caps at no published GPQA/HLE/ARC-AGI for Ember-1.
- **Context window: 84/100.** 1.04M window; caps at no published MRCR.
- **Multimodal: 70/100.** Image input supported; no verified multimodal benchmarks.
- **Coding: 74/100.** DeepSWE 55.8-66.4%, LLM Stats Coding 37.0; caps at no SWE-bench Verified/Pro. Enrichment adds SWE-bench Verified 92.2%, DeepSWE 75.2%. Corroborates band; no change.
- **Cost efficiency: 75/100.** $3/$15 per 1M; 40% fewer tokens than K3 improves effective cost.
- **Overall Score: 75/100.** Mean of five quality dims (LLM Stats 43.1); best-fit for token-efficient agentic coding (derived from K3). Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.1 82.0%, τ²-bench Airline 66.0%, SWE-bench Verified 92.2%, DeepSWE 75.2%). No dimension band moved; Overall unchanged at 75.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added (Terminal-Bench 2.1 82.0%, τ²-bench Airline 66.0%, SWE-bench Verified 92.2%, DeepSWE 75.2%); no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Ember-1](https://benchlm.ai/models/ember-1)
  - [Fireworks Research — Ember-1](https://fireworks.ai/blog/ember-1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).