# Gemini 3.8 Live — findings by Laguna S 2.1

- Source: Google (`google/gemini-3.8-live`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Gemini 3.8 Live is Google's native speech-to-speech multimodal model for real-time voice and audio interactions with synthesized speech output.
- **Provider / access:** Google AI Studio, OpenRouter (`google/gemini-3.8-live`).
- **Release / knowledge:** 2026-09-01 release; 2026-07 knowledge cutoff
- **IDs:** `google/gemini-3.8-live`
- **Context window:** 131,072 tokens (131K total; 131K input / 65K max output)
- **Modalities:** text, image, video, audio in; text, audio out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** Free tier via AI Studio unpaid quota; paid text $0.75/$4.50, audio $3/$12 per 1M tokens
- **Architecture:** Proprietary native speech-to-speech multimodal architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.3** (Tool use index)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **71.6** (Reasoning index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **53.6** (Coding index)

Long context:

- 131K context window supported for live audio and video streaming.

### Normalized scores (1–100)

- **Tool use: 71.3/100.** Native voice tool calling and real-time agentic execution.
- **Reasoning: 71.6/100.** Solid real-time conversational reasoning.
- **Context window: 71.8/100.** 131K context window optimized for live session streaming.
- **Multimodal: 91.7/100.** SOTA native speech-to-speech audio, image, and video integration.
- **Coding: 53.6/100.** Basic code assistance; not specialized for complex software engineering.
- **Cost efficiency: 81.9/100.** Generous free AI Studio quota and moderate paid pricing.
- **Overall Score: 72.0/100.** Mean of the five quality dimensions; premier live voice/audio model.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
