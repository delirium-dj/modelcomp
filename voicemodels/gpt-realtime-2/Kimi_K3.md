# GPT-Realtime-2 — findings by Kimi K3

- Source: OpenAI (`gpt-realtime-2`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-2
- **Short description:** OpenAI's flagship speech-to-speech model on the Realtime API — first S2S model with GPT-5-class reasoning, configurable reasoning effort, image input, native remote-MCP tool execution, and SIP phone calling. Updated in place by `gpt-realtime-2.1` (and 2.1-mini) on 2026-07-06.
- **Provider / access:** OpenAI Realtime API over WebSocket (`wss://api.openai.com/v1/realtime?model=gpt-realtime-2`), SIP gateway, plus Responses/Chat Completions surfaces for non-audio turns.
- **Release / knowledge:** Shipped 2025-11-06 (OpenAI voice-generation release covered by apidog/explainx guides). Stated knowledge cutoff 2024-09-30 (apidog spec table).
- **IDs:** `gpt-realtime-2` (Realtime API); mini variant `gpt-realtime-2-mini`; companions `GPT-Realtime-Translate`, `GPT-Realtime-Whisper`. No Zen ID.
- **Context window:** 128,000 tokens / 32,000 max output (apidog spec table; audio tokenized at roughly 50 tokens/sec into the same window).
- **Modalities:** Text, audio, image in; text, audio out. Reasoning yes (5 levels: minimal/low/medium/high/xhigh, default low); function calling yes (parallel, with audio narration); JSON mode yes; remote MCP servers yes.
- **Pricing (as of 2026-09-27):** Text $4.00 / $24.00 per 1M in/out; audio $32.00 / $64.00 per 1M in/out; cached input $0.40/1M; image input $5.00/1M (apidog pricing table). Companions are minute-metered: Translate $0.034/min, Whisper $0.017/min.
- **Architecture:** Proprietary end-to-end speech-to-speech (no STT→LLM→TTS pipeline).

### Raw benchmarks found

Agent / tool use:

- Audio MultiChallenge (instruction following): **48.5%** at high/xhigh reasoning, up from 34.7% on gpt-realtime-1.5 (apidog, OpenAI numbers)
- Parallel tool calls + narrated progress + remote MCP execution verified in API behavior (apidog); Tau/TB/GDPval: no verified public score found
- τ-voice Bench for updated 2.1 successor: 45.7% (Artificial Analysis via xAI launch comparison — different version, provisional context only)

Reasoning / knowledge:

- Big Bench Audio (audio intelligence): **96.6%** at high/xhigh, up from 81.4% on 1.5 (apidog, OpenAI numbers)
- GPQA / HLE / LCR / CritPt / Intelligence Index: no verified public score found (voice model, not run on text suites)

Coding:

- All rows: no verified public score found (not a coding-positioned model; no SWE/LiveCodeBench runs exist)

Long context:

- 128K window; no long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 65/100.** Real parallel function calling + remote MCP + SIP in production, Audio MultiChallenge 48.5%; capped by no public agentic-suite scores (2.1's 45.7% τ-voice hints mid-tier only).
- **Reasoning: 80/100.** Big Bench Audio 96.6% with GPT-5-class reasoning at high/xhigh; production default is `low`, so real-world quality sits between bands — capped by that latency tradeoff and no GPQA-class corroboration.
- **Context window: 58/100.** 128K maps to the 100K–200K band (50–64); audio burns ~50 tok/s so effective session length is tighter than the number suggests.
- **Multimodal: 95/100.** Text + image + native audio in, text + audio out — the methodology's top band (90–100) for any non-text output.
- **Coding: 40/100.** Provisional floor: zero coding benchmarks exist and the model is voice-first; kept at the low end rather than the 15 text-only floor since it isn't the modality that's missing but the evidence.
- **Cost efficiency: 40/100.** $32/$64 per 1M audio tokens is firmly premium (WELL above the $10/$50 ≈ 30 text anchor, partially offset by 80× cached-input discount for repeated context).
- **Overall Score: 68/100.** (65+80+58+95+40)/5 = 67.6 → 68. Best fit: production voice agents (support/telephony) needing tool dispatch + image-aware conversations over WebSocket or SIP; check 2.1 for the current revision.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-27
- Method: public internet research (apidog GPT-Realtime-2 developer guide, explainx release coverage, marktechpost 2.1 update, OpenAI community thread); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
