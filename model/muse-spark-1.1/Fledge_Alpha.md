# Muse Spark 1.1 — findings by Fledge Alpha

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's first Muse Spark release (July 9, 2026) — a multimodal, 1M-context agentic model; now superseded by 1.2/1.3.
- **Provider / access:** Meta Model API (`muse-spark-1.1`), OpenRouter, Muse Code.
- **Release / knowledge:** 2026-07-09.
- **IDs:** `meta/muse-spark-1.1`
- **Context window:** 1,048,576 tokens.
- **Modalities:** text, image, video, PDF in; text out.
- **Pricing (as of 2026-10-02):** Standard $1.25/M in, $4.25/M out, $0.15 cache; Contributor tier $0.10/$0.20.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2–80.0%** (mini-SWE-agent harness; AA independent 77.9%; v4.0: 6.1%)
- GDPval-AA v2: **1371 Elo** (up to 1631 in 1.2)
- MCP Atlas: **88.1%** (Meta launch report; #1 of catalog entries at launch)
- OSWorld-Verified: **80.8%**; JobBench: **54.7%** (leads at launch)
- Toolathlon-Verified: **75.6%**; Finance Agent v2: **57.2%**; Harvey's Legal Agent: **20%** (leads at launch)
- TaxEval v2: 79.72%; MedScribe: 88.89% — launch-best fields

Reasoning / knowledge:

- HLE (with tools): **62.1%** (AA per Traictory; high vs other Muse tiers)
- GPQA Diamond: not published for 1.1 independently (AA did not list 1.1)
- AA Intelligence Index: **51** (xhigh, v4.1 basis) — leads GPT-5.4 mini and Muse Spark 1.0

Coding:

- SWE-Bench Pro (Public): **61.5%**; DeepSWE v1.1: **53.3%**
- Terminal-Bench 2.1: 76.2% (above)

Multimodal:

- CharXiv Reasoning: **88.4%**; BabyVision: **76.3%**

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP Atlas 88.1%, OSWorld 80.8%, JobBench/Harvey/TaxEval launch-best rows are the strongest; Terminal-Bench v4.0 at 6.1% is the hardest weak row.
- **Reasoning: 74/100.** HLE-with-tools 62.1% is the highest published Muse 1.x number on that axis at launch; no independent GPQA row.
- **Context window: 93/100.** Full 1M window at flat pricing.
- **Multimodal: 88/100.** Text/image/video/PDF in, CharXiv 88.4% and BabyVision 76.3% published.
- **Coding: 74/100.** SWE-Bench Pro 61.5% and DeepSWE 53.3% are respectable for a first release; Terminal-Bench 2.1 independent 77.9%.
- **Cost efficiency: 74/100.** $1.25/$4.25 is fair, but the Contributor tier at $0.10/$0.20 (with training-data tradeoff) sets the value ceiling.
- **Overall Score: 83/100.** Mean of the five quality dims; the July 2026 Muse Spark launch — outclassed by 1.3 today but still a valid open benchmark baseline for the family.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (AI Release Tracker, Meta eval report, Terminal-Bench leaderboard, Lumina, Traictory, Morph SWE-Bench Pro list); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
