# Muse Spark 1.2 Free — findings by Mimo v2.6 Flash

- Source: Meta/`opencode/muse-spark-1.2-contributor-free` (Muse Spark 1.2)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free (Zen Contributor free tier of Muse Spark 1.2)
- **Short description:** Meta's 2026-08-05 closed-weight coding/agent model (co-trained with Muse Code terminal agent) — prior-gen step below Muse Spark 1.3; strong agentic knowledge work (GDPval 1631, AA TB2.1 80%) with aggressive Contributor pricing; free Zen tier requires training-data consent.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.2-contributor-free` (**Free** with data-consent agreement, meta); Meta Model API `muse-spark-1.2` / `-contributor`; Muse Code (macOS/Linux beta). **Closed weights** — no open-weight release (AI TLDR/Beagle).
- **Release / knowledge:** **2026-08-05** (Meta research + AA + AI TLDR). Knowledge cutoff not published.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Zen free); `muse-spark-1.2` / `muse-spark-1.2-contributor` (Meta API).
- **Context window:** **1,048,576** in / ~**131K** out (meta; AI TLDR — same 1M as 1.1, no long-context premium).
- **Modalities:** **text, image, audio, video, PDF in; text out** (meta — full multimodal input).
- **Pricing (as of 2026-09-22):** Free Zen Contributor tier (data consent); Contributor **$0.10 / $0.20** (cache $0.002); Standard **$1.25 / $4.25** (cache $0.15) per 1M (meta/AiCybr — no training on Standard).
- **Architecture:** proprietary MoE (undisclosed size); closed weights; co-trained Muse Code scaffold.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Prefer **AA independent** and **Vals common-harness** over Meta vendor tables; note three incompatible TB2.1 scales (official / Meta / AA).

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** Meta+Muse Code (vendor, **not on tbench.ai verified board**); **80%** AA independent (78%→80% 1.1→1.2); **14th of 50** Vals Terminus-2 common harness; official board has only Muse Spark **1.1** at 76.2% (Princeton mini-swe-agent)
- GDPval-AA v2: **1631 Elo** (AA — **#5 all models**, +260 vs 1.1 1371, ahead Opus 4.8 1588)
- τ³-Banking: **27%** (AA; +2 vs 1.1)
- MCP Atlas: evaluated by Meta (Scale AI harness) — exact % not in extracts
- Finance Agent (Vals): **#1 of 44** (Elevated/AiCybr via Vals); TaxEval v2 **#1 of 136**; Harvey Legal **#1 of 31** (Vals — professional-domain sweep)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **+3 vs 1.1** (AA 2026-08-05 article — exact absolute Index for 1.2 not transcribed; 1.1 baseline was mid-high; gains "concentrated in agentic evals")
- Humanity's Last Exam: **−1 vs 1.1** (AA — slight regression; absolute not transcribed)
- SciCode: **−2 vs 1.1** / BenchmarkList **56.4%** (98th pct, rank 10/458 — absolute row present but AA notes **regression** vs 1.1)
- GPQA Diamond / MMLU-Pro: no verified public score found for 1.2

Coding:

- DeepSWE v1.1: **59.3%** Meta+Muse Code (vendor; rank ~16/33 BenchmarkList; behind Opus 5 65.0, GPT-5.6 Terra 64.8 in Meta table)
- Meta Internal Coding Bench: **70.6%** (vendor — #2 behind Opus 5 79.4)
- SWE Atlas (Codebase QnA): **46.2%** (BenchmarkList self-reported 2026-09-02; rank 9/28)
- SWE-bench Pro / SWE-Verified: no verified public score found (Beagle: "No SWE-bench Pro score")
- Vals Index v1.2: **71.88% ± 1.12** (**#5 of 45**, $0.69/test — lowest cost in top-5) (Vals via AiCybr)
- Arena AI WebDev: **1534.33** (BenchmarkList, 75th pct)

Long context:

- **1M / 131K out**; MRCR/RULER: no verified public score found for 1.2

Multimodal:

- **text/image/audio/video/PDF in** (meta) — full multimodal input surface (upper band)

### Normalized scores (1–100)

- **Tool use: 86/100.** AA TB2.1 **80%** and **GDPval 1631 (#5)** are elite agentic marks; Vals common-harness TB drops it to **14/50** (co-training advantage with Muse Code partially real, partially scaffold) — high but not Sol/Opus-5 tier under one ruler.
- **Reasoning: 87/100.** AA Index **+3** (agentic-concentrated), strong professional-domain Vals #1s (Finance/Tax/Harvey), but HLE −1 and SciCode −2 regressions + no GPQA/MMLU row → slightly below pure-reasoning flagships.
- **Context window: 99/100.** Full **1M** in with no long-context price premium (meta/AI TLDR) — top band.
- **Multimodal: 90/100.** Text+image+audio+video+PDF in (meta) — upper multimodal input coverage.
- **Coding: 87/100.** DeepSWE 59.3 and Meta Internal 70.6 are strong (vendor); Vals Index #5; **no SWE-Pro/Verified row** and TB depends on Muse Code co-training → high open agentic coding, not Fable/Opus-5 frontier SWE-Pro.
- **Cost efficiency: 100/100.** **Free Zen** (meta) + Contributor $0.10/$0.20 (50× cheaper than Claude Code per AiCybr) → maximum; caveat: free tier **requires training-data consent**, Standard $1.25/$4.25 still cheap for 1M-context multimodal.
- **Overall Score: 90/100.** Mean of five quality dims (86+87+99+90+87)/5 = 89.8 → **90**. Best-fit: free/cheap multimodal agentic coding and professional knowledge work (finance/tax/legal Vals sweeps) — prefer **AA 80% / Vals 14th** over Meta's 82.9% when routing production work; Muse Code co-training means bare-API results differ from launch charts.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (research.meta.ai Muse Spark 1.2 methodology, artificialanalysis.ai Muse Spark 1.2 article, AI TLDR launch summary, Beagle harness critique, Elevated Magazines three-scales TB2.1 analysis, AiCybr Vals/verified-board tables, BenchmarkList rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
