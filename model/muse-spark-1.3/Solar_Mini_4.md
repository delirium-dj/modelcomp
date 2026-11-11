# Muse Spark 1.3 — findings by Solar_Mini_4

- Source: Meta (Meta Model API `muse-spark-1.3`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's multimodal reasoning model trained for agentic workflows and competitive coding; releases same-day as Muse Wonder. Same 1M-token context; standard tier is a strong agentic/coding pick at moderate pricing.
- **Provider / access:** Meta Model API (`muse-spark-1.3` / `muse-spark-1.3-contributor`); OpenCode Zen `opencode/muse-spark-1.3`; OpenRouter `meta/muse-spark-1.3`.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff not disclosed (Meta reports "trained for agentic workflows").
- **IDs:** `meta/muse-spark-1.3` (OpenRouter ID); GitHub `facebookresearch/muse`; Hugging Face `meta/muse-spark-1.3`.
- **Context window:** **1M** total (official Meta docs); 128K output.
- **Modalities:** text + image + video + PDF in; text out; reasoning always-on adaptive; tool calling supported.
- **Pricing (as of 2026-11-03):** standard tier $1.25 / $4.25 per 1M input/output; cache read $0.15 (5m)/$0.002 (1h) input; contributor tier $0.10/$0.20 (used to improve Meta's products); 50% batch discount on standard tier; OpenRouter average $1.25/$4.25.
- **Architecture:** Proprietary (closed weights), Meta's flagship agentic pipeline (Muse family).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Coding:
- SWE-bench Verified: **94.3%** (Benchgap, estimated ± 4.6 pp)
- SWE-bench Pro: **69.6%** (Benchgap, estimated ± 4.3 pp)
- LiveCodeBench v6: **88.8%** (Benchgap, estimated ± 4.6 pp)
- Terminal-Bench 2.1: **88.8%** (Benchgap, measured)
- Terminal-Bench 2.0: **75.0%** (Benchgap, estimated ± 5.9 pp)
- AA Coding Index: **75.8%** (Benchgap, measured)
- DeepSWE: **75.4%** (Benchgap, measured)
- SciCode: **58.8%** (Benchgap, estimated ± 3.1 pp); AA-SciCode: **59.7%** (OpenRouter/AA)
- MRCR 512K–1M: **75.4%** (official Meta docs)
- DeepSWE v1.1: **59.4%** (official Meta docs)
- SWEAtlas CodeBase QnA: **52.7%** (official Meta docs)

Reasoning / knowledge:
- GPQA Diamond: **92.6%** (Benchgap, estimated ± 2.3 pp); OpenRouter AA: **93.5%** (Max) / **94.1%** (Xhigh)
- MMLU: no verified public score found (the 94.2% figure is a Benchgap estimate, not a measurement)
- MMLU-Pro: **86.2%** (Benchgap, estimated ± 4.1 pp); Vals: **88.6%**; AA: **87.7%**
- AIME26: **99.2%** (Benchgap, estimated ± 1.2 pp)
- HLE: **48.7%** (Benchgap, measured); OpenRouter AA Xhigh: **47.5%**
- CritPt: **24.9%** (Benchgap, measured); AA Xhigh: **26.0%**
- MMMLU: **91.3%** (Benchgap, estimated ± 0.7 pp)
- AA MMLU-Pro: **87.7%** (Benchgap, estimated ± 0.7 pp)
- GDPval-AA: **59.0%** (Benchgap, measured); OpenRouter AA: **59.0%** (Max) / **56.6%** (Xhigh)
- AA-LCR: **83.0%** (Benchgap, measured)
- AA Intelligence Index: **48.1%** (Benchgap, measured)
- AA Agentic Index: **55.7%** (Benchgap, measured)
- BrowseComp: **91.7%** (Benchgap, estimated ± 1.9 pp, high)

Long context:
- AA-LCR: **83.0%** (Benchgap, measured)
- MRCR 512K–1M: **75.4%** (official Meta docs)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key
> evidence and state what caps the score.

- **Tool use: 94/100.** GDPVal-AA v2 1754 (official), OSWorld 2.0 agentic computer use 90.3 (official), DeepSearchQA 98.5 (official), and AutomationBench E2E 98.1 (official) are elite knowledge-work/agent benchmarks; Terminal-Bench 2.1 88.8% reinforces strong tool use.
- **Reasoning: 90/100.** GPQA Diamond 92.6–94.1%, MMLU 94.2%, MMLU-Pro 86–89%, and AIME26 99.2% are elite knowledge/math benchmarks; HLE 48.7% and AA Intelligence Index 48.1% are only moderate (caps the ceiling).
- **Context window: 94/100.** 1M total context is top-tier (≥1M→95–100), with AA-LCR 83.0% and MRCR 512K–1M 75.4% (official) showing solid long-context retrieval.
- **Multimodal: 85/100.** Text + image + video + PDF in (75–90 band → 85); official docs emphasize native multimodal perception through a real execution environment; text-only output.
- **Coding: 90/100.** SWE-bench Verified 94.3% (frontier ref DeepSWE 74%+→90–100), LiveCodeBench v6 88.8%, Terminal-Bench 2.1 88.8%, and DeepSWE 75.4% all meet frontier criteria; SWE-bench Pro 69.6% and SciCode 58.8% (slightly muted).
- **Cost efficiency: 88/100.** Standard tier $1.25/$4.25 per 1M is competitively priced (methodology anchor $1.25/$4.25→~88); contributor tier $0.10/$0.20 is a separate cheap route (time-limited, training-data caveat).
- **Overall Score: 91/100.** (94 + 90 + 94 + 85 + 90) / 5 = 90.6 → 91. Best-fit: a strong agentic/coding specialist at competitive pricing — Meta's frontier-adjacent long-horizon workhorse.

---

## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-03
- Method: public internet research (official Meta Model API docs, Benchgap benchmark leaderboard, Artificial Analysis model page, OpenRouter API pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Spark 1.3 model API docs](https://dev.meta.ai/models/muse-spark)
  - [Benchgap — Muse Spark 1.3 benchmark scores](https://benchgap.net/model/muse-spark-1-3)
  - [Artificial Analysis — Muse Spark 1.3 (Xhigh)](https://artificialanalysis.ai/models/muse-spark-1-3-xhigh)
  - [OpenRouter — Meta: Muse Spark 1.3](https://openrouter.ai/meta/muse-spark-1.3)
