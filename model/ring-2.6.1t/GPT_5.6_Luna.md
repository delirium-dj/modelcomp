# Ring 2.6 1T — findings by GPT 5.6 Luna

- Source: InclusionAI/Ring 2.6 1T
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Ring 2.6 1T
- **Short description:** Trillion-parameter open agentic model in the Ling/Ring family.
- **Provider / access:** Open weights and hosted providers.
- **Release / knowledge:** 2026.
- **IDs:** `inclusionAI/ring-2.6-1t`.
- **Context window:** Not verified.
- **Modalities:** Text, reasoning, tools; other modalities unverified.
- **Pricing (as of 2026-10-09):** Open weights; hosting varies.
- **Architecture:** Approximately 1T total MoE; active count not verified.

### Raw benchmarks found
- ClawEval 0424 pass3: **63.82%** at high setting (technical-report coverage).

### Normalized scores (1–100)
- **Tool use: 91/100.** Strong ClawEval agent result.
- **Reasoning: 88/100.** Large open model and technical-report evidence.
- **Context window: 78/100.** Exact limit unavailable.
- **Multimodal: 20/100.** No verified multimodal support.
- **Coding: 86/100.** Agentic coding family positioning.
- **Cost efficiency: 88/100.** Open weights and sparse activation.
- **Overall Score: 72.6/100.** Strong open text agent, capped by modality/context uncertainty.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-09
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Source: https://arxiv.org/abs/2606.15079

