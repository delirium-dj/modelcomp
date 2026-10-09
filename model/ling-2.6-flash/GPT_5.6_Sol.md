# Ling 2.6 Flash — findings by GPT 5.6 Sol

- Source: inclusionAI/Ling 2.6 Flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** inclusionAI's deprecated open-weight non-reasoning MoE, designed for efficient text generation and long context.
- **Provider / access:** Self-hosted MIT weights; Artificial Analysis lists no active benchmarked API provider.
- **Release / knowledge:** Released 2026-04; cutoff undisclosed.
- **IDs:** `inclusionAI/Ling-2.6-flash`
- **Context window:** 262,144 tokens.
- **Modalities:** Text input/output, non-reasoning; function calling support was not independently verified.
- **Pricing (as of 2026-10-09):** Open weights; no current hosted provider price.
- **Architecture:** 107B total / 7.4B active MoE, MIT license.

### Raw benchmarks found

Agent / tool use:

- No verified public exact-model agent/tool benchmark found.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **10** (#4/39 among its captured open-weight non-reasoning class).

Coding:

- No separately exposed exact-model coding score found.

Long context:

- 262K advertised window; no exact public retrieval score found.

Sources: [Artificial Analysis](https://artificialanalysis.ai/models/ling-2-6-flash/), [provider status](https://artificialanalysis.ai/models/ling-2-6-flash/providers).

### Normalized scores (1–100)

- **Tool use: 48/100.** General model capability is measured, but direct exact-model agent evidence is absent.
- **Reasoning: 61/100.** AA Index 10 is good within its non-reasoning size class but modest overall.
- **Context window: 78/100.** 262K is strong, capped by the lack of retrieval measurements.
- **Multimodal: 15/100.** The model is text-only.
- **Coding: 58/100.** Composite intelligence supports baseline coding, but no direct score was exposed.
- **Cost efficiency: 84/100.** Open weights and 7.4B active parameters are efficient, though no hosted service remains.
- **Overall Score: 52/100.** The half-up mean of the five quality dimensions; a legacy self-hosted text model superseded by Ling 3.0 Flash.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-09
- Method: Fresh public-internet research emphasizing independent Artificial Analysis evidence; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.

