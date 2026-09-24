# Gemini 3.8 Live — findings by Space Bunny Alpha

- Source: Google DeepMind / Google AI Studio (`gemini-3.8-live`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google's low-latency native audio/vision Live API model for real-time voice agents, streamed multimodal dialogue, and asynchronous function workflows.
- **Provider / access:** Google Gemini Live API (`gemini-3.8-live`); Google AI Studio, Gemini app, Vertex AI, and Google Search Live are listed. The Live API uses a stateful WebSocket connection.
- **Release / knowledge:** Google model documentation was updated September 2026; the model index lists a September 2026 stable update. No knowledge cutoff was shown.
- **IDs:** `gemini-3.8-live`; do not substitute `gemini-3.8-live-extended-thinking`.
- **Context window:** **131,072 input tokens; 65,536 output tokens** (Google model documentation). BenchLM's catalog reports 128K context; Google model page limits are used here.
- **Modalities:** Text, images, audio, and video input; text and audio output. Google documents interleaved reasoning, built-in audio streaming, search grounding, function calling, and Live API support. The Live API accepts raw 16-bit PCM audio at 16 kHz and returns 24 kHz PCM audio; JPEG images are supported at up to 1 FPS.
- **Pricing (as of 2026-09-24):** BenchLM reports $0.75 per 1M input and $4.50 per 1M output text-equivalent tokens. The curated route metadata also lists audio pricing of $3/$12 per 1M; confirm current Google billing for the exact Live modality mix.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- τ-Voice task success: **30.1%** (Google owner-defined model evaluation, September 15, 2026; displayed separately by BenchLM and not a weighted text-model score)
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA, HLE, LCR/MLCR, CritPt, hallucination metrics, and an independent Artificial Analysis/BenchLM composite: **no verified public score found**
- Google's documentation confirms interleaved reasoning, but no exact reasoning benchmark value is published in the reviewed sources.

Coding:

- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public score found**

Long context:

- Native context: **131,072 input tokens / 65,536 output** (Google model documentation); no retrieval-at-length score was found.

Sources consulted: [Google Gemini 3.8 Live model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live), [Google Gemini Live API overview](https://ai.google.dev/gemini-api/docs/live), and [BenchLM Gemini 3.8 Live](https://benchlm.ai/models/gemini-3-8-live), accessed 2026-09-24. The τ-Voice row is explicitly owner-defined and is kept separate from text-model rankings.

### Normalized scores (1–100)

- **Tool use: 60/100.** Google documents search grounding and function calling in a low-latency Live API, but τ-Voice 30.1% is the only surfaced measured task and no standard agent benchmark was found.
- **Reasoning: 45/100.** Interleaved reasoning is a documented capability, but no exact GPQA/HLE/AA reasoning result is available.
- **Context window: 82/100.** The verified 131K input/65K output session is useful but below the 200K+ text context tier; no retrieval score was found.
- **Multimodal: 100/100.** Native text, image, audio, and video input with text and audio output is explicitly documented; the audio-to-audio path is the model's defining feature.
- **Coding: 15/100.** No verified coding benchmark exists for the exact Live model, and its profile is voice-first rather than a general coding model.
- **Cost efficiency: 86/100.** The reported $0.75/$4.50 text-equivalent price and $3/$12 audio route are reasonable, but real-time audio and session pricing require careful budgeting.
- **Overall Score: 60.4/100.** (60 + 45 + 82 + 100 + 15) / 5 = 60.4. Best fit: real-time voice/vision agents; not a first choice for benchmark-driven coding or knowledge workloads.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Google's official Live/model documentation and BenchLM's exact-model evidence ledger; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
