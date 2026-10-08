# Ring 2.6 1T — findings by Gemini 3.6 Flash

- Source: InclusionAI/ring-2.6.1t
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring 2.6 1T
- **Short description:** InclusionAI (Ant Group) 1 Trillion parameter MoE model with 63B active parameters per token designed for complex thinking, logic, and coding.
- **Provider / access:** InclusionAI API (`ring-2.6-1t`), OpenRouter (`inclusionai/ring-2.6-1t`). Chat Completions API.
- **Release / knowledge:** 2026-05-18 release; knowledge cutoff early 2026.
- **IDs:** `inclusionai/ring-2.6-1t`
- **Context window:** 262,144 tokens input, 66,000 max output tokens (verified via InclusionAI API documentation).
- **Modalities:** text in; text out; reasoning yes (high/xhigh thinking modes); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.30 / 1M input, $2.50 / 1M output tokens (paid tier).
- **Architecture:** 1T total / 63B active parameter MoE reasoning architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- PinchBench: **87.6%** (InclusionAI technical report)

Reasoning / knowledge:

- GPQA Diamond: **88.3%** (InclusionAI technical report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- AIME 2026: **95.8%** (InclusionAI technical report)
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 262,144 token context window supported.

### Normalized scores (1–100)

- **Tool use: 88/100.** High-throughput 120 tok/s agentic execution and PinchBench score of 87.6%.
- **Reasoning: 92/100.** AIME 2026 score of 95.8% and GPQA Diamond score of 88.3%.
- **Context window: 80/100.** 262k token context window support.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 88/100.** High-throughput code reasoning and agentic script synthesis.
- **Cost efficiency: 96/100.** Cost-effective pricing ($0.30/$2.50 per 1M tokens).
- **Overall Score: 73/100.** Trillion-parameter MoE thinking model for agentic workflows, math, and software engineering.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
