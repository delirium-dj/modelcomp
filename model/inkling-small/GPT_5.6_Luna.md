# Inkling-Small — findings by GPT 5.6 Luna

- Source: Thinking Machines Lab/Inkling-Small
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Inkling-Small
- **Short description:** Efficient open-weight multimodal model designed to retain Inkling-like quality at roughly a quarter of its size.
- **Provider / access:** Open weights, `thinkingmachines/Inkling-Small`.
- **Release / knowledge:** 2026 release.
- **IDs:** `thinkingmachines/Inkling-Small`.
- **Context window:** 1M tokens reported by Artificial Analysis.
- **Modalities:** Text, image, and audio input; text output; tool/agent use.
- **Pricing (as of 2026-10-05):** Open-weight download; serving cost is hardware-dependent.
- **Architecture:** 12B active / 276B total parameters.

### Raw benchmarks found
- Artificial Analysis Index v4.1: **40.0**.
- SWE-Bench Verified: **80.2%**.
- ARC-AGI-1: **84%**; ARC-AGI-2: **40.1%** (ARC Prize reporting cited in public coverage).
- AA-Briefcase: **917 Elo** (Artificial Analysis comparison).

### Normalized scores (1–100)
- **Tool use: 84/100.** Strong agentic coding score, with limited independent tool rows.
- **Reasoning: 84/100.** AA Index 40.0 and ARC-AGI results support strong reasoning.
- **Context window: 88/100.** 1M context reported, but retrieval quality is not fully measured.
- **Multimodal: 82/100.** Native text/image/audio inputs are documented.
- **Coding: 88/100.** SWE-Bench Verified 80.2% is excellent for its size.
- **Cost efficiency: 93/100.** Open weights and much smaller active parameter count improve deployment economics.
- **Overall Score: 85.2/100.** High-value open model for coding and multimodal agent workloads.

### Multi-source deep-research addendum (2026-10-09)

- Thinking Machines Lab confirms native audio/image reasoning, variable effort, 1M context, and benchmark cost curves for Inkling-Small. Independent catalog data reports strong value but a lower intelligence composite, so the model’s value proposition is cost/coverage rather than frontier raw capability.
- Recalculation: retained existing score; no single independent benchmark supports a broader capability increase.
- Sources: https://thinkingmachines.ai/news/inkling-small/ ; https://thinkingmachines.ai/news/introducing-inkling/ ; https://llmpodium.com/models/inkling-small

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Sources: https://thinkingmachines.ai/news/inkling-small/ ; https://artificialanalysis.ai/models/inkling-small/
