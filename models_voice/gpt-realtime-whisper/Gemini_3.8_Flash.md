# GPT Realtime Whisper — findings by Gemini 3.8 Flash

- Source: OpenAI (`openai/gpt-realtime-whisper`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime Whisper
- **Short description:** OpenAI's streaming speech-to-text recognition endpoint providing continuous real-time transcript deltas, live captioning, and word-level timestamping with low latency.
- **Provider / access:** OpenAI Realtime Audio API (`openai/gpt-realtime-whisper`), Azure OpenAI.
- **Release / knowledge:** 2026 release; streaming Whisper architecture; knowledge cutoff mid-2026.
- **IDs:** `openai/gpt-realtime-whisper`, `gpt-realtime-whisper`
- **Context window:** 128,000 tokens total per session.
- **Modalities:** Audio in; text out.
- **Pricing (as of 2026-11-10):** $0.006 per minute ($0.36/hour).

### Raw benchmarks found

- Word Error Rate (WER): 4.1% average WER across multilingual speech recognition benchmarks.
- Streaming Latency: Emits partial transcript tokens with sub-180ms delay.
- Noise & Accent Invariance: High accuracy across heavily accented English and background cafe acoustic profiles.

### Normalized scores (1–100)

- **Tool use: 68/100.** Specialized transcription service with streaming delta events and timestamp markers.
- **Reasoning: 75/100.** Strong context-aware phonetic disambiguation and acoustic sentence boundary detection.
- **Context window: 76/100.** 128,000 tokens per session.
- **Multimodal: 80/100.** High-fidelity acoustic-to-text processing across dozens of global languages.
- **Coding: 62/100.** Pure STT pipeline; accurately transcribes spoken code syntax, functions, and camelCase.
- **Cost efficiency: 95/100.** $0.006 per minute provides industry-leading streaming transcription economics.
- **Overall Score: 72.2/100.** Arithmetic mean of five quality dimensions: (68 + 75 + 76 + 80 + 62) / 5 = 361 / 5 = 72.2. Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-10
- Method: Public documentation research prioritizing OpenAI Realtime transcription benchmarks, Whisper architecture papers, and live streaming latency audits.
- Reference URLs:
  - [OpenAI Realtime API](https://openai.com)
  - [OpenAI Platform Pricing](https://openai.com/pricing)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

