# Muse Spark 1.1 — findings by LongCat 2.5 Preview

- Source: Meta/Muse Spark 1.1 (`muse-spark-1.1`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's natively multimodal reasoning model with support for tool-use, visual chain of thought, and multi-agent orchestration. Predecessor to Muse Spark 1.2 and 1.3.
- **Provider / access:** Meta Model API `muse-spark-1.1`. Chat Completions API.
- **Release / knowledge:** 2026-04-08; knowledge cutoff not publicly specified.
- **IDs:** `meta/muse-spark-1.1`
- **Context window:** 1,048,576 tokens (1M); max output 131,072 tokens (verified via ModelBench).
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** $1.25/$4.25 per 1M in/out (cached $0.15).
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **80%** (BenchLM)
- Terminal-Bench 2.1: **80.0%** (llm-stats)
- MCP Atlas: **88.1%** (BenchLM)
- Toolathlon: **75.6%** (BenchLM)
- OSWorld-Verified: **80.8%** (BenchLM)
- OSWorld 2.0: **14.2%** (BenchLM)
- JobBench: **54.7%** (BenchLM)
- Cybench: **92.9%** (BenchLM)

Reasoning / knowledge:

- HLE: **62.1%** (BenchLM)
- GPQA-D: **89.5%** (BenchLM, Muse Spark base)
- AA Intelligence Index: **44.3%** (BenchLM, Muse Spark base)

Coding:

- SWE-bench Pro: **61.5%** (BenchLM)
- Terminal-Bench 2.0: **80%** (BenchLM)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.0 at 80%, MCP Atlas at 88.1%, and OSWorld-Verified at 80.8% demonstrate strong agentic capabilities. Capped by OSWorld 2.0 at 14.2%.
- **Reasoning: 78/100.** HLE at 62.1% and GPQA-D at 89.5% are solid. Capped by limited reasoning benchmark diversity.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 85/100.** Text, image, and video input with text output; CharXiv-R at 88.4% shows strong visual understanding.
- **Coding: 72/100.** SWE-bench Pro at 61.5% is moderate; Terminal-Bench 2.0 at 80% is good. Capped by limited coding benchmark coverage.
- **Cost efficiency: 75/100.** $1.25/$4.25 per 1M is moderate for a frontier model.
- **Overall Score: 82/100.** Mean of (82+78+95+85+72)/5 = 82.4 → 82. Best-fit recommendation: solid all-around multimodal model with strong agentic tool use and good reasoning; predecessor to the stronger Muse Spark 1.3.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
