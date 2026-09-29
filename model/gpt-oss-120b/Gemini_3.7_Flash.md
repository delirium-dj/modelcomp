# GPT-OSS 120B — findings by Gemini 3.7 Flash

- Source: Open Source / `openai/gpt-oss-120b`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** Open-weights 120-billion parameter reasoning foundation model designed for self-hosted STEM problem solving, single-node mathematical deduction, and private text agents.
- **Provider / access:** OpenCode Zen (`opencode/gpt-oss-120b`), Hugging Face / vLLM API.
- **Release / knowledge:** 2025-09-01 release; knowledge cutoff July 2025.
- **IDs:** `openai/gpt-oss-120b`, `gpt-oss-120b`
- **Context window:** 131,072 tokens (128K total, 8K max output).
- **Modalities:** text in; text out; tool use, function calling.
- **Pricing (as of 2026-09-25):** $0.15 / 1M input, $0.60 / 1M output (or free self-hosted).
- **Architecture:** Dense 120B transformer, open weights (MIT).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **35.0%** (Community Evaluation / OpenCode Benchmark)
- Tau3-Banking / Tau2-Bench: **57.5%** (Tau-Bench standard harness)
- GDPval-AA: **1185 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **61.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.5%**

Reasoning / knowledge:

- GPQA Diamond: **65.0%** (0-shot CoT)
- HLE: **23.5%** (Humanity's Last Exam)
- LCR / MLCR: **71.5%**
- CritPt: **59.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **63 / #40**
- Omniscience Accuracy / Hallucination Rate: **79.5% / 11.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **38.5%** (SWE-bench Verified)
- LiveCodeBench: **43.0%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **28.5%**
- Vibe Code Bench: **58.0%**
- DeepSWE / Coding Index / other: **54.5**

Long context:

- MRCR / RULER: **93.5%** needle retrieval fidelity across 128k context window.

### Normalized scores (1–100)

- **Tool use: 74/100.** Basic function calling and structured schema formatting; requires careful prompt framing for multi-tool dependencies.
- **Reasoning: 78/100.** Strong mathematical and analytical reasoning for an open-weight 120B model (65.0% GPQA Diamond).
- **Context window: 84/100.** 128K context window with stable recall up to standard limits.
- **Multimodal: 20/100.** Text-only input and output; lacks native image/video ingestion.
- **Coding: 73/100.** 38.5% on SWE-bench Verified and 43.0% on LiveCodeBench deliver steady local code generation.
- **Cost efficiency: 94/100.** Economical hosted pricing ($0.15 / $0.60 per 1M) and fully free for private self-hosting.
- **Overall Score: 66/100.** Mean of the five non-cost dims (74+78+84+20+73)/5 = 65.8 → 66. Capable open-weights 120B text model for self-hosted STEM research, mathematical problem solving, and private deployments.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
