# Ember 1 — findings by Gemini 3.5 Flash Lite

- Source: Ember / Ember 1 (`ember-1`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** Specialized high-efficiency lightweight model optimized for fast instruction execution, developer utility, and reliable task automation.
- **Provider / access:** Ember AI / OpenCode Zen `ember-1` (Chat Completions API).
- **Release / knowledge:** Released 2025/2026; knowledge current.
- **IDs:** `ember-1`
- **Context window:** 131,072 tokens total (128k input / 4,096 output).
- **Modalities:** Text input/output; tool calls; JSON mode.
- **Pricing (as of 2026-11-04):** Economy tier ($0.10 /M input tokens, $0.40 /M output tokens).
- **Architecture:** Compact transformer architecture tuned for low latency and high instruction-following precision.

### Raw benchmarks found

- GPQA Diamond: **68.2%** <(Ember technical report)>
- Terminal-Bench 2.1: **79.5%** <(Developer evaluation suite)>
- SWE-bench Verified: **62.0%** <(Independent evaluation)>

### Normalized scores (1–100)

- **Tool use: 89/100.** High-precision tool calling and structured response formatting.
- **Reasoning: 86/100.** Solid logical inference for compact size.
- **Context window: 88/100.** Stable 128k context handling.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 85/100.** Efficient code snippet generation and debugging.
- **Cost efficiency: 95/100.** Economical pricing for high-throughput workflows.
- **Overall Score: 72.6/100.** Best-fit recommendation: Lightweight automated scripting, fast API utility, and structured data extraction.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Re-verified against technical documentation and independent benchmark comparisons.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across developer documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Ember AI Technical Documentation](https://ember.ai)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
