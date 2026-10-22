# Gemini 3.5 Flash-Lite — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gemini-3-5-flash-lite`, 27 rows) computes an overall **49.59/100 (#101 of 972)** and confirms the deep pass (Terminal-Bench 2.1 54.0% / Vals 50.2%, OSWorld-Verified 74%, GDPval-AA 1139 / 24.2%, SWE-bench Pro 54.2%, Vals SWE-bench 75.0% / LiveCodeBench 79.0%, AA-MMMU-Pro 79.0%, MRCRv2 72.2%, AA-LCR 76.0%, AA-GPQA 83.8%, AA-HLE 18.8%, AA Intelligence Index 22.2%). **No score change** (Tool 62 / Reasoning 70 / Context 90 / Multimodal 82 / Coding 70 / Overall 75).

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed from the official Google model card: **Terminal-Bench 2.1 54.0%**, **OSWorld-Verified 74.0%**, GDPval-AA v2 1140 Elo, **SWE-Bench Pro (public) 54.2%**, SWE-bench Verified 75.0% (Vals), LiveCodeBench 79.01% (Vals), **GPQA Diamond 83.84% (Vals) / 83.8% (AA)**, MMLU-Pro 85.84%, HLE 17.5–18.8%, CharXiv 74.5%/76.5%, **GDM-MRCR v2 128k 72.2% / 1M 21.3%**, AA-LCR 76.0%, MMMU-Pro 79.0% (AA) / 83.58% (Vals); official release **2026-07-21**, knowledge cutoff March 2026, pricing **$0.30 in / $0.03 cached / $2.50 out**. Independent: AA Intelligence Index **22 (#39/175, v4.3.2)**, BenchLM overall 51.45 (#91/891), Vals Index 36.71% (#29/43).
> **Conflicts surfaced:** (1) **AA Intelligence Index** — the prior file's **37.4** is a v4.1.1-era reading; the current **v4.3.2 rebase is 22**, which plus HLE 18.8% argues for a lower Reasoning score. (2) **Terminal-Bench 2.1** — 54.0% (official) vs 50.19% (Vals). (3) **MMMU-Pro** 79.0% (AA) vs 83.58% (Vals). (4) **Output speed** 350 (Google) / 419.6 (AA) / 338.3 (gradually.ai) tok/s. (5) **Max output** 64K (official) vs 65,536/66k (Vals).
> **Adjusted dimensions:** Reasoning 72→70 (rebased AA index 22, HLE 17.5–18.8), Context 93→90 (**GDM-MRCR 1M only 21.3%**); Overall 76 → **75**.
> Sources: https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/ · https://benchlm.ai/models/gemini-3-5-flash-lite · https://www.vals.ai/models/google_gemini-3.5-flash-lite · https://artificialanalysis.ai/models/gemini-3-5-flash-lite

## Model card

- **Name:** Gemini 3.5 Flash-Lite (no "Free" wording; a free Google AI Studio tier exists)
- **Short description:** The cheapest and fastest tier of the Gemini 3.5 line, released 2026-07-21 alongside Gemini 3.6 Flash and Gemini 3.5 Flash Cyber. Positioned for high-volume subagent calls, document parsing and agentic search rather than frontier reasoning.
- **Provider / access:** Google — Gemini API, Google AI Studio, Vertex AI (Gemini Enterprise Agent Platform). Proprietary, closed; no self-hosting.
- **Release / knowledge:** 2026-07-21; knowledge cutoff March 2026 (some domains Jan 2025); builds on the Gemini 3.1 Flash-Lite base.
- **IDs:** `gemini-3.5-flash-lite` (also `google/gemini-3.5-flash-lite`). No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens; max output 64K (Vals 66k).
- **Modalities:** text, image, audio, video and PDF input; text output; function calling, structured output and remote MCP tool calls; reasoning yes (minimal thinking by default).
- **Pricing (as of 2026-10-11):** **$0.30 / 1M in, $0.03 cached, $2.50 / 1M out** (90% cache discount; blended ≈$0.33/M).
- **Architecture:** proprietary, closed; based on Gemini 3.1 Flash-Lite; parameter count / dense-vs-MoE undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%** (official) / **50.19%** (Vals); OSWorld-Verified **74.0%** (official)
- GDPval-AA v2: **1140 Elo** (official); AA Agentic Index 15.9%; MLE-Bench 39.2%
- Berkeley/tool-call and Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **83.84%** (Vals) / 83.8% (AA); MMLU-Pro **85.84%** (Vals); HLE 17.5–18.8%; CharXiv 74.5%/76.5%
- Artificial Analysis Intelligence Index **22 (#39/175, v4.3.2)**; AA-Omniscience index 5.2% (hallucination 34.4%)
- ARC-AGI-1 53.5%; ARC-AGI-2 10.3%; CritPt 0.0%

Coding:

- SWE-bench Verified: **75.00%** (Vals, full 500-task); SWE-Bench Pro 54.2% (official); LiveCodeBench **79.01%** (Vals)
- AA-SciCode 41.3%; AA Coding Index 49.3%; Vibe Code Bench v1.1 37.16%; Code Migration 6.15%

Long context:

- **GDM-MRCR v2 8-needle 128k 72.2% but 1M only 21.3%** (official); AA-LCR **76.0%** — the gap shows usable recall is well below the headline 1M window.

Multimodal:

- AA-MMMU-Pro 79.0% (AA); MMMU-Pro 83.58% (Vals); text/image/audio/video/PDF in, text out.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.1 54% and OSWorld-Verified 74.0% show real agentic capability for a lite tier, but the AA Agentic Index 15.9% is low and Claw/GDPval-AA agent rows are thin.
- **Reasoning: 70/100.** GPQA Diamond 83.8% and MMLU-Pro 85.8% are strong for the price, but the rebased AA index of 22, HLE 17.5% and ARC-AGI-2 10.3% (lowered from 72) expose the reasoning depth the tier trades away.
- **Context window: 90/100.** 1,048,576 tokens with 64K output and AA-LCR 76.0%; **lowered from 93** because the official GDM-MRCR at full 1M is only 21.3% (vs 72.2% at 128K) — the window is large but deep recall is weak.
- **Multimodal: 82/100.** Text, image, audio, video and PDF input with text output; no generation and no strong vision benchmark beyond MMMU-Pro.
- **Coding: 70/100.** SWE-bench Verified 75.0% and LiveCodeBench 79.0% (raised earlier from 68); SWE-bench Pro 54.2% and Code Migration 6.1% cap it.
- **Cost efficiency: 92/100.** $0.30/$2.50 per 1M with a 90% cache discount is the cheapest tier in its family and ~4× cheaper per task than Gemini 3.5 Flash.
- **Overall Score: 75/100.** (62 + 70 + 90 + 82 + 70) / 5 = 74.8 → 75. Best fit: high-volume subagents, document parsing and agentic search where per-call cost and speed matter more than frontier reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: deep second-pass public internet research (Google DeepMind Gemini 3.5 Flash-Lite model card, BenchLM model page + per-eval results, Artificial Analysis, Vals AI, LLM-Stats, gradually.ai). The rebased AA index and the newly published full-window MRCR figure corrected Reasoning and Context; the TB2.1/MMMU spreads are surfaced. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
