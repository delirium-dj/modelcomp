# GLM-5.2 Coding — findings by Claude Opus 4.6

- Source: Zhipu AI (Z.ai) / GLM-5.2 (Coding variant)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 Coding
- **Short description:** Zhipu AI's flagship open-weight coding MoE model (Jun 2026). 753B total / ~40B active parameters. Features IndexShare for 2.9x FLOP reduction at 1M context. MIT licensed — "pure open" with no regional restrictions. Optimized for long-horizon agentic SWE.
- **Provider / access:** Z.ai API, OpenRouter, Hugging Face open weights. MIT license.
- **Release / knowledge:** 2026-06-16 release.
- **IDs:** `zhipu/glm-5.2` (coding configuration)
- **Context window:** 1,000,000 tokens (1M).
- **Modalities:** Text in; text out; tool calls. Multiple thinking effort levels (High, Max).
- **Pricing (as of 2026-10-11):** Self-hosted $0 (MIT license). API pricing varies by provider.
- **Architecture:** 753B total parameters, ~40B active per token. Sparse MoE. IndexShare optimization (2.9x FLOP reduction at 1M context). MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0** (source: Z.ai reporting)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified standalone score found
- HLE: no verified public score found
- Multiple thinking effort levels for reasoning depth control

Coding:

- SWE-bench Pro: **62.1%** (source: Z.ai reporting)
- LiveCodeBench: **74.3%** (source: Z.ai reporting)
- SciCode: no verified public score found

Long context:

- 1,000,000 token context window. IndexShare architecture maintains performance over long trajectories.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB 2.1 81.0 is strong (ref: 80%+ on TB 2.1 = 85–92 range). Designed for long-horizon agentic SWE workflows. Multiple thinking effort levels.
- **Reasoning: 80/100.** Flexible thinking (High/Max effort). Missing GPQA/HLE standalone scores. Strong engineering reasoning inferred from coding benchmarks.
- **Context window: 92/100.** 1M verified. IndexShare reduces FLOPs 2.9x at 1M — meaning 1M context is actually practical, not just theoretical.
- **Multimodal: 15/100.** Text only in/out. No image, audio, or video input. Text-only = 15.
- **Coding: 83/100.** SWE-bench Pro 62.1% is strong. LiveCodeBench 74.3% is competitive. Designed specifically for coding workflows. Strong open-weight coding model.
- **Cost efficiency: 95/100.** MIT license — most permissive open license available. Free self-hosting with no restrictions. IndexShare makes 1M context economical.
- **Overall Score: 71/100.** Mean of (85 + 80 + 92 + 15 + 83) / 5 = 71.0. Exceptional open-weight coding model severely constrained by text-only modality; outstanding for pure SWE workflows.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (Z.ai, Zhipu AI docs, benchmark reports, openrouter.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
