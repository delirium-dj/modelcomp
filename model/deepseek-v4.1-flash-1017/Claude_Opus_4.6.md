# DeepSeek V4.1 Flash 1017 — findings by Claude Opus 4.6

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash-1017`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** October 17, 2026 performance-optimized snapshot of DeepSeek V4.1 Flash with improved KV cache compression, faster task execution, and enhanced agentic/coding outputs. A Pareto improvement delivering higher accuracy with shorter outputs.
- **Provider / access:** DeepSeek API (`https://api.deepseek.com`), OpenRouter, Hugging Face (open weights). Chat Completions API.
- **Release / knowledge:** October 17, 2026; knowledge cutoff not publicly disclosed
- **IDs:** `deepseek/deepseek-v4.1-flash-1017`; MIT license open-weights
- **Context window:** 1,000,000 tokens (1M) total; ≥256K max output — verified via Hugging Face model card
- **Modalities:** Text, image in; text out; reasoning yes (configurable effort 0–100); tool calls yes; JSON mode yes
- **Pricing (as of 2026-11):** $0.30 / $1.20 per 1M input/output tokens (standard); $0.15 / $0.60 off-peak; cached input $0.006 per 1M
- **Architecture:** MoE (Causal Encoder-Decoder), 552B total parameters, asymmetric routing with fewer active params per token; MIT license

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **~42+%** (improved from 31.2% on initial V4.1 Flash release) (source: mindstudio.ai)
- BabyVision (with tools): **~92.5%** (source: Hugging Face model card)
- Chartography (with tools): **~83.0%** (source: Hugging Face model card)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (pass@1): **90.1%** (reasoning_effort=100) (source: Hugging Face / deepseek.com)
- HLE: **42.6%** (text-only); up to ~63.9% with tools (source: Hugging Face / deepseek.com)
- LCR / MLCR: no verified public score found
- Apex Bench v1.1: **72.1** (source: Hugging Face model card)

Coding:

- DeepSWE v1.1: **77.0%** (Mini-SWE-V2 harness, improved from 74.2%) (source: deepseek.com / Hugging Face)
- LiveCodeBench: **~82–93.5%** depending on version/harness (v6: ~90–93%) (source: openrouter.ai / deepinfra.com)
- SWE-bench Verified: no verified standalone score found for this specific snapshot
- SciCode / AA-SciCode: no verified public score found

Long context:

- 1M token context window with Compressed Sparse Attention (CSA); no MRCR/RULER/GraphWalks retrieval benchmarks found

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench ~42% is a significant improvement over the initial release but below top-tier models. BabyVision 92.5% and Chartography 83.0% with tools show strong visual-agent capabilities. Capped by lack of broader tool-use benchmarks.
- **Reasoning: 88/100.** GPQA Diamond 90.1% is excellent. HLE 42.6% (text-only) is moderate but climbs to ~63.9% with tools. Apex Bench 72.1 is competitive. Strong scientific and logical reasoning at this price point.
- **Context window: 90/100.** 1M native context with advanced CSA compression and ≥256K max output — among the best specifications available. KV cache compression optimizations are a differentiator.
- **Multimodal: 55/100.** Supports text and image inputs with text output. No audio or video input. Vision benchmarks (BabyVision, Chartography) show functional but not leading multimodal capability.
- **Coding: 87/100.** DeepSWE 77.0% is strong. LiveCodeBench 82–93% range is competitive with frontier models. Significant improvement over the initial release. Capped by lack of SWE-bench Verified specific number.
- **Cost efficiency: 90/100.** $0.30/$1.20 per 1M tokens (standard) and $0.15/$0.60 off-peak is extremely competitive for a model of this caliber. MIT open-weights allow self-hosting for further cost reduction.
- **Overall Score: 80/100.** Mean of (82 + 88 + 90 + 55 + 87) / 5 = 80.4, rounded to 80. An outstanding value proposition combining frontier-competitive reasoning and coding with aggressive pricing and open weights.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepSeek V4.1 Flash 1017 Hugging Face Model Card](https://huggingface.co)
  - [DeepSeek Official API Pricing](https://deepseek.com)
  - [OpenRouter DeepSeek V4.1 Flash 1017 Listing](https://openrouter.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
