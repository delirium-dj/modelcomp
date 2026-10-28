# Qwen3.8 2.4T-A95B — findings by GPT-6 Luna

- Source: Qwen (`Qwen/Qwen3.8-2.4T-A95B`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 2.4T-A95B
- **Short description:** Qwen's open-weight, text-only 2.4T-parameter checkpoint, with 95B active parameters and reasoning enabled by default. Per the requested identity resolution, this report covers the base checkpoint in this folder—not Qwen3.8-Max (a hosted service based on these weights with additional features) or the separate Qwen3.8-27B model.
- **Provider / access:** Official weights at Hugging Face `Qwen/Qwen3.8-2.4T-A95B` and ModelScope; Qwen's model card documents Chat Completions-compatible serving through Qwen Cloud. OpenRouter also lists `qwen/qwen3.8-2.4t-a95b`. [Qwen3.8 repository](https://github.com/QwenLM/Qwen3.8) · [Model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) · [OpenRouter](https://openrouter.ai/qwen/qwen3.8-2.4t-a95b)
- **Release / knowledge:** Released August 12, 2026. No exact-model knowledge cutoff found. [Qwen3.8 repository](https://github.com/QwenLM/Qwen3.8) · [Artificial Analysis](https://artificialanalysis.ai/models/qwen3-8-2-4t-a95b)
- **IDs:** Weights/API model ID `Qwen/Qwen3.8-2.4T-A95B`; OpenRouter route `qwen/qwen3.8-2.4t-a95b`. Qwen3.8-Max uses a distinct hosted model ID and adds features, so its results are not substituted. [Model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) · [Qwen3.8-Max API overview](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max)
- **Context window:** 262,144 tokens natively; the official model card describes extension up to 1,010,000 tokens with YaRN. Qwen recommends allowing up to 262,144 reasoning tokens and 131,072 final-response tokens within the extended context; these are recommended settings, not verified hard output limits. [Model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
- **Modalities:** Text input and text output only; thinking is required and cannot be disabled on the base checkpoint. It supports adjustable reasoning effort. The separate Max service adds image/video input and must not be conflated with this text-only checkpoint. [Model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
- **Pricing (as of 2026-10-28):** Artificial Analysis lists Alibaba-hosted pricing of $2.00 input / $6.00 output per MTok for this checkpoint; OpenRouter provider rates can differ. Alibaba's public Model Studio price page is for the distinct `qwen3.8-max` service (based on these weights but with additional features), so its regional prices are not asserted as the base checkpoint's official list price. [Artificial Analysis](https://artificialanalysis.ai/models/qwen3-8-2-4t-a95b) · [OpenRouter](https://openrouter.ai/qwen/qwen3.8-2.4t-a95b) · [Alibaba Model Studio](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-max)
- **Architecture:** 2.4T total / 95B active parameters, 92-layer causal language model with 512 MoE experts (10 routed plus one shared) and hybrid Gated DeltaNet/Gated Attention. The weights use the Qwen3.8-Max License, which permits use subject to stated commercial thresholds and additional-license terms for certain large services. [Model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) · [License](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B/blob/main/LICENSE)

### Raw benchmarks found

> Results are checkpoint-specific where the source names `Qwen3.8-2.4T-A95B`. Qwen's model card also contains a separate comparison table for the hosted Qwen3.8-Max; those Max-only figures are excluded. Independent benchmark boards and the Hugging Face evaluation panel differ on several tasks, so their runs are shown separately.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** in the Hugging Face evaluation panel for this checkpoint; Artificial Analysis' independent leaderboard entry, indexed by BenchLeader, reports **82.0%**. These are not documented as a matched harness run. [Model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) · [BenchLeader, data as of October 28](https://www.benchleader.com/models/qwen3-8-2-4t-a95b)
- MCP Atlas: **84.5%**; τ³-Banking: **49.1%**; AutomationBench: **57.3%**; GDPval-AA v2.1: **55.4%**; AA-Briefcase v1.1: **1,431 Elo**. BenchLeader links these rows to Artificial Analysis or the named evaluation publisher. [BenchLeader](https://www.benchleader.com/models/qwen3-8-2-4t-a95b)
- Claw-Eval / ClawProBench: **no verified public score found**. The model card's separate WildClawBench evaluation panel lists **56.2 overall**, but it is not substituted for Claw-Eval. [Model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** in the Hugging Face evaluation panel; Artificial Analysis reports **93.5%**. HLE: **43.6%** in the Hugging Face panel versus **42.5%** on Artificial Analysis' leaderboard. These are source-specific evaluations, not a single matched run. [Model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) · [BenchLeader](https://www.benchleader.com/models/qwen3-8-2-4t-a95b)
- CritPt: **20.0%**; AA-LCR v1: **80.3%** on the Artificial Analysis results indexed by BenchLeader. Artificial Analysis currently shows no overall Intelligence Index score for this model. [Artificial Analysis](https://artificialanalysis.ai/models/qwen3-8-2-4t-a95b) · [BenchLeader](https://www.benchleader.com/models/qwen3-8-2-4t-a95b)
- BenchLeader Index: **53.0 ± 16.0**, rank **#260/586 configurations** as of October 28, 2026, based on six independent benchmark results. This is a third-party composite, not the project's normalized score. [BenchLeader](https://www.benchleader.com/models/qwen3-8-2-4t-a95b)

Coding:

- SWE-bench Pro: **67.7%**; DeepSWE 1.1: **56.6%**; the Hugging Face evaluation panel for the checkpoint lists these results. [Model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
- SciCode: **54.0%**; Terminal-Bench 4.0: **11.1%** on Artificial Analysis' results indexed by BenchLeader. The low TB4 result is a substantial contrast with TB2.1 and limits confidence in generalizing from one terminal benchmark. [BenchLeader](https://www.benchleader.com/models/qwen3-8-2-4t-a95b)

Multimodal:

- The base checkpoint is text-only; no exact-model image/video benchmark is applicable. The 2.4T-Max service and Qwen3.8-27B are separate multimodal identities. [Model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) · [Qwen3.8 repository](https://github.com/QwenLM/Qwen3.8)

Long context:

- Native context: **262,144 tokens**, extendable to approximately **1.01M** with YaRN. AA-LCR v1 is **80.3%**, but no exact-checkpoint MRCR/RULER needle-retrieval score at 512K or 1M was verified. [Model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) · [BenchLeader](https://www.benchleader.com/models/qwen3-8-2-4t-a95b)
- Artificial Analysis lists the base checkpoint at **262K** context, while BenchLeader's provider table shows up to **1M** for some hosted providers. This is consistent with the model's native limit versus YaRN/provider extension; it is not treated as a native 1M window. [Artificial Analysis](https://artificialanalysis.ai/models/qwen3-8-2-4t-a95b) · [BenchLeader](https://www.benchleader.com/models/qwen3-8-2-4t-a95b)

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 is 82–86.6% across sources and MCP Atlas is 84.5%; GDPval-AA is 55.4% and AutomationBench 57.3%, with no Claw-Eval result and substantial later-edition variance.
- **Reasoning: 88/100.** GPQA Diamond is 92.6–93.5% and HLE 42.5–43.6%, but CritPt is 20% and Artificial Analysis has no composite Intelligence Index for the exact checkpoint.
- **Context window: 75/100.** The native 262K context sits in the methodology's 200K–500K tier; the 1M YaRN extension is configurable and lacks corresponding 1M retrieval evidence.
- **Multimodal: 15/100.** The base checkpoint is text-only; Qwen3.8-Max's image/video features are explicitly excluded.
- **Coding: 83/100.** SWE-bench Pro at 67.7% and DeepSWE at 56.6% are solid, but SciCode is 54% and Terminal-Bench 4.0 only 11.1%, despite stronger results on TB2.1.
- **Cost efficiency: 65/100.** Artificial Analysis lists $2/$6 per MTok (about $3 blended); it is open-weight but the referenced managed inference is not a low-cost tier, and provider pricing varies.
- **Overall Score: 69/100.** Half-up mean of the five quality dimensions: (84 + 88 + 75 + 15 + 83) / 5 = 69. Best suited to text-only reasoning, code, and agent tasks with self-hosting or a pinned provider; do not transfer Qwen3.8-Max multimodal or 1M-hosted-service behavior to the native base checkpoint.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent Bing searches targeting the Qwen3.8 family/base checkpoint and exact `Qwen3.8-2.4T-A95B` ID, then checked Qwen's official repository/model card against Artificial Analysis, BenchLeader, and OpenRouter. The base-vs-Max identity and native-vs-extended context distinctions are explicit; conflicting benchmark runs are attributed. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
