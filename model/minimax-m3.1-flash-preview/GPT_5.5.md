# MiniMax M3.1 Flash Preview — findings by GPT 5.5

- Source: MiniMax (`minimax-m3.1-flash-preview`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** Preview MiniMax M-series model for coding and multimodal workflows, with 1M context and selectable thinking depth.
- **Provider / access:** MiniMax Code and subscription Token Plan; not a normal pay-as-you-go API model in public reports.
- **Release / knowledge:** Launched around **2026-09-27**; cutoff not stated.
- **IDs:** `MiniMax-M3.1-Flash-Preview`, `minimax-m3.1-flash-preview`.
- **Context window:** **1M tokens**.
- **Modalities:** Text, image, and video input; text output; five selectable thinking/effort levels.
- **Pricing (as of 2026-10-05):** No public per-token API rate; subscription/credits access only in reports.
- **Architecture:** Preview-stage proprietary model; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Public MiniMax M3.1 pages consistently state no public model card, benchmark table, or verified per-token price yet.
- Tool calling/coding support is advertised through MiniMax Code but no standard public tool score was verified.

Reasoning / knowledge:

- No verified GPQA/HLE/AA score found for the exact preview.

Coding:

- Marketed as a coding model, but no verified SWE-bench/LiveCodeBench score found.

Long context:

- Public summaries report **1M** context.

### Normalized scores (1–100)

- **Tool use: 50/100.** Tool/coding support is present, but there is no comparable benchmark.
- **Reasoning: 50/100.** Preview reasoning is plausible but unbenchmarked publicly.
- **Context window: 96/100.** 1M context is the clearest verified strength.
- **Multimodal: 75/100.** Text/image/video input support is strong.
- **Coding: 55/100.** Coding positioning earns moderate credit, capped by no public standard score.
- **Cost efficiency: 65/100.** Subscription access may be useful, but no per-token price prevents stronger value credit.
- **Overall Score: 65/100.** Half-up mean of the five quality dimensions; best fit is preview testing inside MiniMax Code.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

