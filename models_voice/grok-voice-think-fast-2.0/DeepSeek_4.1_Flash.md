# Grok Voice Think Fast 2.0 — findings by DeepSeek 4.1 Flash

- Source: xAI / Grok Voice Think Fast 2.0 (`xai/grok-voice-think-fast-2.0`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Voice model.** Lives under `voicemodels/` per the `RULES.md` voice/speech routing
> rule: it is a speech-to-speech model, priced per minute of audio, so text/code
> benchmarks are inapplicable and are labelled as such.

## Model card

- **Name:** Grok Voice Think Fast 2.0
- **Short description:** xAI's 2026-07-29 speech-to-speech model, successor to Grok Voice Think Fast 1.0 and the new target of the `grok-voice-latest` alias from 2026-08-05. Its distinguishing trick is reasoning **while** speaking: the model thinks in parallel with audio output, cutting relative reasoning tokens to 0.4× of version 1.0 with no latency penalty, so tool calls usually land before the agent finishes its first sentence.
- **Provider / access:** xAI Speech to Speech API over WebSocket (`wss://api.x.ai/v1/realtime?model=grok-voice-latest`, also `grok-voice-think-fast-2.0`), plus SIP telephony integration (G.711 μ-law/A-law native), LiveKit or WebSocket; drop-in OpenAI Realtime API migration path. Proprietary, closed.
- **Release / knowledge:** Released 2026-07-29; alias repointed 2026-08-05. No separate knowledge cutoff published for the voice model.
- **IDs:** `grok-voice-think-fast-2.0`; alias `grok-voice-latest` (moved from 1.0 on 2026-08-05 — pinning 1.0 requires `grok-voice-think-fast-1.0`). No OpenCode Zen Free ID.
- **Context window:** **no token window published** for the Voice API — sessions stream and bill per minute. The operational caps are the real limit: **10 concurrent sessions per team**, us-east-1 only, and no priority tier (xAI limits, via eesel).
- **Modalities:** native audio (speech) in and out, text in/out alongside audio, realtime tool/function calling during live conversations, 20+ languages with mid-conversation code-switching, custom voices, 24 kHz PCM.
- **Pricing (as of 2026-09-27):** **$0.08 per minute of audio** — up from $0.05/minute for 1.0, and the alias repoint moved existing integrations to the higher rate automatically.
- **Architecture:** proprietary; speech-to-speech with parallel reasoning (no separate ASR → LLM → TTS chain).

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis τ-Voice: **56.5%** — best in xAI's launch comparison table (1.0: 52.1%, GPT-Realtime-2.1 High: 45.7%, Gemini 3.1 Flash High: 37.7%), and reported independently as the leading agentic τ-Voice result in the AA field
- Tool execution inside live calls, SIP/PSTN telephony, DTMF and 20+ language coverage are documented but unbenchmarked (no MCP-Atlas/Toolathon row exists for voice models)

Reasoning / knowledge:

- Artificial Analysis Speech-to-Speech Quality Index: **82.9%** (xAI, at launch) — second overall, behind Alibaba's Qwen Audio 3.0 Realtime Plus at 84.1%; the same index snapshot dated 2026-09-15 scores it **81.3** at High effort versus GPT-Live-1's 81.5 at medium effort
- Big Bench Audio (speech reasoning): **97.2%**; Full Duplex Bench (conversational dynamics): **95.1%** (vs 77.8% for 1.0); time to first audio: **0.70 s**
- Reasoning efficiency: **0.4×** relative reasoning tokens per response (P50) versus 1.0
- GPQA / HLE / MMLU-Pro / AA Intelligence Index: **no verified public score found** (audio-native model)

Coding:

- **no verified public score found** — no coding benchmark exists for this model, and coding is outside a voice agent's path

Long context:

- No MRCR/RULER value and no published token window; the binding constraints are the 10-concurrent-session limit, single-region (us-east-1) deployment and the absence of a priority tier rather than recall at length.

### Normalized scores (1–100)

- **Tool use: 88/100.** Best-in-class voice agentics — τ-Voice 56.5% leading the field, tool calls fired before the first sentence ends, SIP/DTMF telephony and CRM-style function calling during live calls; capped only by the missing MCP-class benchmark and the 10-session concurrency ceiling.
- **Reasoning: 85/100.** 82.9% on the Speech-to-Speech Quality Index with 97.2% Big Bench Audio and reasoning in parallel with speech is frontier-grade for audio; no text reasoning benchmark exists and the index finish is second, which caps it below 90.
- **Context window: 70/100.** Scored on operational reality, not size: no token window is published at all, and 10 concurrent sessions in a single region is a tighter practical limit than most voice tiers.
- **Multimodal: 92/100.** Native speech-to-speech plus text, realtime interruption/backchannel handling (Full Duplex 95.1%) and transcription accuracy 1.5–2.0× better than Deepgram Nova 3 / ElevenLabs Scribe v2 (~10× in noise); no image or video input is the only deduction.
- **Coding: 22/100.** Non-coding floor tier: no code benchmark exists and the model targets telephony/voice workflows; code work belongs to the text models an agent delegates to.
- **Cost efficiency: 70/100.** $0.08/minute ($4.80/hour) is mid-priced — 60% above the previous generation and 1.6× GPT-Live-1's voice layer, but far below GPT-Realtime-2's audio-token rates; doing reasoning and speech in one model avoids paying twice for a separate ASR stack.
- **Overall Score: 71.4/100.** (88 + 85 + 70 + 92 + 22) / 5 = 71.4. Best fit: high-volume inbound voice agents and support calls that need real reasoning plus tool calls inside the conversation.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-27
- Method: public internet research (xAI Grok Voice Think Fast 2.0 launch post and Speech to Speech API docs, Artificial Analysis Speech-to-Speech Index, independent eesel review of the published limits); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

