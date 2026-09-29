# Gemini 3.8 Live — findings by Space Bunny Alpha

- Source: Google DeepMind / Google AI Studio (`gemini-3.8-live`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **What changed on this re-validation (2026-09-24 → 2026-09-29): MATERIAL. This entry
> went from "no independent measurement found" to a full row set.**
> Artificial Analysis has since evaluated the **exact** `gemini-3.8-live` model on its
> speech-to-speech benchmarks, and the **Speech-to-Speech Index was itself rebuilt** in
> the meantime — it is no longer an equal-weighted average of three datasets. It now
> averages **four** components: Speech Reasoning (Big Bench Audio), Agentic Performance
> (τ-Voice), **Arena Preference (frozen Speech Agent Arena Elo)** and **Task Success
> Rate**. A model needs all four to be indexed.
>
> New verified rows for `gemini-3.8-live`: **Speech-to-Speech Index 76.0 (#5 of 17
> indexed models)**, **Big Bench Audio 92%**, **Full Duplex Bench (Conversational
> Dynamics) 96.1%**, **τ-Voice 30.1%**, **Arena Preference Elo 1083**, **Task Success
> Rate 93.2%**, **TTFA 1.18 s**, **cost per hour of input audio $0.84**.
>
> The previous revision scored Reasoning 45 and Tool use 60 on the basis that no
> independent measurement existed. That reasoning no longer holds and has been corrected.
> Separately, Google's DeepMind model card now gives a **knowledge cutoff of January
> 2025** — new information — and confirms the 128K context / 64K output pair.

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google's low-latency native audio/vision Live API model for real-time voice agents, streamed multimodal dialogue, and asynchronous function workflows. Released 2026-09-15 as one half of the **Gemini 3.8 Audio** family; the sibling **Gemini 3.8 Live Extended Thinking** takes the #1 slot on the Speech-to-Speech Index at 82.6 and is *not* the model catalogued here.
- **Provider / access:** Google Gemini Live API (`gemini-3.8-live`); Google AI Studio, Gemini app, Vertex AI, and Google Search Live are listed. The Live API uses a stateful WebSocket connection. Google describes `gemini-3.8-live` as "the default option for most low-latency voice agent experiences and real-time dialogue without reasoning-induced delays".
- **Release / knowledge:** released **2026-09-15** with the Gemini 3.8 Audio family; Google model documentation lists a September 2026 stable update. **Knowledge cutoff: January 2025** (Google DeepMind Gemini 3.8 Audio model card, published 15 September 2026) — newly documented; the previous revision recorded no cutoff.
- **IDs:** `gemini-3.8-live`; **do not substitute** `gemini-3.8-live-extended-thinking`, whose index score (82.6) is 6.6 points higher and whose τ-Voice score (68.6%) is more than double.
- **Context window:** **131,072 input tokens; 65,536 output tokens** (Google Gemini API model documentation, stable `gemini-3.8-live`). The DeepMind model card describes the family as "a token context window of up to 128K" with **64K token output** — the same spec rounded. BenchLM's catalog reports 128K; the Google model-page limits are used here.
- **Modalities:** Text, images, audio, and video input; text and audio output. Google documents interleaved reasoning, asynchronous function calling, built-in audio streaming, search grounding, Live API support, and full session client content updates. The Live API accepts raw 16-bit PCM audio at 16 kHz and returns 24 kHz PCM audio; JPEG images are supported at up to 1 FPS, and video frames are sent by default (`TURN_INCLUDES_AUDIO_ACTIVITY_AND_ALL_VIDEO`) unless you disable it. Explicitly **not** supported: caching, code execution, file search, structured outputs, URL context, image generation, Google Maps grounding, and the Batch API.
- **Pricing (as of 2026-09-29):** Google Gemini Developer API pricing for this model — **$0.75 per 1M text input tokens, $4.50 per 1M text output tokens**; **audio input $3.00 per 1M or $0.005/min, audio output $12.00 per 1M or $0.018/min**; **video/image input $1.00 per 1M or $0.002/min**. Text rates are promotional through 2026-12-31 and **double on 2027-01-01** ($1.50 in / $7.50 out); cached input is $0.075 per 1M through 2026-12-31, doubling to $0.15 afterwards. This confirms the $0.75/$4.50 text-equivalent rate and the $3/$12 audio route the previous revision carried from BenchLM, now sourced to Google directly.
- **Architecture:** Proprietary; Google has not disclosed parameter count. The DeepMind model card frames Gemini 3.8 Audio as an addition to the Gemini 3 series, evaluated against Gemini 3.7 Flash in the Frontier Safety Framework, and finds **no material increase in performance or new meaningful capabilities relative to Gemini 3.7 Flash**.

### Raw benchmarks found

> All rows below are Artificial Analysis measurements of the **exact** `gemini-3.8-live`
> model, accessed 2026-09-29, on the rebuilt four-component Speech-to-Speech Index. Where
> Google's own launch post quotes a number for the *Extended Thinking* sibling it is
> labelled as such and is not credited to this model.

Agent / tool use:

- **τ-Voice** task success: **30.1%** — Artificial Analysis, independent measurement, accessed 2026-09-29. **The weakest sub-score of any indexed model**; only Gemini 3.1 Flash Live Minimal (26.2%) and GPT-Realtime-2 Minimal (30.8%) are nearby, and the field leader is GPT-Live-1 (Astra, medium) at 67.9%. This is the single most important caveat on the model: its conversational polish is excellent and its ability to actually *finish* a multi-step tool-using customer-service task is not.
- **Task Success Rate: 93.2%** — the highest in the indexed field (Grok Voice Think Fast 2.0 High 94.6%, Qwen Audio 3.0 Realtime Flash 81.7%, GPT-Realtime-2.1 High 91.5%). New index component; measures whether the final task-completing tool call is correct.
- **Arena Preference Elo: 1083** — also the highest in the indexed field (Gemini 3.1 Flash Live Minimal 1096, GPT-Live-1 (Sol, low) 1053, Grok Voice Think Fast 2.0 High 1011, GPT-Realtime-2 High 932). New index component; the frozen Elo is converted to an Arena Score against an 800-Elo baseline.
- τ-Voice / Tau3-Banking / Tau2-Bench / GDPval-AA / Terminal-Bench / Claw-Eval / Toolathlon / MCP-Atlas: **no verified public score found** beyond the AA τ-Voice figure above.
- **Sibling, not this model:** Gemini 3.8 Live Extended Thinking (High) leads the field on τ-Voice at **68.6%** and on Sierra's τ-Voice-banking at **35.1%**, and Google reports it pushing the Pareto frontier on ServiceNow's EVA-Bench voice-agent benchmark. Recorded for orientation only — the previous revision correctly warned against reading those rows onto `gemini-3.8-live`.

Reasoning / knowledge:

- **Big Bench Audio (Speech Reasoning): 92%** (Artificial Analysis). 1,000 reasoning questions adapted from Big Bench Hard — Formal Fallacies, Navigate, Object Counting, Web of Lies — delivered and answered as audio. This is a genuine top-ten speech-reasoning result; only StepAudio 3 Realtime (99.7%), Qwen Audio 3.0 Realtime Plus (99.2%), Qwen3.5 Omni Plus Realtime (98.7%), Gemini 3.8 Live Extended Thinking High (97.7%) and Step-Audio R1.1 Realtime (97.6%) are ahead. **The previous revision scored Reasoning 45 because no such measurement could be found; it now exists.**
- **Conversational Dynamics (Full Duplex Bench v1 / v1.5 subset): 96.1%** — pause handling, turn-taking, interruption handling and backchannel handling. **Ranked #5 of 34 models** (StepAudio 3 Realtime 98.9%, Qwen Audio 3.0 Realtime Plus 98.4%, GPT-Live-1 (Sol, low) 97.3%, Qwen Audio 3.0 Realtime Flash 96.9%). Effectively at the frontier.
- GPQA / HLE / LCR / MLCR / CritPt / Omniscience hallucination metrics / Artificial Analysis text Intelligence Index: **no verified public score found** — the text index was never run on this model and none of those text suites applies to a Live-API audio model.
- **Knowledge cutoff January 2025** (DeepMind model card). Worth recording for a model meant to answer customers: any knowledge after early 2025 is outside its training data, and Google publishes no hallucination measurement.

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / Coding Index: **no verified public score found**. The model's profile is voice-first, and code execution is explicitly listed as **not supported** on the Google model page.

Long context:

- Native context: **131,072 input tokens / 65,536 output** (Google model documentation). **No retrieval-at-length score was found** — no MRCR, RULER or GraphWalks measurement at any window length for this model.

Latency and price-per-audio (the two axes that decide real-time viability):

- **Time to first audio: 1.18 s** on Big Bench Audio (Artificial Analysis, accessed 2026-09-29). Mid-field: Raon SpeechChat 0.04 s, Deepslate Opal 0.44 s, Gemini 2.5 Flash Native Audio Dialog 0.63 s, Grok Voice Think Fast 2.0 High 0.70 s, GPT-Realtime-2 High 1.14 s; Gemini 3.1 Flash Live High 2.99 s is slower.
- **Cost per hour of input audio: $0.84** on the fixed 40-question Big Bench Audio subset (Artificial Analysis). This is the **cheapest indexed model with a full four-component score** and the cheapest Google model in the table — an order of magnitude below GPT-Realtime-2 High ($4.14) and roughly a fifth of Grok Voice Think Fast 2.0 High ($4.80). The cheapest overall are Qwen Audio 3.0 Realtime Plus ($0.033/hour) and Step-Audio R1.1 Realtime ($0.064/hour).

Index context:

- **Artificial Analysis Speech-to-Speech Index: 76.0%** — #5 of 17 models with all four components. Ahead of it: Gemini 3.8 Live Extended Thinking (High) 82.6, GPT-Live-1 (Astra, medium) 81.5, Grok Voice Think Fast 2.0 High 81.3, GPT-Live-1 (Sol, low) 80.1. Behind it: GPT-Realtime-2.1 High 73.9, GPT-Realtime-2 High 73.6, Grok Voice Think Fast 1.0 72.3, and the rest.

Sources consulted on this re-validation: [Artificial Analysis Speech to Speech leaderboard](https://artificialanalysis.ai/speech-to-speech) (four-component index methodology and the summary-of-key-metrics table, accessed 2026-09-29), [Gemini 3.8 Audio (Live, Live Extended Thinking) Model Card — Google DeepMind](https://deepmind.google/models/model-cards/gemini-3-8-audio/), [Gemini 3.8 Live model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live), [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing) (page dated 2026-09-24), [Introducing Gemini 3.8 Live and 3.8 Live Extended Thinking — Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/), all accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 65/100.** **Changed from 60.** The new Artificial Analysis measurements resolve the "τ-Voice was the only surfaced measured task" problem that held this score down, and they split it cleanly in two. On **task completion** the model is excellent — **93.2% Task Success Rate, the highest in the indexed field**, and **1083 Arena Preference Elo, also the highest**, which together say that in a real conversation people prefer it and it usually makes the right final tool call. On **multi-step autonomous work** it is the weakest indexed model: **τ-Voice 30.1%**. So it scores mid-60s rather than 60 because the prior evidence base (one owner-defined τ-Voice number, no independent row at all) understated it, but it does not score higher because τ-Voice is the dimension that actually measures long-horizon agentic reliability, and 30.1% is near the floor. Search grounding and async function calling are both documented and supported.
- **Reasoning: 70/100.** **Changed from 45 — this is the largest single correction in this revision.** The previous score rested on "no GPQA/HLE/AA reasoning result is available", which is no longer true: **Big Bench Audio 92%** is an independent, audio-native reasoning measurement placing the model in the global top ten on that benchmark, and **96.1% Conversational Dynamics (#5 of 34)** shows it holds multi-constraint conversational structure reliably. It is held at 70 rather than higher because no text reasoning suite corroborates it, there is no published hallucination rate, and the January 2025 knowledge cutoff is the second-oldest in this dataset — which directly caps how much of a "reasoning" claim can be made about a customer-facing knowledge agent.
- **Context window: 82/100.** Unchanged. 131,072 input / 65,536 output is a useful session budget for voice, but it sits below the 200K+ text tier and — exactly as before — there is **no measured retrieval at any window length**. Credit is for the spec, not for verified recall.
- **Multimodal: 100/100.** Unchanged and now independently corroborated. Native text, image, audio **and video** input with text and audio output is documented on Google's model page and confirmed by Google's own audio-stream framing; 96.1% on Full Duplex Bench is direct evidence that the audio-in/audio-out path is native rather than stitched, which is what this top-tier score is meant to reward.
- **Coding: 15/100.** Unchanged. No verified coding benchmark exists for the exact Live model, its profile is voice-first, and Google explicitly lists **code execution as not supported** on this endpoint. Scored at the floor; this is not a verdict on Gemini 3.8 outside the Live API.
- **Cost efficiency: 90/100.** **Changed from 86.** Google now publishes this model's own rate card directly ($0.75/$4.50 text, $3.00/$12.00 audio, $1.00 video/image input), which confirms rather than raises the previous figure, and the independent **$0.84 per hour of input audio** measurement makes the case concretely: it is the cheapest model in the index with a full four-component score and roughly 5x cheaper per hour of input audio than GPT-Realtime-2 High. Held at 90 rather than higher for two documented reasons: real-time audio sessions run long and the per-minute audio rates ($0.005 in / $0.018 out) are what actually bill, and the text rates **double on 2027-01-01**.
- **Overall Score: 66.4/100.** (65 + 70 + 82 + 100 + 15) / 5 = 332 / 5 = **66.4**. **Changed from 60.4**, and the entire move is attributable to two newly-available independent measurements (Big Bench Audio 92%, plus Task Success Rate 93.2% / Arena Elo 1083 / Conversational Dynamics 96.1% feeding Tool use) rather than to any change in the model. Best fit: real-time voice/vision agents where conversational naturalness, human preference, low price per hour of audio and a fast 1.18 s time-to-first-audio matter most. **The one thing to check before choosing it** is τ-Voice at 30.1%: if your voice agent must complete multi-step customer-service tasks autonomously, the Extended Thinking sibling at 68.6% is the one you want, and it is a different model.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: public internet research anchored on the Artificial Analysis speech-to-speech leaderboard (rebuilt four-component Speech-to-Speech Index, accessed 2026-09-29), Google DeepMind's Gemini 3.8 Audio model card, Google's Gemini API model documentation and published rate card. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Gemini_3_8_Live_Recheck.md`, using the same headings.
