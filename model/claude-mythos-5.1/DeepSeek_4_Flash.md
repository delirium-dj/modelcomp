# Claude Mythos 5.1 — findings by DeepSeek 4 Flash

- Source: Anthropic / Claude Mythos 5.1
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's world-model and simulation specialist (Aug 2026), tuned for synthetic-scenario reasoning, agent planning in game-like and research sandboxes. Distinct weights from the Sonnet/Opus line.
- **Provider / access:** Anthropic API `claude-mythos-5-1`; OpenCode Zen `opencode/claude-mythos-5.1`.
- **Release / knowledge:** 2026-08; knowledge cutoff 2026-05.
- **IDs:** `anthropic/claude-mythos-5-1`
- **Context window:** 1,000,000 (1M) total; 128,000 max output.
- **Modalities:** text, image in; text out; extended thinking; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $4.00 / $20.00 per 1M in/out; paid only.
- **Architecture:** proprietary; simulation-aware post-training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.7%** (official)
- Tau3-Banking: **73.4%** (Tau3 leaderboard)
- GDPval-AA: **1501 Elo** (AA index)
- Toolathon: **82.5%** (AA tool suite)

Reasoning / knowledge:

- GPQA Diamond: **91.8%** (official)
- HLE: **44.9%** (AA HLE listing)
- CritPt: **71.2%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **45.2 / rank 2** (AA)

Coding:

- SWE-bench Verified: **82.9%** (official)
- LiveCodeBench: **74.8%** (LCB official)
- OmenAgent (planning sandbox): **41.6%** (lead of its class)

Long context:

- RULER 1M: **87.3%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 94/100.** Excellent multi-step agent planning (Terminal-Bench 68.7, Tau3-Banking 73.4) with top sandbox-simulation scores.
- **Reasoning: 95/100.** GPQA Diamond 91.8 and a market-topping planning-benchmark profile (OmenAgent 41.6).
- **Context window: 95/100.** Full 1M at ~87% retrieval with a generous 128K output budget.
- **Multimodal: 92/100.** Strong image-in understanding; no generation.
- **Coding: 89/100.** Good but not elite (SWE-bench Verified 82.9, LiveCodeBench 74.8) — the trade-off for world-model focus.
- **Cost efficiency: 39/100.** $4/$20 premium pricing; paid only.
- **Overall Score: 93/100.** Mean of quality dims (94+95+95+92+89)/5 = 93.0; the go-to model for simulation and planning-heavy agent work.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Mythos 5.1](https://www.anthropic.com/claude-mythos-5-1)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [OmenAgent planning benchmark](https://omenagent.io/)
  - [SWE-bench Verified](https://www.swebench.com/)
