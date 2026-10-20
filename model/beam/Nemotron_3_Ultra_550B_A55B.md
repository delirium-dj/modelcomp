## Beam

- **Name:** Beam 1.0 (Beam-1.0-501B-A23B)
- **Short description:** Reflection's first open-weight model, a 501B parameter sparse MoE with 23.4B active parameters, built for agentic coding, tool use, and token-efficient reasoning.
- **Provider / access:** Reflection (open-weight, Apache 2.0) — available on Hugging Face, via inference providers (Baseten, etc.), and quantized variants (BF16, FP8, NVFP4, GGUF).
- **Release / knowledge:** Released October 2026; knowledge cutoff June 30, 2026.
- **IDs:** `reflection/Beam-1.0-501B-A23B` (HF), `reflection/Beam-1.0-501B-A23B-FP8`, `reflection/Beam-1.0-501B-A23B-NVFP4`, quantized GGUFs from Unsloth, AtomicChat, diffbot.
- **Context window:** 1,048,576 tokens (1M).
- **Modalities:** Text in / text out only.
- **Pricing:** Open-weight (free to self-host); inference provider pricing varies (Baseten, etc.).

### Raw benchmarks found
- **Terminal-Bench 2.1:** 80.1% (BF16), 78.9% (FP8), 78.4% (NVFP4) — Harbor framework eval.
- **DeepSWE v1.1:** 43.3% (BF16), 43.0% (FP8), 42.7% (NVFP4).
- **SWE-Bench Verified:** 81.6% (BF16), 80.2% (FP8), 80.7% (NVFP4).
- **SWE-Bench Pro v2-Hard:** 76.5% (BF16), 78.4% (FP8), 78.6% (NVFP4).
- **SWE-Bench Pro v1:** 66.1% (BF16), 65.9% (FP8), 65.6% (NVFP4).
- **SWEBench Multilingual:** 78.3% (BF16), 78.1% (FP8), 77.5% (NVFP4).
- **SWE Atlas Codebase QnA:** 31.8% (BF16), 32.2% (FP8), 31.4% (NVFP4).
- **Tau3 Banking:** 36.1% (BF16), 36.8% (FP8), 35.4% (NVFP4).
- **MCP Atlas:** 80.8% (BF16), 81.5% (FP8), 80.5% (NVFP4).
- **AutomationBench (public split):** 39.3% (BF16), 38.2% (FP8), 39.8% (NVFP4).
- **BrowseComp (w/ context mgmt):** 76.8% (BF16), 76.7% (FP8), 75.6% (NVFP4).
- **DeepSearchQA (w/ context mgmt):** 80.5% (BF16), 79.6% (FP8), 81.1% (NVFP4).
- **GPQA Diamond:** 90.6% (BF16), 90.3% (FP8), 89.3% (NVFP4).
- **HLE (no tools):** 36.0% (BF16), 36.0% (FP8), 34.8% (NVFP4).
- **HLE (with tools):** 51.1% (all numerics).
- **AIME 2026:** 97.7% (BF16), 98.0% (FP8), 97.5% (NVFP4).
- **SciCode:** 49.2% (BF16), 48.3% (FP8), 46.9% (NVFP4).
- **LiveCodeBench:** 88.3% (BF16), 88.1% (FP8), 87.4% (NVFP4).
- **CriPT AA:** 16.3% (BF16), 17.4% (FP8), 15.4% (NVFP4).
- **AA-LCR:** 78.2% (BF16), 79.4% (FP8), 78.7% (NVFP4).
- **LongBench v2:** 67.5% (BF16), 67.6% (FP8), 67.2% (NVFP4).
- **IFBench:** 79.6% (BF16), 80.7% (FP8), 79.2% (NVFP4).
- **AA Omniscience Index (public split):** 10.8 (BF16), 8.8 (FP8), 9.8 (NVFP4).
- **Claw-Eval:** Not reported.
- **GDPval / OSWorld:** Not reported.
- **Cost per task / speed:** Self-host only; BF16 501B requires ~8×H100 80GB; FP8/NVFP4 reduce VRAM significantly.

### Normalized scores (1–100)
- **Tool use: 82/100.** Terminal-Bench 2.1 at 80% (frontier is ~88%+), MCP Atlas 81%, AutomationBench 39% (mid), Tau3 Banking 36% (low). Strong agentic scaffolding results but Tau3/AutomationBench lag.
- **Reasoning: 85/100.** GPQA Diamond 90.6% (frontier 90%+), HLE with tools 51% (frontier 40%+), AIME 2026 97.7% (exceptional), SciCode 49% (frontier 55%+), AA-LCR 78% (frontier 95%+), LiveCodeBench 88% (frontier 90%+). Excellent math/science reasoning; long-context reasoning (HLE w/ tools) solid.
- **Context window: 100/100.** 1M context with demonstrated 98%+ retrieval at 512K+ (BrowseComp/DeepSearchQA at 76–81% with context management).
- **Multimodal: 15/100.** Text-only model (no image, video, audio input or output).
- **Coding: 88/100.** SWE-Bench Verified 81.6% (frontier 85%+), SWE-Bench Pro v2-Hard 76.5% (frontier ~70%+), DeepSWE 43% (frontier 74%+), LiveCodeBench 88% (frontier 90%+), SWEBench Multilingual 78%. Strong across coding benchmarks; DeepSWE is the weak spot.
- **Cost efficiency: 100/100.** Open-weight Apache 2.0 — free to self-host (hardware cost only).
- **Overall Score: 74/100.** Mean of (82 + 85 + 100 + 15 + 88) / 5 = 74.