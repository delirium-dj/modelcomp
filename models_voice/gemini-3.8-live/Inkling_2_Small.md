# Gemini 3.8 Live — findings by Inkling 2 Small

- Source: Google DeepMind (`gemini-3.8-live`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google DeepMind's native speech-to-speech model for the Gemini Live API — real-time voice conversation with audio, image and video input feeding synthesized speech output. Successor to Gemini 3.1 Flash Live (Preview); 97-language mid-conversation switching and near-real-time visual input; all audio output watermarked with SynthID.
- **Provider / access:** Gemini Live API (`gemini-3.8-live`), Google AI Studio, Gemini app, Vertex AI, Google Search Live; Gemini Enterprise private preview.
- **Release / knowledge:** 2026-09-15 (launch-era streaming audio eval); knowledge cutoff not publicly stated.
- **IDs:** `gemini-3.8-live` (Live API); `google/gemini-3-8-live` (OpenRouter-style)
- **Context window:** 131,072 tokens per session / 65,536 out (meta); Google Live API session cap.
- **Modalities:** text, image, video, audio in; text, audio out; reasoning NO (non-reasoning SKU; an Extended Thinking sibling exists); tool/function calls not a focus; SynthID-watermarked output.
- **Pricing (as of 2026-11-10):** free via AI Studio unpaid quota; paid text $0.75 / 1M in, $4.50 / 1M out; audio $3.00 / 1M in, $12.00 / 1M out.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ-Voice (task success): **30.1%** (Google model evaluation, Sep 15 2026, default Live variant; voice benchmarks do not feed weighted text-model scores)

Reasoning / knowledge:

- no verified public text-benchmark rows for this ID (BenchLM: 0 of 812; voice evidence display-only)

Coding:

- no verified public coding score found (voice-first model)

Long context:

- 131,072 tokens per session; no verified public long-context retrieval score found

Multimodal:

- Native speech-to-speech + near-real-time visual input + 97 languages (launch/release notes via BenchLM mirror); τ-Voice 30.1% ceiling.

### Normalized scores (1–100)

- **Tool use: 30/100.** τ-Voice task success 30.1% is the one measured number — weak end-to-end task success for a realtime voice agent; capped hard.
- **Reasoning: 40/100.** Provisional — no public text reasoning rows (voice-only eval surface); scored mid-floor pending release of text-side evaluations.
- **Context window: 62/100.** 131,072 tokens per session; session-scoped rather than chat-context class; out 65K.
- **Multimodal: 78/100.** The product: native audio in/out with near-real-time visual input, 97-language mid-conversation switching, SynthID. Weak task success (30.1% τ-Voice) caps this.
- **Coding: 15/100.** Not a coding model — the mandatory text-only floor applied loosely via zero code rows.
- **Cost efficiency: 65/100.** Free AI Studio unpaid tier (data-use caveat); audio $3/$12 per 1M is premium-voice pricing; text $0.75/$4.50.
- **Overall Score: 45/100.** (30 + 40 + 62 + 78 + 15) / 5 = 45.0 → 45. Best fit: low-stakes voice assistants/demos and Search Live-style UIs; validate task success (30% is low) before deployment.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Google model card via BenchLM mirror + voice evaluation page, dataset meta); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.8 Live — BenchLM](https://benchlm.ai/models/gemini-3-8-live)
  - [Gemini 3.8 Audio model evaluation — BenchLM mirror](https://benchlm.ai/voice-benchmarks/gemini-3-8-audio-evaluation)
  - [Gemini 3.8 Audio model card — Google DeepMind](https://deepmind.google/models/model-cards/gemini-3-8-audio/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
