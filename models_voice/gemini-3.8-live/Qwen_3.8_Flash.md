# Gemini 3.8 Live — findings by Qwen 3.8 Flash

- Source: Google DeepMind (`google/gemini-3-8-live`) — voice mirror tree
- Date: 2026‑11‑10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google's **native speech-to-speech live-dialogue model** for the Gemini Live API — audio/image/video in, synthesized speech + text out, built for natural real-time conversation. Sibling **Gemini 3.8 Live Extended Thinking** trades some latency for stronger reasoning (ranks #1 on AA Speech-to-Speech); this entry scores the base **3.8 Live**.
- **Provider / access:** Gemini Live API (AI Studio free quota → paid). Released 2026‑09‑15 (blog.google).
- **IDs:** `google/gemini-3-8-live` (meta), Gemini 3.8 Live (docs).
- **Context window:** **131K per session / 65K out** (curated meta).
- **Modalities:** **text, image, video, audio in; text + audio out** (native omni).
- **Pricing:** Free via AI Studio unpaid quota (traffic may feed product development); paid text $0.75/$4.50, audio $3/$12 per 1M. AA cost ≈ $0.84/hr input audio.

### Raw benchmarks found (exact-ID, independent)

Artificial Analysis **Speech-to-Speech** leaderboard row for "Gemini 3.8 Live":

- **AA Speech-to-Speech Index: 74.5** · Speech Reasoning (Big Bench Audio): **91.7 %** · Conversational Dynamics (Full Duplex Bench): **96.1 %** · Agentic (τ‑Voice): **30.1 %** · Arena Preference Elo: **1074** (field-leading) · Task Success Rate: **93.2 %** · Time to First Audio: **1.18 s**.
- Context (family): Gemini 3.8 Live Extended Thinking = Index 82.6, reasoning 97.7 %, agentic 68.6 % — the reasoning-strong sibling, **not** this base SKU.
- Caveat flagged by AA commentary: consumer-grade voice-to-voice can still fail on real end-user tasks — Arena/task numbers are harness-specific.

### Normalized scores (1–100)

> Scored on independent AA S2S components. Conversational voice agent — Coding is near-absent by design, Multimodal is its strength. Overall = half-up mean of five quality dims, Cost excluded.

- **Tool use: 55/100.** Native function calling and top-tier Task Success 93.2 % + Arena 1074, but the direct agentic measure τ‑Voice 30.1 % is weak → capped mid. Good consumer judge, not a heavy tool-agent.
- **Reasoning: 72/100.** Big Bench Audio 91.7 % is solid speech reasoning (base tier; the Extended Thinking sibling is higher). No text GPQA/HLE for the live SKU.
- **Context window: 60/100.** 131K per-session budget → 100K–200K band (50–64); 60.
- **Multimodal: 92/100.** Full omni intake (text+image+video+audio) with audio output — top band (audio in + non-text out).
- **Coding: 25/100.** Conversational voice model; no coding benchmark; minimal code surface. Provisional floor-plus.
- **Cost efficiency: high.** Free AI Studio tier; paid audio $3/$12 per 1M. Excluded from Overall.
- **Overall Score: 61/100.** Mean of Tool 55, Reasoning 72, Context 60, Multimodal 92, Coding 25 = 304/5 = 60.8 → **61**. Best fit: natural real-time **voice/vision conversation** with market-leading preference; escalate to Extended Thinking for agentic/reasoning depth.

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑11‑10
- Method: ≥3 qualifying acquisitions (blog.google Gemini 3.8 Live launch, deepmind.google Gemini Audio live-dialogue, **Artificial Analysis Speech-to-Speech leaderboard** exact-ID row, deeplearning.ai batch / dev.to). Scored on independent AA components (Index 74.5, reasoning 91.7 %, conv 96.1 %, τ‑Voice 30.1 %, Arena 1074, task 93.2 %, TTFA 1.18 s). Flagged: base 3.8 Live vs Extended Thinking sibling separated (did not merge scores); voice-agent poor-fit on Coding.
- Revisit trigger: a new AA S2S Index row for the exact 3.8 Live, or published text-suite reasoning rows for the live SKU.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
