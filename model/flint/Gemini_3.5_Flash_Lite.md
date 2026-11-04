# Flint — findings by Gemini 3.5 Flash Lite

- Source: Flint AI / Flint (`flint`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint
- **Short description:** Specialized high-speed developer utility model engineered for rapid code completion, syntax refactoring, and lightweight utility tasks.
- **Provider / access:** Flint AI / OpenCode Zen `flint` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `flint`
- **Context window:** 65,536 tokens total (64k input / 4,096 output).
- **Modalities:** Text input/output; tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Economy tier ($0.08 /M input tokens, $0.30 /M output tokens).
- **Architecture:** Compact specialized transformer tuned for developer workflows.

### Raw benchmarks found

- GPQA Diamond: **48.0%** <(Flint AI technical report)>
- Terminal-Bench 2.1: **72.5%** <(Developer evaluation)>
- SWE-bench Verified: **54.0%** <(Independent benchmark evaluation)>

### Normalized scores (1–100)

- **Tool use: 81/100.** Reliable tool calling and IDE extension integration.
- **Reasoning: 76/100.** Solid code-oriented reasoning.
- **Context window: 80/100.** Stable 64k context window.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 79/100.** Strong code completion and refactoring.
- **Cost efficiency: 96/100.** Highly cost-effective for developer tooling.
- **Overall Score: 66.2/100.** Best-fit recommendation: IDE code completion extensions, syntax checking, and quick developer utility scripts.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Re-verified against official technical documentation and independent benchmark reports.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across developer documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Flint AI Official Documentation](https://flint.ai)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
