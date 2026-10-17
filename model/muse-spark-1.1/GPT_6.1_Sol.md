# Muse Spark 1.1 — findings by GPT 6.1 Sol

- Source: Meta / `muse-spark-1.1`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Muse Spark 1.1
- **Short description:** Proprietary original hosted Spark version, distinct from bare earlier Muse Spark and later1.2/1.3 [S1,S4].
- **Provider / access:** Meta Model API, OpenAI-compatible Responses/Chat Completions and Messages protocols; current docs list1.1 pay-as-you-go Standard only, not Muse Code subscriptions [S4].
- **Release / knowledge:** July9,2026 per Vals; cutoff unverified [S2].
- **IDs:** `muse-spark-1.1`; no verified Free/Contributor1.1 route [S4].
- **Context window:** Primary1,048,576 total; Vals256,000 output configuration, not independently primary-verified maximum [S2,S4].
- **Modalities:** Primary docs text/image/video/audio/PDF input, text output; tools, structured output and reasoning [S4].
- **Pricing (as of 2026-10-16):** Standard$1.25/$4.25 per million in/out per Vals; cache/write rate not exact-version verified. Standard content not used to train Meta models per current docs [S2,S4].
- **Architecture:** Proprietary; parameter count undisclosed in inspected material.

### Raw benchmarks found
Agent / tool use:
- Primary MCP Atlas **88.1%**, JobBench **54.7%**, Toolathlon-Verified **75.6%**, OSWorld **80.8%**, finance v2 **57.2%**, TB2.1 **80.0%** [S1].
- Vals xhigh/256K default: TB2.1 **69.29% ±0.99**, finance **57.21% ±0.79**, legal-agent **20% ±2.94**, SkillsBench **59.19% ±4.44**, KSP horizon **1.67%** [S2]. Overrides possible. Tau3/Tau2/Claw not verified.
Reasoning / knowledge:
- Primary HLE tools **62.1%** [S1]; Vals GPQA **91.16% ±2.10**, MMLU **88.73% ±0.32** [S2].
- BenchLM secondary-only HLE no tools **52.2%**, AA-HLE **46.2%**, CritPt **15.1%**, LCR **77.7%**, Omniscience accuracy/hallucination **52.1%/50%** [S3]. Conditional hallucination metric not all-answer error rate. Exact MLCR not verified.
Coding:
- Primary SWE-Pro **61.5%**, DeepSWE1.1 **53.3%** [S1]. Vals SWE **82% ±1.72**, LiveCode **85.91% ±0.99**, Vibe1.1 **72.16% ±3.33**, migration **31.11% ±4.07**, ProgramBench **0%** [S2]. AA-SciCode58.8% secondary-only [S3].
Long context / multimodal:
- BenchLM MRCR1M **54.1%**, secondary-attributed; no primary full-window retrieval verified [S3]. Primary CharXiv **88.4%**, BabyVision **76.3%**; Vals MMMU **86.59% ±0.82** [S1,S2].

### Evidence comparison and research trail
Three fresh Google queries: `Muse Spark 1.1 official specifications`, `Muse Spark 1.1 independent benchmarks`, `Muse Spark 1.1 review pricing limitations`; interstitials. Exact primary product page, Vals and BenchLM read; Meta current model docs directly inspected earlier in session [S4]. Product page says US preview while current docs list maintained Standard availability; historical product text not proof of current global access. Vendor80% versus Vals69.29% TB2.1 retained by operator. Vals historical Index54.75% and current profile accuracy60.28% have different coverage; neither is current global ranking. BenchLM66.02/#33 of954 with40/639 coverage is separate aggregation [S3]. Strong finance/legal evidence coexists with ProgramBench0 and weak long-horizon KSP. No1.3 retrieval or free pricing transferred.

### Normalized scores (1–100)
- **Tool use: 85/100.** Good MCP/finance/legal and terminal, capped by horizon and operator variance [S1,S2].
- **Reasoning: 86/100.** Strong GPQA/HLE evidence, capped by sparse current difficult-suite/calibration reruns [S1–S3].
- **Context window: 95/100.** Verified1M, no≥98% retrieval evidence [S4].
- **Multimodal: 95/100.** Native broad audio/video/image/PDF input, text-only output [S4].
- **Coding: 85/100.** Useful SWE/Vibe/LiveCode, capped by migration and complete-program failures [S1,S2].
- **Cost efficiency: 87/100.** Competitive$1.25/$4.25 Standard; exact cache/task economics less verified [S2].
- **Overall Score: 89/100.** (85 +86 +95 +95 +85)/5=89.2 →89. Best fit supervised multimodal professional/coding workflows; cost excluded.

### Sources
- [S1] https://developer.meta.com/ai/models/muse-spark-1-1/ — exact primary product and numeric table.
- [S2] https://www.vals.ai/models/meta_muse_spark_1_1 — independent xhigh current/historical results.
- [S3] https://benchlm.ai/models/muse-spark-1-1 — secondary source-linked snapshots, October16.
- [S4] https://dev.meta.ai/docs/models — primary exact-version protocols/availability/modalities, directly read this session.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research; three searches, primary/evaluator comparison and explicitly qualified secondary-only figures. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
