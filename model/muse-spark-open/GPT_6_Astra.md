# Muse Spark Open — findings by GPT 6 Astra

- Source: Meta Superintelligence Labs / `meta-models/Muse-Spark-Open-816B-A42B`
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weight, natively multimodal model for agentic coding and tool workflows. It derives from Muse Spark with additional standalone safety post-training; hosted Spark and Spark Open benchmark results are not interchangeable.
- **Provider / access:** Downloadable weights with vLLM/SGLang and other runtimes; third-party hosted inference. OpenRouter documents Chat Completions at `https://openrouter.ai/api/v1/chat/completions`.
- **Release / knowledge:** Released 2026-10-15, per the official model card; knowledge cutoff not disclosed in the consulted sources.
- **IDs:** Weights `meta-models/Muse-Spark-Open-816B-A42B`; quantized sibling `meta-models/Muse-Spark-Open-816B-A42B-NVFP4`; gateway `meta/muse-spark-open`. No Zen Free ID verified.
- **Context window:** **1,048,576 tokens**, verified in [Meta's documentation](https://dev.meta.ai/docs/muse-spark-open); a separate output maximum was not verified.
- **Modalities:** Text, image, audio and video input; text output, reasoning and tool calls. Gateway modality support may be narrower than the checkpoint; structured-output controls are advertised by OpenRouter.
- **Pricing (as of 2026-11-13):** Evaluated hosted tier: **$1.25 input / $4.25 output per 1M tokens**, listed for Modal, Together, Nebius and Baseten by [OpenRouter](https://openrouter.ai/meta/muse-spark-open). Downloadable weights do not make inference infrastructure free; no $0 hosted tier is assumed.
- **Architecture:** **816B total / 42B active** sparse MoE transformer with perception encoder; BF16 and NVFP4 checkpoints. Muse Model License, not Apache/MIT; the official license includes conditions for large model-as-a-service businesses. [Official model card](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B).

### Raw benchmarks found

Figures below are from the [official Meta model card](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B), cross-checked against the [developer model page](https://dev.meta.ai/models/muse-spark-open). Configuration: Xhigh reasoning, temperature 1.0, top-p 1.0, top-k disabled. Treat these as vendor-reported results; preferred harnesses and tool assistance are indicated explicitly.

Agent / tool use:

- JobBench: **61.8**; MCP-Atlas: **89.2**.
- Terminal-Bench 2.1: **76.4%**, Terminus 2 agent.
- GDPval-AA v2: **1401 Elo**; OSWorld Verified: **80.4%**; Toolathlon Verified: **72.8%**.
- SWE-Atlas-QnA: **58**, preferred harness.
- Tau3-Banking/Tau2-Bench and Claw-Eval/ClawProBench: no verified public score found in the consulted sources.

Reasoning / knowledge:

- GPQA Diamond: **89.0%**.
- HLE: **61.0% with tools**; HLE-Diamond: **26.1% without tools**. These are different benchmarks/configurations.
- Artificial Analysis Intelligence Index: **39**, as reproduced in the release card; index version and a current rank are not specified there.
- AA-Omniscience: **25**, composite/net-style score as labelled, not an accuracy or hallucination percentage.
- LCR/MLCR, CritPt, and separately reported Omniscience accuracy/hallucination rates: no verified public score found.

Coding:

- DeepSWE 1.1: **60**, preferred harness; SciCode: **58.5%**.
- Terminal-Bench 2.1 **76.4%** and SWE-Atlas-QnA **58** provide additional coding evidence.
- SWE-bench Verified/SWE-Pro, LiveCodeBench and Vibe Code Bench: no verified public score found in the consulted sources.

Long context:

- Documented **1,048,576-token** capacity. MRCR/RULER/GraphWalks or another measured long-context retrieval rate: no verified public score found.

Multimodal:

- ZeroBench **50.0%**, BabyVision **80.2%**, SimpleVQA **73.6%**, WorldVQA **49.4%**, all with tools.
- VideoMMEv2: **61.5%**; IntPhys2: **68.3%**. No exact audio-quality benchmark was found.

### Normalized scores (1–100)

- **Tool use: 90/100.** MCP-Atlas 89.2, Toolathlon 72.8% and terminal performance support strong agents; 1401 GDPval Elo and harness dependence cap a frontier-perfect rating.
- **Reasoning: 87/100.** GPQA 89.0% and tool-assisted HLE 61.0% support strong reasoning, while HLE-Diamond 26.1% and the version-unspecified index 39 limit the claim.
- **Context window: 95/100.** Verified 1M-class capacity qualifies for the highest capacity tier; no measured retrieval result supports 100.
- **Multimodal: 92/100.** Native audio/video/image inputs and visual/video evaluations support broad perception; text-only output and absent audio-specific measurements cap the score.
- **Coding: 90/100.** SciCode 58.5%, Terminal-Bench 76.4% and DeepSWE 60 support demanding coding; preferred-harness results and a lower DeepSWE ceiling limit the rating.
- **Cost efficiency: 88/100.** Verified hosted $1.25/$4.25 matches the project's value-oriented paid tier; self-hosting has substantial hardware costs.
- **Overall Score: 91/100.** Half-up mean: (90 + 87 + 95 + 92 + 90) / 5 = 90.8 → 91. Best fit is self-hostable multimodal coding/agent workflows; cost is excluded.

---

## Signature

- Provided by: **GPT 6 Astra (agentrouter/gpt-6-astra)** — 2026-11-13
- Method: Fresh DuckDuckGo public search, official Meta documentation and model card, and live gateway pricing. The public rendered card was readable although the raw README endpoint required authorization. No peer findings were used. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta: official Muse Spark Open model card](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Meta: Muse Spark Open documentation](https://dev.meta.ai/docs/muse-spark-open)
  - [Meta: model and benchmark page](https://dev.meta.ai/models/muse-spark-open)
  - [OpenRouter: Muse Spark Open pricing and API](https://openrouter.ai/meta/muse-spark-open)
- Future sources: add a separate signed findings file using the same headings.
