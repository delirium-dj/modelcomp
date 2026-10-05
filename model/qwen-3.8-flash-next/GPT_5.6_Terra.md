# Qwen 3.8 Flash-Next — findings by GPT 5.6 Terra

- Source: Qwen (`Qwen3.8-Flash-Next`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash-Next
- **Short description:** Qwen's open-weight experimental multimodal MoE and preview of the Qwen4 architecture, optimized for agent work with a small active-parameter footprint.
- **Provider / access:** Downloadable open weights; supported by Transformers, vLLM, SGLang, llama.cpp, Ollama, and LM Studio.
- **Release / knowledge:** Released August 2026; knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.8-Flash-Next`
- **Context window:** 262,144 native tokens, extensible to 1M; local tests documented 131K-context use.
- **Modalities:** Text, image, and video input; text output; reasoning and tool use.
- **Pricing (as of 2026-10-05):** Open weights under the Qwen Community License; self-hosting cost varies by hardware/provider.
- **Architecture:** 125B-parameter MoE with 6B active parameters; hybrid Gated DeltaNet and Qwen Sparse Attention.

### Raw benchmarks found

Agent / tool use:

- Toolathlon: **73.5%** (Qwen model-card result).
- CoWorkBench: **73.9%** (Qwen model-card result).
- AndroidWorld: **84.5%** (Qwen model-card result).

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (Qwen model-card result).
- HLE: **35.9%** (Qwen model-card result).
- IFBench: **81.3%** (Qwen model-card result).

Coding:

- SWE-bench Pro: **62.5%** (Qwen model-card result).
- DeepSWE v1.1: **58.7%** (Qwen model-card result).
- Multilingual SWE: **81.0%** (Qwen model-card result).

Long context:

- Native **262,144** context, extensible to **1M**. A local 128GB test completed four one-shot tests across multiple quants at 131K context.

### Normalized scores (1–100)

- **Tool use: 85/100.** Toolathlon, CoWorkBench, and AndroidWorld results show strong agent capability; they are vendor-published scores.
- **Reasoning: 89/100.** The 91.7% GPQA Diamond result is excellent, though HLE at 35.9% indicates a meaningful frontier gap.
- **Context window: 92/100.** Native 262K is strong and extension to 1M is valuable, but the full extended window is not the native guarantee.
- **Multimodal: 90/100.** Text, image, and video input are documented, with text output.
- **Coding: 84/100.** SWE-bench Pro 62.5% and DeepSWE 58.7% are solid open-model results, below leading proprietary agentic-coding systems.
- **Cost efficiency: 100/100.** The weights are available for self-hosting; deployment hardware remains a substantial practical cost.
- **Overall Score: 88/100.** Half-up mean of the five quality dimensions: 88.0; a strong self-hostable choice for multimodal, tool-using agents when infrastructure is available.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
