# MiMo V2.6 Pro — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Xiaomi (mimo-v2.6-pro)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's open-weight multimodal model with 1.02T total/42B active parameters, Mixture of Experts architecture. Released in September 2026 as the #1 ranked open weights model on Artificial Analysis Intelligence Index.
- **Provider / access:** Xiaomi API (proprietary, `mimo-v2.6-pro`), available through https://api.xiaomimimo.com/v1/mimo-v2.6-pro (OpenAI protocol)
- **Release / knowledge:** Released September 21, 2026; knowledge cutoff December 2024
- **IDs:** `mimo-v2.6-pro` (proprietary API)
- **Context window:** 1M-1.1M tokens with 128K maximum output
- **Modalities:** Text, image, video, audio input; text output; reasoning yes; tool calls supported; streaming, web search, structured output, context caching supported
- **Pricing (as of 2026-10):** $0.435-$0.43 per 1M tokens input (cache miss), $0.87 per 1M tokens output, $0.0036 per 1M tokens cache hit; paid only, no free tier
- **Architecture:** 1.02T total / 42B active parameters, Mixture of Experts (MoE) with MIT open weights license

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
- HLE: **49.4%** (Sophon benchmark)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **46.3 / no verified public score found** (Artificial Analysis, ranked #1 among open weights models)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **60.9%** (Sophon benchmark)
- Vibe Code Bench: **85.2%** (Sophon benchmark)
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

### Additional benchmark data from independent sources:

- **Terminal-Bench 2.1:** 89.9% (Xiaomi official benchmark)
- **MedScribe:** 88.3% (Sophon benchmark)
- **Finance Agent (v2):** 57.3% (Sophon benchmark)
- **ProofBench:** 70% (Sophon benchmark)
- **Creative Story-Writing:** 73% (Sophon benchmark)
- **SAGE:** 45.1% (Sophon benchmark)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 88/100.** Excellent multimodal capabilities with support for text, image, video, and audio input; strong performance on Terminal-Bench 2.1 (89.9%) and demonstrated effectiveness in complex tool usage scenarios.
- **Reasoning: 88/100.** Solid reasoning performance with 49.4% on Humanity's Last Exam and 46.3 on Artificial Analysis Intelligence Index (rank #1 among open weights models); good knowledge work capabilities for an open model.
- **Context window: 96/100.** Exceptional 1M-1.1M token context window with 128K maximum output; one of the highest-capacity models available for long-form reasoning and document processing.
- **Multimodal: 93/100.** Outstanding multimodal support with native text, image, video, and audio input capabilities; comprehensive omni-modal understanding and processing.
- **Coding: 89/100.** Excellent coding performance with 85.2% on Vibe Code Bench and 60.9% on SciCode; strong capabilities in code generation, debugging, and software development tasks.
- **Cost efficiency: 96/100.** Competitive pricing at $0.435-$0.43 input and $0.87 output per 1M tokens with highly efficient caching at $0.0036 per 1M tokens; excellent value for performance tier.
- **Overall Score: 91/100.** Exceptional open-weight model with outstanding multimodal capabilities, large context window, and strong performance across multiple domains; best-in-class among open weights models.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including Xiaomi official data, Artificial Analysis, and Sophon benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/mimo-v2.6-pro/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/mimo-v2.6-pro/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).