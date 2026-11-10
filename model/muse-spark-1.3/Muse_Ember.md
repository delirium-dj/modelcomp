# Muse Spark 1.3 — findings by Crouton Alpha

- Source: Meta/Muse Spark 1.3
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's frontier agentic reasoning model for long-horizon coding and 1M-context tool use; Contributor/Free, Standard, and Max tiers are the same weights — only price and training-data consent differ.
- **Provider / access:** Meta API `muse-spark-1.3`, OpenCode Zen `opencode/muse-spark-1.3` via `https://opencode.ai/inference/openai/v1/responses` (OpenAI Responses API).
- **Release / knowledge:** 2026-09-02 release (Meta Research blog; AA).
- **IDs:** `meta/muse-spark-1.3`, `opencode/muse-spark-1.3`.
- **Context window:** 1M tokens total (AA; BenchLM).
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** Standard/Max $1.25 input / $4.25 output per 1M (Zen; AA $1.25/$4.25, $2.39 per Index task); Contributor/Free $0 with training-data consent.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta launch scorecard); Vals Terminal-Bench 2.1 **72.3%** (Vals AI leaderboard)
- GDPval-AA: **1754** (Meta launch scorecard)
- AA Tau3 Banking: **50.5%** (Artificial Analysis: tau3-banking leaderboard)
- OSWorld 2.0: **66.9%** (Meta launch scorecard)
- AutomationBench: **49.4%** (Meta launch scorecard)

Reasoning / knowledge:

- AA-GPQA Diamond: **93.5%** (Artificial Analysis)
- AA-HLE: **48.7%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **48.1** (BenchLM listing) / **37 (Max run, #35/69)** (AA model page — Max config is verbose, 123M tokens; tier configs differ)
- CritPt: **24.9%** (Artificial Analysis)

Coding:

- DeepSWE: **75.4%** (Meta launch scorecard)
- AA Coding Index: **75.8** (Artificial Analysis)
- AA-SciCode: **58.8%** (Artificial Analysis)
- SWE-Atlas Codebase QnA: **59.4%** (Meta launch scorecard)
- FrontierSWE v2: **25.8%** (Proximal)
- CursorBench 4.0: **41.6%** (Cursor evals)

Long context:

- MRCR v2 256K–512K: **98.5%**; MRCR v2 512K–1M: **98.1%** (Meta launch scorecard)
- AA-LCR: **83.0%** (Artificial Analysis)

Multimodal:

- Design Arena Website: **1354** (OpenRouter benchmarks)
- AA supports text/image/video input (AA technical specs)

### Normalized scores (1–100)

- **Tool use: 95/100.** Terminal-Bench 2.1 88.8%, GDPval-AA 1754 and Tau3 Banking 50.5% are frontier; capped by Vals harness 72.3% and CursorBench 41.6%.
- **Reasoning: 92/100.** GPQA Diamond 93.5%, HLE 48.7%, and MRCR 98%+ show elite reasoning; capped by CritPt 24.9% and the Max-config Intelligence Index dip (37) plus 123M-token verbosity.
- **Context window: 100/100.** 1M total with ≥98% retrieval at 512K–1M (98.1%) meets the methodology's 100-point tier exactly.
- **Multimodal: 84/100.** Text/image/video in; strong Design Arena 1354, but text-only output keeps it below full omni (no audio/non-text out).
- **Coding: 94/100.** DeepSWE 75.4% and Coding Index 75.8 clear frontier refs with SciCode 58.8%; capped by FrontierSWE v2 25.8% on the hardest suite.
- **Cost efficiency: 100/100.** $0 Contributor/Free tier (same weights, data consent) scores 100; Standard/Max paid is $1.25/$4.25.
- **Overall Score: 93/100.** Mean (95+92+100+84+94)/5 = 93.0 → 93; best-fit long-horizon coding agent with free tier.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Meta Research blog, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta Research: Introducing Muse Spark 1.3](https://research.meta.ai/blog/introducing-muse-spark-1-3)
  - [Artificial Analysis — Muse Spark 1.3 (Max)](https://artificialanalysis.ai/models/muse-spark-1-3)
  - [BenchLM — Muse Spark 1.3](https://benchlm.ai/models/muse-spark-1-3)
  - [Artificial Analysis Intelligence Index Leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
