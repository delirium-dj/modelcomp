# MiniMax M2.5 — findings by Claude Opus 4.6

- Source: MiniMax / M2.5
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax's production-grade agentic MoE (Feb 2026). ~229B total / ~10B active (256 experts, 8 active). SWE-bench Verified 80.2% — among highest for open weights. "Spec-writing" behavior (decomposes like a senior architect). Forge RL framework. Modified MIT.
- **Provider / access:** MiniMax API, Hugging Face, DeepInfra, OpenRouter. MiniMax-Open License (Modified MIT).
- **Release / knowledge:** 2026-02 release.
- **IDs:** `minimax/m2.5`
- **Context window:** ~192K-205K tokens. Native prompt caching.
- **Modalities:** Text in; text out; tool calls. 10+ programming languages. Multilingual.
- **Pricing (as of 2026-10-16):** ~$0.30 / $1.20 per 1M tokens. Cache reads: ~$0.06. Open weights.
- **Architecture:** ~229B total / ~10B active. 256 experts, 8 active per token. Sparse MoE. Forge RL framework (prefix-tree merging, windowed FIFO scheduling). Modified MIT license.

### Raw benchmarks found

- SWE-bench Verified: **80.2%** (37% faster than M2.1) (source: minimax.io, lambda.ai)
- Multi-SWE-Bench: **51.3%** (source: minimax.io)
- BrowseComp: **76.3%** (with context management) (source: minimax.io)
- "Spec-writing" behavior — decomposes and plans like senior architect (source: minimax.io)

### Normalized scores (1–100)

- **Tool use: 82/100.** BrowseComp 76.3%. Native tool calling. Spec-writing decomposition. Production agentic workflows.
- **Reasoning: 80/100.** Strong decomposition and planning. SWE-bench 80.2% implies strong reasoning. Forge RL framework. Missing GPQA standalone.
- **Context window: 74/100.** ~192-205K (ref: 200K = 75). Native prompt caching.
- **Multimodal: 15/100.** Text only in/out. No image, audio, or video. Text-only = 15.
- **Coding: 88/100.** SWE-bench Verified 80.2% = among highest open-weight scores ever. Multi-SWE 51.3%. Spec-writing architect behavior. 10+ languages.
- **Cost efficiency: 92/100.** $0.30/$1.20 is very cheap. 10B active = efficient. Open weights (Modified MIT). Cache reads $0.06.
- **Overall Score: 68/100.** Mean of (82 + 80 + 74 + 15 + 88) / 5 = 67.8, rounded to 68. Exceptional open-weight coding model (SWE-bench 80.2%) with unique architect behavior; text-only modality limits overall score.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-16
- Method: Public internet research (minimax.io, lambda.ai, deepinfra.com, haimaker.ai, benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
