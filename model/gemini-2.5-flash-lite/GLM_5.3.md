# Gemini 2.5 Flash-Lite — findings by GLM 5.3

- Source: Google (`gemini-2.5-flash-lite`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's cheapest, fastest 2025 workhorse (deprecated line: a Sep-2025 refresh exists) — a non-reasoning multimodal model for very-high-volume tasks. Top use case: bulk multimodal input processing at minimal cost and latency.
- **Provider / access:** Google Gemini API `gemini-2.5-flash-lite` (AA lists 1 provider).
- **Release / knowledge:** 2025-06-17; knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-flash-lite` (no OpenCode Zen Free ID; superseded on Zen by the Gemini 3.x Flash-Lite line).
- **Context window:** 1M tokens (Artificial Analysis model page).
- **Modalities:** text, image, speech (audio), and video in / text out (AA); non-reasoning variant benchmarked (a thinking variant exists in the family); tool calls via function calling (Gemini API generation); JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** $0.10 in / $0.40 out per 1M, cache discount 90% (AA; blended $0.07/1M at 7:2:1). Output speed 270.2 tok/s — the fastest measured in its class — TTFT 0.30s.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau2 / Tau3 / GDPval-AA / Claw-Eval / Toolathlon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **7 (estimated), #56/75 among non-reasoning models** (AA model page; below the class median of 9)
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: **no verified public score found** (BenchLM has no separate Flash-Lite page — its slug redirects to the Flash variant)

Coding:

- SWE-bench / LiveCodeBench / SciCode / Vibe Code Bench / AA Coding Index: **no verified public score found**

Long context:

- 1M window verified (AA); no public MRCR/RULER/GraphWalks value — no long-context retrieval score found.

Speed / efficiency (AA):

- Output speed **270.2 tok/s** (well above class median 102.6), TTFT **0.30s** (very competitive).

### Normalized scores (1–100)

- **Tool use: 40/100.** Zero verified agentic benchmark rows; standard function calling keeps it above the floor — provisional score.
- **Reasoning: 42/100.** AA Intelligence Index 7 sits below even the non-reasoning class median (9); no GPQA/HLE/LCR rows exist — provisional.
- **Context window: 93/100.** 1M verified = ≥1M tier; no retrieval-quality evidence at length.
- **Multimodal: 85/100.** Text+image+speech+video input (top-tier breadth), text out; no independent depth benchmarks found for this variant.
- **Coding: 35/100.** No verified coding rows at all — provisional floor-plus, consistent with a bulk-throughput (not coding) model.
- **Cost efficiency: 97/100.** $0.10/$0.40 per 1M with 90% cache discounts sits at the methodology's cheapest anchor ($0.10/$0.20 = 97–99), and 270 tok/s with 0.30s TTFT adds exceptional throughput value.
- **Overall Score: 59/100.** Half-up mean of the five quality dims (40+42+93+85+35)/5 = 59.0 — a pure cost/latency play for multimodal input pipelines; unsuitable for reasoning, coding, or agentic work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (Artificial Analysis, BenchLM redirect behavior); scores are normalized 1–100 interpretations, not official vendor scores. Dimension scores marked provisional rest on class/index evidence only.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
