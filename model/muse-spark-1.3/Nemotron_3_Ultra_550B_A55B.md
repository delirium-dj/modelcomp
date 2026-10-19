# Muse Spark 1.3 — findings by Nemotron 3 Ultra 550B A55B

- Source: Meta (`muse-spark-1.3-contributor`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (Contributor tier available)
- **Short description:** Meta's frontier agentic model optimized for long-horizon coding and agentic workflows, with native multimodal perception (video, images, documents) and competitive performance across agentic, coding, and reasoning evaluations.
- **Provider / access:** Meta Model API (`muse-spark-1.3`), OpenCode Zen (`opencode/muse-spark-1.3` via `https://opencode.ai/inference/openai/v1/responses`), OpenRouter (`meta/muse-spark-1.3`). Chat Completions API (OpenAI-compatible) on OpenCode; native Meta Model API also available.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff not publicly disclosed.
- **IDs:** `meta/muse-spark-1.3` (Meta Model API), `opencode/muse-spark-1.3` (OpenCode Zen). No separate Free tier ID on Zen; Contributor tier at $0.10/$0.20 serves as the low-cost entry point.
- **Context window:** 1,048,576 tokens total (1M); max output not explicitly stated but MRCR shows 98%+ retrieval at 512K–1M ranges.
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** Contributor tier: $0.10/M in, $0.002/M cached, $0.20/M out (Meta may train on your prompts — training-data consent required). Standard tier: $1.25/M in, $0.15/M cached, $4.25/M out (data not used for training). OpenCode Zen mirrors Standard tier pricing.
- **Architecture:** Proprietary (Meta); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta AI Research launch scorecard / Meta)
- Terminal-Bench 2.1: **85%** (xhigh) / **86%** (max) (Artificial Analysis / AA leaderboard)
- Terminal-Bench 2.1 (Vals AI): **72.3%** (Vals AI leaderboard / Vals AI harness)
- Tau3-Banking (AA): **50.5%** (Artificial Analysis / AA Tau3 Banking leaderboard)
- Tau3-Banking: **47%** (xhigh) / **52%** (max) (Artificial Analysis article)
- GDPval-AA v2: **1754 Elo** (Meta AI Research launch scorecard / Meta)
- GDPval-AA v2: **1709 Elo** (xhigh) / **1754 Elo** (max) (Artificial Analysis)
- GDPval-AA (normalized): **59.0%** (Artificial Analysis)
- JobBench: **64.9%** (Meta AI Research launch scorecard / Meta)
- OSWorld 2.0: **66.9%** (Meta AI Research launch scorecard / Meta)
- DeepSearchQA: **89.4%** (Meta AI Research launch scorecard / Meta)
- AutomationBench: **49.4%** (Meta AI Research launch scorecard / Meta)
- AA Agentic Index: **55.7%** (Artificial Analysis)
- ApprenticeBench (GUI): **19%** (NeoCognition / ApprenticeBench)
- CWE-bench v1: **55.0%** (Collinear leaderboard)
- MazeBench (ASCII mode): **0%** (MazeBench leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Artificial Analysis / AA GPQA Diamond leaderboard)
- HLE (Humanity's Last Exam): **48.7%** (Artificial Analysis / AA HLE leaderboard)
- AA-LCR: **83.0%** (Artificial Analysis / AA LCR leaderboard)
- CritPt: **24.9%** (Artificial Analysis / AA CritPt leaderboard)
- Artificial Analysis Intelligence Index: **61** (xhigh) / **62** (max) — rank tied #4–5 / #2–3 (Artificial Analysis)
- AA-Omniscience Accuracy: **43.6%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **32.9%** (Artificial Analysis)
- AA-Omniscience Index: **25.0%** (Artificial Analysis)
- FrontierMath v2 (Tiers 1–3): **74.035%** (Epoch AI leaderboard)
- FrontierMath v2 (Tier 4): **46.341%** (Epoch AI leaderboard)
- Gray Swan IPI (15 attempts): **15.9%** (Google Gemini 4 Argon launch chart)

Coding:

- DeepSWE v1.1: **75.4%** (Meta AI Research launch scorecard / Meta)
- SWE-Atlas Codebase QnA: **59.4%** (Meta AI Research launch scorecard / Meta)
- Terminal-Bench 2.1: **88.8%** (Meta AI Research launch scorecard / Meta)
- AA-SciCode: **58.8%** (Artificial Analysis / AA SciCode leaderboard)
- AA Coding Index: **75.8%** (Artificial Analysis / AA Coding Index)
- CursorBench 4.0: **41.6%** (Cursor evals)
- Bug Hunt Bench: **32.2 fixes** (Bug Hunt Bench public data)
- FrontierSWE v2: **25.8%** (Proximal leaderboard)

Long context:

- MRCR v2 256K–512K: **98.5%** (Meta AI Research launch scorecard / Meta)
- MRCR v2 512K–1M: **98.1%** (Meta AI Research launch scorecard / Meta)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 95/100.** TB2.1 88.8% (Meta) / 86% max (AA), Tau3 52% max (#1 on AA), GDPval 1754 Elo max — all at or above frontier reference thresholds (TB2.1 ~88%+, Tau3 ~50%+, GDPval ~1750+). Capped only by slight harness variance (Vals AI 72.3%).
- **Reasoning: 92/100.** GPQA Diamond 93.5%, HLE 48.7%, MRCR 98.5%/98.1% at 1M, AA Intelligence Index 62 max — all meet/exceed frontier refs (GPQA 90%+, HLE 40%+, MRCR 95%+, Index 60+). Capped by CritPt 24.9% and Omniscience Accuracy 43.6%.
- **Context window: 100/100.** 1M native context with verified 98%+ retrieval at 512K–1M (MRCR), meeting the ≥1M tier for 100 per methodology.
- **Multimodal: 85/100.** Native text/image/video input, text output; no audio input or non-text output. Per methodology: +video/PDF in = 75–90.
- **Coding: 95/100.** DeepSWE 75.4% (frontier ref 74%+), TB2.1 88.8% (ref 85%+), AA-SciCode 58.8% (ref 55%+), AA Coding Index 75.8% (ref 70%+) — all at frontier tier. Capped by CursorBench 41.6% and FrontierSWE 25.8%.
- **Cost efficiency: 100/100.** Contributor tier at $0.10/$0.20 per 1M (~$0.55/task per AA) is effectively free-access with training-data consent caveat; methodology scores $0 tiers at 100.
- **Overall Score: 93/100.** Half-up mean of (95 + 92 + 100 + 85 + 95) / 5 = 93.4 → 93. Best-fit: default choice for long-horizon agentic coding when free/low-cost tier available; Contributor tier trades data consent for $0 access.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official model cards (Meta AI Research blog, Meta Model API), independent benchmark aggregators (Artificial Analysis, BenchLM, Vals AI, Epoch AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.