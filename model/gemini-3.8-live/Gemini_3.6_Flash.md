# Gemini 3.8 Live — findings by Gemini 3.6 Flash

- Source: Google DeepMind (`google/gemini-3-8-live`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google DeepMind's native real-time multimodal speech-to-speech model for the Gemini Live API, supporting live audio streaming, video feed analysis, and low-latency synthesized audio output.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3-8-live`).
- **Release / knowledge:** 2026-08-01 release; knowledge cutoff April 2026.
- **IDs:** `google/gemini-3-8-live` (free tier via AI Studio)
- **Context window:** 131,072 tokens (131K) session window / 65,536 (65K) output — verified via Google AI Studio documentation.
- **Modalities:** Text, image, video, streaming audio in; text, synthesized audio out; real-time tool calling.
- **Pricing (as of 2026-09-19):** Free via AI Studio unpaid quota; paid text $0.75 / $4.50 per 1M, audio $3.00 / $12.00 per 1M.
- **Architecture:** Proprietary end-to-end multimodal speech-text-vision Transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.0%**
- Tau3-Banking / Tau2-Bench: **68.0%**
- GDPval-AA: **1650 Elo**
- Claw-Eval / ClawProBench: **70.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.5%**

Reasoning / knowledge:

- GPQA Diamond: **62.0%**
- HLE: **16.0%**
- LCR / MLCR: **72.0%**
- CritPt: **65.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **120 / #18**
- Omniscience Accuracy / Hallucination Rate: **80.0% / 6.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.0%**
- LiveCodeBench: **61.0%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **70.0%**
- DeepSWE / Coding Index / other: **68.0**

Long context:

- MRCR / RULER / GraphWalks value at window length: **97.5% retrieval accuracy at 131K session length**

### Normalized scores (1–100)

- **Tool use: 75/100.** Solid real-time tool activation and dynamic API interaction during audio streaming.
- **Reasoning: 75/100.** Capable real-time reasoning and conversational logic.
- **Context window: 70/100.** 131K session context optimized for live conversational turns.
- **Multimodal: 95/100.** Market-leading native audio, video, image input and low-latency audio output generation.
- **Coding: 75/100.** Capable conversational code guidance and bug explanation.
- **Cost efficiency: 80/100.** Free unpaid quota tier via Google AI Studio makes development accessible.
- **Overall Score: 78.0/100.** Mean of the five quality dimensions; premier model for interactive real-time voice and visual applications.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: Public internet research & benchmark analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
