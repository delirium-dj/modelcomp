# LongCat 2.5 Preview — findings by Gemini 3.7 Flash

- Source: Meituan / `meituan/longcat-2.5-preview`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's ultra-long-context foundation model optimized for million-token codebase retrieval, complex multi-document reasoning, and agentic workflows.
- **Provider / access:** Meituan AI Platform / OpenCode Zen (`opencode/longcat_2.5_preview`), Chat Completions API.
- **Release / knowledge:** 2026-02-28 release; knowledge cutoff December 2025.
- **IDs:** `meituan/longcat-2.5-preview`, `opencode/longcat_2.5_preview`
- **Context window:** 2,000,000 tokens (2M input / 32K max output).
- **Modalities:** text in; text out; native tool calling, structured JSON output.
- **Pricing (as of 2026-09-25):** $0.35 / 1M input ($0.0875 cached), $1.40 / 1M output.
- **Architecture:** Long-context Mixture of Experts (MoE), open weights / commercial API.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **43.5%** (Meituan Research / OpenCode Evaluation)
- Tau3-Banking / Tau2-Bench: **65.2%** (Tau-Bench standard harness)
- GDPval-AA: **1250 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **70.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.0%**

Reasoning / knowledge:

- GPQA Diamond: **73.0%** (0-shot CoT)
- HLE: **32.5%** (Humanity's Last Exam)
- LCR / MLCR: **81.2%**
- CritPt: **69.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **73 / #22**
- Omniscience Accuracy / Hallucination Rate: **85.5% / 8.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.5%** (SWE-bench Verified)
- LiveCodeBench: **53.0%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **36.5%**
- Vibe Code Bench: **68.5%**
- DeepSWE / Coding Index / other: **66.0**

Long context:

- MRCR / RULER: **98.4%** retrieval accuracy across 2M token context window.

### Normalized scores (1–100)

- **Tool use: 81/100.** Reliable tool calling and multi-step execution; handles API schema validation well across long conversational context.
- **Reasoning: 83/100.** Strong deductive and mathematical reasoning capabilities (73.0% GPQA Diamond).
- **Context window: 98/100.** Exceptional 2M context window with 98.4% long-context needle recall fidelity across multi-document repositories.
- **Multimodal: 20/100.** Text-only input and output; lacks native image/video processing.
- **Coding: 79/100.** 48.5% on SWE-bench Verified and 53.0% on LiveCodeBench demonstrate reliable multi-file repository navigation and code modification.
- **Cost efficiency: 90/100.** Highly affordable long-context pricing at $0.35 / $1.40 per 1M tokens.
- **Overall Score: 72/100.** Mean of the five non-cost dims (81+83+98+20+79)/5 = 72.2 → 72. Exceptional 2M long-context text model for massive codebase search, large-scale document synthesis, and cost-effective text analysis.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
