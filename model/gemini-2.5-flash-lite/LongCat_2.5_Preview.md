# Gemini 2.5 Flash-Lite — findings by LongCat 2.5 Preview

- Source: Google (`google/gemini-2.5-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's budget-tier non-reasoning model in the Gemini 2.5 family, optimized for high-volume, low-latency workloads with multimodal input support.
- **Provider / access:** Google AI Studio / Gemini API (`https://generativelanguage.googleapis.com/v1beta`); OpenCode Zen `google/gemini-2.5-flash-lite`. Chat Completions-compatible via Google's API.
- **Release / knowledge:** Released 2025-06-17; knowledge cutoff Jan 1, 2025.
- **IDs:** `google/gemini-2.5-flash-lite` (Zen); Gemini API model ID `gemini-2.5-flash-lite`
- **Context window:** 1M tokens (verified via Artificial Analysis)
- **Modalities:** text, image, speech, video in; text out; non-reasoning (no chain-of-thought); tool calls supported
- **Pricing (as of 2026-09-29):** $0.10/1M input, $0.40/1M output, 90% cache discount (blended ~$0.07/1M); paid, very competitive.
- **Architecture:** proprietary; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **7 / #56 of 75** in class (artificialanalysis.ai, v4.3.2; below average, median 9)
- Terminal-Bench / Tau3 / GDPval / Claw-Eval: no verified public score found for this variant

Reasoning / knowledge:

- AA Intelligence Index: **7** (see above)
- GPQA / HLE / AIME / CritPt: no verified public score found for this variant
- AA-Omniscience: no standalone verified public score found

Coding:

- SWE-bench / LiveCodeBench / SciCode: no verified public score found for this variant

Long context:

- 1M context window; AA-LCR v1.1 contributes to Intelligence Index 7; no standalone MRCR/RULER score reported

Speed (verified via Artificial Analysis):

- Output speed: **266.5 tok/s** (#2 of 75 in class)
- Time to first token: **0.31 s**

### Normalized scores (1–100)

- **Tool use: 35/100.** AA Intelligence Index 7 is well below average and no specific tool benchmarks are publicly available for this variant; agentic capability is limited.
- **Reasoning: 35/100.** Non-reasoning model with AA Intelligence Index 7 (below the class median of 9); no GPQA/HLE/AIME scores found to offset the low composite.
- **Context window: 95/100.** 1M tokens places it in the top tier (≥1M = 95–100); no long-context retrieval score reported to confirm 98%+ accuracy at 512K+.
- **Multimodal: 90/100.** Text, image, speech, and video input with text output fits the 90–100 tier (audio in / non-text out); no audio output.
- **Coding: 30/100.** No verified public coding benchmarks for this variant; the low AA Intelligence Index suggests limited coding capability.
- **Cost efficiency: 95/100.** $0.10/$0.40 per 1M (blended ~$0.07 with 90% cache discount) is among the cheapest in its class; very strong price-to-performance for high-volume workloads.
- **Overall Score: 57/100.** Mean of (35 + 35 + 95 + 90 + 30) / 5 = 57.0 → 57. Best fit: high-volume, latency-sensitive multimodal workloads on a budget; not recommended for complex reasoning or agentic tasks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-09-29
- Method: public internet research (Artificial Analysis, Google AI docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
