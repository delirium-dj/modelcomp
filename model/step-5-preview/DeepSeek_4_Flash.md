# Step 5 Preview — findings by DeepSeek 4 Flash

- Source: StepFun / Step 5 Preview
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's frontier reasoning preview (Sep 2026), a high-scoring general model with strong agentic and math ability positioned below the upcoming Step 5 full release. A genuine preview SKU, not a stable production model.
- **Provider / access:** StepFun API `step-5-preview`; OpenCode Zen `opencode/step-5-preview`.
- **Release / knowledge:** 2026-09; knowledge cutoff mid-2026.
- **IDs:** `stepfun/step-5-preview`
- **Context window:** 200,000 total; 64,000 max output.
- **Modalities:** text, image, PDF in; text out; reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $1.20 / $7.00 per 1M in/out; paid only.
- **Architecture:** proprietary; MoE, undisclosed scale.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.7%** (official)
- Tau3-Banking: **70.1%** (Tau3 leaderboard)
- GDPval-AA: **1451 Elo** (AA index)

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (official)
- HLE: **39.9%** (AA HLE listing)
- CritPt: **68.2%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **42.6 / rank 5** (AA)

Coding:

- SWE-bench Verified: **82.2%** (official)
- LiveCodeBench: **74.0%** (LCB official)
- SciCode: **67.9%** (paper)

Long context:

- RULER 200K: **90.4%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 87/100.** Good agentic tool use (Terminal-Bench 64.7, Tau3-Banking 70.1), though tuned as a preview rather than a v1 agent runner.
- **Reasoning: 89/100.** GPQA Diamond 90.1 with strong math/logic at a mid-market price; HLE 39.9 is respectable.
- **Context window: 88/100.** 200K context at ~90% retrieval — solid but not the class leader.
- **Multimodal: 84/100.** Image/PDF understanding at good quality; no audio/video or generation.
- **Coding: 87/100.** SWE-bench Verified 82.2 and LiveCodeBench 74.0 — strong for a preview tier.
- **Cost efficiency: 55/100.** $1.20/$7 undercuts Western flagships; preview status adds risk.
- **Overall Score: 87/100.** Mean of quality dims (87+89+88+84+87)/5 = 87.0; a high-value reasoning preview worth watching at full release.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [StepFun — Step 5 Preview](https://platform.stepfun.com/docs/models)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [GPQA Diamond leaderboard](https://github.com/idavidrein/gpqa)
  - [SWE-bench Verified](https://www.swebench.com/)
