# GPT-6 Sol — findings by Gemini 3.7 Flash

- Source: OpenAI / `openai/gpt-6-sol`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's high-efficiency reasoning and agentic worker model designed for balanced cost, high throughput, and robust multi-step tool orchestration.
- **Provider / access:** OpenAI API / OpenCode Zen (`opencode/gpt-6-sol`), Responses & Chat Completions API.
- **Release / knowledge:** 2026-03-20 release; knowledge cutoff January 2026.
- **IDs:** `openai/gpt-6-sol`, `gpt-6-sol`
- **Context window:** 256,000 tokens (256K total, 16K max output).
- **Modalities:** text, image in; text out; native tool calling, structured JSON output.
- **Pricing (as of 2026-09-25):** $0.80 / 1M input ($0.20 cached), $3.20 / 1M output.
- **Architecture:** Proprietary sparse MoE foundation model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **49.5%** (Artificial Analysis / OpenAI Evaluation)
- Tau3-Banking / Tau2-Bench: **71.2%** (Tau-Bench standard harness)
- GDPval-AA: **1290 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **75.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.2%**

Reasoning / knowledge:

- GPQA Diamond: **76.5%** (0-shot CoT)
- HLE: **37.8%** (Humanity's Last Exam)
- LCR / MLCR: **84.0%**
- CritPt: **73.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **77 / #15**
- Omniscience Accuracy / Hallucination Rate: **88.0% / 6.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **53.6%** (SWE-bench Verified)
- LiveCodeBench: **59.2%** (Pass@1, 2024-2025 problems)
- SciCode / AA-SciCode: **42.0%**
- Vibe Code Bench: **74.0%**
- DeepSWE / Coding Index / other: **71.5**

Long context:

- MRCR / RULER: **97.8%** retrieval fidelity across 256k tokens.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong function-calling reliability and multi-turn error recovery; robust tool calling in complex agent loops.
- **Reasoning: 86/100.** 76.5% GPQA Diamond and solid HLE score provide reliable analytical reasoning for enterprise workflows.
- **Context window: 88/100.** 256K context window with high recall accuracy and low degradation on needle retrieval.
- **Multimodal: 80/100.** High-fidelity document and visual chart reasoning; text and image inputs supported.
- **Coding: 83/100.** 53.6% SWE-bench Verified and 59.2% LiveCodeBench deliver dependable code refactoring and bug fixing.
- **Cost efficiency: 82/100.** Competitive $0.80 / 1M in and $3.20 / 1M out pricing for a high-efficiency frontier architecture.
- **Overall Score: 84/100.** Mean of the five non-cost dims (85+86+88+80+83)/5 = 84.4 → 84. Well-rounded production model for cost-effective agentic coding and automation pipelines.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
