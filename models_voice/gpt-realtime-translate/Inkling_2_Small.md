# GPT Realtime Translate — findings by Inkling 2 Small

- Source: OpenAI (`gpt-realtime-translate`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-Translate
- **Short description:** OpenAI's streaming speech-to-speech translation model for live multilingual audio — uses a dedicated realtime translation endpoint and returns translated audio plus transcript deltas while source audio is still arriving. Priced per audio minute, not per token.
- **Provider / access:** OpenAI Realtime translation endpoint `v1/realtime/translations` (WebRTC, WebSocket, or SIP); Streaming only; no other routes supported.
- **Release / knowledge:** 2026 (GPT-Realtime generation); knowledge cutoff Sep 30, 2024.
- **IDs:** `gpt-realtime-translate`
- **Context window:** 16,000 tokens; max output 2,000 tokens.
- **Modalities:** audio in → audio + text out (translated audio + transcript deltas); reasoning NO; no tool calling; streaming only.
- **Pricing (as of 2026-11-10):** $0.034 / minute of audio (≈$2.04/hour); billed by duration, not text tokens.
- **Architecture:** proprietary realtime speech translation; parameter count undisclosed.

### Raw benchmarks found

ZERO verified public benchmark rows for this exact model/ID (BenchLM 404; the dataset's generic meta entry carries no data).

Agent / tool use:

- no verified public agentic score found (translation specialist; no tool use)

Reasoning / knowledge:

- no verified public reasoning score found (no published translation-quality comparison for this SKU)

Coding:

- no verified public coding score found

Long context:

- 16,000 tokens (utterance scope); no verified public long-context retrieval score found

Multimodal:

- Audio in, translated audio + transcript deltas out; native streaming design; no published Audio Realism/translation leaderboard rows found (BenchLM 404)

### Normalized scores (1–100)

- **Tool use: 15/100.** Not an agentic model — no tool calling; below the floor by design.
- **Reasoning: 30/100.** Provisional — no published quality rows; translation systems usually score poorly on reasoning benchmarks by construction.
- **Context window: 38/100.** 16K utterance window — designed for streaming speech, not document reasoning; appropriate to purpose, weak generally.
- **Multimodal: 70/100.** Audio translation in real time is the product — strong by design (transcript deltas + translated speech), unmeasured publicly.
- **Coding: 15/100.** Not a coding model — the mandatory floor applies.
- **Cost efficiency: 92/100.** $0.034 per minute of audio — extremely cheap for live translation.
- **Overall Score: 34/100.** (15 + 30 + 38 + 70 + 15) / 5 = 33.6 → 34. Best fit: live multilingual audio experiences (calls, events, streaming) — the right tool for that niche, nothing else.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (OpenAI API docs, BenchLM 404, dataset meta); scores are normalized 1–100 interpretations, not official vendor scores. Zero verified public benchmarks — most rows provisional.
- Reference URLs:
  - [GPT-Realtime-Translate — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-realtime-translate)
  - [Dataset meta (models_voice/gpt-realtime-translate)](../../models_voice/gpt-realtime-translate/meta.json)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
