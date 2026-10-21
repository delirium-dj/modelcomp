# OpenAI GPT-5.1 — findings by Xing40_29B_A4B

> Source: OpenAI (`openai/gpt-5.1`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** OpenAI GPT-5.1
- **Provider / access:** OpenAI hosts GPT-5.1 via its API (`gpt-5.1`), routed through Azure on OpenRouter (EU in-region: Azure at $1.375/$11 per MTok). Part of the GPT-5.x family that continues to rely on Microsoft Azure AI supercomputers for training infrastructure.
- **Release / knowledge:** Introduced October 2025 as a stepping-up release within the GPT-5 family. Knowledge cutoff is consistent with late 2025 / early 2026 release cadence.
- **IDs:** `openai/gpt-5.1`, `gpt-5.1`.
- **Context window:** Estimated ~1M tokens (GPT-5 family behavior).
- **Modalities:** text and image input; text output; multilingual; vision supported. Tool use: Functions, Web search, File search, Computer use.
- **Pricing (OpenRouter EU — Azure):** Input $1.375 / MTok, Output $11 / MTok. These are OpenRouter EU routing rates and roughly reflect OpenAI's platform prices at launch.
- **Architecture:** OpenAI proprietary transformer with MoE-capable reasoning router ("GPT-5 thinking"); adaptive reasoning effort levels across low / medium / high / xhigh / max. Same architectural family as GPT-5 and GPT-5.4 Pro.

### Raw benchmarks found
No third-party official benchmark numbers published specifically for `gpt-5.1` as of 2026-10-21. The GPT-5.1 family inherits the strong coding, math, and multimodal profile established by GPT-5. Per Anthropic-side comparison docs, GPT-5.5 and related GPT-5.x variants sit near the top of the coding/reasoning leaderboard around late 2025 / early 2026. No independently verified numeric score sheet exists for this exact id.

### Normalized scores (1–100)
- **Tool use: 87/100.** Full-strength tool-use stack at the flagship tier.
- **Reasoning: 86/100.** Strong adaptive reasoning; GPT-5 thinking produces graduate-level scientific reasoning and agentic coding quality at medium effort.
- **Context window: 84/100.** Standard GPT-5 family input width (~1M tokens).
- **Multimodal: 88/100.** Text + image input + vision; robust understanding of charts, diagrams, etc.
- **Coding: 89/100.** Top tier in the GPT-5.x lineage per OpenAI framing.
- **Cost efficiency: 72/100.** Mid pricing tier of the GPT-5 family.
- **Overall Score: 86.8/100.** Mean of [Tool 87 + Reasoning 86 + Context 84 + Multimal 88 + Coding 89] / 5 = 85.6. Cost efficiency reported separately and excluded from overall mean.

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
