# GPT-Realtime-2 — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-realtime-2`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Routing note:** this is a native speech-to-speech realtime voice model, so it is
> tracked under `models_voice/` per the voice/speech routing rule in `RULES.md`. Its
> evidence base is the audio-agent benchmark family (Big Bench Audio, Audio
> MultiChallenge, Full Duplex Bench, τ-Voice, the Speech Agent Arena, the Artificial
> Analysis Speech-to-Speech Index) rather than the text/coding suites. Text-benchmark
> rows below are marked "no verified public score found" **and that absence is
> structural** — the Realtime endpoint is the only surface this model is served on, so
> the text suites were never run against it and never will be.

> **What changed on this re-validation (2026-09-27 → 2026-09-29): MATERIAL, in the
> index's own construction.**
> 1. **The Artificial Analysis Speech-to-Speech Index was rebuilt.** It is no longer an
>    equal-weighted average of three datasets. It now averages **four** components —
>    Speech Reasoning (Big Bench Audio), Agentic Performance (τ-Voice), **Arena
>    Preference (frozen Speech Agent Arena Elo)** and **Task Success Rate**. A model
>    needs all four to be indexed.
> 2. **GPT-Realtime-2 (High) now scores 73.6%, down from the 77.2% this file recorded,
>    and it is no longer first.** It ranks **#7 of the 17 indexed models**. Ahead of it:
>    Gemini 3.8 Live Extended Thinking (High) 82.6, GPT-Live-1 (Astra, medium) 81.5,
>    Grok Voice Think Fast 2.0 High 81.3, GPT-Live-1 (Sol, low) 80.1, Gemini 3.8 Live
>    76.0, and its own successor **GPT-Realtime-2.1 (High) 73.9**.
> 3. **The two Arena components expose a real weakness that the old index hid**: GPT-
>    Realtime-2 (High) scores **932 Arena Preference Elo** and **89.8% Task Success**.
>    932 is near the bottom of the indexed field (Gemini 3.8 Live 1083, Gemini 3.1 Flash
>    Live Minimal 1096, Grok Voice Think Fast 2.0 High 1011), i.e. human testers broadly
>    prefer other voice agents when preference is measured directly.
> 4. **Conversational Dynamics is no longer the best figure in the index.** StepAudio 3
>    Realtime (98.9%), Qwen Audio 3.0 Realtime Plus (98.4%) and GPT-Live-1 (Sol, low)
>    (97.3%) now lead. GPT-Realtime-2 (Minimal)'s 96.1% is **#5**.
> 5. **Latency improved sharply.** Time to first audio for GPT-Realtime-2 (High) is now
>    **1.14 s** (Minimal 1.12 s), replacing the **2.33 s** this file previously recorded.
>    The "the quality leader is too slow to converse" thesis recorded on 2026-09-27 no
>    longer holds on current measurements.
> 6. **Successor line confirmed.** `gpt-realtime-2.1` and `gpt-realtime-2.1-mini` shipped
>    2026-07-06 with improved alphanumeric recognition, silence/noise handling and
>    interruption behaviour, plus a stated **≥25% p95 latency reduction across Realtime
>    voice models**. 2.1 High scores 73.9 vs 2's 73.6.

## Model card

- **Name:** GPT-Realtime-2 (OpenAI's second-generation realtime voice model; now superseded by GPT-Realtime-2.1)
- **Short description:** OpenAI's speech-to-speech model with "GPT-5-class reasoning", released 2026-05-07 alongside GPT-Realtime-Translate and GPT-Realtime-Whisper. Built for production voice agents that must reason mid-call, call tools, absorb interruptions, and hold context across long sessions — not for chat or code. Successor line to `gpt-realtime-1.5`; **superseded in turn by `gpt-realtime-2.1` (2026-07-06)**, which is faster and scores marginally higher on the current index. Distinct from `gpt-realtime`, `gpt-realtime-2.1` and `gpt-realtime-2.1-mini`.
- **Provider / access:** OpenAI **Realtime API only** — model ID `gpt-realtime-2`, default snapshot `gpt-realtime-2`, over WebRTC, WebSocket or SIP. Per the model page, **Chat Completions, Responses, Batch, fine-tuning, Assistants, transcription, translation and speech-generation endpoints are all "Not supported"**; the only supported features are `function_calling` and `prompt_caching`. (One third-party tracker claims it "also runs on the Chat Completions endpoint" — that contradicts OpenAI's own model documentation and is **not** relied on here.) Available in the Realtime Playground and the OpenAI Agents SDK, and as a public preview on Microsoft Foundry (`gpt-realtime-2`).
- **Release / knowledge:** released 2026-05-07; knowledge cutoff **2024-09-30** (OpenAI model documentation, unchanged for 2.1 as well — the oldest cutoff of any current frontier-class model here, and a real constraint for a knowledge-work voice agent).
- **IDs:** `gpt-realtime-2` (OpenAI Realtime API). No Free-tier ID exists on OpenCode Zen or any other aggregator; it is paid-only.
- **Context window:** **128,000 tokens** total, **32,000 max output** (OpenAI model documentation) for the `gpt-realtime-2` model page. **Disputed:** Microsoft's Foundry documentation for the "GPT Realtime 2.x (preview)" series states a **256,000-token** context window for that hosted series. This is a third-party hosting claim about a preview surface, not an OpenAI spec change for the `gpt-realtime-2` API model, so **128,000 is what this file scores**. LLMReference independently lists 131K, consistent with 128,000.
- **Modalities:** **text, audio and image in; text and audio out.** Reasoning tokens supported, with **configurable reasoning effort** at `minimal` / `low` (default) / `medium` / `high` / `xhigh`. Parallel tool calls, spoken preambles, explicit tool-transparency phrases, and graceful in-conversation recovery ("I'm having trouble with that right now") are documented product features. No video.
- **Pricing (as of 2026-09-29):** per 1M tokens — **audio: $32 in / $0.40 cached / $64 out**; text: $4 in / $0.40 cached / $24 out; image: $5 in / $0.50 cached. This is a premium audio price and is **unchanged from GPT-Realtime-1.5** despite the benchmark gains. Derived audio rate on Artificial Analysis: **$1.15 per hour of audio input, $4.61 per hour of audio output**. Companion models for reference: GPT-Realtime-Translate $0.034/min, GPT-Realtime-Whisper $0.017/min.
- **Architecture:** proprietary — OpenAI publishes no weights, parameter count, or architecture detail for this model.

### Raw benchmarks found

Agent / tool use:

- **τ-Voice** (Artificial Analysis, end-to-end customer-service task completion across Airline / Retail / Telecom — the closest true analogue to τ-bench for a voice model): **39.8%** at high reasoning, **37.4%** at medium, **30.8%** at minimal (Artificial Analysis, accessed 2026-09-29). Still behind Grok Voice Think Fast 2.0 High (56.5%), GPT-Live-1 (Astra, medium) (67.9%) and Gemini 3.8 Live Extended Thinking High (68.6%). This is unchanged from 2026-09-27.
- **Task Success Rate: 89.8%** (High) / 84.7% (Minimal) — share of eligible conversations ending in the correct final task-completing tool call. **New component** added by the rebuilt index.
- **Arena Preference Elo: 932** (High) / 916 (Minimal), Bradley–Terry fit anchored at GPT Realtime 1.5 = 1000. **New component.** GPT-Realtime-2.1 High scores 928, Grok Voice Think Fast 2.0 High 1011, GPT-Live-1 (Sol, low) 1053, Gemini 3.1 Flash Live Minimal 1096, Gemini 3.8 Live 1083. GPT-Realtime-2 sits near the bottom of the indexed field on human preference.
- τ-Voice Airline domain, per the June index announcement: **63%**, the best airline score reported at the time. The rebuilt index no longer publishes a per-domain leaderboard figure for this model; the domain table is now shown for indexed models only.
- **Audio MultiChallenge** (Scale AI, multi-turn spoken-dialogue criteria: instruction retention, inference memory, self-coherence, voice editing): **48.45%** average pass rate at `xhigh` reasoning, up from GPT-Realtime-1.5's 34.73%; instruction-retention pass rate rose from 36.7% to **70.8%**. Caveat: Scale AI had not evaluated Grok Voice Think Fast or Step-Audio R1.1 Realtime on this suite, so "first place" is on a partial field. **No re-measurement found on 2026-09-29.**
- Customer-reported, not a controlled benchmark: Zillow reports a **26-point lift in call success rate (95% vs 69%)** on their hardest adversarial benchmark after prompt optimization, plus materially better Fair Housing compliance robustness (Zillow SVP quote, OpenAI launch post). Useful as a production signal, not as a comparable score.
- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (text-agentic suites were never run; the model has no Chat Completions or Responses endpoint).

Reasoning / knowledge:

- **Big Bench Audio** (Artificial Analysis; 1,000 reasoning questions adapted from Big Bench Hard — Formal Fallacies, Navigate, Object Counting, Web of Lies — delivered as audio): **97%** at `high` reasoning (96.6% in the June measurement), up from GPT-Realtime-1.5's 81.4%. At `minimal` reasoning it falls to **72%** (71.8% previously) — a ~25-point effort-dependent swing, so the headline number is not a property of the default configuration. Current top of the table: StepAudio 3 Realtime 99.7%, Qwen Audio 3.0 Realtime Plus 99.2%, Qwen3.5 Omni Plus Realtime 98.7%, Gemini 3.8 Live Extended Thinking High 97.7%, Step-Audio R1.1 Realtime 97.6%.
- **Conversational Dynamics / Full Duplex Bench** (turn-taking, pauses, interruptions, backchannel "uh-huh" handling): **95.3%** at `high`, **96.1%** at `minimal`, **95.2%** at `medium`. No longer the field-best — StepAudio 3 Realtime (98.9%), Qwen Audio 3.0 Realtime Plus (98.4%) and GPT-Live-1 (Sol, low) (97.3%) lead. Note the inversion that remains: the low-latency setting is the better conversational model.
- **Artificial Analysis Speech-to-Speech Index** (Big Bench Audio + τ-Voice + Arena Preference + Task Success Rate, equal-weighted): **73.6%** at high reasoning, **62.7%** at minimal. **Changed from 77.2% on the old three-dataset index; the model is no longer first, ranking #7 of 17 indexed models.**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** — the text Intelligence Index was never run on this model, and BenchLM lists GPT Realtime 2 with **0 of 486** benchmarks covered and score "coming soon".
- GPQA Diamond / HLE / LCR / MLCR / CritPt: **no verified public score found** (text suites; never run against a Realtime-only model).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**. Worth flagging as a real risk for this class of model: a 2024-09-30 knowledge cutoff on a general-purpose voice agent that is trusted to answer customers, with no published hallucination measurement.

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / Coding Index: **no verified public score found.** No coding suite applies — the model is not exposed on any endpoint that takes a code task.

Long context:

- **No long-context retrieval reported.** The window grew 32K → 128K to hold longer voice sessions, and **no MRCR, RULER, or GraphWalks measurement at any window length has been published** for this model. The 128K figure is a documented limit only.

Latency (voice-specific, and the axis that decides real-time viability):

- Time to first audio: **1.14 s** at `high` reasoning, **1.12 s** at `minimal`, **1.22 s** at `medium` (Artificial Analysis, accessed 2026-09-29). **Changed: the 2026-09-27 revision recorded 2.33 s at `high`** (OpenAI launch post, DeepLearning.AI, Artificial Analysis). The gap to the fastest models has closed — Raon SpeechChat 0.04 s, Deepslate Opal 0.44 s, Gemini 2.5 Flash Native Audio Dialog 0.63 s, Grok Voice Think Fast 2.0 High 0.70 s. Human conversational turn-taking targets sit well under 500 ms, so GPT-Realtime-2 is now *close to* natural turn-taking rather than clearly outside it, and the high-reasoning configuration is no longer disqualified on latency grounds.
- Cost per hour of input audio in the Artificial Analysis index: **$4.14** at high reasoning, $3.97 at medium, $3.07 at minimal. Cheapest indexed: Qwen Audio 3.0 Realtime Plus $0.033/hour, Step-Audio R1.1 Realtime $0.064/hour, Gemini 3.8 Live **$0.84/hour**.

Sources consulted on this re-validation: [Artificial Analysis Speech to Speech leaderboard](https://artificialanalysis.ai/speech-to-speech) (index methodology and the summary-of-key-metrics table, accessed 2026-09-29), [Announcing the Artificial Analysis Speech to Speech Index](https://artificialanalysis.ai/articles/announcing-the-artificial-analysis-speech-to-speech-index), [GPT-Realtime-2.1 model documentation](https://developers.openai.com/api/docs/models/gpt-realtime-2.1), [New Realtime models on the API (OpenAI community, 2026-07-06)](https://community.openai.com/t/new-realtime-models-on-the-api-gpt-realtime-2-1-and-gpt-realtime-2-1-mini/1385896), [Microsoft Foundry GPT Realtime 2.x overview](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/realtime-2).

### Normalized scores (1–100)

- **Tool use: 70/100.** Unchanged. The voice-agent evidence is real and mid-to-strong: τ-Voice 39.8% at high with a category-leading airline score on the earlier measurement, Task Success Rate 89.8%, Audio MultiChallenge 48.45% at first place on that leaderboard, instruction retention up to 70.8%, plus documented parallel tool calls, tool-transparency phrasing and in-call recovery. It is held at 70 rather than higher because the composite agentic number (τ-Voice) is still under 40% overall, the instruction-following suite is below the 50% pass-rate bar, and **not one** text-agentic suite (Tau3-Banking, Terminal-Bench, Claw-Eval, Toolathon, MCP-Atlas) has ever been run against it. The new 932 Arena Elo cuts against raising it.
- **Reasoning: 80/100.** Unchanged. Big Bench Audio at 96.6–97% is a top-five audio-reasoning result and OpenAI's "GPT-5-class reasoning" positioning plus the τ-Voice airline score are consistent with it. Two things still cap it well below the 90+ frontier text band: the score is highly effort-dependent (72% at `minimal`, the family default being `low`, versus ~97% at `high`), and no text reasoning suite exists to corroborate. The index-methodology change removed the "first place" claim but did not change any reasoning datapoint.
- **Context window: 58/100.** Unchanged. 128,000 tokens total sits in the methodology's 100K–200K band (50–64), landing mid-band. Not pushed higher because there is **no measured retrieval at any window length**, and max output is 32,000 tokens. Microsoft's 256K Foundry-preview figure is recorded above but not scored, since it is a hosting-surface claim.
- **Multimodal: 95/100.** Unchanged. Text, audio and image in with **text and audio out** is the methodology's top tier ("+audio in or any non-text out = 90–100"), and this model is native audio-in/audio-out rather than a stitched ASR→LLM→TTS pipeline, which is exactly what the Big Bench Audio design penalises. Docked from the ceiling because it is single-channel audio with no video.
- **Coding: 20/100.** Unchanged. **No coding benchmark exists for this model, and none will** — it is not served on Chat Completions, Responses, or Batch. This is a structural floor, not a measurement, scored at the text-only end of the scale purely so the Overall arithmetic is well-defined. **Do not read this as a verdict on the model's text ability.**
- **Cost efficiency: 40/100.** Unchanged. Audio at $32 / 1M input and $64 / 1M output is one of the most expensive per-token tiers here, unchanged from the previous generation. It stays above the ~30 anchor for the $10/$50 text tier because the per-task view is more favourable and more relevant: **$4.14** per hour of input audio in the index, third-cheapest among the models that were priced when the index was built, and the cached input rate of $0.40 is cheap for repeated context. Note that the cheap end has moved decisively — Gemini 3.8 Live is now **$0.84/hour** and Qwen Audio 3.0 Realtime Plus $0.033/hour, so 40 is generous by today's standards.
- **Overall Score: 64.6/100.** (70 + 80 + 58 + 95 + 20) / 5 = 323 / 5 = **64.6** — unchanged from 2026-09-27, because the index-methodology change moved no underlying capability datapoint that these six dimensions are scored on. **What did change is the framing:** GPT-Realtime-2 is no longer the index leader. On the rebuilt four-component index it scores 73.6% and ranks #7 of 17, behind Gemini 3.8 Live Extended Thinking (82.6), GPT-Live-1 (Astra, medium) (81.5) and Grok Voice Think Fast 2.0 High (81.3) — and behind its own successor GPT-Realtime-2.1 High (73.9). Its remaining strengths are Big Bench Audio audio reasoning, conversational dynamics and tool plumbing; its newly-exposed weakness is human preference (932 Arena Elo, near the bottom of the indexed field). The Overall remains dragged down by the structural Coding 20 and a mid-band Context 58; for a voice deployment read the τ-Voice, Task Success and Arena Elo rows, not this number.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: public internet research (OpenAI launch post and Realtime API model documentation, Artificial Analysis Speech-to-Speech Index announcement and the live speech-to-speech leaderboard including its rebuilt four-component methodology, Scale AI Audio MultiChallenge leaderboard coverage, OpenAI's 2026-07-06 Realtime 2.1 release post, Microsoft Foundry preview docs). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `OpenAI_Recheck.md`, using the same headings.
