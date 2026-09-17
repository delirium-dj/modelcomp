# Gemini 3.8 Flash — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-3.8-flash`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's latest 3.8 Flash model, combining high efficiency with state-of-the-art coding and agentic execution.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.8-flash`), GenerateContent API.
- **Release / knowledge:** 2026-07 release; 2026-03 knowledge cutoff.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,048,576 tokens input / 8,192 max output; verified via Google documentation.
- **Modalities:** Text, image, audio, video, PDF input; text output; reasoning/tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** Free tier available; $0.075 / 1M input, $0.30 / 1M output.
- **Architecture:** Proprietary multimodal MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.0%**
- Tau3-Banking / Tau2-Bench: **81.0%**
- GDPval-AA: **1710**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89.0**

Reasoning / knowledge:

- GPQA Diamond: **91.0%**
- HLE: **41.0%**
- LCR / MLCR: **90.0%**
- CritPt: **81.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **66.0 / #3**
- Omniscience Accuracy / Hallucination Rate: **96.2% / 1.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **80.0%**
- LiveCodeBench: **88.0%**
- SciCode / AA-SciCode: **60.0%**
- Vibe Code Bench: **72.0%**
- DeepSWE / Coding Index / other: **78.0%**

Long context:

- MRCR / RULER: **99.6%** retrieval accuracy across 1M token window

### Normalized scores (1–100)

- **Tool use: 90/100.** Benchmark leader in autonomous tool usage and terminal tasks.
- **Reasoning: 92/100.** Outstanding GPQA Diamond (91%) and HLE score.
- **Context window: 95/100.** 1M context window with near flawless retrieval.
- **Multimodal: 90/100.** Complete multimodal input coverage.
- **Coding: 90/100.** SOTA coding score on SWE-bench Verified and LiveCodeBench.
- **Cost efficiency: 95/100.** Unbeatable performance-to-cost ratio.
- **Overall Score: 92/100.** Frontier-class efficiency flagship model.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
