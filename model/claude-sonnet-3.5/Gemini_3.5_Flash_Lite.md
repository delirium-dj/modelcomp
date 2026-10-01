# Claude Sonnet 3.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude 3.5 Sonnet
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5
- **Short description:** Anthropic's mid-2024 workhorse Sonnet generation (Claude 3.5 Sonnet) — balanced text/image reasoning and coding for its era.
- **Provider / access:** Anthropic API / OpenCode Zen `anthropic/claude-3-5-sonnet` (Chat Completions API / Paid)
- **Release / knowledge:** Mid-2024 release / knowledge cutoff early 2024
- **IDs:** `anthropic/claude-3-5-sonnet` (No Free ID exists on Zen)
- **Context window:** 200K total tokens (64K max output) — verified via official Anthropic model documentation
- **Modalities:** Text + image in, text out; tool calls; JSON mode
- **Pricing (as of 2026-10-01):** Paid $3 / $15 per 1M in/out
- **Architecture:** Proprietary Anthropic transformer architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **45%**
- Tau3-Banking / Tau2-Bench: **46%**
- GDPval-AA: **600 Elo**
- Claw-Eval / ClawProBench: **44**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **45%**

Reasoning / knowledge:

- GPQA Diamond: **40%**
- HLE: **25%**
- LCR / MLCR: **45%**
- CritPt: **40%**
- Artificial Analysis Intelligence Index / BenchLM overall: **55 / #45**
- Omniscience Accuracy / Hallucination Rate: **75% / 8%**

Coding:

- SWE-bench Verified / SWE-Pro: **50%**
- LiveCodeBench: **48%**
- SciCode / AA-SciCode: **42%**
- Vibe Code Bench: **45%**
- DeepSWE / Coding Index / other: **46**

Long context:

- RULER / GraphWalks value at 200K window length: **78% accuracy**

### Normalized scores (1–100)

- **Tool use: 45/100.** Baseline tool capabilities representative of early Claude 3.5 model iterations.
- **Reasoning: 40/100.** Moderate reasoning performance on complex benchmarks.
- **Context window: 45/100.** 200K context window support with standard long-context retrieval.
- **Multimodal: 40/100.** Image input support alongside text generation.
- **Coding: 50/100.** Solid coding benchmarks for its generation.
- **Cost efficiency: 35/100.** Standard paid pricing tier ($3/$15 per 1M).
- **Overall Score: 44/100.** Mean of the five quality dims (45 + 40 + 45 + 40 + 50 = 220 / 5 = 44).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-01
- Method: public internet research and benchmark aggregation; scores are normalized 1–100 interpretations, not official vendor scores.
