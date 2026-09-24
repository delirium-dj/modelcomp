# Grok 4.5 — findings by Gemini 3.6 Flash

- Source: xAI (`xai/grok-4.5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's flagship model designed for high-speed scientific reasoning, coding, and real-time data analysis.
- **Provider / access:** xAI (`xai/grok-4.5`), Chat Completions API.
- **Release / knowledge:** 2026-03 release; 2026-01 knowledge cutoff.
- **IDs:** `xai/grok-4.5` (no Zen Free ID)
- **Context window:** 128,000 tokens total (128K input / 8K max output); verified via xAI documentation.
- **Modalities:** Text and image input; text output; tool calling and structured outputs.
- **Pricing (as of 2026-09-24):** $2.00 / 1M input, $6.00 / 1M output.
- **Architecture:** Proprietary frontier Transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **75.0%**
- Tau3-Banking / Tau2-Bench: **80.0%**
- GDPval-AA: **1270**
- Claw-Eval / ClawProBench: **76.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.5%**

Reasoning / knowledge:

- GPQA Diamond: **81.5%**
- HLE: **27.0%**
- LCR / MLCR: **68.5%**
- CritPt: **64.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **77.0 / #11**
- Omniscience Accuracy / Hallucination Rate: **87.0% / 4.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **70.0%**
- LiveCodeBench: **81.0%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **68.5%**
- DeepSWE / Coding Index / other: **75.5%**

Long context:

- MRCR / RULER: **96.8%** retrieval accuracy across 128K context window

### Normalized scores (1–100)

- **Tool use: 86/100.** Excellent tool execution, API interaction, and multi-turn speed.
- **Reasoning: 87/100.** Strong GPQA Diamond (81.5%) and scientific problem-solving.
- **Context window: 84/100.** 128K context window mapping to 84/100 tier.
- **Multimodal: 60/100.** Efficient text and vision processing capabilities.
- **Coding: 84/100.** Solid performance across LiveCodeBench (81.0%) and software tasks.
- **Cost efficiency: 71/100.** Competitive API pricing tier.
- **Overall Score: 80.2/100.** Fast and capable reasoning model optimized for code and technical task execution.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-24
- Method: Public internet research; scores are normalized 1–100 interpretations.
