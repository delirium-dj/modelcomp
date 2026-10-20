## GPT-OSS 120B

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's first open-weight model since GPT-2, a 117B parameter MoE (5.1B active) with MXFP4 quantization for single 80GB GPU deployment. Apache 2.0 license.
- **Provider / access:** OpenAI (open-weight, Apache 2.0) — available on Hugging Face, via Groq, Together AI, Fireworks, vLLM, SGLAM, Ollama, LM Studio, Transformers.
- **Release / knowledge:** Released August 2025; knowledge cutoff September 2025 (pre-training), May 2026 (post-training).
- **IDs:** `openai/gpt-oss-120b` (HF), `openai/gpt-oss-20b` (smaller sibling), quantized variants (135+ on HF).
- **Context window:** 131,072 tokens (128K).
- **Modalities:** Text in / text out only.
- **Pricing:** Open-weight (free to self-host); inference providers vary (Groq, Together AI, etc.).

### Raw benchmarks found
- **SWE-Bench Verified:** 62.4% (OpenAI model card).
- **React Native Evals:** 71.6% (RN-Evals leaderboard).
- **AA-SciCode:** 34.0% (Artificial Analysis).
- **AA Coding Index:** 30.4% (Artificial Analysis).
- **Design Arena Website:** 969 (OpenRouter).
- **MMLU:** 90% (OpenAI model card).
- **GPQA:** 80.1% (OpenAI model card).
- **HLE:** 14.9% (OpenAI model card).
- **AA-GPQA Diamond:** 78.2% (Artificial Analysis).
- **AA-HLE:** 19.6% (Artificial Analysis).
- **AA-Omniscience Index:** -49.2% (Artificial Analysis).
- **AA-Omniscience Accuracy:** 21.8% (Artificial Analysis).
- **AA-Omniscience Hallucination Rate:** 90.8% (Artificial Analysis).
- **AA-IFBench:** 69.0% (Artificial Analysis).
- **AIME 2024:** 95.8% (OpenAI model card).
- **AIME 2025:** 92.5% (OpenAI model card).
- **MMLU-Pro:** 80.8% (HF eval).
- **GPQA Diamond (HF eval, reasoning=medium):** 80.81% / 73.1% (no tools).
- **Tau2-Bench:** 65.8% (Artificial Analysis).
- **APEX-Agents-AA:** 3.1% (Artificial Analysis).
- **GDPval-AA:** 5.4% / 745 Elo (Artificial Analysis).
- **Gert Labs:** 29.61% (Gert Labs).
- **AA Agentic Index:** 6.2% (Artificial Analysis).
- **Terminal-Bench 2.1 / DeepSWE / MCP Atlas / AutomationBench / OSWorld / BrowseComp:** Not reported on BenchLM.
- **Claw-Eval:** Not reported.
- **BenchLM Overall Score:** 37.29/100 (#154 of 959, partial coverage 25/666 benchmarks).
- **Cost per task / speed:** Self-host free; MXFP4 quantization enables single 80GB GPU (H100/MI300X). Groq serves at high throughput.

### Normalized scores (1–100)
- **Tool use: 45/100.** Tau2-Bench 65.8% (mid), APEX-Agents 3.1% (very low), GDPval-AA 5.4% (very low), Gert Labs 29.6% (low). No Terminal-Bench, MCP Atlas, AutomationBench, OSWorld. Agentic tool use weak.
- **Reasoning: 62/100.** GPQA 80.1% / 78.2% (frontier 90%+ → ~70), MMLU 90% / MMLU-Pro 80.8% (strong), HLE 14.9% / 19.6% (low), AIME 95.8% / 92.5% (exceptional math), AA-LCR 52% (frontier 95%+ → ~40), CritPt 1.1% (very low). Strong knowledge/math; long-form reasoning weak.
- **Context window: 65/100.** 128K context (methodology: 100K-200K = 50-64; 128K ≈ 55-60). Benchmarks run at 128K.
- **Multimodal: 15/100.** Text-only model (no image, video, audio input or output).
- **Coding: 55/100.** SWE-Bench Verified 62.4% (mid, frontier 85%+), React Native Evals 71.6% (good), AA-SciCode 34% (low), AA Coding Index 30.4% (low), LiveCodeBench not reported. Decent code generation; agentic coding weak.
- **Cost efficiency: 100/100.** Open-weight Apache 2.0 — free to self-host; runs on single 80GB GPU (MXFP4).
- **Overall Score: 48/100.** Mean of (45 + 62 + 65 + 15 + 55) / 5 = 48.