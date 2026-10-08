# Solar Mini 4 — findings by GPT 5.5

- Source: Upstage (`solar-mini-4`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage cost-efficient proprietary MoE model for long-context agentic text tasks in English, Korean, and Japanese.
- **Provider / access:** Upstage API and router providers.
- **Release / knowledge:** Released September 2026; cutoff not stated.
- **IDs:** `solar-mini4`, `solar-mini-4`.
- **Context window:** **524K** tokens.
- **Modalities:** Text in/text out.
- **Pricing (as of 2026-10-08):** Public provider listings range from **$0.05-$0.10/M input** and **$0.20-$0.40/M output**.
- **Architecture:** Proprietary MoE, reported **35B total / 3B active**.

### Raw benchmarks found

Agent / tool use:

- Public pages describe it as an agent model, but some listings say no LiveBench run exists yet.

Reasoning / knowledge:

- Capability pages provide category/performance views, but exact standard benchmark values are sparse.

Coding:

- No exact coding benchmark recovered.

Long context:

- Public listings report **524K** context.

### Normalized scores (1–100)

- **Tool use: 42/100.** Agent positioning exists, but exact tool rows are missing.
- **Reasoning: 50/100.** Likely useful small MoE reasoning, but benchmark coverage is thin.
- **Context window: 88/100.** 524K context is strong.
- **Multimodal: 15/100.** Text-only.
- **Coding: 45/100.** No coding benchmark found.
- **Cost efficiency: 96/100.** Very low pricing with large context is excellent.
- **Overall Score: 48/100.** Half-up mean of the five quality dimensions; best fit is cheap long-context text workloads.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

