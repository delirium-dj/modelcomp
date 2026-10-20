## Qwen 3.5-122B-A10B

- **Name:** Qwen3.5-122B-A10B
- **Short description:** Alibaba's open-weight MoE model (122B total, 10B active) in the Qwen 3.5 family. Native vision-language, 262K context, strong agentic and coding benchmarks. Apache 2.0 license.
- **Provider / access:** Alibaba Qwen Team (open-weight, Apache 2.0) — available on Hugging Face, ModelScope, Alibaba Cloud Model Studio, DashScope API, and local deployment (vLLM, SGLang, Transformers).
- **Release / knowledge:** 2026 release (Qwen 3.5 family); knowledge cutoff not explicitly stated.
- **IDs:** `Qwen/Qwen3.5-122B-A10B` (HF), quantized variants available.
- **Context window:** 262,144 tokens (262K).
- **Modalities:** Image-text-to-text (image, video in; text out). No audio declared.
- **Pricing:** Open-weight (free to self-host); Alibaba Cloud Model Studio / DashScope API pricing applies for managed inference.

### Raw benchmarks found
- **Terminal-Bench 2.0:** 49.4% (model card).
- **BrowseComp:** 63.8% (model card).
- **OSWorld-Verified:** 58% (model card).
- **Tau2-Bench:** 93.6% (Artificial Analysis).
- **GDPval-AA:** 15.7% / 925 Elo (Artificial Analysis).
- **AA Agentic Index:** 9.6% (Artificial Analysis).
- **SWE-Bench Verified:** 72% (model card).
- **LiveCodeBench v6:** 78.9% (model card).
- **AA-SciCode:** 39.7% (Artificial Analysis).
- **AA Coding Index:** 45.7% (Artificial Analysis).
- **MMMU:** 83.9% (Qwen blog).
- **MMVU:** 74.7% (Qwen blog).
- **MMMU-Pro:** 76.9% (model card) / 75.0% (Artificial Analysis).
- **MathVision:** 86.2% (model card).
- **CharXiv:** 77.2% (model card).
- **V*:** 93.2% (model card).
- **LongBench v2:** 60.2% (model card).
- **AA-LCR:** 76.3% (Artificial Analysis).
- **CritPt:** 0.6% (Artificial Analysis).
- **MMLU-Pro:** 86.7% (model card).
- **SuperGPQA:** 67.1% (model card).
- **GPQA:** 86.6% (model card) / 85.7% Diamond (Artificial Analysis).
- **AA-HLE:** 25.2% (Artificial Analysis).
- **AA-Omniscience Index:** -41.5% (Artificial Analysis).
- **AA-Omniscience Accuracy:** 24.4% (Artificial Analysis).
- **AA-Omniscience Hallucination Rate:** 87.1% (Artificial Analysis).
- **IFEval:** 93.4% (model card).
- **AA-IFBench:** 75.7% (Artificial Analysis).
- **MMLU-ProX:** 82.2% (model card).
- **DeepSWE / MCP Atlas / AutomationBench / Terminal-Bench 2.1 / SWE-Atlas / FrontierMath / AIME / HLE (model card):** Not reported on BenchLM/model card.
- **Claw-Eval:** Not reported.
- **BenchLM Overall Score:** 41.71/100 (#133 of 959, partial coverage 34/666 benchmarks).
- **Cost per task / speed:** Self-host free; 122B total / 10B active MoE efficient for inference.

### Normalized scores (1–100)
- **Tool use: 68/100.** Terminal-Bench 2.0 49.4% (mid), Tau2-Bench 93.6% (exceptional), BrowseComp 63.8% (strong), OSWorld 58% (strong), GDPval-AA 15.7% (low). Strong Tau2 and OSWorld; Terminal-Bench mid.
- **Reasoning: 72/100.** GPQA 86.6% (frontier 90%+ → ~75), MMLU-Pro 86.7% (strong), AA-LCR 76.3% (frontier 95%+ → ~65), LongBench v2 60.2% (mid), AA-HLE 25.2% (low), CritPt 0.6% (very low), SuperGPQA 67.1% (mid). Strong knowledge; long-form reasoning moderate.
- **Context window: 80/100.** 262K context (methodology: 200K-500K = 65-84; 262K ≈ 75-80).
- **Multimodal: 85/100.** Native vision-language. MMMU 83.9%, MMMU-Pro 76.9%, MathVision 86.2%, MMVU 74.7%, CharXiv 77.2%, V* 93.2%. Strong vision benchmarks; no audio/video declared.
- **Coding: 70/100.** SWE-Bench Verified 72% (mid, frontier 85%+), LiveCodeBench 78.9% (frontier 90%+ → ~70), AA-SciCode 39.7% (low), AA Coding Index 45.7% (mid), Terminal-Bench 2.0 49.4% (mid). Solid SWE-Bench; agentic coding (TB2) mid.
- **Cost efficiency: 100/100.** Open-weight Apache 2.0 — free to self-host; 10B active MoE efficient.
- **Overall Score: 75/100.** Mean of (68 + 72 + 80 + 85 + 70) / 5 = 75.