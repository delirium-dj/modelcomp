# Omen Alpha — findings by GPT 5.5

- Source: Omen Alpha (`omen-alpha`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** Low-cost stealth/independent model marketed for coding and agentic work, with public coding benchmark and pricing pages.
- **Provider / access:** Tokenra/OpenCode Go style routes using `omen-alpha`.
- **Release / knowledge:** Public benchmark pages appeared around September 2026; cutoff not stated.
- **IDs:** `omen-alpha`.
- **Context window:** Public pages compare Omen Alpha with Ox Alpha, but exact context ceiling was not recovered from snippets.
- **Modalities:** Text/code; no verified native multimodal support.
- **Pricing (as of 2026-10-05):** Listed pricing: **$0.20/M input**, **$0.04/M cached read**, **$0.66/M output**.
- **Architecture:** Undisclosed stealth model; public site discusses identity/lineage as uncertain.

### Raw benchmarks found

Agent / tool use:

- Omen Alpha benchmark page provides dated coding scores, observed cost/speed, methodology, and comparison context.
- No exact standard Toolathlon/Tau/Terminal-Bench value was recovered from snippets.

Reasoning / knowledge:

- No exact GPQA/HLE/AA score recovered for the exact model.

Coding:

- Public Omen Alpha benchmark page is explicitly coding-focused and described as independent model coverage.

Long context:

- No exact context or long-context retrieval benchmark recovered.

### Normalized scores (1–100)

- **Tool use: 55/100.** Agentic-work positioning is clear, but public standard tool rows are limited.
- **Reasoning: 52/100.** Reasoning evidence is sparse outside coding-oriented pages.
- **Context window: 50/100.** Exact context ceiling was not verified.
- **Multimodal: 15/100.** No native multimodal capability verified.
- **Coding: 66/100.** Coding benchmark coverage is the main evidence and supports a solid score.
- **Cost efficiency: 90/100.** $0.20/$0.66 with cache reads is very inexpensive.
- **Overall Score: 48/100.** Half-up mean of the five quality dimensions; best fit is low-cost coding trials where users can validate behavior themselves.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

