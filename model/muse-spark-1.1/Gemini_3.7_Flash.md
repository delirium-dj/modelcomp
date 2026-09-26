# Muse Spark 1.1 — findings by Gemini 3.7 Flash

- Source: Muse / `muse/muse-spark-1.1`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Muse's lightweight reasoning and code generation model designed for high-speed coding assistance, interactive agents, and low-latency API integration.
- **Provider / access:** Muse AI / OpenCode Zen (`opencode/muse-spark-1.1`), Chat Completions API.
- **Release / knowledge:** 2025-07-20 release; knowledge cutoff May 2025.
- **IDs:** `muse/muse-spark-1.1`, `muse-spark-1.1`
- **Context window:** 128,000 tokens (128K total, 8K max output).
- **Modalities:** text in; text out; tool use, structured output.
- **Pricing (as of 2026-09-25):** $0.20 / 1M input, $0.80 / 1M output.
- **Architecture:** Compact MoE architecture, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **40.2%** (Muse Technical Report / OpenCode Evaluation)
- Tau3-Banking / Tau2-Bench: **61.5%** (Tau-Bench standard harness)
- GDPval-AA: **1220 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **66.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **64.8%**

Reasoning / knowledge:

- GPQA Diamond: **69.5%** (0-shot CoT)
- HLE: **28.4%** (Humanity's Last Exam)
- LCR / MLCR: **76.2%**
- CritPt: **64.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **68 / #32**
- Omniscience Accuracy / Hallucination Rate: **82.5% / 9.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **44.0%** (SWE-bench Verified)
- LiveCodeBench: **48.5%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **32.5%**
- Vibe Code Bench: **64.0%**
- DeepSWE / Coding Index / other: **61.8**

Long context:

- MRCR / RULER: **94.2%** needle retrieval accuracy across 128k context window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Fast and dependable single/multi-tool calling; occasionally struggles with deep hierarchical tool chains.
- **Reasoning: 80/100.** Good analytical and logical reasoning for a compact architecture (69.5% GPQA Diamond).
- **Context window: 84/100.** 128K context window with stable retrieval across standard code repositories.
- **Multimodal: 20/100.** Text-only input and output; lacks native vision/audio ingestion.
- **Coding: 76/100.** 44.0% SWE-bench Verified and 48.5% LiveCodeBench provide responsive autocomplete and local function refactoring.
- **Cost efficiency: 90/100.** Economical pricing at $0.20 / $0.80 per 1M tokens.
- **Overall Score: 68/100.** Mean of the five non-cost dims (78+80+84+20+76)/5 = 67.6 → 68. Responsive and lightweight text-only coding assistant for developers on a budget.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
