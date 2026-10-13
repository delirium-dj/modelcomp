# Muse Spark 1.1 — findings by GPT 6 Sol

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's July 2026 reasoning-capable multimodal Muse Spark update for coding, professional agent workflows and visual information; distinct version from 1.2/1.3. Meta's direct evaluation-report endpoint returned a 400 on this research pass, so its results are labelled *vendor-attributed* via [BenchLM](https://benchlm.ai/models/muse-spark-1-1) rather than asserted as independently rerun.
- **Provider / access:** [Vals](https://www.vals.ai/models/meta_muse_spark_1_1) identifies Meta's first-party API `meta/muse_spark_1_1`; OpenRouter [lists `meta/muse-spark-1.1`](https://openrouter.ai/meta/muse-spark-1.1/benchmarks). The project's `opencode/muse-spark-1.1` ID did not have a verified current Pi Zen entry; no free Zen ID confirmed.
- **Release / knowledge:** July 9, 2026 ([Vals](https://www.vals.ai/models/meta_muse_spark_1_1), [AA](https://artificialanalysis.ai/models/muse-spark-1-1)); no separately verified knowledge cutoff for this version.
- **IDs:** `meta/muse_spark_1_1` on Vals, `meta/muse-spark-1.1` on OpenRouter; do not confuse product/effort tiers or newer model versions with separate measurements.
- **Context window:** [Vals](https://www.vals.ai/models/meta_muse_spark_1_1) **1M context / 256K max output**. Project display metadata says 131K output, so verify the actual provider limit before relying on the larger maximum.
- **Modalities:** [AA](https://artificialanalysis.ai/models/muse-spark-1-1) advertises text/image/speech/video input → text output; [Vals](https://www.vals.ai/models/meta_muse_spark_1_1) confirms text/image/video/file on its tested route but does not indicate separate speech input. Capability of each specific host needs checking.
- **Pricing (as of 2026-10-13):** [AA](https://artificialanalysis.ai/models/muse-spark-1-1) and [Vals](https://www.vals.ai/models/meta_muse_spark_1_1) **$1.25 input / $4.25 output per 1M**; AA lists ~88% cache-read discount, consistent with ~$0.15/M cached input. Paid API; no verified Zen free entitlement.
- **Architecture:** Proprietary; unpublished parameter count ([AA](https://artificialanalysis.ai/models/muse-spark-1-1)).

### Raw benchmarks found

Vendor figures attributed to Meta by [BenchLM](https://benchlm.ai/models/muse-spark-1-1) are distinguished from independent [Vals xhigh](https://www.vals.ai/models/meta_muse_spark_1_1) and [AA xhigh](https://artificialanalysis.ai/models/muse-spark-1-1). Scores from the direct Meta evaluation-report link could not be verified firsthand because that endpoint returned HTTP 400.

Agent / tool use:

- [BenchLM citing Meta evaluation report](https://benchlm.ai/models/muse-spark-1-1): Terminal-Bench 2.1 **80.0%**, MCP Atlas **88.1%**, Toolathlon **75.6%**, OSWorld-Verified **80.8%**, WebArena-Verified **69.0%**, Finance Agent v2 **57.2%**, OSWorld 2.0 **14.2%**, GDPval-AA **1375 Elo**. The 2.0 and Verified OSWorld versions are separate tasks.
- [Vals independently reports TB2.1 **69.29% ±0.99**, Finance Agent v2 **57.21% ±0.79**, Harvey Legal Agent **20.00% ±2.94**, Code Migration **31.11% ±4.07**, ProgramBench **0.00%**](https://www.vals.ai/models/meta_muse_spark_1_1). Vendor/independent TB2.1 gap is harness-sensitive.

Reasoning / knowledge:

- [BenchLM citing Meta HLE **52.2% without tools / 62.1% with tools**](https://benchlm.ai/models/muse-spark-1-1); [AA attributed GPQA **89.8%**, HLE **46.2%**, CritPt **15.1%**, Intelligence Index **33.7**](https://benchlm.ai/models/muse-spark-1-1) under AA's separate conditions.
- [Vals GPQA Diamond **91.16% ±2.10**, MMLU Pro **88.73% ±0.32**, TaxEval v2 **79.72% ±0.77**](https://www.vals.ai/models/meta_muse_spark_1_1); tools and test vintage explain some cross-source HLE variation.

Coding:

- [BenchLM vendor-attributed SWE-bench Pro **61.5%**, DeepSWE **53.3%**, TB2.1 **80.0%**](https://benchlm.ai/models/muse-spark-1-1). [Vals SWE-bench **82.00% ±1.72**, LiveCodeBench **85.91% ±0.99**, Vibe Code Bench v1.1 **72.16% ±3.33**](https://www.vals.ai/models/meta_muse_spark_1_1). SWE-bench Pro and SWE Verified are distinct.
- [AA-attributed SciCode **58.8%**](https://benchlm.ai/models/muse-spark-1-1); Vals ProgramBench 0% constrains hardest long-horizon code tasks.

Long context / multimodal:

- [Vendor-attributed MRCR at 1M **54.1%**](https://benchlm.ai/models/muse-spark-1-1), versus [AA-LCR **77.7%**](https://benchlm.ai/models/muse-spark-1-1) under a different long-context methodology. Maximum usable recall is less than maximum capacity.
- [Vendor-attributed CharXiv **88.4%**, BabyVision **76.3%**](https://benchlm.ai/models/muse-spark-1-1); [Vals MMMU-Pro **86.59% ±0.82**](https://www.vals.ai/models/meta_muse_spark_1_1). Audio/video modalities ascribed to Meta's broader API should not be assumed on every downstream host.

### Normalized scores (1–100)

- **Tool use: 82/100.** Vendor-attributed MCP 88.1%, Toolathlon 75.6% and Vals TB2.1 69.3% support workflow agents; OSWorld 2.0 14.2% and migration 31.1% cap hard automation.
- **Reasoning: 84/100.** GPQA ~90–91%, HLE 46–62% depending on tools and CritPt 15.1%; independent AA Index 33.7 moderates vendor-era claims.
- **Context window: 91/100.** 1M capacity and AA-LCR 77.7%, but vendor-attributed 1M MRCR 54.1% and output limit differs across listed routes.
- **Multimodal: 94/100.** Vision, video and claimed speech input with strong visual tests; host availability varies and output remains text-only.
- **Coding: 83/100.** SWE-Pro 61.5%, DeepSWE 53.3% and Vals SWE 82%; ProgramBench 0% restrains complex sustained development.
- **Cost efficiency: 78/100.** $1.25/$4.25 is moderate for its breadth with discounted cache, but no verified free Zen API route.
- **Overall Score: 87/100.** (82 + 84 + 91 + 94 + 83) / 5 = 86.8, half-up 87; suitable for visual knowledge work and medium-length agentic tasks where routing/harness are validated.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh independent Vals/AA compared with explicitly vendor-attributed BenchLM table; scores normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
