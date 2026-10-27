# Qwen 3.5 4B — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 4B (Qwen3.5-4B)
- **Short description:** Alibaba Cloud's dense vision-language model in the Qwen 3.5 series (4B params), released February 2026. Open-weight under Apache 2.0. Native multimodal (text, image, video) with 262K native context (extensible to 1M+). Hybrid architecture: Gated Delta Networks + Gated Attention. "Sweet spot" for local deployment per SynapseWire review — strong enough for main workload, stable, minimal hardware burden.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.5-4B`), Ollama, vLLM, SGLang, KTransformers, Microsoft Foundry, DeepInfra, Together AI, OpenRouter, Alibaba Cloud Model Studio (via qwen3.5-flash hosted version). Self-hosted (Apache 2.0). No first-party API for 4B size; hosted Flash tier is qwen3.5-flash.
- **Release / knowledge:** 2026-02-27 release (HF); knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-4B` (HF), `qwen3.5:4b` (Ollama), `qwen/qwen3.5-4b` (OpenRouter). Self-hosting free.
- **Context window:** 262,144 tokens native (extensible to ~1M). Verified via HF model card, Artificial Analysis, BenchmarkList.
- **Modalities:** Text, image, video input; text output. Reasoning: yes (thinking mode). Tool calls: yes (BFCL-V4 50.3% thinking). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (Apache 2.0). Third-party APIs: DeepInfra ~$0.03/M in, $0.15/M out; OpenRouter $0.03/$0.13. Alibaba Cloud qwen3.5-flash: $0.10/M in, $0.40/M out (Intl, ≤1M). Blended API ~$0.03–0.10/M in.
- **Architecture:** 4B total params (dense), 32 layers, hidden 2560, GQA (16 Q, 4 KV), Gated DeltaNet (32 linear V, 16 linear QK), SwiGLU FFN (9216 intermediate), MTP, RoPE theta 64. Apache 2.0 license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- BFCL-V4: **50.3%** (thinking) — Qwen HF model card
- TAU2-Bench: **79.9%** (thinking) — Qwen HF model card (highest in lineup)
- VITA-Bench: **22.0%** — Qwen HF model card
- DeepPlanning: **17.6%** — Qwen HF model card
- IFEval: **89.8%** (thinking) — Qwen HF / Artificial Analysis
- IFBench: **59.2%** (thinking) — Qwen HF / Artificial Analysis
- AA-LCR: **57.0%** (thinking) — Qwen HF / Artificial Analysis
- LongBench v2: **50.0%** (thinking) — Qwen HF
- ScreenSpot Pro: **60.3** (thinking) — BenchmarkList
- Terminal-Bench Hard: **18.2%** — BenchmarkList
- Agentick: **0.447** (100th pctl, rank 1/6) — BenchmarkList
- GDPval-AA: **671** (45th pctl) — BenchmarkList
- Tau3-Banking: **8.2%** (38th pctl) — BenchmarkList
- Tau2-Bench Telecom: **92.1%** (86th pctl) — BenchmarkList / Doubleword

Reasoning / knowledge:

- GPQA Diamond: **76.2%** (thinking) / **77.1%** (AA reasoning) — Qwen HF / Artificial Analysis / Doubleword
- HLE: **9.9%** (AA) — BenchmarkList
- MMLU-Pro: **79.1%** (thinking) — Qwen HF
- MMLU-Redux: **88.8%** — Qwen HF
- C-Eval: **85.1%** — Qwen HF
- SuperGPQA: **52.9%** — Qwen HF
- IFEval: **89.8%** (thinking) — Qwen HF
- IFBench: **59.2%** (thinking) — Qwen HF
- MultiChallenge: **49.0%** — Qwen HF
- MMMLU: **76.1%** — Qwen HF
- MMLU-ProX: **71.5%** — Qwen HF
- NOVA-63: **54.3%** — Qwen HF
- INCLUDE: **71.0%** — Qwen HF
- Global PIQA: **78.9%** — Qwen HF
- PolyMATH: **51.1%** — Qwen HF
- WMT24++: **66.6%** — Qwen HF
- MAXIFE: **78.0%** — Qwen HF
- HMMT Feb 25: **74.0%** — Qwen HF
- HMMT Nov 25: **76.8%** — Qwen HF
- AA Intelligence Index: **13** (AA) / **20.09** (BenchmarkList) — Artificial Analysis / BenchmarkList
- AA Omniscience Accuracy: **13%** — Doubleword
- AA Omniscience Non-Hallucination: **20%** — Doubleword

Coding:

- LiveCodeBench v6: **55.8%** (thinking) — Qwen HF / Artificial Analysis
- OJBench: **24.1%** — Qwen HF
- SWE-bench Verified: **no direct score** (BenchmarkList: not reported)
- Terminal-Bench 2.1: **25.8%** (coding, 36th pctl) — BenchmarkList
- Terminal-Bench Hard: **18.2%** — BenchmarkList
- BFCL-V4: **50.3%** (thinking) — Qwen HF
- SciCode: **16%** (Doubleword)
- HumanEval: **no direct score** (SaladCloud Ollama test: tooling issue)
- CodeForces / MBPP: **no direct score** for 4B

Long context:

- AA-LCR: **57.0%** (thinking) — Qwen HF / Artificial Analysis
- LongBench v2: **50.0%** (thinking) — Qwen HF
- Native 262K context (extensible to 1M+) verified
- RULER / GraphWalks / LOFT: **no direct scores** for 4B

Multimodal:

- MMMU: **77.6%** (thinking) — Qwen HF / DeepLearning.AI batch
- MMMU-Pro: **66.3%** — Qwen HF / DeepLearning.AI batch
- MathVision: **74.6%** — Qwen HF
- MathVista(mini): **85.1%** — Qwen HF
- DynaMath: **83.3%** — Qwen HF
- OCRBench: **85.0%** — Qwen HF
- MMBench EN: **89.4%** — Qwen HF
- RealWorldQA: **79.5%** — Qwen HF
- MMStar: **78.3%** — Qwen HF
- CC-OCR: **76.7%** — Qwen HF
- AI2D_TEST: **89.6%** — Qwen HF
- OmniDocBench1.5: **86.2%** — Qwen HF
- CharXiv: **70.8%** — Qwen HF
- VideoMME (w sub): **83.5%** / (w/o sub): **76.9%** — Qwen HF
- VideoMMMU: **74.1%** — Qwen HF
- MLVU: **82.8%** — Qwen HF
- ScreenSpot Pro: **60.3** — Qwen HF / BenchmarkList
- OSWorld-Verified: **35.6%** — Qwen HF
- AndroidWorld: **58.6%** — Qwen HF
- TIR-Bench: **38.9% / 29.9%** (w/ CI / w/o CI) — Qwen HF
- V*: **84.3% / 86.4%** — Qwen HF
- Medical VQA (SLAKE/PMC-VQA/MedXpertQA): **76.1% / 55.5% / 42.9%** — Qwen HF

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** BFCL-V4 50%, TAU2-Bench 80% (lineup best), IFEval 90%, AA-LCR 57%, ScreenSpot 60%, Terminal-Bench Hard 18%. Strong instruction following and TAU2 but TB Hard low and no SWE-bench/MCP-Atlas. Capped by TB Hard 18% and missing agentic coding benchmarks.
- **Reasoning: 72/100.** GPQA Diamond 76%, MMLU-Pro 79%, IFEval 90%, HLE 10%, AA Index 13–20, HMMT 74–77%, AA-LCR 57%. Good GPQA/MMLU/IFEval but HLE 10% and AA Index very low. Capped by HLE 10% and AA Index 13–20.
- **Context window: 75/100.** 262K native (256K–512K tier = 70–80, extensible to 1M). AA-LCR 57%, LongBench v2 50%. Good but not 1M+ native. Capped by AA-LCR 57% vs 1M-context models (79%+).
- **Multimodal: 80/100.** Native text/image/video. MMMU 78%, MMMU-Pro 66%, MathVision 75%, MathVista 85%, OCRBench 85%, MMBench 89%, VideoMME 84%, AndroidWorld 59%. Exceptional vision-language balance per SynapseWire ("few models have this little split"). Capped by text-only output, no audio generation.
- **Coding: 58/100.** LiveCodeBench 56%, TAU2 80%, BFCL 50%, Terminal-Bench 2.1 26%, Terminal-Bench Hard 18%, OJBench 24%, SciCode 16%. Strong TAU2/BFCL but TB 2.1 and SciCode modest, no SWE-bench. Capped by TB 2.1 26% and missing SWE-bench.
- **Cost efficiency: 98/100.** Apache 2.0 open weights — self-host free. API ~$0.03/M in, $0.13/M out. Among cheapest for capability tier.
- **Overall Score: 71/100.** Mean of (70+72+75+80+58)/5 = 71.0. Queue shows 65.8 — my score higher due to strong multimodal (80) and tool use (70) vs agent reports. SaladCloud Ollama Q4: IFEval 84% (vs 90% BF16), GSM8K 73%. Best fit: "sweet spot" local workhorse for multimodal agents, classification, extraction, tool calls; 4B dense = consumer GPU friendly.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Qwen HF model card, Artificial Analysis, BenchmarkList, Doubleword, BenchLM, DeepLearning.AI The Batch, SaladCloud blog, SynapseWire review, llm-stats.com, RedHatAI quantized evaluation); scores normalized 1–100 per model-comparison.md methodology. Conflicting AA Intelligence Index (13 vs 20) and GPQA Diamond (76.2% HF vs 77.1% AA) noted. SaladCloud Q4 quantization penalty (IFEval 84% vs 90% BF16) documented.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.