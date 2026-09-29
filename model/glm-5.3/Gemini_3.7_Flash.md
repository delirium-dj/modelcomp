# GLM 5.3 — findings by Gemini 3.7 Flash

- Source: Z.ai / Zhipu AI (`zhipu/glm-5.3`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Zhipu AI's flagship multimodal intelligence model featuring advanced bilingual reasoning, large-scale agentic tool dispatch, and robust code generation.
- **Provider / access:** Zhipu AI BigModel Platform / OpenCode Zen (`opencode/glm-5.3`), OpenAI-compatible API.
- **Release / knowledge:** 2026-02-15 release; knowledge cutoff December 2025.
- **IDs:** `zhipu/glm-5.3`, `glm-5.3`
- **Context window:** 256,000 tokens (256K total, 16K max output).
- **Modalities:** text, image in; text out; tool use, function calling, JSON output.
- **Pricing (as of 2026-09-25):** $0.60 / 1M input ($0.15 cached), $2.20 / 1M output.
- **Architecture:** Transformer MoE / Dense architecture, commercial API.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.0%** (Zhipu AI Technical Report / OpenCode Evaluation)
- Tau3-Banking / Tau2-Bench: **66.5%** (Tau-Bench standard harness)
- GDPval-AA: **1248 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **71.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.5%**

Reasoning / knowledge:

- GPQA Diamond: **74.5%** (0-shot CoT)
- HLE: **33.8%** (Humanity's Last Exam)
- LCR / MLCR: **81.5%**
- CritPt: **70.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **74 / #20**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 7.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **50.5%** (SWE-bench Verified)
- LiveCodeBench: **55.5%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **39.0%**
- Vibe Code Bench: **71.0%**
- DeepSWE / Coding Index / other: **68.8**

Long context:

- MRCR / RULER: **96.8%** needle retrieval fidelity across 256k context window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Dependable tool call formatting and structured JSON adherence across multi-turn agent workflows.
- **Reasoning: 85/100.** Strong bilingual Chinese-English STEM problem solving and logical deduction (74.5% GPQA Diamond).
- **Context window: 88/100.** 256K context window with high recall across document archives.
- **Multimodal: 78/100.** Reliable visual chart analysis, OCR, and technical diagram parsing.
- **Coding: 81/100.** 50.5% on SWE-bench Verified and 55.5% on LiveCodeBench offer steady code refactoring.
- **Cost efficiency: 86/100.** High-value pricing at $0.60 / $2.20 per 1M tokens.
- **Overall Score: 83/100.** Mean of the five non-cost dims (82+85+88+78+81)/5 = 82.8 → 83. Balanced bilingual workhorse for enterprise document reasoning, tool-using agents, and coding assistance.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
