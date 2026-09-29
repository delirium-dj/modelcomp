# Gemini 3.8 Live — findings by Space Bunny Alpha

- Source: Google DeepMind / Google AI Studio (`gemini-3.8-live`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google's low-latency native audio/vision Live API model for real-time voice agents, streamed multimodal dialogue, and asynchronous function workflows.
- **Provider / access:** Google Gemini Live API (`gemini-3.8-live`); Google AI Studio, Gemini app, Vertex AI, and Google Search Live are listed. GA launch stage; Google Cloud lists a release date of 2026-09-24. The Live API uses a stateful WebSocket connection.
- **Release / knowledge:** Announced 2026-09-15; GA. Google Cloud documents a **January 2025 knowledge cutoff** (this fills the gap left on 2026-09-24, when no cutoff was shown). Google model documentation lists a September 2026 stable update.
- **IDs:** `gemini-3.8-live`; do not substitute `gemini-3.8-live-extended-thinking`.
- **Context window:** **131,072 input tokens; 65,536 output tokens** (Google Gemini API model page). Google's DeepMind model card phrases the live family as a "token context window of up to 128K"; BenchLM's catalog also reports 128K. Unchanged from 2026-09-24.
- **Modalities:** Text, images, audio, and video input; text and audio output. Google documents interleaved reasoning, built-in audio streaming, search grounding, function calling, and Live API support. The Live API accepts raw 16-bit PCM audio at 16 kHz and returns 24 kHz PCM audio; JPEG images are supported at up to 1 FPS.
- **Pricing (as of 2026-09-29):** Unchanged from 2026-09-24 — $0.75 per 1M input and $4.50 per 1M output text-equivalent tokens, with the curated route metadata also listing audio pricing of $3/$12 per 1M. Artificial Analysis measures **$0.84 per hour of input audio** on its Big Bench Audio subset. Confirm current Google billing for the exact Live modality mix.
- **Architecture:** Proprietary; Google has not disclosed parameter count.
- **Artificial Analysis coverage:** Gemini 3.8 Live is **not scored on the Intelligence Index v4.3.2** — it is an audio-to-audio model and carries no text-index row. It is scored on the AA Speech-to-Speech Index instead. Do not substitute a sibling model's index value.

### Raw benchmarks found

> Change since 2026-09-24: the AA Speech-to-Speech leaderboard now publishes a full component breakdown for Gemini 3.8 Live. Previously the only measured row in this report was τ-Voice 30.1%. All values below are newly added from the same AA page accessed 2026-09-29.

Agent / tool use:

- τ-Voice (AA Agentic Performance): **30.1%** (Artificial Analysis, accessed 2026-09-29; owner-run full-duplex customer-service task completion, unchanged from the Google-defined row carried on 2026-09-24)
- AA Task Success Rate: **93.2%** (Artificial Analysis Speech-to-Speech, accessed 2026-09-29; proportion of eligible conversations ending in the correct completing tool call)
- AA Arena Preference Elo: **1083** (Artificial Analysis Speech-to-Speech, accessed 2026-09-29; human pairwise preference, tool-calling scenarios only)
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Speech Reasoning (AA Big Bench Audio, 1,000 audio questions adapted from Big Bench Hard): **92.0%** (Artificial Analysis, accessed 2026-09-29) — a genuine audio reasoning measurement that was absent on 2026-09-24
- AA Speech-to-Speech Index: **76.0**, fifth overall among indexed speech-to-speech models (Artificial Analysis, accessed 2026-09-29). Sibling `gemini-3.8-live-extended-thinking` holds first place at 82.6; the previous-generation Gemini 3.1 Flash Live High scores 71.5.
- Conversational Dynamics (AA Full Duplex Bench subset): **96.1%**, fifth in class (Artificial Analysis, accessed 2026-09-29)
- GPQA, HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public score found**

Coding:

- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public score found**

Long context:

- Native context: **131,072 input tokens / 65,536 output** (Google Gemini API model page); Google's DeepMind model card states a context window of up to 128K for the 3.8 Live family. No retrieval-at-length score was found.

Speed / latency:

- Time to First Audio: **1.18 s** (Artificial Analysis Big Bench Audio, accessed 2026-09-29) — faster than Gemini 3.1 Flash Live High (2.99 s) and the 3.8 Live Extended Thinking variant (1.35 s)

Sources consulted: [Google Gemini 3.8 Live model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-live), [Google DeepMind Gemini 3.8 Audio model card](https://deepmind.google/models/model-cards/gemini-3-8-audio/), [Google Cloud Gemini 3.8 Live model page](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-8-live), [Artificial Analysis Speech-to-Speech leaderboard](https://artificialanalysis.ai/speech-to-speech), and [BenchLM Gemini 3.8 Live](https://benchlm.ai/models/gemini-3-8-live), accessed 2026-09-29. The τ-Voice row is kept separate from text-model rankings.

### Normalized scores (1–100)

- **Tool use: 60/100.** Unchanged. τ-Voice task completion of 30.1% is modest, but a 93.2% task success rate and 1083 Arena Elo confirm the function-calling path works reliably; no standard text agent benchmark was found.
- **Reasoning: 62/100.** Changed from 45. Speech Reasoning on Big Bench Audio is now measured at 92.0% and conversational dynamics at 96.1%, replacing the 2026-09-24 position of "no exact reasoning benchmark published." Still no GPQA/HLE/CritPt text row, so the score stops well short of the text-reasoning tier.
- **Context window: 82/100.** Unchanged. The verified 131K input/65K output session (Google states up to 128K for the live family) is useful but below the 200K+ text context tier; no retrieval score was found.
- **Multimodal: 100/100.** Unchanged. Native text, image, audio, and video input with text and audio output is explicitly documented; the audio-to-audio path is the model's defining feature.
- **Coding: 15/100.** Unchanged. No verified coding benchmark exists for the exact Live model, and its profile is voice-first rather than a general coding model.
- **Cost efficiency: 86/100.** Unchanged. $0.75/$4.50 text-equivalent, $3/$12 audio, and a measured $0.84 per hour of input audio are reasonable, but real-time audio and session pricing require careful budgeting.
- **Overall Score: 63.8/100.** (60 + 62 + 82 + 100 + 15) / 5 = 63.8. Up from 60.4 because Reasoning moved 45 -> 62 on newly published AA speech-reasoning evidence. Best fit: real-time voice/vision agents; not a first choice for benchmark-driven coding or text knowledge workloads.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Google's official Live/model documentation, the Google DeepMind model card, Artificial Analysis (Speech-to-Speech Index and component leaderboard, not the Intelligence Index v4.3.2 — this model has no v4.3.2 row), and BenchLM's exact-model evidence ledger. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
