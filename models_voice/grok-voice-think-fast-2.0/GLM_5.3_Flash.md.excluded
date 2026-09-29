# Grok Voice Think Fast 2.0 — findings by GLM 5.3 Flash

- Source: xAI (`grok-voice-think-fast-2.0`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Voice Think Fast 2.0 (xAI Speech-to-Speech model)
- **Short description:** xAI's speech-to-speech realtime voice model in the Grok Voice line — the "think fast" tier pairs fast inline reasoning with low-latency turn-taking and tool use for production voice agents. Part of the Grok Voice API family (S2S, TTS, STT, custom voices).
- **Provider / access:** xAI Speech to Speech realtime API over WebSockets (`wss://api.x.ai/v1/realtime`, model parameter `grok-voice-think-fast-2.0`; `grok-voice-latest` aliases to the latest voice). Ephemeral tokens available for client-side apps; demo apps include Web/Twilio/WebRTC agents (xAI cookbook).
- **Release / knowledge:** no verified release date found for this voice model; the flagship Grok 4.7 text model's cutoff is May 2026 (xAI docs) — the voice model's own cutoff is unpublished.
- **IDs:** `xai/grok-voice-think-fast-2.0` — no Free ID on OpenCode Zen was verified during research.
- **Context window:** no verified public figure found for this model (xAI's models pricing page lists no context column for the voice line) — not verified via any public source.
- **Modalities:** Audio in/out (speech-to-speech); text input supported ($0.004 per text input); server VAD turn detection; tool use supported in-session (e.g. `web_search`); no image/video input; custom voices (`eve` default) work across S2S and TTS.
- **Pricing (as of 2026-09-28):** $0.08 per minute ($4.80/hr) for Speech to Speech plus $0.004 per text input (xAI models pricing page, verified 2026-09-28); companion STT $0.10/hr REST or $0.20/hr streaming, TTS $15.00 per 1M chars. Paid only; enterprise compliance tier (SOC 2 Type II, HIPAA-eligible, GDPR).
- **Architecture:** Proprietary; speech-to-speech realtime voice model; parameter count undisclosed. xAI states all audio is processed in real time and never stored or used for training (zero-retention).

### Raw benchmarks found

> Research performed 2026-09-28: xAI docs Models pricing page and Voice Overview page (primary, verified); no third-party voice-benchmark data was found in readable form during this session.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- no long-context retrieval reported (no context-window figure published)

### Normalized scores (1–100)

- **Tool use: 52/100.** The realtime S2S API supports in-session tool use (web search) with low-latency turn-taking over WebSockets, but no public agentic-suite score exists for this model — scored at the provisional mid band, not guessed.
- **Reasoning: 50/100.** The "think fast" positioning implies fast inline reasoning, but no verified GPQA/HLE/Index evidence exists for this voice model and its own knowledge cutoff is unpublished — conservative mid band.
- **Context window: 40/100.** Provisional floor — xAI publishes no context-window figure for this voice model; scored conservatively rather than guessing a tier, with zero retrieval measurement.
- **Multimodal: 90/100.** Audio in/out speech-to-speech with text input, server VAD, and a full voice roster meets the audio-voice tier floor (90–100); capped at the floor with no image/video input.
- **Coding: 40/100.** No verified coding-suite evidence exists for this voice model; scored conservatively with zero invented values.
- **Cost efficiency: 65/100.** $0.08/min ($4.80/hr) with $0.004/text input is competitive for a reasoning voice tier and sits above GPT-Live's $0.05/min in price, but trails cheaper STT/TTS-only stacks; zero-retention privacy is a plus.
- **Overall Score: 59.4/100.** Mean of the five non-cost dims (52 + 50 + 40 + 90 + 65) / 5 = 59.4 — best fit as a production voice-agent runtime where fast spoken responses and in-session tools matter; text-model Grok 4.7 remains the choice for code and deep reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-28
- Method: public internet research (xAI docs models pricing page + Voice Overview page, verified 2026-09-28); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
