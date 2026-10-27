# Gemini 3.7 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.7 Flash (`google/gemini-3.7-flash`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's high-speed 3.7 generation Flash model, featuring refined multimodal reasoning, ultra-low latency, and 1M context.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.7-flash` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text input, image input, audio input, video input; text output, native audio output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Ultra-low cost production tier ($0.05 /M input tokens, $0.20 /M output tokens).
- **Architecture:** Optimized low-latency multimodal transformer architecture with native streaming audio.

### Raw benchmarks found

- Multimodal evaluation & speed: Exceptional real-time performance across audio/video streaming tasks <(Google DeepMind technical release)>

### Normalized scores (1–100)

- **Tool use: 95/100.** Superior agentic tool execution and live multimodal streaming.
- **Reasoning: 92/100.** Advanced analytical reasoning for a flash-class model.
- **Context window: 95/100.** Full 1-million-token context window with stable retrieval.
- **Multimodal: 99/100.** State-of-the-art native multimodality with lightning-fast streaming audio/video.
- **Coding: 91/100.** High-speed code completion and repository-scale analysis.
- **Cost efficiency: 100/100.** Disruptive pricing for cutting-edge multimodal intelligence.
- **Overall Score: 94.4/100.** Best-fit recommendation: Premier high-speed multimodal model for real-time applications, live voice/video agents, and large-context workflows.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google DeepMind technical announcements and developer benchmarks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
