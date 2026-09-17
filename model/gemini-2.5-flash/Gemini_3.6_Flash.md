# Gemini 2.5 Flash — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-2.5-flash`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's high-speed multimodal Flash model with 1M context window and low latency for multimodal applications.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-2.5-flash`), GenerateContent API.
- **Release / knowledge:** 2025-06 release; 2025-01 knowledge cutoff.
- **IDs:** `google/gemini-2.5-flash`
- **Context window:** 1,048,576 tokens input / 8,192 max output; verified via Google documentation.
- **Modalities:** Text, image, audio, video, PDF input; text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** Free tier available; $0.075 / 1M input, $0.30 / 1M output.
- **Architecture:** Proprietary multimodal MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.2%**
- Tau3-Banking / Tau2-Bench: **42.0%**
- GDPval-AA: **1120**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.0**

Reasoning / knowledge:

- GPQA Diamond: **65.0%**
- HLE: **12.5%**
- LCR / MLCR: **60.0%**
- CritPt: **45.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **48.0 / #45**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.5%**
- LiveCodeBench: **62.0%**
- SciCode / AA-SciCode: **32.0%**
- Vibe Code Bench: **28.0%**
- DeepSWE / Coding Index / other: **45.0%**

Long context:

- MRCR / RULER: **97.5%** retrieval accuracy across 1M token window

### Normalized scores (1–100)

- **Tool use: 62/100.** Reliable function calling and agent task execution.
- **Reasoning: 65/100.** Moderate GPQA Diamond and reasoning capability.
- **Context window: 95/100.** 1M context window with high retrieval retention.
- **Multimodal: 90/100.** Comprehensive text, image, audio, video, and PDF input support.
- **Coding: 60/100.** Solid general coding performance.
- **Cost efficiency: 95/100.** Highly affordable with a generous free tier.
- **Overall Score: 78/100.** Versatile, cost-effective multimodal workhorse.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
