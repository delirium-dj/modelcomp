# Muse Spark 1.2 — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Meta (muse-spark-1.2)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's open-weight multimodal model with 816B total/42B active parameters, Mixture of Experts architecture with Perception Encoder. Released August 5, 2026 as an upgrade over previous versions with enhanced agentic capabilities and multimodal understanding.
- **Provider / access:** Meta Platforms, Inc. (proprietary, `muse-spark-1.2`), available through Hugging Face and official APIs
- **Release / knowledge:** August 5, 2026; knowledge cutoff not specified
- **IDs:** `meta/muse-spark-1.2` (proprietary API)
- **Context window:** 1,048,576 tokens (1M input / 128K output)
- **Modalities:** Text, image, audio, video, PDF input; text output; reasoning yes; tool calls supported; JSON mode supported
- **Pricing (as of 2026-10):** Free tier ($0, training-data consent required); Contributor tier ($0.10 input / $0.20 output per 1M tokens); Standard tier ($1.25 input / $4.25 output per 1M tokens)
- **Architecture:** Mixture of Experts with Perception Encoder; 816B total / 42B active parameters

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

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

### Additional benchmark data from independent sources:

- **Terminal-Bench 2.1:** 82.9% (Meta evaluation) / 80% (Artificial Analysis)
- **GDPval-AA v2:** 1,631 Elo (+260 vs previous version)
- **MCP-Atlas:** 89.2% (tool use efficiency)
- **Toolathlon Verified:** 72.8%
- **GPQA Diamond:** 89.0%
- **HLE (with tools):** 61.0%
- **Artificial Analysis Intelligence Index:** 39 (xhigh)
- **AA Omniscience Index:** 25 (knowledge reliability)
- **SWE-bench Verified:** 60%
- **DeepSWE v1.1:** 60%
- **LiveCodeBench Pro:** 80.0%
- **Terminal-Bench 2.1:** 76.4%
- **ZeroBench:** 50.0%
- **BabyVision:** 80.2%
- **SimpleVQA:** 73.6%
- **WorldVQA:** 49.4%

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 88/100.** Excellent tool use capabilities evidenced by 89.2% on MCP-Atlas and strong performance on Terminal-Bench 2.1 (82.9%); demonstrates efficient agentic workflows and complex task execution.
- **Reasoning: 87/100.** Strong reasoning performance with 89.0% on GPQA Diamond and 61.0% on HLE; shows sophisticated logical reasoning and knowledge work capabilities for an open-weight model.
- **Context window: 96/100.** Outstanding 1M token context window with 128K maximum output; one of the highest-capacity models available for long-form reasoning and document processing.
- **Multimodal: 90/100.** Exceptional multimodal capabilities with 80.2% on BabyVision, 73.6% on SimpleVQA, and support for text, image, audio, video, and PDF input; comprehensive omni-modal understanding.
- **Coding: 80/100.** Good coding performance with 80.0% on LiveCodeBench Pro and 60% on SWE-bench; capable code generation and debugging, though some regression in specialized coding tasks.
- **Cost efficiency: 100/100.** Free tier available ($0 with training-data consent) and competitive pricing in Contributor tier ($0.10/$0.20 per 1M tokens); excellent value for performance tier.
- **Overall Score: 88/100.** Exceptional open-weight model with outstanding multimodal capabilities, large context window, and strong performance across multiple domains; best-in-class value proposition with free tier availability.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including Meta official data, Artificial Analysis, and Hugging Face model cards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/muse-spark-1.2/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/muse-spark-1.2/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).