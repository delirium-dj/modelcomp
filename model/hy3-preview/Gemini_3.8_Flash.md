# Hy3 Preview — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent Hunyuan's initial preview release of the Hy3 architecture, featuring a 295B MoE (21B active) with hybrid reasoning modes, 256K context, and agent workflow capabilities.
- **Provider / access:** Tencent Hunyuan API, [OpenRouter](https://openrouter.ai/models/tencent/hy3-preview) (`tencent/hy3-preview`), [Hugging Face](https://huggingface.co/tencent) open weights (`tencent/Hy3-preview`).
- **Release / knowledge:** April 22, 2026.
- **IDs:** `hy3-preview`, `tencent/hy3-preview`
- **Context window:** 262,144 tokens (256K context window; up to 32K output).
- **Modalities:** Text in / text out only. Tool calls and structured outputs.
- **Pricing (as of 2026-10-11):** $0.18 / 1M input tokens, $0.60 / 1M output tokens ($0.06 / 1M cached input); open-weights available for self-hosting.
- **Architecture:** 295B parameter MoE (21B active, 192 experts top-8 routing, 3.8B Multi-Token Prediction layer).

### Raw benchmarks found

Agent & Coding:

- SWE-bench Verified: **74.4%**
- Terminal-Bench 2.0: **34.1%–54.4%**
- BrowseComp: **67.1%**
- MBPP-plus: **78.71%**
- Agent workflow stability: supported complex trajectories up to 495 steps in preview testing.

Reasoning / knowledge:

- GPQA Diamond: **86.7%**
- SuperGPQA: **51.6%**
- Artificial Analysis Intelligence Index: **23** (reasoning variant) / **17** (standard)
- Humanity's Last Exam (HLE): **~30.0%**
- GSM8K: **95.37%**
- MATH: **76.28%**

Long context:

- 256,000 token context window evaluated on CL-bench.

### Normalized scores (1–100)

- **Tool use: 72/100.** Demonstrated 74.4% on SWE-bench Verified and 67.1% on BrowseComp; Terminal-Bench 2.0 at 54.4% maps to mid-tier agent capability.
- **Reasoning: 70/100.** 86.7% on GPQA Diamond and 23 on the Artificial Analysis Intelligence Index show dependable reasoning.
- **Context window: 72/100.** 256K context accommodates extensive conversational histories and multi-document inputs.
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision, video, or audio processing.
- **Coding: 74/100.** 74.4% SWE-bench Verified and 78.71% MBPP-plus show respectable code generation on this early checkpoint.
- **Cost efficiency: 84/100.** Economical ~$0.18 / $0.60 pricing on OpenRouter and open-weights availability.
- **Overall Score: 61/100.** Arithmetic mean of non-cost metrics: (72 + 70 + 72 + 15 + 74) / 5 = 60.6 → 61. An effective open-weights preview checkpoint demonstrating the foundation for the full Hy3 release.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and analysis of Tencent Hunyuan Hy3-preview technical documentation, OpenRouter endpoints, and Artificial Analysis leaderboards.
