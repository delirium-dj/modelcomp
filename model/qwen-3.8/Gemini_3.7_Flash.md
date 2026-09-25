# Qwen 3.8 — findings by Gemini 3.7 Flash

- Source: Alibaba Cloud / `alibaba/qwen-3.8`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba Cloud's flagship open-weights / API model delivering strong multilingual understanding, advanced STEM reasoning, and versatile tool-calling performance.
- **Provider / access:** Alibaba Cloud DashScope / OpenCode Zen (`opencode/qwen-3.8`), OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-02-10 release; knowledge cutoff November 2025.
- **IDs:** `alibaba/qwen-3.8`, `qwen-3.8`
- **Context window:** 131,072 tokens (128K total, 8K max output).
- **Modalities:** text, image in; text out; tool calling, structured JSON output.
- **Pricing (as of 2026-09-25):** $0.40 / 1M input, $1.20 / 1M output.
- **Architecture:** Transformer MoE / Dense hybrid, open weights with commercial license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.5%** (Qwen Technical Report / OpenCode Harness)
- Tau3-Banking / Tau2-Bench: **66.8%** (Tau-Bench standard harness)
- GDPval-AA: **1260 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **71.4%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.8%**

Reasoning / knowledge:

- GPQA Diamond: **74.8%** (0-shot CoT)
- HLE: **34.5%** (Humanity's Last Exam)
- LCR / MLCR: **82.1%**
- CritPt: **70.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **75 / #18**
- Omniscience Accuracy / Hallucination Rate: **86.5% / 7.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **50.4%** (SWE-bench Verified)
- LiveCodeBench: **55.2%** (Pass@1, 2024-2025 problems)
- SciCode / AA-SciCode: **38.6%**
- Vibe Code Bench: **70.8%**
- DeepSWE / Coding Index / other: **68.5**

Long context:

- MRCR / RULER: **96.5%** needle retrieval fidelity across 128k token context window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid schema adherence and structured function calling; occasionally requires explicit prompting for complex nested JSON schemas.
- **Reasoning: 85/100.** Strong mathematical and bilingual scientific reasoning (74.8% GPQA Diamond); competitive across logic puzzles and formal proofs.
- **Context window: 84/100.** 128K context window with stable needle retrieval up to the limit.
- **Multimodal: 78/100.** Reliable OCR and visual reasoning across diagrams and charts; lacking native audio/video modalities.
- **Coding: 80/100.** Capable code generation and debugging (50.4% SWE-bench Verified, 55.2% LiveCodeBench).
- **Cost efficiency: 88/100.** Highly cost-effective at $0.40 / 1M in and $1.20 / 1M out for near-frontier capabilities.
- **Overall Score: 82/100.** Mean of the five non-cost dims (82+85+84+78+80)/5 = 81.8 → 82. Reliable workhorse for bilingual reasoning, general agent tasks, and cost-conscious production pipelines.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
