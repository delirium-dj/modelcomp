# Ling 2.6 1T — findings by GPT 5.5

- Source: InclusionAI (`ling-2.6.1t`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 1T
- **Short description:** InclusionAI's trillion-parameter "instant response" model optimized for high capability per output token, agent workflows, and coding.
- **Provider / access:** Hugging Face/open weights and hosted providers.
- **Release / knowledge:** Technical report published June 2026; cutoff not stated.
- **IDs:** `inclusionAI/Ling-2.6-1T`, `ling-2.6-1t`.
- **Context window:** Public materials and routes commonly report **262K** context.
- **Modalities:** Text/code; no verified native multimodal support.
- **Pricing (as of 2026-10-09):** Public route comparisons report about **$0.075/M input** and **$0.625/M output** for Ling-2.6-1T on some providers.
- **Architecture:** Trillion-parameter MoE with hybrid linear attention integrating Lightning Attention and MLA.

### Raw benchmarks found

Agent / tool use:

- Ling/Ring 2.6 technical report: Ling-2.6 is optimized for instant response generation and high capability per output token (`https://arxiv.org/abs/2606.15079`).
- Public community summaries cite strong BFCL-V4, TAU2-Bench, IFBench, Claw-Eval, PinchBench, and long-context MRCR performance, but exact rows were not recovered from primary snippets.

Reasoning / knowledge:

- Technical report reports **IFBench 57.62** for Ling-2.6-1T in accessible snippets.

Coding:

- Public release discussion positions it for real agentic workflows and coding; no exact SWE-bench row found.

Long context:

- Public community summaries report long-context MRCR coverage from **16K-256K**.

### Normalized scores (1–100)

- **Tool use: 76/100.** Agent/tool benchmark families and technical-report positioning support strong tool credit.
- **Reasoning: 70/100.** IFBench 57.62 and 1T scale support good reasoning, capped by limited exact rows.
- **Context window: 78/100.** 262K context and MRCR 16K-256K coverage are strong.
- **Multimodal: 20/100.** No native multimodal support verified.
- **Coding: 72/100.** Coding/workflow positioning is strong, capped by missing standard coding rows.
- **Cost efficiency: 86/100.** $0.075/$0.625 is strong value for 1T scale.
- **Overall Score: 63/100.** Half-up mean of the five quality dimensions; best fit is cost-efficient open agent/coding workflows.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

