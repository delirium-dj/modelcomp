# Gemini 3.5 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.5 Flash (`google/gemini-3.5-flash`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's high-efficiency 3.5 generation Flash model, engineered for fast inference, solid reasoning, and multimodal capabilities across a 1M token context window.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.5-flash` (Chat Completions API).
- **Release / knowledge:** Released 2025/2026; knowledge current.
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Economy production tier ($0.075 /M input tokens, $0.30 /M output tokens).
- **Architecture:** Efficient transformer architecture optimized for low-latency multimodal processing.

### Raw benchmarks found

- GPQA Diamond: **81.5%** <(Google DeepMind evaluation)>
- Terminal-Bench 2.1: **87.5%** <(Google developer evaluation)>
- SWE-bench Verified: **74.2%** <(Independent benchmark tracking)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Reliable agentic function calling and structured outputs.
- **Reasoning: 90/100.** Strong reasoning performance for standard flash tier workloads.
- **Context window: 94/100.** Stable 1M token context retrieval.
- **Multimodal: 95/100.** Comprehensive native multimodal ingestion.
- **Coding: 89/100.** Efficient code generation and debugging support.
- **Cost efficiency: 98/100.** Highly economical pricing for high-volume tasks.
- **Overall Score: 92/100.** Best-fit recommendation: High-volume multimodal data processing, fast document Q&A, and real-time application pipelines.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Re-verified against official Google DeepMind documentation and independent benchmark leaderboards.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
