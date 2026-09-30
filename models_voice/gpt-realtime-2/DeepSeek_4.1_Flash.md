# GPT-Realtime-2 — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-Realtime-2 (`openai/gpt-realtime-2`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Voice model.** Lives under `models_voice/` per the `RULES.md` voice/speech routing
> rule (path corrected on re-verification 2026-09-27 — the first draft said `voicemodels/`,
> which is not a root in this repo; `RULES.md` routes voice models to `models_voice/` and
> names this model as one of the relocated examples): speech-to-speech is its core
> capability, so text/coding benchmarks are largely inapplicable and are labelled as such
> rather than filled in.

## Model card

- **Name:** GPT-Realtime-2
- **Short description:** OpenAI's speech-to-speech voice model released 2026-05-07 alongside the Realtime API's move from beta to general availability (with GPT-Realtime-Translate and GPT-Realtime-Whisper). It is the first voice model OpenAI built on GPT-5-class reasoning: audio streams in and out continuously with no transcribe→reason→synthesize hop, and reasoning effort is configurable.
- **Provider / access:** OpenAI Realtime API (`v1/realtime`), Live (`v1/live/sessions`), Chat Completions, Responses, transcription and translation endpoints; snapshot/alias `gpt-realtime-2`. Proprietary, closed.
- **Release / knowledge:** Released 2026-05-07 (GA of the Realtime API); knowledge cutoff 2024-09-30 (OpenAI model page).
- **IDs:** `gpt-realtime-2` (OpenAI). No OpenCode Zen Free ID; the free tier is explicitly not supported on OpenAI's own rate-limit table.
- **Context window:** 128,000 tokens with 32,000 max output tokens — a 4× increase over the 32K of the prior realtime generation (OpenAI model page; ChatForest review).
- **Modalities:** audio and text in and out, image in; **video not supported**. Configurable reasoning effort, function/tool calling supported, streaming flag **not** supported on the Realtime/Live surfaces.
- **Pricing (as of 2026-09-27):** text tokens $4.00 / 1M input, $0.40 cached, $24.00 / 1M output; **audio tokens $32.00 / 1M input, $64.00 / 1M output** ($0.40 cached input); image input $5.00 / 1M. A typical conversation lands near **$0.30 per minute** all-in (ChatForest).
- **Architecture:** proprietary GPT-5-class reasoning backbone integrated into a continuous audio stream model; no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- Scale AI Audio MultiChallenge S2S: **70.8%** — nearly double the prior generation's 36.7% — measuring instruction retention and task completion across speech-to-speech sessions
- Artificial Analysis τ-Voice agentic score for **GPT-Realtime-2**: **no verified public score found** in the reviewed sources; the closest published τ-Voice figure is **45.7%** for the later GPT-Realtime-2.1 (High) in xAI's launch comparison table and does not apply to this checkpoint
- Function calling is documented as supported, but no MCP/Toolathon/Claw-Eval result exists for a voice model

Reasoning / knowledge:

- Artificial Analysis Big Bench Audio: **96.6%** — tied #1 with Google's Gemini 3.1 Flash Live (High) at release and roughly 13 points above the previous best result
- GPQA / HLE / MMLU-Pro / AA Intelligence Index: **no verified public score found** (N/A for an audio-native model)

Coding:

- **no verified public score found** — GPT-Realtime-2 is a voice model; coding is delegated to the text model or agent it is paired with, and no code benchmark is published

Long context:

- No MRCR/RULER value exists; the relevant limits are the 128K window, the 32K output cap and per-tier concurrency rates (Tier 1: 200 RPM / 40K TPM; Tier 5: 20K RPM / 15M TPM). No prompt caching or batch path for audio sessions.

### Normalized scores (1–100)

- **Tool use: 78/100.** Tool/function calling runs inside live audio sessions and the 70.8% MultiChallenge S2S result proves multi-step task retention across a call; the cap is the absence of any published τ-Voice/MCP agentic figure for this checkpoint.
- **Reasoning: 80/100.** 96.6% Big Bench Audio with GPT-5-class reasoning and configurable effort is state-of-the-art speech reasoning, but audio-only reasoning has no transferable text benchmark, so it cannot be scored at text-frontier level.
- **Context window: 68/100.** 128K in / 32K out is a 4× jump over the prior realtime generation and generous for voice sessions, yet it is a fraction of the 1M–2M text tiers and has no retrieval benchmark.
- **Multimodal: 90/100.** Native audio in/out plus text in/out and image input in one stream, with no transcription gap — among the broadest realtime modality sets found; video is unsupported, which is the only deduction.
- **Coding: 25/100.** Scored at the non-coding floor tier: no coding benchmark exists, and the architecture explicitly delegates code work to whatever backend model the developer wires in. Treat code work as out of scope.
- **Cost efficiency: 25/100.** At $32/$64 per 1M audio tokens (~$0.30/minute all-in) it is one of the priciest voice options in this scan — roughly 6× GPT-Live-1's $0.05/minute and 3.75× Grok Voice Think Fast 2.0's $0.08/minute — and there is no free tier.
- **Overall Score: 68.2/100.** (78 + 80 + 68 + 90 + 25) / 5 = 68.2. Best fit: latency-tolerant voice agents where reasoning quality inside the call matters more than cost per minute.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-27
- Method: public internet research (OpenAI model documentation for GPT-Realtime-2, ChatForest launch review with the Scale AI and Artificial Analysis figures). **Re-verified 2026-09-27 against OpenAI's own model page: every spec matched exactly** — 128,000 context / 32,000 max output, text $4.00 / $0.40 cached / $24.00, audio $32.00 / $0.40 cached / $64.00, image input $5.00, knowledge cutoff 2024-09-30, image in only with video unsupported, function calling supported, and the Tier 1 200 RPM / 40K TPM → Tier 5 20K RPM / 15M TPM ladder. No corrections were needed. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
