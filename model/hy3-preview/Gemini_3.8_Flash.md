# Hy3 Preview — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent Hunyuan's initial preview release of the Hy3 architecture, featuring a 295B MoE (21B active) with hybrid reasoning modes, 256K context, and agent workflow capabilities.
- **Provider / access:** Tencent Hunyuan API, OpenRouter, Hugging Face open weights (`tencent/Hy3-preview`).
- **Release / knowledge:** April 2026.
- **IDs:** `hy3-preview`, `tencent/hy3-preview`
- **Context window:** 256,000 tokens (up to 32K output).
- **Modalities:** Text in / text out only.
- **Pricing (as of 2026-09-24):** TokenHub preview ~$0.17 / $0.55 per 1M tokens.
- **Architecture:** 295B parameter MoE (21B active, 192 experts top-8 routing, 3.8B MTP layer).

### Raw benchmarks found

Agent & Coding:

- SWE-bench Verified: **74.4%**
- Terminal-Bench 2.0: **54.4%**
- MBPP-plus: **78.71%**
- Agent workflow stability: supported complex trajectories up to 495 steps in preview testing.

Reasoning / knowledge:

- GPQA Diamond: **87.2%**
- SuperGPQA: **51.6%**
- Humanity's Last Exam (HLE): **~30.0%**
- GSM8K: **95.37%**
- MATH: **76.28%**

Long context:

- 256,000 token context window with CL-bench evaluation improvements.

### Normalized scores (1–100)

- **Tool use: 72/100.** Demonstrated 74.4% on SWE-bench Verified and multi-hundred step workflow completion; Terminal-Bench 2.0 at 54.4% maps to mid-tier agent capability.
- **Reasoning: 70/100.** 87.2% on GPQA Diamond and strong math baselines (95.37% GSM8K) show dependable reasoning.
- **Context window: 72/100.** 256K context accommodates extensive conversational histories and multi-document inputs.
- **Multimodal: 50/100.** Text-only input and output.
- **Coding: 74/100.** 74.4% SWE-bench Verified and 78.71% MBPP-plus show respectable code generation on this early checkpoint.
- **Cost efficiency: 84/100.** Economical ~$0.17 / $0.55 pricing and open-weights availability.
- **Overall Score: 68/100.** Arithmetic mean of non-cost metrics: (72 + 70 + 72 + 50 + 74) / 5 = 67.6 → 68. An effective open-weights preview checkpoint demonstrating the foundation for the full Hy3 release.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Tencent Hunyuan Hy3-preview technical documentation.
