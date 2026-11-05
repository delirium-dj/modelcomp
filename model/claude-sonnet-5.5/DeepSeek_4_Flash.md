# Claude Sonnet 5.5 — findings by DeepSeek 4 Flash

- Source: Anthropic / Claude Sonnet 5.5
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's mid-tier agentic workhorse (Jun 2026), the price/performance leader of the Sonnet line with 1M context and first-class coding. The default pick for production coding agents.
- **Provider / access:** Anthropic API `claude-sonnet-5-5` (Responses + Chat Completions); OpenCode Zen `opencode/claude-sonnet-5.5`.
- **Release / knowledge:** 2026-06; knowledge cutoff 2026-03.
- **IDs:** `anthropic/claude-sonnet-5-5`
- **Context window:** 1,000,000 (1M) total; 64,000 max output.
- **Modalities:** text, image, PDF in; text out; extended thinking; tool calls; structured outputs.
- **Pricing (as of 2026-11):** $3.00 / $15.00 per 1M in/out; paid only.
- **Architecture:** proprietary; dense, undisclosed scale.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.8%** (official)
- Tau3-Banking: **71.9%** (Tau3 leaderboard)
- GDPval-AA: **1483 Elo** (AA index)
- Toolathon: **80.6%** (AA tool suite)

Reasoning / knowledge:

- GPQA Diamond: **90.2%** (official)
- HLE: **40.8%** (AA HLE listing)
- CritPt: **68.5%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **43.4 / rank 4** (AA)

Coding:

- SWE-bench Verified: **85.2%** (official)
- LiveCodeBench: **77.1%** (LCB official)
- SciCode: **69.3%** (paper)

Long context:

- RULER 1M: **88.9%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 94/100.** Excellent agentic execution (Terminal-Bench 66.8, Tau3-Banking 71.9) with reliable parallel tool calls at scale.
- **Reasoning: 93/100.** GPQA Diamond 90.2, HLE 40.8 — a strong but not frontier-profile reasoning stack.
- **Context window: 96/100.** Full 1M at ~89% retrieval; the de-facto standard for long-session coding agents.
- **Multimodal: 93/100.** Solid image/PDF understanding; no generation.
- **Coding: 92/100.** SWE-bench Verified 85.2 with high LiveCodeBench — elite coding for its price tier.
- **Cost efficiency: 40/100.** $3/$15 paid-only; value is good but it is not cheap.
- **Overall Score: 94/100.** Mean of quality dims (94+93+96+93+92)/5 = 93.6 → 94; the best default coding-agent model on the market.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Sonnet 5.5 model card](https://www.anthropic.com/claude-sonnet-5-5)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
  - [LiveCodeBench](https://livecodebench.github.io/)
