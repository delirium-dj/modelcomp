# Muse Spark 1.3 Contributor Free — findings by Mimo v2.6 Flash

- Source: Meta/`muse-spark-1.3-contributor-free` (OpenCode Zen free contributor tier)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor Free
- **Short description:** Meta Superintelligence Labs' flagship agentic/coding reasoning model (released 2026-09-02), same weights as standard `muse-spark-1.3`, offered free on OpenCode Zen as the Contributor tier (training-data consent + lower rate limits). Best free long-horizon coding/agentic daily driver.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3-contributor-free` (Chat Completions); also Meta Model API `muse-spark-1.3` and Muse Code. Contributor route prices at $0.10/$0.20 per 1M on Meta's own API with training permission.
- **Release / knowledge:** 2026-09-02; knowledge cutoff not disclosed.
- **IDs:** `opencode/muse-spark-1.3-contributor-free` on Zen (Free ID exists); native `meta/muse-spark-1.3`.
- **Context window:** 1,048,576 tokens (verified via Meta cookbook / model card); max output ~944K reported by LLM Stats.
- **Modalities:** text/image/video in; text out; reasoning yes (effort tiers: xhigh public, max in limited preview); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-22):** Zen Free tier $0 during free period (Cost=100 on free evaluation); Meta Contributor $0.10 in / $0.002 cached / $0.20 out per 1M (training on prompts permitted, 100 RPM); Standard $1.25 / $0.15 / $4.25 (no training). Free-tier caveat: Contributor consent + time-limited Zen free window.
- **Architecture:** proprietary (closed weights); param count undisclosed.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta scorecard, max effort, rank 4/182; AA xhigh run 85%; BenchLM 88.8%)
- DeepSWE v1.1: **75.4%** (Meta / Datacurve board, rank 1/32, max + mini-swe-agent)
- SWE-Atlas Codebase QnA: **59.4%** (Meta, rank 5/28)
- GDPval-AA v2: **1754 Elo** (Meta max; AA xhigh 1709)
- OSWorld 2.0: **66.9%** (Meta max; AA xhigh 57.2)
- AutomationBench: **49.4%** (Meta max)
- Tau3-Banking: **47%** (Artificial Analysis)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found (Benchgen reports MCP Atlas 90.3% for 1.2 lineage)

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (Meta / AA, extra-high, no tools)
- HLE: **48.7%** (max, no tools, text-only; BenchLM)
- CritPt: **26.0** (extra-high, no tools; LLMLearner, rank 10/118)
- Artificial Analysis Intelligence Index: **61** (xhigh public) / **62** (max, limited preview, rank ~6/600+)
- AA-LCR: **79%** (regressed from 83% on 1.2)
- Omniscience Accuracy: **42%** (xhigh, down from 45%)

Coding:

- SciCode: **59.7%** (extra-high; rank 5/83)
- LiveCodeBench: no verified public score found for 1.3 specifically
- SWE-bench Verified: no verified public score found (DeepSWE/SWE-Atlas used instead)
- CursorBench 4.0: **41.6%** (max, with tools; rank 4/10)

Long context:

- MRCR v2 8-needle 256K–512K: **98.5%** (Meta max, rank 1/7)
- MRCR v2 8-needle 512K–1M: **98.1%** (Meta max, rank 1/8)

### Normalized scores (1–100)

- **Tool use: 95/100.** TB2.1 88.8% (near-frontier), DeepSWE 75.4% rank-1, GDPval 1754, OSWorld 66.9%; capped slightly because max-effort figures are preview-only and Tau3 47% trails the 50%+ frontier bar.
- **Reasoning: 92/100.** GPQA 94.1%, HLE 48.7%, AA Index 61 tie frontier at lower cost; capped by HLE below 50% and AA-LCR regression to 79%.
- **Context window: 100/100.** 1M window with 98.5%/98.1% MRCR retrieval at 256K–512K and 512K–1M bands — meets the ≥98% at 512K+ bar for 100.
- **Multimodal: 85/100.** Native image + video input (text out); no audio/non-text output, so capped below 90.
- **Coding: 95/100.** DeepSWE 75.4% #1, TB2.1 88.8%, SciCode 59.7%; capped slightly by preview max-effort caveat and missing LiveCodeBench/SWE-bench Verified rows for 1.3.
- **Cost efficiency: 100/100.** Zen Free contributor tier = $0 during free period (Meta Contributor route $0.10/$0.20 with training consent).
- **Overall Score: 93/100.** Mean of five quality dims (95+92+100+85+95)/5 = 93.4 → 93. Best-fit: default free long-horizon coding/agentic driver when the free tier is available; escalate to paid standard tier only when Contributor data terms are unacceptable.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Meta scorecard, Artificial Analysis, BenchLM, BenchmarkList, Coursiv, HowAIWorks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
