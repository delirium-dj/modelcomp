# Claude Haiku 5.5 — findings by LongCat 2.5 Preview

- Source: Anthropic/claude-haiku-5-5
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest and most capable small model, designed for high-volume, latency-sensitive tasks such as classification, extraction, routing, and subagent workflows. Major gains over Haiku 4.5 at ~75% lower cost.
- **Provider / access:** Anthropic API (`claude-haiku-5-5`), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS, OpenRouter. Available on Pro and above plans.
- **Release / knowledge:** 2026-10-07.
- **IDs:** `anthropic/claude-haiku-5-5`
- **Context window:** 1,000,000 tokens (verified via LLM Gateway, NanoGPT, AIMLAPI); up to 128,000 output tokens.
- **Modalities:** Text, image, PDF input; Text output. Reasoning: yes (adaptive thinking). Tool calling: yes (tool calling, structured outputs, computer use).
- **Pricing (as of 2026-10-09):** $0.10/1M input, $0.50/1M output, $0.01/1M cached input (Anthropic direct). AIMLAPI: $0.13/$0.65. Extremely cost-efficient — among the cheapest capable models.
- **Architecture:** Proprietary. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Tool calling: supported (NanoGPT, Command Code)
- Structured outputs: supported (NanoGPT)
- Computer use: supported (AWS Bedrock)
- Designed for subagent workflows, classification, extraction, routing (Anthropic, beam.ai)

Reasoning / knowledge:

- Adaptive thinking capability (LLM Gateway, Anthropic)
- Specific benchmark scores not publicly listed on Anthropic's model page

Coding:

- Coding assistance, classification, live customer support (NanoGPT)
- Specific benchmark scores not publicly listed on Anthropic's model page

Long context:

- Context window: **1,000,000 tokens** (verified via LLM Gateway, NanoGPT, AIMLAPI)

Multimodal:

- Vision (image input): supported (NanoGPT, LLM Gateway)
- Native PDF input: supported (NanoGPT)

### Normalized scores (1–100)

- **Tool use: 72/100.** Tool calling + structured outputs + computer use. Designed for subagent workflows and agentic tasks. As Anthropic's small/fast model, tool use is capable but not frontier-level.
- **Reasoning: 70/100.** Adaptive thinking capability. As the small/fast model in Anthropic's lineup, reasoning is below Sonnet/Opus/Fable tiers but significantly improved over Haiku 4.5.
- **Context window: 92/100.** 1M token context window verified via multiple providers. Among the largest context windows available.
- **Multimodal: 78/100.** Text, image, and PDF input. Vision capabilities supported. No audio/video input.
- **Coding: 72/100.** Designed for coding assistance and subagent workflows. As a small/fast model, coding is capable but not at frontier level.
- **Cost efficiency: 97/100.** $0.10/$0.50 per 1M tokens — among the cheapest capable models available. ~75% cheaper than Haiku 4.5. Exceptional value for high-volume workloads.
- **Overall Score: 76.8/100.** Mean of Tool (72), Reasoning (70), Context (92), Multimodal (78), Coding (72) = 384/5 = 76.8 → 77. Best-in-class cost efficiency for high-volume, latency-sensitive workloads.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
