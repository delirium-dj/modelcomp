# Gemini 3.8 Live — findings by Qwen 3.8 27B

- Source: Google/Gemini 3.8 Live (`google/gemini-3.8-live`, Gemini Live API)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google DeepMind's GA default native speech-to-speech model for the Gemini Live API (audio-to-audio with visual grounding), released 2026-09-15 alongside the higher-reasoning sibling Gemini 3.8 Live Extended Thinking; part of the "Gemini 3.8 Audio" family (with Flash TTS / Flash-Lite TTS). Not a variant of the text 3.8 Flash.
- **Provider / access:** Gemini API Live endpoint `gemini-3.8-live` (persistent WebSocket, 16-bit PCM in/out); Google AI Studio; Vertex AI / Gemini Enterprise Agent Platform; Google Search Live. First-party integrations: LiveKit, Pipecat, Agora, LangChain, Vercel, Fishjam, Vision Agents.
- **Release / knowledge:** released 2026-09-15 (GA; Google model card "Gemini 3.8 Audio" published 2026-09-15). Model card states knowledge cutoff January 2025; a Live-specific cutoff is not separately documented.
- **IDs:** `google/gemini-3.8-live` (Live API WebSocket model ID); sibling `gemini-3.8-live-extended-thinking`
- **Context window:** up to 128K (131,072) input tokens per session / 65,536 max output; session length capped at 15 min audio-only, 2 min with video streaming (Google model card + hokai vendor-checked 2026-09-16)
- **Modalities:** text + image + video (≤1 fps) + audio in; audio + text out; reasoning: yes (near real-time; Extended Thinking sibling for deep reasoning); tool calls: yes (asynchronous function calling — model keeps speaking while background calls complete); search grounding: yes; JSON/structured outputs, context caching, code execution, Batch API: not supported; SynthID audio watermarking on all generated speech
- **Pricing (as of 2026-09-29):** paid — text $0.75/M in, $4.50/M out; audio input $3.00/M tokens ($0.005/min); audio output $12.00/M tokens ($0.018/min); image/video input $1.00/M tokens ($0.002/min) (hokai vendor-checked 2026-09-16; blended 3:1 ≈ $1.69/M). Free: Google AI Studio unpaid API quota for testing (free-tier data may train Google products). No context-caching discount.
- **Architecture:** proprietary, closed weights; based on Gemini 3 Pro (Google model card); audio-only, no self-hosting

### Raw benchmarks found

Agent / tool use:

- Agentic Performance sub-score (AA Speech-to-Speech Quality Index): **30.1%** (Artificial Analysis S2S Quality Index as reported by hokai, vendor-checked 2026-09-16)
- Tool calling: asynchronous function calling + search grounding supported (capability, not a scored benchmark — Google model card / hokai)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Speech Reasoning sub-score (AA S2S Quality Index): **92%** (Artificial Analysis, as reported by hokai 2026-09-16)
- Conversational Dynamics sub-score (AA S2S Quality Index): **96.1%** (same source)
- Artificial Analysis Speech to Speech Quality Index (overall): **76.0** (same source — the only third-party benchmark available at launch)
- GPQA Diamond / HLE / MMLU-style text reasoning: Google has not published these for either Live model (not text-targeted; hokai 2026-09-16)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found (not a coding target)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found; code execution unsupported on this model

Long context:

- No MRCR / RULER / GraphWalks retrieval values reported for the 128K session window.

### Normalized scores (1–100)

- **Tool use: 58/100.** Asynchronous function calling and live search grounding are first-class, but the only measured agentic number is the 30.1% Agentic Performance sub-score (AA S2S Index) — weak-to-mid — and no Terminal-Bench/Tau/GDPval values exist, so it caps here.
- **Reasoning: 75/100.** Speech Reasoning 92% and Conversational Dynamics 96.1% are excellent voice-side signals and the AA S2S Index of 76.0 anchors the overall, but no GPQA/HLE/LCR text-reasoning values are published for this ID, capping it in the mid-70s.
- **Context window: 55/100.** 131,072-token session window sits in the 100K–200K tier (50–64; ~31% up the band ≈ 54–55), with 65,536 max output and 15-min/2-min session-length caps; no long-context retrieval measured.
- **Multimodal: 95/100.** Audio in + audio out + image/video in is the top band (90–100): 97-language mid-call switching, live visual grounding, 96.1% Conversational Dynamics; SynthID watermarks; held to 95 rather than 100 for the 2-minute video-stream session cap.
- **Coding: 20/100.** No verified coding benchmark exists for this ID and the model is not coding-targeted (code execution, structured outputs, and Batch are unsupported) — low evidence-based score, not a measured capability.
- **Cost efficiency: 88/100.** Text tier $0.75/$4.50 per 1M is at/better than the ~$1.25/$4.25 anchor (~88) on input; audio meters ($0.005/min in, $0.018/min out) and a $0 AI-Studio testing tier (with training-data caveat) keep it at the anchor, no caching discount.
- **Overall Score: 60.6/100.** Mean of the five quality dims (58+75+55+95+20)/5 = 60.6 — best fit: high-volume real-time voice agents (support lines, claims intake, field service) needing speech in/out with background tool calls, not a text/coding or long-context workhorse.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (Google DeepMind "Gemini 3.8 Audio" model card published 2026-09-15, deepmind.google Gemini Audio product page, BenchLM model catalog 2026-09-28, hokai.io vendor-checked record 2026-09-16 including Artificial Analysis Speech-to-Speech Quality Index; retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
