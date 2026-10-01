# Gemini 1.5 Pro — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/gemini-1-5-pro`), BenchLM (`https://benchlm.ai/models/gemini-1-5-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro (Sep '24)
- **Short description:** Google's September 2024 multimodal model with 2M context window and native multimodal processing. Deprecated — Google recommends Gemini 2.0 Flash or newer.
- **Provider / access:** Google API (Vertex AI, AI Studio)
- **Release / knowledge:** Released September 24, 2024; knowledge cutoff August 2024
- **IDs:** `google/gemini-1.5-pro` (per `meta.json`); `gemini-1-5-pro` (AA slug); `gemini-1-5-pro` (BenchLM slug)
- **Context window:** 2M total (per AA model page and BenchLM); `meta.json` says 2,000,000 (2M) — **consistent**
- **Modalities:** Text, image, speech, and video input; text output (per AA model page); `meta.json` says "Text, image, audio, video in; text out" — **consistent**
- **Pricing (as of 2026-10-01):** $0.00 (free tier via AI Studio); paid equivalent ~$1.25 input / $5.00 output per 1M tokens
- **Reasoning:** No (non-reasoning model)
- **Speed:** N/A (per AA — "Unknown out of 4 units for Speed")
- **Status:** Deprecated — AA page notes: "Google has launched a newer release, Gemini 2.0 Flash (Feb '25). We suggest considering it instead."

### Raw benchmarks found

> Sources: Artificial Analysis (`https://artificialanalysis.ai/models/gemini-1-5-pro`), BenchLM (`https://benchlm.ai/models/gemini-1-5-pro`). BenchLM covers 5 of 618 benchmarks.

Coding:

- **AA Coding Index:** **23.6%** — (Artificial Analysis model benchmarks via BenchLM)

Multimodal & grounded:

- **AA-MMMU-Pro:** **55.0%** — (Artificial Analysis model benchmarks via BenchLM)

Knowledge:

- **Artificial Analysis Intelligence Index:** **7.9%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-GPQA Diamond:** **58.9%** — (Artificial Analysis model benchmarks via BenchLM)
- **AA-HLE:** **4.6%** — (Artificial Analysis model benchmarks via BenchLM)

Agent / tool use:
- No verified public scores found on BenchLM for BrowseComp, GDPval-AA, OSWorld, or other agentic benchmarks.

Reasoning:
- No verified public scores found for GPQA Diamond (with tools), ARC-AGI, or other reasoning benchmarks beyond what is listed above.

### AA Intelligence Index

- **Artificial Analysis Intelligence Index:** **8 (estimated)** — (AA model page, rank #124/300, median: 7). AA page notes: "Estimate (independent evaluation forthcoming)." The BenchLM-listed AA Intelligence Index is 7.9% (verified, via AA model benchmarks via BenchLM).
- Ranked #124/300 (estimated), placing it above average among non-reasoning models in a similar price tier (median: 7).

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: moderate — 5 public benchmarks found on BenchLM (from Artificial Analysis model benchmarks). AA Intelligence Index is estimated on the AA page; the 7.9% figure is from BenchLM's reporting of AA benchmarks.

- **Tool use: 30/100.** No verified agentic benchmarks (BrowseComp, GDPval, OSWorld) found on BenchLM or AA. The model is deprecated and non-reasoning. No agentic tool use benchmarks to score. Estimated low based on absence of verified agentic benchmarks.

- **Reasoning: 30/100.** AA Intelligence Index estimated at 8 (rank #124/300, median: 7) — below average. AA-GPQA Diamond at 58.9% is below the 60% frontier range and below the 60-80% mid-range. AA-HLE at 4.6% is very low. No ARC-AGI, CritPt, or FrontierMath scores found. The estimated AA Intelligence Index of 8 (vs. frontier models scoring 55+) places this firmly in the low-tier reasoning category.

- **Context window: 100/100.** 2M tokens per AA model page and BenchLM (confirmed 2,000,000). ≥1M tier → 95-100 range; at 2M, scores 100. Meta.json also says 2M — **consistent**.

- **Multimodal: 90/100.** Supports text, image, speech, and video input (per AA model page: "Supports: text, image, speech, and video"). AA-MMMU-Pro at 55.0% (AA, via BenchLM) is a multimodal vision benchmark result, confirming multimodal capability. Multiple input modalities (text+image+speech+video) places this in the high multimodal range.

- **Coding: 25/100.** AA Coding Index at 23.6% (AA, via BenchLM) is very low. No SWE-bench, Terminal-Bench, or DeepSWE scores found. As a September 2024 release, it has been superseded by newer models with significantly better coding performance.

- **Cost efficiency: 97/100.** $0.00 per 1M tokens (free via AI Studio for many users); paid equivalent ~$1.25/$5.00. At $0.00, this scores 97-100 in the methodology ($0 = 100, ~$0.10/$0.20 = 97–99).

- **Overall Score: 55/100.** Half-up mean of five quality dimensions: (30 + 30 + 100 + 90 + 25) / 5 = 275 / 5 = 55.0 → 55. Gemini 1.5 Pro (Sep '24) is a legacy model with limited public benchmark coverage (5 of 618 on BenchLM). Strong multimodal capabilities (text+image+speech+video, 2M context) but poor coding (AA Coding Index 23.6%) and reasoning (AA-II avg. 8 est., GPQA 58.9%, HLE 4.6%) by 2026 standards. Deprecated in favor of Gemini 2.0 Flash. Meta.json correctly reports 2M context and multimodal capabilities — consistent with AA page.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-02
- Method: public internet research via Artificial Analysis and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `Google_Gemini_1.5_Pro_Tech_Report.md`, using the same headings.

---