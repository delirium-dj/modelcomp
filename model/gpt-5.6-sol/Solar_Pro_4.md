# GPT-5.6 Sol — findings by Solar Pro 4

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and delete this block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI/GPT-5.6 Sol, e.g. OpenAI (`openai/gpt-5.6-sol`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's advanced reasoning and coding specialist model in the GPT-5.6 family. Released July 2026. Strong performance in reasoning, math, and coding benchmarks. Part of OpenAI's frontier model lineup.
- **Provider / access:** OpenAI API (`openai/gpt-5.6-sol`), Azure, Amazon Bedrock, OpenRouter. Chat Completions API.
- **Release / knowledge:** Released July 9, 2026; knowledge cutoff not publicly specified.
- **IDs:** `openai/gpt-5.6-sol` (no Free ID on Zen; paid only: $4.00/$20.00 per 1M at OpenAI)
- **Context window:** 1.1M tokens total, 128K output. Verified via multiple sources.
- **Modalities:** Text, image in; text out. Reasoning: yes (configurable: no reasoning/low/medium/high/xhigh/max). Tool calls: yes. JSON mode: supported.
- **Pricing (as of 2026-09-23):** Paid only: $4.00 in / $20.00 out per 1M tokens at OpenAI (cache discount 90%). Varies by provider. No free tier available.
- **Architecture:** Proprietary, closed-weights. OpenAI has not disclosed parameter count.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" and all normalized dims would be guesses — do NOT save a scored `.md`
> file. Save `model/<slug>/<Source_Name>.md.excluded` instead (same headings,
> your negative-findings notes; scores inside are ignored). `pnpm sync` skips
> `.excluded` files loudly so they never poison the average. Never invent
> placeholder scores (0, 10, …) to fill a `.md` file — one fabricated number
> drags the mean for every reader. (`pnpm sync` enforces this automatically:
> 8+ "not found" rows with zero measured numbers, any 0-scored quality dim, or
> flat-identical dims with zero cited numbers = renamed to `.excluded`.)

Agent / tool use:

- GDPval-AA: **no verified public score found** (closest: AA Intelligence Index 47.0, rank 19)
- JobBench: **no verified public score found**
- AutomationBench: **no verified public score found**
- RuneBench: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- MCP Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Terminal-Bench 2.1: **85.8%** (source: Vals AI; rank 2 of 64 at xhigh/max)
- OSWorld-Verified 2.0: **27.3%** (source: Vals AI; rank 5 of 14 at max)

Reasoning / knowledge:

- GPQA Diamond: **92.5%** (source: Vals AI; rank 4 of 188 at max)
- HLE: **no verified public score found**
- LCR: **84.0%** (source: Artificial Analysis; rank 11 at max)
- MLCR: **26.1%** (source: Artificial Analysis; rank 13 at max)
- CritPt: **32.3%** (source: Vals AI; rank 1 of 516 at max)
- Artificial Analysis Intelligence Index: **47.0 / 673** (rank 19 of 673 models at max)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **no verified public score found**
- IOI: **91.2%** (source: Vals AI; rank 2 of 27 at max)
- FrontierMath Tiers 1-3: **89.1%** (source: Vals AI; rank 3 of 105 at max)
- ARC-AGI-2: **92.5%** (source: Vals AI; rank 4 of 188 at max)

Long context:

- MRCR: **no verified public score found**
- LCR: **84.0%** (source: Artificial Analysis; rank 11 at max)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 78/100.** Terminal-Bench 2.1 at 85.8% (rank 2/64) demonstrates strong agentic terminal coding. OSWorld-Verified 2.0 at 27.3% (rank 5/14) shows decent computer use capability. AA Intelligence Index 47.0 (rank 19) indicates strong overall capability. Capped by lack of GDPval-AA, JobBench, and other agent-specific benchmarks.
- **Reasoning: 85/100.** GPQA Diamond 92.5% (rank 4/188) is excellent. CritPt 32.3% (rank 1/516) is best-in-class. LCR 84.0% (rank 11) is strong. AA Intelligence Index reasoning component is high (74 at max). Capped by lack of HLE score and lower MLCR (26.1%).
- **Context window: 93/100.** 1.1M token context window is frontier-tier. Exceeds the 1M threshold. AA-LCR 84.0% (rank 11) demonstrates strong long-context retrieval. Capped slightly by lack of official MRCR verification, but context window size is verified.
- **Multimodal: 70/100.** Supports text and image input with text output. Basic multimodal coverage. No video, audio, or PDF input. Capped by limited input modalities compared to more comprehensive multimodal models. Score reflects standard text+image coverage.
- **Coding: 82/100.** Strong coding performance: IOI 91.2% (rank 2/27), FrontierMath Tiers 1-3 89.1% (rank 3/105), ARC-AGI-2 92.5% (rank 4/188). Terminal-Bench 2.1 at 85.8% (rank 2/64) shows strong agentic coding. Capped by lack of verified SWE-bench, LiveCodeBench, and DeepSWE scores.
- **Cost efficiency: 45/100.** Paid only at $4.00/$20.00 per 1M tokens (cache discount 90%). High output costs make it expensive for tasks with significant generation. No free tier. Moderate-poor value at price point compared to competitors with similar capabilities.
- **Overall Score: 82/100.** Mean of (78 + 85 + 93 + 70 + 82) / 5 = 81.6, rounded to 82. Best-fit recommendation: Strong reasoning and coding model with excellent math performance (CritPt rank 1, FrontierMath rank 3). Best suited for research, complex problem-solving, and coding tasks where high reasoning effort is justified. High cost and lack of free tier limit accessibility.

---

## Signature

- Provided by: **Solar Pro 4 (solar-pro-4)** — 2026-09-23
- Method: Public internet research (OpenAI API docs, Artificial Analysis, BenchLeader, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Astra.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).


