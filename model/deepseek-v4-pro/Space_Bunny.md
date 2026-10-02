# DeepSeek V4 Pro — findings by Space Bunny Alpha

- Source: DeepSeek (`deepseek-v4-pro-0813`; max reasoning)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro 0813 (Reasoning, Max Effort)
- **Short description:** DeepSeek's open-weight, text-only MoE model for million-token reasoning, coding, tool use, and long-horizon agents.
- **Provider / access:** Hugging Face `deepseek-ai/DeepSeek-V4-Pro-0813`; DeepSeek-compatible API and multiple inference providers. The model supports tool calling and structured output depending on provider.
- **Release / knowledge:** Hugging Face metadata shows creation on 2026-08-13; no reliable knowledge cutoff was shown.
- **IDs:** `deepseek-ai/DeepSeek-V4-Pro-0813`; API routes commonly use `deepseek-v4-pro` or provider-specific variants.
- **Context window:** 1M tokens (Artificial Analysis and BenchLM, accessed 2026-09-24). Exact output limit was not shown in the reviewed sources.
- **Modalities:** Text input and text output; reasoning and tool calls supported. Artificial Analysis explicitly reports no image input for this model.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $1.32 per 1M input and $3.96 per 1M output tokens, with a 97% cache discount. BenchLM reports a different DeepSeek native route at $0.435/$0.87 with cached input $0.003625; the two price sources are retained separately.
- **Architecture:** Open-weights MoE, approximately 1.6T total parameters and 49B active; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.9%** (DeepSeek Hugging Face model card; DeepSeek Harness, minimal mode, max reasoning, temperature 1.0, top_p 0.95)
- Toolathlon Verified: **74.1%** (DeepSeek Hugging Face model-card eval metadata)
- Toolathlon: **51.8%** (BenchLM, provider-exact DeepSeek V4 technical report)
- AutomationBench: **31.8%** (BenchLM, provider-exact DeepSeek V4 API update/agent comparison table)
- Agents' Last Exam: **25.7%**; CyberGym: **83.3%** (BenchLM, provider-exact DeepSeek V4 sources)
- GDPval-AA, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Graduate-Level: **90.1%** (BenchLM, provider-exact DeepSeek V4 source)
- GPQA Diamond: **no verified public exact value found** in the reviewed profile
- HLE: **42.7%** (BenchLM, provider-exact DeepSeek V4 API update/agent comparison table)
- MRCR 1M: **83.5%**; CorpusQA 1M: **62.0%** (BenchLM, provider-exact DeepSeek-V4 technical report)
- MMLU-Pro: **87.5%**; MMLU-Pro Vals: **87.0%** (BenchLM, provider-exact DeepSeek V4 sources)
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- DeepSWE: **no verified public exact value found** in the reviewed model-card metadata
- Terminal-Bench 2.1: **87.9%**
- Vibe Code Bench v1.1: **49.93%** (BenchLM, Vals AI source)
- SWE-bench Verified, SWE-Pro, LiveCodeBench, and SciCode: **no verified public exact value found**

Long context:

- MRCR 1M: **83.5%**; CorpusQA 1M: **62.0%** (BenchLM, provider-exact DeepSeek-V4 technical report)
- Native context capacity: **1M tokens** (Artificial Analysis and BenchLM)

Sources consulted: [DeepSeek V4 Pro Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813), [Artificial Analysis DeepSeek V4 Pro](https://artificialanalysis.ai/models/deepseek-v4-pro), and [BenchLM DeepSeek V4 Pro](https://benchlm.ai/models/deepseek-v4-pro), accessed 2026-09-24. Price and benchmark harness differences are explicitly labeled.

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal-Bench 87.9% and Toolathlon Verified 74.1% are direct strong tool/agent measurements; AutomationBench 31.8% and missing Tau/GDPval values prevent a maximum score.
- **Reasoning: 90/100.** GPQA 90.1%, HLE 42.7%, MMLU-Pro 87.5%, and the AA Index 36 provide strong evidence, with long-context results adding useful robustness.
- **Context window: 98/100.** The 1M context is verified and directly measured with MRCR 83.5% and CorpusQA 62.0% at 1M.
- **Multimodal: 15/100.** Artificial Analysis explicitly reports text-only input; no image support is claimed.
- **Coding: 89/100.** Terminal-Bench 87.9% and strong reasoning/agent positioning support high coding ability, but exact DeepSWE, SWE-bench, LiveCodeBench, and SciCode values are missing; Vibe Code Bench 49.93% is a caveat.
- **Cost efficiency: 92/100.** The native BenchLM price is exceptionally low and the Artificial Analysis route is still below many frontier models; provider pricing must be pinned before purchase.
- **Overall Score: 77.2/100.** (94 + 90 + 98 + 15 + 89) / 5 = 77.2. Best fit: text-only million-context coding and agent workloads where low price and long-range reasoning outweigh multimodal needs.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of official Hugging Face model-card metadata, Artificial Analysis, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
