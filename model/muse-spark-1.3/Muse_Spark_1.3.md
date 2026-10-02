# Muse Spark 1.3 Max — findings by Muse Spark 1.3

- Source: Meta/Muse Spark 1.3 Max (`muse-spark-1.3-max`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Max
- **Short description:** Meta Superintelligence Labs flagship max-reasoning tier (Sep 2026). Top use case is long-horizon agentic coding and multi-agent work at 1M context.
- **Provider / access:** Meta Model API (`muse-spark-1.3`, reasoning max); OpenCode Zen `opencode/muse-spark-1.3` Standard tier. Chat Completions API.
- **Release / knowledge:** 2026-09-05 Max tier listing (Vals AI); base 1.3 released 2026-09-02; knowledge cutoff not publicly disclosed
- **IDs:** `meta/muse-spark-1.3` (Standard Max); contributor `muse-spark-1.3-contributor` is cheaper training-consent tier, not Max
- **Context window:** 1,048,576 total; 131,072 max output — verified via Meta/models.dev/Vals AI
- **Modalities:** text/image/video/file in; text out; reasoning yes (max); tool calls yes (parallel); JSON mode yes; audio in degraded per Meta footnote
- **Pricing (as of 2026-09-30):** $1.25 in / $4.25 out per 1M; cache $0.15 per 1M (Meta Standard). No $0 free tier for Max.
- **Architecture:** proprietary closed weights; API only (open-weights release roadmap only)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (BenchLM muse-spark-1-3 lane, Sep 2026)
- Terminal-Bench 4.0: **24.75%** (Vals AI Muse Spark 1.3 Max, max effort)
- Tau3: **50.5%** (BenchLM); **47%/52%** (Artificial Analysis article lanes)
- GDPval: **1754** (BenchLM); **1709/1754** (Artificial Analysis)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **SWE-Atlas 59.4%** (BenchLM); MCP Atlas **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (BenchLM; pricepertoken.com 98th percentile)
- HLE: **48.7%** (BenchLM)
- LCR: **83%** (BenchLM); MRCR **98.5%/98.1%** (BenchLM)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **62 max tier, #6/636** (eesel.ai review Sep 2026; AA model page max)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public SWE-Verified number found for Max** (SWE-Atlas 59.4% above as proxy)
- LiveCodeBench: **no verified public score found**
- SciCode: **58.8%** (BenchLM)
- Vibe Code Bench v1.1: **85.86%** (Vals AI Max, 11/106); Vibe 1-100 **20.46%** (Vals)
- DeepSWE: **75.4%** (BenchLM)

Long context:

- MRCR **98.5%/98.1%** at 512K+; LCR **83%** (BenchLM) — measured retrieval at long window

### Normalized scores (1–100)

- **Tool use: 95/100.** TB2.1 88.8 plus Tau3 50.5 plus GDPval 1754 all clear frontier bars; capped by TB4.0 24.8 and no Claw.
- **Reasoning: 94/100.** GPQA 93.5 plus HLE 48.7 plus Index 62 is frontier; capped by no CritPt/Omniscience.
- **Context window: 100/100.** 1M with MRCR 98.5% at 512K+ meets 100-tier retrieval bar with 131K output.
- **Multimodal: 85/100.** Text/image/video/file in with reasoning covers file/video band; capped without audio in-grade quality or non-text out.
- **Coding: 95/100.** DeepSWE 75.4 plus SciCode 58.8 plus Vibe 85.9 plus TB 88.8 is frontier coding; capped with no direct SWE-Verified number.
- **Cost efficiency: 88/100.** $1.25/$4.25 Standard matches ~88 tier; capped well below $0.10/$0.20 contributor 97-99.
- **Overall Score: 94/100.** Mean of five quality dims (95+94+100+85+95)/5=93.8; best-fit for max-effort long-horizon coding/agents.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
