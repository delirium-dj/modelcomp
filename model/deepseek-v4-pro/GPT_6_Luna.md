# DeepSeek V4 Pro — findings by GPT-6 Luna

- Source: DeepSeek/DeepSeek-V4-Pro-0813
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's open-weight flagship MoE language model for reasoning and agentic coding. The current 0813 release supersedes the preview and adds production-focused improvements.
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`) and downloadable Hugging Face weights; Chat Completions and Anthropic-compatible APIs supported.
- **Release / knowledge:** 0813 release in August 2026; cutoff not stated in the sources reviewed.
- **IDs:** `deepseek-ai/DeepSeek-V4-Pro-0813`; API ID `deepseek-v4-pro` (version served is V4-Pro-0813).
- **Context window:** 1,000,000 tokens; API documentation lists maximum output up to 384K.
- **Modalities:** Text input and output; reasoning and tool calls supported. Vision is not supported on Pro according to DeepSeek API documentation.
- **Pricing (as of 2026-10-28):** API documentation lists per-million-token cache-hit input $0.022 off-peak / $0.044 peak; cache-miss input $0.27 off-peak / $0.55 peak; output $1.10 off-peak / $2.19 peak. Artificial Analysis' evaluated 0813 Max endpoint lists $1.32 input / $3.96 output; this provider/endpoint difference is retained rather than conflated.
- **Architecture:** Sparse MoE, 1.6T total / 49B active parameters; hybrid Compressed Sparse Attention and Heavily Compressed Attention; MIT-licensed weights.

### Raw benchmarks found

DeepSeek's official 0813 model card reports Max reasoning effort for the agentic/coding tasks below. Artificial Analysis evaluates an API-hosted Max configuration separately.

Agent / tool use:

- Terminal-Bench 2.1: **87.9**.
- Toolathlon-Verified: **74.1**.
- Agents' Last Exam: **25.7**.
- AutomationBench (Public): **31.8**.
- Humanity's Last Exam with tools: **60.0%** (without tools: 42.7%).
- GDPval-AA: Artificial Analysis reports **1554 Elo** for V4 Pro Max in its April 2026 comparison; this is a distinct earlier snapshot from the 0813 release.

Reasoning / knowledge:

- Humanity's Last Exam without tools: **42.7%**; with tools: **60.0%**.
- Artificial Analysis Intelligence Index: **36** for V4 Pro 0813 Max (Artificial Analysis current model page); earlier preview-era AA results are not substituted.

Coding:

- NL2Repo: **61.5**.
- CyberGym: **83.3**.
- DeepSWE: **62.7**.
- Terminal-Bench 2.1: **87.9**.
- DeepSeek reports minimal DeepSeek Harness, Max effort, temperature 1.0 and top_p 0.95 for its public code-agent evaluations.

Long context:

- 1M context is supported; no MRCR/RULER/GraphWalks retrieval accuracy result for the 0813 checkpoint was verified.

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 87.9 and HLE-with-tools 60% are strong; capped for publisher-run evaluations and moderate Toolathlon/Agents' Last Exam results.
- **Reasoning: 86/100.** AA Intelligence Index 36 and HLE 42.7% indicate strong but not top closed-frontier reasoning; results are model/configuration specific.
- **Context window: 90/100.** 1M capacity earns the top tier, but no retrieval benchmark supports a 95–100 rating.
- **Multimodal: 40/100.** Text-only input/output per DeepSeek API documentation; tool use does not count as multimodal input.
- **Coding: 93/100.** Terminal-Bench 87.9, CyberGym 83.3, and NL2Repo 61.5 are excellent; capped for vendor-harness dependence and no independently replicated suite verified.
- **Cost efficiency: 66/100.** API pricing varies substantially by peak/off-peak and cache status; the evaluated AA endpoint is more expensive than many open-weight alternatives.
- **Overall Score: 80/100.** Half-up mean of the five quality dimensions; a strong text-only coding/agent model, with large-context capacity and pricing variability.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public web research. Official benchmark values retain the 0813 release, Max effort, and stated harness; Artificial Analysis figures are attributed to its separately hosted endpoint. Normalized scores are independent interpretations.
- Sources: [DeepSeek V4 Pro 0813 model card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813); [DeepSeek V4 technical report](https://arxiv.org/html/2606.19348); [DeepSeek API pricing](https://api-docs.deepseek.com/quick_start/pricing/); [Artificial Analysis V4 Pro page](https://artificialanalysis.ai/models/deepseek-v4-pro); [Artificial Analysis V4 launch analysis](https://artificialanalysis.ai/articles/deepseek-is-back-among-the-leading-open-weights-models-with-v4-pro-and-v4-flash).
