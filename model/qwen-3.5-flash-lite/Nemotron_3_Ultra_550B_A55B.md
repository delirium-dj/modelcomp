# Qwen 3.5 Flash — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`
>
> **NOTE:** The model-queue.md entry "qwen-3.5-flash-lite" (75.6) appears to refer to the standard Qwen 3.5 Flash model (qwen3.5-flash / Qwen3.5-35B-A3B hosted). No separate "Flash Lite" variant exists in Alibaba's lineup — the Flash model is already the cost-optimized tier (3B active MoE). This report covers Qwen 3.5 Flash.

## Model card

- **Name:** Qwen 3.5 Flash (qwen3.5-flash)
- **Short description:** Alibaba Cloud's cost-optimized Flash tier model in the Qwen 3.5 series, released February 2026. Hosted version of open-weight Qwen3.5-35B-A3B (35B total, 3B active MoE) with 1M context, built-in tools, and production features. Hybrid architecture: Gated Delta Networks + sparse MoE. Native multimodal (text, image, video).
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-flash`), OpenRouter (`qwen/qwen3.5-flash`), DeepInfra, Hugging Face, SiliconFlow, AIHubMix, 302.AI, Kilo Gateway, Merge Gateway, Venice AI. Chat Completions API. Reasoning: yes (thinking mode).
- **Release / knowledge:** 2026-02-23 release (Model Studio); knowledge cutoff not published.
- **IDs:** `qwen3.5-flash` (Alibaba Cloud), `qwen/qwen3.5-flash` (OpenRouter), `Qwen/Qwen3.5-35B-A3B` (HF open weights). Free tier: 1M tokens (Singapore endpoint only).
- **Context window:** 1,000,000 tokens (1M). Verified via Alibaba Cloud docs, OpenRouter, Elosia Models.
- **Modalities:** Text, image, video input; text output. Reasoning: yes (thinking mode). Tool calls: yes. JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Alibaba Cloud Intl: $0.10/M in, $0.40/M out (≤1M tokens, flat). China/Global: $0.029/M in, $0.287/M out (≤128K); $0.115/M in, $1.147/M out (128K–256K); $0.172/M in, $1.72/M out (256K–1M). Batch 50% off. Third-party: DeepInfra $0.14/$1.00, OpenRouter $0.14/$1.00, OrcaRouter $0.057/$0.459. Blended ~$0.08–0.20/M. Free quota: 1M tokens (Singapore).
- **Architecture:** 35B total params (36B per some sources), 3B active MoE. 40 layers (10×(3×DeltaNet→MoE→1×Attention→MoE)), hidden 2048, GQA, Gated DeltaNet, SwiGLU, MTP. Apache 2.0 license (open weights).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **no direct Flash score** (BenchLM: coming soon; Qwen3.5-35B-A3B: 40.5%)
- OSWorld-Verified: **no direct Flash score** (BenchLM: coming soon; Qwen3.5-35B-A3B: 54.5%)
- SWE-bench Pro: **no direct Flash score** (BenchLM: coming soon; Qwen3.5-35B-A3B: no score)
- LiveCodeBench (Vals): **83.3%** — BenchLM / OpenRouter comparison
- SWE-bench (Vals): **64.4%** — BenchLM / OpenRouter
- BFCL-V4: **67.3%** (thinking, Qwen3.5-35B-A3B) — Qwen HF model card
- TAU2-Bench: **81.2%** (thinking, Qwen3.5-35B-A3B) — Qwen HF model card (lineup best)
- VITA-Bench: **31.9%** — Qwen HF
- DeepPlanning: **22.8%** — Qwen HF
- BrowseComp: **61.0%** / zh: **69.5%** — Qwen HF / BenchLM
- WideSearch: **57.1%** — Qwen HF
- Seal-0: **41.4%** — Qwen HF
- HLE w/ tool: **47.4%** — Qwen HF
- AA-LCR: **58.5%** (thinking, Qwen3.5-35B-A3B) / **72%** (reasoning, AA) — Qwen HF / OpenRouter
- LongBench v2: **59.0%** — Qwen HF
- AndroidWorld: **71.1%** (Qwen3.5-35B-A3B, lineup best) — Qwen HF
- BFCL v4 Live Function-Calling: **81.76%** overall (top of 5 models) — SectorHQ / Neo platform (2,410 cases)
  - live_parallel: **93.75%** (highest single-category)
  - live_simple: Kimi K2.5 leads at 84.50%

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (thinking, Qwen3.5-35B-A3B) / **82.8%** (Vals, BenchLM) / **84.5%** (AA reasoning, OpenRouter)
- HLE w/ CoT: **22.4%** (thinking, Qwen3.5-35B-A3B) / **21%** (reasoning, AA) — Qwen HF / OpenRouter
- MMLU-Pro: **85.3%** (thinking, Qwen3.5-35B-A3B) / **84.1%** (Vals, BenchLM)
- MMLU-Redux: **93.3%** — Qwen HF
- C-Eval: **90.2%** — Qwen HF
- SuperGPQA: **63.4%** — Qwen HF
- IFEval: **91.9%** (thinking, Qwen3.5-35B-A3B) — Qwen HF
- IFBench: **70.2%** (thinking, Qwen3.5-35B-A3B) — Qwen HF
- MultiChallenge: **60.0%** — Qwen HF
- MMMLU: **85.2%** — Qwen HF
- MMLU-ProX: **81.0%** — Qwen HF
- NOVA-63: **57.1%** — Qwen HF
- INCLUDE: **79.7%** — Qwen HF
- Global PIQA: **86.6%** — Qwen HF
- PolyMATH: **64.4%** — Qwen HF
- WMT24++: **76.3%** — Qwen HF
- MAXIFE: **86.6%** — Qwen HF
- AA Intelligence Index: **41.8** (OpenRouter) / **19.4** (non-reasoning, AA) / **19** (reasoning, AA) — conflicting
- FrontierMath v2 Tiers 1-3: **18.2%** (BenchLM)
- MRCRv2: **72.2%** (Gemini 3.5 Flash-Lite comparison page, but attributed to Flash context)

Coding:

- SWE-bench Verified: **69.2%** (thinking, Qwen3.5-35B-A3B) / **72.0%** (HF table) — Qwen HF / BenchLM
- LiveCodeBench v6: **74.6%** (thinking, Qwen3.5-35B-A3B) / **83.3%** (Vals, BenchLM)
- Terminal Bench 2: **40.5%** — Qwen HF / BenchLM
- CodeForces: **2028** Elo (Qwen3.5-35B-A3B, lineup best) — Qwen HF
- OJBench: **36.0%** — Qwen HF
- FullStackBench en: **58.1%** / zh: **55.0%** — Qwen HF
- SWE-Rebench: **53.7%** — BenchLM
- SWE-bench Pro: **no direct Flash score** (BenchLM coming soon; Qwen3.5-35B-A3B no score)
- Vibe Code Bench: **no direct score**

Long context:

- AA-LCR: **58.5%** (thinking, Qwen3.5-35B-A3B) / **72%** (reasoning, AA) — Qwen HF / OpenRouter
- LongBench v2: **59.0%** — Qwen HF
- Native 1M context verified (Model Studio)
- MRCRv2 / RULER / GraphWalks: no direct Flash scores

Multimodal:

- MMMU: **81.4%** (thinking, Qwen3.5-35B-A3B) — Qwen HF / BenchLM
- MMMU-Pro: **75.1%** — Qwen HF / BenchLM
- MathVision: **83.9%** — Qwen HF
- MathVista(mini): **86.2%** — Qwen HF
- DynaMath: **85.0%** — Qwen HF
- OCRBench: **91.0%** (lineup best) — Qwen HF
- MMBench EN: **91.5%** — Qwen HF
- RealWorldQA: **84.1%** — Qwen HF
- MMStar: **81.9%** — Qwen HF
- CharXiv: **77.5%** — Qwen HF / BenchLM
- OmniDocBench1.5: **89.3%** — Qwen HF
- CC-OCR: **80.7%** — Qwen HF
- AI2D_TEST: **92.6%** — Qwen HF
- VideoMME (w sub): **86.6%** / (w/o sub): **82.5%** — Qwen HF
- VideoMMMU: **80.4%** — Qwen HF
- MLVU: **85.6%** — Qwen HF
- ScreenSpot Pro: **68.6%** — Qwen HF / BenchLM
- OSWorld-Verified: **54.5%** — BenchLM
- AndroidWorld: **71.1%** (lineup best) — Qwen HF
- TIR-Bench: **55.5% / 38.0%** (w/ CI / w/o CI) — Qwen HF
- V*: **92.7% / 89.5%** — Qwen HF
- Medical VQA: **78.7% / 62.0% / 61.4%** — Qwen HF

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** BFCL v4 Live 81.8% (top of 5), TAU2-Bench 81% (lineup best), AndroidWorld 71% (best), BFCL-V4 67%, BrowseComp 61%, Terminal-Bench 2.1 ~40% (est from 35B). Strong parallel tool use (93.8% live_parallel) but TB 2.1 modest. Capped by TB 2.1 gap vs Gemini 3.5 Flash-Lite (54%).
- **Reasoning: 70/100.** GPQA Diamond 84%, MMLU-Pro 85%, IFEval 92%, HLE 22%, AA Index 42 (Flash) / 19 (non-reasoning) / 19 (reasoning) — conflicting. Good GPQA/MMLU/IFEval but HLE and AA Index low. Capped by HLE 22% and AA Index confusion (42 vs 19).
- **Context window: 90/100.** 1M native context (Model Studio). AA-LCR 58–72%, LongBench v2 59%. Top-tier context capacity. Capped by AA-LCR thinking 58% vs reasoning 72% discrepancy.
- **Multimodal: 82/100.** Native text/image/video. MMMU 81%, MMMU-Pro 75%, MathVision 84%, OCRBench 91% (best), MMBench 92%, VideoMME 87%, ScreenSpot 69%, AndroidWorld 71% (best). Exceptional vision-language breadth. Capped by text-only output, no audio generation.
- **Coding: 70/100.** SWE-bench Verified 69% (thinking) / 72% (HF), LiveCodeBench 75% (thinking) / 83% (Vals), Terminal-Bench 2 41%, CodeForces 2028 (best), SWE-Rebench 54%. Strong LiveCodeBench/CodeForces but SWE-bench and TB 2 modest. Capped by TB 2 41% and no SWE-Pro score.
- **Cost efficiency: 95/100.** $0.10/$0.40 (Intl flat) — extremely cheap for 1M context multimodal. Blended ~$0.17/M. Free tier 1M tokens (Singapore). Open weights (Apache 2.0) for self-host. Among best value in class.
- **Overall Score: 77/100.** Mean of (72+70+90+82+70)/5 = 76.8 → 77. Queue shows 75.6 — close. BenchLM: Gemini 3.5 Flash-Lite leads 49.7 vs 42.7 (but only 5 shared benchmarks). Best fit: exceptional price/performance for 1M-context multimodal agentic workloads; 3B active MoE enables high throughput.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Alibaba Cloud Model Studio docs/pricing, Qwen HF model card (Qwen3.5-35B-A3B), BenchLM (Gemini 3.5 Flash-Lite vs Qwen3.5 Flash), OpenRouter comparison, SectorHQ/Neo BFCL v4 Live, Juejin/ReLE evaluation, Vals AI LinkedIn, Elosia Models, NC Bench); scores normalized 1–100 per model-comparison.md methodology. **Critical note:** Most benchmarks from Qwen3.5-35B-A3B open-weight proxy (functionally equivalent per Alibaba); Flash-specific scores only for LiveCodeBench (Vals), SWE-bench (Vals), BFCL v4 Live, pricing. Conflicting AA Intelligence Index (41.8 vs 19.4 vs 19) noted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.