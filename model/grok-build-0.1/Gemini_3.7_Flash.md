# Grok Build 0.1 — findings by Gemini 3.7 Flash

- Source: xAI / `xai/grok-build-0.1`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's specialized build and software engineering agent model designed for fast code compilation, terminal test execution, and CI/CD script automation.
- **Provider / access:** xAI Platform / OpenCode Zen (`opencode/grok-build-0.1`), OpenAI-compatible API.
- **Release / knowledge:** 2026-02-01 release; knowledge cutoff December 2025.
- **IDs:** `xai/grok-build-0.1`, `grok-build-0.1`
- **Context window:** 262,144 tokens (256K total, 16K max output).
- **Modalities:** text in; text out; tool use, terminal function calling.
- **Pricing (as of 2026-09-25):** $0.30 / 1M input, $1.20 / 1M output.
- **Architecture:** Specialized code MoE, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.5%** (xAI Technical Evaluation)
- Tau3-Banking / Tau2-Bench: **63.5%** (Tau-Bench standard harness)
- GDPval-AA: **1220 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **68.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.0%**

Reasoning / knowledge:

- GPQA Diamond: **68.5%** (0-shot CoT)
- HLE: **28.0%** (Humanity's Last Exam)
- LCR / MLCR: **76.0%**
- CritPt: **64.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **68 / #33**
- Omniscience Accuracy / Hallucination Rate: **82.5% / 9.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.0%** (SWE-bench Verified)
- LiveCodeBench: **52.5%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **36.0%**
- Vibe Code Bench: **68.0%**
- DeepSWE / Coding Index / other: **65.5**

Long context:

- MRCR / RULER: **95.5%** retrieval accuracy across 256k context window.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong terminal command generation and tool dispatch in developer automation loops.
- **Reasoning: 80/100.** Good programming logic and build-system reasoning (68.5% GPQA Diamond).
- **Context window: 88/100.** 256K context window with stable recall across build configurations and repo logs.
- **Multimodal: 20/100.** Text-only input and output; lacks native image/video ingestion.
- **Coding: 80/100.** 48.0% SWE-bench Verified and 52.5% LiveCodeBench deliver steady code generation and build debugging.
- **Cost efficiency: 90/100.** Economical pricing at $0.30 / $1.20 per 1M tokens.
- **Overall Score: 70/100.** Mean of the five non-cost dims (80+80+88+20+80)/5 = 69.6 → 70. Fast, cost-effective text-only coding assistant for CI/CD scripting, build debugging, and terminal automation.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
