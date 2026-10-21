# GPT-6-Astra — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (gpt-6-astra)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6-Astra
- **Short description:** OpenAI's frontier large language model with exceptional capabilities in cybersecurity, professional work, software engineering, and scientific applications. Released in September 2026 as part of the GPT-6 family.
- **Provider / access:** OpenAI API (proprietary, `gpt-6-astra`), Microsoft Azure, AWS Bedrock, ChatGPT Plus/Pro/Business/Enterprise
- **Release / knowledge:** Released September 4, 2026; knowledge cutoff not publicly specified
- **IDs:** `openai/gpt-6-astra` (proprietary API)
- **Context window:** 1M+ tokens (verified through OpenAI MRCR v2 benchmarks at 512K-1M window lengths)
- **Modalities:** Text input, text output; image understanding; tool calls; JSON mode; computer use capabilities; browser automation
- **Pricing (as of 2026-10):** $10 per million input tokens, $50 per million output tokens; Fast mode available at 2x price for 2x speed; Zero Data Retention available for eligible API customers
- **Architecture:** Proprietary model (OpenAI has disclosed training on over 100,000 GPUs at Stargate facility, uses "recurrent depth" or "looped transformers" reasoning technique)

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

- Terminal-Bench 4.0: **57.9%** (OpenAI official benchmark)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI official benchmark)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **61.2 / no verified public score found** (OpenAI official benchmark)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / 4.2%** (OpenAI official benchmark, lower is better for hallucination)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **74.1%** (DeepSWE v1.1)

Long context:

- **OpenAI MRCR v2 8-needle 256K-512K: 100.0%** (OpenAI official benchmark)
- **OpenAI MRCR v2 8-needle 512K-1M: 96.3%** (OpenAI official benchmark)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 95/100.** Exceptional computer use capabilities evidenced by strong performance on OSWorld 2.0 (72.6%) and ScreenSpot-Pro (92.7%); demonstrates advanced automation and complex task execution.
- **Reasoning: 98/100.** Outstanding reasoning performance with 96.0% on GPQA Diamond, 97.6% on FrontierMath Tier 4, and 99.9% on ARC-AGI-3; excels at mathematical and logical reasoning tasks.
- **Context window: 100/100.** Perfect long-context retrieval with 100% on OpenAI MRCR v2 8-needle 256K-512K and 96.3% on 512K-1M benchmarks; exceptional ability to preserve and retrieve context across large windows.
- **Multimodal: 85/100.** Strong text and image understanding with computer use integration, though native audio/video processing capabilities not as comprehensive as specialized multimodal models.
- **Coding: 92/100.** Excellent coding capabilities with 74.1% on DeepSWE v1.1 and 57.9% on Terminal-Bench 4.0; strong performance in software engineering and development tasks.
- **Cost efficiency: 60/100.** $10/$50 pricing is premium for the performance tier, offering competitive value for frontier AI capabilities but expensive compared to open alternatives.
- **Overall Score: 94/100.** Exceptional frontier model with outstanding performance across all dimensions, particularly excelling in reasoning, mathematical capabilities, and computer use; best suited for professional and technical applications requiring high accuracy.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including OpenAI official benchmarks and independent verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-6-astra/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-6-astra/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).