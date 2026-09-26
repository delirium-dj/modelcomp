# Grok Voice Think Fast 2.0 — findings by Mimo v2.6 Flash

- Source: xAI (SpaceXAI) / Grok Voice Think Fast 2.0
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Voice Think Fast 2.0
- **Short description:** xAI's flagship speech-to-speech voice model (Jul 29, 2026) that reasons in parallel with speaking — 0.70s time-to-first-audio, near-2× transcription accuracy gains, and leading voice-agentic scores. Successor to Grok Voice Think Fast 1.0; became the `grok-voice-latest` alias on 2026-08-05. Distinct from text models like Grok 4.x.
- **Provider / access:** xAI Voice API (realtime speech-to-speech over the Voice API / realtime connections), Vercel AI Gateway as `xai/grok-voice-think-fast-2.0` (AI SDK realtime API), grok.com voice surfaces.
- **Release / knowledge:** 2026-07-29 (x.ai announcement); knowledge cutoff not published.
- **IDs:** `grok-voice-think-fast-2.0`; alias `grok-voice-latest` (points at this model since 2026-08-05; pin `grok-voice-think-fast-1.0` to stay on the old one). No OpenCode Zen Free ID verified as of 2026-09-26.
- **Context window:** not published in sources reviewed (realtime voice session model) — no verified public figure found.
- **Modalities:** audio in; audio out (speech-to-speech; separate TTS/STT endpoints on the Voice API); reasoning yes (thinks while speaking, 0.4× reasoning tokens per response vs 1.0); tool calls yes (function calling with faster tool execution — tool calls typically fire before the agent finishes its first sentence); JSON mode: no verified public statement found.
- **Pricing (as of 2026-09-26):** **$0.08 / minute of audio** (x.ai; matches Voice API "Agent" rate). Related Voice API rates: TTS $15.00 / 1M characters, STT $0.10/hr batch and $0.20/hr streaming. Paid; no free API tier verified.
- **Architecture:** proprietary (xAI); parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ-voice Bench (agentic performance over voice, per Artificial Analysis via x.ai): **56.5%** — vs Grok Voice Think Fast 1.0 52.1%, GPT-Realtime-2.1 (High) 45.7%, Gemini 3.1 Flash (High) 37.7%.
- Terminal-Bench 2.0/2.1, Tau2/Tau3, GDPval-AA, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas: no verified public score found (text/terminal harnesses not run on this voice model in sources reviewed).

Reasoning / knowledge:

- Big Bench Audio (speech reasoning, AA via x.ai): **97.2%** (vs 1.0 97.1%, GPT-Realtime-2.1 96.0%, Gemini 3.1 Flash 96.6%).
- GPQA Diamond, HLE, LCR / MLCR, CritPt, Artificial Analysis Intelligence Index, AA-Omniscience: no verified public score found.

Coding:

- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE / Coding Index: no verified public score found.

Multimodal / voice:

- AA Speech-to-Speech Quality Index: **82.9%** (Artificial Analysis via x.ai) — vs 1.0 75.7%, GPT-Realtime-2.1 (High) 79.1%, Gemini 3.1 Flash (High) 69.5%.
- Full Duplex Bench: **95.1%** (vs GPT-Realtime-2.1 95.7%, 1.0 77.8%, Gemini 3.1 Flash 74.3%).
- Time to First Audio: **0.70s** (1.0 1.25s; Gemini 3.1 Flash 2.98s).
- Transcription (xAI internal eval, thousands of phrases, 24 languages): 1.5–2.0× lower WER than Deepgram Nova 3 and ElevenLabs Scribe v2, 1.4× vs 1.0, ~10× in noisy/telephony conditions — vendor-run, no absolute WER published.
- MMMU / image-video input benchmarks: no verified public score found (audio-only input in sources reviewed).

Long context:

- Context window: no verified public figure found; MRCR / RULER: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 60/100.** τ-voice Bench 56.5% leads the whole comparison set (≈11 pts over GPT-Realtime-2.1) and tool calls execute mid-sentence, but no standard agent harness (Terminal-Bench/τ²/GDPval/Claw-Eval) numbers exist — capped at mid-band.
- **Reasoning: 60/100.** Near-ceiling speech reasoning (Big Bench Audio 97.2%) and parallel in-speech thinking are offset by zero general-reasoning evidence (no GPQA/HLE/Intelligence Index row) — audio-domain strength only.
- **Context window: 45/100.** No published window for the voice session model; without a verified figure it cannot claim the ≥100K tiers, so it is scored conservatively in the sub-100K range.
- **Multimodal: 93/100.** Native audio in + audio out puts it in the 90–100 band (topped by 82.9% AA Speech-to-Speech Quality and 95.1% Full Duplex); no image/video input keeps it below the ceiling.
- **Coding: 35/100.** Zero coding-benchmark evidence for a voice-first model — scored low on missing evidence, never on invented numbers.
- **Cost efficiency: 70/100.** Flat $0.08/min of audio is transparent and mid-range for realtime voice agents (no per-token surprises on reasoning bursts), but it is not free and no discount/free tier was verified.
- **Overall Score: 59/100.** Half-up mean of Tool 60, Reasoning 60, Context 45, Multimodal 93, Coding 35 = 58.6. Best fit: production phone/voice agents needing fast, reliable tool calls; not a text reasoning or coding model.

---

## Signature

- Provided by: **Mimo v2.6 Flash (Xiaomi/MiMo-V2.6-Flash)** — 2026-09-26
- Method: fresh public web research (x.ai announcement, Appwrite analysis of the AA-sourced table, Vercel AI Gateway changelog, xAI docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

