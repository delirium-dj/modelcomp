# Flint — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC) — initial research
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint
- **Short description:** Recursive's 2026 open-weight mixture-of-experts coding agent, featuring 39.8B total parameters (2.5B active), 262K context window, optimized for local file-system coding workflows on laptop-grade hardware.
- **Provider / access:** OpenWeight via Hugging Face (`RecursiveSI/flint`), OpenRouter (`recursive/flint-v1.0`), LM Studio, local deployment. Apache 2.0 license.
- **Release / knowledge:** October 21, 2026; knowledge cutoff not specified.
- **Context window:** 262,144 tokens with 128,000 max output.
- **Modalities:** Text input/output; supports reasoning and OpenAI-compatible tool calls.
- **Architecture:** Mixture-of-Experts Transformer, 39.8B total / ~2.5B active per token.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.9%** (Recursive release eval, Claude harness)
- Terminal-Bench 2.1: **54.9%** (also reported)
- Terminal-Bench Hard: **45.5%** (Artificial Analysis, rank 19)

Coding:

- SWE-bench Pro v2: **89.7%** (Recursive release eval)
- SWE-bench Verified: **74.2%** (Recursive release eval)
- Vibe Code Bench: **84.9%** (Fuzzybee review)

Long context:

- 262K token context optimized for code and task history.

Multimodal:

- Text-only; not designed for multimodal tasks.

### Normalized scores (1–100)

- **Tool use: 67/100.** TB 2.1 54.9% (saturated for local models); TB Hard 45.5% shows room against proprietary; strong for open-weight local deployment.
- **Reasoning: 60/100.** No independent reasoning benchmark scores; excels at step-by-step code reasoning but not general knowledge tasks.
- **Context window: 74/100.** 262K is excellent for code review but below 1M-tier; good for software engineering workflows.
- **Multimodal: 18/100.** Text-only coding agent; no video/image/document understanding.
- **Coding: 75/100.** SWE-bench Pro 89.7%, SWE-bench Verified 74.2%; competitive with other open-weight models, leads MoE <50B parameter class.
- **Cost efficiency: 98/100.** Fully open-source, free deployment on local hardware; beats closed models on cost/usage ratio.
- **Overall Score: 59/100.** Mean of (67+60+74+18+75)/5 = 58.8 → 59 — excellent value for local coding agent workloads.

---

## Cross-source verification

### Source 1: Official Model Card

- [Hugging Face - RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint)
- Released: October 21, 2026
- Key claims: 89.7% SWE Pro, 74.2% SWE Verified, 54.9% TB 2.1
- Architecture: 39.8B total, 2.5B active, 262K context

### Source 2: LM Studio

- Model page confirms 39.8B parameters, 262K context
- Run instructions for local deployment
- License: Apache 2.0

### Source 3: OpenRouter

- [recursive/flint-v1.0:free](https://openrouter.ai/recursive/flint-v1.0:free)
- Free API endpoint available
- Confirms reasoning support and tool calling

### Source 4: BenchmarkList (indirect)

- Ranked 19/326 on Terminal-Bench Hard (85th percentile)
- Context confirms scoring methodology

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (Recursive blog, Hugging Face docs, LM Studio, OpenRouter, Fuzzybee); scores are normalized 1–100 interpretations, not official vendor scores.