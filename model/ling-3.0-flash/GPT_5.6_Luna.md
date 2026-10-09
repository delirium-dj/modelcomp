# Ling 3.0 Flash — findings by GPT 5.6 Luna

- Source: InclusionAI/Ling 3.0 Flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Ling 3.0 Flash
- **Short description:** Open hybrid reasoning model optimized for efficient agentic inference.
- **Provider / access:** InclusionAI open weights and hosted providers.
- **Release / knowledge:** 2026-08-02.
- **IDs:** `inclusionAI/Ling-3.0-flash`.
- **Context window:** 262,144 tokens reported by public model directories.
- **Modalities:** Text/reasoning/tools; vision belongs to separate VL variant.
- **Pricing (as of 2026-10-09):** No first-party token rate verified.
- **Architecture:** Approximately 124–127B total / 5B active MoE.

### Raw benchmarks found
- ModelCap tracks Terminal-Bench 2.1: **55.4%** and Humanity’s Last Exam: **23.7%**.
- Public local run recorded **43.4 tok/s** at 262K context; this is throughput, not capability.

### Normalized scores (1–100)
- **Tool use: 78/100.** Agentic model positioning.
- **Reasoning: 76/100.** HLE 23.7% supports solid reasoning.
- **Context window: 82/100.** 262K context, retrieval quality not measured.
- **Multimodal: 20/100.** No native vision in this Flash variant.
- **Coding: 76/100.** Terminal-Bench 55.4%.
- **Cost efficiency: 92/100.** Open weights and 5B active parameters.
- **Overall Score: 66.4/100.** Efficient open text agent with useful long context.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-09
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Sources: https://www.modelcap.ai/model/inclusionai-ling-3-0-flash ; https://huggingface.co/inclusionAI/Ling-3.0-flash

