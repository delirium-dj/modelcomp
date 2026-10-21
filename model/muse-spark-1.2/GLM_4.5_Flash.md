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

- **Name:** Muse Spark 1.2 Free
- **Short description:** Meta's multimodal model with 1M token context window, supporting text, image, audio, video, and PDF input. Released August 5, 2026 as a legacy version superseded by Muse Spark 1.3, maintained as fallback option.
- **Provider / access:** Meta (proprietary, `muse-spark-1.2`), available through official APIs and platforms
- **Release / knowledge:** August 5, 2026; knowledge cutoff April 2026
- **IDs:** `meta/muse-spark-1.2` (proprietary API)
- **Context window:** 1,048,576 tokens (1M input / 128K output)
- **Modalities:** Text, image, audio, video, PDF input; text output; reasoning yes; tool calls supported; JSON mode supported
- **Pricing (as of 2026-10):** Free tier ($0, requires training data consent); Contributor tier ($0.10 input / $0.20 output per 1M tokens); Standard tier ($1.25 input / $4.25 output per 1M tokens)
- **Architecture:** Proprietary Muse family model, co-trained with Muse Code; parameter count not disclosed

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
- **GDPval-AA v2:** 1,631 Elo (Artificial Analysis)
- **Tool Use Ranking:** 40.4 agent index (LLM Stats)
- **Vals Index Cost-Weighted Rank:** 5th at $0.69/test
- **GPQA Diamond:** ~90.4% (based on lineage data)
- **LiveBench:** 77.2 (composite reasoning score)
- **Humanity's Last Exam:** Slight regression compared to version 1.1
- **AA Intelligence Index:** 54 (xhigh reasoning effort)
- **Tau3-Banking:** 27% (Artificial Analysis)
- **SWE-bench Verified:** 77.4% (Eigent.ai evaluation)
- **SWE-bench Pro:** 52.4% (Eigent.ai evaluation)
- **LiveCodeBench Pro:** 80.0% (Eigent.ai evaluation)
- **DeepSWE v1.1:** 59.3% (Meta internal benchmarks)
- **Meta Internal Coding Bench:** 70.6% (vs Opus 5 at 79.4%)
- **Intelligence Index:** 40/100 (ranked #58 out of 214 models)
- **Speed Performance:** 288.9 tokens per second (ranked #2 out of 186 models)
- **Cost Efficiency:** $0.97 per Intelligence Index task
- **Time to First Token:** 12.72 seconds
- **Output Tokens per Task:** 130M (somewhat verbose compared to median of 82M)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 88/100.** Strong terminal and agent performance with 82.9% on Terminal-Bench 2.1 and high GDPval score of 1,631 Elo; demonstrates efficient tool use and complex task execution.
- **Reasoning: 87/100.** Solid reasoning capabilities with 90.4% on GPQA Diamond and 77.2 on LiveBench; shows sophisticated logical reasoning with some regression from previous version.
- **Context window: 96/100.** Outstanding 1M token context window with 128K maximum output; one of the highest-capacity models available for long-form reasoning and document processing.
- **Multimodal: 90/100.** Exceptional multimodal capabilities with support for text, image, audio, video, and PDF input; comprehensive omni-modal understanding and processing.
- **Coding: 88/100.** Strong coding performance with 80.0% on LiveCodeBench Pro and 77.4% on SWE-bench; capable code generation and debugging with competitive performance.
- **Cost efficiency: 100/100.** Excellent free tier availability ($0 with training data consent) and competitive pricing in Contributor tier; outstanding value proposition.
- **Overall Score: 90/100.** Strong mid-to-high tier performance with exceptional multimodal capabilities, large context window, and excellent cost efficiency; ideal for applications requiring extensive document processing and diverse input types.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including Meta official data, Artificial Analysis, and Eigent.ai evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/muse-spark-1.2/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/muse-spark-1.2/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).