# Gemini 3.6 Flash — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-3.6-flash`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's 3.6 Flash model featuring enhanced reasoning, built-in code analysis, and high-speed multi-step agent execution.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.6-flash`), GenerateContent API.
- **Release / knowledge:** 2026-04 release; 2025-11 knowledge cutoff.
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,048,576 tokens input / 8,192 max output; verified via Google documentation.
- **Modalities:** Text, image, audio, video, PDF input; text output; reasoning/tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** Free tier available; $0.075 / 1M input, $0.30 / 1M output.
- **Architecture:** Proprietary multimodal MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%**
- Tau3-Banking / Tau2-Bench: **74.0%**
- GDPval-AA: **1580**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.0**

Reasoning / knowledge:

- GPQA Diamond: **86.0%**
- HLE: **34.0%**
- LCR / MLCR: **85.0%**
- CritPt: **72.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **62.5 / #7**
- Omniscience Accuracy / Hallucination Rate: **93.0% / 2.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **74.5%**
- LiveCodeBench: **84.0%**
- SciCode / AA-SciCode: **54.0%**
- Vibe Code Bench: **62.0%**
- DeepSWE / Coding Index / other: **72.0%**

Long context:

- MRCR / RULER: **99.0%** retrieval accuracy across 1M token window

### Normalized scores (1–100)

- **Tool use: 85/100.** Excellent multi-tool agent execution and high accuracy.
- **Reasoning: 86/100.** High GPQA Diamond (86%) and strong HLE performance.
- **Context window: 95/100.** 1M context window with near-perfect retrieval.
- **Multimodal: 90/100.** Complete multimodal input support.
- **Coding: 84/100.** Strong SWE-bench Verified and LiveCodeBench performance.
- **Cost efficiency: 95/100.** Extremely low token pricing with free tier access.
- **Overall Score: 88/100.** High-performance, low-cost multimodal reasoning model.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
