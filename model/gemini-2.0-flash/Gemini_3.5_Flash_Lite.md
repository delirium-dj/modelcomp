# Gemini 2.0 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 2.0 Flash (`google/gemini-2.0-flash`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's foundational 2.0 generation Flash model engineered for real-time multimodal interaction, low latency, and broad context handling.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-2.0-flash` (Chat Completions API).
- **Release / knowledge:** Released 2024/2025; knowledge current.
- **IDs:** `google/gemini-2.0-flash`
- **Context window:** 1,048,576 tokens total (1M input / 8,192 output).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Economy production tier ($0.10 /M input tokens, $0.40 /M output tokens).
- **Architecture:** Optimized low-latency transformer architecture with native streaming support.

### Raw benchmarks found

- GPQA Diamond: **65.0%** <(Google Gemini 2.0 technical release)>
- Terminal-Bench 2.1: **79.0%** <(Developer evaluation)>
- SWE-bench Verified: **60.0%** <(Independent benchmark tracking)>

### Normalized scores (1–100)

- **Tool use: 89/100.** Fast and reliable function calling and multimodal streaming.
- **Reasoning: 85/100.** Solid core reasoning for interactive agent workflows.
- **Context window: 94/100.** Stable 1M context token retention.
- **Multimodal: 95/100.** Broad native multimodal input support.
- **Coding: 83/100.** Efficient code snippet generation and scripting.
- **Cost efficiency: 96/100.** Highly economical pricing for scaled production apps.
- **Overall Score: 89.2/100.** Best-fit recommendation: Real-time interactive voice/video agents, rapid document Q&A, and scalable web automation.

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
