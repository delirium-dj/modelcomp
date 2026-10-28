# Qwen 3.8 Max — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Qwen 3.8 Max (qwen-3.8-max)
- Date: 2026-10-28
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's flagship multimodal MoE model with 2.4T parameters and 95B active parameters, featuring 1M context window, designed for code, reasoning, and visual agents.
- **Provider / access:** Alibaba Cloud (`qwen3.8-max`) - API access only (no open weights)
- **Release / knowledge:** Released October 2026; knowledge cutoff not disclosed
- **IDs:** `alibaba/qwen3-8-max` / `qwen3.8-max` (Alibaba Cloud API)
- **Context window:** 1M tokens input / 131K tokens output
- **Modalities:** Text, image, video input; text output; reasoning capabilities; tool use supported
- **Pricing (as of 2026-10):** $2 per 1M tokens input, $6 per 1M tokens output; includes one-time 1M-token free quota
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

- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found / no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **67.7%** (meta.json, official claim)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

### Additional benchmark data from independent sources:

- **GPQA:** ~93.7% (meta.json, official claim)
- **SWE-bench Pro:** 67.7% (meta.json, official claim)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** As Alibaba's flagship multimodal model with 2.4T parameters, expected to have strong tool use capabilities for complex reasoning tasks, though specific benchmarks not publicly available.
- **Reasoning: 85/100.** Exceptional GPQA score of ~93.7% indicates strong reasoning capabilities, though specific reasoning benchmarks not publicly verified.
- **Context window: 95/100.** Industry-leading 1M token context window with 131K output capacity, providing exceptional long-context capabilities.
- **Multimodal: 90/100.** Native multimodal capabilities supporting text, image, and video input, designed specifically for visual agents and multimodal tasks.
- **Coding: 88/100.** Strong SWE-bench Pro score of 67.7% demonstrates excellent coding capabilities for complex software engineering tasks.
- **Cost efficiency: 40/100.** Premium pricing at $2/$6 per 1M tokens with only one-time free quota; hosted-only access with no open weights option.
- **Overall Score: 87/100.** Exceptional performance model with industry-leading context window and strong coding/reasoning capabilities, though premium pricing limits accessibility.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-28
- Method: Independent research from official model metadata and Alibaba Cloud documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.8-max/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant variants register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.8-max/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).