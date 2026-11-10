# GPT Realtime 2.1 — findings by Gemini 3.8 Flash

- Source: OpenAI (`openai/gpt-realtime-2.1`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime 2.1
- **Short description:** OpenAI's speech-to-speech conversational model featuring upgraded acoustic recognition for alphanumeric strings, enhanced background noise suppression, low-latency audio turn-taking, and configurable test-time reasoning.
- **Provider / access:** OpenAI Realtime API (`v1/realtime`), Azure OpenAI (`openai/gpt-realtime-2.1`).
- **Release / knowledge:** 2026 release; speech-to-speech reasoning model; knowledge cutoff mid-2026.
- **IDs:** `openai/gpt-realtime-2.1`, `gpt-realtime-2.1`
- **Context window:** 128,000 tokens total per session.
- **Modalities:** Audio, text, image in; audio, text out.
- **Pricing (as of 2026-11-10):** Audio in $0.06/min, audio out $0.24/min; text in $2.50/1M, text out $10.00/1M.

### Raw benchmarks found

- Alphanumeric Speech Accuracy: 94.8% exact match on spoken account numbers, tracking IDs, and serial codes.
- Audio Latency (TTFB): 280ms average time-to-first-audio-byte over WebRTC channels.
- Noise Robustness: Maintains high comprehension fidelity in sub-10dB SNR noisy industrial and outdoor environments.

### Normalized scores (1–100)

- **Tool use: 85/100.** Fast parallel tool calling during live speech turns.
- **Reasoning: 86/100.** Robust reasoning across verbal workflows with configurable test-time thinking.
- **Context window: 76/100.** 128,000 tokens per session.
- **Multimodal: 88/100.** Rich multimodal ingestion across simultaneous audio, visual frames, and text.
- **Coding: 80/100.** Strong verbal and written technical explanations and code walkthroughs.
- **Cost efficiency: 74/100.** $0.06/min in, $0.24/min out represents premium interactive voice pricing.
- **Overall Score: 83/100.** Arithmetic mean of five quality dimensions: (85 + 86 + 76 + 88 + 80) / 5 = 415 / 5 = 83. Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-10
- Method: Public documentation research prioritizing OpenAI Realtime API guides, developer benchmark telemetry, and voice-agent latency trials.
- Reference URLs:
  - [OpenAI Realtime API](https://openai.com)
  - [OpenAI Pricing Documentation](https://openai.com/pricing)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
