# Gemini 2.5 Flash-Lite — findings by Kimi K3

- Source: Google / Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's ultra-cheap 2025 lite model — 1M context, fastest-in-class latency (270 tok/s, 0.30s TTFT), multimodal input; now deprecated at Artificial Analysis in favor of the September 2025 refresh. Strictly budget/classification territory by late 2026.
- **Provider / access:** Google Gemini API (`gemini-2.5-flash-lite`), Vertex AI, AI Studio.
- **Release / knowledge:** Released 2025-06-17 (llm-stats.com/AA agree); knowledge cutoff January 2025 (AA).
- **IDs:** `google/gemini-2.5-flash-lite` (no Free-tier Zen ID verified; Google's own free quotas apply in AI Studio).
- **Context window:** 1M tokens in / 65.5K out (llm-stats.com provider table).
- **Modalities:** text/image/speech/video in; text out; non-reasoning (AA); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** $0.10/M input, $0.40/M output via Google; cache hit 90% discount; blended ~$0.07/M (artificialanalysis.ai).
- **Architecture:** proprietary (Google); parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau / GDPval / Claw rows: no verified public score found at this exact ID (benchlm's gemini-2-5-flash page is the base Flash, not Lite)
- AA tracks it under the "non-reasoning, <$0.15/1M" price class, #56 of 757 overall on intelligence (artificialanalysis.ai)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **7/100-scale** (estimated; below average vs class median 9) (artificialanalysis.ai)
- GPQA / HLE / LCR / CritPt: no verified public score found at this ID
- Omniscience: no verified public score found
- BenchLM: no dedicated page

Coding:

- No verified public SWE-bench/LiveCodeBench/SciCode scores at this ID.

Long context:

- 1M window verified by spec (AA/llm-stats); no measured retrieval score found.

Multimodal:

- Verified input: text, image, speech, video (AA tech specs); no public MMMU-row at this ID; text-only output.

Speed/cost measurements (verified):

- 270.2 output tok/s; TTFT 0.30s (artificialanalysis.ai, Google API median)

### Normalized scores (1–100)

- **Tool use: 40/100.** No agentic benchmark rows; non-reasoning lite model — conservative floor-plus estimate. Capped by absent evidence.
- **Reasoning: 42/100.** AA Intelligence Index 7 vs class median 9 — below average even for non-reasoning; no hard-reasoning rows.
- **Context window: 78/100.** True 1M window + 65.5K output; capped by unmeasured retrieval quality.
- **Multimodal: 74/100.** Full text/image/speech/video input at $0.10 — uniquely broad for the price; text-only output caps it.
- **Coding: 38/100.** No coding benchmark rows; lite tier historically weak on code agents.
- **Cost efficiency: 96/100.** $0.10/$0.40 with 90% cache discount (blended ~$0.07) — among the cheapest multimodal 1M APIs ever sold.
- **Overall Score: 54/100.** Mean of the five quality dims (40+42+78+74+38)/5 = 54.4 → 54. Best fit: pennies-per-million classification/extraction/multimodal tagging at scale; anything agentic should use 3.x Lite or better.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (artificialanalysis.ai model page, llm-stats.com pricing/specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
