# DeepSeek V4 Pro — findings by GPT 6 Astra

- Source: DeepSeek / `deepseek-v4-pro`, current 0813 release
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Research refresh — 2026-10-10

Compared with 2026-10-04. Sources accessed today; access dates are not evaluation execution dates. This section supersedes conflicting statements or missing-data claims in the preserved snapshot. No local model benchmark was run.

[Official pricing/version documentation](https://api-docs.deepseek.com/quick_start/pricing/) still maps Pro to **DeepSeek-V4-Pro-0813**, with 1M context, 384K maximum output and no vision. Peak input/output remain $1.32/$3.96 per million, off-peak $0.66/$1.98. No Flash vision capability is credited to Pro.

The [0813 model card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) reconfirms the prior public benchmark results. Additional vendor-only internal tests: **DSBench-FullStack 71.1%**, **DSBench-Hard 67.2%**. These are not public SWE-bench replacements. It documents low/high/max reasoning and a DSpark module; the unsuffixed weight repository describes the preview and must not supply exact-0813 GPQA scores.

[AA max comparison](https://artificialanalysis.ai/models/comparisons/deepseek-v4-pro-vs-o3) shows GDPval v2.1 **1454** rather than 1455; Index 36, Automation 57%, Terminal 4.0 14%, SciCode 51%, HLE 41%, CritPt 18%, Omniscience index 1 and LCR 80% agree. Added GDP.pdf **11%**, evaluated cost **$0.67/task**. AA marks SciCode/CritPt under review.

Vibe Code Bench v1.1 / OpenHands, 0813: **82.30%, $0.36/test**. [Vals](https://www.vals.ai/benchmarks/vibe-code).

Coding 87→90 reflects new independent app-building evidence; other scores remain unchanged. Remaining gaps: exact-0813 GPQA, cutoff, SWE-bench/LiveCodeBench, MCP Atlas and full-window retrieval. Tiny Elo drift does not prove changed weights.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **87, 85, 95, 15, 87, 89**; current: **87, 85, 95, 15, 90, 89**. Overall: **74 → 74**. Changes reflect revised evidence, not necessarily changed model weights.

## Prior research snapshot — 2026-10-04

Preserved for comparison; current corrections are above.

### Model card

- **Name:** DeepSeek V4 Pro 0813, max reasoning.
- **Short description:** Text-only coding and reasoning MoE; the August GA checkpoint supersedes April's preview.
- **Provider / access / IDs:** DeepSeek API `deepseek-v4-pro`; OpenAI Chat Completions/Responses and Anthropic-compatible formats. Weights: `deepseek-ai/DeepSeek-V4-Pro-0813`. No verified Zen Free ID.
- **Release / knowledge:** August 13, 2026 GA; cutoff unverified. [Release notice](https://api-docs.deepseek.com/news/news260813/).
- **Context window:** 1M; maximum output 384K.
- **Modalities:** Text in/out, thinking/non-thinking, JSON and tool calls; vision unsupported.
- **Pricing (2026-10-04):** USD peak 1.32 input / 0.044 cache hit / 3.96 output per million tokens; off-peak 0.66 / 0.022 / 1.98. Peak periods: weekdays 01:00–04:00 and 06:00–10:00 UTC, excluding Chinese public holidays. [Official model/version and pricing table](https://api-docs.deepseek.com/quick_start/pricing/?tab=case-studies).
- **Architecture:** 1.6T total / 49B active, MIT open weights according to [AA's exact 0813 profile](https://artificialanalysis.ai/models/deepseek-v4-pro). Vendor confirms preview architecture plus DSpark speculative decoding. [0813 card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813).

### Raw benchmarks found

Agent / tool use:

- Vendor 0813: Terminal-Bench 2.1 **87.9%**, Toolathlon-Verified **74.1%**, Agents' Last Exam **25.7%**, AutomationBench Public **31.8%**. Public code-agent tasks use DeepSeek Harness minimal, max effort, temperature 1.0/top-p 0.95. [Card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813).
- Independent max: GDPval-AA v2.1 **1455 Elo**, AA-Briefcase v1.1 **1256**, AutomationBench-AA **57%**, Terminal-Bench 4.0 **14%**. [AA](https://artificialanalysis.ai/models/comparisons/deepseek-v4-pro-vs-o3).
- Tau3/Tau2, Claw-Eval and MCP-Atlas for 0813: no verified public score found.

Reasoning / knowledge:

- Vendor HLE **42.7% without / 60.0% with tools**. [Card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813).
- AA Intelligence Index **36**, HLE **41%**, CritPt **18%**, Omniscience **1** (composite). [AA](https://artificialanalysis.ai/models/comparisons/deepseek-v4-pro-vs-o3).
- GPQA for the exact 0813 checkpoint: no verified public score found; preview results are not substituted.

Coding:

- Vendor DeepSWE **62.7%**, NL2Repo **61.5%**, CyberGym **83.3%**. [Card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813).
- Independent SciCode **51%**. [AA](https://artificialanalysis.ai/models/comparisons/deepseek-v4-pro-vs-o3).
- Exact 0813 SWE-bench Verified/Pro, LiveCodeBench and Vibe Code Bench: no verified public score found.

Long context:

- AA-LCR v1.1 **80%**; full-window MRCR/RULER for 0813: no verified public score found. [AA](https://artificialanalysis.ai/models/comparisons/deepseek-v4-pro-vs-o3).

## Current normalized scores (1–100)

- **Tool use: 87/100.** Strong vendor agent and independent automation evidence, uneven harder terminal results.
- **Reasoning: 85/100.** HLE/LCR support strong reasoning; factual reliability remains limited.
- **Context window: 95/100.** 1M capacity without qualifying near-perfect retrieval.
- **Multimodal: 15/100.** Current Pro endpoint remains text-only.
- **Coding: 90/100.** New exact-0813 app-building evidence corroborates strong coding.
- **Cost efficiency: 89/100.** Peak/off-peak pricing remains economical; task cost is workload-specific.
- **Overall Score: 74/100.** Half-up mean (87 + 85 + 95 + 15 + 90) / 5; cost excluded. Previous overall 74.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-10
- Method: Fresh exact-version vendor and evaluator research; normalized scores are interpretations.

