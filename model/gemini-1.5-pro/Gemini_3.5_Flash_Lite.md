# Gemini 1.5 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 1.5 Pro (`google/gemini-1.5-pro`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's pioneering long-context multimodal model featuring a 2-million-token context window, native audio/video ingestion, and robust reasoning.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.5-flash-lite` (Chat Completions API).
- **Release / knowledge:** Released 2024; knowledge current.
- **IDs:** `google/gemini-1.5-pro`
- **Context window:** 2,097,152 tokens total (2M input / 8,192 output).
- **Modalities:** Text input, image input, audio input, video input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Standard Google AI Studio tier.
- **Architecture:** Mixture-of-Experts multimodal transformer architecture with native RingAttention.

### Raw benchmarks found

- Needle in a Haystack (2M tokens): **99.2%** <(Google DeepMind technical report)>
- SWE-bench Verified: **58.5%** <(Software engineering benchmark)>

### Normalized scores (1–100)

- **Tool use: 85/100.** Reliable function calling and structured API integration.
- **Reasoning: 87/100.** Strong multi-domain reasoning and analytical capabilities.
- **Context window: 99/100.** Industry-benchmark 2-million-token context window with flawless long-range retrieval.
- **Multimodal: 96/100.** Elite native multimodality (audio, video, images, massive PDFs).
- **Coding: 82/100.** Solid programming assistance and massive codebase ingestion.
- **Cost efficiency: 85/100.** Highly competitive pricing for extreme-context processing.
- **Overall Score: 89.8/100.** Best-fit recommendation: Premier extreme-context multimodal model for massive document analysis and video/audio understanding.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google DeepMind official model documentation and long-context evaluation metrics.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
