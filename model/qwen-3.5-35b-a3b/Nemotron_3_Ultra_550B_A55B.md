# Qwen 3.5 35B-A3B — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B-A3B (Qwen3.5-35B-A3B)
- **Short description:** Alibaba Cloud's MoE vision-language model in the Qwen 3.5 series (35B total, 3B active), released February 2026. Open-weight under Apache 2.0. Native multimodal (text, image, video) with 262K native context. Hybrid architecture: Gated Delta Networks + sparse Mixture-of-Experts (3B active). "Overall performance comparable to Qwen3.5-27B" per Alibaba Cloud. 3-5x faster inference than 27B dense.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.5-35B-A3B`), Ollama, DeepInfra, Novita AI, Together AI, OpenRouter, Alibaba Cloud Model Studio (`qwen3.5-35b-a3b`), SiliconFlow, AIHubMix, 302.AI, Kilo Gateway, Merge Gateway, Venice AI. Self-hosted (Apache 2.0). Free tier: 1M tokens (Singapore endpoint only).
- **Release / knowledge:** 2026-02-23 release (HF/Alibaba blog); knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-35B-A3B` (HF), `qwen3.5-35b-a3b` (Alibaba Cloud), `qwen/qwen3.5-35b-a3b` (OpenRouter). No vendor-hosted free tier for self-hosting.
- **Context window:** 262,144 tokens native (extensible). Verified via HF model card, Alibaba Cloud docs, Artificial Analysis.
- **Modalities:** Text, image, video input; text output. Reasoning: yes (thinking mode). Tool calls: yes (BFCL-V4 67.3%). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (Apache 2.0). Alibaba Cloud Intl: $0.25/M in, $2.00/M out (≤256K); China/Global: $0.057/M in, $0.459/M out (≤128K); $0.229/M in, $1.835/M out (128K–256K). Third-party: DeepInfra $0.14/$1.00, OpenRouter $0.14/$1.00, OrcaRouter $0.057/$0.459, AIHubMix $0.056/$0.451. Blended API ~$0.20–0.50/M. Cheaper than 27B dense.
- **Architecture:** 36B total params (3B active MoE), 40 layers (10 × (3×DeltaNet→MoE→1×Attention→MoE)), hidden 2048, GQA, Gated DeltaNet, SwiGLU, MTP, RoPE. Apache 2.0 license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- BFCL-V4: **67.3%** (thinking) — Qwen HF model card
- TAU2-Bench: **81.2%** (thinking) — Qwen HF model card (highest in lineup)
- VITA-Bench: **31.9%** — Qwen HF model card
- DeepPlanning: **22.8%** — Qwen HF model card
- BrowseComp: **61.0%** / zh: **69.5%** — Qwen HF / BenchLM
- WideSearch: **57.1%** — Qwen HF model card
- Seal-0: **41.4%** — Qwen HF model card
- HLE w/ tool: **47.4%** — Qwen HF model card
- Terminal-Bench 2.0: **40.5%** — Qwen HF / BenchLM
- OSWorld-Verified: **54.5%** — BenchLM
- Gert Labs: **29.0%** — BenchLM
- AA-LCR: **58.5%** (thinking) / **72%** (reasoning, AA) — Qwen HF / OpenRouter
- LongBench v2: **59.0%** (thinking) — Qwen HF model card
- AndroidWorld: **71.1%** — Qwen HF (highest in lineup)

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (thinking) / **84.5%** (reasoning, AA) — Qwen HF / OpenRouter
- HLE w/ CoT: **22.4%** / **21%** (reasoning, AA) — Qwen HF / OpenRouter
- MMLU-Pro: **85.3%** (thinking) — Qwen HF
- MMLU-Redux: **93.3%** — Qwen HF
- C-Eval: **90.2%** — Qwen HF
- SuperGPQA: **63.4%** — Qwen HF
- IFEval: **91.9%** (thinking) — Qwen HF
- IFBench: **70.2%** (thinking) — Qwen HF
- MultiChallenge: **60.0%** — Qwen HF
- MMMLU: **85.2%** — Qwen HF
- MMLU-ProX: **81.0%** — Qwen HF
- NOVA-63: **57.1%** — Qwen HF
- INCLUDE: **79.7%** — Qwen HF
- Global PIQA: **86.6%** — Qwen HF
- PolyMATH: **64.4%** — Qwen HF
- WMT24++: **76.3%** — Qwen HF
- MAXIFE: **86.6%** — Qwen HF
- AA Intelligence Index: **19** (reasoning) / **19.4** (non-reasoning, AA) — OpenRouter

Coding:

- SWE-bench Verified: **69.2%** (thinking) / **72.0%** (HF table) — Qwen HF / BenchLM
- LiveCodeBench v6: **74.6%** (thinking) — Qwen HF / BenchLM
- Terminal Bench 2: **40.5%** — Qwen HF / BenchLM
- CodeForces: **2028** Elo — Qwen HF (highest in lineup)
- OJBench: **36.0%** — Qwen HF
- FullStackBench en: **58.1%** / zh: **55.0%** — Qwen HF
- SWE-Rebench: **53.7%** — BenchLM
- SWE-bench Pro: **no direct score** for 35B (BenchLM: coming soon)

Long context:

- AA-LCR: **58.5%** (thinking) / **72%** (reasoning, AA) — Qwen HF / OpenRouter
- LongBench v2: **59.0%** — Qwen HF model card
- MRCR v2 8-needle 128k: **no direct score** for 35B
- Native 262K context (extensible) verified

Multimodal:

- MMMU: **81.4%** (thinking) — Qwen HF / BenchLM
- MMMU-Pro: **75.1%** — Qwen HF / BenchLM (slightly above 27B's 75.0%)
- MathVision: **83.9%** — Qwen HF
- MathVista(mini): **86.2%** — Qwen HF
- DynaMath: **85.0%** — Qwen HF
- OCRBench: **91.0%** — Qwen HF (highest in lineup)
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
- AndroidWorld: **71.1%** — Qwen HF (highest)
- TIR-Bench: **55.5% / 38.0%** (w/ CI / w/o CI) — Qwen HF
- V*: **92.7% / 89.5%** — Qwen HF
- Medical VQA: **78.7% / 62.0% / 61.4%** — Qwen HF

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 68/100.** BFCL-V4 67.3%, TAU2-Bench 81% (lineup best), BrowseComp 61%, Terminal-Bench 2.0 41%, OSWorld 55%, Gert Labs 29%, AndroidWorld 71% (best). Strong TAU2/AndroidWorld but lower BFCL/OSWorld/Gert vs 27B. Capped by BFCL 67% vs 27B's 69%, Gert 29%.
- **Reasoning: 74/100.** GPQA Diamond 84.2%, MMLU-Pro 85.3%, IFEval 91.9%, HLE 22%, AA Index 19. Good GPQA/MMLU/IFEval but HLE and AA Index lower than 27B. Capped by HLE 22% and AA Index 19 vs 27B's 24%/23.
- **Context window: 78/100.** 262K native (256K–512K tier). AA-LCR 58.5% (thinking) / 72% (reasoning), LongBench v2 59%. Lower AA-LCR thinking than 27B (66%). Capped by AA-LCR thinking gap vs 27B.
- **Multimodal: 81/100.** Native text/image/video. MMMU 81%, MMMU-Pro 75%, MathVision 84%, OCRBench 91% (best), MMBench 92%, VideoMME 87%, ScreenSpot 69%, AndroidWorld 71% (best). Slightly below 27B on MMMU/MathVision but leads OCRBench/AndroidWorld. Capped by text-only output.
- **Coding: 74/100.** SWE-bench Verified 69.2%, LiveCodeBench 75%, Terminal-Bench 2.0 41%, CodeForces 2028 (best), SWE-Rebench 54%. Lower SWE-bench/LiveCodeBench than 27B but leads CodeForces. Capped by SWE-bench 69% vs 27B's 72%, TB 2.0 41%.
- **Cost efficiency: 98/100.** Apache 2.0 open weights — self-host free. API ~$0.057–0.25/M in, $0.46–2.00/M out. Cheaper than 27B dense. Free tier 1M tokens (Singapore). Best value in lineup.
- **Overall Score: 75/100.** Mean of (68+74+78+81+74)/5 = 75.0. Model-queue shows 76.1 — close. BenchLM comparison: 27B leads 48.8 vs 45.9 overall. Best fit: MoE speed champion (3-5x faster than 27B) with comparable quality; ideal for high-throughput agentic coding where 3B active params suffice; Apache 2.0 enables commercial deployment.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Qwen HF model card, Alibaba Cloud Model Studio docs/pricing, BenchLM (direct 27B vs 35B comparison), OpenRouter/Artificial Analysis, OpenClawRadar/Habr, InsiderLLM, DigitalApplied, Sonusahani local comparison); scores normalized 1–100 per model-comparison.md methodology. Conflicting SWE-bench Verified (69.2% thinking vs 72.0% HF table) and AA-LCR (58.5% HF vs 72% AA reasoning) noted. BenchLM directly confirms 27B > 35B on overall (48.8 vs 45.9).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.