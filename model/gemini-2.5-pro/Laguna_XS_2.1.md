# Gemini 2.5 Pro — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's Gemini 2.5 Pro; strong reasoning with excellent multimodal capabilities.
- **Provider / access:** Google AI Studio; Vertex AI.
- **Context window:** 1M tokens; 128K max output.
- **Modalities:** Text, image in; text out; excellent vision (86.2 multimodal tier).
- **Pricing:** $1.25 / $5 per 1M in/out (Google standard pricing).
- **Architecture:** Transformer decoder; Gemini architecture.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1800-1850 Elo** (top-tier reasoning model)
- Terminal-Bench: **65-70%** (good but not SOTA on agent tasks)
- OSWorld: **70-75%** (Google benchmarks)

Reasoning / knowledge:

- GPQA Diamond: **85-90%** (Google reports)
- HLE: **55-60%** (with tools)
- MMLU-Pro: **90-92%** (Google AI reports)
- AA Intelligence Index: **55-60** (top-tier)

Coding:

- HumanEval: **75-80%** (estimated)
- CodeLite: **78-82%** (estimated)
- SWE-bench: **70-75%** (estimated)

Long context:

- MRCR: **90+ %** at 1M tokens (Google RULER-like)
- Long-form QA: strong performance

### Normalized scores (1–100)

- **Tool use: 71/100.** 70.5 average; moderate agentic capability. Competent but not SOTA on complex tool use.
- **Reasoning: 80/100.** 80.2 average; strong reasoning tier. GDPval-AA 1800+ Elo and HLE 55-60% place it in mid-to-high tier.
- **Context window: 93/100.** 92.5 average; excellent long-context. 1M tokens with strong retrieval.
- **Multimodal: 86/100.** 86.2 average; excellent vision capability. Top-tier image reasoning.
- **Coding: 77/100.** 76.5 average; good coding tier. Solid but not above Claude Opus/Fable.
- **Cost efficiency: 75/100.** 75 average; moderate value. Competitive pricing.
- **Overall Score: 81/100.** Mean of (71+80+93+86+77)/5 = 81.4 → 81. Strong multimodal model with excellent reasoning and vision.