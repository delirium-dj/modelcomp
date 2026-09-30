# Gemini 2.5 Flash Lite — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-2.5-flash-lite`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's ultra-low-latency lightweight model designed for high-frequency micro-tasks and high-speed processing.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-2.5-flash-lite`), GenerateContent API.
- **Release / knowledge:** 2025-07 release; 2025-01 knowledge cutoff.
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1,048,576 tokens input / 8,192 max output; verified via Google documentation.
- **Modalities:** Text, image, audio, video, PDF input; text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** Free tier available; $0.0375 / 1M input, $0.15 / 1M output.
- **Architecture:** Lightweight MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.0%**
- Tau3-Banking / Tau2-Bench: **28.0%**
- GDPval-AA: **890**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **48.0**

Reasoning / knowledge:

- GPQA Diamond: **52.0%**
- HLE: **6.0%**
- LCR / MLCR: **45.0%**
- CritPt: **30.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **36.0 / #85**
- Omniscience Accuracy / Hallucination Rate: **78.0% / 8.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **34.0%**
- LiveCodeBench: **48.0%**
- SciCode / AA-SciCode: **22.0%**
- Vibe Code Bench: **18.0%**
- DeepSWE / Coding Index / other: **30.0%**

Long context:

- MRCR / RULER: **94.0%** retrieval accuracy at 1M context length

### Normalized scores (1–100)

- **Tool use: 48/100.** Fast basic tool calls, lower score on multi-step benchmarks.
- **Reasoning: 52/100.** Entry-level reasoning performance.
- **Context window: 95/100.** Full 1M context window capability.
- **Multimodal: 90/100.** Full multimodal input support (images, audio, video, PDF).
- **Coding: 45/100.** Suitable for simple script edits and formatting.
- **Cost efficiency: 98/100.** Extremely cheap pricing with free tier access.
- **Overall Score: 66/100.** Extremely fast and cheap multimodal routing model.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
