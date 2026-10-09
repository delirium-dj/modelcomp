# Gemini 3.1 Flash-Lite — findings by Step 5 Preview

- Source: Google (`gemini-3.1-flash-lite`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's fastest and most cost-efficient Gemini 3 model (preview 2026-03-03, GA 2026-05-07) — built on the Gemini 3 Pro base for high-volume, latency-sensitive work (classification, translation, summarization, routing) at $0.25/$1.50 per MTok. Delivers Gemini-2.5-Flash-matching quality at 2.5x faster time-to-first-answer and 45% higher output speed (per Artificial Analysis). The preview endpoint was shut down 2026-05-25 in favor of the GA ID.
- **Provider / access:** Gemini API / AI Studio / Vertex AI `gemini-3.1-flash-lite`; OpenRouter. No OpenCode Zen Free ID found.
- **Release / knowledge:** 2026-03-03 (preview) / 2026-05-07 (GA); knowledge cutoff January 2025.
- **IDs:** `gemini-3.1-flash-lite` (GA); `gemini-3.1-flash-lite-preview` (shut down).
- **Context window:** 1,048,576 tokens; 65,536 max output.
- **Modalities:** Text, image, video, audio and PDF in → text out; thinking on by default (controllable budget); function calling, file search, search grounding, code execution, URL context; ASR/translation inherited from the family.
- **Pricing (as of 2026-10-09):** $0.25 / MTok input (text/image/video; audio $0.50), $1.50 output; cache $0.025; Batch halves both.
- **Architecture:** Proprietary; based on the Gemini 3 Pro lineage (distilled/efficient variant).

### Raw benchmarks found

Reasoning / knowledge (official model card + independent runs):

- GPQA Diamond: **86.9%** (card, High); AA: 82.2–84.3%; BenchmarkList: 81.1%
- HLE (no tools): **16.0%** (card) / 17.2% (ARMES) — the efficiency-tier ceiling
- LiveCodeBench: **72.0%** (card) / 80.1% (BenchmarkList)
- MMLU-Pro: **86.2%** (AA); MMMLU: 88.9% (card); SimpleQA Verified: 43.3% (card)
- Artificial Analysis Intelligence Index: **15.6–16** (rebased); Vals Index: 15.46%
- FACTS Benchmark Suite: 40.6% (card); CharXiv Reasoning: 73.2% (card)

Coding:

- SWE-bench Verified: **62.8%** (AA, high — #60/72)
- Terminal-Bench Hard: **24.2%** (AA); Terminal-Bench 2.1: 34.1% (AA); Terminal-Bench 2.0: 24.7%
- Vibe Code Bench v1.1: **0.0%** (Vals); Code Migration: 4.6% (Vals); FrontierCode: 4.8% (BenchmarkList)
- SWE-bench Pro / DeepSWE / LiveCodeBench Pro: **no verified public score found**

Agentic / tool use:

- MCP-Atlas: **57.1%** (#44/48); τ³-Banking: 9.7% (#99/176); τ²-Bench Telecom: 31.3% (BenchmarkList)
- GDPval-AA / BrowseComp / Toolathlon / Claw-Eval: **no verified public score found**

Multimodal:

- MMMU-Pro: **76.8%** (card) / 82.5% (BenchmarkList); Video-MMMU: **84.8%** (card); MedXpertQA MM etc. per the family card

Long context:

- MRCR v2 8-needle: **60.1% @128K** (card) / **12.3% @1M pointwise**
- AA-LCR: **74.0%** (AA); Arena.ai Elo 1432

### Normalized scores (1–100)

- **Tool use: 52/100.** MCP-Atlas 57.1% is the only real tool-use signal; τ³-Banking 9.7%, τ² Telecom 31.3% and Terminal-Bench 2.1 34.1% sit in the low-mid band, and no GDPval/BrowseComp/Claw-Eval data exists — this is a high-throughput tier, not an agent tier.
- **Reasoning: 66/100.** GPQA 82–87%, MMLU-Pro 86.2% and LiveCodeBench 72–80% are strong for the price class; capped by HLE 16–17%, the AA Intelligence Index of 15.6–16 and a Vals Index of 15.5% — mid-tier by current standards.
- **Context window: 88/100.** 1M-token window in the ≥1M tier, matching Gemini 2.5 Flash's long-context design; MRCR 60.1% at 128K and AA-LCR 74% support it, while the 12.3% 1M pointwise figure and the lack of a 512K+ needle number keep it below the top of the band.
- **Multimodal: 90/100.** Text + image + video + audio + PDF in → text out is the top modality band, anchored by MMMU-Pro 76.8–82.5% and Video-MMMU 84.8% — full-spectrum multimodal input at the lowest tier price.
- **Coding: 62/100.** SWE-bench Verified 62.8% and LiveCodeBench 72–80.1% are mid-pack; Terminal-Bench Hard 24.2%, Vibe Code Bench 0.0% and Code Migration 4.6% confirm the end-to-end and agentic-coding gap.
- **Cost efficiency: 94/100.** $0.25/$1.50 per MTok with $0.025 cache reads and 50%-off batch maps just above the methodology's ~$0.10/$0.20 = 97–99 tier — the cheapest full-multimodal 1M-context model in the Gemini line.
- **Overall Score: 72/100.** Best-fit recommendation: the volume tier — Gemini-2.5-Flash-class quality with full multimodal input and 1M context at $0.25/$1.50 for high-frequency extraction, classification and routing; not for agentic coding.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Google DeepMind Gemini 3.1 Flash-Lite model card + launch blog + GA docs, Artificial Analysis, Vals AI, BenchmarkList, ARMES, TokenCost); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.1_Flash.md`, using the same headings.
