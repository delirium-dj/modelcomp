# Muse Spark 1.3 — findings by GPT-6.1 Sol

- Source: Meta / Muse Spark 1.3
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Proprietary multimodal reasoning model for coding and long-horizon agents. Contributor, Standard and max-effort labels belong to this single model record, not separate checkpoints; results below retain their measured effort labels.
- **Provider / access:** Meta Model API and Muse Code; OpenRouter Chat Completions at `https://openrouter.ai/api/v1/chat/completions`.
- **Release / knowledge:** September 2, 2026 launch; Vals dates its Max evaluation entry September 5. Knowledge cutoff not verified.
- **IDs:** Native `muse-spark-1.3`, `muse-spark-1.3-contributor`; OpenRouter `meta/muse-spark-1.3`. Current Zen Free route not independently verified.
- **Context window:** Official 1M tokens; Vals lists approximately 131K maximum output. OpenRouter search listing specifies 1,048,576 total tokens.
- **Modalities:** Text, image, document and video perception; text output; reasoning and tool calls. OpenRouter advertises response-format and tool-choice parameters; this does not establish flawless schema adherence.
- **Pricing (as of 2026-11-03):** Official Standard $1.25 input / $4.25 output / $0.15 cached input per million tokens, not used to improve Meta products. Contributor $0.10/$0.20/$0.002, used to improve products. A discounted paid contributor endpoint is not itself free access. No universal free quota established here.
- **Architecture:** Proprietary, closed weights; parameter counts not disclosed. Muse Spark Open is a separately named release, not evidence that these weights are open.

### Raw benchmarks found

Agent / tool use — Meta official scorecard, max effort:

- GDPVal-AA v2 **1754 Elo**; JobBench **64.9**; OSWorld 2.0 **66.9 partial / 32.0 binary**; DeepSearchQA **90.3**; Agentic IF internal index **57.8**; AutomationBench **49.6**.
- Vals Max: Finance Agent v2 **59.96% ±2.06**, Legal Research Bench **55.29% ±3.46**, SRE Bench **3.82% ±1.19**, CUA-bench **5.83%**. Strong legal research does not imply equally strong operational agents.
- Tau, Claw and MCP-Atlas: no verified public score found in retrieved sources.

Reasoning / knowledge:

- Artificial Analysis current model page: Intelligence Index **36**, explicitly **v5.0**, rank **32/60** in its summary cohort; approximately **120M** output tokens across the index, **$2.39** weighted cost per task. These are benchmark-specific aggregate figures, not a price for every user request.
- Vals Max ProofBench v1.1 **58.00% ±4.96**; MysteryMechanism **36.04% ±3.23**. Non-Max ProofBench **55.00% ±5.00**.
- HLE, GPQA, CritPt and hallucination-rate figures: no verified public score found in retrieved pages.

Coding:

- Meta max: DeepSWE v1.1 **75.4**, SWEAtlas CodeBase QnA **59.4**, Terminal-Bench 2.1 **88.8**.
- Vals Max: Code Migration **47.41% ±4.26**, Vibe Code Bench v1.1 **85.86% ±2.51**, IOI **56.56% ±2.52**, ProgramBench **2.50% ±1.11**, SWE-bench Multimodal **43.13% ±2.26**, Terminal-Bench 4.0 **24.75% ±0.51**.
- Vals non-Max: Code Migration **27.58% ±4.07**, ProgramBench **0.50% ±0.50**, Terminal-Bench 4.0 **10.61% ±1.75**. Vals' non-Max page does not expose an effort label in the retrieved text; it is not silently relabelled xhigh here.
- SWE-bench Verified / SWE-Pro and LiveCodeBench: no verified public score found.

Long context:

- Meta MRCR **98.5** at 256K–512K and **98.1** at 512K–1M, max effort. These retrieval tasks support useful long context but do not prove equally strong reasoning across arbitrary million-token inputs.

### Conflicting evidence and interpretation

The current official scorecard has DeepSearchQA 90.3 and AutomationBench 49.6; eesel's September 3 review transcribes 89.4 and 49.4. Prefer the directly retrieved current official values and preserve the historical discrepancy rather than average them. The same review reports launch AA Index 62/max and 61/xhigh; today's AA page says 36 on v5.0. A revised index is not a demonstrated 26-point capability regression. AA now flags the record deprecated and includes inconsistent availability wording (no public API in chart sections but an API-provider FAQ); the live Meta and OpenRouter pages establish listed access, not a successful authenticated call.

Max availability was initially safety-gated according to launch reporting, while the current Meta announcement says it is available. Treat launch reviews as historical. Meta's 20% fewer tool calls and 25% fewer tokens compare internal coding work against 1.2, whereas AA's high index token usage describes a different workload. These claims can coexist. The modest independent migration/terminal/full-resolution results cap the interpretation of Meta's strong DeepSWE score; benchmark versions and harnesses differ, and Terminal-Bench 2.1 is not 4.0.

### Normalized scores (1–100)

Evidence-weighted judgments across the documented effort settings, not official percentages:

- **Tool use: 84/100.** Strong official tool/workflow evidence and independent legal research, capped by weak SRE and CUA results and effort-sensitive availability.
- **Reasoning: 81/100.** Useful independent proof and mechanism results, but current v5 index and uneven specialist performance do not support blanket frontier leadership.
- **Context window: 97/100.** Official million-token capacity plus strong MRCR retrieval; vendor-only retrieval and limited general long-context reasoning verification cap confidence.
- **Multimodal: 90/100.** Document, image and video perception with independent multimodal coding evidence; text-only output and missing audio evaluation limit breadth.
- **Coding: 85/100.** Strong DeepSWE and Vibe Code results, moderated by independent migration, Terminal-Bench 4.0 and low fully resolved ProgramBench performance.
- **Cost efficiency: 94/100.** Very low Contributor prices and competitive Standard pricing, but data-use concessions and verbose max reasoning are material tradeoffs.
- **Overall Score: 87/100.** Half-up mean of 84, 81, 97, 90 and 85 is 87.4; best suited to cost-sensitive multimodal coding agents with workload-specific testing.

## Signature

- Provided by: **GPT-6.1 Sol (openai/gpt-6.1-sol-ultrafast)** — 2026-11-03 UTC
- Method: Three successful distinct web searches followed by official model/launch pages, OpenRouter, Artificial Analysis, two Vals effort records and a historical independent review. VentureBeat direct retrieval returned 429 and was not treated as read evidence. No peer reports read; normalized scores are interpretations.
- Search queries: `"Muse Spark 1.3" Meta official benchmarks model card`; `"Muse Spark 1.3" Artificial Analysis independent review benchmarks`; `"Muse Spark 1.3" pricing context max contributor limitations`.
- Reference URLs:
  - [Meta current model card, benchmarks and pricing](https://dev.meta.ai/models/muse-spark)
  - [Meta launch](https://research.meta.ai/blog/introducing-muse-spark-1-3)
  - [AA current v5 evaluation](https://artificialanalysis.ai/models/muse-spark-1-3)
  - [Vals non-Max evaluation](https://www.vals.ai/models/meta_muse_spark_1_3)
  - [Vals Max evaluation](https://www.vals.ai/models/meta_muse_spark_1_3_max)
  - [Historical eesel review](https://www.eesel.ai/blog/muse-spark-1-3)
  - [OpenRouter serving interface](https://openrouter.ai/meta/muse-spark-1.3)
