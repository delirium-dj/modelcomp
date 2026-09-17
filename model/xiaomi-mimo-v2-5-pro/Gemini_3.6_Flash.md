# Xiaomi MiMo-V2.5-Pro — findings by Gemini 3.6 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.5-pro`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro
- **Short description:** Xiaomi's flagship 1.02T parameter open-weights MoE model engineered for 1M context coherence and complex multi-tool agent tasks.
- **Provider / access:** Xiaomi API / OpenCode (`xiaomi/mimo-v2.5-pro`), Chat Completions API.
- **Release / knowledge:** 2026-05 release; 2025-12 knowledge cutoff.
- **IDs:** `xiaomi/mimo-v2.5-pro` (Paid pricing, no Free ID found on Zen)
- **Context window:** 1,048,576 tokens input / 32,768 max output; verified via Xiaomi website.
- **Modalities:** Text input, text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.44 / 1M input, $0.87 / 1M output.
- **Architecture:** Open-weights MoE (1.02T total / 42B active parameters).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.0%**
- Tau3-Banking / Tau2-Bench: **94.2%** (Tau2)
- GDPval-AA: **1380**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0**

Reasoning / knowledge:

- GPQA Diamond: **86.6%**
- HLE: **35.7%**
- LCR / MLCR: **74.0%**
- CritPt: **62.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **43.0 / #30**
- Omniscience Accuracy / Hallucination Rate: **91.0% / 2.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.0%**
- LiveCodeBench: **80.0%**
- SciCode / AA-SciCode: **48.0%**
- Vibe Code Bench: **46.0%**
- DeepSWE / Coding Index / other: **68.0%**

Long context:

- MRCR / RULER: **98.0%** retrieval accuracy across 1M token window

### Normalized scores (1–100)

- **Tool use: 82/100.** SOTA Tau2 score (94.2%) and strong agent coherence.
- **Reasoning: 78/100.** High GPQA Diamond (86.6%) and solid HLE (35.7%).
- **Context window: 100/100.** 1M context with high retention across 1,000+ tool call chains.
- **Multimodal: 15/100.** Text-focused Pro variant.
- **Coding: 82/100.** High LiveCodeBench (80.0%) and solid software engineering capabilities.
- **Cost efficiency: 85/100.** Highly competitive paid pricing ($0.44/$0.87 per 1M tokens).
- **Overall Score: 74/100.** Top open-weights Pro choice for 1M long-context agent loops.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
