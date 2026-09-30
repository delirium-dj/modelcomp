# Muse Spark 1.2 Free — findings by Kimi K3

- Source: Meta / Muse Spark 1.2 (`opencode/muse-spark-1.2-contributor-free`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 (Free / Contributor tier)
- **Short description:** Meta's prior-gen Muse Spark reasoning model, co-trained with Muse Code for terminal coding, MCP tool use, and whole-repo generation. Free Contributor tier on OpenCode Zen serves the 1.2 weights at $0 with training-data consent.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.2-contributor-free` (Chat Completions); paid tiers via Meta first-party API / Muse Code (dev.meta.ai/models/muse-spark). A lower-priced Contributor SKU exists whose data may be used to improve Meta products (benchlm.ai).
- **Release / knowledge:** August 2026, ahead of 1.3 (2026-09-02) (artificialanalysis.ai); knowledge cutoff not verified.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Free ID); paid `muse-spark-1.2` (Standard $1.25/$4.25).
- **Context window:** 1,048,576 (1M) tokens (benchlm.ai lists 1M; unchanged into 1.3 per artificialanalysis.ai).
- **Modalities:** text/image/audio/video/PDF in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** Free Zen tier $0 (data-consent trade); Standard $1.25/$4.25 per 1M, cached input $0.15 (Zen/Meta tier listing, artificialanalysis.ai); Contributor paid-SKU price not re-verified in my sources. AA measures $0.40 per Intelligence Index task for 1.2.
- **Architecture:** proprietary (Meta Superintelligence Labs); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (benchlm.ai; Vals 69.7%); **80%** in the AA harness (artificialanalysis.ai)
- GDPval-AA: **1631 Elo** (49.1% normalized) (benchlm.ai); GDPval-AA v2 **1615 Elo** (artificialanalysis.ai)
- Tau3-Banking (AA): **35%** (artificialanalysis.ai)
- AA Agentic Index: **44.0%** (benchlm.ai)
- Claw-Eval / Toolathlon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **90.4%** (benchlm.ai)
- HLE (AA-HLE): **45.5%** (benchlm.ai)
- AA-LCR: **79.0%** (benchlm.ai); **83%** per artificialanalysis.ai; CritPt: **17.7%** (benchlm.ai)
- Artificial Analysis Intelligence Index (native): **57** (artificialanalysis.ai, August); benchlm.ai's separately aggregated AA Index row shows **39.6%**
- AA-Omniscience Accuracy / Hallucination Rate: **45.4% / 33.3%**; AA-Omniscience Index: **27.2%** (benchlm.ai)
- MMLU-Pro (Vals): **88.3%** (benchlm.ai)
- BenchLM overall **64.61/100, #32 of 514** (benchlm.ai)

Coding:

- SWE-bench (Vals): **86.6%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench: no verified public score found
- AA-SciCode: **57.4%**; AA Coding Index: **72.2** (benchlm.ai)
- DeepSWE: **59.3%**; VulcanBench v3: **87.0%**; FrontierSWE v2: **12.0%**; Terminal-Bench 2.1: **82.9%** (benchlm.ai)
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 79.0% (benchlm.ai) / 83% (artificialanalysis.ai) at the 1M window; no separate MRCR/RULER/GraphWalks public score found.

Multimodal:

- Design Arena Website: **1318 Elo** (benchlm.ai); no third-party MMMU/CharXiv public row found.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB 2.1 82.9% (80% AA), GDPval-AA 1631, Agentic Index 44% — solid agentic coding posture; capped by Tau3-Banking 35%, Vals TB 69.7% and missing Toolathlon row.
- **Reasoning: 78/100.** GPQA 90.4%, HLE 45.5%, LCR 79–83%, respectable hallucination control (33.3%); capped by CritPt 17.7% and AA Index 57 (native).
- **Context window: 84/100.** 1M window with LCR 79.0%; capped by missing max-window retrieval probes.
- **Multimodal: 78/100.** Full image/audio/video/PDF input per Zen listing with Design Arena 1318; capped by absent MMMU/CharXiv/LVBench rows and text-only output.
- **Coding: 80/100.** SWE-bench (Vals) 86.6%, TB 2.1 82.9%, VulcanBench 87%, Coding Index 72.2; capped by FrontierSWE v2 12% and DeepSWE 59.3%.
- **Cost efficiency: 100/100.** $0 Free Zen tier (training-data consent); on paid pricing AA measures just $0.40 per Index task.
- **Overall Score: 80/100.** Mean of the five quality dims (82+78+84+78+80)/5 = 80.4 → 80. Best fit: free-tier agentic coding when 1.3's access is an issue; broadly a slightly weaker 1.3.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (benchlm.ai scorecard, artificialanalysis.ai article, Meta developer page, llm-stats.com); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: BenchLM overall 64.99/100 #28 of 507 → 64.61/100 #32 of 514; release dated August 2026 (AA); added AA-harness rows (native Index 57, TB 2.1 80%, GDPval-AA v2 1615, Tau3-Banking 35%, LCR 83%), AA-Omniscience Index 27.2% and $0.40/task; removed unverifiable Contributor $0.10/$0.20 price; scores unchanged.
- Future sources: add a new file next to this one using the same headings.
