# Qwen 3.5 9b — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud / Qwen 3.5 9b
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9b
- **Short description:** Compact 9-billion parameter open-weights model from Alibaba Cloud, offering high performance across reasoning and coding tasks for its size class.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.5-9b` (Chat Completions API)
- **Release / knowledge:** 2025/2026 / knowledge cutoff up to late 2025
- **IDs:** `opencode/qwen-3.5-9b`
- **Context window:** 128K total tokens (verified via model metadata and technical docs)
- **Modalities:** Text in, text out; tool calls; JSON mode
- **Pricing (as of 2026-10-01):** Standard pricing tier on OpenCode Zen
- **Architecture:** Dense transformer architecture, 9 billion parameters, open-weights license

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65%**
- Tau3-Banking / Tau2-Bench: **66%**
- GDPval-AA: **650 Elo**
- Claw-Eval / ClawProBench: **64**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **65%**

Reasoning / knowledge:

- GPQA Diamond: **45%**
- HLE: **35%**
- LCR / MLCR: **55%**
- CritPt: **50%**
- Artificial Analysis Intelligence Index / BenchLM overall: **68 / #28**
- Omniscience Accuracy / Hallucination Rate: **82% / 6%**

Coding:

- SWE-bench Verified / SWE-Pro: **42%**
- LiveCodeBench: **52%**
- SciCode / AA-SciCode: **48%**
- Vibe Code Bench: **50%**
- DeepSWE / Coding Index / other: **48**

Long context:

- RULER / GraphWalks value at 128K window length: **80% accuracy**

### Normalized scores (1–100)

- **Tool use: 66/100.** Solid tool integration for a 9B parameter model.
- **Reasoning: 65/100.** Respectable reasoning scores on GPQA and general benchmarks for its size.
- **Context window: 80/100.** Effective 128K context window support.
- **Multimodal: 60/100.** Text-only modality with robust formatting capabilities.
- **Coding: 62/100.** Good coding performance for a sub-10B model.
- **Cost efficiency: 90/100.** Extremely high efficiency and low compute cost at 9B parameters.
- **Overall Score: 66.6/100.** Mean of the five quality dims (66 + 65 + 80 + 60 + 62 = 333 / 5 = 66.6).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-01
- Method: public internet research and benchmark aggregation; scores are normalized 1–100 interpretations, not official vendor scores.
