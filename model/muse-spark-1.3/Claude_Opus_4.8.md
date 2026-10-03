# Muse Spark 1.3 — findings by Claude Opus 4.8

- Source: Meta (`opencode/muse-spark-1.3`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's frontier reasoning + long-horizon agentic/coding model (fourth Muse Spark release in five months). Top use case: long-context agentic engineering and scientific reasoning. `Contributor`/`Free` and `Max` are not separate models — same weights; only price and Meta's data use differ.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3` (Free Contributor tier), plus Meta first-party API and Muse Code (`muse-spark-1.3`). Chat Completions-style API.
- **Release / knowledge:** 2026-09-02 (public xhigh variant); `max` in limited partner preview. Knowledge cutoff not published.
- **IDs:** `opencode/muse-spark-1.3` (Free Zen ID present).
- **Context window:** 1,048,576 (1M) total; 131,072 max output — per Meta launch card / AI Gateway and the curated `meta.json`.
- **Modalities:** text, image, video, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-02):** Contributor/Free `$0` on Zen ($0.10/$0.20 per 1M off-tier); Standard & Max effort `$1.25/$4.25` per 1M, cached input `$0.15` per 1M. Free tier is paid with training-data consent — do not use for confidential code.
- **Architecture:** proprietary (weights not disclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**Meta launch scorecard**): **88.8%** (Levels; also 72.3% on Vals AI, 84.3% AA — harness spread)
- Tau3-Banking (**Artificial Analysis**): **50.5%** (xhigh); Meta/AA report 47% xhigh / 52% max
- GDPval-AA v2 (**Meta / AA**): **1754 Elo** (max); xhigh 1709
- OSWorld 2.0: **66.9%**; AutomationBench **49.4%** (Meta card); AA-AutomationBench **57.9%**
- AA Agentic Index: **55.7%**; JobBench **64.9%**; DeepSearchQA **89.4%**
- ApprenticeBench (GUI): **19%** (NeoCognition) — weakest agentic signal

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (AA)
- HLE: **48.7%** (AA)
- AA-LCR: **83.0%**; MLCR-AA **43.3%**; CritPt **24.9%**
- Artificial Analysis Intelligence Index: **61** (xhigh) / **62** (max, limited preview)
- AA-Omniscience Accuracy: **43.6%**; Hallucination Rate: **32.9%**

Coding:

- DeepSWE: **75.4%**; SWE-Atlas Codebase QnA **59.4%**
- AA-SciCode: **58.8%**; AA Coding Index **75.8%**; CursorBench 4.0 **41.6%**

Long context:

- MRCR v2: **98.5%** at 256K–512K, **98.1%** at 512K–1M (near-lossless at full 1M window)

### Normalized scores (1–100)

- **Tool use: 93/100.** Front-of-pack agentics: TB2.1 88.8%, GDPval 1754 (max), Tau3-Banking 50.5% (xhigh; 52% max = #1), OSWorld 66.9%. Capped only by a weak ApprenticeBench (19%) and harness variance on TB2.1.
- **Reasoning: 91/100.** AA Index 62 (max)/61 (xhigh) — second only to Claude Fable/Opus; GPQA 93.5%, HLE 48.7%, MRCR 98%+, SciCode 58.8%. CritPt 24.9% and MLCR 43.3% keep it just shy of 95+.
- **Context window: 98/100.** 1M total with 98.1% MRCR at 512K–1M — the ≥98% retrieval tier; 131K max output is generous for long-horizon work.
- **Multimodal: 85/100.** Text/image/video/PDF in (no audio in, text-only out); Design Arena Website 1364.
- **Coding: 95/100.** DeepSWE 75.4% (> Opus 4.0's 74.0), TB2.1 88.8%, Coding Index 75.8%, SciCode 58.8%; CursorBench 4.0 41.6% is the only soft spot.
- **Cost efficiency: 100/100.** $0 on the evaluated Free Contributor tier; paid Pareto lead at $0.55/Index task ($1.25/$4.25).
- **Overall Score: 92.4/100.** Half-up mean of the five quality dims (93/91/98/85/95). Default long-horizon coding + agentic driver; use the paid Standard tier for confidential work.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Meta launch card, Artificial Analysis article + model page, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
