# GLM 4.6 Flash — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6 Flash (GLM-4.6-Flash)
- **Short description:** Z.ai (Zhipu AI)'s lightweight text model in the GLM-4.6 family, released January 19, 2026. 30B total / 3B active MoE. Optimized for local deployment, low latency, and cost efficiency. 200K context. Open weights (MIT license). Text-only. Reasoning model with configurable thinking. No native multimodal.
- **Provider / access:** Z.ai API (`glm-4.7-flash`? Wait - the text model is GLM-4.6, not 4.7), OpenRouter (`z-ai/glm-4.6`), Hugging Face (`zai-org/GLM-4.6`), Cerebras (REAP variants). Open weights (MIT). Self-hosted via vLLM/SGLang/Transformers. No managed free tier for text model (vision Flash is free).
- **Release / knowledge:** 2026-01-19 release (GLM-4.6-Flash); knowledge cutoff not published.
- **IDs:** `z-ai/glm-4.6` (OpenRouter), `zai-org/GLM-4.6` (HF). MIT license = self-host free.
- **Context window:** 200,000 tokens (200K). Verified via Z.ai docs, OpenRouter, Artificial Analysis, AI Atlas.
- **Modalities:** Text input; text output. **No native multimodal** (text-only per Z.ai docs, OpenRouter, NC Bench). Reasoning: yes (configurable thinking). Tool calls: yes (function calling, tool use). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** OpenRouter: $0.0605/M in, $0.40/M out, cache $0.01/M. Z.ai API: $0.55/M in, $2.19/M out (list). Cerebras: not published. Blended ~$0.06–0.55/M in. No free tier.
- **Architecture:** 31.2B total / 3B active MoE. 200K context. MIT license (open weights). 3B active params.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: **59.2%** (thinking, no tools) — Artificial Analysis / HF GLM-4.7-Flash card (Note: GLM-4.7-Flash is different model; GLM-4.6 Flash benchmarks limited)
- SWE-bench Verified: **68.0%** (normal, no tools) — llm-stats.com / LLMLearner (GLM-4.6 base)
- Terminal-Bench Hard: **22.0%** (thinking, tools) — Artificial Analysis (GLM-4.7-Flash)
- Terminal-Bench Hard: **28.8%** (normal, tools) — llm-stats.com (GLM-4.6)
- τ²-Bench Telecom: **96.0%** (thinking, tools) — Artificial Analysis (GLM-4.7-Flash)
- τ²-Bench Telecom: **71.0%** (thinking, tools) — llm-stats.com (GLM-4.6)
- τ²-Bench: **79.5%** (thinking, tools) — Artificial Analysis (GLM-4.7-Flash)
- τ²-Bench: **75.9%** (thinking, tools) — llm-stats.com (GLM-4.6)
- τ²-Bench (weighted): **75.9%** (GLM-4.6) — Z.ai blog
- BrowseComp: **42.8%** (thinking, tools) — Artificial Analysis (GLM-4.7-Flash)
- BrowseComp: **45.1%** (thinking, tools) — llm-stats.com (GLM-4.6)
- IFBench: **68.0%** (thinking, tools) — Artificial Analysis (GLM-4.7-Flash)
- IFBench: **43.0%** (normal, no tools) — llm-stats.com (GLM-4.6)
- Apex Agents: **no score** for 4.6-Flash
- MCP-Atlas / PinchBench / ClawEval / Toolathlon: **no scores** for 4.6-Flash specifically

Reasoning / knowledge:

- AIME 2025: **91.6%** (thinking, no tools) — Artificial Analysis (GLM-4.7-Flash)
- AIME 2025: **98.6%** (normal, tools) — llm-stats.com (GLM-4.6)
- GPQA Diamond: **75.2%** (thinking, no tools) — Artificial Analysis (GLM-4.7-Flash)
- GPQA Diamond: **82.9%** (normal, tools) — llm-stats.com (GLM-4.6)
- HLE: **14.4%** (thinking, no tools) — Artificial Analysis (GLM-4.7-Flash)
- HLE: **30.4%** (thinking, tools) — llm-stats.com (GLM-4.6)
- GPQA: **75.2%** (thinking, no tools) — Artificial Analysis (GLM-4.7-Flash)
- GPQA: **81.0%** (normal, tools) — Z.ai blog (GLM-4.6, 128K ctx)
- LiveCodeBench v6: **64.0%** (thinking, no tools) — Artificial Analysis (GLM-4.7-Flash)
- LiveCodeBench v6: **82.8%** (84.5% w/ tools) — Z.ai blog (GLM-4.6, 128K ctx)
- MMLU-Pro: **no score** for 4.6-Flash (83.2% for GLM-4.6 base per llm-stats)
- CritPt: **0.3%** (thinking, no tools) — Artificial Analysis (GLM-4.7-Flash)
- CritPt: **1.1%** (thinking, no tools) — llm-stats.com (GLM-4.6)
- HLE: **14.4%** (thinking, no tools) — Artificial Analysis (GLM-4.7-Flash)
- HLE: **30.4%** (thinking, tools) — llm-stats.com (GLM-4.6)
- AA-LCR: **42%** (thinking, no tools) — Artificial Analysis (GLM-4.7-Flash)
- AA-LCR: **54%** (normal, tools) — llm-stats.com (GLM-4.6)
- AA Intelligence Index: **15*** (est) — Artificial Analysis (GLM-4.7-Flash)
- AA Intelligence Index: **19*** (est) — Artificial Analysis (GLM-4.6)
- IFBench: **68.0%** (thinking, tools) — Artificial Analysis (GLM-4.7-Flash)
- IFBench: **43.0%** (normal, no tools) — llm-stats.com (GLM-4.6)
- Creative Writing: **1125** Elo — llm-stats.com (GLM-4.7-Flash) vs **1411** (GLM-4.6)
- τ²-Bench Telecom: **96.0%** (thinking, tools) — Artificial Analysis (GLM-4.7-Flash)
- τ²-Bench Telecom: **71.0%** (thinking, tools) — llm-stats.com (GLM-4.6)

Coding:

- SWE-bench Verified: **59.2%** (thinking, no tools) — Artificial Analysis (GLM-4.7-Flash)
- SWE-bench Verified: **68.0%** (normal, no tools) — llm-stats.com (GLM-4.6)
- Terminal-Bench Hard: **22.0%** (thinking, tools) — Artificial Analysis (GLM-4.7-Flash)
- Terminal-Bench Hard: **28.8%** (normal, tools) — llm-stats.com (GLM-4.6)
- Terminal-Bench 2.0: **28.1%** (normal) — OpenRouter Vals AI (GLM-4.6)
- LiveCodeBench v6: **64.0%** (thinking) — Artificial Analysis (GLM-4.7-Flash)
- LiveCodeBench v6: **82.8%** (84.5% w/ tools) — Z.ai blog (GLM-4.6)
- SWE-bench Verified: **59.2%** (thinking, no tools) — Artificial Analysis
- SWE-bench Verified: **68.0%** (normal) — llm-stats.com / LLMLearner (GLM-4.6)
- SWE-bench Pro: **no score** for 4.6-Flash (9.67% for GLM-4.6 base per HF)
- LiveCodeBench: **64.0%** (thinking) — Artificial Analysis (GLM-4.7-Flash)
- LiveCodeBench: **82.8%** — Z.ai blog (GLM-4.6)

Long context:

- Native 200K context verified
- AA-LCR: **42%** (thinking, no tools) — Artificial Analysis (GLM-4.7-Flash)
- AA-LCR: **54%** (normal, tools) — llm-stats.com (GLM-4.6)
- RULER / MRCR / GraphWalks / LongBench: **no scores** for 4.6-Flash specifically

Multimodal:

- **No native multimodal** (text-only per Z.ai docs, OpenRouter, NC Bench). GLM-4.6V-Flash is the vision variant.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** τ²-Bench Telecom 71–96%, BrowseComp 43–45%, IFBench 43–68%, SWE-bench Verified 59–68%. Strong telecom tool use but mixed IFBench (43% normal vs 68% thinking). No MCP-Atlas/PinchBench/ClawEval. Capped by mixed IFBench and no standard agentic benchmarks for Flash specifically.
- **Reasoning: 65/100.** AIME 2025 92–99%, GPQA Diamond 75–83%, HLE 14–30%, CritPt 0.3–1.1%, AA-LCR 42–54%, AA Index 15–19. Strong math (AIME 92–99%) but HLE low (14–30%) and CritPt near-zero. Capped by HLE 14–30% and CritPt near-zero.
- **Context window: 85/100.** 200K native (200K tier = 80–85). No MRCR/RULER/GraphWalks/LongBench for Flash specifically. Tier placement saves score.
- **Multimodal: 15/100.** Text-only input/output. No vision/audio/video. Floor for text-only model.
- **Coding: 65/100.** SWE-bench Verified 59–68%, LiveCodeBench 64–83%, Terminal-Bench Hard 22–29%, Terminal-Bench 2.0 28%. Strong LiveCodeBench but SWE-Verified 59–68% vs frontier (Opus 5.5 80%+). Capped by Terminal-Bench Hard 22–29% and no SWE-Pro/Terminal-Bench 2.1 for Flash.
- **Cost efficiency: 90/100.** OpenRouter $0.06/$0.40 (very cheap). Z.ai list $0.55/$2.20. MIT open weights = self-host free. Blended ~$0.06–0.55/M. Excellent value.
- **Overall Score: 59/100.** Mean of (65+65+85+15+65)/5 = 59.0 → 59. Queue shows 61.6 — close. ModelComp: 87.6 for GLM-4.6 base (different model). Best fit: **high-value MoE for coding/reasoning**; 3B active params = fast/cheap; text-only limits generalist use; Flash benchmarks sparse (many from 4.7-Flash proxy).

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Z.ai blog/docs, HF model cards (GLM-4.6, GLM-4.7-Flash), Artificial Analysis, llm-stats.com, LLMLearner, OpenRouter, freellm.net, Z.ai API pricing); scores normalized 1–100 per model-comparison.md methodology. **Critical limitation:** Many benchmarks from GLM-4.7-Flash proxy or GLM-4.6 base; few direct GLM-4.6-Flash scores. Conflicting modes (thinking vs normal) cause score spreads. Text-only modality confirmed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.