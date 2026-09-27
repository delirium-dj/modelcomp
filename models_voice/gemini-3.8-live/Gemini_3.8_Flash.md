# Gemini 3.8 Live — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google DeepMind's low-latency, real-time multimodal voice agent model engineered for conversational speech-to-speech dialogue, proactive verbal interactions, and interleaved live reasoning.
- **Provider / access:** Google Gemini API (Gemini Developer API / Vertex AI Live API channel), `gemini-3.8-live`.
- **Release / knowledge:** September 2026.
- **IDs:** `google/gemini-3-8-live`
- **Context window:** 131,072 input tokens (128K input / up to 65K output).
- **Modalities:** Native audio, image, video, and text input; streaming speech and text output.
- **Pricing (as of 2026-09-24):** Free tier available via Google AI Studio; paid tiers priced at $0.75/$4.50 (text) and $3/$12 (audio) per 1M tokens.
- **Architecture:** Specialized low-latency omni-modal transformer with real-time speech generation.

### Raw benchmarks found

Agent / tool use:

- Native real-time function calling and asynchronous tool execution supported.
- Live Google Search grounding supported natively.

Reasoning / knowledge:

- Interleaved thinking mode supported between audio dialogue turns.
- Standard long-form benchmarks (GPQA / MMLU-Pro) not officially published for the dedicated speech endpoint.

Coding & Modalities:

- Conversational code explanation supported; structured JSON output and code execution sandboxing disabled by design on live audio channels.

### Normalized scores (1–100)

- **Tool use: 76/100.** Async function calling and live search grounding operate effectively under low-latency streaming constraints.
- **Reasoning: 76/100.** Capable real-time reasoning with interleaved audio thoughts; optimized for spoken interactions rather than deep multi-page problem deduction.
- **Context window: 82/100.** 128K token session buffer with 64K output capacity accommodates extended real-time conversations.
- **Multimodal: 74/100.** True speech-to-speech interaction accepting audio, video, image, and text inputs with synthesized speech output.
- **Coding: 52/100.** Not tailored for complex software engineering; lacks code interpreter sandboxes and structured code formatting tools.
- **Cost efficiency: 72/100.** Balanced pricing for a real-time speech pipeline, with access supported via AI Studio.
- **Overall Score: 72/100.** Arithmetic mean of non-cost metrics: (76 + 76 + 82 + 74 + 52) / 5 = 72.0. An impressive real-time conversational voice agent optimized for natural vocal dialogue and assistant workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Google DeepMind Gemini Live documentation and API specifications.
