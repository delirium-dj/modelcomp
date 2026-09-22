# Muse Spark 1.3 Contributor — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor (Free)
- **Short description:** Meta's flagship 1M-context agentic coding model released 2026-09-02; Contributor free tier shares weights with standard 1.3, optimized for long-horizon coding and tool use with 20% fewer tool calls vs 1.2.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3-contributor-free` (Responses API) and Meta API `muse-spark-1.3`; also via Vercel AI Gateway
- **Release / knowledge:** 2026-09-02; knowledge cutoff 2026-06
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (Free Contributor), `opencode/muse-spark-1.3` (paid Standard)
- **Context window:** 1,048,576 total (1M in / 128K out; max output 943,718 reported) — verified via Meta research blog and model card
- **Modalities:** Text, image, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** Free Zen tier $0/$0 (training-data consent); Contributor $0.10/$0.20 per 1M; Standard $1.25/$4.25 per 1M; $0.55/task Pareto reported
- **Architecture:** Proprietary (dense transformer, not disclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta launch report / BenchLM mirror; tie SOTA with GPT-5.6 Sol 88.8%; vs Opus 5 86.7%)
- Terminal-Bench 2.1 (Vals): **69.7%** (BenchLM Vals pending for 1.3)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (Artificial Analysis Tau3 not published for 1.3 as standalone; GDPval used as proxy)
- GDPval-AA v2: **1754 Elo** (Meta / Artificial Analysis / shattered.io; vs Opus 1824)
- GDPval-AA v2 (AA max variant): **53 on AA Intelligence Index v4.2** (Artificial Analysis model page)
- Claw-Eval / ClawProBench: **no verified public score found**
- JobBench: **64.9%** (BenchLM comparison page)
- OSWorld 2.0: **66.9%** (BenchLM / Meta)
- DeepSearchQA: **89.4%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (BenchLM model page)
- HLE: **48.7%** (BenchLM; HLE with tools variant ~52% pending)
- HLE-Verified: **no verified isolated public score found** (proxied via HLE 48.7%)
- LCR / MLCR: **no verified public score found** (MRCR used)
- MRCR v2 256K-512K: **98.5%** (Meta launch / shattered.io — highest in comparison set)
- MRCR v2 512K-1M: **98.1%** (Meta launch)
- CritPt: **24.9%** (BenchLM history via model-comparison frozen v1-3 lineage)
- Artificial Analysis Intelligence Index: **61 (AA) / 62 (xhigh variant)** (model-comparison source lineage; 53 on max variant per AA page)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **no verified isolated public score found** (SWE-Atlas proxy)
- SWE-Atlas Codebase QnA: **59.4%** (Meta launch / shattered.io)
- LiveCodeBench (Vals mirror): **no verified public score found** (BenchLM lacks LC for 1.3; DeepSWE used)
- SciCode: **58.8%** (BenchLM history)
- Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1: **75.4%** (Meta launch — beats Opus 74.0 and GPT-5.6 Sol 73.0)
- Coding Index: **no verified public score found**

Long context:

- MRCR 98.5% at 256K-512K and 98.1% at 512K-1M on 1,048,576 context; GraphWalks / RULER not separately reported, retrieval considered SOTA

### Normalized scores (1–100)

- **Tool use: 94/100.** TB2.1 88.8% tie-SOTA + GDPval 1754 near-frontier + JobBench 64.9/OSWorld 66.9; capped below 96 by trailing Opus on GDPval.
- **Reasoning: 92/100.** MRCR 98.5/98.1 SOTA retrieval + GPQA 93.5 + HLE 48.7 strong; capped by Index 61 not 65+.
- **Context window: 100/100.** 1,048,576 total with 98%+ retrieval at 512K-1M; meets 95-100 tier for ≥1M verified.
- **Multimodal: 85/100.** Text/image/video/PDF in → text out; lacks audio in / non-text out needed for 90+.
- **Coding: 95/100.** DeepSWE 75.4 leads frontier + TB2.1 88.8 + SWE-Atlas 59.4 + SciCode 58.8; capped below 97 by missing LiveCode/SWE-Verified direct.
- **Cost efficiency: 100/100.** $0 Free Zen tier during limited period (training-data consent); paid-equivalent would be 88 at Standard pricing.
- **Overall Score: 93/100.** Mean of five non-cost dims (94+92+100+85+95)/5=93.2 → 93; best-fit for long-horizon agentic coding at zero cost.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Meta research blog 2026-09-02, Artificial Analysis, BenchLM, shattered.io, Vercel gateway, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
