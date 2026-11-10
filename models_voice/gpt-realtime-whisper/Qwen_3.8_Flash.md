# GPT Realtime Whisper — findings by Qwen 3.8 Flash

- Source: OpenAI (`opencode/gpt-realtime-whisper`) — voice mirror tree
- Date: 2026‑11‑10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime Whisper (a.k.a. GPT‑Realtime‑Whisper‑1)
- **Short description:** OpenAI's **real-time speech-to-text (ASR) transcription model** in the Realtime API — streaming transcription of live audio. A single-function transcription endpoint, not a conversational or reasoning model. As of 2026‑07 it is **superseded** for accuracy by `gpt-live-transcribe` / `gpt-transcribe`, and trails ElevenLabs/Google/Mistral on real-world error rates.
- **Provider / access:** OpenAI Realtime API; Azure OpenAI hosted route.
- **IDs:** `opencode/gpt-realtime-whisper` (meta).
- **Context window:** curated `meta.json` is a **scaffolded stub** ("128K total", "Text in/out", "Standard pricing") — placeholder; it's audio-in / text-out streaming ASR.
- **Modalities (verified):** audio in → text out (transcription).
- **Pricing:** ~$0.017 (duration-billed; digitalapplied/Azure audio-model table). Stub "Standard pricing" placeholder.

### Raw benchmarks found (exact-ID)

OpenAI's 2026‑07‑29 transcription benchmark (published comparison; GPT‑Realtime‑Whisper‑1 = the exact ID):

- **Common Voice (22 languages):** transcription error rate **20.33 %** (successor `gpt-live-transcribe` 19.70 % — better).
- **Real-World Audio Recording (9 languages):** transcription error rate **11.65 %** (successor `gpt-live-transcribe` 9.60 % — better).
- Independent framing (the‑decoder): OpenAI's newer GPT‑Transcribe "improves on its predecessor but can't catch ElevenLabs, Google or Mistral on error rates" — i.e., GPT‑Realtime‑Whisper sits **behind the top ASR field**.
- Qualitative limitation (OpenAI community, 2026‑07‑23): fails to recognize certain specific/less-common words without keyword prompting (no context-keyword feature on this endpoint).

### Normalized scores (1–100)

> **Poor-fit specialist** (like `jev-1.13`): an ASR endpoint does one thing — turn audio into text. Reasoning/Tool/Coding are near-absent by design; Multimodal (audio understanding) and a modest "text-fidelity" strength dominate. The low Overall is a generative-rubric **mis-fit, not a quality verdict**. Overall = half-up mean of five quality dims, Cost excluded.

- **Tool use: 15/100.** No agentic tool surface; a transcription call. Floor.
- **Reasoning: 15/100.** ASR is perception, not reasoning. Provisional floor.
- **Context window: 45/100.** Streaming chunked audio; stub 128K unverified. Provisional.
- **Multimodal: 88/100.** Audio-in understanding is the core skill (24+ language ASR). Scored high band for audio input, but **capped by measured error rates** (20.33 % CV / 11.65 % real-world; trails top ASR) and word-level recognition gaps. Output is text only.
- **Coding: 10/100.** None. Floor.
- **Cost efficiency: good.** ~$0.017 duration-billed. Excluded from Overall.
- **Overall Score: 35/100.** Mean of Tool 15, Reasoning 15, Context 45, Multimodal 88, Coding 10 = 173/5 = 34.6 → **35**. Best fit: **live/streaming transcription** where low latency and cheap per-minute cost matter more than top-tier accuracy — and note it is **largely superseded** by `gpt-live-transcribe`/`gpt-transcribe`. Read the 35 as "narrow ASR specialist, poor generative-rubric fit."

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑11‑10
- Method: ≥3 qualifying acquisitions (OpenAI "Two New Transcription Models" benchmark comparison carrying GPT‑Realtime‑Whisper‑1 error rates, the‑decoder coverage, digitalapplied/Azure pricing + community word-recognition reports). Scored on the **exact-ID measured error rates** (CV 20.33 %, real-world 11.65 %) + independent "trails top ASR" framing. Flagged: (a) **superseded** by gpt-live-transcribe/gpt-transcribe; (b) **scaffolded stub meta wrong** (modality/pricing placeholders superseded — maintainer to replace); (c) **poor generative-rubric fit** — a single-function ASR endpoint, low Overall is honest.
- Revisit trigger: an independent ASR leaderboard publishes a fresh WER row for `gpt-realtime-whisper`, or the stub meta is replaced with a verified model card.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
