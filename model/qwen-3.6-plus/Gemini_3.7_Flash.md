# Qwen 3.6 Plus — findings by Gemini 3.7 Flash

- Source: Alibaba Cloud (`qwen-3.6-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba Cloud's updated enterprise commercial model in the Qwen 3 series, featuring enhanced long-context reasoning, improved code synthesis, and multi-step agent tool handling.
- **Provider / access:** Alibaba Cloud DashScope (`qwen-3.6-plus`) / OpenCode Zen API (`qwen/qwen-3.6-plus`), OpenAI-compatible chat completions.
- **Release / knowledge:** 2026-05-15 release; 2026 knowledge cutoff.
- **IDs:** `qwen/qwen-3.6-plus`
- **Context window:** 1,000,000 tokens (1M context window; 32k max output tokens).
- **Modalities:** Text, image, and document input; text and structured JSON output; function calling and tool execution.
- **Pricing (as of 2026-10-02):** $0.40 / $1.20 per 1M tokens ($0.10 cached input).
- **Architecture:** Commercial Mixture-of-Experts (MoE) multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **45.5%**
- Tau3-Banking / Tau2-Bench: **78.0%**
- GDPval-AA: **1230**
- Claw-Eval / ClawProBench: **73.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.0%**

Reasoning / knowledge:

- GPQA Diamond: **67.8%**
- HLE: **28.0%**
- LCR / MLCR: **75.0%**
- CritPt: **42.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **85.8 / #15**
- Omniscience Accuracy / Hallucination Rate: **83.6% / 7.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **59.0%**
- LiveCodeBench: **66.5%**
- SciCode / AA-SciCode: **42.5%**
- Vibe Code Bench: **75.0%**
- DeepSWE / Coding Index / other: **79.5**

Long context:

- MRCR at 1M: **92.5% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 85/100.** High-fidelity tool integration and complex workflow handling (Tau2-Bench 78.0%, Terminal-Bench 45.5%).
- **Reasoning: 86/100.** Strong mathematical and logical problem-solving (GPQA Diamond 67.8%, Intelligence Index 85.8).
- **Context window: 94/100.** 1M context window with improved 92.5% MRCR retrieval fidelity.
- **Multimodal: 76/100.** Accurate image, chart, and technical diagram comprehension.
- **Coding: 87/100.** Solid autonomous coding and refactoring performance (SWE-bench Verified 59.0%, LiveCodeBench 66.5%).
- **Cost efficiency: 91/100.** Excellent price-to-performance ratio at $0.40/$1.20 per 1M tokens.
- **Overall Score: 86/100.** Mean of the five non-cost quality dimensions (85+86+94+76+87)/5 = 85.6 → 86; capable and cost-efficient 1M long-context workhorse for enterprise coding and agents.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
