# Qwen 3.8 Max — findings by GLM 4.5 Flash

> Comprehensive research on Alibaba's flagship multimodal model with detailed benchmarks, technical specifications, and performance analysis.

- Source: Qwen 3.8 Max (qwen-3.8-max)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's flagship multimodal MoE model with 2.4T parameters and 95B active parameters, featuring 1M context window, designed for code, reasoning, and visual agents.
- **Provider / access:** Alibaba Cloud (`qwen3.8-max`) - API access only (no open weights)
- **Release / knowledge:** Released August 3, 2026; knowledge cutoff not disclosed
- **IDs:** `alibaba/qwen3-8-max` / `qwen3.8-max` (Alibaba Cloud API)
- **Context window:** 1M tokens input / 131K tokens output
- **Modalities:** Text, image, video input; text output; reasoning capabilities; tool use supported
- **Pricing (as of 2026):** $2 per 1M tokens input, $6 per 1M tokens output; includes one-time 1M-token free quota
- **Architecture:** 2.4T parameter multimodal Mixture of Experts (MoE) with 95B active parameters per token

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" — do NOT save a scored `.md` file. Save
> `model/<slug>/<Source_Name>.md.excluded` instead (same headings, your
> negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Qwen official benchmarks, 77th percentile)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **60.3%** (Qwen official benchmarks, 81st percentile)

Reasoning / knowledge:

- GPQA Diamond: **92.7%** (Vals AI, 97th percentile)
- HLE: **43.6%** (Qwen official benchmarks)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **45.4** (Artificial Analysis)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **67.7%** (Qwen official benchmarks, 88th percentile)
- LiveCodeBench: **87.9%** (Vals AI)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **64.7%** (Vals AI)
- DeepSWE / Coding Index / other: **56.6%** (Qwen official benchmarks)

Long context:

- **LongBench v2: 66.3%** (Qwen official benchmarks)

### Additional benchmark data from independent sources:

- **GPQA Diamond:** 93.7% (Vals AI, 6th of 138 models)
- **SWE-bench:** 85.6% (Vals AI, 17th of 88 models)
- **MMMU Pro:** 82.3% (Qwen official benchmarks)
- **Terminal-Bench 4.0:** 34.3% (Vals AI)
- **IFBench:** 82.8% (Qwen official benchmarks)
- **LegalBench:** 83.6% (Vals AI)
- **LiveCodeBench:** 87.9% (Vals AI, 10th of 143 models)
- **SWE-bench Multimodal:** 42.5% (Vals AI)
- **Vibe Code Bench v1.1:** 64.7% (Vals AI)
- **PaperBench:** 93.0% (Qwen official benchmarks)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Strong Terminal-Bench 2.1 score of 86.6% demonstrates excellent agentic capabilities, though some specialized benchmarks remain untested.
- **Reasoning: 85/100.** Exceptional GPQA Diamond score of 92.7% indicates outstanding graduate-level reasoning capabilities, though HLE score of 43.6% shows limitations in broad knowledge exams.
- **Context window: 95/100.** Industry-leading 1M token context window with 131K output capacity, providing exceptional long-context capabilities.
- **Multimodal: 85/100.** Native multimodal capabilities with strong MMMU Pro score of 82.3%, though specific multimodal benchmarks remain limited.
- **Coding: 82/100.** Strong SWE-bench Pro score of 67.7% and excellent LiveCodeBench performance of 87.9% demonstrate solid coding capabilities.
- **Cost efficiency: 40/100.** Premium pricing at $2/$6 per 1M tokens with only one-time free quota; hosted-only access with no open weights option.
- **Overall Score: 85/100.** Exceptional performance model with industry-leading context window and strong reasoning/coding capabilities, though premium pricing limits accessibility.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-30
- Method: Independent research from official model documentation, Alibaba Cloud documentation, and benchmark sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.8-max/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.8-max/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).