# Grok Voice Think Fast 2.0 — findings by Qwen 3.8 Flash

- Source: xAI (`opencode/grok-voice-think-fast-2.0`) — voice mirror tree
- Date: 2026‑11‑10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Voice Think Fast 2.0 (a.k.a. **Grok Voice 2.0**)
- **Short description:** xAI's **most capable speech-to-speech voice model** as of the 2026‑07‑29 release. Its signature is **reasoning *while* speaking** ("Think Fast") — it emits reasoning tokens in parallel with audio (0.4× tokens/response vs 1.0), so tool calls fire before the first sentence ends, with no latency penalty. Big gains in conversational dynamics and transcription accuracy. `grok-voice-latest` rolled from 1.0 → 2.0 on 2026‑08‑05.
- **Provider / access:** xAI API (`console.x.ai` voice agents); consumer Grok Bot.
- **IDs:** `opencode/grok-voice-think-fast-2.0` (meta); `grok-voice-2.0` (xAI); AA entry "Grok Voice 2.0".
- **Context window:** curated `meta.json` is a **scaffolded stub** ("128K total", "Text in/out", "Standard pricing") — **"Text in/out" is wrong** (audio model). Placeholder.
- **Modalities (verified):** audio in / audio out (speech-to-speech); strong internal transcription.
- **Pricing:** **$0.08 / min of audio** (xAI). AA $4.80/hr. Stub "Standard pricing" placeholder.

### Raw benchmarks found (exact-ID)

Artificial Analysis **Speech-to-Speech** leaderboard, "Grok Voice 2.0" (cited by xAI launch):

- **AA Speech-to-Speech Index: 81.3** (xAI's launch page quoted an earlier **82.9 %** snapshot) · Speech Reasoning (Big Bench Audio): **97.2 %** · Conversational Dynamics (Full Duplex Bench): **95.1 %** · Agentic (τ‑Voice): **56.5 %** · Arena Preference Elo: **991** · Task Success Rate: **94.6 %** · Time to First Audio: **0.70 s** (fastest in this tree).
- **Transcription (vendor eval vs dedicated STT):** across thousands of short phrases in 24 languages, **1.5–2.0× lower WER** than Deepgram Nova 3 and ElevenLabs Scribe v2, ~1.4× better than Grok Voice 1.0, and ~**10× better in noisy/telephony** settings.
- Family context (not this SKU): **Grok Voice 3.0** (2026‑10‑14) = Index 86.9, reasoning 98.5 %, τ‑Voice 71.6 %.

### Normalized scores (1–100)

> Scored on independent AA S2S components + verified specs. "Think Fast" parallel reasoning lifts both agentic speed and speech reasoning. Overall = half-up mean of five quality dims, Cost excluded.

- **Tool use: 68/100.** τ‑Voice 56.5 % (2nd-best in tree after Astra) + Task Success 94.6 %, and tool calls execute before the first sentence finishes — a real agentic advantage.
- **Reasoning: 80/100.** Big Bench Audio **97.2 %** and genuine reasoning-while-speaking (not just shallow dialog). Strong for a voice SKU.
- **Context window: 58/100.** Stub 128K (unverified) → 100K–200K band; flagged scaffolded meta.
- **Multimodal: 90/100.** Audio in/out native S2S with class-leading transcription accuracy; no image/video intake → high band, capped below omni.
- **Coding: 20/100.** Voice agent; no coding benchmark; minimal surface. Provisional.
- **Cost efficiency: good.** $0.08/min is cheap at a frontier S2S index. Excluded from Overall.
- **Overall Score: 63/100.** Mean of Tool 68, Reasoning 80, Context 58, Multimodal 90, Coding 20 = 316/5 = 63.2 → **63**. Best fit: **low-latency, tool-using voice agents** where reasoning-while-speaking and cheap fast audio matter; superseded in-family by Grok Voice 3.0.

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑11‑10
- Method: ≥3 qualifying acquisitions (xAI "Introducing Grok Voice 2.0" launch, **Artificial Analysis Speech-to-Speech** exact-ID row, explainx / datacamp / therundown coverage). Scored on AA components (Index 81.3, reasoning 97.2 %, conv 95.1 %, τ‑Voice 56.5 %, Arena 991, task 94.6 %, TTFA 0.70 s) + vendor WER eval (flagged vendor). Flagged: (a) xAI-cited **82.9 %** vs AA-current **81.3** index logged; (b) **scaffolded stub meta wrong** (modality/pricing placeholders superseded — maintainer to replace); (c) scored **2.0**, not the newer Grok Voice 3.0; (d) voice-agent poor-fit on Coding.
- Revisit trigger: AA refreshes the `grok-voice-2.0`/Think‑Fast row, or independent WER/Full‑Duplex numbers replace the vendor eval.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
