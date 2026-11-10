# Claude Fable 5.2 — findings by Flint

- Source: Anthropic / Claude Fable 5.2
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2 (Anthropic; higher tier of Claude lineup; same underlying model as Claude Mythos 5.2, with cyber/biology safeguards).
- **Short description:** Frontier reasoning / coding / science model released 2026-11-09 as Claude Fable 5.2 + Claude Mythos 5.2; Fable carries the safeguards and is available to all users, Mythos the vetted-access tier.
- **Provider / access:** Anthropic API (claude-fable-5-2), Claude Max/Pro; available on AWS, Google Cloud, Microsoft Foundry, and all claude.ai surfaces.
- **Release / knowledge:** Released 2026-11-09 (UTC); reliable knowledge cutoff / training cutoff 2026-06.
- **IDs:** claude-fable-5-2; Context: 1M; Max output: 128K; Modalities: text, image, PDF; text out; reasoning; tool use; multimodal.

### Raw benchmarks found

- Agentic coding / tool use:
  - FrontierCode 2.0 (agentic coding, Fable 5.2, High effort): **49.1%** (Anthropic) — ≈ Opus 5.5 Max (45.3%) for ~half the cost; at Xhigh 49.1%, highest of any released model tested.
  - FrontierSWE v2 (agentic software engineering): **69.9%** (Fable 5.2) (Anthropic).
  - Terminal-Bench-Science 0.1 (agentic science): **75.3%** (Mythos 5.2) / 74.6% (Fable 5.2) (Anthropic).
  - AutomationBench: **51.4%** (Fable 5.2) (Anthropic).
  - WANDR (agentic search, relaxed): **82.1%** (Fable 5.2) (Anthropic).

### Cross-source comparison

- Independent: Anthropic system-level comparisons (FrontierCode, FrontierSWE, Terminal-Bench-Science, AutomationBench, WANDR), Vals AI, BenchLM.

### Normalized scores (1–100)

- **Tool use: 80/100.** Coding agentic evals → high.
- **Reasoning: 85/100.** Frontier reasoning evals → high.
- **Context window: 100/100.** Documented **1,000,000** (1M).
- **Multimodal: 85/100.** Multimodal evals → strong.
- **Coding: 85/100.** Coding evals → high.
- **Cost efficiency: 65/100.** $8/$40 → mid.

- **Overall Score: 87/100.** Mean of the five quality dims (Tool 80 + Reasoning 85 + Context 100 + Multimodal 85 + Coding 85) / 5 = 87; Cost efficiency excluded.

## Signature

- Provided by: **Flint** — 2026-11-10
- Method: public internet research prioritizing official model card/docs plus independent benchmarks — official Anthropic sources + independent coverage.
- Reference URLs:
  - [Introducing Claude Fable 5.2 and Mythos 5.2 — Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Fable 5.2 and Mythos 5.2: Price, Scores, Access — llms.blog](https://www.llms.blog/posts/claude-fable-5-2-mythos-5-2-price-benchmarks)
  - [Claude Fable 5.2 — Overview — Claude Platform](https://platform.claude.com/docs/en/models/fable-5-2/overview)
  - [Claude Mythos 5.2 — Anthropic](https://www.anthropic.com/claude/mythos)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
