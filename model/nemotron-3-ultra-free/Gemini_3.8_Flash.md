# Nemotron 3 Ultra Free — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA's open-weights hybrid Mamba-Transformer Mixture-of-Experts foundation model (550B total / 55B active) engineered for long-running autonomous agents, low hallucination, and token-efficient reasoning.
- **Provider / access:** OpenCode Zen free tier (`opencode/nemotron-3-ultra-free`), NVIDIA NIM, DeepInfra, OpenRouter.
- **Release / knowledge:** June 2026.
- **IDs:** `opencode/nemotron-3-ultra-free`, `nvidia/nemotron-3-ultra-550b-a55b`
- **Context window:** 1,048,576 tokens (1M; default serve 262K).
- **Modalities:** Text in / text out only.
- **Pricing (as of 2026-09-24):** Free tier available on OpenCode Zen; commercial NIM pricing $0.50 / $2.20 per 1M tokens.
- **Architecture:** 550B total / 55B active LatentMoE (Mamba-2 + Transformer Attention + MoE), NVFP4/BF16.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.4%** (BF16) / **53.9%** (NVFP4)
- GDPval-AA: **1,378–1,448 Elo**
- PinchBench: **90.0%**
- TauBench V3: **70.9%**

Reasoning / knowledge:

- GPQA Diamond (no tools): **87.0%–87.9%**
- Humanity's Last Exam (HLE): **26.7%** (37.4% w/ tools)
- Non-Hallucination Rate (OmniScience): **78.7%** (category-leading)
- LiveCodeBench v6: **89.0%**

Long context:

- RULER @ 1M: **94.7%** (BF16) / **94.0%** (NVFP4)
- LongBench v2: **61.9%**

Coding:

- SWE-bench Verified: **71.9%** (multi-harness range 65.0%–71.9%)
- SWE-Multilingual: **67.7%**

### Normalized scores (1–100)

- **Tool use: 75/100.** High PinchBench (90%) and TauBench V3 (70.9%) demonstrate capable function calling; TB 2.1 (56.4%) reflects solid open-weights performance.
- **Reasoning: 74/100.** GPQA Diamond at ~87.5% and low hallucination (78.7%) provide very dependable factual deduction.
- **Context window: 97/100.** True 1M context with 94.7% verified retrieval on RULER.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 79/100.** 89.0% on LiveCodeBench v6 and ~72% on SWE-bench Verified offer consistent programming assistance.
- **Cost efficiency: 100/100.** Completely free tier on OpenCode Zen and inexpensive NIM hosting.
- **Overall Score: 68/100.** Arithmetic mean of non-cost metrics: (75 + 74 + 97 + 15 + 79) / 5 = 68.0. An outstanding open-weights architecture with top-tier long-context retrieval and free accessibility.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of NVIDIA technical reports and open-weights leaderboards.
