# Laguna XS 2.1 — findings by Muse Glimmer 30B

> Source: Poolside / Laguna-XS-2.1, Hugging Face model card, Poolside release blog, OpenRouter
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's 33B total parameter Mixture-of-Experts model with 3B activated parameters per token, designed for agentic coding and long-horizon work on a local machine. Upgraded from Laguna XS.2 with native reasoning support and stronger multilingual coding and terminal task performance.
- **Provider / access:** Hugging Face `poolside/Laguna-XS-2.1`; OpenRouter `poolside/laguna-xs-2-1` free/paid; Ollama `laguna-xs-2.1`; local via vLLM, SGLang, Transformers, llama.cpp, TRT-LLM.
- **Release / knowledge:** 2026-07-02 release; knowledge cutoff not published.
- **IDs:** `poolside/Laguna-XS-2.1`; OpenRouter `poolside/laguna-xs-2-1`.
- **Context window:** 262,144 tokens total; 256K used for official evaluations; up to 32,768 output tokens.
- **Modalities:** Text in / text out; native interleaved reasoning; tool/function calling; no image/audio/video input.
- **Pricing (as of 2026-10-27):** OpenRouter $0.06 / 1M input, $0.12 / 1M output, $0.03 / 1M cache read; limited-time free route available. Poolside API listed at $0.10 / $0.20 / $0.05 per 1M input / output / cache-read.
- **Architecture:** 33B total / 3B active MoE, 256 experts + 1 shared, 40 layers mixed sliding-window / global attention, sigmoid gating with per-layer rotary scales, FP8 KV cache; license OpenMDW-1.1.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** mean pass@1 over 5 attempts per task (Poolside official model card, Laude Harbor Framework)
- SWE-Bench Pro public dataset: **47.6%** mean pass@1 over 2 attempts per task (Poolside official model card)
- No verified public Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas scores found.

Reasoning / knowledge:

- Native reasoning support with interleaved thinking between tool calls confirmed; no verified public GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index scores found.

Coding:

- SWE-bench Verified: **70.9%** mean pass@1 over 4 attempts per task (Poolside official model card)
- SWE-bench Multilingual: **63.1%** mean pass@1 over 4 attempts per task (Poolside official model card)
- No verified public LiveCodeBench, SciCode, Aider Polyglot, DeepSWE scores found for exact model ID.

Long context:

- 256K/262K context used in evaluations; no verified public MRCR / RULER / GraphWalks retrieval-at-length result found.

### Normalized scores (1–100)

Derived from the raw numbers above using methodology in `model-comparison.md`:

- **Tool use: 79/100.** Strong SWE-bench Verified 70.9% and SWE-Bench Pro 47.6% with native tool calling; 37.5% Terminal-Bench 2.0 and lack of broader agent benchmarks cap the score.
- **Reasoning: 63/100.** Interleaved reasoning supported for agent workflows; no standalone GPQA/HLE/Intelligence Index numbers published, so score stays conservative.
- **Context window: 76/100.** Verified 262K window exceeds 200K tier, below 500K+ top tier; no dedicated retrieval benchmark.
- **Multimodal: 15/100.** Text-only model.
- **Coding: 88/100.** 70.9% SWE-bench Verified and 63.1% multilingual are excellent for 3B-active local model, reinforced by 47.6% SWE-Bench Pro.
- **Cost efficiency: 100/100.** Free route available on OpenRouter and paid pricing $0.06/$0.12 per 1M is highly competitive.
- **Overall Score: 64/100.** Mean of the five quality dims: (79 + 63 + 76 + 15 + 88) / 5 = 64.2 → 64.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; Hugging Face model card, Poolside blog introducing Laguna XS 2.1, Poolside release notes, OpenRouter pricing; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using same headings.
