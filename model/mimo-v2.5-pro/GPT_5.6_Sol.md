# MiMo-V2.5-Pro — findings by GPT 5.6 Sol

- Source: Xiaomi MiMo (`XiaomiMiMo/MiMo-V2.5-Pro`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Pro
- **Short description:** Xiaomi's open-weight text flagship tuned for long-horizon reasoning, software engineering, and general agents.
- **Provider / access:** Xiaomi MiMo API/OpenRouter and open weights `XiaomiMiMo/MiMo-V2.5-Pro`.
- **Release / knowledge:** Public beta/open release 2026-04-23; cutoff not disclosed.
- **IDs:** `xiaomi/mimo-v2.5-pro`, `XiaomiMiMo/MiMo-V2.5-Pro`; no verified Zen Free ID.
- **Context window:** 1,000,000 tokens ([Xiaomi release documentation](https://mimo.mi.com/docs/en-US/news/latest/v2.5-open-sourced)).
- **Modalities:** Text input/output, reasoning, tool calling; Pro is text-focused, unlike the omnimodal base V2.5.
- **Pricing (as of 2026-10-07):** Open weights; hosted price varies by route and Xiaomi has reduced it since launch, so no stale launch rate is asserted.
- **Architecture:** Open-weight hybrid sliding/global-attention sparse MoE; public summaries report over 1T total / 42B active parameters.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1,581 Elo**; ClawEval: **63.8**; τ3-Bench: **72.9**.
- Terminal-Bench 2.0: **68.4%** ([developer guide summarizing Xiaomi's release](https://docs.bankofai.io/llmservice/models/mimo-v2.5-pro/)).
- Terminal-Bench 2.1, MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- HLE was included in Xiaomi's comparison, but no accessible exact value was verified.
- GPQA Diamond, LCR/MLCR, CritPt, Omniscience: no verified public score found.

Coding:

- SWE-bench Pro: **57.2%**; SWE-bench Verified: **78.9%** (Xiaomi-reported agent runs).
- SWE-Bench AgentLess base: **35.7%** three-shot (official base-model table).
- LiveCodeBench, SciCode, DeepSWE: no verified public score found.

Long context:

- Xiaomi documents a native 1M window; no verified MRCR/RULER score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval 1581, ClawEval 63.8, τ3 72.9, and Terminal-Bench 68.4 show broad strong agency.
- **Reasoning: 83/100.** Strong general-agent and long-horizon evidence supports high capability, capped by missing accessible numeric science rows.
- **Context window: 96/100.** Native 1M context is exceptional, with no full-window retrieval measurement.
- **Multimodal: 15/100.** The Pro checkpoint is text-only; omnimodal evidence belongs to the separate base model.
- **Coding: 89/100.** SWE-bench Verified 78.9 is excellent, while SWE-Pro 57.2 and AgentLess 35.7 show a lower hard-repository ceiling.
- **Cost efficiency: 94/100.** Open weights and aggressive hosted repricing offer strong value, excluding large self-hosting costs.
- **Overall Score: 74/100.** Half-up mean of the five non-cost dimensions; best for text-only long-context coding and multi-step agents.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-07
- Method: Fresh public internet research using Xiaomi's release materials, official weights, and source-linked benchmark summaries; scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
