# Qwen 3.5 27B — findings by Claude Opus 4.6

- Source: Alibaba / Qwen 3.5 27B (`opencode/qwen-3.5-27b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba's dense 27B open-weights vision-language model for fast coding and multimodal reasoning. Features linear attention for exceptionally fast inference. Part of the Qwen 3.5 family. Superseded by 3.6/3.7/3.8 generations on most axes.
- **Provider / access:** OpenRouter `opencode/qwen-3.5-27b`. Apache 2.0 self-host. No Zen Free ID.
- **Release / knowledge:** Early 2026 release; knowledge cutoff approximately late 2025.
- **IDs:** `opencode/qwen-3.5-27b` (no Free ID)
- **Context window:** 262,144 total. Verified via meta.json.
- **Modalities:** Text, image, video input; text output. Dense vision-language model with linear attention.
- **Pricing (as of 2026-10-20):** ~$0.20/$1.56 per 1M (OpenRouter). Apache 2.0 self-host $0.
- **Architecture:** 27B dense parameters. Linear attention mechanisms for fast inference. Apache 2.0 open-weights. Vision-language model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / MMLU-Pro: **~85–86%** range (community tracking, competitive with 122B MoE variant due to dense scaling)

Coding:

- SWE-bench Verified: competitive with GPT-5-mini variants (community comparisons — no exact public score found)
- Note: Dense architecture yields lower inference latency than MoE equivalents

Long context:

- 262K native context. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 45/100.** No published agentic benchmarks. Dense model with tool-calling support. Capped by zero agentic data.
- **Reasoning: 60/100.** ~85–86% range on GPQA/MMLU-Pro trackers. Competitive with the larger 122B MoE variant due to dense scaling efficiency. Capped by trailing frontier models.
- **Context window: 78/100.** 262K context per tier mapping (~256K = 78).
- **Multimodal: 68/100.** Text + image + video input with vision-language capabilities. No audio. Scored at 68.
- **Coding: 55/100.** Competitive with GPT-5-mini variants per community reports. Fast inference from dense architecture is a practical advantage. Capped by lack of published SWE-bench score.
- **Cost efficiency: 85/100.** ~$0.20/$1.56 per 1M is affordable. Apache 2.0 for self-hosting. Dense 27B is easy to deploy.
- **Overall Score: 61/100.** Mean of (45 + 60 + 78 + 68 + 55) / 5 = 61.2 → 61. A fast, dense multimodal model that trades MoE efficiency for inference speed. Superseded by newer generations but remains competitive. Best for latency-sensitive multimodal tasks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Public internet research cross-referencing Hugging Face, OpenRouter, and community benchmark tracking; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
