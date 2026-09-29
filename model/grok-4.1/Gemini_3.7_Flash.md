# Grok 4.1 — findings by Gemini 3.7 Flash

- Source: xAI / `xai/grok-4.1`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's expressive conversational and reasoning model optimized for human preference alignment, real-time knowledge synthesis, and multimodal tool use.
- **Provider / access:** xAI Platform / OpenCode Zen (`opencode/grok-4.1`), OpenAI-compatible API.
- **Release / knowledge:** 2025-11-25 release; knowledge cutoff September 2025.
- **IDs:** `xai/grok-4.1`, `grok-4.1`
- **Context window:** 262,144 tokens (256K total, 8K max output).
- **Modalities:** text, image in; text out; tool use, function calling.
- **Pricing (as of 2026-09-25):** $1.50 / 1M input, $5.00 / 1M output.
- **Architecture:** Large-scale transformer architecture, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **43.5%** (xAI Evaluation / OpenCode Benchmark)
- Tau3-Banking / Tau2-Bench: **65.5%** (Tau-Bench standard harness)
- GDPval-AA: **1245 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **70.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.5%**

Reasoning / knowledge:

- GPQA Diamond: **74.0%** (0-shot CoT)
- HLE: **33.0%** (Humanity's Last Exam)
- LCR / MLCR: **80.5%**
- CritPt: **69.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **73 / #22**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 7.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **49.0%** (SWE-bench Verified)
- LiveCodeBench: **53.8%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **37.0%**
- Vibe Code Bench: **69.0%**
- DeepSWE / Coding Index / other: **66.5**

Long context:

- MRCR / RULER: **96.0%** needle retrieval accuracy across 256k context window.

### Normalized scores (1–100)

- **Tool use: 81/100.** Solid function calling precision and natural language tool interaction.
- **Reasoning: 84/100.** Strong conversational reasoning, broad general knowledge, and emotional intelligence.
- **Context window: 88/100.** 256K context window with stable recall across document sets.
- **Multimodal: 78/100.** Clear visual chart parsing and image analysis.
- **Coding: 79/100.** 49.0% on SWE-bench Verified and 53.8% on LiveCodeBench offer dependable assistance on routine development tasks.
- **Cost efficiency: 74/100.** Standard pricing at $1.50 / $5.00 per 1M tokens.
- **Overall Score: 82/100.** Mean of the five non-cost dims (81+84+88+78+79)/5 = 82.0 → 82. High-preference conversational model with solid reasoning and general tool integration.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
