# Muse Spark 1.3 Contributor (Free) — findings by Kimi K3

- Source: Meta / Muse Spark 1.3 (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor (Free tier)
- **Short description:** Meta Superintelligence Labs' proprietary multimodal reasoning model for long-running agentic, multi-agent, and coding workflows, released September 2, 2026. The Contributor/Free tier on OpenCode Zen serves the same 1.3 weights at $0 in exchange for training-data consent.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3-contributor-free` (Chat Completions); paid tiers via Meta developer API (`developer.meta.com/ai/models/muse-spark`/`dev.meta.ai/models/muse-spark`).
- **Release / knowledge:** Released 2026-09-02 (felloai.com, llm-stats.com); knowledge cutoff not officially stated — no verified public value found.
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (Free ID); paid `meta/muse-spark-1.3` (Standard $1.25/$4.25) and Contributor $0.10/$0.20 tiers.
- **Context window:** 1,048,576 (1M) tokens (benchlm.ai lists 1M; llm-stats.com 1.0M).
- **Modalities:** text/image/video/PDF in; text out; reasoning yes; tool calls; JSON mode (Zen/Meta API).
- **Pricing (as of 2026-09-24):** Free Zen tier ($0, training-data consent required); Contributor $0.10/$0.20 per 1M; Standard $1.25/$4.25, cached input $0.15 (llm-stats.com).
- **Architecture:** proprietary (Meta); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (benchlm.ai; 72.3% in Vals harness)
- Tau3-Banking (AA): **50.5%** (benchlm.ai / Artificial Analysis harness)
- GDPval-AA: **1754 Elo** (58.7% normalized) (benchlm.ai)
- OSWorld 2.0: **66.9%**; JobBench: **64.9%**; DeepSearchQA: **89.4%** (benchlm.ai)
- AA AutomationBench: **57.9%**; AA Agentic Index: **55.7%**; AA Briefcase: **1597 Elo** (benchlm.ai)
- SWE-Atlas Codebase QnA: **59.4%** (benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **93.5%** (benchlm.ai)
- HLE (AA-HLE): **48.7%** (benchlm.ai)
- AA-LCR: **83.0%** (benchlm.ai)
- CritPt: **24.9%** (benchlm.ai)
- MLCR-AA: **43.3%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **48.1** (benchlm.ai); BenchLM overall unranked (partial coverage)
- AA-Omniscience Accuracy / Hallucination Rate: **43.6% / 32.9%** (benchlm.ai)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found (SWE-Atlas Codebase QnA 59.4% as closest codebase proxy)
- LiveCodeBench: no verified public score found
- AA-SciCode: **58.8%** (benchlm.ai)
- DeepSWE: **75.4%** (benchlm.ai)
- AA Coding Index: **75.8** (benchlm.ai)
- Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 256K–512K: **98.5%**; MRCR v2 512K–1M: **98.1%** (benchlm.ai) — near-ceiling long-context retrieval across the full 1M window.

Multimodal:

- Design Arena Website: **1365 Elo** (benchlm.ai); no verified public MMMU/CharXiv score found.

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval-AA 1754 Elo (58.7%), Terminal-Bench 2.1 88.8%, OSWorld 66.9% and Agentic Index 55.7% are best-in-class agentic numbers; capped modestly by Vals Terminal-Bench (72.3%) and ApprenticeBench 19%.
- **Reasoning: 85/100.** GPQA 93.5%, HLE 48.7%, LCR 83.0%, MLCR 43.3% are strong; capped by CritPt 24.9% and below-average Omniscience accuracy (43.6%).
- **Context window: 95/100.** Full 1M window with near-perfect MRCR v2 retrieval at 512K–1M (98.1%) — best-in-tier measured long-context performance.
- **Multimodal: 80/100.** Image/video/PDF input with a strong Design Arena Elo (1365), but third-party multimodal benchmark coverage is thin (no MMMU/CharXiv/LVBench published), which caps it.
- **Coding: 84/100.** DeepSWE 75.4%, SciCode 58.8%, Coding Index 75.8 and SWE-Atlas QnA 59.4% are near-frontier; capped by missing SWE-bench Verified / LiveCodeBench rows.
- **Cost efficiency: 100/100.** $0 on the Free Zen tier (training-data consent trade-off); even paid Contributor tier is $0.10/$0.20.
- **Overall Score: 87/100.** Mean of the five quality dims (90+85+95+80+84)/5 = 86.8 → 87. Best fit: long-horizon agentic coding at zero cost when data-sharing consent is acceptable.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai, llm-stats.com, Meta developer pages, felloai.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
