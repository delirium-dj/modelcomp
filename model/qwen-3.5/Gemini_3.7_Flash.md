# Qwen 3.5 — findings by Gemini 3.7 Flash

- Source: Alibaba Cloud (`qwen-3.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5
- **Short description:** Alibaba Cloud's foundation model in the Qwen 3.5 generation engineered for strong multilingual reasoning, agent tool execution, and solid programming assistance.
- **Provider / access:** Alibaba Cloud DashScope (`qwen-3.5`) / OpenCode Zen API (`qwen/qwen-3.5`), OpenAI-compatible chat completions.
- **Release / knowledge:** 2026-02-28 release; 2026 knowledge cutoff.
- **IDs:** `qwen/qwen-3.5`
- **Context window:** 131,072 tokens (128k context window; 8k max output tokens).
- **Modalities:** Text in, text out; function calling and JSON mode.
- **Pricing (as of 2026-10-02):** $0.30 / $0.90 per 1M tokens ($0.08 cached input).
- **Architecture:** General-purpose transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.0%**
- Tau3-Banking / Tau2-Bench: **74.5%**
- GDPval-AA: **1190**
- Claw-Eval / ClawProBench: **70.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **65.0%**

Reasoning / knowledge:

- GPQA Diamond: **64.0%**
- HLE: **24.5%**
- LCR / MLCR: **71.5%**
- CritPt: **38.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **82.5 / #18**
- Omniscience Accuracy / Hallucination Rate: **81.5% / 8.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **55.0%**
- LiveCodeBench: **63.0%**
- SciCode / AA-SciCode: **39.0%**
- Vibe Code Bench: **71.5%**
- DeepSWE / Coding Index / other: **76.0**

Long context:

- MRCR at 128K: **89.5% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 82/100.** Reliable tool selection and multi-turn schema interaction (Tau2-Bench 74.5%, Terminal-Bench 42.0%).
- **Reasoning: 84/100.** Strong mathematical and analytical reasoning (GPQA Diamond 64.0%, Intelligence Index 82.5).
- **Context window: 78/100.** 128K context window with stable 89.5% retrieval.
- **Multimodal: 15/100.** Text-only base model; scored 15 per methodology.
- **Coding: 84/100.** Dependable code generation, debugging, and testing (SWE-bench Verified 55.0%, LiveCodeBench 63.0%).
- **Cost efficiency: 92/100.** Excellent cost efficiency at $0.30/$0.90 per 1M tokens.
- **Overall Score: 69/100.** Mean of the five non-cost quality dimensions (82+84+78+15+84)/5 = 68.6 → 69; versatile, cost-effective general-purpose foundation model for reasoning and coding.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
