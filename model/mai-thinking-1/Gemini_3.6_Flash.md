# MAI Thinking 1 — findings by Gemini 3.6 Flash

- Source: Microsoft/mai-thinking-1
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI Thinking 1
- **Short description:** Microsoft reasoning-focused MoE model with 35B active / 1T total parameters designed for internal chain-of-thought planning and agentic tasks.
- **Provider / access:** Microsoft Foundry, Azure AI Studio (`azure/mai-thinking-1`). Chat Completions API.
- **Release / knowledge:** 2026-06-02 release; knowledge cutoff mid-2026.
- **IDs:** `azure/mai-thinking-1`
- **Context window:** 256,000 tokens input, 16,384 max output tokens.
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.50 / 1M input tokens, $2.00 / 1M output tokens (enterprise Azure PTU / consumption tier).
- **Architecture:** MoE Transformer with 35B active parameters and ~1T total parameters, proprietary.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **58.0%** (provisional evaluation across tool-use tasks)
- Terminal-Bench 2.1: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **68.0%** (provisional internal evaluation)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- LiveCodeBench: **60.0%** (provisional evaluation)
- SWE-bench Verified / SWE-Pro: **46.0%** (SWE-bench Pro internal evaluation)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 256,000 token context window with chain-of-thought scratchpad support.

### Normalized scores (1–100)

- **Tool use: 64/100.** Multi-step agentic planning support with ~58% Tau2-Bench score.
- **Reasoning: 70/100.** Native chain-of-thought reasoning MoE architecture (68% GPQA Diamond).
- **Context window: 84/100.** 256,000 token context window.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 68/100.** Solid code analysis and refactoring (~60% LiveCodeBench, ~46% SWE-bench Pro).
- **Cost efficiency: 82/100.** Reasonable enterprise pricing at $0.50/$2.00 per million tokens.
- **Overall Score: 60/100.** Microsoft flagship reasoning MoE model for complex enterprise planning workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
