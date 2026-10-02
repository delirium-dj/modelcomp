# Muse Spark 1.3 Max — findings by LongCat 2.5 Preview

- Source: Meta/Muse Spark 1.3 Max
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Max
- **Short description:** Meta's multimodal reasoning model built for long-running agentic, multi-agent, and coding workflows. Max reasoning variant with 1M context window. Scores 62 on Artificial Analysis Intelligence Index — behind only Claude Fable 5.1 and Claude Opus 5.
- **Provider / access:** Meta Model API — `muse-spark-1.3-max`. Muse Code client (macOS/Linux).
- **Release / knowledge:** 2026-09-02 release.
- **IDs:** `muse-spark-1.3-max`
- **Context window:** 1,048,576 tokens (1M); 943,718 max output.
- **Modalities:** text, image, video, file input; text output; reasoning yes (max); tool calling yes.
- **Pricing (as of 2026-10-02):** $1.25/1M input, $4.25/1M output.
- **Architecture:** Proprietary. Multimodal reasoning model. ~20% fewer tool calls and ~25% fewer tokens than Muse Spark 1.2.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta scorecard; vs Opus 5 86.7%, GPT-5.6 Sol 88.8%)
- OSWorld 2.0: **66.9%** (Meta scorecard; vs Opus 5 68.3%, Muse Spark 1.2 47.6%)
- JobBench: **64.9%** (Meta scorecard; vs Opus 5 65.7%)
- AutomationBench: **49.4%** (Meta scorecard; vs Opus 5 50.3%)
- DeepSearchQA: **89.4%** (Meta scorecard; vs GPT-5.6 Sol 93.0%)
- ApprenticeBench: **19%** (Meta scorecard)

Reasoning / knowledge:

- MRCR v2 (256K–512K): **98.5%** (Meta scorecard; vs GPT-5.6 Sol 91.5%)
- MRCR v2 (512K–1M): **98.1%** (Meta scorecard; vs GPT-5.6 Sol 73.8%)
- GDPval-AA v2 (Elo): **1754** (Meta scorecard; vs Opus 5 1824, GPT-5.6 Sol 1710)
- Artificial Analysis Intelligence Index (max): **62** (behind only Claude Fable 5.1 and Claude Opus 5)
- LiveBench Reasoning: **0.90** (#11, apxml.com)
- LiveBench Mathematics: **0.96** (#7, apxml.com)

Coding:

- DeepSWE v1.1: **75.4%** (Meta scorecard; vs Opus 5 74.0%, GPT-5.6 Sol 73.0%)
- SWEAtlas Codebase QnA: **59.4%** (Meta scorecard; vs Opus 5 52.7%, GPT-5.6 Sol 53.5%)
- Terminal-Bench 2.1: **88.8%** (Meta scorecard)
- LiveBench Coding: **0.81** (#13, apxml.com)

Long context:

- MRCR v2 (256K–512K): **98.5%** (Meta scorecard)
- MRCR v2 (512K–1M): **98.1%** (Meta scorecard)

Multimodal:

- MMMU Pro: **86.59%** (Vals AI, Muse Spark 1.1)
- Text, image, video, and file input supported

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 88.8%, OSWorld 2.0 66.9%, JobBench 64.9%. Strong agentic tool use, leading Opus 5 on Terminal-Bench. Capped by OSWorld and JobBench.
- **Reasoning: 85/100.** MRCR v2 98.5%/98.1% (exceptional long-context retrieval), Intelligence Index 62. Strong reasoning with class-leading long-context performance. Capped by GDPval-AA v2 trailing Opus 5.
- **Context window: 95/100.** 1M token context window with 943.7K max output. Among the largest available. MRCR v2 results show outstanding long-context retrieval at all ranges.
- **Multimodal: 80/100.** Text, image, video, and file input. MMMU Pro 86.59% (1.1). Strong multimodal coverage.
- **Coding: 80/100.** DeepSWE v1.1 75.4%, SWEAtlas Codebase QnA 59.4%, Terminal-Bench 2.1 88.8%. Strong long-horizon coding, leading Opus 5 on DeepSWE. Capped by SWEAtlas.
- **Cost efficiency: 65/100.** $1.25/1M input and $4.25/1M output — moderate pricing. ~20% fewer tool calls and ~25% fewer tokens than 1.2 improves efficiency. 37% higher cost per task than 1.2 at identical pricing due to heavier input-token consumption.
- **Overall Score: 84/100.** Mean of five quality dims (80+85+95+80+80)/5 = 84.0 → 84. Best fit: long-running agentic coding workflows, multi-agent orchestration, and tasks requiring exceptional long-context retrieval within a 1M token window.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
