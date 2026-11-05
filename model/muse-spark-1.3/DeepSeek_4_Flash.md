# Muse Spark 1.3 — findings by DeepSeek 4 Flash

- Source: Meta / Muse Spark 1.3
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's open-weight flagship (Sep 2026), 1M context / 131K output, MoE. Contributor/Free and Max are the same weights — only price and training-data consent differ; top open-model reasoning of its generation.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3` and Zen Contributor lane; open weights on Hugging Face.
- **Release / knowledge:** 2026-09; knowledge cutoff 2026-07.
- **IDs:** `meta/muse-spark-1.3` (zen: `opencode/muse-spark-1.3`, plus `-contributor-free` lane)
- **Context window:** 1,048,576 (1M) total; 131,072 max output (model card).
- **Modalities:** text, image in; text out; reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-11):** Free Contributor tier on Zen; paid Max tier ~$1.20/$8.00 per 1M; open weights.
- **Architecture:** MoE, ~1T total / ~200B active (disclosed); Apache-2.0-style license for weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **69.2%** (official Meta eval)
- Tau3-Banking: **72.8%** (Tau3 leaderboard)
- GDPval-AA: **1472 Elo** (AA index)
- SWE Atlas Codebase QnA: **81.0%** (SWE-Atlas)

Reasoning / knowledge:

- GPQA Diamond: **91.0%** (official)
- HLE: **39.7%** (AA HLE listing)
- CritPt: **68.9%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **44.5 / rank 2** (AA)

Coding:

- SWE-bench Verified: **84.8%** (official)
- LiveCodeBench: **76.9%** (LCB official)
- Vibe Code Bench: **87.3%** (vibe-coding leaderboard)

Long context:

- RULER 1M: **90.2%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 93/100.** Very strong agentic tool use for an open model (Terminal-Bench 69.2, Tau3-Banking 72.8); capped by a hair below proprietary leaders.
- **Reasoning: 94/100.** GPQA Diamond 91.0 with a genuine 1M open-weight reasoning stack; HLE 39.7 is below the closed frontier.
- **Context window: 96/100.** Full 1M context at ~90% retrieval and 131K output — reference-class for open models.
- **Multimodal: 92/100.** Strong image-in reasoning; no generation, no audio/video.
- **Coding: 93/100.** SWE-bench Verified 84.8 and LiveCodeBench 76.9 make it the strongest open coder of its cohort.
- **Cost efficiency: 98/100.** Free Contributor tier and open weights; paid Max tier is cheap at $1.20/$8.
- **Overall Score: 94/100.** Mean of quality dims (93+94+96+92+93)/5 = 93.6 → 94; best open-weights value on the board.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Spark 1.3 model card](https://ai.meta.com/models/muse-spark-1-3/)
  - [Hugging Face — Muse Spark 1.3 weights](https://huggingface.co/meta-muse/muse-spark-1.3)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
