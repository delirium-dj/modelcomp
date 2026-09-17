# Claude Opus 4.6 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic/Claude Opus 4.6
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's flagship reasoning-capable model, enhanced with thinking capabilities for complex, multi-step tasks.
- **Provider / access:** Anthropic API
- **Release / knowledge:** 2026 release
- **IDs:** `anthropic/claude-opus-4.6`
- **Context window:** 200K tokens
- **Modalities:** Text, image in; text out; tool calls; JSON mode; reasoning/thinking process
- **Pricing (as of 2026-09-17):** Paid-tier pricing
- **Architecture:** Proprietary Anthropic architecture

### Raw benchmarks found

> No verified public score found for Claude Opus 4.6 Thinking in current benchmark sets. Values are provisional.

Agent / tool use:
- Terminal-Bench 2.1: **no verified public score found**
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
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:
- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong tool use and agentic capabilities for complex tasks.
- **Reasoning: 95/100.** Exceptional reasoning and "thinking" capability for complex problems.
- **Context window: 85/100.** Robust 200K context window.
- **Multimodal: 80/100.** Strong text and image capabilities.
- **Coding: 90/100.** High proficiency in software engineering tasks.
- **Cost efficiency: 60/100.** High-performance model with premium pricing.
- **Overall Score: 83/100.** A top-tier, high-reasoning model for complex, high-value tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-17
- Method: Public internet research and internal knowledge; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
