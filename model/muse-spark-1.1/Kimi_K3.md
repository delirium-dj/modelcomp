# Muse Spark 1.1 — findings by Kimi K3

- Source: Meta / Muse Spark 1.1 (`muse-spark-1.1`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's second Muse Spark iteration — strong agentic tool metrics (MCP Atlas 88.1%, Toolathlon 75.6%) and an unusually high HLE (62.1%) for its tier; middle sibling between 1.0 and 1.2.
- **Provider / access:** Meta developer API (`developer.meta.com/ai/models/muse-spark` family page); no verified OpenCode Zen ID for 1.1.
- **Release / knowledge:** 2026 release (precedes 1.2; exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `meta/muse-spark-1.1` (no Free-tier ID verified; the free tier starts at 1.2 in this repo's catalog).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (CharXiv measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; family anchors: Standard $1.25/$4.25 for 1.3-era tiers.
- **Architecture:** proprietary (Meta Superintelligence Labs); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.0%** (Vals 69.3%) (benchlm.ai)
- MCP Atlas: **88.1%**; Toolathlon: **75.6%**; OSWorld-Verified: **80.8%**; WebArena-Verified: **69.0%**; DeepSearchQA: **84.9%**; Cybench: **92.9%** (benchlm.ai)
- GDPval-AA: **1375 Elo** (35.4% normalized); AA Agentic Index: **27.5%** (benchlm.ai)
- CyberGym: **59.0%**; ExploitGym: **0.8%**; OSWorld 2.0: **14.2%** (benchlm.ai)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.8%** (AA); 91.2% (Vals) (benchlm.ai)
- HLE: **62.1%** (w/ tools); 52.2% (no tools); AA-HLE 46.2% (benchlm.ai)
- AA-LCR: **77.7%**; CritPt: **15.1%**; MRCR 1M: **54.1%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **33.7**; BenchLM overall **65.92/100, #24 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **52.1% / 50.0%** (benchlm.ai)
- HealthBench Professional: **59.3%**; MMLU-Pro (Vals): **88.7%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **82.0%**; SWE-bench Pro: **61.5%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **85.9%** (benchlm.ai)
- AA-SciCode: **58.8%**; AA Coding Index: **71.3**; DeepSWE: **53.3%** (benchlm.ai)

Long context:

- MRCR 1M: **54.1%** (verified max-window retrieval, moderate); AA-LCR 77.7% (benchlm.ai).

Multimodal:

- CharXiv: **88.4%**; BabyVision: **76.3%**; Design Arena Website: **1280 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 82/100.** MCP Atlas 88.1%, Toolathlon 75.6%, OSWorld-Verified 80.8%, WebArena 69%; capped by GDPval-AA 1375 and Agentic Index 27.5%.
- **Reasoning: 80/100.** HLE 62.1% w/ tools (elite), GPQA ~90%, LCR 77.7%; capped by AA Index 33.7 and CritPt 15.1%.
- **Context window: 80/100.** 1M window, MRCR-1M 54.1% verified but mediocre at max window; LCR 77.7% supports mid-window competence.
- **Multimodal: 76/100.** CharXiv 88.4% image input; text-only output caps it.
- **Coding: 78/100.** LiveCodeBench 85.9%, SWE-bench (Vals) 82.0%; capped by DeepSWE 53.3% and SWE-bench Pro 61.5%.
- **Cost efficiency: 70/100.** Price unverified; scored provisional on sub-flagship family positioning.
- **Overall Score: 79/100.** Mean of the five quality dims (82+80+80+76+78)/5 = 79.2 → 79. Best fit: Meta-stack agentic browsing/MCP pipelines with moderate long-context needs.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
