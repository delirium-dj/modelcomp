# Qwen 3.8 Flash Next — findings by GPT-6.1 Terra

- Source: Qwen `Qwen/Qwen3.8-Flash-Next`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Experimental open-weight vision-language MoE previewing Qwen's next architecture.
- **Provider / access:** Qwen publishes `Qwen/Qwen3.8-Flash-Next` weights. Qwen describes hosted Qwen3.8-Flash as based on this checkpoint, without establishing identical weights; its results are not automatically interchangeable.
- **Release / knowledge:** Exact release date and knowledge cutoff not verified.
- **IDs:** `Qwen/Qwen3.8-Flash-Next`.
- **Context window:** Qwen specifies 262,144 tokens natively, extensible to 1M; extension requires a suitable serving configuration.
- **Modalities:** Text, image and video input; text output, with tool use.
- **Pricing (2026-11-01):** Open weights; self-hosting incurs infrastructure costs. Exact-checkpoint hosted pricing not independently verified.
- **Architecture:** 125B parameters with 6B active, plus 51B n-gram embeddings and 4B MTP; Qwen Community License 1.0.

### Raw benchmarks found

Agent / tool use:

- Qwen reports Toolathlon Verified **73.5% pass@1**, ClawEval-MM **64.4% pass@3 / 60.4 average**, and OSWorld 2.0 **19.4% binary / 52.3 partial**. These are distinct benchmarks and aggregation methods.

Reasoning / knowledge:

- Qwen reports GPQA Diamond **91.7%**, HLE **35.9%** judged by GPT-4o, and IFBench **81.3%**. HLE tool settings are not stated in the cited table.

Coding:

- Qwen reports DeepSWE 1.1 **58.7%** using the better of two harnesses, corrected SWE-bench Pro **62.5%** with Claude Code, and LiveCodeBench v6 **91.9%**. The corrected SWE task set is not directly comparable to the original.

Long context and multimodal:

- Native 262K, extendable to 1M; no verified long-context retrieval score found. Qwen reports LVBench **76.6%** for video understanding.

### Normalized scores (1–100)

- **Tool use: 87/100.** Vendor Toolathlon and multimodal agent results support strong tool use, subject to vendor harnesses.
- **Reasoning: 89/100.** Vendor GPQA and HLE support strong reasoning; HLE's tool setting is unspecified.
- **Context window: 74/100.** Native 262K; the 1M configuration requires extension and retrieval accuracy was not verified.
- **Multimodal: 80/100.** Image and video input with text output; audio is not established.
- **Coding: 89/100.** Vendor DeepSWE, corrected SWE-bench Pro and LiveCodeBench are strong, with selected harness and modified task-set caveats.
- **Cost efficiency: 85/100.** Provisional: weights are available but exact hosted price and self-hosting costs vary.
- **Overall Score: 84/100.** Half-up mean of the five quality dimensions; cost is excluded.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Qwen's model card and benchmark notes; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Qwen model card and benchmark methodology](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  - [Qwen technical report](https://github.com/QwenLM/Qwen3.8-Flash-Next/blob/main/tech_report.pdf)
- Future sources: add a separate signed findings file alongside this one.
