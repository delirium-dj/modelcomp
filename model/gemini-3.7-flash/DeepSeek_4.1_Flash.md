# Gemini 3.7 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.7 Flash (`gemini-3.7-flash`)
- Date: 2026-10-01 (UTC) — refreshed second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash (no "Free" wording; a free AI Studio tier exists)
- **Short description:** Google's August 2026 Flash-tier refinement of Gemini 3.6 Flash, released three weeks later and achieved through algorithmic improvements rather than a new pretraining run. It pairs a 1,048,576-token window with a large jump in long-horizon coding accuracy, aimed at budget-conscious coding agents and document-heavy workflows.
- **Provider / access:** Google — Gemini API, Google AI Studio, Gemini Enterprise Agent Platform, Gemini Spark consumer app. Proprietary, closed; no self-hosting.
- **Release / knowledge:** Released 2026-08-13.
- **IDs:** `gemini-3.7-flash` (Gemini API / Vertex AI). No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens; max output 65,536 tokens.
- **Modalities:** text, image, audio and video input; text + tool-call output; function calling and structured output; reasoning yes (configurable thinking levels).
- **Pricing (as of 2026-10-01):** $0.75 / 1M in and $3.75 / 1M out (introductory, half the predecessor's launch rate), cached input ≈$0.075 / 1M (90% off); both rates double January 2027. Blended 3:1 ≈$1.35 / 1M.
- **Architecture:** proprietary; Google has not disclosed parameter count or confirmed MoE. Described as a refinement of Gemini 3.6 Flash's reasoning foundation (Gemini 3.8 Flash is further-trained on top of it).

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **52.3%** (95th percentile); AutomationBench-AA: **62.7%** (rank 1 of 13)
- GDPval-AA: **1527 Elo** (94th percentile); Tau3-Banking: **35.5%**; OSWorld 2.0 (computer use): 50.6%
- Terminal-Bench 2.1: **85.8%** (rank 13 of 182); Terminal-Bench 3.0: 14.9%; Agents' Last Exam: **26.3%**
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (rank 5 of 464); HLE: **47.9%** (rank 11 of 466)
- ARC-AGI-1: **95.5%**; ARC-AGI-2: **84.6%**
- Artificial Analysis Intelligence Index: **56**; BenchmarkList ECI: **139.72 / 100** (rank 19 of 354); CritPt: 14.3%
- Omniscience / Hallucination: **no verified public score found**

Coding:

- SciCode: **57.9%** (rank 6 of 458); FrontierCode: **43.6%**; CursorBench 3.2: 61.6%; ProgramBench: 61.2% raw
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: **no verified public score found**
- Output speed: **340 tok/s** median, ranked 4th of 36 (Artificial Analysis)

Long context:

- GDM-MRCR v2 / MRCR-v2 at 128K: **97.0%** (rank 1 of 20); AA-LCR: **81.0%** (rank 6 of 409). No full-window (1M) figure is published, so the far end remains untested.

### Normalized scores (1–100)

- **Tool use: 85/100.** AutomationBench-AA 62.7% (rank 1 of 13), GDPval-AA 1527 and Terminal-Bench 2.1 85.8%; capped by a 26.3% Agent's Last Exam and missing Claw/Toolathon numbers.
- **Reasoning: 88/100.** GPQA Diamond 94.5%, HLE 47.9% and ARC-AGI-2 84.6% (raised from 82 now that these publish); AA Intelligence Index 56.
- **Context window: 95/100.** 1,048,576 tokens with a measured 97.0% MRCR-v2 at 128K and AA-LCR 81.0%; the unmeasured full-window depth is the only gap.
- **Multimodal: 86/100.** Text, image, audio and video input with MMMU-Pro 85.5%, MMVU 82.3% and LVBench 85.4%; text-only output caps it.
- **Coding: 86/100.** SciCode 57.9%, FrontierCode 43.6% and a 1588 WebDev Arena Elo; DeepSWE is not leaned on because the figures conflict sharply across harnesses (BenchmarkList 0.7% vs vendor 65.3%).
- **Cost efficiency: 88/100.** $0.75/$3.75 introductory with 90%-off caching is strong value, but the rate doubles in January 2027 and the tier is superseded by Gemini 3.8 Flash.
- **Overall Score: 88/100.** Mean of the five quality dims (85+88+95+86+86)/5 = 88.0 → 88. Best fit: budget coding agents and document-heavy enterprise workflows.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (BenchmarkList model page + per-eval results, Google model page and Artificial Analysis figures via HokAI); second-pass refresh of the 2026-09-18 report. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
