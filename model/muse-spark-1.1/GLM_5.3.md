# Muse Spark 1.1 — findings by GLM 5.3

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's Muse Spark 1.1 agentic model (mid-2026), the generation between Muse Spark and 1.2; superseded by 1.2/1.3. Top use case: legacy Muse-line agentic coding with strong MCP/computer use.
- **Provider / access:** Meta API (developer.meta.com); **no OpenCode Zen ID** in the current Zen list (Zen carries Muse Spark 1.3 and 1.2).
- **Release / knowledge:** mid-2026 (between Muse Spark and 1.2's August release; exact date not verified this session); knowledge cutoff not publicly disclosed.
- **IDs:** Meta `muse-spark-1.1` (no Zen ID, no Free ID)
- **Context window:** 1M tokens total (BenchLM model details).
- **Modalities:** text/image/speech/video in; text out (Muse-family modality set, verified for the 1.2/1.3 siblings on AA); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** not published on tracked aggregators; Muse standard tier runs $1.25/$4.25 on 1.2/1.3 — scored provisionally at family pricing.
- **Architecture:** proprietary; Meta has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.0%** (BenchLM `muse-spark-1-1`; Vals harness 69.3%)
- MCP-Atlas: **88.1%** (BenchLM — elite); OSWorld-Verified **80.8%**; Toolathlon **75.6%**; WebArena-Verified **69%**; DeepSearchQA **84.9%**
- GDPval-AA: **1375 Elo** (BenchLM; normalized 35.4%)
- Claw-Eval: **no verified public score found**
- Cybench **92.9%**; CyberGym **59.0%**; Finance Agent v2 **57.2%**; JobBench **54.7%**; AA Agentic Index **27.5%**; ExploitGym **0.8%** (BenchLM)

Reasoning / knowledge:

- HLE: **46.2%** AA harness / **52.2%** w/o tools / **62.1%** w/ tools (BenchLM)
- GPQA Diamond: **89.8%** (AA harness; Vals 91.2% — straddles the 90% bar)
- MRCR 1M: **54.1%** (BenchLM — weak retrieval at full window); AA-LCR **77.7%**; CritPt **15.1%**
- Artificial Analysis Intelligence Index: **33.7** (BenchLM listing)
- Omniscience Accuracy / Hallucination Rate: **52.1% / 50.0%** (BenchLM)
- MMLU-Pro (Vals): **88.7%**; HealthBench Professional **59.3%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **82.0%**
- LiveCodeBench (Vals): **85.9%**
- SciCode / AA-SciCode: **58.8%**; AA Coding Index **71.3%**; SWE-bench Pro **61.5%**; DeepSWE **53.3%** (BenchLM)
- Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 1M window (BenchLM); MRCR 1M only 54.1% — retrieval degrades near the limit.

Multimodal (grounding):

- CharXiv **88.4%**; BabyVision **76.3%**; Design Arena Website **1280** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP-Atlas 88.1%, OSWorld-Verified 80.8%, Toolathlon 75.6% and DeepSearchQA 84.9% are strong; GDPval 1375 and Agentic Index 27.5% pull it down a tier vs 1.2/1.3.
- **Reasoning: 80/100.** HLE 46–62% clears the frontier bar; GPQA 89.8–91.2% straddles it; CritPt 15.1%, AA Index 33.7 and MRCR 1M 54.1% cap it.
- **Context window: 88/100.** 1M window but MRCR at 1M is only 54.1% — real retrieval collapses near the limit.
- **Multimodal: 90/100.** Full Muse-family text/image/speech/video input; CharXiv 88.4% confirms strong vision.
- **Coding: 78/100.** SWE-bench V 82.0%, LiveCodeBench 85.9%, SciCode 58.8% and Coding Index 71.3% clear frontier refs; SWE-bench Pro 61.5% and DeepSWE 53.3% drag.
- **Cost efficiency: 85/100.** Pricing unverified; provisionally at the family's $1.25/$4.25 (≈88) anchor.
- **Overall Score: 83.2/100.** (80 + 80 + 88 + 90 + 78) / 5 = 83.2. Best-fit: superseded — Muse Spark 1.2/1.3 deliver the same modality set with better agentic numbers.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, AA family specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
