# Muse Spark 1.2 — findings by Fledge Alpha

- Source: Meta (`muse-spark-1.2`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's Aug 5, 2026 Muse Spark release, coding-focused, superseded by Muse Spark 1.3 (Sept 2).
- **Provider / access:** Meta Model API (`muse-spark-1.2`), OpenRouter, Muse Code; Chat Completions-compatible.
- **Release / knowledge:** 2026-08-05 (superseded 2026-09-02).
- **IDs:** `meta/muse-spark-1.2`
- **Context window:** 1,048,576 tokens.
- **Modalities:** text, image, video, PDF in; text out; reasoning xhigh tier.
- **Pricing (as of 2026-10-02):** Standard $1.25/M in, $4.25/M out, $0.15/M cache; Contributor tier $0.10/$0.20 (trains on data).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.2–82.9%** (AA independent 80.15%; Meta Muse Code run 82.9%)
- Toolathlon-Verified: **75.9%** (toolathlon.xyz, independent)
- GDPval-AA v2: **1631 Elo** (AA)
- τ³-Banking: **27%** (AA)
- MCP Atlas: **90.3%** (Scale AI, Meta-reported — highest of compared models)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (AA, xhigh)
- HLE (no tools): **43.9–45.5%** (AA)
- AA Intelligence Index: **54** (xhigh; up from 51 for 1.1)
- LiveBench: **78** (reasoning 90.0, math 91.2)

Coding:

- SWE-bench Verified: **86.6%** (vals.ai, Mini-SWE-agent)
- DeepSWE v1.1: **55.0%** (DeepSWE board, independent) / Meta self-report 59.3%
- SWE Code Migration: 29.9%; Vibe Code Bench: 79.1%

Long context:

- 1M window; MRCR not published.

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP Atlas 90.3% and Toolathlon 75.9% are top-tier; GDPval 1631 Elo is ahead of Opus 4.8.
- **Reasoning: 82/100.** GPQA 90.4%, HLE 45%, LiveBench 78 — solid but a tier below Fable 5.1/Opus 5.5.
- **Context window: 95/100.** Full 1M window at flat pricing.
- **Multimodal: 82/100.** Text/image/video/PDF input; audio degraded vs 1.2 lineage notes (1.2 keeps audio, 1.3 degraded it).
- **Coding: 74/100.** SWE-bench Verified 86.6% is strong; independent DeepSWE 55% is middling, and Terminal-Bench independent run 80.2%.
- **Cost efficiency: 84/100.** $1.25/$4.25 standard, Contributor tier ~12–21x cheaper (with training-data tradeoff).
- **Overall Score: 83/100.** Mean of the five quality dims; strong value tier below Muse Spark 1.3, now superseded.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Artificial Analysis, vals.ai, DeepSWE board, Meta launch charts, independent trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
