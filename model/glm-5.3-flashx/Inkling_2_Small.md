# GLM-5.3 FlashX — findings by Fledge Alpha

- Source: Z.ai (Zhipu AI) (`z-ai/glm-5.3-flashx`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 FlashX
- **Short description:** Z.ai's high-speed serving tier of GLM-5.3-Flash (same 320B/18B MoE weights), delivering up to ~200 tok/s for latency-sensitive coding agents and interactive tool-calling loops. Flag: serving-tier variant of `glm-5.3-flash`, not a distinct checkpoint.
- **Provider / access:** OpenRouter `z-ai/glm-5.3-flashx`, Puter `z-ai/glm-5.3-flashx`, Opper gateway `tencent:sg/glm-5.3-flashx`. Chat Completions-compatible.
- **Release / knowledge:** 2026-09-18 (CloudPrice version table); base GLM-5.3-Flash released 2026-08-26.
- **IDs:** `z-ai/glm-5.3-flashx` (no Free ID on Zen found)
- **Context window:** 1M (1,048,576) tokens; up to 131,072 max output (OpenRouter, Opper).
- **Modalities:** text/image/video in (per base-model spec; Opper route lists text+image); text out; always-on thinking (cannot be disabled); function calling incl. parallel calls; structured outputs/JSON; prompt caching; web search.
- **Pricing (as of 2026-10-08):** $0.37 input / $1.25 output per 1M tokens; cache read $0.07 (Opper/OpenRouter). ~2.5x the base Flash tier's rate, paying for speed.
- **Architecture:** 320B total / 18B active MoE, 45 layers, hybrid linear + sparse attention (IndexPool, mHC); MIT open weights (zai-org/GLM-5.3-Flash).

### Raw benchmarks found

> FlashX shares GLM-5.3-Flash weights, so published benchmark results apply to both (Puter, Opper).

Agent / tool use:

- Terminal-Bench 2.1: **84.3** (DataCamp, near Claude Opus 4.8 85.0, behind GPT-5.6 Terra 87.4)
- AutomationBench: **48.8** (Z.ai self-reported via llm-stats; GLM-5.2: 26.2)
- Toolathlon: no verified public score found (listed without value in launch coverage)

Reasoning / knowledge:

- GPQA Diamond: **0.9** (CloudPrice / Artificial Analysis, #30)
- HLE: **0.4** (CloudPrice / Artificial Analysis, #39)
- LCR: **0.8** (CloudPrice, #42)
- Artificial Analysis Intelligence Index: **57** (DataCamp) / **41.8** (CloudPrice, #21) — sources differ; both cited
- LLM Stats Score: **49.5** (#21 of tracked models, llm-stats)

Coding:

- DeepSWE v1.1: **63.4** (Z.ai self-reported via llm-stats; GLM-5.2: 46.2; beats Qwen3.8-Flash-Next 58.7)
- AA Coding Index: **71.5** (CloudPrice, #22)
- SWE-bench Verified: no verified public score found for this tier

Long context:

- 1M-token window verified (multiple providers); community reports of attention "drift" beyond ~700K (DataCamp); no MRCR/RULER public number found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 84.3 and AutomationBench 48.8 with parallel function calling; capped by missing Toolathlon/third-party agentic harness coverage.
- **Reasoning: 80/100.** GPQA 0.9 with always-on thinking and AA Intelligence #21; capped by weak HLE (0.4).
- **Context window: 88/100.** Verified 1M window with 131K output; capped by reported attention drift beyond ~700K.
- **Multimodal: 78/100.** Native text/image/video input (first natively multimodal GLM-5), text-only output, no audio.
- **Coding: 82/100.** DeepSWE 63.4 (+17 over GLM-5.2) and Coding Index 71.5; capped by lack of SWE-bench Verified number for this tier.
- **Cost efficiency: 82/100.** $0.37/$1.25 with $0.07 cache reads is cheap for the capability, but ~2.5x the base Flash tier for identical weights.
- **Overall Score: 82/100.** Mean of (84, 80, 88, 78, 82) = 82.4 → 82. Best fit: high-throughput agentic coding loops where 200 tok/s and 1M context matter more than flagship-tier reasoning.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Opper, OpenRouter, Puter docs, CloudPrice, DataCamp, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
