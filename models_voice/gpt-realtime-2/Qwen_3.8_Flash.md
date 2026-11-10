# GPT Realtime 2 — findings by Qwen 3.8 Flash

- Source: OpenAI (`opencode/gpt-realtime-2`) — voice mirror tree
- Date: 2026‑11‑10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime 2
- **Short description:** OpenAI's **end-to-end low-latency speech-to-speech conversational model** in the Realtime API — reasons, remembers, calls functions and replies with natural speech in real time. Scored here on the flagship **"High"** reasoning configuration (Medium / Minimal variants exist).
- **Provider / access:** OpenAI Realtime API; hosted routes (Azure OpenAI, etc.). Released with the 2026‑05‑07 voice-intelligence update.
- **IDs:** `opencode/gpt-realtime-2` (meta); AA entry "GPT-Realtime-2 (High)".
- **Context window:** curated `meta.json` is a **scaffolded stub** ("128K total", "Text in/out", "Standard pricing") — the **"Text in/out" modality is wrong** (it is an audio model). Treated as placeholder.
- **Modalities (verified via AA/OpenAI):** audio in / audio out (+ text), tool calling.
- **Pricing:** AA $4.14/hr input audio; token audio rates ~$1.15/$4.61 band per AA columns. Stub "Standard pricing" is a placeholder.

### Raw benchmarks found (exact-ID, independent)

Artificial Analysis **Speech-to-Speech** leaderboard, "GPT-Realtime-2 (High)":

- **AA Speech-to-Speech Index: 73.6** · Speech Reasoning (Big Bench Audio): **96.6 %** · Conversational Dynamics (Full Duplex Bench): **95.3 %** · Agentic (τ‑Voice): **39.8 %** · Arena Preference Elo: **920** · Task Success Rate: **89.8 %** · Time to First Audio: **1.14 s**.
- Variants (not scored here): GPT‑Realtime‑2 (Medium) reasoning 93.3 % / conv 95.2 % / agentic 37.4 %; (Minimal) Index 63.3.

### Normalized scores (1–100)

> Scored on the High-config AA row. Conversational voice agent: strong speech reasoning + dynamics, modest agentic, minimal coding. Overall = half-up mean of five quality dims, Cost excluded.

- **Tool use: 60/100.** Function calling + Task Success 89.8 %, but τ‑Voice 39.8 % is only mid → capped.
- **Reasoning: 78/100.** Big Bench Audio **96.6 %** is excellent speech reasoning. No text GPQA/HLE for the exact ID.
- **Context window: 58/100.** Stub 128K (unverified) → 100K–200K band; flagged scaffolded meta.
- **Multimodal: 85/100.** Audio in/out native S2S + text; limited vision → high band, capped below omni.
- **Coding: 20/100.** Voice agent; no coding benchmark; minimal surface. Provisional.
- **Cost efficiency: mid.** ~$4.14/hr input audio. Excluded from Overall.
- **Overall Score: 60/100.** Mean of Tool 60, Reasoning 78, Context 58, Multimodal 85, Coding 20 = 301/5 = 60.2 → **60**. Best fit: natural real-time voice agents needing strong spoken reasoning; the newer **GPT‑Realtime‑2.1** and agentic **GPT‑Live‑1 (Astra)** overtake it on τ‑Voice.

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑11‑10
- Method: ≥3 qualifying acquisitions (**Artificial Analysis Speech-to-Speech** exact-ID row, OpenAI voice-intelligence launch, mindstudio/coval GPT Realtime 2 coverage). Scored on AA High-config components (Index 73.6, reasoning 96.6 %, conv 95.3 %, τ‑Voice 39.8 %, Arena 920, task 89.8 %, TTFA 1.14 s). Flagged: (a) **scaffolded stub meta is wrong** — "Text in/out"/"Standard pricing" placeholders superseded by verified audio modality + AA pricing (maintainer should replace the stub); (b) scored the **High** config (Medium/Minimal differ); (c) voice-agent poor-fit on Coding.
- Revisit trigger: AA updates the `gpt-realtime-2` row or the scaffolded meta is replaced with a verified model card.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
