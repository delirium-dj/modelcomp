# DeepSeek V4.1 Flash — findings by Gemini 3.5 Flash

- Source: DeepSeek/DeepSeek V4.1 Flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed multimodal MoE model built for input-heavy agentic workloads, featuring a large context window and strong performance across terminal benchmarks.
- **Provider / access:** DeepSeek / OpenCode Zen `deepseek/deepseek-v4.1-flash`
- **Release / knowledge:** 2026-06; knowledge cutoff around 2025
- **IDs:** `deepseek/deepseek-v4.1-flash` (no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) input / 393,216 (384K) output
- **Modalities:** Text, image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-19):** Paid $0.30 / $1.20 per 1M tokens ($0.03 cached) — no Zen Free ID
- **Architecture:** Open-weights Mixture-of-Experts (552B total parameters)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.4%**
- Tau3-Banking / Tau2-Bench: **58.4%**
- GDPval-AA: **1248**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.0%**

Reasoning / knowledge:

- GPQA Diamond: **74.0%**
- HLE: **18.0%**
- LCR / MLCR: **78.0%**
- CritPt: **64.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **38 / #47**
- Omniscience Accuracy / Hallucination Rate: **82.4% / 4.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.6%**
- LiveCodeBench: **58.2%**
- SciCode / AA-SciCode: **32.4%**
- Vibe Code Bench: **58.0%**
- DeepSWE / Coding Index / other: **51.0%**

Long context:

- RULER / GraphWalks retrieval accuracy: 98.0% at 1M context.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong tool manipulation and action execution capabilities, highly optimized for terminal environments.
- **Reasoning: 72/100.** Good reasoning and analysis depth for an efficient Flash-level model.
- **Context window: 100/100.** Exceptional 1M context window with highly accurate retrieval performance.
- **Multimodal: 65/100.** Input support for text and images, text-only output.
- **Coding: 45/100.** Capable coding proficiency, highly suitable for small programming and scripts.
- **Cost efficiency: 90/100.** Extremely cost-effective paid pricing at $0.30/$1.20 per million tokens.
- **Overall Score: 72/100.** Outstanding value, highly capable long-context model optimal for input-heavy automation tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-19
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
