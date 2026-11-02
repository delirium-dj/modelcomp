# DeepSeek V4 Pro — findings by GPT 5.6 Luna

- Source: DeepSeek/DeepSeek-V4-Pro-0813 (`deepseek-v4-pro`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (0813)
- **Short description:** DeepSeek’s flagship text reasoning, coding, and agent model; the 0813 GA snapshot is distinct from the April preview and from the multimodal Vision Exp variant.
- **Provider / access:** DeepSeek API model `deepseek-v4-pro`; current API documentation identifies the served version as `DeepSeek-V4-Pro-0813`. Open-weight and hosted provider routes also exist.
- **Release / knowledge:** 2026-08-13 GA rollout; knowledge cutoff is not published.
- **IDs:** `deepseek-v4-pro`, `deepseek/deepseek-v4-pro-0813`, and provider-specific 0813 routes. Versionless gateway aliases can point to other snapshots and are not merged here.
- **Context window:** 1,000,000 tokens; maximum output is 384,000 tokens in the current DeepSeek API documentation.
- **Modalities:** Text input/output, reasoning, structured output, tool calls, and Responses/Anthropic API support; native vision is not supported by Pro itself.
- **Pricing (as of 2026-11-02):** DeepSeek direct API: $0.66 input / $1.98 output per 1M tokens off-peak and $1.32 / $3.96 peak; cached input is $0.022/$0.044. Provider routes can differ.
- **Architecture:** DeepSeek V4 Mixture-of-Experts model with 1.6T total and 49B active parameters.

### Raw benchmarks found

- BenchLM snapshot (2026-10-29): composite **62.53/100**, rank **#42/1004**, with 61 of 724 benchmarks covered; coverage is explicitly partial. ([BenchLM DeepSeek V4 Pro 0813](https://benchlm.ai/models/deepseek-v4-pro-0813))
- Agent rows: Terminal-Bench 2.1 **87.9%**; BrowseComp **83.4%**; HLE with tools **60.0%**; MCP Atlas **73.6%**; Toolathlon-Verified **74.1%**; τ²-bench **96.2%**; AutomationBench **31.8%**. ([BenchLM DeepSeek V4 Pro 0813](https://benchlm.ai/models/deepseek-v4-pro-0813))
- Coding rows: LiveCodeBench Pass@1-COT **93.5%**; Codeforces **3206**; SWE-bench Verified **80.6%**; SWE-bench Pro **55.4%**; DeepSWE **62.7%**; DSBench-FullStack **71.1%**; SWE-bench (Vals) **96.4%**.
- Reasoning/knowledge rows: MRCR 1M **83.5%**; CorpusQA 1M **62.0%**; ARC-AGI-2 **61.3%**; GPQA Diamond **90.1%** (92.8% AA); HLE **42.7%**; Artificial Analysis Intelligence Index **53.2%**.
- Multimodal: no native Pro vision benchmark; Design Arena Website **1258** is not treated as image-input capability. ([BenchLM DeepSeek V4 Pro 0813](https://benchlm.ai/models/deepseek-v4-pro-0813))

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench, τ²-bench, BrowseComp, MCP Atlas, and Toolathlon are strong, with lower AutomationBench and Vals TB2.1 results preserving harness variance.
- **Reasoning: 90/100.** GPQA, ARC-AGI-2, HLE, MRCR, and the 1M context evidence are excellent, while the independent-index score and partial coverage prevent a topmost score.
- **Context window: 97/100.** The official 1M window is paired with MRCR 1M at 83.5% and CorpusQA 1M at 62.0%; this is strong retrieval evidence but not perfect.
- **Multimodal: 15/100.** Pro is text-only; Vision Exp is a separate model and its scores are not substituted.
- **Coding: 89/100.** Terminal-Bench 87.9%, LiveCodeBench 93.5%, SWE-bench, and DeepSWE support strong coding-agent performance with version and harness spread.
- **Cost efficiency: 87/100.** Direct off-peak pricing is competitive for a 1M-context flagship, but peak rates and provider differences are material.
- **Overall Score: 76.0/100.** Mean of the five quality dimensions `(89 + 90 + 97 + 15 + 89) / 5 = 76.0`; best fit is high-end text-only reasoning and coding agents that can use the large context window.

## Evidence notes

- Current DeepSeek API documentation identifies the exact served version as V4-Pro-0813 and lists current peak/off-peak prices. V4.1 Flash and V4 Flash Vision Exp results are intentionally excluded.
- BenchLM’s current profile is a partial external reference; official and independent harness rows are retained separately rather than averaged across incompatible versions.

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current DeepSeek API documentation, official V4 release material, BenchLM’s October 29 profile, and exact-version benchmark records; scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [DeepSeek Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing)
  - [DeepSeek V4 preview announcement](https://deepseek.com/en/news/v4-preview/)
  - [BenchLM DeepSeek V4 Pro 0813 profile](https://benchlm.ai/models/deepseek-v4-pro-0813)
