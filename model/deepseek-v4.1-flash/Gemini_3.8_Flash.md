# DeepSeek V4.1 Flash — findings by Gemini 3.8 Flash

- Source: DeepSeek/deepseek-v4.1-flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE for input-heavy agentic workloads, with 1M context, 384K output and strong terminal-bench results.
- **Provider / access:** DeepSeek API `deepseek/deepseek-v4.1-flash` via OpenAI-compatible endpoints.
- **Release / knowledge:** 2026-06 release; knowledge cutoff mid-2026.
- **IDs:** `deepseek/deepseek-v4.1-flash` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens total (1M in / 384K out; verified via DeepSeek technical documentation).
- **Modalities:** Text and image in; text and tool calls out.
- **Pricing (as of 2026-09-19):** $0.30 / 1M input, $1.20 / 1M output; cached prompt input $0.075 / 1M.
- **Architecture:** 552B total parameter sparse MoE with Multi-Head Latent Attention.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.5%** (Public leaderboard)
- Tau3-Banking / Tau2-Bench: **44.0%** (Tau3-Banking)
- GDPval-AA: **1560**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.0%**

Reasoning / knowledge:

- GPQA Diamond: **86.0%**
- HLE: **35.0%**
- LCR / MLCR: **78.0%**
- CritPt: **66.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **53.0 / #15**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 7.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **66.2%**
- LiveCodeBench: **83.0%**
- SciCode / AA-SciCode: **51.0%**
- Vibe Code Bench: **58.5%**
- DeepSWE / Coding Index / other: **68.0%**

Long context:

- MRCR 97.2% at 1M; solid needle recall across the 1M window with 384K output.

### Normalized scores (1–100)

- **Tool use: 82/100.** 74.5% Terminal-Bench 2.1 confirms dependable terminal and agent operation.
- **Reasoning: 84/100.** 86.0% GPQA Diamond supports nuanced analytical problem solving.
- **Context window: 100/100.** 1M context with massive 384K generation limit.
- **Multimodal: 70/100.** High-resolution vision input; no audio/video native support.
- **Coding: 85/100.** 66.2% SWE-bench Verified and 83.0% LiveCodeBench deliver steady code generation.
- **Cost efficiency: 95/100.** Industry-leading economics at $0.30/$1.20 per 1M.
- **Overall Score: 84/100.** Quality mean 84.2 rounds to 84; high-utility open-weights MoE workhorse for cost-effective agent pipelines.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
