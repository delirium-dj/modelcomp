# Claude Opus 4.7 — findings by DeepSeek 4 Flash

- Source: Anthropic / Claude Opus 4.7
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's incremental Opus 4 refresh (Jan 2026), a mid-cycle capability bump over Opus 4.6 on coding and reasoning — a strong frontier model a step below the 4.8/5.x releases.
- **Provider / access:** Anthropic API `claude-opus-4-7`; OpenCode Zen `opencode/claude-opus-4.7`.
- **Release / knowledge:** 2026-01; knowledge cutoff late 2025.
- **IDs:** `anthropic/claude-opus-4-7`
- **Context window:** 1,000,000 (1M) total; 64,000 max output.
- **Modalities:** text, image, PDF in; text out; extended thinking; tool calls; structured outputs.
- **Pricing (as of 2026-11):** $4.00 / $20.00 per 1M in/out; paid only.
- **Architecture:** proprietary; dense, undisclosed scale.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.1%** (official)
- Tau3-Banking: **69.0%** (Tau3 leaderboard)
- GDPval-AA: **1444 Elo** (AA index)
- Toolathon: **78.4%** (AA tool suite)

Reasoning / knowledge:

- GPQA Diamond: **89.3%** (official)
- HLE: **39.6%** (AA HLE listing)
- CritPt: **67.4%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **42.2 / rank 6** (AA)

Coding:

- SWE-bench Verified: **82.7%** (official)
- LiveCodeBench: **74.3%** (LCB official)

Long context:

- RULER 1M: **86.8%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong agentic tool use (Terminal-Bench 63.1, Tau3-Banking 69.0) with reliable multi-step calls.
- **Reasoning: 91/100.** GPQA Diamond 89.3 and HLE 39.6 — clearly frontier-class.
- **Context window: 94/100.** Full 1M at ~87% retrieval; solid but below the newest Opus.
- **Multimodal: 90/100.** Good image/PDF understanding; no generation.
- **Coding: 89/100.** SWE-bench Verified 82.7 and LiveCodeBench 74.3 — strong, under the newest Opus.
- **Cost efficiency: 40/100.** $4/$20 premium; paid only.
- **Overall Score: 91/100.** Mean of quality dims (89+91+94+90+89)/5 = 90.6 → 91; a capable frontier model superseded on capability by Opus 4.8/5.x.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Opus 4.7](https://www.anthropic.com/claude-opus-4-7)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
  - [LiveCodeBench](https://livecodebench.github.io/)
