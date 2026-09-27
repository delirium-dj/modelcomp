# GPT-Live-1 (Astra, medium) — findings by Big Pickle

- Source: OpenAI/`gpt-live-1` (full-duplex voice front end) paired with the delegated
  backend `gpt-6-astra` at medium reasoning effort — the configuration tracked by
  Artificial Analysis as "GPT-Live-1 (Astra, medium)", which is what this folder slug
  (`gpt-live-1-astra`) refers to
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Live-1 (Astra, medium) — OpenAI's full-duplex speech-to-speech model,
  paired with GPT-6 Astra (medium reasoning) as the delegated backend agent.
- **Short description:** A voice front end, not a standalone reasoning model: it
  listens and speaks simultaneously, and hands reasoning, tool calls and long work to
  a developer-chosen backend text model. Best fit is tool-heavy spoken customer support
  (airline / retail / telecom / banking) where natural turn-taking matters as much as
  task completion. Distinct from the `GPT-Realtime-*` family, which has a different
  developer contract and must not be used to fill undocumented GPT-Live fields.
- **Provider / access:** OpenAI API — Live sessions only
  (`POST /v1/live/sessions`); Chat Completions, Responses, Realtime and Realtime
  transcription are all explicitly **not supported** for this model. Transports:
  WebRTC, WebSockets, and Telephony/SIP (`sip:PROJECT_ID@sip.api.openai.com`).
  No OpenCode Zen listing — this model is reachable only from the OpenAI API (and
  inside ChatGPT Voice).
- **Release / knowledge:** API release 2026-09-10 ("Build more natural voice
  experiences with GPT-Live-1 in the API"); first introduced in ChatGPT earlier in
  2026. Knowledge cutoff: **Jul 31, 2025** (OpenAI model page).
- **IDs:** `gpt-live-1` (single default snapshot; no dated variants published). The
  backend is configured by the developer and is billed separately — for this folder's
  configuration, `gpt-6-astra` at medium reasoning effort.
- **Context window:** **128,000 tokens** per Live session by default, including
  instructions, conversation text and audio tokens that never appear in the
  transcript (OpenAI "Managing GPT-Live sessions" guide). Startup `instructions` cap
  16,384 tokens; startup `input` history cap 128 messages / 8,192 combined tokens;
  per-event context appends cap 500 tokens. Verified from OpenAI's session
  documentation — this is a *session* budget, not a published long-context retrieval
  result. No max-output-token figure is published for the voice layer.
- **Modalities:** audio + text in, audio + text out; **image and video are explicitly
  unsupported**. Native ASR transcripts and response text, strong alphanumeric
  understanding, keyword biasing, native turn detection. Reasoning: delegated, not
  intrinsic. Tool calls: yes (`function_calling` supported, application-side function
  tools). JSON mode / structured outputs: **not supported** (`structured_outputs` is
  listed as unsupported). Also unsupported: fine-tuning, predicted outputs, batch.
- **Pricing (as of 2026-09-27):** **$0.05 per minute** of voice session, billed per
  second (not rounded up to the next whole minute) — $3.00/hour for the voice layer
  alone. Backend model and tool usage are billed separately at the backend's normal
  rates, so the headline understates a production bill. Artificial Analysis measured
  **$5.83 per hour of input audio** for this configuration on a fixed 40-question
  Big Bench Audio subset, backend tokens included. No free tier: the model page lists
  Free as an unsupported usage tier. Voice cloning (custom voices) is sales-gated, not
  self-serve.
- **Architecture:** proprietary; no weights, parameter count or checkpoint published.
  Single-model listening + speaking over incoming and outgoing audio (no chained
  STT–LLM–TTS), with asynchronous delegation to a backend agent for reasoning and
  tools. Long sessions are handled by background summarization of older history, and
  when context usage exceeds 90% the session transparently starts a replacement voice
  engine seeded with the original instructions plus up to 8,192 tokens of history.

### Raw benchmarks found

Independent figures below are the Artificial Analysis Speech-to-Speech evaluation of
the **GPT-Live-1 (Astra, medium)** configuration. Agentic/arena/task figures for this
configuration rest on **1 trial** (AA's own note), so they are noisier than the
3-trial entries. OpenAI's own launch numbers are listed separately and are
provider-reported against OpenAI's previous Realtime generation, not an independent
ranking.

Agent / tool use:

- τ-Voice (Artificial Analysis, agentic customer support, full-duplex models only): **67.9%** — second in the AA table, behind Gemini 3.8 Live Extended Thinking (High) 68.6% on 3 trials and well ahead of Grok Voice Think Fast 2.0 High 56.5%; this configuration is flagged "based on 1 trial" by AA (Artificial Analysis speech-to-speech leaderboard, read 2026-09-27)
- Tau3 voice pass@1 (OpenAI launch chart, Astra medium backend, airline/retail/telecom equal weight): **83.6%** (OpenAI community announcement quoting the launch post) / **86.2%** (Cocoloop reading of the same chart) vs 45.7% for GPT-Realtime-2.1 — two published readings of one chart, so treat the value as 83.6–86.2% provider-reported; OpenAI also claims **#1 on Tau3** for this pairing
- TauBanking knowledge pass@1 (OpenAI launch chart, Astra medium backend, 97 banking_knowledge tasks): **38.1%** (OpenAI community announcement)
- Full Duplex Bench v3 tool-calling pass@1 (OpenAI launch chart, **Terra low** backend — different pairing): **87%** (OpenAI community announcement)
- Task Success Rate (Artificial Analysis, correct final task-completing tool calls): **87.4%**
- Speech Agent Arena preference Elo (Artificial Analysis, tool-calling tasks only): **1048** — above GPT-Realtime-2.1 High 928 and Grok Voice Think Fast 2.0 High 1011, below Gemini 3.8 Live 1083
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OpenAI vendor claim: **+30 percentage points** on Full Duplex Bench vs GPT-Realtime-2.1; Dograh could not verify it independently and labels it a vendor claim

Reasoning / knowledge:

- Big Bench Audio (Artificial Analysis speech reasoning, 1,000 audio questions adapted from Big Bench Hard): **90%** (90.1% per AlphaSignal) — behind Grok Voice 97.2% and Qwen Audio 3.0 99.2%
- Full Duplex Bench v3 response quality (OpenAI launch chart, Terra low backend): **90%**
- Artificial Analysis Speech-to-Speech Index: **81.5**, #2 of the measured configurations (Gemini 3.8 Live Extended Thinking High 82.6 leads; Grok Voice Think Fast 2.0 High 81.3)
- Conversational Dynamics (Full Duplex Bench v1 + v1.5 subset — pause handling, turn taking, interruption handling, backchannel handling): **94.9%** (this config) / **97.3%** for the Sol-low config, #2 on that sub-metric
- Turn-taking latency (OpenAI launch chart): **0.798 s** vs 1.41 s for GPT-Realtime-2.1
- Time to first audio (Artificial Analysis, Big Bench Audio): **1.34 s** — vs Grok Voice 0.70 s, Gemini 3.8 Live 1.18 s, Deepslate Opal 0.44 s
- GPQA Diamond / HLE / LCR / CritPt / Omniscience / Hallucination Rate: no verified public score found for `gpt-live-1` itself. (ChatGPT-side system evals of GPT-Live-1 against Advanced Voice Mode — GPQA 84.2%, BrowseComp 75.2% at "high" — measure a ChatGPT configuration with a different backend, not this API model, and are not used here.)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found — no coding benchmark
  exists for a speech-to-speech front end. The documented path to coding work is
  delegation: OpenAI publishes a Codex SDK integration where the app hands a repo
  thread to GPT-Live-1 and the assistant speaks the result back.

Long context:

- no long-context retrieval reported. The 128,000-token session budget is documented,
  but no RULER / MRCR / GraphWalks / recall-at-length figure is published for
  `gpt-live-1`, and OpenAI's design summarizes older history in the background and
  swaps the voice engine above 90% usage — so the window is a working budget rather
  than a measured retrieval capability.

### Normalized scores (1–100)

- **Tool use: 88/100.** τ-Voice 67.9% (AA, #2 in table on a 1-trial basis) plus Task
  Success Rate 87.4% and OpenAI's 83.6–86.2% Tau3 voice pass@1 put spoken tool use at
  or above the methodology's frontier band for τ-bench-style tasks. Capped below 95
  because the score is a *system* score (voice front end + GPT-6 Astra + tools +
  harness) rather than an isolated model number, rests on 1 AA trial, and drops
  sharply on knowledge retrieval (TauBanking 38.1%).
- **Reasoning: 82/100.** Big Bench Audio 90.1% is a real measured audio-reasoning
  figure, and the Speech-to-Speech Index 81.5 ranks #2. Capped by architecture —
  reasoning is delegated to a backend, so the voice model is not the reasoner — and by
  a Jul 31, 2025 knowledge cutoff that is ~14 months stale as of today.
- **Context window: 56/100.** 128,000-token default Live session context sits in the
  100K–200K methodology band (50–64). Not higher: no published retrieval benchmark at
  length, automatic background summarization of older turns, and an engine swap above
  90% usage mean the number describes a session budget, not a retrieval result.
- **Multimodal: 94/100.** Native audio in **and** audio out plus text in/out — the top
  of the methodology's audio band (90–100), and the strongest measured conversational
  dynamics in its class (94.9% here, 97.3% for the Sol-low pairing). Held under the
  ceiling because image and video input are explicitly unsupported, and
  backchanneling is described as basic short acknowledgements.
- **Coding: 20/100.** No verified public coding benchmark exists for `gpt-live-1` —
  every coding row above reads "no verified public score found". This is an
  evidence-floor assignment, not a measurement: the model can emit text and hand repo
  work to Codex, so it is not zero, but nothing published supports a higher value.
  Do not read this as a coding-benchmark result.
- **Cost efficiency: 62/100.** Paid only — $0.05/min voice ($3.00/hour) plus a
  separately billed backend; AA measured $5.83 per hour of input audio including
  backend tokens for this configuration. That is mid-field among full-duplex models:
  dearer than Gemini 3.8 Live ($0.84) and Qwen Audio 3.0 Realtime Plus ($4.42),
  cheaper than GPT-Realtime-2.1 High ($10.75), close to Grok Voice ($4.80). The
  headline per-minute price understates the real bill, which is why this is not
  scored near the top of the band.
- **Overall Score: 68/100.** (88 + 82 + 56 + 94 + 20) / 5 = 68.0. Best fit: tool-heavy
  spoken customer-support and telephony agents where turn-taking quality and
  end-to-end task completion both matter, with a reasoning backend you control. Poor
  fit as a general-purpose or coding model — the low Context and Coding dims are the
  binding constraints, and both come from the fact that this is a voice layer with a
  delegate, not a standalone model.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-27
- Method: public internet research (Artificial Analysis speech-to-speech leaderboard
  and methodology, OpenAI's GPT-Live-1 launch post and API documentation, BenchLM's
  mirrored voice-benchmark profile, plus dated third-party coverage). Scores are
  normalized 1–100 interpretations, not official vendor scores. Agentic numbers for
  this configuration carry a 1-trial caveat; OpenAI's own launch numbers are marked
  provider-reported, and the Tau3 chart has two published readings.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same
  headings.
