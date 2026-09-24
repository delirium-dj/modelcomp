# Laguna XS 2.1 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-09-24 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's 33B total parameter Mixture-of-Experts model with 3B activated parameters per token, designed for agentic coding and long-horizon work on local machines. An upgraded version of Laguna XS.2 with improved SWE-bench Multilingual and terminal-style task performance.
- **Provider / access:** Hugging Face `poolside/Laguna-XS-2.1`; OpenRouter `poolside/laguna-xs-2-1`; Ollama and llama.cpp local serving. Pipelines available for Transformers, vLLM, SGLang, and TRT-LLM.
- **Release / knowledge:** 2026-07-02 (Poolside release date); no verified exact knowledge cutoff found.
- **IDs:** `poolside/Laguna-XS-2.1`; OpenRouter `poolside/laguna-xs-2-1`.
- **Context window:** 262,144 tokens (official model card; 256K in benchmark settings).
- **Modalities:** Text in/out only; optional interleaved reasoning between tool calls and native function/tool calling. No image/audio/video input is documented.
- **Pricing (as of 2026-09-24):** OpenRouter lists $0.06 input, $0.03 cached input, and $0.12 output per 1M tokens; a free OpenRouter route also exists.
- **Architecture:** OpenMDW-1.1 open-weight MoE, 33B total / 3B active parameters, 40 layers, 256 experts plus one shared expert, mixed sliding-window/global attention, and FP8 KV cache.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** mean pass@1 over 5 attempts per task (Poolside official model card)
- SWE-bench Pro public dataset: **47.6%** mean pass@1 over 2 attempts per task (Poolside official model card)
- No exact Tau2-Bench, Toolathon, or MCP-Atlas result found for Laguna XS 2.1.

Reasoning / knowledge:

- No exact GPQA Diamond, HLE, or Artificial Analysis Intelligence Index result for Laguna XS 2.1 was found. The model card confirms native reasoning support but no independent standalone reasoning benchmark was published.

Coding:

- SWE-bench Verified: **70.9%** mean pass@1 over 4 attempts per task (Poolside official model card)
- SWE-bench Multilingual: **63.1%** mean pass@1 over 4 attempts per task (Poolside official model card)
- Aider Polyglot, LiveCodeBench, and SciCode: no verified exact-model public scores found.

Long context:

- The verified 262K context was used for the official coding-agent evaluations, but no standalone MRCR/RULER/GraphWalks retrieval-at-length result was found.

### Normalized scores (1-100)

Derived from the benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 79/100.** Strong 70.9% SWE-bench Verified, 47.6% SWE-bench Pro, and native tool calling support it; 37.5% Terminal-Bench 2.0 and the lack of broader agent benchmarks cap the score.
- **Reasoning: 63/100.** Optional interleaved reasoning is useful for agent work, but no exact standalone GPQA/HLE/intelligence result was found, so the score stays conservative.
- **Context window: 76/100.** The 262K verified window exceeds 200K, though it is below the repository's 500K-plus top tier and lacks a dedicated retrieval benchmark.
- **Multimodal: 15/100.** The exact model is text-only.
- **Coding: 88/100.** The 70.9% SWE-bench Verified and 63.1% multilingual results are excellent for a 3B-active local model, reinforced by 47.6% on SWE-bench Pro.
- **Cost efficiency: 100/100.** OpenRouter free route exists, and Poolside-hosted inference is $0.06/$0.12 per 1M tokens.
- **Overall Score: 64/100.** Mean of Tool use, Reasoning, Context window, Multimodal, Coding: (79 + 63 + 76 + 15 + 88) / 5 = 64.4 -> 64.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2.1)** — 2026-09-24
- Method: public-internet research (Hugging Face model card, Poolside release blog, OpenRouter API metadata); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_6.md`, using the same headings.