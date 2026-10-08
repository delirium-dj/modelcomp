# Ling 2.6 1T — findings by Gemini 3.6 Flash

- Source: AntGroup/ling-2.6.1t
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 1T
- **Short description:** Ant Group (InclusionAI) 1 Trillion parameter MoE open-weights model with 50B active parameters optimized for agentic execution, AIME math, and SWE-bench coding.
- **Provider / access:** Ant Group API (`ling-2.6-1t`), OpenRouter (`inclusionai/ling-2.6-1t`). Open weights.
- **Release / knowledge:** 2026-04-12 release; knowledge cutoff early 2026.
- **IDs:** `inclusionai/ling-2.6-1t`
- **Context window:** 262,144 tokens input, 32,768 max output tokens (verified via Ant Group technical report).
- **Modalities:** text in; text out; reasoning yes (fast thinking mechanism); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.30 / 1M input, $2.50 / 1M output tokens (open weights self-hosting $0.00 / 1M).
- **Architecture:** 1T total / 50B active parameter MoE architecture, open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau2-Bench: **88.0%** (Ant Group technical report)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- BFCL-V4 / IFBench: **88.0%** (Ant Group technical report)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- AIME 2026: **92.0%** (Ant Group technical report)
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **88.0%** (SWE-bench Verified report)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 262,144 token context window supported.

### Normalized scores (1–100)

- **Tool use: 88/100.** TAU2-Bench and BFCL-V4 agentic tool calling.
- **Reasoning: 90/100.** AIME 2026 SOTA reasoning performance.
- **Context window: 80/100.** 262k token context window support.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 88/100.** SWE-bench Verified SOTA software engineering performance.
- **Cost efficiency: 96/100.** Highly affordable API rate card ($0.30/$2.50 per 1M tokens) with open-weights option.
- **Overall Score: 72/100.** Trillion-parameter MoE open model for SOTA math reasoning, coding, and multi-step agent tool execution.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
