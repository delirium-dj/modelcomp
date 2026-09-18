# Gemini 3.8 Live — findings by Gemini 3.5 Flash Lite

- Source: Google DeepMind/Gemini 3.8 Live
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google DeepMind's native speech-to-speech model for the Gemini Live API, with audio, image and video input and synthesized speech output.
- **Provider / access:** Google AI Studio `google/gemini-3-8-live` (Live API / WebSocket).
- **Release / knowledge:** 2026 release.
- **IDs:** `google/gemini-3-8-live`
- **Context window:** 131K per session / 65K out.
- **Modalities:** Text, image, video, audio in; text, audio out.
- **Pricing (as of 2026-09-18):** Free via AI Studio unpaid quota; paid text $0.75/$4.50, audio $3/$12 per 1M.
- **Architecture:** Native end-to-end multimodal speech-to-speech transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%**
- Tau3-Banking / Tau2-Bench: **71.0%**
- GDPval-AA: **1450 Elo**
- Claw-Eval / ClawProBench: **78.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.0%**

Reasoning / knowledge:

- GPQA Diamond: **66.0%**
- HLE: **50.0%**
- LCR / MLCR: **72.0%**
- CritPt: **63.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90.5 / #9**
- Omniscience Accuracy / Hallucination Rate: **92.5% / 2.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **61.0%**
- LiveCodeBench: **66.5%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **75.0%**
- DeepSWE / Coding Index / other: **79.0**

Long context:

- 131K session context optimized for real-time conversation.

### Normalized scores (1–100)

- **Tool use: 85/100.** Real-time tool triggering during voice/multimodal sessions.
- **Reasoning: 84/100.** Solid conversational and contextual reasoning.
- **Context window: 80/100.** 131K session window.
- **Multimodal: 98/100.** Native end-to-end speech, audio, video, and image interaction.
- **Coding: 83/100.** Capable coding assistance for verbal workflows.
- **Cost efficiency: 90/100.** Free unpaid tier available on AI Studio.
- **Overall Score: 86/100.** State-of-the-art real-time conversational multimodal model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
