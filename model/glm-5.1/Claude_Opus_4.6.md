# GLM-5.1 — findings by Claude Opus 4.6

- Source: Zhipu AI (Z.ai) / GLM-5.1
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1
- **Short description:** Zhipu AI's agentic engineering MoE (2026). ~744-754B total / ~40B active. Engineered for multi-hour autonomous execution (8+ hours, thousands of tool calls). SWE-bench Pro 58.4 beats GPT-5.4 and Claude Opus 4.6 on specific setups. MIT licensed.
- **Provider / access:** Z.ai API, OpenRouter, DeepInfra, Ollama. MIT license open weights.
- **Release / knowledge:** 2026 (pre-5.2 release).
- **IDs:** `zhipu/glm-5.1`
- **Context window:** ~200,000 tokens; ~131K+ max output.
- **Modalities:** Text in; text out; tool calls. Long-horizon autonomous execution.
- **Pricing (as of 2026-10-13):** Self-hosted $0 (MIT). API pricing varies by provider.
- **Architecture:** ~744-754B total, ~40B active. Sparse MoE. Process-quality evaluation for self-correction. MIT license.

### Raw benchmarks found

- SWE-bench Pro: **58.4** (beats GPT-5.4 57.7, Opus 4.6 57.3 in specific setups) (source: z.ai, deepinfra.com)
- NL2Repo: massive improvement over GLM-5 (source: z.ai)
- Terminal-Bench 2.0: strong (source: z.ai)
- CyberGym: **+20.4 point leap** over prior versions (source: deepinfra.com)

### Normalized scores (1–100)

- **Tool use: 84/100.** Engineered for thousands of tool calls over 8+ hours. Self-correction loops. Strong TB 2.0 and CyberGym.
- **Reasoning: 80/100.** Process-quality evaluation enables iterative self-correction. Strong engineering reasoning. Missing standalone GPQA/HLE.
- **Context window: 75/100.** ~200K input (ref: 200K = 75). 131K output is generous. Below 1M of GLM-5.2.
- **Multimodal: 15/100.** Text only in/out. No image, audio, or video. Text-only = 15.
- **Coding: 84/100.** SWE-bench Pro 58.4 beats proprietary flagships. CyberGym +20.4 leap. NL2Repo improvements. Repository-level excellence.
- **Cost efficiency: 94/100.** MIT license. 40B active for efficient self-hosting. Open weights.
- **Overall Score: 68/100.** Mean of (84 + 80 + 75 + 15 + 84) / 5 = 67.6, rounded to 68. Exceptional agentic coding model with 8-hour endurance; text-only modality severely constrains overall.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-13
- Method: Public internet research (z.ai, deepinfra.com, serenitiesai.com, openrouter.ai, glm-ai.chat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
