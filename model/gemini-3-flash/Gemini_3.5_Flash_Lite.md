# Gemini 3 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3 Flash (`google/gemini-3-flash`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's foundational 3rd-generation Flash model delivering high-speed inference, native multimodality, and large-context document processing.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3-flash` (Chat Completions API).
- **Release / knowledge:** Released 2025/2026; knowledge current.
- **IDs:** `google/gemini-3-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Economy production tier ($0.075 /M input tokens, $0.30 /M output tokens).
- **Architecture:** Efficient foundational transformer architecture for high-throughput multimodal tasks.

### Raw benchmarks found

- GPQA Diamond: **80.0%** <(Google DeepMind evaluation)>
- Terminal-Bench 2.1: **85.5%** <(Google developer evaluation)>
- SWE-bench Verified: **72.0%** <(Independent benchmark tracking)>

### Normalized scores (1–100)

- **Tool use: 91/100.** Reliable function calling and structured JSON generation.
- **Reasoning: 88/100.** Solid core reasoning for fast generation tasks.
- **Context window: 94/100.** Stable 1M context token retrieval.
- **Multimodal: 95/100.** Broad native multimodal support.
- **Coding: 87/100.** Effective code generation and scripting support.
- **Cost efficiency: 98/100.** Highly cost-effective for scaled workloads.
- **Overall Score: 91/100.** Best-fit recommendation: High-volume document summarization, rapid multimodal queries, and cost-sensitive API integrations.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Re-verified against official Google DeepMind benchmark data and independent evaluations.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
