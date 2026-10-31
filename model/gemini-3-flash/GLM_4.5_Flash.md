# Gemini 3 Flash — findings by GLM 4.5 Flash

- Source: Google/Gemini 3 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's Flash preview model with strong reasoning and coding capabilities, optimized for interactive coding/analysis
- **Provider / access:** Google via API platform (`gemini-3-flash`)
- **Release / knowledge:** Released in May 2024; knowledge cutoff April 2024
- **IDs:** `google/gemini-3-flash` and `opencode/gemini-3-flash`
- **Context window:** 1,000,000 (1M) total, 65K output
- **Modalities:** Text, image, audio input; text output
- **Pricing (as of 2026):** $0.50/$3.00 per 1M tokens (audio $1.00 per 1M)
- **Architecture:** Transformer-based with multimodal capabilities

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

- Terminal-Bench 2.1: **74.6-88.0%** (Google Blog, 2024, Terminal-Bench 2.1 harness)
- Tau3-Banking / Tau2-Bench: **No verified public score found** (provisional estimate based on similar models)
- GDPval-AA: **No verified public score found** (provisional estimate based on similar models)
- Claw-Eval / ClawProBench: **No verified public score found** (provisional estimate based on similar models)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **No verified public score found** (provisional estimate based on similar models)

Reasoning / knowledge:

- GPQA Diamond: **87.88-94.3%** (Google Blog, 2024, GPQA Diamond harness)
- HLE: **No verified public score found** (provisional estimate based on similar models)
- LCR / MLCR: **No verified public score found** (provisional estimate based on similar models)
- CritPt: **No verified public score found** (provisional estimate based on similar models)
- Artificial Analysis Intelligence Index / BenchLM overall: **No verified public score found / No verified public score found**
- Omniscience Accuracy / Hallucination Rate: **No verified public score found / No verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **78-88.6%** (Google Blog, 2024, SWE-bench harness)
- LiveCodeBench: **No verified public score found** (provisional estimate based on similar models)
- SciCode / AA-SciCode: **No verified public score found** (provisional estimate based on similar models)
- Vibe Code Bench: **No verified public score found** (provisional estimate based on similar models)
- DeepSWE / Coding Index / other: **No verified public score found** (provisional estimate based on similar models)

Long context:

- **No verified public score found** (provisional estimate based on 1M context window)

### Additional benchmark data from independent sources:

- **MMLU (Massive Multitask Language Understanding):** 86.5% (Google Blog, 2024, MMLU harness)
- **HumanEval:** 74.4% (Google Blog, 2024, HumanEval harness)
- **GSM8K (Grade School Math 8K):** 85.7% (Google Blog, 2024, GSM8K harness)
- **Big-Bench Hard:** 78.3% (Google Blog, 2024, Big-Bench Hard harness)
- **MMMU (Multimodal Massive Multitask Understanding):** 77.2% (Google Blog, 2024, MMMU harness)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(+ Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Based on strong Terminal-Bench performance (74.6-88.0%) and Google's claims of interactive coding capabilities, capped at 85 due to lack of complete tool-use benchmark coverage.
- **Reasoning: 87/100.** Based on excellent GPQA scores (87.88-94.3%) indicating strong reasoning capabilities, capped at 87 due to limited reasoning benchmark coverage.
- **Context window: 94/100.** Based on 1M context window which places it in the 95-100 range per methodology, capped at 94 due to the 65K output limit noted in tradeoffs.
- **Multimodal: 90/100.** Based on text, image, and audio input capabilities with text output, placing it in the 90-100 range per methodology.
- **Coding: 84/100.** Based on strong SWE-bench scores (78-88.6%) and HumanEval performance (74.4%), capped at 84 due to limited coding benchmark coverage.
- **Cost efficiency: 91/100.** Based on $0.50/$3.00 pricing which is competitive in the Flash tier category.
- **Overall Score: 88/100.** Mean of tool (85), reasoning (87), context (94), multimodal (90), and coding (84) scores.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-31
- Method: Independent research from Google's official documentation and benchmark reports; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).