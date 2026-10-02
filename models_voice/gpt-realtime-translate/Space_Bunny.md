# GPT-Realtime-Translate — findings by Space Bunny Alpha

- Source: OpenAI / `gpt-realtime-translate`
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-Translate
- **Short description:** OpenAI's dedicated **streaming speech-to-speech
  translation** model, released 2026-05-08 alongside GPT-Realtime-2 and
  GPT-Realtime-Whisper. It returns translated audio *and* transcript deltas while
  the source audio is still arriving — genuine simultaneous interpretation
  rather than turn-based transcription-then-translate. Its distinguishing pitch is
  **breadth of language coverage**: more than 70 input languages against 13
  output languages.
- **Provider / access:** OpenAI **Realtime translation endpoint only**
  (`/v1/realtime/translations`). Critically, this model is supported on **exactly
  one endpoint** — Chat Completions, Responses, the general `/v1/realtime`
  route, realtime transcription, Batch, speech generation, transcription and
  translation endpoints are all unsupported. Also on Microsoft Foundry
  (version 2026-05-07, regions Canada Central / France Central / India South).
- **Release / knowledge:** released 2026-05-08 with OpenAI's voice-model release;
  knowledge cutoff **Sep 30, 2024** per OpenAI's model page.
- **IDs:** `gpt-realtime-translate` (OpenAI Realtime translation API, and its own
  default snapshot). **No OpenCode Zen ID** — cost scored on OpenAI's published
  per-minute rate.
- **Context window:** **16,000 tokens** with a **2,000-token max output**, per
  OpenAI's own model page. ⚠ **Azure Foundry's catalog disagrees**, listing
  128k context / 4,096 output for the same model ID — an 8× discrepancy on a
  model whose entire job is streaming translation. OpenAI's first-party figure is
  used here and the Azure number is treated as unverified; a 16K window is
  consistent with the constraint that only the current utterance plus its target
  rendering need to be resident.
- **Modalities:** **audio in; audio and text out** — audio is the *only* input
  modality (no text, no image, no video). Streaming yes. Function calling,
  structured outputs, fine-tuning and Batch are **not** supported — this is a
  single-purpose pipeline stage, not an agent.
- **Pricing (as of 2026-09-30):** **$0.034 per minute of audio**, identical
  across Standard / Flex / Fast / Batch tiers (CloudPrice) — the first AI model
  in this dataset with a flat per-minute rate rather than per-token pricing.
  That works out to roughly **$2.04 per hour**, which is the entire cost model:
  no token accounting, no output-token multiplier, no cache tier. Rate limits
  are denominated in *minutes-of-audio per minute* (50 / 200 / 400 / 650 / 850
  by tier), which is unusual and worth noting for capacity planning. No Zen Free
  ID.
- **Architecture:** proprietary, closed weights, undisclosed parameters.

### Raw benchmarks found

Agent / tool use:

- **Function calling is not supported** on this model. There is no τ-Voice,
  Tau3-Banking, Toolathlon, MCP-Atlas, GDPval-AA, Claw-Eval or
  SWE Atlas Codebase QnA row, and none can exist. Not scored — see the note in
  the Tool use line below.

Reasoning / knowledge:

- No GPQA / HLE / CritPt / LCR / Artificial Analysis Intelligence Index /
  Omniscience figure exists for this model.
- The nearest thing to an accuracy measurement is **field-reported, from a
  customer rather than a benchmark house**: BolnaAI, an Indian voice-AI company,
  reports **12.5% lower word error rates on Hindi, Tamil and Telugu** using this
  model (reported via TNW's coverage of the 2026-05-08 launch). That is a
  customer-reported relative improvement against *their own* previous pipeline,
  not an absolute score on a common benchmark, and it is not reproducible.
- ⚠ **No independent translation-quality leaderboard row was found** —
  Artificial Analysis's Speech-to-Speech Index does not cover this model (it
  benchmarks speech-to-speech *conversation*, and translation is not a
  conversation loop). WER, COMET, BLEU and human-MOS figures: none published.

Translation-specific:

- **Language coverage: 70+ input languages, 13 output languages** (OpenAI, via
  TNW's launch coverage). This is the model's one measurable specification and
  the reason it exists — the asymmetry is deliberate (recognise anything,
  synthesise in a curated set).
- **Simultaneous translated transcription**: a text transcript of the *translated*
  audio in the target language is always produced alongside the translated audio,
  streamed incrementally. Azure confirms source-language transcripts are
  available by pairing with a separate transcription model in parallel.

Latency:

- OpenAI classifies it as **"Very fast"** speed tier on its model page but
  publishes **no numeric latency figure**, and neither does Azure.
- Third-party qualitative framing (MindStudio): the latency is described as
  acceptable for a live conference-interpreter scenario but **too slow for a
  sub-500ms real-time customer-service bot**. That is an opinion, not a
  measurement — no first-token or first-audio millisecond figure is published
  anywhere.

Long context:

- **No long-context retrieval reported**, and none is architecturally plausible:
  at 16K context with 2K output on a streaming endpoint, the working set is the
  current utterance, not a document corpus.

### Normalized scores (1–100)

- **Tool use: 20/100.** **This is an applicability statement, not a capability
  claim.** Function calling is explicitly unsupported and there is no tool-use
  benchmark; this model is one stage in a translation pipeline and cannot call
  tools. Scored low only because `Tool use` is a required dimension — read it as
  "not applicable", exactly as the Coding row is for a transcriber. Pair it with
  GPT-Realtime-2 or 2.1 if you need a reasoning agent *behind* the translation.
- **Reasoning: 30/100.** No reasoning benchmark exists and none can: the model has
  a Sep 2024 knowledge cutoff, a 2K output budget, and one job. The only quality
  signal is BolnaAI's customer-reported 12.5% WER improvement on three Indian
  languages — meaningful for a buyer in that market, and insufficient to score a
  general reasoning capability. Scored conservatively rather than zero because
  translation *is* a form of comprehension, and simultaneous interpretation does
  require tracking the argument across a partially-heard clause.
- **Context window: 22/100.** **16,000 tokens / 2,000 max output** per OpenAI's
  first-party model page — the smallest window of any model in this dataset,
  landing in the "<100K scales down to 10–49" band and near its floor. Azure's
  conflicting 128k figure is disregarded because OpenAI's own documentation is
  authoritative and the discrepancy is unresolved. For the model's actual task
  the window is adequate; as a scored capability it is the weakest possible.
- **Multimodal: 88/100.** The strongest dimension, and the reason this model
  belongs in a voice tree: **audio in, audio out** — a genuine streaming
  speech-to-speech path with translated audio synthesised natively, plus text
  transcript deltas. Per the methodology's tiering, audio input plus non-text
  output is the 90–100 band. It sits just below it because it is **audio-only on
  the input side** (no image, no video, and notably not even text input) and
  because text output is a transcript of the translation rather than an
  independent reasoning channel.
- **Coding: 15/100.** **Applicability statement again — the lowest in this
  dataset by design.** There is no code-generation surface on this model and no
  coding benchmark can exist. Nothing about the model is weak here; the
  dimension simply does not apply to a translation pipeline.
- **Cost efficiency: 88/100.** **$0.034/minute flat** across every service tier
  — no output-token multiplier, no cache tier, no tiered long-context surcharge.
  At $2.04/hour for continuous interpretation of one audio stream this is
  dramatically cheaper than a speech-to-speech agent (GPT-Realtime-2.1 High is
  $10.75/hour of *input* audio alone) and undercuts most enterprise translation
  pipelines by a wide margin, which is what prompted the industry's attention at
  launch. Held below the ~92 tier rather than scored higher because $0/minute is
  the only thing that reaches 100, and because a *paid, minute-denominated* rate
  is still a paid rate. The flat pricing also removes the usual lever: you cannot
  cut cost with caching or a cheaper tier, only with fewer minutes.
- **Overall Score: 35/100.** Half-up mean of the five non-cost dims
  ((20 + 30 + 22 + 88 + 15) / 5 = 35.0). **The formula is badly misleading for
  this model and must be flagged.** Two of the five dimensions — Tool use and
  Coding — are structurally inapplicable, and Context window is meaningless for
  a streaming pipeline; together they drag a genuinely excellent translation
  primitive down by ~16 points. **The honest summary: this is a cheap,
  broad-coverage, low-latency simultaneous interpreter with no published
  independent quality measurement.** Best fit: live conference and lecture
  interpretation, cross-language support and hospitality flows, live captions
  alongside a GPT-Realtime-2 agent — and buy it on latency and language coverage,
  not on a quality score, because no quality score exists. For hard-quality
  offline translation, use a dedicated MT engine; for a *reasoning* voice agent
  that also translates, go to GPT-Realtime-2.1.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-30
- Method: public internet research (OpenAI API model documentation for
  `gpt-realtime-translate` and the "Advancing voice intelligence with new models"
  release post, Microsoft Foundry model catalog, CloudPrice spec record, TNW
  launch coverage, Azure Learn deployment guidance, MindStudio latency
  comparison); scores are normalized 1–100 interpretations, not official vendor
  scores.
- Future sources: add a new file next to this one, e.g.
  `GPT_Realtime_Translate_2.md`, using the same headings.