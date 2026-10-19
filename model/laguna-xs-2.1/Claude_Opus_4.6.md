# Laguna XS 2.1 — findings by Claude Opus 4.6

- Source: Poolside / Laguna XS 2.1 (`opencode/laguna-xs-2.1`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's compact 33B/3B-active open-weights MoE for local agentic coding on consumer hardware (36GB Mac). Achieves SWE-bench Verified 70.9% despite tiny active parameter count. Released under OpenMDW-1.1 license.
- **Provider / access:** OpenRouter `opencode/laguna-xs-2.1`. Self-host via Hugging Face, Ollama, vLLM.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early-mid 2026.
- **IDs:** `opencode/laguna-xs-2.1` (free tier available)
- **Context window:** 262K tokens (256K in benchmarks). Verified via Hugging Face model card. Uses mixed sliding-window + global attention (3:1 ratio) with FP8 KV cache.
- **Modalities:** Text input/output only. No image, audio, or video. Tool calls supported.
- **Pricing (as of 2026-10-19):** $0.06/$0.12 per 1M (OpenRouter); free tier available. Open weights under OpenMDW-1.1 (self-host free, ~36GB Mac or GPU).
- **Architecture:** 33B total parameters, ~3B active (MoE). Mixed sliding-window + global attention (3:1 layer ratio). FP8 KV cache. Designed for consumer-grade hardware — fits in 36GB unified memory on Apple Silicon.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for XS specifically
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- MMLU: no verified public score found

Coding:

- SWE-bench Verified: **70.9%** (vLLM / Poolside evaluation)
- SWE-bench Multilingual: **63.1%** (GitHub / Poolside)
- SWE-bench Pro: **47.6%** (meta.json)
- LiveCodeBench: no verified public score found

Long context:

- 262K context window. No RULER/MRCR reported. Sliding-window attention may limit full-window retrieval.

### Normalized scores (1–100)

- **Tool use: 42/100.** No published agentic benchmarks. Designed for local TDD loops and terminal tool calls. With only 3B active parameters, complex multi-step agentic reasoning is limited. Capped by tiny active parameter count and lack of benchmark data.
- **Reasoning: 38/100.** No GPQA/HLE/MMLU scores. At 3B active parameters, reasoning capability is constrained. Punches above weight class per community evaluations but fundamentally limited by scale. Capped by active parameter count.
- **Context window: 78/100.** 262K context per tier mapping (~256K = 78). Sliding-window attention may limit retrieval at full window.
- **Multimodal: 15/100.** Text-only model. No image, audio, or video. Fixed at 15.
- **Coding: 52/100.** SWE-bench Verified 70.9% is impressive for 3B active parameters — significantly above expectations for the scale. SWE-bench Pro 47.6% and Multilingual 63.1% are decent. Capped by absolute capability — trails frontier models by 15-20% on SWE-bench Verified.
- **Cost efficiency: 95/100.** $0.06/$0.12 per 1M is near-free. Free tier available. Runs on a 36GB Mac. Extremely cost-effective.
- **Overall Score: 45/100.** Mean of (42 + 38 + 78 + 15 + 52) / 5 = 45.0 → 45. An impressively efficient tiny coding model that punches well above its weight. Best for developers needing local on-device coding assistance at near-zero cost. SWE-bench 70.9% at 3B active is remarkable.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing vLLM documentation, NVIDIA blog, GitHub Poolside benchmarks, and MarktechPost analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
