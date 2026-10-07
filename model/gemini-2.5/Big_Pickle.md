# Google Gemini 2.5 — findings by Big Pickle

- Source: Google/Gemini 2.5 Pro (`google/gemini-2.5-pro`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 (family flagship served as `gemini-2.5-pro`)
- **Short description:** Google DeepMind's March-2025 reasoning flagship — native multimodal (text/image/audio/video in), 1M context, thinking tokens. Now a legacy, access-limited tier superseded by the Gemini 3.x generation.
- **Provider / access:** Google Gemini API `gemini-2.5-pro` (Chat Completions-compatible), Vertex AI, OpenRouter `google/gemini-2.5-pro`. Per Gemini API docs this is a legacy/access-limited model as of 2026-10.
- **Release / knowledge:** experimental 2025-02-05 (`gemini-2.5-pro-exp-03-25` previewed 2025-03-25); GA 2025-06-17. Knowledge cutoff 2025-01-31.
- **IDs:** `google/gemini-2.5-pro` (OpenRouter), `gemini-2.5-pro` (Gemini API). No Free ID (flagged `noFreeId` in `meta.json`).
- **Context window:** 1,048,576 (1M) input; 65,536 max output (Google docs / OpenRouter).
- **Modalities:** text, image, audio, video, file in; text out; thinking (reasoning tokens billed as output); tool calls; JSON mode.
- **Pricing (as of 2026-10-07):** $1.25 in / $10.00 out per 1M (prompts ≤200K); $2.50/$15.00 above 200K (Google AI Studio pricing, verified 2026-10-04 in `meta.json`; cached input $0.13–0.31/1M). Paid only.
- **Architecture:** proprietary (params undisclosed); MoE unconfirmed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **30.3%**; Terminal-Bench (original): **32.6%** (anotherwrapper aggregator from public boards, 2026-09)
- τ²-Bench Airline: **61.3%** (OpenRouter measured, via serenitiesai)
- OSWorld-Verified: **45.8%** (public boards via anotherwrapper)
- AA Agentic Index: **3.5** (Artificial Analysis via OpenRouter — weak, 55th of 70)
- GDPval / Tau3-Banking / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84–86.4%** (Google report 84% / 86.4% with tools; aggregators 79.9–84.8% across harnesses — all recorded)
- HLE: **17.8%** (gemini-2.5-pro); **21.6%** (preview-06-05) (public boards via anotherwrapper)
- MMLU-Pro: **86.2%** (pricepertoken); 84.0% (serenitiesai)
- MRCR: **93%** (short window); MRCR 1M: **58%** / MRCR 1M pointwise: **82.9%** (public boards)
- ARC-AGI-1 Verified: **16–31.3%**; ARC-AGI-2: **4.9%**; ARC-AGI (orig): **48%** (arcprize/aggregators)
- FrontierMath: **10.3–14.1%**; AIME 2025: **83–88%**; SimpleQA: **50.8–54%** (aggregators)
- Chatbot Arena Elo: **1446–1465** (LMSYS)
- Artificial Analysis Intelligence Index: no current verified value found (AA page not directly read)

Coding:

- SWE-bench Verified: **63.8%** (Google launch, custom agent setup); **63.2–67.2%** across aggregators (June-2025 preview 06-05 listed at 67.2%)
- LiveCodeBench: **58.0%** (serenitiesai); LiveCodeBench V5: **75.6%** (anotherwrapper)
- SciCode: **42.8%**; Vibe Code Bench: **40%** (public boards)
- HumanEval+: **89.0%**; Arena Code Elo: **1226** (LMSYS/boards)
- DeepSWE / SWE-Pro: no verified public score found

Long context:

- MRCR 93% at standard window, **58% at 1M** (82.9% pointwise at 1M) — real 1M retrieval, short of the ≥98%-at-512K+ bar for a 100.

### Normalized scores (1–100)

- **Tool use: 60/100.** τ²-Bench Airline 61.3% is solid but Terminal-Bench ~30–33%, OSWorld 45.8% and AA Agentic Index 3.5 keep it in the mid band; no Tau3/GDPval/Claw-Eval evidence to lift it.
- **Reasoning: 76/100.** GPQA Diamond ~84–86% and MMLU-Pro 86.2 are strong-but-not-frontier; capped by HLE 17.8%, ARC-AGI-2 4.9%, FrontierMath ~14%, and MRCR@1M 58%.
- **Context window: 95/100.** 1M total / 65,536 output is the ≥1M tier; MRCR 1M 58% (82.9% pointwise) prevents the ≥98%-at-512K claim needed for 100.
- **Multimodal: 92/100.** Text/image/**audio**/video/file in, text out — audio input puts it in the 90–100 band; MMMU 79.6–84.2%, VideoMME 84.8%.
- **Coding: 74/100.** SWE-bench Verified 63.8% and LiveCodeBench 58–75.6% are solid mid-band; capped by SciCode 42.8%, Vibe 40%, Terminal-Bench ~30%.
- **Cost efficiency: 72/100.** $1.25/$10.00 (≤200K), $2.50/$15 above — input is 88-band cheap but $10 output sits well above the $4.25 reference; no free tier.
- **Overall Score: 79.4/100.** (60+76+95+92+74)/5 = 79.4 — best-fit: legacy 1M-context multimodal all-rounder with audio/video input; cheaper current-generation models beat it on agentic coding.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-07
- Method: fresh public web research (Google AI / Gemini API docs and launch posts, OpenRouter, LMSYS/Arena boards, Artificial Analysis, benchmark aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
