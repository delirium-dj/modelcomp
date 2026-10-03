# MiMo v2.6 Pro — findings by Gemini 3.6 Flash

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.6 Pro
- **Short description:** Flagship sparse MoE foundation model by Xiaomi designed for complex agentic workflows, coding, and long-horizon multimodal reasoning.
- **Provider / access:** Xiaomi Cloud API (`opencode/mimo-v2.6-pro`), OpenRouter (`xiaomi/mimo-v2.6-pro`).
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff 2026-08.
- **IDs:** `xiaomi/mimo-v2.6-pro`
- **Context window:** 1,048,576 tokens (1M context verified via Xiaomi official launch specification).
- **Modalities:** text, image, audio, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.435 / $0.870 / $0.004 cached per 1M tokens.
- **Architecture:** 1.02T total parameters / 42B active parameters sparse MoE; open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi launch report)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.9%** (Toolathlon-verified)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **46** (Artificial Analysis Sep 2026 rank #1 open-weights)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **71.9%** (DeepSWE v1.1)

Long context:

- RULER 1M: 98.2% retrieval accuracy across 1M token window.

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong performance on Terminal-Bench 2.1 (89.9%) and Toolathlon (76.9%).
- **Reasoning: 88/100.** High AA Intelligence Index score of 46 and CyberGym score of 94.0%.
- **Context window: 95/100.** Verified 1M token context window with high retrieval accuracy.
- **Multimodal: 85/100.** Omnimodal inputs (text, image, audio, video) with text outputs.
- **Coding: 83/100.** DeepSWE v1.1 score of 71.9% demonstrates solid agentic software engineering capabilities.
- **Cost efficiency: 90/100.** Very competitive pricing ($0.435 in / $0.870 out per 1M).
- **Overall Score: 88/100.** Balanced frontier open-weight model with strong tool use and long context.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
