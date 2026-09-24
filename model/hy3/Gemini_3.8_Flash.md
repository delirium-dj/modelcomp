# Hy3 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent Hunyuan's open-weights Mixture-of-Experts foundation model (295B total / 21B active) featuring hybrid fast/slow thinking, 256K context, and strong agentic tool reliability under an Apache 2.0 license.
- **Provider / access:** Tencent Cloud API, OpenRouter (`tencent/hy3`), DeepInfra, Hugging Face open weights.
- **Release / knowledge:** July 2026.
- **IDs:** `hy3`, `tencent/hy3`
- **Context window:** 256,000 tokens (up to 32K output).
- **Modalities:** Text in / text out only. Tool calls and structured outputs.
- **Pricing (as of 2026-09-24):** $0.14 / 1M input tokens, $0.58 / 1M output tokens ($0.035 cached input).
- **Architecture:** 295B parameter MoE (21B active parameters, 80 layers, 192 experts top-8 routing).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.4**
- Tool-call stability: production grade across scaffolds (CodeBuddy, Cline, KiloCode).
- BrowseComp / WideSearch: leading open-weights results.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **41**
- Tencent expert workflow panel: **2.67/4** (vs GLM-5.1 2.51/4)
- Hallucination rate: reduced to **5.4%**

Coding:

- SWE-bench Verified: **78 resolved**
- Terminal-Bench 2.1: **90.4**
- WorkBuddy task success: **90%** (-34% average completion time)

Long context:

- 256,000 token context window with enhanced multi-turn coreference and constraint inheritance.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 score of 90.4 and proven scaffold stability highlight very capable agentic tool interactions.
- **Reasoning: 74/100.** Effective dual-speed reasoning with low hallucination (5.4%) and solid practical reasoning (41 AA Index).
- **Context window: 72/100.** 256K context provides ample capacity for multi-turn conversational agents and code analysis.
- **Multimodal: 50/100.** Text-only input and output.
- **Coding: 79/100.** Strong SWE-bench Verified (78 resolved) and high execution reliability across software development pipelines.
- **Cost efficiency: 88/100.** Extremely attractive pricing at ~$0.14 / $0.58 per 1M tokens with Apache 2.0 open-weights flexibility.
- **Overall Score: 71/100.** Arithmetic mean of non-cost metrics: (78 + 74 + 72 + 50 + 79) / 5 = 70.6 → 71. A dependable, budget-friendly open-weights coding and tool-calling agent model.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Tencent Hunyuan technical disclosures and open-source benchmarks.
