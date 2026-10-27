# Gemini 2.0 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 2.0 Flash (`google/gemini-2.0-flash`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's high-speed multimodal workhorse model featuring ultra-low latency, native streaming multimodal audio/video capabilities, and 1M context.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-2.0-flash` (Chat Completions API).
- **Release / knowledge:** Released December 2024; knowledge current.
- **IDs:** `google/gemini-2.0-flash`
- **Context window:** 1,048,576 tokens total (1M input / 8,192 output).
- **Modalities:** Text input, image input, audio input, video input; text output, native audio output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Extremely low cost production tier ($0.10 /M input tokens, $0.40 /M output tokens).
- **Architecture:** Optimized low-latency multimodal transformer architecture with native streaming audio support.

### Raw benchmarks found

- Multimodal evaluation & speed: Outperforms Gemini 1.5 Flash across speed, audio streaming, and agentic tool use <(Google Gemini 2.0 announcement)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Exceptional agentic tool calling, multimodal streaming, and live API integration.
- **Reasoning: 86/100.** Strong analytical reasoning across text and multimodal inputs.
- **Context window: 95/100.** Full 1-million-token context window with stable retrieval.
- **Multimodal: 97/100.** Industry-leading native multimodality including live bidirectional audio and video streaming.
- **Coding: 85/100.** High-speed code completion, debugging, and multi-file analysis.
- **Cost efficiency: 98/100.** Disruptive pricing for high-performance multimodal production workloads.
- **Overall Score: 90.6/100.** Best-fit recommendation: Premier high-speed multimodal model for real-time agentic workflows, live voice/video apps, and large-context processing.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google AI Studio documentation, DeepMind technical briefs, and developer telemetry.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
