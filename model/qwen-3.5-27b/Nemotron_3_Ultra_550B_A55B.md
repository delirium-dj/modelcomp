# Qwen 3.5 27B — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B (Qwen3.5-27B)
- **Short description:** Alibaba Cloud's dense 27B parameter vision-language model in the Qwen 3.5 series, released February 2026. Open-weight under Apache 2.0. Native multimodal (text, image, video) with 262K native context (extensible to 1M+). Hybrid architecture: Gated Delta Networks (linear attention) + Gated Attention. Only dense model in Qwen 3.5 medium series; all 27B params active.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.5-27B`), Ollama, vLLM, SGLang, DeepInfra, Novita AI, Together AI, OpenRouter, Alibaba Cloud Model Studio (`qwen3.5-27b`). Self-hosted (Apache 2.0, commercial use permitted). Free tier: 1M tokens (Singapore endpoint only).
- **Release / knowledge:** 2026-02-23 release (HF); knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-27B` (HF), `qwen3.5-27b` (Ollama/Alibaba Cloud), `qwen/qwen3.5-27b` (OpenRouter). No vendor-hosted free tier for self-hosting.
- **Context window:** 262,144 tokens native (extensible to 1,010,000). Verified via HF model card, Alibaba Cloud docs, Artificial Analysis.
- **Modalities:** Text, image, video input; text output. Reasoning: yes (thinking mode). Tool calls: yes (BFCL-V4 68.5%). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (Apache 2.0). Alibaba Cloud Intl: $0.30/M in, $2.40/M out (≤256K); $0.40/M in, $3.20/M out (thinking). China/Global: $0.086/M in, $0.688/M out (≤128K); $0.258/M in, $2.064/M out (128K–256K). Third-party: DeepInfra $0.27/$2.74, Atlas $0.28/$2.28. Blended API ~$0.50–0.80/M.
- **Architecture:** 27.8B total params (dense), 64 layers, hidden 5120, GQA (24 Q, 4 KV), Gated DeltaNet (48 linear V, 16 linear QK), SwiGLU FFN (17408 intermediate), MTP, RoPE theta 64. Apache 2.0 license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- BFCL-V4: **68.5%** (thinking) — Qwen HF model card (official)
- TAU2-Bench: **79.0%** (thinking) — Qwen HF model card
- VITA-Bench: **41.9%** — Qwen HF model card
- DeepPlanning: **22.6%** — Qwen HF model card
- BrowseComp: **61.0%** / **61.0%** (zh: 62.1% / 69.5%) — Qwen HF / BenchLM
- WideSearch: **61.1%** — Qwen HF model card
- Seal-0: **47.2%** — Qwen HF model card
- HLE w/ tool: **48.5%** — Qwen HF model card
- Terminal-Bench 2.0: **41.6%** — Qwen HF / BenchLM
- OSWorld-Verified: **56.2%** — BenchLM
- Gert Labs: **39.4%** — BenchLM
- AA-LCR: **66.1%** (thinking) / **64.0%** (non-reasoning, AA) — Qwen HF / OpenRouter
- LongBench v2: **60.6%** (thinking) — Qwen HF model card
- AutomationBench-AA: **no direct score** for 27B
- MCP-Atlas / MCP-Mark: **no direct score**

Reasoning / knowledge:

- GPQA Diamond: **85.5%** (thinking) / **84.2%** (non-reasoning, AA) — Qwen HF / OpenRouter
- HLE w/ CoT: **24.3%** / **23.9%** (reasoning, AA) — Qwen HF / OpenRouter
- MMLU-Pro: **86.1%** (thinking) / **86.7%** (122B comparison) — Qwen HF
- MMLU-Redux: **93.2%** — Qwen HF
- C-Eval: **90.5%** — Qwen HF
- SuperGPQA: **65.6%** — Qwen HF
- IFEval: **95.0%** (thinking) — Qwen HF (highest in lineup)
- IFBench: **76.5%** (thinking) — Qwen HF
- MultiChallenge: **60.8%** — Qwen HF
- MMMLU: **85.9%** — Qwen HF
- MMLU-ProX: **82.2%** — Qwen HF
- NOVA-63: **58.1%** — Qwen HF
- INCLUDE: **81.6%** — Qwen HF
- Global PIQA: **87.5%** — Qwen HF
- PolyMATH: **71.2%** — Qwen HF
- WMT24++: **77.6%** — Qwen HF
- MAXIFE: **88.0%** — Qwen HF
- SimpleBench: **no direct score**
- AA Intelligence Index: **22.9** (reasoning) / **19.4** (non-reasoning) — OpenRouter

Coding:

- SWE-bench Verified: **72.4%** (thinking) / **72.0%** (HF table) — Qwen HF / BenchLM / Neura Market
- LiveCodeBench v6: **80.7%** (thinking) — Qwen HF / BenchLM
- Terminal Bench 2: **41.6%** — Qwen HF / BenchLM
- CodeForces: **1899** Elo — Qwen HF
- OJBench: **40.1%** — Qwen HF
- FullStackBench en: **60.1%** / zh: **57.4%** — Qwen HF
- SWE-bench Pro: **no direct score** for 27B (BenchLM: coming soon)
- SWE-Rebench: **58.9%** — BenchLM

Long context:

- AA-LCR: **66.1%** (thinking) / **64.0%** (non-reasoning) — Qwen HF / OpenRouter
- LongBench v2: **60.6%** — Qwen HF
- MRCR v2 8-needle 128k: **no direct score** for 27B (122B: 66.9%, 35B: 58.5%)
- Native 262K context (extensible to 1M+) verified

Multimodal:

- MMMU: **82.3%** (thinking) — Qwen HF / BenchLM
- MMMU-Pro: **75.0%** — Qwen HF / BenchLM
- MathVision: **86.0%** — Qwen HF
- MathVista(mini): **87.8%** — Qwen HF
- DynaMath: **87.7%** — Qwen HF
- OCRBench: **89.4%** — Qwen HF
- MMBench EN: **92.6%** — Qwen HF
- RealWorldQA: **83.7%** — Qwen HF
- MMStar: **81.0%** — Qwen HF
- CharXiv: **79.5%** — Qwen HF / BenchLM
- OmniDocBench1.5: **88.9%** — Qwen HF
- CC-OCR: **81.0%** — Qwen HF
- AI2D_TEST: **92.9%** — Qwen HF
- VideoMME (w sub): **87.0%** / (w/o sub): **82.8%** — Qwen HF
- VideoMMMU: **82.3%** — Qwen HF
- MLVU: **85.9%** — Qwen HF
- ScreenSpot Pro: **70.3%** — Qwen HF / BenchLM
- OSWorld-Verified: **56.2%** — BenchLM
- AndroidWorld: **64.2%** — Qwen HF
- TIR-Bench: **59.8% / 42.3%** (w/ CI / w/o CI) — Qwen HF
- V*: **93.7% / 89.0%** — Qwen HF
- Medical VQA (SLAKE/PMC-VQA/MedXpertQA): **80.0% / 62.4% / 62.4%** — Qwen HF

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** BFCL-V4 68.5%, TAU2-Bench 79%, BrowseComp 61%, Terminal-Bench 2.0 42%, OSWorld 56%, Gert Labs 39%. Strong agentic tool use (BFCL/TAU2 lead lineup) but Terminal-Bench and OSWorld moderate. Capped by TB 2.0 42% and lack of AutomationBench/MCP scores.
- **Reasoning: 78/100.** GPQA Diamond 85.5%, MMLU-Pro 86.1%, IFEval 95% (lineup best), HLE 24%, AA Index 23. Excellent GPQA/MMLU/IFEval but HLE and AA Index dragged down by model size. Capped by HLE 24% and AA Index 23 vs top models (50+).
- **Context window: 80/100.** 262K native (256K–512K tier = 70–80, but extensible to 1M). AA-LCR 66% (thinking), LongBench v2 61%. Strong retrieval but not 1M+ native. Capped by AA-LCR 66% vs 1M-context models (80%+).
- **Multimodal: 82/100.** Native text/image/video. MMMU 82%, MathVision 86%, OCRBench 89%, MMBench 93%, VideoMME 87%, ScreenSpot 70%, OSWorld 56%. Exceptional vision-language across benchmarks. Capped by text-only output, no audio generation.
- **Coding: 78/100.** SWE-bench Verified 72.4%, LiveCodeBench 81%, Terminal-Bench 2.0 42%, CodeForces 1899, SWE-Rebench 59%. Strong SWE-bench/LiveCodeBench but Terminal-Bench 2.0 moderate. Capped by TB 2.0 42% and no SWE-Pro score.
- **Cost efficiency: 95/100.** Apache 2.0 open weights — self-host free. API ~$0.30–0.40/M in, $2.40–3.20/M out. Free tier 1M tokens (Singapore). Among cheapest for capability tier.
- **Overall Score: 78/100.** Mean of (70+78+80+82+78)/5 = 77.6 → 78. Model-queue shows 78.3 — very close. Best fit: best-in-class dense open-weight model for reasoning/coding/vision; single-GPU friendly (27B dense); Apache 2.0 enables commercial use.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Qwen HF model card, Alibaba Cloud Model Studio docs/pricing, BenchLM, OpenRouter/Artificial Analysis, Neura Market, OpenClawRadar/Habr, InsiderLLM, DigitalApplied); scores normalized 1–100 per model-comparison.md methodology. Conflicting SWE-bench Verified (72.0% HF table vs 72.4% BenchLM) and AA-LCR (66.1% HF vs 64.0% AA) noted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.