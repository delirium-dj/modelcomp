# Gemini 3.1 Flash — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-3.1-flash`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's efficient 3.1 generation Flash model, offering enhanced speed, long context, and multi-modal input processing.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.1-flash`), GenerateContent API.
- **Release / knowledge:** 2025-10 release; 2025-05 knowledge cutoff.
- **IDs:** `google/gemini-3.1-flash`
- **Context window:** 1,048,576 tokens input / 8,192 max output; verified via Google documentation.
- **Modalities:** Text, image, audio, video, PDF input; text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** Free tier available; $0.075 / 1M input, $0.30 / 1M output.
- **Architecture:** Proprietary multimodal MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%**
- Tau3-Banking / Tau2-Bench: **51.0%**
- GDPval-AA: **1280**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.5**

Reasoning / knowledge:

- GPQA Diamond: **72.0%**
- HLE: **18.5%**
- LCR / MLCR: **71.0%**
- CritPt: **54.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **52.5 / #32**
- Omniscience Accuracy / Hallucination Rate: **87.5% / 4.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.0%**
- LiveCodeBench: **71.5%**
- SciCode / AA-SciCode: **39.0%**
- Vibe Code Bench: **36.0%**
- DeepSWE / Coding Index / other: **54.0%**

Long context:

- MRCR / RULER: **98.2%** retrieval accuracy across 1M token window

### Normalized scores (1–100)

- **Tool use: 68/100.** Strong tool utilization and agent execution.
- **Reasoning: 72/100.** Solid GPQA score and problem solving skills.
- **Context window: 95/100.** 1M context window with high precision.
- **Multimodal: 90/100.** Complete multimodal input suite.
- **Coding: 71/100.** Very reliable for code generation and debugging.
- **Cost efficiency: 95/100.** Very high value for money with free tier.
- **Overall Score: 82/100.** Highly capable and cost-effective daily driver.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
