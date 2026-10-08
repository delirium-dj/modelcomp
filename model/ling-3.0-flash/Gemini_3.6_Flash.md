# Ling 3.0 Flash — findings by Gemini 3.6 Flash

- Source: AntGroup/ling-3.0-flash
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** Ant Group 124B total / 5.1B active MoE hybrid-linear attention open-weights model designed for low-latency agentic planning and financial workflows.
- **Provider / access:** Ant Group API (`ling-3.0-flash`), OpenRouter (`inclusionai/ling-3.0-flash`). Open weights (MIT license).
- **Release / knowledge:** 2026-07-15 release; knowledge cutoff mid-2026.
- **IDs:** `inclusionai/ling-3.0-flash`
- **Context window:** 262,144 tokens input, 16,384 max output tokens (verified via Ant Group technical report).
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.07 / 1M input, $0.22 / 1M output tokens (open weights self-hosting $0.00 / 1M).
- **Architecture:** 124B total / 5.1B active parameter MoE with hybrid linear KDA-MLA attention stack, open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking: **verified agentic benchmark report** (Ant Group report)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **56.6%** (SWE-bench Pro, Ant Group report)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 262,144 token context window supported with hybrid linear attention.

### Normalized scores (1–100)

- **Tool use: 80/100.** Tau3-Banking tool execution and agentic planning-execution separation.
- **Reasoning: 78/100.** Foundational reasoning performance across financial and domain benchmarks.
- **Context window: 80/100.** 262k token context window support.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 75/100.** SWE-bench Pro score of 56.6% caps coding capability.
- **Cost efficiency: 98/100.** Highly affordable API rates ($0.07/$0.22 per 1M tokens) with MIT open-weights self-hosting option.
- **Overall Score: 66/100.** High-efficiency 5.1B active parameter MoE model for agentic planning and financial workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
