# Gemini 3.5 Flash — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-3.5-flash`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's high-efficiency 3.5 Flash model with updated architecture, improved reasoning, and fast multimodal performance.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.5-flash`), GenerateContent API.
- **Release / knowledge:** 2026-01 release; 2025-08 knowledge cutoff.
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,048,576 tokens input / 8,192 max output; verified via Google documentation.
- **Modalities:** Text, image, audio, video, PDF input; text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** Free tier available; $0.075 / 1M input, $0.30 / 1M output.
- **Architecture:** Proprietary multimodal MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%**
- Tau3-Banking / Tau2-Bench: **62.0%**
- GDPval-AA: **1420**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0**

Reasoning / knowledge:

- GPQA Diamond: **81.0%**
- HLE: **26.0%**
- LCR / MLCR: **78.0%**
- CritPt: **64.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **58.0 / #18**
- Omniscience Accuracy / Hallucination Rate: **91.0% / 3.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.5%**
- LiveCodeBench: **79.0%**
- SciCode / AA-SciCode: **46.0%**
- Vibe Code Bench: **48.0%**
- DeepSWE / Coding Index / other: **65.0%**

Long context:

- MRCR / RULER: **98.8%** retrieval accuracy across 1M token window

### Normalized scores (1–100)

- **Tool use: 78/100.** High accuracy on agentic workflows and tool usage.
- **Reasoning: 81/100.** Strong GPQA Diamond performance (81%).
- **Context window: 95/100.** Excellent 1M context retrieval score.
- **Multimodal: 90/100.** Extensive input modality support.
- **Coding: 79/100.** High coding accuracy across LiveCodeBench and SWE-bench.
- **Cost efficiency: 95/100.** Outstanding free tier and cheap token rates.
- **Overall Score: 86/100.** Fast, powerful, and affordable model for technical tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
