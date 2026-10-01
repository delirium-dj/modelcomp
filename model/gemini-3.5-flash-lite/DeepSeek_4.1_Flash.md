# Gemini 3.5 Flash-Lite — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`)
- Date: 2026-10-01 (UTC) — refreshed second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite (no "Free" wording; a free Google AI Studio tier exists)
- **Short description:** The cheapest and fastest tier of the Gemini 3.5 line, released 2026-07-21 alongside Gemini 3.6 Flash and Gemini 3.5 Flash Cyber. Positioned for high-volume subagent calls, document parsing and agentic search rather than frontier reasoning.
- **Provider / access:** Google — Gemini API, Google AI Studio, Vertex AI (Gemini Enterprise Agent Platform). Proprietary, closed; no self-hosting or open weights.
- **Release / knowledge:** 2026-07-21. Knowledge cutoff not stated; builds on the Gemini 3.1 Flash-Lite base.
- **IDs:** `gemini-3.5-flash-lite`. No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens; max output 65,536 tokens.
- **Modalities:** text, image, video, audio and PDF input; text output; function calling, structured output and remote MCP tool calls; reasoning yes (minimal thinking by default).
- **Pricing (as of 2026-10-01):** $0.30 / 1M in and $2.50 / 1M out at launch — flat, undercutting every other Gemini 3.5 model; no published cache/batch discount for this tier (BMList lists price "not published").
- **Architecture:** proprietary, closed; parameter count / dense-vs-MoE undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54%** (vendor, 2026-09-09; up from 31% prior generation); BMList lists 0.5% (a harness artifact)
- OSWorld-Verified (computer use): **74.0%** (vendor) vs 65.1% for Gemini 3 Flash
- GDPval-AA (v2): **1,136–1,140** (BMList/HokAI); Tau3-Banking: **17.5%**
- Berkeley/tool-call and Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **83.8–86.9%** (BMList lists 83.8%); MMLU-Pro: **85.8%**; HLE: **18.8%**
- Artificial Analysis Intelligence Index: **37.4** (82nd percentile); AIIQ Composite IQ: 108; MMMU-Pro: **79.0%/83.6%**
- ARC-AGI-1: **53.5%**; ARC-AGI-2: **10.3%**
- CritPt: **0.0%** (research-level physics)

Coding:

- SWE-bench Verified: **75.0%**; SWE-bench Pro: **54.2%** (vendor); LiveCodeBench: **79.0%**; SciCode: **40.9%**
- Vibe Code Bench v1.1: **37.2%**; IOI: **26.2%**; WebDev Arena: **1449 Elo**
- Output speed: **363 tok/s** median, ranked 3rd of 36 (Artificial Analysis)

Long context:

- AA-LCR: **74.7%** (89th percentile); Context Arena (GDM-MRCRv2): **43.6%** (AUC 1M 33.8%). Google's own GDM-MRCR v2 figure of **72.2%** (vs 60.1% predecessor) is direction-of-travel only, as the measurement depth was undisclosed.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.1 54% and OSWorld-Verified 74.0% show real agentic capability for a lite tier, but Tau3-Banking 17.5% is low and Claw/GDPval-AA agent scores are thin.
- **Reasoning: 72/100.** GPQA Diamond 83.8% and HLE 18.8% are strong for the price, but an AA Intelligence Index of 37.4 and ARC-AGI-2 10.3% expose the reasoning depth the tier trades away.
- **Context window: 93/100.** 1,048,576 tokens with 65,536 output and an AA-LCR 74.7%; Context Arena 1M AUC 33.8% shows usable recall is well below the headline window, keeping it below 95.
- **Multimodal: 82/100.** Text, image, video, audio and PDF input with text output; no generation and no strong vision benchmark beyond MMMU-Pro.
- **Coding: 70/100.** SWE-bench Verified 75.0% and LiveCodeBench 79.0% (raised from 68 now that the harder harnesses publish); SWE-bench Pro 54.2% and Code Migration 6.1% cap it.
- **Cost efficiency: 92/100.** $0.30/$2.50 per 1M is the cheapest tier in its family and ~4× cheaper per task than Gemini 3.5 Flash; the absence of published cache/batch discounts is the only drag.
- **Overall Score: 76/100.** Mean of the five quality dims (62+72+93+82+70)/5 = 75.8 → 76. Best fit: high-volume subagents, document parsing and agentic search where per-call cost and speed matter more than frontier reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (BenchmarkList model page + per-eval results, Google model page and Artificial Analysis figures via HokAI); second-pass refresh of the 2026-09-18 report. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
