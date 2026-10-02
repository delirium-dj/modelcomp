# GPT-Realtime-2.1 — findings by Space Bunny Alpha

- Source: OpenAI / `gpt-realtime-2.1`
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-2.1
- **Short description:** OpenAI's current-generation **speech-to-speech reasoning
  model** for tool-using voice agents: it listens, reasons, calls tools and speaks
  in one continuous realtime session. The 2.1 update over GPT-Realtime-2 is
  explicitly about robustness rather than raw intelligence — better alphanumeric
  recognition (spelling out account numbers), better silence/noise handling,
  and better interruption behaviour.
- **Provider / access:** OpenAI **Realtime API only** (`/v1/realtime`, WebRTC /
  WebSocket / SIP). Notably, **Chat Completions, Responses, Batch,
  transcription, translation and speech-generation endpoints are all unsupported**
  on this model — there is no text-only path. Also available via Azure OpenAI
  (Foundry version 2026-07-07) and through OpenAI-native agent stacks. Routed on
  Opper and Requesty.
- **Release / knowledge:** shipped in OpenAI's "Advancing voice intelligence"
  Realtime API release (alongside GPT-Realtime-2, -Translate and -Whisper);
  knowledge cutoff **Sep 30, 2024** per OpenAI's model page. Exact release date
  not published on the model page — meetcody.ai records it as "not published".
- **IDs:** `gpt-realtime-2.1` (OpenAI Realtime API, and its own default
  snapshot), `gpt-realtime-2.1` on Azure Foundry. **No OpenCode Zen ID** —
  cost scored on OpenAI list pricing.
- **Context window:** **128,000 tokens** with a **32,000-token max output** —
  4× the context and 8× the output headroom of the original `gpt-realtime`
  (32K / 4,096). Azure documents "~128k conversational context support". No
  long-context retrieval measurement exists at any length.
- **Modalities:** **text, audio, image in; text, audio out** — true
  speech-to-speech with no separate ASR/TTS cascade. Reasoning yes, with
  **configurable `reasoning.effort`** (`minimal`/`low`/`medium`/`high`; OpenAI's
  model page and Azure both document this ladder) and reasoning token support.
  Function calling yes; prompt caching yes. Structured outputs, fine-tuning and
  Batch are **not** supported.
- **Pricing (as of 2026-09-30):** billed in **three separate token classes** —
  text $4 in / $24 out per 1M ($0.40 cached read); **audio $32 in / $64 out per
  1M** ($0.40 cached audio read); image $5 in per 1M. At the high-effort
  setting Artificial Analysis measures **$10.75 per hour of input audio** on the
  Big Bench Audio subset — **2.6× GPT-Realtime-2 High's $4.14/hr**, and the
  third-most expensive voice model in its table. No Zen Free ID.
- **Architecture:** proprietary, closed weights, undisclosed parameters.
  Azure describes the design as "reasoning-first": responses arrive in phases —
  `commentary` → `preamble` (thinking / filler / tool signals) → `final_answer`.

### Raw benchmarks found

> The block below is the **Artificial Analysis Speech-to-Speech Index**,
> measured independently by Artificial Analysis across 32 speech-to-speech
> models. Both 2.1 effort settings are published, with GPT-Realtime-2 as the
> like-for-like predecessor and GPT-Realtime-1.5 / Grok Voice Think Fast 2.0 for
> context. Index = composite of the three components below.

Agent / tool use:

- **τ-Voice: 45.7%** at High effort (Minimal: 38.0%; GPT-Realtime-2 High: 39.8%;
  GPT-Realtime-1.5: 38.8%; Grok Voice Think Fast 2.0 High: **56.5%** — still the
  leader). τ-Voice is the only benchmark that combines verifiable task
  completion in real customer-service domains (flight change, retail dispute,
  telecom) with full-duplex interaction and realistic audio.
- **Task Success Rate: 91.5%** at High (Minimal: 89.4%; GPT-Realtime-2 High
  89.8%; GPT-Realtime-1.5 85.1%) — the share of eligible conversations ending in
  the correct final tool call. This is the metric that matters most for a
  production voice agent, and 2.1 High leads every OpenAI realtime entry.
- **Function calling** is a documented supported feature; no Claw-Eval or
  Tau3-Banking row exists for a speech-to-speech model (the text-agent
  benchmarks are not run on this class).

Conversational dynamics (the dimension 2.1 was specifically improved on):

- **Full Duplex Bench (Conversational Dynamics): 95.7%** at High (Minimal:
  92.7%; GPT-Realtime-2 High 95.3%, Minimal 96.1%). The composite covers pause
  handling, turn-taking, user-interruption handling and backchannel handling.
  Effectively saturated and statistically indistinguishable from its
  predecessor — **which is the point**: OpenAI's stated 2.1 gains were
  interruption/silence/noise handling, and the numbers confirm those were
  already near-ceiling on this benchmark.
- **Arena Preference Elo: 892** at High (Minimal: 896; GPT-Realtime-1.5: 1000 —
  still the highest Elo in the table; Grok Voice Think Fast 2.0 High: 908).
  Human preference actually ranks 2.1 *below* the 1.5 line and below Grok Voice.

Speech reasoning:

- **Big Bench Audio: 96%** at High (Minimal: 87%; GPT-Realtime-2 High: 97%,
  Minimal 72%, Medium 93%; GPT-Realtime-1.5: 81%). Near-ceiling and slightly
  *below* GPT-Realtime-2 High. Only Alibaba's Qwen Audio 3.0 Realtime Plus
  (99.2%) and Gemini 2.5 Flash Native Audio Dialog Thinking (91%) are in the
  same neighbourhood.
- **Time to First Audio: 1.21s** at High (Minimal: **0.97s**; GPT-Realtime-2 High
  1.14s; GPT-Realtime-2 Minimal 1.12s; GPT-Realtime-1.5 0.81s; Deepslate Opal
  0.44s — fastest in the table). The High setting costs +0.24s of latency
  versus Minimal for +9 points of Big Bench Audio.

Text-agent benchmarks:

- Terminal-Bench / SWE-bench / GPQA / HLE / LiveCodeBench / GDPval-AA /
  CritPt / LCR: **no verified public score found.** These endpoints are not
  supported on this model — it is Realtime-API-only, with no Chat Completions or
  Responses route — so the text-agent evaluation suite is structurally
  unavailable rather than merely unpublished. Scores from `gpt-realtime-2` are
  not substituted.

Long context:

- **No long-context retrieval reported.** 128K is a documented spec with no
  MRCR/RULER/GraphWalks measurement, and none is expected to exist for a
  realtime streaming model where per-turn latency dominates.

### Normalized scores (1–100)

- **Tool use: 78/100.** Task Success Rate 91.5% is the best figure in this
  entire dataset and it is the right metric for a voice agent: correct final
  tool call on the conversation, not a single-shot score. τ-Voice at 45.7% is a
  real gain over GPT-Realtime-2's 39.8% but it is **10.8 points behind Grok Voice
  Think Fast 2.0**, and the τ-Voice paper's own headline finding is that *all*
  voice agents trail text agents by 34–54 points even under clean conditions
  (31–51% voice vs 85% GPT-5 reasoning). That gap is the cap, and it is not
  specific to OpenAI.
- **Reasoning: 82/100.** Big Bench Audio 96% is genuinely frontier-grade audio
  reasoning (counting, boolean logic, formal-fallacy detection delivered as
  speech), and it is the closest analogue here to a reasoning measurement since
  no GPQA/HLE row can exist. Held below 90 because 2.1 High is *below* its own
  predecessor GPT-Realtime-2 High (96% vs 97%) on this benchmark, and because
  the model has a **Sep 2024 knowledge cutoff** — over two years stale against
  the frontier, which no benchmark here measures but which bounds factual work.
- **Context window: 55/100.** 128,000 tokens with 32K max output is a genuine
  upgrade over `gpt-realtime` (32K/4,096) and sits in the "100K–200K → 50–64"
  band — but barely, because there is **no long-context retrieval evidence at
  all**, and because a realtime streaming model rarely accumulates anywhere near
  128K of grounded context in a live conversation anyway. The number is real; the
  capability behind it is unmeasured.
- **Multimodal: 95/100.** The strongest dimension by a wide margin and the
  reason this model is in a voice tree at all: **text, audio AND image in, text
  AND audio out** — genuine bidirectional speech-to-speech plus vision, with no
  ASR→LLM→TTS cascade. Per the methodology's tiering, audio input plus non-text
  output is the 90–100 band, and it sits near the top of it because image input
  and tool calling are both present.
- **Coding: 25/100.** **Not a capability claim — an applicability statement.**
  This model cannot be evaluated on any coding benchmark because it has no
  Chat Completions or Responses endpoint, and it is not a coding model. The
  score exists only because `Coding` is a required dimension; anything higher
  would misrepresent a voice model as a coder. Read this row as "not applicable",
  not as "weak".
- **Cost efficiency: 30/100.** The real weakness. At **$10.75 per hour of input
  audio** (AA, High effort) this is the **third-most expensive voice model in
  the comparison**, at 2.6× GPT-Realtime-2 High, 2.4× Gemini 3.1 Flash Live
  High, and 2.2× Grok Voice Think Fast 2.0. Dropping to Minimal effort cuts
  price only marginally ($11.31 — effectively no saving, which is itself an
  anomaly worth noting) while costing 9 points of Big Bench Audio and 0.24s of
  latency. High text output pricing ($24/1M, 50% above `gpt-realtime`'s $16)
  compounds it. The $0.40 cached rate is the only relief.
- **Overall Score: 67/100.** Half-up mean of the five non-cost dims
  ((78 + 82 + 55 + 95 + 25) / 5 = 67.0). **The formula materially distorts this
  model** and that must be said plainly: the 25/100 on Coding is an
  inapplicability artefact dragging a 95-multimodal, 96%-audio-reasoning voice
  model down by seven points. Read the radar, not the Overall. Best fit: **a
  premium voice agent for tool-heavy customer-service or transactional flows
  where task completion matters more than unit economics** — the 91.5% task
  success rate is the best in this dataset. For budget-constrained voice, pick
  Grok Voice Think Fast 2.0 (better τ-Voice *and* 2.2× cheaper) or Gemini 3.1
  Flash Live; for latency-critical work, use Minimal effort at 0.97s TTFA.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-30
- Method: public internet research (Artificial Analysis Speech-to-Speech
  leaderboard, OpenAI API model documentation for `gpt-realtime-2.1`, the τ-Voice
  paper, Microsoft Azure Foundry model catalog, AlphaSignal's Speech-to-Speech
  Index coverage); scores are normalized 1–100 interpretations, not official
  vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_Realtime_3.md`,
  using the same headings.