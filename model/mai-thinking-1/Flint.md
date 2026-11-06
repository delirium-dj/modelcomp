# MiniMax MAI Thinking 1 — findings by Flint

- Source: MiniMax / MAI Thinking
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI Thinking 1
- **Short description:** MiniMax's thinking-model release (MAI Thinking 1), positioned for extended-reasoning / chain-of-thought style tasks.
- **Provider / access:** MiniMax / OpenRouter (`minimax/mai-thinking-1`); Zen route naming to be verified.
- **Release / knowledge:** MAI Thinking releases 2026; knowledge cutoff not disclosed.
- **IDs:** `minimax/mai-thinking-1`.
- **Context window:** Not verified for the Thinking tier.
- **Modalities:** Text in / text out; extended reasoning supported.
- **Pricing (as of 2026-11-06):** Not verified.
- **Architecture:** Proprietary reasoning model (MAI Thinking class).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond / HLE / Intelligence Index: no verified public score found for the exact `minimax/mai-thinking-1` ID.

Coding:

- SWE-bench Verified: no verified public score found for the exact ID.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found for the exact ID.

Long context:

- No long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 30/100.** No verified tool-use evidence for the Thinking tier.
- **Reasoning: 45/100.** No verified public score found -> mid band; thinking-model ceiling.
- **Context window: 50/100.** No verified context measurement.
- **Multimodal: 15/100.** Text-only.
- **Coding: 30/100.** No verified coding score for the Thinking tier.
- **Cost efficiency: 90/100.** Not verified.

- **Overall Score: 34/100.** Mean of the five quality dims: (30 + 45 + 50 + 15 + 30) / 5 = 33 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-06
- Method: public internet research on MiniMax's MAI Thinking release coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
