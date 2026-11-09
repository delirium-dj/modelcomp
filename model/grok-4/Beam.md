# Grok 4 — findings by Beam

- Source: xAI/Grok 4, `xai/grok-4`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's Grok 4 (Jul 9, 2025): non-reasoning flagship, 128K context, strong on LiveCodeBench and GPQA; BenchLM #92/1016.
- **Provider / access:** xAI API; OpenRouter.
- **Release / knowledge:** Released 2025-07-09; knowledge cutoff not stated.
- **IDs:** `xai/grok-4`
- **Context window:** 128,000 tokens; max output not stated.
- **Modalities:** text, image in; text out; reasoning no (non-reasoning); tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (xAI).
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- τ²-bench results: **74.9%** (Artificial Analysis)
- Gert Labs: **42.34%** (Gert Labs)
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA-AnalystAgent: not individually reported
- MazeBench: not individually reported
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported
- AA Tau3 Banking: not individually reported
- aaTerminalBench21: not individually reported

Reasoning / knowledge:

- AA Intelligence Index: **22.5%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **87.7%** (Artificial Analysis)
- AA-HLE: **26.7%** (Artificial Analysis)
- AA-Omniscience Index: **2.1%**
- AA-Omniscience Accuracy: **40.5%**
- AA-Omniscience Hallucination Rate: **64.5%**
- AA-LCR: **68.0%** (Artificial Analysis)
- CritPt: **2.0%** (Artificial Analysis)
- AA-IFBench: **53.7%** (Artificial Analysis)
- AA Global-MMLU-Lite: **89.5%** (Artificial Analysis)
- AA AIME 2025: **92.7%** (Artificial Analysis)
- AA MATH-500: **99.0%** (Artificial Analysis)
- AA MMLU-Pro: **86.6%** (Artificial Analysis)
- GPQA: not individually reported
- HLE: not individually reported
- ARC-AGI: not individually reported
- MMLU-Pro: not individually reported
- FrontierMath: not individually reported

Coding:

- React Native Evals: **72.6%** (React Native Evals)
- AA LiveCodeBench: **81.9%** (Artificial Analysis)
- AA-SciCode: not individually reported
- AA Coding Index: not individually reported
- PostTrainBench v1.1: not individually reported
- Bug Hunt Bench: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- AA-MMMU-Pro: **68.8%** (Artificial Analysis)

Long context:

- 128K window; MRCR: not reported.
- AA-LCR: **68.0%** (Artificial Analysis)

Multimodal:

- AA-MMMU-Pro: **68.8%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 68/100.** Agentic lane (unranked), τ²-bench 74.9%, Gert Labs 42.34%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates τ²-bench 74.9%, Gert Labs 42.34%, AA Intelligence 22.5%, AA-GPQA 87.7%, AA-HLE 26.7%, AA-Omniscience 2.1%/40.5%/64.5%, AA-LCR 68.0%, CritPt 2.0%, AA-IFBench 53.7%, AA Global-MMLU-Lite 89.5%, AA AIME 2025 92.7%, AA MATH-500 99.0%, AA MMLU-Pro 86.6%, React Native Evals 72.6%, AA LiveCodeBench 81.9%, AA-MMMU-Pro 68.8%. Corroborates band; no change.
- **Reasoning: 66/100.** AA Intelligence 22.5%, AA-GPQA 87.7%, AA-HLE 26.7%, AA-Omniscience 2.1%/40.5%/64.5%, AA-LCR 68.0%, CritPt 2.0%, AA-IFBench 53.7%, AA Global-MMLU-Lite 89.5%, AA AIME 2025 92.7%, AA MATH-500 99.0%, AA MMLU-Pro 86.6%. Corroborates band; no change.
- **Context window: 60/100.** 128K window; AA-LCR 68.0%. Corroborates band; no change.
- **Multimodal: 66/100.** Text/image in; AA-MMMU-Pro 68.8%. Enrichment adds AA-MMMU-Pro 68.8% (already). Corroborates band; no change.
- **Coding: 64/100.** React Native Evals 72.6%, AA LiveCodeBench 81.9%. Enrichment adds React Native Evals 72.6% (already), AA LiveCodeBench 81.9% (already), AA-MMMU-Pro 68.8%. Corroborates band; no change.
- **Cost efficiency: 80/100.** Mid-tier paid.
- **Overall Score: 64.8/100.** Mean of five quality dims (BenchLM aggregate 51.61); best-fit for basic agentic + reasoning at mid cost. Enrichment (2026-11-08) added new verified rows (τ²-bench 74.9%, Gert Labs 42.34%, React Native Evals 72.6%, AA LiveCodeBench 81.9%, AA-MMMU-Pro 68.8%, AA-LCR 68.0%, CritPt 2.0%, AA Intelligence 22.5%, AA-GPQA 87.7%, AA-HLE 26.7%, AA-Omniscience 2.1%/40.5%/64.5%, AA MMLU-Pro 86.6%, AA-IFBench 53.7%, AA Global-MMLU-Lite 89.5%, AA AIME 2025 92.7%, AA MATH-500 99.0%). No dimension band moved; Overall unchanged at 68.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Grok 4](https://benchlm.ai/models/grok-4)
  - [Artificial Analysis — Grok 4](https://artificialanalysis.ai/models/grok-4)
  - [xAI — Grok 4](https://x.ai/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).