# Muse Spark 1.3 (Contributor Free) — findings by Qwen 3.8 Flash

- Source: Meta / Muse Spark 1.3 (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor (Free Zen tier of Meta's Muse Spark 1.3)
- **Short description:** Meta's frontier coding/agentic model, released 2026-09-02, tuned for long-horizon software and tool-use tasks; the Contributor tier shares weights with standard 1.3 and is $0 in exchange for training-data consent.
- **Provider / access:** Meta Model API (`muse-spark-1.3`) and OpenCode Zen (`opencode/muse-spark-1.3-contributor-free`, `$0` free tier). Responses-style endpoint; also on Vercel AI Gateway. Chat/agent use, 165 tok/s class throughput.
- **Release / knowledge:** 2026-09-02 release (Meta Research). Knowledge cutoff not disclosed.
- **IDs:** `meta/muse-spark-1.3` (Meta Model API); `opencode/muse-spark-1.3-contributor-free` (Free Zen tier).
- **Context window:** 1,048,576 (1M) in / ~943.7K max out (llm-stats + Artificial Analysis model page).
- **Modalities:** text, image, video, PDF in; text out; reasoning on; tool calls; JSON mode. No audio in/out.
- **Pricing (as of 2026-10-02):** Free Zen Contributor tier $0 (time-limited, training-data consent); Contributor $0.10 / $0.20 per 1M; Standard $1.25 / $4.25 per 1M (cached input $0.15/1M). Scored on the evaluated Free tier.
- **Architecture:** proprietary, hosted only (no public weights); MoE specifics undisclosed.

### Raw benchmarks found

> Numbers below are independently verified against BenchLM rows citing the Meta AI Research "Introducing Muse Spark 1.3" launch scorecard and Artificial Analysis leaderboards (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1 (**agentic**): **88.8%** (Meta scorecard; AA 84.3%, Vals 72.3%, TB 4.0 33.3%)
- Tau3-Banking: **50.5%** (Artificial Analysis leaderboard)
- GDPval-AA: **1754** Elo (Meta scorecard; AA-normalized 58.6%)
- OSWorld 2.0: **66.9%** (Meta scorecard)
- AutomationBench: **49.4%** (Meta scorecard) / AA 57.9%
- AA Agentic Index: **55.7%**; JobBench 64.9%; DeepSearchQA 89.4%; AA Briefcase 1586 Elo
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found for this exact ID

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Artificial Analysis)
- HLE: **48.7%** (Artificial Analysis)
- MRCR v2: **98.5%** (256K–512K) / **98.1%** (512K–1M) (Meta scorecard)
- AA-LCR (long-context reasoning): **83.0%**; MLCR-AA 43.3%
- CritPt: **24.9%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **48.1**
- Omniscience Accuracy / Hallucination Rate: **43.6% / 32.9%** (Artificial Analysis)

Coding:

- DeepSWE: **75.4%** (Meta scorecard)
- SWE-Atlas Codebase QnA: **59.4%** (Meta scorecard)
- AA-SciCode: **58.8%** (Artificial Analysis)
- AA Coding Index: **75.8%**; Terminal-Bench 2.1 88.8%; CursorBench 4.0 41.6%
- CWE-bench v1: 55.0% (Collinear)

Long context:

- MRCR v2 98.5% (256K–512K) and 98.1% (512K–1M) at the full 1M window (Meta scorecard); AA-LCR 83.0%.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 95/100.** Terminal-Bench 2.1 88.8%, Tau3-Banking 50.5%, GDPval-AA 1754 and OSWorld 66.9% all sit at the frontier band (TB 88%+, Tau3 ~50%, GDPval 1750+ → 90–100). Capped from 100 by AutomationBench/Agentic-Index mid-50s and no verified Claw-Eval/Toolathon number.
- **Reasoning: 91/100.** GPQA Diamond 93.5%, HLE 48.7%, MRCR ~98% to 1M and AA-LCR 83% clear frontier refs; held below 95 by CritPt 24.9%, Omniscience accuracy 43.6% and a mid-pool Intelligence Index (48.1).
- **Context window: 100/100.** 1M-token window with ≥98% measured retrieval at 512K–1M (MRCR 98.1%) meets the "100 if ≥98% at 512K+" tier.
- **Multimodal: 85/100.** Accepts text, image, video and PDF in and returns text out (75–90 band); no audio input and no non-text output, so short of the 90–100 omni tier.
- **Coding: 95/100.** DeepSWE 75.4%, AA Coding Index 75.8%, SciCode 58.8% and Terminal-Bench 88.8% meet/exceed every frontier coding ref (DeepSWE 74%+, SciCode 55%+, Coding Index 70%+); capped by CursorBench 41.6% and modest SWE-Atlas 59.4%.
- **Cost efficiency: 100/100.** Evaluated on the $0 Free Zen Contributor tier (time-limited, training-data consent); paid Standard is $1.25/$4.25 per 1M (≈88 if scored on paid pricing).
- **Overall Score: 93/100.** Mean of Tool 95, Reasoning 91, Context 100, Multimodal 85, Coding 95 = 93.2 → 93. Best fit: default long-horizon coding / agentic pick when the free tier is available; do not route confidential code through the consent-based free tier.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (Meta AI Research launch scorecard and Artificial Analysis leaderboards via BenchLM, llm-stats.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
