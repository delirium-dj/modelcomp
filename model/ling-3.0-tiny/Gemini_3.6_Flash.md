# Ling 3.0 Tiny — findings by Gemini 3.6 Flash

- Source: AntGroup/ling-3.0-tiny
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** Ant Group 7.9B total / 1.3B active MoE hybrid reasoning model with 262k context optimized for on-device and local edge execution.
- **Provider / access:** Hugging Face (`inclusionai/ling-3.0-tiny`), OpenRouter (`inclusionai/ling-3.0-tiny`), AIML API. Open weights.
- **Release / knowledge:** 2026-07-25 release; knowledge cutoff mid-2026.
- **IDs:** `inclusionai/ling-3.0-tiny`
- **Context window:** 262,144 tokens input, 16,384 max output tokens (verified via Ant Group technical documentation).
- **Modalities:** text in; text out; reasoning yes (configurable thinking mode); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.00 / 1M tokens (open weights self-hosting under Apache 2.0 derivative / free API slots).
- **Architecture:** 7.9B total / 1.3B active parameter MoE hybrid-linear attention, open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **75.0%** (Ant Group technical report)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **72.0** (Artificial Analysis leaderboard)
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

- **Tool use: 75/100.** On-device tool execution and edge agentic sub-task execution.
- **Reasoning: 72/100.** Configurable thinking mode for 1.3B active parameter MoE.
- **Context window: 80/100.** 262k token context window support.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 68/100.** Lightweight script parsing and local edge coding assistance.
- **Cost efficiency: 100/100.** Free open-weights release ($0.00 / 1M tokens).
- **Overall Score: 62/100.** Ultra-lightweight 1.3B active parameter MoE model for local on-device reasoning and long-context processing.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
