# GPT-Live-1 Astra — findings by GLM 5.3

- Source: OpenAI (`gpt-live-1` full-duplex voice layer via `v1/live/sessions`; AA-tracked configuration paired with a GPT-6 Astra backend)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Live-1 (tracked as "GPT-Live-1 Astra" in Artificial Analysis speech indexes, its benchmarked configuration)
- **Short description:** OpenAI's full-duplex voice model — it listens and speaks simultaneously — that serves as a front-end conversational layer over a separately chosen and priced reasoning backend (GPT-6 Astra, Codex, ChatGPT Work). First shipped in ChatGPT around July 2026, opened to API developers on 2026-09-10. Top use case: real-time voice agents (support, reservations, language learning) that must handle interruptions naturally.
- **Provider / access:** OpenAI Platform, `v1/live/sessions` (not a drop-in model ID for the Realtime or Responses endpoints); WebRTC/WebSocket with ephemeral keys; telephony support.
- **Release / knowledge:** API general availability 2026-09-10 (ChatGPT-only for ~two months prior); knowledge cutoff not disclosed for the voice layer.
- **IDs:** `gpt-live-1` (OpenAI `v1/live/sessions`); the "Astra" suffix denotes the GPT-6 Astra backend pairing used in AA's leaderboards, not a separate model ID.
- **Context window:** no session context limit published for the voice layer itself (Realtime-family GPT-Realtime-2.1 lists 128K context / 32K output as a family proxy); voice sessions are short-lived by design.
- **Modalities:** audio in / audio out natively (full-duplex), text; ASR transcripts, response text, keyword biasing, alphanumeric recognition, native turn detection; tone/pace/style controlled via system prompt; 12 voices across accents/dialects/languages (custom voices via sales); handles background noise and silence without talking over the user.
- **Pricing (as of 2026-09-25):** $0.05 per voice minute for the layer (≈$3.00/hour continuous, billed per second); backend reasoning model and tool-call fees charged separately — total cost is dominated by the paired backend (AA's cost test measured the Astra pairing at $5.83 per hour of input audio). No free tier.
- **Architecture:** proprietary native full-duplex speech model — incoming and outgoing audio processed together, avoiding the cascaded ASR→LLM→TTS pipeline; one customer reported cutting its voice codebase by 80% (removing 23,000 lines). Parameter count undisclosed.

### Raw benchmarks found

> AA τ-Voice / Speech-to-Speech Index / cost figures are Artificial Analysis' independently measured leaderboard numbers (via DataCamp, 2026-09-17); the Full Duplex Bench and Tau3-first claims are OpenAI-reported.

Agent / tool use:

- τ-Voice (Sierra harness, AA-measured): **67.9%** — second on the board behind Gemini 3.8 Live Extended Thinking (68.6%), ahead of Grok Voice Think Fast 2.0 (56.5%) and Gemini 3.1 Flash Live (37.7%)
- Tau3 (OpenAI-reported): **#1 rank** when paired with GPT-6 Astra at medium reasoning effort
- τ³-Banking (vendor launch chart citing Sierra): **32.0%** vs Gemini 3.8 Live Extended Thinking 35.1%, Grok Voice Think Fast 2.0 16.5%, Gemini 3.1 Flash Live 11.3%, GPT-Realtime 2 10.3%
- Full Duplex Bench (OpenAI-reported): **+30 percentage points** over GPT-Realtime-2.1
- Interruption handling (Speak, early user): **~80% fewer** wrong interruptions than previous turn-based systems
- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found (voice layer; not evaluated)

Reasoning / knowledge:

- Artificial Analysis Speech to Speech Index: **81.5** — second behind Gemini 3.8 Live Extended Thinking (82.6), ahead of Grok Voice Think Fast 2.0 (81.3) and Gemini 3.8 Live base (76.0)
- GPQA Diamond / HLE / LCR / AA Intelligence Index: no verified public score found (deep reasoning is delegated to the paired backend, billed separately)

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE: no verified public score found for the voice layer; coding work is routed to paired backends (GPT-6 Astra, Codex), each billed separately

Long context:

- No long-context retrieval reported; no session-context limit published for the layer

### Normalized scores (1–100)

> Scores the voice layer as deployed in its AA-tracked Astra pairing; agentic and reasoning credit is shared with the separately billed backend.

- **Tool use: 72/100.** AA-measured τ-Voice 67.9% is near the top of the 149-model-era voice-agent board (second only to Gemini ET) with a vendor-claimed #1 Tau3 at matched settings; native turn detection, keyword biasing, and telephony orchestration are verified protocol strengths; the backend delegation splits the agentic credit and caps the score.
- **Reasoning: 62/100.** AA Speech to Speech Index 81.5 (second) shows top-tier spoken-interaction quality, but the layer delegates deep reasoning to the paired backend and has no standardized text-reasoning rows of its own.
- **Context window: 50/100.** No verified session-context limit published; the 128K Realtime-family proxy and short-lived conversational session design place it at the 100K–200K band floor — provisional.
- **Multimodal: 90/100.** Native full-duplex audio in and audio out with 12 voices, tone/pace/style control, and alphanumeric precision — top-band realtime speech coverage (audio in + non-text out).
- **Coding: 45/100.** No coding benchmark exists for the voice layer; coding is explicitly routed to separately billed backends (GPT-6 Astra / Codex) — provisional family-proxy score, capped by zero direct rows.
- **Cost efficiency: 65/100.** $0.05/minute (≈$3.00/hour) for the layer with per-second billing is mid-band, but total cost stacks the backend on top (AA measured the Astra pairing at $5.83/hour of input audio — ~7× Gemini 3.8 Live's $0.84); no free tier.
- **Overall Score: 64/100.** (72 + 62 + 50 + 90 + 45) / 5 = 63.8 → 64. Best-fit: the strongest commercially proven full-duplex voice front-end for support, reservations, and language-learning agents; pick a cheaper backend for routine calls and reserve the Astra pairing for hard cases.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (OpenAI launch coverage, Artificial Analysis leaderboard via DataCamp, pricing trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
