# Muse Spark 1.2 Free — findings by DeepSeek 4 Flash

- Source: Meta/Muse Spark 1.2 (evaluated via the `muse-spark-1.2-contributor-free` Zen tier; standard 1.2 weights)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Prior-generation Meta coding/agent model co-trained with Muse Code for terminal coding, MCP tool use and whole-repo generation; superseded by 1.3.
- **Provider / access:** Meta Model API / OpenCode Zen Contributor-free tier (`opencode/muse-spark-1.2-contributor-free`); OpenRouter `meta/muse-spark-1.2`.
- **Release / knowledge:** Muse Spark 1.2 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Free ID exists)
- **Context window:** 1,048,576 tokens (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text/image/audio/video/PDF in (curated); OpenRouter lists text/image/video/file; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** Free Zen Contributor tier; Contributor $0.10/$0.20, Standard $1.25/$4.25 per 1M (data-consent required on the free tier).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta); Vals **69.7%**
- GDPval-AA: **1631 Elo** (Meta); AA normalized **49.1%**
- AA Agentic Index **44.0%**
- Claw-Eval / ClawProBench, Tau3, OSWorld: no verified public score found for this exact ID

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (AA)
- HLE: **45.5%** (AA)
- AA-LCR **79.0%**; CritPt **17.7%**; AA Index **39.6%**
- AA-Omniscience Accuracy / Hallucination Rate: **45.4% / 33.3%**
- MMLU-Pro (Vals) **88.3%**

Coding:

- SWE-bench Verified (Vals): **86.6%**
- DeepSWE **59.3%**; AA-SciCode **57.4%**; AA Coding Index **72.2%**; FrontierSWE v2 **12.0%**

Long context:

- AA-LCR 79.0%; no public MRCR full-window number found

Multimodal:

- Design Arena Website **1318 Elo**; full media input per curated metadata

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.1 82.9%, GDPval 1631 and AA Agentic Index 44% are strong for a prior-gen free model.
- **Reasoning: 80/100.** GPQA 90.4% is good; AA Index 39.6%, HLE 45.5% and CritPt 17.7% place it below 1.3.
- **Context window: 96/100.** Full 1M input with AA-LCR 79%.
- **Multimodal: 90/100.** Text/image/video/PDF in; text-only output.
- **Coding: 82/100.** SWE (Vals) 86.6% and Coding Index 72.2% are good; DeepSWE 59.3% and FrontierSWE v2 12% trail.
- **Cost efficiency: 100/100.** $0 on the evaluated Zen Contributor-free tier (time-limited; training-data consent required).
- **Overall Score: 87/100.** Mean of (88 + 80 + 96 + 90 + 82) / 5 = 87.2 → 87. Best-fit: near-frontier free agentic coding fallback when 1.3 is unavailable.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Artificial Analysis, Meta, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
