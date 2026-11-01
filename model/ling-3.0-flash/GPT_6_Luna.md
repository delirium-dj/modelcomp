# Ling 3.0 Flash — findings by GPT-6 Luna

- Source: InclusionAI/Ling-3.0-flash
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's open-weight, hybrid-linear mixture-of-experts reasoning model for coding, agent workflows, and long-context work. This report covers the text-only base Flash checkpoint, not Flash VL, Flash Fin, Flash Sante, or Ling 3.1 Flash.
- **Provider / access:** Hugging Face weights `inclusionAI/Ling-3.0-flash`, with SGLang/vLLM deployment instructions. Hosted OpenRouter Chat Completions ID: `inclusionai/ling-3.0-flash`. OpenRouter's current model record lists a 262,144-token context and 32,768 max completion. OpenCode Data catalogs the same provider/model ID, but reports no token usage in its current period.
- **Release / knowledge:** Cataloged release date July 23, 2026 (OpenRouter/BenchmarkList). No exact training-data cutoff was found.
- **IDs:** Local/model-card ID `inclusionAI/Ling-3.0-flash`; OpenRouter ID `inclusionai/ling-3.0-flash`; OpenCode Data uses the same provider-qualified ID.
- **Context window:** 262,144 tokens; the official model card's training schedule reaches 256K. OpenRouter lists 32,768 maximum output tokens.
- **Modalities:** Text input and text output only. Reasoning is enabled by default in the official chat template and can be disabled with `enable_thinking: false`. Tool calling is supported. Image/video support belongs to the separate Flash VL variant and is not attributed here.
- **Pricing (as of 2026-11-01):** OpenRouter's current exact-model route lists $0.021 input, $0.0042 cached input, and $0.063 output per 1M tokens. Other provider/catalog rates differ; this is the cited OpenRouter rate, not a universal rate.
- **Architecture:** 124B total / 5.1B active parameters; hybrid-linear MoE using Kimi Delta Attention and MLA (5:1 stack), 512 routed experts and 8 active experts. MIT license.

### Raw benchmarks found

The official model card says thinking is enabled by default unless a task specifies otherwise. Results below preserve the benchmark's stated mode and harness; settings are not silently merged. No performance results from the sibling variants are used.

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (InclusionAI model card; Artificial Analysis protocol, Terminus 2 harness, 2-hour timeout, 3 runs/task averaged, preserve-thinking parser, 256K context).
- Tau3-Banking-AA: **28.0% pass@1** (InclusionAI model card; GPT-5.4-mini used as user simulator and assertion judge).
- GDPval v2-AA: **1,107 Elo** (InclusionAI model card; public 220-task set, Stirrup harness, 250-turn limit, 5-hour timeout).
- MCP-Atlas: **65.5%** (InclusionAI model card; public 500-task set, official v1 harness, 20-turn limit, Gemini 2.5 Pro claim-coverage judge).
- SkillsBench: **44.8%** (InclusionAI model card; Kilo Code, 87 tasks, 3-run average).
- Independent BenchmarkList records BFCL-V4 **73.0%** (rank 4/102; sampled 2026-07-23) and BrowseComp **72.2%** (rank 53/69; sampled 2026-07-23).
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:

- AIME 2026: **93.2%**; HMMT February 2026: **87.0%**; HLE: **22.7%** (official Hugging Face evaluation results; the card's default thinking mode is on, and the YAML records do not specify a separate tool setup).
- GPQA Diamond: **85.0%** in the value reported from the official card by BenchLM; BenchmarkList's later record is **85.5%**, sampled 2026-10-18. These are kept as separate records, not averaged.
- HLE: BenchmarkList separately records **23.7%**, sampled 2026-10-29; this differs from the official card's 22.7% and is not substituted for it.
- IMOAnswerBench: **83.7%** (InclusionAI model card; default thinking mode).
- AA-LCR: **73.0%** (BenchmarkList record; sampled 2026-10-29; exact run mode/context setup not displayed in the model summary).
- Context Arena: **50.2% default** versus **74.3% thinking enabled** (BenchmarkList; separately reported configurations, sampled 2026-10-29; not combined).

Coding:

- SWE-bench Pro: **56.6%** (official HF evaluation result; OpenHands harness with tailored prompts, temperature 0.6, top_p 0.95, 32K max new tokens, 256K context; default thinking on).
- SWE-bench Multilingual: **72.4%** (official HF evaluation result; exact result linked on the model card).
- Terminal-Bench 2.1: **57.0%**, setup as stated above.
- LiveCodeBench v5: **82.8%**; SciCode **41.2%** (values reported from the InclusionAI card by BenchLM; exact per-task sampling/configuration is not exposed in that catalog).
- Independent BenchmarkList records SWE-bench Pro **56.6%** (rank 42/61) and SWE-bench Multilingual **72.4%** (rank 30/55), sampled 2026-07-23. These match the vendor's posted values and are not counted as separate runs.

Long context:

- Native/training context: **256K**. AA-LCR is **73.0%**; Context Arena reports default **50.2%** and thinking-enabled **74.3%**. These are different benchmark/configuration records and do not establish perfect retrieval throughout the 256K window.

### Normalized scores (1–100)

- **Tool use: 82/100.** BFCL-V4 is 73.0%, MCP-Atlas 65.5%, and the model reports GDPval-AA 1,107; Tau3-Banking-AA is a weaker 28.0%, so real-world agent results are strong but uneven. [InclusionAI model card](https://huggingface.co/inclusionAI/Ling-3.0-flash); [BenchmarkList](https://benchmarklist.com/models/inclusionai-ling-3.0-flash/).
- **Reasoning: 84/100.** AIME 2026 is 93.2%, GPQA Diamond 85.0–85.5% across separately reported records, and HLE 22.7% official / 23.7% later catalog record; HLE's gap below frontier-level scores caps the rating. [Hugging Face evaluation results](https://huggingface.co/inclusionAI/Ling-3.0-flash); [BenchmarkList](https://benchmarklist.com/models/inclusionai-ling-3.0-flash/).
- **Context window: 78/100.** The 256K supported/training context sits in the 200K–500K tier. AA-LCR and the distinct default/thinking Context Arena results show useful retrieval, but not consistently near-perfect accuracy at the full advertised limit. [InclusionAI model card](https://huggingface.co/inclusionAI/Ling-3.0-flash); [BenchmarkList](https://benchmarklist.com/models/inclusionai-ling-3.0-flash/).
- **Multimodal: 15/100.** The base Ling 3.0 Flash accepts and returns text only; image/video support is for the separate Flash VL SKU. [InclusionAI model card](https://huggingface.co/inclusionAI/Ling-3.0-flash); [models.dev](https://models.dev/models/inclusionai/ling-3.0-flash).
- **Coding: 77/100.** SWE-bench Pro 56.6%, Terminal-Bench 2.1 57.0%, and SWE-bench Multilingual 72.4% are solid agentic coding results; LiveCodeBench v5 is 82.8%, while SciCode at 41.2% and the mid-range Terminal-Bench result keep the score below frontier. [InclusionAI model card](https://huggingface.co/inclusionAI/Ling-3.0-flash); [BenchLM](https://benchlm.ai/models/ling-3-0-flash).
- **Cost efficiency: 99/100.** OpenRouter's current route is $0.021/$0.063 per 1M input/output tokens with $0.0042 cached input; this is exceptionally inexpensive, though hosted provider rates vary. [OpenRouter model record](https://openrouter.ai/api/v1/models).
- **Overall Score: 67/100.** Half-up mean of the five quality dimensions: (82 + 84 + 78 + 15 + 77) / 5 = 67.2 → 67. Cost is excluded. Best suited to economical text-only coding and agent work that can benefit from 256K context; do not select it for image/video input.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three separate public searches and cross-checking InclusionAI's exact Hugging Face model card/evaluation YAMLs against Artificial Analysis, BenchmarkList, BenchLM, OpenRouter, models.dev, and OpenCode Data. Thinking-on/default and explicit thinking-enabled results remain distinct; no results are transferred from Ling 3.1, Flash VL, Flash Fin, Flash Sante, or other siblings. Scores are normalized interpretations, not vendor scores.
- Reference URLs:
  - [InclusionAI Ling-3.0-flash model card and official evaluations](https://huggingface.co/inclusionAI/Ling-3.0-flash)
  - [SWE-bench Pro evaluation YAML](https://huggingface.co/inclusionAI/Ling-3.0-flash/raw/main/.eval_results/swe-bench_pro.yaml)
  - [AIME 2026 evaluation YAML](https://huggingface.co/inclusionAI/Ling-3.0-flash/raw/main/.eval_results/aime_2026.yaml)
  - [HLE evaluation YAML](https://huggingface.co/inclusionAI/Ling-3.0-flash/raw/main/.eval_results/hle.yaml)
  - [SWE-bench Multilingual evaluation YAML](https://huggingface.co/inclusionAI/Ling-3.0-flash/raw/main/.eval_results/swe-bench_multilingual.yaml)
  - [BenchmarkList Ling 3.0 Flash results](https://benchmarklist.com/models/inclusionai-ling-3.0-flash/)
  - [BenchLM Ling 3.0 Flash results](https://benchlm.ai/models/ling-3-0-flash)
  - [Artificial Analysis Ling 3.0 Flash profile](https://artificialanalysis.ai/models/ling-3-0-flash)
  - [OpenRouter API model record](https://openrouter.ai/api/v1/models)
  - [OpenRouter Ling 3.0 Flash API details](https://openrouter.ai/inclusionai/ling-3.0-flash)
  - [models.dev Ling 3.0 Flash record](https://models.dev/models/inclusionai/ling-3.0-flash)
  - [OpenCode Data Ling 3.0 Flash record](https://opencode.ai/data/inclusionai/ling-3-0-flash)

---
