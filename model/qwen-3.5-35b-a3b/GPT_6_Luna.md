# Qwen3.5-35B-A3B — findings by GPT-6 Luna

- Source: Alibaba/Qwen3.5-35B-A3B
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B
- **Short description:** Alibaba's open-weight native vision-language MoE model, with about 35B language-model parameters and 3B active per token. This is the downloadable model in the Hugging Face repository; Qwen3.5-Flash is a separate hosted API ID described by Qwen as the corresponding hosted version, and its 1M default context and production tools are not transferred to these weights.
- **Provider / access:** Download from Hugging Face as `Qwen/Qwen3.5-35B-A3B` under Apache 2.0; OpenRouter serves the exact model as `qwen/qwen3.5-35b-a3b` through Chat Completions with tool calling/reasoning parameters. OpenRouter currently lists a 262,144-token context and 81,920 max completion. Alibaba's Model Studio documentation points hosted users to Qwen3.5-Flash rather than listing this raw weights ID as an API SKU. No OpenCode Zen route verified.
- **Release / knowledge:** Hugging Face repository created **2026-02-24**; Artificial Analysis lists release in February 2026. No model-specific knowledge cutoff verified.
- **IDs:** Weights repository `Qwen/Qwen3.5-35B-A3B`; OpenRouter API ID `qwen/qwen3.5-35b-a3b`. These identify this exact 35B-A3B model. Do not collapse it into Qwen3.5-Flash or the separately tracked Qwen3.5-27B/122B models.
- **Context window:** **262,144 tokens natively**, extensible to **1,010,000** with YaRN per the model card. OpenRouter's hosted endpoint lists 262,144 context and 81,920 max output. The 1M extension is a configuration option for the weights, not the default OpenRouter route; no verified ≥98% retrieval accuracy at 512K+.
- **Modalities:** Text, image, and video input; text output. Qwen describes the model as a native vision-language model. No audio input or non-text output support verified for this exact ID. It supports reasoning/thinking and tool/function calling in compatible runtimes.
- **Pricing (as of 2026-10-30):** Apache-2.0 weights have no per-token model fee when self-hosted (hardware and operating costs remain). OpenRouter's exact-model price is **$0.14/MTok input, $1.00/MTok output, $0.05/MTok cached input**. Alibaba's hosted Qwen3.5-Flash price is not attributed to this raw weights/API ID.
- **Architecture:** Hybrid Gated DeltaNet linear attention plus sparse Mixture-of-Experts; the official card reports 35B total/3B activated language-model parameters, 40 layers, 256 experts with 8 routed plus 1 shared expert active per token. Artificial Analysis counts 36B total parameters, a likely difference in whether the vision encoder is included; the model's 35B-A3B designation and official language-model count are retained here.
- **Evaluation caveat:** The vendor table is for the exact weights and contains strong benchmark coverage, but results use Qwen's own harnesses and reasoning configuration. Its Terminal Bench result is labeled **Terminal Bench 2** (not 2.1). Qwen's TAU2-Bench row is 81.2%; Artificial Analysis/BenchLM lists 89.2% for τ²-bench, a material harness/setup discrepancy that is reported separately rather than averaged. BenchLM's 45.15/100 overall is partial coverage (33 of 724 benchmarks), not a direct benchmark or this report's normalized Overall.

### Raw benchmarks found

Agent / tool use (Qwen model card, exact 35B-A3B column):

- **BFCL-V4: 67.3%**; **TAU2-Bench: 81.2%**; **VITA-Bench: 31.9%**; **DeepPlanning: 22.8%**.
- **Terminal Bench 2: 40.5%**; **OSWorld-Verified: 54.5%**; **AndroidWorld: 71.1%**; **BrowseComp: 61.0%**; **BrowseComp-zh: 69.5%**. These are agent/scaffold evaluations, not isolated function-call accuracy.
- Artificial Analysis/BenchLM separately lists **τ²-bench: 89.2%**; the vendor's 81.2% and third-party 89.2% use different evaluation setups and are not merged.

Reasoning / knowledge (Qwen model card, exact 35B-A3B column):

- **GPQA Diamond: 84.2%**; **HLE with CoT: 22.4%**; **MMLU-Pro: 85.3%**; **SuperGPQA: 63.4%**; **IFBench: 70.2%**.
- **AA-HLE: 21.0%**; **AA-GPQA Diamond: 84.5%**; **CritPt: 0.9%** (Artificial Analysis historical record as transcribed by BenchLM). These are separate AA runs, not replacements for Qwen's own test table.

Coding:

- **SWE-bench Verified: 69.2%**; **Terminal Bench 2: 40.5%**; **LiveCodeBench v6: 74.6%**; **Codeforces: 2028**; **FullStackBench English: 58.1% / Chinese: 55.0%** (Qwen model card, exact-model column).
- **SWE-Rebench: 53.7%** (BenchLM's source-linked SWE-Rebench leaderboard entry).
- Do not treat Terminal Bench 2 as version 2.1 or transfer scores from Qwen3.5-27B, Qwen3.5-122B-A10B, Qwen3.5-Flash, or another Qwen coder.

Long context:

- **AA-LCR: 58.5%** and **LongBench v2: 59.0%** (Qwen model card); AA/BenchLM lists a distinct **AA-LCR: 72.0%** on its own run. Context is 262,144 natively and can be extended to 1,010,000 via YaRN; the published retrieval results do not establish near-perfect 512K+ retrieval.

Multimodal:

- **MMMU: 81.4%**; **MMMU-Pro: 75.1%**; **MathVision: 83.9%**; **RealWorldQA: 84.1%**; **OmniDocBench 1.5: 89.3%**; **CharXiv (RQ): 77.5%** (Qwen model card, exact-model column).
- Video results: **VideoMME 86.6% with subtitles / 82.5% without subtitles**, **VideoMMMU: 80.4%**, and **MLVU: 85.6%**. These establish video understanding, not audio input.

### Normalized scores (1–100)

- **Tool use: 72/100.** BFCL-V4 67.3%, TAU2-Bench 81.2% (AA's separately configured τ² result is 89.2%), OSWorld-Verified 54.5%, and Terminal Bench 2 40.5% show useful but mixed agent performance. Sources: Qwen model card; Artificial Analysis via BenchLM.
- **Reasoning: 78/100.** GPQA Diamond 84.2%, MMLU-Pro 85.3%, and HLE-CoT 22.4% are strong, while SuperGPQA 63.4%, IFBench 70.2%, and the separate AA CritPt result of 0.9% temper the score. Sources: Qwen model card; Artificial Analysis via BenchLM.
- **Context window: 72/100.** Native 262K lies in the 200K–500K rubric tier; AA-LCR 58.5% and LongBench v2 59.0% (vendor) do not justify scoring the optional 1.01M YaRN extension as reliably retrieved. Sources: Qwen model card; OpenRouter route record.
- **Multimodal: 80/100.** Image and video input fit the video-input tier; MMMU-Pro 75.1%, VideoMME 82.5% without subtitles, and OmniDocBench 1.5 89.3% show broad vision/document ability. No audio or non-text output was verified. Source: Qwen model card.
- **Coding: 74/100.** SWE-bench Verified 69.2% is solid, but LiveCodeBench v6 is 74.6% and Terminal Bench 2 is 40.5%; these do not meet the methodology's frontier coding references. Source: Qwen model card.
- **Cost efficiency: 95/100.** Apache-2.0 self-hosting avoids a model token fee, and the exact OpenRouter route is $0.14/$1.00 per MTok—low-cost, though not free to host and the output price exceeds the lowest-cost band. Sources: Qwen model card; OpenRouter.
- **Overall Score: 75/100.** Arithmetic mean of the five quality dimensions, excluding cost: `(72 + 78 + 72 + 80 + 74) / 5 = 75.2`, rounded to **75**. A strong small-active multimodal coding/agent model with a useful native 262K window; the optional 1M extension has no equivalent high-retrieval evidence, and agent/coding results remain mixed.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Researched the exact Hugging Face weights card and benchmark table, Qwen's linked technical blog, Artificial Analysis' exact-model evaluation page, BenchLM's source-linked partial aggregation, OpenRouter's exact API model listing, and Alibaba Model Studio's current recommended-model catalog. Kept the open weights distinct from the related hosted Qwen3.5-Flash SKU, preserved Terminal Bench 2's version label, and noted rather than reconciled conflicting TAU2/LCR results.
- Sources: [Qwen3.5-35B-A3B model card and weights](https://huggingface.co/Qwen/Qwen3.5-35B-A3B); [Qwen3.5 technical blog](https://qwen.ai/blog?id=qwen3.5); [Artificial Analysis Qwen3.5 35B A3B](https://artificialanalysis.ai/models/qwen3-5-35b-a3b); [BenchLM source-linked score table](https://benchlm.ai/models/qwen3-5-35b-a3b); [OpenRouter exact model route](https://openrouter.ai/qwen/qwen3.5-35b-a3b); [Alibaba Cloud Model Studio model catalog](https://help.aliyun.com/en/model-studio/models).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
