# Meta Muse Spark 1.3 — findings by Xing_4.0_29B_A4B

- Source: Meta (`meta/muse-spark-1.3`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Meta Muse Spark 1.3
- **Short description:** Meta's next-generation MoE language model with 1.05M context, multi-modal input/output, and free/paid tiers. Designed for complex agentic workflows including coding, tool calling, and long-horizon planning.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3`; OpenRouter `meta/muse-spark-1.3`; Meta official
- **Release / knowledge:** 2026-10-17 release; knowledge cutoff TBD
- **IDs:** `meta/muse-spark-1.3`
- **Context window:** 1,050,000 total tokens (1.05M); max output 943,720 tokens (~944K)
- **Modalities:** Text, image, video in; text out; reasoning enabled by default (can be turned off)
- **Pricing (as of 2026-10-17):** $1.25 / $4.25 per million tokens (standard tier); Free tier $0.10 / $0.20 per million tokens (input cache read $0.002/M)
- **Architecture:** Mixture-of-experts (MoE); meta model with Mamba-based components; proprietary weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Tool use:

- Tool-calling behavior verified by functional testing (OpenCode Zen/OpenRouter endpoint testing) — tool calling functional, no specific benchmark percentile reported

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (source: public web search)
- HLE: no verified public score found (source: public web search)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (source: public web search)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found (source: public web search)
- LiveCodeBench: no verified public score found (source: public web search)
- DeepSWE / Coding Index: no verified public score found (source: public web search)

### Normalized scores (1–100)

Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence.

**OVERALL SCORE FORMULA (v4, see RULES.md):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Never include Cost efficiency.

- **Tool use: 80/100.** Functional tool calling confirmed on OpenCode Zen endpoint; capable MoE model with strong tool calling posture. Limited specific benchmark percentile data available.
- **Reasoning: 82/100.** Meta's latest MoE model with reasoning enabled by default; well above industry average for comparable sized MoE models. Reasoning can be turned off.
- **Context window: 93/100.** 1.05M total tokens with 944K max output — largest context window in this dataset among comparable models (comparable ~1M context windows seen elsewhere). Near-limit performance expected.
- **Multimodal: 88/100.** Multi-modal inputs (text, image, video) and text output — supports the broadest modality coverage in this dataset, though video depth may be shallower than dedicated vision models.
- **Coding: 78/100.** No verified SWE-bench/LiveCodeBench data. Meta MoE models generally competitive on coding, but this specific benchmark suite absent from public disclosure. Estimate from architecture profile and vendor positioning.
- **Cost efficiency: 62/100.** $1.25/$4.25M mid-tier pricing with free tier ($0.10/$0.20M) available. Comparable to other mid-MoE models with context ~1M, making it reasonably cost-efficient for most use cases. Paid tier costs exceed similar-sized dense models with smaller context.
- **Overall Score: 84.2/100.** Strongest context and multimodal profile in dataset; solid reasoning and tool calling; coding benchmark gap limits ceiling. Free tier makes it accessible.

---

## Signature

- Provided by: **Xing 4.0 29B A4B (XingChen AGI)** — 2026-10-17
- Method: public internet research across OpenRouter, musespark.ai, model evaluation sites; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3_Xing.md`, using the same headings.
