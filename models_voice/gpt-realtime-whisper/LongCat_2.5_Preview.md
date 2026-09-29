# GPT-Realtime-Whisper — findings by LongCat 2.5 Preview

- Source: OpenAI (`openai/gpt-realtime-whisper`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-Whisper
- **Short description:** OpenAI's streaming speech-to-text model for realtime transcription; returns low-latency transcript deltas from live audio.
- **Provider / access:** OpenAI Realtime Transcription API `v1/realtime/transcription_sessions` (WebRTC or WebSocket); OpenCode Zen `openai/gpt-realtime-whisper`. Not available via standard Realtime, Chat Completions, or Responses APIs.
- **Release / knowledge:** Released 2026-05-07; knowledge cutoff Sep 30, 2024.
- **IDs:** `openai/gpt-realtime-whisper` (Zen); transcription endpoint model ID `gpt-realtime-whisper`
- **Context window:** 16,000 tokens; max output 2,000 tokens
- **Modalities:** audio + text in; text out; no tool calls; no reasoning; streaming only
- **Pricing (as of 2026-09-29):** $0.017 per minute of audio (~$1.02/hour); priced by audio duration, not tokens. No free tier.
- **Architecture:** proprietary; dedicated streaming speech-to-text model

### Raw benchmarks found

Agent / tool use:

- No tool-call capability (by design — transcription model); no verified public benchmark applicable

Reasoning / knowledge:

- No reasoning capability (by design); no verified public benchmark applicable

Coding:

- No verified public score found; not applicable to this model

Long context:

- 16,000 token context window; no long-context retrieval benchmark reported

Transcription-specific:

- No verified public word-error-rate (WER) or transcription-accuracy benchmark published; vendor recommends testing with representative microphones, telephony audio, accents, background noise, code-switching, and domain vocabulary
- Supports transcription context via prompt, keywords, and expected languages; configurable latency/accuracy tradeoff via delay settings (minimal → xhigh)

### Normalized scores (1–100)

- **Tool use: 5/100.** No tool-call capability by design; this is a pure transcription model.
- **Reasoning: 5/100.** No reasoning capability by design; the model acts as a transcriber.
- **Context window: 20/100.** 16K tokens is below the 100K threshold (scales down to 10–49); suitable only for streaming transcription.
- **Multimodal: 90/100.** Audio input with text output; audio in fits the 90–100 tier per methodology (+audio in); no audio output.
- **Coding: 5/100.** No coding capability; not applicable to this model's design.
- **Cost efficiency: 85/100.** $0.017/minute (~$1.02/hour) is very cheap for realtime transcription; among the lowest-cost audio models available.
- **Overall Score: 25/100.** Mean of (5 + 5 + 20 + 90 + 5) / 5 = 25.0 → 25. Best fit: low-latency realtime transcription for captions, meetings, and call recording; not suitable for agentic, reasoning, or coding workloads.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-09-29
- Method: public internet research (OpenAI official docs, realtime transcription guide); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
