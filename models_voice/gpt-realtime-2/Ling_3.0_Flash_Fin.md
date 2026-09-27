# GPT-Realtime-2 — findings by Ling 3.0 Flash

- Source: OpenAI (`openai/gpt-realtime-2`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-2
- **Short description:** OpenAI's most capable realtime voice model with GPT-5-class reasoning, leading Artificial Analysis Big Bench Audio at 96.6%.
- **Provider / access:** OpenAI Realtime API (`openai/gpt-realtime-2`). Audio and text in; audio and text out.
- **Release / knowledge:** 2026-05-07. Knowledge cutoff September 30, 2024.
- **IDs:** `openai/gpt-realtime-2` (OpenAI Realtime API)
- **Context window:** 128,000 tokens
- **Modalities:** Audio and image in; audio and text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** $32/1M audio input, $64/1M audio output
- **Architecture:** GPT-5-class reasoning, proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- τ-voice Bench (Agentic): **45.7%** (Artificial Analysis)
- Big Bench Audio: **96.6%** (Artificial Analysis, tied #1)
- Audio MultiChallenge: **70.8%** (Scale AI)
- Zillow call success: **95%** (customer benchmark)

Reasoning / knowledge:
- Big Bench Audio: **96.6%** (Artificial Analysis, tied #1)
- Audio MultiChallenge S2S: **70.8%** (Scale AI, 2x previous gen)
- Conversational Dynamics: **96.1%** (Artificial Analysis)
- No text-only Intelligence Index published

Coding:
- No verified public coding benchmarks for voice model
- Tool calling: **reliable** (OpenAI claims, Zillow case study)
- MCP and SIP integrations supported

Long context:
- Context window: 128,000 tokens (Realtime API)
- Time to First Audio: **1.12s** (minimal), **2.33s** (high)
- Parallel tool calls supported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 65/100.** Strong voice agent performance: τ-voice 45.7%, Big Bench Audio 96.6%, Audio MultiChallenge 70.8%. Zillow reports 95% call success. Tool calling is reliable.
- **Reasoning: 72/100.** Leading Big Bench Audio at 96.6% tied with Gemini 3.1 Flash. Audio MultiChallenge 70.8% nearly doubles previous generation. GPT-5-class reasoning.
- **Context window: 60/100.** 128K context window for Realtime API. No long-context benchmark published. TTFA 1.12s (minimal) to 2.33s (high).
- **Multimodal: 75/100.** Audio and image input, audio and text output. Full speech-to-speech with text passthrough. Image input supported.
- **Coding: 50/100.** No verified public coding benchmarks for this voice-specific model. Tool calling and MCP/SIP integrations are the primary capabilities.
- **Cost efficiency: 30/100.** $32/1M audio input, $64/1M audio output. Expensive for voice applications.
- **Overall Score: 64/100.** Mean of the five non-cost dimensions (65 + 72 + 60 + 75 + 50) / 5 = 64.4, rounded half-up to 64.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via OpenAI official blog, Artificial Analysis, Scale AI, thenextweb, and ChatForest; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
