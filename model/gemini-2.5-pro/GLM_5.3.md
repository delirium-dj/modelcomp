# Gemini 2.5 Pro — findings by GLM 5.3

- Source: Google (`gemini-2.5-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's June 2025 Pro reasoning model — the former frontier, now several generations behind the Gemini 3.x line and deprecated on AA's tracking. Top use case: cheap long-context multimodal analysis where current-gen intelligence isn't required.
- **Provider / access:** Google AI Studio/Gemini API (2 providers per AA); **no OpenCode Zen ID** in the current Zen list.
- **Release / knowledge:** 2025-06-05; knowledge cutoff January 2025 (AA).
- **IDs:** Google `gemini-2.5-pro` (no Zen ID; no Free ID)
- **Context window:** 1M tokens total (verified via AA technical specs and BenchLM).
- **Modalities:** text/image/speech/video in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** $1.25 in / $10.00 out per 1M on Google's API (cache discount 90%).
- **Architecture:** proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **54.1%** (BenchLM `gemini-2-5-pro`)
- GDPval-AA: **616 Elo** (BenchLM; normalized 0.0% — near-total failure on current agentic work tasks)
- AA Agentic Index: **3.5%**; Gert Labs **42.01%** (BenchLM)
- Terminal-Bench / Claw-Eval / Tau3 / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **83.0%** (BenchLM; AA harness 84.4%)
- HLE: **18.8%** / AA-HLE **22.5%** (BenchLM)
- AA-LCR: **69.0%**; CritPt **2.6%** (BenchLM)
- Artificial Analysis Intelligence Index: **16** (AA #159/211 — lower end of class)
- Omniscience Accuracy / Hallucination Rate: **39.1% / 90.9%** (BenchLM — very high hallucination, negative Omniscience Index)
- MMLU-Pro: **no verified public score found** for this ID on BenchLM; FrontierMath v2 Tier 4 **4.2%** (BenchLM)

Coding:

- SWE-bench Verified: **63.8%** (BenchLM; Vals harness 54.4%)
- SciCode / AA-SciCode: **46.3%**; AA Coding Index **33.3%**; Vibe Code Bench **0.40%** (BenchLM)
- LiveCodeBench / DeepSWE: **no verified public score found** for this ID

Long context:

- 1M window (AA/BenchLM); AA-LCR 69.0%; no MRCR/RULER retrieval number in current coverage.

Multimodal (grounding):

- MMMU-Pro **74.9%** (AA-MMMU-Pro via BenchLM); Design Arena Website **1178**; IFBench **48.7%** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 42/100.** GDPval 616 (normalized 0.0%) and AA Agentic Index 3.5% show the 2025-era agent stack no longer competes; Tau2 54.1% is the only mid-band marker.
- **Reasoning: 58/100.** GPQA 83–84% is well under the 90% frontier bar; HLE 19–23%, CritPt 2.6%, AA Index 16 and a 90.9% hallucination rate are weak.
- **Context window: 95/100.** 1M total context (top tier band); no verified current retrieval-at-512K number for 100.
- **Multimodal: 88/100.** Text+image+speech+video input (90–100 band); MMMU-Pro 74.9% is dated, keeping it under 90.
- **Coding: 55/100.** SWE-bench V 63.8%, SciCode 46.3%, Coding Index 33.3% and Vibe 0.4% are far below current frontier refs.
- **Cost efficiency: 75/100.** $1.25/$10 per 1M — reasonable input pricing with 2.4× output multiple; fast (125 tok/s) and concise.
- **Overall Score: 67.6/100.** (42 + 58 + 95 + 88 + 55) / 5 = 67.6. Best-fit: legacy long-context workhorse only; every current Gemini Flash generation beats it on intelligence.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
