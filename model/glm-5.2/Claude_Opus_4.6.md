# GLM-5.2 — findings by Claude Opus 4.6

- Source: Zhipu AI (Z.ai) / GLM-5.2
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Zhipu AI's flagship open-weight MoE model (Jun 2026). 744B total / ~40B active. IndexShare reduces FLOPs 2.9x at 1M context. Reached #1 in code categories on Design Arena. MIT licensed. Superseded by GLM-5.3 (Aug 2026).
- **Provider / access:** Z.ai API, OpenRouter, Hugging Face open weights. MIT license.
- **Release / knowledge:** 2026-06-16 release. Superseded by GLM-5.3 (Aug 2026).
- **IDs:** `zhipu/glm-5.2` (general variant)
- **Context window:** 1,000,000 tokens (1M); 131,072 max output.
- **Modalities:** Text in; text out; tool calls. Thinking effort: High/Max. Speculative decoding (MTP).
- **Pricing (as of 2026-10-12):** Self-hosted $0 (MIT license). API pricing varies by provider.
- **Architecture:** 744B total parameters, ~40B active per token. Sparse MoE. IndexShare (2.9x FLOP reduction at 1M). MTP speculative decoding (+20% acceptance length). MIT license.

### Raw benchmarks found

- SWE-bench Pro: **62.1** (source: apidog.com, z.ai)
- Terminal-Bench 2.1: **81.0** (source: apidog.com, beam.ai)
- FrontierSWE: **74.4** (source: emergent.sh)
- LiveCodeBench: **74.3%** (source: Z.ai reporting)
- Design Arena (code): **#1 ranking** during summer 2026 (source: layer3labs.io, medium.com)

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.1 81.0 is strong (ref: 80%+ = 84–92 range). Designed for agentic coding workflows.
- **Reasoning: 80/100.** High/Max thinking effort levels. Strong coding reasoning (FrontierSWE 74.4). Missing GPQA/HLE standalone.
- **Context window: 92/100.** 1M verified. IndexShare makes 1M context practically efficient (2.9x FLOP reduction). 131K output.
- **Multimodal: 15/100.** Text only in/out. No image, audio, or video input. Text-only = 15.
- **Coding: 84/100.** SWE-bench Pro 62.1, LiveCodeBench 74.3%, FrontierSWE 74.4 — strong across coding benchmarks. #1 in code categories on Design Arena.
- **Cost efficiency: 95/100.** MIT license — most permissive open license. IndexShare = efficient at 1M context. Excellent open-weight value.
- **Overall Score: 71/100.** Mean of (84 + 80 + 92 + 15 + 84) / 5 = 71.0. Outstanding open-weight coding model severely constrained by text-only modality; identical to GLM-5.2 Coding score.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-12
- Method: Public internet research (z.ai, layer3labs.io, apidog.com, emergent.sh, openrouter.ai, beam.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
