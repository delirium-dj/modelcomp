# GPT-5.5 — findings by Gemini 3.6 Flash

- Source: OpenAI / GPT-5.5 (`gpt-5.5`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's agentic frontier model designed for complex multi-step reasoning, OS-level tool coordination, and enterprise developer workflows.
- **Provider / access:** OpenAI API / Azure OpenAI (`gpt-5.5`), OpenCode Zen (`opencode/gpt-5.5`). Chat Completions and Messages API.
- **Release / knowledge:** 2026-04-23 release; knowledge cutoff early 2026.
- **IDs:** `openai/gpt-5.5`
- **Context window:** 1,000,000 tokens (1M input context, up to 64K output tokens).
- **Modalities:** text and image input; text output; native tool calls, JSON mode.
- **Pricing (as of 2026-09-21):** $2.50 / 1M input tokens, $10.00 / 1M output tokens (standard tier).
- **Architecture:** Proprietary dense/MoE Transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **84.9%** (GDPval)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%**
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **62.0 / #6**
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **58.6%** (SWE-bench Pro)
- LiveCodeBench: **2780 Elo**
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **82.7%** (Terminal-Bench 2.0)

Long context:

- 1,000,000 token context window supported with verified long-context retrieval across full context.

### Normalized scores (1–100)

- **Tool use: 86/100.** Outstanding agentic tool execution with 82.7% on Terminal-Bench 2.0 and 84.9% on GDPval.
- **Reasoning: 91/100.** High score on GPQA Diamond (93.6%) and strong multi-step logic.
- **Context window: 95/100.** 1M input token context window with reliable retrieval.
- **Multimodal: 70/100.** Native text and vision input support; text output.
- **Coding: 84/100.** Strong terminal and repository coding performance backed by 58.6% on SWE-bench Pro and 2780 Elo on LiveCodeBench.
- **Cost efficiency: 55/100.** Standard frontier pricing at $2.50/$10.00 per 1M tokens.
- **Overall Score: 85/100.** Mean of the five quality dimensions (86, 91, 95, 70, 84); top choice for autonomous tool-driven developer workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
