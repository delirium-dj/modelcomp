# GPT-Realtime-2 — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-realtime-2`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Routing note:** this is a native speech-to-speech realtime voice model, so it is
> tracked under `models_voice/` per the voice/speech routing rule in `RULES.md`. Its
> evidence base is the audio-agent benchmark family (Big Bench Audio, Audio
> MultiChallenge, Full Duplex Bench, τ-Voice, the Artificial Analysis Speech-to-Speech
> Index) rather than the text/coding suites. Text-benchmark rows below are marked
> "no verified public score found" **and that absence is structural** — the Realtime
> endpoint is the only surface this model is served on, so the text suites were never
> run against it and never will be.

## Model card

- **Name:** GPT-Realtime-2 (OpenAI's most capable realtime voice model)
- **Short description:** OpenAI's second-generation speech-to-speech model and its
  first voice model with "GPT-5-class reasoning", released 2026-05-07 alongside
  GPT-Realtime-Translate and GPT-Realtime-Whisper. Built for production voice agents that
  must reason mid-call, call tools, absorb interruptions, and hold context across long
  sessions — not for chat or code. Successor line to `gpt-realtime-1.5`; distinct from
  `gpt-realtime`, `gpt-realtime-2.1` and `gpt-realtime-2.1-mini`.
- **Provider / access:** OpenAI **Realtime API only** — model ID `gpt-realtime-2`,
  default snapshot `gpt-realtime-2`, over WebRTC, WebSocket or SIP. Per the model page,
  **Chat Completions, Responses, Batch, fine-tuning, Assistants, transcription,
  translation and speech-generation endpoints are all "Not supported"**; the only
  supported features are `function_calling` and `prompt_caching`. (One third-party
  tracker claims it "also runs on the Chat Completions endpoint" — that contradicts
  OpenAI's own model documentation and is **not** relied on here.) Available in the
  Realtime Playground and the OpenAI Agents SDK.
- **Release / knowledge:** released 2026-05-07; knowledge cutoff **2024-09-30** (OpenAI
  model documentation — the oldest cutoff of any current frontier-class model here, and
  a real constraint for a knowledge-work voice agent).
- **IDs:** `gpt-realtime-2` (OpenAI Realtime API). No Free-tier ID exists on OpenCode Zen
  or any other aggregator; it is paid-only.
- **Context window:** **128,000 tokens** total, **32,000 max output** (OpenAI model
  documentation). This is a deliberate 4× increase over the 32K of `gpt-realtime`,
  which OpenAI states is "to support longer, more coherent sessions and more complex
  task flows". LLMReference independently lists 131K, consistent with 128,000.
- **Modalities:** **text, audio and image in; text and audio out.** Reasoning tokens
  supported, with **configurable reasoning effort** at `minimal` / `low` (default) /
  `medium` / `high` / `xhigh`. Parallel tool calls, spoken preambles, explicit
  tool-transparency phrases, and graceful in-conversation recovery ("I'm having trouble
  with that right now") are documented product features. No video.
- **Pricing (as of 2026-09-27):** per 1M tokens — **audio: $32 in / $0.40 cached / $64
  out**; text: $4 in / $0.40 cached / $24 out; image: $5 in / $0.50 cached. This is a
  premium audio price and, notably, is **unchanged from GPT-Realtime-1.5** despite the
  benchmark gains and the 4× context increase. Companion models for reference:
  GPT-Realtime-Translate $0.034/min, GPT-Realtime-Whisper $0.017/min.
- **Architecture:** proprietary — OpenAI publishes no weights, parameter count, or
  architecture detail for this model.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking / Tau2-Bench: **no verified public score found** (text-agentic suites
  were never run; the model has no Chat Completions or Responses endpoint).
- **τ-Voice** (Artificial Analysis, end-to-end customer-service task completion across
  Airline / Retail / Telecom — the closest true analogue to τ-bench for a voice model):
  **39.8%** at high reasoning, second in the field behind Grok Voice Think Fast 1.0
  (52.1%) and ahead of Gemini 3.1 Flash Live Preview high (37.7%). **Airline domain:
  63%**, the best airline score reported. Every model in the index sits below 53% on
  this dimension — it is the hardest one available.
- **Audio MultiChallenge** (Scale AI, multi-turn spoken-dialogue criteria: instruction
  retention, inference memory, self-coherence, voice editing): **48.45%** average
  pass rate at `xhigh` reasoning — **first place** on the audio-output leaderboard, up
  from GPT-Realtime-1.5's 34.73%. Scale AI's **instruction-retention pass rate rose
  from 36.7% to 70.8%**. Caveat: Scale AI had not yet evaluated Grok Voice Think Fast
  or Step-Audio R1.1 Realtime on this suite, so "first" is on a partial field.
- Terminal-Bench 2.1: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Customer-reported, not a controlled benchmark: Zillow reports a **26-point lift in
  call success rate (95% vs 69%)** on their hardest adversarial benchmark after prompt
  optimization, plus materially better Fair Housing compliance robustness (Zillow SVP
  quote, OpenAI launch post). Useful as a production signal, not as a comparable score.

Reasoning / knowledge:

- **Big Bench Audio** (Artificial Analysis; 1,000 reasoning questions adapted from Big
  Bench Hard — Formal Fallacies, Navigate, Object Counting, Web of Lies — delivered as
  audio): **96.6%** at `high` reasoning, up from GPT-Realtime-1.5's 81.4% (+15.2 pts,
  OpenAI's own headline). At `minimal` reasoning it falls to **71.8%** — a ~25-point
  effort-dependent swing, so the headline number is not a property of the default
  configuration. Ranked third: behind Step-Audio R1.1 Realtime (97.6%) and Grok Voice
  Think Fast 1.0 (97.1%), tied with Gemini 3.1 Flash Live Preview at high.
- **Conversational Dynamics / Full Duplex Bench** (turn-taking, pauses, interruptions,
  backchannel "uh-huh" handling): **96.1%** at `minimal` reasoning — the best figure in
  the index. At `high` it drops to **95.3%**, behind GPT-Realtime-1.5 and GPT Realtime
  Mini (tied 95.7%). Note the inversion: the low-latency setting is the *better*
  conversational model.
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score
  found** — the text Intelligence Index was never run on this model, and BenchLM lists
  GPT Realtime 2 with **0 of 486** benchmarks covered and score "coming soon".
- **Artificial Analysis Speech-to-Speech Index** (the composite that actually applies
  here — Big Bench Audio + Full Duplex Bench + τ-Voice): **77.2%** at high reasoning,
  **first place** in the index, ahead of Grok Voice Think Fast 1.0 (75.7%),
  GPT-Realtime-1.5 (72.0%) and Gemini 3.1 Flash Live Preview high (69.5%).
- GPQA Diamond / HLE / LCR / MLCR / CritPt: **no verified public score found** (text
  suites; never run against a Realtime-only model).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**. Worth
  flagging as a real risk for this class of model: a 2024-09-30 knowledge cutoff on a
  general-purpose voice agent that is trusted to answer customers, with no published
  hallucination measurement.

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found.** No coding suite
  applies — the model is not exposed on any endpoint that takes a code task.

Long context:

- **No long-context retrieval reported.** The window grew 32K → 128K purely to hold
  longer voice sessions, and **no MRCR, RULER, or GraphWalks measurement at any window
  length has been published** for this model. The 128K figure is a documented limit only.

Latency (voice-specific, and the axis that decides real-time viability):

- Time to first audio: **1.12 s** at `minimal` reasoning, **2.33 s** at `high` (OpenAI
  launch post, DeepLearning.AI, Artificial Analysis). Artificial Analysis independently
  logs GPT-Realtime-2 (High) at 2.33 s TTFA vs GPT-Realtime-1.5 at 0.82 s and Grok Voice
  Think Fast 1.0 at 1.25 s. Human conversational turn-taking targets sit well under
  500 ms, so the high-reasoning configuration that produces the 96.6% Big Bench Audio
  score is **too slow for natural turn-taking** — this is the central trade-off of the
  model and the reason the index leader and the latency leader are different models.
- Cost per task in the Artificial Analysis index: **$4.14** at high reasoning — third
  cheapest of the compared set (Gemini 3.1 Flash Live Preview minimal $1.50, high
  $1.75, Grok Voice Think Fast 1.0 $3.00).

### Normalized scores (1–100)

- **Tool use: 70/100.** The voice-agent evidence is real and mid-to-strong: τ-Voice
  39.8% (2nd, with a category-leading 63% on airline), Audio MultiChallenge 48.45% at
  first place, and instruction retention up to 70.8%, plus documented parallel tool
  calls, tool-transparency phrasing and in-call recovery. It is held at 70 rather than
  higher because the composite agentic number (τ-Voice) is under 40% overall, the
  instruction-following suite is still below the 50% pass-rate bar, and **not one**
  text-agentic suite (Tau3-Banking, Terminal-Bench, Claw-Eval, Toolathon, MCP-Atlas) has
  ever been run against it — so the evidence is narrow, and Zillow's 95% call success
  is a single-customer claim, not a controlled measurement.
- **Reasoning: 80/100.** Big Bench Audio 96.6% at high reasoning is a genuine top-three
  audio-reasoning result, and OpenAI's "GPT-5-class reasoning" positioning plus the
  τ-Voice airline 63% are consistent with it. Two things cap it well below the 90+
  frontier text band: the score is highly effort-dependent (71.8% at `minimal`, the
  configured default of `low`, versus 96.6% at `high`), and the high setting costs
  2.33 s time-to-first-audio, so the configuration that earns the number is not the one
  a latency-sensitive deployment would run. No text reasoning suite exists to corroborate.
- **Context window: 58/100.** 128,000 tokens total sits in the methodology's
  100K–200K band (50–64), landing mid-band. The 4× jump from 32K is a real
  improvement for long agentic voice sessions and supports the upper half of the band;
  it is not pushed higher because there is **no measured retrieval at any window
  length**, and max output is 32,000 tokens.
- **Multimodal: 95/100.** Text, audio and image in with **text and audio out** — this
  is the methodology's top tier ("+audio in or any non-text out = 90–100"), and this
  model is native audio-in/audio-out rather than a stitched ASR→LLM→TTS pipeline, which
  is exactly what the Big Bench Audio design was built to penalize. Docked from the
  ceiling because it is single-channel audio with no video, and because the published
  image-input format is thin relative to the audio path.
- **Coding: 20/100.** **No coding benchmark exists for this model, and none will** — it
  is not served on Chat Completions, Responses, or Batch, so a code-generation task
  cannot be posed against it at all. This is a structural floor, not a measurement, and
  it is scored at the text-only end of the scale purely so the Overall arithmetic is
  well-defined. **Do not read this as a verdict on the model's text ability** — GPT-5-class
  reasoning underneath a realtime speech wrapper is a different question that this
  dataset's evidence cannot answer. Any comparison of Overall scores between this model
  and a text-first model is misleading for exactly this reason.
- **Cost efficiency: 40/100.** Audio at $32 / 1M input and $64 / 1M output is one of the
  most expensive per-token tiers in this dataset, unchanged from the previous
  generation. It is scored above the ~30 anchor for the $10/$50 text tier because the
  per-task view is more favourable and more relevant: **$4.14** per Speech-to-Speech
  index task is third-cheapest among the compared native-audio models, and the cached
  input rate of $0.40 is genuinely cheap for repeated context in a long session.
- **Overall Score: 64.6/100.** (70 + 80 + 58 + 95 + 20) / 5 = 64.6 — best fit as the
  **reference production voice-agent model** on measured quality: it leads the
  Artificial Analysis Speech-to-Speech Index at 77.2% and tops the conversational-
  dynamics and instruction-following sub-scores. The Overall is dragged down almost
  entirely by the structural Coding 20 and a mid-band Context 58, neither of which
  reflects voice-agent fitness; read the Speech-to-Speech Index and the τ-Voice /
  Audio MultiChallenge rows instead of this number. If your workload is voice, this is
  the strongest model available at `minimal`/`low` effort; if you need its reasoning at
  `high`, you are buying 96.6% Big Bench Audio with 2.33 s of dead air per turn.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-27
- Method: public internet research (OpenAI launch post and Realtime API model
  documentation, Artificial Analysis Speech-to-Speech Index announcement and speech-to-
  speech methodology, Scale AI Audio MultiChallenge leaderboard coverage via DeepLearning.AI,
  DataCamp and LLMReference, Reuters). Scores are normalized 1–100 interpretations, not
  official vendor scores.
- Future sources: add a new file next to this one, e.g. `OpenAI_Recheck.md`, using the
  same headings.
