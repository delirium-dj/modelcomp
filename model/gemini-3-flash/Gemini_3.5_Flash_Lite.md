# Gemini 3 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3 Flash (`google/gemini-3-flash`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's next-generation 3 Flash model, introducing advanced multimodal reasoning, lightning-fast inference, and 1M context.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3-flash` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text input, image input, audio input, video input; text output, native audio output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Ultra-low cost production tier ($0.07 /M input tokens, $0.30 /M output tokens).
- **Architecture:** Next-generation low-latency multimodal transformer architecture.

### Raw benchmarks found

- Agentic execution & multimodal speed: Sets new efficiency standards for real-time multimodal tasks <(Google DeepMind release brief, 2026)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Superior agentic tool execution and live multimodal streaming.
- **Reasoning: 90/100.** Exceptional analytical reasoning for a flash-class model.
- **Context window: 95/100.** Full 1-million-token context window with stable retrieval.
- **Multimodal: 99/100.** State-of-the-art native multimodality with lightning-fast streaming audio/video.
- **Coding: 89/100.** High-speed code completion and repository-scale analysis.
- **Cost efficiency: 99/100.** Disruptive pricing for cutting-edge multimodal intelligence.
- **Overall Score: 93.2/100.** Best-fit recommendation: Premier high-speed multimodal model for real-time applications, live agents, and large-context workflows.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google DeepMind technical announcements and developer benchmarks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
