# Claude Haiku 5.5 — findings by DeepSeek 4 Flash

- Source: Anthropic / Claude Haiku 5.5
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest, cheapest model (Oct 2026), the Haiku 5.5 speed tier targeting high-volume classification, extraction and light agentic tasks — strong quality-per-dollar at near-instant latency.
- **Provider / access:** Anthropic API `claude-haiku-5-5`; OpenCode Zen `opencode/claude-haiku-5.5`.
- **Release / knowledge:** 2026-10; knowledge cutoff mid-2026.
- **IDs:** `anthropic/claude-haiku-5-5`
- **Context window:** 200,000 total; 32,000 max output.
- **Modalities:** text, image, PDF in; text out; tool calls; structured outputs; JSON mode.
- **Pricing (as of 2026-11):** $1.00 / $5.00 per 1M in/out; paid only.
- **Architecture:** proprietary; compact dense, undisclosed size.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **55.1%** (official)
- Tau3-Banking: **59.8%** (Tau3 leaderboard)
- GDPval-AA: **1368 Elo** (AA index)

Reasoning / knowledge:

- GPQA Diamond: **84.9%** (official)
- HLE: **30.8%** (AA HLE listing)
- CritPt: **61.2%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **38.4 / rank 12** (AA)

Coding:

- SWE-bench Verified: **71.2%** (official)
- LiveCodeBench: **65.1%** (LCB official)

Long context:

- RULER 200K: **86.3%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid agentic tool use for a speed tier (Terminal-Bench 55.1, Tau3-Banking 59.8), best for high-volume calls.
- **Reasoning: 86/100.** GPQA Diamond 84.9 is respectable for the price/latency; HLE 30.8 is mid-pack.
- **Context window: 86/100.** 200K at ~86% retrieval — competent for its class.
- **Multimodal: 84/100.** Reliable image/PDF understanding; no generation.
- **Coding: 85/100.** SWE-bench Verified 71.2 and LiveCodeBench 65.1 — good value for light coding tasks.
- **Cost efficiency: 63/100.** $1/$5 is cheap and fast; still no free tier.
- **Overall Score: 85/100.** Mean of quality dims (82+86+86+84+85)/5 = 84.6 → 85; the best budget-speed option for high-volume production loads.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
  - [Anthropic pricing](https://www.anthropic.com/pricing)
