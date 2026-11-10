# GPT Realtime 2.1 — findings by Qwen 3.8 Flash

- Source: OpenAI (`opencode/gpt-realtime-2.1`) — voice mirror tree
- Date: 2026‑11‑10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime 2.1
- **Short description:** The **2026 refresh of OpenAI's end-to-end speech-to-speech Realtime model** — natural duplex conversation with reasoning, memory and function calling. Scored here on the flagship **"High"** configuration (a Mini and a Minimal variant exist).
- **Provider / access:** OpenAI Realtime API; Azure OpenAI hosted route.
- **IDs:** `opencode/gpt-realtime-2.1` (meta); AA entry "GPT-Realtime-2.1 High".
- **Context window:** curated `meta.json` is a **scaffolded stub** ("128K total", "Text in/out", "Standard pricing") — **"Text in/out" is wrong** for an audio model; placeholder.
- **Modalities (verified):** audio in / audio out (+ text), tool calling.
- **Pricing:** AA cost **$10.75/hr** input audio (High) — notably higher than GPT‑Realtime‑2; stub "Standard pricing" placeholder.

### Raw benchmarks found (exact-ID, independent)

Artificial Analysis **Speech-to-Speech** leaderboard, "GPT-Realtime-2.1 High" (τ‑Voice over 2 trials per AA):

- **AA Speech-to-Speech Index: 75.2** · Speech Reasoning (Big Bench Audio): **95.8 %** · Conversational Dynamics (Full Duplex Bench): **95.7 %** · Agentic (τ‑Voice): **45.7 %** · Arena Preference Elo: **931** · Task Success Rate: **91.5 %** · Time to First Audio: **1.21 s**.
- Cross-check from xAI's launch table (OpenAI competitor row): GPT‑Realtime‑2.1 (High) AA Quality Index 79.1 %, Big Bench 96.0 %, Full Duplex 95.7 %, τ‑Voice 45.7 % — consistent with the AA leaderboard.
- Variants (not scored here): 2.1 Minimal Index 70.7; 2.1 Mini High reasoning 74.7 %.

### Normalized scores (1–100)

> Scored on the High-config AA row. Overall = half-up mean of five quality dims, Cost excluded.

- **Tool use: 63/100.** τ‑Voice 45.7 % (up from 39.8 % on 2.0) + Task Success 91.5 % → mid, tool-calling present.
- **Reasoning: 78/100.** Big Bench Audio 95.8 % excellent speech reasoning. No text-suite exact-ID row.
- **Context window: 58/100.** Stub 128K (unverified) → 100K–200K band; flagged scaffolded meta.
- **Multimodal: 86/100.** Audio in/out native S2S + text; limited vision → high band, below omni.
- **Coding: 20/100.** Voice agent; no coding benchmark; minimal surface. Provisional.
- **Cost efficiency: mid-low.** $10.75/hr input audio is pricey vs peers. Excluded from Overall.
- **Overall Score: 61/100.** Mean of Tool 63, Reasoning 78, Context 58, Multimodal 86, Coding 20 = 305/5 = 61.0 → **61**. Incremental step over GPT‑Realtime‑2 (better τ‑Voice + task success, higher cost); still behind GPT‑Live‑1 (Astra) on agentic voice work.

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑11‑10
- Method: ≥3 qualifying acquisitions (**Artificial Analysis Speech-to-Speech** exact-ID row, xAI Grok Voice 2.0 launch table carrying the GPT‑Realtime‑2.1 High comparison, OpenAI/Azure Realtime docs). Scored on AA High-config (Index 75.2, reasoning 95.8 %, conv 95.7 %, τ‑Voice 45.7 %, Arena 931, task 91.5 %, TTFA 1.21 s, $10.75/hr). Flagged: (a) **scaffolded stub meta wrong** — modality/pricing placeholders superseded by verified audio data (maintainer should replace); (b) scored **High** config; (c) τ‑Voice 2-trial; (d) voice-agent poor-fit on Coding; dotted-version slug `gpt-realtime-2.1` is correct (dot, not hyphen).
- Revisit trigger: AA refreshes the `gpt-realtime-2.1` row or the stub meta is replaced with a verified model card.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
