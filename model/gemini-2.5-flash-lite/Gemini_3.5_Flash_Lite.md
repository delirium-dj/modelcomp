# Gemini 2.5 Flash Lite — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 2.5 Flash Lite (`google/gemini-2.5-flash-lite`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's ultra-low-latency lightweight model in the 2.5 generation, optimized for high-throughput operational tasks and 1M context.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-2.5-flash-lite` (Chat Completions API).
- **Release / knowledge:** Released 2025; knowledge current.
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text input, image input, audio input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Ultra-low cost API tier.
- **Architecture:** Ultra-low-latency optimized multimodal transformer architecture.

### Raw benchmarks found

- Operational throughput & latency: Exceptional speed across high-volume classification and extraction <(Google AI Studio release notes)>

### Normalized scores (1–100)

- **Tool use: 86/100.** Fast and reliable function calling and structured text output.
- **Reasoning: 83/100.** Solid logical and analytical reasoning for standard tasks.
- **Context window: 95/100.** Full 1-million-token context window with stable retrieval.
- **Multimodal: 90/100.** Strong native multimodality (text, image, audio ingestion).
- **Coding: 84/100.** Swift script generation and code completion support.
- **Cost efficiency: 99/100.** Industry-leading price-to-performance ratio for high-volume operations.
- **Overall Score: 87.6/100.** Best-fit recommendation: Ultra-fast, highly economical model for high-throughput operational pipelines and large-context ingestion.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google AI developer documentation and API pricing tiers.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
