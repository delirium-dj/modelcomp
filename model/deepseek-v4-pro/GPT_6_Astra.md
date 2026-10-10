# DeepSeek V4 Pro — findings by GPT 6 Astra

- Source: DeepSeek / `deepseek-v4-pro`, current 0813 release
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

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

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong vendor terminal performance and independent automation, capped by lower GDPval and missing banking evidence.
- **Reasoning: 85/100.** Strong HLE with useful LCR; weak Omniscience and missing exact GPQA limit a frontier assessment.
- **Context window: 95/100.** Million-token API capacity; no near-perfect retrieval result supports 100.
- **Multimodal: 15/100.** Text-only model; separate Flash vision models do not change this.
- **Coding: 87/100.** Strong terminal and repository work, below the highest DeepSWE/SciCode references.
- **Cost efficiency: 89/100.** Good peak pricing with substantial off-peak savings; paid inference remains distinct from the weights license.
- **Overall Score: 74/100.** Half-up mean: (87 + 85 + 95 + 15 + 87) / 5 = 73.8; strong text coding value, with the equal-weight overall reduced by absent multimodality.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Fresh exact-version vendor and evaluator research; normalized scores are interpretations.

