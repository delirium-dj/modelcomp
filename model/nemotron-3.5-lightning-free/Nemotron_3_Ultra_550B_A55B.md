## Nemotron 3.5 Lightning Free

- **Name:** Nemotron-3.5-Lightning-30B-A3B (Free tier on NVIDIA Build / OpenCode Zen)
- **Short description:** NVIDIA's speed-optimized MoE model (30B total, 3B active) with Mamba-2 + MoE + Attention hybrid architecture. Designed as execution layer for long-running agents. Free on OpenCode Zen and NVIDIA Build (preview).
- **Provider / access:** NVIDIA (open-weight, OpenMDW License 1.1) — available on Hugging Face, NVIDIA Build (free preview), OpenCode Zen (free), and local deployment (PyTorch, NeMo, vLLM, SGLang).
- **Release / knowledge:** Released August 11, 2026; pre-training cutoff December 2025, post-training cutoff May 2026.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4` (HF), `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16`, NVIDIA Build endpoint, OpenCode Zen `opencode/nemotron-3.5-lightning-free`.
- **Context window:** Up to 1,048,576 tokens (1M).
- **Modalities:** Text in / text out only.
- **Pricing:** Free on OpenCode Zen preview and NVIDIA Build (trial); self-host free (OpenMDW license); inference providers vary.

### Raw benchmarks found
- **SWE-Bench Verified:** 51.56% (BF16), 52.80% (NVFP4) — NeMo Evaluator.
- **SWE-Bench Multilingual:** 39.33% (BF16), 36.47% (NVFP4).
- **Terminal-Bench 2.1:** 24.58% (BF16), 23.46% (NVFP4) — NeMo Evaluator.
- **PinchBench:** 85.37% (BF16), 83.43% (NVFP4).
- **BrowseComp:** 36.97% (BF16), 36.81% (NVFP4).
- **Tau3-Bench (Banking):** 9.28% (BF16), 9.48% (NVFP4).
- **GDPval-AA-V2:** 832 (BF16), 865 (NVFP4).
- **MMLU Pro:** 81.94% (BF16), 81.62% (NVFP4).
- **AA-Omniscience:** 17.50 (BF16), 16.63 (NVFP4).
- **GPQA Diamond (no tools):** 75.44% (BF16), 75.57% (NVFP4).
- **HLE (text-only, no tools):** 11.72% (BF16), 10.47% (NVFP4).
- **SciCode:** 32.60% (BF16), 31.38% (NVFP4).
- **IFBench (loose):** 71.88% (BF16), 72.88% (NVFP4).
- **AA-LCR:** 52.00% (BF16), 49.19% (NVFP4).
- **MMLU-Pro / GPQA / HLE / SciCode / IFBench / AA-LCR:** Evaluated with NeMo Gym/NeMo Evaluator.
- **BenchLM:** Not found for Lightning specifically (Ultra scored 46.77).
- **Claw-Eval:** Not reported.
- **DeepSWE / MCP Atlas / AutomationBench / OSWorld / LiveCodeBench / FrontierMath:** Not reported.
- **Cost per task / speed:** Free on Zen/Build; self-host 3B active params very efficient; NVFP4 quantization for Blackwell/Hopper.

### Normalized scores (1–100)
- **Tool use: 42/100.** Terminal-Bench 2.1 24.6% (very low, frontier ~88%), Tau3 Banking 9.3% (very low), BrowseComp 37% (low), GDPval-AA 832 (low), PinchBench 85% (strong but narrow). Optimized for execution, not planning.
- **Reasoning: 55/100.** GPQA Diamond 75.5% (frontier 90%+ → ~65), MMLU Pro 81.9% (strong), HLE 11.7% (very low), SciCode 32.6% (low), AA-LCR 52% (frontier 95%+ → ~40), AA-Omniscience 17.5 (low). Strong knowledge; long-form reasoning weak.
- **Context window: 100/100.** 1M context window confirmed; evaluated at scale.
- **Multimodal: 15/100.** Text-only model (no image, video, audio input or output).
- **Coding: 50/100.** SWE-Bench Verified 52.8% (mid, frontier 85%+), SWE-Multilingual 39.3% (low), Terminal-Bench 2.1 24.6% (very low), PinchBench 85.4% (strong but narrow). Execution-layer model; not primary coder.
- **Cost efficiency: 100/100.** Free on OpenCode Zen preview and NVIDIA Build; open-weight OpenMDW license; 3B active params extremely efficient for self-host.
- **Overall Score: 52/100.** Mean of (42 + 55 + 100 + 15 + 50) / 5 = 52.