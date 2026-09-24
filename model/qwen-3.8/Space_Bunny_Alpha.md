# Qwen 3.8 — findings by Space Bunny Alpha

- Source: Alibaba/Qwen (`Qwen/Qwen3.8-27B`; open-weight family)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (27B open-weight variant)
- **Short description:** Qwen's open model family for coding, professional work, research, and long-horizon agent execution, with native image/video input and configurable reasoning.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-27B`; OpenAI-compatible local serving through SGLang, vLLM, and TokenSpeed. The exact hosted model ID `qwen3.8`/`qwen3.8-max` is not interchangeable with the 27B checkpoint.
- **Release / knowledge:** The official Qwen repository identifies the 2026 Qwen3.8 series; Hugging Face metadata shows repository creation on 2026-08-05. No reliable knowledge cutoff was shown in the reviewed sources.
- **IDs:** `Qwen/Qwen3.8-27B`; family references include `Qwen3.8` and `Qwen3.8-Max`.
- **Context window:** The official repository's serving examples use a **262,144-token** context length for Qwen3.8-27B; no separate official maximum output limit was shown.
- **Modalities:** Text, image, and video input; text output; reasoning, tool calls, JSON/structured output, and OpenAI-compatible serving documented by the model card/repository.
- **Pricing (as of 2026-09-24):** No official per-token price for the self-hosted 27B checkpoint was shown. The repository emphasizes local deployment; hosted Qwen3.8-Max pricing is not substituted for this checkpoint.
- **Architecture:** Qwen3.8-27B is an open-weight dense model in the official repository; Apache-2.0 license shown on Hugging Face. Parameter count is approximately 27B by model name, but no independent architecture details were exposed in the reviewed pages.

### Raw benchmarks found

Agent / tool use:

- GPQA Diamond: **89.2%** (Qwen3.8-27B Hugging Face model-card eval result)
- DeepSWE: **42.2%** (Qwen3.8-27B Hugging Face model-card eval result)
- SWE-bench Pro: **61.7%** (Qwen3.8-27B Hugging Face model-card eval result)
- ExtractBench mean: **88.00%**; short **94.68%**, medium **87.54%**, long **38.45%** (Qwen3.8-27B model-card eval results)
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (Qwen3.8-27B model-card eval result)
- Other exact HLE, LCR/MLCR, CritPt, and hallucination values: **no verified public exact value found**

Coding:

- DeepSWE: **42.2%** (Qwen3.8-27B model-card eval result)
- SWE-bench Pro: **61.7%** (Qwen3.8-27B model-card eval result)
- ExtractBench mean: **88.00%** (structured extraction benchmark; not a substitute for code repair)
- LiveCodeBench, SciCode, Vibe Code Bench, and exact SWE-bench Verified: **no verified public exact value found**

Long context:

- The official serving example configures **262,144** context tokens for Qwen3.8-27B. No independent retrieval-at-length score was found.

Sources consulted: [official Qwen3.8 repository](https://github.com/QwenLM/Qwen3.8) and [Qwen3.8-27B Hugging Face model card](https://huggingface.co/Qwen/Qwen3.8-27B), accessed 2026-09-24. Benchmark values are from the model's Hugging Face eval metadata; no peer findings were used.

### Normalized scores (1–100)

- **Tool use: 76/100.** The model supports tool calls and agent-oriented serving, and SWE-bench Pro 61.7% provides coding-agent evidence; exact Terminal-Bench, Tau, GDPval, and MCP values were unavailable.
- **Reasoning: 83/100.** GPQA Diamond 89.2% is strong for a 27B open model, while exact HLE, LCR, CritPt, and hallucination values were not found.
- **Context window: 82/100.** The official serving example verifies 262K context, above the 200K tier but below 500K; retrieval quality was not measured publicly here.
- **Multimodal: 90/100.** The official model card demonstrates image and video input examples with text output.
- **Coding: 78/100.** SWE-bench Pro 61.7% and DeepSWE 42.2% support credible coding ability, but no SWE-bench Verified, LiveCodeBench, or SciCode value was found.
- **Cost efficiency: 90/100.** Self-hosting/open weights avoids a hosted token price in the reviewed sources; actual infrastructure cost is workload-dependent and is not claimed as $0.
- **Overall Score: 81.8/100.** (76 + 83 + 82 + 90 + 78) / 5 = 81.8. Best fit: self-hosted multimodal coding and agent workloads where open weights, local deployment, and Qwen tooling matter more than frontier hosted-model scores.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of the official Qwen repository and Hugging Face model-card metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
