# GPT Realtime Whisper — findings by Inkling 2 Small

- Source: OpenAI (`gpt-realtime-whisper`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-Whisper
- **Short description:** OpenAI's streaming speech-to-text model — low-latency transcript deltas from live audio for realtime transcription use cases; developers can tune the latency/accuracy trade-off. Priced per audio minute, not per token.
- **Provider / access:** OpenAI Realtime transcription endpoint `v1/realtime/transcription_sessions` (WebRTC, WebSocket); streaming only.
- **Release / knowledge:** 2026 (GPT-Realtime generation); knowledge cutoff Sep 30, 2024.
- **IDs:** `gpt-realtime-whisper`
- **Context window:** 16,000 tokens; max output 2,000 tokens.
- **Modalities:** audio + text in → text out (transcript deltas); reasoning NO; no tool calling; streaming only.
- **Pricing (as of 2026-11-10):** $0.017 / minute of audio (≈$1.02/hour); billed by duration.
- **Architecture:** proprietary streaming STT model; parameter count undisclosed.

### Raw benchmarks found

ZERO verified public benchmark rows for this exact model/ID (BenchLM 404; OpenAI does not publish a WER comparison for this SKU).

Agent / tool use:

- no verified public score found (transcription specialist; no tool calling)

Reasoning / knowledge:

- no verified public score found

Coding:

- no verified public score found

Long context:

- 16,000 tokens; no verified public long-context retrieval score found (utterance scope)

Multimodal:

- Audio in → streaming text out; WER/realtime accuracy unpublished — no verified public rows found (BenchLM 404)

### Normalized scores (1–100)

- **Tool use: 15/100.** Not an agentic model — no tool calling; the mandatory floor.
- **Reasoning: 20/100.** Transcription, not reasoning — scored at the floor of the class.
- **Context window: 38/100.** 16K utterance window — designed for streaming speech; weak generally.
- **Multimodal: 55/100.** Audio in → streaming text out — the product is narrow but real; transcription accuracy unpublished.
- **Coding: 15/100.** Not a coding model — the mandatory floor.
- **Cost efficiency: 95/100.** $0.017 per minute — among the cheapest live STT routes.
- **Overall Score: 29/100.** (15 + 20 + 38 + 55 + 15) / 5 = 28.6 → 29. Best fit: live captions, voice commands, meeting transcription at near-zero cost per minute; not for reasoning or generation of any kind.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (OpenAI API docs, BenchLM 404, dataset meta); scores are normalized 1–100 interpretations, not official vendor scores. Zero verified public benchmarks.
- Reference URLs:
  - [GPT-Realtime-Whisper — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-realtime-whisper)
  - [Dataset meta (models_voice/gpt-realtime-whisper)](../../models_voice/gpt-realtime-whisper/meta.json)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
