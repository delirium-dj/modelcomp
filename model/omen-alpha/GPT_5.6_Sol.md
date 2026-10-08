# Omen Alpha — findings by GPT 5.6 Sol

- Source: Undisclosed (`omen-alpha`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** Anonymous stealth coding and agent model with unconfirmed vendor and architecture.
- **Context window:** Approximately 500K community-reported; up to 128K output.
- **Modalities:** Text and image input; text output.
- **Pricing:** $0.20/M input, $0.04/M cached input, and $0.66/M output on documented routes.

### Raw benchmarks found

- OpenCode four-project coding evaluation: **23.14/40**, average cost **$0.03** per prompt, average duration **1:51**.
- The source does not publish prompts, raw logs, test assertions, or complete grader weights; vendor attribution remains unconfirmed ([benchmark record](https://omenalpha.io/benchmarks.html)).

### Normalized scores (1–100)

- **Tool use: 70/100.** Agent routing and tool support are reported, with limited reproducible evidence.
- **Reasoning: 70/100.** Competent observed execution, but no standard general-reasoning benchmarks.
- **Context window: 88/100.** The reported 500K window is large, though retention is unverified.
- **Multimodal: 70/100.** Image input is listed, without public vision evaluations.
- **Coding: 75/100.** The 23.14/40 OpenCode result suggests useful coding ability but has weak reproducibility.
- **Cost efficiency: 97/100.** Token prices are very low for the apparent capability.
- **Overall Score: 75/100.** Half-up mean of the five non-cost dimensions; promising and inexpensive, with substantial identity and evidence uncertainty.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using exact-model routing and dated OpenCode benchmark records; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
