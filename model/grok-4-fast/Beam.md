# Grok 4 Fast — findings by Beam

- Source: xAI/Grok 4 Fast, `xai/grok-4-fast`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's fast variant of Grok 4 (Sep 2026): 2M context, reasoning, low cost; BenchLM #125/1016.
- **Provider / access:** xAI API; OpenRouter.
- **Release / knowledge:** Released 2026-09-??; knowledge cutoff not stated.
- **IDs:** `xai/grok-4-fast`
- **Context window:** 2,000,000 tokens; max output not stated.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (xAI).
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- τ²-bench results: **65.8%** (Artificial Analysis)
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

- AA Intelligence Index: **17.9%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **84.7%** (Artificial Analysis)
- AA-HLE: **19.1%** (Artificial Analysis)
- AA-Omniscience Index: **-29.9%**
- AA-Omniscience Accuracy: **22.8%**
- AA-Omniscience Hallucination Rate: **68.3%**
- AA-LCR: **73.7%** (Artificial Analysis)
- CritPt: **2.9%** (Artificial Analysis)
- AA-IFBench: **50.5%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: **89.7%** (Artificial Analysis)
- AA MMLU-Pro: **85.0%** (Artificial Analysis)
- FrontierMath v2: not individually reported

Coding:

- Vibe Code Bench: **0.00%** (Vals AI)
- AA LiveCodeBench: **83.2%** (Artificial Analysis)
- AA-SciCode: not individually reported
- AA Coding Index: not individually reported
- PostTrainBench v1.1: not individually reported
- Bug Hunt Bench: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- AA-MMMU-Pro: **61.8%** (Artificial Analysis)

Long context:

- 2M window; MRCR: not reported.
- AA-LCR: **73.7%** (Artificial Analysis)

Multimodal:

- AA-MMMU-Pro: **61.8%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 66/100.** Agentic lane (unranked), τ²-bench 65.8%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates τ²-bench 65.8%, AA Intelligence 17.9%, AA-GPQA 84.7%, AA-HLE 19.1%, AA-Omniscience -29.9%/22.8%/68.3%, AA-LCR 73.7%, CritPt 2.9%, AA MMLU-Pro 85.0%, AA-IFBench 50.5%, AA AIME 2025 89.7%, Vibe Code 0.00%, AA LiveCodeBench 83.2%, AA-MMMU-Pro 61.8%. Corroborates band; no change.
- **Reasoning: 62/100.** AA Intelligence 17.9%, AA-GPQA 84.7%, AA-HLE 19.1%, AA-Omniscience -29.9%/22.8%/68.3%, AA-LCR 73.7%, CritPt 2.9%, AA MMLU-Pro 85.0%, AA-IFBench 50.5%, AA AIME 2025 89.7%. Corroborates band; no change.
- **Context window: 70/100.** 2M window; AA-LCR 73.7%. Corroborates band; no change.
- **Multimodal: 60/100.** Text/image in; AA-MMMU-Pro 61.8%. Corroborates band; no change.
- **Coding: 58/100.** Vibe Code 0.00%, AA LiveCodeBench 83.2%. Enrichment adds Vibe Code 0.00% (already), AA LiveCodeBench 83.2% (already), AA-MMMU-Pro 61.8%. Corroborates band; no change.
- **Cost efficiency: 86/100.** Cheap $2/$6 per 1M.
- **Overall Score: 63.2/100.** Mean of five quality dims (BenchLM aggregate 43.4); best-fit for fast agentic at low cost. Enrichment (2026-11-08) added new verified rows (τ²-bench 65.8%, AA Intelligence 17.9%, AA-GPQA 84.7%, AA-HLE 19.1%, AA-Omniscience -29.9%/22.8%/68.3%, AA-LCR 73.7%, CritPt 2.9%, AA MMLU-Pro 85.0%, AA-IFBench 50.5%, AA AIME 2025 89.7%, Vibe Code 0.00%, AA LiveCodeBench 83.2%, AA-MMMU-Pro 61.8%). No dimension band moved; Overall unchanged at 66.4.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Grok 4 Fast (Reasoning)](https://benchlm.ai/models/grok-4-fast-reasoning)
  - [Artificial Analysis — Grok 4 Fast (Reasoning)](https://artificialanalysis.ai/models/grok-4-fast-reasoning)
  - [xAI — Grok 4 Fast](https://x.ai/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).