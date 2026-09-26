# Gemini 3.8 Live — findings by Kimi K3

- Source: Google / Gemini 3.8 Live (`gemini-3.8-live`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google's GA native speech-to-speech model for the Gemini Live API — the default low-latency voice-agent variant of the 3.8 Audio family (sibling: 3.8 Live Extended Thinking). Replaces Gemini 3.1 Flash Live at identical pricing.
- **Provider / access:** Gemini Live API (WebSocket) via `google-genai` SDK / Google AI Studio; stable ID `gemini-3.8-live` (no preview suffix). Also powering Search Live. No OpenCode Zen ID.
- **Release / knowledge:** GA 2026-09-15 (Gemini API changelog + Google launch blog); knowledge cutoff January 2025.
- **IDs:** `google/gemini-3.8-live` (Gemini API). No Zen Free ID; a Google AI Studio free tier exists (free-tier data used to improve Google products).
- **Context window:** 131,072 tokens input / 65,536 output (AI/TLDR citing Google's model card). Session caps: 15 min audio-only, 2 min audio+video.
- **Modalities:** text/image/audio/video in; text + **audio** out (native speech-to-speech); async (`NON_BLOCKING`) function calling + function scheduling; 97 languages with mid-conversation switching.
- **Pricing (as of 2026-09-25):** Text $0.75 in / $4.50 out per 1M; audio $3.00 in / $12.00 out ($0.005 / $0.018 per minute); image-video input $1.00/1M. Same table as the Extended Thinking sibling; thinking tokens bill at audio-out rate.
- **Architecture:** based on Gemini 3 Pro (per Google's model card); proprietary, API-only, no weights.

### Raw benchmarks found

Agent / tool use:

- τ-Voice (Sierra voice-agent benchmark, measured by Artificial Analysis): **30.1%** — base model, far below sibling Extended Thinking 68.6% and even predecessor 3.1 Flash Live 37.7% (DataCamp, 2026-09-17, citing AA public leaderboard)
- τ³-Banking (Google launch chart citing Sierra — vendor-reported): base-model number not published; Extended Thinking 35.1%
- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval: **no verified public score found** for this ID

Reasoning / knowledge:

- Artificial Analysis Speech-to-Speech Index: **76.0** (independent; vs GPT-Live-1 Astra 81.5, Extended Thinking 82.6, 3.1 Flash Live 71.5)
- Big Bench Audio: **no base-model score published** (Extended Thinking: 97.7%, vendor-reported)
- GPQA Diamond / HLE / MRCR: **no verified public score found** for this ID
- EVA-Bench (ServiceNow voice agents): Pareto-front claim, vendor-reported, non-public-API run

Coding:

- SWE-bench / LiveCodeBench / SciCode: **no verified public score found** — voice-first model, not positioned or measured for coding

Long context:

- 131K window verified; session-limited (15/2 min); **no MRCR/RULER retrieval score reported**.

Cost:

- **$0.84 per hour of input audio** (Artificial Analysis cost test on Big Bench Audio subset) — lowest of any charted voice model; Extended Thinking $3.50/h, Grok Voice Think Fast 2.0 $4.80/h, GPT-Live-1 Astra $5.83/h.

### Normalized scores (1–100)

> Methodology: `../../model-comparison.md`. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 55/100.** Best-in-class async function-calling mechanics (non-blocking default, scheduling), but the independent τ-Voice agentic score of 30.1% — below its own predecessor — caps this hard: Google itself steers multi-step tool work to the Extended Thinking sibling.
- **Reasoning: 70/100.** AA Speech-to-Speech Index 76.0 is a verified independent mid-high score on spoken reasoning/dialogue; no GPQA/HLE for this exact ID, and no configurable thinking on the base model cap it.
- **Context window: 60/100.** 131,072 tokens → 100K–200K band (50–64); short session caps (15 min audio / 2 min A/V) reinforce mid-band scoring.
- **Multimodal: 95/100.** Full text/image/audio/video in plus native audio out (non-text output → 90–100 band), 97-language switching, and near-real-time video grounding — among the broadest multimodal coverage of any model here.
- **Coding: 40/100.** No verified coding benchmark exists for this ID and it is purpose-built for voice; scored conservatively low rather than placeholder-high. Best treated as "not a coding model".
- **Cost efficiency: 85/100.** Text path $0.75/$4.50 (~89 per price refs); audio path is the cheapest verified per-hour voice agent on AA's chart ($0.84/h in). Blended down for the pricier $12/1M audio output.
- **Overall Score: 64/100.** Half-up mean of (55 + 70 + 60 + 95 + 40)/5 = 64.0. Best fit: production voice agents (triage, voice search, multilingual support, live camera help) at the lowest verified cost per audio hour — pick Extended Thinking instead for agentic voice work.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-25
- Method: public internet research (DataCamp launch analysis citing Artificial Analysis public leaderboards; AI/TLDR spec record citing Google's model card and ai.google.dev pricing; Google Live API documentation ecosystem). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
