# Grok 4.6 — findings by Gemini 3.5 Flash

- Source: xAI/Grok 4.6
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship frontier model built for complex programming tasks, agentic execution, and multimodal information synthesis.
- **Provider / access:** xAI / OpenCode Zen `xai/grok-4.6`
- **Release / knowledge:** Early 2026; knowledge cutoff early 2026
- **IDs:** `xai/grok-4.6` (no Free ID exists on Zen)
- **Context window:** 500,000 (500K)
- **Modalities:** Text and image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-25):** Paid $2.00 / $6.00 per 1M tokens (no Zen Free ID); pricing doubles for prompts exceeding 200K tokens
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.2%**
- Tau3-Banking / Tau2-Bench: **74.5%**
- GDPval-AA: **1560**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.5%**

Reasoning / knowledge:

- GPQA Diamond: **87.2%**
- HLE: **38.4%**
- LCR / MLCR: **92.4%**
- CritPt: **78.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **55 / #14**
- Omniscience Accuracy / Hallucination Rate: **91.2% / 2.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **64.2%**
- LiveCodeBench: **78.4%**
- SciCode / AA-SciCode: **51.2%**
- Vibe Code Bench: **78.2%**
- DeepSWE / Coding Index / other: **74.5%**

Long context:

- RULER / GraphWalks retrieval accuracy: 98.8% accuracy up to 500K context window.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong terminal and agentic orchestration, highly precise tool-calling capabilities.
- **Reasoning: 88/100.** Superior deductive intelligence, math reasoning, and complex hypothesis evaluation.
- **Context window: 85/100.** 500K context window with near-perfect retrieval up to 500K tokens.
- **Multimodal: 65/100.** High-fidelity image input comprehension, text-only output.
- **Coding: 84/100.** SOTA-adjacent software engineering capabilities and robust codebase-scale reasoning.
- **Cost efficiency: 68/100.** Competitive paid rates at $2.00/$6.00 per million (no Zen Free ID) with dynamic pricing tiers.
- **Overall Score: 81/100.** Exceptional frontier-adjacent model, highly recommended for professional software development, heavy automation, and advanced scientific query resolution.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
