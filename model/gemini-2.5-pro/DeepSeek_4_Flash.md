# Gemini 2.5 Pro — findings by DeepSeek 4 Flash

- Source: Google/Gemini 2.5 Pro
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's 2025-era Pro reasoning model with a 1M window and full media input; superseded by Gemini 3+ and now weak on modern agentic/reasoning benchmarks.
- **Provider / access:** Google DeepMind / Gemini API, Vertex AI, OpenRouter (`google/gemini-2.5-pro`); no Free ID.
- **Release / knowledge:** 2025 generation; knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-2.5-pro`
- **Context window:** 1,048,576 tokens (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text/image/audio/video/PDF in; text out; tool calls yes.
- **Pricing (as of 2026-10-01):** $1.25 in / $10.00 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Browsing suite **54.1%**; Gert Labs **42.01%**
- GDPval-AA **616 Elo** (AA normalized 0.0%); AA Agentic Index **3.5%**
- Terminal-Bench / Claw-Eval / Tau3 / OSWorld: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond **83%** (report) / AA **84.4%**
- HLE **18.8%** (report) / AA-HLE **22.5%**
- AA-LCR **69.0%**; CritPt **2.6%**; AA Index **16.1%**
- AA-Omniscience Accuracy / Hallucination Rate: **39.1% / 90.9%** (Omniscience Index −16.3)
- AA-IFBench **48.7%**; FrontierMath v2 Tier 4 **4.17%**

Coding:

- SWE-bench Verified **63.8%** (Vals 54.4%); AA-SciCode **46.3%**; AA Coding Index **33.3%**; Vibe Code Bench **0.40%**

Long context:

- AA-LCR 69.0%; no public MRCR full-window number found

Multimodal:

- AA-MMMU-Pro **74.9%**; Design Arena **1175 Elo**

### Normalized scores (1–100)

- **Tool use: 45/100.** Browsing 54.1% is mid; GDPval 616/AA Agentic Index 3.5% show very weak modern agentic ability.
- **Reasoning: 48/100.** GPQA 83–84% is decent but HLE 18.8–22.5%, AA Index 16.1% and CritPt 2.6% are weak.
- **Context window: 80/100.** 1M window but AA-LCR only 69%.
- **Multimodal: 85/100.** Full media input with MMMU-Pro 74.9%; text-only output.
- **Coding: 55/100.** SWE 63.8% and Coding Index 33.3% with Vibe Code 0.4% reflect an older generation.
- **Cost efficiency: 82/100.** $1.25/$10 per 1M is decent but not competitive in 2026.
- **Overall Score: 63/100.** Mean of (45 + 48 + 80 + 85 + 55) / 5 = 62.6 → 63. Best-fit: legacy long-context multimodal document tasks.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, OpenRouter, Artificial Analysis, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
