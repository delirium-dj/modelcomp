# Muse Spark 1.3 — findings by GPT-6.1 Terra

- Source: Meta / Muse Spark 1.3
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's proprietary multimodal reasoning model targets agentic workflows and long-horizon coding. Contributor and Standard are access tiers of the same model, not separate checkpoints.
- **Provider / access:** Meta Model API, with an OpenAI-compatible client; OpenRouter also lists a Contributor endpoint. API usage requires the relevant provider's account and terms.
- **Release / knowledge:** Released 2026-09-02 according to [Vals](https://www.vals.ai/models/meta_muse_spark_1_3); knowledge cutoff not independently verified.
- **IDs:** Meta `muse-spark-1.3` and `muse-spark-1.3-contributor`; OpenRouter `meta/muse-spark-1.3-contributor`. A previously listed OpenCode Zen free route was [reported removed](https://github.com/anomalyco/opencode/issues/47192); do not assume it remains available.
- **Context window:** Meta documents 1M tokens; [OpenRouter](https://openrouter.ai/meta/muse-spark-1.3-contributor) specifies 1,048,576. Vals lists 131k maximum output; limits can vary by endpoint.
- **Modalities:** Meta documents image, video and document input plus text; tool calling is supported. No non-text output is confirmed here.
- **Pricing (2026-11-01):** [Meta](https://dev.meta.ai/models/muse-spark) lists Standard at $1.25 input / $0.15 cached input / $4.25 output per million tokens, and Contributor at $0.10 / $0.002 / $0.20. Contributor data is used to improve Meta products; Standard is not, per the pricing page. No current free route is assumed.
- **Architecture:** Proprietary; parameter counts not publicly verified.

### Raw benchmarks found

Agent / tool use:

- JobBench: **64.9%**, Meta's max-effort result; GDPVal-AA v2 **1754 Elo** ([Meta](https://dev.meta.ai/models/muse-spark)).
- OSWorld 2.0: **66.9% partial**, **32.0% binary**; AutomationBench **49.6%**, max effort ([Meta](https://dev.meta.ai/models/muse-spark)).
- Terminal-Bench 2.1: **88.8%**, max effort; SWEAtlas Codebase QnA **59.4%** ([Meta](https://dev.meta.ai/models/muse-spark)).
- Terminal-Bench 4.0: **10.61% ± 1.75**, independently evaluated by [Vals](https://www.vals.ai/models/meta_muse_spark_1_3); this is a different benchmark version and configuration from the vendor's 2.1 result.
- Tau2-Bench, Claw-Eval and MCP-Atlas: no verified public score found in this research.

Reasoning / knowledge:

- GPQA Diamond, HLE, CritPt and hallucination rate: no verified public score found in this research.
- Vals ProofBench v1.1: **55.00% ± 5.00** ([Vals](https://www.vals.ai/models/meta_muse_spark_1_3)); reasoning evidence is narrower than a broad knowledge evaluation.

Coding:

- DeepSWE v1.1: **75.4%**, Meta max-effort result ([Meta](https://dev.meta.ai/models/muse-spark)).
- Vibe Code Bench v1.1: **82.86% ± 2.90**; Code Migration **27.58% ± 4.07**, Vals evaluations ([Vals](https://www.vals.ai/models/meta_muse_spark_1_3)).
- SWE-bench Verified / Pro, LiveCodeBench and SciCode: no verified public score found in this research.

Long context:

- MRCR: **98.5%** at 256K–512K and **98.1%** at 512K–1M, Meta max-effort evaluation ([Meta](https://dev.meta.ai/models/muse-spark)); retrieval is not a guarantee of performance on all long-context tasks.

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong vendor JobBench and OSWorld results support a high score, tempered by the much lower Vals Terminal-Bench 4.0 result under a different setup.
- **Reasoning: 85/100.** Strong long-context retrieval and 55% ProofBench support a capable rating; absent directly verified GPQA/HLE figures cap confidence.
- **Context window: 100/100.** A documented 1M window and Meta's 98.1% MRCR at 512K–1M meet the methodology's top retrieval tier.
- **Multimodal: 85/100.** Documented image, video and document input earns the video/PDF tier; no verified non-text output is credited.
- **Coding: 91/100.** Meta's 75.4% DeepSWE and Vals' 82.86% Vibe Code result are strong, but Vals' lower Code Migration and Terminal-Bench 4.0 results limit the score.
- **Cost efficiency: 94/100.** Contributor pricing is inexpensive but paid and permits product-improvement use of submitted data.
- **Overall Score: 90/100.** (91 + 85 + 100 + 85 + 91) / 5 = 90.4, rounded to 90; a strong long-context coding candidate, with configuration-sensitive results.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Vendor and independent results use different harnesses and should not be directly equated.
- Reference URLs:
  - [Meta model page, pricing and benchmark table](https://dev.meta.ai/models/muse-spark)
  - [Meta evaluation methodology](https://research.meta.ai/static/muse-spark-1-3-multimodal-evaluation-methodology)
  - [Vals model evaluations](https://www.vals.ai/models/meta_muse_spark_1_3)
  - [OpenRouter Contributor endpoint](https://openrouter.ai/meta/muse-spark-1.3-contributor)
  - [OpenCode Zen free-route availability report](https://github.com/anomalyco/opencode/issues/47192)
- Future sources: add a new file next to this one using the same headings.
