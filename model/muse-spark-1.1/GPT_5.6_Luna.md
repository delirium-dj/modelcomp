# Muse Spark 1.1 — findings by GPT 5.6 Luna

- Source: Meta/Muse Spark 1.1
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's earlier agentic reasoning and coding model, superseded by Muse Spark 1.2 and 1.3 but still a capable, price-efficient multimodal model.
- **Provider / access:** Meta Model API at `https://api.meta.ai/v1`, Muse Code, and compatible OpenAI/Anthropic SDK routes.
- **Release / knowledge:** Released July 9, 2026; knowledge cutoff is not publicly disclosed.
- **IDs:** `muse-spark-1.1` / Meta Model API standard route.
- **Context window:** 1,048,576 tokens; Vals lists maximum output of 256,000 tokens.
- **Modalities:** Text, image, audio, video, and document input; text output; reasoning, parallel tool calls, streamed tool-call arguments, and agent workflows.
- **Pricing (as of 2026-11-02):** Meta Model API Standard pricing is approximately $1.25 input / $4.25 output per 1M tokens. Access-tier and provider rates can vary.
- **Architecture:** Proprietary; parameter count and internal architecture undisclosed.

## Raw benchmarks found

- BenchLM current profile: **65.16/100, #32 of 1,004**, with 40 of 724 benchmark rows covered.
- Terminal-Bench 2.1: **80.0%** (Meta evaluation) and **69.3%** (Vals independent leaderboard).
- MCP Atlas: **88.1%**; Toolathlon: **75.6%**; OSWorld-Verified: **80.8%**; GDPval-AA: **1375 Elo** (Meta evaluation).
- Artificial Analysis GDPval-AA: **35.6%** and AA Agentic Index: **27.5%**.
- SWE-bench Pro: **61.5%**; LiveCodeBench: **85.9%**; SWE-bench (Vals): **82.0%**; AA-SciCode: **58.8%**.
- CharXiv: **88.4%**; MRCR 1M: **54.1%**; AA-LCR: **77.7%**.
- HLE: **62.1%**; AA-GPQA Diamond: **89.8%**; Artificial Analysis Intelligence Index: **33.7%**.
- Meta's API documentation confirms image, audio, video, and document understanding in one call; the model is superseded by Spark 1.2/1.3 for new deployments.

## Normalized scores (1–100)

- **Tool use: 86/100.** MCP Atlas 88.1%, Toolathlon 75.6%, OSWorld 80.8%, and Meta's native agent primitives support strong use; Vals and AA agentic rows are lower.
- **Reasoning: 88/100.** HLE 62.1%, GPQA 89.8%, and AA-LCR 77.7% are strong for this generation, though newer Muse variants are better and independent coverage is partial.
- **Context window: 92/100.** The 1M context is documented, but MRCR 1M at 54.1% indicates meaningful long-context degradation.
- **Multimodal: 89/100.** Native image/audio/video/document input and CharXiv 88.4% provide broad evidence; text-only output limits the ceiling.
- **Coding: 87/100.** SWE-bench 82%, LiveCodeBench 85.9%, and Terminal-Bench support strong coding, with a wide vendor/independent terminal gap.
- **Cost efficiency: 87/100.** $1.25/$4.25 is competitive for a multimodal 1M-context agent, though Spark 1.2/Contributor routes can be cheaper or stronger.
- **Overall Score: 88.4/100.** Mean of the five quality dimensions `(86 + 88 + 92 + 89 + 87) / 5 = 88.4`; best fit is price-conscious multimodal coding and agent workflows when a legacy model is acceptable.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: Meta's current developer/model documentation and launch material, BenchLM's October 29 aggregation, Vals, Artificial Analysis, and current Meta API pricing; vendor and independent harnesses were kept distinct, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Meta: Build with Muse Spark](https://developer.meta.com/ai/resources/blog/build-with-muse-spark)
  - [Meta Model API documentation](https://ai.developer.meta.com/docs)
  - [BenchLM Muse Spark 1.1 profile](https://benchlm.ai/models/muse-spark-1-1)
  - [Vals Muse Spark 1.1 profile](https://www.vals.ai/models/meta_muse-spark-1.1)
