# GPT-Live-1 (Astra backend) — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-live-1` paired with `gpt-6-astra` (medium reasoning effort)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Live-1 with GPT-6 Astra backend (medium effort) — OpenAI's full-duplex voice front-end scored as the "Astra" configuration that tops the Artificial Analysis Speech to Speech Index
- **Short description:** OpenAI's full-duplex speech-to-speech model (voice layer) that listens and speaks simultaneously and delegates reasoning/tool calls to a paired backend text model; this entry is the `gpt-live-1` + `gpt-6-astra` (medium) system. Speech-first, so it lives under `voicemodels/` per the voice-routing rule. Not a variant of `gpt-realtime-2.1` — a separate parallel API.
- **Provider / access:** OpenAI API `gpt-live-1` over Live sessions — `POST /v1/live/sessions` (WebRTC) and WebSocket `/v1/live/sessions` (also `/openai/v1/live/sessions` on Microsoft Foundry). Live-session API, **not** Chat Completions and not the Responses API for the voice layer itself; the delegated backend is a nested Responses call. Also in ChatGPT (Go/Plus/Pro). SIP telephony documented (`sip:PROJECT_ID@sip.api.openai.com`), plus WebRTC/WebSockets and LiveKit/Twilio/Telnyx/Daily routes.
- **Release / knowledge:** in ChatGPT 2026-07-08; API general availability 2026-09-10 (OpenAI launch post). Knowledge cutoff **2025-07-31** (OpenAI docs via Dograh).
- **IDs:** `openai/gpt-live-1` (voice layer) + `openai/gpt-6-astra` (delegated backend, effort `medium`). **No OpenCode Zen Free ID** for this voice route.
- **Context window:** **128,000 tokens** default, holding instructions + conversation text + audio tokens (OpenAI "Managing GPT-Live sessions" guide). `session.usage.updated` reports `context_window.usage_ratio`; at >90% usage the session spawns a replacement engine carrying the original instructions plus up to 8,192 tokens of history (recent messages + summary of older ones). `instructions` capped at 16,384 tokens; history seeding accepts up to 128 messages / 8,192 combined tokens.
- **Modalities:** audio in; text in (history/instructions); **audio out** (default voice `marin`, custom/cloned voices available, cloning sales-gated); no image or video input. Full-duplex (simultaneous listen/speak, pauses, interruptions, backchannels). Tool calls and JSON/structured output run on the delegated backend Responses config; reasoning effort configurable per backend (`low`/`medium`/high tiers).
- **Pricing (as of 2026-09-27):** voice layer **$0.05 per minute**, billed per second, no rounding up (OpenAI pricing page); backend model + tool usage billed separately at that model's token rates (GPT-6 Astra $10 in / $50 out per 1M, $1 cached, per OpenAI pricing as tabulated by Grandream). Artificial Analysis measured **$5.83 per input-audio hour** for this exact Astra-medium configuration on a fixed Big Bench Audio subset (vs $4.47 for Sol-low and $4.80 for Grok Voice Think Fast 2.0 High). API Free tier does not support GPT-Live sessions; ChatGPT subscribers get it bundled with no per-minute meter. No $0/free API tier → paid.
- **Architecture:** proprietary; no parameter count or open weights published. The "model" measured here is a two-part system — full-duplex voice front-end plus a delegated text backend — so benchmark rows vary with backend choice (AA scores the pairing, not the voice layer alone).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = "no verified public score found".

Agent / tool use:

- Speech to Speech Index (**composite**): **81.5**, rank **#1** of the index (Artificial Analysis, 2026-09-15; Astra medium config; Sol-low config = 80.1, #3)
- τ-Voice / Tau3-Voice: **67.9%** (Artificial Analysis agentic harness — airline/retail/telecom support; #1, +11.4 pts over Grok Voice Think Fast 2.0 High 56.5%)
- τ³-bench Voice pass@1: **86.2%** (OpenAI launch post, Astra medium backend; vs 45.7% for `gpt-realtime-2.1`) — **different harness** than AA's 67.9%, listed separately, not averaged
- Tau Banking Knowledge pass@1: **32.0%** (OpenAI launch post, 97 tasks, Astra medium backend)
- Speech Agent Arena task success: **87.4%**, Elo **1048** (Artificial Analysis; #4 by Elo behind Gemini 3.1 Flash Live Minimal 1,096)
- Full Duplex Bench v3 tool calling (pass@1 of tool-call sequences from spoken requests): **87.0%** (OpenAI launch post; **Terra low** backend — not the Astra config)
- Full Duplex Bench v3 response quality: **90.0%** (OpenAI launch post; Terra low backend)
- Full Duplex Bench v1.5 Interactivity: **80.1%** (OpenAI launch post; vs 45.4% for `gpt-realtime-2.1`)
- Conversational Dynamics (AA, Full Duplex Bench subset): **94.9%** (Astra medium); Sol low = 97.3%
- Terminal-Bench 2.1 / GDPval-AA / Toolathon / MCP-Atlas / OSWorld: **no verified public score found** (voice-layer route; no text-agent harness run published for `gpt-live-1`)

Reasoning / knowledge:

- Big Bench Audio (speech reasoning): **90.1%** (Artificial Analysis; Astra medium; Sol low = 89.0%; leaders Qwen Audio 3.0 Realtime Plus 99.2%, Grok Voice Think Fast 2.0 High 97.2%)
- GPQA Diamond / HLE / LCR / CritPt / Artificial Analysis Intelligence Index / BenchLM: **no verified public score found** for `gpt-live-1` (reasoning delegated to the backend model; no text-reasoning harness published for the voice layer)
- Omniscience / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found** (`gpt-live-1` is a voice front-end; coding is executed by the paired backend, which is scored in its own folder)
- Closest proxy (provisional, not a coding score): Full Duplex Bench v3 tool-calling pass@1 **87.0%** with a `gpt-5.6-terra` (low) backend — measures tool sequences from spoken requests, not code generation

Long context:

- 128,000-token default window documented; history is summarized and carried into a replacement engine at >90% usage rather than growing unbounded (OpenAI Live guide)
- MRCR / RULER / GraphWalks retrieval quality: **no verified public score found**

Latency / speed (supporting, not a scored dim):

- Average time to first audio: **1.34 s** (Astra medium) vs 1.24 s (Sol low) vs **0.70 s** (Grok Voice Think Fast 2.0 High) — Artifical Analysis, Big Bench Audio subset
- Turn-taking latency after end of user turn: **0.798 s** (vs 1.41 s `gpt-realtime-2.1`, 1.63 s `gpt-realtime-2`) — OpenAI launch post
- Independent spot-check of first-audio: ~0.27–0.29 s (Artificial Analysis conversational-dynamics table via Grandream; different measurement than the 1.34 s Big Bench Audio figure)

### Normalized scores (1–100)

- **Tool use: 88/100.** τ-Voice 67.9% (#1, 11.4 pts clear of the nearest voice rival) and Speech Agent Arena task success 87.4% are frontier-level voice-agent task completion, with OpenAI's own τ³-bench Voice pass@1 at 86.2%. Capped at 88 because every tool execution is delegated to the backend model (the voice layer itself is never scored on Terminal-Bench/GDPval), Arena task success trails Grok's 94.6%, and Tau Banking Knowledge is only 32.0%.
- **Reasoning: 76/100.** Big Bench Audio 90.1% is a solid measured spoken-reasoning result on a hard audio-transposed suite, second-tier only to Grok 97.2% and Qwen 99.2%. Capped hard at 76 because no GPQA/HLE/LCR/AA Intelligence Index exists for `gpt-live-1` — deep reasoning is explicitly offloaded to the GPT-6 Astra backend, which is billed and benchmarked as a separate model.
- **Context window: 55/100.** 128,000 tokens sits in the documented 100K–200K tier (50–64). Capped by the hard 128K default, audio tokens counting against the same window, and the >90% summarization hand-off that drops older raw turns (only 8,192 tokens of history survive into the replacement engine) — no long-context retrieval score published.
- **Multimodal: 95/100.** Audio in and audio out with true full-duplex handling of pauses, interruptions and backchannels is the top of the methodology's "+audio in or any non-text out = 90–100" band. Capped at 95 because image and video input are not supported at all, and there is no text-output path of note beyond transcripts.
- **Coding: 30/100.** No verified public coding score of any kind exists for `gpt-live-1`; the closest proxy (Full Duplex Bench v3 tool calling 87.0%) measures spoken tool sequences, not code, and even that ran on a Terra backend. Held near the floor because coding capability is entirely delegated — the number reflects absent evidence for this ID, not a measured failure.
- **Cost efficiency: 62/100.** $0.05/min ($3.00/h) for the voice layer alone is competitive, and Artificial Analysis's all-in $5.83/h (Astra medium) still undercuts GPT-Realtime-2.1 High ($10.75/h); but backend tokens stack on top (Astra $10/$50 per 1M), the wall-clock meter bills silence and thinking time, it is materially pricier than Gemini 3.8 Live (~$1.38/h) and Grok ($4.80/h), and the API has no free tier (Free tier unsupported for sessions).
- **Overall Score: 69/100.** (88 + 76 + 55 + 95 + 30) / 5 = 68.8 → 69 — best fit as the premium pick for tool-heavy real-time voice agents (support, phone, scheduling) where conversational naturalness and end-to-end task completion matter more than raw audio reasoning speed or coding.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-27
- Method: public internet research (OpenAI launch post and Live API/pricing docs, Artificial Analysis Speech-to-Speech page and 2026-09-15 index release, AlphaSignal and OrcaRouter write-ups, Dograh and Grandream comparisons, BenchLM voice-benchmark snapshot); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
