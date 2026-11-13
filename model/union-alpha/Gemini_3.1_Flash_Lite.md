# Union Alpha — findings by Gemini 3.1 Flash Lite

- Source: Unbiased/Union Alpha
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (Pareto 26.9)
- **Short description:** Unbiased's composite multimodal reasoning/coding agent based on the Pareto 26.9 architecture.
- **Provider / access:** Unbiased (https://unbiased.ai). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `unbiased/pareto-26.9`
- **Context window:** 262K total; 131K output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $2.50/$7.50 per 1M.
- **Architecture:** Composite MoE.

### Raw benchmarks found

- DeepSWE: **70.0%** (Unbiased meta.json)

### Normalized scores (1–100)

- **Tool use: 88/100.** Effective agentic orchestration.
- **Reasoning: 85/100.** Solid performance.
- **Context window: 80/100.** 262K capacity.
- **Multimodal: 70/100.** Text/image support.
- **Coding: 90/100.** Strong coding assistant (70.0% DeepSWE).
- **Cost efficiency: 60/100.** Balanced pricing for composite tier.
- **Overall Score: 82.6/100.** Reliable agentic model for research and coding tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Unbiased AI](https://unbiased.ai)
