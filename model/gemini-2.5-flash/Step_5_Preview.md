# Gemini 2.5 Flash — findings by Step 5 Preview

- Source: Google (`gemini-2.5-flash`)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's June-2025 hybrid-reasoning Flash model (GA 2025-06-17) — the price-performance workhorse of the Gemini 2.5 family with a controllable thinking budget, a 1M-token multimodal context and native tool use. Now a legacy model: the Gemini API limits 2.5-model access to existing users (new projects are directed to 3.5 Flash-Lite / 3.8 Flash), and the Vertex listing carries an October 2026 retirement date. Artificial Analysis marks the model deprecated and lists it as available through 2 providers.
- **Provider / access:** Gemini API / AI Studio / Vertex AI `gemini-2.5-flash` (existing users); OpenRouter `google/gemini-2.5-flash`. No OpenCode Zen Free ID found.
- **Release / knowledge:** GA 2025-06-17 (preview 05-20; 09-2025 refresh); knowledge cutoff January 2025 (re-confirmed on AA 2026-10-19).
- **IDs:** `gemini-2.5-flash` (stable); `gemini-2.5-flash-preview-09-2025` (shut down).
- **Context window:** 1,048,576 tokens; 65,536 max output.
- **Modalities:** Text, image, audio and video in → text out (AA confirms text/image/speech/video input); dynamic thinking budget; function calling; Grounding with Google Search, Code Execution, URL context; SFT supported.
- **Pricing (as of 2026-10-19):** $0.30 / MTok input, $2.50 output (single tier regardless of input size, thinking vs non-thinking pricing removed June 2025) — re-confirmed on AA; blended ~$0.33 at a 7:2:1 ratio with ~90% cache discount; first-party AI Studio listings observed at $0.62/$5.00 blended.
- **Architecture:** Proprietary; distilled from the 2.5 Pro teacher (sparse k-distribution distillation).
- **Speed (new in the 2026-10-19 re-run):** 200.7 output tokens/s (AA, Google API; #7/59 in its price class) and 0.47 s time-to-first-token — among the fastest non-reasoning models tracked.

### Raw benchmarks found

Reasoning / knowledge (official model card + AA's current runs):

- GPQA Diamond: **82.8%** (model card); AA's reasoning-config runs read 68.3–80.8%; Vals' harness: 57.6%; **AA non-reasoning run: 68.3%** (re-confirmed 2026-10-19)
- HLE (no tools): **11.0%** (card) / 12% (AA); **AA non-reasoning run: 4.7%** (new in the re-run); AA-Omniscience index −30 to −42.6 (accuracy 26.1%, hallucination 93.0% — re-confirmed)
- AIME 2025: **60.3%** (AA); MATH-500: 93.2%; FACTS Grounding: 85.3%; SimpleQA: 26.9%
- Artificial Analysis Intelligence Index: **13** (reasoning) / 10 (non-reasoning) — re-confirmed 2026-10-19
- IFBench: **39%** (AA — weak instruction following) — re-confirmed

Coding:

- SWE-bench Verified: **48.9%** single-attempt / 60.3% multiple-attempts (card); mini-swe-agent harness: **28.7%** (independent); AA run: 60.4%
- LiveCodeBench: **74.2%** (tech report, Jan–May 2025 UI) / 63.9% v5 (AA); Aider Polyglot: 61.9%
- Terminal-Bench Hard: **12.1%** (AA); SWE-bench Pro / DeepSWE / Vibe Code Bench: **no verified public score found**

Agentic / tool use:

- τ²-Bench: **14.9%** (AA) — re-confirmed 2026-10-19; MCP-Atlas / BrowseComp / GDPval-AA / Toolathlon / Claw-Eval: **no verified public score found**

Multimodal:

- MMMU: **79.6–79.7%** (card/AA); VideoMMMU: 79.2%; Vibe-Eval (Reka): 65.4%
- **New in the 2026-10-19 re-run:** AA-MMMU-Pro **65.5%** (the harder MMMU-Pro suite); Design Arena Website **1115** (OpenRouter, frontend-design-via-code)

Long context (its standout legacy strength):

- MRCR v2 8-needle: **54.3% @128K** (card); 21.0% @1M pointwise
- LOFT (hard ≤128K): **82.1%**; **58.9% @1M**; AA-LCR: **65%** (AA, reasoning config) / **49.9%** (AA, non-reasoning config — new in the re-run)

### Normalized scores (1–100)

Re-run verdict 2026-10-19: **scores unchanged.** The new AA/BenchLM rows are the non-reasoning-variant readings (GPQA 68.3%, HLE 4.7%, AA-LCR 49.9%, Index 9.8) plus two new benchmarks (MMMU-Pro 65.5%, Design Arena 1115) and speed data (200.7 tok/s); they confirm each existing score without moving a dimension — the model's profile (mid-band agentics, strong 1M multimodal context, mid-pack coding) is identical under the independent re-read.

- **Tool use: 40/100.** τ²-Bench at 14.9% (re-confirmed) and the absence of any MCP-Atlas/BrowseComp/GDPval/Claw-Eval row leave almost no agentic evidence, and what exists sits at the bottom of the AA board — the agentic tool-use stack of this generation has been thoroughly superseded.
- **Reasoning: 58/100.** GPQA 82.8% on the card (68.3% on AA's non-reasoning config) and MATH-500 93.2% are mid-band, but HLE 4.7–12%, AIME 60.3%, IFBench 39% and the AA Intelligence Index of 10–13 put it clearly below the mid-tier reference.
- **Context window: 85/100.** 1M-token window with 65K output is the ≥1M tier and was SoTA on LOFT/MRCR at 128K at launch (82.1% / 54.3%); the 21.0% 1M pointwise MRCR and AA-LCR 49.9–65% keep it in the middle of the band rather than the top.
- **Multimodal: 88/100.** Text + image + audio + video in → text out is the top modality band, anchored by MMMU 79.6–79.7% / AA-MMMU-Pro 65.5% and VideoMMMU 79.2% with 3-hour video comprehension; no non-text output.
- **Coding: 55/100.** SWE-bench Verified 48.9–60.4% (28.7% on the independent mini-swe harness) and LiveCodeBench 63.9–74.2% are mid-pack for a 2025 Flash model; Terminal-Bench Hard 12.1% and no Vibe/DeepSWE data confirm the agentic-coding gap.
- **Cost efficiency: 92/100.** $0.30/$2.50 per MTok in a single tier (blended ~$0.33) maps to the methodology's ~$0.60/$2.20 ≈ 92 tier — the Pareto point of its generation, still cheap by current standards; AA now flags it as "somewhat expensive" versus current non-reasoning models, which is the honest 2026 read.
- **Overall Score: 65/100.** Best-fit recommendation: a legacy 1M-context multimodal workhorse still useful for high-volume video/image understanding at Flash pricing; new projects should use Gemini 3.5/3.8 Flash, which beat it across every dimension.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research, re-run 2026-10-19 — Artificial Analysis deprecated page (Index 10, speed/latency, pricing) + BenchLM's 12-row aggregate (MMMU-Pro, Design Arena, AA-LCR non-reasoning, τ² re-checks); original run used the Google Gemini 2.5 model card PDF + developers blog + API docs, Vals AI and BenchmarkRegistry. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2.5_Flash_Lite.md`, using the same headings.
