# Qwen3.5 Flash — findings by GPT 5.6 Luna

- Source: Alibaba/Qwen (`qwen3.5-flash`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 Flash
- **Short description:** Alibaba's hosted, proprietary Flash tier for fast multimodal reasoning and agent workloads. It is a distinct serving route from the open-weight Qwen3.5-35B-A3B and Qwen3.5-27B checkpoints, and from the hosted Plus tier.
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.5-flash`; the dated snapshot is also exposed through OpenRouter as `qwen/qwen3.5-flash-02-23`. Both are OpenAI-compatible Chat Completions-style routes; Alibaba documents function calling and structured outputs.
- **Release / knowledge:** 2026-02-23 snapshot; knowledge cutoff not published. Alibaba says the rolling `qwen3.5-flash` route is functionally equivalent to `qwen3.5-flash-2026-02-23` ([official model card](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-flash)).
- **IDs:** `qwen3.5-flash` and `qwen3.5-flash-2026-02-23` (Alibaba Cloud Model Studio); `qwen/qwen3.5-flash-02-23` (OpenRouter snapshot). The exact hosted route is not the open `Qwen/Qwen3.5-35B-A3B` or `Qwen/Qwen3.5-27B` model.
- **Context window:** 1,000,000 total; 991,808 max input; 65,536 max output; 81,920 max chain-of-thought in thinking mode ([Alibaba](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-flash), independently catalogued by [Models.dev](https://models.dev/models/alibaba/qwen3.5-flash)).
- **Modalities:** Text, image, and video in; text out; reasoning, function calling, structured outputs, web search, prefix completion, and context caching supported on the current Model Studio route ([Alibaba](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-flash)).
- **Pricing (as of 2026-10-23):** Alibaba international $0.10 input / $0.40 output per 1M tokens; OpenRouter snapshot $0.065 / $0.26 per 1M according to [Models.dev](https://models.dev/models/alibaba/qwen3.5-flash). Alibaba's US/global route is tiered above 128K input, reaching $0.172 / $1.72 at 256K–1M ([official pricing](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-flash)).
- **Architecture:** Hosted/private weights. Alibaba describes a hybrid linear-attention plus sparse-MoE architecture. The official Qwen release repository lists the open Qwen3.5-35B-A3B and Qwen3.5-27B checkpoints separately; it does not establish that Flash is either checkpoint ([Qwen official repository](https://github.com/QwenLM/Qwen3.8)).

### Raw benchmarks found

> Exact-model measurements below are from independent Vals AI evaluations, mirrored with coverage notes by BenchLM. They are not substituted with results for the open-weight siblings.

Agent / tool use:

- Terminal-Bench 2.0: **24.72%** ([Vals AI](https://www.vals.ai/models/alibaba_qwen3.5-flash), exact model, 54/67; harness/settings are linked on the model page)
- Function calling and structured outputs: **supported**, but no exact-model Tau3, GDPval-AA, Claw-Eval, MCP-Atlas, or tool-call efficiency score was verified ([Alibaba](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-flash)).

Reasoning / knowledge:

- GPQA Diamond: **82.83% ± 1.90** ([Vals AI](https://www.vals.ai/models/alibaba_qwen3.5-flash), 60/138)
- MMLU Pro: **84.06% ± 0.36** ([Vals AI](https://www.vals.ai/models/alibaba_qwen3.5-flash), 68/138)
- FrontierMath v2, Tiers 1–3: **18.246%** ([BenchLM](https://benchlm.ai/models/qwen3-5-flash), sourced to [Epoch AI](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)); BenchLM records this as 5-benchmark partial coverage, not a general intelligence score.
- HLE, LCR/MRCR, CritPt, and exact-model Artificial Analysis Intelligence Index: **no verified public score found**.

Coding:

- LiveCodeBench: **83.28% ± 1.04** ([Vals AI](https://www.vals.ai/models/alibaba_qwen3.5-flash), 49/143)
- SWE-bench: **64.40% ± 2.14** ([Vals AI](https://www.vals.ai/models/alibaba_qwen3.5-flash), 74/88; [BenchLM](https://benchlm.ai/models/qwen3-5-flash)).
- LegalBench: **84.28% ± 0.41** ([Vals AI](https://www.vals.ai/models/alibaba_qwen3.5-flash), 36/151)
- The Vals page also contains an older March update quoting **54.9% SWE-bench Verified** and **24.7% Terminal-Bench 2.0**. I use its current detailed leaderboard rows, 64.40% and 24.72%; the discrepancy is retained as a harness/version or evaluation-date caveat rather than silently merged.
- SciCode, SWE-Pro, DeepSWE, Vibe Code Bench, and Coding Index: **no verified public score found**.

Long context:

- Official limit: **1,000,000-token context**, but no exact-model MRCR/RULER retrieval score was verified. [Alibaba](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-flash) reports 991,808 max input and 65,536 max output.

### Normalized scores (1–100)

- **Tool use: 48/100.** Alibaba verifies function calling and structured outputs, but the exact model's Terminal-Bench 2.0 score is only 24.72% and no stronger agent/tool benchmark was verified; this caps the score below the general mid-tier band.
- **Reasoning: 78/100.** GPQA Diamond 82.83% and MMLU-Pro 84.06% support strong reasoning/knowledge, while FrontierMath 18.246% and sparse exact-model coverage prevent a frontier score.
- **Context window: 95/100.** The verified 1M native window earns the top context tier, but there is no exact-model long-context retrieval result supporting the 100-point ceiling and the 65,536 output limit remains a practical caveat.
- **Multimodal: 85/100.** Alibaba explicitly verifies text, image, and video input with text output; no audio input or non-text output is documented.
- **Coding: 70/100.** LiveCodeBench 83.28% is strong, but SWE-bench 64.40% and Terminal-Bench 2.0 24.72% show a material agent-execution ceiling; no exact-model SWE-Pro/DeepSWE result was verified.
- **Cost efficiency: 97/100.** The international $0.10/$0.40 price and the cheaper OpenRouter snapshot are excellent for this capability tier, though output is not in the very-lowest $0.10–$0.20 band and long inputs are tiered higher.
- **Overall Score: 75/100.** Half-up mean of the five non-cost dimensions: (48 + 78 + 95 + 85 + 70) / 5 = 75.2, rounded to 75. Best fit is inexpensive multimodal reasoning and routine coding; it is not a substitute for a stronger tool-use specialist on long autonomous terminal runs.

### Identity and conflict check

- **Qwen3.5-35B-A3B:** open weights, 35B total / 3B active, 262,144 context, and separately benchmarked as a checkpoint; [Models.dev](https://models.dev/models/alibaba/qwen3.5-35b-a3b) records the distinct model and weight link. Its figures are not transferred here.
- **Qwen3.5-27B:** open dense checkpoint, 262,144 context; [Models.dev](https://models.dev/models/alibaba/qwen3.5-27b) lists it separately. Its figures are not transferred here.
- **Qwen3.5-Flash-Lite:** no exact official Alibaba model card or independent exact-model benchmark row was verified in this pass. Flash-Lite claims and pricing were not used for Flash.
- **Qwen3.5-Plus:** separate hosted route and snapshot. Alibaba documents the same 1M/65,536 limits but a materially higher international price of $0.40/$2.40 and a separate `qwen3.5-plus-2026-02-15` snapshot ([official Plus card](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-plus)); its benchmark figures were not used for Flash.
- **Conflict resolution:** Vals and BenchLM agree on the current exact-model rows for GPQA, LiveCodeBench, SWE-bench, and FrontierMath. The older Vals narrative SWE figure conflicts with the current detailed row, so the current row is used and the older figure is recorded as a dated/harness caveat. Official Alibaba limits, capabilities, snapshot identity, and pricing take precedence over aggregator metadata.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: seven-plus independent fresh web searches followed by direct official Alibaba/Qwen, Vals AI, BenchLM, Epoch AI, Models.dev, and OpenCode catalog checks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
