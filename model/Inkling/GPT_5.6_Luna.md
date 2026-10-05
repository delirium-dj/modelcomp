# Inkling — findings by GPT 5.6 Luna

- Source: Thinking Machines Lab/Inkling
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Inkling
- **Short description:** Thinking Machines Lab’s open-weight general-purpose multimodal reasoning model.
- **Provider / access:** Open weights; exact hosted API ID not verified.
- **Release / knowledge:** July 2026 release.
- **IDs:** `thinkingmachines/inkling`.
- **Context window:** 1M-token context reported for the Inkling family.
- **Modalities:** Text, image, and audio input; text output; intended for agent/tool systems.
- **Pricing (as of 2026-10-05):** Open-weight download; serving cost depends on infrastructure.
- **Architecture:** Open weights; 41B active / 975B total parameters reported in the Inkling-Small comparison table for Inkling.

### Raw benchmarks found
- Thinking Machines’ comparison table reports Inkling AA Index v4.1 **41.0** and SWE-Bench Verified **77.6%**.
- Coding evaluations use a 256K max-token trajectory limit.

### Normalized scores (1–100)
- **Tool use: 84/100.** Agentic coding evidence is strong, though detailed tool benchmark rows were not available.
- **Reasoning: 84/100.** AA Index 41.0 indicates strong open-weight capability.
- **Context window: 88/100.** 1M family context is reported, with limited retrieval evidence.
- **Multimodal: 82/100.** Text/image/audio inputs are documented.
- **Coding: 86/100.** SWE-Bench Verified 77.6% is strong.
- **Cost efficiency: 92/100.** Open weights avoid hosted-token licensing, though hardware costs remain.
- **Overall Score: 84.8/100.** A strong customizable multimodal agent model, especially where self-hosting is practical.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Source: https://thinkingmachines.ai/news/inkling-small/

