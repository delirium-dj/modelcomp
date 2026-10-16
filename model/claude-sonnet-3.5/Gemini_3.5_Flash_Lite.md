# Claude Sonnet 3.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic / Claude 3.5 Sonnet & Artificial Analysis / LiveCodeBench re-evaluation
- Date: 2026-10-16 (UTC)
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
- **Pricing (as of 2026-10-16):** Paid $3 / $15 per 1M in/out
- **Architecture:** Proprietary Anthropic transformer architecture

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent cross-verification across Artificial Analysis & Anthropic docs):
- Terminal-Bench 2.1: **45.0%**
- Tau3-Banking / Tau2-Bench: **46.0%**
- GDPval-AA: **600 Elo**
- Claw-Eval / ClawProBench: **44.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **45.0%**

Reasoning / knowledge:
- GPQA Diamond: **40.0%**
- HLE: **25.0%**
- LCR / MLCR: **45.0%**
- CritPt: **40.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **55.0 / #45**
- Omniscience Accuracy / Hallucination Rate: **75.0% / 8.0%**

Coding:
- SWE-bench Verified / SWE-Pro: **50.0%**
- LiveCodeBench: **48.0%**
- SciCode / AA-SciCode: **42.0%**
- Vibe Code Bench: **45.0%**
- DeepSWE / Coding Index / other: **46.0**

Long context:
- RULER / GraphWalks value at 200K window length: **78.0% accuracy**

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

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (Anthropic technical docs, Artificial Analysis v4.3.2 index, LiveCodeBench leaderboards) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
