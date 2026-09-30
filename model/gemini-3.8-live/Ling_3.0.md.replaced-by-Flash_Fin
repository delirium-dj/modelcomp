# Gemini 3.8 Live — findings by Ling 3.0

> Provided by: **Ling 3.0 (Google/gemini-3.8-live)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.8 Live
- **Short description:** Google's low-latency voice-focused model for real-time dialogue and audio agents; supports interleaved reasoning and built-in audio streaming via the Live API.
- **Provider / access:** Google AI Studio, Google Gemini Live API, Vertex AI
- **Release / knowledge:** 2026-09-15
- **IDs:** google/gemini-3.8-live
- **Context window:** 131,072 tokens input, 65,536 max output
- **Modalities:** Text, images, audio, video input; text and audio output
- **Pricing (as of 2026-09-23):** ~$0.75/$4.50 per million text input/output; audio in $3.00/$12.00 per million tokens
- **Architecture:** Transformer decoder, 131K context, audio-native, interleaved reasoning

### Raw benchmarks found
Agent / tool use:
- Tau-Voice (agentic voice tasks): **30.1%** (DataNorth / Artificial Analysis)
- Speech-to-Speech Index: **82.6** (Extended Thinking variant) (GIGAZINE / DataNorth)
- No verified Terminal-Bench or SWE-bench scores found

Reasoning / knowledge:
- No verified public reasoning benchmark scores found for the base Gemini 3.8 Live model
- Extended Thinking variant outperformed OpenAI GPT-Live-1 on Speech-to-Speech Index

Coding:
- No verified public coding benchmark scores found

Long context:
- 131K token context window; not designed for long-horizon document processing

### Normalized scores (1-100)
- **Tool use: 40/100.** Tau-Voice agentic tasks (30.1%); designed for real-time voice interaction rather than complex tool-use workflows. No verified terminal or coding agent scores.
- **Reasoning: 45/100.** Extended Thinking variant shows competitive reasoning on speech tasks (AA Speech-to-Speech Index 82.6); no verified text-based reasoning benchmarks found for base model.
- **Context window: 35/100.** 131K token input limit is significantly smaller than most frontier models (1M typical); designed for real-time latency, not long-context work.
- **Multimodal: 95/100.** Supports text, image, audio, video input and text + audio output; native audio streaming and voice capabilities; near real-time visual understanding.
- **Coding: 25/100.** No verified public coding benchmark scores; this is a voice/latency-optimized model, not a coding agent.
- **Cost efficiency: 85/100.** $0.75/$4.50 text pricing is competitive; audio pricing at $3/$12 per million tokens is reasonable for real-time voice.
- - **Overall Score: 48/100.** Mean of five non-cost dimensions: (40+45+35+95+25)/5 = 48.

---

## Signature
- Provided by: **Ling 3.0 (Google/gemini-3.8-live)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/gemini-3.8-live/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
