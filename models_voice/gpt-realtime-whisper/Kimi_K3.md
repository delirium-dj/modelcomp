# GPT-Realtime-Whisper — findings by Kimi K3

- Source: OpenAI/GPT-Realtime-Whisper (`gpt-realtime-whisper`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-Whisper
- **Short description:** OpenAI's dedicated streaming speech-to-text model: emits transcript deltas while audio is still arriving (rather than batch processing chunks), tunable on the latency/accuracy dial. Successor to Whisper for live use cases; one of the three realtime audio models launched 2026-05-08, and the cheapest of the set.
- **Provider / access:** OpenAI Realtime transcription endpoint `v1/realtime/transcription_sessions` (model ID `gpt-realtime-whisper`). Not available on any other endpoint. Not on OpenCode Zen.
- **Release / knowledge:** Released 2026-05-08 (OpenAI "Advancing voice intelligence" announcement). Knowledge cutoff: 2024-09-30.
- **IDs:** `openai/gpt-realtime-whisper`. No Free ID exists on Zen.
- **Context window:** 16,000 tokens total; 2,000 max output (OpenAI model docs) — sized for utterance-scale transcription.
- **Modalities:** Audio + text in; text out only (transcription). Streaming only; NO function calling. No image/video.
- **Pricing (as of 2026-09-29):** $0.017 per minute of audio, duration-billed (OpenAI model docs) — the lowest-priced of the May 2026 realtime trio. Paid only.
- **Architecture:** Proprietary; undisclosed parameter count. Extends the Whisper multilingual transcription lineage into a streaming architecture.

### Raw benchmarks found

Transcription quality:

- Hallucination rate: **~90% fewer hallucinations vs Whisper v2**, **~70% fewer vs previous GPT-4o-transcribe models** (OpenAI internal test with real-world background noise and varying silence intervals, cited in launch coverage)
- Public WER leaderboard rows: no verified public score found

Agent / tool use / reasoning / coding:

- All agentic, reasoning, and coding suites: no verified public score found — pure transcription endpoint (no function calling, no reasoning modes), out of scope for those harnesses by design.

Long context:

- 16K window vendor-documented; continuous-stream use case, no retrieval benchmark applies.

### Normalized scores (1–100)

- **Tool use: 30/100.** No function calling on the transcription endpoint; transcripts must be handed to another model for action. Scored low by design.
- **Reasoning: 35/100.** Multilingual speech understanding is implied by the Whisper lineage and the hallucination-rate gains, but no reasoning benchmark exists for an STT model. Provisional.
- **Context window: 30/100.** 16K tokens / 2K max output — sub-100K band; correct for streaming transcription, minimal by general-model standards.
- **Multimodal: 88/100.** Natively audio-first input with text output, robust to background noise per vendor testing. Scored just below the audio band floor: single-purpose (no audio output, no image/video) — the multimodal rubric over-rewards a pure STT model otherwise.
- **Coding: 20/100.** No coding capability claimed or measured. Provisional floor.
- **Cost efficiency: 88/100.** $0.017/min is the cheapest metered realtime audio among the OpenAI voice trio and undercuts assembling STT+LLM pipelines; built for high-volume transcription economics.
- **Overall Score: 40.6/100.** Mean of the five non-cost dims (30+35+30+88+20)/5 = 40.6. Best fit: live captioning, meeting notes, call logging, and accessibility pipelines where streaming accuracy at $0.017/min is the whole product.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: Public internet research (OpenAI developers model docs, OpenAI May 2026 voice announcement as covered by Build Fast with AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
