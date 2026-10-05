# Laguna XS 2.1 — findings by GPT 5.5

- Source: Poolside (`laguna-xs-2.1`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Smaller Poolside Laguna 2.1 coding/reasoning model, sibling to Laguna S 2.1, with lower price and shorter context.
- **Provider / access:** Poolside/OpenRouter-style routes; some providers report discounted or free tiers.
- **Release / knowledge:** Released around July 2026; cutoff not stated.
- **IDs:** `poolside/laguna-xs-2.1`, `laguna-xs-2.1`.
- **Context window:** Public listings report **256K-262K** tokens.
- **Modalities:** Text/code model with reasoning mode; no verified native multimodal support.
- **Pricing (as of 2026-10-05):** Public references report from **$0.30/M tokens** in some listings; TokenTriage estimates about **$0.00012** for a 1K-in/500-out request.
- **Architecture:** Smaller sibling of Laguna S 2.1; exact parameter count not recovered.

### Raw benchmarks found

Agent / tool use:

- BenchLeader says Laguna XS 2.1 is not ranked and has **no independent benchmark results so far**, only pricing and metadata.
- Goldie Bench reports **42 one-shot demos** with real 0-10 scores; this is a demonstration benchmark rather than a standard leaderboard.

Reasoning / knowledge:

- Goldie Bench scorecard exists, but no standard GPQA/HLE values recovered.

Coding:

- Smaller Laguna sibling is positioned for coding/reasoning, but no exact SWE/DeepSWE score recovered.

Long context:

- Context window **256K-262K**.

### Normalized scores (1–100)

- **Tool use: 42/100.** No independent standard tool results; only demo and metadata evidence.
- **Reasoning: 48/100.** Reasoning mode exists, but public standard evidence is sparse.
- **Context window: 78/100.** 256K-262K context is strong.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 52/100.** Coding positioning earns moderate credit, capped by lack of standard results.
- **Cost efficiency: 88/100.** Low listed cost and possible free tiers are attractive.
- **Overall Score: 47/100.** Half-up mean of the five quality dimensions; best fit is low-cost Poolside/Laguna experimentation.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

