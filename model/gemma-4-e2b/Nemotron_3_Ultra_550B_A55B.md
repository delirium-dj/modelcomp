## Gemma 4 E2B

- **Name:** Gemma 4 E2B
- **Short description:** Google's smallest Gemma 4 model (2.3B effective / 5.1B total with PLE) with native audio, vision, and text understanding. Per-Layer Embeddings (PLE) for extreme on-device efficiency. Apache 2.0 license.
- **Provider / access:** Google DeepMind (open-weight, Apache 2.0) — available on Hugging Face, ModelScope, Kaggle, Google Colab, and local deployment (Transformers, vLLM, SGLang, llama.cpp, Ollama, MLX).
- **Release / knowledge:** Released July 2026; knowledge cutoff January 2025 (technical report arXiv:2607.02770).
- **IDs:** `google/gemma-4-E2B` (HF), `google/gemma-4-E2B-it` (instruction-tuned), quantized variants available.
- **Context window:** 131,072 tokens (128K).
- **Modalities:** Text, image, audio in; text out. Uses dedicated vision (~150M params) and audio (~300M params) encoders.
- **Pricing:** Open-weight (free to self-host); no official paid API. Inference provider costs vary.

### Raw benchmarks found
- **MMLU-Pro:** 60.0% (Gemma 4 blog / upstream).
- **AIME 2026 (no tools):** 37.5%.
- **LiveCodeBench v6:** 44.0% (model card).
- **Codeforces ELO:** 633.
- **GPQA Diamond:** 43.4% (upstream) / 43.3% (Artificial Analysis).
- **Tau2 (avg over 3):** 20.8% (model card) / 20.8% (Artificial Analysis).
- **HLE (no tools):** Not reported for E2B.
- **BigBench Extra Hard:** 21.9%.
- **MMMLU:** 67.4%.
- **MMMU Pro:** 44.2% (model card) / 44.6% (Artificial Analysis).
- **OmniDocBench 1.5 (edit distance):** 0.290.
- **MATH-Vision:** 52.4%.
- **MedXPertQA MM:** 23.5%.
- **CoVoST (ASR):** 33.47.
- **FLEURS (lower better):** 0.09.
- **MRCR v2 8-needle 128K:** 19.1% (model card).
- **AA-LCR:** 16.3% (Artificial Analysis).
- **CritPt:** 0.0% (Artificial Analysis).
- **AA-GPQA Diamond:** 43.3% (Artificial Analysis).
- **AA-HLE:** 4.8% (Artificial Analysis).
- **AA-Omniscience Index:** -23.6% (Artificial Analysis).
- **AA-Omniscience Accuracy:** 6.6% (Artificial Analysis).
- **AA-Omniscience Hallucination Rate:** 32.4% (Artificial Analysis).
- **AA-IFBench:** 38.0% (Artificial Analysis).
- **AA Intelligence Index:** 7.8% (Artificial Analysis).
- **GDPval-AA:** 0.0% / 36 Elo (Artificial Analysis).
- **BenchLM Overall Score:** 29.98/100 (#184 of 959, partial coverage 19/666).
- **Terminal-Bench / DeepSWE / SWE-Bench / SWE-Atlas / MCP Atlas / AutomationBench / OSWorld / BrowseComp:** Not reported.
- **Claw-Eval:** Not reported.
- **Cost per task / speed:** Self-host free; 2.3B effective params (5.1B total with PLE) runs on phone/consumer GPU. Most efficient Gemma 4.

### Normalized scores (1–100)
- **Tool use: 30/100.** Tau2 20.8% (very low), GDPval-AA 0% (very low). No Terminal-Bench, MCP Atlas, AutomationBench, OSWorld, BrowseComp. Agentic tool use very weak.
- **Reasoning: 42/100.** GPQA 43.4% (frontier 90%+ → ~30), MMLU-Pro 60% (low), AIME 37.5% (low), BigBench Extra Hard 21.9% (very low), MMMLU 67.4% (low), AA-LCR 16.3% (frontier 95%+ → ~10), CritPt 0% (zero). Knowledge/reasoning limited by size.
- **Context window: 60/100.** 128K context (methodology: 100K-200K = 50-64; 128K ≈ 55-60). MRCR 19.1% at 128K shows limited retrieval.
- **Multimodal: 65/100.** Native image + audio in (dedicated encoders). MMMU Pro 44.2%, MATH-Vision 52.4%, CoVoST 33.5 ASR. No video declared. Weaker than E4B on vision.
- **Coding: 40/100.** LiveCodeBench 44% (frontier 90%+ → ~35), Codeforces ELO 633 (very low), AA Coding Index 7.2% (very low). No SWE-Bench, DeepSWE, SWE-Atlas. Coding very weak for agentic tasks.
- **Cost efficiency: 100/100.** Open-weight Apache 2.0 — free to self-host; 2.3B effective runs on phone/consumer GPU. Most efficient Gemma 4.
- **Overall Score: 47/100.** Mean of (30 + 42 + 60 + 65 + 40) / 5 = 47.