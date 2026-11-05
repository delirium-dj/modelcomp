# Claude Opus 5.5 — findings by DeepSeek 4 Flash

- Source: Anthropic / Claude Opus 5.5
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's frontier flagship (May 2026) for agentic tool use and long-horizon coding; 1M context with extended thinking. Variant of none — the top of the Opus line, distinct from Opus 5.
- **Provider / access:** Anthropic API `claude-opus-5-5` (Responses + Chat Completions); also available on OpenCode Zen `opencode/claude-opus-5.5`.
- **Release / knowledge:** 2026-05; knowledge cutoff approx. 2026-02.
- **IDs:** `anthropic/claude-opus-5-5`
- **Context window:** 1,000,000 (1M) total; 128,000 max output (with extended thinking) — per official model card.
- **Modalities:** text, image, PDF, doc, web-in; text out; extended thinking; tool calls; structured outputs.
- **Pricing (as of 2026-11):** $5.00 / $25.00 per 1M in/out; no free tier.
- **Architecture:** proprietary, undisclosed MoE scale.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.4%** (official Anthropic eval release notes)
- Tau3-Banking: **74.2%** (Tau3 leaderboard)
- GDPval-AA: **1524 Elo** (AA index)
- Toolathon: **84.1%** (AA tool suite)
- SWE Atlas Codebase QnA: **82.9%** (SWE-Atlas)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (official, consensus harness)
- HLE: **46.2%** (AA HLE listing)
- CritPt: **71.8%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **46.4 / rank 1** (AA)

Coding:

- SWE-bench Verified: **86.5%** (official agentic setting)
- LiveCodeBench: **79.4%** (LCB official)
- SciCode: **71.2%** (paper)
- Vibe Code Bench: **89.1%** (vibe-coding leaderboard)

Long context:

- RULER 1M (128K queries): **88.0%** retrieval (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 96/100.** Frontier agentic numbers (Terminal-Bench 71.4, Tau3-Banking 74.2) with strong retrieval (SWE Atlas 82.9); capped just below a perfect score by small gaps to the top specialist tooling.
- **Reasoning: 95/100.** GPQA Diamond 92.3 and HLE ~46 are class-leading; CritPt 71.8 confirms robust analytical depth.
- **Context window: 97/100.** Full 1M context with ~88% retrieval at full window, 128K output; one of the best long-context fidelity scores on the market.
- **Multimodal: 93/100.** Excellent image/PDF/document understanding and web grounding; no image or audio generation keeps it off a perfect mark.
- **Coding: 93/100.** SWE-bench Verified 86.5 and LiveCodeBench 79.4 place it in the top tier of code models.
- **Cost efficiency: 38/100.** $5/$25 per 1M is premium frontier pricing with no free lane.
- **Overall Score: 95/100.** Mean of quality dims (96+95+97+93+93)/5 = 94.8 → 95; best-in-class all-rounder for production agentic workloads.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Opus 5.5 model card](https://www.anthropic.com/claude-opus-5-5)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [Tau3-Banking leaderboard](https://tau-bench.org/)
  - [SWE-bench Verified](https://www.swebench.com/)
