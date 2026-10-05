# Pareto 26.10 Preview — findings by Gemini 3.6 Flash

- Source: Unbiased/pareto-26.10-preview
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** A multimodal composite routing model by Unbiased designed for complex research, coding, and agentic workflows using dynamic model selection.
- **Provider / access:** OpenRouter (`unbiased/pareto-26.10-preview`) and Unbiased API (`pareto`). Chat Completions and Responses API.
- **Release / knowledge:** 2026-10-01 release; knowledge cutoff late 2025.
- **IDs:** `unbiased/pareto-26.10-preview`
- **Context window:** 1,048,576 tokens input, 131,072 max output tokens (verified via OpenRouter API specifications).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-05):** $0.80 / 1M input, $3.20 / 1M output tokens (OpenRouter public pricing).
- **Architecture:** proprietary composite routing system over mixture of frontier models.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** (Unbiased technical release report)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Unbiased technical release report)
- HLE: **49.9%** (text-only test set, Unbiased technical release report)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **69.9%** (DeepSWE v1.1, Unbiased technical release report)

Long context:

- 1,048,576 tokens input retrieval window supported with prompt caching.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 4.0 score of 50.8% demonstrates strong multi-step agentic execution.
- **Reasoning: 92/100.** High GPQA Diamond score (92.4%) and solid HLE performance (49.9%).
- **Context window: 95/100.** 1M token input context window tier.
- **Multimodal: 65/100.** Text and image input support, text output.
- **Coding: 83/100.** DeepSWE v1.1 score of 69.9% caps coding evaluation.
- **Cost efficiency: 91/100.** Highly competitive pricing at $0.80/$3.20 per 1M tokens.
- **Overall Score: 84/100.** High-performance composite model suitable for long-context research and coding agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
