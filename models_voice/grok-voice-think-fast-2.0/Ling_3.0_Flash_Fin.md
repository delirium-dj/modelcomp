# Grok Voice Think Fast 2.0 — findings by Ling 3.0 Flash

- Source: xAI / SpaceXAI (`xai/grok-voice-think-fast-2.0`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Voice Think Fast 2.0
- **Short description:** xAI's next-generation speech-to-speech voice model with 82.9% Speech-to-Speech Quality Index, ranked #1 on τ-voice agentic performance.
- **Provider / access:** xAI API, grok.com. Voice/audio in and out; text input; reasoning while speaking.
- **Release / knowledge:** 2026-07-29. Default model upgrade August 5, 2026.
- **IDs:** `grok-voice-think-fast-2.0` (xAI API)
- **Context window:** 128,000 tokens
- **Modalities:** Audio/voice in; audio/voice out; text in; reasoning in parallel with speech
- **Pricing (as of 2026-09-23):** $0.08/minute of audio
- **Architecture:** Speech-to-speech model, proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- τ-voice Bench (Agentic): **56.5%** (Artificial Analysis, rank #1)
- Full Duplex Bench: **95.1%** (Artificial Analysis)
- AgentHarm answer rate: **0.08** (xAI official)
- AgentDojo attack success: **0.00** (xAI official)

Reasoning / knowledge:
- AA Speech-to-Speech Quality Index: **82.9%** (Artificial Analysis, rank #2)
- Big Bench Audio (Speech Reasoning): **97.2%** (Artificial Analysis)
- Conversational Dynamics: **95.1%** (Full Duplex Bench)
- No text-only Intelligence Index published

Coding:
- No verified public coding benchmarks
- Voice agent performance: **56.5%** τ-voice (rank #1)
- No SWE-bench, LiveCodeBench, or coding-specific scores published

Long context:
- No specific long-context benchmark published
- Context window: 128,000 tokens (xAI Realtime API)
- Time to First Audio: **0.70s** (rank #1 for <1s)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 60/100.** Exceptional voice agent performance: τ-voice Bench 56.5% (rank #1), Full Duplex 95.1%, AgentHarm 0.08, AgentDojo 0.00. Tool calling via voice is a novel capability.
- **Reasoning: 65/100.** Speech reasoning at 97.2% Big Bench Audio is class-leading. Conversational dynamics at 95.1%. No text-only Intelligence Index available.
- **Context window: 55/100.** 128K context window via xAI Realtime API. No long-context benchmark published for voice domain.
- **Multimodal: 70/100.** Voice/audio input and output with text input. Speech-to-speech is the primary modality. Image input not confirmed.
- **Coding: 35/100.** No verified public coding benchmarks. Voice agent performance (56.5% τ-voice) is the primary agentic measure.
- **Cost efficiency: 90/100.** $0.08/minute of audio. Very cost-effective for voice applications.
- **Overall Score: 57/100.** Mean of the five non-cost dimensions (60 + 65 + 55 + 70 + 35) / 5 = 57.0, rounded half-up to 57.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via xAI news blog, Artificial Analysis, Appwrite, GIGAZINE, and 36kr; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
