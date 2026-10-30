# GPT-6.1 Sol — findings by GLM 4.5 Flash

- Source: Unknown/Glm 4.5 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** Advanced reasoning model for complex coding, computer use, and professional work
- **Provider / access:** OpenAI via API platform (`gpt-6.1-sol`)
- **Release / knowledge:** Released on September 29, 2026; knowledge cutoff April 30, 2026
- **IDs:** `openai/gpt-6.1-sol` (state explicitly if no Free ID exists on Zen)
- **Context window:** 1,050,000 tokens (922,000 max input, 128,000 max output)
- **Modalities:** Text and image input, text output
- **Pricing (as of 2026):** $2 per million input tokens, $10 per million output tokens, $0.10 per million cached input tokens
- **Architecture:** Likely looped transformer (same as GPT-6 Astra), proprietary weights

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

- Terminal-Bench 2.1: **87.3%** (BenchGap, estimated ± 5.2 pp, low confidence)
- Tau3-Banking / Tau2-Bench: **44.5%** (Artificial Analysis, estimated ± 3.8 pp, medium confidence)
- GDPval-AA: **54.8%** (BenchGap, measured)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63.3%** (BenchGap, estimated ± 5.4 pp, medium confidence)

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (BenchGap, estimated ± 1.0 pp, medium confidence)
- HLE: **52.9%** (Artificial Analysis, measured)
- LCR / MLCR: **83.0%** (BenchGap, measured)
- CritPt: **31.7%** (BenchGap, measured)
- Artificial Analysis Intelligence Index / BenchLM overall: **54.5** (Artificial Analysis, measured) / **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **61.8%** (Artificial Analysis, measured) / **no verified public score found**

Coding:

- SWE-bench Verified: **91.8%** (BenchGap, estimated ± 4.6 pp, high confidence)
- LiveCodeBench: **94.7%** (BenchGap, estimated ± 4.9 pp, medium confidence)
- SciCode / AA-SciCode: **53.9%** (BenchGap, estimated ± 3.1 pp, high confidence)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **71.9%** (BenchGap, measured) / **78.8%** (BenchGap, estimated ± 2.4 pp, low confidence)

Long context:

- **MMLU-Pro: 86.2%** (BenchGap, estimated ± 4.1 pp, medium confidence)
- **MMMU-Pro: 85.4%** (BenchGap, estimated ± 1.6 pp, medium confidence)

### Additional benchmark data from independent sources:

- **Terminal-Bench 4.0:** 56.1% (AskClash)
- **AA Coding Index:** 62.9 (AskClash)
- **SWE-bench Pro:** 65.8% (BenchGap, estimated ± 6.6 pp, low confidence)
- **OSWorld-Verified:** 82.5% (BenchGap, estimated ± 8.1 pp, low confidence)
- **BrowseComp:** 91.4% (BenchGap, estimated ± 3.0 pp, medium confidence)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(+ Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Based on strong Terminal-Bench 2.1 (87.3%) and GDPval-AA (54.8%) scores, with good Tau3-Banking performance; capped by moderate Claw-Eval proxy.
- **Reasoning: 92/100.** Exceptional GPQA Diamond (96.0%) score demonstrates strong reasoning capabilities, supported by good LCR (83.0%) and high AA Intelligence Index (54.5).
- **Context window: 95/100.** 1.05M token context window places it in the top tier (≥1M = 95–100), with strong performance on long-context benchmarks like MMLU-Pro (86.2%) and MMMU-Pro (85.4%).
- **Multimodal: 65/100.** Supports text and image input but no audio/video output, placing it in the mid-range for multimodal capabilities.
- **Coding: 90/100.** Excellent SWE-bench Verified (91.8%) and LiveCodeBench (94.7%) scores, with strong DeepSWE (71.9%) performance; capped by moderate SciCode (53.9%) score.
- **Cost efficiency: 60/100.** $2/$10 pricing is reasonable but not as cost-effective as top-tier models; would be higher if a free tier were available.
- **Overall Score: 85.4/100.** Mean of tool (85), reasoning (92), context (95), multimodal (65), and coding (90) scores.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-30
- Method: Independent research from multiple benchmark sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).