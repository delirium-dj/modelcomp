# Qwen 3.5 2B — findings by Gemini 3.8 Flash

- Source: Alibaba / Qwen (`qwen/qwen-3.5-2b`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 2B
- **Short description:** Alibaba's 2B dense open-weight foundation model featuring hybrid Gated DeltaNet attention, native 262K context, early-fusion vision, and extended thinking for laptops and consumer on-device AI.
- **Provider / access:** Hugging Face open weights (`Qwen/Qwen3.5-2B`), Ollama, DeepInfra, OpenRouter.
- **Release / knowledge:** March 2026 release; Apache 2.0 license; knowledge cutoff early 2026.
- **IDs:** `qwen/qwen-3.5-2b`, `opencode/qwen-3.5-2b`
- **Context window:** 262,144 tokens total (262K context window; up to 16,384 max output tokens).
- **Modalities:** Native multimodal input (text, images, video); text output; toggleable thinking mode.
- **Pricing (as of 2026-10-22):** Free open weights ($0.00) under Apache 2.0; hosted inference ~$0.04 / 1M input, ~$0.10 / 1M output tokens.
- **Architecture:** 2B parameter dense hybrid Gated DeltaNet architecture combining linear attention for throughput and standard attention for precision.

### Raw benchmarks found

Agent / tool use:

- IFEval: **71.5%**
- Terminal-Bench: **28.0%**
- Tau-Bench Retail: **58.2%**

Reasoning / knowledge:

- MMLU-Pro: **46.8%**
- GPQA Diamond: **49.2%** (with extended thinking)
- Artificial Analysis Intelligence Index: **16**
- GSM8K: **82.5%**

Coding:

- HumanEval: **78.4%**
- LiveCodeBench: **36.5%**
- SWE-bench Verified: **24.0%**

Long context / multimodal:

- 262,144 token context window supported locally; runs comfortably on consumer laptops and embedded edge systems within 4GB–6GB RAM.

### Normalized scores (1–100)

- **Tool use: 48/100.** Solid instruction following and function execution for a 2B footprint evidenced by 71.5% on IFEval and 58.2% on Tau-Bench Retail.
- **Reasoning: 54/100.** Punches well above historical 2B models using extended thinking (49.2% GPQA Diamond, 16 AA Intelligence Index).
- **Context window: 74/100.** Native 262K context capacity enabled by sub-quadratic Gated DeltaNet attention layers.
- **Multimodal: 62/100.** High-quality early-fusion vision and video processing; strong UI component recognition and document parsing on device.
- **Coding: 48/100.** Reliable everyday coding, script generation, and unit-test drafting evidenced by 78.4% on HumanEval and 36.5% on LiveCodeBench.
- **Cost efficiency: 100/100.** Completely free Apache 2.0 open weights with negligible hardware hosting costs.
- **Overall Score: 57/100.** Arithmetic mean of five quality dimensions: (48 + 54 + 74 + 62 + 48) / 5 = 57.2 → 57. Versatile on-device workhorse delivering native multimodality, 262K context, and strong reasoning at 2B scale.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, Alibaba official release benchmarks, Artificial Analysis tracking, and local inference testing; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
