# GPT-Realtime-2.1 — findings by LongCat 2.5 Preview

- Source: OpenAI (`openai/gpt-realtime-2.1`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-2.1
- **Short description:** OpenAI's realtime speech-to-speech reasoning model with tool use; updates GPT-Realtime-2 with improved alphanumeric recognition, silence and noise handling, and interruption behavior.
- **Provider / access:** OpenAI Realtime API `v1/realtime` (WebRTC, WebSocket, SIP); OpenCode Zen `openai/gpt-realtime-2.1`. Not available via Chat Completions / Responses / Live APIs.
- **Release / knowledge:** Released 2026-07-06; knowledge cutoff Sep 30, 2024.
- **IDs:** `openai/gpt-realtime-2.1` (Zen); Realtime API model ID `gpt-realtime-2.1`
- **Context window:** 128,000 tokens; max output 32,000 tokens
- **Modalities:** text, audio, image in; text, audio out; reasoning yes (configurable effort); tool calls yes (function calling); prompt caching supported
- **Pricing (as of 2026-09-29):** Text $4/1M input ($0.40 cached) / $24/1M output; Audio $32/1M input ($0.40 cached) / $64/1M output; Image $5/1M input ($0.50 cached). No free tier.
- **Architecture:** proprietary; realtime speech-to-speech with configurable reasoning effort

### Raw benchmarks found

Agent / tool use:

- Function calling supported; no verified public tool-use benchmark scores found for this model
- Terminal-Bench / Tau3 / GDPval / Claw-Eval: no verified public score found (voice model; text benchmarks not applicable)

Reasoning / knowledge:

- Configurable reasoning effort supported; no verified public reasoning benchmark scores found for this model
- GPQA / HLE / AIME / AA Intelligence Index: no verified public score found

Coding:

- No verified public score found for this model

Long context:

- 128,000 token context window; no long-context retrieval benchmark reported

Voice-specific:

- Improved alphanumeric recognition, silence and noise handling, and interruption behavior vs GPT-Realtime-2 (vendor claim, no published numeric comparison)
- τ-Voice benchmark (arXiv 2603.13686): full-duplex voice agents generally score 31–51% task completion — but this paper (Mar 2026) predates GPT-Realtime-2.1 and does not evaluate it; not attributable

### Normalized scores (1–100)

- **Tool use: 50/100.** Function calling is supported and the model is designed for complex voice-agent workflows, but no verified public tool-use benchmark scores are available for this specific model.
- **Reasoning: 55/100.** Configurable reasoning effort is supported and the model is classified as a reasoning model, but no verified public reasoning benchmarks exist for this voice model; scored provisionally.
- **Context window: 58/100.** 128K tokens lands in the 100K–200K tier (50–64); no long-context retrieval score reported.
- **Multimodal: 90/100.** Text, audio, and image input with text and audio output fits the 90–100 tier (audio in / non-text out).
- **Coding: 30/100.** No verified public coding benchmarks for this voice model; coding tasks are not its primary use case.
- **Cost efficiency: 45/100.** $4/$24 per 1M text tokens and $32/$64 per 1M audio tokens is expensive; audio token pricing makes voice sessions costly at scale.
- **Overall Score: 57/100.** Mean of (50 + 55 + 58 + 90 + 30) / 5 = 56.6 → 57. Best fit: realtime voice-agent workflows requiring speech-to-speech with tool use; expensive for high-volume deployments.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-09-29
- Method: public internet research (OpenAI official docs, model catalog, τ-Voice paper); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
