# Gemini 3.1 Flash Lite — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-3.1-flash-lite`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's lightweight Flash model built for high-throughput, low-latency micro-services and routine API tasks.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.1-flash-lite`), GenerateContent API.
- **Release / knowledge:** 2025-11 release; 2025-05 knowledge cutoff.
- **IDs:** `google/gemini-3.1-flash-lite`
- **Context window:** 1,048,576 tokens input / 8,192 max output; verified via Google documentation.
- **Modalities:** Text, image, audio, video, PDF input; text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** Free tier available; $0.0375 / 1M input, $0.15 / 1M output.
- **Architecture:** Lightweight MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **48.0%**
- Tau3-Banking / Tau2-Bench: **34.0%**
- GDPval-AA: **980**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **54.0**

Reasoning / knowledge:

- GPQA Diamond: **58.0%**
- HLE: **8.5%**
- LCR / MLCR: **52.0%**
- CritPt: **36.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **41.0 / #68**
- Omniscience Accuracy / Hallucination Rate: **81.0% / 6.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **41.0%**
- LiveCodeBench: **54.0%**
- SciCode / AA-SciCode: **26.0%**
- Vibe Code Bench: **22.0%**
- DeepSWE / Coding Index / other: **38.0%**

Long context:

- MRCR / RULER: **95.5%** retrieval accuracy across 1M token window

### Normalized scores (1–100)

- **Tool use: 52/100.** Fast execution on standard function calls.
- **Reasoning: 58/100.** Decent basic reasoning performance.
- **Context window: 95/100.** 1M context window with reliable retrieval.
- **Multimodal: 90/100.** Full multimodal input capabilities.
- **Coding: 52/100.** Practical for basic scripts and boilerplate.
- **Cost efficiency: 98/100.** Exceptionally cost efficient.
- **Overall Score: 69/100.** Swift, inexpensive multimodal execution model.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
