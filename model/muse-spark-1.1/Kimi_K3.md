# Muse Spark 1.1 — findings by Kimi K3

- Source: Meta / Muse Spark 1.1 (`muse-spark-1.1`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's second Muse Spark iteration — strong agentic tool metrics (MCP Atlas 88.1%, Toolathlon 75.6%) and an unusually high HLE (62.1%) for its tier; middle sibling between 1.0 and 1.2.
- **Provider / access:** Meta developer API (`developer.meta.com/ai/models/muse-spark` family page); no verified OpenCode Zen session volume for 1.1.
- **Release / knowledge:** Released 2026-04-08 (OpenCode Data, newly verified — my 2026-09-24 pass had "date not verified"); knowledge cutoff not stated.
- **IDs:** `meta/muse-spark-1.1` (no Free-tier ID verified; the free tier starts at 1.2 in this repo's catalog).
- **Context window:** 1M tokens; max output **131K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/PDF/video in (OpenCode Data — video input confirmed, an upgrade over my first-pass text/image note); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $1.25/M input, $4.25/M output, $0.15/M cached, $1.25 cache write (OpenCode Data catalog — verified now; matches the 1.3-era Standard anchor).
- **Architecture:** proprietary (Meta Superintelligence Labs); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.0%** (official ai.meta.com/blog launch table via OpenCode Data; matches benchlm.ai; Vals 69.3%)
- MCP Atlas: **88.1%** (official blog; matches benchlm.ai); Toolathlon-Verified: **75.6%** (official; matches); OSWorld-Verified: **80.8%** (official; matches); WebArena-Verified: **69.0%**; DeepSearchQA: **84.9%**; Cybench: **92.9%** (benchlm.ai)
- JobBench: **54.7**; Finance Agent: **57.2** (official blog — new this pass)
- GDPval-AA: **1375 Elo** (35.4% normalized); AA Agentic Index: **27.5%** (benchlm.ai)
- CyberGym: **59.0%**; ExploitGym: **0.8%**; OSWorld 2.0: **14.2%** (benchlm.ai)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.8%** (AA); 91.2% (Vals) (benchlm.ai)
- HLE: **62.1%** w/ tools (official blog; matches benchlm.ai); 52.2% (no tools); AA-HLE 46.2% (benchlm.ai)
- AA-LCR: **77.7%**; CritPt: **15.1%**; MRCR 1M: **54.1%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **33.7**; BenchLM overall **65.92/100, #24 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **52.1% / 50.0%** (benchlm.ai)
- HealthBench Professional: **59.3%**; MMLU-Pro (Vals): **88.7%** (benchlm.ai)

Coding:

- SWE-bench Pro: **61.5%** resolve rate (official blog via OpenCode Data; matches benchlm.ai); SWE-bench (Vals): **82.0%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **85.9%** (benchlm.ai)
- AA-SciCode: **58.8%**; AA Coding Index: **71.3**; DeepSWE: **53.3%** resolve rate (official blog; matches benchlm.ai)

Long context:

- MRCR 1M: **54.1%** (verified max-window retrieval, moderate); AA-LCR 77.7% (benchlm.ai); 131K max output catalog-verified.

Multimodal:

- CharXiv: **88.4%** (official blog; matches benchlm.ai); BabyVision: **76.3%** (official; matches); video input catalog-listed; Design Arena Website: **1280 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 82/100.** Unchanged: MCP Atlas 88.1%, Toolathlon 75.6%, OSWorld-Verified 80.8% (all official-confirmed); capped by GDPval-AA 1375 and Agentic Index 27.5%.
- **Reasoning: 80/100.** Unchanged: HLE 62.1% w/ tools (elite, official-confirmed), GPQA ~90%, LCR 77.7%; capped by AA Index 33.7 and CritPt 15.1%.
- **Context window: 80/100.** Unchanged: 1M window / 131K output verified; MRCR-1M retrieval 54.1% keeps it mid-band.
- **Multimodal: 78/100.** Raised from 76: catalog confirms video input alongside image/PDF; CharXiv 88.4%, BabyVision 76.3% (official-confirmed).
- **Coding: 78/100.** Unchanged: LiveCodeBench 85.9%, SWE-bench (Vals) 82.0%; capped by DeepSWE 53.3% and SWE-bench Pro 61.5% (both official-confirmed).
- **Cost efficiency: 70/100.** Verified $1.25/$4.25 family price — provisional flag removed, same band.
- **Overall Score: 79.6/100.** Mean of the five quality dims (82+80+80+78+78)/5 = 79.6 → 80 — the file records the corrected half-up mean: **80**. Best fit: Meta-stack agentic browsing/MCP pipelines with moderate long-context needs.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official ai.meta.com/blog/introducing-muse-spark-meta-model-api/ table transcribed by OpenCode Data `meta/muse-spark-1-1` incl. release/pricing/modalities; benchlm.ai scorecard from first pass). Second pass over my 2026-09-24 file: verified release (2026-04-08), pricing, 131K max output, video input; added JobBench / Finance Agent rows. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
