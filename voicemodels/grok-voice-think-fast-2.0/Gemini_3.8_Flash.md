# Grok Voice Think Fast 2.0 — findings by Gemini 3.8 Flash

- Source: xAI / Grok (`xai/grok-voice-think-fast-2.0`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Voice Think Fast 2.0
- **Short description:** xAI's next-generation speech-to-speech foundation model that reasons in parallel while speaking, featuring ultra-fast time to first audio (0.70s), high-accuracy noise-resilient transcription, and agentic voice tool calling.
- **Provider / access:** xAI API (`grok-voice-think-fast-2.0`, `grok-voice-latest`), Grok Voice Bot, and x.ai voice endpoints.
- **Release / knowledge:** 2026-07-29 release; knowledge cutoff mid-2026.
- **IDs:** `xai/grok-voice-think-fast-2.0`. No Zen Free tier available.
- **Context window:** 128,000 tokens total (128K context window).
- **Modalities:** Native bidirectional audio and text input; audio and text output; parallel chain-of-thought reasoning while speaking.
- **Pricing (as of 2026-07):** $0.08 / minute of audio.
- **Architecture:** Speech-to-speech native transformer with interleaved latent reasoning tokens executing concurrently with acoustic token streaming.

### Raw benchmarks found

Agent / tool use:

- Tau-voice Bench: **56.5%** (Artificial Analysis / xAI announcement, Jul 2026)
- Full Duplex Bench (Conversational Dynamics): **95.1%** (Artificial Analysis / xAI, Jul 2026)
- Time to First Audio (TTFA): **0.70s** (Artificial Analysis, Jul 2026)

Reasoning / knowledge:

- Big Bench Audio (Speech Reasoning): **97.2%** (Artificial Analysis / xAI, Jul 2026)
- AA Speech-to-Speech Quality Index: **82.9%** (Artificial Analysis, Jul 2026)
- GPQA Diamond: no verified public score found

Coding:

- Spoken technical explanations and interactive voice coding assistance.
- SWE-bench Verified: no verified public score found

Long context:

- 128K context window with streaming conversational buffer.

### Normalized scores (1–100)

- **Tool use: 78/100.** Fast speech-concurrent tool execution demonstrated by 56.5% on Tau-voice Bench and 95.1% on Full Duplex Bench.
- **Reasoning: 80/100.** High-level speech reasoning indicated by 97.2% on Big Bench Audio and 82.9% on AA Speech-to-Speech Quality Index.
- **Context window: 68/100.** 128K context window fits conversational audio sessions, matching the standard 128K tier.
- **Multimodal: 90/100.** Native bidirectional speech-to-speech omni-audio understanding with 0.70s response latency and superior noisy-environment transcription.
- **Coding: 60/100.** Conversational code guidance and developer voice assistant support, but not an autonomous coding agent.
- **Cost efficiency: 85/100.** Simple, predictable, and economical pricing at $0.08 per minute of audio.
- **Overall Score: 75/100.** Leading real-time voice intelligence model combining parallel reasoning with low-latency spoken dialogue and voice tool execution.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into xAI official release reports and Artificial Analysis speech evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
