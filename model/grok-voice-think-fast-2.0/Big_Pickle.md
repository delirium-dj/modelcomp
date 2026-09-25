# Grok Voice Think Fast 2.0 — findings by Big Pickle

- Source: xAI `grok-voice-think-fast-2.0` (alias `grok-voice-latest`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Voice Think Fast 2.0 (SpaceXAI / xAI; not a Free-tier model)
- **Short description:** Announced 2026-07-29 as the second generation of xAI's speech-to-speech voice model, and the current `grok-voice-latest` alias since **2026-08-05**. The defining design choice is that it **reasons in parallel with speech** — audio in, audio out, thinking through the query mid-response — rather than transcribing, handing text to a separate reasoner, and re-synthesising. That is why it gets meaningfully smarter without paying for it in latency. It leads the field on agentic voice performance (τ-voice Bench 56.5%, roughly 11 points clear of GPT-Realtime-2.1), halves time-to-first-audio to 0.70 s, and beats dedicated transcription engines at their own job. The catch is a **60% automatic price rise** to $0.08/min that landed on every `grok-voice-latest` caller on 2026-08-05 with no deploy required.
- **Provider / access:** xAI **Speech to Speech API** over WebSocket — `wss://api.x.ai/v1/realtime?model=grok-voice-think-fast-2.0`. **Fully OpenAI Realtime API compatible**: most OpenAI client libraries work by changing the base URL and the model string. Voices are shared across the Speech-to-Speech and Text-to-Speech APIs and are fetchable via `GET /v1/tts/voices`; iOS tester app in the xAI cookbook. iOS reference implementations at `github.com/xai-org/xai-cookbook`.
- **Release / knowledge:** Announced **2026-07-29**; `grok-voice-latest` repointed from `grok-voice-think-fast-1.0` on **2026-08-05**. Model `grok-voice-think-fast-1.0` is now **deprecated** ($0.05/min). **Knowledge cutoff not published** for the voice models.
- **IDs:** `grok-voice-think-fast-2.0`, alias `grok-voice-latest`. Pin the versioned name in production — xAI's own guidance, because the floating alias has already moved once and repriced the bill 60% when it did.
- **Context window:** **Not published — for this model or its predecessor, by xAI or any tracker.** The binding limits are operational instead: **10 concurrent sessions per team** and a **120-minute maximum session duration**. Both matter more than a token window for a realtime voice agent, and the 10-session cap in particular is a hard ceiling that no amount of benchmark quality works around. Note a documentation inconsistency: the machine-readable `grok-voice-think-fast-2.0.md` page lists modalities as "text → text" with an empty pricing table, while the Speech to Speech API page correctly lists **Text, Audio → Text, Audio**. The API page is the accurate one.
- **Modalities:** **Text, Audio → Text, Audio.** Native full-duplex audio in and out, text in and out, with reasoning in parallel. Capabilities: function calling, web search, X search, collections search, **remote MCP tools**. Transcription covers **24 languages** including English, Spanish, Portuguese, Arabic, Chinese, Japanese and Hindi, with regional variants (Spanish Spain vs Mexico; Arabic across Saudi Arabia and the UAE).
- **Pricing (as of 2026-09-26):** **$0.08 per minute of audio ($4.80/hour), plus $0.004 per text-input message.** Billing is per minute of audio sent or received, not per token — a deliberate design choice so a call's cost is predictable from its duration alone. `function_call_output` items (tool results) are not billed; `response.create` is not billable. The deprecated 1.0 was $0.05/min ($3.00/hr). No free tier. Related xAI rates for comparison: Speech-to-Text $0.10/hr REST / $0.20/hr streaming, Text-to-Speech $15.00/1M chars.
- **Regions:** the current model page lists `us-east-1`, `eu-west-1` and `us-saltlake-2`; the Voice Agent API page as of late July 2026 listed `us-east-1` only, so EU residency appears to have been added after launch. Worth re-checking before committing, since us-east-1-only was flagged as a blocker for EU deployment at launch.
- **Architecture:** Proprietary. Uses **~0.4x the reasoning tokens per response** of version 1.0 at the median. The practical consequence xAI highlights: a tool call usually completes before the end of the agent's first sentence, so the backend request is already in flight while the model is still saying "let me pull that up."

### Raw benchmarks found

xAI's published speech-to-speech comparison, sourced from Artificial Analysis (vendor-reported, run against a third-party suite):

| Benchmark | Grok Voice Think Fast 2.0 | Grok Voice Think Fast 1.0 | GPT-Realtime-2.1 (High) | Gemini 3.1 Flash (High) |
|---|---|---|---|---|
| AA Speech-to-Speech Quality Index | **82.9%** | 75.7% | 79.1% | 69.5% |
| Big Bench Audio (speech reasoning) | **97.2%** | 97.1% | 96.0% | 96.6% |
| Full Duplex Bench (conversational dynamics) | 95.1% | 77.8% | **95.7%** | 74.3% |
| τ-voice Bench (agentic performance) | **56.5%** | 52.1% | 45.7% | 37.7% |
| Time to First Audio | **0.70 s** | 1.25 s | not reported | 2.98 s |

Independent placement (eesel AI review, 2026-08-04, working from xAI's docs, model card and rate card):

- AA Speech-to-Speech Quality Index 82.9% is **second overall**, behind Alibaba's Qwen Audio 3.0 Realtime Plus at 84.1% — xAI's table only compares against GPT-Realtime-2.1 and Gemini 3.1 Flash
- 0.70 s time-to-first-audio is **third**, behind Deepslate Opal and a Gemini Flash variant

Transcription, word error rate (lower is better; xAI, thousands of short phrases, 24 languages):

- **1.5–2.0x lower error** than Deepgram Nova 3 and ElevenLabs Scribe v2, both purpose-built transcription models
- **1.4x lower error** than Grok Voice Think Fast 1.0
- **~10x lower error under noise and telephony compression**, where the gap to dedicated STT widens most — the condition a contact centre actually runs in

Production evidence:

- A/B tested on Starlink's support line (+1 888 GO STARLINK): xAI reports increases in both sales conversion rate and support containment rate — **magnitudes not published**

Conversation quality (xAI RL claims, not benchmarked): shorter sentences, one question at a time, no filler or preamble.

Everything else — GPQA Diamond, AIME 2025, HLE, MMLU-Pro, SciCode, SWE-bench, Terminal-Bench, CursorBench, LiveCodeBench, Vibe Code Bench, GDPval-AA, AA-Briefcase, AA-LCR, MMMU-Pro, LMArena, EQ-Bench, Creative Writing v3, Claw-Eval: **no verified public score found**, and none is expected for a speech-to-speech model.

### Normalized scores (1–100)

- **Tool use: 77/100.** The clear strength, and the only voice model in this comparison with a real agentic number: **τ-voice Bench 56.5%**, the best in xAI's table by roughly 11 points over GPT-Realtime-2.1 and 19 over Gemini 3.1 Flash. Driving multi-step tool-using workflows over voice is exactly what production voice agents need, and the tool surface is complete — function calling, web search, X search, collections search and remote MCP. The 0.4x reasoning-token profile is what makes it usable, since a tool call usually fires before the model's first sentence ends. 77 rather than higher because 56.5% absolute still means roughly half of multi-step voice workflows fail, and because no second independent agentic measurement exists.
- **Reasoning: 70/100.** **Big Bench Audio at 97.2%** looks commanding until you notice 1.0 scored 97.1%, Gemini 3.1 Flash 96.6% and GPT-Realtime-2.1 96.0% — speech comprehension is saturated and no longer differentiates anyone. The real reasoning signal is the AA Speech-to-Speech Quality Index at 82.9% (second globally behind Qwen Audio 3.0 Realtime Plus) and the τ-voice result. 70 reflects genuinely good in-conversation reasoning on a hard realtime task, discounted for having no GPQA, AIME, HLE or MMLU measurement at all.
- **Context window: 40/100.** **No context window is published for this model anywhere** — not by xAI, not by any tracker — so the ≥200K bands cannot be claimed on spec, and no long-context retrieval result exists. The dimension is scored on what *is* documented: a 120-minute session cap and a 10-concurrent-session-per-team ceiling. For a realtime voice agent those, not tokens, are the real context constraints, and 40 reflects a model that cannot be given a large document and expected to reason over it.
- **Multimodal: 92/100.** The highest-scoring dimension by a wide margin, and legitimately so: **native audio in, audio out** with full duplex, plus text on both sides. The transcription evidence is unusually strong for a voice model — 1.5–2.0x better word error rate than Deepgram Nova 3 and ElevenLabs Scribe v2, ~10x better under telephony compression, across 24 languages with regional variants. Not 100 because output is audio and text only (no image input, no video), and because the accuracy figures are xAI's own evaluation rather than an independent one.
- **Coding: 40/100.** **Out of scope and unmeasured.** Grok Voice Think Fast 2.0 makes no coding claim and has no SWE-bench, Terminal-Bench, CursorBench, LiveCodeBench or SciCode result. It can obviously emit code as speech or text, but nothing has been measured, so this dimension is scored at the constrained/unknown floor rather than inferred from the Grok family's text-model performance. Read this score as "not applicable", not as a weakness.
- **Cost efficiency: 90/100.** **$0.08 per minute flat, with no per-token exposure** — the single best property of this pricing model. A call's cost is known from its duration before it happens, with no verbosity multiplier, which is exactly the failure mode that makes per-token voice billing unpredictable. It lands precisely on ElevenLabs Agents' effective ~$0.08/min across every paid tier, and xAI's own framing ("we believe pricing should be predictable and transparent") is a fair description of the design. Held at 90, not higher, because the deprecated 1.0 was **$0.05/min** — a 37.5% cheaper rate that this model gave up, and because the rise was applied automatically to every `grok-voice-latest` caller on 2026-08-05, which is worth budgeting for before it appears on an invoice. The $0.004/text-message charge is trivial by comparison.
- **Overall Score: 63.8/100.** Mean of the five quality dims: (77 + 70 + 40 + 92 + 40) / 5. **Read this number with the shape of the model in mind, not as a verdict on it.** Context and coding are scored at the floor because a realtime speech-to-speech model has no published context window and no coding benchmark — two dimensions it was never built for, which together drag the mean down by roughly 20 points. The three dimensions it *is* built for are all strong: **tool use 77, multimodal 92, reasoning 70**. **Best fit — the best-scoring voice agent model in this comparison, and the one to reach for when audio is the interface.** It leads agentic voice tool use by double digits, gets to first audio in 0.70 s, holds up under phone-line compression better than dedicated transcription models, and is priced per minute so the bill is knowable in advance. Two operational checks before you commit: the **10 concurrent sessions per team** cap, and the **60% price increase** that already hit every floating-alias caller on 2026-08-05.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-26
- Method: public internet research (xAI Speech-to-Speech API docs, `grok-voice-think-fast-2.0` model page, xAI announcement `x.ai/news/grok-voice-think-fast-2`, xAI release notes, xAI pricing page, Appwrite technical write-up of the launch table, eesel AI independent review); scores are normalized 1–100 interpretations, not official vendor scores. Every number above carries its source; missing rows are stated as "no verified public score found" rather than estimated, vendor-reported third-party-suite results are labelled as such, and independent placements that contradict xAI's own framing (Qwen Audio 3.0 at 84.1%, Deepslate Opal on latency) are reported rather than omitted.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
