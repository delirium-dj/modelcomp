# Muse Spark 1.3 — findings by Beam

- Source: Meta/Muse Spark 1.3, `meta/muse-spark-1.3`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's latest multimodal reasoning model tuned for agentic, multi-agent, and coding workflows with long-context reasoning; recommended for new work over Muse Spark 1.2/1.1. Improves long-horizon agent collaboration, instruction following, and coding efficiency.
- **Provider / access:** Meta Model API `muse-spark-1.3` (Chat Completions); also OpenRouter `meta/muse-spark-1.3`; OpenCode Zen `opencode/muse-spark-1.3`. Reasoning effort levels including `max`.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff not published.
- **IDs:** `meta/muse-spark-1.3`
- **Context window:** 1,048,576 tokens total; max output 131,072 (verified via Meta docs and OpenCode data).
- **Modalities:** text, image, video, PDF, audio in; text out; reasoning yes; tool calling yes; JSON/structured output yes.
- **Pricing (as of 2026-10-17):** $1.25 / 1M input, $4.25 / 1M output, $0.15 / 1M cached input; paid (proprietary).
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta AI Research launch scorecard)
- GDPval-AA: **1754 Elo** (Meta launch scorecard); 59.0% (Artificial Analysis)
- AA Tau3-Banking: **50.5%** (Artificial Analysis)
- JobBench: **64.9%** mean rubric (Meta)
- OSWorld 2.0: **66.9%** mean partial (Meta)
- DeepSearchQA: **89.4%** (Meta)
- AutomationBench: **49.4%** (Meta)
- ApprenticeBench: **19%** (Meta)
- CWE-bench v1: **55.0%** (Meta)
- MazeBench: **0%** (Meta)
- Toolathlon / MCP-Atlas: no verified public score found (coming soon)

Reasoning / knowledge:

- GPQA Diamond (AA): **93.5%**
- HLE (AA): **48.7%**
- Artificial Analysis Intelligence Index: **48.1**
- CritPt: **24.9%** (AA)
- AA-LCR: **83.0%**
- MRCR v2 256K-512K: **98.5%**; 512K-1M: **98.1%** (Meta)
- Omniscience: no verified public score found

Coding:

- AA Coding Index: **75.8**
- DeepSWE: **75.4%**
- SWE-Atlas Codebase QnA: **59.4%**
- AA-SciCode: **58.8%**
- CursorBench 4.0: **41.6%**
- Bug Hunt Bench: **32.2 fixes**
- FrontierSWE v2: **25.8%**
- SWE-bench Verified/Pro: no verified public score found (coming soon)

Long context:

- MRCR v2 256K-512K 98.5%, 512K-1M 98.1%; AA-LCR 83.0% at 1M window.

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong agentic profile (Terminal-Bench 88.8%, OSWorld 66.9%, DeepSearchQA 89.4%, GDPval 1754 Elo); caps at unverified MCP-Atlas/Toolathlon.
- **Reasoning: 88/100.** GPQA 93.5% and MRCR ~98%, HLE 48.7% and AA Intelligence 48.1 cap higher.
- **Context window: 95/100.** 1M window with measured 98.5%/98.1% retrieval; caps at AA-LCR 83.0%.
- **Multimodal: 90/100.** Text/image/video/PDF/audio in, text out; audio understanding degraded per Meta docs.
- **Coding: 88/100.** AA Coding Index 75.8, DeepSWE 75.4%, Terminal-Bench 88.8%; caps at unverified SWE-bench Verified/Pro.
- **Cost efficiency: 85/100.** Paid at $1.25/$4.25 per 1M; competitive mid-tier pricing.
- **Overall Score: 90/100.** Mean of five quality dims; best-fit for long-horizon agentic + coding at 1M context.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Meta docs, OpenCode data, Artificial Analysis via BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.