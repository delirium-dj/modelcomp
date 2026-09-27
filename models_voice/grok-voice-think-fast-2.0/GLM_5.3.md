# Grok Voice Think Fast 2.0 — findings by GLM 5.3

- Source: xAI / SpaceXAI (`grok-voice-think-fast-2.0`; default of `grok-voice-latest` since 2026-08-05)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Voice Think Fast 2.0
- **Short description:** xAI's most capable native speech-to-speech voice model (announced 2026-07-29), which reasons through queries while speaking and executes tool calls before finishing its first sentence. Top use case: low-latency production voice agents (telephony, support) in noisy real-world settings.
- **Provider / access:** xAI API (Grok Voice endpoints); served as `grok-voice-think-fast-2.0` and as the default `grok-voice-latest` since the 2026-08-05 migration (predecessor pinnable as `grok-voice-think-fast-1.0`); A/B tested in production on Starlink's support line (+1 888 GO STARLINK).
- **Release / knowledge:** announced 2026-07-29; default migration 2026-08-05; knowledge cutoff not disclosed.
- **IDs:** `grok-voice-think-fast-2.0`, `grok-voice-latest` (xAI Voice API).
- **Context window:** not published for the voice model (no session-context limit documented); conversational voice sessions are short-lived by design.
- **Modalities:** audio in / audio out (native speech-to-speech); text; tool calls with early execution; transcription (24 languages, claimed 1.5–2.0× better than Deepgram Nova 3 / ElevenLabs Scribe v2, ~10× gap in noisy settings); reasons in parallel with speech.
- **Pricing (as of 2026-09-25):** $0.08 per minute of audio (60% above Think Fast 1.0's $0.05/min); AA cost test measured $4.80 per hour of input audio. No free tier.
- **Architecture:** proprietary speech-to-speech model; parameter count undisclosed; trained with RL toward human conversational patterns (short sentences, one question at a time, no fluff); reasoning tokens cut to 0.4× of its predecessor's P50.

### Raw benchmarks found

> Launch-table figures are xAI-published citing Artificial Analysis (2026-07-29); the September chart values are Artificial Analysis' live leaderboard (via DataCamp, 2026-09-17).

Agent / tool use:

- τ-Voice (Sierra harness, AA): **56.5%** (vs Think Fast 1.0 52.1%, GPT-Realtime-2.1 High 45.7%, Gemini 3.1 Flash High 37.7%; third on AA's September board behind Gemini 3.8 Live Extended Thinking 68.6% and GPT-Live-1 Astra 67.9%)
- τ³-Banking (vendor chart citing Sierra): **16.5%** (vs Gemini 3.8 Live Extended Thinking 35.1%, GPT-Live-1 Astra 32.0%, Gemini 3.1 Flash Live 11.3%, GPT-Realtime 2 10.3%)
- Full Duplex Bench (AA via xAI): **95.1%** (vs Think Fast 1.0 77.8%, GPT-Realtime-2.1 95.7%, Gemini 3.1 Flash 74.3%)
- Tool-call latency: reasoning tokens at **0.4×** predecessor P50; calls "usually executing before the end of the agent's first sentence" (vendor claim)
- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found (voice model; not evaluated)

Reasoning / knowledge:

- AA Speech-to-Speech Quality Index: **82.9%** at launch (vs 1.0 75.7%, GPT-Realtime-2.1 High 79.1%, Gemini 3.1 Flash High 69.5%); **81.3** on AA's September chart (third, between GPT-Live-1 Astra 81.5 and Gemini 3.8 Live base 76.0)
- Big Bench Audio (AA via xAI): **97.2%** (vs 1.0 97.1%, GPT-Realtime-2.1 96.0%, Gemini 3.1 Flash 96.6%)
- Time to first audio: **0.70s** (vs 1.0 1.25s, Gemini 3.1 Flash 2.98s)
- GPQA Diamond / HLE / AA Intelligence Index: no verified public score found (voice model)

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE: no verified public score found for the voice model

Long context:

- No long-context retrieval reported; no session-context limit published

### Normalized scores (1–100)

> Voice-layer scores; reasoning is native to this model (not delegated to a separately billed backend), per xAI's in-layer parallel reasoning design.

- **Tool use: 68/100.** τ-Voice 56.5% is a strong mid-high agentic completion rate (clear third on AA's September voice board) with verified early-executing tool calls and Full Duplex Bench 95.1%; the τ³-Banking 16.5% row shows multi-step banking workflows still fail most of the time, capping the score.
- **Reasoning: 72/100.** S2S Quality Index 82.9 at launch (81.3 on the September chart) and Big Bench Audio 97.2% — the model reasons natively while speaking with 0.4× reasoning tokens; no standardized text-reasoning rows exist, keeping it below text-model reasoning tiers.
- **Context window: 50/100.** No verified session-context limit published; short-lived conversational session design places it at the 100K–200K band floor — provisional.
- **Multimodal: 92/100.** Native full-duplex audio in/out with top-tier transcription accuracy across 24 languages and strong noise/telephony robustness (audio in + non-text out, top band); no image/video input documented.
- **Coding: 45/100.** No coding benchmark exists for this voice model; provisional family-proxy score capped by zero direct rows.
- **Cost efficiency: 60/100.** $0.08/min ($4.80/hour in AA's cost test) — 60% above its own predecessor and ~6× Gemini 3.8 Live's $0.84/hour, though below GPT-Live-1's Astra pairing ($5.83/hour); predictable flat per-minute billing is the one cost positive.
- **Overall Score: 65/100.** (68 + 72 + 50 + 92 + 45) / 5 = 65.4 → 65. Best-fit: the fastest (0.70s first audio) native speech-to-speech agent for noisy, telephony-grade production voice workflows; choose Gemini 3.8 Live base when cost per audio hour dominates.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (xAI launch table citing AA, AA September leaderboard via DataCamp, pricing trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
