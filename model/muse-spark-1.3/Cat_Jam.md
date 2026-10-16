# Muse Spark 1.3 — findings by Cat Jam

- Source: Meta / Muse Spark 1.3 (`opencode/muse-spark-1.3`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's proprietary frontier multimodal reasoning model tuned for long-horizon agentic coding and agentic workflows. Variant/alias tiers (Contributor, 1.2, 1.1) resolve to the same weights/family where documented.
- **Provider / access:** Meta Model API (`muse-spark-1.3`, `muse-spark-1.3-contributor`), OpenCode Zen, Muse Code; Chat Completions / Responses / Messages. OpenRouter/LiteLLM host.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff not published, estimated mid-2026.
- **IDs:** `muse-spark-1.3` (Standard), `muse-spark-1.3-contributor` (Contributor); OpenCode route `opencode/muse-spark-1.3` / `opencode/muse-spark-1.3-contributor`
- **Context window:** 1,048,576 tokens (max output 943,718). Verified via Meta Model API docs and Artificial Analysis.
- **Modalities:** Text, image, video, audio* (degraded in 1.3), PDF in; text out; reasoning (minimal/low/medium/high/xhigh/max); tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Standard $1.25/$4.25 per 1M (cached $0.15); Contributor $0.10/$0.20 (cached $0.002); free promo routes exist. No long-context premium. Training-data consent on Contributor tier.
- **Architecture:** Proprietary closed-weight multimodal model (816B/42B active MoE for the separate Muse Spark Open). Muse Spark commercial is API-only.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (source: Meta launch scorecard, benchlm.ai; AA Terminal-Bench 2.1 84.3%)
- GDPval-AA: **1754** (source: Meta launch scorecard, Artificial Analysis)
- Tau3-Banking: **50.5%** (source: Artificial Analysis tau3-banking leaderboard)
- OSWorld 2.0: **66.9%** (source: Meta launch scorecard)
- JobBench: **64.9%** (source: Meta launch scorecard)
- DeepSearchQA: **89.4%** (source: Meta launch scorecard)
- AutomationBench-AA: **57.9%** (source: Artificial Analysis; Meta reports 49.4%)
- MCP Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (source: Artificial Analysis gpqa-diamond leaderboard)
- HLE: **48.7%** (source: Artificial Analysis HLE leaderboard)
- AA Intelligence Index v4.3.2: **48.1** (Max tier 62.1 on historical release-era composite)
- LCR / AA-LCR: **83.0%** (source: Artificial Analysis)
- CritPt: **24.9%** (source: Artificial Analysis)
- MRCR v2 (8-needle): **98.5% / 98.1%** (source:Meta/Artificial Analysis)
- Omniscience Accuracy / Hallucination: **43.6% / 32.9%** (source: Artificial Analysis)

Coding:

- DeepSWE v1.1: **75.4%** (source: Meta launch scorecard)
- SWE-Atlas Codebase QnA: **59.4%** (source: Meta launch scorecard)
- AA-SciCode: **58.8%** (source: Artificial Analysis scicode leaderboard)
- LiveCodeBench (composite/estimates): ~88.8% (source: benchgap estimates); no verified official LiveCodeBench score found
- SWE-bench Verified: estimated ~94.3% (low confidence, benchgap); official not published
- AA Coding Index: **75.8%** (source: Artificial Analysis)

Long context:

- MRCR v2 8-needle: **98.5% (512K) / 98.1% (512K-1M)** at 1M window (source: Meta/Artificial Analysis; near-perfect retrieval)

### Normalized scores (1–100)

- **Tool use: 93/100.** TB 2.1 88.8% is near-frontier; GDPval 1754 very strong; OSWorld 66.9% and JobBench 64.9% strong; AutomationBench 57.9%. Missing Claw-Eval/MCP Atlas cap.
- **Reasoning: 94/100.** GPQA 93.5% frontier; HLE 48.7% excellent; AA Index 48.1 strong; MRCR 98.5 confirms contextual reasoning; CritPt 24.9 caps slightly.
- **Context window: 100/100.** Verified 1,048,576 tokens with MRCR 98.5%/98.1% near-perfect retrieval at scale.
- **Multimodal: 85/100.** Text/image/video/audio*/PDF in; text only out. Audio degraded in 1.3. Strong input coverage but no audio output / degraded audio input.
- **Coding: 93/100.** DeepSWE 75.4% frontier-leading; SciCode 58.8% strong; Coding Index 75.8%; SWE-Atlas 59.4%. Missing official LiveCodeBench/SWE-bench Verified cap slightly.
- **Cost efficiency: 100/100.** $0 on free/contributor promo tiers and heavily discounted Contributor tier ($0.10/$0.20); standard $1.25/$4.25; time-limited free caveats and training-data consent.
- **Overall Score: 93/100.** Mean of (93 + 94 + 100 + 85 + 93) / 5 = 93.0. Default for long-horizon agentic coding on Meta's platform.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public internet research (Meta Model API + docs, Artificial Analysis, benchlm.ai, benchgap, codersera, truefoundry, liteLLM docs, Dataconomy, Shawn Hack); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
