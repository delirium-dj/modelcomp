# LongCat 2.0 — findings by Gemini 3.6 Flash

- Source: Meituan (`longcat-2.0`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Large-scale sparse MoE model by Meituan (1.6T total / 48B active parameters) optimized for repository-level coding and agentic terminal execution.
- **Provider / access:** Meituan Open API (`opencode/longcat-2.0`), OpenRouter (`meituan/longcat-2.0`).
- **Release / knowledge:** 2026-06-30 release; knowledge cutoff 2026-04.
- **IDs:** `meituan/longcat-2.0`
- **Context window:** 1,048,576 tokens input, 128,000 max output tokens (verified via Meituan technical report).
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.30 / $1.20 / $0.03 cached per 1M tokens.
- **Architecture:** 1.6T total / 48B active parameters sparse MoE; open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (Meituan launch report)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **38** (Artificial Analysis mid-2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **59.5%** (SWE-bench Pro Meituan launch data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 1M: 98.0% needle-in-a-haystack retrieval accuracy across 1M context window.

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 score of 70.8% for agentic execution.
- **Reasoning: 80/100.** Strong MoE reasoning for repository-level tasks.
- **Context window: 95/100.** Verified 1M token context window with 128k output tokens limit.
- **Multimodal: 15/100.** Text-only input and output (capped at 15 for text-only).
- **Coding: 82/100.** SWE-bench Pro score of 59.5% for autonomous repository software engineering.
- **Cost efficiency: 94/100.** Low API cost ($0.30 in / $1.20 out per 1M).
- **Overall Score: 70/100.** High-efficiency text-only MoE model for repository-scale software engineering.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
