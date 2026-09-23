# Mistral Medium 3.5 — findings by Laguna S 2.1

> Source: opencode/mistral-medium-3.5 (Mistral AI), e.g. Artificial Analysis model page (April 2026), DesignForOnline review, `meta.json`
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Mistral Medium 3.5 (Mistral AI). Open-weights reasoning MoE (128B params, Modified MIT).
- Short description: Mistral's April-2026 128B-class multimodal reasoning model — well above average within the open-weights class (AA Intelligence Index 14, #6/65 open-weight models vs median 8), 256K context, text+image→text, $1.50/$7.50. Strong open-weights pick where a 256K window + vision suffices and budget is mid-range.
- Provider / access: Mistral API (`mistral-medium-3-5`) + OpenRouter + 2 providers (AA); OpenCode Zen `opencode/mistral-medium-3.5`.
- Released: April 2026 (Artificial Analysis "Released April 2026"; DesignForOnline review April 2026).
- Architecture: 128B parameters, open weights (Modified MIT; commercial use allowed with restrictions). Dense-class param count; MoE not specified.
- Context window: **256,000 tokens** (AA model summary "256k tokens context window"; one AA FAQ says 260k). Below the ≥1M tier. Max output: not verified.
- Modalities: **text + image input → text output** (multimodal; AA "text and image → text"; repo `meta.json` "Text in/out" under-reports the image support) (+image-in; no audio/video/PDF).
- Knowledge cutoff: not verified/stated on fetched pages.
- Reasoning / tools: Yes (reasoning/extended-thinking); tool/function calling + JSON structured outputs.
- Pricing (as of 2026-09-23): **$1.50 / $7.50** per 1M in/out (Mistral API). Cache discount 90%; cost per AA Intelligence Index task **$0.44** (~$1.16/MTok blended). noFreeId (paid tier, no $0).
- Speed: **149.2 tok/s** (AA #10/65 open-weights, "above average"; median 108.5); TTFT 2.30s.

### Raw benchmarks found

> Verified public numbers (Artificial Analysis model page April 2026; DesignForOnline review). NOT fabricated. **No standalone Terminal-Bench / SWE-bench / GPQA / HLE / GDPval-AA / Tau3 figures were found on the fetched pages** — Intelligence Index 14 is the composite headline for 3.5.

- AA Intelligence Index v4.3.2: **14** (#6/65 open-weights reasoning, class median 8, "well above average among comparable models") (Artificial Analysis)
- Open-weights peer context: #6/65 open-weights reasoning models (median 8) (Artificial Analysis)
- Cost per Intelligence task: $0.44 (AA)
- Output speed: 149.2 tok/s (AA)
- Terminal-Bench 2.1/2.0 / SWE-bench Verified / DeepSWE / LiveCodeBench / SciCode / GPQA Diamond / HLE / GDPval-AA Elo / Tau3-Banking / tau3-general / AA-Briefcase / CritPt / AA-Omniscience / AA-LCR / MRCR / RULER / Humanity's Last Exam / AutomationBench-AA / OSWorld / Toolaton / MCP-Atlas / MMMU-Pro: NOT FOUND as standalone figures for Mistral Medium 3.5 on fetched pages.

## Model card (continued)

- Provider access verified via both AA model page and repo `meta.json` (id `opencode/mistral-medium-3.5`).

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Anchored on **AA Intelligence Index v4.3.2 = 14** (#6/65 open-weights, median 8). This is strong *within the open-weights class* but a low **absolute** composite index — lower than GLM-5.1's 32 (repo 71.4) and far below closed-weights flagships. With no standalone TB/SWE/GPQA/HLE/GDPval figures for 3.5, quality dims are floored at the open-weights percentile and capped for the missing absolutes.

- **Tool use: 68/100.** Intelligence Index 14 (#6/65 open-weights, median 8) strong for open weights; capped hard by NO standalone Terminal-Bench / GDPval-AA-Elo / Tau3 / OSWorld figure and the low absolute index. (Repo Muse rater: 72.)
- **Reasoning: 60/100.** Intelligence Index 14 + "reasoning model" tag; capped by no GPQA / HLE / CritPt / AA-Omniscience / GDPval figure and low absolute index vs closed-weights flagships. (Repo Muse rater: ~68–70.)
- **Context window: 72/100.** 256,000 tokens (200K-class; ≥200K, clears 128K caveat, below 1M); no retrieval-at-window proof.
- **Multimodal: 75/100.** Text + image input, text output (+image-in); image support in the mid-band; no audio/video/PDF.
- **Coding: 64/100.** Intelligence Index 14 (composite includes coding) + "reasoning coding model"; capped by no SWE-bench / DeepSWE / LiveCodeBench / SciCode figure and low absolute index.
- **Cost efficiency: 38/100.** $1.50/$7.50 per 1M (~$2.34/MTok blended; $0.44/Index task). Not free; above the <$1 frontier cluster and below $10–$50 closed frontier; noFreeId.
- **Overall Score: 68/100.** (68 + 60 + 72 + 75 + 64) / 5 = 339 / 5 = 67.8 → 68.

> ⚠️ **Reconciliation note:** Repo AI-Rankings average for this model is **72.5** (audit/model-comparison.md v4, 2026-09-17). My figure is **68** — the open-weights-class tension: 72.5 reflects the generous "#6/65 open-weights" percentile framing + multimodal vision + 256K context + 149 tok/s; my 68 anchors on the **absolute** Intelligence Index = 14 (low vs closed-weights flagships 26–39) and floors every quality dim for the absence of standalone TB/SWE/GPQA/HLE/GDPval figures. Both preserved.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis Mistral Medium 3.5 model page, April 2026; DesignForOnline April-2026 review; repo `meta.json`). Anchored on AA Intelligence Index v4.3.2 = 14 with explicit open-weights-class-vs-absolute-scale reconciliation. Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.