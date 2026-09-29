# Laguna XS 2.1 — findings by Gemini 3.7 Flash

- Source: OpenMDW / `openmdw/laguna-xs-2.1`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Ultra-compact 3B-active parameter open-weights coding agent model designed for fast on-device inference, local code editing, and low-latency speculative decoding.
- **Provider / access:** OpenMDW / OpenCode Zen (`opencode/laguna-xs-2.1`), Hugging Face / local vLLM.
- **Release / knowledge:** 2026-07-25 release; knowledge cutoff May 2026.
- **IDs:** `openmdw/laguna-xs-2.1`, `laguna-xs-2.1`
- **Context window:** 262,144 tokens (256K total, 32K max output).
- **Modalities:** text in; text out; tool use, function calling.
- **Pricing (as of 2026-09-25):** $0.05 / 1M input, $0.20 / 1M output (or free self-hosted under OpenMDW-1.1).
- **Architecture:** Compact MoE (3B active parameters), open weights (OpenMDW-1.1).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **37.5%** (OpenMDW Technical Report)
- Tau3-Banking / Tau2-Bench: **55.0%** (Tau-Bench standard harness)
- GDPval-AA: **1170 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **59.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **58.0%**

Reasoning / knowledge:

- GPQA Diamond: **58.0%** (0-shot CoT)
- HLE: **18.5%** (Humanity's Last Exam)
- LCR / MLCR: **66.0%**
- CritPt: **54.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #48**
- Omniscience Accuracy / Hallucination Rate: **75.0% / 13.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **46.0%** (SWE-bench Verified)
- LiveCodeBench: **49.5%** (Pass@1, 2024-2026 set)
- SciCode / AA-SciCode: **31.0%**
- Vibe Code Bench: **64.0%**
- DeepSWE / Coding Index / other: **59.5**

Long context:

- MRCR / RULER: **92.5%** needle retrieval fidelity across 256k context window.

### Normalized scores (1–100)

- **Tool use: 74/100.** Capable local single/multi-tool execution; requires structured function prompts.
- **Reasoning: 72/100.** Solid programming-oriented logic and basic mathematical deduction for a 3B active model.
- **Context window: 88/100.** 256K context window with good recall across local repository files.
- **Multimodal: 20/100.** Text-only input and output; lacks native image/video perception.
- **Coding: 77/100.** 46.0% on SWE-bench Verified and 49.5% on LiveCodeBench deliver impressive local code fixing for 3B active params.
- **Cost efficiency: 98/100.** Ultra-cheap hosted pricing ($0.05 / $0.20 per 1M) and fully free for on-device deployment.
- **Overall Score: 66/100.** Mean of the five non-cost dims (74+72+88+20+77)/5 = 66.2 → 66. Ultra-lightweight open-weights coder for on-device Mac/laptop execution, local code refactoring, and privacy-first developer agents.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
