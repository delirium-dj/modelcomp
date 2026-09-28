# GPT-Live-1 Astra — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-Live-1, Astra backend (`openai/gpt-live-1`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Voice model.** Lives under `models_voice/` per the `RULES.md` voice/speech routing
> rule (path corrected on re-verification 2026-09-27: the first draft said `voicemodels/`,
> but this file resides in `models_voice/gpt-live-1-astra/`, and `voicemodels/` holds only
> other agents' files). "Astra" is the backend/reasoning configuration under which GPT-Live-1
> tops the Artificial Analysis Speech to Speech Index; the voice layer itself is `gpt-live-1`.

## Model card

- **Name:** GPT-Live 1 (folder slug `gpt-live-1-astra`)
- **Short description:** OpenAI's third-generation voice model and its first full-duplex one: it listens and speaks at the same time, with no turn-detector in the audio path, and deliberately stays a **voice layer** — deeper reasoning and tool use are delegated to a backend model (for example the Astra/Sol backends, Codex or ChatGPT Work) that bills separately. Shipped inside ChatGPT Voice in July 2026 and opened to the API on 2026-09-10.
- **Provider / access:** OpenAI Live API (`v1/live/sessions`), with Realtime, Responses, Chat Completions, Assistants and Batch endpoints available; snapshot `gpt-live-1`. Free inside ChatGPT (as `gpt-live-1 mini`) on its plans; API access is paid and OpenAI's API free tier is not supported. Proprietary, closed.
- **Release / knowledge:** ChatGPT Voice July 2026; API release 2026-09-10; knowledge cutoff 2025-07-31 (OpenAI model page).
- **IDs:** `gpt-live-1`; the ChatGPT product tier ships `gpt-live-1 mini`. No OpenCode Zen Free ID.
- **Context window:** **no token window published** on the model page; the documented limits are concurrency-based (Free API tier: not supported; Tier 1: 25 → Tier 5: 500 concurrent sessions) plus the backend model's limits for delegated calls.
- **Modalities:** audio and text in, audio and text out. Image and video are explicitly **not supported**. Streaming supported, function calling supported, structured outputs and fine-tuning not supported.
- **Pricing (as of 2026-09-27):** **$0.05 per minute** of session duration, billed per second with no rounding up, for the voice layer alone; backend model and tool usage bills at that model's normal rates. Independent reviews name this split as the model's main cost caveat.
- **Architecture:** proprietary full-duplex speech model; reasoning is offloaded rather than performed in-loop, which keeps latency conversational.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Speech to Speech Index **81.5 — #1 overall** (Astra backend, medium reasoning effort). The index is an equal-weighted composite of Speech Reasoning, τ-Voice agentic performance, Arena preference and Task Success Rate, so GPT-Live-1 must hold qualifying τ-Voice and task-success results, but the **individual τ-Voice value is not published in the sources reviewed**
- Function calling is documented as supported and delegation to backend agents is the designed tool path; no MCP-Atlas/Toolathon row exists for voice models
- Production anecdotes with numbers: Speak reported ~**80% fewer interrupted thinking-pauses** versus prior turn-based systems; Yelp reported higher call-handling rates for Yelp Host with no figure published

Reasoning / knowledge:

- Artificial Analysis Speech to Speech Index: **81.5** at **medium** reasoning effort (Astra backend) versus **80.1** on the Sol backend — a 1.4-point backend spread that AA exposes in the configuration name itself
- Full Duplex Bench (conversational dynamics): **97.3%** for GPT-Live-1 (Sol, low) — third overall, behind StepAudio 3 Realtime (98.9%) and Qwen Audio 3.0 Realtime Plus (98.4%)
- Big Bench Audio (speech reasoning) for GPT-Live-1 specifically: **no verified public score found** in the reviewed sources; GPQA / HLE / MMLU-Pro / AA Intelligence Index: **no verified public score found** (audio-native model)

Coding:

- **no verified public score found** — GPT-Live-1 publishes no code benchmark; the model is explicitly a voice front end that delegates code work to backend agents


Long context:

- No MRCR/RULER value and no published token window; the binding limits are the concurrent-session caps (25/50/200/300/500 by tier) and the backend model's context for delegated reasoning.

### Normalized scores (1–100)

- **Tool use: 80/100.** Full-duplex sessions with documented function calling and designed delegation to backend agents score well, and the #1 AA index implies qualifying τ-Voice results; capped because no τ-Voice/Toolathon number is published for this checkpoint and every tool action costs a second, separately billed model call.
- **Reasoning: 82/100.** Rank 1 on the Speech-to-Speech Index at only medium effort (81.5 vs Grok Voice Think Fast 2.0's 81.3 at High) is the strongest available evidence, but reasoning is delegated rather than native and no Big Bench Audio figure is published for it.
- **Context window: 70/100.** Voice-tier score: no token window exists and the 25–500 concurrent-session ladder is the operative ceiling, with the API free tier excluded entirely.
- **Multimodal: 80/100.** Native full-duplex audio in/out plus text in/out with best-in-class turn-taking, but image and video are explicitly unsupported — one modality band below the audio-plus-image voice models.
- **Coding: 15/100.** Non-coding floor tier: no code benchmark, and the architecture delegates all code execution to a separately billed backend model.
- **Cost efficiency: 72/100.** $0.05/minute ($3.00/hour) for the voice layer is 1.6× cheaper than Grok Voice Think Fast 2.0 and far below GPT-Realtime-2's audio rates, but backend reasoning and tool calls bill on top, so true cost per conversation is opaque.
- **Overall Score: 65.4/100.** (80 + 82 + 70 + 80 + 15) / 5 = 65.4. Best fit: embeddable voice front ends where a stronger text model already sits behind the conversation and only the speech layer is being bought.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-27
- Method: public internet research (OpenAI GPT-Live 1 model documentation, Artificial Analysis Speech-to-Speech Index, release coverage and independent hands-on reviews). **Re-verified 2026-09-27 against OpenAI's own model page: every spec matched exactly** — $0.05/min billed per second, knowledge cutoff 2025-07-31, image and video explicitly unsupported, function calling supported, structured outputs and fine-tuning unsupported, and the 25/50/200/300/500 concurrent-session ladder by tier with the API free tier excluded. No corrections were needed. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

