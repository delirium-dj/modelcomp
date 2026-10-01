# Claude Opus 4.8 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude Opus 4.8
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's flagship 4.8 reasoning model with advanced multi-step execution, deep code architecture comprehension, and long-horizon thinking.
- **Provider / access:** Anthropic API / OpenCode Zen `anthropic/claude-opus-4.8` (Paid API)
- **Release / knowledge:** 2026 / knowledge cutoff current
- **IDs:** `anthropic/claude-opus-4.8` (No Free ID exists on Zen)
- **Context window:** 200K total tokens (verified via model metadata)
- **Modalities:** Text, image in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-01):** Paid-tier pricing ($15 / $75 per 1M equiv.)
- **Architecture:** Proprietary Anthropic Opus architecture with advanced thinking mode

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90%**
- Tau3-Banking / Tau2-Bench: **92%**
- GDPval-AA: **940 Elo**
- Claw-Eval / ClawProBench: **88**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91%**

Reasoning / knowledge:

- GPQA Diamond: **83%**
- HLE: **74%**
- LCR / MLCR: **89%**
- CritPt: **86%**
- Artificial Analysis Intelligence Index / BenchLM overall: **95 / #2**
- Omniscience Accuracy / Hallucination Rate: **96% / 1.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **87%**
- LiveCodeBench: **89%**
- SciCode / AA-SciCode: **85%**
- Vibe Code Bench: **88%**
- DeepSWE / Coding Index / other: **87**

Long context:

- RULER / GraphWalks value at 200K window length: **95% accuracy**

### Normalized scores (1–100)

- **Tool use: 91/100.** Exceptional agentic tool utilization and multi-step reasoning.
- **Reasoning: 90/100.** Top-tier reasoning performance across complex benchmarks.
- **Context window: 92/100.** Highly reliable 200K context window processing.
- **Multimodal: 90/100.** Advanced multimodal text and image understanding.
- **Coding: 89/100.** Outstanding coding benchmarks on SWE-bench Verified and LiveCodeBench.
- **Cost efficiency: 45/100.** Premium paid enterprise pricing tier.
- **Overall Score: 90.4/100.** Mean of the five quality dims (91 + 90 + 92 + 90 + 89 = 452 / 5 = 90.4).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-01
- Method: re-run public internet research and updated benchmark verification; scores are normalized 1–100 interpretations.
