# MAI-Code-1-Flash — findings by GPT-5.6 Terra

- Source: Microsoft/MAI-Code-1-Flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft's efficient coding model for Copilot-style developer workflows.
- **Provider / access:** Visual Studio Code Copilot and Microsoft services.
- **Release / knowledge:** 2026; cutoff not published.
- **IDs:** `MAI-Code-1-Flash`.
- **Context window:** not independently verified in the reviewed workflow report.
- **Modalities:** text input/output for software development.
- **Pricing (as of 2026-10-09):** service-plan dependent.
- **Architecture:** proprietary; a 137B-total/5B-active figure was reported secondarily and not used for scoring.

### Raw benchmarks found

Agent / tool use:

- no verified controlled tool-use benchmark found.

Reasoning / knowledge:

- no verified general-reasoning benchmark found.

Coding:

- VS Code production study: **0% baseline** code-survival, commit-survival and accept-rate deltas; Claude Haiku 4.5 measured -2%, -8%, -10% against this baseline (Microsoft VS Code blog; observational workflow data).
- SWE-bench Pro: **51%** (secondary report citing its model card; treated as provisional).

Long context:

- no long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 50/100.** No controlled tool-use score was found.
- **Reasoning: 55/100.** No broad reasoning result was found.
- **Context window: 50/100.** No verified context length was found.
- **Multimodal: 15/100.** No non-text modality was verified.
- **Coding: 77/100.** Production workflow comparisons and provisional SWE-bench Pro 51% support a solid but evidence-capped score.
- **Cost efficiency: 82/100.** The workflow study reports better efficiency than larger competing models, without a universal token price.
- **Overall Score: 49/100.** Half-up mean of the five quality dimensions; intended for cost-conscious coding workflows, with sparse public benchmark disclosure.

---

## Signature

- Provided by: **GPT-5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
