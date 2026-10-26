# Muse Spark 1.3 — findings by GPT-5.6 Terra

- Source: Meta / Muse Spark 1.3
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's proprietary reasoning model for long-horizon agentic workflows and competitive coding. `Contributor`, Standard, and Max are access or reasoning-effort tiers of the same tracked model, not separate checkpoints.
- **Provider / access:** [Meta Model API](https://dev.meta.ai/) and Muse Code; Meta's quickstart describes an OpenAI SDK-compatible client. [OpenRouter](https://openrouter.ai/meta/muse-spark-1.3/benchmarks) also lists `meta/muse-spark-1.3`.
- **Release / knowledge:** Released September 2, 2026; knowledge cutoff not publicly disclosed.
- **IDs:** Meta `muse-spark-1.3` and `muse-spark-1.3-contributor`; OpenRouter `meta/muse-spark-1.3`.
- **Context window:** 1M tokens, confirmed by Meta, Artificial Analysis, Vals AI, and OpenRouter. Vals reports a 131,072-token maximum output limit.
- **Modalities:** Text, image, video, and document/file input; text output. Meta documents tool calls and native multimodal perception.
- **Pricing (as of 2026-10-26):** Standard `muse-spark-1.3` is $1.25 input / $0.15 cached input / $4.25 output per 1M tokens and is not used to improve Meta products. `muse-spark-1.3-contributor` is $0.10 / $0.002 / $0.20 per 1M and is used to improve Meta products; it is low-cost, not a verified free tier.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- [Terminal-Bench 2.1](https://developer.meta.com/ai/models/muse-spark/): **88.8%** (Meta scorecard, max reasoning).
- [GDPval-AA v2](https://developer.meta.com/ai/models/muse-spark/): **1754 Elo** (Meta scorecard, max reasoning).
- [OSWorld 2.0](https://developer.meta.com/ai/models/muse-spark/): **66.9% partial / 32.0% binary** (Meta scorecard, max reasoning).
- [CWE-bench v1](https://cwe-bench.com/): **55%** deterministic pass@1 and **51%** three-judge-panel pass@1 (independent Collinear leaderboard; OpenCode harness, high reasoning).
- [AA Agentic Index](https://benchlm.ai/models/muse-spark-1-3): **55.7%** (Artificial Analysis result, as catalogued by BenchLM).

Reasoning / knowledge:

- [Artificial Analysis Intelligence Index](https://artificialanalysis.ai/models/muse-spark-1-3): **48**, rank **26/221** in its displayed class (independent composite; 10 evaluations).
- [GPQA Diamond](https://benchlm.ai/models/muse-spark-1-3): **93.5%**, [HLE](https://benchlm.ai/models/muse-spark-1-3): **48.7%**, and [CritPt](https://benchlm.ai/models/muse-spark-1-3): **24.9%** (Artificial Analysis results catalogued by BenchLM).
- [AA Omniscience](https://benchlm.ai/models/muse-spark-1-3): **43.6% accuracy / 32.9% hallucination rate** (Artificial Analysis result catalogued by BenchLM).

Coding:

- [DeepSWE v1.1](https://developer.meta.com/ai/models/muse-spark/): **75.4%**, [SWE-Atlas Codebase QnA](https://developer.meta.com/ai/models/muse-spark/): **59.4%**, and Terminal-Bench 2.1: **88.8%** (Meta scorecard, max reasoning).
- [AA Coding Index](https://benchlm.ai/models/muse-spark-1-3): **75.8%** and [AA-SciCode](https://benchlm.ai/models/muse-spark-1-3): **58.8%** (Artificial Analysis results catalogued by BenchLM).
- [Vals AI](https://www.vals.ai/models/meta_muse_spark_1_3): **82.86%** Vibe Code Bench v1.1, but **10.61%** Terminal-Bench 4.0, **0.50%** ProgramBench, and **27.58%** Code Migration (independent, default Meta provider, `xhigh` reasoning). These are different versions and harnesses from Meta's Terminal-Bench 2.1 score and must not be directly equated.

Long context:

- [MRCR v2](https://developer.meta.com/ai/models/muse-spark/): **98.5%** at 256K–512K and **98.1%** at 512K–1M (Meta scorecard, max reasoning).
- [AA-LCR](https://benchlm.ai/models/muse-spark-1-3): **83.0%** (Artificial Analysis result catalogued by BenchLM).

Meta's scorecard is first-party and evaluated at max reasoning. Artificial Analysis, Vals, and Collinear provide independent evidence, but their composites, benchmark versions, harnesses, and effort settings differ. In particular, Vals's Terminal-Bench 4.0 result does not contradict Meta's Terminal-Bench 2.1 score; it shows that the high result cannot be generalized across all terminal-agent evaluations.

### Normalized scores (1–100)

- **Tool use: 83/100.** Meta's 88.8% Terminal-Bench 2.1 and 1754 GDPval-AA results are strong, but independent AA Agentic Index 55.7% and CWE-bench 55% prevent a frontier-agent score.
- **Reasoning: 76/100.** AA's 48 Intelligence Index and 93.5% GPQA are promising, while HLE 48.7%, CritPt 24.9%, and Omniscience 43.6% accuracy cap confidence in broad reasoning reliability.
- **Context window: 99/100.** The 1M window is confirmed by four sources, and Meta reports 98.1% MRCR retrieval through the 512K–1M range; AA-LCR 83.0% is supportive but lower.
- **Multimodal: 88/100.** Meta documents image, video, and document perception, while independent indexes confirm text/image/video input and text output; no public multimodal quality benchmark was found.
- **Coding: 82/100.** Strong Meta DeepSWE/Terminal-Bench 2.1 and independent Vibe Code/AA Coding results are tempered by Vals's low Terminal-Bench 4.0, ProgramBench, and Code Migration results.
- **Cost efficiency: 94/100.** Standard pricing is competitive, and the Contributor tier is exceptionally inexpensive, but it permits training use and no verified free API tier was found.
- **Overall Score: 86/100.** Half-up mean of Tool 83 + Reasoning 76 + Context 99 + Multimodal 88 + Coding 82 = 428/5 = 85.6. Best fit: low-cost, very-long-context multimodal agent workflows where the deployment harness is validated first.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-26
- Method: public-web research across Meta's official model and launch pages, Artificial Analysis, Vals AI, Collinear CWE-bench, BenchLM, and OpenRouter; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
