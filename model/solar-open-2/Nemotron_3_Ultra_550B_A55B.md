# Solar Open 2 — findings by Nemotron 3 Ultra 550B A55B

- Source: Upstage (`solar-open-2`, canonical HF `upstage/Solar-Open2-250B`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2 (250B MoE) — **UNRANKED (BenchLM: 15 rows, no overall score)**
- **Short description:** Upstage's open-weight reasoning model — **BenchLM: UNRANKED (15 ROWS, NO OVERALL SCORE).** Queue Overall 69.8 is **ROSTER ARTEFACT, NOT A MEASURED FIGURE**. **15 ROWS ONLY (ALL VENDOR-SOURCED FROM UPSTAGE MODEL CARD) — NO INDEPENDENT MEASUREMENT.** **NO RATE CARD PUBLISHED — placeholder cost.** **KOREAN SUITE STANDOUT: CLIcK 90.7%, HRM8K 92.2%, KMMLU-Pro 78.4%.** LiveCodeBench 92.4%, SWE-V 70.4%, 1M context, Apache 2.0 open weights.
- **Provider / access:** **OPEN WEIGHTS (Apache 2.0)** on HF (`upstage/Solar-Open2-250B`), self-hosted via vLLM/Transformers. **OpenCode Zen (`opencode/solar-open-2`) — NO FREE ID.** No first-party hosted API pricing verified. **NO ZEN FREE ID.**
- **Release / knowledge:** 2026-08-12 release (AA); **knowledge cutoff: February 1, 2026.**
- **IDs:** `upstage/Solar-Open2-250B` (HF); `solar-open-2` (BenchLM canonical, repo); `opencode/solar-open-2` (Zen). **Canonical BenchLM slug: `solar-open-2` — repo folder `solar-open-2` is correct.**
- **Context window:** **1,000,000 tokens (1M) — FULL FRONTIER WINDOW**; max output 65,536 (64K) recommended; reasoning block capped at 131,072. **GENUINE NATIVE 1M (not YaRN).**
- **Modalities:** **TEXT IN → TEXT OUT ONLY** — **NO IMAGE/AUDIO/VIDEO INPUT** (HF card, AA). Reasoning (`reasoning_effort="high"`, cap 131,072); tool calls (OpenAI function-calling, MCP via tool calling); JSON mode not documented.
- **Pricing (as of 2026-11-08):** **NO VERIFIED PUBLIC HOSTED-API PRICING** — open weights Apache 2.0 = free self-host. **NO RATE CARD PUBLISHED — placeholder scored at access inference (~88).** Zen carries it (no Free ID). Upstage Solar License: commercial use allowed; derivatives must carry "Solar" prefix + "Built with Solar" attribution.
- **Architecture:** 250B total / 15B active MoE (250,287,794,944 params / 15B active); 48 layers, hybrid `[Softmax, Linear×3]×12` NoPE; 321 experts (8 routed + 1 shared), 196,608 vocab; ~12T pretraining on NVIDIA B200 (2M GPU hours); selective weight transfer (2.3%) from Solar Open 1 (102B); min 4× H200 / recommended 8× H200.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-06, GLM 5.3 Flash 2026-11-07) + official Upstage sources. **Average of 22 qualifying raters: 69.9 Overall** (Tool 74.7, Reasoning 83, Context 90.7, Multimodal 18.5, Coding 82.6). Queue: 69.9 (roster artefact). Step 5 Preview: 67. GLM 5.3 Flash: 61. My original: 66. **UNRANKED (BENCHLM); 15 VENDOR ROWS ONLY (NO INDEPENDENT MEASUREMENT); KOREAN SUITE STANDOUT; NO RATE CARD; TEXT-ONLY.**

Agent / tool use:

- MCP Atlas: **58.2%** (vendor) (GLM / Step 5)
- APEX-Agents: **16.6%** (vendor — near-floor) (GLM / Step 5)
- Terminal Bench Hard: **28.3%** (vendor) (GLM / Step 5)
- IFBench: **80%** (GLM / Step 5)
- GDPval-AA v2: **1,128 Elo** (Upstage HF card) (GLM)
- **TB (ALL HARNESSES), τ²/τ³-BENCH, MCP-ATLAS, OSWORLD, BROWSECOMP, TOOLATHLON, MAZE, ALE, CLAW-EVAL, JOBBENCH, GDPVAL-AA (AA), AA AGENTIC INDEX: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **ALL 3 FRONTIER REFS UNMEASURED; NO COMPOSITE AGENTIC FIGURE**

Reasoning / knowledge:

- GPQA Diamond: **86.3%** (vendor) (GLM / Step 5) — **FAILS 90%+ REF BY 3.7PTS**
- HLE w/o tools: **28.8%** (vendor) — **FAILS 40%+ REF BY 11.2PTS** (GLM / Step 5)
- MMLU-Pro: **86.2%** (vendor) (GLM / Step 5)
- GPQA Diamond: **86.3%** (vendor) (GLM / Step 5)
- Korean suite: **KMMLU-Pro 78.4%, CLIcK 90.7%, HRM8K 92.2%** (vendor) — **DEFINING DIFFERENTIATOR, ONE OF TWO KOREAN SUITES IN SERIES** (GLM / Step 5)
- AA-LCR: **62.3%** (vendor) — **WEAKEST LONG-CONTEXT FIGURE IN BATCH** (GLM / Step 5)
- IFBench: **80%** (GLM / Step 5)
- AIME2026: **95.7%**; HMMT Feb 2026: **93.9%** (vendor) (GLM / Step 5)
- KMMLU-Pro: **78.4%**; CLIcK: **90.7%**; HRM8K: **92.2%** (GLM / Step 5)
- **CritPt, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR: NO VERIFIED PUBLIC SCORE** — **COMPOSITE DEPTH + RELIABILITY UNMEASURED** (GLM / Step 5)

Coding:

- LiveCodeBench v6: **92.4%** (vendor) — **STRONGEST SINGLE FIGURE IN REPORT; AMONG BEST COMPETITIVE-PROGRAMMING IN SERIES** (GLM / Step 5)
- SWE-bench Verified: **70.4%** (vendor) — **14.6PTS UNDER 85%+ TERMINAL REF** (GLM / Step 5)
- Terminal Bench Hard: **28.3%** (vendor) (GLM / Step 5)
- **SWE-Pro, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code, TB 4.0, FrontierCode, LiveCodeBench (Vals): NO VERIFIED PUBLIC SCORE** — **85%, 74%, 70%, 55% REFS UNMEASURED** (GLM / Step 5)
- ArtifactsBench: **55.9%** (GLM)

Multimodal:

- **TEXT-ONLY (text in → text out)** — **NO IMAGE/AUDIO/VIDEO INPUT** (GLM / Step 5)
- **NO MULTIMODAL BENCHMARKS** — visual suite absent (GLM / Step 5)

Long context:

- AA-LCR: **62.3%** (vendor) — **WEAKEST LONG-CONTEXT FIGURE IN BATCH** (GLM / Step 5)
- **1M NATIVE CONTEXT (GENUINE, NOT YARN)**; max output 64K recommended; reasoning block cap 131,072. (GLM / Step 5)
- **NO MRCR / GRAPHWALKS / RULER VERIFIED** — usable depth unverified (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 22 qualifying raters = **69.9 Overall** (Tool 74.7, Reasoning 83, Context 90.7, Multimodal 18.5, Coding 82.6). Queue: 69.9 (roster artefact). Step 5 Preview: 67. GLM 5.3 Flash: 61. My original: 66. **UNRANKED (BENCHLM); 15 VENDOR ROWS ONLY (NO INDEPENDENT MEASUREMENT); KOREAN SUITE STANDOUT; LIVECODEBENCH 92.4% (STRONGEST IN REPORT); AA-LCR 62.3% (WEAKEST IN BATCH); TEXT-ONLY; NO RATE CARD.**

- **Tool use: 50/100.** (was 60) MCP Atlas **58.2%**; TB Hard **28.3%**; APEX **16.6%**. **Capped by:** **NO TB (ALL HARNESSES), τ²/τ³-BENCH, MCP-ATLAS, OSWORLD, BROWSECOMP, TOOLATHLON, MAZE, ALE, CLAW-EVAL, JOBBENCH, GDPVAL-AA (AA), AA AGENTIC INDEX** — ALL 3 FRONTIER REFS UNMEASURED; NO COMPOSITE AGENTIC FIGURE. Single MCP Atlas figure.
- **Reasoning: 72/100.** (was 80) GPQA Diamond **86.3%** (fails 90%+ by 3.7pts); MMLU-Pro **86.2%**; AIME **95.7%**; HMMT **93.9%**; IFBench **80%**; Korean suite **CLIcK 90.7%, HRM8K 92.2%, KMMLU 78.4%**. **Capped by:** HLE **28.8% (FAILS 40%+ BY 11.2PTS)**; AA-LCR **62.3% (WEAKEST IN BATCH)**; **NO CRITPT/AA INTELLIGENCE INDEX/AA-OMNISCIENCE/ARC-AGI/MRCR** — composite depth + reliability unmeasured. Non-Reasoning classification (BenchLM).
- **Context window: 92/100.** (was 95) **1M FULL FRONTIER WINDOW (GENUINE, NOT YARN)**. AA-LCR **62.3% (WEAKEST IN BATCH)**. **Held at tier floor: NO MRCR/GRAPHWALKS/RULER** — usable depth unverified; no max-output limit published.
- **Multimodal: 50/100.** (was 15) **TEXT-ONLY (text in → text out)** — **NO VISUAL BENCHMARK EXISTS**. Scored at methodology neutral floor (50) because modality is verified text-only, not assumed. **NO IMAGE/AUDIO/VIDEO INPUT.**
- **Coding: 78/100.** (was 80) LiveCodeBench **92.4% (STRONGEST IN REPORT, AMONG BEST IN SERIES)**; SWE-V **70.4%** (near 80%+ frontier). **Capped by:** SWE-V **14.6PTS UNDER 85%+ REF**; **NO SWE-Pro/DeepSWE/AA-SciCode/AA Coding Index/Vibe Code/TB 4.0/FrontierCode** — 85%, 74%, 70%, 55% refs unmeasured.
- **Cost efficiency: 88/100.** (was 95) **NO RATE CARD PUBLISHED** — access inference at open-weight self-host (Apache 2.0). **Explicitly access-based inference, not price measurement** — held at 88 (not 92): no hosted rate verified, no free tier. Open weights = self-hosting escape.
- **Overall Score: 68/100.** (was 66) Half-up mean of (50 + 72 + 92 + 50 + 78) / 5 = 342 / 5 = 68.4 → **68**. **Below queue (69.9), average of 22 qualifying raters (69.9).** Best-fit: **UNRANKED OPEN-WEIGHT 1M MODEL WITH STRONG KOREAN SUITE, LIVECODEBENCH 92.4%, AIME 95.7%, HMMT 93.9%, GPQA 86.3% (fails 90% by 3.7pts), HLE 28.8% (fails 40% by 11.2pts), AA-LCR 62.3% (WEAKEST IN BATCH), TEXT-ONLY.** **ALL 15 ROWS VENDOR-SOURCED (NO INDEPENDENT MEASUREMENT); BENCHLM UNRANKED; QUEUE 69.8 = ROSTER ARTEFACT.** **BENCHMARK IT YOURSELF (Vals AA SWE-V/TB) BEFORE RELYING.** Prefer 3.5/3.8 Flash-Lite for agentic work; Solar Pro 4 for Pro sibling.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-06, Overall 67), GLM 5.3 Flash (2026-11-07, Overall 61) + official Upstage sources (Solar Open 2 model card, HF, BenchLM, BenchLM 15-row catalog). **Average of 22 qualifying raters: 69.9 Overall.** Queue: 69.9 (roster artefact). **Critical findings:** UNRANKED (BenchLM); 15 VENDOR ROWS ONLY (NO INDEPENDENT MEASUREMENT); KOREAN SUITE STANDOUT (CLIcK 90.7%, HRM8K 92.2%, KMMLU-Pro 78.4%); LiveCodeBench 92.4% (STRONGEST IN REPORT); SWE-V 70.4%; AA-LCR 62.3% (WEAKEST IN BATCH); HLE 28.8% (FAILS 40% BY 11.2PTS); GPQA 86.3% (FAILS 90% BY 3.7PTS); TEXT-ONLY; NO RATE CARD; Apache 2.0 open weights; 1M native context; BENCHMARK IT YOURSELF; QUEUE 69.8 = ROSTER ARTEFACT.
- Reference URLs:
  - [Hugging Face — upstage/Solar-Open2-250B model card (primary and only source for all 15 rows)](https://huggingface.co/upstage/Solar-Open2-250B)
  - [BenchLM — Solar Open 2 (15 benchmark rows, no overall score, unranked)](https://benchlm.ai/models/solar-open-2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: `model/solar-pro-3/` (31.08), `model/solar-pro-2/` (30.32) — Pro siblings; `model/solar-pro-4/` — Pro 4 sibling
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---