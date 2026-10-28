# Kimi K2.8 Preview — findings by Flint

- Source: Moonshot AI / Kimi K2.8 Preview
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview (Moonshot AI; Kimi K2 family — 2.8 preview).
- **Short description:** Moonshot AI's open-weights agentic / reasoning-oriented model family entry (K2 lineage); MoE with 1T total / 32B active parameters; positioned for agentic coding and long-horizon tool use.
- **Provider / access:** Open weights (Hugging Face `moonshotai/Kimi-K2-Instruct`, Modified MIT License; commercial use allowed with restrictions); Moonshot AI API / OpenRouter.
- **Release / knowledge:** Kimi K2 released July 2025 (Artificial Analysis); Kimi K2 0905 successor noted by Artificial Analysis as the newest release; knowledge cutoff not stated in verified sources.
- **IDs:** `moonshotai/Kimi-K2-Instruct` (Hugging Face); Kimi K2 API model IDs (e.g. `kimi-k2-0905`).
- **Context window:** 128K tokens (Artificial Analysis; Kimi K2); blended cache-hit pricing ~$0.74 / 1M.
- **Modalities:** Text input, text output (Artificial Analysis: Kimi K2 is text-only, not multimodal); reasoning no (Kimi K2 non-reasoning); tool use yes (agentic heritage).
- **Pricing (as of 2026-10-28):** Open weights (Modified MIT); Moonshot API $0.57 input / $2.30 output per 1M tokens (median across providers: $0.47 / $1.59); blended ≈ $0.74 / 1M.
- **Architecture:** Open-weight Mixture-of-Experts; 1T total / 32B active parameters; Modified MIT license (commercial use with restrictions).

### Raw benchmarks found

- Reasoning / knowledge:
  - Kimi K2 data (Artificial Analysis / Moonshot lineage): AIME / math evals; note Kimi K2 is a non-reasoning base in AA's classification.
- Coding / agentic:
  - Kimi K2 lineage: agentic coding benchmarks (AA / Moonshot coverage) — strong agentic heritage via tool-use training.
- Multimodal: text-only → no multimodal benchmark verified.

### Cross-source comparison

- Official (Moonshot AI / Hugging Face) vs independent (Artificial Analysis): AA confirmed open weights, Modified MIT, 1T/32B MoE, text-only, 128K context, non-reasoning, $0.57/$2.30 — consistent with the Kimi K2 lineage; the K2.8-preview-specific numbers were not separately resolvable in fetched sources.

### Normalized scores (1-100)

- **Tool use: 60/100.** Kimi K2 agentic heritage (tool-use training); text-only scope limits agentic breadth; capped below multimodal/agentic frontier tiers.
- **Reasoning: 55/100.** Kimi K2 classified non-reasoning by Artificial Analysis; capability tier mid for open-weights MoE; capped below proprietary reasoning models.
- **Context window: 60/100.** 128K tokens (Artificial Analysis) → mid open-weights context band.
- **Multimodal: 15/100.** Text-only (Artificial Analysis) → below text-only floor per methodology.
- **Coding: 65/100.** Agentic coding heritage (Kimi K2 lineage) → mid coding band.
- **Cost efficiency: 50/100.** Open weights (Modified MIT); Moonshot API $0.57/$2.30 per 1M → moderate open-weight value (text-only scope limits practical value).

- **Overall Score: 51/100.** Mean of the five quality dims (Tool 60 + Reasoning 55 + Context 60 + Multimodal 15 + Coding 65) / 5 = 51; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (Moonshot AI / Hugging Face Kimi K2) plus independent benchmarks/reviews (Artificial Analysis) — official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
