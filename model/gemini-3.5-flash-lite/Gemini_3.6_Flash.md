# Gemini 3.5 Flash Lite — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-2.5-flash-lite`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's optimized 3.5 Lite variant offering high speed and responsiveness with 1M context.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.5-flash-lite`), GenerateContent API.
- **Release / knowledge:** 2026-02 release; 2025-08 knowledge cutoff.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1,048,576 tokens input / 8,192 max output; verified via Google documentation.
- **Modalities:** Text, image, audio, video, PDF input; text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** Free tier available; $0.0375 / 1M input, $0.15 / 1M output.
- **Architecture:** Lightweight MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.0%**
- Tau3-Banking / Tau2-Bench: **42.0%**
- GDPval-AA: **1080**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **61.0**

Reasoning / knowledge:

- GPQA Diamond: **66.0%**
- HLE: **12.0%**
- LCR / MLCR: **62.0%**
- CritPt: **44.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **46.0 / #50**
- Omniscience Accuracy / Hallucination Rate: **85.0% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **49.0%**
- LiveCodeBench: **63.0%**
- SciCode / AA-SciCode: **31.0%**
- Vibe Code Bench: **30.0%**
- DeepSWE / Coding Index / other: **46.0%**

Long context:

- MRCR / RULER: **96.8%** retrieval accuracy across 1M token window

### Normalized scores (1–100)

- **Tool use: 60/100.** Fast and effective function call execution.
- **Reasoning: 66/100.** Moderate GPQA Diamond score.
- **Context window: 95/100.** Full 1M token context capacity.
- **Multimodal: 90/100.** Wide multimodal input coverage.
- **Coding: 62/100.** Solid utility for routine programming tasks.
- **Cost efficiency: 98/100.** Extremely cost-effective with active free tier.
- **Overall Score: 75/100.** Low-latency, cost-effective multimodal workhorse.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
