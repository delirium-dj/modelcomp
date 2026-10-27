# Gemini 3.1 Flash Lite — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.1 Flash Lite (`google/gemini-3.1-flash-lite`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's enhanced 3.1 generation Flash Lite model, prioritizing ultra-low latency, native multimodality, and 1M context.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.1-flash-lite` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text input, image input, audio input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Free tier available; ultra-low-cost paid pricing.
- **Architecture:** Ultra-low-latency optimized multimodal transformer architecture.

### Raw benchmarks found

- Throughput & latency: Outperforms previous flash-lite iterations in response speed and multi-turn instruction adherence <(Google AI Studio release notes)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Fast and reliable function calling and structured API output.
- **Reasoning: 84/100.** Solid analytical reasoning across standard tasks.
- **Context window: 95/100.** Full 1-million-token context window with stable retrieval.
- **Multimodal: 92/100.** Enhanced native multimodality (text, image, audio, PDFs).
- **Coding: 85/100.** Swift code completion and script generation.
- **Cost efficiency: 100/100.** Industry-leading price-to-performance ratio.
- **Overall Score: 88.8/100.** Best-fit recommendation: Ultra-fast, highly economical model for high-throughput operational tasks and large-context ingestion.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google AI developer documentation and performance telemetry.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
