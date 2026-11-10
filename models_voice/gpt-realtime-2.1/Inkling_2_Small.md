# GPT Realtime 2.1 — findings by Inkling 2 Small

- Source: OpenAI (`gpt-realtime-2.1`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-2.1
- **Short description:** Update to GPT-Realtime-2 with improved alphanumeric recognition, silence/noise handling and interruption behavior — OpenAI's most capable realtime voice model with configurable reasoning effort, instruction following, and tool use for complex voice-agent workflows. Realtime API-native.
- **Provider / access:** OpenAI Realtime API `v1/realtime` (WebRTC / WebSocket / SIP); Chat Completions / Responses not supported; available since July 6, 2026.
- **Release / knowledge:** 2026-07-06; knowledge cutoff Sep 30, 2024.
- **IDs:** `gpt-realtime-2.1`
- **Context window:** 128,000 tokens; max output 32,000 tokens.
- **Modalities:** text, audio, image in; text, audio out; reasoning yes (configurable effort); tool calls yes (function calling).
- **Pricing (as of 2026-11-10):** identical to Realtime-2 — text $4.00/$24.00; audio $32.00/$64.00; image input $5.00; cached input $0.40 text / $0.4 audio-side (OpenAI cites a 25% p95 latency reduction across Realtime models with this release).
- **Architecture:** proprietary full-duplex speech-to-speech reasoning model; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- no verified public agentic score found for this ID; Audio Realism Benchmark: **#18 of 32**, Elo **1,064**, win rate **46.2%** (236 battles) (designarena.ai, 2026-11-10)

Reasoning / knowledge:

- no verified public text-benchmark rows for this ID (voice evidence only)

Coding:

- no verified public coding score found

Long context:

- 128,000 tokens; no verified public long-context retrieval score found

Multimodal:

- Text, audio, image in / text, audio out; Audio Realism #18/32 — slightly below Realtime-2's table position (designarena snapshot; different voice/prompt mix per leaderboard)

### Normalized scores (1–100)

- **Tool use: 62/100.** Same configurable tool-use harness as Realtime-2 with confirmed latency improvements (OpenAI-reported 25% p95 reduction) — no measured rows; scored on capability + vendor-reported latency, not benchmarks.
- **Reasoning: 58/100.** Provisional — reasoning effort supported; no public reasoning rows for this ID.
- **Context window: 62/100.** 128K total, 32K output — documented; retrieval unmeasured publicly.
- **Multimodal: 74/100.** Audio in/out + text + image in; interruption handling and noise robustness upgrade (vendor) — mid-pack realism (#18/32, Elo 1,064).
- **Coding: 15/100.** Not a coding model — the mandatory floor.
- **Cost efficiency: 35/100.** Same premium billing as Realtime-2 — $32/$64 per 1M audio tokens.
- **Overall Score: 54/100.** (62 + 58 + 62 + 74 + 15) / 5 = 54.2 → 54. Best fit: complex voice-agent workflows needing reasoning + tool use on Realtime API; same cost profile as Realtime-2 with better noise handling per OpenAI.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (OpenAI API docs, Audio Realism Benchmark via BenchLM mirror, dataset meta); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-Realtime-2.1 — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-realtime-2.1)
  - [GPT Realtime 2.1 — BenchLM](https://benchlm.ai/models/gpt-realtime-2-1)
  - [Audio Realism Benchmark — designarena.ai](https://www.designarena.ai/methodology/audio-realism-benchmark)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
