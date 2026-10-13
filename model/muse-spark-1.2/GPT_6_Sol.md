# Muse Spark 1.2 — findings by GPT 6 Sol

- Source: Meta (`muse-spark-1.2`, Standard/Contributor same model)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's August 2026 coding-focused agent model co-trained with Muse Code, succeeding Muse Spark 1.1. Contributor/Standard pricing and data-use modes share model weights; neither mode is a second research subject ([Meta launch](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2), [Meta docs](https://dev.meta.ai/docs/models)).
- **Provider / access:** Meta Model API `https://api.meta.ai/v1` supports Responses, Chat Completions and Messages ([Meta docs](https://dev.meta.ai/docs/models)); [OpenCode Zen paid route `opencode/muse-spark-1.2`](https://pi.dev/models/opencode/muse-spark-1-2) lists Responses at `https://opencode.ai/zen/v1`.
- **Release / knowledge:** August 5, 2026 ([Meta launch](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2)); knowledge cutoff not published in consulted official docs.
- **IDs:** Meta `muse-spark-1.2` (Standard) and `muse-spark-1.2-contributor` (same weights, training-consent mode); Zen `opencode/muse-spark-1.2` (paid listing). No distinct Max/Free *model* and no currently verified $0 Zen route.
- **Context window:** 1,048,576 total / 131,072 max output per [Meta docs](https://dev.meta.ai/docs/models) and [Zen provider](https://pi.dev/models/opencode/muse-spark-1-2).
- **Modalities:** Meta endpoint text, image, video, audio and PDF input → text output ([Meta docs](https://dev.meta.ai/docs/models)); Zen provider catalog advertises only text/image input, so don't promise full Meta media coverage through Zen. Reasoning, tool calling and structured outputs supported by first-party API.
- **Pricing (as of 2026-10-12):** [Meta pricing](https://dev.meta.ai/docs/pricing-rate-limits) Standard $1.25/$4.25/$0.15 (input/output/cache-read) and Contributor $0.10/$0.20/$0.002 per 1M; Contributor permits Meta to use content for training. [Zen](https://pi.dev/models/opencode/muse-spark-1-2) currently lists Standard $1.25/$4.25/$0.15, not a verified free promotion. Evaluate cost on documented Standard.
- **Architecture:** Proprietary, parameters/weights not published ([Artificial Analysis](https://artificialanalysis.ai/models/muse-spark-1-2)).

### Raw benchmarks found

Cross-checked [Meta's launch](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2) and [model documentation](https://dev.meta.ai/docs/models) with independent [AA's August launch analysis](https://artificialanalysis.ai/articles/muse-spark-1-2), [Vals](https://www.vals.ai/models/meta_muse_spark_1_2) and [Proximal FrontierSWE v2](https://www.frontierswe.com/blog/v2). [BenchLM](https://benchlm.ai/models/muse-spark-1-2) is a linked evidence index, not a new independent run. Meta's Muse Code harness includes persistent background agents; the raw model need not reproduce system-level results in another harness.

Agent / tool use:

- [Meta/model-page TB2.1 **82.9%**](https://benchlm.ai/models/muse-spark-1-2), independent [AA TB2.1 **80%**, τ³-Banking **27%**, GDPval-AA v2 **1631 Elo**](https://artificialanalysis.ai/articles/muse-spark-1-2); [Vals TB2.1 **69.7%**](https://www.vals.ai/models/meta_muse_spark_1_2), a substantial harness gap.
- [Vals Index **49.29% ±1.10**](https://www.vals.ai/models/meta_muse_spark_1_2), Finance Agent v2 **60.60%**, Harvey Legal Agent **25.42%**, but SRE Bench **0.00%** and hard TB4.0 **6.06%**. [AA GDPval normalized **48.7%**](https://benchlm.ai/models/muse-spark-1-2) is not Elo. No exact-model Claw-Eval score found.

Reasoning / knowledge:

- [AA original Index **54** on the August method](https://artificialanalysis.ai/articles/muse-spark-1-2) versus [current revised AA Index **39.6**](https://benchlm.ai/models/muse-spark-1-2); index revisions prevent a direct capability-decline inference.
- [AA GPQA Diamond **90.4%**, HLE **45.5%**, CritPt **17.7%**, AA-LCR **79.0%**](https://benchlm.ai/models/muse-spark-1-2); [Vals MMLU-Pro **88.28%**, ProofBench **43%**](https://www.vals.ai/models/meta_muse_spark_1_2).

Coding:

- [Meta/model-card TB2.1 **82.9%**, DeepSWE **59.3%**](https://benchlm.ai/models/muse-spark-1-2); [AA SciCode **57.4%**](https://benchlm.ai/models/muse-spark-1-2); [Vals SWE-bench **86.60%**, Vibe Code Bench **79.10%**, Code Migration **29.95%**](https://www.vals.ai/models/meta_muse_spark_1_2). No exact-version independent SWE-bench Pro or LiveCodeBench verified in those sources.
- [Proximal FrontierSWE v2 **12.0% mean@5**](https://www.frontierswe.com/blog/v2) over 34 ultra-long tasks; researchers describe several failed verification/agent-boundary episodes in that *model's v2 harness*, an important limit on extrapolating Meta's TB2.1 score to days-long engineering work.

Long context / multimodal:

- Verified 1M context but **no exact-version MRCR/RULER score at 512K+** found. AA-LCR **79.0%** assesses long-context reasoning, not percent of needles retrieved at 1M ([AA-linked rows](https://benchlm.ai/models/muse-spark-1-2)).
- [Vals MMMU Pro **86.13%**](https://www.vals.ai/models/meta_muse_spark_1_2); [Meta's product docs](https://dev.meta.ai/docs/models) list audio/video/PDF input, whereas the Zen client manifest lists only text/image. MM performance cannot establish identical modality support on all providers.

### Normalized scores (1–100)

- **Tool use: 81/100.** TB2.1 69.7–82.9% and GDPval 1631 indicate strong agent work; τ³ 27%, Vals TB4 6.06% and SRE 0% cap robustness outside Meta's harness.
- **Reasoning: 86/100.** GPQA 90.4% and HLE 45.5% are substantial, but CritPt 17.7%, Vals ProofBench 43% and revised AA Index 39.6 limit frontier breadth.
- **Context window: 96/100.** 1M capacity/131K output reach the top size tier; no ≥98% measured retrieval at 512K+ supports 100.
- **Multimodal: 94/100.** Native text/image/audio/video/PDF input with text output; Zen catalog advertises narrower text/image support.
- **Coding: 78/100.** SWE-bench 86.6% and SciCode 57.4% are good, but DeepSWE 59.3%, hard TB4 6.06% and FrontierSWE v2 12% limit long-horizon coding.
- **Cost efficiency: 86/100.** Standard $1.25/$4.25 and $0.15 cached input offer strong value, with a cheaper consent-based Contributor mode; $0 Zen access is unverified.
- **Overall Score: 87/100.** (81 + 86 + 96 + 94 + 78) / 5 = 87.0; strong multimedia knowledge-work and coding assistant with native Meta access, subject to hard-agent task limits.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh Meta launch/model/pricing docs compared with AA, Vals and Proximal primary evaluations; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
