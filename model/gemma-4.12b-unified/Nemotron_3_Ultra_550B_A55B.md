## Gemma 4 12B Unified

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's open-weight unified multimodal model (12B params, encoder-free architecture) with native image, audio, and video understanding. Apache 2.0 license.
- **Provider / access:** Google DeepMind (open-weight, Apache 2.0) — available on Hugging Face, ModelScope, Kaggle, Google Colab, and local deployment (Transformers, vLLM, SGLang, llama.cpp, Ollama, MLX).
- **Release / knowledge:** Released July 2026; knowledge cutoff January 2025 (technical report arXiv:2607.02770).
- **IDs:** `google/gemma-4-12B` (HF), `google/gemma-4-12B-it` (instruction-tuned), quantized variants (53+ on HF).
- **Context window:** 262,144 tokens (256K).
- **Modalities:** Text, image, audio, video in; text out. Encoder-free unified architecture (raw patches/waveforms projected directly into LLM).
- **Pricing:** Open-weight (free to self-host); no official paid API. Inference provider costs vary.

### Raw benchmarks found
- **MMLU-Pro:** 77.2% (Gemma 4 12B Unified).
- **AIME 2026 (no tools):** 77.5%.
- **LiveCodeBench v6:** 72.0%.
- **Codeforces ELO:** 1659.
- **GPQA Diamond:** 78.8%.
- **Tau2 (avg over 3):** 69.0%.
- **HLE (no tools):** 5.2%.
- **BigBench Extra Hard:** 53.0%.
- **MMMLU:** 83.4%.
- **MMMU Pro:** 69.1%.
- **OmniDocBench 1.5 (edit distance, lower better):** 0.164.
- **MATH-Vision:** 79.7%.
- **MedXPertQA MM:** 48.7%.
- **CoVoST (ASR, excl. Chinese):** 38.5.
- **FLEURS (lower better, excl. Chinese):** 0.069.
- **MRCR v2 8-needle 128K:** 43.4%.
- **BenchLM Overall (Gemma 4 12B):** 36.27/100 (#133 of 959, partial coverage).
- **Terminal-Bench / DeepSWE / SWE-Bench:** Not directly reported for 12B Unified.
- **Claw-Eval:** Not reported.
- **Cost per task / speed:** Self-host free; 12B fits consumer GPU (24GB VRAM for BF16, less for quantized). Optimized for on-device.

### Normalized scores (1–100)
- **Tool use: 62/100.** Tau2 69% (mid, frontier ~75%+), MRCR 43% at 128K (mid). No Terminal-Bench, MCP Atlas, AutomationBench, GDPval. Encoder-free architecture helps latency but agentic benchmarks missing.
- **Reasoning: 70/100.** GPQA Diamond 78.8% (frontier 90%+ → ~70), AIME 77.5% (frontier 95%+ → ~65), HLE 5.2% (very low), BigBench Extra Hard 53% (mid), MMMLU 83.4% (strong). Math reasoning strong; long-form reasoning (HLE) weak.
- **Context window: 90/100.** 256K native (methodology: 200K-500K = 65-84; 256K ≈ 75-80). MRCR 43% at 128K shows retrieval capability.
- **Multimodal: 85/100.** Native image, audio, video in (encoder-free unified). MMMU Pro 69%, MATH-Vision 79.7%, OmniDocBench 0.164 edit distance (good), CoVoST 38.5 ASR. Full multimodal input.
- **Coding: 68/100.** LiveCodeBench 72% (frontier 90%+ → ~65), Codeforces ELO 1659 (strong competitive programming). No SWE-Bench, DeepSWE, SWE-Atlas. Coding strong for size but not agentic coding frontier.
- **Cost efficiency: 100/100.** Open-weight Apache 2.0 — free to self-host; 12B runs on consumer hardware.
- **Overall Score: 75/100.** Mean of (62 + 70 + 90 + 85 + 68) / 5 = 75.