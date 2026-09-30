# Qwen 3.7 Plus — findings by Gemini 3.7 Flash

- Source: Alibaba Cloud / `alibaba/qwen-3.7-plus`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba Cloud's value-optimized multimodal flagship tier designed for long-context vision, complex GUI agent automation, and robust bilingual STEM reasoning.
- **Provider / access:** Alibaba Cloud DashScope / OpenCode Zen (`opencode/qwen-3.7-plus`), OpenAI-compatible API.
- **Release / knowledge:** 2025-10-15 release; knowledge cutoff August 2025.
- **IDs:** `alibaba/qwen-3.7-plus`, `qwen-3.7-plus`
- **Context window:** 1,000,000 tokens (1M total, 8K max output).
- **Modalities:** text, image, video in; text out; tool use, structured output.
- **Pricing (as of 2026-09-25):** $0.40 / 1M input ($0.10 cached), $1.60 / 1M output.
- **Architecture:** Transformer MoE / Dense hybrid, commercial API.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **47.5%** (Alibaba Research / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **70.2%** (Tau-Bench standard harness)
- GDPval-AA: **1280 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **75.4%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.8%**

Reasoning / knowledge:

- GPQA Diamond: **77.2%** (0-shot CoT)
- HLE: **37.0%** (Humanity's Last Exam)
- LCR / MLCR: **84.5%**
- CritPt: **73.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **77 / #15**
- Omniscience Accuracy / Hallucination Rate: **88.0% / 6.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **53.8%** (SWE-bench Verified)
- LiveCodeBench: **58.6%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **41.5%**
- Vibe Code Bench: **73.8%**
- DeepSWE / Coding Index / other: **71.2**

Long context:

- MRCR / RULER: **97.5%** needle retrieval fidelity across 1M context window.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool selection, multi-step agent chaining, and screen/GUI grounding capabilities.
- **Reasoning: 86/100.** Excellent bilingual reasoning and mathematical ability (77.2% GPQA Diamond).
- **Context window: 92/100.** 1M context window with high recall across long documents and video sequences.
- **Multimodal: 84/100.** Native vision and multi-frame video understanding; strong OCR and diagram parsing.
- **Coding: 83/100.** 53.8% on SWE-bench Verified and 58.6% on LiveCodeBench offer dependable code refactoring.
- **Cost efficiency: 88/100.** Excellent price-to-performance ratio at $0.40 / $1.60 per 1M tokens.
- **Overall Score: 86/100.** Mean of the five non-cost dims (84+86+92+84+83)/5 = 85.8 → 86. Recommended value pick for 1M multimodal tasks, GUI automation, and bilingual agent workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
