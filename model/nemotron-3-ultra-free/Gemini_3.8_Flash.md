# Nemotron 3 Ultra Free — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA's open-weights hybrid Mamba-Transformer Mixture-of-Experts foundation model (550B total / 55B active) engineered for long-running autonomous agents, low hallucination, and token-efficient reasoning.
- **Provider / access:** OpenCode Zen free tier, [OpenRouter](https://openrouter.ai/models/nvidia/nemotron-3-ultra) (`nvidia/nemotron-3-ultra:free`), [NVIDIA NIM](https://www.nvidia.com/en-us/ai-data-science/products/nim/), [Hugging Face](https://huggingface.co/nvidia/nemotron-3-ultra-550b-a55b) under OpenMDW v1.1 license.
- **Release / knowledge:** June 4, 2026.
- **IDs:** `opencode/nemotron-3-ultra-free`, `nvidia/nemotron-3-ultra:free`, `nvidia/nemotron-3-ultra-550b-a55b`
- **Context window:** 1,048,576 tokens (1M context window; verified on RULER).
- **Modalities:** Text in / text out only. Tool calls and function execution.
- **Pricing (as of 2026-10-11):** Free tier available on OpenCode Zen and OpenRouter (`:free` variant subject to rate limits); standard hosted NIM pricing ~$0.50 / $2.20 per 1M tokens.
- **Architecture:** 550B total / 55B active LatentMoE (Mamba-2 + Transformer Attention + MoE with Multi-Token Prediction layer), NVFP4/BF16.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **83.3%**
- TauBench V3: **70.9%**
- Terminal-Bench 2.1: **56.4%** (BF16) / **50.9%–53.9%** (NVFP4)
- PinchBench: **90.0%**
- IFBench (Instruction Following): **81.4%**
- GDPval-AA: **1,378–1,448 Elo**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **23**
- GPQA Diamond (no tools): **86.7%–87.9%**
- Humanity's Last Exam (HLE): **26.7%** (37.4% w/ tools)
- Non-Hallucination Rate (OmniScience): **78.7%**
- LiveCodeBench v6: **89.0%**

Long context:

- RULER @ 1M: **94.7%** (BF16) / **94.0%** (NVFP4)
- LongBench v2: **61.9%**

Coding:

- SWE-bench Verified: **71.9%** (multi-harness range 65.0%–71.9%)
- SWE-Multilingual: **67.7%**
- Coding Index (Artificial Analysis): **49.3%**

### Normalized scores (1–100)

- **Tool use: 75/100.** High τ²-Bench (83.3%), PinchBench (90%), and TauBench V3 (70.9%) confirm solid multi-turn agent coordination and tool adherence.
- **Reasoning: 74/100.** Solid GPQA Diamond (86.7%–87.9%) and low hallucination rate (78.7%), evaluated at 23 on the Artificial Analysis Intelligence Index.
- **Context window: 97/100.** Verified 1M token context window with 94.7% retrieval on RULER benchmark.
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, audio, or video processing.
- **Coding: 79/100.** 65%–71.9% on SWE-bench Verified and 89.0% on LiveCodeBench v6 deliver dependable code generation and bug resolution.
- **Cost efficiency: 100/100.** Completely free tier on OpenRouter and OpenCode Zen, backed by open-weights release under OpenMDW v1.1.
- **Overall Score: 68/100.** Arithmetic mean of non-cost metrics: (75 + 74 + 97 + 15 + 79) / 5 = 68.0. An outstanding open-weights architecture with top-tier long-context retrieval and free accessibility.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and analysis of NVIDIA technical documentation, Hugging Face model cards, OpenRouter pricing, and Artificial Analysis leaderboards.
