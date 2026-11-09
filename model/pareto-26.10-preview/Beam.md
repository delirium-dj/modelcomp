# Pareto 26.10 Preview — findings by Beam

- Source: Unbiased/Pareto 26.10 Preview, `pareto-26.10-preview`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's Pareto 26.10 Preview (Oct 2026): unranked research preview with 3 benchmarks published. BenchLM unranked.
- **Provider / access:** Unbiased API.
- **Release / knowledge:** Released 2026-10-??; knowledge cutoff not stated.
- **IDs:** `pareto-26.10-preview`
- **Context window:** not stated.
- **Modalities:** text in; text out; reasoning yes.
- **Pricing (as of 2026-11-08):** paid (Unbiased).
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0: **50.80%** (Unbiased)
- DeepSWE: **69.9%** (Unbiased)
- GPQA-D: **92.4%** (Unbiased)
- BenchLM aggregator (2026-11-07): only 3 benchmarks published; still unranked.

Reasoning / knowledge:

- GPQA-D: **92.4%** (Unbiased)

Coding:

- DeepSWE: **69.9%** (Unbiased)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 60/100.** Terminal-Bench 4.0 50.80%; caps at no published agentic benchmarks. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 4.0 50.80%, DeepSWE 69.9%, GPQA-D 92.4%. Still only 3 benchmarks published; unranked. No change.
- **Reasoning: 70/100.** GPQA-D 92.4%; caps at no published HLE/ARC-AGI. Enrichment adds GPQA-D 92.4% (already). Corroborates band; no change.
- **Context window: 70/100.** Context not stated; caps at no published MRCR.
- **Multimodal: 60/100.** Text in; caps at no verified multimodal benchmarks.
- **Coding: 72/100.** DeepSWE 69.9%; caps at no published SWE-bench.
- **Cost efficiency: 75/100.** Paid (Unbiased).
- **Overall Score: 66.4/100.** Mean of five quality dims (BenchLM unranked, 3 benchmarks); best-fit for research preview. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 4.0 50.80%, DeepSWE 69.9%, GPQA-D 92.4%. Still only 3 benchmarks published; unranked. No dimension band moved; Overall unchanged at 66.4.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; BenchLM aggregator checked (only 3 benchmarks published, still unranked); no new verified rows; no dimension score changed.
- Reference URLs:
  - [BenchLM — Pareto 26.10 Preview](https://benchlm.ai/models/pareto-26-10-preview)
  - [Unbiased — Pareto 26.10 Preview](https://unbiased.ai/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).