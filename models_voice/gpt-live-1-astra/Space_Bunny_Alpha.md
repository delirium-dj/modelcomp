# GPT-Live-1 (Astra backend, medium effort) — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-live-1` with a GPT-6 Astra reasoning backend, `medium` effort)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Routing note:** full-duplex native voice model, correctly tracked under
> `models_voice/` per the voice/speech routing rule in `RULES.md`.
>
> **What this slug means — read first.** `gpt-live-1-astra` is **not a distinct model**.
> GPT-Live-1 is an OpenAI *front-end voice layer* that **delegates reasoning and tool use
> to a backend text model**. Artificial Analysis therefore evaluates and names
> configurations by backend, and the rows below are the entry labelled
> **"GPT-Live-1 (Astra, medium)"** — GPT-Live-1 paired with a **GPT-6 Astra** backend at
> `medium` reasoning effort. AA also tracks a sibling configuration, **"GPT-Live-1
> (Sol, low)"**, and the gap between the two (index 81.5 vs 80.1, τ-Voice 67.9% vs 59.3%)
> is the cleanest available measurement of **how much of this model's score is the
> backend's**. Nothing here should be read as a property of GPT-Live-1 in isolation.

## Model card

- **Name:** GPT-Live-1 — Astra backend configuration (`gpt-live-1` + GPT-6 Astra, medium effort)
- **Short description:** OpenAI's premier natural-voice model and the engine behind
  **ChatGPT Voice** (default for Go/Plus/Pro since 2026-07-08; `gpt-live-1-mini` for Free).
  Its defining architectural choice is **delegation**: a single full-duplex model listens
> and speaks simultaneously and hands reasoning and tool execution to a backend text
  model — GPT-6 Astra by default, or a third-party model including via the Codex SDK.
  That split is why its speech-reasoning score is *below* the field while its task
  completion is *above* it. Sibling: `gpt-live-1-mini`.
- **Provider / access:** OpenAI API. Model ID `gpt-live-1` (default snapshot `gpt-live-1`).
  **Only the `v1/live/sessions` endpoint is supported** — Chat Completions, Responses,
  **Realtime**, realtime translation, realtime transcription, Assistants, Batch,
  fine-tuning, embeddings, image/video generation, speech generation, transcription,
  translation and moderation are all explicitly **"Not supported"**. Supported features:
  `streaming`, `function_calling`. Rate limits are **measured in concurrent sessions**
  (Tier 1: 25, Tier 2: 50, Tier 3: 200, Tier 4: 300, Tier 5: 500); **the Free tier is
  not supported at all**.
- **Release / knowledge:** shipped in ChatGPT Voice 2026-07-08; **API availability
  2026-09-10**. Knowledge cutoff **2025-07-31** (OpenAI model documentation).
- **IDs:** `gpt-live-1`. The backend is chosen separately at session configuration
  (`gpt-6-astra` in this case). No Free-tier Zen ID.
- **Context window:** **no verified public figure found.** OpenAI's model page publishes
  no context-window and no max-output number — consistent with a session-scoped live
  layer where the useful context is the running conversation plus whatever the backend
  holds. This is the weakest evidence in this report and is flagged in the score below.
- **Modalities:** **audio and text in; audio and text out**, full duplex — it can listen
  and speak at the same time and decide many times per second whether to speak, listen,
  pause, interrupt or call a tool. **Image and video are explicitly unsupported**
  ("Unsupported modalities: image, video"). `function_calling` supported;
  **`structured_outputs` is not supported** — a real constraint for anyone piping voice
  output into a typed pipeline.
- **Pricing (as of 2026-09-27):** **$0.05 per minute of voice session, billed per
  second** (session duration is *not* rounded up to the next whole minute). **Backend
  Responses calls are billed separately at the normal rate for the configured model and
  tools** — so the headline 5¢/minute is the *voice layer only*, and the real figure
  depends entirely on which backend you attach. Artificial Analysis's end-to-end measure
  of **$5.83 per hour of input audio** on its Big Bench Audio subset (which does include
  backend cost) is the number to plan against, versus Grok Voice Think Fast 2.0's $4.80
  and GPT-Realtime-2 High's $4.14.
- **Architecture:** proprietary. OpenAI publishes no weights or parameter count. The
  *architecture that matters* here is the system shape: a full-duplex audio front end
  plus a delegating backend, which is a different cost and quality profile from a single
  end-to-end speech-to-speech model.
- **Deployment notes:** powers ChatGPT Voice globally; **SynthID watermarking** is applied
  to supported audio generated with GPT-Live via both ChatGPT Voice and the API, with API
  access to OpenAI's public verification tool (added 2026-07-31). Yelp's CTO reports
  GPT-Live-1 in Yelp Host and Hatch improved turn-taking and accuracy over the company's
  previous voice architecture, with better call-handling rates. OpenAI claims a **~30%
  improvement on Full Duplex Bench** versus the previous speech model, GPT-Realtime-2.1.

### Raw benchmarks found

Agent / tool use:

- **τ-Voice (Agentic Performance): 67.9%** (Artificial Analysis, live leaderboard).
  Proportion of replica customer-service scenarios actually resolved, scored against a
  single valid database end-state, averaged where trials allow. **Second in the entire
  field**, behind only Gemini 3.8 Live Extended Thinking (High) at 68.6%, and ahead of
  Grok Voice Think Fast 2.0 High (56.5%), GPT-Realtime-2.1 High (45.7%),
  GPT-Realtime-2 High (39.8%), Gemini 3.1 Flash Live High (37.7%) and Gemini 3.8 Live
  (30.1%). **Caveat that matters:** AA flags this configuration as based on **1 trial**
  (as it does for GPT-Realtime-2 Minimal and both GPT-Live-1 entries), whereas most
  models are averaged across 3 — so 67.9% has wider error bars than the ranking implies.
- **Task Success Rate: 87.4%** — correct final task-completing tool call. Field context:
  Gemini 3.8 Live 93.2%, Grok Voice Think Fast 2.0 High 94.6%, GPT-Realtime-2.1 High
  91.5%, Gemini 3.8 Live Extended Thinking High 89.1%, GPT-Realtime-2 High 89.8%. So this
  configuration is **mid-pack on tool-call success** despite being second on τ-Voice.
- **Speech Agent Arena Preference Elo: 1048** — human pairwise preference (tool-calling
  tasks; Bradley–Terry, GPT-Realtime-1.5 anchored at 1000). Ahead of Grok Voice Think
  Fast 2.0 (1011) and both GPT-Realtime models (932 / 928); behind GPT-Live-1 Sol low
  (1053), Gemini 3.1 Flash Live Minimal (1096) and Gemini 3.8 Live (1083).
- **Delegation as a tool-use feature:** GPT-Live-1 can hand reasoning and tool calls to a
  backend text model — GPT-6 Astra, a third-party model, or a Codex thread (the launch
  post shows a `@openai/codex-sdk` integration replying in two spoken sentences from a
  repo). This is why tool performance is decoupled from the voice layer's own reasoning
  score, and why the backend choice is the single biggest lever on this configuration.
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas:
  **no verified public score found** — the Live endpoint cannot accept these tasks.

Reasoning / knowledge:

- **Big Bench Audio (Speech Reasoning): 90%** (Artificial Analysis, live). 1,000 audio
  questions from Big Bench Hard — Formal Fallacies, Navigate, Object Counting, Web of
  Lies — audio in / audio out. **This is the model's weak axis relative to its field:**
  StepAudio 3 Realtime 99.7%, Qwen Audio 3.0 Realtime Plus 99.2%, Qwen3.5 Omni Plus
  Realtime 98.7%, Gemini 3.8 Live Extended Thinking High 97.7%, Step-Audio R1.1 Realtime
  97.6%, Grok Voice Think Fast 2.0 High 97%, GPT-Realtime-2 High 97%, GPT-Realtime-2.1
  High 96%, Gemini 3.1 Flash Live High 97%. GPT-Live-1 sits ~7–10 points below the
  cluster. The architecture explains it: this is a *conversational* front end that
  **delegates** hard reasoning, so the audio-reasoning measurement captures the voice
  layer's own comprehension plus whatever the backend contributes to a one-shot question.
- **Artificial Analysis Speech-to-Speech Quality Index: 81.5** (live, as of
  2026-09-27). Field context: Gemini 3.8 Live Extended Thinking High **82.6**,
  **GPT-Live-1 (Astra, medium) 81.5**, Grok Voice Think Fast 2.0 High 81.3,
  GPT-Live-1 (Sol, low) 80.1, Gemini 3.8 Live 76.0, GPT-Realtime-2.1 High 73.9,
  GPT-Realtime-2 High 73.6. Note this is the **current four-component** index (Speech
  Reasoning + Agentic Performance + Arena Preference + Task Success Rate, equal-weighted);
  pre-redefinition composite figures for other models are not comparable to it.
- **Conversational Dynamics (Full Duplex Bench): 94.9%** — weighted average of pause
  handling, turn-taking, user-interruption handling and backchannel handling (FDB v1 and
  v1.5). Field context: Qwen Audio 3.0 Realtime Plus 98.4%, StepAudio 3 Realtime 98.9%,
  GPT-Live-1 Sol low 97.3%, Gemini 3.8 Live 96.1%, GPT-Realtime-2.1 High 95.7%,
  GPT-Realtime-1.5 95.7%, Grok Voice Think Fast 2.0 High 95.1%, **GPT-Live-1 (Astra,
  medium) 94.9%**, GPT-Realtime-2 High 95.3%, Gemini 3.8 Live Extended Thinking High
  91.9%. OpenAI's own claim is a **~30% improvement over GPT-Realtime-2.1**, which is not
  visible in this row (94.9% vs 95.7%) — treat the vendor claim as a different
  measurement basis (likely the full FDB rather than AA's subset) rather than as
  contradicting AA.
- GPQA / HLE / LCR / MLCR / CritPt / Omniscience: **no verified public score found**
  (text suites; the Live endpoint cannot accept them, and the backend's own text scores
  are GPT-6 Astra's, not this model's).
- **No published knowledge cutoff beyond 2025-07-31** — worth noting for a model whose
  backend is GPT-6 Astra: the *effective* knowledge of the deployed system is the
  backend's, not this layer's.

Long context / latency / cost (voice-specific axes):

- **Time to First Audio: 1.34 s** (Artificial Analysis). Field context: Raon SpeechChat
  0.04 s, Deepslate Opal 0.44 s, Gemini 2.5 Flash Native Audio Dialog 0.63 s,
  Gemini 3.1 Flash Live Minimal 0.96 s, **Grok Voice Think Fast 2.0 High 0.70 s**,
  GPT-Realtime-2 High 1.14 s, GPT-Realtime-2.1 High 1.21 s, GPT-Live-1 Sol low 1.24 s,
  **GPT-Live-1 (Astra, medium) 1.34 s**, Gemini 3.8 Live 1.18 s,
  Qwen Audio 3.0 Realtime Plus 1.54 s. So this configuration is **mid-pack on latency** —
  clearly behind the sub-second Grok 2.0, and ahead of nothing that matters for
  naturalness. **No long-context retrieval (MRCR/RULER/GraphWalks) is reported and no
  context window is documented.**
- **Cost per hour of input audio: $5.83** (AA, Big Bench Audio subset, backend included)
  — versus Grok Voice Think Fast 2.0 High $4.80, GPT-Realtime-2 High $4.14,
  Gemini 3.1 Flash Live High $1.75, Qwen Audio 3.0 Realtime Plus $4.42.
  The headline **$0.05/min ($3.00/hr)** is the voice layer only.

### Normalized scores (1–100)

- **Tool use: 85/100.** The strongest tool-use result in this dataset: **τ-Voice 67.9%,
  second in the field** on end-to-end customer-service task completion, and **ahead of
  every OpenAI realtime alternative** by 22 points over GPT-Realtime-2.1 High (45.7%).
  Arena Elo 1048 beats both GPT-Realtime models. The delegation architecture is a genuine
  tool-use advantage — a dedicated reasoning backend can execute tools the voice layer
  only has to narrate. It is held at 85 rather than higher for two honest reasons: AA
  flags this configuration as **1 trial**, so the τ-Voice figure has wider error bars than
  the rank implies; and **Task Success Rate is 87.4%, mid-pack**, behind Grok 2.0's
  94.6% and Gemini 3.8 Live's 93.2% — so it finishes the *conversation* well more often
  than it makes the *final correct tool call*.
- **Reasoning: 75/100.** Big Bench Audio 90% is a respectable, real audio-reasoning
  number, and Arena Elo 1048 confirms humans find the output strong. It is well below the
  90+ frontier band because 90% is ~7–10 points under the entire leading cluster
  (97–99.7%), and because this model **delegates reasoning rather than performing it** —
  the score measures a front end plus a backend, which is a real architectural limit on
  what this layer can be credited with. No text reasoning or knowledge-hygiene evidence
  exists for it at all.
- **Context window: 50/100.** **This score is an explicitly-flagged neutral placeholder,
  not a measurement.** OpenAI publishes no context-window or max-output figure, AA records
  none, and no MRCR/RULER/GraphWalks retrieval test exists. A 50 is recorded rather than a
  fabricated number so the Overall arithmetic stays defined; read it as **"unknown."**
  There is a defensible argument that the axis is nearly meaningless for a session-scoped
  live layer whose real context lives in the backend, and a counter-argument that a model
  delegating tool calls must hold a lot of tool-result state itself. Both are unfalsified
  today; a real number in either direction would move this Overall by several points.
- **Multimodal: 92/100.** Native **audio in and audio out** in a single full-duplex
  model, plus text in and text out — the methodology's top tier
  ("+audio in or any non-text out = 90–100"), and architecturally the right shape: a
  continuously-deciding speech model rather than a stitched ASR→LLM→TTS chain. It is
  docked from the ceiling because **image and video are explicitly unsupported** (unlike
  `gpt-realtime-2`, which accepts image input) and because **`structured_outputs` is not
  supported**, which is a practical multimodal-pipeline limitation.
- **Coding: 20/100.** **No coding benchmark exists for this model and none will** — it is
  served only on `v1/live/sessions`; Chat Completions and Responses are explicitly
  unsupported, so a code-generation task cannot be posed against the voice layer. This is
  a structural floor, not a measurement, scored at the text-only end purely so the Overall
  is defined. **Do not read it as a verdict on the deployed system's coding ability** —
  with a Codex or GPT-6 Astra backend this stack can absolutely write code; that
  capability belongs to the backend, and comparing Overall scores between voice layers and
  text-first models is misleading precisely because of this dimension.
- **Cost efficiency: 62/100.** The **$0.05/minute ($3.00/hour)** voice layer is cheap on
  its face and cheaper per minute than Grok Voice Think Fast 2.0 ($0.08/min). It is
  scored well below the ~97 band that a $0 tier would earn, and well below a text model's
  price-per-token intuition, for one decisive reason: **the backend is billed separately**
  at normal model rates, so $0.05/min is not the price of the system. Artificial
  Analysis's end-to-end **$5.83/hour of input audio** — which does include the backend —
  is the honest figure, and it is *more* expensive than Grok 2.0 ($4.80), GPT-Realtime-2
  High ($4.14) and Qwen Audio 3.0 Realtime Plus ($4.42). Cheap front end, mid-pack system.
- **Overall Score: 64.4/100.** (85 + 75 + 50 + 92 + 20) / 5 = 64.4 — depressed almost
  entirely by the structural Coding 20 and the genuinely unknown Context 50, neither of
  which reflects voice-agent fitness. **Read the τ-Voice 67.9%, Task Success Rate 87.4%,
  Arena Elo 1048 and Full Duplex Bench 94.9% rows instead.** Best fit: the voice layer to
  choose when **task completion and human preference matter more than raw speech
  reasoning or sub-second latency** — reservations, support triage, any flow where
  delegating to a strong backend buys more than owning a smarter audio model would.
  Choose `grok-voice-think-fast-2.0` instead when turn-taking latency is the binding
  constraint (0.70 s vs 1.34 s) or when you want one self-contained model instead of a
  two-part cost stack; choose `gemini-3.8-live-extended-thinking` for the current index
  lead (82.6) and the field-best τ-Voice (68.6%). **Whatever you choose, pin the backend
  explicitly** — the 81.5-vs-80.1 index gap and the 67.9%-vs-59.3% τ-Voice gap between
  the Astra and Sol configurations of this same voice layer is larger than most of the
  gaps between different vendors' models.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-27
- Method: public internet research (OpenAI GPT-Live-1 launch post and API model
  documentation, Artificial Analysis Speech-to-Speech leaderboard and index/methodology
  pages, OpenAI Developer Community announcement thread, Unite.AI, TechRepublic, GIGAZINE,
  DigitalToday and TestingCatalog for cross-checks). Scores are normalized 1–100
  interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `OpenAI_Live_Recheck.md`, using
  the same headings.
