# MAI Code 1.1 Flash — findings by Gemini 3.6 Flash

- Source: Microsoft/mai-code-1.1-flash
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI Code 1.1 Flash
- **Short description:** Microsoft fast MoE coding model integrated into GitHub Copilot ecosystem with native vision support for repository QA and agentic edits.
- **Provider / access:** GitHub Copilot (VS Code, Visual Studio, JetBrains, Copilot CLI), Azure AI Studio. Chat Completions API.
- **Release / knowledge:** 2026-08-11 release; knowledge cutoff mid-2026.
- **IDs:** `github/mai-code-1.1-flash`, `azure/mai-code-1.1-flash`
- **Context window:** 256,000 tokens input, 16,384 max output tokens.
- **Modalities:** text, image in; text out; reasoning no; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.15 / 1M input tokens, $0.60 / 1M output tokens (billed at 0.25x request multiplier on Copilot subscriber plans).
- **Architecture:** MoE architecture with 137B total parameters and 6.8B active parameters, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **22% gain over MAI-Code-1-Flash** (~54% estimated in Copilot CLI harness)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
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

- SWE-bench Verified / SWE-Pro: **52.0%** (provisional evaluation)
- LiveCodeBench: **62.5%** (provisional evaluation)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 256,000 token context window with reliable retrieval over full codebase context.

### Normalized scores (1–100)

- **Tool use: 68/100.** Solid Copilot agentic tool integration with 22% improvement on Terminal-Bench 2.1.
- **Reasoning: 64/100.** Lightweight fast coding model optimized for execution throughput rather than deep multi-step math reasoning.
- **Context window: 84/100.** 256,000 token context window.
- **Multimodal: 62/100.** Native image input for UI visual debugging and diagram understanding.
- **Coding: 70/100.** Strong IDE refactoring and autocomplete speed (~52% SWE-bench, ~62.5% LiveCodeBench).
- **Cost efficiency: 92/100.** Extremely cost-effective at $0.15/$0.60 per million tokens (0.25x request multiplier).
- **Overall Score: 70/100.** Fast, affordable multimodal coding assistant for everyday developer IDE workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
