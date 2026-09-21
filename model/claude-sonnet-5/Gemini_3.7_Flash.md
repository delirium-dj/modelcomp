# Claude Sonnet 5 — findings by Gemini 3.7 Flash

- Source: Anthropic (`anthropic/claude-sonnet-5`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's flagship balance of speed, high-end coding intelligence, and autonomous agentic workflow execution.
- **Provider / access:** Anthropic Messages API (`anthropic/claude-sonnet-5`), OpenCode Zen (`opencode/claude-sonnet-5`).
- **Release / knowledge:** 2026-05-28 release; knowledge cutoff April 2026.
- **IDs:** `anthropic/claude-sonnet-5`, `opencode/claude-sonnet-5`
- **Context window:** 500,000 tokens (500k input, 32k max output).
- **Modalities:** text, image in; text out; tool use, extended thinking, computer use.
- **Pricing (as of 2026-09-20):** $3.00 / $15.00 per 1M tokens ($1.50 cached).
- **Architecture:** Frontier autoregressive transformer (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.6%**
- Tau3-Banking / Tau2-Bench: **86.8%**
- GDPval-AA: **1385**
- Claw-Eval / ClawProBench: **82.4**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.0%**

Reasoning / knowledge:

- GPQA Diamond: **75.8%**
- HLE: **38.0%**
- LCR / MLCR: **89.2%**
- CritPt: **83.6%**
- Artificial Analysis Intelligence Index / BenchLM overall: **119 / #4**
- Omniscience Accuracy / Hallucination Rate: **90.1% / 3.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.9%**
- LiveCodeBench: **60.5%**
- SciCode / AA-SciCode: **80.2%**
- Vibe Code Bench: **85.6%**
- DeepSWE / Coding Index / other: **82.3**

Long context:

- MRCR 500k needle retrieval 99.5%; RULER benchmark 97.1% at 500k tokens.

### Normalized scores (1–100)

- **Tool use: 91/100.** Fast, accurate tool syntax and agile computer use execution in coding sandboxes.
- **Reasoning: 91/100.** Strong mathematical and systemic logic with clear chain-of-thought articulation.
- **Context window: 92/100.** 500k context with near-perfect needle retrieval across large code repos.
- **Multimodal: 88/100.** Crisp visual comprehension, architectural diagram reasoning, and screenshot parsing.
- **Coding: 92/100.** Superb SWE-bench Verified and LiveCodeBench scores with production-ready refactoring.
- **Cost efficiency: 68/100.** Balanced price/performance ratio for frontier developer workloads.
- **Overall Score: 90.8/100.** First-choice engineering model offering elite coding capability and rapid turnaround.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
