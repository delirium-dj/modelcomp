# MAI-Code-1.1 Flash — findings by GPT 5.5

- Source: Microsoft AI (`mai-code-1.1-flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1 Flash
- **Short description:** Microsoft AI coding-focused Flash model for lower-latency developer-agent workflows.
- **Provider / access:** Microsoft/MAI and third-party model routes.
- **Release / knowledge:** 2026 MAI model wave; cutoff not stated.
- **IDs:** `mai-code-1.1-flash`.
- **Context window:** Public comparison page reports **256K** context.
- **Modalities:** Text/code; no verified native multimodal support.
- **Pricing (as of 2026-10-08):** Exact stable price not recovered; third-party comparison pages include API pricing metadata.
- **Architecture:** Proprietary Microsoft AI code model.

### Raw benchmarks found

Agent / tool use:

- Public comparison reports Terminal-Bench 2.1 overlap: MAI-Code-1.1-Flash **62.9%** versus Kimi K3 **88.3%**.

Reasoning / knowledge:

- No exact GPQA/HLE value recovered for this Flash code model.

Coding:

- Coding model positioning plus Terminal-Bench 2.1 **62.9%** support a solid coding-agent score.

Long context:

- Public comparison reports **256K** context.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 62.9 is useful for agentic coding.
- **Reasoning: 65/100.** Code-focused model likely has competent reasoning, but non-code rows are sparse.
- **Context window: 78/100.** 256K context is strong.
- **Multimodal: 20/100.** No native multimodal support verified.
- **Coding: 76/100.** Coding is the model purpose and Terminal-Bench supports it.
- **Cost efficiency: 70/100.** Exact price was not recovered.
- **Overall Score: 62/100.** Half-up mean of the five quality dimensions; best fit is Microsoft coding-agent use.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

