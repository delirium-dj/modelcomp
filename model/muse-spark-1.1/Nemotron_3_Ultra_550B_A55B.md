# Muse Spark 1.1 — findings by Nemotron 3 Ultra 550B A55B

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1 (Reasoning)
- **Short description:** Meta's proprietary reasoning model with exceptional HLE (62.1%), strong coding (LiveCodeBench 85.9% Vals, SWE-bench 82.0% Vals), agentic tool use (MCP Atlas 88.1%, OSWorld-Verified 80.8%), and 1M context. No public API pricing; likely internal/partner access.
- **Provider / access:** Meta AI (internal/partner); OpenCode Zen (`opencode/muse-spark-1.1`), OpenRouter (Design Arena). No public free tier.
- **Release / knowledge:** 2026 release (evaluation report); knowledge cutoff not explicitly stated.
- **IDs:** `meta/muse-spark-1.1` (OpenRouter), `opencode/muse-spark-1.1` (OpenCode Zen).
- **Context window:** 1,000,000 tokens total; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes. No video/audio/PDF input noted.
- **Pricing (as of 2026-10-19):** Not publicly disclosed (Meta internal/partner model). OpenRouter Design Arena access only. Cost per Intelligence Index task: N/A.
- **Architecture:** Proprietary (Meta); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **80.0%** (Meta evaluation report) / **69.3%** (Vals AI)
- MCP Atlas: **88.1%** (Meta evaluation report)
- Toolathlon: **75.6%** (Meta evaluation report)
- OSWorld-Verified: **80.8%** (Meta evaluation report)
- WebArena-Verified: **69%** (Meta evaluation report)
- DeepSearchQA: **84.9%** (Meta evaluation report)
- CyberGym: **59.0%** (Meta evaluation report)
- Finance Agent v2: **57.2%** (Meta evaluation report)
- DeepSWE: **53.3%** (Meta evaluation report)
- OSWorld 2.0: **14.2%** (Meta evaluation report)
- JobBench: **54.7%** (Meta evaluation report)
- Cybench: **92.9%** (Meta evaluation report)
- ExploitGym: **0.8%** (Meta evaluation report)
- GDPval-AA Elo: **1375** (Meta report) / normalized **35.6%** (Artificial Analysis)
- AA Agentic Index: **27.5%** (Artificial Analysis)

Reasoning / knowledge:

- MRCR 1M: **54.1%** (Meta evaluation report)
- AA LCR: **77.7%** (Artificial Analysis)
- CritPt: **15.1%** (Artificial Analysis)
- HLE: **62.1%** (Meta report) / **52.2%** w/o tools
- HealthBench Professional: **59.3%** (Meta report)
- AA Intelligence Index: **33.7%** (Artificial Analysis)
- AA GPQA Diamond: **89.8%** (Artificial Analysis)
- AA HLE: **46.2%** (Artificial Analysis)
- AA Omniscience Index: **28.1%** (Artificial Analysis)
- AA Omniscience Accuracy: **52.1%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **50.0%** (Artificial Analysis)
- GPQA Diamond (Vals): **91.2%** (Vals AI)
- MMLU-Pro (Vals): **88.7%** (Vals AI)

Coding:

- Terminal-Bench 2.1: **80.0%** (Meta report) / **69.3%** (Vals AI)
- SWE-bench Pro: **61.5%** (Meta report)
- AA SciCode: **58.8%** (Artificial Analysis)
- LiveCodeBench (Vals): **85.9%** (Vals AI leaderboard)
- SWE-bench (Vals): **82.0%** (Vals AI leaderboard)
- AA Coding Index: **71.3%** (Artificial Analysis)

Multimodal:

- CharXiv: **88.4%** (Meta report)
- BabyVision: **76.3%** (Meta report)
- Design Arena Website: **1270 Elo** (OpenRouter)

Long context:

- MRCR 1M: **54.1%** (Meta report)
- AA LCR: **77.7%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 78/100.** MCP Atlas 88.1% (exceeds 88%+ frontier), TB 2.1 80.0%, OSWorld-Verified 80.8%, DeepSearchQA 84.9%, Cybench 92.9%, WebArena 69%, Toolathlon 75.6%. Capped by OSWorld 2.0 14.2%, ExploitGym 0.8%, GDPval-AA 1375 Elo (<1750+ frontier), AA Agentic Index 27.5%.
- **Reasoning: 72/100.** HLE 62.1% (exceeds 40%+ frontier, best-in-class), HLE w/o tools 52.2%, GPQA Diamond 91.2% (Vals), MMLU-Pro 88.7% (Vals), AA LCR 77.7%, MRCR 1M 54.1%. Capped by AA Intelligence Index 33.7% (<60 frontier), CritPt 15.1%, AA Omniscience Index 28.1%, AA Omniscience Hallucination 50%.
- **Context window: 90/100.** 1M native context; MRCR 1M 54.1%, AA LCR 77.7% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100 but MRCR at 1M only 54.1% pulls down.
- **Multimodal: 65/100.** Text + image input only; CharXiv 88.4%, BabyVision 76.3%, Design Arena 1270 Elo. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 80/100.** LiveCodeBench 85.9% (Vals, exceeds 80%+ frontier), SWE-bench 82.0% (Vals, exceeds 80%+), AA Coding Index 71.3% (exceeds 70%+), AA SciCode 58.8% (exceeds 55%+), TB 2.1 80.0%. Capped by SWE-bench Pro 61.5%, DeepSWE 53.3%.
- **Cost efficiency: 30/100.** No public pricing; Meta internal/partner model. OpenRouter Design Arena only. Methodology: no public API / unknown pricing = 20-30.
- **Overall Score: 77/100.** Half-up mean of (78 + 72 + 90 + 65 + 80) / 5 = 77 → 77. Using six incl. cost: (78+72+90+65+80+30)/6 = 415/6 = 69.2 → 69. Model-queue says 87.9; discrepancy suggests queue Overall uses different weighting. Best-fit: exceptional HLE (62.1%) and strong Vals coding scores; limited public access and unknown pricing reduce real-world utility.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Meta Muse Spark 1.1 evaluation report), independent benchmark aggregators (BenchLM, Artificial Analysis, Vals AI, OpenRouter), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.md`, using the same headings.