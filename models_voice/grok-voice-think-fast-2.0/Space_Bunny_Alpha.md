# Grok Voice Think Fast 2.0 — findings by Space Bunny Alpha

- Source: xAI / SpaceXAI (`grok-voice-think-fast-2.0`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Routing note:** native speech-to-speech realtime voice model, correctly tracked under
> `models_voice/` per the voice/speech routing rule in `RULES.md`. Evidence base is the
> audio-agent benchmark family (Big Bench Audio, τ-Voice, Full Duplex Bench, Speech Agent
> Arena, the Artificial Analysis Speech-to-Speech Index). Text-benchmark rows read "no
> verified public score found" **structurally** — this model is served over a voice
> WebSocket, so the text suites were never run and never will be.

## Model card

- **Name:** Grok Voice Think Fast 2.0
- **Short description:** xAI's flagship end-to-end speech-to-speech voice model, released
  2026-07-29 as the second generation of the "Think Fast" line (1.0 launched April 2026
  alongside the Voice Agent Builder). It is the   **agentic and latency leader** of the
  native-voice field: first on τ-Voice task completion, sub-second time-to-first-audio,
  and near the top of the overall quality index. It is *not* the raw-reasoning leader —
  StepAudio 3 Realtime and Alibaba's Qwen Audio 3.0 Realtime Plus both beat it on speech
  reasoning and on conversational dynamics. Distinct from `grok-voice-think-fast-1.0`, `grok-voice-fast-1.0`,
  `grok-voice-stt-1.0` and `grok-voice-tts-1.0`.
- **Provider / access:** xAI API over WebSocket, **full duplex**, with **OpenAI Realtime
  API compatibility** for drop-in migration. Model ID `grok-voice-think-fast-2.0`. The
  `grok-voice-latest` alias **auto-migrated from 1.0 to 2.0 on 2026-08-05**, so teams that
  did not pin a version moved from $0.05/min to $0.08/min without a config change.
  End-to-end: raw audio in, audio out, with no ASR→LLM→TTS relay in the loop — which is
  what makes the sub-second first audio possible.
- **Release / knowledge:** released 2026-07-29 (x.ai news). Knowledge cutoff not published.
- **IDs:** `grok-voice-think-fast-2.0` (xAI). `grok-voice-think-fast-1.0` still resolves but
  is now marked **Deprecated** by xAI, so pinning it is no longer a durable cost strategy.
  No Free-tier Zen ID.
- **Context window:** **no verified public figure found.** None of the xAI launch
  material, the Artificial Analysis model entry, or the pricing/limits pages I reviewed
  publish a context-window or max-output number for this model. This is the weakest
  evidence in this report and is called out in the Context window score below.
- **Modalities:** **audio in / audio out**, natively, with text presumably alongside for
  tool payloads. **25+ languages.** Tool calling with a **built-in web search**;
  **voice cloning from roughly one minute of speech**. Distinctive architecture note: the
  Think Fast line **reasons in parallel with speech** rather than reasoning-then-speaking,
  which xAI says raises intelligence with no latency penalty — tool calls typically
  execute before the agent finishes its first sentence.
- **Pricing (as of 2026-09-29):** **$0.08 per audio minute**, i.e. **$4.80 per hour** —
  a 60% increase over 1.0's $0.05/min, partially offset by ~60% fewer reasoning tokens
  (median reasoning-token use down to 0.4× of 1.0). Artificial Analysis independently
  measures **$4.80 per hour of input audio** on its Big Bench Audio subset. Text input
  alongside audio is billed at $0.004 per the xAI rate card.
- **Deprecated sibling (new since 2026-09-27):** the xAI pricing and models pages now
  label **`grok-voice-think-fast-1.0` as "Deprecated"** at its old $0.05/min ($3.00/hr)
  rate. This does **not** affect 2.0, which is the current un-flagged speech-to-speech
  entry, but it removes the earlier "pin 1.0 to stay cheap" escape hatch from
  recommendation: there is now no supported cheap fallback in this family.
- **Architecture:** proprietary / closed — xAI publishes no weights, parameter count or
  architecture. (A Hugging Face artifact is labelled "isn't deployed by any Inference
  Provider" and research-use-only; it is **not** this API product.)
- **Deployment note:** in A/B testing in Starlink telephone services, with xAI reporting
  improved sales conversion and customer-service response efficiency.

### Raw benchmarks found

Agent / tool use:

- **τ-Voice (Agentic Performance): 56.5% — first place.** Artificial Analysis, current
  live leaderboard. Proportion of replica customer-service scenarios (flight changes,
  billing disputes, telecom troubleshooting, domains inherited from τ-bench/τ²-bench)
  actually *resolved* by the model acting as a support agent with domain tools and a
  policy document, scored against a single valid database end-state. Field context:
  Qwen Audio 3.0 Realtime Plus 54.6%, GPT-Realtime-2.1 High 45.7%, GPT-Realtime-2 High
  39.8%, Gemini 3.1 Flash Live High 37.7%, Grok Voice Think Fast 1.0 52.1%. **Every model
  in the field is below 60%** — this is the hardest axis in voice, and 1.9 points of
  clear air over the runner-up is a narrow but genuine lead.
- **Task Success Rate: 94.6%** (Artificial Analysis) — share of eligible conversations
  ending in the correct final task-completing tool call. Field context: GPT-Realtime-2.1
  High 91.5%, GPT-Realtime-2 High 89.8%, Gemini 3.8 Live 93.2%, Gemini 3.8 Live Extended
  Thinking High 89.1%. This is the strongest Task Success Rate in the table.
- **Speech Agent Arena Preference Elo: 1011** — human pairwise preference after
  completing the same scenario with two unidentified models (tool-calling tasks only;
  Bradley–Terry fit, GPT-Realtime-1.5 anchored at 1000). Ahead of GPT-Realtime-2 High
  (932) and GPT-Realtime-2.1 High (928); behind GPT-Live-1 Sol low (1053),
  Gemini 3.1 Flash Live Minimal (1096) and Gemini 3.8 Live (1083). So: **preferred over
  OpenAI's realtime models, not over Google's.**
- Tooling: built-in web search, parallel tool calls, voice cloning (~1 min of reference
  audio). xAI's own claim that tool calls "usually execute before the end of the agent's
  first sentence" is consistent with the 0.4× reasoning-token figure and the 0.70 s TTFA,
  but is **not** an independent measurement.
- Terminal-Bench / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas:
  **no verified public score found** — not applicable to a voice WebSocket endpoint.

Reasoning / knowledge:

- **Big Bench Audio (Speech Reasoning): 97%** (Artificial Analysis, live; 97.2% at launch
  on 2026-07-29). 1,000 audio questions adapted from Big Bench Hard across Formal
  Fallacies, Navigate, Object Counting and Web of Lies, audio in / audio out. Field
  context: StepAudio 3 Realtime 99.7%, Qwen Audio 3.0 Realtime Plus 99.2%, Qwen3.5 Omni
  Plus Realtime 98.7%, Gemini 3.8 Live Extended Thinking High 97.7%, Step-Audio R1.1
  Realtime 97.6%. So Grok is **top-6 but not the leader** — a ~2.7-point gap to the best.
  Unusually, it gains almost nothing over its own 1.0 here (97.1% → 97.2%): 2.0's
  improvement is *not* on raw reasoning.
- **Transcription / STT accuracy** (xAI's own evaluation, thousands of short phrases
  across 24 languages, Word Error Rate, lower better): **1.5–2.0× better than Deepgram
  Nova 3 and ElevenLabs Scribe v2**, **1.4× better than Grok Voice Think Fast 1.0**, and
  the gap widens to **~10× in noisy conditions** with telephony compression. Vendor-run
  with no published absolute WER figures or harness detail — **treat the ratios as
  directional, not as numbers comparable to the AA rows above.**
- **Artificial Analysis Speech-to-Speech Quality Index: 81.3** (live page read
  2026-09-29; the index is the current four-component build). Re-read on 2026-09-29 and
  **unchanged from the 2026-09-27 reading of 81.3**, so every component below is carried
  forward without revision. At launch (2026-07-29) xAI reported **82.9%**; the two are not comparable
  because **AA changed the index's composition** — the current   index is an equal-weighted
  average of Speech Reasoning (Big Bench Audio), Agentic Performance (τ-Voice), Arena
  Preference and Task Success Rate, whereas the launch-era figure used Big Bench Audio +
  Full Duplex Bench + τ-Voice. Both are reported; the drop from 82.9 to 81.3 is an
  index-definition artifact, not a quality regression. Rank on the current index: **#3 of
  the fully-scored models**, behind Gemini 3.8 Live Extended Thinking High 82.6 and GPT-Live-1
  Astra medium 81.5. Field context on the current
  index: **Gemini 3.8 Live Extended Thinking High 82.6**, GPT-Live-1 Astra medium 81.5,
  **Grok Voice Think Fast 2.0 High 81.3**, GPT-Live-1 Sol low 80.1,
  Gemini 3.8 Live 76.0, GPT-Realtime-2.1 High 73.9, GPT-Realtime-2 High 73.6. Note that the widely-quoted
  "Qwen Audio 3.0 Realtime Plus 84.1%" is the **old** three-component index; on the
  current four-component index the same model reads **66.8**, dragged down by an Arena
  Preference Elo of 775 (the lowest of the well-measured models). Composite index values
  from before and after the AA redefinition must not be compared directly.
  *Stale-page caution, recorded:* one cached Artificial Analysis render encountered during
  this re-check showed Grok Voice Think Fast 2.0 High at **79.0 with Arena Elo 908 and Task
  Success 94.7%**. The live leaderboard table reads **81.3 / 1011 / 94.6%**, and those are
  the values used here; 908 in fact belongs to Grok Voice Think Fast 1.0 on the live table.
  Anyone re-deriving this row should read the live table, not a cached snippet.
- **Conversational Dynamics (Full Duplex Bench): 95.1%** — up from **77.8%** on 1.0, and
  this is the single biggest change in the release. Weighted average of pause handling,
  turn-taking, user-interruption handling and backchannel handling (FDB v1 and v1.5).
  Field context: GPT-Realtime-2.1 High 95.7%, GPT-Realtime-1.5 95.7%, GPT-Live-1 Sol low
  97.3%, Qwen Audio 3.0 Realtime Plus 98.4%, StepAudio 3 Realtime 98.9% — so Grok 2.0 is
  **competitive but no longer the leader on conversation flow**; it closed almost the
  entire 1.0 gap.
- GPQA / HLE / LCR / MLCR / CritPt / Omniscience: **no verified public score found**
  (text suites; never run against a voice model).
- **No published knowledge cutoff**, which for a general-purpose voice agent trusted with
  customer data is a genuine unknown rather than a neutral detail.

Long context / latency / cost (voice-specific axes):

- **Time to First Audio: 0.70 s** (Artificial Analysis, independently measured) — down
  from 1.25 s on 1.0, and the only sub-second figure among the top of the index. Field
  context: Deepslate Opal 0.44 s (fastest overall, far lower quality), Raon SpeechChat
  0.04 s, Gemini 3.1 Flash Live Minimal 0.96 s, GPT-Realtime-2 High 1.14 s,
  GPT-Realtime-2.1 High 1.21 s, Gemini 3.8 Live 1.18 s, Qwen Audio 3.0 Realtime Plus
  1.54 s. **No long-context retrieval (MRCR/RULER/GraphWalks) is reported, and no context
  window is documented.**
- **Cost per hour of input audio: $4.80** (AA, Big Bench Audio subset) — third cheapest
  of the compared native-voice models, behind Gemini 3.1 Flash Live High ($1.75) and
  Qwen Audio 3.0 Realtime Plus ($4.42), and ahead of GPT-Realtime-2.1 High ($10.75).
  **Re-checked 2026-09-29: unchanged.** Note that with 1.0 deprecated, the nearest
  cheaper family member (Grok Voice Think Fast 1.0 at $3.00/hr) is on its way out, so
  $4.80 is now effectively the floor for this family.

### Normalized scores (1–100)

- **Tool use: 80/100.** This is the model's defining strength and the strongest evidence
  in the report: **τ-Voice 56.5%, first in the field** on end-to-end task completion with
  tools and a policy document, plus the **best Task Success Rate in the table at 94.6%**
  and an Arena Preference Elo of 1011 that beats both OpenAI realtime models. It is held
  at 80 rather than higher because 56.5% is only 1.9 points clear of Qwen Audio 3.0
  Realtime Plus, because the whole field is below 60% on this axis, and because none of
  the text-agentic suites exist to corroborate.
- **Reasoning: 82/100.** Big Bench Audio 97% is top-6 in a field topping out at 99.7%,
  and the parallel-reasoning architecture is a real and distinctive design choice with
  measured support (0.4× reasoning tokens, 0.70 s TTFA, tool calls firing before the
  first sentence ends). The cap is that the model gains essentially **nothing** over its
  own 1.0 on this axis (97.1% → 97.2%) while the composite rose 7 points — so 2.0's
  improvement is in agentic behaviour and conversational dynamics, not intelligence —
  and there is no text-reasoning or knowledge-hygiene evidence whatsoever.
- **Context window: 50/100.** **This score is an explicitly-flagged neutral placeholder,
  not a measurement.** xAI publishes no context-window or max-output figure for this
  model, Artificial Analysis records none, and no MRCR/RULER/GraphWalks retrieval test
  exists. A 50 is recorded rather than a fabricated number so the Overall arithmetic stays
  well-defined, and it should be read as "unknown" — a real number in either direction
  would move this Overall by several points. Voice sessions are typically short enough
  that the limit has not visibly mattered, which is weak evidence that it is not
  currently a constraint, and no evidence at all about how it behaves when it is.
- **Multimodal: 95/100.** Native audio in / audio out across **25+ languages** with
  voice cloning, built-in web search and text tool payloads — squarely the methodology's
  top tier ("+audio in or any non-text out = 90–100"). The transcription evidence is a
  genuine differentiator: xAI reports it beating purpose-built STT models (Deepgram Nova 3,
  ElevenLabs Scribe v2) by 1.5–2.0× and by ~10× under telephony noise, which is why this
  is not docked further despite the STT ratios being vendor-run.
- **Coding: 20/100.** **No coding benchmark exists for this model and none will** — it is
  not served on any endpoint that accepts a code task. This is a structural floor, not a
  measurement, scored at the text-only end purely so the Overall is defined. As with
  `gpt-realtime-2`, **do not read this as a verdict on the underlying text ability**;
  comparing Overall scores between voice models and text-first models is misleading
  precisely because of this dimension.
- **Cost efficiency: 55/100.** $0.08/audio minute ($4.80/hour) is a 60% price rise over
  1.0, and it is not cheap in absolute terms. It is scored above the ~30 anchor for the
  $10/$50 text tier because the per-task view is far more favourable: **$4.80 per hour of
  input audio** is third-cheapest in the compared native-voice field, ahead of
  GPT-Realtime-2.1 High ($10.75) and roughly level with GPT-Realtime-2 High ($4.14), and
  the ~60% reduction in reasoning tokens partly absorbs the headline rate increase.
- **Overall Score: 65.4/100.** (80 + 82 + 50 + 95 + 20) / 5 = 65.4 — the number is
  depressed almost entirely by the structural Coding 20 and the genuinely unknown Context
  50, neither of which reflects voice-agent fitness. **Read the τ-Voice 56.5%, Task
  Success Rate 94.6%, Full Duplex Bench 95.1% and 0.70 s TTFA rows instead.** Best fit:
  the default choice for production voice agents that must actually *finish* the task
  (support, booking, telecom triage) on a latency budget, especially on a phone line
  where 0.70 s is the difference between present and thinking. Choose
  `qwen-audio-3.0-realtime-plus` instead if you want   the highest raw speech-reasoning
  ceiling and can absorb 1.54 s TTFA; choose `gemini-3.8-live` if human arena preference
  matters more than tool-call success.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: public internet research (x.ai launch post for Grok Voice Think Fast 2.0,
  Artificial Analysis Speech-to-Speech leaderboard and index/methodology pages, xAI
  speech-to-speech documentation, xAI pricing and models pages, and independent coverage
  from AlphaSignal, eesel.ai, OrcaRouter, Enterprise DNA and AIbase for cross-checks).
  Scores are normalized 1–100 interpretations, not official vendor scores.
- **Re-validation 2026-09-29:** the AA Speech-to-Speech row for Grok Voice Think Fast 2.0
  High was re-read live and is **unchanged** at 81.3 (97% Big Bench Audio, 95.1% Full
  Duplex Bench, 56.5% τ-Voice, Arena Elo 1011, Task Success 94.6%, 0.70 s TTFA,
  $4.80/hr). The only factual change is xAI now marking
  `grok-voice-think-fast-1.0` **Deprecated**. **No normalized score and no Overall
  changed** as a result: 65.4 = (80 + 82 + 50 + 95 + 20) / 5, unchanged.
- Future sources: add a new file next to this one, e.g. `XAI_Recheck.md`, using the same
  headings.
