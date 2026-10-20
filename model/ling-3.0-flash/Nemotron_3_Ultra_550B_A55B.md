## Ling 3.0 Flash

- **Name:** Ling-3.0-flash
- **Short description:** InclusionAI's native hybrid-linear MoE model (124B total, 5.1B active params). 5:1 KDA:MLA stacking, 1/64 sparse MoE. Optimized for agentic workflows with 10K+ interactive training environments. MIT license.
- **Provider / access:** InclusionAI (open-weight, MIT) — available on Hugging Face, ModelScope, OpenRouter (free), via SGLang, vLLM, KTransformers, Transformers. HiCache + Mooncake hierarchical caching.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated. Training content summary published (AI-Transparency).
- **IDs:** `inclusionAI/Ling-3.0-flash` (HF), OpenRouter `inclusionai/ling-3.0-flash:free`, quantized variants (49 on HF).
- **Context window:** 262,144 tokens native (trained 8K → 32K → 256K schedule); extensible via YaRN.
- **Modalities:** Text in / text out only. No vision/audio declared.
- **Pricing:** Open-weight (free to self-host); OpenRouter free tier. Self-host: 4×H20-3e (141GB) or 8×H100/H800 (80GB) for BF16; FP8 reduces VRAM.

### Raw benchmarks found
- **SWE-Bench Pro:** 56.6% (OpenHands harness, temp=0.6, top_p=0.95, 32K max_new_tokens, 256K ctx).
- **SWE-Bench Multilingual:** 72.4% (same harness).
- **AIME 2026:** 93.2% (MathArena).
- **HLE:** 22.7% (CAIS).
- **HMMT Feb 2026:** 87% (MathArena).
- **Terminal-Bench 2.1:** Evaluated under AA protocol (Terminus 2 harness, 2hr timeout, 3 runs, temp=0.6, top_p=1.0, 32K max_new_tokens, 256K ctx) — score not in model card.
- **MiniAppBench:** 500-task coding benchmark (temp=1.0, top_p=1.0, 128K max_tokens) — score not in model card.
- **AntSWEBench:** Internal Java/JS/Python benchmark (new feature, bug fix, refactor) — score not in model card.
- **Tau3-Banking-AA:** Aligned with AA leaderboard (GPT-5.4-mini judge) — score not in model card.
- **MCP-Atlas:** 500-task public set (official v1 harness, 20-turn limit, Gemini-2.5-Pro judge) — score not in model card.
- **SkillsBench:** Via kilo-code on 87 tasks (avg over 3 runs) — score not in model card.
- **GDPval v2-AA:** Public 220-task (Stirrup harness, 250-turn, 5hr timeout) — score not in model card.
- **WideSearch / Draco / BrowseComp (Single/Multi-Agent):** Internal search-agent harness — scores not in model card.
- **GPQA Diamond / MMLU-Pro / FrontierMath / LiveCodeBench / DeepSWE / SWE-Atlas / MMMU / Tau2 / AutomationBench:** Not reported in model card eval tables.
- **Claw-Eval:** Not reported.
- **BenchLM:** Not found for Ling-3.0-flash specifically.
- **Cost per task / speed:** Self-host free; HiCache + Mooncake L3 reduces TTFT 60-80% in long-input. MTP (Multi-Token Prediction) for lower latency. SGLang/vLLM recipes published.

### Normalized scores (1–100)
- **Tool use: 70/100.** SWE-Bench Pro 56.6% (mid), SWE-Multilingual 72.4% (strong), MCP-Atlas/ SkillsBench/ GDPval/ Tau3/ BrowseComp evaluated but scores not published. Terminal-Bench 2.1 under AA protocol but score not disclosed. Strong multilingual coding agent; broader agentic benchmarks missing public scores.
- **Reasoning: 78/100.** AIME 2026 93.2% (exceptional, frontier 95%+), HMMT Feb 2026 87% (strong math), HLE 22.7% (mid, frontier 40%+ w/ tools). No GPQA, AA-LCR, SuperGPQA, FrontierMath, CritPt published. Math reasoning exceptional; long-form reasoning moderate.
- **Context window: 90/100.** 256K native (methodology: 200K-500K = 65-84; 256K ≈ 75-80). Trained with progressive context schedule (8K→32K→256K). HiCache + Mooncake optimized for long-context. YaRN extensible.
- **Multimodal: 15/100.** Text-only model (no image, video, audio input or output).
- **Coding: 72/100.** SWE-Bench Pro 56.6% (mid), SWE-Multilingual 72.4% (strong), MiniAppBench 500-task app generation (evaluated, score not public), AntSWEBench internal (Java/JS/Python, evaluated). Strong multilingual coding; no LiveCodeBench, DeepSWE, SWE-Atlas, Vibe Code public.
- **Cost efficiency: 100/100.** Open-weight MIT — free to self-host; OpenRouter free tier. 5.1B active params efficient for inference.
- **Overall Score: 65/100.** Mean of (70 + 78 + 90 + 15 + 72) / 5 = 65.