# GPT-Realtime-Whisper — findings by Space Bunny Alpha

- Source: OpenAI / `gpt-realtime-whisper`
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-Whisper (also catalogued as "GPT Realtime Transcribe")
- **Short description:** OpenAI's **streaming speech-to-text** model for realtime
  transcription, released 2026-05-08 alongside GPT-Realtime-2 and
  GPT-Realtime-Translate. It transcribes live audio incrementally without waiting
  for an utterance to finish, and is designed to run **in parallel** with a
  speech-to-speech or translation model so you get a source-language transcript
  at the same time as translated output.
- **Provider / access:** OpenAI **Realtime transcription endpoint only**
  (`/v1/realtime/transcription_sessions`, WebSocket or WebRTC persistent
  streaming session). Supported on **exactly one endpoint** — Chat Completions,
  Responses, `/v1/realtime`, realtime translation, Batch, speech generation,
  transcription and translation endpoints are all unsupported. Also on Microsoft
  Foundry (version 2026-05-07, Canada Central / France Central / India South),
  where Microsoft has renamed it **"GPT Realtime Transcribe"**.
- **Release / knowledge:** released 2026-05-08; knowledge cutoff **Sep 30,
  2024** per OpenAI's model page.
- **IDs:** `gpt-realtime-whisper` (OpenAI Realtime API, and its own default
  snapshot); `gpt-realtime-whisper-1` is the name OpenAI uses for it when
  quoting comparison figures. **No OpenCode Zen ID** — cost scored on OpenAI's
  published per-minute rate.
- **Context window:** **16,000 tokens** with a **2,000-token max output**, per
  OpenAI's first-party model page. ⚠ **Azure Foundry's catalog again lists
  128k context / 4,096 output** for the same ID — the same unresolved 8×
  discrepancy that affects `gpt-realtime-translate`. OpenAI's documentation is
  authoritative here; the Azure figure is treated as unverified.
- **Modalities:** **audio in (input only); text in and out.** No audio output at
  all — this is a pure ASR model that never speaks. Streaming yes. Function
  calling, structured outputs and fine-tuning are **not** supported.
- **Pricing (as of 2026-09-30):** **$0.017 per minute of audio**, flat, and the
  same rate across Standard / Fast / Batch tiers (CloudPrice). That is **$1.02
  per hour** — exactly **half** GPT-Realtime-Translate's $0.034/min, and about a
  tenth of GPT-Realtime-2.1 High's $10.75/hour of input audio. Rate limits are in
  minutes-of-audio per minute (100 / 350 / 650 / 1,000 / 1,300 by tier) —
  roughly double Translate's throughput allowance. No Zen Free ID.
- **Architecture:** proprietary, closed weights, undisclosed parameters.

### Raw benchmarks found

Accuracy (transcription error rate — the only metric that applies to ASR):

- **Common Voice (22 languages): 20.33% transcription error rate** for
  `gpt-realtime-whisper-1` — OpenAI's own figure, published as the *baseline* in
  the `gpt-live-transcribe` launch comparison
- **Real-World Audio (9 languages): 11.65% TER** for `gpt-realtime-whisper-1`,
  the same baseline
- **Context Aware ASR: 38.5% semantic accuracy without context** (OpenAI's new
  internal benchmark measuring semantic rather than raw word-match accuracy) —
  this is the `gpt-realtime-whisper` side of the comparison; with free-form
  context, `gpt-live-transcribe` reaches 44.6%
- ⚠ **OpenAI has deprecated it in favour of `gpt-live-transcribe`**, which it
  now recommends as the starting point for any live-audio transcription
  integration. `gpt-live-transcribe` scores **19.70% TER on Common Voice (22
  langs)** and **9.60% on Real-World Audio (9 langs)** — a ~3% and ~18% relative
  improvement — **at the identical $0.017/min**. That is a real accuracy gain at
  zero price delta, and it is the single most decision-relevant fact about this
  model.
- ⚠ `whisper-1`, for scale: **40.37% TER on Common Voice** and **15.21% on
  Real-World Audio**. So this model roughly halved `whisper-1`'s Common Voice
  error rate, and `gpt-transcribe` halved it again to 19.27%.
- No independent ASR leaderboard row was found (no Papers-with-Code /
  Hugging Face Open ASR Leaderboard measurement, no vendor-neutral WER/CER study)
  for `gpt-realtime-whisper` specifically. All figures above are **OpenAI's own**.

Latency:

- OpenAI classifies it as **"Very fast"** and documents it as "higher"
  performance tier on its model page, but publishes **no numeric time-to-first-
  token or first-transcript-delta figure**.
- Microsoft documents the operational property rather than a number:
  "transcribes live audio as it arrives, without waiting for the utterance to
  complete," with a persistent streaming session rather than one-request-per-file
  upload.

Language support:

- Microsoft describes it as designed for **multilingual transcription**, with
  accuracy varying by language, audio quality and speaking conditions; no
  language list is published. The 22-language and 9-language Common Voice /
  Real-World Audio figures above imply broad coverage.
- **No context, keyword-hint or language-hint prompt support** — that capability
  belongs to `gpt-transcribe` / `gpt-live-transcribe`, not to this model. Azure
  Learn's guidance is explicit that offline file transcription should use
  `gpt-transcribe` instead.

Text-agent benchmarks:

- Terminal-Bench / SWE-bench / GPQA / HLE / LiveCodeBench / GDPval-AA / CritPt /
  LCR: **no verified public score found, and none can exist.** This model has no
  Chat Completions or Responses endpoint, does not generate audio, and does not
  support function calling. It is not an agent.

Long context:

- **No long-context retrieval reported**, and it is not meaningful here: at 16K
  context on a streaming transcription endpoint the working set is the live audio
  buffer, not a document corpus.

### Normalized scores (1–100)

- **Tool use: 15/100.** **Applicability statement.** Function calling is
  explicitly unsupported and this model emits text transcripts — nothing else. It
  cannot take an action, so it cannot be scored on tool use; read the row as "not
  applicable". Tools in the voice stack are GPT-Realtime-2/2.1's job, not this
  model's.
- **Reasoning: 22/100.** No reasoning benchmark exists and none can. The Sep 2024
  knowledge cutoff and the 2K output budget cap it hard. Scored slightly above
  flat-zero because transcription *is* a comprehension task — resolving
  ambiguous acoustics, accents and code-switching against a language model is
  real inference, and the 38.5% Context Aware ASR semantic-accuracy figure is a
  (weak) comprehension measurement. But it is a narrow comprehension skill, not
  reasoning in any dimension this dataset scores elsewhere.
- **Context window: 20/100.** **16,000 tokens / 2,000 max output** — the smallest
  window in the dataset alongside `gpt-realtime-translate`, in the "<100K scales
  down to 10–49" band and close to its floor. Azure's conflicting 128k figure is
  disregarded in favour of OpenAI's first-party documentation. Architecturally
  this is correct rather than a limitation: a live transcription buffer needs
  seconds of audio, not a 16K-token document window.
- **Multimodal: 62/100.** Audio in, text out — the "+image in = 60–70" band's
  sibling case, and materially lower than its Realtime siblings. It lands just
  above 60 because audio input is a real modality, but it is **input-only audio
  with no audio output at all**, no image, no video, and no bidirectional
  speech. Against `gpt-realtime-2.1`'s 95 this is the sharpest contrast in the
  voice tree: same family, same pricing page, one is an agent that listens and
  speaks, the other is an ear.
- **Coding: 15/100.** **Applicability statement — the lowest meaningful value in
  this dataset by design.** There is no code-generation surface, no coding
  benchmark can exist, and nothing about the model is weak here. The dimension
  simply does not apply to a streaming ASR service.
- **Cost efficiency: 95/100.** **$0.017/minute flat** = **$1.02/hour**, half of
  GPT-Realtime-Translate and roughly a tenth of GPT-Realtime-2.1 High's input
  audio cost, and materially cheaper than Deepgram or Azure Speech streaming
  primitives. Held below 100 for the obvious reason: it is a paid
  minute-denominated rate, not $0. Note the honest caveat that comes with the
  price comparison — `gpt-live-transcribe` delivers ~3–18% better accuracy at
  **exactly the same $0.017/min**, so this model is not the cheapest route to
  equivalent quality; it is the cheapest route to *this* quality.
- **Overall Score: 26.8/100.** Half-up mean of the five non-cost dims
  ((15 + 22 + 20 + 62 + 15) / 5 = 26.8). **The formula is close to meaningless
  for this model and must be flagged.** Three of the five dimensions — Tool use,
  Coding and effectively Context window — are structurally inapplicable to a
  streaming ASR service, and they drag the result down by design. **The honest
  summary: this is a cheap, low-latency, broadly multilingual streaming
  transcriber that is 20.33% / 11.65% TER and has just been superseded by a
  better model at the same price.** Best fit today: pairing with
  GPT-Realtime-Translate for source-language transcripts, live captions, and
  quality monitoring — but **if you are starting a new transcription
  integration, use `gpt-live-transcribe` instead**: same $0.017/min, lower error
  rate, and context/keyword/language-hint support this model lacks. For offline
  file transcription use `gpt-transcribe` at $0.0045/min (roughly a quarter the
  price and lower error again); for word-level timestamps and SRT/VTT output,
  `whisper-1` remains the only option.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-30
- Method: public internet research (OpenAI API model documentation for
  `gpt-realtime-whisper`, the "Advancing voice intelligence with new models"
  release post, AlphaSignal's coverage of the `gpt-transcribe` /
  `gpt-live-transcribe` launch with OpenAI's published TER table, Microsoft
  Foundry model catalog and Azure Learn deployment guidance, CloudPrice spec
  record); scores are normalized 1–100 interpretations, not official vendor
  scores.
- Future sources: add a new file next to this one, e.g.
  `GPT_Live_Transcribe.md`, using the same headings.