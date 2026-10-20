## Llama 3.2 Vision Instruct (11B)

- **Name:** Llama-3.2-11B-Vision-Instruct
- **Short description:** Meta's open-weight vision-language model (11B params) built on Llama 3.1 with a separately trained vision adapter. Optimized for visual recognition, image reasoning, captioning, and DocVQA. Llama 3.2 Community License (custom, commercial).
- **Provider / access:** Meta (open-weight, Llama 3.2 Community License) — available on Hugging Face, via vLLM, SGLang, Transformers, llama.cpp, Ollama, LM Studio, Jan. Not on major inference provider APIs yet.
- **Release / knowledge:** Released September 25, 2024; knowledge cutoff December 2023 (pretraining).
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct` (HF), `meta-llama/Llama-3.2-90B-Vision-Instruct` (larger sibling), quantized variants (20+ on HF).
- **Context window:** 131,072 tokens (128K).
- **Modalities:** Text + image in; text out. Vision adapter (cross-attention layers) feeds image encoder representations into Llama 3.1 LLM. 8 languages supported for text; English only for image+text.
- **Pricing:** Open-weight (free to self-host); Llama 3.2 Community License allows commercial use (with restrictions >700M MAU). No official paid API.

### Raw benchmarks found
- **VQAv2 (val, 0-shot):** 66.8% accuracy.
- **TextVQA (val, 0-shot):** 73.1% relaxed accuracy.
- **DocVQA (val, unseen, 0-shot):** 62.3% ANLS.
- **MMMU (val, 0-shot):** 41.7% micro avg accuracy.
- **ChartQA (test, 0-shot):** 39.4% accuracy.
- **InfographicsQA (val, unseen, 0-shot):** 43.2% ANLS.
- **AI2 Diagram (test, 0-shot):** 62.4% accuracy.
- **MMMU (val, CoT, 0-shot):** 50.7% micro avg accuracy.
- **MMMU-Pro Standard (test, 0-shot):** 33.0% accuracy.
- **MMMU-Pro Vision (test, 0-shot):** 23.7% accuracy.
- **MathVista (testmini, 0-shot):** 51.5% accuracy.
- **ChartQA (test, CoT, 0-shot):** 83.4% relaxed accuracy.
- **AI2 Diagram (test, 0-shot):** 91.1% accuracy.
- **DocVQA (test, 0-shot):** 88.4% ANLS.
- **VQAv2 (test, 0-shot):** 75.2% accuracy.
- **MMLU (CoT, 0-shot):** 73.0% macro avg accuracy.
- **MATH (CoT, 0-shot):** 51.9% final em.
- **GPQA (0-shot):** 32.8% accuracy.
- **MGSM (CoT, 0-shot):** 68.9% em.
- **BenchLM / Artificial Analysis / Vals AI / Epoch AI:** No dedicated page for 11B Vision.
- **Terminal-Bench / SWE-Bench / LiveCodeBench / DeepSWE / Tau2 / MCP Atlas / AutomationBench / GDPval / OSWorld / BrowseComp / GPQA Diamond / HLE / MMLU-Pro / FrontierMath / AIME / AA-LCR / CritPt / AA-Omniscience:** Not reported for 11B Vision specifically.
- **Claw-Eval:** Not reported.
- **Cost per task / speed:** Self-host free; 11B fits consumer GPU (24GB VRAM BF16). vLLM/SGLang/Transformers supported.

### Normalized scores (1–100)
- **Tool use: 35/100.** No agentic benchmarks (Terminal-Bench, Tau2, MCP Atlas, AutomationBench, GDPval, OSWorld, BrowseComp). Vision adapter not designed for tool use. Score capped by missing data.
- **Reasoning: 52/100.** GPQA 32.8% (frontier 90%+ → ~25), MMLU 73% (mid), MATH 51.9% (mid), MGSM 68.9% (mid), MMMU 50.7% (mid), MMMU-Pro 33% (low). Math/reasoning moderate; no GPQA Diamond, HLE, AIME, AA-LCR, CritPt, FrontierMath.
- **Context window: 60/100.** 128K context (methodology: 100K-200K = 50-64; 128K ≈ 55-60).
- **Multimodal: 75/100.** Native vision-language (image in, text out). Strong DocVQA 88.4%, ChartQA 83.4%, VQAv2 75.2%, AI2 Diagram 91.1%. MMMU 50.7%, MathVista 51.5%. No audio/video. English only for image+text.
- **Coding: 30/100.** No coding benchmarks (SWE-Bench, LiveCodeBench, DeepSWE, HumanEval, MBPP). Base Llama 3.1 has coding ability but Vision variant not evaluated on coding.
- **Cost efficiency: 100/100.** Open-weight (Llama 3.2 Community License) — free to self-host; 11B fits consumer GPU.
- **Overall Score: 50/100.** Mean of (35 + 52 + 60 + 75 + 30) / 5 = 50.