# Gemini 3.8 Live — findings by Kimi K3

- Source: Google / Gemini 3.8 Live (`gemini-3.8-live`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google's GA native speech-to-speech model for the Gemini Live API — the default low-latency voice-agent variant of the 3.8 Audio family (sibling: 3.8 Live Extended Thinking). Replaces Gemini 3.1 Flash Live at identical pricing.
- **Provider / access:** Gemini Live API (WebSocket) via `google-genai` SDK / Google AI Studio; stable ID `gemini-3.8-live` (no preview suffix). Also powering Search Live. No OpenCode Zen ID (verified 2026-09-29 — Zen carries no Live/voice models).
- **Release / knowledge:** GA 2026-09-15 (Gemini API changelog + Google launch blog); knowledge cutoff January 2025.
- **IDs:** `google/gemini-3.8-live` (Gemini API); tracked independently on Artificial Analysis and benchlm.ai (no computed score there). A Google AI Studio free tier exists (free-tier data used to improve Google products).
- **Context window:** 131,072 tokens input / 65,536 output (AI/TLDR citing Google's model card). Session caps: 15 min audio-only, 2 min audio+video.
- **Modalities:** text/image/audio/video in; text + **audio** out (native speech-to-speech); async (`NON_BLOCKING`) function calling + function scheduling; 97 languages with mid-conversation switching.
- **Pricing (as of 2026-09-29):** Text $0.75 in / $4.50 out per 1M; audio $3.00 in / $12.00 out ($0.005 / $0.018 per minute); image-video input $1.00/1M. Same table as the Extended Thinking sibling; thinking tokens bill at audio-out rate.
- **Architecture:** based on Gemini 3 Pro (per Google's model card); proprietary, API-only, no weights.

### Raw benchmarks found

Agent / tool use:

- τ-Voice (Sierra voice-agent benchmark, measured by Artificial Analysis): **30.1%** — base model, far below sibling Extended Thinking 68.6% and even predecessor 3.1 Flash Live 37.7% (artificialanalysis.ai speech-to-speech leaderboard, verified 2026-09-29)
- Arena Task Success Rate (AA Speech Agent Arena): **93.2%** — high share of conversations ending with the correct tool call (verified 2026-09-29)
- τ³-Banking (Google launch chart citing Sierra — vendor-reported): base-model number not published; Extended Thinking 35.1%
- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval: **no verified public score found** for this ID

Reasoning / knowledge:

- Artificial Analysis Speech-to-Speech Index: **76.0** (independent; vs GPT-Live-1 Astra 81.5, Extended Thinking 82.6, 3.1 Flash Live 71.5) — verified 2026-09-29
- **Big Bench Audio (AA speech reasoning): 92%** — now published for the base model (verified 2026-09-29; prior snapshot had no base-model score). Extended Thinking (High): 98%
- Conversational Dynamics (Full Duplex Bench v1/v1.5 subset): **96.1%** — #5 of 34 models on AA (verified 2026-09-29)
- Speech Agent Arena Preference Elo: **1083** — highest preference rating among charted voice models (anchor: GPT Realtime 1.5 = 1000)
- GPQA Diamond / HLE / MRCR: **no verified public score found** for this ID
- EVA-Bench (ServiceNow voice agents): Pareto-front claim, vendor-reported, non-public-API run

Coding:

- SWE-bench / LiveCodeBench / SciCode: **no verified public score found** — voice-first model, not positioned or measured for coding

Long context:

- 131K window verified; session-limited (15/2 min); **no MRCR/RULER retrieval score reported**.

Cost / latency:

- **$0.84 per hour of input audio** (Artificial Analysis normalized task-cost on Big Bench Audio subset; verified 2026-09-29) — lowest nonzero normalized per-hour cost on AA's chart; Extended Thinking $3.50/h, Grok Voice Think Fast 2.0 $4.80/h, GPT-Live-1 Astra $5.83/h.
- Time to first audio: **1.18s** on Big Bench Audio (AA; Extended Thinking 1.35s).

### Normalized scores (1–100)

> Methodology: `../../model-comparison.md`. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 55/100.** Best-in-class async function-calling mechanics (non-blocking default, scheduling) and a strong 93.2% Arena Task Success Rate, but the independent τ-Voice agentic score of 30.1% — below its own predecessor — caps this hard: Google itself steers multi-step tool work to the Extended Thinking sibling.
- **Reasoning: 75/100.** Big Bench Audio 92% (now verified for the base model) plus S2S Index 76.0 show solid spoken reasoning; no GPQA/HLE for this exact ID and no configurable thinking on the base model cap it.
- **Context window: 60/100.** 131,072 tokens → 100K–200K band (50–64); short session caps (15 min audio / 2 min A/V) reinforce mid-band scoring.
- **Multimodal: 95/100.** Full text/image/audio/video in plus native audio out (92–97 band for live voice with audio out), 97-language switching, 96.1% conversational dynamics — among the broadest multimodal coverage of any model here.
- **Coding: 40/100.** No verified coding benchmark exists for this ID and it is purpose-built for voice; scored conservatively low rather than placeholder-high. Best treated as "not a coding model".
- **Cost efficiency: 85/100.** Text path $0.75/$4.50 (~89 per price refs); audio path is the cheapest verified normalized per-hour agent on AA's chart ($0.84/h in). Blended down for the pricier $12/1M audio output.
- **Overall Score: 65/100.** Half-up mean of (55 + 75 + 60 + 95 + 40)/5 = 65.0. Best fit: production voice agents (triage, voice search, multilingual support, live camera help) at the lowest verified cost per audio hour — pick Extended Thinking instead for agentic voice work.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: public internet research (Artificial Analysis speech-to-speech leaderboard verified 2026-09-29; OpenCode Zen docs updated 2026-09-28; DataCamp launch analysis; AI/TLDR spec record citing Google's model card; Google Live API documentation ecosystem). Scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: AA now publishes base-model numbers — added Big Bench Audio 92%, Full Duplex 96.1%, Arena Elo 1083, Task Success 93.2%, TTFA 1.18s; reconfirmed S2S Index 76.0, τ-Voice 30.1%, $0.84/h; Reasoning 70→75; Overall 64→65.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
