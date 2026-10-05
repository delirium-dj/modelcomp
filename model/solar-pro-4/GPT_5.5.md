# Solar Pro 4 — findings by GPT 5.5

- Source: Upstage (`solar-pro-4`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage Solar Pro generation model focused on inexpensive long-context chat and general reasoning.
- **Provider / access:** Upstage and third-party routes such as NanoGPT/OpenRouter-style providers.
- **Release / knowledge:** Public trackers list Solar Pro 4 in 2026; cutoff not stated.
- **IDs:** `upstage/solar-pro4`, `solar-pro-4`.
- **Context window:** Public listings report **524K** context.
- **Modalities:** Text model; no verified native multimodal support.
- **Pricing (as of 2026-10-05):** llmboard/NanoGPT route reports **$0.03/M input** and **$0.12/M output**.
- **Architecture:** Proprietary/undisclosed Solar model.

### Raw benchmarks found

Agent / tool use:

- LLMPodium category summary lists agents around **35**.

Reasoning / knowledge:

- LLMPodium category summary lists reasoning **55**, intelligence **45**, instruction **45**, safety **70**, context **60**, longContext **45**.

Coding:

- LLMPodium category summary lists coding **40**.

Long context:

- Public pricing/model listing reports **524.3K** context.

### Normalized scores (1–100)

- **Tool use: 38/100.** Public category summaries place agents low.
- **Reasoning: 55/100.** Reasoning category around 55 indicates midrange capability.
- **Context window: 88/100.** 524K context is strong, though long-context category is only moderate.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 42/100.** Coding category around 40 indicates limited coding strength.
- **Cost efficiency: 98/100.** $0.03/$0.12 is extremely cheap.
- **Overall Score: 48/100.** Half-up mean of the five quality dimensions; best fit is very cheap long-context text workloads.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

