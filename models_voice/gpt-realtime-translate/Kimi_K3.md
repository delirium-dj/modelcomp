# GPT-Realtime-Translate — findings by Kimi K3

- Source: OpenAI/GPT-Realtime-Translate (`gpt-realtime-translate`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-Translate
- **Short description:** OpenAI's streaming speech-to-speech translation model for live multilingual audio: returns translated audio plus transcript deltas while source audio is still arriving, collapsing the classic STT→translate→TTS pipeline into one session. One of the three realtime audio models launched 2026-05-08.
- **Provider / access:** OpenAI Realtime translation endpoint `v1/realtime/translations` (model ID `gpt-realtime-translate`). Not available on any other endpoint (including plain Realtime). Not on OpenCode Zen.
- **Release / knowledge:** Released 2026-05-08 (OpenAI "Advancing voice intelligence" announcement). Knowledge cutoff: 2024-09-30.
- **IDs:** `openai/gpt-realtime-translate`. No Free ID exists on Zen.
- **Context window:** 16,000 tokens total; 2,000 max output (OpenAI model docs) — sized for streaming utterances, not long documents.
- **Modalities:** Audio in; audio + text out (translated speech with transcript deltas). Streaming only; NO function calling. 70+ input languages into 13 output languages (launch coverage). No image/video.
- **Pricing (as of 2026-09-29):** $0.034 per minute of audio, duration-billed (OpenAI model docs). Paid only.
- **Architecture:** Proprietary; undisclosed parameter count.

### Raw benchmarks found

Translation quality:

- Word Error Rate on Hindi / Tamil / Telugu: **12.5% lower WER than any other tested model** (OpenAI internal evaluation, cited in launch coverage), alongside lower fallback rates and higher task completion
- Benchmarks beyond vendor's WER eval: no verified public score found

Agent / tool use:

- All agentic suites (Tau3 / Terminal-Bench / GDPval / OSWorld / Claw-Eval / Toolathon): no verified public score found — function calling is not supported on this endpoint by design.

Reasoning / knowledge:

- GPQA / HLE / Big Bench Audio / AA indexes / Omniscience: no verified public score found — translation-specialist model, not evaluated for general reasoning.

Coding:

- All coding suites: no verified public score found — not a coding model.

Long context:

- 16K window vendor-documented; no long-context retrieval benchmark applies or was reported.

### Normalized scores (1–100)

- **Tool use: 35/100.** No function calling on the translations endpoint — tool execution must be chained outside the session. Scored low by design, not by failure.
- **Reasoning: 45/100.** Translation with 12.5% lower WER than dedicated competitors on hard language pairs shows real speech understanding, but no general-reasoning benchmark exists. Provisional.
- **Context window: 32/100.** 16K tokens / 2K max output — sub-100K band by spec, appropriate to streaming translation but far below general-purpose models.
- **Multimodal: 90/100.** Native speech in, native speech + transcript out across 70+ input languages — full non-text-output band. Capped: 13 output languages is the documented limitation; single-purpose scope.
- **Coding: 25/100.** No coding capability claimed or measured. Provisional floor.
- **Cost efficiency: 78/100.** $0.034/min of audio undercuts OpenAI's own voice layers ($0.05/min GPT-Live-1 voice; $32/$64 per-M-token Realtime audio) and Grok's $0.08/min for the translation use case it owns.
- **Overall Score: 45.4/100.** Mean of the five non-cost dims (35+45+32+90+25)/5 = 45.4. Best fit: live multilingual support, cross-border meetings, and accessibility pipelines needing streaming speech-to-speech translation — pair with a reasoning model for anything beyond translation.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: Public internet research (OpenAI developers model docs, OpenAI May 2026 voice announcement as covered by Build Fast with AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
