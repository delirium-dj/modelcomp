# Hy3 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent Hunyuan's open-weights Mixture-of-Experts foundation model (295B total / 21B active) featuring hybrid fast/slow thinking, 256K context, and strong agentic tool reliability under an Apache 2.0 license.
- **Provider / access:** Tencent Cloud API, [OpenRouter](https://openrouter.ai/models/tencent/hy3) (`tencent/hy3`), DeepInfra, and [Hugging Face](https://huggingface.co/tencent) open weights.
- **Release / knowledge:** July 6, 2026 (GA release following April 2026 preview).
- **IDs:** `hy3`, `tencent/hy3`
- **Context window:** 262,144 tokens (256K context window; up to 32K output).
- **Modalities:** Text in / text out only. Tool calls and structured outputs. (Multimodal vision is hosted under separate Hunyuan-T1-Vision models).
- **Pricing (as of 2026-10-11):** ~$0.0825 – $0.14 / 1M input tokens, ~$0.33 – $0.58 / 1M output tokens (~$0.033 / 1M cached input); Apache 2.0 open-weight weights available for self-hosting.
- **Architecture:** 295B total / 21B active MoE (80 layers, 192 experts top-8 routing, 3.8B Multi-Token Prediction layer).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.4**
- Tool-call stability: production grade across scaffolds (CodeBuddy, Cline, KiloCode).
- BrowseComp / WideSearch: leading open-weights results.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **25.3** (evaluations range up to 41 depending on reasoning configuration)
- IMOAnswerBench & FrontierScience Olympiad: competitive Chinese STEM reasoning.
- Hallucination rate: reduced to **5.4%**.

Coding:

- SWE-bench Verified: **78 resolved**
- Terminal-Bench 2.1: **90.4**
- Artificial Analysis Coding Index: **58.8**
- WorkBuddy task success: **90%** (-34% average completion time).

Long context:

- 256,000 token context window evaluated on CL-bench and CL-bench Life.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 score of 90.4 and proven scaffold stability highlight very capable agentic tool interactions.
- **Reasoning: 74/100.** Effective dual-speed reasoning with low hallucination (5.4%) and solid practical reasoning (25.3 AA Index).
- **Context window: 72/100.** 256K context provides ample capacity for multi-turn conversational agents and code analysis.
- **Multimodal: 15/100.** Baseline text-only score; lacks native vision/audio modalities (vision tasks belong to separate Hunyuan-T1-Vision).
- **Coding: 79/100.** Strong SWE-bench Verified (78 resolved), 58.8 AA Coding Index, and high execution reliability across software pipelines.
- **Cost efficiency: 88/100.** Extremely attractive pricing at ~$0.08–$0.14 / $0.33–$0.58 per 1M tokens with Apache 2.0 open-weights flexibility.
- **Overall Score: 64/100.** Arithmetic mean of non-cost metrics: (78 + 74 + 72 + 15 + 79) / 5 = 63.6 → 64. A dependable, budget-friendly open-weights coding and tool-calling agent model.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and analysis of Tencent Hunyuan technical documentation, OpenRouter pricing, and Artificial Analysis leaderboards.
