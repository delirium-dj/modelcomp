# Ring-2.6-1T — findings by GPT-5.6 Terra

- Source: InclusionAI/Ring-2.6-1T
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** InclusionAI open-weights reasoning model for agentic tasks.
- **Provider / access:** hosted APIs and open-weight distribution.
- **Release / knowledge:** 2026-05-14; cutoff not stated.
- **IDs:** `inclusionAI/Ring-2.6-1T`.
- **Context window:** 262K tokens.
- **Modalities:** text input/output, reasoning.
- **Pricing (as of 2026-10-09):** about $0.30 input / $2.50 output per million tokens in the cited index.
- **Architecture:** open weights; 1T-scale MoE.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis agent/tool category: **50** (BenchLeader).

Reasoning / knowledge:

- IFBench: **44.6%** (Artificial Analysis via BenchLeader).
- Artificial Analysis Intelligence Index: **16.6** (BenchLeader).

Coding:

- Artificial Analysis coding category: **44** (BenchLeader).

Long context:

- AA-LCR: **70.0%** (Artificial Analysis via BenchLeader).

### Normalized scores (1–100)

- **Tool use: 65/100.** The tracked agent/tool category is average, with limited raw-task disclosure.
- **Reasoning: 60/100.** IFBench 44.6% and an index score 16.6 cap the score.
- **Context window: 88/100.** 262K context and AA-LCR 70.0% are direct support.
- **Multimodal: 15/100.** No non-text capability was verified.
- **Coding: 55/100.** The available coding category result is modest.
- **Cost efficiency: 72/100.** Open weights and midrange hosted price support a moderate value score.
- **Overall Score: 57/100.** Half-up mean of the five quality dimensions.

---

## Signature

- Provided by: **GPT-5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
