## Gemma 4 E4B

- **Name:** Gemma 4 E4B
- **Short description:** Google's efficient open-weight model (4.5B effective / 8B total with PLE) with native audio, vision, and text understanding. Per-Layer Embeddings (PLE) for on-device efficiency. Apache 2.0 license.
- **Provider / access:** Google DeepMind (open-weight, Apache 2.0) — available on Hugging Face, ModelScope, Kaggle, Google Colab, and local deployment (Transformers, vLLM, SGLang, llama.cpp, Ollama, MLX).
- **Release / knowledge:** Released July 2026; knowledge cutoff January 2025 (technical report arXiv:2607.02770).
- **IDs:** `google/gemma-4-E4B` (HF), `google/gemma-4-E4B-it` (instruction-tuned), quantized variants available.
- **Context window:** 131,072 tokens (128K).
- **Modalities:** Text, image, audio in; text out. Uses dedicated vision (~150M params) and audio (~300M params) encoders.
- **Pricing:** Open-weight (free to self-host); no official paid API. Inference provider costs vary.

### Raw benchmarks found
- **MMLU-Pro:** 69.4% (Gemma 4 blog / upstream).
- **AIME 2026 (no tools):** 42.5%.
- **LiveCodeBench v6:** 52.0% (model card).
- **Codeforces ELO:** 940.
- **GPQA Diamond:** 58.6% (upstream) / 57.6% (Artificial Analysis).
- **Tau2 (avg over 3):** 20.8% (model card) / 20.8% (Artificial Analysis).
- **HLE (no tools):** Not reported for E4B.
- **BigBench Extra Hard:** 33.1%.
- **MMMLU:** 76.6%.
- **MMMU Pro:** 52.6% (model card) / 51.4% (Artificial Analysis).
- **OmniDocBench 1.5 (edit distance):** 0.181.
- **MATH-Vision:** 59.5%.
- **MedXPertQA MM:** 28.7%.
- **CoVoST (ASR):** 35.54.
- **FLEURS (lower better):** 0.08.
- **MRCR v2 8-needle 128K:** 25.4% (model card).
- **AA-LCR:** 32.0% (Artificial Analysis).
- **CritPt:** 0.6% (Artificial Analysis).
- **AA-GPQA Diamond:** 57.6% (Artificial Analysis).
- **AA-HLE:** 3.8% (Artificial Analysis).
- **AA-Omniscience Index:** -19.7% (Artificial Analysis).
- **AA-Omniscience Accuracy:** 8.6% (Artificial Analysis).
- **AA-Omniscience Hallucination Rate:** 30.9% (Artificial Analysis).
- **AA-IFBench:** 44.2% (Artificial Analysis).
- **AA Intelligence Index:** 8.9% (Artificial Analysis).
- **GDPval-AA:** 0.0% / 177 Elo (Artificial Analysis).
- **BenchLM Overall Score:** 31.06/100 (#180 of 959, partial coverage 20/666).
- **Terminal-Bench / DeepSWE / SWE-Bench / SWE-Atlas / MCP Atlas / AutomationBench / OSWorld / BrowseComp:** Not reported.
- **Claw-Eval:** Not reported.
- **Cost per task / speed:** Self-host free; 4.5B effective params (8B total with PLE) runs on consumer GPU/phone. Optimized for on-device.

### Normalized scores (1–100)
- **Tool use: 35/100.** Tau2 20.8% (very low), GDPval-AA 0% (very low). No Terminal-Bench, MCP Atlas, AutomationBench, OSWorld, BrowseComp. Agentic tool use weak.
- **Reasoning: 50/100.** GPQA 58.6% / 57.6% (frontier 90%+ → ~45), MMLU-Pro 69.4% (mid), AIME 42.5% (mid), BigBench Extra Hard 33.1% (low), MMMLU 76.6% (mid), AA-LCR 32% (frontier 95%+ → ~20), CritPt 0.6% (very low). Knowledge moderate; long-form reasoning weak.
- **Context window: 60/100.** 128K context (methodology: 100K-200K = 50-64; 128K ≈ 55-60). MRCR 25.4% at 128K shows limited retrieval.
- **Multimodal: 70/100.** Native image + audio in (dedicated encoders). MMMU Pro 52.6%, MATH-Vision 59.5%, CoVoST 35.5 ASR. No video declared.
- **Coding: 45/100.** LiveCodeBench 52% (frontier 90%+ → ~45), Codeforces ELO 940 (low), AA Coding Index 9.4% (very low), AA-SciCode 24.4% (low). No SWE-Bench, DeepSWE, SWE-Atlas. Coding weak for agentic tasks.
- **Cost efficiency: 100/100.** Open-weight Apache 2.0 — free to self-host; 4.5B effective runs on phone/consumer GPU.
- **Overall Score: 52/100.** Mean of (35 + 50 + 60 + 70 + 45) / 5 = 52.