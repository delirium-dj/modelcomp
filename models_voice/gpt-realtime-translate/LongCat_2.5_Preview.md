# GPT-Realtime-Translate — findings by LongCat 2.5 Preview

- Source: OpenAI (`openai/gpt-realtime-translate`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-Translate
- **Short description:** OpenAI's streaming speech-to-speech translation model for live multilingual audio; returns translated audio plus transcript deltas while source audio is still arriving.
- **Provider / access:** OpenAI Realtime Translation API `v1/realtime/translations` (WebRTC or WebSocket); OpenCode Zen `openai/gpt-realtime-translate`. Not available via standard Realtime, Chat Completions, or Responses APIs.
- **Release / knowledge:** Released 2026-05-07; knowledge cutoff Sep 30, 2024.
- **IDs:** `openai/gpt-realtime-translate` (Zen); translation endpoint model ID `gpt-realtime-translate`
- **Context window:** 16,000 tokens; max output 2,000 tokens
- **Modalities:** audio in; audio + text out; no tool calls; no reasoning; streaming only
- **Pricing (as of 2026-09-29):** $0.034 per minute of audio (~$2.04/hour); priced by audio duration, not tokens. No free tier.
- **Architecture:** proprietary; dedicated streaming translation model (interpreter, not assistant)

### Raw benchmarks found

Agent / tool use:

- No tool-call capability (by design — interpreter model); no verified public benchmark applicable

Reasoning / knowledge:

- No reasoning capability (by design); no verified public benchmark applicable

Coding:

- No verified public score found; not applicable to this model

Long context:

- 16,000 token context window; no long-context retrieval benchmark reported

Translation-specific:

- No verified public translation-quality benchmark (e.g., BLEU/COMET/WER) published; vendor recommends manual bilingual review for language-pair quality, names/numbers/dates, domain terminology, code-switching, accents, latency, and voice consistency

### Normalized scores (1–100)

- **Tool use: 10/100.** No tool-call capability by design; this is a pure translation model, not an agent.
- **Reasoning: 10/100.** No reasoning capability by design; the model acts as an interpreter, not a reasoning assistant.
- **Context window: 20/100.** 16K tokens is below the 100K threshold (scales down to 10–49); suitable only for streaming translation, not document context.
- **Multimodal: 90/100.** Audio input with audio + text output fits the 90–100 tier (audio in / non-text out); no image or text input.
- **Coding: 5/100.** No coding capability; not applicable to this model's design.
- **Cost efficiency: 70/100.** $0.034/minute (~$2.04/hour) is moderate for realtime translation; cheaper than per-token audio models for long sessions but not free.
- **Overall Score: 27/100.** Mean of (10 + 10 + 20 + 90 + 5) / 5 = 27.0 → 27. Best fit: live speech-to-speech translation for broadcasts, meetings, and multilingual calls; not suitable for agentic, reasoning, or coding workloads.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-09-29
- Method: public internet research (OpenAI official docs, realtime translation guide); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
