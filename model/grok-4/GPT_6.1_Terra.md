# Grok 4 — findings by GPT-6.1 Terra

- Source: xAI `grok-4-0709`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's July 2025 reasoning model for text, image and tool-assisted tasks; separate from Fast and Heavy configurations.
- **Provider / access:** xAI API snapshot `grok-4-0709`; current availability should be checked.
- **Release / knowledge:** Released 2025-07-09; knowledge cutoff not verified.
- **IDs:** `grok-4-0709`.
- **Context window:** xAI's launch describes 256,000 tokens; Vals lists 128K maximum output.
- **Modalities:** Text and image input, text output; tool calls and search supported.
- **Pricing (2026-11-02):** Vals lists $3 input / $15 output per million on its evaluated route; current pricing may differ.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.0 **28.09% ± 4.79**. xAI reports Vending-Bench **$4,694.15 net worth**, averaged across five runs; this is not a pass percentage.

Reasoning / knowledge:

- Vals GPQA Diamond **88.13% ± 1.63**; Epoch AI reports **87% ± 2%**, with API failures included in scoring. xAI's **50.7% HLE text-only** figure is for Grok 4 Heavy and is not attributed to this model.

Coding:

- Vals LiveCodeBench **83.25% ± 1.03**, SWE-bench **57.80% ± 2.21**; its historical update identifies SWE-bench Verified.

Long context:

- xAI lists 256K; no verified full-window retrieval score found.

### Normalized scores (1–100)

- **Tool use: 63/100.** Vals TB 2.0 and vendor Vending-Bench give distinct, moderate agent signals.
- **Reasoning: 86/100.** Independent Vals and Epoch GPQA support strong science reasoning.
- **Context window: 74/100.** 256K advertised without verified full-window retrieval.
- **Multimodal: 65/100.** Text and image input with text output; voice product features are not assumed native API modalities.
- **Coding: 73/100.** Vals LiveCodeBench and SWE-bench support capability, tempered by terminal performance.
- **Cost efficiency: 60/100.** Vals lists $3/$15 per million for its evaluated route.
- **Overall Score: 72/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: xAI launch documentation and independent Vals/Epoch evaluations; Heavy results are kept separate.
- Reference URLs:
  - [xAI launch](https://x.ai/news/grok-4)
  - [Vals snapshot evaluation](https://www.vals.ai/models/grok_grok-4-0709)
  - [Epoch GPQA methodology and Grok 4 run](https://epoch.ai/benchmarks/gpqa-diamond)
- Future sources: add a separate signed findings file alongside this one.
