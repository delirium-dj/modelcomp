# MAI-Thinking-1 — findings by Gemini 3.6 Flash

- Source: Microsoft AI (`microsoft/mai-thinking-1`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's deep reasoning model designed for complex multi-step problem solving and advanced mathematical verification.
- **Provider / access:** Microsoft AI API (`microsoft/mai-thinking-1`), OpenCode Zen (`opencode/mai-thinking-1`).
- **Release / knowledge:** 2026-04 release; knowledge cutoff February 2026.
- **IDs:** `microsoft/mai-thinking-1`, `opencode/mai-thinking-1`
- **Context window:** 131,072 tokens total (32,768 max output); verified via Microsoft AI documentation.
- **Modalities:** text in, text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-09):** $2.00 / 1M input, $10.00 / 1M output; enterprise deep reasoning tier.
- **Architecture:** Proprietary reasoning transformer with extended chain-of-thought verification.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **48.6%**
- Tau3-Banking / Tau2-Bench: **80.2%**
- GDPval-AA: **1335**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **66.5%**

Reasoning / knowledge:

- GPQA Diamond: **81.5%**
- HLE: **36.2%**
- LCR / MLCR: **84.8%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **90 / #6**
- Omniscience Accuracy / Hallucination Rate: **90.8% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.4%**
- LiveCodeBench: **61.8%**
- SciCode / AA-SciCode: **52.5%**
- Vibe Code Bench: **83.5%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 99.4% needle retrieval accuracy across full 128K context window length.

### Normalized scores (1–100)

- **Tool use: 88/100.** Multi-step agentic reasoning tool execution backed by 80.2% Tau2-Bench score.
- **Reasoning: 92/100.** Deep mathematical and verification reasoning with 81.5% GPQA Diamond and 36.2% HLE.
- **Context window: 81/100.** 128K context window with 32K output generation depth.
- **Multimodal: 15/100.** Text-only modality model; baseline score 15.
- **Coding: 87/100.** High-accuracy algorithmic coding with 62.4% SWE-bench Verified and 61.8% LiveCodeBench score.
- **Cost efficiency: 65/100.** Enterprise deep reasoning pricing at $2.00 / $10.00 per 1M tokens.
- **Overall Score: 73/100.** Arithmetic mean of non-cost dimensions (88 + 92 + 81 + 15 + 87) / 5 = 72.6 -> 73. Specialized choice for complex logic, mathematical proof verification, and verified code synthesis.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-09
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
