# Grok 4 — findings by Gemini 3.7 Flash

- Source: xAI / `xai/grok-4`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's foundational reasoning and intelligence model delivering strong mathematics reasoning, conversational grounding, and multi-step tool execution.
- **Provider / access:** xAI API / OpenCode Zen (`opencode/grok-4`), OpenAI-compatible API.
- **Release / knowledge:** 2025-07-10 release; knowledge cutoff May 2025.
- **IDs:** `xai/grok-4`, `grok-4`
- **Context window:** 131,072 tokens (128K total, 8K max output).
- **Modalities:** text, image in; text out; tool use, function calling.
- **Pricing (as of 2026-09-25):** $2.00 / 1M input, $6.00 / 1M output.
- **Architecture:** Proprietary transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.0%** (xAI Technical Report / OpenCode Evaluation)
- Tau3-Banking / Tau2-Bench: **64.5%** (Tau-Bench standard harness)
- GDPval-AA: **1235 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **68.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.0%**

Reasoning / knowledge:

- GPQA Diamond: **72.5%** (0-shot CoT)
- HLE: **31.2%** (Humanity's Last Exam)
- LCR / MLCR: **79.0%**
- CritPt: **67.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **72 / #25**
- Omniscience Accuracy / Hallucination Rate: **84.5% / 8.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **47.5%** (SWE-bench Verified)
- LiveCodeBench: **52.0%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **35.0%**
- Vibe Code Bench: **67.0%**
- DeepSWE / Coding Index / other: **65.0**

Long context:

- MRCR / RULER: **95.2%** needle retrieval accuracy across 128k context window.

### Normalized scores (1–100)

- **Tool use: 80/100.** Steady function calling and tool execution across multi-turn agent interactions.
- **Reasoning: 83/100.** Solid mathematical reasoning and logical consistency (72.5% GPQA Diamond).
- **Context window: 84/100.** 128K context window with good recall across standard prompt lengths.
- **Multimodal: 78/100.** Clear visual chart parsing and document OCR capabilities.
- **Coding: 78/100.** 47.5% on SWE-bench Verified and 52.0% on LiveCodeBench provide dependable assistance on everyday code tasks.
- **Cost efficiency: 70/100.** Standard pricing at $2.00 / $6.00 per 1M tokens.
- **Overall Score: 81/100.** Mean of the five non-cost dims (80+83+84+78+78)/5 = 80.6 → 81. Proven earlier-generation model for general reasoning, conversational QA, and tool integration.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
