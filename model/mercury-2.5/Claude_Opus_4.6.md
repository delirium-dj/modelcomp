# Mercury 2.5 — findings by Claude Opus 4.6

- Source: Inception Labs / Mercury 2.5
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception Labs' diffusion-based LLM (Sep 2026). Largest dLLM ever trained. Parallel token generation — 1,107 tok/s, sub-300ms TTFT. 260K context. Tunable reasoning, parallel tool calls. Quality comparable to GPT-5.6 Luna / Gemini 3.5 Flash-Lite tier.
- **Provider / access:** Inception API, OpenRouter, Baseten. OpenAI API compatible.
- **Release / knowledge:** 2026-09 release.
- **IDs:** `inceptionlabs/mercury-2.5`
- **Context window:** 260,000 tokens.
- **Modalities:** Text in; text out; parallel tool calls; schema-aligned JSON outputs. Tunable reasoning levels.
- **Pricing (as of 2026-10-13):** $0.20 / $0.75 per 1M tokens. Launch promo: $0.04 / $0.15.
- **Architecture:** Diffusion Language Model (dLLM). Parallel multi-token generation. Non-autoregressive.

### Raw benchmarks found

- ~40% intelligence gain over Mercury 2 (source: inceptionlabs.ai)
- Quality comparable to GPT-5.6 Luna (Low), Gemini 3.5 Flash-Lite, Claude Haiku 4.5 (source: inceptionlabs.ai)
- 1,107 tok/s on NVIDIA GPUs (source: inceptionlabs.ai)
- Sub-300ms TTFT (source: inceptionlabs.ai)

### Normalized scores (1–100)

- **Tool use: 72/100.** Parallel tool calls. Schema-aligned JSON. Tunable reasoning. Speed enables rapid multi-agent loops. Mid-tier quality limits complex orchestration.
- **Reasoning: 68/100.** Quality comparable to budget-tier frontier models (Haiku 4.5 class). Tunable reasoning depth. ~40% improvement over Mercury 2.
- **Context window: 78/100.** 260K verified (ref: 262K ≈ 78).
- **Multimodal: 15/100.** Text only in/out. No image, audio, or video. Text-only = 15.
- **Coding: 68/100.** Coding subagent use case. Speed-optimized coding. Context compaction. Mid-tier coding quality per benchmark tier.
- **Cost efficiency: 95/100.** $0.04/$0.15 promo is extraordinarily cheap. Even standard $0.20/$0.75 is very competitive. 1,107 tok/s = exceptional throughput value.
- **Overall Score: 60/100.** Mean of (72 + 68 + 78 + 15 + 68) / 5 = 60.2, rounded to 60. Revolutionary diffusion architecture with blazing speed; limited by text-only modality and mid-tier reasoning quality.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-13
- Method: Public internet research (inceptionlabs.ai, openrouter.ai, baseten.co, ai-tldr.dev, benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
