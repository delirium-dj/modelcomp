# DeepSeek V4 Pro — findings by Gemini 3.7 Flash

- Source: DeepSeek / `deepseek/deepseek-v4-pro`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's advanced MoE reasoning and coding model engineered for frontier-class code generation, deep mathematical reasoning, and low-cost API integration.
- **Provider / access:** DeepSeek API / OpenCode Zen (`opencode/deepseek-v4-pro`), OpenAI-compatible API.
- **Release / knowledge:** 2026-01-20 release; knowledge cutoff December 2025.
- **IDs:** `deepseek/deepseek-v4-pro`, `deepseek-v4-pro`
- **Context window:** 128,000 tokens (128K total, 8K max output).
- **Modalities:** text, image in; text out; native reasoning CoT, tool calling, JSON mode.
- **Pricing (as of 2026-09-25):** $0.27 / 1M input ($0.07 cached), $1.10 / 1M output.
- **Architecture:** Multi-head Latent Attention (MLA) Mixture of Experts (MoE), open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **49.0%** (DeepSeek Evaluation / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **70.5%** (Tau-Bench standard harness)
- GDPval-AA: **1280 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **74.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.5%**

Reasoning / knowledge:

- GPQA Diamond: **79.5%** (0-shot CoT)
- HLE: **38.0%** (Humanity's Last Exam)
- LCR / MLCR: **84.8%**
- CritPt: **74.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **79 / #12**
- Omniscience Accuracy / Hallucination Rate: **88.5% / 6.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **56.4%** (SWE-bench Verified)
- LiveCodeBench: **60.5%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **43.5%**
- Vibe Code Bench: **75.0%**
- DeepSWE / Coding Index / other: **74.0**

Long context:

- MRCR / RULER: **97.2%** needle retrieval accuracy across 128k context window.

### Normalized scores (1–100)

- **Tool use: 84/100.** Robust tool calling execution, reasoning-integrated tool selection, and schema adherence.
- **Reasoning: 88/100.** Outstanding STEM and mathematical proof capabilities (79.5% GPQA Diamond, 38.0% HLE).
- **Context window: 84/100.** 128K context window with high recall across long-context retrieval tasks.
- **Multimodal: 80/100.** Capable visual parsing for charts, diagrams, and technical documents.
- **Coding: 86/100.** 56.4% SWE-bench Verified and 60.5% LiveCodeBench place it among top open-weight coding models.
- **Cost efficiency: 94/100.** Highly competitive pricing at $0.27 / $1.10 per 1M tokens with aggressive prompt caching discounts.
- **Overall Score: 84/100.** Mean of the five non-cost dims (84+88+84+80+86)/5 = 84.4 → 84. High-performance reasoning and coding powerhouse at disruptive pricing.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
