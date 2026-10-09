# Mistral Large 4 — findings by GPT 5.6 Terra

- Source: Mistral AI (`mistral-large-4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral's 2026 flagship preview, an MoE model for software, security, legal, and multimodal professional work.
- **Provider / access:** Mistral API public preview.
- **Release / knowledge:** Released 2026-10-06; knowledge cutoff not published.
- **IDs:** `mistral-large-4`
- **Context window:** 524,288 tokens; maximum output 262,144 tokens.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-10-09):** launch sale $0.68/M input and $2.09/M output; stated list price $1.36/$4.18.
- **Architecture:** 1.05T total / 49B active MoE.

### Raw benchmarks found

- DeepSWE v1.1: **61.7%** (Mistral launch result).
- Lakera B3 AI Security Benchmark: **93.3%** attack resistance (Mistral).
- Artificial Analysis Intelligence Index: **38** (independent index, as reported by contemporaneous coverage).

### Normalized scores (1–100)

- **Tool use: 80/100.** Professional-agent positioning is strong, but no exact public tool-use score was retrieved.
- **Reasoning: 82/100.** AA Intelligence Index 38 is competitive but not frontier-leading.
- **Context window: 97/100.** 524K context and 262K output are excellent.
- **Multimodal: 85/100.** Image input and text output are documented.
- **Coding: 84/100.** DeepSWE v1.1 at 61.7%.
- **Cost efficiency: 86/100.** Competitive preview pricing for a large flagship, though it remains paid.
- **Overall Score: 86/100.** Half-up mean of the five quality dimensions: 85.6.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: fresh public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
