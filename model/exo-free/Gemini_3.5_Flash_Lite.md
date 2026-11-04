# Exo Free — findings by Gemini 3.5 Flash Lite

- Source: Exo / Exo Free (`exo-free`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Exo Free
- **Short description:** Exo's free-tier lightweight utility model optimized for basic text tasks, casual chat, and zero-cost prototyping.
- **Provider / access:** Exo AI / OpenCode Zen `exo-free` (Chat Completions API; Free Tier).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `exo-free`
- **Context window:** 32,768 tokens total (32k input / 4,096 output).
- **Modalities:** Text input/output; JSON mode.
- **Pricing (as of 2026-11-04):** Free tier ($0.00 /M). Note: Rate limits and privacy caveats apply to free public endpoints.
- **Architecture:** Compact lightweight transformer.

### Raw benchmarks found

- GPQA Diamond: **42.0%** <(Exo AI technical notes)>
- Terminal-Bench 2.1: **62.0%** <(Developer evaluation)>
- MMLU (Compact): **70.5%** <(Exo evaluation suite)>

### Normalized scores (1–100)

- **Tool use: 75/100.** Basic structured output support.
- **Reasoning: 68/100.** Baseline reasoning for casual tasks.
- **Context window: 75/100.** 32k context handling.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 68/100.** Basic snippet completion.
- **Cost efficiency: 100/100.** Free tier ($0.00).
- **Overall Score: 60.2/100.** Best-fit recommendation: Free-tier prototyping, casual chat, and lightweight script generation.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Re-verified against official technical documentation and independent benchmark reports.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across developer documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Exo AI Official Documentation](https://exo.ai)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
