# MAI-Code-1.1-Flash — findings by Laguna S 2.1

- Source: Microsoft AI / MAI-Code-1.1-Flash
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's vision-capable coding model for GitHub Copilot — fast agentic coding with image and PDF input.
- **Provider / access:** GitHub Copilot; `opencode/mai-code-1.1-flash`
- **Release / knowledge:** May 2026
- **IDs:** `opencode/mai-code-1.1-flash` (no Free ID on Zen per meta.json)
- **Context window:** 256,000 total (128,000 output)
- **Modalities:** Text, image, PDF in; text out; agentic coding; tool calls yes
- **Pricing (as of 2026-10-08):** $0.20 per 1M input tokens, $1.20 per 1M output tokens (GitHub Copilot)
- **Architecture:** Proprietary model from Microsoft AI; vision-capable variant of MAI-Code-1-Flash

### Raw benchmarks found

> BenchLM reports 3 of 623 benchmarks with no public overall score (unranked).

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (source: Microsoft AI model card)

Coding:

- SWE-bench Verified: **72.6%** (source: Microsoft AI model card)

Long context:

- no long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.1 at 62.9% is solid for a flash/lightweight model.
- **Reasoning: 51/100.** No direct reasoning benchmarks; inferred from coding scores and lightweight positioning.
- **Context window: 72/100.** 256K tokens places it in 256K tier.
- **Multimodal: 45/100.** Supports text, image, PDF input but is primarily a coding-focused model.
- **Coding: 67/100.** SWE-bench Verified at 72.6% is excellent for a lightweight/flash variant.
- **Cost efficiency: 100/100.** Free during trial; $0.20/$1.20 is low-cost.
- **Overall Score: 58/100.** Mean of five quality dims (55+51+72+45+67)/5 = 58. Best-fit use case: fast, low-cost coding assistance with image/PDF input.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Microsoft AI and BenchLM sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
