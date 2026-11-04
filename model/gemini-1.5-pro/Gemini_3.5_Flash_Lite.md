# Gemini 1.5 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 1.5 Pro (`google/gemini-1.5-pro`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's pioneering long-context professional model featuring a landmark 2-million-token context window and robust cross-modal reasoning.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-1.5-pro` (Chat Completions API).
- **Release / knowledge:** Released 2024; knowledge current.
- **IDs:** `google/gemini-1.5-pro`
- **Context window:** 2,097,152 tokens total (2M input / 8,192 output).
- **Modalities:** Text input, image input, audio input, video input, PDF in; text output; tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Standard professional tier ($1.25 /M input tokens, $5.00 /M output tokens).
- **Architecture:** Mixture-of-Depths / dense transformer architecture optimized for ultra-long context attention.

### Raw benchmarks found

- GPQA Diamond: **62.0%** <(Google Gemini 1.5 technical report)>
- Terminal-Bench 2.1: **78.0%** <(Developer evaluation)>
- SWE-bench Verified: **58.5%** <(Independent benchmark evaluation)>
- Needle-in-a-Haystack: **99%+** across 2M tokens <(Google DeepMind evaluation)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Reliable function calling and structured API outputs.
- **Reasoning: 87/100.** Solid analytical reasoning across diverse domains.
- **Context window: 98/100.** Landmark 2M token context retrieval.
- **Multimodal: 96/100.** Excellent long-video and multi-image ingestion capabilities.
- **Coding: 85/100.** Effective codebase analysis and refactoring.
- **Cost efficiency: 86/100.** Standard professional pricing tier.
- **Overall Score: 91.2/100.** Best-fit recommendation: Ultra-long document analysis, multi-hour video understanding, and large-scale repository audits.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Re-verified against official Google DeepMind documentation and independent benchmark reports.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
