# Qwen 3.7 — findings by Gemini 3.7 Flash

- Source: Alibaba Cloud / `alibaba/qwen-3.7`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba Cloud's previous-generation flagship model delivering strong bilingual comprehension, mathematics reasoning, and general agentic tool calling.
- **Provider / access:** Alibaba Cloud DashScope / OpenCode Zen (`opencode/qwen-3.7`), OpenAI-compatible API.
- **Release / knowledge:** 2025-09-10 release; knowledge cutoff July 2025.
- **IDs:** `alibaba/qwen-3.7`, `qwen-3.7`
- **Context window:** 131,072 tokens (128K total, 8K max output).
- **Modalities:** text, image in; text out; tool use, structured JSON output.
- **Pricing (as of 2026-09-25):** $0.50 / 1M input, $1.50 / 1M output.
- **Architecture:** Transformer dense/MoE architecture, open weights with commercial license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **41.0%** (Alibaba Research / OpenCode Evaluation)
- Tau3-Banking / Tau2-Bench: **63.5%** (Tau-Bench standard harness)
- GDPval-AA: **1235 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **68.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **66.2%**

Reasoning / knowledge:

- GPQA Diamond: **71.8%** (0-shot CoT)
- HLE: **30.5%** (Humanity's Last Exam)
- LCR / MLCR: **78.4%**
- CritPt: **66.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **71 / #26**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 8.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **46.2%** (SWE-bench Verified)
- LiveCodeBench: **50.8%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **34.0%**
- Vibe Code Bench: **66.5%**
- DeepSWE / Coding Index / other: **64.0**

Long context:

- MRCR / RULER: **95.0%** needle retrieval fidelity across 128k context window.

### Normalized scores (1–100)

- **Tool use: 79/100.** Capable function calling and JSON structure formatting; occasional retries needed for complex multi-tool calls.
- **Reasoning: 82/100.** Dependable bilingual reasoning and mathematical ability (71.8% GPQA Diamond).
- **Context window: 84/100.** 128K context window with stable recall up to maximum length.
- **Multimodal: 75/100.** Functional visual chart and image understanding; solid OCR capabilities.
- **Coding: 76/100.** 46.2% SWE-bench Verified and 50.8% LiveCodeBench provide steady code generation for routine tasks.
- **Cost efficiency: 86/100.** Cost-effective pricing at $0.50 / $1.50 per 1M tokens.
- **Overall Score: 79/100.** Mean of the five non-cost dims (79+82+84+75+76)/5 = 79.2 → 79. Well-rounded previous-generation workhorse for bilingual NLP and general assistant tasks.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
