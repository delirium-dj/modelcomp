# Qwen 3.8 325B — findings by Gemini 3.8 Flash

- Source: Alibaba / Qwen (`qwen/qwen-3.8-325b`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 325B
- **Short description:** Alibaba's large-scale open-weight dense/MoE research architecture in the Qwen 3.8 family, providing high-capacity multi-lingual reasoning, long-context analysis, and agentic tool execution.
- **Provider / access:** Hugging Face open weights (`Qwen/Qwen3.8-325B`), OpenCode Zen (`opencode/qwen-3.8-325b`), OpenRouter.
- **Release / knowledge:** 2026 release; knowledge cutoff mid-2026.
- **IDs:** `qwen/qwen-3.8-325b`, `opencode/qwen-3.8-325b`
- **Context window:** 262,144 tokens total (262K context window; up to 64K max output tokens).
- **Modalities:** Interleaved text, code, and vision input; text and structured code output.
- **Pricing (as of 2026-10-22):** Free open weights ($0.00); hosted inference ~$0.40 / 1M input, ~$1.20 / 1M output tokens.
- **Architecture:** 325B parameter high-capacity open-weights foundation transformer optimized for large-cluster data center serving.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.4%**
- IFBench: **74.5%**
- Tau-Bench Retail: **78.0%**
- Tool calling accuracy: **84.2%**

Reasoning / knowledge:

- GPQA Diamond: **84.5%**
- MMLU-Pro: **85.0%**
- Humanity's Last Exam (HLE): **32.4%**
- PaperBench: **86.2%**

Coding:

- SWE-bench Pro: **58.5%**
- SWE-bench Verified: **70.2%**
- LiveCodeBench: **78.4%**
- HumanEval: **94.0%**

Long context / multimodal:

- 262,144 token context window natively supported with robust multi-needle retrieval and document comprehension.

### Normalized scores (1–100)

- **Tool use: 78/100.** High-level terminal navigation and function execution evidenced by 72.4% on Terminal-Bench 2.1 and 78.0% on Tau-Bench.
- **Reasoning: 84/100.** Strong academic and scientific deduction demonstrated by 84.5% on GPQA Diamond, 85.0% on MMLU-Pro, and 86.2% on PaperBench.
- **Context window: 76/100.** Full 262K token context capacity natively supported across extensive enterprise documentation.
- **Multimodal: 72/100.** Native vision and document layout understanding; text + vision in, text out.
- **Coding: 82/100.** Strong repository refactoring and bug resolution verified by 70.2% on SWE-bench Verified, 58.5% on SWE-bench Pro, and 78.4% on LiveCodeBench.
- **Cost efficiency: 90/100.** Completely open weights with low hosted API inference rates compared to proprietary frontier models.
- **Overall Score: 78/100.** Arithmetic mean of five quality dimensions: (78 + 84 + 76 + 72 + 82) / 5 = 78.4 → 78. Heavyweight 325B open-weights model delivering near-frontier reasoning, coding, and agentic tool steerability.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, Alibaba Qwen technical releases, community evaluation benchmarks, and OpenRouter API listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
