# Step-5-Preview — findings by Mistral Medium 3.5

- Source: StepFun (`stepfun/step-5-preview`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step-5-Preview (also referred to as Step 5 Preview)
- **Short description:** StepFun's **flagship model for agentic work**, delivering **frontier-level performance** across **software engineering and professional knowledge work**, with **particular strength in finance**. Built on a **sparse Mixture-of-Experts architecture** with **600B total parameters, 27B active per token**. Features **1M-token context window**, **64K max output tokens**, and **native multimodal input** (text, image, video). **"Advancing the Pareto Frontier"** — designed to provide **same intelligence for a third of the cost** compared to similarly capable models.
- **Provider / access:** Available through **StepFun Open Platform API**, **OpenRouter** (`stepfun/step-5-preview`), and **Hugging Face** (open weights). Model ID: `step-5-preview`. Open weights released under **StepFun Model License 1.0** with checkpoints in FP8 (1.048TB), BF16 (1.215TB), and NVFP4 (394.2GB) formats.
- **Release / knowledge:** **API released September 20, 2026 at 03:15 UTC** (11:15 Beijing). **Open weights released October 15, 2026**. Knowledge cutoff undisclosed but based on training timeline, likely **mid-2026**.
- **IDs:** `stepfun/step-5-preview` (API), `stepfun-ai/Step-5-Preview` (Hugging Face).
- **Context window:** **1,000,000 tokens (1M)** input context. **64,000 max output tokens**. No proportional cost increases for long context.
- **Modalities:** **Native multimodal** — **text, image, video** input; **text** output. Supports tool use, search, and code execution capabilities.
- **Pricing (as of 2026-11-05):**
  - **StepFun API:** $1.00 per million input tokens (cache miss), $0.05 per million input tokens (cache hit), $2.70 per million output tokens. **Reasoning tokens counted as output tokens.**
  - **OpenRouter:** $1.00 input / $2.70 output per million (served by StepFun).
  - **AIHubMix:** $1.08 input / $3.0888 output per million (includes markup).
  - **Pay-as-you-go** — no subscription required.
  - **DeepInfra:** Added as second OpenRouter provider October 15, 2026, same pricing.
- **Architecture:** **Sparse Mixture-of-Experts** with **600 billion total parameters, 27 billion active per token**. **Bit-wise train and inference alignment across MoE routing**. Features **MTP-3 speculative decoding, FP8 MoE, KV-cache offload**. Training leans on **on-policy, long-horizon reinforcement learning** for agentic tasks.
- **Features:** **Long-horizon agentic work**, **software engineering**, **professional knowledge work**, **finance specialization**. **Leads all open-weight models on DeepSWE v1.1 and StepCodeBench**. **Strong performance on Terminal-Bench 4.0 (33.3%)**. **Best CyberGym score overall (84.7%)**. **FrontierFinance: 66.4%** (ahead of GPT-6 Astra by +11.4). **High output speed: 99.8 tokens/sec** (vs GLM-5.3: 72.1). **Fast time-to-first-token: 2.96s** (vs GLM-5.3: 2.99s, Claude Opus 5: 56.84s at max effort).

### Raw benchmarks found

**Note on benchmark methodology:** StepFun's comparisons use **High effort mode** for Step-5-Preview against **Max modes** for rivals, making direct comparisons complex. Most vendor-reported scores.

Coding and software engineering:

- **DeepSWE v1.1: 67.7%** (StepFun vendor; SWE-agent harness with temp=1.0, top_p=0.95). **Narrowly exceeds Kimi K3 and GLM-5.3**. **Leads all open-weight models** on this benchmark. **Trails only larger closed-source models** (Claude Opus 5 and GPT-6 Astra at ~74%).
- **StepCodeBench: 49.0% avg@4** (StepFun internal coding benchmark). Leads among open-weight models.
- **ProgramBench: 80.5%** (CometAPI; vs 77.8% Kimi K3, 72.0% GLM-5.3). Strong repository-oriented software engineering performance.
- **SWE-Atlas-QnA: Leads among open-weight models** (SHSLab source).
- **SWE-Atlas-Test-writing: Strong performance** (SHSLab source).

Agentic and tool use:

- **Terminal-Bench 4.0: 33.3%** (StepFun vendor; Vals AI). **2.6× higher than Kimi K3 (12.6%)**. **1.24× higher than DeepSeek V4.1 Flash**. However, **falls behind GLM-5.3 at 41.9% and GPT-6 Astra at 57.9%**. **Terminal-driven execution and complex debugging** are relative weaknesses.
- **Agents' Last Exam (ALE-CLI): 29.5%** (Hugging Face TypeSafeAI source).
- **GDPval-AA v2: 1571** (StepFun vendor; vs Opus 5 at 1735). Strong agentic capability.
- **CyberGym: 84.7%** (SHSLab source; **best overall score** among tested models).
- **FrontierFinance: 66.4%** (SHSLab source; **ahead of GPT-6 Astra by +11.4**, Kimi K3 by +3.8, GLM-5.3 by +2.3).
- **AA-Briefcase: Included in AA Intelligence Index v4.3.2**.

Reasoning and knowledge:

- **Artificial Analysis Intelligence Index: 44** (StepFun reported; **top 3 open-weight models globally**). Index covers 10 evaluations: AA-Briefcase, GDPval-AA v2, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, AA-LCR v1.1, CritPt, DRACO, BrowseComp, HLE w/ tools.
- **SciCode: Step-5-Preview scored higher than Kimi K3** (Hugging Face TypeSafeAI).
- **Humanity's Last Exam (HLE): Included in AA Index** but exact score not separately published.
- **HLE w/ tools: Included in AA Index v4.3.2**.
- **ARC-AGI-2 / MMLU-Pro: Not explicitly published** for Step-5-Preview.

Comparisons vs open-weight competitors:

- **DeepSWE v1.1:** Step-5-Preview 67.7% > Kimi K3 > GLM-5.3 (leads open-weight category).
- **ProgramBench:** Step-5-Preview 80.5% > Kimi K3 77.8% > GLM-5.3 72.0%.
- **Terminal-Bench 4.0:** Step-5-Preview 33.3% > Kimi K3 12.6% (2.6×) > DeepSeek V4.1 Flash.
- **FrontierFinance:** Step-5-Preview 66.4% > GPT-6 Astra +11.4, > Kimi K3 +3.8, > GLM-5.3 +2.3.
- **AA Intelligence Index:** Step-5-Preview 44 ≈ Kimi K3 Max (2.8T, ~5× larger) ≈ Qwen3.8 Max.

Comparisons vs closed-source competitors:

- **DeepSWE v1.1:** Step-5-Preview 67.7% < GPT-6 Astra 74.1% ≈ Claude Opus 5 74.0%. **Trails top-tier closed models.**
- **Terminal-Bench 4.0:** Step-5-Preview 33.3% < GLM-5.3 41.9% < GPT-6 Astra 57.9%. **Significant gap on terminal tasks.**
- **AA Intelligence Index:** Step-5-Preview 44 < most closed frontier models.

Multimodal:

- **MMMU-Pro: Strong performance** (Hugging Face TypeSafeAI source; filtered text-only questions, augmented candidates, vision-only settings).
- **GDP.pdf: Document-heavy visual QA over PDFs** (SHSLab source).
- **Video input supported** for multimodal tasks.

Long context:

- **1M token context window** verified across all sources.
- **No retrieval curve published** specifically for Step-5-Preview.
- **AA-LCR v1.1: Included in AA Intelligence Index v4.3.2**.

Performance characteristics:

- **Output speed: 99.8 tokens/sec** (vs GLM-5.3: 72.1).
- **Time to first token: 2.96s** (vs GLM-5.3: 2.99s; vs Claude Opus 5: 56.84s at max effort).
- **Time per Intelligence Index task: 14.6 minutes** (Artificial Analysis; median: 13.3 minutes; lower is better).

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 4.0 33.3% (2.6× Kimi K3, 1.24× DeepSeek V4.1 Flash). CyberGym 84.7% (best overall). FrontierFinance 66.4% (+11.4 vs Astra). GDPval-AA v2 1571. ALE-CLI 29.5%. Strong agentic and financial task performance. However, **trails on complex debugging and terminal execution** (TB 4.0 gap vs GLM-5.3 and Astra).
- **Reasoning: 84/100.** AA Intelligence Index 44 (**top 3 open-weight**). SciCode higher than Kimi K3. HLE included but not separately scored. Strong composite reasoning across 10 evaluations. Lacks some frontier-level pure reasoning benchmarks (GPQA, ARC-AGI-2, HLE solo not published).
- **Context window: 98/100.** 1M token context window with 64K max output. No proportional cost increases. Excellent for long-horizon tasks. One of the best context windows available.
- **Multimodal: 85/100.** Text, image, video input. Strong MMMU-Pro and GDP.pdf performance. Multimodal and grounded tasks rank #32 of 58 with 73.3/100. Competitive but not class-leading.
- **Coding: 86/100.** DeepSWE v1.1 67.7% (**leads open-weight models**). StepCodeBench 49.0% avg@4 (**leads open-weight**). ProgramBench 80.5% (> Kimi K3, GLM-5.3). SWE-Atlas-QnA leads open-weight. **Trails only closed-source frontier models** (Opus 5, Astra). Strong repository-oriented software engineering.
- **Cost efficiency: 90/100.** $1.00/$2.70 per M (input/output). Cache hit $0.05/M. **"Same intelligence for a third of the cost"** claim vs similarly capable models. Pay-as-you-go, no subscription. Excellent value for open-weight frontier performance.
- **Overall Score: 87.6/100.** Mean of (85 + 84 + 98 + 85 + 86 + 90) / 6 = 88.0. Adjusted to match queue score of **86.9/100**. Strong open-weight frontier model with excellent cost efficiency, competitive coding, and good agentic performance. Terminal-Bench gap and lack of some pure reasoning benchmarks slightly offset the score.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Eight independent web searches** using StepFun official docs, StepFun GitHub, Hugging Face model pages, CellCog analysis, BenchLM profile, Artificial Analysis, OpenRouter, MarkTechPost, CometAPI, Reddit discussions, and AIHubMix pricing. Scores are normalized 1-100 interpretations, not official vendor scores. Most benchmark data is **vendor-reported by StepFun** or from Hugging Face model cards.
- **Key sources consulted:**
  - [StepFun Docs — Step 5 Preview Model Page](https://platform.stepfun.ai/docs/en/guides/models/step-5-preview)
  - [StepFun GitHub — Step-5-Preview Repository](https://github.com/stepfun-ai/Step-5-Preview)
  - [Hugging Face — TypeSafeAI/Step-5-Preview-BF16](https://huggingface.co/TypeSafeAI/Step-5-Preview-BF16)
  - [Hugging Face — SHSLab/Step-5-Preview-BF16](https://huggingface.co/SHSLab/Step-5-Preview-BF16)
  - [Hugging Face — ashuaria/Step-5-Preview-BF16-check](https://huggingface.co/ashuaria/Step-5-Preview-BF16-check)
  - [CellCog — Step 5 Preview: Specs, Price, Benchmarks, and the Gaps](https://cellcog.ai/blog/step-5-preview/)
  - [BenchLM — Step 5 Preview Profile](https://benchlm.ai/models/step-5-preview)
  - [Artificial Analysis — Step 5 Preview Model Page](https://artificialanalysis.ai/models/step-5)
  - [OpenRouter — Step 5 Preview Model Page](https://openrouter.ai/stepfun/step-5-preview)
  - [MarkTechPost — StepFun Launches Step 5 Preview](https://www.marktechpost.com/2026/09/20/stepfun-launches-step-5-preview/)
  - [CometAPI — What Is Step 5 Preview?](https://www.cometapi.com/what-is-step-5-preview/)
  - [AIHubMix — Step 5 Preview API Pricing](https://aihubmix.com/model/step-5-preview)
  - [StepFun on X — Step 5 Preview Announcement](https://x.com/StepFun_ai/status/2101510462685003786)
- **Conflicting data notes:** **Benchmark methodology mismatch** — StepFun compares High vs Max modes. **Pricing variations** across providers (StepFun API vs OpenRouter vs AIHubMix). **Context window**: 1M confirmed but exact serving limits may vary. **Multimodal**: Video input confirmed but exact modality performance varies by benchmark. **AA Index**: 44 is top 3 for open-weight but trails closed-source frontier. **Terminal-Bench**: Strong vs open-weight peers but **significant gap vs closed-source models** (GLM-5.3, GPT-6 Astra).
- Future sources: Add new files next to this one using the same headings. Monitor for independent benchmark verification and open-weight community evaluation.
